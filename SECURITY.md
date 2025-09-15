# 🔒 Guia de Segurança - Bravo Consórcios

## ⚠️ CONFIGURAÇÕES CRÍTICAS PARA PRODUÇÃO

### 1. **VARIÁVEIS DE AMBIENTE**
```bash
# NUNCA commitar estas variáveis para o repositório
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon-publica
VITE_META_PIXEL_ID=seu-pixel-id
VITE_GOOGLE_ADS_ID=seu-google-ads-id
VITE_GOOGLE_ANALYTICS_ID=seu-ga-id
```

### 2. **CONFIGURAÇÕES DE DEPLOY**

#### **Vercel/Netlify:**
- Configure as variáveis de ambiente no painel
- Ative HTTPS obrigatório
- Configure domínios permitidos no CORS

#### **Headers de Segurança:**
```javascript
// Já configurados no vite.config.ts
'X-Frame-Options': 'DENY'
'X-Content-Type-Options': 'nosniff'
'Referrer-Policy': 'strict-origin-when-cross-origin'
'X-XSS-Protection': '1; mode=block'
'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
```

### 3. **ROTAS ADMIN SEGURAS**
- ✅ Slugs aleatórios implementados
- ✅ Middleware de segurança ativo
- ✅ Bloqueio em produção configurado

### 4. **SUPABASE - CONFIGURAÇÕES CRÍTICAS**

#### **Row Level Security (RLS):**
```sql
-- Ativar RLS em todas as tabelas
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultation_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
```

#### **Políticas de Segurança:**
```sql
-- Exemplo para tabela leads
CREATE POLICY "Users can view own leads" ON leads
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own leads" ON leads
  FOR INSERT WITH CHECK (auth.uid() = user_id);
```

### 5. **MONITORAMENTO**

#### **Logs de Segurança:**
- ✅ Console.log removidos em produção
- ✅ Debug desabilitado em produção
- ✅ Sourcemaps desabilitados

#### **Rate Limiting:**
- Implementar rate limiting no Supabase
- Configurar limites de requisições por IP

### 6. **BACKUP E RECUPERAÇÃO**
- Backup automático do Supabase
- Versionamento do banco de dados
- Plano de recuperação de desastres

## 🚨 CHECKLIST DE SEGURANÇA

### **Antes do Deploy:**
- [ ] Variáveis de ambiente configuradas
- [ ] RLS ativado no Supabase
- [ ] Políticas de segurança criadas
- [ ] HTTPS configurado
- [ ] Domínios permitidos no CORS
- [ ] Sourcemaps desabilitados
- [ ] Console.log removidos

### **Após o Deploy:**
- [ ] Testar todas as funcionalidades
- [ ] Verificar headers de segurança
- [ ] Monitorar logs de erro
- [ ] Testar rate limiting
- [ ] Verificar backup automático

## 📞 CONTATO DE EMERGÊNCIA
Em caso de incidente de segurança, contate imediatamente:
- Desenvolvedor: [seu-contato]
- Supabase: [suporte-supabase]
- Hosting: [suporte-hosting]

---
**Última atualização:** $(date)
**Versão:** 1.0
