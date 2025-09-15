import React from 'react';
import { Award, Users, Target, Zap, Shield, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useFadeInAnimation } from '../hooks/useFadeInAnimation';
import { useStaggeredFadeIn } from '../hooks/useStaggeredFadeIn';

const SobreNosSection: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation({ threshold: 0.2 });

  // Animações para elementos principais
  const headerAnimation = useFadeInAnimation({ delay: 200, direction: 'up' });
  const titleAnimation = useFadeInAnimation({ delay: 400, direction: 'up' });
  const descriptionAnimation = useFadeInAnimation({ delay: 600, direction: 'up' });
  
  // Animação escalonada para os valores
  const valuesAnimation = useStaggeredFadeIn({ 
    itemCount: 4, 
    staggerDelay: 150, 
    direction: 'up' 
  });

  const values = [
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Regulamentado pelo Banco Central com total transparência'
    },
    {
      icon: Target,
      title: 'Eficiência',
      description: 'Estratégias comprovadas para contemplação acelerada'
    },
    {
      icon: Users,
      title: 'Atendimento',
      description: 'Consultoria personalizada para cada perfil de cliente'
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Resultados excepcionais com mais de 5 anos de experiência'
    }
  ];

  return (
    <section 
      ref={elementRef}
      id="sobre-nos" 
      className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/3 to-pink-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div 
            ref={headerAnimation.elementRef}
            style={headerAnimation.style}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-full px-6 py-3 mb-8"
          >
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-sm text-yellow-300 font-medium">Nossa História</span>
          </div>
          
          <h2 
            ref={titleAnimation.elementRef}
            style={titleAnimation.style}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Sobre a 
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Bravo Consórcios
            </span>
          </h2>
          
          <p 
            ref={descriptionAnimation.elementRef}
            style={descriptionAnimation.style}
            className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            Líderes em consórcio inteligente, transformando sonhos em realidade com estratégias inovadoras e atendimento excepcional.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Logo and Description */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                <img 
                  src="/Bravo.png" 
                  alt="Logo Bravo Consórcios" 
                  className="w-32 h-32 mx-auto mb-8 rounded-2xl shadow-2xl object-contain" 
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Nossa Missão</h3>
                  <p className="text-gray-300 leading-relaxed">
                    A Bravo Consórcios é referência em soluções de consórcio para veículos, imóveis e muito mais. 
                    Nossa missão é ajudar você a conquistar seus sonhos com segurança, transparência e as melhores condições do mercado.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Description */}
        <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-gray-800/30 to-gray-700/30 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-gray-700/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              Transformando Projetos em Realidade
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Com uma equipe experiente e atendimento personalizado, oferecemos consultoria completa para que você faça a melhor escolha, 
              seja para comprar seu carro, caminhão, moto ou imóvel. Nossa metodologia exclusiva combina análise de perfil, 
              estratégias de contemplação acelerada e acompanhamento personalizado.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
              <div className="flex items-center space-x-2 text-yellow-400">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Consultoria personalizada</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Acompanhamento exclusivo</span>
              </div>
              <div className="flex items-center space-x-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Suporte pós-venda</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNosSection; 