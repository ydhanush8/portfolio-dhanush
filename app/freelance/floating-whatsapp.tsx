"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { WHATSAPP_URL } from "@/lib/freelance"

/**
 * The phone-only floating WhatsApp button. It steps aside whenever one of the
 * page's own WhatsApp buttons ([data-cta]) is on screen, so there are never
 * two of the same button in view.
 */
export default function FloatingWhatsApp() {
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    const ctas = document.querySelectorAll("[data-cta]")
    if (!ctas.length) {
      setHidden(false)
      return
    }
    const visible = new Set<Element>()
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)))
        setHidden(visible.size > 0)
      },
      { threshold: 0.2 },
    )
    ctas.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <Link
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : 0}
      className={`fixed bottom-5 right-5 z-50 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#1A1714] px-5 text-sm font-medium text-[#F5F0E8] shadow-lg shadow-black/25 ring-1 ring-[#F5F0E8]/25 transition-all duration-300 sm:hidden ${
        hidden ? "pointer-events-none translate-y-4 opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 11.5a8.4 8.4 0 0 1-12.5 7.3L3 20l1.3-5.3A8.5 8.5 0 1 1 21 11.5z" />
      </svg>
      WhatsApp
    </Link>
  )
}
