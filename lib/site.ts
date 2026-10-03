/**
 * The site's public address, from NEXT_PUBLIC_SITE_URL only. A production
 * build without it fails loudly rather than publishing a wrong URL into link
 * previews, the sitemap and canonical tags. Local dev uses localhost.
 */
const fromEnv = process.env.NEXT_PUBLIC_SITE_URL

if (!fromEnv && process.env.NODE_ENV === "production") {
  throw new Error(
    "NEXT_PUBLIC_SITE_URL is not set. Add it in Vercel (Project > Settings > Environment Variables), e.g. https://your-domain.com",
  )
}

export const siteUrl = (fromEnv ?? "http://localhost:3000").replace(/\/+$/, "")
