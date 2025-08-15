# Overview

SmartSolarSolana is a modern web application showcasing the Solana blockchain ecosystem. It's a comprehensive platform that highlights Solana's performance advantages, features popular meme coins, NFT collections, and explores real estate tokenization through the Homebase case study. The application demonstrates blockchain technology's potential in various sectors including DeFi, NFTs, and real-world asset tokenization.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript in a Single Page Application (SPA) architecture
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system featuring Solana brand colors and dark theme
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **State Management**: TanStack Query (React Query) for server state management with built-in caching and error handling
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Server Framework**: Express.js with TypeScript running on Node.js
- **Development Setup**: Hot module replacement with Vite integration for seamless full-stack development
- **API Structure**: RESTful API design with `/api` prefix for all backend routes
- **Middleware**: Custom logging middleware for API request/response tracking

## Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **ORM**: Drizzle ORM with type-safe schema definitions and migrations
- **Development Storage**: In-memory storage implementation (`MemStorage`) for local development
- **Schema Design**: Comprehensive database schema including:
  - User management (users table)
  - Cryptocurrency data (meme_coins table)
  - NFT collections (nft_collections table)
  - Real estate properties (real_estate_properties table)

## Authentication and Authorization
- **Session Management**: Configured with PostgreSQL session store using `connect-pg-simple`
- **Security**: HTTP-only cookies for session management with proper security headers
- **User System**: Basic user authentication infrastructure with username/password support

## Build and Deployment
- **Build Process**: Dual build system - Vite for frontend and esbuild for backend bundling
- **Production**: Optimized builds with static asset serving and proper environment handling
- **Development**: Integrated development server with hot reloading for both frontend and backend

# External Dependencies

## Database and Storage
- **Neon Database**: Serverless PostgreSQL database provider via `@neondatabase/serverless`
- **Drizzle Kit**: Database migrations and schema management toolkit

## UI and Design System
- **Radix UI**: Complete set of accessible UI primitives for complex components
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Embla Carousel**: Touch-friendly carousel component for interactive content
- **Lucide React**: Comprehensive icon library for consistent iconography

## Development and Build Tools
- **Vite**: Fast build tool with React plugin and runtime error overlay
- **TypeScript**: Type safety across the entire application stack
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer plugins

## Blockchain Context
- **Solana Focus**: Application specifically designed to showcase Solana blockchain ecosystem
- **Real-world Integration**: Features actual projects like Homebase for real estate tokenization
- **Educational Purpose**: Serves as an informational platform about Solana's capabilities and use cases