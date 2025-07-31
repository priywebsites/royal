# Replit.md

## Overview

This is a full-stack barbershop website application built with a modern React frontend and Express backend. The application is designed as a marketing and information site for "Royal Cuts Barbershop" featuring service listings, contact information, reviews, and business details. It uses a monorepo structure with shared TypeScript definitions and a PostgreSQL database via Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds
- **UI Components**: Extensive use of Radix UI primitives through shadcn/ui

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **Development**: Hot reload with tsx
- **Production**: Compiled with esbuild

### Database Architecture
- **ORM**: Drizzle ORM
- **Database**: PostgreSQL (configured for Neon serverless)
- **Migrations**: Drizzle Kit for schema management
- **Connection**: Neon serverless driver for PostgreSQL

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation bar with smooth scrolling
- **Hero Section**: Full-screen landing area with call-to-action
- **About Section**: Business information with animated reveal
- **Services**: Service listings with pricing
- **Portfolio**: Gallery of work examples
- **Reviews**: Customer testimonials
- **Contact/Location**: Business hours and location details
- **UI Library**: Complete shadcn/ui component collection

### Backend Components
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Routes**: Express route handlers (currently minimal setup)
- **Middleware**: Request logging and error handling
- **Development**: Vite integration for hot reload

### Shared Components
- **Schema**: Drizzle schema definitions with Zod validation
- **Types**: Shared TypeScript interfaces

## Data Flow

1. **Static Content**: Most content is hardcoded in React components (barbershop info, services, etc.)
2. **User Storage**: Basic user schema exists but not currently implemented in routes
3. **Client-Server**: Uses fetch API with TanStack Query for any future API calls
4. **Database**: Drizzle ORM with PostgreSQL for persistent data storage

## External Dependencies

### Core Dependencies
- **Database**: Neon PostgreSQL serverless
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion for smooth animations
- **Icons**: Lucide React icon library
- **Forms**: React Hook Form with Hookform resolvers
- **Validation**: Zod schema validation

### Development Tools
- **Build**: Vite with React plugin
- **TypeScript**: Full type checking
- **CSS**: PostCSS with Tailwind
- **Development**: Replit-specific plugins for cartographer and error modal

## Deployment Strategy

### Vercel Configuration
- **Frontend**: Static build deployed to Vercel
- **Build Output**: Vite builds to `dist/public`
- **Routing**: SPA routing with fallback to index.html
- **Backend**: Can be deployed as Vercel functions (configured for Node.js 18.x)

### Environment Setup
- **Database**: Requires `DATABASE_URL` environment variable
- **Development**: Uses tsx for hot reload
- **Production**: esbuild compilation for optimized server bundle

### Build Process
1. Frontend builds with Vite to `dist/public`
2. Backend compiles with esbuild to `dist/index.js`
3. Database migrations managed with `drizzle-kit push`

## Notable Architectural Decisions

### Monorepo Structure
- **Rationale**: Shared TypeScript types and schema between frontend/backend
- **Benefits**: Type safety across the stack, easier maintenance
- **Trade-offs**: Slightly more complex build process

### In-Memory Storage
- **Current State**: Uses MemStorage class for development
- **Future**: Can be easily swapped for actual database implementation
- **Purpose**: Provides clean abstraction layer for data operations

### Component-First UI
- **Approach**: shadcn/ui provides consistent, customizable components
- **Benefits**: Rapid development, consistent design system
- **Styling**: Tailwind CSS with CSS custom properties for theming

### Animation Strategy
- **Library**: Framer Motion for complex animations
- **Usage**: Scroll-triggered animations, smooth transitions
- **Performance**: IntersectionObserver for efficient animation triggers