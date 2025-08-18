#!/bin/bash

# Development Docker setup with hot reload
echo "🔧 Starting development environment with Docker..."

# Start only the infrastructure services
docker-compose up -d postgres rabbitmq redis

echo "⏳ Waiting for infrastructure services..."
sleep 5

echo "🚀 Infrastructure ready! Now run:"
echo "   npm install"
echo "   npm run dev"
echo ""
echo "This will run the Next.js app locally with hot reload while using Dockerized infrastructure."
