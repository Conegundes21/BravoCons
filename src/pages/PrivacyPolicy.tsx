import React from 'react';
import { Shield, Eye, Lock, Users, Database, Bell } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Shield className="w-12 h-12 text-yellow-400" />
            <h1 className="text-4xl font-bold">Política de Privacidade</h1>
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
                <Eye className="w-6 h-6 mr-3 text-yellow-400" />
                1. Introdução
              </h2>
              <p className="text-gray-300 leading-relaxed">
                A Bravo Consórcios ("nós", "nosso", "nossa") está comprometida em proteger sua privacidade. 
                Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos suas 
                informações pessoais quando você utiliza nosso site e serviços.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Esta política está em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) 
                e outras legislações aplicáveis de proteção de dados.
              </p>
            </section>

            {/* Data Collection */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Database className="w-6 h-6 mr-3 text-yellow-400" />
                2. Informações que Coletamos
              </h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">2.1 Informações Pessoais</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Nome completo</li>
                <li>Endereço de e-mail</li>
                <li>Número de telefone/WhatsApp</li>
                <li>CPF</li>
                <li>Endereço residencial</li>
                <li>Informações de renda</li>
                <li>Preferências de veículos</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.2 Informações Automáticas</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Endereço IP</li>
                <li>Tipo de navegador</li>
                <li>Sistema operacional</li>
                <li>Páginas visitadas</li>
                <li>Tempo de permanência</li>
                <li>Cookies e tecnologias similares</li>
              </ul>
            </section>

            {/* Data Usage */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Users className="w-6 h-6 mr-3 text-yellow-400" />
                3. Como Usamos suas Informações
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800 rounded-xl p-6">
                  <h4 className="font-semibold text-white mb-3">Finalidades Principais</h4>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Fornecer simulações de consórcio</li>
                    <li>• Processar solicitações de consultoria</li>
                    <li>• Enviar comunicações sobre nossos serviços</li>
                    <li>• Melhorar nossos produtos e serviços</li>
                    <li>• Cumprir obrigações legais</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-6">
                  <h4 className="font-semibold text-white mb-3">Finalidades Secundárias</h4>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Marketing e publicidade</li>
                    <li>• Análise de mercado</li>
                    <li>• Personalização de conteúdo</li>
                    <li>• Prevenção de fraudes</li>
                    <li>• Pesquisa e desenvolvimento</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Lock className="w-6 h-6 mr-3 text-yellow-400" />
                4. Compartilhamento de Dados
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                Não vendemos, alugamos ou comercializamos suas informações pessoais. Podemos compartilhar 
                seus dados apenas nas seguintes situações:
              </p>
              
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li><strong>Administradoras de Consórcio:</strong> Para processar sua solicitação</li>
                <li><strong>Prestadores de Serviços:</strong> Empresas que nos auxiliam na operação</li>
                <li><strong>Autoridades Legais:</strong> Quando exigido por lei</li>
                <li><strong>Proteção de Direitos:</strong> Para proteger nossos direitos e segurança</li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-yellow-400" />
                5. Segurança dos Dados
              </h2>
              
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Medidas de Segurança Implementadas</h3>
                <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                  <ul className="space-y-2">
                    <li>• Criptografia SSL/TLS</li>
                    <li>• Firewalls avançados</li>
                    <li>• Monitoramento 24/7</li>
                    <li>• Backup automático</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• Controle de acesso rigoroso</li>
                    <li>• Treinamento da equipe</li>
                    <li>• Auditorias regulares</li>
                    <li>• Conformidade com padrões</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Bell className="w-6 h-6 mr-3 text-yellow-400" />
                6. Cookies e Tecnologias Similares
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                Utilizamos cookies e tecnologias similares para melhorar sua experiência em nosso site:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-800 rounded-xl p-4">
                  <h4 className="font-semibold text-white mb-2">Cookies Essenciais</h4>
                  <p className="text-gray-300 text-sm">
                    Necessários para o funcionamento básico do site
                  </p>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-4">
                  <h4 className="font-semibold text-white mb-2">Cookies de Analytics</h4>
                  <p className="text-gray-300 text-sm">
                    Nos ajudam a entender como você usa o site
                  </p>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-4">
                  <h4 className="font-semibold text-white mb-2">Cookies de Marketing</h4>
                  <p className="text-gray-300 text-sm">
                    Usados para personalizar anúncios e conteúdo
                  </p>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Seus Direitos (LGPD)</h2>
              
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-xl p-6">
                <p className="text-gray-300 mb-4">
                  Conforme a LGPD, você tem os seguintes direitos:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-gray-300 space-y-2">
                    <li>• <strong>Acesso:</strong> Solicitar informações sobre seus dados</li>
                    <li>• <strong>Correção:</strong> Corrigir dados incompletos ou incorretos</li>
                    <li>• <strong>Exclusão:</strong> Solicitar a remoção de seus dados</li>
                    <li>• <strong>Portabilidade:</strong> Receber seus dados em formato estruturado</li>
                  </ul>
                  
                  <ul className="text-gray-300 space-y-2">
                    <li>• <strong>Revogação:</strong> Retirar consentimento a qualquer momento</li>
                    <li>• <strong>Oposição:</strong> Opor-se ao tratamento de dados</li>
                    <li>• <strong>Revisão:</strong> Revisar decisões automatizadas</li>
                    <li>• <strong>Denúncia:</strong> Denunciar à autoridade competente</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Retenção de Dados</h2>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                Mantemos suas informações pessoais apenas pelo tempo necessário para:
              </p>
              
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Fornecer nossos serviços</li>
                <li>Cumprir obrigações legais</li>
                <li>Resolver disputas</li>
                <li>Fazer cumprir nossos acordos</li>
              </ul>
              
              <p className="text-gray-300 leading-relaxed mt-4">
                <strong>Período de retenção:</strong> Seus dados são mantidos por até 5 anos após o último contato, 
                salvo quando a lei exigir um período diferente.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Contato</h2>
              
              <div className="bg-gray-800 rounded-xl p-6">
                <p className="text-gray-300 mb-4">
                  Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Encarregado de Proteção de Dados (DPO)</h4>
                    <p className="text-gray-300 text-sm">
                      E-mail: dpo@consortiointelligent.com.br<br />
                      Telefone: (69) 99999-9999
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Atendimento Geral</h4>
                    <p className="text-gray-300 text-sm">
                      E-mail: contato@consortiointelligent.com.br<br />
                      WhatsApp: (69) 99999-9999
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Updates */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Alterações nesta Política</h2>
              
              <p className="text-gray-300 leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre mudanças 
                significativas através de:
              </p>
              
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-4">
                <li>E-mail para todos os usuários cadastrados</li>
                <li>Aviso em destaque em nosso site</li>
                <li>Notificação push (se autorizado)</li>
              </ul>
              
              <p className="text-gray-300 leading-relaxed mt-4">
                <strong>Data da última atualização:</strong> 15 de Janeiro de 2024
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
