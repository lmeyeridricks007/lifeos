/**
 * Visa consultants category page data for /netherlands/services/visa-consultants/.
 * IND is the authority; consultants support process and preparation. No invented visa rules.
 */

import type { ServiceCategoryPageData } from "@/src/lib/service-category/types";
import { visaConsultantsProviders } from "@/src/data/companies-registry";
import { visaConsultantsOfficialSources } from "@/src/data/services/official-sources/visa-consultants";

/* Hero image prompt for future asset/CMS:
   "Cinematic editorial image for a Dutch visa consultants category page for expats, showing organized immigration planning materials, passport, MVV or residence-permit paperwork, document checklist, notebook, and a calm professional advisory setting, subtle Dutch context, natural daylight, premium magazine aesthetic, wide 16:9 banner."
*/

export const visaConsultantsCategoryPage: ServiceCategoryPageData = {
  slug: "visa-consultants",
  parentSlug: "immigration-visas",
  country: "netherlands",
  path: "/netherlands/services/visa-consultants/",

  seo: {
    title: "Visa Consultants in the Netherlands for Expats: MVV, Permits, Startup & Family Routes",
    description:
      "Find out when expats may need a visa consultant in the Netherlands, what support they offer, how to compare providers, and which official sources to check first.",
    keywords: [
      "visa consultants netherlands",
      "visa consultant netherlands expat",
      "dutch visa consultant",
      "netherlands visa help expat",
      "mvv consultant netherlands",
      "residence permit consultant netherlands",
      "highly skilled migrant consultant netherlands",
      "startup visa consultant netherlands",
      "family migration consultant netherlands",
      "netherlands visa service expat",
      "visa application help netherlands",
      "recognized sponsor netherlands consultant",
    ],
  },

  hero: {
    eyebrow: "SERVICES",
    title: "Visa Consultants for Expats in the Netherlands",
    subtitle:
      "Understand when visa-consultant support may be useful, which permit routes often create confusion, and how to compare providers for MVV, residence, startup, family, and process-support needs.",
    image: {
      src: "/images/heroes/expatlife-netherlands-visa-consultants-hero.png",
      alt: "Cinematic editorial image depicting a professional desk setup for expat visa planning in the Netherlands. It features a dark red passport, a smartphone, documents titled 'Visa Application,' 'MVV Process,' and 'Residence Permit' on a leather portfolio, a laptop displaying a global map, and a tablet showing a digital Dutch visa application workflow. In the blurred background, two individuals are engaged in a professional consultation, with an urban street visible through large windows, conveying a premium and trustworthy atmosphere for immigration support.",
      imagePrompt:
        "Cinematic editorial image for a Dutch visa consultants category page for expats, showing organized immigration planning materials, passport, MVV or residence-permit paperwork, document checklist, notebook, and a calm professional advisory setting, subtle Dutch context, natural daylight, premium magazine aesthetic, wide 16:9 banner.",
    },
    ctas: [
      { label: "Explore Immigration Services", href: "/netherlands/services/immigration-visas/", primary: true },
      { label: "Read Visa Guides", href: "#related-guides", primary: false },
    ],
  },

  tocItems: [
    { id: "overview", label: "Overview" },
    { id: "when-need-consultant", label: "When You May Need a Visa Consultant" },
    { id: "common-situations", label: "Common Visa and Permit Situations" },
    { id: "what-to-compare", label: "What to Compare Between Consultants" },
    { id: "compare-providers", label: "Compare Providers" },
    { id: "typical-costs", label: "Typical Costs" },
    { id: "when-not-need", label: "When You May Not Need a Consultant" },
    { id: "scenarios", label: "Example Scenarios" },
    { id: "faq", label: "FAQs" },
    { id: "official-sources", label: "Official Sources" },
  ],

  intro: {
    heading: "How Visa Consultants Help Expats in the Netherlands",
    paragraphs: [
      "This page helps you understand the visa-consultants category in the Netherlands. The IND (Immigration and Naturalisation Service) is the official authority that assesses applications from foreign nationals who want to live in the Netherlands or become Dutch citizens. Visa consultants do not replace the IND—they may help with process guidance, eligibility understanding, document planning, timeline coordination, and preparation for supported application routes.",
      "Not every expat needs a consultant. Some people only need official IND guidance, employer support, or institution support. Others benefit from structured process support before or alongside official applications. This hub helps you decide when a consultant may be useful and how to compare providers.",
    ],
    links: [
      { label: "All services hub", href: "/netherlands/services/" },
      { label: "Apostille documents", href: "/netherlands/apostille-documents-netherlands/" },
      { label: "Document translation", href: "/netherlands/document-translation-netherlands/" },
      { label: "Dutch cities overview", href: "/netherlands/cities/" },
    ],
  },

  requirementCards: [
    {
      id: "employer-supported",
      title: "Straightforward employer-supported route",
      description:
        "If you have a job offer from an employer recognised by the IND as a sponsor, only that sponsor can apply for your highly skilled migrant permit. A consultant may help you understand the process and timeline but cannot submit the application for the employer.",
      whoItAppliesTo: "Highly skilled migrants with a recognised sponsor",
      link: { label: "IND – Highly skilled migrant", href: "https://ind.nl/en/residence-permits/work/highly-skilled-migrant" },
    },
    {
      id: "family-documents",
      title: "Family migration with documents from abroad",
      description:
        "Partner and family reunification often require legalised and translated documents. A consultant can help with requirement clarity, document checklists, and preparation; complex cases may need a lawyer.",
      whoItAppliesTo: "Partners and families preparing for reunification",
      link: { label: "Government.nl – Immigration", href: "https://www.government.nl/topics/immigration-to-the-netherlands" },
    },
    {
      id: "startup-entrepreneur",
      title: "Startup or entrepreneur route",
      description:
        "The IND states that official foreign documents for start-up-related residence routes may need legalisation and translation into Dutch, English, French, or German. Consultants can help with route assessment and document planning.",
      whoItAppliesTo: "Start-up founders and entrepreneurs",
      link: { label: "IND – Start-up", href: "https://ind.nl/en/residence-permits/work/start-up" },
    },
    {
      id: "unsure-mvv",
      title: "Unsure whether MVV is required",
      description:
        "The IND states that if an MVV is required, you apply for the MVV and residence permit at the same time. A consultant can help you understand the sequence and what to prepare.",
      whoItAppliesTo: "Applicants from abroad who need clarity on MVV and residence steps",
      link: { label: "IND – Apply for MVV and residence permit from abroad", href: "https://ind.nl/en/apply-for-mvv-and-residence-permit-from-abroad" },
    },
    {
      id: "study-work-institution",
      title: "Study or work route with institution support",
      description:
        "Students and researchers may be guided by their institution; some work routes are fully employer-led. A consultant may still help with personal timeline planning or document readiness.",
      whoItAppliesTo: "Students, researchers, and employees with strong institutional or employer support",
      link: { label: "Netherlands Worldwide – Visa", href: "https://www.netherlandsworldwide.nl/visa-the-netherlands" },
    },
    {
      id: "unsure-route",
      title: "Unsure which route applies",
      description:
        "If your situation is unclear—e.g. you are not sure whether you need an MVV, or which permit type fits—a consultant can help with route orientation and what to confirm with the IND or your employer.",
      whoItAppliesTo: "People with unclear entry or residence purpose",
      link: { label: "IND – Immigration", href: "https://ind.nl/en" },
    },
  ],

  coverageCards: [],

  comparisonFactors: [
    {
      id: "route-specialisation",
      title: "Route specialisation",
      description: "Some consultants focus on work permits, others on family migration or start-up routes. Match the provider to your situation.",
    },
    {
      id: "experience-case-type",
      title: "Experience with your case type",
      description: "Ask whether they regularly work with your type of application (e.g. MVV from abroad, highly skilled migrant, family reunification, start-up).",
    },
    {
      id: "english",
      title: "English-language communication",
      description: "Not all providers offer full English. Confirm before engaging if this matters to you.",
    },
    {
      id: "transparent-pricing",
      title: "Transparent pricing",
      description: "Fees vary widely. Request written clarity on scope, what is included, and whether official IND or government fees are included.",
    },
    {
      id: "process-document-support",
      title: "Process clarity and document support",
      description: "Good consultants explain the steps, document requirements, and timeline. They should clearly state when the sponsor or you must submit forms yourselves.",
    },
    {
      id: "employer-startup-families",
      title: "Employer, startup, or family focus",
      description: "Some work mainly with employers or mobility programmes; others with families or start-ups. Choose a fit for your situation.",
    },
    {
      id: "legal-coordination",
      title: "Coordination with legal counsel when needed",
      description: "For objections, appeals, or complex legal issues, a lawyer may be required. Consultants should clarify when they refer to a lawyer.",
    },
    {
      id: "no-single-best",
      title: "No single “best” for every case",
      description:
        "The right provider depends on your route, complexity, language needs, document situation, and whether you need structured process support or full legal advice. Compare options and verify scope directly.",
    },
  ],

  providers: visaConsultantsProviders,

  comparisonSection: {
    title: "Compare visa consultants and support services",
    intro:
      "The providers below are shown with their main office locations. Add up to three to your shortlist to compare typical costs, services, and who each is best for. Consultants do not replace the IND or a recognised sponsor; they help you prepare. Always confirm fees and scope directly with the provider.",
  },

  costCards: [
    {
      id: "initial-consultation",
      title: "Initial consultation",
      value: "€100–250 (fixed or hourly)",
      note: "Many consultants offer a one-off fixed-fee first session; others charge by the hour. Some offer a free eligibility assessment. Confirm scope and price before booking.",
      disclaimer: "Indicative; check directly with the consultant",
    },
    {
      id: "route-assessment",
      title: "Route assessment",
      value: "€75–200 (one-off or bundled)",
      note: "Understanding which permit or procedure applies to you. May be bundled with an initial consultation or sold as a standalone assessment.",
      disclaimer: "Indicative; confirm with provider",
    },
    {
      id: "document-checklist-package",
      title: "Document checklist / process package",
      value: "€200–800 (package-dependent)",
      note: "Structured support for document readiness and timeline. Pre-scan and DIY packages often at the lower end; full handling or multi-step packages higher.",
      disclaimer: "Indicative; confirm scope and fee",
    },
    {
      id: "family-migration-support",
      title: "Family migration support",
      value: "€500–2,500+ (case-dependent)",
      note: "Partner and family reunification often involve multiple documents and requirements. Simple cases toward the lower range; additional family members or complexity increase cost.",
      disclaimer: "Indicative; get a written quote",
    },
    {
      id: "startup-route-support",
      title: "Startup route support",
      value: "€1,000–5,000+ (complexity-dependent)",
      note: "Start-up permit preparation (criteria, business plan, document legalisation and translation) is typically more involved. Facilitator fees are separate; consultant support varies by scope.",
      disclaimer: "Indicative; confirm with provider",
    },
    {
      id: "multi-step-coordination",
      title: "Multi-step case coordination",
      value: "€1,500–4,000+ (scope-dependent)",
      note: "Ongoing support across MVV, residence permit, and follow-up steps. Request a written scope and fee structure before committing.",
      disclaimer: "Indicative; get a written quote",
    },
  ],

  whoNeedsExtraHelp: [
    {
      id: "unclear-route",
      title: "Expats unsure which visa or permit route applies",
      description: "A consultant can help with route orientation and what to confirm with the IND or your employer. Start with official IND and Netherlands Worldwide information, then consider a structured consultation if needed.",
    },
    {
      id: "mvv-from-abroad",
      title: "Applying for MVV and residence permit from abroad",
      description: "The IND states you apply for both at the same time when an MVV is required. Consultants can help with process clarity, document planning, and timeline—but cannot submit on your behalf where the law requires the applicant or sponsor to do so.",
    },
    {
      id: "startup-founder",
      title: "Startup founders exploring the start-up permit",
      description: "The start-up scheme has specific innovation and feasibility criteria; foreign documents may need legalisation and translation. Advisors can help with eligibility and document planning.",
    },
    {
      id: "family-without-lawyer",
      title: "Families preparing for reunification without a lawyer",
      description: "Many families use IND guidance and document preparation (translation, legalisation) with or without a consultant. For complex or disputed cases, a lawyer may be more appropriate.",
    },
  ],

  legalMatters: [
    {
      id: "mvv-residence-abroad",
      title: "MVV + residence permit from abroad",
      description:
        "When an MVV is required, you apply for the MVV and residence permit at the same time (IND). After approval, you collect the MVV and then the residence permit after arrival (Government.nl). A consultant can help you understand the sequence and document requirements.",
      whenComplex: "Document disputes, previous refusals, or unclear eligibility",
      link: { label: "IND – Apply for MVV and residence permit from abroad", href: "https://ind.nl/en/apply-for-mvv-and-residence-permit-from-abroad" },
    },
    {
      id: "highly-skilled-migrant",
      title: "Highly skilled migrant route",
      description:
        "Only an employer recognised by the IND can apply for a highly skilled migrant permit. Government.nl states recognised sponsors can use an accelerated procedure. A consultant can help you and your employer understand the process but cannot replace the recognised-sponsor requirement.",
      whenComplex: "Employer not yet a recognised sponsor; unclear salary or role criteria",
      link: { label: "IND – Highly skilled migrant", href: "https://ind.nl/en/residence-permits/work/highly-skilled-migrant" },
    },
    {
      id: "startup-route",
      title: "Startup route",
      description:
        "The IND states that official foreign documents for start-up-related residence may need legalisation and translation (Dutch, English, French, or German). Consultants can help with criteria, document planning, and application preparation.",
      whenComplex: "Innovation or feasibility criteria unclear; document gaps",
      link: { label: "IND – Start-up", href: "https://ind.nl/en/residence-permits/work/start-up" },
    },
    {
      id: "family-reunification",
      title: "Family reunification / partner migration",
      description: "Partner and family migration have specific document, income, and housing requirements. Consultants can help with checklists and preparation; complex or legal issues may need a lawyer.",
      whenComplex: "EU-law issues, disputed documents, or income/housing exceptions",
      link: { label: "Family reunification (planned guide)", href: "/netherlands/family-reunification-netherlands/" },
    },
    {
      id: "permit-orientation",
      title: "Permit route orientation",
      description: "Understanding which permit or procedure applies to you—work, study, family, start-up, or other. Consultants can help map options and next steps.",
      whenComplex: "Multiple possible routes or status changes",
      link: { label: "Government.nl – How do I apply for a residence permit?", href: "https://www.government.nl/topics/immigration-to-the-netherlands/question-and-answer/how-do-i-apply-for-a-residence-permit-for-the-netherlands" },
    },
    {
      id: "recognised-sponsor",
      title: "Recognised sponsor questions",
      description: "The IND has a public register of recognised sponsors. Consultants can help employers or you understand how to become or work with a sponsor.",
      whenComplex: "Employer not yet recognised; sponsorship obligations",
      link: { label: "IND – Public register of recognised sponsors", href: "https://ind.nl/en/public-register-recognised-sponsors" },
    },
    {
      id: "entry-document-checklist",
      title: "Entry planning and document checklists",
      description: "Planning your move: what to prepare, in what order, and how it fits with IND procedures. Consultants can provide structured checklists and timeline guidance.",
      whenComplex: "Tight deadlines, multiple dependants, or documents from several countries",
      link: { label: "Netherlands Worldwide – Visa", href: "https://www.netherlandsworldwide.nl/visa-the-netherlands" },
    },
    {
      id: "transition-to-application",
      title: "Transition from preparation to official application",
      description: "Moving from document readiness and planning to the actual submission. Consultants clarify who must submit (applicant or sponsor) and what they can and cannot do.",
      whenComplex: "Unclear who submits; need for authorisation or representation",
      link: { label: "IND – Immigration", href: "https://ind.nl/en" },
    },
  ],

  whenNotNeed: {
    heading: "Cases That May Not Need a Visa Consultant",
    paragraphs: [
      "Some straightforward cases can be handled directly through official IND guidance. Highly skilled migrant applications are submitted by a recognised sponsor—your employer or institution. Some students are guided by their institution. Some people only need document translation, legalisation, or a relocation agency rather than a visa consultant. Objections, appeals, and disputes may point toward an immigration lawyer instead.",
    ],
    points: [
      "Employer-sponsored highly skilled migrant applications—submitted by the recognised sponsor; you may only need to understand the process.",
      "Study or research routes where your institution provides clear guidance and support.",
      "When you only need documents translated or legalised—use sworn translators and apostille/legalisation services.",
      "When you need relocation logistics (housing, registration) rather than visa process support—consider a relocation agency.",
      "When you have a legal problem, refusal, or need to object or appeal—consider an immigration lawyer.",
      "General eligibility questions—start with IND, Government.nl, and Netherlands Worldwide before engaging a consultant.",
    ],
  },

  scenarios: [
    {
      id: "hsm-employer",
      title: "Employer-sponsored highly skilled migrant",
      summary: "You have a job offer from a company recognised by the IND as a sponsor. Only the sponsor can apply for your permit. A consultant may help you understand the process and timeline.",
      whatToConfirm: ["That your employer is a recognised sponsor (IND public register)", "What documents you need to provide to the employer", "Processing times and when you can travel"],
      whatToCompare: ["Whether you need a consultant at all—employer and IND guidance may be enough", "If you want process clarity, a one-off consultation vs ongoing support"],
      commonMistakes: ["Assuming a consultant can submit the application (only the sponsor can)", "Paying for full support when employer handles submission"],
      links: [
        { label: "IND – Highly skilled migrant", href: "https://ind.nl/en/residence-permits/work/highly-skilled-migrant" },
        { label: "Highly skilled migrant (planned guide)", href: "/netherlands/highly-skilled-migrant-netherlands/" },
      ],
    },
    {
      id: "startup-founder-unsure",
      title: "Startup founder unsure which route applies",
      summary: "You want to set up an innovative start-up in the Netherlands and need a residence permit. The start-up scheme has specific criteria; foreign documents may need legalisation and translation.",
      whatToConfirm: ["Innovation and feasibility criteria (IND)", "Document and business-plan requirements", "Whether a consultant or facilitator is right for you"],
      whatToCompare: ["Consultants or advisors with start-up permit experience", "Fee structure (assessment vs full preparation)", "Document legalisation and translation planning"],
      commonMistakes: ["Submitting an incomplete or weak business plan", "Missing legalisation or translation of documents"],
      links: [
        { label: "IND – Start-up", href: "https://ind.nl/en/residence-permits/work/start-up" },
        { label: "Start-up visa (planned guide)", href: "/netherlands/startup-visa-netherlands/" },
        { label: "Apostille documents", href: "/netherlands/apostille-documents-netherlands/" },
      ],
    },
    {
      id: "partner-joining",
      title: "Partner joining spouse in the Netherlands",
      summary: "You are a resident or citizen and want to bring your partner to the Netherlands. Family reunification has specific document, income, and housing requirements.",
      whatToConfirm: ["Eligibility (relationship, income, housing)", "Document list (legalisation, translation)", "Who must submit the application"],
      whatToCompare: ["Whether a consultant is useful for checklist and preparation", "When a lawyer might be needed instead (complex or disputed cases)"],
      commonMistakes: ["Missing document legalisation or translation", "Underestimating income or housing requirements"],
      links: [
        { label: "Family reunification (planned guide)", href: "/netherlands/family-reunification-netherlands/" },
        { label: "Document translation", href: "/netherlands/document-translation-netherlands/" },
        { label: "Document legalization", href: "/netherlands/document-legalization-netherlands/" },
      ],
    },
    {
      id: "mvv-residence-abroad",
      title: "New resident preparing MVV + residence permit from abroad",
      summary: "You are outside the Netherlands and need an MVV and residence permit. The IND states you apply for both at the same time when an MVV is required. After approval, you collect the MVV and then the residence permit after arrival.",
      whatToConfirm: ["Whether you need an MVV for your nationality and purpose", "Document list and legalisation/translation", "Processing times"],
      whatToCompare: ["Consultants who explain the sequence clearly", "What they can and cannot do (e.g. they cannot submit for you if the law requires you or your sponsor to do so)"],
      commonMistakes: ["Applying in the wrong order", "Missing legalisation or translation of foreign documents"],
      links: [
        { label: "IND – Apply for MVV and residence permit from abroad", href: "https://ind.nl/en/apply-for-mvv-and-residence-permit-from-abroad" },
        { label: "MVV (planned guide)", href: "/netherlands/mvv-netherlands/" },
        { label: "Residence permit (planned guide)", href: "/netherlands/residence-permit-netherlands/" },
      ],
    },
    {
      id: "student-institution-support",
      title: "Student deciding whether institution support is enough",
      summary: "You are coming to study or do research. Your institution may guide you through the permit process. A consultant might still help with personal timeline or document readiness.",
      whatToConfirm: ["What your institution provides (application support, checklist)", "Whether you also work (work can trigger different insurance and permit rules)"],
      whatToCompare: ["Whether you need a consultant at all", "If so, limited support vs full coordination"],
      commonMistakes: ["Paying for duplicate support your institution already offers", "Missing deadlines because you assumed someone else would apply"],
      links: [
        { label: "Netherlands Worldwide – Visa", href: "https://www.netherlandsworldwide.nl/visa-the-netherlands" },
        { label: "After arriving", href: "/netherlands/after-arriving-netherlands/" },
      ],
    },
    {
      id: "family-foreign-documents",
      title: "Family with foreign civil-status documents needing preparation",
      summary: "You need to prepare for family reunification or partner migration with documents from abroad. Many documents must be legalised and translated.",
      whatToConfirm: ["Exact document list from IND or consultant", "Legalisation (apostille) and sworn translation requirements", "Income and housing conditions"],
      whatToCompare: ["Consultants who specialise in family migration", "Document-only services (translation, legalisation) vs full preparation support"],
      commonMistakes: ["Using non-sworn translations", "Missing apostille or legalisation where required"],
      links: [
        { label: "Apostille documents", href: "/netherlands/apostille-documents-netherlands/" },
        { label: "Document translation", href: "/netherlands/document-translation-netherlands/" },
        { label: "Family reunification (planned guide)", href: "/netherlands/family-reunification-netherlands/" },
      ],
    },
  ],

  faqs: [
    {
      q: "Do I need a visa consultant to move to the Netherlands?",
      a: "No. Many people move using official IND guidance, employer or institution support, and document preparation (translation, legalisation) without a consultant. Consultants are most useful when you want structured process clarity, document planning, or timeline coordination—especially for MVV and residence from abroad, family migration, or start-up routes. Not every expat needs one.",
    },
    {
      q: "What does a visa consultant do?",
      a: "A visa consultant typically helps with process guidance, eligibility understanding, document checklists, timeline planning, and preparation for official applications. They do not replace the IND (which assesses applications) or a recognised sponsor (who must submit certain applications, e.g. highly skilled migrant). They also do not provide legal representation for objections or appeals—that is typically a lawyer’s role.",
    },
    {
      q: "Can a visa consultant submit my application for me?",
      a: "It depends on the route. For a highly skilled migrant permit, only an employer recognised by the IND can apply. For other routes, the applicant may submit; a consultant can help you prepare but cannot act as the applicant unless explicitly allowed. Always confirm who must submit with the consultant and the IND.",
    },
    {
      q: "What is the difference between a visa consultant and an immigration lawyer?",
      a: "A visa consultant typically focuses on process guidance, document planning, and preparation. A lawyer can represent you in legal matters, including objections and appeals before the IND, and give legal advice. For complex status issues, refusals, or appeals, a lawyer is usually more appropriate. The IND publishes information on objecting and appealing decisions.",
    },
    {
      q: "Do I need a consultant for a highly skilled migrant application?",
      a: "Not necessarily. Only a recognised sponsor (your employer) can apply. Your employer may use internal staff or a service; you may only need to understand the process and provide documents. A consultant can help with personal timeline and document readiness if you want that support.",
    },
    {
      q: "What is a recognised sponsor in the Netherlands?",
      a: "A recognised sponsor is an employer or institution approved by the IND to submit certain residence applications (e.g. highly skilled migrant, researchers, students). The IND has a public register of recognised sponsors. Government.nl and Business.gov.nl explain how to become one.",
    },
    {
      q: "Can a consultant help with family migration?",
      a: "Yes. Consultants can help with requirement clarity, document checklists (including legalisation and translation), and preparation. For complex or disputed cases—e.g. EU-law issues or refusals—an immigration lawyer may be more appropriate.",
    },
    {
      q: "Can a consultant help with startup permits?",
      a: "Yes. Start-up permit applications involve specific innovation and feasibility criteria; foreign documents may need legalisation and translation. Consultants or facilitators can help with eligibility assessment, document planning, and application preparation. The IND publishes the requirements.",
    },
    {
      q: "Do I need a consultant if I already have employer support?",
      a: "Often no. If your employer is a recognised sponsor and handles the application, IND and employer guidance may be enough. You might consider a consultant only if you want independent process clarity or document readiness support.",
    },
    {
      q: "How much do visa consultants cost in the Netherlands?",
      a: "Fees vary widely by provider, route, and scope. Initial consultations may be a fixed fee or hourly; packages for document and process support vary. Family and start-up support typically cost more than basic orientation. Always request written clarity on scope, exclusions, and whether official IND or government fees are included.",
    },
    {
      q: "What documents should I prepare before speaking to a consultant?",
      a: "Bring any IND or embassy correspondence, your passport, and a clear summary of your situation and goal (e.g. work, study, family, start-up). The consultant can then tell you what else is needed. Foreign documents often need legalisation and translation—our apostille and document translation guides explain this.",
    },
    {
      q: "When should I use a lawyer instead of a consultant?",
      a: "Consider a lawyer when you need to object or appeal an IND decision, have a complex legal-status issue, face a dispute, or need formal representation. Consultants focus on process and preparation; lawyers provide legal advice and representation. Juridisch Loket offers general legal information and can help you decide.",
    },
  ],

  officialSources: visaConsultantsOfficialSources,

  relatedGuides: [
    {
      title: "Visa & residence guides",
      links: [
        { label: "Residence permit (planned)", href: "/netherlands/residence-permit-netherlands/" },
        { label: "MVV (planned)", href: "/netherlands/mvv-netherlands/" },
        { label: "Highly skilled migrant (planned)", href: "/netherlands/highly-skilled-migrant-netherlands/" },
        { label: "Start-up visa (planned)", href: "/netherlands/startup-visa-netherlands/" },
        { label: "Family reunification (planned)", href: "/netherlands/family-reunification-netherlands/" },
        { label: "Permanent residence (planned)", href: "/netherlands/permanent-residence-netherlands/" },
        { label: "Dutch citizenship (planned)", href: "/netherlands/dutch-citizenship-netherlands/" },
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
        { label: "Immigration lawyers", href: "/netherlands/services/immigration-lawyers/" },
        { label: "Immigration & visas", href: "/netherlands/services/immigration-visas/" },
        { label: "Relocation agencies (planned)", href: "/netherlands/services/relocation-agencies/" },
        { label: "Document translation (planned)", href: "/netherlands/services/document-translation/" },
        { label: "Apostille services (planned)", href: "/netherlands/services/apostille-services/" },
      ],
    },
  ],

  relatedCategories: [
    { label: "Immigration lawyers", href: "/netherlands/services/immigration-lawyers/" },
    { label: "Immigration & visas", href: "/netherlands/services/immigration-visas/" },
    { label: "Relocation agencies (planned)", href: "/netherlands/services/relocation-agencies/" },
    { label: "Documents & legal", href: "/netherlands/services/documents-legal/" },
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
    "Provider comparisons are editorial guidance. We do not recommend a specific consultant; suitability depends on your situation.",
    "Consultants do not replace the IND or a recognised sponsor. Always verify current fees, scope, and process directly with the provider.",
    "Immigration rules and procedures can change; check official IND and government sources.",
  ],
};
