import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoSection from '../components/VideoSection';

const EstrategiasPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header onOpenQuiz={() => {}} />
      <main className="pt-24">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">Estratégias de Contemplação</h1>
          <p className="text-gray-400">Aprenda como acelerar sua contemplação com técnicas comprovadas.</p>
        </section>
        <VideoSection />
      </main>
      <Footer />
    </div>
  );
};

export default EstrategiasPage;


