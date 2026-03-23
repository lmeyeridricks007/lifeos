/**
 * Relocation Agencies category page data for /netherlands/services/relocation-agencies/.
 * Directory built from trusted expat-centre / public-support ecosystems.
 * Not a complete market list; positioning: trusted partner providers surfaced to internationals.
 */

import type { ServiceCategoryPageData } from "@/src/lib/service-category/types";
import { relocationAgenciesOfficialSources } from "@/src/data/services/official-sources/relocation-agencies";
import {
  relocationAgenciesMetadata,
  relocationAgenciesProviders,
} from "@/src/data/companies-registry";

/* Hero image prompt for future asset:
   "Cinematic editorial image for a Dutch relocation agencies page for expats, showing organized move-planning materials, housing search notes, immigration paperwork, city maps, and a calm professional relocation advisory setting, subtle Dutch context, natural daylight, premium magazine aesthetic, wide 16:9 banner."
*/

export const relocationAgenciesCategoryPage: ServiceCategoryPageData = {
  slug: "relocation-agencies",
  parentSlug: "services",
  country: "netherlands",
  path: "/netherlands/services/relocation-agencies/",

  seo: {
    title: "Relocation Agencies in the Netherlands for Expats: Compare Trusted Providers",
    description:
      "Explore trusted relocation agencies and relocation service providers in the Netherlands, with practical guidance on housing, immigration, registration, settling in, and family moves.",
    keywords: [
      "relocation agencies netherlands",
      "relocation services netherlands expat",
      "expat relocation agency netherlands",
      "relocation companies netherlands",
      "moving to netherlands relocation help",
      "netherlands relocation services for expats",
      "relocation agency amsterdam expat",
      "relocation agency the hague expat",
      "relocation support netherlands",
      "corporate relocation netherlands",
      "international relocation services netherlands",
      "family relocation netherlands expat",
    ],
  },

  hero: {
    eyebrow: "SERVICES",
    title: "Relocation Agencies for Expats in the Netherlands",
    subtitle:
      "Compare trusted relocation providers and understand when relocation support can help with housing, immigration, registration, family moves, and settling into life in the Netherlands.",
    image: {
      src: "/images/heroes/netherlands-relocation-planning-consultation-canal-view.png",
      alt: "An organized desk with relocation planning documents (housing, registration, residence permit), a passport, laptop, and map, with two people in a professional consultation in the background overlooking a Dutch canal, symbolizing comprehensive expat relocation support.",
      imagePrompt:
        "Cinematic editorial image for a Dutch relocation agencies page for expats, showing organized move-planning materials, housing search notes, immigration paperwork, city maps, and a calm professional relocation advisory setting, subtle Dutch context, natural daylight, premium magazine aesthetic, wide 16:9 banner.",
    },
    ctas: [
      { label: "Search Relocation Providers", href: "#provider-directory", primary: true },
      { label: "Read Relocation Guides", href: "#related-guides", primary: false },
    ],
  },

  tocItems: [
    { id: "overview", label: "Overview" },
    { id: "what-agencies-do", label: "What Relocation Agencies Do" },
    { id: "when-expats-use", label: "When Expats Use Relocation Support" },
    { id: "compare-providers", label: "Compare Providers" },
    { id: "what-to-compare", label: "What to Compare Between Agencies" },
    { id: "typical-costs", label: "Typical Costs" },
    { id: "when-not-need", label: "When You May Not Need an Agency" },
    { id: "scenarios", label: "Example Scenarios" },
    { id: "faq", label: "FAQs" },
    { id: "official-sources", label: "Official Sources" },
  ],

  intro: {
    heading: "How Relocation Agencies Help Expats in the Netherlands",
    paragraphs: [
      "This page helps you understand what relocation agencies do and when they are useful. Relocation agencies often help with a combination of housing, immigration coordination, municipal registration, schools, local setup, and settling in. Many official expat-centre ecosystems in the Netherlands surface trusted partner providers in this category.",
      "Not every expat needs a relocation agency. Some people manage the move with official guides, city pages, and a few individual service providers. Relocation support is especially relevant for employer-sponsored moves, family relocations, short timelines, or when you want one provider coordinating multiple steps.",
    ],
    links: [
      { label: "All services hub", href: "/netherlands/services/" },
      { label: "Dutch cities overview", href: "/netherlands/cities/" },
      { label: "After arriving", href: "/netherlands/after-arriving-netherlands/" },
      { label: "Document translation", href: "/netherlands/document-translation-netherlands/" },
    ],
  },

  requirementCards: [
    {
      id: "moving-alone-work",
      title: "Moving alone for work",
      description:
        "Single professionals with a job offer may need housing, registration, and practical onboarding. An agency can streamline the first weeks.",
      whoItAppliesTo: "Solo relocators with limited time or unfamiliarity with the Dutch system",
      link: { label: "After arriving", href: "/netherlands/after-arriving-netherlands/" },
    },
    {
      id: "moving-with-family",
      title: "Moving with family",
      description:
        "Families often need housing, school search, registration, and settling-in support. Relocation agencies can coordinate multiple streams.",
      whoItAppliesTo: "Expats relocating with partner or children",
      link: { label: "Cities", href: "/netherlands/cities/" },
    },
    {
      id: "employer-funded",
      title: "Employer-funded move",
      description:
        "Many employers offer relocation packages. Agencies often work with HR to deliver housing, immigration coordination, and onboarding.",
      whoItAppliesTo: "Employer-sponsored hires and corporate relocations",
    },
    {
      id: "housing-pressure",
      title: "Housing pressure in major cities",
      description:
        "In tight rental markets, home-finding support and local knowledge can save time and reduce stress. Some agencies specialise in housing.",
      whoItAppliesTo: "Expats moving to Amsterdam, Rotterdam, The Hague, Utrecht",
      link: { label: "Amsterdam", href: "/netherlands/amsterdam/" },
    },
    {
      id: "need-multiple-categories",
      title: "Need help across multiple categories",
      description:
        "When you want one point of contact for housing, registration, immigration coordination, schools, and utilities, a full-service agency can help.",
      whoItAppliesTo: "Expats who prefer coordinated support rather than managing each step alone",
    },
    {
      id: "prefer-self-managed",
      title: "Prefer self-managed move",
      description:
        "If you are comfortable with official guides and direct provider choices, you may not need an agency. Use our city and arrival guides instead.",
      whoItAppliesTo: "Self-sufficient movers with time and flexibility",
      link: { label: "After arriving", href: "/netherlands/after-arriving-netherlands/" },
    },
  ],

  coverageCards: [
    {
      id: "housing-search",
      title: "Housing search",
      description: "Home-finding, rental viewings, and housing advice in the local market.",
    },
    {
      id: "immigration-coordination",
      title: "Immigration coordination",
      description: "Support with permit processes, document preparation, and coordination with visa consultants or lawyers where needed.",
    },
    {
      id: "registration-admin",
      title: "Registration & admin",
      description: "Municipal registration (BRP), BSN, and other administrative steps.",
    },
    {
      id: "family-school",
      title: "Family / school support",
      description: "School search, family settling-in, and support for partners and children.",
    },
    {
      id: "local-settling-in",
      title: "Local settling-in",
      description: "Orientation, utilities, local onboarding, and practical day-to-day setup.",
    },
    {
      id: "corporate-relocation",
      title: "Corporate relocation support",
      description: "Employer-led packages, group moves, and HR-coordinated relocation programmes.",
    },
  ],

  comparisonFactors: [
    {
      id: "city-coverage",
      title: "City coverage",
      description: "Some agencies focus on one city or region; others operate nationwide. Match their footprint to your destination.",
    },
    {
      id: "housing-depth",
      title: "Housing support depth",
      description: "From light advice to full home-finding and rental negotiation. Confirm what is included.",
    },
    {
      id: "immigration-coordination",
      title: "Immigration coordination",
      description: "Whether they only signpost or actively coordinate with visa consultants, lawyers, or employers.",
    },
    {
      id: "family-school",
      title: "Family and school support",
      description: "School search, partner support, and family-specific services vary by provider.",
    },
    {
      id: "english-communication",
      title: "English-language communication",
      description: "Confirm that key services and contracts are available in English if you need them.",
    },
    {
      id: "corporate-vs-private",
      title: "Corporate vs private-move focus",
      description: "Some agencies work mainly with employers; others serve private clients and families.",
    },
    {
      id: "document-support",
      title: "Document support",
      description: "Help with paperwork, translation referrals, and legalisation or apostille guidance.",
    },
    {
      id: "temp-accommodation",
      title: "Temporary accommodation",
      description: "Short-term housing or serviced apartments while you search for a permanent home.",
    },
    {
      id: "pricing-transparency",
      title: "Pricing transparency",
      description: "Costs vary widely. Ask what is included, what is extra, and whether employer funding applies.",
    },
  ],

  providers: [], // Directory uses relocationAgenciesProviders; comparison section uses mapped directory providers

  comparisonSection: {
    title: "Compare relocation providers",
    intro: "Add up to three providers to your shortlist to compare them side by side. We do not rank or endorse; suitability depends on your city, scope, and budget. Confirm scope and pricing directly with the provider.",
  },

  costCards: [
    {
      id: "initial-consultation",
      title: "Initial consultation",
      value: "€0–€150",
      note: "Many agencies offer a free or low-cost first call; others charge a fixed fee. Confirm before booking.",
    },
    {
      id: "home-finding",
      title: "Home-finding support",
      value: "€500–€2,000+",
      note: "Often priced per service or as part of a package. Premium cities (e.g. Amsterdam) and family needs typically cost more.",
    },
    {
      id: "full-package",
      title: "Full relocation package",
      value: "€1,500–€4,000+",
      note: "Employer-funded packages and full-service moves vary by scope. Private clients often €1,500–3,000; corporate packages can be higher. Request a clear scope and quote.",
    },
    {
      id: "family-school",
      title: "Family / school search support",
      value: "€300–€1,000+",
      note: "Family and school services are often add-ons or part of a larger package. Scope and city affect the price.",
    },
    {
      id: "immigration-housing-bundle",
      title: "Immigration + housing bundle",
      value: "€1,200–€3,500+",
      note: "Combined immigration coordination and housing support; scope and provider determine the final price.",
    },
    {
      id: "settling-in",
      title: "Settling-in support",
      value: "€200–€800",
      note: "Orientation, registration help, and local onboarding may be billed separately or included in a package. À la carte from ~€200 per service.",
    },
  ],

  whoNeedsExtraHelp: [],

  scenarios: [
    {
      id: "single-professional",
      title: "Single professional moving for a new job",
      summary: "You have a job offer and need to move quickly. You need housing, registration, and maybe immigration coordination.",
      whatToConfirm: ["What your employer already provides", "Housing market in your city", "Whether you need a visa or permit"],
      whatToCompare: ["Agencies that cover your city", "Packages vs à la carte services", "English-language support"],
      commonMistakes: ["Assuming the employer will handle everything", "Leaving housing to the last minute"],
      links: [
        { label: "After arriving", href: "/netherlands/after-arriving-netherlands/" },
        { label: "Visa consultants", href: "/netherlands/services/visa-consultants/" },
      ],
    },
    {
      id: "family-hague-amsterdam",
      title: "Family relocating to The Hague or Amsterdam",
      summary: "You are moving with a partner and children. You need housing, schools, registration, and settling-in.",
      whatToConfirm: ["School options and deadlines", "Housing budget and areas", "Registration and BSN steps"],
      whatToCompare: ["Agencies with strong family and school support", "City-specific experience", "Included vs extra services"],
      commonMistakes: ["Underestimating school application timelines", "Not clarifying what is included in the quote"],
      links: [
        { label: "Amsterdam", href: "/netherlands/amsterdam/" },
        { label: "The Hague", href: "/netherlands/the-hague/" },
        { label: "Cities", href: "/netherlands/cities/" },
      ],
    },
    {
      id: "hsm-no-housing-support",
      title: "Highly skilled migrant with employer support but no housing support",
      summary: "Your employer handles the permit but not housing or registration. You want help with the rest.",
      whatToConfirm: ["What the employer already covers", "Whether you need only housing or full settling-in", "Budget for private relocation support"],
      whatToCompare: ["Housing-focused vs full-service agencies", "Fees for partial support"],
      commonMistakes: ["Paying for duplicate services the employer already provides", "Skipping registration and BSN steps"],
      links: [
        { label: "Highly skilled migrant sponsors", href: "/netherlands/services/highly-skilled-migrant-sponsors/" },
        { label: "After arriving", href: "/netherlands/after-arriving-netherlands/" },
      ],
    },
    {
      id: "short-timeline",
      title: "International moving on a short timeline",
      summary: "You have a start date soon and need housing and admin sorted quickly.",
      whatToConfirm: ["Realistic timeline for housing in your city", "Temporary accommodation options", "Priority order: permit, registration, housing"],
      whatToCompare: ["Agencies that can work to tight deadlines", "Temporary vs permanent housing support"],
      commonMistakes: ["Expecting immediate permanent housing in tight markets", "Leaving permit or registration too late"],
      links: [
        { label: "Document translation", href: "/netherlands/document-translation-netherlands/" },
        { label: "Visa consultants", href: "/netherlands/services/visa-consultants/" },
      ],
    },
    {
      id: "couple-housing-registration",
      title: "Couple moving and needing housing + registration support",
      summary: "You and your partner are moving together. You want help with finding a home and completing registration and admin.",
      whatToConfirm: ["Joint vs single registration requirements", "Housing budget and preferred areas", "Whether you need immigration coordination too"],
      whatToCompare: ["Agencies that serve couples and private clients", "Scope of registration and BSN support"],
      commonMistakes: ["Missing documents for municipal registration", "Not clarifying who is the main tenant for housing"],
      links: [
        { label: "After arriving", href: "/netherlands/after-arriving-netherlands/" },
        { label: "Cities", href: "/netherlands/cities/" },
      ],
    },
    {
      id: "local-setup-after-arrival",
      title: "Person who wants local setup help after arrival",
      summary: "You have already moved but need help with utilities, orientation, local admin, or finding a permanent home.",
      whatToConfirm: ["What you have already done", "Remaining tasks and priorities", "Whether they offer post-arrival-only packages"],
      whatToCompare: ["Settling-in-only vs full relocation providers", "Cost for partial support"],
      commonMistakes: ["Assuming all agencies offer post-arrival-only options", "Overlooking free official resources (expat centres, city guides)"],
      links: [
        { label: "After arriving", href: "/netherlands/after-arriving-netherlands/" },
        { label: "Official sources on this page", href: "#official-sources" },
      ],
    },
  ],

  faqs: [
    {
      q: "What does a relocation agency do in the Netherlands?",
      a: "Relocation agencies typically help with a combination of housing search, immigration coordination, municipal registration, school search, utility setup, orientation, and settling-in. They are often broader and more hands-on than visa consultants or immigration lawyers, who focus on legal and permit matters. Business.gov.nl states that expat centres can help with immigration, housing, taxes, insurance, finance, and other practical settling-in issues; many partner providers in this space offer similar support.",
    },
    {
      q: "Do I need a relocation agency to move to the Netherlands?",
      a: "No. Many people move using official guides, city pages, and direct provider choices. Relocation agencies are especially relevant for employer-sponsored moves, family relocations, short timelines, or when you want one provider coordinating multiple steps. If you prefer to self-manage, use our after-arrival and city guides.",
    },
    {
      q: "What is the difference between a relocation agency and an immigration lawyer?",
      a: "Relocation agencies focus on practical support: housing, registration, settling-in, and often immigration coordination (e.g. working with visa consultants or employers). Immigration lawyers provide legal advice and representation, for example for permit applications, objections, and appeals. For complex legal issues or disputes, a lawyer is appropriate; for day-to-day move coordination, a relocation agency may be enough.",
    },
    {
      q: "What is the difference between a relocation agency and a visa consultant?",
      a: "Visa consultants specialise in process guidance and document preparation for permits and visas. Relocation agencies typically offer broader support—housing, registration, schools, utilities, orientation—and may coordinate with visa consultants or lawyers for the immigration part. If you only need permit advice, a visa consultant may suffice; if you need full move coordination, a relocation agency is often a better fit.",
    },
    {
      q: "Do relocation agencies help with housing?",
      a: "Many do. Partner pages from expat centres often describe relocation providers as helping with home-finding, rental viewings, and housing advice. Scope varies: some offer full home-finding; others give advice and referrals. Always confirm what is included before engaging.",
    },
    {
      q: "Do relocation agencies help with municipal registration?",
      a: "Yes. Many relocation agencies support municipal registration (BRP), BSN, and related admin as part of settling-in. Confirm whether this is included in your package or charged separately.",
    },
    {
      q: "Are relocation agencies only for corporate moves?",
      a: "No. Many serve private clients and families as well. Some focus mainly on employer-funded moves; others offer packages for individuals and families. Check each provider’s focus and pricing.",
    },
    {
      q: "Can families benefit from relocation support?",
      a: "Yes. Family relocation often involves housing, school search, registration, and settling-in for partners and children. Several trusted partner providers listed by expat centres specialise in or include family support.",
    },
    {
      q: "How much do relocation agencies cost in the Netherlands?",
      a: "Costs vary widely by scope, city, and whether the move is employer-funded. Some services are à la carte; others are packaged. Home-finding and full family relocation are often more expensive than lighter settling-in support. Always confirm what is included and request a clear quote.",
    },
    {
      q: "What should I compare before choosing an agency?",
      a: "Compare city coverage, housing support depth, immigration coordination, family or school support, English-language communication, corporate vs private focus, document support, temporary accommodation options, and pricing transparency. The right provider depends on your city, complexity, family situation, and whether you want full-service or only a few tasks.",
    },
    {
      q: "Are the providers on this page official?",
      a: "The directory is built from trusted expat-centre and public-support ecosystems (e.g. IN Amsterdam, The Hague International Centre, Rotterdam Expat Centre). These are official or government-backed support points that publish partner listings. Inclusion here means the provider appears in those ecosystems; it does not mean the provider is a government entity or that we endorse them. Verify availability and scope directly.",
    },
    {
      q: "Do relocation agencies help with immigration paperwork?",
      a: "Many help coordinate immigration steps and document preparation, and may work with visa consultants or lawyers. They typically do not provide legal advice. For permit applications, objections, or appeals, an immigration lawyer or visa consultant may be required. Confirm with the agency what they handle and when they refer out.",
    },
    {
      q: "What should I do first if I want to move soon?",
      a: "Confirm your visa or permit requirements, then prioritise housing and registration. Use our checklist and after-arrival guide. If you want coordinated support, contact relocation providers that cover your city and compare scope and pricing. Official expat centres also offer information and can point you to partner providers.",
    },
  ],

  officialSources: relocationAgenciesOfficialSources,

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
      title: "Services hub",
      links: [
        { label: "All services", href: "/netherlands/services/" },
        { label: "Visa consultants", href: "/netherlands/services/visa-consultants/" },
        { label: "Immigration lawyers", href: "/netherlands/services/immigration-lawyers/" },
        { label: "Housing & relocation (planned)", href: "/netherlands/services/housing-relocation/" },
      ],
    },
  ],

  relatedCategories: [
    { label: "Visa consultants", href: "/netherlands/services/visa-consultants/" },
    { label: "Immigration lawyers", href: "/netherlands/services/immigration-lawyers/" },
    { label: "Highly skilled migrant sponsors", href: "/netherlands/services/highly-skilled-migrant-sponsors/" },
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
    "Users should verify availability, pricing, and exact service scope directly with the provider. The directory is not necessarily the complete market list of all relocation agencies in the Netherlands.",
  ],

  whenNotNeed: {
    heading: "When You May Not Need a Relocation Agency",
    paragraphs: [
      "Some people can manage the move with official guides and direct provider choices. Employer-supported hires may already have internal HR or mobility support. If you only need visa advice, document translation, or a housing platform rather than full relocation coordination, a visa consultant, immigration lawyer, or housing service may be enough.",
    ],
    points: [
      "You are comfortable using official checklists and city guides and have time to manage each step.",
      "Your employer or institution already provides relocation or onboarding support.",
      "You only need permit or visa advice—a visa consultant or immigration lawyer may be more appropriate.",
      "You only need document translation or legalisation—use our document guides and providers.",
      "You prefer to choose housing and utilities yourself and do not need a single coordinator.",
      "You are on a very tight budget and can prioritise a few key services (e.g. only housing or only registration help) rather than a full package.",
    ],
  },

  relocationDirectoryMeta: {
    sourceModel: relocationAgenciesMetadata.sourceModel,
    totalRecords: relocationAgenciesMetadata.totalRecords,
    lastChecked: relocationAgenciesMetadata.lastChecked,
  },
};
