import React from 'react';
import { Search, Calculator, Users, Car, CheckCircle } from 'lucide-react';
import './HowItWorksSection.css';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Escolha do Bem",
      description: "Defina o veículo dos seus sonhos e o valor da carta de crédito que você precisa.",
      details: ["Carros nacionais e importados", "Novos, seminovos ou usados", "Motos e caminhões também"],
      color: "from-yellow-500 to-yellow-600",
      bgColor: "from-yellow-500/20 to-yellow-600/20"
    },
    {
      number: "02",
      icon: Calculator,
      title: "Simulação Personalizada",
      description: "Nossa equipe analisa seu perfil e apresenta as melhores opções de consórcio.",
      details: ["Análise de renda", "Estratégia de contemplação", "Prazo e parcelas ideais"],
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-500/20 to-blue-600/20"
    },
    {
      number: "03",
      icon: Users,
      title: "Aprovação e Grupo",
      description: "Documentação simplificada e entrada no grupo de consórcio selecionado.",
      details: ["Aprovação em 48h", "Documentação digital", "Grupo com alta performance"],
      color: "from-green-500 to-green-600",
      bgColor: "from-green-500/20 to-green-600/20"
    },
    {
      number: "04",
      icon: Car,
      title: "Contemplação e Compra",
      description: "Receba seu crédito e escolha o veículo na concessionária ou particular.",
      details: ["Contemplação por sorteio ou lance", "Crédito liberado em conta", "Livre escolha do veículo"],
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-500/20 to-purple-600/20"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-900/5 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-full px-4 py-2 mb-6">
            <CheckCircle className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-yellow-300 font-medium">Processo Simplificado</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Como funciona o
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Consórcio Inteligente
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Em apenas 4 etapas simples, você conquista o crédito para seu veículo dos sonhos de forma segura e inteligente.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 1;
            
            // Cores específicas para cada ícone
            const iconColors = [
              'text-yellow-400', // Etapa 01 - Escolha do Bem
              'text-blue-400',    // Etapa 02 - Simulação Personalizada
              'text-green-400',   // Etapa 03 - Aprovação e Grupo
              'text-purple-400'   // Etapa 04 - Contemplação e Compra
            ];
            
            return (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className={`inline-flex items-center space-x-3 mb-6 ${isEven ? 'lg:justify-end' : ''}`}>
                    <div className="text-6xl font-black text-gray-300">
                      {step.number}
                    </div>
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.bgColor} rounded-2xl flex items-center justify-center`}>
                      <IconComponent className={`w-8 h-8 ${iconColors[index]}`} />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${step.color} rounded-full`}></div>
                        <span className="text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className="flex-1 flex justify-center">
                  <div className="relative">
                    {/* Main Circle */}
                    <div className={`w-80 h-80 bg-gradient-to-br ${step.bgColor} rounded-full flex items-center justify-center relative overflow-hidden`}>
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className={`absolute inset-0 bg-gradient-to-br ${step.color}`}></div>
                      </div>
                      
                      {/* Icon */}
                      <div className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-2xl`}>
                        <IconComponent className="w-12 h-12 text-gray-950" />
                      </div>
                      
                      {/* Floating Elements */}
                      <div className="absolute top-4 right-8 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-8 left-6 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-500"></div>
                      <div className="absolute top-16 left-4 w-2 h-2 bg-green-400 rounded-full animate-pulse delay-1000"></div>
                    </div>
                    
                    {/* Step Number Badge */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gray-900 border-4 border-gray-700 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold text-white">{step.number}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Timeline */}
        <div className="mt-20 pt-16 border-t border-gray-800">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Timeline do Processo</h3>
            <p className="text-gray-400">Do primeiro contato até a contemplação</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12 max-w-5xl mx-auto px-4">
            <div className="text-center timeline-step animate-fade-in-up" style={{ animationDelay: '0s' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-full flex items-center justify-center mb-2 mx-auto timeline-circle animate-pulse-slow">
                <span className="text-yellow-400 font-bold">1</span>
              </div>
              <div className="text-sm text-gray-300 font-medium">Primeiro Contato</div>
              <div className="text-xs text-gray-500">Imediato</div>
            </div>
            
            <div className="hidden md:block w-16 h-0.5 bg-gradient-to-r from-yellow-500/50 to-blue-500/50 timeline-line animate-progress-line" style={{ animationDelay: '0.5s' }}></div>
            
            <div className="text-center timeline-step animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center mb-2 mx-auto timeline-circle animate-pulse-slow">
                <span className="text-blue-400 font-bold">2</span>
              </div>
              <div className="text-sm text-gray-300 font-medium">Análise e Simulação</div>
              <div className="text-xs text-gray-500">24h</div>
            </div>
            
            <div className="hidden md:block w-16 h-0.5 bg-gradient-to-r from-blue-500/50 to-green-500/50 timeline-line animate-progress-line" style={{ animationDelay: '1.5s' }}></div>
            
            <div className="text-center timeline-step animate-fade-in-up" style={{ animationDelay: '2s' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full flex items-center justify-center mb-2 mx-auto timeline-circle animate-pulse-slow">
                <span className="text-green-400 font-bold">3</span>
              </div>
              <div className="text-sm text-gray-300 font-medium">Aprovação</div>
              <div className="text-xs text-gray-500">48h</div>
            </div>
            
            <div className="hidden md:block w-16 h-0.5 bg-gradient-to-r from-green-500/50 to-purple-500/50 timeline-line animate-progress-line" style={{ animationDelay: '2.5s' }}></div>
            
            <div className="text-center timeline-step animate-fade-in-up" style={{ animationDelay: '3s' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-full flex items-center justify-center mb-2 mx-auto timeline-circle animate-pulse-slow">
                <span className="text-purple-400 font-bold">4</span>
              </div>
              <div className="text-sm text-gray-300 font-medium">Contemplação</div>
              <div className="text-xs text-gray-500">Estratégico</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;