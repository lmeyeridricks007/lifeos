export const ZZP_NETHERLANDS_PATH = "/netherlands/business/zzp-netherlands/" as const;
export const ZZP_AFFILIATE_PLACEMENT_ID = "nl-business-zzp-support-providers" as const;

export const FREELANCING_NETHERLANDS_PATH = "/netherlands/jobs/freelancing-netherlands/" as const;
export const STARTING_CONSULTANCY_NETHERLANDS_PATH = "/netherlands/jobs/starting-consultancy-netherlands/" as const;
export const CONTRACTOR_VS_EMPLOYEE_NETHERLANDS_PATH = "/netherlands/jobs/contractor-vs-employee-netherlands/" as const;
export const BUSINESS_HUB_PATH = "/netherlands/business/" as const;
export const STARTING_BUSINESS_NETHERLANDS_PATH = "/netherlands/business/starting-a-business-netherlands/" as const;
export const EXPAT_TAXES_NETHERLANDS_PATH = "/netherlands/taxes/expat-taxes-netherlands/" as const;
export const FOREIGN_INCOME_NETHERLANDS_PATH = "/netherlands/taxes/foreign-income-netherlands/" as const;
export const DOUBLE_TAXATION_NETHERLANDS_PATH = "/netherlands/taxes/double-taxation-netherlands/" as const;
export const VAT_NETHERLANDS_PATH = "/netherlands/taxes/vat-netherlands/" as const;
export const FINANCIAL_ADVISORS_PATH = "/netherlands/services/financial-advisors/" as const;
export const ACCOUNTANTS_PATH = "/netherlands/services/accountants/" as const;
export const TAX_ADVISORS_PATH = "/netherlands/services/tax-advisors/" as const;
export const BUSINESS_CONSULTANTS_PATH = "/netherlands/services/business-consultants/" as const;
export const IMMIGRATION_LAWYERS_PATH = "/netherlands/services/immigration-lawyers/" as const;
export const PENSION_NETHERLANDS_EXPATS_PATH = "/netherlands/jobs/pension-netherlands-expats/" as const;
export const SELF_EMPLOYED_VISA_PATH = "/netherlands/visa/self-employed-visa/" as const;
export const VISAS_HUB_PATH = "/netherlands/moving/visas-residency/" as const;
export const EMPLOYMENT_CONTRACT_NETHERLANDS_PATH = "/netherlands/jobs/employment-contract-netherlands/" as const;

export type ZzpLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type ZzpCard = {
  title: string;
  body: string;
};

export type ZzpScenarioRow = {
  profile: string;
  scenario: string;
  whatToCheck: string;
};

export type ZzpComparisonRow = {
  topic: string;
  dutchContext: string;
  whatToConfirm: string;
};

export type ServiceCategory = {
  label: string;
  href: string;
  description: string;
  status?: "live" | "comingSoon";
};

export type ZzpSnapshotCard = {
  label: string;
  value: string;
  note: string;
};

const INFOGRAPHIC_VERSION = "premium-v2";

const visual = (name: string, alt: string, caption: string) => ({
  src: `/images/infographics/netherlands-zzp-${name}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const zzpNetherlandsPage = {
  slug: "zzp-netherlands",
  path: ZZP_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2026-09-06",
  affiliatePlacementId: ZZP_AFFILIATE_PLACEMENT_ID,
  seo: {
    title: "ZZP in the Netherlands | Complete Expat & Freelancer Guide",
    description:
      "Learn how ZZP works in the Netherlands, including registration, taxes, invoicing, clients and practical considerations for expats and freelancers.",
    keywords: [
      "zzp netherlands",
      "zzp expat netherlands",
      "zzp'er netherlands",
      "self employed netherlands",
      "freelance netherlands",
      "kvk registration netherlands",
      "zelfstandige zonder personeel",
      "zzp taxes netherlands",
      "zzp for expats",
      "freelance business netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Business · ZZP",
    pageTitle: "ZZP in the Netherlands",
    subtitle:
      "Understand how the Dutch ZZP system works, including registration, taxes, clients, invoicing and what expats should know before becoming self-employed.",
    primaryCta: { label: "Understand ZZP", href: "#intro" },
    secondaryCta: { label: "Explore Freelancing Guides", href: FREELANCING_NETHERLANDS_PATH },
    chips: ["KvK registration", "Tax & BTW", "Client invoicing", "Expat context"],
    image: {
      src: "/images/heroes/netherlands-zzp-netherlands-hero-v2.png",
      alt: "Photorealistic editorial photo of a South Asian ZZP professional at a bright Amsterdam canal-side home office — laptop, KvK registration document, Dutch BTW invoice and notebook on desk, canal houses and bicycle visible through the window.",
    },
  },
  visuals: {
    intro: visual(
      "intro",
      "Premium infographic record-file builder explaining ZZP (Zelfstandige Zonder Personeel) with six planning areas — definition, registration, taxes, clients, risks and expat context — with concrete examples and checklist rail.",
      "Start here: confirm what a ZZP'er is, whether it fits your situation and bookmark official sources before registering."
    ),
    snapshot: visual(
      "snapshot",
      "Premium at-a-glance infographic with six ZZP cards — popularity, expat use, registration, tax responsibility, flexibility and admin obligations.",
      "Compare these six areas against your plans — exact rules depend on nationality, income and client mix."
    ),
    vsComparison: visual(
      "vs-comparison",
      "Premium three-way bridge infographic comparing employee, international freelancer concept and Dutch ZZP framework — salary vs invoicing, benefits vs admin.",
      "ZZP is the Dutch self-employment framework many freelancers use — not the same word as generic freelancing abroad."
    ),
    professions: {
      src: "/images/infographics/netherlands-zzp-professions-premium-v5.png",
      alt: "Premium profession grid with ten common ZZP roles and a schematic Randstad corridor diagram showing Amsterdam, Rotterdam and Utrecht in correct relative positions — orientation only, not a geographic map.",
      caption:
        "ZZP spans many industries — the Randstad diagram shows relative city positions for orientation; verify whether your activity and client pattern fit self-employment rules.",
    },
    registration: visual(
      "registration",
      "Premium five-step registration timeline from business planning through KvK, Belastingdienst, administration, banking and first invoice.",
      "Register in a sensible order — KvK and tax choices before substantial client invoices."
    ),
    kvk: visual(
      "kvk",
      "Premium KvK desk scene explaining Chamber of Commerce registration, company records, business information and entrepreneur resources.",
      "The KvK is the starting point for most ZZP registrations — verify requirements on kvk.nl."
    ),
    taxes: visual(
      "taxes",
      "Premium tax desk infographic on income tax, bookkeeping, business expenses, annual returns and accountant handoff for ZZP'ers.",
      "Plan income tax and record-keeping from day one — this is orientation, not tax advice."
    ),
    vatBtw: visual(
      "vat-btw",
      "Premium BTW orientation board on VAT invoices, collection, quarterly reporting and when to confirm rules with Belastingdienst.",
      "Many ZZP'ers handle BTW — confirm your VAT status with official sources and an accountant."
    ),
    invoicing: visual(
      "invoicing",
      "Premium desk scene on proposals, contracts, Dutch invoices, payment tracking and hourly vs project work.",
      "Solid invoicing and contracts reduce disputes — especially when switching from employment."
    ),
    internationalClients: visual(
      "international-clients",
      "Premium map-and-bridge infographic on US, UK, EU and remote clients with cross-border invoicing and foreign income context.",
      "International clients add complexity — link tax planning to foreign income guides."
    ),
    residenceStatus: visual(
      "residence-status",
      "Premium two-track bridge separating IND permit rules from ZZP business activity for expats and self-employment visa context.",
      "Permit route and ZZP registration are separate tracks — verify IND rules independently."
    ),
    advantages: visual(
      "advantages",
      "Premium benefits board with six ZZP advantages — flexibility, independence, client choice, remote work, income potential and business ownership.",
      "Benefits are real — weigh them against admin and financial responsibilities."
    ),
    challenges: visual(
      "challenges",
      "Premium challenge board with six self-employment risks — income uncertainty, tax admin, client acquisition, no pension, no paid leave and financial planning.",
      "Honest expectations help you decide between ZZP and employment offers."
    ),
    financialPlanning: visual(
      "financial-planning",
      "Premium financial planning board on tax reserves, retirement gaps, insurance, emergency funds and business investments for ZZP'ers.",
      "Build buffers for tax, illness and slow months — employment safety nets do not apply by default."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board with eight common new ZZP errors — bookkeeping, taxes, one client, pricing, contracts, pension, cash flow and late registration.",
      "Most costly mistakes happen in the first 90 days — register and ask accountants early."
    ),
    questions: visual(
      "questions",
      "Premium eight-card Q&A infographic answering expat ZZP questions on definition, foreigners, freelancing comparison, KvK, tax, international work and popularity.",
      "Use these as conversation starters with accountants and official sources — not legal advice."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium route-map linking ZZP to freelancing, starting a business, expat taxes, foreign income and financial advisors.",
      "Suggested order: freelancing overview → expat taxes → foreign income when scaling international clients."
    ),
    services: visual(
      "services",
      "Premium provider map showing when accountants, tax advisors, business consultants, financial advisors and immigration lawyers may help during ZZP setup.",
      "Use professionals for scoped review — still read official sources yourself."
    ),
    faq: visual(
      "faq",
      "Premium FAQ accordion board with eight ZZP questions and short orientation answers on definition, KvK, tax, expats, international work and risks.",
      "FAQ answers orient you — confirm your situation with KvK, Belastingdienst and qualified advisers."
    ),
    officialSources: visual(
      "official-sources",
      "Premium Netherlands map pinning five official sources — KvK, Belastingdienst, Business.gov.nl, Government.nl and IND — with what to verify where.",
      "Bookmark these before your first client invoice — rules and thresholds change over time."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium canal-route journey with five next steps — freelancing guide, starting a business, expat taxes, foreign income and financial advisors.",
      "Pick your next guide based on whether you are registering, planning taxes or building buffers."
    ),
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#vs-comparison", label: "Compare" },
    { href: "#professions", label: "Professions" },
    { href: "#registration", label: "Register" },
    { href: "#kvk", label: "KvK" },
    { href: "#taxes", label: "Taxes" },
    { href: "#vat-btw", label: "BTW" },
    { href: "#invoicing", label: "Invoicing" },
    { href: "#international-clients", label: "Intl clients" },
    { href: "#residence-status", label: "Permits" },
    { href: "#pros-cons", label: "Pros & cons" },
    { href: "#financial-planning", label: "Finance" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#questions", label: "Questions" },
    { href: "#related-guides", label: "Guides" },
    { href: "#services", label: "Services" },
    { href: "#faq", label: "FAQ" },
    { href: "#official-sources", label: "Sources" },
    { href: "#explore-next", label: "Explore next" },
  ],
  intro: {
    heading: "What Is a ZZP'er?",
    paragraphs: [
      "ZZP stands for Zelfstandige Zonder Personeel — self-employed without employees. It describes one of the most common forms of independent work in the Netherlands.",
      "A ZZP'er typically works independently, invoices clients, manages their own administration and pays their own taxes — without hiring staff. Many international professionals, consultants, developers and creatives operate this way.",
      "This guide explains the system clearly for expats and newcomers. It is practical orientation only — not tax, legal, immigration or business consulting advice. Verify your situation with KvK, Belastingdienst, IND and qualified professionals.",
    ],
    keyPoints: [
      { title: "ZZP is a Dutch self-employment framework", body: "Example: IT consultant registers at KvK as eenmanszaak, invoices clients €95/hour ex BTW — verify whether your activity fits ZZP rules." },
      { title: "Not the same word as generic freelancing", body: "Freelancing is a broad international concept; ZZP is how many Dutch self-employed professionals register and operate locally." },
      { title: "Registration usually comes first", body: "Example: designer starts client work without KvK number — register before substantial invoices to avoid backdating issues." },
      { title: "Responsibility shifts to you", body: "Tax, BTW, contracts, pension gaps and sick days are typically yours to plan — unlike employment with an employer safety net." },
    ] satisfies ZzpCard[],
    scenarios: [
      { profile: "Developer — first ZZP year", scenario: "Offered €90/hour contract; unsure about KvK and BTW", whatToCheck: "Register at KvK, confirm BTW status and written contract before day one." },
      { profile: "Consultant — EU clients", scenario: "Based in Utrecht; invoices Germany and France", whatToCheck: "Cross-border VAT and foreign income rules — accountant orientation early." },
      { profile: "Expat — permit question", scenario: "Wants ZZP side income while on employment permit", whatToCheck: "IND rules on additional self-employment — separate from KvK registration." },
      { profile: "Former employee — one client", scenario: "Leaving job to invoice former employer as ZZP", whatToCheck: "Employment vs contractor classification — verify with accountant, not verbal OK." },
    ] satisfies ZzpScenarioRow[],
  },
  introPlanningSteps: [
    "Confirm whether ZZP fits your work pattern, income stability needs and permit situation.",
    "Bookmark KvK, Belastingdienst and IND — read official pages before registering.",
    "Plan tax buffers and admin setup before your first substantial invoice.",
  ],
  snapshotCards: [
    { label: "Popular model", value: "Widespread", note: "Common across consulting, tech, creative and business services." },
    { label: "Expat use", value: "Common", note: "Many international professionals operate as ZZP'ers in major cities." },
    { label: "Registration", value: "Usually KvK", note: "Most solo self-employed register with the Chamber of Commerce." },
    { label: "Taxes", value: "Your responsibility", note: "Income tax and often BTW — plan set-asides from month one." },
    { label: "Flexibility", value: "High", note: "Client choice, hours and remote work — within contract and permit rules." },
    { label: "Admin", value: "Ongoing", note: "Invoices, bookkeeping, filings and contracts need consistent attention." },
  ] satisfies ZzpSnapshotCard[],
  snapshotNextSteps: [
    "Read the comparison section if you are choosing between employment and ZZP.",
    "Walk through registration and KvK steps before committing to client dates.",
    "Open the freelancing guide for broader freelance context beyond ZZP definition.",
  ],
  snapshotComparisonHeading: "How ZZP compares to employment at a glance",
  snapshotComparisonParagraphs: [
    "Use this table to orient yourself before choosing between a job offer and ZZP registration — headline rates rarely tell the full story.",
  ],
  snapshotComparisonRows: [
    { topic: "Income pattern", dutchContext: "Monthly salary + vakantiegeld", whatToConfirm: "Variable client invoices; plan slow months" },
    { topic: "Registration", dutchContext: "Employer payroll setup", whatToConfirm: "KvK number + Belastingdienst choices" },
    { topic: "Tax admin", dutchContext: "Handled via employer", whatToConfirm: "Income tax + often quarterly BTW yourself" },
    { topic: "Leave & sick pay", dutchContext: "Statutory employment protections", whatToConfirm: "Unpaid unless contracted; build buffers" },
    { topic: "Pension", dutchContext: "Employer contributions common", whatToConfirm: "Voluntary gap to model in your rate" },
  ] satisfies ZzpComparisonRow[],
  snapshotScenarios: [
    { profile: "First-year ZZP — developer", scenario: "Strong Q1–Q2 then quiet Q3", whatToCheck: "Buffer fund and pipeline rebuild — normal freelance cycle." },
    { profile: "Expat comparing offers", scenario: "€95/hr ZZP vs €6,200/mo employment", whatToCheck: "Model pension, holiday and sick pay in total package." },
  ] satisfies ZzpScenarioRow[],
  vsComparisonHeading: "ZZP vs Freelancing vs Employment",
  vsComparisonParagraphs: [
    "Employment, freelancing and ZZP are often confused — especially by expats comparing offers in different countries.",
    "Employment typically means salary, employer benefits and workplace protections. Freelancing is a broad international label. ZZP is the Dutch framework many self-employed professionals use to register and invoice clients.",
  ],
  vsComparisonPoints: [
    "Employee — salary, paid leave, pension contributions and sick pay via employer",
    "Freelancer — broad concept; may or may not be registered as ZZP in the Netherlands",
    "ZZP'er — registered self-employed professional invoicing clients under Dutch rules",
  ],
  vsComparisonRows: [
    { topic: "Income", dutchContext: "Fixed salary + benefits", whatToConfirm: "Client invoices; variable monthly cash flow" },
    { topic: "Registration", dutchContext: "Employer handles payroll", whatToConfirm: "KvK + Belastingdienst setup typically your task" },
    { topic: "Tax", dutchContext: "Payroll tax via employer", whatToConfirm: "Income tax + often BTW filings yourself" },
    { topic: "Leave & sick pay", dutchContext: "Statutory protections", whatToConfirm: "No paid leave unless contracted; plan buffers" },
    { topic: "Pension", dutchContext: "Employer scheme common", whatToConfirm: "Voluntary pension gap to plan" },
    { topic: "Client risk", dutchContext: "Employer bears business risk", whatToConfirm: "Client loss = income loss" },
  ] satisfies ZzpComparisonRow[],
  vsComparisonScenarios: [
    { profile: "Rate comparison trap", scenario: "€95/hour ZZP vs €75/hour employment offer", whatToCheck: "Model pension, holiday, sick pay and tax — headline rate is not total package." },
    { profile: "Same employer, new hat", scenario: "Permanent role ends; same team wants contractor", whatToCheck: "Written contract + classification review — not just a title change." },
  ] satisfies ZzpScenarioRow[],
  professionsHeading: "Common ZZP Professions",
  professionsParagraphs: [
    "ZZP exists across many industries — from tech and consulting to creative and coaching work. Remote and international client work is common among expats.",
    "Your sector affects typical rates, client acquisition channels and whether Dutch or international clients dominate your pipeline.",
  ],
  professionsPoints: [
    "Tech and consulting dominate in Amsterdam, Utrecht and Rotterdam",
    "Creative and marketing roles often mix Dutch agencies with remote clients",
    "Coaches and translators frequently serve international audiences",
    "Verify whether your activity fits self-employment rules for your sector",
  ],
  professionCards: [
    { title: "Software Developers", body: "Agency and product clients; often remote with EU and global teams." },
    { title: "IT Consultants", body: "Project and day-rate work for corporates and scale-ups." },
    { title: "Designers", body: "Brand, UX and visual work for agencies and direct clients." },
    { title: "Marketing Specialists", body: "Campaign, content and growth roles on project basis." },
    { title: "Writers & Translators", body: "Content, copy and multilingual projects locally and abroad." },
    { title: "Coaches", body: "Career, business and life coaching — verify sector norms and contracts." },
    { title: "Photographers", body: "Events, commercial and creative assignments." },
    { title: "Project Managers", body: "Interim delivery roles across industries." },
    { title: "Business Consultants", body: "Strategy, operations and change projects." },
    { title: "Data & Analytics", body: "Reporting, BI and data science contracts." },
  ] satisfies ZzpCard[],
  professionsChecklist: [
    "Confirm your activity description matches how you will invoice clients at KvK.",
    "Research typical day rates and contract lengths in your sector before setting prices.",
    "Check whether your profession has sector-specific insurance or qualification expectations.",
    "Plan client mix — Dutch agencies, direct clients and international remote work differ in admin load.",
  ],
  professionsScenarios: [
    { profile: "Developer — Amsterdam scale-up", scenario: "Day-rate via agency; 6-month renewable contract", whatToCheck: "Classification, BTW on invoices and whether agency acts as intermediary." },
    { profile: "Translator — EU clients", scenario: "Word-count projects in DE, FR and EN", whatToCheck: "Per-client VAT treatment and foreign income reporting with accountant." },
    { profile: "Coach — international audience", scenario: "Online sessions; payments via Stripe in USD", whatToCheck: "Permit rules, BTW and currency conversion in rate model." },
    { profile: "Designer — one agency anchor", scenario: "80% revenue from single Amsterdam agency", whatToCheck: "Client dependency risk and written contract renewal terms." },
  ] satisfies ZzpScenarioRow[],
  registrationHeading: "How ZZP Registration Works",
  registrationParagraphs: [
    "Registration is a conceptual sequence — exact order and requirements depend on your situation, nationality and business activity.",
    "Most ZZP'ers register with KvK, set up tax administration with Belastingdienst and prepare banking and invoicing before substantial client work.",
  ],
  registrationPoints: [
    "Business planning — clarify activity, clients and rough financial model",
    "KvK registration — obtain KvK number and trade name",
    "Tax registration — income tax and BTW choices with Belastingdienst",
    "Administration — bookkeeping system and invoice templates",
    "Banking — business account often practical for client payments",
  ],
  registrationFlow: [
    { title: "Plan your activity", body: "Define services, target clients and whether ZZP fits your permit and income needs." },
    { title: "Register at KvK", body: "Enrol your business — commonly eenmanszaak for solo ZZP'ers. Verify on kvk.nl." },
    { title: "Set up tax admin", body: "Confirm income tax and BTW status with Belastingdienst — accountant help for cross-border cases." },
    { title: "Prepare invoicing", body: "Templates, contracts and payment terms before first invoice to Dutch or foreign clients." },
  ],
  registrationChecklist: [
    "Confirm permit rules on ind.nl if you are not on EU free movement.",
    "Register KvK before large client invoices — avoid backdating surprises.",
    "Choose bookkeeping approach (software or accountant) in month one.",
    "Open business bank account if client payments warrant separation.",
  ],
  registrationScenarios: [
    { profile: "New arrival — BSN first", scenario: "Has BSN and address; client start date in 3 weeks", whatToCheck: "KvK registration timeline + BTW choice before first invoice." },
    { profile: "Side project", scenario: "Full-time job plus evening freelance idea", whatToCheck: "Employment contract + IND rules on additional self-employment." },
    { profile: "Remote EU freelancer — moves to NL", scenario: "Existing EU clients; relocates to Rotterdam", whatToCheck: "Tax residency shift, KvK registration and cross-border VAT with accountant." },
    { profile: "Late registration — 3 invoices sent", scenario: "Consultant operated 2 months before KvK", whatToCheck: "Backdating questions, BTW on past invoices — Belastingdienst and accountant." },
  ] satisfies ZzpScenarioRow[],
  kvkHeading: "Understanding the KVK",
  kvkParagraphs: [
    "The KVK (Kamer van Koophandel) is the Dutch Chamber of Commerce. It plays a central role in business registration and maintains company records.",
    "Entrepreneurs use KvK for registration, updating business information and accessing orientation resources. Requirements vary by legal form and activity.",
  ],
  kvkPoints: [
    "Registration — enrol your business and receive a KvK number",
    "Company records — public business information linked to your registration",
    "Updates — change trade name, address or activity when needed",
    "Resources — official orientation for starting and running a business",
  ],
  kvkChecklist: [
    "Read kvk.nl starting pages for your legal form before enrolling.",
    "Prepare ID, BSN, address and activity description for registration.",
    "Keep KvK number on invoices and contracts as required.",
    "Update KvK when activity or address changes materially.",
  ],
  kvkScenarios: [
    { profile: "Trade name choice", scenario: "Wants personal name vs brand name on invoices", whatToCheck: "KvK trade name rules and client contract expectations." },
    { profile: "Activity description", scenario: "IT consultant also wants coaching income", whatToCheck: "Whether KvK activity covers both or needs update later." },
    { profile: "Address change", scenario: "Moves from Amsterdam to Utrecht mid-year", whatToCheck: "Update KvK and invoice details; client contracts may reference location." },
    { profile: "Online registration", scenario: "Expat registers via kvk.nl without Dutch fluency", whatToCheck: "English resources on kvk.nl; prepare BSN, ID and activity text in advance." },
  ] satisfies ZzpScenarioRow[],
  taxesHeading: "Taxes for Self-Employed Professionals",
  taxesParagraphs: [
    "ZZP'ers typically manage income tax on business profit, maintain records for deductible expenses and file annual returns. Many also handle BTW (VAT).",
    "Expats with foreign clients, assets abroad or prior employment in other countries should treat tax planning as core setup — not a year-end surprise. This is orientation only, not tax advice.",
  ],
  taxesPoints: [
    "Income tax — on business profit annually",
    "Bookkeeping — records for income and allowable expenses",
    "BTW — many ZZP'ers register and file quarterly",
    "Cross-border — foreign clients can add complexity",
    "Professional help — accountants common for first-year ZZP",
  ],
  taxesChecklist: [
    "Set aside monthly reserve for income tax and BTW — amount varies by situation.",
    "Track invoices and expenses from first client payment.",
    "Read expat taxes guide if you have foreign income or assets.",
    "Confirm filing deadlines on belastingdienst.nl.",
  ],
  taxesComparisonRows: [
    { topic: "Dutch clients only", dutchContext: "Standard income tax + BTW workflow", whatToConfirm: "BTW scheme choice with Belastingdienst" },
    { topic: "EU clients", dutchContext: "Reverse charge may apply", whatToConfirm: "VAT rules per client country — accountant" },
    { topic: "Non-EU clients", dutchContext: "Often simpler VAT on export of services", whatToConfirm: "Still confirm income tax and treaty context" },
    { topic: "Employed + ZZP", dutchContext: "Combined income in one return", whatToConfirm: "Payroll vs freelance income separation" },
  ] satisfies ZzpComparisonRow[],
  taxGuideLinks: [
    { label: "Expat taxes Netherlands", href: EXPAT_TAXES_NETHERLANDS_PATH, status: "live", description: "Broader expat tax orientation when ZZP income joins other streams." },
    { label: "Foreign income Netherlands", href: FOREIGN_INCOME_NETHERLANDS_PATH, status: "live", description: "Cross-border clients and income outside the Netherlands." },
    { label: "Double taxation Netherlands", href: DOUBLE_TAXATION_NETHERLANDS_PATH, status: "live", description: "Treaty concepts when invoicing internationally." },
    { label: "VAT Netherlands", href: VAT_NETHERLANDS_PATH, status: "comingSoon", description: "Future dedicated BTW guide — confirm rules with Belastingdienst meanwhile." },
  ] satisfies ZzpLink[],
  taxesScenarios: [
    { profile: "First-year surprise", scenario: "Spent full invoices; large tax bill due", whatToCheck: "Payment plan with Belastingdienst; accountant for next-year reserves." },
    { profile: "30% ruling — new ZZP", scenario: "Former employee with ruling considering ZZP switch", whatToCheck: "Tax adviser on ruling eligibility with self-employment income." },
    { profile: "Home office deduction", scenario: "Works from apartment; wants to deduct rent portion", whatToCheck: "Belastingdienst rules on home workspace — accountant calculation." },
    { profile: "Mixed employment + ZZP", scenario: "Jan–Jun employed; Jul–Dec ZZP same tax year", whatToCheck: "Combined annual return and pro-rata BTW quarters with accountant." },
  ] satisfies ZzpScenarioRow[],
  vatBtwHeading: "Understanding VAT (BTW)",
  vatBtwParagraphs: [
    "BTW (VAT) is a separate layer from income tax. Many ZZP'ers charge BTW on invoices, collect it and report quarterly to Belastingdienst.",
    "Thresholds, schemes and client location change treatment. Confirm your status officially — this section does not provide tax advice.",
  ],
  vatBtwPoints: [
    "VAT invoices — show BTW separately on Dutch client invoices when applicable",
    "Collection — BTW received is not yours to spend long-term",
    "Reporting — quarterly BTW returns common for registered businesses",
    "Small business schemes — verify eligibility on official sources",
  ],
  vatBtwChecklist: [
    "Confirm whether you must register for BTW before first invoice.",
    "Use invoice templates that meet Belastingdienst requirements.",
    "Set aside collected BTW in a separate mental (or bank) bucket.",
    "File quarterly returns on time — penalties add up quickly.",
  ],
  vatBtwComparisonRows: [
    { topic: "Dutch B2B client", dutchContext: "Usually BTW on invoice unless exempt scheme", whatToConfirm: "Client VAT number and correct rate on invoice" },
    { topic: "EU B2B client", dutchContext: "Reverse charge may apply — no Dutch BTW on invoice", whatToConfirm: "Valid EU VAT ID and invoice wording with accountant" },
    { topic: "Kleineondernemersregeling", dutchContext: "Small-business VAT scheme below thresholds", whatToConfirm: "Eligibility on belastingdienst.nl — do not assume" },
    { topic: "Non-EU export services", dutchContext: "Often 0% BTW on export of services", whatToConfirm: "Still confirm income tax and proof of foreign client" },
  ] satisfies ZzpComparisonRow[],
  vatBtwGuideLinks: [
    { label: "VAT Netherlands", href: VAT_NETHERLANDS_PATH, status: "comingSoon", description: "Future dedicated BTW guide — confirm rules with Belastingdienst meanwhile." },
    { label: "Expat taxes Netherlands", href: EXPAT_TAXES_NETHERLANDS_PATH, status: "live", description: "Broader tax orientation when BTW sits alongside other income streams." },
  ] satisfies ZzpLink[],
  vatBtwScenarios: [
    { profile: "Under threshold question", scenario: "Low revenue first year; unsure about BTW registration", whatToCheck: "Belastingdienst small business rules — do not guess." },
    { profile: "First BTW quarter — designer", scenario: "€18,000 revenue Q1; forgot BTW set-aside", whatToCheck: "Belastingdienst payment plan and accountant catch-up filings." },
    { profile: "EU reverse charge", scenario: "First invoice to German agency; zero-rated BTW", whatToCheck: "Valid client VAT ID and correct invoice wording before sending." },
    { profile: "Collected BTW spent", scenario: "Used BTW cash for personal expenses before filing", whatToCheck: "Separate BTW reserve immediately; accountant for correction path." },
  ] satisfies ZzpScenarioRow[],
  invoicingHeading: "Working With Clients and Invoicing",
  invoicingParagraphs: [
    "ZZP'ers commonly manage proposals, contracts, invoices and payment tracking themselves. Clear terms reduce disputes — especially when clients are former employers.",
    "Dutch clients often expect specific invoice fields; international clients may need currency and VAT clauses in contracts.",
  ],
  invoicingPoints: [
    "Proposals — scope, rate, timeline and payment terms in writing",
    "Contracts — define deliverables, IP and notice periods",
    "Invoices — KvK, BTW and payment details as required",
    "Tracking — overdue payments and partial project billing",
  ],
  invoicingChecklist: [
    "Include required invoice fields for Dutch clients — verify on belastingdienst.nl.",
    "Agree payment terms (14 or 30 days) before work starts.",
    "Use written contracts for projects over a few days of work.",
    "Track hours if billing hourly — clients may audit timesheets.",
  ],
  invoicingNote:
    "Invoicing rules and contract law are separate topics — use qualified help for high-value or cross-border deals.",
  invoicingScenarios: [
    { profile: "Late payer", scenario: "Dutch client pays 60 days late regularly", whatToCheck: "Contract terms, reminders and whether to adjust terms or client mix." },
    { profile: "Former employer invoice", scenario: "Same team, new ZZP contract after leaving job", whatToCheck: "Written scope, rate and classification review — not verbal OK." },
    { profile: "Milestone project", scenario: "€24k fixed fee across three deliverables", whatToCheck: "Invoice per milestone with acceptance criteria in contract." },
    { profile: "Missing invoice fields", scenario: "Client rejects invoice missing KvK number", whatToCheck: "Belastingdienst invoice requirements before resending." },
  ] satisfies ZzpScenarioRow[],
  internationalClientsHeading: "Working With Foreign Clients",
  internationalClientsParagraphs: [
    "Many expats invoice US, UK, EU and other international clients while based in the Netherlands. Cross-border work adds invoicing, tax and contract considerations.",
    "Foreign income guides help orient you — confirm each client country with an accountant.",
  ],
  internationalClientsPoints: [
    "US clients — currency, contracts and tax reporting context",
    "UK clients — post-Brexit invoicing and VAT treatment",
    "EU clients — reverse charge and VAT ID validation",
    "Remote consulting — time zones and deliverable clarity in contracts",
  ],
  internationalClientsChecklist: [
    "Confirm VAT treatment before first invoice to each new country.",
    "Read foreign income guide if revenue sits outside the Netherlands.",
    "Use contracts that specify currency, jurisdiction and IP.",
    "Keep exchange rate records if invoicing in non-euro currencies.",
  ],
  internationalClientsComparisonRows: [
    { topic: "EU B2B client", dutchContext: "Reverse charge VAT common with valid client VAT numbers", whatToConfirm: "Validate VAT ID and invoice wording per country" },
    { topic: "UK client", dutchContext: "Post-Brexit rules differ from pre-2021 assumptions", whatToConfirm: "Accountant review before long retainer contracts" },
    { topic: "US client — USD", dutchContext: "Export/service treatment; FX and tax reporting", whatToConfirm: "Currency clause, BTW and income tax with tax adviser" },
    { topic: "Multi-country mix", dutchContext: "Different VAT rules per client in same quarter", whatToConfirm: "Per-client invoice template — not one-size-fits-all" },
  ] satisfies ZzpComparisonRow[],
  internationalClientGuideLinks: [
    { label: "Foreign income Netherlands", href: FOREIGN_INCOME_NETHERLANDS_PATH, status: "live", description: "Cross-border income when clients sit outside the Netherlands." },
    { label: "Double taxation Netherlands", href: DOUBLE_TAXATION_NETHERLANDS_PATH, status: "live", description: "Treaty context for international professionals." },
    { label: "Freelancing Netherlands", href: FREELANCING_NETHERLANDS_PATH, status: "live", description: "Broader freelance guide including international client section." },
  ] satisfies ZzpLink[],
  internationalClientsScenarios: [
    { profile: "USD retainer", scenario: "Monthly $5k retainer from US SaaS client", whatToCheck: "Invoice currency, BTW/VAT and income tax reporting — accountant setup." },
    { profile: "German agency — remote dev", scenario: "Utrecht-based; 12-month project; invoices in EUR", whatToCheck: "Reverse charge VAT, contract law and payment terms in writing." },
    { profile: "UK client post-Brexit", scenario: "Marketing retainer billed monthly in GBP", whatToCheck: "VAT and service export rules with accountant — not 2020 assumptions." },
    { profile: "Multi-client EU mix", scenario: "NL, BE and FR clients same quarter", whatToCheck: "Per-client VAT treatment on each invoice template." },
  ] satisfies ZzpScenarioRow[],
  residenceStatusHeading: "ZZP for Expats and International Professionals",
  residenceStatusParagraphs: [
    "Some expats must consider residence permits, work permissions and self-employment rules before registering as ZZP. Permit route and business registration are separate planning tracks.",
    "This is orientation only — not immigration advice. Verify current rules on ind.nl and with qualified immigration advisers.",
  ],
  residenceStatusPoints: [
    "EU/EEA/Swiss — often simpler self-employment context; still verify activity rules",
    "Highly skilled migrant — additional self-employment may need IND review",
    "Self-employment visa — separate route for entrepreneur activity",
    "Student or search year — strict limits on work type and hours",
  ],
  residenceStatusChecklist: [
    "Check ind.nl before KvK if your permit is employment-linked.",
    "Do not assume client work is allowed because KvK registration succeeded.",
    "Keep permit and registration documents for mortgage or visa renewals.",
    "Use immigration lawyers for route changes — not for everyday KvK questions.",
  ],
  residenceStatusComparisonRows: [
    { topic: "EU free movement", dutchContext: "Often straightforward ZZP registration", whatToConfirm: "Activity and insurance still your responsibility" },
    { topic: "Employment permit", dutchContext: "Primary job tied to sponsor", whatToConfirm: "Side ZZP may be restricted — IND first" },
    { topic: "Self-employed visa", dutchContext: "Business plan and points system", whatToConfirm: "Separate from casual freelance projects" },
  ] satisfies ZzpComparisonRow[],
  residenceStatusScenarios: [
    { profile: "HS migrant — side gig", scenario: "Weekend coaching income while in sponsored role", whatToCheck: "IND rules on additional activity before any invoice." },
    { profile: "EU citizen — straightforward route", scenario: "French developer registers ZZP in Amsterdam", whatToCheck: "Still verify activity, insurance and tax setup — permit simpler than non-EU." },
    { profile: "Self-employed visa applicant", scenario: "Planning entrepreneur route vs casual ZZP projects", whatToCheck: "IND points system separate from occasional freelance invoices." },
    { profile: "Search year holder", scenario: "Wants consulting income during orientation period", whatToCheck: "Strict work limits — verify ind.nl before KvK and client work." },
  ] satisfies ZzpScenarioRow[],
  prosCons: {
    heading: "Benefits and Challenges of ZZP",
    paragraphs: [
      "Benefits are real — weigh them against admin, permit and financial responsibilities before leaving employment.",
      "Honest pros and cons help you compare ZZP with employment offers and home-country self-employment habits.",
    ],
    advantages: [
      "Flexibility — choose projects, hours and location within client agreements",
      "Independence — run your practice without employer hierarchy",
      "Client choice — select sectors and missions that fit your skills",
      "Remote opportunities — many ZZP roles support international clients",
      "Income potential — higher day rates possible if pipeline and utilization hold",
      "Business ownership — build brand, reputation and long-term relationships",
    ],
    challenges: [
      "Income uncertainty — slow months and client loss hit directly with no salary floor",
      "Tax administration — bookkeeping, BTW and filings are ongoing obligations",
      "Finding clients — sales and networking time reduces billable hours",
      "No employer pension — retirement savings become your responsibility",
      "No paid leave — holiday and sick days are usually unpaid unless contracted",
      "Financial planning — buffers, insurance and rate math need active management",
    ],
    scenarios: [
      { profile: "Freedom vs stability", scenario: "Loves autonomy but needs predictable mortgage payments", whatToCheck: "Buffer fund + client pipeline before leaving employment." },
      { profile: "Parent — flexibility priority", scenario: "Chooses ZZP for school-hours scheduling", whatToCheck: "Buffer for unpaid leave and health insurance during gaps." },
      { profile: "High-demand dev — rate focus", scenario: "€110/hour vs €7k employment", whatToCheck: "Still model pension, sick buffer and 25% non-billable time." },
    ] satisfies ZzpScenarioRow[],
  },
  financialPlanningHeading: "Managing Finances as a ZZP'er",
  financialPlanningParagraphs: [
    "Self-employed professionals typically plan for taxes, retirement, insurance, emergency funds and occasional business investments. Employment benefits do not transfer automatically.",
  ],
  financialPlanningPoints: [
    "Tax reserves — monthly set-aside for income tax and BTW",
    "Retirement — voluntary pension products or investments",
    "Insurance — mandatory health; consider AOV for disability",
    "Emergency fund — 3–6 months of personal expenses common target",
    "Rate math — billable hours are fewer than calendar hours",
  ],
  financialPlanningChecklist: [
    "Model net income after tax, BTW and non-billable time before quitting employment.",
    "Compare pension gap with last employer package when setting rates.",
    "Read pension for expats guide when moving from employment to ZZP.",
    "Use financial advisors for buffers and insurance when complexity grows.",
  ],
  financialPlanningRateRows: [
    { topic: "Calendar hours", dutchContext: "~160 hours/month if full-time", whatToConfirm: "Sales and admin reduce billable share" },
    { topic: "Billable target", dutchContext: "Often 50–70% of calendar hours", whatToConfirm: "Track one month; adjust pipeline or rate" },
    { topic: "Tax + BTW reserve", dutchContext: "Many set aside 25–35% of revenue", whatToConfirm: "Accountant refines for your client mix" },
    { topic: "Pension gap", dutchContext: "No employer accrual on ZZP", whatToConfirm: "Add to hourly rate model" },
  ] satisfies ZzpComparisonRow[],
  financialPlanningGuideLinks: [
    { label: "Financial advisors", href: FINANCIAL_ADVISORS_PATH, status: "live", description: "Buffers, pension gaps and insurance for variable income." },
    { label: "Pension for expats", href: PENSION_NETHERLANDS_EXPATS_PATH, status: "live", description: "Employer pension context and gaps when moving to ZZP." },
    { label: "Expat taxes Netherlands", href: EXPAT_TAXES_NETHERLANDS_PATH, status: "live", description: "Tax planning alongside ZZP revenue." },
  ] satisfies ZzpLink[],
  financialPlanningScenarios: [
    { profile: "Rate reality", scenario: "€100/hour but only 22 billable hours/month", whatToCheck: "Effective income far lower — raise rate or cut non-billable load." },
    { profile: "Mortgage planning", scenario: "Wants to buy apartment in 18 months on ZZP income", whatToCheck: "Lender view of income history — buffer and stable client mix matter." },
    { profile: "AOV question", scenario: "Sole income earner; no disability cover", whatToCheck: "Insurance adviser on AOV and emergency fund alongside health insurance." },
    { profile: "Pension gap after employment", scenario: "Left job with employer pension; now ZZP", whatToCheck: "Model voluntary pension in hourly rate — read pension for expats guide." },
  ] satisfies ZzpScenarioRow[],
  mistakesHeading: "Common Mistakes New ZZP'ers Make",
  mistakesParagraphs: [
    "New ZZP'ers — especially expats — often repeat predictable errors in the first year: late registration, optimistic tax math and over-reliance on one client.",
  ],
  mistakeCards: [
    { title: "Ignoring bookkeeping", body: "Scrambling at year-end costs time and risks errors." },
    { title: "Underestimating taxes", body: "Spending full invoices before BTW and income tax due dates." },
    { title: "One client dependency", body: "Single client loss can zero income overnight." },
    { title: "Pricing too low", body: "Forgotten pension, leave and admin time erode net pay." },
    { title: "Ignoring contracts", body: "Verbal agreements fail on scope and payment disputes." },
    { title: "No retirement savings", body: "Years without pension accrual compound later." },
    { title: "Poor cash-flow planning", body: "Late payers create personal cash crunches." },
    { title: "Delaying registration", body: "Backdating and compliance issues with KvK and tax." },
  ] satisfies ZzpCard[],
  mistakesChecklist: [
    "Register KvK before substantial client revenue.",
    "Set BTW and income tax aside from first payment.",
    "Diversify clients within 12 months if possible.",
    "Review employment vs contractor risk if one client dominates.",
  ],
  mistakesScenarios: [
    { profile: "DBA context", scenario: "90% income from former employer as ZZP", whatToCheck: "Classification review with accountant — not just convenient for employer." },
    { profile: "Late KvK — consultant", scenario: "Three months of invoices; Belastingdienst inquiry", whatToCheck: "Accountant to regularise registration and BTW filings." },
    { profile: "Unpaid invoice — €9k", scenario: "Client delays 90 days; no contract late-fee clause", whatToCheck: "Legal collection route; future contracts with deposits." },
    { profile: "Permit side work", scenario: "HSM invoices without IND clearance", whatToCheck: "Immigration lawyer before continuing activity." },
  ] satisfies ZzpScenarioRow[],
  expatQuestions: [
    { q: "What is a ZZP'er?", a: "A self-employed professional without employees — Zelfstandige Zonder Personeel — who typically invoices clients and manages their own admin and taxes." },
    { q: "Can foreigners become ZZP?", a: "Many expats register as ZZP'ers, but permit rules vary — verify IND requirements independently before relying on client income." },
    { q: "Is ZZP the same as freelancing?", a: "Freelancing is a broad term; ZZP is the common Dutch registration framework many freelancers use locally." },
    { q: "Do I need KVK registration?", a: "Most solo self-employed professionals register with KvK — confirm requirements for your activity on kvk.nl." },
    { q: "How do taxes work?", a: "Typically income tax on profit plus often BTW — exact treatment depends on your situation; use Belastingdienst and an accountant." },
    { q: "Can I work internationally?", a: "Many ZZP'ers invoice foreign clients — cross-border tax and VAT rules need per-country confirmation." },
    { q: "Can I have one client?", a: "Possible, but heavy dependence on one payer raises classification and income risks — verify with professionals." },
    { q: "Is ZZP popular?", a: "Yes — widespread across consulting, tech, creative and business services in the Netherlands." },
  ],
  hrConversationPrompts: [
    { audience: "Accountant", question: "Does my client mix and revenue require BTW registration?", whyAsk: "Avoid incorrect invoices and Belastingdienst corrections." },
    { audience: "KvK", question: "Which legal form fits my solo activity?", whyAsk: "Registration choice affects admin and liability context." },
    { audience: "IND / immigration adviser", question: "Does my permit allow this ZZP activity?", whyAsk: "Registration does not replace permit compliance." },
    { audience: "Client", question: "Is this a fixed project scope with written payment terms?", whyAsk: "Reduces scope creep and late payment disputes." },
    { audience: "Financial adviser", question: "What buffer and pension gap should my rate cover?", whyAsk: "Employment benefits no longer apply by default." },
    { audience: "Yourself", question: "What happens if my main client ends the contract in 30 days?", whyAsk: "Tests income resilience before committing full-time." },
  ],
  questionScenarios: [
    { profile: "Before registering", scenario: "Has answers on KvK but not on IND", whatToCheck: "Permit first, then KvK — order matters for many expats." },
    { profile: "First client call", scenario: "Client asks for rate and start date tomorrow", whatToCheck: "Confirm KvK, BTW and contract template before committing." },
    { profile: "Accountant shortlist", scenario: "Three quotes; unsure what to ask", whatToCheck: "Use conversation prompts table — scope BTW, cross-border and first-year filings." },
  ] satisfies ZzpScenarioRow[],
  relatedGuides: [
    { label: "Contractor vs Employee", href: CONTRACTOR_VS_EMPLOYEE_NETHERLANDS_PATH, status: "live", description: "Compare employment and ZZP models before choosing your work structure." },
    { label: "Freelancing Netherlands", href: FREELANCING_NETHERLANDS_PATH, status: "live", description: "Broader freelance guide — clients, cities, visas and pipeline." },
    { label: "Starting consultancy", href: STARTING_CONSULTANCY_NETHERLANDS_PATH, status: "live", description: "Consultancy practice design when ZZP is your advisory business model." },
    { label: "Starting a Business Netherlands", href: STARTING_BUSINESS_NETHERLANDS_PATH, status: "live", description: "Cornerstone entrepreneurship guide beyond solo ZZP." },
    { label: "Expat Taxes Netherlands", href: EXPAT_TAXES_NETHERLANDS_PATH, status: "live", description: "Tax orientation when ZZP income joins other streams." },
    { label: "Foreign Income Netherlands", href: FOREIGN_INCOME_NETHERLANDS_PATH, status: "live", description: "Cross-border clients and income outside the Netherlands." },
    { label: "Financial Advisors", href: FINANCIAL_ADVISORS_PATH, status: "live", description: "Buffers, pension and planning for variable ZZP income." },
  ] satisfies ZzpLink[],
  relatedGuideReadingOrder: [
    "Read freelancing guide for full freelance lifecycle beyond ZZP definition.",
    "Open Starting consultancy when building an advisory practice on ZZP plumbing.",
    "Open expat taxes and foreign income before scaling international clients.",
    "Use financial advisors when buffers, pension gaps or insurance add complexity.",
  ],
  relatedGuideScenarios: [
    { profile: "Just registered", scenario: "KvK done; first Dutch client next week", whatToCheck: "Freelancing guide invoicing + expat taxes for set-asides." },
    { profile: "Consultancy niche", scenario: "Advisory offer with day rates and SOWs", whatToCheck: "Starting consultancy for practice design; this page for registration depth." },
    { profile: "Scaling EU clients", scenario: "Three new countries in pipeline", whatToCheck: "Foreign income and double taxation guides + accountant." },
  ] satisfies ZzpScenarioRow[],
  serviceCategories: [
    { label: "Accountants", href: ACCOUNTANTS_PATH, description: "Bookkeeping, annual accounts and ZZP filing support.", status: "live" },
    { label: "Tax advisors", href: TAX_ADVISORS_PATH, description: "BTW, income tax and cross-border client orientation.", status: "live" },
    { label: "Business consultants", href: BUSINESS_CONSULTANTS_PATH, description: "Business model and setup planning beyond day-one registration.", status: "live" },
    { label: "Financial advisors", href: FINANCIAL_ADVISORS_PATH, description: "Buffers, pension gaps and insurance for self-employed income.", status: "live" },
    { label: "Immigration lawyers", href: IMMIGRATION_LAWYERS_PATH, description: "Permit and self-employment route questions alongside ZZP plans.", status: "live" },
  ] satisfies ServiceCategory[],
  servicesWhenToUse: [
    "Accountants — first-year bookkeeping, BTW filings and annual returns",
    "Tax advisors — cross-border clients, treaty context and complex income",
    "Business consultants — scaling beyond solo ZZP into broader entrepreneurship",
    "Financial advisors — pension gaps, buffers and disability insurance (AOV)",
    "Immigration lawyers — permit changes when self-employment affects residency",
  ],
  serviceScenarios: [
    { profile: "Complex first year", scenario: "EU + US clients; prior 30% ruling", whatToCheck: "Tax advisor + accountant scoping before Q4 surprise." },
    { profile: "Permit change", scenario: "Employment permit ending; wants full-time ZZP", whatToCheck: "Immigration lawyer before relying on client pipeline income." },
    { profile: "Scaling beyond solo", scenario: "Considering hiring first subcontractor", whatToCheck: "Business consultant on structure — ZZP means no employees by definition." },
  ] satisfies ZzpScenarioRow[],
  servicesNote:
    "Professional listings help discovery — they do not replace KvK registration, Belastingdienst filings or IND compliance. Confirm credentials and scope before hiring.",
  faq: [
    { q: "What is a ZZP'er?", a: "A self-employed professional without employees (Zelfstandige Zonder Personeel) who typically invoices clients and manages their own administration and taxes in the Netherlands." },
    { q: "Is ZZP the same as freelancing?", a: "Freelancing is a broad international concept. Many freelancers in the Netherlands operate as registered ZZP'ers under Dutch rules." },
    { q: "Do ZZP'ers register with KVK?", a: "Most solo self-employed professionals register with the Chamber of Commerce (KvK) and receive a KvK number — verify requirements for your activity on kvk.nl." },
    { q: "How do ZZP taxes work?", a: "Typically income tax on business profit and often BTW on invoices — exact rules depend on your situation. Use Belastingdienst resources and qualified advisers." },
    { q: "Can expats become ZZP?", a: "Many expats do, but residence and work permit rules apply separately from KvK registration — verify on ind.nl." },
    { q: "Can ZZP'ers work internationally?", a: "Yes, many invoice foreign clients — cross-border VAT and income tax need per-client confirmation with professionals." },
    { q: "Is ZZP popular in the Netherlands?", a: "Yes — common across consulting, technology, creative services and business professions." },
    { q: "What are the risks?", a: "Income variability, admin burden, no employer pension or paid leave, and client dependency — plan buffers and contracts accordingly." },
  ],
  faqNextSteps: [
    "Bookmark KvK and Belastingdienst before registering.",
    "Read freelancing guide for client acquisition and visa context.",
    "Confirm permit rules on ind.nl if you are not on EU free movement.",
  ],
  faqScenarios: [
    { profile: "FAQ to action", scenario: "Understands definition; ready to register", whatToCheck: "Walk registration section + accountant shortlist." },
    { profile: "Expat permit FAQ", scenario: "Read 'can foreigners become ZZP' — still unsure", whatToCheck: "IND page for permit type; immigration lawyer if employment-linked." },
    { profile: "International work FAQ", scenario: "Plans US and EU clients from year one", whatToCheck: "Foreign income guide + tax adviser before first cross-border invoice." },
  ] satisfies ZzpScenarioRow[],
  officialSources: [
    { label: "KVK", href: "https://www.kvk.nl/", description: "Business registration, trade names and entrepreneur information." },
    { label: "Belastingdienst", href: "https://www.belastingdienst.nl/", description: "Income tax, BTW and filing obligations." },
    { label: "Business.gov.nl", href: "https://business.gov.nl/", description: "Government portal for starting and running a business." },
    { label: "Government.nl", href: "https://www.government.nl/", description: "Official information on living and working in the Netherlands." },
    { label: "IND", href: "https://ind.nl/", description: "Residence permits and work permission for expats." },
  ],
  officialSourcesNote:
    "Business registration requirements, tax obligations and immigration rules can change over time. Always verify current information through official resources.",
  sourceVerificationTips: [
    "KvK — registration requirements and legal forms",
    "Belastingdienst — income tax, BTW and filing deadlines",
    "Business.gov.nl — step-by-step business setup orientation",
    "IND — permit rules before relying on ZZP income",
  ],
  officialSourcesScenarios: [
    { profile: "Official source routing", scenario: "Unsure whether question is tax or permit", whatToCheck: "Permit → IND; registration → KvK; tax → Belastingdienst." },
    { profile: "KvK vs Belastingdienst", scenario: "Registered at KvK; unsure about BTW filing", whatToCheck: "Belastingdienst for BTW; KvK does not handle tax returns." },
    { profile: "Business.gov.nl orientation", scenario: "Wants step-by-step setup checklist in English", whatToCheck: "Business.gov.nl for government overview; then KvK and Belastingdienst for specifics." },
  ] satisfies ZzpScenarioRow[],
  ecosystemLinks: [
    { label: "Freelancing guide", href: FREELANCING_NETHERLANDS_PATH, status: "live", description: "Full freelance lifecycle — clients, cities, mistakes and services." },
    { label: "Starting consultancy", href: STARTING_CONSULTANCY_NETHERLANDS_PATH, status: "live", description: "Advisory practice setup on shared ZZP plumbing." },
    { label: "Expat taxes", href: EXPAT_TAXES_NETHERLANDS_PATH, status: "live", description: "Tax orientation for international residents." },
    { label: "Tax advisors directory", href: TAX_ADVISORS_PATH, status: "live", description: "Find tax support for ZZP and cross-border work." },
    { label: "Accountants directory", href: ACCOUNTANTS_PATH, status: "live", description: "Bookkeeping and filing support for self-employed professionals." },
  ] satisfies ZzpLink[],
  exploreNextCards: [
    { label: "Freelancing Guide", href: FREELANCING_NETHERLANDS_PATH, status: "live", description: "Broader freelance orientation beyond ZZP definition." },
    { label: "Starting consultancy", href: STARTING_CONSULTANCY_NETHERLANDS_PATH, status: "live", description: "Practice design when consultancy is your ZZP lane." },
    { label: "Starting a Business", href: STARTING_BUSINESS_NETHERLANDS_PATH, status: "live", description: "Cornerstone entrepreneurship guide for expats." },
    { label: "Expat Taxes", href: EXPAT_TAXES_NETHERLANDS_PATH, status: "live", description: "Tax planning when ZZP joins other income." },
    { label: "Foreign Income", href: FOREIGN_INCOME_NETHERLANDS_PATH, status: "live", description: "Cross-border client and income context." },
  ] satisfies ZzpLink[],
  exploreNextTips: [
    "Open freelancing guide if you need client pipeline and city context.",
    "Open Starting consultancy when niche, rates and SOWs are the next decision.",
    "Read expat taxes before your first full ZZP tax year.",
    "Use foreign income guide when more than half of revenue is cross-border.",
  ],
  planningLinks: [
    { label: "Freelancing guide", href: FREELANCING_NETHERLANDS_PATH, description: "Full freelance lifecycle for expats in the Netherlands." },
    { label: "Starting consultancy", href: STARTING_CONSULTANCY_NETHERLANDS_PATH, description: "Advisory practice design on ZZP plumbing." },
    { label: "Expat taxes guide", href: EXPAT_TAXES_NETHERLANDS_PATH, description: "Tax orientation when ZZP income joins employment or foreign assets." },
    { label: "Foreign income guide", href: FOREIGN_INCOME_NETHERLANDS_PATH, description: "Cross-border clients and income streams." },
  ] satisfies ZzpLink[],
} as const;

export type ZzpNetherlandsPage = typeof zzpNetherlandsPage;
