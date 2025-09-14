import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header onOpenQuiz={() => {}} />
      <main className="pt-24 max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <p className="text-gray-400">Em breve conteúdos e notícias sobre consórcio.</p>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;


