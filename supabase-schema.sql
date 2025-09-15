-- Schema para o projeto Bravo Consórcios - Versão 2.0
-- Execute este SQL no SQL Editor do Supabase

-- Habilitar extensões necessárias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Tabela de leads expandida para consórcios com campos detalhados
CREATE TABLE IF NOT EXISTS leads (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  phone VARCHAR(20) NOT NULL,
  
  -- Informações específicas para consórcios
  consortium_type VARCHAR(50) CHECK (consortium_type IN ('imoveis', 'veiculos', 'maquinarios', 'caminhoes', 'alavancagem')),
  desired_value DECIMAL(12,2),
  max_monthly_payment DECIMAL(10,2),
  preferred_deadline INTEGER, -- prazo em meses
  
  -- Recursos disponíveis
  has_fgts BOOLEAN DEFAULT FALSE,
  fgts_value DECIMAL(10,2),
  has_initial_payment BOOLEAN DEFAULT FALSE,
  initial_payment_value DECIMAL(10,2),
  
  -- Perfil e urgência
  urgency_level VARCHAR(20) CHECK (urgency_level IN ('baixa', 'media', 'alta', 'urgente')),
  investment_purpose TEXT,
  
  -- Informações específicas por tipo
  vehicle_type VARCHAR(100),
  vehicle_value VARCHAR(100),
  property_type VARCHAR(100),
  property_location VARCHAR(255),
  machinery_type VARCHAR(100),
  truck_type VARCHAR(100),
  
  -- Informações de contato e origem
  source VARCHAR(50) NOT NULL CHECK (source IN ('quiz', 'calculator', 'scheduler', 'contact', 'whatsapp')),
  status VARCHAR(50) NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'converted', 'lost')),
  notes TEXT,
  
  -- Metadados
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de resultados do quiz expandida com todas as respostas
CREATE TABLE IF NOT EXISTS quiz_results (
  id BIGSERIAL PRIMARY KEY,
  lead_id BIGINT NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  
  -- Respostas detalhadas do quiz
  answers JSONB NOT NULL,
  
  -- Recomendações personalizadas
  recommendation JSONB NOT NULL,
  
  -- Análise de perfil do cliente
  customer_profile JSONB,
  
  -- Estratégia recomendada
  strategy JSONB,
  
  -- Score de qualificação
  qualification_score INTEGER CHECK (qualification_score >= 0 AND qualification_score <= 100),
  
  -- Prioridade de atendimento
  priority_level VARCHAR(20) DEFAULT 'normal' CHECK (priority_level IN ('baixa', 'normal', 'alta', 'urgente')),
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de agendamentos de consultoria
CREATE TABLE IF NOT EXISTS consultation_bookings (
  id BIGSERIAL PRIMARY KEY,
  lead_id BIGINT NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  package_id VARCHAR(50) NOT NULL,
  package_name VARCHAR(255) NOT NULL,
  package_price DECIMAL(10,2) NOT NULL,
  scheduled_date DATE NOT NULL,
  scheduled_time TIME NOT NULL,
  status VARCHAR(50) NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  payment_status VARCHAR(50) NOT NULL DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'refunded')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de usuários administradores com autenticação robusta
CREATE TABLE IF NOT EXISTS admin_users (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL DEFAULT 'admin' CHECK (role IN ('admin', 'manager', 'consultant')),
  is_active BOOLEAN DEFAULT TRUE,
  last_login TIMESTAMP WITH TIME ZONE,
  login_attempts INTEGER DEFAULT 0,
  locked_until TIMESTAMP WITH TIME ZONE,
  two_factor_enabled BOOLEAN DEFAULT FALSE,
  two_factor_secret VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de logs de acesso para segurança e auditoria
CREATE TABLE IF NOT EXISTS access_logs (
  id BIGSERIAL PRIMARY KEY,
  admin_user_id BIGINT REFERENCES admin_users(id),
  action VARCHAR(100) NOT NULL,
  ip_address INET,
  user_agent TEXT,
  success BOOLEAN NOT NULL,
  details JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de sessões ativas para controle de segurança
CREATE TABLE IF NOT EXISTS active_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  admin_user_id BIGINT NOT NULL REFERENCES admin_users(id),
  session_token VARCHAR(255) NOT NULL UNIQUE,
  ip_address INET,
  user_agent TEXT,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para performance otimizada
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_source ON leads(source);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);
CREATE INDEX IF NOT EXISTS idx_leads_consortium_type ON leads(consortium_type);
CREATE INDEX IF NOT EXISTS idx_leads_urgency_level ON leads(urgency_level);
CREATE INDEX IF NOT EXISTS idx_leads_qualification_score ON leads(id) WHERE consortium_type IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_quiz_results_lead_id ON quiz_results(lead_id);
CREATE INDEX IF NOT EXISTS idx_quiz_results_created_at ON quiz_results(created_at);
CREATE INDEX IF NOT EXISTS idx_quiz_results_qualification_score ON quiz_results(qualification_score);
CREATE INDEX IF NOT EXISTS idx_quiz_results_priority_level ON quiz_results(priority_level);

CREATE INDEX IF NOT EXISTS idx_consultation_bookings_lead_id ON consultation_bookings(lead_id);
CREATE INDEX IF NOT EXISTS idx_consultation_bookings_status ON consultation_bookings(status);
CREATE INDEX IF NOT EXISTS idx_consultation_bookings_scheduled_date ON consultation_bookings(scheduled_date);

CREATE INDEX IF NOT EXISTS idx_admin_users_email ON admin_users(email);
CREATE INDEX IF NOT EXISTS idx_admin_users_role ON admin_users(role);
CREATE INDEX IF NOT EXISTS idx_admin_users_is_active ON admin_users(is_active);

CREATE INDEX IF NOT EXISTS idx_access_logs_admin_user_id ON access_logs(admin_user_id);
CREATE INDEX IF NOT EXISTS idx_access_logs_created_at ON access_logs(created_at);
CREATE INDEX IF NOT EXISTS idx_access_logs_ip_address ON access_logs(ip_address);

CREATE INDEX IF NOT EXISTS idx_active_sessions_admin_user_id ON active_sessions(admin_user_id);
CREATE INDEX IF NOT EXISTS idx_active_sessions_token ON active_sessions(session_token);
CREATE INDEX IF NOT EXISTS idx_active_sessions_expires_at ON active_sessions(expires_at);

-- Função para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers para atualizar updated_at
CREATE TRIGGER update_leads_updated_at BEFORE UPDATE ON leads FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_quiz_results_updated_at BEFORE UPDATE ON quiz_results FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_consultation_bookings_updated_at BEFORE UPDATE ON consultation_bookings FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_admin_users_updated_at BEFORE UPDATE ON admin_users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Função para hash de senha usando pgcrypto (mais seguro)
CREATE OR REPLACE FUNCTION hash_password(password TEXT)
RETURNS TEXT AS $$
BEGIN
  RETURN crypt(password, gen_salt('bf', 12));
END;
$$ LANGUAGE plpgsql;

-- Função para verificar senha
CREATE OR REPLACE FUNCTION verify_password(password TEXT, hash TEXT)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN crypt(password, hash) = hash;
END;
$$ LANGUAGE plpgsql;

-- Função para limpar sessões expiradas
CREATE OR REPLACE FUNCTION cleanup_expired_sessions()
RETURNS INTEGER AS $$
DECLARE
  deleted_count INTEGER;
BEGIN
  DELETE FROM active_sessions WHERE expires_at < NOW();
  GET DIAGNOSTICS deleted_count = ROW_COUNT;
  RETURN deleted_count;
END;
$$ LANGUAGE plpgsql;

-- Função para calcular score de qualificação
CREATE OR REPLACE FUNCTION calculate_qualification_score(
  p_urgency_level VARCHAR(20),
  p_has_fgts BOOLEAN,
  p_has_initial_payment BOOLEAN,
  p_max_monthly_payment DECIMAL
)
RETURNS INTEGER AS $$
DECLARE
  score INTEGER := 0;
BEGIN
  -- Score base por urgência
  CASE p_urgency_level
    WHEN 'urgente' THEN score := score + 30;
    WHEN 'alta' THEN score := score + 25;
    WHEN 'media' THEN score := score + 20;
    WHEN 'baixa' THEN score := score + 15;
  END CASE;
  
  -- Score por recursos disponíveis
  IF p_has_fgts THEN score := score + 20; END IF;
  IF p_has_initial_payment THEN score := score + 15; END IF;
  
  -- Score por capacidade de pagamento
  IF p_max_monthly_payment >= 2000 THEN score := score + 20;
  ELSIF p_max_monthly_payment >= 1000 THEN score := score + 15;
  ELSIF p_max_monthly_payment >= 500 THEN score := score + 10;
  ELSE score := score + 5;
  END IF;
  
  -- Score por perfil completo
  score := score + 10;
  
  -- Limitar a 100
  IF score > 100 THEN score := 100; END IF;
  
  RETURN score;
END;
$$ LANGUAGE plpgsql;

-- Políticas de segurança (RLS - Row Level Security)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultation_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE access_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE active_sessions ENABLE ROW LEVEL SECURITY;

-- Políticas para leads (permitir inserção pública, leitura apenas para admins)
CREATE POLICY "Leads can be created by anyone" ON leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Leads can be read by authenticated users" ON leads FOR SELECT USING (auth.role() = 'authenticated');

-- Políticas para quiz_results (permitir inserção pública, leitura apenas para admins)
CREATE POLICY "Quiz results can be created by anyone" ON quiz_results FOR INSERT WITH CHECK (true);
CREATE POLICY "Quiz results can be read by authenticated users" ON quiz_results FOR SELECT USING (auth.role() = 'authenticated');

-- Políticas para consultation_bookings (permitir inserção pública, leitura apenas para admins)
CREATE POLICY "Bookings can be created by anyone" ON consultation_bookings FOR INSERT WITH CHECK (true);
CREATE POLICY "Bookings can be read by authenticated users" ON consultation_bookings FOR SELECT USING (auth.role() = 'authenticated');

-- Políticas para admin_users (apenas admins podem acessar)
CREATE POLICY "Admin users can be managed by admins only" ON admin_users FOR ALL USING (auth.role() = 'authenticated');

-- Políticas para access_logs (apenas admins podem acessar)
CREATE POLICY "Access logs can be managed by admins only" ON access_logs FOR ALL USING (auth.role() = 'authenticated');

-- Políticas para active_sessions (apenas admins podem acessar)
CREATE POLICY "Active sessions can be managed by admins only" ON active_sessions FOR ALL USING (auth.role() = 'authenticated');

-- Inserir usuário admin padrão com senha hash segura
INSERT INTO admin_users (email, name, password_hash, role) VALUES 
('admin@bravoconcursos.com', 'Administrador', hash_password('Admin@2024!'), 'admin')
ON CONFLICT (email) DO NOTHING;

-- Comentários nas tabelas
COMMENT ON TABLE leads IS 'Tabela de leads capturados do site com informações específicas para consórcios';
COMMENT ON TABLE quiz_results IS 'Resultados detalhados dos quizzes respondidos pelos leads com score de qualificação';
COMMENT ON TABLE consultation_bookings IS 'Agendamentos de consultoria';
COMMENT ON TABLE admin_users IS 'Usuários administradores do painel com autenticação segura e 2FA';
COMMENT ON TABLE access_logs IS 'Logs de acesso para auditoria e segurança';
COMMENT ON TABLE active_sessions IS 'Sessões ativas dos usuários admin para controle de segurança';

-- Views úteis para o painel admin
CREATE OR REPLACE VIEW leads_summary AS
SELECT 
  COUNT(*) as total_leads,
  COUNT(CASE WHEN status = 'new' THEN 1 END) as new_leads,
  COUNT(CASE WHEN status = 'contacted' THEN 1 END) as contacted_leads,
  COUNT(CASE WHEN status = 'qualified' THEN 1 END) as qualified_leads,
  COUNT(CASE WHEN status = 'converted' THEN 1 END) as converted_leads,
  COUNT(CASE WHEN status = 'lost' THEN 1 END) as lost_leads,
  COUNT(CASE WHEN source = 'quiz' THEN 1 END) as quiz_leads,
  COUNT(CASE WHEN source = 'calculator' THEN 1 END) as calculator_leads,
  COUNT(CASE WHEN source = 'scheduler' THEN 1 END) as scheduler_leads,
  COUNT(CASE WHEN source = 'contact' THEN 1 END) as contact_leads,
  COUNT(CASE WHEN source = 'whatsapp' THEN 1 END) as whatsapp_leads,
  COUNT(CASE WHEN consortium_type = 'imoveis' THEN 1 END) as imoveis_leads,
  COUNT(CASE WHEN consortium_type = 'veiculos' THEN 1 END) as veiculos_leads,
  COUNT(CASE WHEN consortium_type = 'maquinarios' THEN 1 END) as maquinarios_leads,
  COUNT(CASE WHEN consortium_type = 'caminhoes' THEN 1 END) as caminhoes_leads,
  COUNT(CASE WHEN consortium_type = 'alavancagem' THEN 1 END) as alavancagem_leads,
  COUNT(CASE WHEN urgency_level = 'urgente' THEN 1 END) as urgent_leads,
  COUNT(CASE WHEN has_fgts = true THEN 1 END) as fgts_leads,
  COUNT(CASE WHEN has_initial_payment = true THEN 1 END) as initial_payment_leads
FROM leads;

CREATE OR REPLACE VIEW recent_leads AS
SELECT 
  l.*,
  qr.answers as quiz_answers,
  qr.recommendation as quiz_recommendation,
  qr.customer_profile,
  qr.strategy,
  qr.qualification_score,
  qr.priority_level
FROM leads l
LEFT JOIN quiz_results qr ON l.id = qr.lead_id
ORDER BY l.created_at DESC
LIMIT 50;

CREATE OR REPLACE VIEW upcoming_bookings AS
SELECT 
  cb.*,
  l.name as lead_name,
  l.email as lead_email,
  l.phone as lead_phone,
  l.consortium_type,
  l.urgency_level,
  qr.qualification_score
FROM consultation_bookings cb
JOIN leads l ON cb.lead_id = l.id
LEFT JOIN quiz_results qr ON l.id = qr.lead_id
WHERE cb.status IN ('pending', 'confirmed')
  AND cb.scheduled_date >= CURRENT_DATE
ORDER BY cb.scheduled_date, cb.scheduled_time;

-- View para análise de perfil dos clientes
CREATE OR REPLACE VIEW customer_analysis AS
SELECT 
  consortium_type,
  urgency_level,
  COUNT(*) as total_clients,
  AVG(desired_value) as avg_desired_value,
  AVG(max_monthly_payment) as avg_monthly_payment,
  COUNT(CASE WHEN has_fgts = true THEN 1 END) as fgts_users,
  COUNT(CASE WHEN has_initial_payment = true THEN 1 END) as initial_payment_users,
  AVG(qr.qualification_score) as avg_qualification_score
FROM leads l
LEFT JOIN quiz_results qr ON l.id = qr.lead_id
WHERE consortium_type IS NOT NULL
GROUP BY consortium_type, urgency_level
ORDER BY consortium_type, urgency_level;

-- View para leads de alta prioridade
CREATE OR REPLACE VIEW high_priority_leads AS
SELECT 
  l.*,
  qr.qualification_score,
  qr.priority_level,
  qr.answers as quiz_answers
FROM leads l
JOIN quiz_results qr ON l.id = qr.lead_id
WHERE qr.qualification_score >= 70 
  OR l.urgency_level IN ('alta', 'urgente')
  OR l.has_fgts = true
ORDER BY qr.qualification_score DESC, l.urgency_level DESC, l.created_at DESC;

-- View para análise de conversão por fonte
CREATE OR REPLACE VIEW conversion_analysis AS
SELECT 
  source,
  consortium_type,
  COUNT(*) as total_leads,
  COUNT(CASE WHEN status = 'converted' THEN 1 END) as converted_leads,
  ROUND(
    (COUNT(CASE WHEN status = 'converted' THEN 1 END)::DECIMAL / COUNT(*)::DECIMAL) * 100, 2
  ) as conversion_rate,
  AVG(qr.qualification_score) as avg_qualification_score
FROM leads l
LEFT JOIN quiz_results qr ON l.id = qr.lead_id
GROUP BY source, consortium_type
ORDER BY conversion_rate DESC;

-- Agendar limpeza automática de sessões expiradas
SELECT cron.schedule(
  'cleanup-expired-sessions',
  '0 */6 * * *', -- A cada 6 horas
  'SELECT cleanup_expired_sessions();'
);

-- Comentários nas views
COMMENT ON VIEW leads_summary IS 'Resumo estatístico completo dos leads';
COMMENT ON VIEW recent_leads IS 'Leads recentes com dados completos do quiz';
COMMENT ON VIEW upcoming_bookings IS 'Agendamentos futuros com informações dos leads';
COMMENT ON VIEW customer_analysis IS 'Análise detalhada do perfil dos clientes';
COMMENT ON VIEW high_priority_leads IS 'Leads de alta prioridade para atendimento imediato';
COMMENT ON VIEW conversion_analysis IS 'Análise de conversão por fonte e tipo de consórcio';
