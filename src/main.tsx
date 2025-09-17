import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';
import './index.css';
import ComoFuncionaPage from './pages/ComoFuncionaPage';
import BeneficiosPage from './pages/BeneficiosPage';
import DepoimentosPage from './pages/DepoimentosPage';
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
import SobreNosPage from './pages/SobreNosPage';
import ServicosPage from './pages/ServicosPage';
import AlavancagemPage from './pages/AlavancagemPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/como-funciona" element={<ComoFuncionaPage />} />
        <Route path="/beneficios" element={<BeneficiosPage />} />
        <Route path="/depoimentos" element={<DepoimentosPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/servicos/automoveis" element={<AutomoveisPage />} />
        <Route path="/servicos/imoveis" element={<ImoveisPage />} />
        <Route path="/servicos/caminhoes" element={<CaminhoesPage />} />
        <Route path="/servicos/maquinarios" element={<MaquinariosPage />} />
        <Route path="/servicos/consultoria" element={<ConsultoriaPage />} />
        <Route path="/servicos/estrategias" element={<AlavancagemPage />} />
        <Route path="/sobre" element={<SobreNosPage />} />
        <Route path="/servicos" element={<ServicosPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
