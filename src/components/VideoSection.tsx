import React from 'react';
import { Play, Video } from 'lucide-react';
import { useFadeInAnimation } from '../hooks/useFadeInAnimation';
import { useStaggeredFadeIn } from '../hooks/useStaggeredFadeIn';

const VideoSection: React.FC = () => {
  // Animações para elementos principais
  const titleAnimation = useFadeInAnimation({ delay: 200, direction: 'up' });
  const descriptionAnimation = useFadeInAnimation({ delay: 400, direction: 'up' });
  const videoAnimation = useFadeInAnimation({ delay: 600, direction: 'up' });
  
  // Animação escalonada para os features
  const featuresAnimation = useStaggeredFadeIn({ 
    itemCount: 3, 
    staggerDelay: 200, 
    direction: 'up' 
  });

  return (
    <section id="video" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            ref={titleAnimation.elementRef}
            style={titleAnimation.style}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Entenda como funciona o
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Consórcio Inteligente
            </span>
          </h2>
          <p 
            ref={descriptionAnimation.elementRef}
            style={descriptionAnimation.style}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Em apenas 3 minutos, descubra como conquistar seu veículo dos sonhos de forma inteligente e segura.
          </p>
        </div>

        {/* Video Thumbnail */}
        <div 
          ref={videoAnimation.elementRef}
          style={videoAnimation.style}
          className="max-w-4xl mx-auto"
        >
          <div className="relative group cursor-pointer">
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 group-hover:border-yellow-500/50 transition-all duration-300">
              {/* Placeholder Video Thumbnail */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/20 via-transparent to-transparent"></div>
                </div>
                
                {/* Play Button */}
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-yellow-500/25">
                    <Play className="w-8 h-8 text-gray-950 ml-1" fill="currentColor" />
                  </div>
                </div>
                
                {/* Video Info Overlay */}
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <Video className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm font-medium text-yellow-400">Vídeo Explicativo</span>
                  </div>
                  <h3 className="text-xl font-bold">Como o Consórcio Inteligente Funciona</h3>
                  <p className="text-gray-300 text-sm">3 min • Explicação completa</p>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-white text-sm font-medium">03:24</span>
                </div>
              </div>
            </div>
          </div>

          {/* Video Benefits */}
          <div 
            ref={featuresAnimation.elementRef}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            <div 
              style={featuresAnimation.getItemStyle(0)}
              className="text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Estratégia Personalizada</h3>
              <p className="text-gray-400 text-sm">Análise do seu perfil para escolher a melhor modalidade de consórcio.</p>
            </div>

            <div 
              style={featuresAnimation.getItemStyle(1)}
              className="text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Contemplação Acelerada</h3>
              <p className="text-gray-400 text-sm">Técnicas comprovadas para aumentar suas chances de contemplação rápida.</p>
            </div>

            <div 
              style={featuresAnimation.getItemStyle(2)}
              className="text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">100% Seguro</h3>
              <p className="text-gray-400 text-sm">Regulamentado pelo Banco Central com total transparência e segurança.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;