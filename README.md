# NEXOPRO Enterprise Ecosystem

## 🚀 Como Iniciar o Sistema (Modo de Desenvolvimento)

### 1. Infraestrutura (Banco de Dados, Redis)
Certifique-se de ter o **Docker Desktop** instalado e rodando.

```bash
docker-compose up -d
```
Isso iniciará:
- PostgreSQL (Porta 5432)
- Redis (Porta 6379)
- RabbitMQ (Porta 5672/15672)

### 2. Iniciar os Serviços
Em terminais separados (ou usando um gerenciador de processos):

**Terminal 1: Identity Service (Backend)**
```bash
npm run start:dev -w apps/service-identity
```

**Terminal 2: API Gateway (Porteiro)**
```bash
npm run start:dev -w apps/api-gateway
```

**Terminal 3: Web Portal (Frontend)**
```bash
npm run dev -w apps/web-portal
```

### 3. Acessar
- Frontend: http://localhost:3002 (ou a porta que o Next.js indicar)
- API Gateway: http://localhost:3000

---

## ☁️ Deploy em Produção

### Backend (Railway)
1. Crie um projeto no Railway.
2. Provisione PostgreSQL e Redis.
3. Conecte este repositório.
4. Crie os serviços para `apps/service-identity` e `apps/api-gateway`.
5. Configure as variáveis de ambiente conforme os arquivos `.env`.

### Frontend (Vercel)
1. Importe o projeto no Vercel.
2. Defina o Root Directory como `apps/web-portal` (opcional, ou configure o build command).
3. Adicione `NEXT_PUBLIC_API_URL` apontando para a URL do seu API Gateway no Railway.
