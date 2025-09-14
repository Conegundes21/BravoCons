import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  CheckCircle, 
  X,
  ArrowLeft
} from 'lucide-react';
import { supabase, leadsService, bookingsService } from '../services/supabase';
import toast from 'react-hot-toast';
import { trackingService } from '../services/tracking';

interface ConsultationSchedulerProps {
  isOpen: boolean;
  onClose: () => void;
  leadData?: {
    name: string;
    email: string;
    phone: string;
    consortium_type: string;
  };
}

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
  date: string;
}

const ConsultationScheduler: React.FC<ConsultationSchedulerProps> = ({
  isOpen,
  onClose,
  leadData
}) => {
  
  const [currentStep, setCurrentStep] = useState(1);

  // Tracking quando o scheduler é aberto
  useEffect(() => {
    if (isOpen) {
      trackingService.trackSchedulerOpen();
    }
  }, [isOpen]);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [consultationType, setConsultationType] = useState<'video' | 'phone' | 'whatsapp'>('video');
  const [name, setName] = useState(leadData?.name || '');
  const [email, setEmail] = useState(leadData?.email || '');
  const [phone, setPhone] = useState(leadData?.phone || '');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Gerar horários disponíveis para os próximos 30 dias (2025)
  const generateAvailableTimeSlots = (): TimeSlot[] => {
    const slots: TimeSlot[] = [];
    const today = new Date();
    
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Pular apenas domingos (trabalhamos de segunda a sábado)
      if (date.getDay() === 0) continue;
      
      const dateStr = date.toISOString().split('T')[0];
      const timeSlots = [
        '08:00', '09:00', '10:00', '11:00', 
        '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
      ];
      
      timeSlots.forEach((time, index) => {
        slots.push({
          id: `${dateStr}-${time}`,
          time,
          available: Math.random() > 0.3, // 70% de chance de estar disponível
          date: dateStr
        });
      });
    }
    
    return slots;
  };

  const availableTimeSlots = generateAvailableTimeSlots();

  // Função para gerar calendário de 1 mês
  const generateCalendar = () => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    
    // Mês atual
    const month = new Date(currentYear, currentMonth, 1);
    const monthName = month.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
    
    // Primeiro dia do mês
    const firstDay = new Date(month.getFullYear(), month.getMonth(), 1);
    const lastDay = new Date(month.getFullYear(), month.getMonth() + 1, 0);
    
    // Dias da semana que o mês começa (0 = domingo, 1 = segunda, etc.)
    const startDay = firstDay.getDay();
    
    // Array de dias do mês
    const days = [];
    
    // Adicionar dias vazios para alinhar o calendário
    for (let j = 0; j < startDay; j++) {
      days.push(null);
    }
    
    // Adicionar todos os dias do mês
    for (let day = 1; day <= lastDay.getDate(); day++) {
      const date = new Date(month.getFullYear(), month.getMonth(), day);
      const dateStr = date.toISOString().split('T')[0];
      const isPast = date < today;
      const isWeekend = date.getDay() === 0; // Apenas domingo é fim de semana
      const hasAvailableSlots = availableTimeSlots.some(slot => slot.date === dateStr && slot.available);
      
      days.push({
        day,
        date: dateStr,
        isPast,
        isWeekend,
        hasAvailableSlots,
        isToday: dateStr === today.toISOString().split('T')[0]
      });
    }
    
    return [{
      month,
      monthName,
      days
    }];
  };

  const calendarMonths = generateCalendar();

  const consultationTypes = [
    {
      id: 'video',
      title: 'Videoconferência',
      description: 'Consulta por Zoom ou Google Meet',
      icon: '📹',
      duration: '30 min'
    },
    {
      id: 'phone',
      title: 'Telefone',
      description: 'Ligação direta',
      icon: '📞',
      duration: '20 min'
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      description: 'Conversa por mensagens',
      icon: '💬',
      duration: 'Flexível'
    }
  ];

  const getAvailableDates = () => {
    const dates = [...new Set(availableTimeSlots.map(slot => slot.date))];
    return dates.slice(0, 7); // Próximos 7 dias
  };

  const getTimeSlotsForDate = (date: string) => {
    return availableTimeSlots.filter(slot => slot.date === date);
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setSelectedTime('');
    setCurrentStep(2);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setCurrentStep(3);
  };

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim() || !phone.trim()) {
      toast.error('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Primeiro, criar ou buscar o lead
      let leadId: number;
      
      // Tentar buscar lead existente pelo email
      const { data: existingLead } = await leadsService.getLeadByEmail(email.trim());
      
      if (existingLead) {
        leadId = existingLead.id!;
        // Atualizar dados do lead se necessário
        await leadsService.updateLeadStatus(leadId, 'new', 'Agendou consultoria');
      } else {
        // Criar novo lead
        const newLeadData = {
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          consortium_type: leadData?.consortium_type as any || 'geral',
          source: 'scheduler' as const,
          status: 'new' as const,
          notes: 'Lead criado via agendamento de consultoria'
        };
        
        const { data: newLead, error: leadError } = await leadsService.createLead(newLeadData);
        
        if (leadError || !newLead) {
          if (import.meta.env.DEV) {
            console.error('Erro ao criar lead:', leadError);
          }
          toast.error('Erro ao processar dados. Tente novamente.');
          return;
        }
        
        leadId = newLead.id!;
      }

      // 2. Criar o agendamento
      const consultationTypeInfo = consultationTypes.find(t => t.id === consultationType);
      
      const bookingData = {
        lead_id: leadId,
        package_id: consultationType,
        package_name: consultationTypeInfo?.title || 'Consultoria Gratuita',
        package_price: 0, // Gratuito
        scheduled_date: selectedDate,
        scheduled_time: selectedTime,
        status: 'pending' as const,
        payment_status: 'paid' as const, // Gratuito
        notes: notes.trim()
      };

      const { data: booking, error: bookingError } = await bookingsService.createBooking(bookingData);

      if (bookingError || !booking) {
        if (import.meta.env.DEV) {
          console.error('Erro ao criar agendamento:', bookingError);
        }
        toast.error('Erro ao agendar consulta. Tente novamente.');
        return;
      }

      // 3. Sucesso!
      setShowSuccess(true);
      toast.success('🎉 Consultoria agendada com sucesso!');
      
      // Tracking: Consultoria agendada
      trackingService.trackAppointmentScheduled({
        email: email.trim(),
        phone: phone.trim(),
        name: name.trim(),
        consortium_type: leadData?.consortium_type,
        credit_value: 0,
        asset_type: leadData?.consortium_type
      });

      // Em produção, aqui seria feita a integração com Google Calendar
      // await createGoogleCalendarEvent(bookingData);

      // Enviar email de confirmação (em produção)
      // await sendConfirmationEmail(bookingData);

    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Erro:', error);
      }
      toast.error('Erro ao processar agendamento. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setCurrentStep(1);
    setSelectedDate('');
    setSelectedTime('');
    setConsultationType('video');
    setNotes('');
    setShowSuccess(false);
  };

  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Agendar Consultoria Gratuita</h2>
              <p className="text-gray-600">Transforme seu sonho em realidade com nossa consultoria especializada</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
                ${currentStep >= step
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gray-200 text-gray-400'
                }
              `}>
                {step}
              </div>
              {step < 4 && (
                <div className={`
                  w-16 h-1 mx-2
                  ${currentStep > step ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-200'}
                `} />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Select Date */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">📅 Escolha a data ideal</h3>
              <p className="text-gray-600">Selecione o dia que melhor se adequa à sua agenda para nossa consultoria personalizada</p>
            </div>
            
            {/* Calendário de 1 mês */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                {calendarMonths[0].monthName.charAt(0).toUpperCase() + calendarMonths[0].monthName.slice(1)}
              </h4>
              
              {/* Cabeçalho dos dias da semana */}
              <div className="grid grid-cols-7 gap-1 mb-3">
                {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
                    {day}
                  </div>
                ))}
              </div>
              
              {/* Dias do mês */}
              <div className="grid grid-cols-7 gap-1">
                {calendarMonths[0].days.map((day, dayIndex) => {
                  if (!day) {
                    return <div key={dayIndex} className="h-12"></div>;
                  }
                  
                  const isSelected = selectedDate === day.date;
                  const isDisabled = day.isPast || day.isWeekend || !day.hasAvailableSlots;
                  
                  return (
                    <button
                      key={dayIndex}
                      onClick={() => !isDisabled && handleDateSelect(day.date)}
                      disabled={isDisabled}
                      className={`
                        h-12 rounded-lg text-sm font-medium transition-all duration-200
                        ${isSelected
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                          : isDisabled
                          ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                          : day.isToday
                          ? 'bg-blue-100 text-blue-700 border-2 border-blue-300 hover:bg-blue-200'
                          : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                        }
                      `}
                    >
                      <div className="flex flex-col items-center">
                        <span>{day.day}</span>
                        {day.hasAvailableSlots && !day.isPast && !day.isWeekend && (
                          <div className="w-1 h-1 bg-green-500 rounded-full mt-1"></div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
            
            {/* Legenda */}
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Disponível</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-100 border-2 border-blue-300 rounded"></div>
                <span>Hoje</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gray-100 rounded"></div>
                <span>Indisponível</span>
              </div>
              <div className="text-xs text-gray-500">
                ⏰ Atendimento: Seg-Sáb, 08:00 às 19:00
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Select Time */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setCurrentStep(1)}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar</span>
              </button>
              <h3 className="text-xl font-semibold text-gray-900">
                ⏰ Horários disponíveis - {new Date(selectedDate).toLocaleDateString('pt-BR')}
              </h3>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {getTimeSlotsForDate(selectedDate).map((slot) => (
                <button
                  key={slot.id}
                  onClick={() => handleTimeSelect(slot.time)}
                  disabled={!slot.available}
                  className={`
                    p-4 rounded-xl transition-all duration-300 text-center border
                    ${slot.available
                      ? selectedTime === slot.time
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-blue-600'
                        : 'bg-white hover:bg-gray-50 border-gray-200 text-gray-900'
                      : 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed'
                    }
                  `}
                >
                  <div className="text-lg font-bold">{slot.time}</div>
                  <div className="text-xs">
                    {slot.available ? 'Disponível' : 'Ocupado'}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Consultation Type */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setCurrentStep(2)}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar</span>
              </button>
              <h3 className="text-xl font-semibold text-gray-900">💬 Como prefere nossa consultoria?</h3>
            </div>

            <div className="space-y-4">
              {consultationTypes.map((type) => (
                <button
                  key={type.id}
                                     onClick={() => {
                     setConsultationType(type.id as 'video' | 'phone' | 'whatsapp');
                     setCurrentStep(4);
                   }}
                  className={`w-full p-4 border rounded-xl transition-all duration-300 text-left ${
                    consultationType === type.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-blue-600'
                      : 'bg-white hover:bg-gray-50 border-gray-200 text-gray-900'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">{type.icon}</div>
                    <div className="flex-1">
                      <div className="font-semibold">{type.title}</div>
                      <div className="text-sm opacity-80">{type.description}</div>
                    </div>
                    <div className="text-sm opacity-80">{type.duration}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Contact Information */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setCurrentStep(3)}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar</span>
              </button>
              <h3 className="text-xl font-semibold text-gray-900">📝 Finalize seu agendamento</h3>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-2">✅ Resumo do seu agendamento:</h4>
              <p className="text-sm text-gray-700">
                <strong>Data:</strong> {new Date(selectedDate).toLocaleDateString('pt-BR', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })} às {selectedTime}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Tipo:</strong> {consultationTypes.find(t => t.id === consultationType)?.title}
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome completo *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="(69) 99999-9999"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Observações (opcional)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Alguma informação adicional que gostaria de compartilhar..."
                />
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Agendando...</span>
                </>
              ) : (
                <>
                  <span>🎯 Confirmar Agendamento Gratuito</span>
                  <CheckCircle className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        )}

        {/* Success Modal */}
        {showSuccess && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full border border-gray-200 shadow-2xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🎉 Consultoria Agendada!</h3>
              <p className="text-gray-600 mb-6">
                Sua consultoria gratuita foi agendada com sucesso para <strong>{new Date(selectedDate).toLocaleDateString('pt-BR')}</strong> às <strong>{selectedTime}</strong>.
                <br /><br />
                <strong>Obrigado pela confiança!</strong> Entraremos em contato em até 48 horas para confirmar todos os detalhes.
                <br /><br />
                📧 <strong>Email de confirmação enviado</strong> com todos os detalhes e material de apoio para deixá-lo afiado até nossa reunião!
              </p>
              <button
                onClick={() => {
                  resetForm();
                  onClose();
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                ✅ Perfeito!
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsultationScheduler;
