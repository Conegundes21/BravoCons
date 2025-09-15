-- ATUALIZAR SCHEMA DOS AGENDAMENTOS - BRAVO CONSÓRCIOS
-- Execute este SQL no Supabase para adicionar os novos campos

-- 1. ADICIONAR NOVOS CAMPOS NA TABELA consultation_bookings
ALTER TABLE consultation_bookings 
ADD COLUMN IF NOT EXISTS credit_value DECIMAL(12,2),
ADD COLUMN IF NOT EXISTS asset_type VARCHAR(100),
ADD COLUMN IF NOT EXISTS installment_value DECIMAL(10,2),
ADD COLUMN IF NOT EXISTS client_status VARCHAR(50) DEFAULT 'pending' CHECK (client_status IN ('pending', 'converted', 'negotiating', 'closing', 'no_progress', 'problematic')),
ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();

-- 2. CRIAR TABELA PARA TRACKING DE EVENTOS
CREATE TABLE IF NOT EXISTS tracking_events (
  id BIGSERIAL PRIMARY KEY,
  event_type VARCHAR(50) NOT NULL CHECK (event_type IN ('quiz_completed', 'appointment_scheduled', 'credit_analyzing', 'credit_converted', 'leads_total')),
  lead_id BIGINT REFERENCES leads(id),
  booking_id BIGINT REFERENCES consultation_bookings(id),
  event_data JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. ATUALIZAR A VIEW bookings_with_lead
CREATE OR REPLACE VIEW bookings_with_lead AS
SELECT 
  cb.id,
  cb.lead_id,
  l.name,
  l.email,
  l.phone,
  l.consortium_type,
  cb.package_name,
  cb.scheduled_date,
  cb.scheduled_time,
  cb.status,
  cb.payment_status,
  cb.notes,
  cb.credit_value,
  cb.asset_type,
  cb.installment_value,
  cb.client_status,
  cb.created_at,
  cb.updated_at
FROM consultation_bookings cb
JOIN leads l ON cb.lead_id = l.id
ORDER BY cb.scheduled_date DESC;

-- 4. CRIAR VIEW PARA DASHBOARD DE PERFORMANCE
CREATE OR REPLACE VIEW daily_performance AS
SELECT 
  DATE(created_at) as date,
  COUNT(CASE WHEN event_type = 'quiz_completed' THEN 1 END) as quiz_completed,
  COUNT(CASE WHEN event_type = 'appointment_scheduled' THEN 1 END) as appointments_scheduled,
  COUNT(CASE WHEN event_type = 'credit_analyzing' THEN 1 END) as credit_analyzing,
  COUNT(CASE WHEN event_type = 'credit_converted' THEN 1 END) as credit_converted,
  COUNT(CASE WHEN event_type = 'leads_total' THEN 1 END) as total_leads
FROM tracking_events
WHERE created_at >= CURRENT_DATE - INTERVAL '30 days'
GROUP BY DATE(created_at)
ORDER BY date DESC;

-- 5. CRIAR POLÍTICAS PARA AS NOVAS TABELAS
CREATE POLICY "Allow admin read tracking_events" ON tracking_events
FOR SELECT 
USING (auth.role() = 'authenticated');

CREATE POLICY "Allow admin insert tracking_events" ON tracking_events
FOR INSERT 
WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow admin update consultation_bookings" ON consultation_bookings
FOR UPDATE 
USING (auth.role() = 'authenticated');

-- 6. CRIAR FUNÇÃO PARA ATUALIZAR updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 7. CRIAR TRIGGER PARA ATUALIZAR updated_at
CREATE TRIGGER update_consultation_bookings_updated_at 
    BEFORE UPDATE ON consultation_bookings 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();
