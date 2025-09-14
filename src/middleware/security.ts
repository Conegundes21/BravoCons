// Middleware de Segurança - Bravo Consórcios
// Protege rotas sensíveis e valida dados

export const securityMiddleware = {
  // Validar se é ambiente de produção
  isProduction: () => {
    return import.meta.env.PROD;
  },

  // Bloquear acesso a rotas admin em produção
  blockAdminInProduction: () => {
    if (import.meta.env.PROD && window.location.pathname.includes('/admin')) {
      window.location.href = '/';
      return false;
    }
    return true;
  },

  // Validar dados de entrada
  validateLeadData: (data: any) => {
    const required = ['name', 'email', 'phone'];
    const missing = required.filter(field => !data[field]);
    
    if (missing.length > 0) {
      throw new Error(`Campos obrigatórios: ${missing.join(', ')}`);
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      throw new Error('Email inválido');
    }

    // Validar telefone
    const phoneRegex = /^\(\d{2}\)\s\d\s\d{4}-\d{4}$/;
    if (!phoneRegex.test(data.phone)) {
      throw new Error('Telefone inválido');
    }

    return true;
  },

  // Sanitizar dados
  sanitizeData: (data: any) => {
    const sanitized = { ...data };
    
    // Remover caracteres perigosos
    Object.keys(sanitized).forEach(key => {
      if (typeof sanitized[key] === 'string') {
        sanitized[key] = sanitized[key]
          .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
          .replace(/javascript:/gi, '')
          .replace(/on\w+\s*=/gi, '');
      }
    });

    return sanitized;
  }
};
