import type React from "react"
import Link from "next/link"
import { Bricolage_Grotesque } from "next/font/google"
import { WHATSAPP_URL } from "@/lib/freelance"

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
})

/**
 * The freelance page is its own thing: a fixed dark room, no theme toggle, no
 * portfolio chrome. The portfolio nav is all same-page anchors and would scroll
 * nowhere here anyway.
 */
export default function FreelanceLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={`${bricolage.variable} min-h-screen bg-[#0D1719] text-[#ECEFEA] selection:bg-[#B08D3F] selection:text-[#0D1719]`}>
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6 sm:px-8">
        <Link href="/freelance" className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight">
          Dhanush
        </Link>
        <nav className="flex items-center gap-5 text-sm text-[#8FA09B]">
          <Link href="#work" className="transition-colors hover:text-[#ECEFEA]">
            Work
          </Link>
          <Link href="#how" className="hidden transition-colors hover:text-[#ECEFEA] sm:inline">
            How I work
          </Link>
          <Link href="/" className="transition-colors hover:text-[#ECEFEA]">
            Portfolio
          </Link>
        </nav>
      </header>

      {children}

      <footer className="mx-auto max-w-6xl px-5 py-12 text-sm text-[#5F726D] sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#1D2B2C] pt-6">
          <p>© {new Date().getFullYear()} Y Dhanush, Hyderabad</p>
          <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#ECEFEA]">
            WhatsApp
          </Link>
        </div>
      </footer>
    </div>
  )
}
