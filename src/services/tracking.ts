// Serviço de Tracking Profissional para Meta Ads e Google Ads
// Configuração segura com variáveis de ambiente

interface TrackingEvent {
  event_name: string;
  event_category?: string;
  event_label?: string;
  value?: number;
  currency?: string;
  custom_parameters?: Record<string, any>;
}

interface LeadData {
  email?: string;
  phone?: string;
  name?: string;
  consortium_type?: string;
  credit_value?: number;
  installment_value?: number;
  asset_type?: string;
}

class TrackingService {
  private metaPixelId: string;
  private googleAdsId: string;
  private googleAnalyticsId: string;
  private isInitialized: boolean = false;

  constructor() {
    // IDs dos pixels - configurados via variáveis de ambiente
    this.metaPixelId = import.meta.env.VITE_META_PIXEL_ID || '';
    this.googleAdsId = import.meta.env.VITE_GOOGLE_ADS_ID || '';
    this.googleAnalyticsId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID || '';
  }

  // Inicializar tracking
  public initialize(): void {
    if (this.isInitialized) return;

    this.initializeMetaPixel();
    this.initializeGoogleAds();
    this.initializeGoogleAnalytics();
    
    this.isInitialized = true;
    if (import.meta.env.DEV) {
      console.log('🎯 Tracking Service inicializado com sucesso!');
    }
  }

  // Meta Pixel
  private initializeMetaPixel(): void {
    // Carregar script do Meta Pixel
    const script = document.createElement('script');
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${this.metaPixelId}');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);

    // Noscript fallback
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `
      <img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=${this.metaPixelId}&ev=PageView&noscript=1" />
    `;
    document.head.appendChild(noscript);
  }

  // Google Ads
  private initializeGoogleAds(): void {
    if (!this.googleAdsId) return;

    // Carregar Google Ads
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${this.googleAdsId}`;
    document.head.appendChild(script);

    // Configurar gtag
    const gtagScript = document.createElement('script');
    gtagScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${this.googleAdsId}');
    `;
    document.head.appendChild(gtagScript);
  }

  // Google Analytics 4
  private initializeGoogleAnalytics(): void {
    if (!this.googleAnalyticsId || this.googleAnalyticsId === 'G-XXXXXXXXXX') return;

    // Carregar Google Analytics 4
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${this.googleAnalyticsId}`;
    document.head.appendChild(script);

    // Configurar GA4
    const gtagScript = document.createElement('script');
    gtagScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${this.googleAnalyticsId}', {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true
      });
    `;
    document.head.appendChild(gtagScript);
  }

  // Eventos do Quiz
  public trackQuizStart(): void {
    this.trackMetaEvent('InitiateCheckout', {
      content_category: 'Quiz',
      content_name: 'Quiz Iniciado'
    });

    this.trackGoogleEvent('quiz_start', {
      event_category: 'Engagement',
      event_label: 'Quiz Iniciado'
    });

    this.trackAnalyticsEvent('quiz_start', {
      event_category: 'Engagement',
      event_label: 'Quiz Iniciado',
      custom_parameter_1: 'Quiz'
    });
  }

  public trackQuizComplete(leadData: LeadData): void {
    this.trackMetaEvent('Lead', {
      content_category: 'Quiz',
      content_name: 'Quiz Completo',
      value: leadData.credit_value || 0,
      currency: 'BRL'
    });

    this.trackGoogleEvent('quiz_complete', {
      event_category: 'Lead Generation',
      event_label: 'Quiz Completo',
      value: leadData.credit_value || 0,
      currency: 'BRL'
    });

    this.trackAnalyticsEvent('quiz_complete', {
      event_category: 'Lead Generation',
      event_label: 'Quiz Completo',
      value: leadData.credit_value || 0,
      currency: 'BRL',
      custom_parameter_1: 'Quiz',
      custom_parameter_2: leadData.consortium_type || 'geral',
      custom_parameter_3: leadData.credit_value || 0
    });
  }

  // Eventos do Agendador
  public trackSchedulerOpen(): void {
    this.trackMetaEvent('ViewContent', {
      content_category: 'Scheduler',
      content_name: 'Agendador Aberto'
    });

    this.trackGoogleEvent('scheduler_open', {
      event_category: 'Engagement',
      event_label: 'Agendador Aberto'
    });

    this.trackAnalyticsEvent('scheduler_open', {
      event_category: 'Engagement',
      event_label: 'Agendador Aberto',
      custom_parameter_1: 'Scheduler'
    });
  }

  public trackAppointmentScheduled(leadData: LeadData): void {
    this.trackMetaEvent('Schedule', {
      content_category: 'Appointment',
      content_name: 'Consulta Agendada',
      value: leadData.credit_value || 0,
      currency: 'BRL'
    });

    this.trackGoogleEvent('appointment_scheduled', {
      event_category: 'Conversion',
      event_label: 'Consulta Agendada',
      value: leadData.credit_value || 0,
      currency: 'BRL'
    });

    this.trackAnalyticsEvent('appointment_scheduled', {
      event_category: 'Conversion',
      event_label: 'Consulta Agendada',
      value: leadData.credit_value || 0,
      currency: 'BRL',
      custom_parameter_1: 'Appointment',
      custom_parameter_2: leadData.consortium_type || 'geral',
      custom_parameter_3: leadData.credit_value || 0
    });
  }

  // Eventos de Lead
  public trackLeadGenerated(leadData: LeadData): void {
    this.trackMetaEvent('CompleteRegistration', {
      content_category: 'Lead',
      content_name: 'Lead Gerado',
      value: leadData.credit_value || 0,
      currency: 'BRL'
    });

    this.trackGoogleEvent('lead_generated', {
      event_category: 'Conversion',
      event_label: 'Lead Gerado',
      value: leadData.credit_value || 0,
      currency: 'BRL'
    });

    this.trackAnalyticsEvent('lead_generated', {
      event_category: 'Conversion',
      event_label: 'Lead Gerado',
      value: leadData.credit_value || 0,
      currency: 'BRL',
      custom_parameter_1: 'Lead',
      custom_parameter_2: leadData.consortium_type || 'geral',
      custom_parameter_3: leadData.credit_value || 0
    });
  }

  // Eventos de Conversão
  public trackCreditAnalyzing(creditValue: number, assetType: string): void {
    this.trackMetaEvent('Purchase', {
      content_category: 'Credit Analysis',
      content_name: 'Análise de Crédito',
      value: creditValue,
      currency: 'BRL'
    });

    this.trackGoogleEvent('credit_analyzing', {
      event_category: 'Conversion',
      event_label: 'Análise de Crédito',
      value: creditValue,
      currency: 'BRL'
    });

    this.trackAnalyticsEvent('credit_analyzing', {
      event_category: 'Conversion',
      event_label: 'Análise de Crédito',
      value: creditValue,
      currency: 'BRL',
      custom_parameter_1: 'Credit Analysis',
      custom_parameter_2: assetType,
      custom_parameter_3: creditValue
    });
  }

  public trackCreditConverted(creditValue: number, assetType: string): void {
    this.trackMetaEvent('Purchase', {
      content_category: 'Credit Conversion',
      content_name: 'Crédito Convertido',
      value: creditValue,
      currency: 'BRL'
    });

    this.trackGoogleEvent('credit_converted', {
      event_category: 'High Value Conversion',
      event_label: 'Crédito Convertido',
      value: creditValue,
      currency: 'BRL'
    });

    this.trackAnalyticsEvent('credit_converted', {
      event_category: 'High Value Conversion',
      event_label: 'Crédito Convertido',
      value: creditValue,
      currency: 'BRL',
      custom_parameter_1: 'Credit Conversion',
      custom_parameter_2: assetType,
      custom_parameter_3: creditValue
    });
  }

  // Eventos de Página
  public trackPageView(pageName: string): void {
    this.trackMetaEvent('PageView', {
      content_category: 'Page',
      content_name: pageName
    });

    this.trackGoogleEvent('page_view', {
      event_category: 'Navigation',
      event_label: pageName
    });

    this.trackAnalyticsEvent('page_view', {
      event_category: 'Navigation',
      event_label: pageName,
      custom_parameter_1: 'Page',
      custom_parameter_2: pageName
    });
  }

  // Métodos privados para tracking
  private trackMetaEvent(eventName: string, parameters: any): void {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', eventName, parameters);
      if (import.meta.env.DEV) {
        console.log(`📊 Meta Pixel: ${eventName}`, parameters);
      }
    }
  }

  private trackGoogleEvent(eventName: string, parameters: any): void {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, parameters);
      if (import.meta.env.DEV) {
        console.log(`📊 Google Ads: ${eventName}`, parameters);
      }
    }
  }

  private trackAnalyticsEvent(eventName: string, parameters: any): void {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, parameters);
      if (import.meta.env.DEV) {
        console.log(`📊 Google Analytics: ${eventName}`, parameters);
      }
    }
  }

  // Método para debug (apenas em desenvolvimento)
  public debug(): void {
    if (import.meta.env.DEV) {
      console.log('🎯 Tracking Service Debug:');
      console.log('- Meta Pixel ID:', this.metaPixelId);
      console.log('- Google Ads ID:', this.googleAdsId);
      console.log('- Google Analytics ID:', this.googleAnalyticsId);
      console.log('- Initialized:', this.isInitialized);
    }
  }
}

// Instância singleton
export const trackingService = new TrackingService();

// Inicializar automaticamente
if (typeof window !== 'undefined') {
  trackingService.initialize();
}