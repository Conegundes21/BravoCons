import React from 'react';
import Header from '../components/Header';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';

const TestimonialsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header onOpenQuiz={() => {}} />
      <main className="pt-20">
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;


