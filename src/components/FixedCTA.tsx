import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { trackingService } from '../services/tracking';

interface FixedCTAProps {
  onOpenQuiz: () => void;
}

const FixedCTA: React.FC<FixedCTAProps> = ({ onOpenQuiz }) => {
  const handleQuizClick = (location: 'desktop' | 'mobile') => {
    // Tracking do clique no CTA fixo
    trackingService.trackAnalyticsEvent('cta_click', {
      event_category: 'CTA',
      event_label: `Fixed CTA - ${location === 'desktop' ? 'Desktop' : 'Mobile'}`,
      custom_parameter_1: 'Fixed CTA',
      custom_parameter_2: location,
      custom_parameter_3: 'Quiz Start'
    });
    
    onOpenQuiz();
  };

  return (
    <>
      {/* Desktop Fixed CTA */}
      <div className="hidden md:block fixed bottom-6 right-6 z-40">
        <button
          onClick={() => handleQuizClick('desktop')}
          className="group bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-4 rounded-2xl font-bold shadow-2xl shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3"
        >
          <Zap className="w-5 h-5" />
          <span>Simular Carta de Crédito</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Mobile Fixed CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-gray-950/95 backdrop-blur-md border-t border-gray-800 p-4">
        <button
          onClick={() => handleQuizClick('mobile')}
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-2"
        >
          <Zap className="w-5 h-5" />
          <span>Simular Minha Carta Agora</span>
        </button>
      </div>
    </>
  );
};

export default FixedCTA;