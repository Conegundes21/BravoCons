import React, { useState, useEffect } from 'react';
import { Menu, X, Calculator } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';
import ContactModal from './ContactModal';

interface HeaderProps {
  onOpenQuiz: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenQuiz }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
    closeMenu();
  };

  const handleNavigation = (path: string) => {
    if (path === '#contato') {
      setShowContactModal(true);
    } else if (path === '#inicio') {
      navigate('/');
    } else if (path === '#sobre') {
      navigate('/sobre');
    } else if (path === '#servicos') {
      navigate('/servicos');
    } else if (path === '#beneficios') {
      navigate('/beneficios');
    } else if (path === '#faq') {
      navigate('/faq');
    } else {
      // Scroll para seção na mesma página
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    closeMenu();
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-950/95 backdrop-blur-md border-b border-gray-800 shadow-lg' 
        : 'bg-gray-950/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center space-x-2 lg:space-x-3 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <img 
              src="/Bravo.png" 
              alt="Logo Bravo Consórcios" 
              className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg object-contain" 
            />
            <span className="text-lg lg:text-xl font-bold text-gray-300">
              Bravo Consórcios
            </span>
          </button>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('#inicio')}
              className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => handleNavigation('#sobre')}
              className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium"
            >
              Sobre Nós
            </button>
            <button 
              onClick={() => handleNavigation('#servicos')}
              className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => handleNavigation('#beneficios')}
              className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium"
            >
              Benefícios
            </button>
            <button 
              onClick={() => handleNavigation('#faq')}
              className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium"
            >
              FAQ
            </button>
            <button 
              onClick={() => handleNavigation('#contato')}
              data-contact-trigger
              className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium"
            >
              Contato
            </button>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={onOpenQuiz}
              data-quiz-trigger
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <Calculator className="w-4 h-4" />
              <span>Simule Agora</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-gray-900/95 backdrop-blur-md border-t border-gray-800 px-4 py-6 space-y-4">
            <button 
              onClick={() => handleNavigation('#inicio')}
              className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200 py-2 font-medium w-full text-left"
            >
              Início
            </button>
            <button 
              onClick={() => handleNavigation('#sobre')}
              className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200 py-2 font-medium w-full text-left"
            >
              Sobre Nós
            </button>
            <button 
              onClick={() => handleNavigation('#servicos')}
              className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200 py-2 font-medium w-full text-left"
            >
              Serviços
            </button>
            <button 
              onClick={() => handleNavigation('#beneficios')}
              className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200 py-2 font-medium w-full text-left"
            >
              Benefícios
            </button>
            <button 
              onClick={() => handleNavigation('#faq')}
              className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200 py-2 font-medium w-full text-left"
            >
              FAQ
            </button>
            <button 
              onClick={() => handleNavigation('#contato')}
              className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200 py-2 font-medium w-full text-left"
            >
              Contato
            </button>
            
            <div className="pt-4 space-y-3 border-t border-gray-800">
              <button
                onClick={() => {
                  onOpenQuiz();
                  closeMenu();
                }}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105"
              >
                <Calculator className="w-4 h-4" />
                <span>Simule Agora</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Modal */}
      {showContactModal && createPortal(
        <ContactModal 
          isOpen={showContactModal} 
          onClose={() => setShowContactModal(false)} 
        />,
        document.body
      )}
    </header>
  );
};

export default Header;