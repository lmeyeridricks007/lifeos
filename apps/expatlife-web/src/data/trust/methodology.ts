/**
 * Methodology page content for /methodology/.
 * Explains how the platform builds, structures, and maintains content.
 */
export const methodologyPage = {
  seo: {
    title: "Methodology | ExpatCopilot",
    description:
      "Learn how ExpatCopilot researches, structures, and maintains relocation guides, service directories, and decision-support content for expats moving to the Netherlands.",
  },
  hero: {
    title: "Methodology",
    subtitle:
      "How ExpatCopilot builds practical relocation guides, service directories, city pages, and decision-support content.",
  },
  sections: [
    {
      id: "intro",
      heading: "How We Build Relocation Content",
      paragraphs: [
        "The goal is practical usefulness, not generic publishing. The platform is built around real relocation tasks and decisions—what to do before you move, in your first weeks, and as you settle in.",
        "Content is structured to help you understand both process and choice: the steps involved, the options you have, and how they fit together. We combine official-source awareness with practical framing so you can act with more confidence.",
      ],
    },
    {
      id: "inputs",
      heading: "What Our Content Is Based On",
      intro: "We draw on:",
      cards: [
        {
          title: "Official sources",
          body: "Government and institutional sources for rules, procedures, and requirements (e.g. IND, Government.nl, municipality and authority sites).",
        },
        {
          title: "Practical decision support",
          body: "Structured comparison logic, common mistakes, costs, and next-step guidance so you can make informed choices.",
        },
        {
          title: "Structured datasets",
          body: "Where possible, provider and directory data is held in structured form so it can be updated and kept auditable.",
        },
        {
          title: "Internal linking and clustering",
          body: "Guides, city pages, tools, and services are linked so you can move between related topics without getting lost.",
        },
        {
          title: "Category comparisons",
          body: "Service categories are designed to help you compare types of providers (e.g. banks, insurers, relocation support) rather than single endorsements.",
        },
      ],
    },
    {
      id: "guides",
      heading: "How Guides Are Structured",
      paragraphs: [
        "Guides are step-based where the topic suits it: what to do, in what order, and what to prepare. We include quick facts, typical costs, common mistakes, and related services. Official-source references are linked where rules or procedures come from authorities. Guides link internally to city pages, tools, and concepts so you can go deeper when needed.",
      ],
    },
    {
      id: "directories",
      heading: "How Service Directories Are Built",
      paragraphs: [
        "Some categories are built from official registers (e.g. IND recognised sponsors, RVO startup facilitators). Others use trusted expat-centre ecosystems and public references. Some are curated editorial datasets. Categories may expand over time.",
        "Inclusion in a directory does not equal endorsement. Provider records are structured and, where possible, auditable—so we can update and correct when sources or offerings change. You should always verify suitability, pricing, and terms directly with the provider.",
      ],
    },
    {
      id: "city-pages",
      heading: "How City Pages Are Structured",
      paragraphs: [
        "City pages are designed for relocation decisions, not tourism. They combine practical admin (registration, BSN, local setup), costs, fit-by-persona, and internal links to guides and services. The aim is to help you decide where to live and what to do first once you are there.",
      ],
    },
    {
      id: "updates",
      heading: "How We Handle Updates",
      paragraphs: [
        "Information changes over time. Rules, providers, and pricing can change. We revise pages when data or sources change, but we cannot guarantee that every detail is current at every moment. You should verify critical information directly with the relevant authority or provider before acting.",
      ],
    },
    {
      id: "limits",
      heading: "Limits of the Methodology",
      paragraphs: [
        "This methodology does not guarantee outcomes. It does not promise that every listed provider fits every user. It is not a substitute for official or professional advice. Use the site as a practical guide and a starting point; always confirm important decisions with the right source.",
      ],
    },
  ],
  relatedLinks: [
    { label: "Editorial policy", href: "/editorial-policy/" },
    { label: "How we rank services", href: "/how-we-rank-services/" },
    { label: "Sources", href: "/sources/" },
    { label: "How this site works", href: "/how-this-site-works/" },
    { label: "About", href: "/about/" },
    { label: "Contact", href: "/contact/" },
    { label: "Disclaimer", href: "/disclaimer/" },
  ],
} as const;
