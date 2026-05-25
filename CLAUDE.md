# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `bun dev` (Next.js development server)
- **Build for production**: `bun run build` (Next.js production build)
- **Start production server**: `bun start` (Next.js production server)
- **Lint code**: `bun lint` (ESLint with Next.js config)
- **Install dependencies**: `bun install`

> Note: This project uses Bun as the package manager instead of npm.

## Architecture Overview

This is a Next.js 15 application for Quincy Labs (AI Infrastructure Lab) with the following key architectural components:

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS with custom theme configuration
- **CMS**: Sanity headless CMS integration
- **UI Components**: Radix UI primitives with shadcn/ui patterns
- **Animations**: Anime.js and custom CSS animations
- **Theme**: Next-themes for dark/light mode support

### Project Structure
- `/src/app/` - Next.js App Router pages and layouts
  - `/_components/` - Layout-specific components (Header, Sidebar, etc.)
  - `/insights/`, `/research/`, `/labs/`, `/about/`, `/contact/` - Main content sections
- `/src/components/` - Shared UI components including shadcn/ui components
- `/src/lib/` - Utility functions and configurations
  - `sanity.*` files - Sanity CMS client, queries, types, and utilities
- `/src/hooks/` - Custom React hooks

### Sanity CMS Integration
The application uses Sanity headless CMS for content management:
- **Client**: Configured in `src/lib/sanity.client.ts`
- **Queries**: GROQ queries in `src/lib/sanity.queries.ts`  
- **Types**: Generated TypeScript types in `src/lib/sanity.types.ts`
- **Utilities**: Content processing helpers in `src/lib/sanity.utils.ts`
- **Renderer**: Portable Text rendering in `src/components/PortableTextRenderer.tsx`

### Styling and Theming
- Uses CSS custom properties for theming with Tailwind CSS
- Custom `Departure Mono` monospace font family
- Aurora animation keyframes for background effects
- Supports dark/light mode theming via next-themes

### Key Features
- Multi-section website with insights, research, labs, about, and contact pages
- Sanity CMS integration for dynamic content management
- Responsive design with mobile-friendly navigation
- Custom animations and visual effects (rain background, aurora effects)
- Theme switching capabilities
- Structured content rendering with Portable Text

### Import Aliases
- `@/*` maps to `./src/*` for clean imports