# Tunadão 1998 Website

Website institucional da **Tunadão** - Tuna do Instituto Politécnico de Viseu.

## Stack

| Component | Technology |
|-----------|------------|
| Frontend | [Astro](https://astro.build/) (SSG) |
| CMS | [PayloadCMS](https://payloadcms.com/) 3.0 |
| Database | [Turso](https://turso.tech/) (SQLite) |
| Frontend Hosting | GitHub Pages |
| CMS Hosting | Render.com |
| CI/CD | GitHub Actions |
| Tests | Vitest + Playwright |

## Features

- **Bilingual** (PT/EN) with i18n routing
- **Static Site Generation** - fast, SEO-friendly
- **Headless CMS** - content managed via PayloadCMS admin panel
- **Automatic rebuilds** - frontend rebuilds when CMS content changes
- **Responsive design** - works on all devices

## Project Structure

This is a monorepo with two self-contained projects:

```
├── app/                    # Astro frontend (self-contained)
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── data/           # Fallback data (when CMS unavailable)
│   │   ├── i18n/           # Translations
│   │   ├── layouts/        # Page layouts
│   │   ├── lib/            # CMS client & utilities
│   │   ├── pages/          # Route pages
│   │   └── styles/         # Global styles
│   ├── public/             # Static assets
│   ├── package.json
│   ├── astro.config.mjs
│   └── tsconfig.json
├── cms/                    # PayloadCMS backend (self-contained)
│   ├── src/
│   │   ├── collections/    # Content types
│   │   ├── globals/        # Site settings
│   │   └── utils/          # Utilities (rebuild triggers)
│   └── package.json
├── e2e/                    # Playwright E2E tests
├── package.json            # Root: workspaces + e2e
└── playwright.config.ts
```

## Pages

- **Home** - Hero, highlights, recent news
- **Sobre Nós** - History since 1998
- **Citadão** - Festival editions (2004-present)
- **Palmarés** - Awards won at other festivals
- **Blog** - News and events
- **Vídeos** - YouTube embeds
- **Música** - Discography & Spotify links
- **Contacto** - Contact form

## Quick Start

### Prerequisites

- Node.js 20+
- npm

### Development

```bash
# Install all dependencies (uses npm workspaces)
npm install

# Start frontend (http://localhost:4321)
npm run dev -w app

# Start CMS in another terminal (http://localhost:3000)
npm run dev -w cms
```

### Environment Variables

```bash
cp app/.env.example app/.env
cp cms/.env.example cms/.env
```

**Frontend (app/.env):**
| Variable | Description | Default |
|----------|-------------|---------|
| `CMS_URL` | PayloadCMS API URL | `http://localhost:3000` |
| `USE_CMS` | Enable CMS fetching | `true` |

**CMS (cms/.env):** See [DEPLOY.md](./DEPLOY.md) for full list.

## Scripts

### Root (all workspaces)

```bash
npm run lint          # Check linting in all workspaces
npm run lint:fix      # Fix lint issues
npm run format        # Check formatting
npm run format:fix    # Fix formatting
npm run typecheck     # TypeScript check
npm run test          # Run unit tests
npm run build         # Build all workspaces
npm run test:e2e      # Run Playwright E2E tests
```

### Workspace-specific

```bash
# Frontend (app/)
npm run dev -w app        # Start dev server
npm run build -w app      # Build static site
npm run preview -w app    # Preview build

# CMS (cms/)
npm run dev -w cms        # Start CMS server
npm run build -w cms      # Build CMS
```

## Deployment

See [DEPLOY.md](./DEPLOY.md) for detailed deployment instructions.

**TL;DR:**
- Frontend deploys to GitHub Pages on push to `main`
- CMS deploys to Render.com
- CMS content changes auto-trigger frontend rebuilds

## Architecture

```
┌─────────────────┐     Build Time      ┌─────────────────┐
│   PayloadCMS    │ ──────────────────► │   Astro (SSG)   │
│   (Render.com)  │    Fetch content    │ (GitHub Pages)  │
└────────┬────────┘                     └─────────────────┘
         │
         │ afterChange hook
         ▼
┌─────────────────┐
│  GitHub Actions │ ──► Rebuild & Deploy
└─────────────────┘
```

## License

Private - Tunadão 1998
