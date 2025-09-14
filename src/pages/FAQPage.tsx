import React from 'react';
import Header from '../components/Header';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

const FAQPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header onOpenQuiz={() => {}} />
      <main className="pt-20">
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;


