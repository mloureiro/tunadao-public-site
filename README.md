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

```
├── app/                    # Astro frontend source
│   ├── components/         # Reusable UI components
│   ├── data/               # Fallback data (when CMS unavailable)
│   ├── i18n/               # Translations
│   ├── layouts/            # Page layouts
│   ├── lib/                # CMS client & utilities
│   ├── pages/              # Route pages
│   └── styles/             # Global styles
├── cms/                    # PayloadCMS backend
│   └── src/
│       ├── collections/    # Content types
│       ├── globals/        # Site settings
│       └── utils/          # Utilities (rebuild triggers)
├── e2e/                    # Playwright E2E tests
├── public/                 # Static assets
└── src/                    # Shared utilities
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
# Install dependencies
npm install
cd cms && npm install && cd ..

# Start frontend (http://localhost:4321)
npm run dev

# Start CMS in another terminal (http://localhost:3000)
cd cms && npm run dev
```

### Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
cd cms && cp .env.example .env
```

**Frontend (.env):**
| Variable | Description | Default |
|----------|-------------|---------|
| `CMS_URL` | PayloadCMS API URL | `http://localhost:3000` |
| `USE_CMS` | Enable CMS fetching | `true` |

**CMS (cms/.env):** See [DEPLOY.md](./DEPLOY.md) for full list.

## Scripts

```bash
# Development
npm run dev           # Start Astro dev server
npm run dev:cms       # Start PayloadCMS

# Build
npm run build         # Build static site

# Quality
npm run lint          # Run ESLint
npm run format        # Format with Prettier
npm run typecheck     # TypeScript check

# Testing
npm run test          # Run Vitest unit tests
npm run test:e2e      # Run Playwright E2E tests
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
