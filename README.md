# Velocity-B

Next.js 14 (App Router) rebuild of velocity-b.com, migrating off HubSpot CMS.

## Stack
- Next.js 14, App Router, TypeScript
- Tailwind CSS, brand tokens in `tailwind.config.ts`
- Content: flat markdown files in `content/`, loaded via `lib/content.ts` (gray-matter)
- Hosting: Vercel, auto-deploy on push to `main`

## Content workflow
Page copy is drafted in Google Docs, reviewed, approved, then written here as
markdown by Claude — one `.md` file per page in `content/`. See project docs
for the full workflow.

## Deploy
All commits are batched (blob → tree → commit → ref) to respect Vercel's
account-wide deploy rate limit — never one commit per file.
