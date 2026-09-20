# CLAUDE.md

Personal portfolio site for Y Dhanush Sai Reddy. Next.js App Router, deployed on Vercel.

## Commands

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # must pass before pushing
```

## Layout

- `app/layout.tsx` — root layout, site metadata (OG/Twitter), theme provider, header, footer.
- `app/page.tsx` — the only page. Renders every section in order: Hero, Experience, Education, Skills, Projects, Contact.
- `components/*.tsx` — one file per section. Editing content means editing these; the data is inline, there is no CMS.
- `components/ui/*` — shadcn/ui primitives. Only the four actually in use are kept; do not re-add the rest of the scaffold.
- `app/globals.css` — the only stylesheet. Tailwind layers plus the shadcn CSS variables.

## Conventions

- Tailwind only. No CSS modules, no styled-components.
- Section components are `"use client"` because they animate with framer-motion.
- Images live in `public/` and render through `next/image`.
- Content lives in the component that displays it. Do not add a data layer for six sections.

## Gotchas

- `next build` runs lint and typecheck for real — there are no `ignoreBuildErrors` escapes. Keep it that way.
- Never edit `package.json` dependencies without running `npm install` afterwards. Vercel builds with `npm ci`, which hard-fails when `package-lock.json` is out of sync.
- Set `NEXT_PUBLIC_SITE_URL` in the Vercel project to the real domain. Metadata, `robots.ts` and `sitemap.ts` all fall back to a guessed URL otherwise.
- The contact section is links only, by design. There is no form and no `/api/send-email` route.
- Apostrophes in JSX text must be `&apos;` — `react/no-unescaped-entities` fails the build.
