/**
 * How this site works page for /how-this-site-works/.
 * Plain-language guide to the platform and how to use it.
 */
export const howThisSiteWorksPage = {
  seo: {
    title: "How ExpatCopilot Works | Guides, Tools, Cities and Services for Expats",
    description:
      "Learn how ExpatCopilot works, including how to use relocation guides, city pages, tools, concepts, and services to plan a move to the Netherlands.",
  },
  hero: {
    title: "How This Site Works",
    subtitle:
      "A quick guide to using ExpatCopilot to plan and manage a move to the Netherlands.",
  },
  sections: [
    {
      id: "what",
      heading: "What ExpatCopilot Is",
      paragraphs: [
        "ExpatCopilot is a relocation knowledge platform built for expats moving to the Netherlands. It combines practical guides, city pages, tools, concepts, and services in one place—so you can understand the steps, compare options, and make better decisions without jumping between dozens of sites.",
      ],
    },
    {
      id: "sections",
      heading: "The Main Parts of the Site",
      cards: [
        {
          title: "Guides",
          body: "Step-by-step content on visas, registration, banking, insurance, housing, and settling in. Use them when you need to know what to do, in what order, and what to prepare.",
        },
        {
          title: "Cities",
          body: "Practical pages on major Dutch cities—admin, costs, and who they suit. Use them when you are choosing where to live or planning your first steps in a specific city.",
        },
        {
          title: "Tools",
          body: "Planning tools, checklists, and estimators (e.g. arrival planner, document readiness). Use them to organise your timeline and stay on track.",
        },
        {
          title: "Services",
          body: "Structured directories of provider categories (banks, insurers, relocation support, housing platforms, etc.). Use them to compare options and see what is available.",
        },
        {
          title: "Concepts and terminology",
          body: "Explanations of Dutch systems and terms you will meet (e.g. BSN, DigiD, gemeente). Use them when something is unfamiliar or you need a quick reference.",
        },
        {
          title: "Trust and legal pages",
          body: "Editorial policy, methodology, sources, and legal pages (privacy, terms, disclaimer). Use them to understand how we build content and how we handle data and commercial relationships.",
        },
      ],
    },
    {
      id: "step-by-step",
      heading: "A Simple Way to Use the Platform",
      steps: [
        "Start with the guide that matches your situation (e.g. after arriving, opening a bank account, health insurance).",
        "Explore city pages if you are choosing where to live or want local admin and cost context.",
        "Use tools to estimate timelines, check document readiness, or work through a checklist.",
        "Use services pages to understand provider categories and compare options before contacting anyone.",
        "Use concepts pages when you run into Dutch terms or systems you do not yet know.",
        "Check official sources and providers directly before taking action on anything critical.",
      ],
    },
    {
      id: "services-directory",
      heading: "How to Use the Services Directory",
      paragraphs: [
        "Services pages help you compare provider categories—they are not a list of endorsements. Not every listed provider is right for every user. Some directories are built from official registers; others are curated. Use service pages to support your decisions, not to replace your own due diligence.",
      ],
    },
    {
      id: "what-not",
      heading: "What ExpatCopilot Does Not Replace",
      paragraphs: [
        "ExpatCopilot is not legal, tax, or immigration advice. It does not guarantee outcomes (e.g. visa approval or rental success). It is not an official government portal. Use it as a practical guide and a starting point; for binding or high-stakes decisions, confirm with the relevant authority or professional.",
      ],
    },
  ],
  startHereLinks: [
    { label: "Netherlands hub", href: "/netherlands/" },
    { label: "Services", href: "/netherlands/services/" },
    { label: "Cities", href: "/netherlands/cities/" },
    { label: "Tools", href: "/netherlands/tools/" },
    { label: "After arriving", href: "/netherlands/after-arriving-netherlands/" },
    { label: "About", href: "/about/" },
    { label: "Contact", href: "/contact/" },
  ],
} as const;
