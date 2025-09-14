import React, { useState, useEffect } from 'react';
import { Clock, Zap, Gift, ArrowRight } from 'lucide-react';

interface UrgencySectionProps {
  onOpenQuiz: () => void;
}

const UrgencySection: React.FC<UrgencySectionProps> = ({ onOpenQuiz }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-900/10 via-transparent to-transparent"></div>
      <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Urgency Banner */}
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-1 mb-12">
          <div className="bg-gray-950 rounded-xl p-8 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Gift className="w-8 h-8 text-yellow-400" />
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Oferta Especial por Tempo Limitado
              </h2>
            </div>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              <span className="text-yellow-400 font-semibold">Atendimento gratuito + análise personalizada + prioridade de aprovação</span> disponível somente para os primeiros interessados desta semana.
            </p>

            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-8">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 rounded-xl p-4 mb-2">
                    <div className="text-2xl md:text-3xl font-bold text-yellow-400">
                      {value.toString().padStart(2, '0')}
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    {unit}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center space-x-2 text-gray-400 mb-6">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Oferta válida até o final do contador</span>
            </div>
          </div>
        </div>

        {/* Main CTA Section */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-12 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-yellow-300 font-medium">Ação Necessária</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Não deixe para amanhã o que pode
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                conquistar hoje
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Enquanto você pensa, outras pessoas estão conquistando seus carros dos sonhos. 
              <span className="block mt-2 text-yellow-400 font-semibold">
                Comece sua jornada agora e seja contemplado ainda este ano!
              </span>
            </p>
          </div>

          {/* Benefits List */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Consultoria Gratuita</h3>
              <p className="text-gray-400 text-sm">Análise completa do seu perfil sem custo</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Prioridade de Aprovação</h3>
              <p className="text-gray-400 text-sm">Aprovação em até 48h úteis</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Estratégia Personalizada</h3>
              <p className="text-gray-400 text-sm">Plano exclusivo para sua contemplação</p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="space-y-4">
            <button
              onClick={onOpenQuiz}
              className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-950 px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/25 flex items-center space-x-3 mx-auto"
            >
              <span>Quero Garantir Minha Vaga Agora</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-sm text-gray-400">
              🔒 Sem compromisso • Consultoria 100% gratuita • Aprovação garantida
            </p>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-full px-6 py-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full border-2 border-gray-800 flex items-center justify-center">
                  <span className="text-xs text-white">👤</span>
                </div>
              ))}
            </div>
            <div className="text-sm">
              <span className="text-yellow-400 font-semibold">47 pessoas</span>
              <span className="text-gray-400"> se inscreveram hoje</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;