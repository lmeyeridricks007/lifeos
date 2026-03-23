/**
 * Rental Agencies category page data for /netherlands/services/rental-agencies/.
 * Directory built from trusted public-support ecosystems and validated provider references.
 * Not a complete market list; positioning: trusted expat-relevant rental agencies and rental-search services.
 */

import type { ServiceCategoryPageData } from "@/src/lib/service-category/types";
import { rentalAgenciesOfficialSources } from "@/src/data/services/official-sources/rental-agencies";
import { rentalAgencies, rentalAgenciesMetadata } from "@/src/data/companies-registry";

/* Hero image prompt for future asset:
   "Cinematic editorial image for a Dutch rental agencies page for expats, showing apartment-viewing notes, rental search materials, keys, housing paperwork, and a subtle Dutch residential setting, natural daylight, premium relocation magazine aesthetic, wide 16:9 banner."
*/

export const rentalAgenciesCategoryPage: ServiceCategoryPageData = {
  slug: "rental-agencies",
  parentSlug: "services",
  country: "netherlands",
  path: "/netherlands/services/rental-agencies/",

  seo: {
    title: "Rental Agencies in the Netherlands for Expats: Compare Trusted Rental Brokers and Services",
    description:
      "Compare rental agencies and expat rental brokers in the Netherlands, with practical guidance on housing search support, fees, tenant rights, and safer renting.",
    keywords: [
      "rental agencies netherlands expat",
      "expat rental agencies netherlands",
      "rental agency amsterdam expat",
      "rental broker netherlands expat",
      "apartment rental agency netherlands",
      "housing agency netherlands expat",
      "mva certified expat broker",
      "rental agency the hague expat",
      "furnished rental agency netherlands",
      "expat housing broker netherlands",
      "long term rental agency netherlands",
      "rental help netherlands expat",
    ],
  },

  hero: {
    eyebrow: "SERVICES",
    title: "Rental Agencies for Expats in the Netherlands",
    subtitle:
      "Compare trusted rental agencies and expat rental brokers in the Netherlands, and learn when agency support can help with viewings, negotiation, furnished rentals, and finding a home faster.",
    image: {
      src: "/images/heroes/rental-agencies-netherlands-expat-housing-search.png",
      alt: "Desk with rental contract, apartment viewing notes, tenant application, and keys, set against a blurred background of two people in a modern Dutch apartment overlooking a canal. The image captures the process of expat housing search with rental agency support.",
      imagePrompt:
        "Cinematic editorial image for a Dutch rental agencies page for expats, showing apartment-viewing notes, rental search materials, keys, housing paperwork, and a subtle Dutch residential setting, natural daylight, premium relocation magazine aesthetic, wide 16:9 banner.",
    },
    ctas: [
      { label: "Compare Rental Agencies", href: "#compare-providers", primary: true },
      { label: "Read Housing Guides", href: "#related-guides", primary: false },
    ],
  },

  tocItems: [
    { id: "overview", label: "Overview" },
    { id: "what-agencies-do", label: "What Rental Agencies Do" },
    { id: "when-expats-use", label: "When Expats Use Rental Agencies" },
    { id: "compare-providers", label: "Compare Providers" },
    { id: "what-to-compare", label: "What to Compare Between Agencies" },
    { id: "typical-costs", label: "Typical Costs and Fees" },
    { id: "tenant-rights", label: "Tenant Rights and Safety" },
    { id: "scenarios", label: "Example Scenarios" },
    { id: "faq", label: "FAQs" },
    { id: "official-sources", label: "Official Sources" },
  ],

  intro: {
    heading: "How Rental Agencies Help Expats Find a Home in the Netherlands",
    paragraphs: [
      "This page helps you understand what rental agencies and expat rental brokers do. They typically provide search support, viewing coordination, negotiation help, and contact with landlords or other agents—unlike a housing platform, which is usually a listings marketplace where you browse and contact listings yourself.",
      "Some expats benefit from agency support when moving from abroad, when time is short, or in competitive city markets. Others prefer to search directly on platforms. Use the comparison section below to compare trusted rental agencies and brokers commonly surfaced to internationals through official expat-support ecosystems.",
    ],
    links: [
      { label: "All services hub", href: "/netherlands/services/" },
      { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
      { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
      { label: "Relocation services", href: "/netherlands/services/relocation-services/" },
      { label: "Dutch cities overview", href: "/netherlands/cities/" },
    ],
  },

  requirementCards: [
    {
      id: "moving-alone-work",
      title: "Moving alone for work",
      description: "Single professionals who need housing before a start date or who cannot easily attend viewings from abroad may benefit from an agency that can shortlist, coordinate viewings, or support remotely.",
      whoItAppliesTo: "Solo relocators with tight timelines or limited ability to view in person",
      link: { label: "After arriving", href: "/netherlands/after-arriving-netherlands/" },
    },
    {
      id: "moving-with-family",
      title: "Moving with family",
      description: "Families often need larger homes, school catchment awareness, and more coordinated search support. Rental agencies with family or expat focus can help narrow options and arrange viewings.",
      whoItAppliesTo: "Expats relocating with partner or children",
      link: { label: "Cities", href: "/netherlands/cities/" },
    },
    {
      id: "need-housing-before-arrival",
      title: "Need housing before arrival",
      description: "When you must secure a rental from abroad, agencies that work with internationals can help with viewings by proxy, shortlists, and contract coordination.",
      whoItAppliesTo: "People relocating from abroad who cannot attend viewings easily",
    },
    {
      id: "competitive-city",
      title: "Searching in a very competitive city",
      description: "In high-pressure markets like Amsterdam, The Hague, or Utrecht, agency access to listings and local market knowledge can speed up the search.",
      whoItAppliesTo: "Expats targeting major Dutch cities with tight supply",
      link: { label: "Amsterdam", href: "/netherlands/amsterdam/" },
    },
    {
      id: "prefer-platform-search",
      title: "Prefer self-managed platform search",
      description: "If you are comfortable browsing listings and arranging viewings yourself, you may not need a rental agency. Housing platforms and direct landlord contact may be enough.",
      whoItAppliesTo: "Self-sufficient searchers with time and local or remote viewing options",
      link: { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
    },
    {
      id: "need-furnished-long-term",
      title: "Need furnished long-term rental",
      description: "Some agencies specialise in furnished or expat-oriented rentals with flexible lease terms. Useful when you want a turnkey home without buying furniture.",
      whoItAppliesTo: "Expats seeking furnished, mid- or long-term rental options",
    },
  ],

  coverageCards: [
    {
      id: "search-support",
      title: "Search support",
      description: "Shortlisted listings, search criteria, and market advice tailored to your budget and area.",
    },
    {
      id: "viewing-coordination",
      title: "Viewing coordination",
      description: "Arranging and sometimes attending viewings, including support for clients who are still abroad.",
    },
    {
      id: "negotiation-communication",
      title: "Negotiation and communication",
      description: "Communicating with landlords or brokers, negotiation support where applicable, and contract or move-in coordination in some cases.",
    },
    {
      id: "furnished-long-term",
      title: "Furnished / long-term rental support",
      description: "Guidance on furnished vs unfurnished options and long-term lease terms common in the expat market.",
    },
    {
      id: "family-housing",
      title: "Family housing support",
      description: "Larger properties, family-sized rentals, and sometimes school-area or neighbourhood advice.",
    },
    {
      id: "expat-market-guidance",
      title: "Expat market guidance",
      description: "Information and advice about the local housing market, often in English and aimed at internationals.",
    },
  ],

  comparisonFactors: [
    {
      id: "city-coverage",
      title: "City coverage",
      description: "Some agencies focus on one city or region (e.g. Amsterdam, The Hague); others cover multiple areas. Match their footprint to your target location.",
    },
    {
      id: "furnished-vs-unfurnished",
      title: "Furnished vs unfurnished focus",
      description: "Agencies differ in their supply of furnished vs unfurnished rentals. Confirm they can serve your preference.",
    },
    {
      id: "expat-experience",
      title: "Expat experience",
      description: "Agencies that routinely work with internationals often offer English-language communication and expat-oriented processes.",
    },
    {
      id: "family-size",
      title: "Family and size requirements",
      description: "If you need a family-sized home or specific requirements, check that the agency regularly handles such requests.",
    },
    {
      id: "viewing-support",
      title: "Viewing support",
      description: "Whether they coordinate viewings, offer remote or proxy viewing options, or only provide listings.",
    },
    {
      id: "local-market-access",
      title: "Local market access",
      description: "Some agencies have access to listings or landlord networks not always visible on public platforms.",
    },
    {
      id: "fee-transparency",
      title: "Transparency on fees",
      description: "Fee models vary: tenant-side fees, landlord-side fees, or bundled in relocation packages. Always ask what you will pay.",
    },
    {
      id: "english-communication",
      title: "English-language communication",
      description: "Confirm that key steps—contracts, viewings, and support—are available in English if you need them.",
    },
    {
      id: "long-vs-short-term",
      title: "Long-term vs short-term suitability",
      description: "Some agencies focus on standard long-term rentals; others also offer or partner with serviced or short-stay options.",
    },
    {
      id: "broker-vs-relocation",
      title: "Broker vs relocation vs tenant support",
      description: "Rental brokers focus on search and viewings; relocation services may bundle rental with registration and settling-in; tenant-support organisations focus on rights and disputes. Choose the right type for your need.",
    },
  ],

  providers: [],

  comparisonSection: {
    title: "Compare rental agencies",
    intro: "Add up to three agencies to your shortlist to compare them side by side. We do not rank or endorse; suitability depends on your city, budget, and whether you need furnished or family housing. Confirm fees and service scope directly with the agency.",
  },

  costCards: [
    {
      id: "search-service-fee",
      title: "Search or service fee",
      value: "~€500–€2,000+ one-off",
      note: "Many agencies charge a one-off or monthly fee for search, shortlisting, and viewings. Amount depends on service level and city. Confirm before engaging.",
      disclaimer: "Fees vary by agency and scope.",
    },
    {
      id: "tenant-side-fee",
      title: "Tenant-side fee",
      value: "Regulated / often €0–€1,000",
      note: "In the Netherlands, tenant fees are regulated in many cases (e.g. maximum one month’s rent in certain situations). Always check what is being charged and whether it is permitted.",
      disclaimer: "Rules depend on contract type; see Huurcommissie and Government.nl.",
    },
    {
      id: "furnished-expat-support",
      title: "Furnished / expat rental support",
      value: "~€800–€2,500+",
      note: "Furnished or expat-oriented packages often include higher rent and sometimes a separate service fee. Ask for a clear breakdown of rent vs. agency or setup fees.",
      disclaimer: "Varies by agency and property.",
    },
    {
      id: "relocation-rental-package",
      title: "Combined relocation + rental package",
      value: "~€1,500–€5,000+",
      note: "When rental is part of a broader relocation package (housing + registration + settling-in), fees are typically bundled. Confirm what is included and whether rental-only is an option.",
      disclaimer: "Package scope and price vary by provider.",
    },
    {
      id: "contract-move-in",
      title: "Contract / move-in support",
      value: "Often included or €100–€400",
      note: "Some agencies include contract review or move-in coordination in the main fee; others charge separately for admin, key handover, or inventory. Check scope before signing.",
      disclaimer: "Confirm with the agency.",
    },
  ],

  whoNeedsExtraHelp: [],
  scenarios: [
    {
      id: "single-amsterdam-short-timeline",
      title: "Single professional moving to Amsterdam on a short timeline",
      summary: "You have a start date in a few weeks and need a rental quickly. You cannot fly in for multiple viewings.",
      whatToConfirm: ["What the agency charges", "Whether they can coordinate viewings remotely or by proxy", "Typical time to find a place in your budget"],
      whatToCompare: ["Amsterdam-focused agencies", "Expat brokers with remote viewing support", "Fees and what is included"],
      commonMistakes: ["Paying large fees before understanding the scope", "Assuming the agency guarantees a specific outcome"],
      links: [
        { label: "Amsterdam", href: "/netherlands/amsterdam/" },
        { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
      ],
    },
    {
      id: "family-hague",
      title: "Family relocating to The Hague",
      summary: "You are moving with a partner and children and need a family-sized rental, ideally with school-area awareness.",
      whatToConfirm: ["School catchment and registration requirements", "Whether the agency handles family-sized properties", "Lead time for securing a rental"],
      whatToCompare: ["The Hague–focused agencies", "Relocation agencies that include housing", "Fees and package scope"],
      commonMistakes: ["Underestimating lead time for family housing", "Not clarifying who pays the agency fee"],
      links: [
        { label: "The Hague", href: "/netherlands/the-hague/" },
        { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
      ],
    },
    {
      id: "expat-furnished-long-term",
      title: "Expat searching for furnished long-term housing",
      summary: "You want a furnished place for at least a year to avoid buying furniture before you are settled.",
      whatToConfirm: ["Minimum lease length", "What is included (utilities, internet)", "Fees and deposit"],
      whatToCompare: ["Agencies that specialise in furnished or expat rentals", "Platforms vs agency support", "Total cost over the lease"],
      commonMistakes: ["Signing without reading the inventory and break clauses", "Assuming all furnished rentals allow registration"],
      links: [
        { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
        { label: "After arriving", href: "/netherlands/after-arriving-netherlands/" },
      ],
    },
    {
      id: "new-arrival-remote-viewings",
      title: "New arrival needing viewings handled remotely",
      summary: "You are still abroad and need to secure a rental before you move. You want an agency that can coordinate viewings or provide reliable shortlists.",
      whatToConfirm: ["How they handle viewings for remote clients", "Contract and key handover process", "Fees and any guarantees"],
      whatToCompare: ["Agencies that work with internationals abroad", "Relocation packages that include housing", "Rights and cancellation if the property is not as described"],
      commonMistakes: ["Paying a full fee before viewing or having a trusted representative view", "Not verifying the landlord or contract independently"],
      links: [
        { label: "Relocation agencies", href: "/netherlands/services/relocation-agencies/" },
        { label: "Document translation", href: "/netherlands/document-translation-netherlands/" },
      ],
    },
    {
      id: "couple-agency-vs-platform",
      title: "Couple comparing agency help vs platform-only search",
      summary: "You and your partner are weighing whether to hire an agency or search on housing platforms yourselves.",
      whatToConfirm: ["Your timeline and budget", "Whether you can attend viewings in person", "What each agency actually provides for the fee"],
      whatToCompare: ["Cost of agency vs your time and stress", "Platform options in your city", "Whether a hybrid (e.g. temporary first, then search) works"],
      commonMistakes: ["Assuming agencies have access to all listings", "Paying for full-service when you only need shortlisting or advice"],
      links: [
        { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
        { label: "Relocation services", href: "/netherlands/services/relocation-services/" },
      ],
    },
    {
      id: "tenant-rights-info",
      title: "Tenant who needs rights information as well as search help",
      summary: "You want to rent but also understand your rights, rent regulation, and where to turn for disputes.",
      whatToConfirm: ["What the agency explains about contracts and rights", "Whether they refer to tenant support or the Huurcommissie for disputes"],
      whatToCompare: ["Rental agencies for search", "Tenant support organisations (e.g. !WOON) for rights and disputes", "Official Huurcommissie and Government.nl resources"],
      commonMistakes: ["Relying only on the agency for legal or rights advice", "Not checking the Rent Check or contract terms yourself"],
      links: [
        { label: "Official sources on this page", href: "#official-sources" },
        { label: "Tenant rights section on this page", href: "#tenant-rights" },
      ],
    },
  ],

  faqs: [
    {
      q: "What does a rental agency do in the Netherlands?",
      a: "A rental agency or expat rental broker typically helps with rental search support, shortlisted listings, viewing coordination, communication with landlords or other brokers, and sometimes negotiation or contract and move-in support. They provide an active service rather than only a listings marketplace. I amsterdam describes MVA Certified Expat Brokers as helping with renting, leasing out, or valuing a home and giving information and advice about the Amsterdam housing market.",
    },
    {
      q: "What is the difference between a rental agency and a housing platform?",
      a: "A housing platform is usually an online marketplace where you browse listings and contact landlords or agents yourself. A rental agency or broker provides a service: they search, shortlist, coordinate viewings, and often communicate with landlords on your behalf. Some providers combine elements of both; the key distinction is whether you are mainly self-serving on a platform or paying for guided search and support.",
    },
    {
      q: "Are rental agencies worth it for expats?",
      a: "It depends. They can be worth it when you are moving from abroad and cannot easily attend viewings, when you have a tight timeline, when you are searching in a very competitive city, or when you want furnished or expat-oriented options and prefer a single point of contact. If you have time and can browse platforms and attend viewings yourself, you may not need one. Compare costs and what is included before deciding.",
    },
    {
      q: "Do rental agencies help with furnished apartments?",
      a: "Many do. Some agencies and partners specialise in furnished or expat-oriented rentals. The Hague International Centre and I amsterdam partner pages list providers that offer housing and rental-related services including furnished and corporate housing. Confirm with each provider what they offer and at what cost.",
    },
    {
      q: "What are MVA Certified Expat Brokers?",
      a: "I amsterdam describes MVA Certified Expat Brokers as a partner network of certified expat brokers who can help with renting, leasing out, or valuing a home and give information and advice about the Amsterdam housing market. I amsterdam states they represent a large share of the expat housing market in the Amsterdam Area. You can find them via the I amsterdam partner list; individual brokers may have different fee structures and services.",
    },
    {
      q: "Can rental agencies help if I am still abroad?",
      a: "Some do. Agencies that work with internationals often offer viewing coordination, shortlists, or proxy viewings for clients who cannot be in the Netherlands. Confirm exactly what they provide (e.g. video viewings, representative viewings, contract and key handover) and what fees apply. Relocation agencies sometimes bundle rental search with broader move support.",
    },
    {
      q: "Do rental agencies charge fees?",
      a: "Yes. Fee models vary: some charge the tenant a search or service fee; in some cases the landlord pays the agency. Fees may also be bundled in relocation packages. In the Netherlands, tenant-side fees are regulated in many situations. Always ask for a clear breakdown and check that any tenant fee is permitted. See Government.nl and Huurcommissie for tenant rights and fee rules.",
    },
    {
      q: "What should I check before signing a rental contract?",
      a: "Read the contract carefully: rent, deposit, notice period, what is included (utilities, furniture), and any agency or admin fees. Check whether the rent is regulated (Huurcommissie Rent Check can help with the points-based system). Ensure you can register at the address if you need it for residence or municipality. Verify the identity of the landlord or agent. For disputes later, know that the Huurcommissie can adjudicate certain rent and maintenance issues.",
    },
    {
      q: "What if I have a dispute about rent or maintenance?",
      a: "The Huurcommissie (Rent Tribunal) is a national, independent body that can adjudicate disputes between tenants and landlords about rent levels, maintenance, and service charges in relevant cases. Government.nl provides a step-by-step plan for tenants and information on involving the rent tribunal. Use the Huurcommissie Rent Check to understand maximum rent in the Dutch points-based system. For serious fraud or contract issues, consider legal advice.",
    },
    {
      q: "Should I use a relocation agency instead?",
      a: "It depends on what you need. Relocation agencies typically offer broader support: housing plus registration, settling-in, and sometimes immigration coordination. If you only need rental search and viewing support, a rental agency or expat broker may be enough. If you want one provider for the whole move, a relocation agency is often a better fit. You can also use both: e.g. a rental broker for housing and a relocation agency for the rest.",
    },
    {
      q: "Do I still need to verify listings myself?",
      a: "Yes. No agency can guarantee that every listing or landlord is legitimate. Always verify the property, the contract, and the identity of the landlord or agent. Use the Huurcommissie and Government.nl resources for tenant rights and rent checks. Do not pay large sums before you have a signed contract and, where applicable, key handover or verified check-in.",
    },
    {
      q: "What should I do if I need housing quickly?",
      a: "Consider combining channels: temporary or serviced accommodation for immediate arrival while you search for a long-term rental, and optionally a rental agency or expat broker to speed up the search. In competitive cities, start early and confirm with the agency what they can deliver and in what timeframe. Always verify contracts and fees before committing.",
    },
  ],

  officialSources: rentalAgenciesOfficialSources,

  relatedGuides: [
    {
      title: "Housing guides",
      links: [
        { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
        { label: "Relocation services", href: "/netherlands/services/relocation-services/" },
        { label: "Moving with family", href: "/netherlands/moving-to-netherlands-with-family/" },
      ],
    },
    {
      title: "Arrival & setup",
      links: [
        { label: "After arriving", href: "/netherlands/after-arriving-netherlands/" },
        { label: "Open a bank account", href: "/netherlands/open-bank-account-netherlands/" },
        { label: "Health insurance", href: "/netherlands/health-insurance-netherlands/" },
        { label: "Municipality registration", href: "/netherlands/municipality-registration-netherlands/" },
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
        { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
        { label: "Relocation agencies", href: "/netherlands/services/relocation-agencies/" },
        { label: "Temporary accommodation (planned)", href: "/netherlands/services/temporary-accommodation/" },
      ],
    },
  ],

  relatedCategories: [
    { label: "Housing platforms", href: "/netherlands/services/housing-platforms/" },
    { label: "Relocation agencies", href: "/netherlands/services/relocation-agencies/" },
    { label: "Visa consultants", href: "/netherlands/services/visa-consultants/" },
  ],

  tools: [
    { label: "Relocation Checklist", href: "/netherlands/moving/tools/moving-checklist/", description: "Personalized checklist for your move", status: "live" },
    { label: "Document Readiness Checker", href: "/netherlands/document-readiness-checker/", description: "Check which documents you need", status: "live" },
    { label: "Visa Timeline Estimator", href: "/netherlands/visa-timeline-estimator/", description: "Estimate visa and move timing", status: "live" },
    { label: "Visa Cost Calculator", href: "/netherlands/visa-cost-calculator/", description: "Estimate visa and move costs", status: "live" },
    { label: "Visa Comparison Tool", href: "/netherlands/visa/compare-visas/", description: "Compare visa routes", status: "live" },
  ],

  disclosure: [
    "This page is for information only and does not constitute legal or financial advice.",
    "Provider inclusion is based on real provider data and trusted public-support references. Inclusion does not imply endorsement or guarantee of availability or outcomes.",
    "Users should verify availability, fees, contract terms, and service scope directly. The directory is not necessarily the complete market list of all rental agencies in the Netherlands.",
  ],

  rentalDirectoryMeta: {
    sourceModel: rentalAgenciesMetadata.sourceModel,
    totalRecords: rentalAgenciesMetadata.totalRecords,
    lastChecked: rentalAgenciesMetadata.lastChecked,
  },

  tenantRightsBlock: {
    heading: "Tenant Rights, Safety and Rent Checks",
    paragraphs: [
      "Renters should understand their rights, not only rely on agencies. The Huurcommissie (Rent Tribunal) is a national, independent and impartial body that can adjudicate disputes between tenants and landlords about rent levels, maintenance, and service charges in relevant cases. Government.nl provides a step-by-step plan for tenants and information on involving the rent tribunal.",
      "The Rent Check (Huurcommissie) can help you understand the maximum rent in the Dutch points-based system. Before signing, review your contract and any fees carefully; verify the landlord or agent and ensure you can register at the address if required.",
    ],
    points: [
      "Know your rights: Government.nl and the Huurcommissie explain tenant rights, regulated rent, and dispute procedures.",
      "Use the Rent Check: The Huurcommissie Rent Check helps you assess whether a rent is within the regulated maximum for the property.",
      "Read the contract: Check rent, deposit, notice period, what is included, and any agency or admin fees before signing.",
      "Verify the landlord or agent: Ensure you are dealing with a legitimate party and that the listing matches the contract.",
      "Registration: If you need to register at the address (e.g. for residence or municipality), confirm this is possible before committing.",
    ],
    links: [
      { label: "Government.nl – Rented housing", href: "https://www.government.nl/topics/housing/rented-housing" },
      { label: "Government.nl – Step-by-step plan for tenants", href: "https://www.government.nl/topics/housing/rented-housing/step-by-step-plan-for-tenants" },
      { label: "Huurcommissie", href: "https://www.huurcommissie.nl/" },
      { label: "Huurcommissie Rent Check", href: "https://www.huurcommissie.nl/support/rent-check" },
    ],
  },
};
