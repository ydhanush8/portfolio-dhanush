"use client"

import { useRef, type ReactNode } from "react"

const PULL = 0.25 // fraction of the cursor offset the button follows
const MAX = 8 // px

/**
 * Leans its child slightly toward the cursor. Mouse and trackpad only:
 * touch, and anyone who prefers reduced motion, get a still button.
 */
export default function Magnetic({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null)

  const move = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = Math.max(-MAX, Math.min(MAX, (e.clientX - r.left - r.width / 2) * PULL))
    const y = Math.max(-MAX, Math.min(MAX, (e.clientY - r.top - r.height / 2) * PULL))
    el.style.transform = `translate(${x}px, ${y}px)`
  }
  const reset = () => {
    if (ref.current) ref.current.style.transform = ""
  }

  return (
    <span
      ref={ref}
      onPointerMove={move}
      onPointerLeave={reset}
      className="inline-block transition-transform duration-300 ease-out"
    >
      {children}
    </span>
  )
}
