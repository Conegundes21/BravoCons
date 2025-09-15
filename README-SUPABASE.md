# Configuração do Supabase - Bravo Consórcios

Este documento explica como configurar o Supabase para o projeto Bravo Consórcios.

## 1. Criar Projeto no Supabase

1. Acesse [supabase.com](https://supabase.com)
2. Faça login ou crie uma conta
3. Clique em "New Project"
4. Escolha sua organização
5. Digite um nome para o projeto (ex: "bravo-consorcios")
6. Escolha uma senha forte para o banco de dados
7. Escolha a região mais próxima (ex: São Paulo)
8. Clique em "Create new project"

## 2. Configurar Banco de Dados

1. No painel do Supabase, vá para "SQL Editor"
2. Clique em "New query"
3. Copie e cole o conteúdo do arquivo `supabase-schema.sql`
4. Clique em "Run" para executar o script

## 3. Configurar Autenticação

1. Vá para "Authentication" > "Settings"
2. Em "Site URL", adicione:
   - Para desenvolvimento: `http://localhost:5173`
   - Para produção: `https://seu-dominio.vercel.app`
3. Em "Redirect URLs", adicione:
   - Para desenvolvimento: `http://localhost:5173/**`
   - Para produção: `https://seu-dominio.vercel.app/**`

## 4. Obter Credenciais

1. Vá para "Settings" > "API"
2. Copie:
   - **Project URL** (ex: `https://xyz.supabase.co`)
   - **anon public** key (ex: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`)

## 5. Configurar Variáveis de Ambiente

### Desenvolvimento Local

1. No diretório `project/`, crie um arquivo `.env.local`:
```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon-publica
```

### Produção (Vercel)

1. No painel do Vercel, vá para seu projeto
2. Vá para "Settings" > "Environment Variables"
3. Adicione as variáveis:
   - `VITE_SUPABASE_URL` = sua URL do projeto
   - `VITE_SUPABASE_ANON_KEY` = sua chave anon pública

## 6. Configurar Políticas de Segurança

As políticas RLS (Row Level Security) já estão configuradas no schema SQL. Elas permitem:

- **Inserção pública**: Qualquer pessoa pode criar leads, quiz results e bookings
- **Leitura autenticada**: Apenas usuários autenticados podem ler os dados
- **Admin users**: Apenas admins podem gerenciar usuários administradores

## 7. Testar a Integração

1. Inicie o projeto localmente:
```bash
cd project
npm install
npm run dev
```

2. Teste as funcionalidades:
   - Quiz interativo
   - Calculadora de consórcio
   - Agendamento de consultoria

3. Verifique no painel do Supabase se os dados estão sendo salvos:
   - Vá para "Table Editor"
   - Verifique as tabelas `leads`, `quiz_results`, `consultation_bookings`

## 8. Configurar Painel Administrativo

O painel administrativo já está configurado para usar o Supabase. Para acessá-lo:

1. Inicie o projeto admin:
```bash
cd admin
npm install
npm run dev
```

2. Acesse: `http://localhost:3002/tecas`
3. Use as credenciais configuradas no Supabase

## 9. Estrutura das Tabelas

### leads
- Armazena todos os leads capturados do site
- Campos: nome, email, telefone, dados do veículo, origem, status

### quiz_results
- Armazena os resultados dos quizzes
- Relacionado com leads através de `lead_id`
- Campos: respostas e recomendações em JSON

### consultation_bookings
- Armazena agendamentos de consultoria
- Relacionado com leads através de `lead_id`
- Campos: pacote, data/hora, status, pagamento

### admin_users
- Usuários do painel administrativo
- Campos: email, nome, role, status ativo

## 10. Views Úteis

O schema cria algumas views para facilitar consultas:

- `leads_summary`: Resumo estatístico dos leads
- `recent_leads`: Leads mais recentes com dados do quiz
- `upcoming_bookings`: Agendamentos futuros

## 11. Troubleshooting

### Erro: "Variáveis de ambiente do Supabase não configuradas"
- Verifique se o arquivo `.env.local` existe
- Verifique se as variáveis estão corretas
- Reinicie o servidor de desenvolvimento

### Erro: "Row Level Security policy violation"
- Verifique se as políticas RLS estão configuradas
- Verifique se o usuário tem as permissões corretas

### Erro: "Invalid API key"
- Verifique se a chave anon está correta
- Verifique se o projeto está ativo no Supabase

## 12. Deploy no Vercel

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente no Vercel
3. Deploy automático será feito a cada push

## 13. Monitoramento

- Use o painel do Supabase para monitorar:
  - Performance do banco
  - Logs de autenticação
  - Uso de recursos
  - Erros de API

## 14. Backup e Segurança

- O Supabase faz backup automático
- Configure alertas para uso de recursos
- Monitore logs de acesso
- Mantenha as chaves seguras

---

Para dúvidas ou problemas, consulte a [documentação oficial do Supabase](https://supabase.com/docs).
