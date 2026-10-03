import type { ReactNode } from "react"

/** A word with a loose, hand-drawn circle around it. */
export function Circled({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block px-[0.12em]">
      {children}
      <svg
        aria-hidden="true"
        viewBox="0 0 300 120"
        preserveAspectRatio="none"
        className="draw-on-load pointer-events-none absolute -inset-x-[0.18em] -inset-y-[0.12em] h-[calc(100%+0.24em)] w-[calc(100%+0.36em)] overflow-visible"
      >
        <path
          pathLength={1}
          d="M40 22c60-18 170-20 222 6 34 18 30 58-8 74-60 24-170 22-218-2C-2 82 6 40 52 22c20-8 50-12 76-12"
          fill="none"
          stroke="#B98B33"
          strokeWidth="5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  )
}

/** A handwritten margin note with a curved arrow. */
export function Note({ children, flip = false, className = "" }: { children: ReactNode; flip?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-end gap-1 font-[family-name:var(--font-hand)] text-[22px] leading-tight text-[#7A5718] ${className}`}>
      {!flip && children}
      <svg aria-hidden="true" width="44" height="34" viewBox="0 0 44 34" className={`draw-on-view ${flip ? "-scale-x-100" : ""}`}>
        <path pathLength={1} d="M4 4c14 2 26 10 32 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path pathLength={1} d="M28 24l8 5 2-9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {flip && children}
    </span>
  )
}
