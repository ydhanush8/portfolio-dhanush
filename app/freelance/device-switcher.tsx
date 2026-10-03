"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import type { ClientSite } from "@/lib/freelance"

const INTERVAL_MS = 4500

/**
 * A laptop and a phone showing the same client site. The names underneath
 * switch both screens. Cycles on its own until the visitor hovers or picks
 * one, and never cycles for anyone who prefers reduced motion.
 */
export default function DeviceSwitcher({ sites }: { sites: ClientSite[] }) {
  const [active, setActive] = useState(0)
  const [picked, setPicked] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(true)

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  }, [])

  const cycling = !picked && !hovering && !reducedMotion

  useEffect(() => {
    if (!cycling) return
    const id = setInterval(() => setActive((i) => (i + 1) % sites.length), INTERVAL_MS)
    return () => clearInterval(id)
  }, [cycling, sites.length])

  const site = sites[active]

  return (
    <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
      <div className="relative mx-auto max-w-[1040px] pb-[6%]">
        {/* Laptop */}
        <div className="mx-auto w-[86%]">
          <div className="rounded-t-[18px] bg-[#1E1B18] p-[1.4%] shadow-[0_50px_100px_-20px_rgba(17,19,21,0.45)] ring-1 ring-black/10">
            <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-black">
              {sites.map((s, i) => (
                <Image
                  key={s.client}
                  src={s.image}
                  alt={i === active ? `${s.client}, desktop` : ""}
                  fill
                  sizes="(min-width: 1100px) 880px, 86vw"
                  priority={i === 0}
                  className={`object-cover object-top transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"}`}
                />
              ))}
            </div>
          </div>
          <div className="relative left-1/2 h-[14px] w-[112%] -translate-x-1/2 rounded-b-2xl bg-[#D8D0C3] ring-1 ring-black/10">
            <div className="mx-auto h-[5px] w-[14%] rounded-b-md bg-[#BDB3A4]" />
          </div>
        </div>

        {/* Phone */}
        <div className="float absolute bottom-0 right-[1%] w-[22%] sm:right-[3%] sm:w-[19%]">
          <div className="rounded-[16%/7.5%] bg-[#1E1B18] p-[4%] shadow-[0_40px_80px_-10px_rgba(17,19,21,0.5)] ring-1 ring-black/10">
            <div className="relative aspect-[500/1083] overflow-hidden rounded-[12%/5.5%] bg-black">
              {sites.map((s, i) => (
                <Image
                  key={s.client}
                  src={s.mobile}
                  alt={i === active ? `${s.client}, phone` : ""}
                  fill
                  sizes="(min-width: 1100px) 200px, 22vw"
                  priority={i === 0}
                  className={`object-cover object-top transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-2" aria-label="Client sites">
        {sites.map((s, i) => (
          <button
            key={s.client}
            type="button"
            aria-pressed={i === active}
            onClick={() => {
              setActive(i)
              setPicked(true)
            }}
            className={`relative min-h-11 overflow-hidden rounded-full px-5 text-[15px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A1714] ${
              i === active ? "bg-[#1A1714] text-[#F5F0E8]" : "text-[#5E5850] hover:bg-black/5 hover:text-[#1A1714]"
            }`}
          >
            {s.client}
            {i === active && cycling && (
              <span
                key={active}
                aria-hidden="true"
                className="tab-progress absolute inset-x-0 bottom-0 h-[3px] origin-left bg-[#B98B33]"
                style={{ animationDuration: `${INTERVAL_MS}ms` }}
              />
            )}
          </button>
        ))}
      </div>

      <p className="mt-5 text-center text-[15px] text-[#5E5850]" aria-live="polite">
        Live at{" "}
        <Link
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-[#B98B33] pb-0.5 font-medium text-[#1A1714] transition-colors hover:text-[#7A5718]"
        >
          {site.domain}
        </Link>
      </p>
    </div>
  )
}
