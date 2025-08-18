# 1. Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json tsconfig.json vite.config.ts ./
COPY src ./src
COPY index.html ./
RUN npm install && npm run build

# 2. Serve stage (static files)
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
