import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import HowItWorksPage from './pages/HowItWorksPage';
import BenefitsPage from './pages/BenefitsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import FAQPage from './pages/FAQPage';
import BlogPage from './pages/BlogPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import AutomoveisPage from './pages/AutomoveisPage';
import ImoveisPage from './pages/ImoveisPage';
import CaminhoesPage from './pages/CaminhoesPage';
import MaquinariosPage from './pages/MaquinariosPage';
import ConsultoriaPage from './pages/ConsultoriaPage';
import EstrategiasPage from './pages/EstrategiasPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/como-funciona" element={<HowItWorksPage />} />
        <Route path="/beneficios" element={<BenefitsPage />} />
        <Route path="/depoimentos" element={<TestimonialsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/servicos/automoveis" element={<AutomoveisPage />} />
        <Route path="/servicos/imoveis" element={<ImoveisPage />} />
        <Route path="/servicos/caminhoes" element={<CaminhoesPage />} />
        <Route path="/servicos/maquinarios" element={<MaquinariosPage />} />
        <Route path="/servicos/consultoria" element={<ConsultoriaPage />} />
        <Route path="/servicos/estrategias" element={<EstrategiasPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
