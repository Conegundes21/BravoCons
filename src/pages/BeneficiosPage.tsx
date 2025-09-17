import React, { useEffect } from 'react';
import { 
  CheckCircleIcon, 
  ClockIcon, 
  CurrencyDollarIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  UserGroupIcon,
  LightBulbIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';
import { useFadeInAnimation } from '../hooks/useFadeInAnimation';
import { useStaggeredFadeIn } from '../hooks/useStaggeredFadeIn';
import { useNumberAnimation } from '../hooks/useNumberAnimation';
import BackToHomeButton from '../components/BackToHomeButton';

const AnimatedStat: React.FC<{ end: number; suffix?: string; prefix?: string }> = ({ end, suffix = '', prefix = '' }) => {
  const { count, elementRef } = useNumberAnimation({
    end,
    suffix,
    prefix,
    duration: 2000
  });

  return (
    <div ref={elementRef} className="text-4xl font-bold text-emerald-400 mb-1">
      {count}
    </div>
  );
};

const BeneficiosPage: React.FC = () => {
  useEffect(() => {
    // Garantir que a página sempre carregue no topo sem animação
    document.documentElement.classList.add('no-smooth-scroll');
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    setTimeout(() => {
      document.documentElement.classList.remove('no-smooth-scroll');
    }, 50);
  }, []);

  // Animações
  const headerAnimation = useFadeInAnimation({ delay: 200, direction: 'up' });
  const titleAnimation = useFadeInAnimation({ delay: 400, direction: 'up' });
  const descriptionAnimation = useFadeInAnimation({ delay: 600, direction: 'up' });
  
  const benefitsAnimation = useStaggeredFadeIn({ 
    itemCount: 6, 
    staggerDelay: 150, 
    direction: 'up' 
  });
  const mainBenefits = [
    {
      icon: ClockIcon,
      title: "Contemplação Mais Rápida",
      description: "Estratégias que reduzem o tempo de espera em até 40%",
      details: [
        "Análise inteligente de grupos",
        "Estratégias de lance otimizadas",
        "Monitoramento contínuo de oportunidades",
        "Alertas automáticos de chances de contemplação"
      ],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: CurrencyDollarIcon,
      title: "Economia Significativa",
      description: "Redução de até 30% nos custos totais do consórcio",
      details: [
        "Estratégias de lance que economizam dinheiro",
        "Análise de custo-benefício personalizada",
        "Otimização de parcelas e prazos",
        "Transparência total nos custos"
      ],
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: ShieldCheckIcon,
      title: "Segurança e Tranquilidade",
      description: "Acompanhamento profissional durante toda a jornada",
      details: [
        "Suporte especializado 24/7",
        "Acompanhamento mensal de performance",
        "Relatórios detalhados de progresso",
        "Garantia de transparência total"
      ],
      color: "from-purple-500 to-pink-600"
    }
  ];

  const additionalBenefits = [
    {
      icon: ChartBarIcon,
      title: "Análise de Mercado",
      description: "Acesso a dados exclusivos e tendências do mercado de consórcios"
    },
    {
      icon: UserGroupIcon,
      title: "Rede de Parceiros",
      description: "Conectamos você com os melhores fornecedores e concessionárias"
    },
    {
      icon: LightBulbIcon,
      title: "Consultoria Personalizada",
      description: "Estratégias únicas desenvolvidas para seu perfil específico"
    },
    {
      icon: TrophyIcon,
      title: "Resultados Comprovados",
      description: "Mais de 10.000 clientes contemplados com nossa metodologia"
    }
  ];

  const stats = [
    { number: "40%", label: "Redução no tempo de contemplação" },
    { number: "30%", label: "Economia nos custos totais" },
    { number: "95%", label: "Taxa de satisfação dos clientes" },
    { number: "10.000+", label: "Clientes contemplados" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-blue-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="mb-8">
            <BackToHomeButton />
          </div>
          <div className="text-center">
            <div 
              ref={headerAnimation.elementRef}
              style={headerAnimation.style}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm"
            >
              <CheckCircleIcon className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-300 font-medium">Vantagens Exclusivas</span>
            </div>
            
            <h1 
              ref={titleAnimation.elementRef}
              style={titleAnimation.style}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Benefícios do
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Consórcio Inteligente
              </span>
            </h1>
            <p 
              ref={descriptionAnimation.elementRef}
              style={descriptionAnimation.style}
              className="text-xl text-green-100 max-w-3xl mx-auto"
            >
              Descubra como nossa metodologia revolucionária pode transformar seus objetivos 
              financeiros em realidade com máxima eficiência e economia.
            </p>
          </div>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="py-16 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefícios Principais */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Principais Benefícios
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Nossa metodologia oferece vantagens únicas que transformam o consórcio tradicional
            </p>
          </div>

          <div 
            ref={benefitsAnimation.elementRef}
            className="space-y-12"
          >
            {mainBenefits.map((benefit, index) => (
              <div 
                key={index} 
                style={benefitsAnimation.getItemStyle(index)}
                className="flex flex-col lg:flex-row items-center gap-8 group"
              >
                {/* Ícone */}
                <div className="flex-shrink-0">
                  <div className={`w-24 h-24 bg-gradient-to-r ${benefit.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-12 h-12 text-white" />
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="flex-1 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105">
                  <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 text-lg mb-6">{benefit.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {benefit.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-3">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefícios Adicionais */}
      <div className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Vantagens Exclusivas
            </h2>
            <p className="text-xl text-gray-300">
              Recursos adicionais que fazem a diferença na sua jornada
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalBenefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparação Tradicional vs Inteligente */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tradicional vs Inteligente
            </h2>
            <p className="text-xl text-gray-300">
              Veja a diferença que nossa metodologia faz
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Tradicional */}
            <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-400 mb-6">Consórcio Tradicional</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✗</span>
                  </div>
                  <span className="text-gray-300">Tempo de espera imprevisível</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✗</span>
                  </div>
                  <span className="text-gray-300">Estratégias de lance básicas</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✗</span>
                  </div>
                  <span className="text-gray-300">Acompanhamento limitado</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✗</span>
                  </div>
                  <span className="text-gray-300">Custos elevados</span>
                </li>
              </ul>
            </div>

            {/* Inteligente */}
            <div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-400 mb-6">Consórcio Inteligente</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-300">Contemplação 40% mais rápida</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-300">Estratégias personalizadas</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-300">Suporte especializado 24/7</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-300">Economia de até 30%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experimente Todos Esses Benefícios
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Comece sua jornada rumo ao consórcio inteligente e transforme seus objetivos em realidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const quizButton = document.querySelector('[data-quiz-trigger]') as HTMLButtonElement;
                if (quizButton) {
                  quizButton.click();
                }
              }}
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Começar Agora
            </button>
            <button 
              onClick={() => {
                const contactButton = document.querySelector('[data-contact-trigger]') as HTMLButtonElement;
                if (contactButton) {
                  contactButton.click();
                }
              }}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeneficiosPage;
