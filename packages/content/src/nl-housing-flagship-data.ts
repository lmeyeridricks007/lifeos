import type { LinkRegistry, NlFlagshipPillarContent } from "./types";

const linkRegistry: LinkRegistry = {
  housing_tools: { href: "/netherlands/housing/tools/", title: "Housing tools hub" },
  services_platforms: { href: "/netherlands/services/housing-platforms/", title: "Housing platforms directory" },
  services_rental: { href: "/netherlands/services/rental-agencies/", title: "Rental agencies directory" },
  municipality_registration: {
    href: "/netherlands/municipality-registration-netherlands/",
    title: "Municipality registration guide",
  },
  moving_pillar: { href: "/netherlands/moving-to-the-netherlands/", title: "Moving to the Netherlands guide" },
  arrival_planner: { href: "/netherlands/moving/tools/arrival-planner/", title: "Arrival planner" },
  cost_estimator: { href: "/netherlands/moving/tools/relocation-cost-estimator/", title: "Relocation cost estimator" },
  document_readiness: { href: "/netherlands/document-readiness-checker/", title: "Document readiness checker" },
};

export const nlHousingFlagshipContent: NlFlagshipPillarContent = {
  meta: {
    breadcrumbs: [
      { label: "Netherlands", href: "/netherlands" },
      { label: "Housing", href: "/netherlands/housing" },
    ],
    canonicalPath: "/netherlands/housing/",
    lastUpdated: new Date().toISOString().slice(0, 10),
    seo: {
      title: "Housing in the Netherlands: rent, search, and registration",
      description:
        "Plan renting in the Netherlands: competitive markets, registrable addresses, deposits, and how housing ties to your BSN and insurance.",
    },
  },
  stagesTitle: "Your rental journey in 3 stages",
  scenarios: [
    {
      id: "city-renter",
      chips: ["renting"],
      personaTitle: "Renting in a major city",
      whatMatters: ["Speed of search", "Income checks", "Registration at the gemeente"],
      readingOrder: ["services_platforms", "municipality_registration", "housing_tools"],
      startTool: { key: "cost_estimator" },
      unknownsToConfirm: ["Budget incl. deposit", "Commute radius", "Furnished vs unfurnished"],
    },
    {
      id: "family-space",
      chips: ["family"],
      personaTitle: "Need more space (partner / kids)",
      whatMatters: ["School catchments", "Larger inventory", "Earlier timeline"],
      readingOrder: ["moving_pillar", "services_rental", "document_readiness"],
      startTool: { key: "arrival_planner" },
      unknownsToConfirm: ["City vs suburbs", "Temporary housing first?", "Pet clauses"],
    },
    {
      id: "first-timer",
      chips: ["new"],
      personaTitle: "First time in the Dutch market",
      whatMatters: ["Scams & deposits", "Viewing etiquette", "Contract basics"],
      readingOrder: ["housing_tools", "services_platforms", "municipality_registration"],
      startTool: { key: "document_readiness" },
      unknownsToConfirm: ["Short-stay vs long-term", "Guarantor needs", "Service costs"],
    },
    {
      id: "unsure-housing",
      chips: ["unsure"],
      personaTitle: "Still framing the search",
      whatMatters: ["Clarify registrable address", "Rough budget", "City shortlist"],
      readingOrder: ["moving_pillar", "housing_tools", "cost_estimator"],
      startTool: { key: "housing_tools" },
      unknownsToConfirm: ["Work location", "Household size", "Move-in date"],
    },
  ],
  faq: [
    {
      q: "Why does “registrable address” matter so much?",
      a: "Your **municipality registration (BRP)** and **BSN** usually require an address the gemeente accepts—not every short stay or informal sublet qualifies. Landlords should confirm whether you can register; without registration, payroll, banking, and insurance timelines get harder.",
    },
    {
      q: "Are rental prices negotiable?",
      a: "In tight markets, **listed rent is often fixed**, especially for popular listings. You may still clarify **service charges**, **deposit cap**, and **contract length**. Always get material terms in writing before paying large sums.",
    },
    {
      q: "What is a typical deposit?",
      a: "Deposits vary by landlord and contract type. Expect **one or more months’ rent** as a common pattern, but verify against your contract and Dutch rental norms for your segment (room, studio, family home).",
      links: [{ label: "Rental agencies directory", href: "/netherlands/services/rental-agencies/" }],
    },
    {
      q: "Should I use housing platforms or an agent?",
      a: "**Platforms** help you scan inventory quickly; **agents** can help with viewings and paperwork in competitive cities. Many expats combine both—start broad, then narrow by neighbourhood and registration needs.",
    },
    {
      q: "How does housing connect to health insurance?",
      a: "Once you **live in the Netherlands**, you normally need **Dutch basic health insurance** on time. Your **address and BSN** are part of that setup—plan housing registration so you are not caught without coverage.",
      links: [{ label: "Health insurance guide", href: "/netherlands/health-insurance-netherlands/" }],
    },
  ],
  linkRegistry,
  timelineStages: [
    {
      id: "h1",
      label: "Frame budget & strategy",
      goal: "Know your range, documents, and non-negotiables.",
      actions: [
        "Set rent + deposit band and commute limits.",
        "Prepare ID, income proof, and employer or guarantor context.",
        "Decide platform vs agent mix for your city.",
      ],
      links: [
        { href: "/netherlands/housing/tools/", label: "Housing tools hub" },
        { href: "/netherlands/services/housing-platforms/", label: "Compare platforms" },
      ],
    },
    {
      id: "h2",
      label: "Viewings & contract",
      goal: "Validate registration, clauses, and total cost.",
      actions: [
        "Confirm **BRP registration** is allowed from this address.",
        "Check deposit, service costs, and notice periods in writing.",
        "Book gemeente slot early if your start date is tight.",
      ],
      links: [
        { href: "/netherlands/municipality-registration-netherlands/", label: "Registration guide" },
        { href: "/netherlands/services/rental-agencies/", label: "Rental agencies" },
      ],
    },
    {
      id: "h3",
      label: "Move-in & setup",
      goal: "Utilities, insurance, and first-week stability.",
      actions: [
        "Arrange energy, internet, and contents cover as needed.",
        "Complete registration and note your **BSN** timeline for payroll.",
        "Use arrival planning if you are new to the Netherlands.",
      ],
      links: [
        { href: "/netherlands/moving/tools/arrival-planner/", label: "Arrival planner" },
        { href: "/netherlands/moving-to-the-netherlands/", label: "Moving pillar" },
      ],
    },
  ],
  toolsStrip: [
    {
      title: "Housing tools hub",
      href: "/netherlands/housing/tools/",
      description: "Browse housing-related planners and calculators as they go live.",
    },
    {
      title: "Relocation cost estimator",
      href: "/netherlands/moving/tools/relocation-cost-estimator/",
      description: "Stress-test deposit, rent, and first-month cash needs.",
    },
    {
      title: "Arrival planner",
      href: "/netherlands/moving/tools/arrival-planner/",
      description: "Map early-week tasks after you have an address.",
    },
  ],
  sections: {
    pageHeader: {
      eyebrow: "Netherlands · Housing",
      title: "Housing in the Netherlands",
      subtitle:
        "Renting is competitive in many cities. This hub orients you on registrable addresses, search channels, contracts, and how housing connects to BSN, banking, and insurance.",
      heroImage: "/images/relocation-planning-netherlands-hero.png",
      heroImageAlt: "Canal houses and bicycles—typical Dutch city street scene",
    },
    overview: {
      sectionTitle: "Overview",
      overviewParagraph:
        "Most expats rent first. Inventory moves quickly, landlords run checks, and **registration with your municipality** depends on having an acceptable address. Use the stages below to sequence budget → contract → move-in without surprises.",
      collapsibleTitle: "Details",
      disclaimerItems: [
        "This hub is planning guidance, not legal advice. Verify tenancy rules and gemeente requirements for your situation.",
      ],
    },
    whoThisGuideFor: {
      sectionTitle: "Who this is for",
      paragraph: "Renters in Amsterdam, Rotterdam, Utrecht, Eindhoven, and other Dutch cities who need a registrable lease and a realistic timeline.",
      audiences: ["First-time renters in NL", "Families needing more space", "Professionals relocating for work"],
    },
    scenarioPaths: {
      intro: "Pick the path closest to your situation—we’ll point you to tools and directories next.",
    },
    stepByStepSummary: {
      sectionTitle: "At a glance",
      introParagraph: "If you only remember three moves:",
      steps: [
        "Lock budget and documents before you fall in love with one listing.",
        "Confirm gemeente registration before you pay large deposits.",
        "Plan utilities, insurance, and BSN timing for your first weeks.",
      ],
    },
    practicalEssentials: {
      intro: "Three lenses that keep Dutch rental searches on track.",
      documents: {
        bullets: ["ID and income proof ready to share", "Employer letter or contract where needed", "Prior landlord reference if you have one"],
        primaryLinkKey: "document_readiness",
      },
      banking: {
        bullets: ["IBAN for rent and deposit transfers", "Payroll timing vs first rent payment", "Know how your bank handles large outgoing transfers"],
        primaryLinkKey: "moving_pillar",
      },
      housing: {
        bullets: ["Ask explicitly about BRP registration", "Clarify service costs vs net rent", "Screenshot or save listings for your records"],
        registrationNote: "If you cannot register at an address, most payroll and insurance timelines stall—treat this as a hard gate.",
        primaryLinkKey: "services_platforms",
      },
    },
  },
  nextSteps: [
    {
      label: "Moving to the Netherlands",
      href: "/netherlands/moving-to-the-netherlands/",
      description: "Full relocation timeline, visas context, and practical essentials.",
    },
    {
      label: "Housing platforms directory",
      href: "/netherlands/services/housing-platforms/",
      description: "Compare ways to search inventory and shortlist providers.",
    },
    {
      label: "Municipality registration",
      href: "/netherlands/municipality-registration-netherlands/",
      description: "How address registration ties to your BSN.",
    },
  ],
};

export async function getNlHousingFlagshipContent(): Promise<NlFlagshipPillarContent> {
  return nlHousingFlagshipContent;
}
