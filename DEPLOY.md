# Deployment Guide

## Overview

This project consists of two parts:
- **Frontend (Astro)**: Deployed to GitHub Pages
- **CMS (PayloadCMS)**: Deployed to Render.com

---

## Frontend - GitHub Pages

### Automatic Deployment

The frontend automatically deploys to GitHub Pages when you push to the `main` branch.

### Manual Setup (one-time)

1. Go to your GitHub repository settings
2. Navigate to **Pages**
3. Under **Build and deployment**, select:
   - Source: **GitHub Actions**
4. Push to `main` branch to trigger the first deployment

### Custom Domain (optional)

1. Add a `CNAME` file to `/public/` with your domain
2. Configure DNS with your domain provider
3. Enable HTTPS in GitHub Pages settings

---

## CMS - Render.com

### Setup

1. Create a [Render.com](https://render.com) account
2. Connect your GitHub repository
3. Create a new **Web Service** from the `cms/` directory

### Configuration

**Build Command:**
```bash
npm install && npm run build
```

**Start Command:**
```bash
npm run serve
```

**Root Directory:**
```
cms
```

### Environment Variables

Set these in Render dashboard:

| Variable | Description | Example |
|----------|-------------|---------|
| `NODE_ENV` | Environment | `production` |
| `PAYLOAD_CONFIG_PATH` | Config path | `src/payload.config.ts` |
| `PAYLOAD_PUBLIC_SERVER_URL` | CMS public URL | `https://tunadao-cms.onrender.com` |
| `FRONTEND_URL` | Frontend URL (CORS) | `https://tunadao.github.io` |
| `DATABASE_URL` | Turso database URL | `libsql://db.turso.io?authToken=...` |
| `RESEND_API_KEY` | Resend API key | `re_...` |
| `PAYLOAD_SECRET` | Random secret | (auto-generated) |

### Database - Turso

1. Create a [Turso](https://turso.tech) account
2. Create a new database:
   ```bash
   turso db create tunadao
   ```
3. Get the connection URL:
   ```bash
   turso db show tunadao --url
   ```
4. Create an auth token:
   ```bash
   turso db tokens create tunadao
   ```
5. Set `DATABASE_URL` in Render as:
   ```
   libsql://[database-url]?authToken=[token]
   ```

---

## Webhooks (optional)

To rebuild the frontend when CMS content changes:

1. Create a GitHub Personal Access Token with `repo` scope
2. In Render, add a Deploy Hook URL
3. Configure PayloadCMS to call the webhook on content changes

---

## Environment Checklist

### Production

- [ ] GitHub Pages enabled in repository settings
- [ ] Render.com web service created
- [ ] Turso database created and connected
- [ ] Resend API key configured
- [ ] CORS configured for production frontend URL
- [ ] Custom domain configured (if applicable)

### Local Development

```bash
# Frontend
npm run dev

# CMS (in cms/ directory)
cd cms
npm run dev
```
