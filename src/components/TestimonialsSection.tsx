import React from 'react';
import { Star, Quote, Car, CheckCircle } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Pedro Martins",
      location: "Porto Velho, RO",
      vehicle: "Honda Civic 2023",
      value: "R$ 110.000",
      months: 8,
      rating: 5,
      text: "Consegui minha contemplação em apenas 8 meses! O atendimento foi excepcional e a estratégia que eles me passaram funcionou perfeitamente. Hoje tenho meu Civic zero sem ter pagado um centavo de juros.",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Ana Carolina Silva",
      location: "Ji-Paraná, RO",
      vehicle: "Toyota Corolla XEI",
      value: "R$ 95.000",
      months: 12,
      rating: 5,
      text: "Era meu primeiro consórcio e estava com muitas dúvidas. A equipe me explicou tudo com paciência e me acompanhou durante todo o processo. Hoje dirijo meu sonho!",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Ricardo Santos",
      location: "Ariquemes, RO",
      vehicle: "Ranger XLT 2024",
      value: "R$ 180.000",
      months: 6,
      rating: 5,
      text: "Contemplação em 6 meses com lance estratégico! O retorno do investimento foi incrível. Recomendo para qualquer pessoa que quer um veículo sem se endividar.",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Mariana Oliveira",
      location: "Cacoal, RO",
      vehicle: "Jeep Compass 2023",
      value: "R$ 145.000",
      months: 10,
      rating: 5,
      text: "O consórcio foi a melhor decisão financeira que já tomei. Paguei 40% menos do que pagaria em um financiamento e ainda tive a flexibilidade que precisava.",
      avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Carlos Eduardo",
      location: "Rolim de Moura, RO",
      vehicle: "Hilux SRX 2024",
      value: "R$ 280.000",
      months: 14,
      rating: 5,
      text: "Grupo com alta performance de contemplação. A consultoria foi fundamental para escolher a melhor estratégia. Hoje tenho minha Hilux dos sonhos!",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Fernanda Lima",
      location: "Vilhena, RO",
      vehicle: "BMW X1 2023",
      value: "R$ 220.000",
      months: 9,
      rating: 5,
      text: "Sempre sonhei com um carro premium mas não queria pagar juros altos. O consórcio foi perfeito! Contemplação em 9 meses e realizei meu sonho.",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-yellow-300 font-medium">Histórias de Sucesso</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Casos reais de
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Contemplações em Rondônia
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Conheça histórias reais de pessoas que conquistaram seus veículos dos sonhos com nossa consultoria especializada.
          </p>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">+100</div>
            <div className="text-sm text-gray-400">Contemplações</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">9.2</div>
            <div className="text-sm text-gray-400">Meses médios</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
            <div className="text-sm text-gray-400">Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">R$ 50M+</div>
            <div className="text-sm text-gray-400">Crédito liberado</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-yellow-500/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-600"
                  />
                  <div>
                    <h3 className="font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
                <Quote className="w-8 h-8 text-yellow-400/50 flex-shrink-0" />
              </div>

              {/* Vehicle Info */}
              <div className="bg-gradient-to-r from-gray-700/30 to-gray-800/30 rounded-lg p-4 mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Car className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium text-yellow-400">{testimonial.vehicle}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div>
                    <span className="text-gray-400">Valor: </span>
                    <span className="text-white font-semibold">{testimonial.value}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Contemplação: </span>
                    <span className="text-green-400 font-semibold">{testimonial.months} meses</span>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 leading-relaxed mb-4">
                "{testimonial.text}"
              </p>

              {/* Verified Badge */}
              <div className="flex items-center space-x-2 text-sm text-green-400">
                <CheckCircle className="w-4 h-4" />
                <span>Depoimento verificado</span>
              </div>
            </div>
          ))}
        </div>

        {/* Success Rate Banner */}
        <div className="mt-16 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              Taxa de Sucesso: <span className="text-yellow-400">95%</span>
            </h3>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Nossos clientes têm 95% de taxa de contemplação com nossa metodologia exclusiva. 
            Seja o próximo a conquistar seu veículo dos sonhos!
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;