/** @type {import('next').NextConfig} */
const nextConfig = {
  // A verification build can set NEXT_DIST_DIR so it does not clobber the
  // .next directory a running dev server is using.
  distDir: process.env.NEXT_DIST_DIR || ".next",
}

export default nextConfig
