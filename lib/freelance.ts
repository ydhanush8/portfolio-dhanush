export type ClientSite = {
  client: string
  url: string
  /** Link text. The bare domain is more use to a reader than "visit site". */
  domain: string
  image: string
  /** Phone-width capture of the same page, shown in the hero's phone frame. */
  mobile: string
}

/** Live client work, shown in the laptop and phone switcher. */
export const clientSites: ClientSite[] = [
  {
    client: "Sol Spa Forum",
    url: "https://solspaforum.com/",
    domain: "solspaforum.com",
    image: "/freelance/solspa.png",
    mobile: "/freelance/solspa-mobile.png",
  },
  {
    client: "Spararaa",
    url: "https://spararaa.com/",
    domain: "spararaa.com",
    image: "/freelance/spararaa.png",
    mobile: "/freelance/spararaa-mobile.png",
  },
  {
    client: "La Bella Wellness Spa",
    url: "https://labellawellnessspa.in/la-bella-v2/spa/",
    domain: "labellawellnessspa.in",
    image: "/freelance/labella.png",
    mobile: "/freelance/labella-mobile.png",
  },
  {
    client: "Levia Luxury Spa",
    url: "https://levialuxuryspa.com/spa/",
    domain: "levialuxuryspa.com",
    image: "/freelance/levia.png",
    mobile: "/freelance/levia-mobile.png",
  },
  {
    client: "Splendora Wellness Spa",
    url: "https://splendorawellnessspa.com/",
    domain: "splendorawellnessspa.com",
    image: "/freelance/splendora.png",
    mobile: "/freelance/splendora-mobile.png",
  },
]

export const WHATSAPP_URL = "https://wa.me/917386802745"
export const CONTACT_EMAIL = "dhanushsaireddy8@gmail.com"
