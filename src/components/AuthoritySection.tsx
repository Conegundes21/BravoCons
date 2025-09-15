import React from 'react';
import { Award, Users, Target, Zap } from 'lucide-react';
import { useNumberAnimation } from '../hooks/useNumberAnimation';
import { useFadeInAnimation } from '../hooks/useFadeInAnimation';
import { useStaggeredFadeIn } from '../hooks/useStaggeredFadeIn';

interface AnimatedNumberProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ end, prefix = '', suffix = '', duration = 2000 }) => {
  const { count, elementRef } = useNumberAnimation({
    end,
    prefix,
    suffix,
    duration
  });

  return (
    <div ref={elementRef} className="text-3xl font-bold text-white mb-2">
      {count}
    </div>
  );
};

const AuthoritySection: React.FC = () => {
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

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div 
            ref={headerAnimation.elementRef}
            style={headerAnimation.style}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-full px-4 py-2 mb-6"
          >
            <Award className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-yellow-300 font-medium">Reconhecidos no Mercado</span>
          </div>
          
          <h2 
            ref={titleAnimation.elementRef}
            style={titleAnimation.style}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Líderes em Consórcio Inteligente
            </span>
          </h2>
          
          <p 
            ref={descriptionAnimation.elementRef}
            style={descriptionAnimation.style}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Especialistas em consórcios com alta performance de contemplação e atendimento personalizado para cada perfil de cliente.
          </p>
        </div>

        {/* Stats Grid */}
        <div 
          ref={statsAnimation.elementRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          <div 
            style={statsAnimation.getItemStyle(0)}
            className="text-center group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-yellow-400" />
            </div>
            <AnimatedNumber end={100} prefix="+" suffix="" />
            <div className="text-sm text-gray-400">Famílias atendidas só em Rondônia</div>
          </div>

          <div 
            style={statsAnimation.getItemStyle(1)}
            className="text-center group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-8 h-8 text-blue-400" />
            </div>
            <AnimatedNumber end={50} prefix="R$ " suffix="M+" />
            <div className="text-sm text-gray-400">Em crédito liberado</div>
          </div>

          <div 
            style={statsAnimation.getItemStyle(2)}
            className="text-center group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-8 h-8 text-green-400" />
            </div>
            <AnimatedNumber end={95} prefix="" suffix="%" />
            <div className="text-sm text-gray-400">Taxa de aprovação</div>
          </div>

          <div 
            style={statsAnimation.getItemStyle(3)}
            className="text-center group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-8 h-8 text-purple-400" />
            </div>
            <AnimatedNumber end={5} prefix="" suffix="+" />
            <div className="text-sm text-gray-400">Anos de experiência</div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Especialistas em Consórcios com Alta Performance
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Nossa metodologia exclusiva combina análise de perfil, estratégias de contemplação acelerada e acompanhamento personalizado para maximizar suas chances de conquista.
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

export default AuthoritySection;