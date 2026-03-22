/**
 * Relocation Services hub page data for /netherlands/services/relocation-services/.
 * Top-level category for all relocation support; sits above relocation-agencies, rental-agencies,
 * housing-platforms, visa-consultants, immigration-lawyers. Directory from trusted expat-centre ecosystems.
 */

import type { ServiceCategoryPageData } from "@/src/lib/service-category/types";
import { relocationServicesOfficialSources } from "@/src/data/services/official-sources/relocation-services";

/* Hero image prompt for future asset:
   "Cinematic editorial image for a Dutch relocation services page for expats, showing organized move-planning materials, housing notes, immigration paperwork, school or family planning notes, Dutch city maps, and a calm professional relocation advisory setting, natural daylight, premium magazine aesthetic, wide 16:9 banner."
*/

export const relocationServicesCategoryPage: ServiceCategoryPageData = {
  slug: "relocation-services",
  parentSlug: "services",
  country: "netherlands",
  path: "/netherlands/services/relocation-services/",

  seo: {
    title: "Relocation Services in the Netherlands for Expats: Compare Trusted Providers",
    description:
      "Compare trusted relocation services for expats in the Netherlands, including housing, immigration coordination, registration, family moves, and settling-in support.",
    keywords: [
      "relocation services netherlands",
      "relocation help netherlands expat",
      "expat relocation services netherlands",
      "moving to netherlands relocation services",
      "international relocation services netherlands",
      "relocation support netherlands",
      "relocation company netherlands expat",
      "expat move services netherlands",
      "family relocation netherlands",
      "employer relocation support netherlands",
      "settling in services netherlands",
      "relocation providers netherlands",
    ],
  },

  hero: {
    eyebrow: "SERVICES",
    title: "Relocation Services for Expats in the Netherlands",
    subtitle:
      "Compare trusted relocation providers and understand how relocation services can help with housing, immigration coordination, registration, schools, banking, healthcare, and settling into life in the Netherlands.",
    image: {
      src: "/images/heroes/relocation-services-netherlands-hero.png",
      alt: "Organized desk with relocation documents including forms for Residence Permit, Housing Search, Municipality Registration, and Banking Setup, alongside a passport, smartphone, keys, and a city map. In the blurred background, two people consult in a modern office overlooking a Dutch canal, symbolizing comprehensive relocation support for expats in the Netherlands.",
      imagePrompt:
        "Cinematic editorial image for a Dutch relocation services page for expats, showing organized move-planning materials, housing notes, immigration paperwork, school or family planning notes, Dutch city maps, and a calm professional relocation advisory setting, natural daylight, premium magazine aesthetic, wide 16:9 banner.",
    },
    ctas: [
      { label: "Compare Relocation Providers", href: "#compare-providers", primary: true },
      { label: "Read Relocation Guides", href: "#related-guides", primary: false },
    ],
  },

  tocItems: [
    { id: "overview", label: "Overview" },
    { id: "explore-by-category", label: "Explore by Category" },
    { id: "what-services-include", label: "What Relocation Services Include" },
    { id: "types-of-support", label: "Types of Relocation Support" },
    { id: "compare-providers", label: "Compare Providers" },
    { id: "what-to-compare", label: "What to Compare Between Providers" },
    { id: "typical-costs", label: "Typical Costs" },
    { id: "scenarios", label: "Example Scenarios" },
    { id: "faq", label: "FAQs" },
    { id: "official-sources", label: "Official Sources" },
  ],

  intro: {
    heading: "How Relocation Services Help Expats Move to the Netherlands",
    paragraphs: [
      "This page helps you understand the broader relocation-services landscape. Relocation services often combine multiple categories: housing, immigration coordination, registration, family support, utilities, local setup, and settling-in help. Many Dutch expat-centre ecosystems surface trusted relocation-oriented providers.",
      "Not every expat needs full relocation support. Some manage with official guides, city pages, and a few direct providers. Full relocation support is especially relevant for employer-funded moves, family relocations, complex international moves, or when you want one point of coordination.",
    ],
    links: [
      { label: "All services hub", href: "/netherlands/services/" },
      { label: "Relocation agencies", href: "/netherlands/services/relocation-agencies/" },
      { label: "After arriving", href: "/netherlands/after-arriving-netherlands/" },
      { label: "Dutch cities overview", href: "/netherlands/cities/" },
    ],
  },

  requirementCards: [
    {
      id: "employer-funded",
      title: "Employer-funded move",
      description: "Many employers offer relocation packages. Providers often work with HR to deliver housing, immigration coordination, and onboarding.",
      whoItAppliesTo: "Employer-sponsored hires and corporate relocations",
    },
    {
      id: "family-move",
      title: "Family relocation",
      description: "Families often need housing, school search, registration, and settling-in. Relocation providers can coordinate multiple streams.",
      whoItAppliesTo: "Expats relocating with partner or children",
      link: { label: "Cities", href: "/netherlands/cities/" },
    },
    {
      id: "no-local-network",
      title: "No local network in the Netherlands",
      description: "When you are moving from abroad with limited local knowledge, a relocation provider can guide housing, registration, and practical setup.",
      whoItAppliesTo: "International movers new to the Dutch system",
      link: { label: "After arriving", href: "/netherlands/after-arriving-netherlands/" },
    },
    {
      id: "short-timeline",
      title: "Short move timeline",
      description: "Tight deadlines often benefit from one coordinator handling housing, admin, and settling-in in parallel.",
      whoItAppliesTo: "Expats with a fixed start date or urgent move",
    },
    {
      id: "high-pressure-market",
      title: "High-pressure city market",
      description: "In competitive rental markets, home-finding support and local knowledge can save time and reduce stress.",
      whoItAppliesTo: "Expats moving to Amsterdam, Rotterdam, The Hague, Utrecht",
      link: { label: "Amsterdam", href: "/netherlands/amsterdam/" },
    },
    {
      id: "one-coordinator",
      title: "Want one point of coordination",
      description: "When you want a single contact for housing, registration, immigration coordination, schools, and utilities, a full-service provider can help.",
      whoItAppliesTo: "Expats who prefer coordinated support",
    },
  ],

  coverageCards: [
    {
      id: "housing",
      title: "Housing",
      description: "Housing search, home finding, rental viewings, and housing advice in the local market.",
    },
    {
      id: "immigration-coordination",
      title: "Immigration coordination",
      description: "Support with permit processes, document preparation, and coordination with visa consultants or lawyers where needed.",
    },
    {
      id: "registration-admin",
      title: "Registration and admin",
      description: "Municipal registration (BRP), BSN, and other administrative steps after arrival.",
    },
    {
      id: "family-school",
      title: "Family / school support",
      description: "School search, family settling-in, and support for partners and children.",
    },
    {
      id: "banking-utilities",
      title: "Banking / utilities setup",
      description: "Help with bank account, insurance, utilities, and practical day-to-day setup.",
    },
    {
      id: "settling-in",
      title: "Settling-in support",
      description: "Orientation, local onboarding, and practical settling-in after the move.",
    },
  ],

  comparisonFactors: [
    {
      id: "city-coverage",
      title: "City / region coverage",
      description: "Some providers focus on one city or region; others operate nationwide. Match their footprint to your destination.",
    },
    {
      id: "corporate-vs-private",
      title: "Corporate vs private-client focus",
      description: "Some work mainly with employers; others serve private clients and families.",
    },
    {
      id: "housing-depth",
      title: "Housing support depth",
      description: "From light advice to full home-finding and rental negotiation. Confirm what is included.",
    },
    {
      id: "immigration-scope",
      title: "Immigration coordination scope",
      description: "Whether they only signpost or actively coordinate with visa consultants, lawyers, or employers.",
    },
    {
      id: "family-school",
      title: "Family and school support",
      description: "School search, partner support, and family-specific services vary by provider.",
    },
    {
      id: "banking-utilities",
      title: "Banking and utility setup help",
      description: "Some include bank account, insurance, and utility setup; others refer out.",
    },
    {
      id: "language-support",
      title: "Language support",
      description: "Confirm that key services and contracts are available in English if you need them.",
    },
    {
      id: "timeline-urgency",
      title: "Timeline / urgency support",
      description: "Whether they can work to tight deadlines and prioritise accordingly.",
    },
    {
      id: "bundled-pricing",
      title: "Bundled vs modular pricing",
      description: "Some offer fixed packages; others price per service. Clarify what is included.",
    },
    {
      id: "settling-in-depth",
      title: "Settling-in depth after arrival",
      description: "Orientation, local knowledge, and post-move support vary. Ask what is included.",
    },
  ],

  providers: [],

  comparisonSection: {
    title: "Compare relocation providers",
    intro: "Add up to three providers to your shortlist to compare them side by side. We do not rank or endorse; suitability depends on your city, scope, and budget. Confirm scope and pricing directly with the provider.",
  },

  costCards: [
    {
      id: "initial-consultation",
      title: "Initial consultation",
      value: "Varies",
      note: "Some providers offer a free or low-cost first call; others charge. Confirm before booking.",
    },
    {
      id: "housing-support",
      title: "Housing support package",
      value: "Varies",
      note: "Often priced per service or as part of a package. Premium cities and family needs typically cost more.",
    },
    {
      id: "full-package",
      title: "Full relocation package",
      value: "Varies significantly",
      note: "Employer-funded packages and full-service moves have widely different price points. Request a clear scope and quote.",
    },
    {
      id: "family-relocation",
      title: "Family relocation support",
      value: "Varies",
      note: "Family and school services are often add-ons or part of a larger package.",
    },
    {
      id: "utilities-settling-in",
      title: "Utilities / settling-in support",
      value: "Varies",
      note: "Orientation, registration help, and local onboarding may be billed separately or included in a package.",
    },
    {
      id: "immigration-relocation-bundle",
      title: "Immigration + relocation bundle",
      value: "Varies",
      note: "Combined immigration coordination and housing support; scope and price depend on the provider.",
    },
  ],

  whoNeedsExtraHelp: [],

  scenarios: [
    {
      id: "single-professional",
      title: "Single professional moving for work",
      summary: "You have a job offer and need to move quickly. You need housing, registration, and maybe immigration coordination.",
      whatToConfirm: ["What your employer already provides", "Housing market in your city", "Whether you need a visa or permit"],
      whatToCompare: ["Providers that cover your city", "Packages vs à la carte", "English-language support"],
      commonMistakes: ["Assuming the employer will handle everything", "Leaving housing to the last minute"],
      links: [
        { label: "After arriving", href: "/netherlands/after-arriving-netherlands/" },
        { label: "Visa consultants", href: "/netherlands/services/visa-consultants/" },
      ],
    },
    {
      id: "family-hague",
      title: "Family relocating to The Hague",
      summary: "You are moving with a partner and children. You need housing, schools, registration, and settling-in.",
      whatToConfirm: ["School options and deadlines", "Housing budget and areas", "Registration and BSN steps"],
      whatToCompare: ["Providers with strong family and school support", "City-specific experience", "Included vs extra services"],
      commonMistakes: ["Underestimating school application timelines", "Not clarifying what is included in the quote"],
      links: [
        { label: "The Hague", href: "/netherlands/the-hague/" },
        { label: "Cities", href: "/netherlands/cities/" },
      ],
    },
    {
      id: "hsm-no-housing",
      title: "Highly skilled migrant with employer support but no housing support",
      summary: "Your employer handles the permit but not housing or registration. You want help with the rest.",
      whatToConfirm: ["What the employer already covers", "Whether you need only housing or full settling-in", "Budget for private support"],
      whatToCompare: ["Housing-focused vs full-service providers", "Fees for partial support"],
      commonMistakes: ["Paying for duplicate services the employer already provides", "Skipping registration and BSN steps"],
      links: [
        { label: "Highly skilled migrant sponsors", href: "/netherlands/services/highly-skilled-migrant-sponsors/" },
        { label: "After arriving", href: "/netherlands/after-arriving-netherlands/" },
      ],
    },
    {
      id: "short-timeline",
      title: "Expat moving from abroad with very limited time",
      summary: "You have a start date soon and need housing and admin sorted quickly.",
      whatToConfirm: ["Realistic timeline for housing in your city", "Temporary accommodation options", "Priority order: permit, registration, housing"],
      whatToCompare: ["Providers that can work to tight deadlines", "Temporary vs permanent housing support"],
      commonMistakes: ["Expecting immediate permanent housing in tight markets", "Leaving permit or registration too late"],
      links: [
        { label: "Document translation", href: "/netherlands/document-translation-netherlands/" },
        { label: "Visa consultants", href: "/netherlands/services/visa-consultants/" },
      ],
    },
    {
      id: "couple-housing-utilities",
      title: "Couple needing housing + registration + utilities setup",
      summary: "You and your partner are moving together. You want help with finding a home and completing registration and admin.",
      whatToConfirm: ["Joint vs single registration requirements", "Housing budget and preferred areas", "Whether you need immigration coordination too"],
      whatToCompare: ["Providers that serve couples and private clients", "Scope of registration and BSN support"],
      commonMistakes: ["Missing documents for municipal registration", "Not clarifying who is the main tenant for housing"],
      links: [
        { label: "After arriving", href: "/netherlands/after-arriving-netherlands/" },
        { label: "Cities", href: "/netherlands/cities/" },
      ],
    },
    {
      id: "settling-in-after-arrival",
      title: "New arrival who wants settling-in help after the move",
      summary: "You have already moved but need help with utilities, orientation, local admin, or finding a permanent home.",
      whatToConfirm: ["What you have already done", "Remaining tasks and priorities", "Whether they offer post-arrival-only packages"],
      whatToCompare: ["Settling-in-only vs full relocation providers", "Cost for partial support"],
      commonMistakes: ["Assuming all providers offer post-arrival-only options", "Overlooking free official resources (expat centres, city guides)"],
      links: [
        { label: "After arriving", href: "/netherlands/after-arriving-netherlands/" },
        { label: "Official sources on this page", href: "#official-sources" },
      ],
    },
  ],

  faqs: [
    {
      q: "What do relocation services include in the Netherlands?",
      a: "Relocation services typically cover a combination of housing search, immigration coordination, municipal registration, bank and utility setup, healthcare and schooling guidance, family support, and settling-in. Business.gov.nl states that expat centres can help with immigration, housing, taxes, insurance, finance, and related formalities; many partner providers in this space offer similar broad support.",
    },
    {
      q: "Do I need a relocation service to move to the Netherlands?",
      a: "No. Many people move using official guides, city pages, and direct provider choices. Relocation services are especially relevant for employer-funded moves, family relocations, short timelines, or when you want one provider coordinating multiple steps. If you prefer to self-manage, use our after-arrival and city guides.",
    },
    {
      q: "What is the difference between relocation services and relocation agencies?",
      a: "Relocation services is the broad category: any provider that helps with move-related support (housing, registration, immigration coordination, settling-in, etc.). Relocation agencies are one type—typically full-service coordinators. Rental agencies focus on housing search; housing platforms are listing marketplaces; visa consultants and immigration lawyers focus on permits and legal matters. Our Relocation Agencies page lists core coordinators; this page includes a broader set of trusted providers.",
    },
    {
      q: "Can relocation providers help with housing?",
      a: "Many do. Partner pages from expat centres often describe relocation providers as helping with home-finding, rental viewings, and housing advice. Scope varies: some offer full home-finding; others give advice and referrals. For dedicated rental search support, see our Rental Agencies and Housing Platforms pages.",
    },
    {
      q: "Can they help with immigration coordination?",
      a: "Many help coordinate immigration steps and document preparation, and may work with visa consultants or lawyers. They typically do not provide legal advice. For permit applications, objections, or appeals, an immigration lawyer or visa consultant may be required. Confirm with the provider what they handle and when they refer out.",
    },
    {
      q: "Are relocation services only for employer-funded moves?",
      a: "No. Many serve private clients and families as well. Some focus mainly on employer-funded moves; others offer packages for individuals and families. Check each provider's focus and pricing.",
    },
    {
      q: "Can families benefit from relocation support?",
      a: "Yes. Family relocation often involves housing, school search, registration, and settling-in for partners and children. Several trusted partner providers listed by expat centres specialise in or include family support.",
    },
    {
      q: "How much do relocation services cost in the Netherlands?",
      a: "Costs vary widely by scope, city, and whether the move is employer-funded. Some services are à la carte; others are packaged. Home-finding and full family relocation are often more expensive than lighter settling-in support. Always confirm what is included and request a clear quote.",
    },
    {
      q: "What should I compare before choosing a provider?",
      a: "Compare city coverage, corporate vs private focus, housing support depth, immigration coordination scope, family or school support, banking and utility setup help, language support, timeline and urgency support, bundled vs modular pricing, and settling-in depth. The right provider depends on your city, complexity, family situation, and whether you want full-service or only a few tasks.",
    },
    {
      q: "Are the providers on this page official?",
      a: "The directory is built from trusted expat-centre and public-support ecosystems (e.g. IN Amsterdam, The Hague International Centre, Rotterdam Expat Centre). These are official or government-backed support points that publish partner listings. Inclusion here means the provider appears in those ecosystems; it does not mean the provider is a government entity or that we endorse them. Verify availability and scope directly.",
    },
    {
      q: "Do relocation providers help after arrival?",
      a: "Many do. Settling-in support can include orientation, registration help, utility setup, local onboarding, and ongoing advice. Confirm whether they offer post-arrival-only packages or only full relocation.",
    },
    {
      q: "What should I do first if I need broad move support?",
      a: "Confirm your visa or permit requirements, then prioritise housing and registration. Use our checklist and after-arrival guide. If you want coordinated support, contact relocation providers that cover your city and compare scope and pricing. You can also explore more specific categories: Relocation Agencies, Rental Agencies, Housing Platforms, Visa Consultants, and Immigration Lawyers.",
    },
  ],

  officialSources: relocationServicesOfficialSources,

  relatedGuides: [
    {
      title: "Arrival & setup guides",
      links: [
        { label: "After arriving", href: "/netherlands/after-arriving-netherlands/" },
        { label: "Open a bank account", href: "/netherlands/open-bank-account-netherlands/" },
        { label: "Health insurance", href: "/netherlands/health-insurance-netherlands/" },
        { label: "Municipality registration", href: "/netherlands/municipality-registration-netherlands/" },
      ],
    },
    {
      title: "Documents",
      links: [
        { label: "Apostille documents", href: "/netherlands/apostille-documents-netherlands/" },
        { label: "Document translation", href: "/netherlands/document-translation-netherlands/" },
        { label: "Document legalization", href: "/netherlands/document-legalization-netherlands/" },
      ],
    },
    {
      title: "City pages",
      links: [
        { label: "Amsterdam", href: "/netherlands/amsterdam/" },
        { label: "Rotterdam", href: "/netherlands/rotterdam/" },
        { label: "Utrecht", href: "/netherlands/utrecht/" },
        { label: "The Hague", href: "/netherlands/the-hague/" },
        { label: "Eindhoven", href: "/netherlands/eindhoven/" },
      ],
    },
    {
      title: "Services hub & related categories",
      links: [
        { label: "All services", href: "/netherlands/services/" },
        { label: "Relocation agencies", href: "/netherlands/services/relocation-agencies/" },
        { label: "Rental agencies", href: "/netherlands/services/rental-agencies/" },
        { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
        { label: "Visa consultants", href: "/netherlands/services/visa-consultants/" },
        { label: "Immigration lawyers", href: "/netherlands/services/immigration-lawyers/" },
      ],
    },
  ],

  relatedCategories: [
    { label: "Relocation agencies", href: "/netherlands/services/relocation-agencies/" },
    { label: "Rental agencies", href: "/netherlands/services/rental-agencies/" },
    { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
    { label: "Visa consultants", href: "/netherlands/services/visa-consultants/" },
    { label: "Immigration lawyers", href: "/netherlands/services/immigration-lawyers/" },
  ],

  tools: [
    { label: "Relocation Checklist", href: "/netherlands/moving/tools/moving-checklist/", description: "Personalized checklist for your move", status: "live" },
    { label: "Document Readiness Checker", href: "/netherlands/document-readiness-checker/", description: "Check which documents you need", status: "live" },
    { label: "Visa Timeline Estimator", href: "/netherlands/visa-timeline-estimator/", description: "Estimate visa processing and move timing", status: "live" },
    { label: "Visa Cost Calculator", href: "/netherlands/visa-cost-calculator/", description: "Estimate visa and move costs", status: "live" },
    { label: "Visa Comparison Tool", href: "/netherlands/visa/compare-visas/", description: "Compare visa routes", status: "live" },
  ],

  disclosure: [
    "This page is for information only and does not constitute legal or financial advice.",
    "Provider inclusion is based on trusted expat-centre and public-support source ecosystems and editorial structuring. Inclusion does not imply endorsement or suitability for every move.",
    "Users should verify availability, pricing, and exact service scope directly with the provider. The directory is not necessarily the complete market list of all relocation providers in the Netherlands.",
  ],

  whenNotNeed: {
    heading: "When You May Not Need Full Relocation Support",
    paragraphs: [
      "Some people can manage with official guides, city pages, and a few direct providers. Employer-supported hires may already have internal HR or mobility support. If you only need visa advice, document translation, or a housing platform rather than full coordination, a visa consultant, immigration lawyer, or housing service may be enough.",
    ],
    points: [
      "You are comfortable using official checklists and city guides and have time to manage each step.",
      "Your employer or institution already provides relocation or onboarding support.",
      "You only need permit or visa advice—see Visa Consultants or Immigration Lawyers.",
      "You only need document translation or legalisation—use our document guides and providers.",
      "You only need housing search—see Rental Agencies or Housing Platforms.",
      "You prefer to choose housing and utilities yourself and do not need a single coordinator.",
    ],
  },
};
