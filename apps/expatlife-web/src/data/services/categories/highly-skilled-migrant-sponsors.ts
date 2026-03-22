/**
 * Highly Skilled Migrant Sponsors category page data for
 * /netherlands/services/highly-skilled-migrant-sponsors/.
 * Real provider data comes from the IND public register (see scripts/fetch-ind-recognised-sponsors.ts).
 */

import type { ServiceCategoryPageData } from "@/src/lib/service-category/types";
import { highlySkilledMigrantSponsorsOfficialSources } from "@/src/data/services/official-sources/highly-skilled-migrant-sponsors";

/* Hero image prompt for future asset:
   "Cinematic editorial image for a Dutch highly skilled migrant sponsors page, showing organized employer sponsorship and immigration planning materials, passport, employment documents, recognised sponsor checklist, subtle Dutch business setting, natural daylight, premium global mobility magazine aesthetic, wide 16:9 banner."
*/

export const highlySkilledMigrantSponsorsCategoryPage: ServiceCategoryPageData = {
  slug: "highly-skilled-migrant-sponsors",
  parentSlug: "services",
  country: "netherlands",
  path: "/netherlands/services/highly-skilled-migrant-sponsors/",

  seo: {
    title: "Highly Skilled Migrant Sponsors in the Netherlands: Search the IND Recognised Sponsor List",
    description:
      "Search real IND-recognised sponsors for the highly skilled migrant route in the Netherlands and learn how sponsor status affects visa and residence applications.",
    keywords: [
      "highly skilled migrant sponsors netherlands",
      "recognised sponsors netherlands",
      "ind recognised sponsors highly skilled migrant",
      "companies sponsoring highly skilled migrants netherlands",
      "highly skilled migrant employer register netherlands",
      "recognised sponsor list netherlands",
      "ind sponsor register netherlands",
      "highly skilled migrant companies netherlands",
      "employer sponsor netherlands visa",
      "sponsor employer highly skilled migrant netherlands",
    ],
  },

  hero: {
    eyebrow: "SERVICES",
    title: "Highly Skilled Migrant Sponsors in the Netherlands",
    subtitle:
      "Search the official IND-recognised sponsor list and learn how sponsor status affects highly skilled migrant applications, employer eligibility, and your move to the Netherlands.",
    image: {
      src: "/images/heroes/expatlife-netherlands-highly-skilled-migrant-sponsors-hero.png",
      alt: "Cinematic editorial image showing an expat, viewed from behind in a suit jacket, diligently planning their highly skilled migrant application in the Netherlands. On a wooden desk, documents are clearly visible with titles like 'Employment Offer,' 'Highly Skilled Migrant Route,' 'Sponsor Verification,' and 'Residence Permit Process.' A dark passport, smartphone, laptop displaying a digital workflow, a world map, and a coffee cup complete the setup. The background features a blurred modern city scene with glass buildings and greenery, conveying a professional, organized, and global mobility atmosphere.",
      imagePrompt:
        "Cinematic editorial image for a Dutch highly skilled migrant sponsors page, showing organized employer sponsorship and immigration planning materials, passport, employment documents, recognised sponsor checklist, subtle Dutch business setting, natural daylight, premium global mobility magazine aesthetic, wide 16:9 banner.",
    },
    ctas: [
      { label: "Search Recognised Sponsors", href: "#sponsor-directory", primary: true },
      { label: "Read Highly Skilled Migrant Guide", href: "/netherlands/highly-skilled-migrant-netherlands/", primary: false },
    ],
  },

  tocItems: [
    { id: "overview", label: "Overview" },
    { id: "what-is-sponsor", label: "What a Recognised Sponsor Is" },
    { id: "why-it-matters", label: "Why It Matters for Highly Skilled Migrants" },
    { id: "sponsor-directory", label: "Search the Sponsor Directory" },
    { id: "featured-examples", label: "Featured Sponsor Examples" },
    { id: "what-to-check", label: "What to Check Before Applying" },
    { id: "typical-costs", label: "What This Usually Costs" },
    { id: "when-extra-help", label: "When You May Need Extra Help" },
    { id: "scenarios", label: "Example Scenarios" },
    { id: "faq", label: "FAQs" },
    { id: "official-sources", label: "Official Sources" },
  ],

  intro: {
    heading: "How Highly Skilled Migrant Sponsorship Works in the Netherlands",
    paragraphs: [
      "Only an employer recognised by the IND (Immigration and Naturalisation Service) can apply for a highly skilled migrant residence permit. This page helps you search real recognised sponsors and understand what sponsor status means for your move.",
      "Being in the official register does not guarantee a job offer or permit approval. Salary criteria, role suitability, and other IND conditions still apply. This page is a practical directory and explainer, not a job board.",
    ],
    links: [
      { label: "All services hub", href: "/netherlands/services/" },
      { label: "Highly skilled migrant guide", href: "/netherlands/highly-skilled-migrant-netherlands/" },
      { label: "Dutch cities overview", href: "/netherlands/cities/" },
      { label: "After arriving", href: "/netherlands/after-arriving-netherlands/" },
    ],
  },

  whatIsRecognisedSponsor: {
    heading: "What an IND-Recognised Sponsor Is",
    paragraphs: [
      "Recognised sponsors are organisations approved by the IND to sponsor certain immigration routes. For the highly skilled migrant route, only a recognised sponsor can submit the residence permit application.",
      "The IND maintains public registers so anyone can verify whether an employer is recognised. Recognised sponsor status also enables an accelerated residence-permit procedure for highly skilled migrants, scientific researchers, and students, as set out on Government.nl.",
    ],
  },

  whySponsorMatters: {
    heading: "Why Sponsor Status Matters for Expats",
    paragraphs: [
      "If your employer is not recognised by the IND, the standard highly skilled migrant route may not be available in the usual way. Sponsor status is one of the first things to verify when considering a role in the Netherlands.",
      "Salary criteria and other permit requirements still apply. Being in the register does not mean the company is actively hiring or that your application will be approved.",
    ],
    cards: [
      {
        title: "Verifying employer eligibility",
        description: "Check the official IND register before or after receiving a job offer to confirm the employer can sponsor a highly skilled migrant permit.",
      },
      {
        title: "Faster official processing context",
        description: "Recognised sponsors can use an accelerated procedure for highly skilled migrant applications, as explained on Government.nl.",
      },
      {
        title: "Still subject to IND conditions",
        description: "Sponsor status does not bypass salary thresholds, role requirements, or other criteria the IND applies to each application.",
      },
      {
        title: "Not the same as a job offer",
        description: "Inclusion in the register does not mean the company is hiring or that they will sponsor you; it only means they are allowed to apply if they do.",
      },
    ],
  },

  requirementCards: [
    {
      id: "still-in-register",
      title: "Is the company still in the official register?",
      description: "The IND updates the public register regularly. Confirm current status on the IND website before relying on it for your application.",
      link: { label: "IND – Public register", href: "https://ind.nl/en/public-register-recognised-sponsors/public-register-regular-labour-and-highly-skilled-migrants" },
    },
    {
      id: "job-under-hsm",
      title: "Is the job actually offered under the highly skilled migrant route?",
      description: "The employer must intend to use the highly skilled migrant procedure for your role. Confirm with the employer or their immigration contact.",
      link: { label: "IND – Highly skilled migrant", href: "https://ind.nl/en/residence-permits/work/highly-skilled-migrant" },
    },
    {
      id: "salary-threshold",
      title: "Does the salary meet the IND threshold?",
      description: "The IND sets minimum salary requirements for the highly skilled migrant permit. Your employer or a visa consultant can confirm the current figures.",
      link: { label: "Highly skilled migrant guide", href: "/netherlands/highly-skilled-migrant-netherlands/" },
    },
    {
      id: "employer-supported",
      title: "Is the route employer-supported?",
      description: "Only the recognised sponsor (employer) can submit the application. You cannot apply for this permit type without a sponsoring employer.",
      link: { label: "Government.nl – Hire a highly skilled migrant", href: "https://www.government.nl/topics/immigration-to-the-netherlands/question-and-answer/hire-a-highly-skilled-migrant" },
    },
    {
      id: "documents-ready",
      title: "Are your documents ready for the application?",
      description: "Passport, diplomas, and other documents may need to be legalised and translated. Prepare early to avoid delays.",
      link: { label: "Document translation", href: "/netherlands/document-translation-netherlands/" },
    },
    {
      id: "mvv-needed",
      title: "Do you need an MVV from abroad?",
      description: "If you are outside the Netherlands and an MVV is required, you apply for the MVV and residence permit at the same time. The IND explains the process.",
      link: { label: "IND – Apply for MVV and residence permit from abroad", href: "https://ind.nl/en/apply-for-mvv-and-residence-permit-from-abroad" },
    },
  ],

  coverageCards: [],
  comparisonFactors: [],
  providers: [],

  costCards: [
    {
      id: "directory-access",
      title: "Sponsor directory access",
      value: "Free",
      note: "The IND public register is free to use.",
      link: { label: "IND – Public register", href: "https://ind.nl/en/public-register-recognised-sponsors/public-register-regular-labour-and-highly-skilled-migrants" },
    },
    {
      id: "employer-process",
      title: "Employer sponsorship process",
      value: "Employer-side",
      note: "Immigration and permit costs are typically borne by the employer for the highly skilled migrant route.",
    },
    {
      id: "translation-legalization",
      title: "Translation / legalisation",
      value: "€25–75 per doc",
      note: "Certified translation and apostille/legalisation typically €25–75 per document; multiple documents or rush services cost more.",
      link: { label: "Document translation", href: "/netherlands/document-translation-netherlands/" },
    },
    {
      id: "relocation-support",
      title: "Relocation support",
      value: "€500–3,000+",
      note: "Relocation agencies and visa consultants: from around €500 for light support to €2,000–3,000+ for full packages. Confirm scope and quote with the provider.",
      link: { label: "Visa consultants", href: "/netherlands/services/visa-consultants/" },
    },
    {
      id: "legal-advice",
      title: "Legal advice",
      value: "€150–400/hr",
      note: "Immigration lawyers typically charge €150–400 per hour or fixed fees per case; objections and appeals often €300–800+ depending on complexity.",
      link: { label: "Immigration lawyers", href: "/netherlands/services/immigration-lawyers/" },
    },
  ],

  whoNeedsExtraHelp: [
    {
      id: "employer-not-recognised",
      title: "Employer is not recognised",
      description: "If the company is not in the IND register, they generally cannot use the standard highly skilled migrant sponsor route. You may need to explore other permit types or ask the employer whether they plan to apply for recognition.",
    },
    {
      id: "unsure-mvv",
      title: "Unsure whether MVV is needed",
      description: "Nationality and purpose determine if you need an MVV. A visa consultant or the IND website can help you confirm the correct procedure.",
      link: { label: "Visa consultants", href: "/netherlands/services/visa-consultants/" },
    },
    {
      id: "documents-incomplete",
      title: "Documents are incomplete",
      description: "Document translation and legalisation services can help you prepare. Check our guides on apostille and document translation.",
      link: { label: "Document translation", href: "/netherlands/document-translation-netherlands/" },
    },
    {
      id: "family-migration",
      title: "You need family migration too",
      description: "Family reunification has its own requirements. Visa consultants or immigration lawyers can help with combined planning.",
      link: { label: "Immigration lawyers", href: "/netherlands/services/immigration-lawyers/" },
    },
    {
      id: "legal-help-refusal",
      title: "You need legal help after a refusal",
      description: "For objections, appeals, or complex status issues, an immigration lawyer is usually more appropriate than a consultant.",
      link: { label: "IND – Object or appeal", href: "https://ind.nl/en/after-your-application/object-or-appeal-decision" },
    },
    {
      id: "relocation-coordination",
      title: "You need broader relocation coordination",
      description: "Relocation agencies can help with housing, registration, and move logistics; some also coordinate with visa and permit steps.",
      link: { label: "Relocation agencies", href: "/netherlands/services/relocation-agencies/" },
    },
  ],

  scenarios: [
    {
      id: "offer-check-register",
      title: "Candidate gets an offer and checks the sponsor register",
      summary: "You have a job offer from a Dutch company and want to confirm they can sponsor a highly skilled migrant permit.",
      whatToConfirm: ["Company name and KvK number", "That the role and salary meet IND criteria", "Who will handle the application (employer or their agent)"],
      whatToCompare: ["This directory and the official IND register", "Employer’s confirmation of sponsor status"],
      commonMistakes: ["Assuming every Dutch employer is a recognised sponsor", "Not checking the register before signing or relocating"],
      links: [
        { label: "Search this directory", href: "#sponsor-directory" },
        { label: "IND – Public register", href: "https://ind.nl/en/public-register-recognised-sponsors/public-register-regular-labour-and-highly-skilled-migrants" },
      ],
    },
    {
      id: "employer-not-in-register",
      title: "Candidate wants to move but employer is not in the register",
      summary: "You have an offer from a company that is not (yet) a recognised sponsor.",
      whatToConfirm: ["Whether the employer plans to apply for recognition", "Alternative permit routes (e.g. other work permits)", "Timeline if they are applying for recognition"],
      whatToCompare: ["Visa consultants for route advice", "IND – How to become a recognised sponsor"],
      commonMistakes: ["Assuming the employer can sponsor without recognition", "Not exploring other permit options"],
      links: [
        { label: "IND – Apply for recognition as sponsor", href: "https://ind.nl/en/residence-permits/work/apply-for-recognition-as-sponsor" },
        { label: "Visa consultants", href: "/netherlands/services/visa-consultants/" },
      ],
    },
    {
      id: "recognised-sponsor-document-prep",
      title: "Candidate has a recognised sponsor but still needs document preparation",
      summary: "Your employer is in the register and will apply; you need to get documents legalised and translated.",
      whatToConfirm: ["Exact document list from employer or IND", "Legalisation (apostille) and translation requirements", "Deadlines for submission"],
      whatToCompare: ["Document translation and apostille services", "Visa consultants if you want a checklist review"],
      commonMistakes: ["Using non-sworn translations", "Missing apostille where required"],
      links: [
        { label: "Document translation", href: "/netherlands/document-translation-netherlands/" },
        { label: "Apostille documents", href: "/netherlands/apostille-documents-netherlands/" },
      ],
    },
    {
      id: "moving-with-family",
      title: "Candidate moving with family",
      summary: "You are coming as a highly skilled migrant and your partner or family will join you.",
      whatToConfirm: ["Family reunification requirements (income, housing)", "Document requirements for partner/children", "Whether the employer offers relocation support"],
      whatToCompare: ["Visa consultants or immigration lawyers for family migration", "Relocation agencies for housing and logistics"],
      commonMistakes: ["Leaving family document preparation to the last minute", "Underestimating income or housing conditions"],
      links: [
        { label: "Family reunification (planned guide)", href: "/netherlands/family-reunification-netherlands/" },
        { label: "Immigration lawyers", href: "/netherlands/services/immigration-lawyers/" },
      ],
    },
    {
      id: "comparing-cities-employers",
      title: "Candidate comparing cities and employers",
      summary: "You are job hunting and want to know which employers can sponsor and where they are based.",
      whatToConfirm: ["Which employers are recognised (use this directory)", "City-specific info (housing, registration, cost of living)", "Salary levels and 30% ruling eligibility"],
      whatToCompare: ["Sponsor directory and city guides", "Employer relocation support and benefits"],
      commonMistakes: ["Only looking at job title and salary without checking sponsor status", "Ignoring relocation and integration support"],
      links: [
        { label: "Cities overview", href: "/netherlands/cities/" },
        { label: "Amsterdam", href: "/netherlands/amsterdam/" },
        { label: "Rotterdam", href: "/netherlands/rotterdam/" },
      ],
    },
    {
      id: "unsure-route-type",
      title: "Candidate unsure whether the route is highly skilled migrant or another permit",
      summary: "You are not sure if your offer falls under the highly skilled migrant scheme or another work permit.",
      whatToConfirm: ["Role, salary, and employer", "IND criteria for highly skilled migrant vs other work permits", "Who applies (employer for HSM)"],
      whatToCompare: ["IND – Highly skilled migrant", "Visa consultants for route clarification"],
      commonMistakes: ["Assuming all work permits work the same way", "Not confirming who must submit the application"],
      links: [
        { label: "Highly skilled migrant guide", href: "/netherlands/highly-skilled-migrant-netherlands/" },
        { label: "IND – Residence permits work", href: "https://ind.nl/en/residence-permits/work/highly-skilled-migrant" },
      ],
    },
  ],

  faqs: [
    {
      q: "What is a recognised sponsor in the Netherlands?",
      a: "A recognised sponsor is an employer or institution approved by the IND to submit certain residence applications, including the highly skilled migrant permit. Business.gov.nl describes them as the intermediary between certain foreign nationals and the Dutch government for filing residence permit applications where applicable. The IND maintains a public register of recognised sponsors.",
    },
    {
      q: "Can only recognised sponsors apply for a highly skilled migrant permit?",
      a: "Yes. The IND states that only an employer recognised by the IND can apply for a highly skilled migrant residence permit. The applicant (you) cannot submit this type of application yourself; the recognised sponsor (employer) must do so.",
    },
    {
      q: "How do I check whether my employer is recognised?",
      a: "Use the IND public register of recognised sponsors, specifically the Public Register Regular Labour and Highly Skilled Migrants. You can search by organisation name or KvK number. This page also provides a searchable directory sourced from that register.",
    },
    {
      q: "Does being in the sponsor register mean the company is hiring?",
      a: "No. Inclusion in the register only means the organisation is approved to sponsor highly skilled migrant (and related) applications. It does not mean they are currently hiring or that they will sponsor you. Always confirm job offers and sponsorship with the employer.",
    },
    {
      q: "Does sponsor status guarantee visa approval?",
      a: "No. The IND still applies permit requirements such as salary thresholds and other criteria. Recognised sponsor status allows the employer to submit the application; it does not guarantee that the IND will approve it.",
    },
    {
      q: "What if my employer is not on the list?",
      a: "If the company is not in the IND register, they generally cannot use the standard highly skilled migrant sponsor route. They may apply for recognition (see IND and Business.gov.nl). You might also explore other permit types with a visa consultant or the IND.",
    },
    {
      q: "How often is the IND sponsor register updated?",
      a: "The IND states that the public registers are updated once a month. The register page shows the date of the last update. Always verify current status on the official IND website.",
    },
    {
      q: "What information does the register show?",
      a: "The Public Register Regular Labour and Highly Skilled Migrants shows organisation name and KvK number. It does not show hiring status, industry, or location; it only confirms that the organisation is a recognised sponsor for this residence purpose.",
    },
    {
      q: "Do I need an MVV as well?",
      a: "It depends on your nationality and purpose. If an MVV is required, you apply for the MVV and residence permit at the same time. The IND explains the process for applying from abroad.",
    },
    {
      q: "Do I still need legalized or translated documents?",
      a: "Yes, if the IND or your employer requires them. Many foreign documents must be legalised (e.g. apostille) and translated. See our guides on document translation and apostille.",
    },
    {
      q: "Can a relocation agency help if my employer is recognised?",
      a: "Yes. Relocation agencies can help with housing, registration, and move logistics. They do not replace the employer’s role in submitting the permit application, but they can coordinate with the process and with visa consultants if needed.",
    },
    {
      q: "Is the sponsor directory free to use?",
      a: "Yes. The IND public register is free. This page’s directory is based on that register and is also free to use. We do not charge for access to the list.",
    },
  ],

  officialSources: highlySkilledMigrantSponsorsOfficialSources,

  relatedGuides: [
    {
      title: "Immigration & residence guides",
      links: [
        { label: "Highly skilled migrant (planned)", href: "/netherlands/highly-skilled-migrant-netherlands/" },
        { label: "Residence permit (planned)", href: "/netherlands/residence-permit-netherlands/" },
        { label: "MVV (planned)", href: "/netherlands/mvv-netherlands/" },
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
        { label: "Relocation agencies (planned)", href: "/netherlands/services/relocation-agencies/" },
      ],
    },
  ],

  relatedCategories: [
    { label: "Visa consultants", href: "/netherlands/services/visa-consultants/" },
    { label: "Immigration lawyers", href: "/netherlands/services/immigration-lawyers/" },
    { label: "Relocation agencies (planned)", href: "/netherlands/services/relocation-agencies/" },
  ],

  tools: [
    { label: "Document Readiness Checker", href: "/netherlands/document-readiness-checker/", description: "Check which documents you need", status: "live" },
    { label: "Visa Timeline Estimator", href: "/netherlands/visa-timeline-estimator/", description: "Estimate visa processing and move timing", status: "live" },
    { label: "Visa Cost Calculator", href: "/netherlands/visa-cost-calculator/", description: "Estimate visa and move costs", status: "live" },
    { label: "Visa Comparison Tool", href: "/netherlands/visa/compare-visas/", description: "Compare visa routes", status: "live" },
    { label: "Relocation Checklist", href: "/netherlands/moving/tools/moving-checklist/", description: "Personalized checklist for your move", status: "live" },
  ],

  /** Featured examples from the register with descriptions, links, and logos for the "Examples from the Recognised Sponsor Register" section. */
  featuredSponsorExamples: [
    {
      name: "ABN AMRO Bank N.V.",
      kvkNumber: "34334259",
      slug: "abn-amro-bank-n-v-34334259",
      description: "Major Dutch bank offering retail, private, and corporate banking. Frequently hires internationally for roles in Amsterdam and across the Netherlands.",
      websiteUrl: "https://www.abnamro.nl/",
      careersUrl: "https://www.abnamro.nl/en/careers/",
      logoUrl: "https://logo.clearbit.com/abnamro.nl",
    },
    {
      name: "Shell Nederland B.V.",
      kvkNumber: "27155369",
      slug: "shell-nederland-b-v-27155369",
      description: "Energy and petrochemical company with a large presence in the Netherlands. Employs highly skilled migrants in technology, engineering, and corporate functions.",
      websiteUrl: "https://www.shell.nl/",
      careersUrl: "https://www.shell.com/careers.html",
      logoUrl: "https://logo.clearbit.com/shell.com",
    },
    {
      name: "Philips Nederland B.V.",
      kvkNumber: "33008153",
      slug: "philips-nederland-b-v-33008153",
      description: "Health technology and electronics company headquartered in Amsterdam. Recruits globally for R&D, commercial, and support roles.",
      websiteUrl: "https://www.philips.nl/",
      careersUrl: "https://www.careers.philips.com/",
      logoUrl: "https://logo.clearbit.com/philips.com",
    },
    {
      name: "ING Bank N.V.",
      kvkNumber: "33031431",
      slug: "ing-bank-n-v-33031431",
      description: "Dutch multinational banking and financial services corporation. Offers roles in Amsterdam and other Dutch cities for international talent.",
      websiteUrl: "https://www.ing.nl/",
      careersUrl: "https://www.ing.jobs/",
      logoUrl: "https://logo.clearbit.com/ing.com",
    },
    {
      name: "Accenture B.V.",
      kvkNumber: "34156015",
      slug: "accenture-b-v-34156015",
      description: "Global professional services and consulting firm. Hires highly skilled migrants for technology, strategy, and operations roles in the Netherlands.",
      websiteUrl: "https://www.accenture.com/nl-en",
      careersUrl: "https://www.accenture.com/nl-en/careers",
      logoUrl: "https://logo.clearbit.com/accenture.com",
    },
    {
      name: "Heineken N.V.",
      kvkNumber: "27192391",
      slug: "heineken-n-v-27192391",
      description: "Multinational brewing company headquartered in Amsterdam. Employs international talent in commercial, supply chain, and corporate functions.",
      websiteUrl: "https://www.heineken.com/",
      careersUrl: "https://www.theheinekencompany.com/careers",
      logoUrl: "https://logo.clearbit.com/heineken.com",
    },
    {
      name: "Booking.com B.V.",
      kvkNumber: "32124978",
      slug: "booking-com-b-v-32124978",
      description: "Online travel and accommodation platform based in Amsterdam. One of the largest tech employers in the Netherlands hiring internationally.",
      websiteUrl: "https://www.booking.com/",
      careersUrl: "https://careers.booking.com/",
      logoUrl: "https://logo.clearbit.com/booking.com",
    },
    {
      name: "Adyen N.V.",
      kvkNumber: "34259533",
      slug: "adyen-n-v-34259533",
      description: "Global payment platform company headquartered in Amsterdam. Hires highly skilled migrants in engineering, product, and commercial roles.",
      websiteUrl: "https://www.adyen.com/",
      careersUrl: "https://www.adyen.com/careers",
      logoUrl: "https://logo.clearbit.com/adyen.com",
    },
    {
      name: "3M Nederland B.V.",
      kvkNumber: "28020725",
      slug: "3m-nederland-b-v-28020725",
      description: "Diversified technology and manufacturing company. Employs international talent in science, engineering, and business in the Netherlands.",
      websiteUrl: "https://www.3m.nl/",
      careersUrl: "https://www.3m.com/3M/en_US/careers-nl/",
      logoUrl: "https://logo.clearbit.com/3m.com",
    },
  ],

  disclosure: [
    "This page is for information only and does not constitute legal or immigration advice.",
    "Sponsor data is sourced from the official IND public register. Inclusion does not imply endorsement, active hiring, or suitability for any individual.",
    "Users should verify current sponsor status and job specifics directly with the IND and the employer. Rules and register contents can change.",
  ],
};
