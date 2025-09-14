import React, { useState, useEffect } from 'react';
import { Menu, X, Calculator } from 'lucide-react';

interface HeaderProps {
  onOpenQuiz: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenQuiz }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-950/95 backdrop-blur-md border-b border-gray-800 shadow-lg' 
        : 'bg-gray-950/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 lg:space-x-3">
            <img 
              src="/Bravo.png" 
              alt="Logo Bravo Consórcios" 
              className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg object-contain" 
            />
            <span className="text-lg lg:text-xl font-bold text-gray-300">
              Bravo Consórcios
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">
              Início
            </a>
            <a href="#sobre" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">
              Sobre Nós
            </a>
            <a href="#servicos" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">
              Serviços
            </a>
            <a href="#beneficios" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">
              Benefícios
            </a>
            <a href="#faq" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">
              FAQ
            </a>
            <a href="#contato" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">
              Contato
            </a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={onOpenQuiz}
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
            <a href="#inicio" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200 py-2 font-medium" onClick={closeMenu}>
              Início
            </a>
            <a href="#sobre" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200 py-2 font-medium" onClick={closeMenu}>
              Sobre Nós
            </a>
            <a href="#servicos" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200 py-2 font-medium" onClick={closeMenu}>
              Serviços
            </a>
            <a href="#beneficios" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200 py-2 font-medium" onClick={closeMenu}>
              Benefícios
            </a>
            <a href="#faq" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200 py-2 font-medium" onClick={closeMenu}>
              FAQ
            </a>
            <a href="#contato" className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200 py-2 font-medium" onClick={closeMenu}>
              Contato
            </a>
            
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
    </header>
  );
};

export default Header;