-- Script para corrigir a coluna consortium_type na tabela leads
-- Execute este SQL no SQL Editor do Supabase

-- Verificar se a coluna existe
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'leads' AND column_name = 'consortium_type';

-- Se a coluna não existir, criar ela
ALTER TABLE leads 
ADD COLUMN IF NOT EXISTS consortium_type VARCHAR(50) CHECK (consortium_type IN ('imoveis', 'veiculos', 'maquinarios', 'caminhoes', 'alavancagem'));

-- Verificar se a coluna foi criada
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'leads' AND column_name = 'consortium_type';
