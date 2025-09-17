import React from 'react';
import { Car, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/Bravo.png" alt="Logo Bravo Consórcios" className="w-10 h-10 rounded-lg object-contain" />
              <span className="text-xl font-bold text-gray-300">
                Bravo Consórcios
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Especialistas em consórcio de veículos com metodologia exclusiva para contemplação acelerada. 
              Transformamos sonhos em realidade de forma inteligente e segura.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/BravoConsorcios" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 hover:bg-yellow-500 rounded-lg flex items-center justify-center transition-colors group">
                <Facebook className="w-4 h-4 text-gray-400 group-hover:text-gray-950" />
              </a>
              <a href="https://www.instagram.com/bravo_consorcios" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 hover:bg-yellow-500 rounded-lg flex items-center justify-center transition-colors group">
                <Instagram className="w-4 h-4 text-gray-400 group-hover:text-gray-950" />
              </a>
              <a href="https://www.tiktok.com/@bravo.consorcio" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 hover:bg-yellow-500 rounded-lg flex items-center justify-center transition-colors group">
                <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-950" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Nossos Serviços</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/servicos/automoveis" className="hover:text-yellow-400 transition-colors">Consórcio de Automóveis</Link></li>
              <li><Link to="/servicos/imoveis" className="hover:text-yellow-400 transition-colors">Consórcio Imobiliário</Link></li>
              <li><Link to="/servicos/caminhoes" className="hover:text-yellow-400 transition-colors">Consórcio de Caminhões</Link></li>
              <li><Link to="/servicos/consultoria" className="hover:text-yellow-400 transition-colors">Consultoria Personalizada</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/como-funciona" className="hover:text-yellow-400 transition-colors">Como Funciona</Link></li>
              <li><Link to="/beneficios" className="hover:text-yellow-400 transition-colors">Benefícios</Link></li>
              <li><Link to="/depoimentos" className="hover:text-yellow-400 transition-colors">Depoimentos</Link></li>
              <li><Link to="/faq" className="hover:text-yellow-400 transition-colors">FAQ</Link></li>
              <li><Link to="/blog" className="hover:text-yellow-400 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contato</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-yellow-400" />
                <span>contato@consortiointelligent.com.br</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span>Porto Velho, RO<br />Atendimento em todo Rondônia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            <p>© 2024 ConsórcioIntelligent. Todos os direitos reservados.</p>
            <p className="mt-1">
              CNPJ: 00.000.000/0001-00 • Regulamentado pelo Banco Central do Brasil
            </p>
          </div>
          
          <div className="flex space-x-6 text-gray-400 text-sm">
            <Link to="/terms" className="hover:text-yellow-400 transition-colors">Termos de Uso</Link>
            <Link to="/privacy" className="hover:text-yellow-400 transition-colors">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;