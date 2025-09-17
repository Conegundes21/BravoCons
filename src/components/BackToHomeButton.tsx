import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BackToHomeButton: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <button
      onClick={handleBackToHome}
      className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
    >
      <ArrowLeft className="w-4 h-4" />
      <span className="font-medium">Voltar ao Início</span>
    </button>
  );
};

export default BackToHomeButton;
