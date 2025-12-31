# Use Node.js LTS
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies for all workspaces
COPY package*.json ./
COPY apps/service-identity/package.json apps/service-identity/
COPY apps/api-gateway/package.json apps/api-gateway/
COPY apps/web-portal/package.json apps/web-portal/
COPY packages/shared-types/package.json packages/shared-types/
COPY packages/logger/package.json packages/logger/

# Install dependencies (including devDependencies for build)
RUN npm install

# Copy source code
COPY . .

# Build packages first
RUN npm run build -w packages/shared-types
RUN npm run build -w packages/logger

# Build applications
RUN npm run build -w apps/service-identity
RUN npm run build -w apps/api-gateway

# Production image
FROM node:18-alpine AS runner

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/packages ./packages
COPY --from=builder /app/apps/service-identity/dist ./apps/service-identity/dist
COPY --from=builder /app/apps/api-gateway/dist ./apps/api-gateway/dist

# Expose ports
EXPOSE 3000
EXPOSE 3001

# Start script (can be overridden by Railway)
CMD ["node", "apps/api-gateway/dist/main.js"]
