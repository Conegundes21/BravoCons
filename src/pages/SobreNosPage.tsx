import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Target, 
  Award, 
  Shield, 
  TrendingUp, 
  Star,
  CheckCircle,
  ArrowRight,
  Quote,
  MapPin,
  Phone,
  Mail,
  Clock,
  Heart,
  Zap,
  Globe,
  BarChart3,
  Lightbulb,
  Handshake
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
    <div ref={elementRef} className="text-4xl font-bold text-yellow-400 mb-2">
      {count}
    </div>
  );
};

const SobreNosPage: React.FC = () => {
  const [showQuiz, setShowQuiz] = useState(false);

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

  const valuesAnimation = useStaggeredFadeIn({ 
    itemCount: 4, 
    staggerDelay: 200, 
    direction: 'up' 
  });

  const teamAnimation = useStaggeredFadeIn({ 
    itemCount: 3, 
    staggerDelay: 300, 
    direction: 'up' 
  });

  const stats = [
    { value: 1000, suffix: '+', label: 'Famílias Atendidas', icon: Users },
    { value: 50, prefix: 'R$ ', suffix: 'M+', label: 'Crédito Liberado', icon: TrendingUp },
    { value: 95, suffix: '%', label: 'Taxa de Satisfação', icon: Star },
    { value: 24, suffix: 'h', label: 'Suporte Disponível', icon: Clock }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excelência',
      description: 'Buscamos sempre a melhor solução para cada cliente, com foco na qualidade e resultados excepcionais.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Transparência',
      description: 'Agimos com total transparência e honestidade, construindo relacionamentos baseados na confiança.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Comprometimento',
      description: 'Somos apaixonados pelo que fazemos e comprometidos com o sucesso de cada projeto.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Inovação',
      description: 'Estamos sempre evoluindo e inovando para oferecer as melhores estratégias do mercado.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const team = [
    {
      name: 'Equipe Especializada',
      role: 'Consultores Certificados',
      description: 'Nossa equipe é formada por especialistas certificados com anos de experiência no mercado de consórcios.',
      icon: Users,
      color: 'from-purple-500 to-violet-500'
    },
    {
      name: 'Tecnologia Avançada',
      role: 'Sistemas Inteligentes',
      description: 'Utilizamos tecnologia de ponta para análise e monitoramento, garantindo resultados superiores.',
      icon: Globe,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'Suporte 24/7',
      role: 'Atendimento Completo',
      description: 'Oferecemos suporte completo 24 horas por dia, 7 dias por semana para nossos clientes.',
      icon: Clock,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const testimonials = [
    {
      text: "A Bravo Consórcios transformou minha vida! Consegui minha casa própria em menos de 2 anos com uma estratégia perfeita.",
      author: "Maria Silva",
      role: "Cliente Imobiliário",
      rating: 5
    },
    {
      text: "Profissionais excepcionais! Me ajudaram a conquistar meu carro dos sonhos com economia de mais de 30%.",
      author: "João Santos",
      role: "Cliente Automotivo",
      rating: 5
    },
    {
      text: "Consultoria de altíssima qualidade. Recomendo para quem quer resultados reais e não promessas vazias.",
      author: "Ana Costa",
      role: "Cliente Empresarial",
      rating: 5
    }
  ];

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
              <Heart className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-yellow-300 font-medium">Nossa História</span>
            </div>
            
            <h1 
              ref={titleAnimation.elementRef}
              style={titleAnimation.style}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Sobre a 
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Bravo Consórcios
              </span>
            </h1>
            
            <p 
              ref={descriptionAnimation.elementRef}
              style={descriptionAnimation.style}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Transformamos sonhos em realidade através de estratégias inteligentes, 
              transparência total e comprometimento genuíno com cada cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <AnimatedStat end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Nossa <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">História</span>
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Fundada com a missão de democratizar o acesso ao crédito, a Bravo Consórcios nasceu 
                  da necessidade de oferecer uma alternativa inteligente aos financiamentos tradicionais.
                </p>
                <p>
                  Nossa jornada começou quando identificamos que muitas pessoas pagavam juros excessivos 
                  e enfrentavam dificuldades para realizar seus sonhos. Decidimos criar uma solução 
                  que fosse verdadeiramente benéfica para nossos clientes.
                </p>
                <p>
                  Hoje, somos referência em estratégias de consórcio, tendo ajudado mais de 1000 famílias 
                  a conquistar seus objetivos com economia, segurança e flexibilidade.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl p-8 border border-gray-600/50 overflow-hidden bg-gray-800/50 min-h-[350px]">
                {/* Logo como fundo - abordagem direta */}
                <img 
                  src="/Bravo.png" 
                  alt="Bravo Consórcios Logo"
                  className="absolute inset-0 w-full h-full object-contain opacity-30"
                />
                
                {/* Overlay para legibilidade */}
                <div className="absolute inset-0 bg-black/30"></div>
                
                {/* Conteúdo */}
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Nossa Missão</h3>
                      <p className="text-yellow-300">Transformar vidas através do crédito inteligente</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Democratizar o acesso ao crédito de qualidade, oferecendo estratégias inteligentes
                    que permitem às pessoas realizar seus sonhos sem comprometer seu futuro financeiro.
                  </p>
                  
                  {/* Ícones de Valor e Confiança */}
                  <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-white font-semibold text-sm mb-1">Agilidade</h4>
                      <p className="text-gray-400 text-xs">Processo rápido e eficiente</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-white font-semibold text-sm mb-1">Segurança</h4>
                      <p className="text-gray-400 text-xs">Proteção total do seu investimento</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <Globe className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-white font-semibold text-sm mb-1">Cobertura</h4>
                      <p className="text-gray-400 text-xs">Atendimento em todo o Brasil</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <Handshake className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-white font-semibold text-sm mb-1">Confiança</h4>
                      <p className="text-gray-400 text-xs">Parceria de longa duração</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nossos <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Valores</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Os princípios que guiam cada decisão e cada relacionamento que construímos
            </p>
          </div>

          <div 
            ref={valuesAnimation.elementRef}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <div 
                key={index}
                style={valuesAnimation.getItemStyle(index)}
                className="group"
              >
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 h-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Por que Escolher a <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Bravo</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Nossos diferenciais que fazem a diferença na sua jornada
            </p>
          </div>

          <div 
            ref={teamAnimation.elementRef}
            className="grid md:grid-cols-3 gap-8"
          >
            {team.map((member, index) => (
              <div 
                key={index}
                style={teamAnimation.getItemStyle(index)}
                className="group"
              >
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 h-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                  <div className={`w-20 h-20 bg-gradient-to-r ${member.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <member.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-yellow-300 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-300 leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disal Consórcios Section */}
      <section className="py-20 bg-gradient-to-b from-blue-600/20 to-blue-700/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nossa <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Parceria</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Representamos oficialmente a Disal Consórcios, uma das maiores administradoras do país
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Disal Consórcios
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    A Disal Consórcios é uma das maiores e mais respeitadas administradoras de consórcios do Brasil, 
                    com mais de 30 anos de experiência no mercado.
                  </p>
                  <p>
                    Como representantes oficiais, oferecemos acesso exclusivo aos melhores grupos e condições 
                    especiais para nossos clientes, garantindo maior segurança e confiabilidade.
                  </p>
                  <p>
                    Nossa parceria estratégica nos permite oferecer produtos de altíssima qualidade com 
                    as melhores taxas e condições do mercado.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-2xl p-8 border border-blue-500/30">
                <div className="w-32 h-32 bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-gray-400 text-sm">Logo Disal</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Disal Consórcios</h4>
                <p className="text-blue-300 font-semibold">Administradora Oficial</p>
                <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-400">30+</div>
                    <div className="text-gray-300 text-sm">Anos de Experiência</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-400">1M+</div>
                    <div className="text-gray-300 text-sm">Clientes Atendidos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-600/20 to-yellow-700/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para Fazer Parte da Nossa <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">História</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Junte-se a mais de 1000 famílias que já transformaram seus sonhos em realidade 
              com a Bravo Consórcios. Sua jornada rumo à realização começa agora.
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
                <span>Começar Minha Jornada</span>
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

export default SobreNosPage;
