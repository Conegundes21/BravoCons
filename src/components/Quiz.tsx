
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { X, ArrowLeft, Star, CheckCircle, Clock, DollarSign, TrendingUp } from 'lucide-react';
import { leadsService, quizService } from '../services/supabase';
import { trackingService } from '../services/tracking';
import ConsultationScheduler from './ConsultationScheduler';

interface QuizProps {
  onClose: () => void;
}

interface QuizAnswers {
  tipo: string;
  entrada: string;
  parcelas: string;
  experiencia_carta: string;
  urgencia: string;
  [key: string]: string; // Para perguntas dinâmicas
}

interface UserData {
  nome: string;
  email: string;
  celular: string;
}

interface Question {
  id: string;
  question: string;
  instruction: string;
  options: Array<{
    value: string;
    title: string;
    description: string;
    icon: string;
  }>;
  dependsOn?: {
    field: string;
    value: string;
  };
}

const Quiz: React.FC<QuizProps> = ({ onClose }) => {
  // Adiciona as animações CSS otimizadas
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideInFromLeft {
        0% {
          opacity: 0;
          transform: translate3d(-20px, 0, 0);
        }
        100% {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      }
      
      @keyframes slideOutToRight {
        0% {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
        100% {
          opacity: 0;
          transform: translate3d(20px, 0, 0);
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  const [currentStep, setCurrentStep] = useState<'quiz' | 'form' | 'results'>('quiz');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({
    tipo: '',
    entrada: '',
    parcelas: '',
    experiencia_carta: '',
    urgencia: ''
  });
  const [userData, setUserData] = useState<UserData>({
    nome: '',
    email: '',
    celular: ''
  });
  const [formErrors, setFormErrors] = useState<Partial<UserData>>({});
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showScheduler, setShowScheduler] = useState(false);
  

  // Inicializar tracking
  useEffect(() => {
    trackingService.trackQuizStart();
  }, []);

  // Funções para parsing de valores
  const parseCreditValue = (entrada: string): number => {
    switch (entrada) {
      case 'pequena': return 50000;
      case 'media': return 125000;
      case 'grande': return 250000;
      default: return 50000;
    }
  };

  const parseInstallmentValue = (parcelas: string): number => {
    switch (parcelas) {
      case 'baixa': return 500;
      case 'media': return 1500;
      case 'alta': return 3000;
      default: return 500;
    }
  };

  // Perguntas base que sempre aparecem
  const baseQuestions: Question[] = [
    {
      id: 'tipo',
      question: 'Que tipo de Bem você deseja Adquirir?',
      instruction: 'Selecione a opção que melhor atende sua necessidade',
      options: [
        {
          value: 'veiculos',
          title: 'Veículos',
          description: 'Consórcio para compra de veículos novos ou seminovos',
          icon: '🚗'
        },
        {
          value: 'imoveis',
          title: 'Imóveis',
          description: 'Consórcio para compra de imóveis residenciais ou comerciais',
          icon: '🏠'
        },
        {
          value: 'maquinarios',
          title: 'Maquinários e Equipamentos',
          description: 'Consórcio para equipamentos industriais e agrícolas',
          icon: '🏭'
        },
        {
          value: 'caminhoes',
          title: 'Caminhões e Veículos Comerciais',
          description: 'Consórcio para veículos de carga e transporte',
          icon: '🚛'
        },
        {
          value: 'capital',
          title: 'Alavancagem de Capital',
          description: 'Consórcio para investimentos e capital de giro',
          icon: '💰'
        }
      ]
    },

    {
      id: 'entrada',
      question: 'Qual valor você está disposto a investir?',
      instruction: 'Selecione o valor que você pode investir inicialmente',
      options: [
        {
          value: 'sem_entrada',
          title: 'Sem entrada',
          description: 'Quero começar sem investimento inicial',
          icon: '🚀'
        },
        {
          value: 'pequena',
          title: 'Até R$ 5.000',
          description: 'Posso investir um valor pequeno',
          icon: '💡'
        },
        {
          value: 'media',
          title: 'R$ 5.000 - R$ 20.000',
          description: 'Posso investir um valor intermediário',
          icon: '⚡'
        },
        {
          value: 'grande',
          title: 'Acima de R$ 20.000',
          description: 'Posso investir um valor significativo',
          icon: '💪'
        }
      ]
    },
    {
      id: 'parcelas',
      question: 'Qual valor de parcela você consegue pagar mensalmente?',
      instruction: 'Selecione a faixa de parcela que cabe no seu orçamento',
      options: [
        {
          value: 'baixa',
          title: 'Até R$ 500',
          description: 'Parcelas mínimas de R$ 500',
          icon: '📊'
        },
        {
          value: 'media_baixa',
          title: 'R$ 500 - R$ 1.000',
          description: 'Parcelas intermediárias baixas',
          icon: '📈'
        },
        {
          value: 'media',
          title: 'R$ 1.000 - R$ 2.000',
          description: 'Parcelas intermediárias',
          icon: '💎'
        },
        {
          value: 'media_alta',
          title: 'R$ 2.000 - R$ 4.000',
          description: 'Parcelas intermediárias altas',
          icon: '🚀'
        },
        {
          value: 'alta',
          title: '+ de R$ 5.000',
          description: 'Parcelas mais altas',
          icon: '🏆'
        }
      ]
    },
    {
      id: 'experiencia_carta',
      question: 'Você já tem ou teve experiência com Carta de Crédito?',
      instruction: 'Selecione a opção que melhor descreve sua experiência',
      options: [
        {
          value: 'nenhuma',
          title: 'Nenhuma Experiência',
          description: 'Primeira vez que vou utilizar carta de crédito',
          icon: '🆕'
        },
        {
          value: 'pouca',
          title: 'Pouca Experiência',
          description: 'Já utilizei algumas vezes, mas não sou experto',
          icon: '📚'
        },
        {
          value: 'moderada',
          title: 'Experiência Moderada',
          description: 'Tenho conhecimento intermediário sobre o assunto',
          icon: '💡'
        },
        {
          value: 'alta',
          title: 'Alta Experiência',
          description: 'Sou experiente e conheço bem o processo',
          icon: '🏆'
        }
      ]
    },
    {
      id: 'urgencia',
      question: 'Qual o seu nível de urgência para adquirir seu bem?',
      instruction: 'Selecione o nível de urgência que melhor representa sua situação',
      options: [
        {
          value: 'baixa',
          title: 'Baixa Urgência',
          description: 'Posso aguardar, estou apenas planejando',
          icon: '⏰'
        },
        {
          value: 'moderada',
          title: 'Moderada Urgência',
          description: 'Preciso em alguns meses, mas posso esperar',
          icon: '📅'
        },
        {
          value: 'alta',
          title: 'Alta Urgência',
          description: 'Preciso urgentemente, não posso esperar',
          icon: '🚨'
        },
        {
          value: 'critica',
          title: 'Crítica Urgência',
          description: 'Situação emergencial, preciso imediatamente',
          icon: '⚡'
        }
      ]
    }
  ];

  // Perguntas específicas para cada tipo de consórcio
  const getSpecificQuestions = (tipo: string): Question[] => {
    switch (tipo) {
      case 'imoveis':
        return [
          {
            id: 'tipo_imovel',
            question: 'Que tipo de imóvel você deseja?',
            instruction: 'Selecione o tipo específico de imóvel',
      options: [
        {
                value: 'rural',
                title: 'Rural',
                description: 'Sítio, fazenda ou chácara',
                icon: '🌾'
              },
              {
                value: 'casa',
                title: 'Casa',
                description: 'Casa térrea ou sobrado residencial',
                icon: '🏡'
              },
              {
                value: 'apartamento',
                title: 'Apartamento',
                description: 'Apartamento em condomínio',
                icon: '🏢'
              },
              {
                value: 'terreno',
                title: 'Terreno',
                description: 'Terreno para construção',
                icon: '🌱'
              },
              {
                value: 'comercial',
                title: 'Imóvel Comercial',
                description: 'Loja, escritório ou galpão',
                icon: '🏪'
        }
      ]
    }
        ];

      case 'veiculos':
        return [
          {
            id: 'tipo_veiculo',
            question: 'Que tipo de veículo você deseja?',
            instruction: 'Selecione o tipo específico de veículo',
      options: [
        {
                value: 'carro',
                title: 'Carro',
                description: 'Carro de passeio',
                icon: '🚙'
              },
              {
                value: 'moto',
                title: 'Moto',
                description: 'Moto para trabalho ou lazer',
                icon: '🏍️'
              },
              {
                value: 'pickup',
                title: 'Pickup',
                description: 'Pickup para trabalho e lazer',
                icon: '🛻'
              },
              {
                value: 'camionete',
                title: 'Camionete',
                description: 'Camionete utilitária',
                icon: '🚐'
              },
              {
                value: 'suv',
                title: 'SUV',
                description: 'SUV para família e aventuras',
                icon: '🚗'
        }
      ]
    },
    {
            id: 'uso_veiculo',
            question: 'Qual será o principal uso do veículo?',
            instruction: 'Selecione o uso principal',
      options: [
        {
                value: 'trabalho',
                title: 'Trabalho',
                description: 'Uso profissional e comercial',
                icon: '💼'
              },
              {
                value: 'lazer',
                title: 'Lazer',
                description: 'Uso pessoal e familiar',
                icon: '🎉'
              },
              {
                value: 'ambos',
                title: 'Trabalho e Lazer',
                description: 'Uso misto profissional e pessoal',
                icon: '⚖️'
              }
            ]
          }
        ];

      case 'maquinarios':
        return [
          {
            id: 'tipo_maquinario',
            question: 'Que tipo de maquinário você precisa?',
            instruction: 'Selecione o tipo específico de equipamento',
      options: [
        {
                value: 'trator',
                title: 'TRATOR',
                description: 'Tratores de esteira, tratores agrícolas, tratores florestais, tratores industriais, etc.',
                icon: '🚜'
              },
              {
                value: 'pa_carregadeira',
                title: 'PÁ CARREGADEIRA',
                description: 'Pá carregadeira para construção e mineração',
                icon: '🏗️'
              },
              {
                value: 'escavadeira',
                title: 'ESCAVADEIRA',
                description: 'Escavadeiras e retroescavadeiras para terraplanagem',
                icon: '⛏️'
              },
              {
                value: 'outros',
                title: 'OUTROS',
                description: 'Outros tipos de maquinários e equipamentos',
                icon: '⚙️'
              }
            ]
          }
        ];

      case 'caminhoes':
        return [
          {
            id: 'tipo_caminhao',
            question: 'Que tipo de veículo comercial você precisa?',
            instruction: 'Selecione o tipo específico de veículo',
      options: [
        {
                value: 'caminhoes_carga_seca',
                title: 'CAMINHÕES CARGA SECA',
                description: 'Cavalo mecânico, Graneleiro, Vuc, Toco, Truck, Bitrem/Rodotrem e outros',
                icon: '🚛'
              },
              {
                value: 'caminhoes_especializados',
                title: 'CAMINHÕES ESPECIALIZADOS',
                description: 'Carreta Baú/Sider, Frigorífico, Baculante, tanque, Prancha, Guincho e outros',
                icon: '🚚'
              },
              {
                value: 'furgoes_vans',
                title: 'FURGÕES/VANS',
                description: 'Furgões e vans para transporte de mercadorias e passageiros',
                icon: '🚐'
              },
              {
                value: 'outros_comerciais',
                title: 'OUTROS',
                description: 'Outros tipos de veículos comerciais e utilitários',
                icon: '⚙️'
              }
            ]
          }
        ];

      case 'capital':
        return [
          {
            id: 'tipo_capital',
            question: 'Qual tipo de capital você busca?',
            instruction: 'Selecione o objetivo do capital',
      options: [
        {
                value: 'investimento',
                title: 'Investimento',
                description: 'Para aplicações financeiras',
                icon: '📈'
              },
              {
                value: 'capital_giro',
                title: 'Capital de Giro',
                description: 'Para operações da empresa',
                icon: '💼'
              },
              {
                value: 'expansao',
                title: 'Expansão',
                description: 'Para crescimento do negócio',
          icon: '🚀'
        }
      ]
    }
  ];

      default:
        return [];
    }
  };

  // Função para obter todas as perguntas baseadas nas respostas
  const getAllQuestions = (): Question[] => {
    let questions = [...baseQuestions];
    
    if (answers.tipo) {
      const specificQuestions = getSpecificQuestions(answers.tipo);
      questions = [...questions, ...specificQuestions];
    }
    
    return questions;
  };

  const questions = getAllQuestions();

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    
    // Inicia a transição
    setIsTransitioning(true);
    
    // Aguarda a animação de saída e vai para a próxima pergunta
    setTimeout(() => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentStep('form');
    }
      // Aguarda um pouco mais para a animação de entrada
      setTimeout(() => {
        setIsTransitioning(false);
      }, 30);
    }, 200);
  };


  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const validateForm = () => {
    const errors: Partial<UserData> = {};
    
    if (!userData.nome.trim()) errors.nome = 'Nome é obrigatório';
    if (!userData.email.trim()) errors.email = 'Email é obrigatório';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
      errors.email = 'Email inválido';
    }
    if (!userData.celular.trim()) errors.celular = 'Celular é obrigatório';
    else if (!/^\(\d{2}\) \d \d{4}-\d{4}$/.test(userData.celular)) {
      errors.celular = 'Formato: (99) 9 9999-9999';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      // TEMPORÁRIO: Desabilitar Supabase para que o modal funcione
      if (import.meta.env.DEV) {
        console.log('Dados do quiz:', { userData, answers });
      }
      
      // Tracking: Quiz completado
      const creditValue = parseCreditValue(answers.entrada);
      trackingService.trackQuizComplete({
        email: userData.email,
        phone: userData.celular,
        name: userData.nome,
        consortium_type: answers.tipo,
        credit_value: creditValue,
        installment_value: parseInstallmentValue(answers.parcelas),
        asset_type: answers.tipo
      });
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Erro geral ao salvar dados:', error);
      }
    }
    
    // Simula processamento de 2 segundos
    setTimeout(() => {
      setIsLoading(false);
      setCurrentStep('results');
    }, 2000);
  };

  // Função para calcular score de qualificação
  const calculateQualificationScore = () => {
    let score = 0;
    
    // Score base por urgência
    switch (answers.urgencia) {
      case 'critica':
        score += 30;
        break;
      case 'alta':
        score += 25;
        break;
      case 'moderada':
        score += 20;
        break;
      case 'baixa':
        score += 15;
        break;
    }
    
    // Score por entrada
    switch (answers.entrada) {
      case 'grande':
        score += 20;
        break;
      case 'media':
        score += 15;
        break;
      case 'pequena':
        score += 10;
        break;
      case 'sem_entrada':
        score += 5;
        break;
    }
    
    // Score por parcelas
    switch (answers.parcelas) {
      case 'alta':
        score += 20;
        break;
      case 'media_alta':
        score += 15;
        break;
      case 'media':
        score += 10;
        break;
      case 'media_baixa':
        score += 8;
        break;
      case 'baixa':
        score += 5;
        break;
    }
    
    // Score por experiência
    switch (answers.experiencia_carta) {
      case 'alta':
        score += 15;
        break;
      case 'moderada':
        score += 10;
        break;
      case 'pouca':
        score += 5;
        break;
      case 'nenhuma':
        score += 0;
        break;
    }
    
    // Score por perfil completo
    score += 10;
    
    return Math.min(score, 100);
  };

  // Função para determinar nível de prioridade
  const getPriorityLevel = (): 'baixa' | 'media' | 'alta' | 'urgente' => {
    const score = calculateQualificationScore();
    
    if (score >= 80) return 'urgente';
    if (score >= 60) return 'alta';
    if (score >= 40) return 'media';
    return 'baixa';
  };

  // Funções para gerar resultados personalizados
  const getPersonalizedTitle = () => {
    const tipo = answers.tipo;
    
    if (tipo === 'imoveis') {
      return 'Seu Sonho Imobiliário Está Mais Próximo!';
    }
    
    if (tipo === 'veiculos') {
      return 'Seu Próximo Veículo Pode Ser Agora!';
    }
    
    if (tipo === 'maquinarios') {
      return 'Potencialize Seu Negócio com Maquinários!';
    }
    
    if (tipo === 'caminhoes') {
      return 'Potencialize Seu Negócio com Veículos Comerciais!';
    }
    
    if (tipo === 'capital') {
      return 'Multiplique Seu Capital com Estratégias Inteligentes!';
    }
    
    return 'Seu Consórcio Personalizado Está Pronto!';
  };

  const getPersonalizedDescription = () => {
    const tipo = answers.tipo;
    const entrada = answers.entrada;
    
    let description = `Baseado no seu perfil ${tipo === 'imoveis' ? 'imobiliário' : tipo === 'veiculos' ? 'automotivo' : tipo === 'maquinarios' ? 'industrial' : tipo === 'caminhoes' ? 'de veículos comerciais' : 'de capital'}, `;
    
    description += 'identificamos que você busca soluções personalizadas. ';
    
    if (entrada === 'sem_entrada') {
      description += 'A melhor notícia: você pode começar sem entrada! ';
    } else if (entrada === 'pequena') {
      description += 'Com uma entrada pequena, você pode começar hoje! ';
    } else {
      description += 'Com uma entrada maior, você acelera sua realização! ';
    }
    
    description += 'Nossa equipe especializada criou um plano exclusivo para você.';
    
    return description;
  };

  const getSpecificBenefits = () => {
    const tipo = answers.tipo;
    
    switch (tipo) {
      case 'imoveis':
        return [
          'Análise completa do mercado imobiliário',
          'Seleção dos melhores grupos de consórcio',
          'Estratégias para contemplação acelerada',
          'Acompanhamento até a entrega das chaves'
        ];
      case 'veiculos':
        return [
          'Análise das melhores opções do mercado',
          'Comparativo entre financiamento e consórcio',
          'Estratégias para contemplação rápida',
          'Acompanhamento na escolha do veículo'
        ];
      case 'maquinarios':
        return [
          'Análise técnica dos equipamentos',
          'Seleção dos melhores fornecedores',
          'Estratégias para contemplação otimizada',
          'Acompanhamento na instalação'
        ];
      case 'caminhoes':
        return [
          'Análise das melhores opções de veículos comerciais',
          'Comparativo entre financiamento e consórcio',
          'Estratégias para contemplação otimizada',
          'Acompanhamento na escolha do veículo'
        ];
      case 'capital':
        return [
          'Análise das melhores estratégias de capital',
          'Seleção dos grupos mais rentáveis',
          'Estratégias para maximizar retornos',
          'Acompanhamento dos investimentos'
        ];
      default:
        return [];
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-md w-full p-8 relative shadow-2xl">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <Star className="w-10 h-10 text-white animate-spin" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Processando seu resultado...
            </h2>
            <p className="text-gray-600 mb-6">
              Analisando suas respostas e criando seu plano personalizado
            </p>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full animate-pulse" style={{ width: '100%' }}></div>
            </div>
            
            <div className="flex justify-center space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 'form') {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-md w-full p-8 relative shadow-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Quase lá!
            </h2>
            <p className="text-gray-600">
              Precisamos de algumas informações para personalizar sua experiência
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                value={userData.nome}
                onChange={(e) => setUserData(prev => ({ ...prev, nome: e.target.value }))}
                className={`w-full px-4 py-3 border rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  formErrors.nome ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Digite seu nome completo"
              />
              {formErrors.nome && (
                <p className="text-red-500 text-sm mt-1">{formErrors.nome}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={userData.email}
                onChange={(e) => setUserData(prev => ({ ...prev, email: e.target.value }))}
                className={`w-full px-4 py-3 border rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  formErrors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="seu@email.com"
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Celular
              </label>
              <input
                type="tel"
                value={userData.celular}
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, '');
                  if (value.length <= 11) {
                    if (value.length <= 2) {
                      value = value;
                    } else if (value.length <= 3) {
                      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
                    } else if (value.length <= 7) {
                      value = `(${value.slice(0, 2)}) ${value.slice(2, 3)} ${value.slice(3)}`;
                    } else {
                      value = `(${value.slice(0, 2)}) ${value.slice(2, 3)} ${value.slice(3, 7)}-${value.slice(7)}`;
                    }
                    setUserData(prev => ({ ...prev, celular: value }));
                  }
                }}
                className={`w-full px-4 py-3 border rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  formErrors.celular ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="(99) 9 9999-9999"
              />
              {formErrors.celular && (
                <p className="text-red-500 text-sm mt-1">{formErrors.celular}</p>
              )}
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-xl hover:bg-blue-700 transition-all duration-300"
            >
              Ver Meu Resultado Personalizado
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 'results') {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-white rounded-2xl max-w-3xl w-full p-4 md:p-6 relative my-8 shadow-2xl max-h-[90vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="text-center mb-6 md:mb-8">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <Star className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 px-2">
              {getPersonalizedTitle()}
            </h1>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
              {getPersonalizedDescription()}
            </p>
          </div>

          {/* Score de Qualificação */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 md:p-6 mb-4 md:mb-6">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg md:text-xl font-bold text-gray-900">Score de Qualificação</h2>
              <span className="text-2xl md:text-3xl font-bold text-blue-600">{calculateQualificationScore()}/100</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-1000" style={{ width: `${calculateQualificationScore()}%` }}></div>
            </div>

            <p className="text-sm md:text-base text-gray-600 text-center">
              Prioridade: <span className={`font-bold ${
                getPriorityLevel() === 'urgente' ? 'text-red-600' :
                getPriorityLevel() === 'alta' ? 'text-orange-600' :
                getPriorityLevel() === 'media' ? 'text-blue-600' : 'text-gray-600'
              }`}>{getPriorityLevel().charAt(0).toUpperCase() + getPriorityLevel().slice(1)}</span>
            </p>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="bg-white border-2 border-blue-200 rounded-2xl p-4 md:p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl md:text-3xl">🚗</span>
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">Perfil Identificado</h3>
              <p className="text-blue-600 font-semibold capitalize text-sm md:text-base">
                                 {answers.tipo === 'imoveis' ? 'Imobiliário Premium' : 
                  answers.tipo === 'veiculos' ? 'Automotivo Especializado' :
                  answers.tipo === 'maquinarios' ? 'Industrial Profissional' : 
                  answers.tipo === 'caminhoes' ? 'Comercial Profissional' : 'Capital Inteligente'}
              </p>
          </div>

            <div className="bg-white border-2 border-orange-200 rounded-2xl p-4 md:p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl md:text-3xl">⚡</span>
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">Estratégia Recomendada</h3>
              <p className="text-gray-700 font-bold text-base md:text-lg">
                Personalizada com Contemplação Otimizada
              </p>
            </div>

            <div className="bg-white border-2 border-green-200 rounded-2xl p-4 md:p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl md:text-3xl">⏰</span>
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">Prazo Estimado</h3>
              <p className="text-green-600 font-semibold text-sm md:text-base">
                12-18 meses
              </p>
            </div>
          </div>

          {/* Por que escolher consórcio? */}
          <div className="bg-blue-600 rounded-2xl p-6 md:p-8 mb-6 md:mb-8 shadow-xl">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 text-center">
              Por que escolher consórcio?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="flex items-center space-x-4 md:space-x-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white text-2xl md:text-3xl">💰</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg md:text-xl mb-1">Sem juros</h3>
                  <p className="text-white text-sm md:text-base">Pague apenas o valor do bem</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 md:space-x-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white text-2xl md:text-3xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg md:text-xl mb-1">Aprovação rápida</h3>
                  <p className="text-white text-sm md:text-base">Processo simplificado</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 md:space-x-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white text-2xl md:text-3xl">🛡️</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg md:text-xl mb-1">Segurança total</h3>
                  <p className="text-white text-sm md:text-base">Dinheiro em garantia</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 md:space-x-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white text-2xl md:text-3xl">📈</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg md:text-xl mb-1">Flexibilidade</h3>
                  <p className="text-white text-sm md:text-base">Planos personalizados</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-blue-200 rounded-2xl p-4 md:p-6 mb-6 md:mb-8 shadow-lg">
            <div className="text-center mb-4 md:mb-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl md:text-3xl">🎯</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 px-2">
                O que você receberá com nossa consultoria exclusiva:
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {getSpecificBenefits().map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold text-sm md:text-base leading-relaxed">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Próximos Passos */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-4 md:p-6 mb-6 md:mb-8 shadow-lg">
            <div className="text-center mb-4 md:mb-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl md:text-3xl">📋</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                Próximos Passos
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex items-center space-x-4 md:space-x-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white font-bold text-lg md:text-xl">1</span>
                </div>
                <p className="text-gray-700 font-semibold text-base md:text-lg">Agendamento de consultoria</p>
              </div>
              
              <div className="flex items-center space-x-4 md:space-x-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white font-bold text-lg md:text-xl">2</span>
                </div>
                <p className="text-gray-700 font-semibold text-base md:text-lg">Simulação de parcelas</p>
              </div>
              
              <div className="flex items-center space-x-4 md:space-x-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white font-bold text-lg md:text-xl">3</span>
                </div>
                <p className="text-gray-700 font-semibold text-base md:text-lg">Análise de documentação</p>
              </div>
              
              <div className="flex items-center space-x-4 md:space-x-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white font-bold text-lg md:text-xl">4</span>
                </div>
                <p className="text-gray-700 font-semibold text-base md:text-lg">Contemplação</p>
              </div>
            </div>
          </div>

                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-orange-200 rounded-2xl p-6 md:p-8 mb-6 md:mb-8 shadow-xl">
            <div className="text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl md:text-4xl">🎯</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 px-2">
                <span className="text-orange-600">OFERTA EXCLUSIVA</span> para você, {userData.nome}!
                  </h3>
              <p className="text-gray-800 mb-6 md:mb-8 text-lg md:text-xl leading-relaxed px-2 font-medium">
                Como você demonstrou interesse em {answers.tipo === 'imoveis' ? 'imóveis' : 
                answers.tipo === 'veiculos' ? 'veículos' : 
                answers.tipo === 'maquinarios' ? 'maquinários' : 
                answers.tipo === 'caminhoes' ? 'veículos comerciais' : 'capital'},  
                estamos oferecendo uma <strong className="text-orange-600 font-bold text-xl">consultoria gratuita</strong> para criar seu plano personalizado!
              </p>
              <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl p-3 md:p-4 mx-2">
                <div className="flex items-center justify-center space-x-2 md:space-x-3 text-gray-700 font-semibold text-base md:text-lg">
                  <DollarSign className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                  <span>VALOR: <span className="text-green-600 font-bold">GRÁTIS</span> (Normalmente <span className="line-through text-gray-500">R$ 297</span>)</span>
                  <DollarSign className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                </div>
              </div>
            </div>
          </div>

            <div className="text-center space-y-4 md:space-y-6 px-2">
            <button 
              onClick={() => {
                if (import.meta.env.DEV) {
                  console.log('BOTÃO CLICADO!');
                }
                
                // Tracking: Botão de agendamento clicado
                trackingService.trackSchedulerOpen();
                
                // SALVAR DADOS NO SUPABASE PRIMEIRO
                const saveQuizData = async () => {
                  try {
                    // Primeiro, tentar buscar lead existente
                    let leadId: number;
                    const { data: existingLead } = await leadsService.getLeadByEmail(userData.email);
                    
                    if (existingLead) {
                      // Atualizar lead existente
                      leadId = existingLead.id!;
                      if (import.meta.env.DEV) {
                        console.log('Lead existente encontrado, atualizando:', existingLead);
                      }
                    } else {
                      // Criar novo lead
                      const leadData = {
                        name: userData.nome,
                        email: userData.email,
                        phone: userData.celular,
                        consortium_type: answers.tipo === 'imoveis' ? 'imoveis' : 
                                       answers.tipo === 'veiculos' ? 'veiculos' : 
                                       answers.tipo === 'veiculos_comerciais' ? 'alavancagem' : 'imoveis',
                        status: 'new',
                        source: 'quiz'
                      };
                      
                      const { data: newLead, error: leadError } = await leadsService.createLead(leadData);
                      if (leadError || !newLead) {
                        if (import.meta.env.DEV) {
                          console.error('Erro ao criar lead:', leadError);
                        }
                        return null;
                      }
                      leadId = newLead.id!;
                      if (import.meta.env.DEV) {
                        console.log('Lead criado:', newLead);
                      }
                    }
                    
                    // Processar respostas para converter valores numéricos baseados nas opções EXATAS do quiz
                    if (import.meta.env.DEV) {
                      console.log('DEBUG - Respostas originais:', answers);
                      console.log('DEBUG - answers.entrada:', answers.entrada);
                      console.log('DEBUG - answers.parcelas:', answers.parcelas);
                    }
                    
                    const processedAnswers = { ...answers };
                    
                    // Converter entrada para valor numérico baseado nas opções EXATAS do quiz
                    if (answers.entrada === 'sem_entrada') {
                      processedAnswers.entrada = '0'; // Sem entrada
                    } else if (answers.entrada === 'pequena') {
                      processedAnswers.entrada = '5000'; // Até R$ 5.000
                    } else if (answers.entrada === 'media') {
                      processedAnswers.entrada = '12500'; // R$ 5.000 - R$ 20.000 (valor médio da faixa)
                    } else if (answers.entrada === 'grande') {
                      processedAnswers.entrada = '25000'; // Acima de R$ 20.000 (valor representativo)
                    }
                    
                    // Converter parcelas para valor numérico baseado nas opções EXATAS do quiz
                    if (answers.parcelas === 'baixa') {
                      processedAnswers.parcelas = '500'; // Até R$ 500
                    } else if (answers.parcelas === 'media_baixa') {
                      processedAnswers.parcelas = '750'; // R$ 500 - R$ 1.000 (valor médio da faixa)
                    } else if (answers.parcelas === 'media') {
                      processedAnswers.parcelas = '1500'; // R$ 1.000 - R$ 2.000 (valor médio da faixa)
                    } else if (answers.parcelas === 'media_alta') {
                      processedAnswers.parcelas = '3000'; // R$ 2.000 - R$ 4.000 (valor médio da faixa)
                    } else if (answers.parcelas === 'alta') {
                      processedAnswers.parcelas = '5000'; // + de R$ 5.000 (valor representativo)
                    }
                    
                    if (import.meta.env.DEV) {
                      console.log('DEBUG - Respostas processadas:', processedAnswers);
                      console.log('DEBUG - processedAnswers.entrada:', processedAnswers.entrada);
                      console.log('DEBUG - processedAnswers.parcelas:', processedAnswers.parcelas);
                    }
                    
                    // Salvar respostas do quiz
                    const quizData = {
                      lead_id: leadId,
                      answers: processedAnswers,
                      qualification_score: calculateQualificationScore(answers),
                      priority_level: getPriorityLevel(calculateQualificationScore(answers))
                    };
                    
                    const { data: quizResult, error: quizError } = await quizService.saveQuizResult(quizData);
                    if (quizError) {
                      if (import.meta.env.DEV) {
                        console.error('Erro ao salvar quiz:', quizError);
                      }
                      return null;
                    }
                    if (import.meta.env.DEV) {
                      console.log('Quiz salvo:', quizResult);
                    }
                    
                    return { leadId, quizResult };
                  } catch (error) {
                    if (import.meta.env.DEV) {
                      console.error('Erro ao salvar dados:', error);
                    }
                    return null;
                  }
                };
                
                // Executar salvamento e depois abrir agendador
                saveQuizData().then((data) => {
                  // FECHAR O QUIZ E ABRIR O AGENDADOR NA MESMA PÁGINA
                  onClose(); // Fecha o quiz
                
                  // Abrir o ConsultationScheduler usando React diretamente
                  setTimeout(() => {
                    const schedulerModal = document.createElement('div');
                    schedulerModal.id = 'consultation-scheduler-modal';
                    schedulerModal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:99999;padding:20px;';
                    
                    // Renderizar o ConsultationScheduler diretamente
                    const { createRoot } = ReactDOM;
                    const root = createRoot(schedulerModal);
                    root.render(
                      React.createElement(ConsultationScheduler, {
                        isOpen: true,
                        onClose: () => {
                          root.unmount();
                          document.body.removeChild(schedulerModal);
                        },
                        leadData: {
                          name: userData.nome,
                          email: userData.email,
                          phone: userData.celular,
                          consortium_type: answers.tipo === 'imoveis' ? 'imoveis' : 
                                         answers.tipo === 'veiculos' ? 'veiculos' : 
                                         answers.tipo === 'veiculos_comerciais' ? 'veiculos_comerciais' : 'imoveis'
                        }
                      })
                    );
                    
                    document.body.appendChild(schedulerModal);
                  }, 100);
                });
              }}
              className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 md:py-5 px-6 md:px-8 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-lg md:text-xl cursor-pointer"
            >
              🚀 AGENDAR MINHA CONSULTORIA GRATUITA
            </button>
            
            <a 
              href="https://wa.me/5511999999999?text=Olá! Tenho algumas dúvidas sobre consórcio que gostaria de alinhar." 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-white border-2 border-blue-600 text-blue-600 font-bold py-3 md:py-4 px-6 md:px-8 rounded-2xl hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg text-base md:text-lg"
            >
              💬 Tenho Algumas Dúvidas que Gostaria de Alinhar
            </a>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;


  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Quiz de Consórcio Inteligente
          </h2>
          <p className="text-gray-600">
            Vamos descobrir o melhor consórcio para você
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
             <span className="text-sm text-gray-600 transition-all duration-300">
              Pergunta {currentQuestion + 1} de {questions.length}
            </span>
             <span className="text-sm text-gray-600 transition-all duration-300">
              {Math.round(progress)}%
            </span>
          </div>
           <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div 
               className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
                         <div className={`mb-8 transition-all duration-200 ease-out ${
                  isTransitioning 
                    ? 'opacity-0 transform translate3d(20px, 0, 0)' 
                    : 'opacity-100 transform translate3d(0, 0, 0)'
                }`} style={{
                  animation: !isTransitioning ? 'slideInFromLeft 0.2s ease-out' : undefined
                }}>
          <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
            {currentQ.question}
          </h3>
          <p className="text-gray-600 text-center mb-6">
            {currentQ.instruction}
          </p>
          
          <div className="space-y-3">
            {currentQ.options.map((option) => (
              <button
                key={option.value}
                 onClick={() => handleAnswer(currentQ.id, option.value)}
                 className={`w-full p-4 text-left border-2 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
                   answers[currentQ.id] === option.value
                     ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-purple-50 scale-[1.02] shadow-lg'
                     : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 hover:shadow-md'
                }`}
              >
                <div className="flex items-center space-x-4">
                   <span className="text-2xl transition-transform duration-300">{option.icon}</span>
                  <div>
                    <div className="font-semibold text-gray-900">{option.title}</div>
                    <div className="text-sm text-gray-600">{option.description}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

                 {/* Navigation - Apenas botão Anterior */}
         <div className="flex justify-start items-center">
           {currentQuestion > 0 && (
          <button
            onClick={handlePrevious}
               className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Anterior</span>
          </button>
           )}
        </div>
      </div>

      {/* ConsultationScheduler REAL */}
      <ConsultationScheduler
        isOpen={showScheduler}
        onClose={() => setShowScheduler(false)}
        leadData={{
          name: userData.nome,
          email: userData.email,
          phone: userData.celular,
          consortium_type: answers.tipo === 'imoveis' ? 'imoveis' : 
                         answers.tipo === 'veiculos' ? 'veiculos' : 
                         answers.tipo === 'veiculos_comerciais' ? 'veiculos_comerciais' : 'imoveis'
        }}
      />
    </div>
  );
};

export default Quiz;
