export type ClientSite = {
  client: string
  url: string
  /** Link text. The bare domain is more use to a reader than "visit site". */
  domain: string
  image: string
  note: string
}

/**
 * Live client work. Every line is observable on the site itself — no traffic,
 * booking or revenue claims, because none of that has been measured.
 */
export const clientSites: ClientSite[] = [
  {
    client: "Sol Spa Forum",
    url: "https://solspaforum.com/",
    domain: "solspaforum.com",
    image: "/freelance/solspa.png",
    note: "One room, six treatments and a jacuzzi. The whole page is built around a single quiet hour, and calling to book is the only thing there is to do on it.",
  },
  {
    client: "Splendora Wellness Spa",
    url: "https://splendorawellnessspa.com/",
    domain: "splendorawellnessspa.com",
    image: "/freelance/splendora.png",
    note: "A gallery, an FAQ and an enquiry form, with the WhatsApp and call buttons fixed on screen the whole way down, so booking is one tap from anywhere.",
  },
  {
    client: "Spararaa",
    url: "https://spararaa.com/",
    domain: "spararaa.com",
    image: "/freelance/spararaa.png",
    note: "The price leads: from ₹2,500 for sixty minutes, stated before anything else. Someone who already knows the tariff is the one who picks up the phone.",
  },
  {
    client: "La Bella Wellness Spa",
    url: "https://labellawellnessspa.in/la-bella-v2/spa/",
    domain: "labellawellnessspa.in",
    image: "/freelance/labella.png",
    note: "A rotating hero over treatments, experience and directions, written to reach three separate neighbourhoods at once without looking like three different pages.",
  },
  {
    client: "Levia Luxury Spa",
    url: "https://levialuxuryspa.com/spa/",
    domain: "levialuxuryspa.com",
    image: "/freelance/levia.png",
    note: "A split screen, and a short guide that asks how you feel when you walk in and points you at the treatment that suits it.",
  },
]

export const WHATSAPP_URL = "https://wa.me/917386802745"
export const CONTACT_EMAIL = "dhanushsaireddy8@gmail.com"
