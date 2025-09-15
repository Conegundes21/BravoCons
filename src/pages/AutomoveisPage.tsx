import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Car, 
  CheckCircle, 
  Star, 
  TrendingUp, 
  Shield, 
  Clock, 
  DollarSign,
  Calculator,
  ArrowRight,
  Zap,
  Target,
  Award,
  Users,
  BarChart3,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useFadeInAnimation } from '../hooks/useFadeInAnimation';
import { useStaggeredFadeIn } from '../hooks/useStaggeredFadeIn';
import { useNumberAnimation } from '../hooks/useNumberAnimation';
import { trackingService } from '../services/tracking';

const AnimatedStat: React.FC<{ end: number; suffix?: string; prefix?: string }> = ({ end, suffix = '', prefix = '' }) => {
  const { count, elementRef } = useNumberAnimation({
    end,
    suffix,
    prefix,
    duration: 2000
  });

  return (
    <div ref={elementRef} className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
      {count}
    </div>
  );
};

const AutomoveisPage: React.FC = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  useEffect(() => {
    trackingService.trackPageView('Automóveis Page');
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

  const vehiclesAnimation = useStaggeredFadeIn({ 
    itemCount: 4, 
    staggerDelay: 200, 
    direction: 'up' 
  });

  const processAnimation = useStaggeredFadeIn({ 
    itemCount: 4, 
    staggerDelay: 250, 
    direction: 'up' 
  });

  const statsAnimation = useStaggeredFadeIn({ 
    itemCount: 4, 
    staggerDelay: 150, 
    direction: 'up' 
  });

  const benefits = [
    {
      icon: DollarSign,
      title: "Sem Juros",
      description: "Pague apenas a taxa de administração fixa, sem juros abusivos como no financiamento tradicional.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Clock,
      title: "Contemplação Rápida",
      description: "Nossa metodologia exclusiva garante contemplação em média 9,2 meses.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Shield,
      title: "100% Seguro",
      description: "Regulamentado pelo Banco Central com garantias e proteções para todos os participantes.",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Target,
      title: "Estratégia Personalizada",
      description: "Análise completa do seu perfil para escolher a melhor estratégia de contemplação.",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Users,
      title: "Consultoria Gratuita",
      description: "Acompanhamento especializado desde a adesão até a contemplação do seu veículo.",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Award,
      title: "95% de Sucesso",
      description: "Taxa de sucesso comprovada com nossa metodologia exclusiva de contemplação.",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  const vehicles = [
    {
      category: "Carros Populares",
      examples: ["Honda Civic", "Toyota Corolla", "Volkswagen Polo", "Fiat Argo"],
      priceRange: "R$ 50.000 - R$ 120.000",
      icon: Car,
      color: "from-blue-500 to-indigo-600"
    },
    {
      category: "SUVs e Utilitários",
      examples: ["Honda CR-V", "Toyota RAV4", "Volkswagen T-Cross", "Jeep Compass"],
      priceRange: "R$ 80.000 - R$ 200.000",
      icon: Car,
      color: "from-green-500 to-emerald-600"
    },
    {
      category: "Veículos Premium",
      examples: ["BMW X1", "Mercedes-Benz A-Class", "Audi Q3", "Volvo XC40"],
      priceRange: "R$ 150.000 - R$ 350.000",
      icon: Star,
      color: "from-purple-500 to-violet-600"
    },
    {
      category: "Veículos Elétricos",
      examples: ["BYD Dolphin", "Volkswagen ID.4", "BMW iX3", "Tesla Model 3"],
      priceRange: "R$ 120.000 - R$ 400.000",
      icon: Zap,
      color: "from-cyan-500 to-blue-600"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Análise e Simulação",
      description: "Analisamos seu perfil e simulamos as melhores opções de consórcio para seu veículo dos sonhos.",
      icon: Calculator,
      color: "from-blue-500 to-indigo-600"
    },
    {
      step: "2",
      title: "Escolha do Grupo",
      description: "Selecionamos o grupo com melhor performance de contemplação baseado em nossa análise.",
      icon: Target,
      color: "from-green-500 to-emerald-600"
    },
    {
      step: "3",
      title: "Estratégia de Lance",
      description: "Desenvolvemos uma estratégia personalizada de lances para acelerar sua contemplação.",
      icon: TrendingUp,
      color: "from-purple-500 to-violet-600"
    },
    {
      step: "4",
      title: "Contemplação e Liberação",
      description: "Acompanhamos todo o processo até a contemplação e liberação da sua carta de crédito.",
      icon: Award,
      color: "from-orange-500 to-red-600"
    }
  ];

  const stats = [
    { end: 95, suffix: '%', label: 'Taxa de Sucesso', icon: Award },
    { end: 9.2, suffix: '', label: 'Meses Médios', decimals: 1, icon: Clock },
    { end: 100, suffix: '+', label: 'Veículos Entregues', icon: Car },
    { end: 40, suffix: '%', label: 'Economia vs Financiamento', icon: DollarSign }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-x-hidden">
      <Header onOpenQuiz={() => setShowQuiz(true)} />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div 
              ref={headerAnimation.elementRef}
              style={headerAnimation.style}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6"
            >
              <Car className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300 font-medium">Consórcio de Automóveis</span>
            </div>
            
            <h1 
              ref={titleAnimation.elementRef}
              style={titleAnimation.style}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Seu Carro dos Sonhos
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
                Sem Juros
              </span>
            </h1>
            
            <p 
              ref={descriptionAnimation.elementRef}
              style={descriptionAnimation.style}
              className="text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              Conquiste o veículo perfeito com nosso consórcio inteligente. 
              Metodologia exclusiva que garante contemplação rápida e sem juros abusivos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowQuiz(true)}
                className="group bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 mx-auto sm:mx-0"
              >
                <Calculator className="w-5 h-5" />
                <span>Simular Agora</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <Link
                to="/#beneficios"
                className="group bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold border border-white/20 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 mx-auto sm:mx-0"
              >
                <span>Ver Benefícios</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={statsAnimation.elementRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div 
                key={index}
                style={statsAnimation.getItemStyle(index)}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
                <AnimatedStat end={stat.end} suffix={stat.suffix} />
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Por que escolher nosso
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
                Consórcio de Automóveis?
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Descubra as vantagens exclusivas que fazem do nosso consórcio a melhor opção para conquistar seu veículo.
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
        </div>
      </section>

      {/* Vehicles Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Veículos Disponíveis
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Escolha entre uma ampla variedade de veículos, desde carros populares até veículos premium e elétricos.
            </p>
          </div>

          <div 
            ref={vehiclesAnimation.elementRef}
            className="grid md:grid-cols-2 gap-8"
          >
            {vehicles.map((vehicle, index) => (
              <div 
                key={index}
                style={vehiclesAnimation.getItemStyle(index)}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${vehicle.color} rounded-xl flex items-center justify-center mr-4`}>
                    <vehicle.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{vehicle.category}</h3>
                    <p className="text-blue-400 font-medium">{vehicle.priceRange}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {vehicle.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Como Funciona
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Nosso processo exclusivo garante a melhor experiência e resultados para você.
            </p>
          </div>

          <div 
            ref={processAnimation.elementRef}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {process.map((step, index) => (
              <div 
                key={index}
                style={processAnimation.getItemStyle(index)}
                className="text-center"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-sm">
                  {step.step}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 to-indigo-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Pronto para conquistar
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
              seu veículo dos sonhos?
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Comece agora mesmo sua simulação gratuita e descubra como podemos ajudar você a conquistar seu veículo sem juros.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowQuiz(true)}
              className="group bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 mx-auto sm:mx-0"
            >
              <Calculator className="w-5 h-5" />
              <span>Simular Agora</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a
              href="tel:+5569999999999"
              className="group bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold border border-white/20 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 mx-auto sm:mx-0"
            >
              <Phone className="w-5 h-5" />
              <span>Falar com Especialista</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AutomoveisPage;