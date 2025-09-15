-- CORRIGIR VIEW daily_performance - VERSÃO FINAL
-- Execute este SQL no Supabase para corrigir definitivamente

-- 1. DROPAR a view existente
DROP VIEW IF EXISTS daily_performance;

-- 2. RECRIAR a view com lógica corrigida
CREATE VIEW daily_performance AS
SELECT
    DATE(created_at) AS date,
    COUNT(CASE WHEN event_type = 'quiz_completed' THEN 1 END) AS quiz_completed,
    COUNT(CASE WHEN event_type = 'appointment_scheduled' THEN 1 END) AS appointments_scheduled,
    COUNT(CASE WHEN event_type = 'credit_analyzing' THEN 1 END) AS credit_analyzing_count,
    -- CORREÇÃO: Usar SUM para somar os valores de crédito
    COALESCE(SUM(CASE WHEN event_type = 'credit_analyzing' THEN (event_data->>'credit_value')::DECIMAL ELSE 0 END), 0) AS credit_analyzing_value,
    COUNT(CASE WHEN event_type = 'credit_converted' THEN 1 END) AS credit_converted_count,
    -- CORREÇÃO: Usar SUM para somar os valores de crédito
    COALESCE(SUM(CASE WHEN event_type = 'credit_converted' THEN (event_data->>'credit_value')::DECIMAL ELSE 0 END), 0) AS credit_converted_value,
    COUNT(CASE WHEN event_type IN ('quiz_completed', 'appointment_scheduled', 'credit_analyzing', 'credit_converted') THEN 1 END) AS total_leads
FROM tracking_events
GROUP BY DATE(created_at)
ORDER BY date;

