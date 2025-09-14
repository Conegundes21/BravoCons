import React from 'react';

const SobreNosSection: React.FC = () => {
  return (
    <section id="sobre-nos" className="bg-gray-900 py-16 border-t border-b border-gray-800">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center text-center">
        <img src="/Bravo.png" alt="Logo Bravo Consórcios" className="w-40 h-40 mb-6 rounded-2xl shadow-lg object-contain" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Sobre a Bravo Consórcios</h2>
        <p className="text-gray-300 text-lg mb-4">
          A Bravo Consórcios é referência em soluções de consórcio para veículos, imóveis e muito mais. Nossa missão é ajudar você a conquistar seus sonhos com segurança, transparência e as melhores condições do mercado.
        </p>
        <p className="text-gray-400 max-w-2xl">
          Com uma equipe experiente e atendimento personalizado, oferecemos consultoria completa para que você faça a melhor escolha, seja para comprar seu carro, caminhão, moto ou imóvel. Conte com a Bravo Consórcios para transformar seus projetos em realidade!
        </p>
      </div>
    </section>
  );
};

export default SobreNosSection; 