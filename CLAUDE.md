# CLAUDE.md

Personal portfolio site for Y Dhanush Sai Reddy. Next.js App Router, deployed on Vercel.

## Commands

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # must pass before pushing
```

## Layout

Two pages on one domain, each with its own layout, split with route groups (URLs are unaffected).

- `app/layout.tsx`: root layout only. html, body, theme provider, site-wide metadata.
- `app/(portfolio)/`: the engineering portfolio at `/`. `layout.tsx` adds the header and footer; `page.tsx` renders Hero, Experience, Education, Skills, Projects, Contact.
- `app/freelance/`: the client-facing page at `/freelance`. Its own `layout.tsx` (warm palette, no theme toggle, own fonts), `page.tsx`, the laptop and phone `device-switcher.tsx`, the `reviews.tsx` card deck, `avatar.tsx`, hand-drawn `marks.tsx`.
- `lib/freelance.ts`: the client sites shown on `/freelance` and the WhatsApp and email constants.
- `components/*.tsx`: one file per portfolio section. Content is inline; there is no CMS.
- `components/ui/*`: shadcn/ui primitives. Only the four in use are kept; do not re-add the rest of the scaffold.
- `app/globals.css`: the only stylesheet. Tailwind layers, shadcn variables, and the `/freelance` animation classes.

## Conventions

- Tailwind only. No CSS modules, no styled-components.
- Section components are `"use client"` because they animate with framer-motion.
- Images live in `public/` and render through `next/image`.
- Content lives in the component that displays it. Do not add a data layer for six sections.

## Gotchas

- `next build` runs lint and typecheck for real. There are no `ignoreBuildErrors` escapes. Keep it that way.
- Never edit `package.json` dependencies without running `npm install` afterwards. Vercel builds with `npm ci`, which hard-fails when `package-lock.json` is out of sync.
- Set `NEXT_PUBLIC_SITE_URL` in the Vercel project to the real domain. Metadata, `robots.ts` and `sitemap.ts` all fall back to a guessed URL otherwise.
- The contact section is links only, by design. There is no form and no `/api/send-email` route.
- Apostrophes in JSX text must be `&apos;`: `react/no-unescaped-entities` fails the build.
- The dev server often stops recompiling Tailwind after edits on this machine (likely the Linux inotify watcher limit). If new classes do not show up, restart it with `rm -rf .next && npm run dev`.
- To check a production build while a dev server runs, use `NEXT_DIST_DIR=.next-verify npm run build`, so it does not overwrite the dev server's `.next`.
- `/freelance` copy rules: no client numbers or locations, no business-type lists, no prices, no em dashes. Reviews only say what clients actually said.
