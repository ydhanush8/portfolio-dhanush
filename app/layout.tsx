import type React from "react"
import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import { Suspense } from "react"
import Loading from "@/components/loading"

const inter = Inter({ subsets: ["latin"] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-dhanush.vercel.app"

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
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense fallback={<Loading />}>
            <Header />
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
            <footer className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Y Dhanush. All rights reserved.
            </footer>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}