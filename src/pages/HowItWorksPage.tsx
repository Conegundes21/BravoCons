import React from 'react';
import Header from '../components/Header';
import HowItWorksSection from '../components/HowItWorksSection';
import Footer from '../components/Footer';

const HowItWorksPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header onOpenQuiz={() => {}} />
      <main className="pt-20">
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;


