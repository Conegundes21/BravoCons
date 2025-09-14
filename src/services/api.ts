// Configuração da API
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

// Tipos de dados
export interface Lead {
  id?: string;
  name: string;
  email: string;
  phone: string;
  vehicleType?: string;
  vehicleValue?: string;
  monthlyPayment?: string;
  hasDownPayment?: string;
  priority?: string;
  source: 'quiz' | 'calculator' | 'scheduler' | 'contact';
  createdAt?: Date;
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';
  notes?: string;
}

export interface ConsultationBooking {
  id?: string;
  leadId: string;
  packageId: string;
  packageName: string;
  packagePrice: number;
  scheduledDate: string;
  scheduledTime: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  paymentStatus: 'pending' | 'paid' | 'refunded';
  createdAt?: Date;
}

export interface QuizResult {
  leadId: string;
  answers: Record<string, string>;
  recommendation: {
    creditValue: string;
    strategy: string;
    timeline: string;
    proposal: string;
    benefits: string[];
    nextSteps: string[];
  };
  createdAt?: Date;
}

// Classe principal da API
class ApiService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  // Método genérico para fazer requisições
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const defaultOptions: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    };

    const config = { ...defaultOptions, ...options };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('API request failed:', error);
      }
      throw error;
    }
  }

  // Métodos para Leads
  async createLead(lead: Omit<Lead, 'id' | 'createdAt'>): Promise<Lead> {
    return this.request<Lead>('/leads', {
      method: 'POST',
      body: JSON.stringify(lead),
    });
  }

  async getLeads(): Promise<Lead[]> {
    return this.request<Lead[]>('/leads');
  }

  async getLead(id: string): Promise<Lead> {
    return this.request<Lead>(`/leads/${id}`);
  }

  async updateLead(id: string, updates: Partial<Lead>): Promise<Lead> {
    return this.request<Lead>(`/leads/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  async deleteLead(id: string): Promise<void> {
    return this.request<void>(`/leads/${id}`, {
      method: 'DELETE',
    });
  }

  // Métodos para Agendamentos
  async createBooking(booking: Omit<ConsultationBooking, 'id' | 'createdAt'>): Promise<ConsultationBooking> {
    return this.request<ConsultationBooking>('/bookings', {
      method: 'POST',
      body: JSON.stringify(booking),
    });
  }

  async getBookings(): Promise<ConsultationBooking[]> {
    return this.request<ConsultationBooking[]>('/bookings');
  }

  async updateBooking(id: string, updates: Partial<ConsultationBooking>): Promise<ConsultationBooking> {
    return this.request<ConsultationBooking>(`/bookings/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  // Métodos para Resultados do Quiz
  async saveQuizResult(result: Omit<QuizResult, 'createdAt'>): Promise<QuizResult> {
    return this.request<QuizResult>('/quiz-results', {
      method: 'POST',
      body: JSON.stringify(result),
    });
  }

  async getQuizResults(leadId: string): Promise<QuizResult[]> {
    return this.request<QuizResult[]>(`/quiz-results?leadId=${leadId}`);
  }

  // Métodos para Analytics
  async getAnalytics(): Promise<{
    totalLeads: number;
    conversionRate: number;
    averageResponseTime: number;
    topSources: Array<{ source: string; count: number }>;
  }> {
    return this.request('/analytics');
  }

  // Método para enviar e-mail
  async sendEmail(to: string, subject: string, template: string, data: Record<string, any>): Promise<void> {
    return this.request('/email', {
      method: 'POST',
      body: JSON.stringify({ to, subject, template, data }),
    });
  }

  // Método para notificação WhatsApp
  async sendWhatsAppMessage(phone: string, message: string): Promise<void> {
    return this.request('/whatsapp', {
      method: 'POST',
      body: JSON.stringify({ phone, message }),
    });
  }
}

// Instância global da API
export const api = new ApiService(API_BASE_URL);

// Hooks personalizados para React (opcional)
export const useApi = () => {
  return {
    createLead: api.createLead.bind(api),
    getLeads: api.getLeads.bind(api),
    updateLead: api.updateLead.bind(api),
    createBooking: api.createBooking.bind(api),
    saveQuizResult: api.saveQuizResult.bind(api),
    sendEmail: api.sendEmail.bind(api),
    sendWhatsAppMessage: api.sendWhatsAppMessage.bind(api),
  };
};

// Utilitários para validação
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
  return phoneRegex.test(phone);
};

export const formatPhone = (phone: string): string => {
  // Remove tudo que não é número
  const numbers = phone.replace(/\D/g, '');
  
  // Formata como (XX) XXXXX-XXXX
  if (numbers.length === 11) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
  }
  
  return phone;
};

// Templates de e-mail
export const emailTemplates = {
  welcome: {
    subject: 'Bem-vindo à Bravo Consórcios!',
    template: 'welcome',
  },
  quizResult: {
    subject: 'Sua análise personalizada está pronta!',
    template: 'quiz-result',
  },
  bookingConfirmation: {
    subject: 'Confirmação de agendamento',
    template: 'booking-confirmation',
  },
  reminder: {
    subject: 'Lembrete: Sua consultoria está chegando',
    template: 'reminder',
  },
};

// Templates de mensagens WhatsApp
export const whatsappTemplates = {
  welcome: (name: string) => 
    `Olá ${name}! 👋\n\nObrigado por se interessar pelos nossos serviços de consórcio.\n\nEm breve nossa equipe entrará em contato para uma análise personalizada.\n\nAtenciosamente,\nEquipe Bravo Consórcios`,
  
  quizResult: (name: string, recommendation: any) =>
    `Olá ${name}! 🎯\n\nSua análise personalizada está pronta!\n\n💰 Proposta: ${recommendation.proposal}\n⏰ Tempo estimado: ${recommendation.timeline}\n\nAguarde nosso contato para mais detalhes.\n\nBravo Consórcios`,
  
  bookingConfirmation: (name: string, booking: any) =>
    `Olá ${name}! ✅\n\nSeu agendamento foi confirmado:\n\n📅 Data: ${new Date(booking.scheduledDate).toLocaleDateString('pt-BR')}\n🕐 Horário: ${booking.scheduledTime}\n📦 Pacote: ${booking.packageName}\n\nAguardamos você!\n\nBravo Consórcios`,
};
