-- CORRIGIR CONSTRAINTS DA TABELA tracking_events
-- Execute este SQL no Supabase para corrigir o erro 42P10

-- 1. Verificar constraints existentes
SELECT 
    conname as constraint_name,
    contype as constraint_type,
    pg_get_constraintdef(oid) as constraint_definition
FROM pg_constraint 
WHERE conrelid = 'tracking_events'::regclass;

-- 2. Criar constraint único se não existir
ALTER TABLE tracking_events 
ADD CONSTRAINT tracking_events_unique_event_booking 
UNIQUE (event_type, booking_id);

-- 3. Ou se preferir, criar constraint único para event_type + lead_id + booking_id
-- ALTER TABLE tracking_events 
-- ADD CONSTRAINT tracking_events_unique_event_lead_booking 
-- UNIQUE (event_type, lead_id, booking_id);

