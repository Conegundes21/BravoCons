import React, { useState, useEffect } from 'react';
import { trackingService } from '../services/tracking';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AuthoritySection from '../components/AuthoritySection';
import VideoSection from '../components/VideoSection';
import BenefitsSection from '../components/BenefitsSection';
import HowItWorksSection from '../components/HowItWorksSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import UrgencySection from '../components/UrgencySection';
import SobreNosSection from '../components/SobreNosSection';
import NichosSection from '../components/NichosSection';
import Quiz from '../components/Quiz';
import FixedCTA from '../components/FixedCTA';
import CookieConsent from '../components/CookieConsent';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Tracking da página inicial
  useEffect(() => {
    trackingService.trackPageView('Home Page');
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-x-hidden">
      <Header onOpenQuiz={() => setShowQuiz(true)} />
      <HeroSection onOpenQuiz={() => setShowQuiz(true)} />
      <VideoSection />
      <AuthoritySection />
      <BenefitsSection />
      <NichosSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      <UrgencySection onOpenQuiz={() => setShowQuiz(true)} />
      <SobreNosSection />
      <Footer />
      
             {showQuiz && <Quiz onClose={() => setShowQuiz(false)} />}
             {scrolled && <FixedCTA onOpenQuiz={() => setShowQuiz(true)} />}
             <CookieConsent />
    </div>
  );
};

export default HomePage;
