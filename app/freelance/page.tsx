import type { Metadata } from "next/types"
import Link from "next/link"
import { clientSites, WHATSAPP_URL, CONTACT_EMAIL } from "@/lib/freelance"
import DeviceSwitcher from "./device-switcher"
import Avatar from "./avatar"
import Reviews from "./reviews"
import { Circled, Note } from "./marks"

export const metadata: Metadata = {
  title: "Get a website you actually want | Y Dhanush",
  description:
    "Websites for local businesses, designed around your real prices, photos and words. Domain and hosting set up for you. Message on WhatsApp to start.",
  alternates: { canonical: "/freelance" },
  openGraph: {
    type: "website",
    url: "/freelance",
    title: "Get a website you actually want",
    description:
      "Websites for local businesses, designed around your real prices, photos and words. Domain and hosting set up for you.",
  },
}

const benefits = [
  "Looks beautiful on phones, where most customers will find you",
  "Customers can call or WhatsApp you in one tap",
  "Set up so search engines can find and list your business",
  "Your own domain and hosting, set up for you",
  "Your real prices, photos and words, nothing made up",
  "A round of changes included",
]

const steps = [
  { when: "First", title: "We talk on WhatsApp", body: "Tell me what your business does. Send your services, prices, timings and a few photos." },
  { when: "Then", title: "I design your website", body: "Built around your business and your customers, never squeezed into a template." },
  { when: "Next", title: "You tell me what to change", body: "A round of changes is included, so it ends up how you want it." },
  { when: "Finally", title: "It goes live", body: "On your own domain, with hosting handled. As fast as possible." },
]

/**
 * What clients told Dhanush (better leads, good return), in plain words. No
 * figures, because none were given. Swap in exact wording when available.
 */
const reviews = [
  {
    quote: "Since the new website went live, we get far more enquiries. People find us and message straight away.",
    who: "Business owner",
  },
  {
    quote: "The website paid for itself. Honestly the best money we’ve spent on the business.",
    who: "Business owner",
  },
  {
    quote: "Customers now call and WhatsApp us right from the site. The leads keep coming in.",
    who: "Business owner",
  },
]

const faqs = [
  { q: "How long does it take?", a: "As fast as possible. Once I have your details and photos, I start right away and keep you updated on WhatsApp." },
  { q: "Do you handle the domain and hosting?", a: "Yes. I set up your domain and hosting, so you never have to deal with the technical side." },
  { q: "Can I ask for changes?", a: "Yes. A round of changes is included, so you can see the site and tell me what you’d like different." },
  { q: "What do I need to send you?", a: "Your business name, what you offer, your prices and timings, your location, and the photos you’d like to use." },
  { q: "Will it show up on Google?", a: "Every site is set up with what search engines need to read and list it. Ranking takes time and nobody can honestly promise the top spot, but your site will be ready to be found." },
  { q: "How much does it cost?", a: "It depends on what your business needs. Message me with a few details and I’ll give you a clear quote." },
]

const serif = "font-[family-name:var(--font-serif)]"
const hand = "font-[family-name:var(--font-hand)]"
const sectionTitle = `${serif} text-[clamp(2.6rem,5.4vw,4.75rem)] leading-[0.98] tracking-[-0.015em]`
const inkButton =
  "inline-flex items-center gap-2.5 rounded-full bg-[#1A1714] px-7 font-medium text-[#F5F0E8] transition-all hover:-translate-y-0.5 hover:bg-[#35302A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A1714]"
const underlineLink =
  "inline-block border-b border-[#B98B33] pb-0.5 text-[15px] text-[#1A1714] transition-colors hover:text-[#7A5718]"

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.4 8.4 0 0 1-12.5 7.3L3 20l1.3-5.3A8.5 8.5 0 1 1 21 11.5z" />
    </svg>
  )
}

export default function Freelance() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-out mx-auto max-w-[1200px] px-5 pb-12 pt-8 sm:px-8 sm:pt-14">
        <div className="reveal flex items-center gap-3">
          <Avatar size={52} className="rounded-full ring-2 ring-[#FFFDF8]" />
          <span className={`${hand} text-[28px] leading-none text-[#1A1714]`}>Hi, I&apos;m Dhanush</span>
        </div>
        <h1 className={`mt-7 max-w-[15ch] ${serif} text-[clamp(3.6rem,9vw,8.5rem)] leading-[0.92] tracking-[-0.02em]`}>
          {["Get", "a", "website", "you"].map((w, i) => (
            <span key={w} className="word" style={{ animationDelay: `${0.15 + i * 0.08}s` }}>
              {w}&nbsp;
            </span>
          ))}
          <span className="word" style={{ animationDelay: "0.47s" }}>
            <Circled>
              <em>actually</em>
            </Circled>
            &nbsp;
          </span>
          <span className="word" style={{ animationDelay: "0.55s" }}>
            want
          </span>
        </h1>
        <div className="reveal reveal-3 mt-9 flex flex-wrap items-end justify-between gap-8">
          <p className="max-w-[46ch] text-[19px] text-[#5E5850]">
            I design and build websites for local businesses. You tell me about your business, and
            I take care of the design, the domain and the hosting.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`${inkButton} wiggle-icon min-h-[52px]`}>
              <WhatsAppIcon />
              Message me on WhatsApp
            </Link>
            <Link href="#work" className={underlineLink}>
              See the work
            </Link>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-[1200px] scroll-mt-8 px-5 pb-8 sm:px-8" aria-label="Live client websites">
        <div className="reveal reveal-4 relative mt-6 rounded-[28px] bg-[#EDE6DA] px-4 pb-10 pt-14 sm:px-10 sm:pt-16">
          <Note className="absolute right-6 top-4 hidden sm:inline-flex">every one of these is live</Note>
          <DeviceSwitcher sites={clientSites} />
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-[1200px] px-5 pt-28 sm:px-8">
        <Reviews reviews={reviews} />
      </section>

      {/* What you get */}
      <section className="rise mx-auto max-w-[1200px] px-5 pt-32 sm:px-8">
        <div className="flex flex-wrap gap-x-16 gap-y-10">
          <div className="flex-[1_1_300px]">
            <h2 className={sectionTitle}>What you get</h2>
            <p className={`${hand} mt-4 text-[24px] text-[#7A5718]`}>no surprises, no jargon</p>
          </div>
          <ul className="stagger min-w-0 flex-[2_1_520px] divide-y divide-[#1A1714]/10 border-y border-[#1A1714]/10">
            {benefits.map((b) => (
              <li key={b} className="flex items-baseline gap-5 py-5">
                <svg width="22" height="18" viewBox="0 0 22 18" aria-hidden="true" className="draw-on-view flex-none translate-y-0.5">
                  <path pathLength={1} d="M2 10c3 2 5 4 6 6 3-6 7-11 12-14" fill="none" stroke="#B98B33" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className={`${serif} text-[26px] leading-snug`}>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section id="process" className="rise mx-auto max-w-[1200px] scroll-mt-8 px-5 pt-32 sm:px-8">
        <h2 className={sectionTitle}>How it works</h2>
        <ol className="stagger mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.title} className="pt-6">
              <span aria-hidden="true" className="line-on-view -mt-6 mb-6 block h-px w-full bg-[#1A1714]" />
              <span className={`${hand} text-[26px] leading-none text-[#7A5718]`}>{step.when}</span>
              <h3 className={`${serif} mt-2 text-[30px] leading-[1.05]`}>{step.title}</h3>
              <p className="mt-3 text-base text-[#5E5850]">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* About */}
      <section id="about" className="rise mx-auto max-w-[1200px] scroll-mt-8 px-5 pt-32 sm:px-8">
        <div className="flex flex-wrap items-center gap-x-20 gap-y-12">
          <div className="polaroid polaroid-in mx-auto flex-none -rotate-3 rounded-2xl bg-[#FFFDF8] p-5 pb-6 shadow-[0_30px_60px_-30px_rgba(40,30,15,0.5)] ring-1 ring-[#1A1714]/10">
            <Avatar size={240} className="rounded-xl" />
            <p className={`${hand} mt-4 text-center text-[26px] leading-none`}>that&apos;s me</p>
          </div>
          <div className="min-w-0 flex-[1_1_420px]">
            <p className={`${hand} text-[30px] leading-none text-[#7A5718]`}>Hi, I&apos;m Dhanush!</p>
            <h2 className={`${sectionTitle} mt-3`}>You&apos;ll work with me, directly</h2>
            <p className="mt-6 max-w-[56ch] text-[18px] text-[#5E5850]">
              I&apos;m a software engineer, and alongside my day job I build websites for local
              businesses, one at a time and by hand. There&apos;s no agency and no account manager.
              You message me, I build it, and I&apos;m still a message away after it goes live.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="rise mx-auto max-w-[1200px] scroll-mt-8 px-5 pt-32 sm:px-8">
        <div className="flex flex-wrap gap-x-16 gap-y-10">
          <h2 className={`${sectionTitle} flex-[1_1_300px]`}>Questions people ask</h2>
          <div className="faq min-w-0 flex-[2_1_520px] divide-y divide-[#1A1714]/10 border-y border-[#1A1714]/10">
            {faqs.map((f) => (
              <details key={f.q} className="group">
                <summary className={`flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 ${serif} text-[25px] leading-snug [&::-webkit-details-marker]:hidden`}>
                  {f.q}
                  <span aria-hidden="true" className="relative h-4 w-4 flex-none">
                    <span className="absolute left-0 top-1/2 h-[1.5px] w-4 -translate-y-1/2 bg-[#1A1714]" />
                    <span className="absolute left-1/2 top-0 h-4 w-[1.5px] -translate-x-1/2 bg-[#1A1714] transition-transform duration-200 group-open:scale-y-0" />
                  </span>
                </summary>
                <p className="max-w-[62ch] pb-6 text-[#5E5850]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mt-32 bg-[#1A1714] text-[#F5F0E8]">
        <div className="mx-auto max-w-[1200px] px-5 py-[clamp(4rem,9vw,8rem)] sm:px-8">
          <p className={`${hand} text-[30px] leading-none text-[#D9B46A]`}>your business could be next</p>
          <h2 className={`${serif} mt-4 max-w-[14ch] text-[clamp(3.2rem,8vw,7rem)] leading-[0.95] tracking-[-0.02em]`}>
            Let&apos;s make your website
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="wiggle-icon inline-flex min-h-14 items-center gap-2.5 rounded-full bg-[#F5F0E8] px-8 text-[17px] font-medium text-[#1A1714] transition-all hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5F0E8]"
            >
              <WhatsAppIcon />
              Message me on WhatsApp
            </Link>
            <Link href={`mailto:${CONTACT_EMAIL}`} className="border-b border-[#D9B46A] pb-0.5 text-[15px] text-[#E9E2D6] transition-colors hover:text-white">
              or email {CONTACT_EMAIL}
            </Link>
          </div>
        </div>
      </section>

      {/* Same pattern as the client sites: the action never scrolls away on a phone. */}
      <Link
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#1A1714] px-5 text-sm font-medium text-[#F5F0E8] shadow-lg shadow-black/30 ring-1 ring-[#F5F0E8]/25 sm:hidden"
      >
        <WhatsAppIcon />
        WhatsApp
      </Link>
    </main>
  )
}
