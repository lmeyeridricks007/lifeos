/**
 * Startup Visa Advisors (facilitators) category page data for
 * /netherlands/services/startup-visa-advisors/.
 * Directory built from the official RVO facilitator list. Terminology: "facilitator" is the
 * official term; "startup visa advisor" is used for SEO and user clarity.
 */

import type { ServiceCategoryPageData } from "@/src/lib/service-category/types";
import { startupVisaAdvisorsOfficialSources } from "@/src/data/services/official-sources/startup-visa-advisors";
import { startupFacilitatorsMetadata } from "@/src/data/services/providers/startup-visa-advisors";

/* Hero image prompt for future asset:
   "Cinematic editorial image for a Dutch startup visa advisors page, showing organized founder planning materials, passport, startup notes, residence-permit paperwork, document checklist, and a modern innovation-focused Dutch business setting, natural daylight, premium startup magazine aesthetic, wide 16:9 banner."
*/

export const startupVisaAdvisorsCategoryPage: ServiceCategoryPageData = {
  slug: "startup-visa-advisors",
  parentSlug: "services",
  country: "netherlands",
  path: "/netherlands/services/startup-visa-advisors/",

  seo: {
    title: "Startup Visa Advisors in the Netherlands: Search the Official Facilitator List",
    description:
      "Search real startup facilitators for the Dutch startup visa route and learn how facilitators help foreign founders with residence, documents, and business setup.",
    keywords: [
      "startup visa advisors netherlands",
      "startup visa consultant netherlands",
      "startup facilitator netherlands",
      "dutch startup visa facilitator",
      "startup visa help netherlands",
      "netherlands startup visa advisors",
      "foreign startup residence permit netherlands",
      "startup facilitator list netherlands",
      "rvo facilitator startups",
      "startup residence permit advisor netherlands",
      "mvv startup visa netherlands",
      "startup entrepreneur facilitator netherlands",
    ],
  },

  hero: {
    eyebrow: "SERVICES",
    title: "Startup Visa Advisors in the Netherlands",
    subtitle:
      "Search the official facilitator list and learn how startup facilitators help foreign founders with the Dutch startup residence route, documents, and early business planning.",
    image: {
      src: "/images/heroes/startup-visa-facilitator-desk-netherlands.png",
      alt: "A professional desk setup for a foreign founder seeking a Dutch startup visa, featuring documents like 'Startup Visa Application,' 'Facilitator Agreement,' and 'Business Plan.' A laptop displays a task checklist, a passport is visible, and maps are shown on a tablet and a physical paper. In the blurred background, two people discuss business, signifying expert advisory support for startup entrepreneurs in the Netherlands.",
      imagePrompt:
        "Cinematic editorial image for a Dutch startup visa advisors page, showing organized founder planning materials, passport, startup notes, residence-permit paperwork, document checklist, and a modern innovation-focused Dutch business setting, natural daylight, premium startup magazine aesthetic, wide 16:9 banner.",
    },
    ctas: [
      { label: "Compare facilitators", href: "#compare-providers", primary: true },
      { label: "Read Startup Visa Guide", href: "/netherlands/startup-visa-netherlands/", primary: false },
    ],
  },

  tocItems: [
    { id: "overview", label: "Overview" },
    { id: "what-is-facilitator", label: "What a Startup Facilitator Is" },
    { id: "why-it-matters", label: "Why It Matters for the Startup Visa Route" },
    { id: "compare-providers", label: "Compare Providers" },
    { id: "what-to-compare", label: "What to Compare Between Facilitators" },
    { id: "typical-costs", label: "Typical Costs" },
    { id: "when-extra-help", label: "When You May Need Extra Help" },
    { id: "scenarios", label: "Example Scenarios" },
    { id: "faq", label: "FAQs" },
    { id: "official-sources", label: "Official Sources" },
  ],

  intro: {
    heading: "How Startup Visa Advisors Help Foreign Founders in the Netherlands",
    paragraphs: [
      "This page helps founders understand the startup-facilitator category in the Netherlands. The official startup residence route requires you to work with a facilitator: a business mentor who meets the conditions set by the IND and RVO. The RVO (Netherlands Enterprise Agency) keeps the official list of facilitators who meet those requirements.",
      "We use “startup visa advisor” as a user-friendly description; the official term is facilitator. This page lets you search the real facilitator list and understand what facilitators do. Not every founder needs the startup route, and not every startup consultant or business coach qualifies as an official facilitator for this residence permit.",
    ],
    links: [
      { label: "All services hub", href: "/netherlands/services/" },
      { label: "Startup visa guide", href: "/netherlands/startup-visa-netherlands/" },
      { label: "Document translation", href: "/netherlands/document-translation-netherlands/" },
      { label: "Apostille documents", href: "/netherlands/apostille-documents-netherlands/" },
    ],
  },

  whatIsFacilitator: {
    heading: "What a Startup Facilitator Is",
    paragraphs: [
      "The facilitator is an official part of the Dutch startup residence route. You and the facilitator must establish the partnership in a signed agreement. The RVO states that the facilitator provides a tailor-made support package depending on your needs, and may help with operational management, marketing, research, and investment acquisition for setting up an innovative business.",
      "The facilitator is not the same as a recognised sponsor (used for the highly skilled migrant route). The IND states that the facilitator does not have the legal position of sponsor. The facilitator is also not automatically the same as a lawyer or visa consultant—though you may use those services separately for documents, legal advice, or residence strategy.",
    ],
  },

  whyFacilitatorMatters: {
    heading: "Why a Facilitator Matters for the Dutch Startup Route",
    paragraphs: [
      "Working with a facilitator is one of the core conditions for the residence permit for startups. Business.gov.nl and the IND both state that the startup entrepreneur must work together with a facilitator in the Netherlands. The facilitator relationship helps demonstrate structured support for your innovative business and can support you from idea to company.",
      "Official documents and process readiness still matter: the IND states that foreign documents for startup-related residence may need to be legalised and translated into Dutch, English, French, or German.",
    ],
    cards: [
      {
        title: "Required relationship",
        description: "The startup residence permit requires a (signed) agreement with a facilitator. You cannot use this route without working with a facilitator from the official list.",
      },
      {
        title: "Structured startup support",
        description: "The facilitator provides tailor-made support (e.g. operations, marketing, research, investment). This is part of the official design of the route.",
      },
      {
        title: "Not a sponsor",
        description: "The facilitator does not have the legal position of sponsor. The IND distinguishes clearly between the facilitator role and the recognised sponsor role used for other permit types.",
      },
      {
        title: "Not a guarantee of approval",
        description: "Being on the RVO list means the facilitator meets the official conditions. It does not guarantee that your application will be approved; the IND assesses each application.",
      },
    ],
  },

  requirementCards: [],
  coverageCards: [],

  comparisonFactors: [
    {
      id: "experience-innovative",
      title: "Experience with innovative startups",
      description: "Facilitators must have experience guiding innovative startups. Compare how well their focus matches your sector and stage.",
    },
    {
      id: "sector-relevance",
      title: "Relevance to your sector or business model",
      description: "Some facilitators specialise in tech, agrifood, energy, or other domains. Match their expertise to your startup.",
    },
    {
      id: "mentoring-quality",
      title: "Quality of mentoring support",
      description: "Beyond paperwork, consider the depth of mentoring, access to networks, and strategic value they offer.",
    },
    {
      id: "communication-language",
      title: "Communication style and language",
      description: "Confirm that key communication and materials are available in a language you are comfortable with.",
    },
    {
      id: "network-value",
      title: "Network value for investment and market entry",
      description: "Many facilitators offer access to investors, partners, and programmes. Consider fit for your growth plans.",
    },
    {
      id: "agreement-expectations",
      title: "Clarity of expectations in the facilitator agreement",
      description: "The agreement with the facilitator is a formal requirement. Ensure scope, duration, and support are clear.",
    },
    {
      id: "founder-profile-fit",
      title: "Fit for your stage and founder profile",
      description: "Some facilitators work best with very early-stage ideas; others with more developed ventures. Choose a fit.",
    },
    {
      id: "no-single-best",
      title: "No single best for every founder",
      description: "The right facilitator depends on your startup, innovation model, sector, founder profile, and the kind of support you need to move from idea to company.",
    },
  ],

  providers: [],

  comparisonSection: {
    title: "Compare startup facilitators",
    intro: "Add up to three facilitators to your shortlist to compare them side by side. All listed facilitators are on the official RVO list. We do not rank or endorse; the right fit depends on your sector, stage, and the kind of support you need. Confirm availability and terms directly with the facilitator.",
  },

  costCards: [
    {
      id: "facilitator-support",
      title: "Facilitator support",
      value: "€2,000–€15,000+ per programme",
      note: "Many facilitators charge a programme or annual fee (often €2k–€15k+); some take equity (e.g. 2–8%) or offer subsidised/free spots. Scope and pricing differ by provider—confirm directly.",
      disclaimer: "Indicative; confirm with facilitator.",
    },
    {
      id: "advisory-package",
      title: "Advisory / mentoring package",
      value: "€100–€300/hr or bundled",
      note: "Standalone mentoring is often €100–€300/hr. Many facilitators bundle mentoring into a programme fee. Confirm what’s included before committing.",
      disclaimer: "Indicative; confirm with facilitator.",
    },
    {
      id: "translation-legalization",
      title: "Translation / legalisation",
      value: "€30–€80/page; €20–€50/doc",
      note: "Sworn translations are typically €30–€80 per page. Apostille or legalisation is often €20–€50 per document. These are separate from facilitator fees.",
      link: { label: "Document translation", href: "/netherlands/document-translation-netherlands/" },
      disclaimer: "Indicative; confirm with provider.",
    },
    {
      id: "legal-advice",
      title: "Legal advice",
      value: "€150–€350/hr or fixed fee",
      note: "Immigration lawyers typically charge €150–€350/hr or a fixed fee for applications, objections, or appeals. Get a written quote before instructing.",
      link: { label: "Immigration lawyers", href: "/netherlands/services/immigration-lawyers/" },
      disclaimer: "Indicative; get a quote.",
    },
    {
      id: "relocation-support",
      title: "Relocation support",
      value: "€1,500–€5,000+ per move",
      note: "Relocation agencies often charge from around €1,500 for basic packages to €5,000+ for full-service moves. Employer-funded moves are common.",
      link: { label: "Relocation agencies", href: "/netherlands/services/relocation-agencies/" },
      disclaimer: "Indicative; confirm with agency.",
    },
  ],

  whoNeedsExtraHelp: [
    {
      id: "legal-refusal-objection",
      title: "Needing legal advice on a refusal or objection",
      description: "If your application is refused or you need to object or appeal, an immigration lawyer is appropriate. The facilitator does not replace legal representation.",
      link: { label: "Immigration lawyers", href: "/netherlands/services/immigration-lawyers/" },
    },
    {
      id: "document-translation-legalization",
      title: "Needing document translation or legalisation",
      description: "Foreign documents often need apostille/legalisation and sworn translation. Use our document guides and providers.",
      link: { label: "Document translation", href: "/netherlands/document-translation-netherlands/" },
    },
    {
      id: "broader-visa-strategy",
      title: "Needing broader visa / residence strategy",
      description: "If you are unsure whether the startup route is right for you, a visa consultant can help with route comparison and eligibility.",
      link: { label: "Visa consultants", href: "/netherlands/services/visa-consultants/" },
    },
    {
      id: "family-relocation",
      title: "Needing family relocation support",
      description: "Relocation agencies can help with housing, registration, and settling in for you and your family.",
      link: { label: "Relocation agencies", href: "/netherlands/services/relocation-agencies/" },
    },
    {
      id: "post-startup-self-employed",
      title: "Moving from startup route to self-employed route later",
      description: "After the startup year, you may apply for a self-employed residence permit or another type. The IND publishes the conditions.",
      link: { label: "IND – Self-employed person", href: "https://ind.nl/en/residence-permits/work/residence-permit-self-employed-person" },
    },
    {
      id: "relocation-coordination",
      title: "Needing practical relocation coordination",
      description: "Housing, registration, and day-to-day move logistics are often handled by relocation agencies or by you with official guides.",
      link: { label: "After arriving", href: "/netherlands/after-arriving-netherlands/" },
    },
  ],

  scenarios: [
    {
      id: "choosing-route",
      title: "Founder choosing between startup route and another path",
      summary: "You are a foreign founder and want to understand whether the Dutch startup residence route fits you, or whether another permit type is better.",
      whatToConfirm: ["Eligibility for the startup route", "Whether you have or can find a facilitator", "Alternative routes (e.g. self-employed, highly skilled migrant)"],
      whatToCompare: ["Startup visa guide and IND conditions", "Visa consultants for route advice", "This facilitator list"],
      commonMistakes: ["Assuming any mentor or incubator qualifies as a facilitator", "Skipping the official RVO list"],
      links: [
        { label: "Startup visa guide", href: "/netherlands/startup-visa-netherlands/" },
        { label: "Visa consultants", href: "/netherlands/services/visa-consultants/" },
      ],
    },
    {
      id: "finding-facilitator",
      title: "Founder finding a facilitator from the official list",
      summary: "You have decided on the startup route and need to choose a facilitator from the RVO list and agree on support.",
      whatToConfirm: ["That the facilitator is still on the RVO list", "Scope of the facilitator agreement", "Fees, duration, and what support is included"],
      whatToCompare: ["Sector fit, mentoring quality, and programme access", "Communication and language", "This directory and the official RVO page"],
      commonMistakes: ["Choosing a facilitator without a signed agreement", "Assuming all listed facilitators are taking new founders"],
      links: [
        { label: "Compare facilitators", href: "#compare-providers" },
        { label: "RVO – Facilitator for startups", href: "https://english.rvo.nl/topics/residence-permit-foreign-startups/facilitator-startups" },
      ],
    },
    {
      id: "incomplete-documents",
      title: "Founder with innovative idea but incomplete documents",
      summary: "You have a facilitator but your foreign documents are not yet legalised or translated.",
      whatToConfirm: ["Exact document list from IND or facilitator", "Legalisation (apostille) and translation requirements", "Deadlines for the application"],
      whatToCompare: ["Document translation and apostille services", "Timeline so you do not delay the application"],
      commonMistakes: ["Using non-sworn translations", "Missing apostille where required"],
      links: [
        { label: "Document translation", href: "/netherlands/document-translation-netherlands/" },
        { label: "Apostille documents", href: "/netherlands/apostille-documents-netherlands/" },
      ],
    },
    {
      id: "mvv-residence-abroad",
      title: "Founder moving from abroad and needing MVV + residence planning",
      summary: "You are outside the Netherlands and may need an MVV as well as the startup residence permit. You and your facilitator can apply through the IND.",
      whatToConfirm: ["Whether you need an MVV for your nationality", "That your facilitator is on the RVO list", "Application procedure and processing time (e.g. up to 3 months)"],
      whatToCompare: ["IND and Business.gov.nl application steps", "Document readiness before applying"],
      commonMistakes: ["Applying without a facilitator agreement", "Underestimating processing time"],
      links: [
        { label: "IND – Start-up", href: "https://ind.nl/en/residence-permits/work/start-up" },
        { label: "Business.gov.nl – Residence permit for foreign startups", href: "https://business.gov.nl/coming-to-the-netherlands/permits-and-visa/residence-permit-for-foreign-startups/" },
      ],
    },
    {
      id: "translation-legalization-support",
      title: "Founder needing translation / legalisation support",
      summary: "Your documents need to be legalised and translated before you can submit your startup residence application.",
      whatToConfirm: ["Which documents need apostille and which need sworn translation", "Language requirements (Dutch, English, French, or German per IND)"],
      whatToCompare: ["Document translation and legalisation providers", "Cost and turnaround time"],
      commonMistakes: ["Skipping legalisation or using informal translations", "Missing the correct language"],
      links: [
        { label: "Document translation", href: "/netherlands/document-translation-netherlands/" },
        { label: "Document legalization", href: "/netherlands/document-legalization-netherlands/" },
      ],
    },
    {
      id: "post-startup-year",
      title: "Founder planning post-startup-year transition",
      summary: "You are in or nearing the end of your startup residence period and are considering the self-employed permit or another route.",
      whatToConfirm: ["Conditions for the self-employed residence permit or other permit types", "Timing and application procedure", "Whether your facilitator can advise on transition"],
      whatToCompare: ["IND – Self-employed person", "Visa consultants for strategy"],
      commonMistakes: ["Leaving the transition to the last moment", "Assuming the same facilitator covers the next permit type"],
      links: [
        { label: "IND – Residence permit self-employed person", href: "https://ind.nl/en/residence-permits/work/residence-permit-self-employed-person" },
        { label: "Startup visa guide", href: "/netherlands/startup-visa-netherlands/" },
      ],
    },
  ],

  faqs: [
    {
      q: "Do I need a facilitator for the Dutch startup visa?",
      a: "Yes. Business.gov.nl and the IND state that one of the conditions for the residence permit for startups is that the startup entrepreneur works together with a facilitator in the Netherlands. You and the facilitator must establish the partnership in a signed agreement. You cannot use this residence route without a facilitator from the official list.",
    },
    {
      q: "What is the difference between a startup facilitator and a startup visa consultant?",
      a: "The facilitator is an official requirement for the startup residence route: they must be on the RVO list and provide the agreed support. A visa consultant may help you understand the process, prepare documents, or compare routes but does not replace the need for a facilitator. Not every startup consultant or business coach is an official facilitator.",
    },
    {
      q: "Where can I find the official facilitator list?",
      a: "The RVO (Netherlands Enterprise Agency) keeps the official list. You can find it at english.rvo.nl under the topic “Residence permit foreign startups” – “Facilitator for startups”. This page also provides a searchable directory sourced from that list.",
    },
    {
      q: "Does the RVO approve facilitators?",
      a: "The IND states that the RVO keeps a list of facilitators who meet the official requirements. Facilitators must meet conditions such as experience with innovative startups, financial health, no majority interest in your company, and no close family relationship. The RVO page describes these conditions.",
    },
    {
      q: "Can any startup mentor act as a facilitator?",
      a: "No. Only facilitators who meet the official conditions and appear on the RVO list qualify for the startup residence route. General business coaches or mentors who are not on the list cannot act as the required facilitator for this permit.",
    },
    {
      q: "Does a facilitator guarantee startup visa approval?",
      a: "No. Being on the RVO list means the facilitator meets the official conditions. The IND assesses each application and may refuse it on other grounds. Inclusion in the directory does not imply endorsement or that the facilitator is currently taking clients.",
    },
    {
      q: "Can the facilitator apply for the permit?",
      a: "Business.gov.nl states that you or your facilitator in the Netherlands can apply for the residence permit for startups through the IND. Confirm with your facilitator how the application will be submitted.",
    },
    {
      q: "Do I also need an MVV?",
      a: "It depends on your nationality. If you are abroad and an MVV is required, you will need both the MVV and the residence permit. The IND explains the procedure for applying from abroad.",
    },
    {
      q: "Do my documents need legalization or translation?",
      a: "The IND states that official foreign documents for startup-related residence routes may need to be legalised and translated into Dutch, English, French, or German. Check the exact requirements with the IND or your facilitator and use our document translation and apostille guides.",
    },
    {
      q: "What happens after the first startup year?",
      a: "At the end of the startup period, you may apply for a self-employed residence permit or another permit type if you meet the conditions. The IND publishes the requirements for the residence permit for self-employed persons and other routes.",
    },
    {
      q: "Do I need a lawyer as well?",
      a: "For general facilitator support and the application, you may not need a lawyer. For legal advice, objections, appeals, or complex residence strategy, an immigration lawyer is appropriate. Visa consultants can help with process and document preparation.",
    },
    {
      q: "Is the facilitator list free to use?",
      a: "Yes. The RVO publishes the list of facilitators on its website. This page’s directory is based on that list and is free to use. We do not charge for access to the list.",
    },
  ],

  officialSources: startupVisaAdvisorsOfficialSources,

  relatedGuides: [
    {
      title: "Startup & residence guides",
      links: [
        { label: "Startup visa (planned)", href: "/netherlands/startup-visa-netherlands/" },
        { label: "Residence permit (planned)", href: "/netherlands/residence-permit-netherlands/" },
        { label: "MVV (planned)", href: "/netherlands/mvv-netherlands/" },
        { label: "Self-employed (planned)", href: "/netherlands/self-employed-netherlands/" },
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
        { label: "Relocation agencies", href: "/netherlands/services/relocation-agencies/" },
      ],
    },
  ],

  relatedCategories: [
    { label: "Visa consultants", href: "/netherlands/services/visa-consultants/" },
    { label: "Immigration lawyers", href: "/netherlands/services/immigration-lawyers/" },
    { label: "Relocation agencies", href: "/netherlands/services/relocation-agencies/" },
  ],

  tools: [
    { label: "Document Readiness Checker", href: "/netherlands/document-readiness-checker/", description: "Check which documents you need", status: "live" },
    { label: "Visa Timeline Estimator", href: "/netherlands/visa-timeline-estimator/", description: "Estimate visa processing and move timing", status: "live" },
    { label: "Visa Cost Calculator", href: "/netherlands/visa-cost-calculator/", description: "Estimate visa and move costs", status: "live" },
    { label: "Visa Comparison Tool", href: "/netherlands/visa/compare-visas/", description: "Compare visa routes", status: "live" },
    { label: "Relocation Checklist", href: "/netherlands/moving/tools/moving-checklist/", description: "Personalized checklist for your move", status: "live" },
  ],

  disclosure: [
    "This page is for information only and does not constitute legal or immigration advice.",
    "Facilitator inclusion comes from the official RVO facilitator list. Inclusion does not imply endorsement, availability, or suitability for every founder.",
    "Users should verify current list status, facilitator availability, fees, and fit directly. Rules and lists can change.",
  ],

  facilitatorDirectoryMeta: {
    lastChecked: startupFacilitatorsMetadata.lastChecked,
    totalRecords: startupFacilitatorsMetadata.totalRecords,
    sourceHref: startupFacilitatorsMetadata.sourceHref,
    sourceLabel: startupFacilitatorsMetadata.sourceLabel,
  },
};
