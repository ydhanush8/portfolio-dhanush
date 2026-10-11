"use client"

import { useEffect, useRef, useState } from "react"

const RIBBONS = 12
const CEILING_MS = 1800
const SKIP_EVENTS = ["wheel", "touchstart", "keydown", "pointerdown"] as const

declare global {
  interface Window {
    __cover?: boolean
  }
}

/**
 * Opening cover: dark strips with the name in the middle, a counter, then the
 * strips fall away from the centre. It can never trap anyone: any input skips
 * it, a returning visitor gets a faster version, it gives up after 1.8s, and
 * reduced motion or a failed script means it is never shown at all.
 */
export default function OpeningCover() {
  const [gone, setGone] = useState(false)
  const [leaving, setLeaving] = useState(false)
  const countRef = useRef<HTMLSpanElement>(null)
  const lineRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    window.__cover = true
    const root = document.documentElement
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) {
      root.classList.remove("cover-on")
      setGone(true)
      return
    }

    let seen = false
    try {
      seen = sessionStorage.getItem("fl-cover") === "1"
      sessionStorage.setItem("fl-cover", "1")
    } catch {}

    const minT = seen ? 450 : 1100
    let progress = 0
    let raf = 0
    let finished = false
    const timers: number[] = []

    const paint = (p: number) => {
      progress = p
      const v = Math.round(p * 100)
      if (countRef.current) countRef.current.textContent = (v < 10 ? "0" : "") + v
      if (lineRef.current) lineRef.current.style.transform = `scaleX(${p})`
    }

    // Runs to 86% on a timer; only reaching "ready" takes it to 100.
    const tween = (from: number, to: number, ms: number, done?: () => void) => {
      cancelAnimationFrame(raf)
      const start = performance.now()
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / ms)
        paint(from + (to - from) * (1 - Math.pow(1 - t, 2)))
        if (t < 1) raf = requestAnimationFrame(step)
        else done?.()
      }
      raf = requestAnimationFrame(step)
    }

    const finish = (quick: boolean) => {
      if (finished) return
      finished = true
      SKIP_EVENTS.forEach((e) => window.removeEventListener(e, skip))
      tween(progress, 1, quick ? 150 : 300, () => {
        setLeaving(true)
        timers.push(window.setTimeout(() => root.classList.remove("cover-on"), quick ? 250 : 550))
        timers.push(window.setTimeout(() => setGone(true), quick ? 1100 : 1500))
      })
    }
    const skip = () => finish(true)

    SKIP_EVENTS.forEach((e) => window.addEventListener(e, skip, { passive: true }))
    tween(0, 0.86, minT)

    const minWait = new Promise((r) => setTimeout(r, minT))
    const fonts = document.fonts?.ready ?? Promise.resolve()
    Promise.race([Promise.all([minWait, fonts]), new Promise((r) => setTimeout(r, CEILING_MS))]).then(() =>
      finish(seen),
    )

    return () => {
      cancelAnimationFrame(raf)
      timers.forEach(clearTimeout)
      SKIP_EVENTS.forEach((e) => window.removeEventListener(e, skip))
      root.classList.remove("cover-on")
    }
  }, [])

  if (gone) return null

  return (
    <div className={`cover ${leaving ? "cover-leaving" : ""}`} aria-hidden="true">
      <div className="cover-ribbons">
        {Array.from({ length: RIBBONS }, (_, i) => (
          <i
            key={i}
            style={
              {
                "--i": i,
                "--d": `${Math.abs(i - (RIBBONS - 1) / 2) * 40}ms`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
      <div className="cover-mark">
        <span className="cover-name">
          Dhanush<span className="cover-dot">.</span>
        </span>
      </div>
      <div className="cover-foot">
        <span ref={countRef} className="cover-count">
          00
        </span>
        <span className="cover-line">
          <span ref={lineRef} />
        </span>
      </div>
    </div>
  )
}
