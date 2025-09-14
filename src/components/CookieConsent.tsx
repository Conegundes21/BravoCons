import React, { useState, useEffect } from 'react';
import { X, Cookie, Shield, Settings } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    localStorage.setItem('cookieConsent', JSON.stringify(allPreferences));
    setShowConsent(false);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowConsent(false);
    setShowSettings(false);
  };

  const handleDecline = () => {
    const minimalPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    };
    localStorage.setItem('cookieConsent', JSON.stringify(minimalPreferences));
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <>
      {/* Main Consent Banner */}
      {!showSettings && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 p-4 z-50 animate-slide-up">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-start space-x-3">
              <Cookie className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
              <div className="text-sm text-gray-300">
                <p className="font-medium text-white mb-1">
                  Utilizamos cookies para melhorar sua experiência
                </p>
                <p>
                  Usamos cookies essenciais e opcionais para personalizar conteúdo, 
                  fornecer recursos de mídia social e analisar nosso tráfego. 
                  <a href="/politica-privacidade" className="text-yellow-400 hover:text-yellow-300 underline ml-1">
                    Saiba mais
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => setShowSettings(true)}
                className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors flex items-center space-x-1"
              >
                <Settings className="w-4 h-4" />
                <span>Configurar</span>
              </button>
              <button
                onClick={handleDecline}
                className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                Rejeitar
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-950 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Aceitar Todos
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-yellow-400" />
                  <h2 className="text-xl font-bold text-white">Configurações de Cookies</h2>
                </div>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Cookie Types */}
              <div className="space-y-4 mb-6">
                {/* Necessary Cookies */}
                <div className="bg-gray-800 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-white">Cookies Necessários</h3>
                      <p className="text-sm text-gray-400">Essenciais para o funcionamento do site</p>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={preferences.necessary}
                        disabled
                        className="w-4 h-4 text-yellow-500 bg-gray-700 border-gray-600 rounded focus:ring-yellow-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="bg-gray-800 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-white">Cookies de Analytics</h3>
                      <p className="text-sm text-gray-400">Nos ajudam a entender como você usa o site</p>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) => setPreferences(prev => ({ ...prev, analytics: e.target.checked }))}
                        className="w-4 h-4 text-yellow-500 bg-gray-700 border-gray-600 rounded focus:ring-yellow-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="bg-gray-800 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-white">Cookies de Marketing</h3>
                      <p className="text-sm text-gray-400">Usados para personalizar anúncios e conteúdo</p>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={(e) => setPreferences(prev => ({ ...prev, marketing: e.target.checked }))}
                        className="w-4 h-4 text-yellow-500 bg-gray-700 border-gray-600 rounded focus:ring-yellow-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="bg-gray-800 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-white">Cookies Funcionais</h3>
                      <p className="text-sm text-gray-400">Melhoram a funcionalidade e personalização</p>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={preferences.functional}
                        onChange={(e) => setPreferences(prev => ({ ...prev, functional: e.target.checked }))}
                        className="w-4 h-4 text-yellow-500 bg-gray-700 border-gray-600 rounded focus:ring-yellow-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setShowSettings(false)}
                  className="flex-1 px-4 py-3 text-gray-300 hover:text-white transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleAcceptSelected}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-950 font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Salvar Preferências
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
