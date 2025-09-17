import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Car, 
  Truck, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Star,
  Shield,
  Zap,
  Target,
  Users,
  TrendingUp,
  Award,
  Clock,
  DollarSign,
  Calculator,
  Headphones,
  FileText,
  Globe,
  Lock,
  Heart,
  Lightbulb
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToHomeButton from '../components/BackToHomeButton';
import { useFadeInAnimation } from '../hooks/useFadeInAnimation';
import { useStaggeredFadeIn } from '../hooks/useStaggeredFadeIn';
import { useNumberAnimation } from '../hooks/useNumberAnimation';
import { useNavigate } from 'react-router-dom';

const AnimatedStat: React.FC<{ end: number; suffix?: string; prefix?: string }> = ({ end, suffix = '', prefix = '' }) => {
  const { count, elementRef } = useNumberAnimation({
    end,
    suffix,
    prefix,
    duration: 2000
  });

  return (
    <div ref={elementRef} className="text-4xl font-bold text-yellow-400 mb-2">
      {count}
    </div>
  );
};

const ServicosPage: React.FC = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [activeService, setActiveService] = useState('imoveis');
  const navigate = useNavigate();

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

  const servicesAnimation = useStaggeredFadeIn({ 
    itemCount: 4, 
    staggerDelay: 200, 
    direction: 'up' 
  });

  const featuresAnimation = useStaggeredFadeIn({ 
    itemCount: 6, 
    staggerDelay: 150, 
    direction: 'up' 
  });

  const services = [
    {
      id: 'imoveis',
      title: 'Consórcio Imobiliário',
      subtitle: 'Realize o sonho da casa própria',
      description: 'Consórcios para compra de casas, apartamentos, terrenos e investimentos imobiliários com as melhores condições do mercado.',
      icon: Home,
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      features: ['Sem entrada', 'Taxas reduzidas', 'Prazo flexível', 'Financiamento facilitado'],
      examples: ['Casas e apartamentos', 'Terrenos urbanos', 'Imóveis comerciais', 'Investimentos'],
      cta: 'Quero consórcio imobiliário',
      popular: true,
      stats: { families: 160, credit: 35, satisfaction: 98 }
    },
    {
      id: 'automoveis',
      title: 'Consórcio Automotivo',
      subtitle: 'Mobilidade com qualidade',
      description: 'Consórcios para carros, motos e veículos utilitários com planos personalizados para cada necessidade.',
      icon: Car,
      gradient: 'from-blue-500 via-indigo-500 to-purple-500',
      features: ['Diversos modelos', 'Planos flexíveis', 'Sem juros', 'Aprovação rápida'],
      examples: ['Carros populares', 'SUVs e utilitários', 'Motos e scooters', 'Veículos elétricos'],
      cta: 'Quero consórcio automotivo',
      stats: { families: 230, credit: 15, satisfaction: 96 }
    },
    {
      id: 'caminhoes',
      title: 'Consórcio de Caminhões',
      subtitle: 'Potencialize seu negócio',
      description: 'Consórcios para caminhões, implementos rodoviários e veículos comerciais pesados para expandir sua operação.',
      icon: Truck,
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      features: ['Veículos pesados', 'Implementos agrícolas', 'Sem entrada', 'Taxas especiais'],
      examples: ['Caminhões de carga', 'Implementos rodoviários', 'Máquinas agrícolas', 'Veículos comerciais'],
      cta: 'Quero consórcio de caminhões',
      stats: { families: 120, credit: 25, satisfaction: 97 }
    },
    {
      id: 'alavancagem',
      title: 'Estratégias de Alavancagem',
      subtitle: 'Multiplique seus investimentos',
      description: 'Estratégias inteligentes para maximizar o potencial da sua carta de crédito e acelerar a construção de patrimônio.',
      icon: BarChart3,
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      features: ['Estratégias avançadas', 'Multiplicação de capital', 'Investimentos inteligentes', 'Consultoria especializada'],
      examples: ['Investimentos imobiliários', 'Portfólio diversificado', 'Renda passiva', 'Crescimento acelerado'],
      cta: 'Quero estratégia de alavancagem',
      stats: { families: 100, credit: 12, satisfaction: 99 }
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Análise Personalizada',
      description: 'Avaliamos seu perfil financeiro e objetivos para criar a estratégia ideal.',
      icon: Target,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      step: '2',
      title: 'Simulação Detalhada',
      description: 'Criamos simulações precisas mostrando economia e cronograma de contemplação.',
      icon: Calculator,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '3',
      title: 'Implementação',
      description: 'Executamos sua estratégia com monitoramento contínuo e ajustes quando necessário.',
      icon: Zap,
      color: 'from-green-500 to-emerald-500'
    },
    {
      step: '4',
      title: 'Acompanhamento',
      description: 'Suporte completo durante todo o processo até a contemplação.',
      icon: Headphones,
      color: 'from-purple-500 to-violet-500'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: '100% Seguro e Regulamentado',
      description: 'Todos os nossos consórcios são regulamentados pelo Banco Central com garantias totais.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Contemplação Acelerada',
      description: 'Estratégias exclusivas que reduzem o tempo de espera em até 40%.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: DollarSign,
      title: 'Economia Garantida',
      description: 'Redução de até 30% nos custos totais comparado ao financiamento tradicional.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Consultoria Gratuita',
      description: 'Acompanhamento especializado desde a adesão até a contemplação.',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Clock,
      title: 'Suporte 24/7',
      description: 'Atendimento completo disponível 24 horas por dia, 7 dias por semana.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Resultados Comprovados',
      description: 'Mais de 1000 famílias já transformaram seus sonhos em realidade.',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const activeServiceData = services.find(service => service.id === activeService);

  const handleServiceNavigation = (serviceId: string) => {
    switch (serviceId) {
      case 'imoveis':
        navigate('/servicos/imoveis');
        break;
      case 'automoveis':
        navigate('/servicos/automoveis');
        break;
      case 'caminhoes':
        navigate('/servicos/caminhoes');
        break;
      case 'alavancagem':
        navigate('/servicos/estrategias');
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header onOpenQuiz={() => setShowQuiz(true)} />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-8">
            <BackToHomeButton />
          </div>
          <div className="text-center max-w-4xl mx-auto">
            <div 
              ref={headerAnimation.elementRef}
              style={headerAnimation.style}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-full px-4 py-2 mb-8"
            >
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-yellow-300 font-medium">Nossos Serviços</span>
            </div>
            
            <h1 
              ref={titleAnimation.elementRef}
              style={titleAnimation.style}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Serviços 
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Especializados
              </span>
            </h1>
            
            <p 
              ref={descriptionAnimation.elementRef}
              style={descriptionAnimation.style}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Soluções completas em consórcio para transformar seus sonhos em realidade 
              com economia, segurança e flexibilidade incomparáveis.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Escolha Seu <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Serviço</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cada modalidade foi desenvolvida para atender necessidades específicas com máxima eficiência
            </p>
          </div>

          <div 
            ref={servicesAnimation.elementRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {services.map((service, index) => (
              <div 
                key={service.id}
                style={servicesAnimation.getItemStyle(index)}
                className={`group cursor-pointer transition-all duration-300 ${
                  activeService === service.id ? 'scale-105' : ''
                }`}
                onClick={() => setActiveService(service.id)}
              >
                <div className={`
                  relative h-80 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-6 border transition-all duration-300
                  ${activeService === service.id 
                    ? 'border-white/40 bg-white/15' 
                    : 'border-white/20 hover:border-white/30 hover:bg-white/10'
                  }
                `}>
                  {/* Badge Popular */}
                  {service.popular && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      ⭐ Mais Popular
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`
                    w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6
                    transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3
                  `}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-yellow-300 font-semibold text-sm">
                      {service.subtitle}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="text-xs font-bold text-white">{service.stats.families}+</div>
                        <div className="text-xs text-gray-400">Famílias</div>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">R${service.stats.credit}M+</div>
                        <div className="text-xs text-gray-400">Crédito</div>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">{service.stats.satisfaction}%</div>
                        <div className="text-xs text-gray-400">Satisfação</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Service Details */}
          {activeServiceData && (
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${activeServiceData.gradient} rounded-2xl flex items-center justify-center`}>
                      <activeServiceData.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{activeServiceData.title}</h3>
                      <p className="text-yellow-300 font-semibold">{activeServiceData.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {activeServiceData.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-white font-semibold mb-2">Características:</h4>
                      <ul className="space-y-1">
                        {activeServiceData.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Exemplos:</h4>
                      <ul className="space-y-1">
                        {activeServiceData.examples.map((example, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button 
                    onClick={() => handleServiceNavigation(activeServiceData.id)}
                    className={`w-full py-4 px-6 bg-gradient-to-r ${activeServiceData.gradient} hover:from-yellow-600 hover:to-yellow-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2`}
                  >
                    <span>{activeServiceData.cta}</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">{activeServiceData.stats.families}+</div>
                    <div className="text-gray-300 text-sm">Famílias Atendidas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">R${activeServiceData.stats.credit}M+</div>
                    <div className="text-gray-300 text-sm">Crédito</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">{activeServiceData.stats.satisfaction}%</div>
                    <div className="text-gray-300 text-sm">Taxa de Satisfação</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                    <div className="text-gray-300 text-sm">Suporte Disponível</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Como <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Funciona</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Um processo simples e eficiente para garantir seus melhores resultados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 h-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className={`w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mb-4 text-white font-bold text-sm`}>
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nossos <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Diferenciais</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Por que escolher a Bravo Consórcios para realizar seus sonhos
            </p>
          </div>

          <div 
            ref={featuresAnimation.elementRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <div 
                key={index}
                style={featuresAnimation.getItemStyle(index)}
                className="group"
              >
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 h-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-600/20 to-yellow-700/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para Começar Sua <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Jornada</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Escolha o serviço ideal para você e transforme seus sonhos em realidade 
              com a consultoria mais especializada do mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const quizButton = document.querySelector('[data-quiz-trigger]') as HTMLButtonElement;
                  if (quizButton) {
                    quizButton.click();
                  }
                }}
                className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
              >
                <span>Fazer Simulação Gratuita</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => {
                  const contactButton = document.querySelector('[data-contact-trigger]') as HTMLButtonElement;
                  if (contactButton) {
                    contactButton.click();
                  }
                }}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all duration-300 transform hover:scale-105"
              >
                Falar com Especialista
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicosPage;
