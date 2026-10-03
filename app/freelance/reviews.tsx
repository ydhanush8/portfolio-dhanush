"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"

type Review = { quote: string; who: string }

const INTERVAL_MS = 5500
// Fixed tilts for the cards waiting behind the active one.
const TILTS = [-7, 6, -4, 8, -6]

/**
 * A stacked deck of review cards: the active one sits on top and the rest
 * peek out behind it. Arrows, dots and a slow auto-advance that pauses on
 * hover and never runs for reduced motion.
 */
export default function Reviews({ reviews }: { reviews: Review[] }) {
  const reduced = useReducedMotion()
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const go = (dir: number) => setActive((i) => (i + dir + reviews.length) % reviews.length)

  useEffect(() => {
    if (reduced || paused) return
    // Restarts on every change, so a click never gets followed by an instant auto-advance.
    const id = setTimeout(() => setActive((i) => (i + 1) % reviews.length), INTERVAL_MS)
    return () => clearTimeout(id)
  }, [reduced, paused, active, reviews.length])

  return (
    <div
      className="grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* text + controls */}
      <div>
        <p className="font-[family-name:var(--font-hand)] text-[28px] leading-none text-[#7A5718]">what clients say</p>
        <h2 className="mt-3 max-w-[14ch] font-[family-name:var(--font-serif)] text-[clamp(2.6rem,5.4vw,4.75rem)] leading-[0.98] tracking-[-0.015em]">
          More enquiries, real results
        </h2>
        <div className="mt-10 flex items-center gap-4">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous review"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#1A1714] transition-colors hover:bg-[#1A1714] hover:text-[#F5F0E8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A1714]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next review"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#1A1714] transition-colors hover:bg-[#1A1714] hover:text-[#F5F0E8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A1714]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
          <div className="ml-2 flex gap-2" aria-hidden="true">
            {reviews.map((r, i) => (
              <span key={r.quote} className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-7 bg-[#B98B33]" : "w-1.5 bg-[#1A1714]/25"}`} />
            ))}
          </div>
        </div>
        <p className="sr-only" aria-live="polite">
          Review {active + 1} of {reviews.length}: {reviews[active].quote}
        </p>
      </div>
      {/* deck */}
      <div className="relative h-[300px] w-[calc(100%-32px)] max-w-[460px] sm:h-[320px] md:mx-auto">
        {reviews.map((r, i) => {
          const isActive = i === active
          const depth = (i - active + reviews.length) % reviews.length
          return (
            <motion.figure
              key={r.quote}
              aria-hidden={!isActive}
              initial={false}
              animate={{
                rotate: isActive ? 0 : TILTS[i % TILTS.length],
                scale: isActive ? 1 : 0.94,
                x: isActive ? 0 : depth * 14,
                y: isActive ? 0 : depth * 12,
                opacity: isActive ? 1 : 0.9,
                zIndex: isActive ? 40 : 30 - depth,
              }}
              transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 210, damping: 24 }}
              className="absolute inset-0 flex flex-col rounded-3xl bg-[#FFFDF8] p-8 [&[aria-hidden=true]]:bg-[#F1EADF] shadow-[0_30px_60px_-30px_rgba(40,30,15,0.5)] ring-1 ring-[#1A1714]/[0.07] sm:p-10"
            >
              <span aria-hidden="true" className="-mb-8 -mt-6 block font-[family-name:var(--font-serif)] text-[110px] leading-none text-[#B98B33]">
                &ldquo;
              </span>
              <blockquote className="flex-1 font-[family-name:var(--font-serif)] text-[clamp(1.45rem,2.6vw,1.9rem)] leading-[1.22]">
                {isActive
                  ? r.quote.split(" ").map((w, wi) => (
                      <motion.span
                        key={`${active}-${wi}`}
                        initial={reduced ? false : { filter: "blur(8px)", opacity: 0, y: 6 }}
                        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, delay: 0.03 * wi, ease: "easeOut" }}
                        className="inline-block"
                      >
                        {w}&nbsp;
                      </motion.span>
                    ))
                  : r.quote}
              </blockquote>
              <figcaption className="mt-6 font-[family-name:var(--font-hand)] text-[24px] leading-none text-[#5E5850]">{r.who}</figcaption>
            </motion.figure>
          )
        })}
      </div>

    </div>
  )
}
