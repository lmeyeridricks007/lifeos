/**
 * Sources page content for /sources/.
 * Official and trusted sources used across the site. Update groups/items when adding new source types.
 */
export const sourcesPage = {
  seo: {
    title: "Sources | ExpatCopilot",
    description:
      "Browse the official and trusted sources ExpatCopilot uses to build relocation guides, service directories, and practical expat content for the Netherlands.",
  },
  hero: {
    title: "Sources",
    subtitle:
      "The official and trusted sources used to build relocation content across ExpatCopilot.",
  },
  sections: [
    {
      id: "why",
      heading: "Why Sources Matter",
      paragraphs: [
        "Relocation information is often fragmented across many sites. You should know where important facts come from. Official and trusted source awareness is part of our editorial approach: we aim to ground rules and procedures in credible sources and to make it clear when we are adding practical framing or comparison.",
      ],
    },
    {
      id: "categories",
      heading: "The Types of Sources We Use",
      groups: [
        {
          title: "Dutch government sources",
          description: "National and municipal government sites for rules, forms, and procedures.",
        },
        {
          title: "Public institutions and regulators",
          description: "Bodies that oversee immigration, housing, healthcare, and business (e.g. IND, Huurcommissie, Zorginstituut).",
        },
        {
          title: "Official expat and international centres",
          description: "Expat desks, international centres, and official support bodies that publish guidance for newcomers.",
        },
        {
          title: "Business and entrepreneurship support",
          description: "RVO, Business.gov.nl, and similar bodies for startup and business-related relocation content.",
        },
        {
          title: "Provider and service source pages",
          description: "Official provider websites and trusted partner ecosystems when we reference specific services.",
        },
        {
          title: "Rights and support organisations",
          description: "Public-support or rights-support organisations (e.g. Huurcommissie for rental disputes) where relevant to relocation.",
        },
      ],
    },
    {
      id: "core",
      heading: "Key Netherlands Sources",
      intro: "Examples of sources we use (links may change; verify on the authority’s site):",
      sources: [
        {
          name: "Government.nl",
          href: "https://www.government.nl/",
          description: "Central government information and topics including immigration, housing, and taxes.",
        },
        {
          name: "IND (Immigration and Naturalisation Service)",
          href: "https://ind.nl/",
          description: "Official immigration authority: visas, residence permits, and recognised sponsor registers.",
        },
        {
          name: "Netherlands Worldwide",
          href: "https://www.netherlandsworldwide.nl/",
          description: "Government-backed information for people living and working abroad and for those coming to the Netherlands.",
        },
        {
          name: "Huurcommissie",
          href: "https://www.huurcommissie.nl/",
          description: "Rental disputes, rent assessment, and tenant rights in the regulated sector.",
        },
        {
          name: "DigiD",
          href: "https://www.digid.nl/",
          description: "Official government login for many Dutch government and healthcare services.",
        },
        {
          name: "Zorginstituut Nederland",
          href: "https://www.zorginstituutnederland.nl/",
          description: "Healthcare institute; information on basic health insurance and care standards.",
        },
        {
          name: "Business.gov.nl",
          href: "https://business.gov.nl/",
          description: "Government portal for business and self-employment in the Netherlands.",
        },
        {
          name: "RVO (Netherlands Enterprise Agency)",
          href: "https://www.rvo.nl/",
          description: "Startup visa facilitators, innovation, and business support programmes.",
        },
        {
          name: "City and expat centres",
          description: "Municipality websites and official international or expat centres (e.g. Amsterdam Expatcenter, The Hague International Centre) for local registration and settlement information.",
        },
      ],
    },
    {
      id: "how-used",
      heading: "How Sources Are Used on the Site",
      paragraphs: [
        "Rules and procedural facts ideally come from official sources; we link to them where appropriate. Provider and service details may come from provider pages and trusted partner ecosystems. Practical framing and comparisons are editorial. You should always verify important details directly with the authority or provider before acting.",
      ],
    },
    {
      id: "changes",
      heading: "Source Availability and Updates",
      paragraphs: [
        "Government and institutional websites, forms, and requirements can change. We update source links when we revise content, but we cannot guarantee that every link remains valid. If you notice a broken or outdated reference, please contact us so we can correct it.",
      ],
    },
  ],
  relatedLinks: [
    { label: "Methodology", href: "/methodology/" },
    { label: "Editorial policy", href: "/editorial-policy/" },
    { label: "Contact", href: "/contact/" },
  ],
} as const;
