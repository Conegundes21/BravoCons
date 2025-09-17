import React, { useState, useEffect } from 'react';
import { Plus, Minus, HelpCircle, ArrowLeft, Search } from 'lucide-react';
import { useFadeInAnimation } from '../hooks/useFadeInAnimation';
import { useStaggeredFadeIn } from '../hooks/useStaggeredFadeIn';

const FAQPage: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Garantir que a página sempre carregue no topo sem animação
    document.documentElement.classList.add('no-smooth-scroll');
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    setTimeout(() => {
      document.documentElement.classList.remove('no-smooth-scroll');
    }, 50);
  }, []);

  // Todas as perguntas organizadas por categorias
  const faqCategories = [
    {
      category: "Geral",
      faqs: [
        {
          question: "Quanto tempo demora para baixar meu pagamento?",
          answer: "O prazo para baixar o pagamento varia conforme a forma de pagamento escolhida. Para boleto bancário, o prazo é de até 3 dias úteis após o pagamento. Para PIX, a baixa é imediata. Para débito em conta, o prazo é de 1 dia útil."
        },
        {
          question: "Recebi mais de um boleto, o que faço?",
          answer: "Se você recebeu mais de um boleto, pague apenas o mais recente. Os boletos anteriores são automaticamente cancelados quando um novo é emitido. Em caso de dúvidas, entre em contato conosco para verificar qual boleto está válido."
        },
        {
          question: "Consigo receber os boletos apenas por e-mail?",
          answer: "Sim, você pode optar por receber os boletos apenas por e-mail. Para isso, acesse sua área do consorciado e configure suas preferências de comunicação, marcando a opção 'Receber boletos por e-mail'."
        },
        {
          question: "O que é a taxa de registro?",
          answer: "A taxa de registro é um valor cobrado uma única vez no momento da adesão ao consórcio. Ela cobre os custos de análise de crédito, cadastramento e formalização do contrato. Este valor é pago junto com a primeira parcela."
        }
      ]
    },
    {
      category: "Saldo (Remanescente e devedor)",
      faqs: [
        {
          question: "O que é saldo devedor?",
          answer: "O saldo devedor é o valor que você ainda deve pagar para quitar completamente sua cota de consórcio. Ele é calculado subtraindo o valor já pago das parcelas do valor total da carta de crédito."
        },
        {
          question: "Como faço para receber o saldo remanescente decorrente do encerramento do grupo?",
          answer: "Quando o grupo é encerrado, o saldo remanescente é automaticamente calculado e depositado na conta bancária cadastrada. O prazo para o depósito é de até 30 dias após o encerramento do grupo."
        },
        {
          question: "Estou com parcelas em aberto, como faço para voltar a pagar e reativar minha cota?",
          answer: "Para reativar sua cota, você deve quitar todas as parcelas em atraso, incluindo multas e juros. Após o pagamento, sua cota será automaticamente reativada e você voltará a participar dos sorteios e lances."
        },
        {
          question: "O que são assembleias?",
          answer: "As assembleias são reuniões mensais onde ocorrem os sorteios e lances para contemplação dos consorciados. Elas são realizadas conforme calendário da administradora e você pode acompanhar os resultados em tempo real."
        }
      ]
    },
    {
      category: "Seguro Prestamista",
      faqs: [
        {
          question: "O que é seguro prestamista?",
          answer: "O seguro prestamista é uma proteção que garante o pagamento das parcelas em caso de morte, invalidez permanente ou desemprego involuntário do consorciado. É opcional e pode ser contratado junto com o consórcio."
        }
      ]
    },
    {
      category: "Sobre a Cota",
      faqs: [
        {
          question: "Como solicitar a liberação do bem?",
          answer: "Após ser contemplado, você deve apresentar a documentação do bem escolhido (nota fiscal, contrato de compra e venda, etc.) para a administradora. Após análise e aprovação, o valor da carta de crédito será liberado."
        },
        {
          question: "Quando o bem será desalienado?",
          answer: "O bem será desalienado (liberado da alienação fiduciária) após o pagamento integral da carta de crédito. Isso acontece quando você quita todas as parcelas ou quando o grupo é encerrado e você já pagou sua parte."
        },
        {
          question: "Como adquirir uma cota de consórcio?",
          answer: "Para adquirir uma cota, você deve escolher o grupo, preencher a proposta de adesão, apresentar a documentação necessária e pagar a taxa de registro. Nossa equipe te auxilia em todo o processo."
        },
        {
          question: "O que é taxa de administração?",
          answer: "A taxa de administração é o valor cobrado mensalmente pela administradora para gerenciar o grupo de consórcio. Ela cobre os custos operacionais, sorteios, lances e toda a estrutura necessária para o funcionamento do consórcio."
        },
        {
          question: "Como faço para quitar minha cota de consórcio?",
          answer: "Você pode quitar sua cota pagando todas as parcelas restantes de uma vez, ou antecipando parcelas mensalmente. O valor do saldo devedor pode ser consultado na sua área do consorciado."
        },
        {
          question: "Posso adquirir uma cota em um grupo em andamento?",
          answer: "Sim, você pode adquirir uma cota em um grupo que já está em andamento, desde que ainda haja vagas disponíveis. Isso pode ser uma vantagem se o grupo já tiver um bom histórico de contemplações."
        },
        {
          question: "Posso adquirir uma nova cota utilizando o valor de outra que está cancelada?",
          answer: "Sim, você pode usar o valor de resgate de uma cota cancelada para adquirir uma nova cota, desde que não tenha débitos pendentes. O valor será descontado do valor da nova cota."
        },
        {
          question: "Posso mudar o bem de minha cota de consórcio?",
          answer: "Sim, você pode alterar o bem de sua cota, desde que seja da mesma categoria (veículo para veículo, imóvel para imóvel). Pode haver uma taxa para essa alteração, dependendo da administradora."
        },
        {
          question: "Posso substituir o bem alienado por outro?",
          answer: "Sim, após ser contemplado, você pode trocar o bem escolhido por outro da mesma categoria, desde que o valor seja compatível com sua carta de crédito e que a administradora aprove a alteração."
        },
        {
          question: "Como obtenho o informe de bens e direitos?",
          answer: "O informe de bens e direitos pode ser solicitado na sua área do consorciado ou diretamente com a administradora. Ele contém todas as informações sobre sua cota, pagamentos realizados e saldo devedor."
        },
        {
          question: "Como faço a alteração de meus dados cadastrais?",
          answer: "Para alterar seus dados cadastrais, acesse sua área do consorciado ou entre em contato conosco. Algumas alterações podem exigir documentação comprobatória, como mudança de endereço ou telefone."
        }
      ]
    },
    {
      category: "Transferência de cota",
      faqs: [
        {
          question: "Posso transferir minha cota de consórcio?",
          answer: "Sim, você pode transferir sua cota para outra pessoa, seja ela contemplada ou não. A transferência deve ser aprovada pela administradora e o novo titular passará por análise de crédito."
        }
      ]
    },
    {
      category: "Contemplação",
      faqs: [
        {
          question: "O que é contemplação?",
          answer: "Contemplação é o momento em que você é escolhido para receber sua carta de crédito. Isso pode acontecer por sorteio (todos os participantes concorrem) ou por lance (quem oferece o maior valor é contemplado)."
        },
        {
          question: "Como fico sabendo que minha cota foi contemplada para que eu possa efetuar o pagamento do lance?",
          answer: "Você será notificado por e-mail, SMS e telefone imediatamente após a contemplação. Também pode acompanhar os resultados das assembleias em tempo real na sua área do consorciado."
        },
        {
          question: "Serei contemplado se quitar a cota?",
          answer: "Não, quitar a cota não garante contemplação. A contemplação acontece por sorteio ou lance. Quitar a cota apenas finaliza sua participação no grupo e você recebe o valor de resgate."
        },
        {
          question: "Onde vejo os resultados das assembleias?",
          answer: "Os resultados das assembleias são divulgados em tempo real na sua área do consorciado, no site da administradora e você também recebe notificações por e-mail e SMS."
        },
        {
          question: "Não quero ser contemplado nesse momento, posso pedir a exclusão de sorteio?",
          answer: "Sim, você pode solicitar a exclusão temporária dos sorteios. Isso não impede que você participe dos lances, apenas dos sorteios mensais. Você pode reativar sua participação a qualquer momento."
        },
        {
          question: "O que acontece se eu for contemplado por lance e por sorteio na mesma assembleia?",
          answer: "Se isso acontecer, você será contemplado apenas uma vez. A contemplação por lance tem prioridade sobre o sorteio, então você será contemplado pelo lance e não pelo sorteio."
        },
        {
          question: "Porque não houve contemplados na assembleia deste mês?",
          answer: "Pode não haver contemplados quando não há participantes elegíveis (todos estão em atraso) ou quando não há lances válidos. Isso é normal e os sorteios continuam nos meses seguintes."
        }
      ]
    },
    {
      category: "Lance",
      faqs: [
        {
          question: "Como posso pagar o lance?",
          answer: "O lance pode ser pago através de PIX, transferência bancária, boleto ou débito em conta. O pagamento deve ser efetuado dentro do prazo estabelecido pela administradora, geralmente 24 a 48 horas."
        },
        {
          question: "Como oferto um lance?",
          answer: "Para ofertar um lance, acesse sua área do consorciado, escolha o valor que deseja ofertar e confirme a oferta. Você pode ofertar lances livres (qualquer valor) ou lances fixos (valores pré-determinados)."
        },
        {
          question: "Como é calculada a oferta de lance?",
          answer: "A oferta de lance é calculada considerando o valor da carta de crédito, o saldo devedor e o percentual de lance que você deseja ofertar. Nossa equipe pode te ajudar a calcular o valor ideal."
        },
        {
          question: "Como é apurado o lance vencedor?",
          answer: "O lance vencedor é aquele que oferece o maior valor na assembleia. Em caso de empate, o critério de desempate é definido pela administradora, geralmente por ordem de oferta ou tempo de participação no grupo."
        },
        {
          question: "Qual é o prazo para pagamento do lance?",
          answer: "O prazo para pagamento do lance é geralmente de 24 a 48 horas após a contemplação. Esse prazo é definido pela administradora e deve ser respeitado para que a contemplação seja efetivada."
        }
      ]
    },
    {
      category: "Pagamento",
      faqs: [
        {
          question: "Posso antecipar pagamento de parcelas na ordem direta?",
          answer: "Sim, você pode antecipar parcelas na ordem direta, o que reduz o valor das parcelas futuras ou diminui o prazo do consórcio. Isso pode ser feito a qualquer momento através da sua área do consorciado."
        },
        {
          question: "Como faço para antecipar parcelas?",
          answer: "Para antecipar parcelas, acesse sua área do consorciado, escolha a opção 'Antecipar parcelas' e informe quantas parcelas deseja antecipar. O sistema calculará automaticamente o valor e os novos prazos."
        },
        {
          question: "Onde posso efetuar o pagamento da minha parcela?",
          answer: "Você pode pagar sua parcela através de boleto bancário, PIX, débito em conta, cartão de crédito ou transferência bancária. Todas as opções estão disponíveis na sua área do consorciado."
        },
        {
          question: "Efetuei o pagamento da 1ª parcela, por que consta em aberto?",
          answer: "O pagamento pode demorar até 3 dias úteis para ser processado e refletir no sistema. Se após esse prazo ainda constar em aberto, entre em contato conosco com o comprovante de pagamento."
        },
        {
          question: "Se eu pagar a parcela após o vencimento, participarei da assembleia?",
          answer: "Para participar da assembleia, o pagamento deve ser efetuado até a data limite estabelecida pela administradora. Pagamentos após essa data podem não ser considerados para a assembleia do mês."
        }
      ]
    },
    {
      category: "Imóveis",
      faqs: [
        {
          question: "O que é um consórcio de imóveis?",
          answer: "Um consórcio de imóveis é uma modalidade de compra planejada onde um grupo de pessoas se une para adquirir um imóvel. Os participantes pagam parcelas mensais e são contemplados por sorteio ou lance, recebendo uma carta de crédito para comprar casas, apartamentos, terrenos ou imóveis comerciais."
        },
        {
          question: "O consórcio de imóveis tem juros?",
          answer: "Não, o consórcio de imóveis não cobra juros. Diferente de um financiamento bancário, você paga apenas uma taxa de administração, que é diluída nas parcelas, tornando-o uma opção mais econômica a longo prazo."
        },
        {
          question: "Como posso ser contemplado em um consórcio de imóveis?",
          answer: "A contemplação em um consórcio de imóveis pode ocorrer de duas formas: por sorteio, onde todos os participantes ativos concorrem mensalmente, ou por lance, onde o consorciado que oferece o maior valor (com recursos próprios ou FGTS) é contemplado. Nossas estratégias visam acelerar esse processo."
        },
        {
          question: "Posso usar o FGTS no consórcio de imóveis?",
          answer: "Sim, o Fundo de Garantia por Tempo de Serviço (FGTS) pode ser utilizado no consórcio de imóveis para diversas finalidades: ofertar um lance, complementar o valor da carta de crédito, ou amortizar o saldo devedor após a contemplação, reduzindo o valor das parcelas ou o prazo."
        },
        {
          question: "Depois de contemplado, posso escolher qualquer imóvel?",
          answer: "Sim, após ser contemplado e ter sua carta de crédito liberada, você tem total liberdade para escolher o imóvel que desejar, seja ele novo, usado, residencial, comercial, terreno ou para construção/reforma, desde que o valor esteja dentro do limite da sua carta de crédito."
        },
        {
          question: "O que acontece se o valor do imóvel for diferente da carta de crédito?",
          answer: "Se o imóvel escolhido for mais caro que sua carta de crédito, você pode complementar a diferença com recursos próprios. Se for mais barato, o valor restante da carta de crédito pode ser utilizado para quitar parcelas futuras, pagar despesas de documentação (ITBI, taxas de cartório) ou adquirir outro bem da mesma categoria."
        },
        {
          question: "Posso transferir minha cota de consórcio de imóveis para outra pessoa?",
          answer: "Sim, é possível transferir sua cota de consórcio de imóveis para outra pessoa, mesmo que ela já esteja contemplada ou não. A transferência precisa ser formalizada e aprovada pela administradora do consórcio, e o novo titular passará por uma análise de crédito."
        }
      ]
    }
  ];

  // Animações
  const headerAnimation = useFadeInAnimation({ delay: 200, direction: 'up' });
  const searchAnimation = useFadeInAnimation({ delay: 400, direction: 'up' });
  const categoriesAnimation = useStaggeredFadeIn({ 
    itemCount: faqCategories.length, 
    staggerDelay: 150, 
    direction: 'up' 
  });

  // Filtrar FAQs baseado na busca
  const filteredCategories = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  const handleBackToHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Header */}
      <div className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBackToHome}
              className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Voltar ao Início</span>
            </button>
            <div className="flex items-center space-x-2">
              <HelpCircle className="w-6 h-6 text-yellow-400" />
              <h1 className="text-xl font-bold text-white">FAQ Completo</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div 
          ref={headerAnimation.elementRef}
          style={headerAnimation.style}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Perguntas
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Frequentes
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Encontre respostas para todas as suas dúvidas sobre consórcio inteligente. 
            Nossa base de conhecimento completa está aqui para te ajudar.
          </p>
        </div>

        {/* Search Bar */}
        <div 
          ref={searchAnimation.elementRef}
          style={searchAnimation.style}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar perguntas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div 
          ref={categoriesAnimation.elementRef}
          className="space-y-12"
        >
          {filteredCategories.map((category, categoryIndex) => (
            <div 
              key={category.category}
              style={categoriesAnimation.getItemStyle(categoryIndex)}
              className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-3xl p-8"
            >
              <h2 className="text-2xl font-bold text-yellow-400 mb-6 border-b border-gray-700/50 pb-4">
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => (
                  <div 
                    key={faqIndex}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden transition-all duration-300 hover:border-yellow-500/30"
                  >
                    <button
                      onClick={() => setOpenFAQ(openFAQ === faqIndex ? null : faqIndex)}
                      className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:ring-inset"
                    >
                      <span className="text-lg font-semibold text-white pr-8">
                        {faq.question}
                      </span>
                      {openFAQ === faqIndex ? (
                        <Minus className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    
                    {openFAQ === faqIndex && (
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
            </div>
          ))}
        </div>

        {/* No Results */}
        {searchTerm && filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">
              Nenhuma pergunta encontrada para "{searchTerm}"
            </div>
            <button
              onClick={() => setSearchTerm('')}
              className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
            >
              Limpar busca
            </button>
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-300 mb-6">
              Nossa equipe de especialistas está pronta para esclarecer todas as suas questões sobre consórcio inteligente.
            </p>
            <button 
              onClick={() => {
                const contactButton = document.querySelector('[data-contact-trigger]') as HTMLButtonElement;
                if (contactButton) {
                  contactButton.click();
                }
              }}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-950 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/25"
            >
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;