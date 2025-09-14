import React from 'react';
import { FileText, Shield, AlertTriangle, CheckCircle, Users, Lock } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <FileText className="w-12 h-12 text-yellow-400" />
            <h1 className="text-4xl font-bold">Termos de Uso</h1>
          </div>
          <p className="text-gray-400 text-lg">
            Última atualização: 15 de Janeiro de 2024
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 space-y-8">
            
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-yellow-400" />
                1. Aceitação dos Termos
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Ao acessar e utilizar o site da Bravo Consórcios ("Site"), você concorda em cumprir e estar 
                vinculado a estes Termos de Uso ("Termos"). Se você não concordar com qualquer parte destes 
                termos, não deve utilizar nossos serviços.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Estes termos constituem um acordo legal entre você e a Bravo Consórcios, uma empresa 
                especializada em consultoria de consórcio de veículos.
              </p>
            </section>

            {/* Services Description */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 mr-3 text-yellow-400" />
                2. Descrição dos Serviços
              </h2>
              
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Nossos Serviços Incluem:</h3>
                <ul className="text-gray-300 space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Simulações e análises de consórcio de veículos</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Consultoria personalizada sobre consórcios</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Orientação sobre estratégias de contemplação</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Análise de grupos e administradoras</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Suporte e acompanhamento durante o processo</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* User Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Users className="w-6 h-6 mr-3 text-yellow-400" />
                3. Responsabilidades do Usuário
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800 rounded-xl p-6">
                  <h4 className="font-semibold text-white mb-3">Você se Compromete a:</h4>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Fornecer informações verdadeiras e precisas</li>
                    <li>• Manter a confidencialidade de suas credenciais</li>
                    <li>• Usar nossos serviços de forma ética e legal</li>
                    <li>• Não compartilhar informações confidenciais</li>
                    <li>• Respeitar os direitos de propriedade intelectual</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-6">
                  <h4 className="font-semibold text-white mb-3">Você Não Deve:</h4>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Usar nossos serviços para atividades ilegais</li>
                    <li>• Tentar acessar sistemas sem autorização</li>
                    <li>• Transmitir vírus ou código malicioso</li>
                    <li>• Interferir no funcionamento do site</li>
                    <li>• Usar bots ou scripts automatizados</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Lock className="w-6 h-6 mr-3 text-yellow-400" />
                4. Propriedade Intelectual
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                Todo o conteúdo deste site, incluindo textos, imagens, gráficos, logos, software e 
                design, é propriedade da Bravo Consórcios ou de nossos licenciadores e está protegido 
                por leis de direitos autorais e propriedade intelectual.
              </p>
              
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Direitos Reservados</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Conteúdo exclusivo sobre consórcios</li>
                  <li>• Metodologias e estratégias desenvolvidas</li>
                  <li>• Design e interface do site</li>
                  <li>• Marca e identidade visual</li>
                  <li>• Software e algoritmos proprietários</li>
                </ul>
              </div>
            </section>

            {/* Disclaimers */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-3 text-yellow-400" />
                5. Limitações e Isenções
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Isenção de Garantias</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Nossos serviços são fornecidos "como estão" e "conforme disponíveis". Não garantimos 
                    que nossos serviços serão ininterruptos, seguros ou livres de erros. As simulações 
                    fornecidas são estimativas baseadas em informações disponíveis e podem não refletir 
                    resultados reais.
                  </p>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Limitação de Responsabilidade</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Em nenhuma circunstância a Bravo Consórcios será responsável por danos indiretos, 
                    incidentais, especiais ou consequenciais, incluindo perda de lucros, dados ou uso, 
                    decorrentes do uso de nossos serviços.
                  </p>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Aviso sobre Investimentos</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Consórcio é uma modalidade de investimento que envolve riscos. Nossas recomendações 
                    não constituem aconselhamento financeiro profissional. Recomendamos consultar um 
                    especialista financeiro antes de tomar decisões de investimento.
                  </p>
                </div>
              </div>
            </section>

            {/* Privacy and Data */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-yellow-400" />
                6. Privacidade e Proteção de Dados
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                A proteção de seus dados pessoais é fundamental para nós. Nossa coleta, uso e proteção 
                de dados estão detalhados em nossa Política de Privacidade, que faz parte integrante 
                destes Termos de Uso.
              </p>
              
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Compromissos de Privacidade</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Conformidade total com a LGPD</li>
                  <li>• Criptografia de dados sensíveis</li>
                  <li>• Acesso restrito às informações</li>
                  <li>• Transparência no uso dos dados</li>
                  <li>• Direito de exclusão a qualquer momento</li>
                </ul>
              </div>
            </section>

            {/* Payment Terms */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Termos de Pagamento</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Serviços Pagos</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Consultorias personalizadas são serviços pagos</li>
                    <li>• Preços são informados antes da contratação</li>
                    <li>• Pagamentos são processados de forma segura</li>
                    <li>• Reembolsos seguem nossa política específica</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Política de Reembolso</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Reembolso integral em até 7 dias</li>
                    <li>• Cancelamento antes da consultoria</li>
                    <li>• Reagendamento gratuito uma vez</li>
                    <li>• Não reembolso após prestação do serviço</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Rescisão</h2>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                Podemos suspender ou encerrar seu acesso aos nossos serviços a qualquer momento, 
                com ou sem aviso prévio, por qualquer motivo, incluindo violação destes Termos.
              </p>
              
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Circunstâncias de Rescisão</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Violação dos Termos de Uso</li>
                  <li>• Uso inadequado dos serviços</li>
                  <li>• Atividades fraudulentas ou ilegais</li>
                  <li>• Não pagamento de serviços contratados</li>
                  <li>• Solicitação do usuário</li>
                </ul>
              </div>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Lei Aplicável</h2>
              
              <div className="bg-gray-800 rounded-xl p-6">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Estes Termos de Uso são regidos pelas leis brasileiras. Qualquer disputa será 
                  resolvida nos tribunais da comarca de Porto Velho, Estado de Rondônia, Brasil.
                </p>
                
                <h3 className="text-xl font-semibold text-white mb-3">Resolução de Disputas</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Tentativa de resolução amigável</li>
                  <li>• Mediação quando aplicável</li>
                  <li>• Jurisdição exclusiva dos tribunais brasileiros</li>
                  <li>• Aplicação da legislação brasileira</li>
                </ul>
              </div>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Alterações nos Termos</h2>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                Reservamo-nos o direito de modificar estes Termos a qualquer momento. Alterações 
                significativas serão comunicadas através de:
              </p>
              
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Notificação por e-mail para usuários cadastrados</li>
                <li>Aviso em destaque em nosso site</li>
                <li>Data de vigência claramente indicada</li>
              </ul>
              
              <p className="text-gray-300 leading-relaxed mt-4">
                O uso continuado dos serviços após as alterações constitui aceitação dos novos termos.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Informações de Contato</h2>
              
              <div className="bg-gray-800 rounded-xl p-6">
                <p className="text-gray-300 mb-4">
                  Para dúvidas sobre estes Termos de Uso, entre em contato:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Bravo Consórcios</h4>
                    <p className="text-gray-300 text-sm">
                      E-mail: contato@consortiointelligent.com.br<br />
                      WhatsApp: (69) 99999-9999<br />
                      Endereço: Porto Velho, RO
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Suporte Legal</h4>
                    <p className="text-gray-300 text-sm">
                      E-mail: juridico@consortiointelligent.com.br<br />
                      Telefone: (69) 99999-9999<br />
                      Horário: Seg-Sex, 8h-18h
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Final Notes */}
            <section>
              <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">Aviso Final</h3>
                <p className="text-gray-300 leading-relaxed">
                  Ao utilizar nossos serviços, você confirma que leu, entendeu e concorda com todos 
                  os termos e condições aqui estabelecidos. Se você não concordar com qualquer parte 
                  destes termos, não deve utilizar nossos serviços.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  <strong>Data da última atualização:</strong> 15 de Janeiro de 2024
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
