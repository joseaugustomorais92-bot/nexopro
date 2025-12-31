# 🚀 Guia de Deploy e Operação - NEXOPRO

## 🔗 Links Rápidos
- **Frontend (Acesso Público):** [Painel Vercel](https://vercel.com/dashboard) (O link final estará aqui)
- **Backend (API):** [Painel Railway](https://railway.app/dashboard)

---

## 🔄 Como Atualizar o Sistema (Deploy Contínuo)

O sistema está configurado com **Integração Contínua (CI/CD)**. Isso significa que qualquer alteração enviada para o GitHub dispara automaticamente a atualização nos servidores.

### Opção 1: Usando o Script Automático (Recomendado)
1. Na pasta raiz do projeto, clique duas vezes em `deploy.bat`.
2. Digite uma mensagem descrevendo o que mudou (ex: "ajuste na cor do botão").
3. Pressione Enter. O script fará tudo sozinho.

### Opção 2: Manualmente via Terminal
```bash
git add .
git commit -m "descrição da mudança"
git push origin main
```

---

## ⚙️ Configuração Inicial (Se ainda não fez)

### 1. Conectar Backend (Railway)
1. Crie projeto no [Railway](https://railway.app) e conecte o GitHub `nexopro`.
2. Adicione Serviço **Identity** (`Dockerfile.identity`) e **Gateway** (`Dockerfile.gateway`).
3. Adicione **PostgreSQL** e **Redis**.
4. Defina as Variáveis no Railway (copie do `.env` local).

### 2. Conectar Frontend (Vercel)
1. Crie projeto na [Vercel](https://vercel.com) e importe `nexopro`.
2. Raiz: `apps/web-portal`.
3. Variável `NEXT_PUBLIC_API_URL`: Cole a URL do Gateway do Railway.

---

## 🛠️ Monitoramento
- Se o site não carregar dados, verifique se a variável `NEXT_PUBLIC_API_URL` na Vercel está correta (não deve ter barra `/` no final).
- Se o login falhar, verifique os logs no Railway (Service Identity).
