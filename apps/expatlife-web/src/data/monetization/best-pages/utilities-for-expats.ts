import type { BestProvidersPageContent } from "@/src/lib/monetization/bestProvidersContent";

const LOGOS = "/images/affiliates/logos";

export const utilitiesForExpatsPage: BestProvidersPageContent = {
  slug: "utilities-for-expats",
  path: "/netherlands/best/utilities-for-expats/",
  seo: {
    title: "Mobile & internet options for expats in the Netherlands",
    description:
      "Structured comparison of Dutch mobile and home internet entry points: SIM-only, prepaid, major networks, and broadband—what to match to your arrival timeline.",
    keywords: [
      "best mobile plan netherlands expat",
      "dutch sim card expat",
      "internet netherlands expat",
      "kpn vs odido expat",
    ],
  },
  hero: {
    eyebrow: "Curated comparison",
    title: "Mobile and internet options expats compare",
    subtitle:
      "Separate what you need in week one (a Dutch number, data) from what you set up after you have an address (fixed broadband). Indicative pricing only.",
    image: {
      src: "/images/heroes/netherlands-tools-hub-hero.png",
      alt: "Digital connectivity and planning tools for life in the Netherlands",
      priority: false,
    },
  },
  methodology: {
    title: "How we evaluate connectivity options",
    intro:
      "We split mobile from home internet. Mobile scores on speed to a local number, contract flexibility, and English-friendly purchase flows. Home internet scores on availability at your address—not every brand serves every building.",
    howWeEvaluate: [
      "Arrival usefulness: can you complete signup with your current ID and address situation?",
      "English: website and support availability (indicative).",
      "Total cost: headline promo vs 12-month average (always read contract terms).",
      "Coverage: mobile network footprint; fibre/cable availability for home internet.",
    ],
    goodFitTitle: "What makes a good fit",
    goodFit: [
      "You need SMS/2FA for Dutch banks and portals early—prioritise a reachable Dutch mobile number.",
      "You work remotely: after move-in, benchmark upload speed on fixed broadband, not mobile alone.",
      "You travel often: check EU roaming footnotes on discount plans—they change with fair-use rules.",
    ],
  },
  shortlist: {
    title: "Quick shortlist",
    subtitle: "Mix of budget SIM brands and flagship networks; confirm address eligibility for Ziggo or KPN fibre separately.",
  },
  comparison: {
    title: "Comparison at a glance",
    subtitle: "Promotions are time-limited—verify price and contract length on each site.",
  },
  detailedCardsTitle: "Provider notes",
  faq: [
    {
      q: "Should I buy mobile before I register?",
      a: "Often yes—many people order a SIM or eSIM online early to receive banking and government SMS. You still need to meet each provider’s identification rules.",
    },
    {
      q: "Is Ziggo available at my apartment?",
      a: "Cable/fibre availability is address-specific. Use the provider’s postcode check before you assume a bundle will work.",
    },
    {
      q: "Are budget brands worse?",
      a: "Many use the same underlying networks as premium brands. Differences are usually in shops, priority support, and promotional pricing mechanics.",
    },
    {
      q: "Does this page replace ACM or provider advice?",
      a: "No. It’s a structured starting point. For disputes and consumer rights, use official Dutch resources (e.g. ACM).",
    },
  ],
  disclosure:
    "Some links may be partner links. Offers change frequently—confirm details on provider sites.",
  affiliateNote: "Partner tracking may be wired later; links are direct today unless noted.",
  relatedLinks: [
    { label: "Mobile & connectivity hub", href: "/netherlands/services/mobile-connectivity/" },
    { label: "After arriving guide", href: "/netherlands/after-arriving-netherlands/" },
    { label: "Housing hub", href: "/netherlands/housing/" },
  ],
  rows: [
    {
      id: "simyo",
      name: "Simyo",
      logo: { src: `${LOGOS}/simyo.svg`, alt: "Simyo" },
      bestFor: "Fast SIM-only on KPN network",
      englishSupport: "Website EN available",
      onboardingEase: "Simple online",
      priceHint: "~€7–25/mo typical",
      notes: "Good for Dutch number + moderate data",
      ctaLabel: "Visit Simyo",
      ctaHref: "https://www.simyo.nl/",
      detailDescription:
        "Often chosen when the goal is a straightforward Dutch mobile subscription without visiting a shop.",
      tags: ["SIM-only", "KPN network"],
    },
    {
      id: "lebara",
      name: "Lebara",
      logo: { src: `${LOGOS}/lebara.svg`, alt: "Lebara" },
      bestFor: "Prepaid flexibility + intl bundles",
      englishSupport: "English-oriented",
      onboardingEase: "Online",
      priceHint: "~€5–20/mo entry",
      notes: "Check roaming footnotes",
      ctaLabel: "Visit Lebara",
      ctaHref: "https://www.lebara.nl/",
      detailDescription:
        "Useful when you want prepaid control or bundles that include international minutes.",
      tags: ["Prepaid", "Internationals"],
    },
    {
      id: "kpn",
      name: "KPN",
      logo: { src: "https://www.google.com/s2/favicons?domain=www.kpn.com&sz=128", alt: "KPN" },
      bestFor: "Flagship network + home fibre option",
      englishSupport: "Consumer EN pages",
      onboardingEase: "Retail + online",
      priceHint: "Mobile mid–upper; fibre varies",
      notes: "Postcode check for fixed line",
      ctaLabel: "Visit KPN",
      ctaHref: "https://www.kpn.com/",
      detailDescription:
        "Strong when you want one brand to cover mobile now and potentially fibre after you have an address.",
      tags: ["MNO", "Fibre"],
    },
    {
      id: "odido",
      name: "Odido",
      logo: { src: "https://www.google.com/s2/favicons?domain=www.odido.nl&sz=128", alt: "Odido" },
      bestFor: "Data-heavy SIM-only deals",
      englishSupport: "English site areas",
      onboardingEase: "Digital-first",
      priceHint: "~€10–35/mo SIM-only",
      notes: "Former T-Mobile NL consumer brand",
      ctaLabel: "Visit Odido",
      ctaHref: "https://www.odido.nl/",
      detailDescription:
        "Frequently compared by people who want large data bundles on a major Dutch network with online signup.",
      tags: ["5G", "SIM-only"],
    },
    {
      id: "ziggo",
      name: "Ziggo",
      logo: { src: "https://www.google.com/s2/favicons?domain=www.ziggo.nl&sz=128", alt: "Ziggo" },
      bestFor: "Cable/fibre internet + TV bundles",
      englishSupport: "Limited; check site",
      onboardingEase: "Address-gated signup",
      priceHint: "Promo-dependent",
      notes: "Must verify building coverage",
      ctaLabel: "Visit Ziggo",
      ctaHref: "https://www.ziggo.nl/",
      detailDescription:
        "Relevant after you have a Dutch address and want home broadband; not a substitute for mobile on day one.",
      tags: ["Internet", "TV"],
    },
    {
      id: "youfone",
      name: "Youfone",
      logo: { src: "https://www.google.com/s2/favicons?domain=www.youfone.nl&sz=128", alt: "Youfone" },
      bestFor: "Budget mobile and fibre offers",
      englishSupport: "Mostly Dutch",
      onboardingEase: "Online",
      priceHint: "Low headline; read terms",
      notes: "Benchmark against incumbents",
      ctaLabel: "Visit Youfone",
      ctaHref: "https://www.youfone.nl/",
      detailDescription:
        "Useful as a price benchmark; confirm contract duration and what happens after intro pricing ends.",
      tags: ["Budget", "Fibre"],
    },
  ],
};
