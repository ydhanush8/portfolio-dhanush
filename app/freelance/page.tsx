import type { Metadata } from "next/types"
import Image from "next/image"
import Link from "next/link"
import { clientSites, WHATSAPP_URL, CONTACT_EMAIL } from "@/lib/freelance"

export const metadata: Metadata = {
  title: "Get a website you actually want | Y Dhanush",
  description:
    "Websites built one business at a time, from your own prices and your own words. Plain HTML and CSS, no page builder, no plugins, no monthly fee.",
  alternates: { canonical: "/freelance" },
  openGraph: {
    type: "website",
    url: "/freelance",
    title: "Get a website you actually want",
    description:
      "Websites built one business at a time, from your own prices and your own words. Never a template.",
  },
}

/** Steps describe the build process actually used on these five sites. */
const steps = [
  {
    title: "Your photos get audited before anything is designed",
    body: "Every image is opened and looked at, never trusted by its filename. On one build this caught a folder of stock headshots that were there to populate fake reviews, and a logo belonging to a competitor. Both would otherwise have shipped.",
  },
  {
    title: "Each photo is matched to a section on purpose",
    body: "The mapping is written down before any code. One photo per slot and none reused, so the page does not quietly repeat itself halfway down.",
  },
  {
    title: "Every image is rebuilt at the sizes real phones ask for",
    body: "A five megabyte photo library becomes a four to six hundred kilobyte download, because the phone picks one size and one format and loads the rest only as you scroll.",
  },
  {
    title: "The result is measured, not eyeballed",
    body: "Rendered screenshots at six widths from 320 to 1440. Text contrast is calculated against the brightest pixel behind it rather than judged by eye, which has caught text that looked fine and was not.",
  },
  {
    title: "It goes live on your own hosting",
    body: "You get the files and the site runs on your domain. Nothing is tied to an account of mine.",
  },
]

const included = [
  {
    heading: "Nothing on the page is invented",
    body: "Every service, price and timing comes from you. Where your own material contradicts itself I ask instead of guessing, and anything missing stays off the page. No borrowed reviews, no invented years of experience, no stock claims about your staff.",
  },
  {
    heading: "It opens before they lose interest",
    body: "Plain HTML and CSS. No page builder, no plugins, nothing that can break on its own six months from now, and no monthly platform fee waiting for you.",
  },
  {
    heading: "The phone comes first",
    body: "Nearly everyone searching for a local business is holding one. The phone layout is designed first, and the call and WhatsApp buttons stay on screen while they read.",
  },
  {
    heading: "The files are yours",
    body: "You get the whole site and can host it anywhere. Nothing is locked to me, and you are not renting your own website back from anyone.",
  },
]

export default function Freelance() {
  const [first, second, third] = clientSites

  return (
    <main className="pb-24">
      <section className="relative overflow-hidden">
        <div className="glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-10 sm:px-8 sm:pb-32 sm:pt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
          <div>
            <h1 className="reveal font-[family-name:var(--font-display)] text-[clamp(2.75rem,7vw,5rem)] font-bold leading-[0.95] tracking-[-0.04em]">
              Get a website you actually want
            </h1>
            <p className="reveal reveal-2 mt-6 max-w-[54ch] text-base leading-relaxed text-[#A9BAB4] sm:text-lg">
              Every one drawn around the business it belongs to. Your prices, your words, your
              photos — never a template with your logo dropped in.
            </p>
            <div className="reveal reveal-3 mt-8 flex flex-wrap items-center gap-5">
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#B08D3F] px-6 py-3 text-sm font-medium text-[#0D1719] transition-colors hover:bg-[#C6A04B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B08D3F]"
              >
                Message me on WhatsApp
              </Link>
              <Link
                href="#work"
                className="text-sm text-[#8FA09B] underline-offset-4 transition-colors hover:text-[#ECEFEA] hover:underline"
              >
                See the work
              </Link>
            </div>
          </div>

          {/* The work itself is the hero image: three of the five, stacked. */}
          <div className="reveal reveal-2 relative hidden aspect-[4/3] lg:block" aria-hidden="true">
            <div className="absolute left-0 top-0 w-[72%] -rotate-2 overflow-hidden rounded-sm shadow-2xl shadow-black/50 ring-1 ring-[#223231]">
              <Image src={third.image} alt="" width={640} height={400} sizes="40vw" />
            </div>
            <div className="absolute right-0 top-[18%] w-[70%] rotate-1 overflow-hidden rounded-sm shadow-2xl shadow-black/60 ring-1 ring-[#223231]">
              <Image src={second.image} alt="" width={640} height={400} sizes="40vw" />
            </div>
            <div className="absolute bottom-0 left-[8%] w-[76%] -rotate-1 overflow-hidden rounded-sm shadow-2xl shadow-black/70 ring-1 ring-[#2A3B39]">
              <Image src={first.image} alt="" width={720} height={450} sizes="44vw" priority />
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="scroll-mt-8">
        <h2 className="sr-only">The work</h2>
        <div className="space-y-28 sm:space-y-40">
          {clientSites.map((site, i) => (
            <article key={site.client} className="rise">
              <div
                className={`mx-auto grid max-w-6xl items-center gap-8 px-5 sm:px-8 lg:gap-14 ${
                  i % 2 === 1
                    ? "lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]"
                    : "lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)]"
                }`}
              >
                <Link
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block overflow-hidden rounded-sm bg-[#101C1E] ring-1 ring-[#1D2B2C] transition-shadow duration-500 hover:shadow-2xl hover:shadow-black/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B08D3F] ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={site.image}
                    alt={`The home page of ${site.client}`}
                    width={1280}
                    height={800}
                    sizes="(min-width: 1024px) 760px, 100vw"
                    className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </Link>

                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <h3 className="font-[family-name:var(--font-display)] text-[clamp(1.6rem,3vw,2.25rem)] font-bold leading-tight tracking-[-0.03em]">
                    {site.client}
                  </h3>
                  <p className="mt-5 leading-relaxed text-[#A9BAB4]">{site.note}</p>
                  <Link
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block border-b border-[#3C4F4C] pb-1 text-sm text-[#8FA09B] transition-colors hover:border-[#B08D3F] hover:text-[#ECEFEA]"
                  >
                    {site.domain}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mt-32 overflow-hidden border-y border-[#1D2B2C] bg-[#101C1E] py-20 sm:mt-44 sm:py-28">
        <div className="glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <p className="relative mx-auto max-w-5xl px-5 text-center font-[family-name:var(--font-display)] text-[clamp(1.6rem,3.6vw,2.9rem)] font-bold leading-[1.15] tracking-[-0.03em] sm:px-8">
          Every client got their own page. Not one of them is the same layout with a different
          logo dropped on top.
        </p>
      </section>

      <section id="process" className="rise mx-auto mt-28 max-w-6xl scroll-mt-8 px-5 sm:mt-36 sm:px-8">
        <h2 className="max-w-[22ch] font-[family-name:var(--font-display)] text-[clamp(1.9rem,4vw,2.75rem)] font-bold leading-tight tracking-[-0.025em]">
          What happens after you message me
        </h2>
        <ol className="mt-12 space-y-10 border-t border-[#1D2B2C] pt-10">
          {steps.map((step) => (
            <li key={step.title}>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[70ch] text-sm leading-relaxed text-[#A9BAB4]">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="how" className="rise mx-auto mt-28 max-w-6xl scroll-mt-8 px-5 sm:mt-36 sm:px-8">
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.9rem,4vw,2.75rem)] font-bold leading-tight tracking-[-0.025em]">
          What you get
        </h2>
        <div className="mt-10 grid gap-10 border-t border-[#1D2B2C] pt-10 sm:grid-cols-2 sm:gap-x-14">
          {included.map((item) => (
            <div key={item.heading}>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight">
                {item.heading}
              </h3>
              <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-[#A9BAB4]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto mt-28 max-w-6xl scroll-mt-8 px-5 sm:mt-36 sm:px-8">
        <div className="rounded-sm bg-[#101C1E] px-6 py-12 ring-1 ring-[#1D2B2C] sm:px-12 sm:py-16">
          <h2 className="max-w-[20ch] font-[family-name:var(--font-display)] text-[clamp(1.9rem,4vw,2.75rem)] font-bold leading-tight tracking-[-0.025em]">
            Tell me about your business
          </h2>
          <p className="mt-5 max-w-[58ch] leading-relaxed text-[#A9BAB4]">
            What you do, what you charge and where you are. That is enough to start, and I will
            tell you honestly whether a page is worth it for you.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#B08D3F] px-6 py-3 text-sm font-medium text-[#0D1719] transition-colors hover:bg-[#C6A04B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B08D3F]"
            >
              Message me on WhatsApp
            </Link>
            <Link
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-[#8FA09B] underline underline-offset-4 transition-colors hover:text-[#ECEFEA]"
            >
              {CONTACT_EMAIL}
            </Link>
          </div>
        </div>
      </section>

      {/* Same pattern as the client sites: the action never scrolls away on a phone. */}
      <Link
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-[#B08D3F] px-5 py-3 text-sm font-medium text-[#0D1719] shadow-lg shadow-black/40 transition-colors hover:bg-[#C6A04B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B08D3F] sm:hidden"
      >
        WhatsApp
      </Link>
    </main>
  )
}
