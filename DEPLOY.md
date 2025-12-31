# 🚀 Guia de Deploy - NEXOPRO

Este projeto é um monorepo (Nx-style) contendo Frontend e Backend.

## 🏗️ Estrutura

- **Frontend:** `apps/web-portal` (Next.js)
- **Backend Identity:** `apps/service-identity` (NestJS)
- **Backend Gateway:** `apps/api-gateway` (NestJS)
- **Pacotes Compartilhados:** `packages/*`

---

## ☁️ 1. Deploy do Backend (Railway)

O Backend deve ser hospedado em um serviço que suporte Docker e Microserviços (Recomendado: Railway).

### Passos:
1. Crie um projeto no [Railway](https://railway.app).
2. Conecte este repositório GitHub.
3. **Crie o Serviço de Identidade**:
   - Adicione o repo.
   - Nas configurações (Settings) > Build:
     - **Dockerfile Path:** `Dockerfile.identity`
   - Variáveis de Ambiente:
     - `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME` (PostgreSQL)
     - `REDIS_HOST`, `REDIS_PORT` (Redis)
4. **Crie o Serviço de Gateway**:
   - Adicione o repo novamente.
   - Nas configurações (Settings) > Build:
     - **Dockerfile Path:** `Dockerfile.gateway`
   - Variáveis de Ambiente:
     - `IDENTITY_SERVICE_URL`: URL do serviço de identidade acima (ex: `http://service-identity-production.up.railway.app`)

---

## 🌐 2. Deploy do Frontend (Vercel)

O Frontend é otimizado para a Vercel.

### Passos:
1. Crie um projeto na [Vercel](https://vercel.com).
2. Importe este repositório.
3. Nas configurações do projeto:
   - **Root Directory:** `apps/web-portal` (Clique em Edit)
   - **Framework Preset:** Next.js (Automático)
4. Variáveis de Ambiente:
   - `NEXT_PUBLIC_API_URL`: URL do seu **API Gateway** no Railway (ex: `https://api-gateway-production.up.railway.app`)
5. Clique em **Deploy**.

---

## 🛠️ Desenvolvimento Local

1. `docker-compose up -d` (Inicia Banco e Redis)
2. `npm install`
3. `npm run dev` (Inicia todos os serviços)
