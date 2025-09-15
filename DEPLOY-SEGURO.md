# 🚀 Guia de Deploy Seguro - Bravo Consórcios

## ⚠️ ARQUIVOS CRÍTICOS QUE NUNCA DEVEM SER COMMITADOS

### 🔴 **NUNCA COMMITAR:**
- `.env.local` - Variáveis de ambiente
- `create-admin-user.sql` - Scripts com senhas
- `fix-rls-policies.sql` - Configurações de banco
- `secure-supabase-policies.sql` - Políticas de segurança
- `node_modules/` - Dependências
- `dist/` - Build files

### ✅ **COMMITAR SEMPRE:**
- `src/` - Código fonte
- `public/` - Assets públicos
- `package.json` - Dependências
- `vite.config.ts` - Configuração do build
- `tailwind.config.js` - Configuração do CSS
- `tsconfig.json` - Configuração do TypeScript
- `.gitignore` - Arquivos ignorados
- `vercel.json` - Configuração do Vercel

## 🚀 PROCESSO DE DEPLOY

### **1. PREPARAÇÃO:**
```bash
# Verificar se .env.local está no .gitignore
git status

# Verificar se não há arquivos sensíveis
git add .
git status
```

### **2. COMMIT SEGURO:**
```bash
git add .
git commit -m "feat: deploy inicial - site funcional"
git push origin main
```

### **3. CONFIGURAR VERCEL:**
1. Acesse [vercel.com](https://vercel.com)
2. Conecte seu repositório GitHub
3. Configure as variáveis de ambiente:

### **4. VARIÁVEIS DE AMBIENTE NO VERCEL:**
```
VITE_SUPABASE_URL=https://ltrzhndhnmfwkudjpvhp.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
VITE_META_PIXEL_ID=2154542411406512
VITE_GOOGLE_ADS_ID=586-445-7839
VITE_GOOGLE_ANALYTICS_ID=G-R40VZRPG12
```

### **5. CONFIGURAÇÕES DO VERCEL:**
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

## 🔒 SEGURANÇA EM PRODUÇÃO

### **VARIÁVEIS DE AMBIENTE:**
- ✅ Configuradas no painel do Vercel
- ✅ Nunca commitadas no código
- ✅ Acessíveis apenas em produção

### **HEADERS DE SEGURANÇA:**
- ✅ Configurados no `vercel.json`
- ✅ Proteção contra XSS, CSRF, etc.
- ✅ HTTPS obrigatório

### **SUPABASE:**
- ✅ RLS configurado
- ✅ Políticas de segurança ativas
- ✅ Backup automático

## 📊 MONITORAMENTO

### **LOGS:**
- Vercel Analytics
- Google Analytics
- Meta Pixel Insights

### **PERFORMANCE:**
- Vercel Speed Insights
- Core Web Vitals
- Lighthouse Score

## 🚨 EMERGÊNCIA

### **SE ALGO DER ERRADO:**
1. Verificar logs no Vercel
2. Verificar variáveis de ambiente
3. Verificar configurações do Supabase
4. Rollback se necessário

### **CONTATOS:**
- Vercel Support
- Supabase Support
- Desenvolvedor: [seu-contato]

---
**Última atualização:** $(date)
**Versão:** 1.0