/**
 * Editorial policy page content for /editorial-policy/.
 * Explains how content and service listings are created and maintained.
 */
export const editorialPolicyPage = {
  seo: {
    title: "Editorial Policy | ExpatCopilot",
    description:
      "Learn how ExpatCopilot creates and updates guides, service listings, and relocation content for expats moving to the Netherlands.",
  },
  hero: {
    title: "Editorial Policy",
    subtitle:
      "How ExpatCopilot approaches guides, service listings, and relocation content for expats moving to the Netherlands.",
  },
  sections: [
    {
      id: "approach",
      heading: "Our Editorial Approach",
      paragraphs: [
        "The goal is to make relocation clearer and more practical. Content is designed to help you understand systems, steps, and choices—so you can act with more confidence and fewer surprises.",
        "We aim to balance official-source awareness with practical usability: we point to government and authority sources where rules and processes matter, and we add context so the information is easier to use in real relocation situations.",
      ],
    },
    {
      id: "what-we-publish",
      heading: "What We Publish",
      items: [
        "Relocation guides — step-by-step content on visas, registration, banking, insurance, housing, and settling in.",
        "City pages — practical information on major Dutch cities and where you might want to live.",
        "Tools — planning tools for timelines, checklists, document readiness, and cost estimates.",
        "Concepts and terminology — explanations of terms and processes you will meet during a move.",
        "Services directories — structured category pages that help you compare types of providers (e.g. banks, health insurance, housing platforms, relocation support).",
        "Provider comparison pages — category-level comparison and, where available, shortlists or featured examples.",
        "Future provider profiles or reviews — if we add individual provider profiles or review-style content, the same editorial and transparency standards will apply.",
      ],
    },
    {
      id: "how-created",
      heading: "How Content Is Created",
      paragraphs: [
        "Pages are structured around real relocation tasks and user needs. We use official sources where possible for rules and process information, and we add practical context to make that information easier to act on.",
        "Some content is data-driven and updated via structured datasets (e.g. directories built from official or trusted public-support lists). Other content is written and updated editorially. We do not guarantee that every detail is current at all times; official systems, requirements, and provider details can change.",
      ],
    },
    {
      id: "service-listings",
      heading: "How We Approach Service Listings",
      paragraphs: [
        "Services are grouped into categories so you can compare options by type (e.g. banks, health insurance, relocation agencies). Some directories are built from official or trusted public-support ecosystems (e.g. IND recognised sponsors, RVO facilitators). Other provider pages may be based on structured editorial research and commonly used expat-facing services.",
        "Inclusion in a category does not automatically mean we endorse a provider. We aim to help you see the landscape and make your own choice. You should always verify availability, fees, and suitability directly with the provider.",
      ],
    },
    {
      id: "updates",
      heading: "How We Keep Content Up to Date",
      paragraphs: [
        "We review and update content over time, but we cannot guarantee that every page reflects the latest rules, prices, or provider details at every moment. Official systems and requirements change; providers change their offers.",
        "You should always verify important details directly before acting. If you spot outdated or incorrect information, we encourage you to contact us so we can correct it.",
      ],
    },
    {
      id: "corrections",
      heading: "Corrections and Updates",
      paragraphs: [
        "Corrections are welcome. You can contact us to report outdated or incorrect information. We will correct serious factual errors as quickly as we can.",
      ],
      link: { label: "Contact us", href: "/contact/" },
    },
    {
      id: "what-we-dont-do",
      heading: "What This Policy Does Not Mean",
      paragraphs: [
        "We do not guarantee outcomes (e.g. visa approval, rental success, or provider quality). We do not replace legal, tax, immigration, medical, or financial advice. We cannot verify every provider experience for every user, and not every listed service is right for every person. Use the site as a practical guide and a starting point for your own research and decisions.",
      ],
    },
  ],
  relatedLinks: [
    { label: "About", href: "/about/" },
    { label: "How we rank services", href: "/how-we-rank-services/" },
    { label: "Affiliate disclosure", href: "/affiliate-disclosure/" },
    { label: "Disclaimer", href: "/disclaimer/" },
    { label: "Contact", href: "/contact/" },
  ],
} as const;
