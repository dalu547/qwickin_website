# Qwickin Website (Cyera-Inspired Redesign)

React + Vite marketing site for Qwickin with premium enterprise styling, dark theme tokens, Framer Motion animations, and React Router pages.

## Tech Stack

- React + TypeScript (Vite)
- Tailwind CSS
- Framer Motion
- Lucide React
- React Router DOM

## Design System

Core color tokens are defined in `src/styles/variables.css`:

- `--bg-primary: #0A0B14`
- `--bg-secondary: #151621`
- `--accent-purple: #9D4EDD`
- `--accent-cyan: #00D9FF`
- `--text-primary: #FFFFFF`
- `--text-secondary: #B8B8B8`
- `--gradient-primary: linear-gradient(135deg, #9D4EDD 0%, #4CC9F0 100%)`

Global typography, animation keyframes, and utility classes are defined in `src/styles/globals.css`.

## Component Structure

- `src/components/Hero/HeroSection.tsx`
- `src/components/Sections/LogoCarousel.tsx`
- `src/components/Sections/FeaturesGrid.tsx`
- `src/components/Sections/CTASection.tsx`
- `src/components/Layout/Navigation.tsx`
- `src/components/Layout/Footer.tsx`

## Run Locally

1. Install dependencies

```bash
npm install
```

2. Start dev server

```bash
npm run dev
```

3. Build production bundle

```bash
npm run build
```

## Deployment

Vercel SPA refresh routing is configured in `vercel.json`.
