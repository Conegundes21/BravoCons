import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Car, 
  Truck, 
  Wrench, 
  TrendingUp, 
  ArrowRight,
  Star,
  Shield,
  Zap,
  Target,
  Construction
} from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

interface NichoCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<any>;
  gradient: string;
  features: string[];
  examples: string[];
  cta: string;
  popular?: boolean;
}

const NichosSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const { isVisible, elementRef } = useScrollAnimation({ threshold: 0.2 });

  const nichos: NichoCard[] = [
    {
      id: 'imoveis',
      title: 'Imóveis',
      subtitle: 'Realize o sonho da casa própria',
      description: 'Consórcios para compra de casas, apartamentos, terrenos e investimentos imobiliários com as melhores condições do mercado.',
      icon: Home,
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      features: ['Financiamento facilitado', 'Sem entrada', 'Taxas reduzidas', 'Prazo flexível'],
      examples: ['Casas e apartamentos', 'Terrenos urbanos', 'Imóveis comerciais', 'Investimentos'],
      cta: 'Quero consórcio imobiliário',
      popular: true
    },
    {
      id: 'automoveis',
      title: 'Automóveis',
      subtitle: 'Mobilidade com qualidade',
      description: 'Consórcios para carros, motos e veículos utilitários com planos personalizados para cada necessidade.',
      icon: Car,
      gradient: 'from-blue-500 via-indigo-500 to-purple-500',
      features: ['Diversos modelos', 'Planos flexíveis', 'Sem juros', 'Aprovação rápida'],
      examples: ['Carros populares', 'SUVs e utilitários', 'Motos e scooters', 'Veículos elétricos'],
      cta: 'Quero consórcio automotivo'
    },
    {
      id: 'caminhoes',
      title: 'Caminhões',
      subtitle: 'Potencialize seu negócio',
      description: 'Consórcios para caminhões, vans e veículos comerciais ideais para transportadoras e empresas.',
      icon: Truck,
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      features: ['Veículos comerciais', 'Planos empresariais', 'Suporte especializado', 'Manutenção incluída'],
      examples: ['Caminhões de carga', 'Vans de entrega', 'Caminhões basculantes', 'Veículos refrigerados'],
      cta: 'Quero consórcio de caminhões'
    },
    {
      id: 'maquinarios',
      title: 'Maquinários',
      subtitle: 'Tecnologia e produtividade',
      description: 'Consórcios para equipamentos industriais, agrícolas e de construção com tecnologia de ponta.',
      icon: Construction,
      gradient: 'from-yellow-500 via-amber-500 to-orange-500',
      features: ['Equipamentos modernos', 'Tecnologia avançada', 'Suporte técnico', 'Garantia estendida'],
      examples: ['Tratores agrícolas', 'Carregadeiras', 'Computadores industriais', 'Equipamentos de construção'],
      cta: 'Quero consórcio de maquinários'
    }
  ];

  const { visibleItems, containerRef } = useStaggeredAnimation(nichos, 150);

  const handleCardHover = (id: string) => {
    setActiveCard(id);
  };

  const handleCardLeave = () => {
    setActiveCard(null);
  };

  return (
    <section 
      ref={elementRef}
      id="nichos-section" 
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              O que você pode fazer com a <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Carta de Crédito</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Descubra as infinitas possibilidades que uma carta de crédito pode oferecer para 
              realizar seus sonhos e objetivos financeiros.
            </p>
          </div>
        </div>

        {/* Nichos Grid */}
        <div 
          ref={containerRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16"
        >
          {nichos.map((nicho, index) => (
            <div
              key={nicho.id}
              className={`group relative transition-all duration-700 ${
                visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => handleCardHover(nicho.id)}
              onMouseLeave={handleCardLeave}
            >
              {/* Card Principal */}
              <div className={`
                relative h-72 lg:h-80 bg-white/10 backdrop-blur-lg rounded-2xl p-4 lg:p-6 border border-white/20 
                transition-all duration-500 transform hover:scale-105 hover:bg-white/20
                ${activeCard === nicho.id ? 'ring-2 ring-purple-500/50 shadow-2xl' : ''}
              `}>
                {/* Badge Popular */}
                {nicho.popular && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    ⭐ Mais Popular
                  </div>
                )}

                {/* Icon */}
                <div className={`
                  w-16 h-16 bg-gradient-to-r ${nicho.gradient} rounded-2xl flex items-center justify-center mb-6
                  transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3
                `}>
                  <nicho.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {nicho.title}
                  </h3>
                  <p className="text-purple-300 font-medium text-sm">
                    {nicho.subtitle}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {nicho.description}
                  </p>
                </div>

                {/* Hover Overlay */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br ${nicho.gradient} rounded-2xl p-6 
                  transition-all duration-500 opacity-0 group-hover:opacity-100
                  flex flex-col justify-center items-center text-center text-white
                `}>
                  <h4 className="text-xl font-bold mb-4">Características</h4>
                  <ul className="space-y-2 text-sm mb-6">
                    {nicho.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-300" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h5 className="font-semibold mb-2">Exemplos:</h5>
                  <p className="text-sm opacity-90">{nicho.examples.join(', ')}</p>
                </div>
              </div>

              {/* CTA Button */}
              <button className={`
                w-full mt-4 py-3 px-4 lg:px-6 bg-gradient-to-r ${nicho.gradient} hover:from-purple-600 hover:to-pink-600
                text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105
                shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 text-sm lg:text-base
              `}>
                <span className="truncate">{nicho.cta}</span>
                <ArrowRight className="h-4 w-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Segurança Garantida',
                description: 'Todos os nossos consórcios são regulamentados e seguem as melhores práticas do mercado.'
              },
              {
                icon: Zap,
                title: 'Processo Rápido',
                description: 'Aprovação em até 24 horas e liberação do crédito em até 48 horas após a aprovação.'
              },
              {
                icon: Target,
                title: 'Personalização Total',
                description: 'Planos adaptados às suas necessidades específicas e capacidade de pagamento.'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className={`text-center mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Pronto para começar?
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Descubra qual nicho é ideal para você e comece sua jornada rumo à realização dos seus objetivos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                Fazer Quiz de Perfil
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all duration-300 transform hover:scale-105">
                Falar com Especialista
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente auxiliar para o ícone de check
const CheckCircle: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

export default NichosSection;
