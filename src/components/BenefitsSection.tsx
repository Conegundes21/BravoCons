import React from 'react';
import { CheckCircle, Zap, CreditCard } from 'lucide-react';
import { useNumberAnimation } from '../hooks/useNumberAnimation';
import { useFadeInAnimation } from '../hooks/useFadeInAnimation';
import { useStaggeredFadeIn } from '../hooks/useStaggeredFadeIn';

interface AnimatedStatProps {
  end: number;
  suffix?: string;
  prefix?: string;
}

const AnimatedStat: React.FC<AnimatedStatProps> = ({ end, suffix = '', prefix = '' }) => {
  const { count, elementRef } = useNumberAnimation({
    end,
    suffix,
    prefix,
    duration: 2000
  });

  return (
    <div ref={elementRef} className="text-xl font-bold text-emerald-400 mb-1">
      {count}
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  // Animações para elementos principais
  const headerAnimation = useFadeInAnimation({ delay: 200, direction: 'up' });
  const titleAnimation = useFadeInAnimation({ delay: 400, direction: 'up' });
  const descriptionAnimation = useFadeInAnimation({ delay: 600, direction: 'up' });
  
  // Animação escalonada para os benefícios
  const benefitsAnimation = useStaggeredFadeIn({ 
    itemCount: 6, 
    staggerDelay: 150, 
    direction: 'up' 
  });

  return (
    <section id="beneficios" className="py-12 md:py-16 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div 
            ref={headerAnimation.elementRef}
            style={headerAnimation.style}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-full px-4 py-2 mb-6"
          >
            <CheckCircle className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-yellow-300 font-medium">Vantagens Exclusivas</span>
          </div>
          
          <h2 
            ref={titleAnimation.elementRef}
            style={titleAnimation.style}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Por que escolher o
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Consórcio Inteligente?
            </span>
          </h2>
          
          <p 
            ref={descriptionAnimation.elementRef}
            style={descriptionAnimation.style}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Compare e descubra por que o consórcio é a forma mais inteligente de conquistar seu veículo dos sonhos.
          </p>
        </div>

        {/* Benefits Grid */}
        <div 
          ref={benefitsAnimation.elementRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12"
        >
          {[
            {
              icon: CheckCircle,
              title: "Sem Juros Bancários",
              description: "Diferente do financiamento, no consórcio você não paga juros abusivos. Apenas taxa de administração fixa.",
              color: "from-yellow-500 to-yellow-600"
            },
            {
              icon: Zap,
              title: "Contemplação Acelerada",
              description: "Estratégias exclusivas para aumentar suas chances de ser contemplado rapidamente.",
              color: "from-blue-500 to-blue-600"
            },
            {
              icon: CheckCircle,
              title: "100% Seguro",
              description: "Regulamentado pelo Banco Central com garantias e proteções para todos os participantes.",
              color: "from-green-500 to-green-600"
            },
            {
              icon: CheckCircle,
              title: "Flexibilidade Total",
              description: "Escolha o prazo, valor da parcela e modalidade que melhor se adapta ao seu orçamento.",
              color: "from-purple-500 to-purple-600"
            },
            {
              icon: CheckCircle,
              title: "Planejamento Inteligente",
              description: "Análise completa do seu perfil para escolher a melhor estratégia de contemplação.",
              color: "from-red-500 to-red-600"
            },
            {
              icon: CheckCircle,
              title: "Consultoria Gratuita",
              description: "Acompanhamento especializado desde a adesão até a contemplação do seu crédito.",
              color: "from-indigo-500 to-indigo-600"
            }
          ].map((benefit, index) => (
            <div 
              key={index} 
              style={benefitsAnimation.getItemStyle(index)}
              className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6 h-full hover:scale-105 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Revolutionary Comparison Section - Imersivo */}
        <div className="relative -mx-2 sm:-mx-4 md:-mx-6 lg:-mx-8 overflow-hidden">
          {/* Background Imersivo que se estende além dos limites */}
          <div className="absolute inset-0">
            {/* Gradientes de fundo que se estendem */}
            <div className="absolute -top-20 -left-20 w-[120%] h-[120%] bg-gradient-to-br from-slate-900/60 via-gray-900/40 to-slate-800/60"></div>
            
            {/* Elementos flutuantes que se estendem além do container */}
            <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-gradient-to-r from-emerald-500/8 to-cyan-500/8 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-gradient-to-r from-blue-500/8 to-indigo-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-emerald-500/4 via-transparent to-blue-500/4 rounded-full blur-3xl"></div>
            
            {/* Linhas de conexão que se estendem */}
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
            <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
            
            {/* Partículas flutuantes */}
            <div className="absolute top-20 left-1/4 w-2 h-2 bg-emerald-400/30 rounded-full animate-bounce"></div>
            <div className="absolute top-40 right-1/3 w-1 h-1 bg-blue-400/40 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-cyan-400/30 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
          </div>
          
          <div className="relative max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            {/* Header Imersivo */}
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/15 to-blue-500/15 border border-emerald-500/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm shadow-lg">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-emerald-300 font-medium tracking-wider">ANÁLISE COMPARATIVA</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-4 leading-tight">
                <span className="bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
                  Carta de Crédito
                </span>
                <span className="text-gray-400 mx-2 sm:mx-4 font-thin text-xl sm:text-2xl">×</span>
                <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
                  Financiamento
                </span>
              </h3>
              <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed font-light px-4">
                Uma análise detalhada para você tomar a decisão mais inteligente
              </p>
            </div>
            
            {/* Card Principal com Efeitos Imersivos */}
            <div className="relative">
              {/* Efeitos de brilho que se estendem */}
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 via-transparent to-blue-500/10 rounded-2xl blur-xl"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/5 via-transparent to-blue-500/5 rounded-xl blur-lg"></div>
              
              {/* Container Principal */}
              <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-gray-900/90 backdrop-blur-3xl border border-gray-700/40 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden shadow-2xl">
                {/* Padrão de fundo mais elaborado */}
                <div className="absolute inset-0 opacity-[0.03]">
                  <div className="absolute top-16 right-16 w-48 h-48 border border-white/15 rounded-full"></div>
                  <div className="absolute bottom-16 left-16 w-40 h-40 border border-white/10 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white/5 rounded-full"></div>
                  <div className="absolute top-1/4 right-1/4 w-24 h-24 border border-emerald-500/10 rounded-full"></div>
                  <div className="absolute bottom-1/4 left-1/4 w-32 h-32 border border-blue-500/10 rounded-full"></div>
                </div>
                
                <div className="relative z-10">
                  {/* Header da Tabela com ícones maiores */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 items-center mb-6 md:mb-8">
                    <div className="text-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg hover:scale-110 transition-transform duration-300">
                        <Zap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                      </div>
                      <h4 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 sm:mb-2">Carta de Crédito</h4>
                      <p className="text-emerald-400 text-xs sm:text-sm font-medium">A escolha inteligente</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto shadow-lg">
                        <span className="text-gray-300 text-xs sm:text-sm font-bold">VS</span>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg hover:scale-110 transition-transform duration-300">
                        <CreditCard className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                      </div>
                      <h4 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 sm:mb-2">Financiamento</h4>
                      <p className="text-gray-400 text-xs sm:text-sm font-medium">Custo elevado</p>
                    </div>
                  </div>
                  
                  {/* Tabela de Comparação com melhor espaçamento */}
                  <div className="space-y-4 sm:space-y-5 md:space-y-6">
                    {[
                      { 
                        aspect: "Juros", 
                        consortium: "Sem juros abusivos", 
                        financing: "2-3% ao mês",
                        consortiumIcon: "✓",
                        financingIcon: "✗"
                      },
                      { 
                        aspect: "Taxas", 
                        consortium: "Taxa fixa de administração", 
                        financing: "Taxas variáveis",
                        consortiumIcon: "✓",
                        financingIcon: "✗"
                      },
                      { 
                        aspect: "Flexibilidade", 
                        consortium: "Flexibilidade total", 
                        financing: "Rigorosa análise de crédito",
                        consortiumIcon: "✓",
                        financingIcon: "✗"
                      },
                      { 
                        aspect: "Segurança", 
                        consortium: "Segurança regulamentada", 
                        financing: "Risco de inadimplência",
                        consortiumIcon: "✓",
                        financingIcon: "✗"
                      },
                      { 
                        aspect: "Suporte", 
                        consortium: "Consultoria gratuita", 
                        financing: "Sem acompanhamento",
                        consortiumIcon: "✓",
                        financingIcon: "✗"
                      }
                    ].map((item, index) => (
                      <div key={index} className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-6 items-center py-3 sm:py-4 border-b border-gray-700/40 last:border-b-0 hover:bg-white/5 transition-colors duration-300 rounded-lg px-2 sm:px-4 -mx-2 sm:-mx-4">
                        <div className="text-gray-300 font-semibold text-xs sm:text-sm md:text-base">
                          {item.aspect}
                        </div>
                        
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                            <span className="text-white text-xs sm:text-sm font-bold">{item.consortiumIcon}</span>
                          </div>
                          <span className="text-white font-medium text-xs sm:text-sm">{item.consortium}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                            <span className="text-white text-xs sm:text-sm font-bold">{item.financingIcon}</span>
                          </div>
                          <span className="text-gray-300 font-medium text-xs sm:text-sm">{item.financing}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Estatísticas com melhor design */}
                  <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-700/40">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
                      <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-emerald-500/20">
                        <AnimatedStat end={95} suffix="%" />
                        <div className="text-emerald-300 text-xs sm:text-sm font-medium">Escolhem carta de crédito</div>
                      </div>
                      <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-blue-500/20">
                        <AnimatedStat end={40} suffix="%" />
                        <div className="text-blue-300 text-xs sm:text-sm font-medium">Menor custo total</div>
                      </div>
                      <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-cyan-500/20">
                        <AnimatedStat end={100} suffix="%" />
                        <div className="text-cyan-300 text-xs sm:text-sm font-medium">Segurança garantida</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;