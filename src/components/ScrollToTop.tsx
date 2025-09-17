import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Adicionar classe para desabilitar scroll suave
    document.documentElement.classList.add('no-smooth-scroll');
    
    // Forçar scroll para o topo de forma imediata - múltiplas estratégias
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Para casos extremos, usar requestAnimationFrame
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
    
    // Remover a classe após garantir que o scroll foi aplicado
    setTimeout(() => {
      document.documentElement.classList.remove('no-smooth-scroll');
    }, 50);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
