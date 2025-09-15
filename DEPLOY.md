# 🚀 Guia de Deploy - Bravo Consórcios

## 📋 Pré-requisitos

- Conta no [Vercel](https://vercel.com)
- Conta no [Supabase](https://supabase.com)
- Repositório no GitHub

## 🔧 Configuração do Supabase

1. **Criar projeto no Supabase**
   - Acesse [supabase.com](https://supabase.com)
   - Crie um novo projeto
   - Anote a URL e chave anônima

2. **Configurar banco de dados**
   - No painel do Supabase, vá para "SQL Editor"
   - Execute o schema do banco de dados
   - Configure as políticas de segurança

## 🌐 Deploy no Vercel

### 1. Conectar Repositório
1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Conecte seu repositório GitHub
4. Selecione o repositório do projeto

### 2. Configurar Variáveis de Ambiente
No painel do Vercel, vá para "Settings" > "Environment Variables":

```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon-publica
VITE_WHATSAPP_NUMBER=5511999999999
```

### 3. Configurações de Build
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

### 4. Deploy
1. Clique em "Deploy"
2. Aguarde o build completar
3. Verifique se o site está funcionando

## 🔒 Segurança

### Headers de Segurança
O arquivo `vercel.json` já está configurado com:
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer-Policy
- Permissions-Policy

### Variáveis de Ambiente
- Nunca commite arquivos `.env` no repositório
- Use variáveis de ambiente do Vercel
- Mantenha as chaves seguras

## 📱 Teste Pós-Deploy

1. **Site Principal**
   - Verificar se carrega corretamente
   - Testar quiz interativo
   - Verificar integração WhatsApp

2. **Painel Admin**
   - Acessar `/admin`
   - Testar login
   - Verificar dashboard

3. **Funcionalidades**
   - Quiz funcionando
   - Leads sendo salvos
   - WhatsApp integrado

## 🆘 Troubleshooting

### Erro: "Variáveis de ambiente não configuradas"
- Verificar se as variáveis estão configuradas no Vercel
- Reiniciar o deploy

### Erro: "Supabase connection failed"
- Verificar URL e chave do Supabase
- Verificar se o projeto está ativo

### Erro: "Build failed"
- Verificar logs do build no Vercel
- Verificar dependências no package.json

## 📞 Suporte

Para problemas técnicos:
1. Verificar logs do Vercel
2. Verificar logs do Supabase
3. Testar localmente primeiro
4. Consultar documentação oficial

---

**Importante:** Mantenha as credenciais seguras e nunca as compartilhe publicamente.
