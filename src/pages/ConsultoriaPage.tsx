import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ConsultationScheduler from '../components/ConsultationScheduler';

const ConsultoriaPage: React.FC = () => {
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header onOpenQuiz={() => {}} />
      <main className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6">Consultoria Personalizada</h1>
        <p className="text-gray-400 mb-12">Agende uma consultoria com nossos especialistas para definir a melhor estratégia de contemplação.</p>
        
        <ConsultationScheduler 
          isOpen={isSchedulerOpen}
          onClose={() => setIsSchedulerOpen(false)}
        />
      </main>
      <Footer />
    </div>
  );
};

export default ConsultoriaPage;


