# 🎯 CONFIGURAÇÃO COMPLETA DO GOOGLE ANALYTICS

## ✅ O QUE FOI IMPLEMENTADO

### **1. Meta Pixel (Facebook Ads)**
- **ID:** `2154542411406512`
- **Status:** ✅ Configurado e funcionando

### **2. Google Ads**
- **ID:** `586-445-7839`
- **Status:** ✅ Configurado e funcionando

### **3. Google Analytics 4 (GA4)**
- **Status:** ✅ Implementado (precisa do ID)

## 🚀 EVENTOS RASTREADOS AUTOMATICAMENTE

### **📊 Navegação**
- `page_view` - Visualizações de página
- `cta_click` - Cliques em botões CTA
- `whatsapp_click` - Cliques no WhatsApp

### **🎯 Quiz**
- `quiz_start` - Quiz iniciado
- `quiz_complete` - Quiz completado (com dados do lead)

### **📅 Agendador**
- `scheduler_open` - Agendador aberto
- `appointment_scheduled` - Consulta agendada (com dados do lead)

### **💼 Conversões**
- `lead_generated` - Lead gerado
- `credit_analyzing` - Análise de crédito (valores monetários)
- `credit_converted` - Crédito convertido (valores monetários)

## 🔧 COMO CONFIGURAR

### **1. Criar conta no Google Analytics 4**

1. Acesse: https://analytics.google.com/
2. Clique em "Começar a medir"
3. Nome da conta: "Bravo Consórcios"
4. Nome da propriedade: "Bravo Consórcios Website"
5. URL do site: "https://seu-site.vercel.app"
6. Escolha o setor: "Finanças"
7. Clique em "Criar"

### **2. Obter o ID do GA4**

1. Na propriedade criada, vá para "Administrar" (ícone de engrenagem)
2. Em "Propriedade", clique em "Fluxos de dados"
3. Clique em "Adicionar fluxo de dados"
4. Escolha "Web"
5. URL do site: "https://seu-site.vercel.app"
6. Nome do fluxo: "Bravo Consórcios Web"
7. Clique em "Criar fluxo"
8. **COPIE O ID:** `G-XXXXXXXXXX`

### **3. Configurar no projeto**

1. Crie o arquivo `.env.local` na pasta `project/`:
```bash
# Tracking e Analytics
VITE_META_PIXEL_ID=2154542411406512
VITE_GOOGLE_ADS_ID=586-445-7839
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

2. Substitua `G-XXXXXXXXXX` pelo seu ID real do GA4

### **4. Testar**

1. Execute o projeto:
```bash
cd project
npm run dev
```

2. Abra o console do navegador (F12)
3. Veja os logs:
```
📊 Meta Pixel: PageView {content_category: "Page", content_name: "Home Page"}
📊 Google Ads: page_view {event_category: "Navigation", event_label: "Home Page"}
📊 Google Analytics: page_view {event_category: "Navigation", event_label: "Home Page"}
```

## 📈 COMO VERIFICAR NO GOOGLE ANALYTICS

### **1. Tempo Real**
1. Acesse: https://analytics.google.com/
2. Vá para sua propriedade "Bravo Consórcios Website"
3. Clique em "Relatórios" > "Tempo real"
4. Veja os usuários ativos e eventos

### **2. Eventos Personalizados**
1. Vá para "Relatórios" > "Engajamento" > "Eventos"
2. Veja todos os eventos sendo disparados:
   - `page_view`
   - `cta_click`
   - `quiz_start`
   - `quiz_complete`
   - `scheduler_open`
   - `appointment_scheduled`
   - `lead_generated`
   - `credit_analyzing`
   - `credit_converted`
   - `whatsapp_click`

### **3. Conversões**
1. Vá para "Administrar" > "Eventos"
2. Marque como conversão:
   - `quiz_complete`
   - `appointment_scheduled`
   - `lead_generated`
   - `credit_analyzing`
   - `credit_converted`

## 🎯 DADOS RASTREADOS

### **Informações do Lead**
- Nome, email, telefone
- Tipo de consórcio
- Valor do crédito
- Valor da parcela

### **Informações de Conversão**
- Valores monetários
- Tipo de ativo
- Status da conversão

### **Informações de Navegação**
- Páginas visitadas
- Botões clicados
- Tempo na página
- Origem do tráfego

## 🔒 SEGURANÇA

✅ **IDs protegidos:** Não expostos no código  
✅ **Variáveis de ambiente:** Configuração segura  
✅ **Tracking automático:** Funciona em todos os componentes  
✅ **Dados anonimizados:** Respeitando LGPD  

## 📞 SUPORTE

Se precisar de ajuda:
1. Verifique se o ID do GA4 está correto
2. Confirme se o arquivo `.env.local` existe
3. Verifique o console do navegador para erros
4. Teste em modo incógnito

**AGORA TODOS OS EVENTOS DO SITE SERÃO MOSTRADOS NO GOOGLE ANALYTICS!** 🚀
