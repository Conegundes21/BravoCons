import React from 'react';
import { ArrowRight, Shield, TrendingUp, Clock } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';
import { trackingService } from '../services/tracking';

interface HeroSectionProps {
  onOpenQuiz: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuiz }) => {
  const { isVisible: isHeroVisible, elementRef: heroRef } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleQuizClick = () => {
    // Tracking do clique no botão principal
    trackingService.trackAnalyticsEvent('cta_click', {
      event_category: 'CTA',
      event_label: 'Hero Section - Simular Carta de Crédito',
      custom_parameter_1: 'Hero Section',
      custom_parameter_2: 'Primary CTA',
      custom_parameter_3: 'Quiz Start'
    });
    
    onOpenQuiz();
  };

  const benefits = [
    { text: 'Sem juros bancários', color: 'yellow' },
    { text: 'Contemplação acelerada', color: 'blue' },
    { text: 'Consultoria gratuita', color: 'green' }
  ];

  const { visibleItems: visibleBenefits, containerRef: benefitsRef } = useStaggeredAnimation(benefits, 200);

  const trustIndicators = [
    { icon: TrendingUp, value: '+100', label: 'Famílias atendidas', color: 'yellow' },
    { icon: Shield, value: 'R$ 50M+', label: 'Crédito liberado', color: 'blue' },
    { icon: Clock, value: '48h', label: 'Tempo médio de aprovação', color: 'green' }
  ];

  const { visibleItems: visibleIndicators, containerRef: indicatorsRef } = useStaggeredAnimation(trustIndicators, 300);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-900/10 via-transparent to-transparent"></div>
      
      {/* Animated Background Circles */}
      <div 
        className={`absolute top-20 left-10 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl transition-all duration-2000 ${
          isHeroVisible ? 'animate-pulse opacity-100' : 'opacity-0'
        }`}
      ></div>
      <div 
        className={`absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl transition-all duration-2000 delay-1000 ${
          isHeroVisible ? 'animate-pulse opacity-100' : 'opacity-0'
        }`}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div 
            className={`inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-full px-4 py-2 mb-8 transition-all duration-1000 transform ${
              isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >
            <Shield className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-yellow-300 font-medium">100% Seguro e Regulamentado</span>
          </div>

          {/* Main Headline */}
          <h1 
            className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transition-all duration-1000 delay-200 transform ${
              isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Prospere agora com 
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              CARTA DE CRÉDITO! 
              
            </span>
          </h1>

          {/* Subheadline */}
          <p 
            className={`text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 transform ${
              isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Cartas de crédito de <span className="text-yellow-400 font-semibold">R$ 50.000 a R$ 1.520.000</span> com acesso facilitado.
            <span className="block mt-2">Sem entrada, sem juros, com segurança e flexibilidade.</span>
          </p>

          {/* Key Benefits */}
          <div 
            ref={benefitsRef}
            className="flex flex-wrap justify-center items-center gap-6 mb-12 text-sm md:text-base"
          >
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`flex items-center space-x-2 text-gray-300 transition-all duration-700 transform ${
                  visibleBenefits.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`w-2 h-2 bg-${benefit.color}-400 rounded-full`}></div>
                <span>{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-600 transform ${
              isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <button
              onClick={handleQuizClick}
              className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-950 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/25 flex items-center space-x-2"
            >
              <span>Simular Minha Carta de Crédito</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="border-2 border-gray-600 hover:border-yellow-400 text-white hover:text-yellow-400 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-yellow-400/5">
              Ver Como Funciona
            </button>
          </div>

          {/* Trust Indicators */}
          <div 
            ref={indicatorsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {trustIndicators.map((indicator, index) => (
              <div 
                key={index}
                className={`text-center transition-all duration-700 transform ${
                  visibleIndicators.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br from-${indicator.color}-500/20 to-${indicator.color}-600/20 rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <indicator.icon className={`w-6 h-6 text-${indicator.color}-400`} />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{indicator.value}</div>
                <div className="text-sm text-gray-400">{indicator.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;