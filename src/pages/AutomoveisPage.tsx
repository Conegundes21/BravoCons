import React, { useState, useEffect } from 'react';
import { 
  Car, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  TrendingUp, 
  Shield, 
  Zap, 
  Target,
  Calculator,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Award,
  Users,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AutomoveisPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const vehicleTypes = [
    {
      icon: '🚗',
      title: 'Carros Populares',
      description: 'Veículos econômicos e práticos para o dia a dia',
      examples: ['Honda Civic', 'Toyota Corolla', 'Volkswagen Golf']
    },
    {
      icon: '🚙',
      title: 'SUVs e Utilitários',
      description: 'Veículos versáteis para família e trabalho',
      examples: ['Honda CR-V', 'Toyota RAV4', 'Jeep Compass']
    },
    {
      icon: '🏍️',
      title: 'Motos e Scooters',
      description: 'Mobilidade urbana com economia e agilidade',
      examples: ['Honda CG 160', 'Yamaha NMAX', 'Suzuki GSX-R']
    },
    {
      icon: '⚡',
      title: 'Veículos Elétricos',
      description: 'Tecnologia sustentável para o futuro',
      examples: ['Tesla Model 3', 'Nissan Leaf', 'Chevrolet Bolt']
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Sem Juros',
      description: 'Pague apenas o valor do veículo, sem juros abusivos'
    },
    {
      icon: Shield,
      title: 'Segurança Total',
      description: 'Seu dinheiro fica em garantia até a contemplação'
    },
    {
      icon: Zap,
      title: 'Aprovação Rápida',
      description: 'Processo simplificado e aprovação em até 24h'
    },
    {
      icon: Target,
      title: 'Planos Flexíveis',
      description: 'Prazos e valores adaptados à sua realidade'
    }
  ];

  const values = [
    { credit: 'R$ 50.000', installment: 'R$ 491' },
    { credit: 'R$ 60.000', installment: 'R$ 589' },
    { credit: 'R$ 90.000', installment: 'R$ 792' },
    { credit: 'R$ 100.000', installment: 'R$ 880' },
    { credit: 'R$ 110.000', installment: 'R$ 968' },
    { credit: 'R$ 120.000', installment: 'R$ 1.056' },
    { credit: 'R$ 130.000', installment: 'R$ 1.144' },
    { credit: 'R$ 140.000', installment: 'R$ 1.232' },
    { credit: 'R$ 150.000', installment: 'R$ 1.320' },
    { credit: 'R$ 160.000', installment: 'R$ 1.408' },
    { credit: 'R$ 170.000', installment: 'R$ 1.496' },
    { credit: 'R$ 180.000', installment: 'R$ 1.584' }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-8">
              <Car className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Consórcio de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Automóveis</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Realize o sonho do seu veículo com a segurança e flexibilidade do consórcio. 
              Sem juros, sem entrada e com planos personalizados para você.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <Calculator className="w-5 h-5" />
                <span>Simular Agora</span>
              </button>
              <button className="border border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Falar com Especialista</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tipos de Veículos */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Tipos de Veículos Disponíveis
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Oferecemos consórcios para todos os tipos de veículos, desde carros populares até veículos elétricos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vehicleTypes.map((type, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{type.title}</h3>
                <p className="text-gray-400 mb-4">{type.description}</p>
                <div className="space-y-2">
                  {type.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-gray-300">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Por que escolher consórcio de automóveis?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Vantagens exclusivas que fazem do consórcio a melhor opção para seu veículo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`text-center transition-all duration-500 transform hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores de Referência */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Valores de Referência
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Confira as opções de crédito e parcelas disponíveis para automóveis
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">{value.credit}</div>
                  <div className="text-sm text-gray-400 mb-4">Valor do crédito</div>
                  <div className="text-xl font-bold text-green-400 mb-2">{value.installment}</div>
                  <div className="text-sm text-gray-400">Parcela mensal</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 sm:p-12 border border-gray-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } transition-all duration-1000`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Pronto para realizar o sonho do seu automóvel?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Nossa equipe especializada está pronta para te ajudar a escolher o melhor plano 
              e iniciar sua jornada rumo ao seu veículo dos sonhos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <Calculator className="w-5 h-5" />
                <span>Simular Agora</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Falar com Especialista</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Navegação para outras páginas */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Conheça nossos outros tipos de consórcio
            </h3>
            <p className="text-gray-300">
              Oferecemos soluções completas para diferentes necessidades
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link 
              to="/servicos/imoveis"
              className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">Consórcio Imobiliário</h4>
                  <p className="text-gray-400 mt-2">Realize o sonho da casa própria</p>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-emerald-400 transition-colors" />
              </div>
            </Link>
            
            <Link 
              to="/servicos/caminhoes"
              className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">Consórcio de Caminhões</h4>
                  <p className="text-gray-400 mt-2">Potencialize seu negócio</p>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-orange-400 transition-colors" />
              </div>
            </Link>
            
            <Link 
              to="/servicos/maquinarios"
              className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">Consórcio de Maquinários</h4>
                  <p className="text-gray-400 mt-2">Equipamentos pesados</p>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-yellow-400 transition-colors" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutomoveisPage;


