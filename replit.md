# Travel Blog Application

## Overview

This is a modern travel blog application built with React, Express, and PostgreSQL. The app features a travel-focused design with sections for travel guides, destinations, blog posts, and user engagement features. It uses a full-stack TypeScript architecture with modern tooling including Vite for frontend development, Drizzle ORM for database management, and shadcn/ui for the component library.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom travel-themed color palette
- **Typography**: Google Fonts (Lato and Merriweather) for a travel blog aesthetic

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL (Neon Database for cloud hosting)
- **Session Management**: Basic session handling with connect-pg-simple
- **Development**: Hot reload with tsx for server-side development

### Data Storage
- **Primary Database**: PostgreSQL with Drizzle ORM
- **Schema Location**: `shared/schema.ts` for type-safe database definitions
- **Migration Management**: Drizzle Kit for database migrations
- **Connection**: Neon Database serverless driver for PostgreSQL

## Key Components

### Database Schema
The application uses three main entities:
- **Travel Guides**: Featured articles with categories, descriptions, and metadata
- **Destinations**: Location-based content with country and category information
- **Blog Posts**: General blog content with publishing timestamps

### API Structure
RESTful API endpoints organized by resource:
- `/api/travel-guides` - CRUD operations for travel guides
- `/api/destinations` - Destination management with top destinations feature
- `/api/blog-posts` - Blog post management with recent posts support
- Search functionality across guides and destinations

### Frontend Components
- **Layout Components**: Header with navigation, Footer with social links
- **Content Sections**: Hero section, Featured guide, Travel guides grid, Destinations showcase
- **Interactive Elements**: Search functionality, Newsletter signup, Mobile-responsive navigation
- **UI Components**: Comprehensive shadcn/ui component library integration

### Storage Implementation
Currently uses in-memory storage with sample data for development. The `MemStorage` class implements the `IStorage` interface, providing:
- Sample travel guides including a featured Greece island-hopping guide
- Top destinations with rich imagery
- Recent blog posts
- Search functionality across content types

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Layer**: Express routes handle requests and interact with storage layer
3. **Data Layer**: Storage interface abstracts data access (currently in-memory, designed for database integration)
4. **Response Handling**: Type-safe responses using shared TypeScript interfaces
5. **UI Updates**: React Query manages caching and automatic re-fetching

## External Dependencies

### Core Libraries
- **@tanstack/react-query**: Server state management and caching
- **drizzle-orm**: TypeScript ORM for database operations
- **@neondatabase/serverless**: PostgreSQL serverless connection
- **wouter**: Lightweight routing library

### UI and Styling
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant API for components
- **lucide-react**: Modern icon library

### Development Tools
- **vite**: Fast build tool and development server
- **tsx**: TypeScript execution for Node.js
- **drizzle-kit**: Database migration and management tools

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with HMR and React Fast Refresh
- **Backend**: tsx with automatic restart on file changes
- **Database**: Development database with Drizzle push for schema changes

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild bundles server code for Node.js deployment
- **Database**: Drizzle migrations for production schema management

### Environment Configuration
- Database connection via `DATABASE_URL` environment variable
- Replit-specific optimizations and error handling
- Support for both development and production modes

The application is designed to be easily deployable on platforms like Replit, with proper environment detection and configuration management.