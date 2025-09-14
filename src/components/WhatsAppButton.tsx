import React from 'react';
import { MessageCircle } from 'lucide-react';
import { trackingService } from '../services/tracking';

const WhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    // Tracking do clique no WhatsApp
    trackingService.trackAnalyticsEvent('whatsapp_click', {
      event_category: 'Contact',
      event_label: 'WhatsApp Button Click',
      custom_parameter_1: 'WhatsApp',
      custom_parameter_2: 'Contact',
      custom_parameter_3: 'External Link'
    });

    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre o Consórcio Inteligente e como posso conquistar meu veículo dos sonhos.");
    const phoneNumber = "5569999999999"; // Replace with actual WhatsApp number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-20 left-6 z-40 w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/25 transition-all duration-300 transform hover:scale-110 animate-pulse hover:animate-none"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </button>
  );
};

export default WhatsAppButton;