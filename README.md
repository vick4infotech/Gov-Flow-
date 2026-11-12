# GovFlow — Standalone Full-Stack Application

Public services, simplified.

A self-contained Nigeria-focused Next.js App Router application designed for independent Vercel deployment. Main application surfaces use first-party product branding. Sample data is fictional and provided for local development and application evaluation.

## Tech stack

- Next.js 15 App Router, React 19, TypeScript, responsive CSS and Lucide icons
- Neon serverless PostgreSQL (`@neondatabase/serverless`), parameterized server-side SQL
- REST endpoints (Next.js route handlers), Zod request validation
- Signed HTTP-only admin sessions (`jose`), no authentication secrets exposed to browser
- Server-side authorization for writes; unauthenticated users can view records
- Exportable operational records (authenticated CSV)
- Vercel-compatible serverless API routes

## First run (production-backed)

1. Create a fresh Neon PostgreSQL database for **this application**. Do not share a DB across the apps unless specifically intended.
2. Open Neon SQL Editor and execute `database/schema.sql`. This creates tables and inserts fictional Nigerian reference records without duplicating existing records.
3. Set environment variables in `.env.local` locally and in Vercel Project → Settings → Environment Variables:

```env
DATABASE_URL=postgresql://...your-Neon-connection-string...
ADMIN_PASSWORD=choose-a-strong-unique-password-at-least-12-characters
SESSION_SECRET=generate-a-random-32-character-or-longer-secret
```

4. `npm install && npm run dev`. Visit http://localhost:3000.
5. For independent deployment, push **this folder alone** to its own GitHub repo. Import it in Vercel as a Next.js project; build command `npm run build`. Vercel environment variables must match local values. Re-deploy when changing them.

Without `DATABASE_URL`, the website renders but cannot load or change records; the interface displays a configuration alert. Live writes require valid staff credentials and a configured database. Do not use this project's sample data or simple shared administrator login with real citizen, patient, financial or employee records.

## API

| Endpoint | Method | Purpose | Authentication |
|---|---|---|---|
| `/api/health` | GET | Environment status | No |
| `/api/records` | GET | List operational records | No |
| `/api/records` | POST | Create validated record | Admin |
| `/api/records` | PATCH | Change permitted state | Admin |
| `/api/session` | GET | Check session | No |
| `/api/session` | POST | Staff sign in | Password |
| `/api/session` | DELETE | Sign out | No |
| `/api/export` | GET | Export CSV | Admin |

## Production readiness and deployment boundaries

This is an independent functional full-stack **sample application**, not an audited production system. The database, APIs, server authentication and mutable workflows are real when configured, but the sample user model is a single shared administrative account. Before accepting real private records, implement per-person identity (e.g. Clerk), granular role checks, protected read endpoints, mandatory CSRF protections as appropriate, rate limiting for login and mutations, object storage with access policies, backups and recovery tests, application monitoring, accessibility testing, comprehensive automated tests, and legal privacy/security review. Never publish credentials, real people's private data or personally identifying records in seeded SQL. The home screens intentionally avoid technical provenance or development descriptions; this disclosure belongs in repository documentation.

## Showcase integration

Link the deployed project from your main portfolio with its actual domain, a GitHub repository URL and a technology case study. All four applications work independently with their own environment variables and database.
