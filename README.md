# Smart Shopee (Next.js + Supabase + Tailwind)

## Quickstart
1. Copy `.env.example` to `.env.local` and set:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
2. Install deps and run:
```bash
npm i
npm run dev
```

## Build & Export (Netlify)
```bash
npm run build
```
The build automatically exports static files to `out/` directory (configured in `next.config.js` with `output: 'export'`).

**Important for Netlify deployment:**
- Set environment variables in Netlify dashboard:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Node.js version is pinned to 22.21.1 via `.nvmrc`
- Publish directory: `out`

## Notes
- App Router with mobile-first UI. Supabase client is in `lib/supabase.ts`.
- Implement database tables and RLS per spec; then wire queries in `/home`, `/product/[id]`, `/admin`, `/saved`.

