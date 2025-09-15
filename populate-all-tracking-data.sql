-- POPULAR TODOS OS DADOS DE TRACKING COM DADOS EXISTENTES
-- Execute este SQL no Supabase para popular o gráfico com TODOS os dados

-- 1. LIMPAR eventos existentes (para recriar tudo)
DELETE FROM tracking_events;

-- 2. INSERIR EVENTOS DE QUIZ COMPLETO (baseado em leads com quiz)
INSERT INTO tracking_events (event_type, lead_id, event_data, created_at)
SELECT 
  'quiz_completed',
  l.id,
  jsonb_build_object('quiz_completed', true),
  l.created_at
FROM leads l
WHERE l.source = 'quiz'
ON CONFLICT DO NOTHING;

-- 3. INSERIR EVENTOS DE AGENDAMENTO (baseado em consultation_bookings)
INSERT INTO tracking_events (event_type, lead_id, booking_id, event_data, created_at)
SELECT 
  'appointment_scheduled',
  cb.lead_id,
  cb.id,
  jsonb_build_object('appointment_scheduled', true),
  cb.created_at
FROM consultation_bookings cb
ON CONFLICT DO NOTHING;

-- 4. INSERIR EVENTOS DE CRÉDITO EM ANÁLISE (baseado em client_status = 'negotiating')
INSERT INTO tracking_events (event_type, lead_id, booking_id, event_data, created_at)
SELECT 
  'credit_analyzing',
  cb.lead_id,
  cb.id,
  jsonb_build_object(
    'credit_value', cb.credit_value,
    'asset_type', cb.asset_type,
    'installment_value', cb.installment_value
  ),
  cb.updated_at
FROM consultation_bookings cb
WHERE cb.client_status = 'negotiating' AND cb.credit_value IS NOT NULL
ON CONFLICT DO NOTHING;

-- 5. INSERIR EVENTOS DE CRÉDITO CONVERTIDO (baseado em client_status = 'converted')
INSERT INTO tracking_events (event_type, lead_id, booking_id, event_data, created_at)
SELECT 
  'credit_converted',
  cb.lead_id,
  cb.id,
  jsonb_build_object(
    'credit_value', cb.credit_value,
    'asset_type', cb.asset_type,
    'installment_value', cb.installment_value
  ),
  cb.updated_at
FROM consultation_bookings cb
WHERE cb.client_status = 'converted' AND cb.credit_value IS NOT NULL
ON CONFLICT DO NOTHING;

-- 6. INSERIR EVENTOS DE LEADS TOTAL (um por lead)
INSERT INTO tracking_events (event_type, lead_id, event_data, created_at)
SELECT 
  'leads_total',
  l.id,
  jsonb_build_object('lead_created', true),
  l.created_at
FROM leads l
ON CONFLICT DO NOTHING;

