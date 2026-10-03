import type React from "react"
import Link from "next/link"
import { Caveat, Hanken_Grotesk, Instrument_Serif } from "next/font/google"
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/freelance"

const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif" })
const hand = Caveat({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-hand" })
const body = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-body" })

/**
 * The freelance page is its own thing: a warm, personal studio page aimed at
 * business owners, with no portfolio chrome and no theme toggle.
 */
export default function FreelanceLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div
      className={`${serif.variable} ${hand.variable} ${body.variable} min-h-screen overflow-x-clip bg-[#F5F0E8] font-[family-name:var(--font-body)] text-[17px] leading-relaxed text-[#1A1714] selection:bg-[#1A1714] selection:text-[#F5F0E8]`}
    >
      <div id="top" className="bg-[#1A1714] px-5 py-2.5 text-center text-sm text-[#E9E2D6]">
        Taking on new website projects.{" "}
        <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="underline decoration-[#B98B33] underline-offset-4 hover:text-white">
          Message me on WhatsApp
        </Link>
      </div>

      <header className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-5 px-5 py-6 sm:px-8">
        <Link href="/freelance" className="font-[family-name:var(--font-serif)] text-[28px] leading-none">
          Dhanush<span className="text-[#B98B33]">.</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-6 text-[15px] text-[#5E5850] sm:gap-8">
          <Link href="#work" className="transition-colors hover:text-[#1A1714]">
            Work
          </Link>
          <Link href="#process" className="hidden transition-colors hover:text-[#1A1714] sm:inline">
            How it works
          </Link>
          <Link href="#about" className="hidden transition-colors hover:text-[#1A1714] sm:inline">
            About
          </Link>
          <Link href="#faq" className="hidden transition-colors hover:text-[#1A1714] sm:inline">
            FAQ
          </Link>
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center rounded-full border border-[#1A1714] px-5 font-medium text-[#1A1714] transition-colors hover:bg-[#1A1714] hover:text-[#F5F0E8]"
          >
            Let&apos;s talk
          </Link>
        </nav>
      </header>

      {children}

      <footer className="mx-auto max-w-[1200px] px-5 pb-10 pt-16 text-[15px] text-[#5E5850] sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <Link href="/freelance" className="font-[family-name:var(--font-serif)] text-[34px] leading-none text-[#1A1714]">
              Dhanush<span className="text-[#B98B33]">.</span>
            </Link>
            <p className="mt-2">Websites for local businesses, built by hand.</p>
          </div>
          <nav className="flex flex-wrap gap-x-7 gap-y-2">
            <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#1A1714]">
              WhatsApp
            </Link>
            <Link href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-[#1A1714]">
              Email
            </Link>
            <Link href="#top" className="transition-colors hover:text-[#1A1714]">
              Back to top
            </Link>
          </nav>
        </div>
        <p className="mt-10 border-t border-[#1A1714]/10 pt-6 text-sm text-[#6A6359]">© {new Date().getFullYear()} Y Dhanush</p>
      </footer>
    </div>
  )
}
