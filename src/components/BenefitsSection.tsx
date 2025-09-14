import React from 'react';
import { CheckCircle, Zap, CreditCard } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  return (
    <section id="beneficios" className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-full px-4 py-2 mb-6">
            <CheckCircle className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-yellow-300 font-medium">Vantagens Exclusivas</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Por que escolher o
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Consórcio Inteligente?
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Compare e descubra por que o consórcio é a forma mais inteligente de conquistar seu veículo dos sonhos.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: CheckCircle,
              title: "Sem Juros Bancários",
              description: "Diferente do financiamento, no consórcio você não paga juros abusivos. Apenas taxa de administração fixa.",
              color: "from-yellow-500 to-yellow-600"
            },
            {
              icon: Zap,
              title: "Contemplação Acelerada",
              description: "Estratégias exclusivas para aumentar suas chances de ser contemplado rapidamente.",
              color: "from-blue-500 to-blue-600"
            },
            {
              icon: CheckCircle,
              title: "100% Seguro",
              description: "Regulamentado pelo Banco Central com garantias e proteções para todos os participantes.",
              color: "from-green-500 to-green-600"
            },
            {
              icon: CheckCircle,
              title: "Flexibilidade Total",
              description: "Escolha o prazo, valor da parcela e modalidade que melhor se adapta ao seu orçamento.",
              color: "from-purple-500 to-purple-600"
            },
            {
              icon: CheckCircle,
              title: "Planejamento Inteligente",
              description: "Análise completa do seu perfil para escolher a melhor estratégia de contemplação.",
              color: "from-red-500 to-red-600"
            },
            {
              icon: CheckCircle,
              title: "Consultoria Gratuita",
              description: "Acompanhamento especializado desde a adesão até a contemplação do seu crédito.",
              color: "from-indigo-500 to-indigo-600"
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6 h-full hover:scale-105 transition-all duration-300">
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

        {/* Comparison Table */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Consórcio vs Financiamento
            </h3>
            <p className="text-gray-400">
              Veja a diferença e escolha a opção mais inteligente
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Consórcio */}
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-xl p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Consórcio</h4>
                <p className="text-yellow-300 text-sm">A escolha inteligente</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Sem juros abusivos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Taxa fixa de administração</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Flexibilidade total</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Segurança regulamentada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Consultoria gratuita</span>
                </div>
              </div>
            </div>
            
            {/* Financiamento */}
            <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/20 rounded-xl p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Financiamento</h4>
                <p className="text-red-300 text-sm">Custo elevado</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-red-400 flex-shrink-0">✗</div>
                  <span className="text-gray-300">Juros altos (2-3% ao mês)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-red-400 flex-shrink-0">✗</div>
                  <span className="text-gray-300">Taxas variáveis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-red-400 flex-shrink-0">✗</div>
                  <span className="text-gray-300">Rigorosa análise de crédito</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-red-400 flex-shrink-0">✗</div>
                  <span className="text-gray-300">Risco de inadimplência</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-red-400 flex-shrink-0">✗</div>
                  <span className="text-gray-300">Sem acompanhamento</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;