import React from 'react';
import { 
  CheckCircleIcon, 
  ClockIcon, 
  DocumentTextIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  BanknotesIcon,
  BuildingOfficeIcon,
  TruckIcon
} from '@heroicons/react/24/outline';

const ComoFuncionaPage: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Análise Técnica de Perfil",
      description: "Nossa equipe de especialistas em consórcios realiza uma análise técnica completa do seu perfil financeiro e objetivos de investimento.",
      icon: DocumentTextIcon,
      details: [
        "Auditoria financeira completa e análise de capacidade de pagamento",
        "Identificação técnica do tipo de carta de crédito ideal para seu perfil",
        "Análise de risco e definição de estratégia de contemplação personalizada",
        "Mapeamento de oportunidades de investimento em consórcios de alta performance"
      ]
    },
    {
      number: "02", 
      title: "Consultoria Especializada em Carta de Crédito",
      description: "Desenvolvemos uma estratégia técnica avançada para maximizar suas chances de contemplação e otimizar o valor da sua carta de crédito.",
      icon: UserGroupIcon,
      details: [
        "Consultoria especializada com analistas certificados em consórcios",
        "Análise técnica de grupos com melhor performance de contemplação",
        "Estratégia de lance baseada em algoritmos de análise de mercado",
        "Planejamento financeiro estratégico para otimização da carta de crédito"
      ]
    },
    {
      number: "03",
      title: "Processo de Entrada Técnica",
      description: "Executamos o processo de entrada no grupo selecionado com documentação técnica especializada e acompanhamento profissional.",
      icon: CheckCircleIcon,
      details: [
        "Documentação técnica especializada e análise de elegibilidade",
        "Processo digitalizado com validação técnica em tempo real",
        "Acompanhamento profissional durante todo o processo de entrada",
        "Suporte técnico especializado para resolução de questões complexas"
      ]
    },
    {
      number: "04",
      title: "Gestão Técnica Avançada",
      description: "Implementamos um sistema de gestão técnica avançada para monitoramento contínuo e otimização das estratégias de contemplação.",
      icon: ClockIcon,
      details: [
        "Monitoramento técnico de grupos com análise de performance em tempo real",
        "Alertas automáticos baseados em algoritmos de análise de mercado",
        "Estratégias de lance otimizadas com base em dados técnicos",
        "Relatórios técnicos mensais com análise de performance e recomendações"
      ]
    },
    {
      number: "05",
      title: "Contemplação e Liberação de Crédito",
      description: "Quando contemplado, gerenciamos todo o processo de liberação da carta de crédito e aquisição do bem com suporte técnico especializado.",
      icon: CurrencyDollarIcon,
      details: [
        "Gestão técnica do processo de liberação da carta de crédito",
        "Suporte especializado na negociação e aquisição do bem",
        "Acompanhamento técnico pós-contemplação com análise de performance",
        "Revisão técnica de parcelas e otimização de condições financeiras"
      ]
    },
    {
      number: "06",
      title: "Suporte Técnico Contínuo",
      description: "Oferecemos suporte técnico contínuo durante todo o período de pagamento com análise de performance e oportunidades de otimização.",
      icon: ShieldCheckIcon,
      details: [
        "Suporte técnico financeiro contínuo com análise de performance",
        "Revisão técnica de estratégias e otimização de condições",
        "Identificação de oportunidades técnicas para novos consórcios",
        "Rede de parceiros técnicos especializados em consórcios de alta performance"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Metodologia Técnica de
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Carta de Crédito Inteligente
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Nossa metodologia técnica avançada transforma consórcios tradicionais em instrumentos 
              de investimento de alta performance com gestão profissional especializada.
            </p>
          </div>
        </div>
      </div>

      {/* Processo Passo a Passo */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Metodologia Técnica em 6 Etapas Especializadas
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Processo técnico estruturado e especializado para maximizar a performance da sua carta de crédito
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  {/* Número e Ícone */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">{step.number}</span>
                      </div>
                      <div className="absolute -top-2 -right-2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-gray-900" />
                      </div>
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="flex-1 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-300 text-lg mb-6">{step.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start gap-3">
                          <CheckCircleIcon className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Linha conectora */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-12 top-24 w-0.5 h-16 bg-gradient-to-b from-blue-500 to-purple-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Diferenciais */}
      <div className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Por Que Somos Diferentes?
            </h2>
            <p className="text-xl text-gray-300">
              Nossa abordagem revolucionária transforma o consórcio tradicional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-800/50 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Tempo Otimizado</h3>
              <p className="text-gray-300">
                Estratégias que reduzem o tempo de contemplação em até 40% comparado ao método tradicional.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-800/50 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CurrencyDollarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Economia Inteligente</h3>
              <p className="text-gray-300">
                Redução significativa nos custos totais através de estratégias de lance otimizadas.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-800/50 rounded-2xl border border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Segurança Total</h3>
              <p className="text-gray-300">
                Acompanhamento contínuo e suporte especializado durante toda a jornada.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para Começar Sua Jornada?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Descubra como o Consórcio Inteligente pode transformar seus objetivos em realidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Fazer Quiz Gratuito
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
              Agendar Consultoria
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComoFuncionaPage;
