# portfolio-dhanush

Personal portfolio site — [Y Dhanush Sai Reddy](https://www.linkedin.com/in/dhanushsr8/), software engineer in Hyderabad.

Built with Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui and framer-motion. Deployed on Vercel.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Configuration

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL. Used for metadata, `robots.txt` and `sitemap.xml`. Falls back to the Vercel preview URL. |

## Structure

| Path | Contents |
| --- | --- |
| `app/` | Root layout, the single page, metadata routes (`robots.ts`, `sitemap.ts`, `opengraph-image.tsx`) |
| `components/` | One component per page section |
| `components/ui/` | shadcn/ui primitives |
| `public/` | Images and `resume.pdf` |

## Editing content

Each section is a component in `components/`. The copy is inline — edit the component, there is no CMS.
