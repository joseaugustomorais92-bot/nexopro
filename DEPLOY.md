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

## 4. Configuração de Variáveis de Ambiente (Obrigatório)

### Backend (Railway)
Adicione as seguintes variáveis no Dashboard do Railway:

| Variável | Valor Exemplo | Descrição |
|----------|---------------|-----------|
| `PORT` | `3000` | Porta do serviço |
| `DATABASE_URL` | `postgres://...` | (Gerado automaticamente pelo plugin) |
| `REDIS_URL` | `redis://...` | (Gerado automaticamente pelo plugin) |
| `JWT_SECRET` | `sua_chave_secreta_super_segura` | Chave para assinar tokens |
| `GOOGLE_CLIENT_ID` | `123...apps.googleusercontent.com` | ID do OAuth Google |
| `GOOGLE_CLIENT_SECRET` | `GOCSPX-...` | Secret do OAuth Google |
| `GOOGLE_CALLBACK_URL` | `https://nexopro-production.up.railway.app/api/v1/identity/auth/google/callback` | URL de retorno (Backend) |
| `FRONTEND_URL` | `https://web-portal-fryfq4gmo-nexo-s-projects.vercel.app` | URL do frontend (Vercel) |

### Frontend (Vercel)
Adicione as seguintes variáveis no Dashboard da Vercel:

| Variável | Valor Exemplo | Descrição |
|----------|---------------|-----------|
| `NEXT_PUBLIC_API_URL` | `https://nexopro-production.up.railway.app` | URL do Backend (Railway) |

---

## 5. Configuração do Google Cloud Console (Passo a Passo)

1. Acesse [Google Cloud Console](https://console.cloud.google.com/).
2. Crie um novo projeto ou selecione um existente.
3. Vá em **APIs & Services > Credentials**.
4. Clique em **Create Credentials > OAuth client ID**.
5. Tipo de Aplicação: **Web application**.
6. **Authorized JavaScript origins**:
   - `http://localhost:3002` (Local)
   - `https://web-portal-fryfq4gmo-nexo-s-projects.vercel.app` (Produção)
7. **Authorized redirect URIs**:
   - `http://localhost:3000/api/identity/auth/google/callback` (Local via Gateway)
   - `http://localhost:3001/api/v1/identity/auth/google/callback` (Local Direto)
   - `https://nexopro-production.up.railway.app/api/v1/identity/auth/google/callback` (Produção Direta)
8. Copie o **Client ID** e **Client Secret** para as variáveis do Railway.

---

## 🛠️ Monitoramento
- Se o site não carregar dados, verifique se a variável `NEXT_PUBLIC_API_URL` na Vercel está correta (não deve ter barra `/` no final).
- Se o login falhar, verifique os logs no Railway (Service Identity).
