import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { useFadeInAnimation } from '../hooks/useFadeInAnimation';
import { useStaggeredFadeIn } from '../hooks/useStaggeredFadeIn';

const FAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  // 10 perguntas principais para qualificação de leads na página inicial
  const faqs = [
    {
      question: "Consórcio é realmente mais vantajoso que financiamento?",
      answer: "Sim! No consórcio você não paga juros, apenas taxa de administração fixa. Isso representa uma economia de até 40% comparado ao financiamento tradicional. Além disso, você tem mais flexibilidade no pagamento e pode usar seu FGTS."
    },
    {
      question: "Quanto tempo demora para ser contemplado?",
      answer: "Com nossa estratégia exclusiva, nossos clientes são contemplados em média em 9,2 meses. Utilizamos técnicas como lances estratégicos e análise de grupos com alta performance de sorteios para acelerar o processo."
    },
    {
      question: "E se eu não for contemplado rapidamente?",
      answer: "Nossa metodologia tem 95% de taxa de sucesso. Além disso, você pode optar por dar lances estratégicos para acelerar a contemplação. Também oferecemos grupos com diferentes perfis para maximizar suas chances."
    },
    {
      question: "Posso usar o FGTS no consórcio?",
      answer: "Sim! Você pode usar seu FGTS tanto para dar lances quanto para amortizar parcelas. Isso é uma grande vantagem do consórcio sobre outras modalidades de crédito."
    },
    {
      question: "Como vocês garantem a contemplação mais rápida?",
      answer: "Utilizamos uma metodologia exclusiva que inclui: análise de grupos com histórico de alta performance, estratégias de lances personalizadas, acompanhamento mensal da evolução dos grupos e consultoria especializada durante todo o processo."
    },
    {
      question: "Posso desistir do consórcio se quiser?",
      answer: "Sim, você pode cancelar seu consórcio a qualquer momento. Você receberá de volta todo o valor pago, descontado apenas a taxa de administração do período que participou. É muito mais flexível que um financiamento."
    },
    {
      question: "Qual a diferença entre sorteio e lance?",
      answer: "No sorteio, a contemplação é por sorte mensal. No lance, você oferece um valor adicional para ser contemplado imediatamente. Nossa estratégia combina ambas as modalidades para maximizar suas chances."
    },
    {
      question: "Preciso ter renda comprovada?",
      answer: "Sim, mas os critérios são mais flexíveis que no financiamento. Aceitamos diversos tipos de comprovação de renda, incluindo declaração do Imposto de Renda, extratos bancários e declaração de próprio punho para autônomos."
    },
    {
      question: "O que é um consórcio de imóveis?",
      answer: "Um consórcio de imóveis é uma modalidade de compra planejada onde um grupo de pessoas se une para adquirir um imóvel. Os participantes pagam parcelas mensais e são contemplados por sorteio ou lance, recebendo uma carta de crédito para comprar casas, apartamentos, terrenos ou imóveis comerciais."
    },
    {
      question: "Como posso ser contemplado em um consórcio de imóveis?",
      answer: "A contemplação em um consórcio de imóveis pode ocorrer de duas formas: por sorteio, onde todos os participantes ativos concorrem mensalmente, ou por lance, onde o consorciado que oferece o maior valor (com recursos próprios ou FGTS) é contemplado. Nossas estratégias visam acelerar esse processo."
    }
  ];

  // Animações para elementos principais
  const headerAnimation = useFadeInAnimation({ delay: 200, direction: 'up' });
  const titleAnimation = useFadeInAnimation({ delay: 400, direction: 'up' });
  const descriptionAnimation = useFadeInAnimation({ delay: 600, direction: 'up' });
  
  // Animação escalonada para os FAQs
  const faqsAnimation = useStaggeredFadeIn({ 
    itemCount: faqs.length, 
    staggerDelay: 100, 
    direction: 'up' 
  });

  const handleViewMoreFAQ = () => {
    // Redireciona para a página FAQ completa
    window.location.href = '/faq';
  };

  return (
    <section id="faq" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div 
            ref={headerAnimation.elementRef}
            style={headerAnimation.style}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-full px-4 py-2 mb-6"
          >
            <HelpCircle className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-yellow-300 font-medium">Tire suas dúvidas</span>
          </div>
          
          <h2 
            ref={titleAnimation.elementRef}
            style={titleAnimation.style}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Perguntas
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Frequentes
            </span>
          </h2>
          
          <p 
            ref={descriptionAnimation.elementRef}
            style={descriptionAnimation.style}
            className="text-xl text-gray-400"
          >
            Esclarecemos as principais dúvidas sobre consórcio inteligente
          </p>
        </div>

        <div 
          ref={faqsAnimation.elementRef}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <div 
              key={index}
              style={faqsAnimation.getItemStyle(index)}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden transition-all duration-300 hover:border-yellow-500/30"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:ring-inset"
              >
                <h3 className="text-lg font-semibold text-white pr-8">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-full flex items-center justify-center">
                  {openFAQ === index ? (
                    <Minus className="w-4 h-4 text-yellow-400" />
                  ) : (
                    <Plus className="w-4 h-4 text-yellow-400" />
                  )}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-4"></div>
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Ver mais Perguntas Button */}
        <div className="mt-12 text-center">
          <button
            onClick={handleViewMoreFAQ}
            className="group bg-gradient-to-r from-gray-800/50 to-gray-700/50 hover:from-yellow-500/10 hover:to-yellow-600/10 border border-gray-700/50 hover:border-yellow-500/30 text-white hover:text-yellow-400 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/10 flex items-center space-x-3 mx-auto"
          >
            <span>Ver mais Perguntas</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Contact CTA */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-300 mb-6">
              Nossa equipe de especialistas está pronta para esclarecer todas as suas questões sobre consórcio.
            </p>
            <button 
              onClick={() => {
                const contactButton = document.querySelector('[data-contact-trigger]') as HTMLButtonElement;
                if (contactButton) {
                  contactButton.click();
                }
              }}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-950 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;