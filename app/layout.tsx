import type React from "react"
import type { Metadata } from "next/types"
import { IBM_Plex_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { siteUrl } from "@/lib/site"

const plex = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })


const title = "Y Dhanush - Software Developer"
const description = "Portfolio of Y Dhanush Sai Reddy, a software engineer in Hyderabad building web apps with React, Next.js and Node."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: title,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: "/dhanushlogo.png",
    apple: "/dhanushlogo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Extensions (ColorZilla, Grammarly, ...) inject attributes on <body>
          before React hydrates, which trips the hydration check. */}
      <body className={plex.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
