import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Phone, Mail } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const LiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Olá! Sou o assistente virtual da Bravo Consórcios. Como posso ajudá-lo hoje?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const botResponses = {
    'consórcio': 'Consórcio é uma modalidade de financiamento onde você paga parcelas mensais e pode ser contemplado através de sorteio ou lances. É mais barato que financiamento tradicional!',
    'contemplação': 'Contemplação é quando você recebe o valor do consórcio para comprar seu veículo. Pode acontecer por sorteio ou através de lances. Nossa metodologia acelera esse processo!',
    'lance': 'Lance é uma estratégia onde você oferece um valor adicional para ser contemplado mais rapidamente. Nós ensinamos as melhores estratégias de lances!',
    'parcela': 'As parcelas do consórcio são geralmente 30-40% menores que financiamento tradicional. O valor depende do valor do veículo e prazo escolhido.',
    'prazo': 'Os prazos variam de 60 a 120 meses. Quanto maior o prazo, menor a parcela, mas maior o tempo para contemplação.',
    'seguro': 'Sim, o consórcio inclui seguro de vida e pode incluir seguro do veículo. É uma proteção importante para sua família.',
    'fgts': 'Sim, você pode usar FGTS para dar entrada no consórcio ou para pagar parcelas. É uma excelente forma de aproveitar esse benefício!',
    'documentação': 'Precisa de RG, CPF, comprovante de residência e renda. O processo é bem mais simples que financiamento tradicional.',
    'valor': 'O valor mínimo varia conforme a administradora, mas geralmente começa em R$ 30.000. Podemos simular o valor ideal para você!',
    'simular': 'Perfeito! Clique no botão "Simular Agora" no topo da página para fazer nossa análise personalizada gratuita!',
    'contato': 'Você pode nos contatar pelo WhatsApp (69) 99999-9999 ou pelo e-mail contato@consortiointelligent.com.br',
    'horário': 'Atendemos de segunda a sexta, das 8h às 18h, e aos sábados das 8h às 12h.',
    'local': 'Estamos em Porto Velho, RO, mas atendemos todo Rondônia e região!'
  };

  const defaultResponse = 'Entendo sua dúvida! Para uma análise personalizada e resposta mais específica, recomendo fazer nossa simulação gratuita. Posso ajudá-lo com outras dúvidas sobre consórcio?';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [keyword, response] of Object.entries(botResponses)) {
      if (lowerMessage.includes(keyword)) {
        return response;
      }
    }
    
    return defaultResponse;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simular digitação do bot
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: getBotResponse(inputValue),
      sender: 'bot',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botResponse]);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    'Como funciona o consórcio?',
    'Quanto tempo para contemplação?',
    'Posso usar FGTS?',
    'Quero simular agora'
  ];

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-6 w-14 h-14 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-950 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40 flex items-center justify-center"
        aria-label="Abrir chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-950 p-4 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bot className="w-5 h-5" />
                <span className="font-semibold">Assistente Virtual</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-950 hover:text-gray-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm mt-1">Bravo Consórcios - Online</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-950'
                      : 'bg-gray-800 text-white'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.sender === 'bot' && <Bot className="w-4 h-4 mt-1 flex-shrink-0" />}
                    <div>
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString('pt-BR', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                    {message.sender === 'user' && <User className="w-4 h-4 mt-1 flex-shrink-0" />}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-800 text-white p-3 rounded-2xl">
                  <div className="flex items-center space-x-2">
                    <Bot className="w-4 h-4" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-gray-400 mb-2">Perguntas rápidas:</p>
              <div className="flex flex-wrap gap-1">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => setInputValue(question)}
                    className="text-xs bg-gray-800 hover:bg-gray-700 text-white px-2 py-1 rounded-full transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Digite sua mensagem..."
                className="flex-1 bg-gray-800 border border-gray-600 rounded-xl px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-950 p-2 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChat;
