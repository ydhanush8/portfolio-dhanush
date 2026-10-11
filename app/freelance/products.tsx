import Image from "next/image"
import Link from "next/link"

/** Dhanush's own products, shown apart from client work so nothing is passed off as a client site. */
const products = [
  {
    name: "Atlas",
    line: "Ask questions about your own documents and get answers that point to the exact source.",
    url: "https://atlas-web-beta-one.vercel.app/",
    image: "/freelance/atlas-cover.jpg",
    focus: "object-top",
  },
  {
    name: "MemoMind",
    line: "Turns study notes into honest AI feedback and daily practice, so what you learn stays.",
    url: "https://memomind-navy.vercel.app/",
    image: "/freelance/memomind-cover.jpg",
    // its hero copy sits on the left, so a narrow panel must keep the left edge
    focus: "object-left-top",
  },
]

export default function Products() {
  return (
    <section className="rise mx-auto max-w-[1200px] px-5 pt-28 sm:px-8">
      <p className="font-[family-name:var(--font-hand)] text-[28px] leading-none text-[#7A5718]">my own products, not client work</p>
      <h2 className="mask-up mt-3 max-w-[16ch] font-[family-name:var(--font-serif)] text-[clamp(2.6rem,5.4vw,4.75rem)] leading-[0.98] tracking-[-0.015em]">
        Things I&apos;ve built for myself
      </h2>
      <div className="mt-12 flex flex-col gap-5 md:h-[460px] md:flex-row">
        {products.map((p) => (
          <Link
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="product-panel group relative block h-[340px] overflow-hidden rounded-[28px] bg-[#1A1714] ring-1 ring-[#1A1714]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1A1714] md:h-auto md:flex-[1_1_0%]"
          >
            <Image
              src={p.image}
              alt={`The home page of ${p.name}`}
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
              className={`object-cover ${p.focus} transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
            />
            {/* shaped veil: deepest under the words, clear across the picture */}
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(to_top,rgba(26,23,20,0.97)_0%,rgba(26,23,20,0.9)_30%,rgba(26,23,20,0.45)_55%,rgba(26,23,20,0)_75%)]"
            />
            <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-7 sm:p-9">
              <span className="max-w-[44ch]">
                <span className="block font-[family-name:var(--font-serif)] text-[38px] leading-none text-[#F5F0E8]">{p.name}</span>
                <span className="product-line mt-3 block text-[15px] leading-relaxed text-[#E9E2D6]">{p.line}</span>
              </span>
              <span className="inline-flex flex-none items-center gap-2 rounded-full bg-[#F5F0E8] px-4 py-2 text-sm font-medium text-[#1A1714] transition-transform duration-300 group-hover:translate-x-1">
                Visit
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
