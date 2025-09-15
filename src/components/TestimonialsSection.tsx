import React from 'react';
import { useNumberAnimation } from '../hooks/useNumberAnimation';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useFadeInAnimation } from '../hooks/useFadeInAnimation';
import { useStaggeredFadeIn } from '../hooks/useStaggeredFadeIn';
import { TrendingUp, Clock, Star, DollarSign } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation({ threshold: 0.2 });

  // Animações para elementos principais
  const headerAnimation = useFadeInAnimation({ delay: 200, direction: 'up' });
  const titleAnimation = useFadeInAnimation({ delay: 400, direction: 'up' });
  const descriptionAnimation = useFadeInAnimation({ delay: 600, direction: 'up' });
  
  // Animação escalonada para os stats
  const statsAnimation = useStaggeredFadeIn({ 
    itemCount: 4, 
    staggerDelay: 150, 
    direction: 'up' 
  });

  // Animação escalonada para os depoimentos
  const testimonialsAnimation = useStaggeredFadeIn({ 
    itemCount: 6, 
    staggerDelay: 200, 
    direction: 'up' 
  });

  const stats = [
    { end: 100, prefix: '+', suffix: '', label: 'Contemplações', color: 'yellow', icon: TrendingUp },
    { end: 9.2, prefix: '', suffix: '', label: 'Meses médios', color: 'green', decimals: 1, icon: Clock },
    { end: 95, prefix: '', suffix: '%', label: 'Satisfação', color: 'blue', icon: Star },
    { end: 50, prefix: 'R$ ', suffix: 'M+', label: 'Crédito liberado', color: 'purple', icon: DollarSign }
  ];

  const testimonials = [
    {
      name: "Pedro Martins",
      location: "Porto Velho, RO",
      vehicle: "Honda Civic 2023",
      value: "R$ 110.000",
      contemplation: "8 meses",
      text: "Consegui minha contemplação em apenas 8 meses! O atendimento foi excepcional e a estratégia que eles me passaram funcionou perfeitamente. Hoje tenho meu Civic zero sem ter pagado um centavo de juros."
    },
    {
      name: "Ana Carolina Silva",
      location: "Ji-Paraná, RO",
      vehicle: "Toyota Corolla XEI",
      value: "R$ 95.000",
      contemplation: "12 meses",
      text: "Era meu primeiro consórcio e estava com muitas dúvidas. A equipe me explicou tudo com paciência e me acompanhou durante todo o processo. Hoje dirijo meu sonho!"
    },
    {
      name: "Ricardo Santos",
      location: "Ariquemes, RO",
      vehicle: "Ranger XLT 2024",
      value: "R$ 180.000",
      contemplation: "6 meses",
      text: "Contemplação em 6 meses com lance estratégico! O retorno do investimento foi incrível. Recomendo para qualquer pessoa que quer um veículo sem se endividar."
    },
    {
      name: "Mariana Oliveira",
      location: "Cacoal, RO",
      vehicle: "Jeep Compass 2023",
      value: "R$ 145.000",
      contemplation: "10 meses",
      text: "O consórcio foi a melhor decisão financeira que já tomei. Paguei 40% menos do que pagaria em um financiamento e ainda tive a flexibilidade que precisava."
    },
    {
      name: "Carlos Eduardo",
      location: "Rolim de Moura, RO",
      vehicle: "Hilux SRX 2024",
      value: "R$ 280.000",
      contemplation: "14 meses",
      text: "Grupo com alta performance de contemplação. A consultoria foi fundamental para escolher a melhor estratégia. Hoje tenho minha Hilux dos sonhos!"
    },
    {
      name: "Fernanda Lima",
      location: "Vilhena, RO",
      vehicle: "BMW X1 2023",
      value: "R$ 220.000",
      contemplation: "9 meses",
      text: "Sempre sonhei com um carro premium mas não queria pagar juros altos. O consórcio foi perfeito! Contemplação em 9 meses e realizei meu sonho."
    }
  ];

  return (
    <section 
      ref={elementRef}
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-500/3 to-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div 
            ref={headerAnimation.elementRef}
            style={headerAnimation.style}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-full px-6 py-3 mb-8"
          >
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-yellow-300 font-medium">Resultados Comprovados</span>
          </div>
          
          <h2 
            ref={titleAnimation.elementRef}
            style={titleAnimation.style}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Casos reais de
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Contemplações em Rondônia
            </span>
          </h2>
          
          <p 
            ref={descriptionAnimation.elementRef}
            style={descriptionAnimation.style}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Conheça histórias reais de pessoas que conquistaram seus veículos dos sonhos com nossa consultoria especializada.
          </p>
        </div>

        {/* Stats Grid */}
        <div 
          ref={statsAnimation.elementRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => {
            const { count, elementRef: numberRef } = useNumberAnimation({
              end: stat.end,
              prefix: stat.prefix,
              suffix: stat.suffix,
              decimals: stat.decimals || 0,
              duration: 2500
            });

            return (
              <div 
                key={index}
                style={statsAnimation.getItemStyle(index)}
                className="text-center group"
              >
                <div className={`w-20 h-20 bg-gradient-to-br from-${stat.color}-500/20 to-${stat.color}-600/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                  <stat.icon className={`w-8 h-8 text-${stat.color}-400`} />
                </div>
                <div ref={numberRef} className={`text-4xl md:text-5xl font-black text-${stat.color}-400 mb-3`}>
                  {count}
                </div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Testimonials Grid */}
        <div 
          ref={testimonialsAnimation.elementRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              style={testimonialsAnimation.getItemStyle(index)}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-yellow-500/30 transition-all duration-300 hover:scale-105"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.location}</p>
                </div>
                <div className="text-2xl opacity-20">"</div>
              </div>

              {/* Vehicle Info */}
              <div className="bg-gradient-to-r from-gray-700/30 to-gray-800/30 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-300 font-medium">{testimonial.vehicle}</p>
                    <p className="text-xs text-gray-400">{testimonial.value}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-yellow-400 font-bold">{testimonial.contemplation}</p>
                    <p className="text-xs text-gray-400">Contemplação</p>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {testimonial.text}
              </p>

              {/* Verified Badge */}
              <div className="flex items-center space-x-2 text-xs text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Depoimento verificado</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Description */}
        <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-gray-800/30 to-gray-700/30 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-gray-700/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              Resultados que Falam por Si
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Nossos números não mentem. Com mais de 100 contemplações em Rondônia, 
              tempo médio de 9.2 meses para contemplação, 95% de satisfação dos clientes 
              e mais de R$ 50 milhões em crédito liberado, somos a escolha certa para seu consórcio.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
              <div className="flex items-center space-x-2 text-yellow-400">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Contemplações aceleradas</span>
              </div>
              <div className="flex items-center space-x-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Tempo médio otimizado</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Alta satisfação</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-400">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Crédito liberado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;