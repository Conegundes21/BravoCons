import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Target, 
  Zap,
  DollarSign,
  Shield,
  Clock,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  Calculator,
  Award,
  Lightbulb,
  Lock,
  Globe,
  Heart,
  FileText,
  Headphones,
  Eye,
  Rocket,
  Crown,
  Sparkles,
  Brain,
  Building,
  Landmark,
  PieChart,
  LineChart,
  Activity
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToHomeButton from '../components/BackToHomeButton';
import { useFadeInAnimation } from '../hooks/useFadeInAnimation';
import { useStaggeredFadeIn } from '../hooks/useStaggeredFadeIn';
import { useNumberAnimation } from '../hooks/useNumberAnimation';

const AnimatedStat: React.FC<{ end: number; suffix?: string; prefix?: string }> = ({ end, suffix = '', prefix = '' }) => {
  const { count, elementRef } = useNumberAnimation({
    end,
    suffix,
    prefix,
    duration: 2000
  });

  return (
    <div ref={elementRef} className="text-4xl font-bold text-purple-400 mb-2">
      {count}
    </div>
  );
};

const AlavancagemPage: React.FC = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [activeStrategy, setActiveStrategy] = useState('imobiliaria');

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

  const strategiesAnimation = useStaggeredFadeIn({ 
    itemCount: 4, 
    staggerDelay: 200, 
    direction: 'up' 
  });

  const benefitsAnimation = useStaggeredFadeIn({ 
    itemCount: 6, 
    staggerDelay: 150, 
    direction: 'up' 
  });

  const strategies = [
    {
      id: 'imobiliaria',
      title: 'Alavancagem Imobiliária',
      subtitle: 'Multiplique seu patrimônio',
      description: 'Estratégias avançadas para usar sua carta de crédito como alavanca para construir um portfólio imobiliário sólido e rentável.',
      icon: Building,
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      features: ['Compra de imóveis para investimento', 'Financiamento inteligente', 'Diversificação de portfólio', 'Renda passiva mensal'],
      examples: ['Apartamentos em centros urbanos', 'Casas em condomínios fechados', 'Imóveis comerciais', 'Terrenos para valorização'],
      potential: '300%',
      time: '12-24 meses',
      risk: 'Baixo',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 'empresarial',
      title: 'Alavancagem Empresarial',
      subtitle: 'Expanda seu negócio',
      description: 'Use sua carta de crédito para investir em seu próprio negócio ou expandir operações existentes com capital próprio.',
      icon: TrendingUp,
      gradient: 'from-blue-500 via-indigo-500 to-purple-500',
      features: ['Capital de giro', 'Expansão de operações', 'Investimento em equipamentos', 'Abertura de novas unidades'],
      examples: ['Franchises', 'Equipamentos industriais', 'Marketing e vendas', 'Infraestrutura tecnológica'],
      potential: '500%',
      time: '6-18 meses',
      risk: 'Médio',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'diversificada',
      title: 'Portfólio Diversificado',
      subtitle: 'Múltiplas fontes de renda',
      description: 'Estratégia sofisticada que combina diferentes tipos de investimentos para maximizar retorno e minimizar riscos.',
      icon: PieChart,
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      features: ['Múltiplas classes de ativos', 'Balanceamento de risco', 'Renda passiva diversificada', 'Proteção contra inflação'],
      examples: ['Imóveis + Negócios', 'Renda fixa + Variável', 'Nacional + Internacional', 'Curto + Longo prazo'],
      potential: '400%',
      time: '18-36 meses',
      risk: 'Baixo',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'exclusiva',
      title: 'Estratégia VIP',
      subtitle: 'Para investidores avançados',
      description: 'Estratégias exclusivas e personalizadas para investidores experientes que buscam maximizar retornos com carteiras de alto valor.',
      icon: Crown,
      gradient: 'from-yellow-500 via-orange-500 to-red-500',
      features: ['Consultoria personalizada 1:1', 'Oportunidades exclusivas', 'Acesso a investimentos premium', 'Monitoramento 24/7'],
      examples: ['Fundos imobiliários premium', 'Participações societárias', 'Investimentos internacionais', 'Oportunidades off-market'],
      potential: '600%',
      time: '12-30 meses',
      risk: 'Personalizado',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Multiplicação de Capital',
      description: 'Transforme R$ 100.000 em R$ 300.000+ usando estratégias de alavancagem inteligente.',
      color: 'from-yellow-500 to-orange-500',
      impact: '3x'
    },
    {
      icon: Clock,
      title: 'Tempo Otimizado',
      description: 'Alcance seus objetivos financeiros em 50% menos tempo comparado a investimentos tradicionais.',
      color: 'from-blue-500 to-cyan-500',
      impact: '50%'
    },
    {
      icon: Shield,
      title: 'Risco Controlado',
      description: 'Estratégias testadas e comprovadas que minimizam riscos enquanto maximizam retornos.',
      color: 'from-green-500 to-emerald-500',
      impact: '95%'
    },
    {
      icon: Users,
      title: 'Suporte Especializado',
      description: 'Equipe de especialistas dedicados exclusivamente aos seus investimentos.',
      color: 'from-purple-500 to-violet-500',
      impact: '24/7'
    },
    {
      icon: Brain,
      title: 'Inteligência Artificial',
      description: 'Análise de mercado em tempo real usando IA para identificar as melhores oportunidades.',
      color: 'from-red-500 to-pink-500',
      impact: 'Real-time'
    },
    {
      icon: Award,
      title: 'Resultados Comprovados',
      description: 'Mais de 500 clientes já multiplicaram seu patrimônio usando nossas estratégias.',
      color: 'from-indigo-500 to-blue-500',
      impact: '500+'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Análise Profunda',
      description: 'Avaliamos seu perfil, objetivos e tolerância ao risco para criar uma estratégia personalizada.',
      icon: Eye,
      color: 'from-purple-500 to-violet-500'
    },
    {
      step: '2',
      title: 'Estratégia Customizada',
      description: 'Desenvolvemos uma estratégia única baseada em suas necessidades e oportunidades de mercado.',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '3',
      title: 'Implementação Inteligente',
      description: 'Executamos sua estratégia com precisão cirúrgica, aproveitando timing e oportunidades.',
      icon: Rocket,
      color: 'from-green-500 to-emerald-500'
    },
    {
      step: '4',
      title: 'Monitoramento Contínuo',
      description: 'Acompanhamos e ajustamos sua estratégia em tempo real para maximizar resultados.',
      icon: Activity,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const testimonials = [
    {
      name: 'Carlos Mendes',
      role: 'Empresário',
      investment: 'R$ 200.000',
      result: 'R$ 850.000',
      time: '18 meses',
      quote: 'A estratégia de alavancagem imobiliária transformou completamente minha situação financeira. Em 18 meses, multipliquei meu investimento por mais de 4 vezes.',
      rating: 5
    },
    {
      name: 'Ana Rodrigues',
      role: 'Executiva',
      investment: 'R$ 150.000',
      result: 'R$ 720.000',
      time: '24 meses',
      quote: 'O portfólio diversificado me permitiu criar múltiplas fontes de renda. Hoje tenho uma renda passiva que supera meu salário.',
      rating: 5
    },
    {
      name: 'Roberto Silva',
      role: 'Investidor',
      investment: 'R$ 500.000',
      result: 'R$ 2.1M',
      time: '30 meses',
      quote: 'A estratégia VIP foi exatamente o que eu precisava. Consultoria personalizada e oportunidades exclusivas que não encontro em lugar nenhum.',
      rating: 5
    }
  ];

  const activeStrategyData = strategies.find(strategy => strategy.id === activeStrategy);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header onOpenQuiz={() => setShowQuiz(true)} />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-8">
            <BackToHomeButton />
          </div>
          <div className="text-center max-w-5xl mx-auto">
            <div 
              ref={headerAnimation.elementRef}
              style={headerAnimation.style}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm"
            >
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="text-sm text-purple-300 font-medium tracking-wider">ESTRATÉGIA EXCLUSIVA</span>
            </div>
            
            <h1 
              ref={titleAnimation.elementRef}
              style={titleAnimation.style}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Alavancagem 
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 bg-clip-text text-transparent">
                Inteligente
              </span>
            </h1>
            
            <p 
              ref={descriptionAnimation.elementRef}
              style={descriptionAnimation.style}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              <span className="text-purple-300 font-semibold">Multiplique seu patrimônio em até 6x</span> usando estratégias 
              exclusivas de alavancagem que apenas <span className="text-pink-300 font-semibold">1% dos investidores</span> conhecem.
            </p>

            {/* Impact Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">6x</div>
                <div className="text-gray-300 text-sm">Potencial de Multiplicação</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">18</div>
                <div className="text-gray-300 text-sm">Meses para Resultados</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-rose-400 mb-2">95%</div>
                <div className="text-gray-300 text-sm">Taxa de Sucesso</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/20 to-orange-900/20 border-y border-red-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              O <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">Problema</span> que Você Não Vê
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✗</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Dinheiro Parado</h3>
                    <p className="text-gray-300">Seu dinheiro está perdendo valor para a inflação enquanto você espera a contemplação.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✗</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Oportunidades Perdidas</h3>
                    <p className="text-gray-300">Enquanto você espera, outros estão multiplicando seu patrimônio com estratégias inteligentes.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">✗</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Renda Passiva Zero</h3>
                    <p className="text-gray-300">Você não está gerando renda enquanto espera, perdendo tempo valioso de crescimento.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl p-8 border border-red-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Custo da Inação</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Perda por inflação (12 meses):</span>
                  <span className="text-red-400 font-bold">R$ 12.000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Oportunidade perdida (alavancagem):</span>
                  <span className="text-red-400 font-bold">R$ 150.000</span>
                </div>
                <div className="flex justify-between items-center border-t border-gray-700 pt-4">
                  <span className="text-white font-bold">Total perdido:</span>
                  <span className="text-red-400 font-bold text-xl">R$ 162.000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategies Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Estratégias de <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Alavancagem</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Escolha a estratégia que melhor se adapta ao seu perfil e objetivos financeiros
            </p>
          </div>

          {/* Strategy Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {strategies.map((strategy) => (
              <button
                key={strategy.id}
                onClick={() => setActiveStrategy(strategy.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeStrategy === strategy.id
                    ? `bg-gradient-to-r ${strategy.gradient} text-white shadow-lg`
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {strategy.title}
              </button>
            ))}
          </div>

          {/* Active Strategy Details */}
          {activeStrategyData && (
            <div 
              ref={strategiesAnimation.elementRef}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 mb-16"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-r ${activeStrategyData.gradient} rounded-2xl flex items-center justify-center`}>
                      <activeStrategyData.icon className="h-10 w-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">{activeStrategyData.title}</h3>
                      <p className="text-purple-300 font-semibold text-lg">{activeStrategyData.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                    {activeStrategyData.description}
                  </p>

                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400 mb-1">{activeStrategyData.potential}</div>
                      <div className="text-gray-300 text-sm">Potencial</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pink-400 mb-1">{activeStrategyData.time}</div>
                      <div className="text-gray-300 text-sm">Tempo</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-rose-400 mb-1">{activeStrategyData.risk}</div>
                      <div className="text-gray-300 text-sm">Risco</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3">Características:</h4>
                      <ul className="space-y-2">
                        {activeStrategyData.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-purple-400" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-3">Exemplos:</h4>
                      <ul className="space-y-2">
                        {activeStrategyData.examples.map((example, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className={`bg-gradient-to-r ${activeStrategyData.color} rounded-2xl p-8 text-white`}>
                    <h4 className="text-2xl font-bold mb-4">Resultado Projetado</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Investimento inicial:</span>
                        <span className="font-bold">R$ 100.000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Multiplicação:</span>
                        <span className="font-bold">{activeStrategyData.potential}</span>
                      </div>
                      <div className="flex justify-between border-t pt-4">
                        <span>Valor final:</span>
                        <span className="font-bold text-2xl">R$ 300.000+</span>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => {
                      const quizButton = document.querySelector('[data-quiz-trigger]') as HTMLButtonElement;
                      if (quizButton) {
                        quizButton.click();
                      }
                    }}
                    className={`w-full py-4 px-6 bg-gradient-to-r ${activeStrategyData.gradient} hover:from-yellow-600 hover:to-yellow-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2`}
                  >
                    <span>Quero Esta Estratégia</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Por que <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Alavancagem</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Os benefícios que fazem a diferença entre investidores comuns e investidores excepcionais
            </p>
          </div>

          <div 
            ref={benefitsAnimation.elementRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                style={benefitsAnimation.getItemStyle(index)}
                className="group"
              >
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 h-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className={`inline-block px-3 py-1 bg-gradient-to-r ${benefit.color} rounded-full text-white text-sm font-bold mb-4`}>
                    {benefit.impact}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nosso <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Processo</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Uma metodologia exclusiva que garante resultados excepcionais
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Resultados <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Reais</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Histórias de clientes que transformaram suas vidas financeiras
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 h-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="bg-purple-500/20 rounded-lg p-3">
                      <div className="text-purple-300">Investimento</div>
                      <div className="text-white font-bold">{testimonial.investment}</div>
                    </div>
                    <div className="bg-green-500/20 rounded-lg p-3">
                      <div className="text-green-300">Resultado</div>
                      <div className="text-white font-bold">{testimonial.result}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                  
                  <div className="border-t border-gray-700 pt-4">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-purple-300 text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-xs mt-1">Em {testimonial.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-20 bg-gradient-to-r from-red-600/20 to-orange-600/20 border-y border-red-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">Atenção:</span> Oportunidade Limitada
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Estamos aceitando apenas <span className="text-red-300 font-bold">50 novos clientes</span> por mês para manter 
              a qualidade excepcional do nosso atendimento. <span className="text-orange-300 font-bold">Restam apenas 12 vagas</span> para este mês.
            </p>
            
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl p-8 border border-red-500/30 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">12</div>
                  <div className="text-gray-300 text-sm">Vagas Restantes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">7</div>
                  <div className="text-gray-300 text-sm">Dias Restantes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">R$ 2.1M</div>
                  <div className="text-gray-300 text-sm">Potencial Médio</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const quizButton = document.querySelector('[data-quiz-trigger]') as HTMLButtonElement;
                  if (quizButton) {
                    quizButton.click();
                  }
                }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
              >
                <Crown className="w-5 h-5" />
                <span>Garantir Minha Vaga VIP</span>
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
                Falar com Consultor VIP
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AlavancagemPage;
