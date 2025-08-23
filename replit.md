# Overview

This is a modern full-stack web application for ADINSPIRE, a digital marketing agency. The application features a sleek marketing website with contact form functionality, built using React/TypeScript on the frontend and Express.js on the backend. The app showcases the agency's services through an engaging single-page design with sections for hero content, about information, services, client testimonials, and contact forms.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built with **React 18** using **TypeScript** and follows a component-based architecture. The application uses **Vite** as the build tool for fast development and optimized production builds. State management is handled through **TanStack Query** for server state and local React state for UI interactions.

The UI framework is **shadcn/ui** with **Tailwind CSS** for styling, providing a consistent design system with dark theme support. The application uses **Framer Motion** for smooth animations and transitions throughout the user interface.

Navigation is handled by **Wouter** as a lightweight client-side routing solution, though the current implementation is primarily a single-page application with smooth scrolling between sections.

## Backend Architecture
The backend follows a **RESTful API** design using **Express.js** with TypeScript. The architecture is organized into:

- **Routes layer** (`server/routes.ts`) - Defines API endpoints and request handling
- **Storage layer** (`server/storage.ts`) - Abstracts data persistence with an interface-based approach
- **Schema layer** (`shared/schema.ts`) - Centralized data validation and type definitions

The server implements a clean separation of concerns with middleware for request logging, error handling, and JSON parsing. The current implementation uses in-memory storage but is designed to easily switch to database persistence.

## Data Storage Solutions
The application uses **Drizzle ORM** with **PostgreSQL** for database operations, configured to work with **Neon Database** as the cloud provider. The database schema is defined using Drizzle's schema builder with proper TypeScript integration.

Currently, a **MemStorage** class provides in-memory data persistence for development, implementing the same interface as the intended database storage layer. This allows for easy migration to persistent storage without changing the business logic.

## Authentication and Authorization
No authentication system is currently implemented. The application focuses on public marketing content and contact form submissions that don't require user authentication.

## External Dependencies

### Core Technologies
- **React 18** with TypeScript for frontend development
- **Express.js** for backend API server
- **Vite** for build tooling and development server
- **Node.js** runtime environment

### Database and ORM
- **Drizzle ORM** for type-safe database operations
- **PostgreSQL** as the primary database
- **Neon Database** serverless PostgreSQL hosting
- **Drizzle Kit** for database migrations and schema management

### UI and Styling
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** component library built on Radix UI primitives
- **Framer Motion** for animations and transitions
- **Lucide React** for consistent iconography

### State Management and Data Fetching
- **TanStack Query (React Query)** for server state management and caching
- **React Hook Form** with Zod resolvers for form handling and validation

### Development Tools
- **TypeScript** for static type checking
- **ESBuild** for fast production builds
- **TSX** for TypeScript execution in development
- **PostCSS** with Autoprefixer for CSS processing

### Validation and Schema
- **Zod** for runtime type validation and schema definition
- **Drizzle Zod** for seamless integration between database schemas and validation