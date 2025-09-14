import React from 'react';
import Header from '../components/Header';
import BenefitsSection from '../components/BenefitsSection';
import Footer from '../components/Footer';

const BenefitsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header onOpenQuiz={() => {}} />
      <main className="pt-20">
        <BenefitsSection />
      </main>
      <Footer />
    </div>
  );
};

export default BenefitsPage;


