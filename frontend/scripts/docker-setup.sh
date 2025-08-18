#!/bin/bash

# Turkcell Smart Tariff System - Docker Setup Script
echo "🚀 Setting up Turkcell Smart Tariff System with Docker..."

# Create environment file if it doesn't exist
if [ ! -f .env.local ]; then
    echo "📝 Creating environment file..."
    cat > .env.local << EOL
# Database Configuration
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/turkcell_smart_tariff

# RabbitMQ Configuration
RABBITMQ_URL=amqp://admin:admin123@localhost:5672

# Redis Configuration (optional)
REDIS_URL=redis://localhost:6379

# Application Configuration
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000

# JWT Secret (generate a secure random string for production)
JWT_SECRET=your-super-secure-jwt-secret-key-here

# API Keys (add your actual keys here)
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
EOL
    echo "✅ Environment file created at .env.local"
fi

# Build and start services
echo "🐳 Building and starting Docker services..."
docker-compose up --build -d

# Wait for services to be ready
echo "⏳ Waiting for services to start..."
sleep 10

# Check service status
echo "📊 Checking service status..."
docker-compose ps

echo ""
echo "🎉 Setup complete! Your services are running:"
echo "   📱 Application: http://localhost:3000"
echo "   🐘 PostgreSQL: localhost:5432"
echo "   🐰 RabbitMQ Management: http://localhost:15672 (admin/admin123)"
echo "   🔴 Redis: localhost:6379"
echo ""
echo "📝 To view logs: docker-compose logs -f"
echo "🛑 To stop services: docker-compose down"
echo "🔄 To restart services: docker-compose restart"
