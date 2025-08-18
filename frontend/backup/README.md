# Turkcell Akıllı Tarifem - Smart Tariff System

A comprehensive web application for Turkcell's smart tariff recommendation system that provides real-time usage analytics, cost predictions, and personalized plan recommendations.

## Features

### Core Functionality
- **Real-time Usage Dashboard** - Monitor data, voice, and SMS consumption
- **Cost Prediction** - AI-powered monthly bill estimation based on usage patterns
- **Smart Recommendations** - Personalized tariff suggestions to optimize costs
- **Alert System** - Proactive notifications for quota limits and anomalies
- **Plan Management** - One-click plan changes and add-on purchases

### Technical Features
- **Modern UI/UX** - Clean, responsive design with dark/light theme support
- **Real-time Updates** - WebSocket integration for live data streaming
- **Data Visualization** - Interactive charts and graphs using Recharts
- **Modular Architecture** - Scalable component-based structure
- **Production Ready** - Optimized for performance and reliability

## Technology Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling with custom design tokens
- **Shadcn/ui** - Modern component library
- **Recharts** - Data visualization library
- **Lucide React** - Icon library

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **PostgreSQL** - Primary database (schema provided)
- **WebSocket** - Real-time communication
- **RESTful APIs** - Standard HTTP endpoints

## Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- npm or yarn package manager

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd turkcell-smart-tariff
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**
   Create a `.env.local` file:
   \`\`\`env
   DATABASE_URL=postgresql://username:password@localhost:5432/turkcell_db
   NEXTAUTH_SECRET=your-secret-key
   NEXTAUTH_URL=http://localhost:3000
   \`\`\`

4. **Set up the database**
   \`\`\`bash
   # Run the SQL scripts in order
   psql -d turkcell_db -f scripts/01-create-tables.sql
   psql -d turkcell_db -f scripts/02-seed-data.sql
   \`\`\`

5. **Start the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## API Endpoints

### User Management
- `GET /api/users/{id}` - Get user profile and current plan
- `GET /api/usage/{id}?days=90` - Get usage history

### Plans & Recommendations  
- `GET /api/plans` - Get all available plans
- `POST /api/recommendation` - Get personalized plan recommendations
- `POST /api/change-plan` - Simulate plan change
- `POST /api/topup` - Add extra packages

### Alerts
- `GET /api/alerts/{id}` - Get user alerts
- `WS /ws/alerts` - Real-time alert notifications

## Database Schema

The application uses PostgreSQL with the following main tables:
- `users` - User profiles and account information
- `plans` - Available tariff plans and pricing
- `usages` - Monthly usage aggregations
- `detailed_usages` - Daily usage logs
- `alerts` - System notifications and warnings
- `add_on_packs` - Extra packages and add-ons

## Key Components

### Dashboard Components
- `UsageOverview` - Current usage status and trends
- `CostPrediction` - Monthly cost estimation with breakdown
- `PlanRecommendations` - AI-powered plan suggestions
- `AlertsPanel` - Real-time notifications and warnings

### Core Features
- **Usage Analytics** - Track data, voice, SMS consumption patterns
- **Predictive Modeling** - Forecast monthly costs based on usage trends
- **Smart Alerts** - Proactive notifications for quota limits and anomalies
- **Plan Optimization** - Cost-effective tariff recommendations

## Development

### Project Structure
\`\`\`
├── app/                 # Next.js app directory
│   ├── api/            # API routes
│   ├── globals.css     # Global styles and design tokens
│   └── page.tsx        # Main dashboard page
├── components/         # React components
│   ├── ui/            # Base UI components
│   └── dashboard/     # Dashboard-specific components
├── lib/               # Utility functions
├── scripts/           # Database scripts
└── README.md
\`\`\`

### Design System
The application uses a custom design system with semantic tokens:
- **Colors** - Professional emerald-based palette
- **Typography** - DM Sans font family
- **Components** - Consistent spacing and styling
- **Themes** - Light and dark mode support

### Performance Optimizations
- Server-side rendering with Next.js
- Optimized bundle splitting
- Lazy loading for charts and heavy components
- Efficient data fetching patterns

## Deployment

### Production Build
\`\`\`bash
npm run build
npm start
\`\`\`

### Environment Setup
Ensure all environment variables are configured for production:
- Database connection strings
- Authentication secrets
- API endpoints
- WebSocket URLs

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is developed for the Turkcell Codenight hackathon and is intended for demonstration purposes.
