export const STARTING_BUSINESS_NETHERLANDS_PATH = "/netherlands/business/starting-a-business-netherlands/" as const;
export const STARTING_BUSINESS_AFFILIATE_PLACEMENT_ID = "nl-business-starting-a-business-support-providers" as const;

export const ZZP_NETHERLANDS_PATH = "/netherlands/business/zzp-netherlands/" as const;
export const FREELANCING_NETHERLANDS_PATH = "/netherlands/jobs/freelancing-netherlands/" as const;
export const BUSINESS_HUB_PATH = "/netherlands/business/" as const;
export const EXPAT_TAXES_NETHERLANDS_PATH = "/netherlands/taxes/expat-taxes-netherlands/" as const;
export const FOREIGN_INCOME_NETHERLANDS_PATH = "/netherlands/taxes/foreign-income-netherlands/" as const;
export const DOUBLE_TAXATION_NETHERLANDS_PATH = "/netherlands/taxes/double-taxation-netherlands/" as const;
export const VAT_NETHERLANDS_PATH = "/netherlands/taxes/vat-netherlands/" as const;
export const BEST_BANK_ZZP_PATH = "/netherlands/money/banking/best-bank-zzp/" as const;
export const SELF_EMPLOYED_VISA_PATH = "/netherlands/visa/self-employed-visa/" as const;
export const VISAS_HUB_PATH = "/netherlands/moving/visas-residency/" as const;
export const ACCOUNTANTS_PATH = "/netherlands/services/accountants/" as const;
export const TAX_ADVISORS_PATH = "/netherlands/services/tax-advisors/" as const;
export const FINANCIAL_ADVISORS_PATH = "/netherlands/services/financial-advisors/" as const;
export const BUSINESS_CONSULTANTS_PATH = "/netherlands/services/business-consultants/" as const;
export const IMMIGRATION_LAWYERS_PATH = "/netherlands/services/immigration-lawyers/" as const;

export const AMSTERDAM_PATH = "/netherlands/amsterdam/" as const;
export const ROTTERDAM_PATH = "/netherlands/rotterdam/" as const;
export const UTRECHT_PATH = "/netherlands/utrecht/" as const;
export const THE_HAGUE_PATH = "/netherlands/the-hague/" as const;
export const EINDHOVEN_PATH = "/netherlands/eindhoven/" as const;
export const LEIDEN_PATH = "/netherlands/leiden/" as const;
export const DELFT_PATH = "/netherlands/delft/" as const;
export const GRONINGEN_PATH = "/netherlands/groningen/" as const;

export const KVK_REGISTRATION_NETHERLANDS_PATH = "/netherlands/business/kvk-registration-netherlands/" as const;
export const BUSINESS_BANK_ACCOUNT_NETHERLANDS_PATH = "/netherlands/business/business-bank-account-netherlands/" as const;
export const BV_VS_ZZP_NETHERLANDS_PATH = "/netherlands/business/bv-vs-zzp-netherlands/" as const;
export const STARTUP_VISA_NETHERLANDS_PATH = "/netherlands/business/startup-visa-netherlands/" as const;

export type StartingBusinessLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type StartingBusinessCard = {
  title: string;
  body: string;
};

export type StartingBusinessScenarioRow = {
  profile: string;
  scenario: string;
  whatToCheck: string;
};

export type StartingBusinessComparisonRow = {
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

export type StartingBusinessSnapshotCard = {
  label: string;
  value: string;
  note: string;
};

export type StartingBusinessWorkedExampleRow = {
  profile: string;
  keyFigures: string;
  exampleMath: string;
  whatToConfirm: string;
};

export type StartingBusinessTimelineRow = {
  step: string;
  typicalTiming: string;
  example: string;
};

const INFOGRAPHIC_VERSION = "premium-v4";

const visual = (name: string, alt: string, caption: string) => ({
  src: `/images/infographics/netherlands-starting-a-business-${name}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const startingBusinessNetherlandsPage = {
  slug: "starting-a-business-netherlands",
  path: STARTING_BUSINESS_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2026-09-13",
  affiliatePlacementId: STARTING_BUSINESS_AFFILIATE_PLACEMENT_ID,
  seo: {
    title: "Starting a Business in the Netherlands | Complete Expat Guide",
    description:
      "Learn how to start a business in the Netherlands, including KVK registration, business structures, taxes, banking, visas and practical considerations for expats.",
    keywords: [
      "starting a business netherlands",
      "start business netherlands",
      "business netherlands expat",
      "entrepreneur netherlands",
      "company registration netherlands",
      "kvk registration",
      "business setup netherlands",
      "dutch company registration",
      "self employed netherlands",
      "expat entrepreneur netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Business · Entrepreneurship",
    pageTitle: "Starting a Business in the Netherlands",
    subtitle:
      "Learn how entrepreneurs and expats start businesses in the Netherlands, including registration, taxes, banking, administration and practical first steps.",
    primaryCta: { label: "Start Your Business Journey", href: "#intro" },
    secondaryCta: { label: "Explore Business Guides", href: "#related-guides" },
    chips: ["KvK registration", "Business structures", "Tax orientation", "Expat entrepreneurs"],
    image: {
      src: "/images/heroes/netherlands-starting-a-business-netherlands-hero-v3.png",
      alt: "Photorealistic editorial hero of international entrepreneurs at a canal-side desk reviewing KvK registration steps, business plan spreadsheet and startup checklist — Amsterdam canal houses and modern skyline through the window.",
    },
  },
  visuals: {
    intro: visual(
      "intro",
      "Premium infographic record-file builder explaining whether foreigners can start a business in the Netherlands with six planning areas — eligibility context, registration, structures, taxes, banking and expat considerations — with concrete examples and checklist rail.",
      "Start here: confirm whether entrepreneurship fits your plans and bookmark official sources before registering."
    ),
    snapshot: visual(
      "snapshot",
      "Premium at-a-glance infographic with six startup cards — foreign entrepreneurs, registration, KvK role, tax obligations, administration and planning essentials.",
      "Compare these six areas against your concept — exact rules depend on nationality, structure and activity."
    ),
    whyNetherlands: visual(
      "why-netherlands",
      "Premium Netherlands trade-and-innovation map highlighting eight reasons entrepreneurs choose the Netherlands — logistics, English proficiency, EU access, startup ecosystem, workforce, digital infrastructure and quality of life.",
      "Location advantages are real — still verify structure, permit and tax context for your specific plan."
    ),
    structures: visual(
      "structures",
      "Premium legal-form decision board comparing six Dutch business structures — ZZP/eenmanszaak, BV, partnerships, VOF, foundations and other entities — with orientation labels only.",
      "Structure choice affects admin, liability and tax context — confirm with KvK and qualified advisers, not this guide."
    ),
    kvk: visual(
      "kvk",
      "Premium KvK desk scene explaining Chamber of Commerce registration, business records, entrepreneur resources and public company information.",
      "The KvK is central to most business registrations — verify requirements on kvk.nl."
    ),
    registration: visual(
      "registration",
      "Premium seven-step registration timeline from business concept through KvK, tax admin, banking, administration and launch.",
      "Register in a sensible order — structure and permit clarity before substantial client revenue or hiring."
    ),
    taxes: visual(
      "taxes",
      "Premium tax orientation board on income tax, corporate tax, BTW, payroll taxes and reporting handoffs for Dutch businesses.",
      "Plan tax administration from day one — this is orientation, not tax advice."
    ),
    banking: visual(
      "banking",
      "Premium business banking desk scene on separating finances, client payments, bookkeeping integration and professional invoicing.",
      "Business banking often simplifies admin — compare options before your first substantial revenue."
    ),
    administration: visual(
      "administration",
      "Premium administration workspace on bookkeeping, invoices, contracts, receipts and reporting rhythms for new entrepreneurs.",
      "Strong admin habits reduce year-end stress — set systems up in month one."
    ),
    visas: visual(
      "visas",
      "Premium two-track bridge separating IND permit routes from KvK business registration for expat entrepreneurs and self-employment visa context.",
      "Permit route and business registration are separate tracks — verify IND rules independently."
    ),
    ecosystem: visual(
      "ecosystem",
      "Premium startup ecosystem map across Amsterdam, Rotterdam, Utrecht, Eindhoven and Delft with incubators, accelerators and innovation hubs — orientation only.",
      "Ecosystem support varies by city and sector — network early but verify fit for your business model."
    ),
    cities: visual(
      "cities",
      "Premium entrepreneur city comparison board with eight Dutch cities — Amsterdam, Rotterdam, Utrecht, Eindhoven, The Hague, Leiden, Delft and Groningen — showing sector strengths.",
      "City choice affects clients, costs and network — confirm sector fit before committing to a lease."
    ),
    freelancingVsBusiness: visual(
      "freelancing-vs-business",
      "Premium comparison bridge between freelancing/ZZP routes and broader business ownership — solo consulting vs agencies, tech companies and service businesses.",
      "Many entrepreneurs start with ZZP — scaling may later require structure and admin changes."
    ),
    costs: visual(
      "costs",
      "Premium startup cost categories board — registration, banking, software, accounting, insurance, marketing and equipment — with example ranges, not guarantees.",
      "Model costs conservatively — under-budgeting admin and tax reserves is a common first-year mistake."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board with eight common new entrepreneur errors — weak admin, tax surprises, no buffer, poor research, overcomplicated structures, missing contracts and DIY overload.",
      "Most costly mistakes happen before launch or in the first 90 days — plan buffers and ask professionals early."
    ),
    services: visual(
      "services",
      "Premium provider map showing when accountants, tax advisors, business consultants, financial advisors and immigration lawyers may help during business setup.",
      "Use professionals for scoped review — still read official sources yourself."
    ),
    checklist: visual(
      "checklist",
      "Premium ten-step business launch checklist from idea validation through structure, KvK, tax admin, banking, contracts, insurance, online presence and operations.",
      "Work through this checklist in order — permit and structure clarity before substantial spending."
    ),
    questions: visual(
      "questions",
      "Premium eight-card Q&A infographic answering expat entrepreneur questions on foreigners, citizenship, KvK, taxes, banking, international work, setup costs and structures.",
      "Use these as conversation starters with KvK, IND and advisers — not legal or tax advice."
    ),
    faq: visual(
      "faq",
      "Premium FAQ accordion board with eight starting-a-business questions and short orientation answers on foreigners, KvK, structures, timelines, taxes, banking and first steps.",
      "FAQ answers orient you — confirm your situation with official sources and qualified advisers."
    ),
    officialSources: visual(
      "official-sources",
      "Premium Netherlands map pinning six official sources — KvK, Business.gov.nl, Belastingdienst, Government.nl, IND and RVO — with what to verify where.",
      "Bookmark these before registration — rules and thresholds change over time."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium route-map linking starting a business to ZZP, freelancing, expat taxes, VAT, accountants and business consultants.",
      "Suggested order: structure clarity → ZZP or broader setup → tax and banking guides."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium canal-route journey with five next cards — ZZP guide, freelancing guide, business banking, VAT guide and tax advisors.",
      "Pick your next guide based on whether you are registering, banking or planning taxes."
    ),
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#why-netherlands", label: "Why NL" },
    { href: "#structures", label: "Structures" },
    { href: "#kvk", label: "KvK" },
    { href: "#registration", label: "Register" },
    { href: "#taxes", label: "Taxes" },
    { href: "#banking", label: "Banking" },
    { href: "#administration", label: "Admin" },
    { href: "#visas", label: "Permits" },
    { href: "#ecosystem", label: "Ecosystem" },
    { href: "#cities", label: "Cities" },
    { href: "#freelancing-vs-business", label: "Compare" },
    { href: "#costs", label: "Costs" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#services", label: "Services" },
    { href: "#checklist", label: "Checklist" },
    { href: "#questions", label: "Questions" },
    { href: "#faq", label: "FAQ" },
    { href: "#official-sources", label: "Sources" },
    { href: "#related-guides", label: "Guides" },
    { href: "#explore-next", label: "Explore next" },
  ],
  intro: {
    heading: "Can Foreigners Start a Business in the Netherlands?",
    paragraphs: [
      "Yes — many international entrepreneurs start businesses in the Netherlands. The country attracts founders because of its international economy, strong infrastructure, English proficiency, startup ecosystem and EU market access.",
      "Requirements depend on your nationality, residence status, business activity and chosen legal structure. Registration, tax administration and banking typically follow once your concept is clear.",
      "This guide explains how starting a business works for expats and newcomers. It is practical orientation only — not tax, legal, immigration or business consulting advice. Verify your situation with KvK, Belastingdienst, IND and qualified professionals.",
    ],
    keyPoints: [
      { title: "Foreign entrepreneurs are common", body: "Example: US SaaS founder with BSN registers eenmanszaak online — KvK number often within 1–5 business days; IND rules still apply separately for non-EU founders." },
      { title: "Registration is usually required", body: "Example: consultant pays around €80 one-time KvK fee (verify on kvk.nl), then invoices first Dutch client at €4,500 ex BTW — BTW and income tax reserves needed from that payment." },
      { title: "Structure shapes your admin load", body: "Example: solo developer at €90/hour × 22 billable hours/month (~€1,980 revenue) often starts as eenmanszaak; two co-founders planning a €120k/year hire may budget €1,500–€3,000+ notary BV setup." },
      { title: "Planning beats rushing", body: "Example: agency founder invoices €12,000 before KvK — backdating and BTW on past work is harder than registering first and invoicing from week 3." },
    ] satisfies StartingBusinessCard[],
    scenarios: [
      { profile: "EU founder — Amsterdam", scenario: "SaaS consultancy; €6,500/mo target; has BSN and address", whatToCheck: "KvK in week 1–2, BTW on Dutch B2B invoices (often 21%), reserve ~30% of first €20k revenue." },
      { profile: "Non-EU — self-employed route", scenario: "Planning IND points route; €45k year-one revenue forecast", whatToCheck: "IND business plan separate from €80 KvK step — do not invoice before permit clarity." },
      { profile: "Employed expat — side venture", scenario: "€7,200/mo job plus €800/mo ecommerce side income target", whatToCheck: "Employment contract + IND side-activity rules before crossing €5k cumulative sales." },
      { profile: "Remote founder — EU clients", scenario: "Relocates to Rotterdam; €18k/quarter from DE and UK clients", whatToCheck: "Tax residency shift, KvK registration and cross-border BTW with accountant before Q2 filings." },
    ] satisfies StartingBusinessScenarioRow[],
  },
  introWorkedExamples: [
    { profile: "Solo consultant — year one", keyFigures: "€95/hr · 22 billable hrs/mo · ~€25k revenue", exampleMath: "Gross ~€2,090/mo → reserve ~€520–730/mo (25–35%) for BTW + income tax before spending", whatToConfirm: "Accountant refines; employment at €6,200/mo may beat headline rate after benefits." },
    { profile: "Lean ecommerce — year one", keyFigures: "KvK ~€80 · stock €8k · software ~€120/mo", exampleMath: "Registration fee is small vs inventory — model 6-month stock + ads budget separately", whatToConfirm: "BTW on B2C sales and returns policy before scaling ad spend." },
    { profile: "BV with co-founder", keyFigures: "Notary ~€1,500–€3,000 · accountant ~€200/mo · hire at €55k salary", exampleMath: "Setup often €5k–€15k+ before revenue — plan payroll tax from first employee month", whatToConfirm: "Notary quote + shareholder agreement before incorporating." },
  ] satisfies StartingBusinessWorkedExampleRow[],
  introPlanningSteps: [
    "Confirm whether entrepreneurship fits your permit, income stability needs and market concept.",
    "Bookmark KvK, Business.gov.nl, Belastingdienst and IND — read official pages before registering.",
    "Plan tax buffers, banking and admin setup before substantial client revenue or hiring.",
  ],
  planningLinks: [
    { label: "ZZP guide", href: ZZP_NETHERLANDS_PATH, description: "Dutch self-employment framework many solo entrepreneurs start with." },
    { label: "Freelancing guide", href: FREELANCING_NETHERLANDS_PATH, description: "Broader freelance lifecycle — clients, cities, visas and pipeline." },
    { label: "Expat taxes guide", href: EXPAT_TAXES_NETHERLANDS_PATH, description: "Tax orientation when business income joins employment or foreign assets." },
    { label: "Financial advisors", href: FINANCIAL_ADVISORS_PATH, description: "Buffers, cash-flow planning and insurance for variable startup income." },
  ] satisfies StartingBusinessLink[],
  snapshotHeading: "Starting a Business at a Glance",
  snapshotParagraphs: [
    "Use this snapshot to orient yourself before diving into structures, KvK registration and tax planning — headline enthusiasm rarely matches admin reality.",
    "Exact requirements depend on nationality, structure and activity. Treat these cards as planning prompts, not guarantees.",
  ],
  snapshotCards: [
    { label: "Foreign entrepreneurs", value: "Can start", note: "Non-EU founders often need IND route first — KvK alone does not replace permit rules." },
    { label: "KvK registration", value: "1–5 days", note: "Online eenmanszaak often same day to a few business days once ID, BSN and address are ready." },
    { label: "Typical KvK fee", value: "~€80", note: "One-time eenmanszaak orientation figure — verify current fee on kvk.nl before budgeting." },
    { label: "BTW on invoices", value: "Often 21%", note: "Many B2B services charge 21% BTW — set aside BTW collected plus income tax on profit." },
    { label: "Tax reserve habit", value: "25–35%", note: "Common orientation reserve on revenue until accountant confirms your mix." },
    { label: "Runway buffer", value: "3–6 months", note: "Example: €2,500/mo living costs → €7,500–€15,000 buffer before quitting employment." },
  ] satisfies StartingBusinessSnapshotCard[],
  snapshotComparisonHeading: "How startup setup compares to employment at a glance",
  snapshotComparisonParagraphs: [
    "Many expats compare a job offer with entrepreneurship — use this table to orient yourself before choosing a path.",
  ],
  snapshotComparisonRows: [
    { topic: "Income pattern", dutchContext: "Example: €6,200/mo salary + 8% vakantiegeld", whatToConfirm: "Example: €95/hr × 22 hrs = ~€2,090/mo variable — plan quiet months" },
    { topic: "Registration", dutchContext: "Employer handles payroll setup", whatToConfirm: "KvK ~€80 + your Belastingdienst BTW choices" },
    { topic: "Tax admin", dutchContext: "Payroll tax via employer", whatToConfirm: "Quarterly BTW + annual income tax — reserve 25–35% orientation" },
    { topic: "Leave & sick pay", dutchContext: "Statutory paid leave + sick pay", whatToConfirm: "No paid leave unless contracted — 3–6 month buffer" },
    { topic: "Setup cost", dutchContext: "Near zero for employee", whatToConfirm: "€2k–€5k lean ZZP year one vs €5k–€15k+ BV setup" },
  ] satisfies StartingBusinessComparisonRow[],
  snapshotWorkedExamples: [
    { profile: "Job vs startup — consultant", keyFigures: "Employment €7,200/mo vs €95/hr ZZP", exampleMath: "ZZP ~€2,090/mo at 22 billable hours — far below salary unless hours/rate rise", whatToConfirm: "Add pension, holiday, sick pay and 25% non-billable time before quitting." },
    { profile: "First-year revenue swing", keyFigures: "Q1 €14k · Q2 €9k · Q3 €4k", exampleMath: "Quiet summer without buffer — plan €3k/mo minimum personal draw", whatToConfirm: "Pipeline rebuild and tax reserves on strong quarters." },
  ] satisfies StartingBusinessWorkedExampleRow[],
  snapshotScenarios: [
    { profile: "Job vs startup — consultant", scenario: "€7,200/mo employment vs agency idea", whatToCheck: "Model pension, holiday, sick pay and 12-month runway before quitting." },
    { profile: "First-year revenue swing", scenario: "Strong Q1 then quiet summer", whatToCheck: "Buffer fund and pipeline rebuild — normal entrepreneur cycle." },
  ] satisfies StartingBusinessScenarioRow[],
  snapshotNextSteps: [
    "Read structures section if you are unsure between ZZP, BV or partnership routes.",
    "Walk through registration and KvK steps before committing to client start dates.",
    "Open visas section if your permit is employment-linked or you are non-EU.",
  ],
  whyNetherlandsHeading: "Why Start a Business in the Netherlands?",
  whyNetherlandsParagraphs: [
    "Entrepreneurs choose the Netherlands for practical reasons: EU market access, logistics, English-friendly business culture and a dense startup network in major cities.",
    "Advantages do not remove registration, tax or permit obligations — they reduce friction for international founders who plan carefully.",
  ],
  whyNetherlandsPoints: [
    "EU access from a well-connected logistics hub",
    "English widely used in business and startup circles",
    "Strong digital infrastructure and banking options",
    "Skilled international workforce in Randstad and Brainport",
  ],
  whyNetherlandsCards: [
    { title: "International trade hub", body: "Rotterdam port and Schiphol connect European and global supply chains — relevant for trade and logistics ventures." },
    { title: "Strong logistics network", body: "Distribution, fulfilment and B2B services benefit from dense transport infrastructure." },
    { title: "English-speaking environment", body: "Many startups, agencies and corporates operate in English — helpful for expat founders." },
    { title: "EU access", body: "Dutch registration sits inside the EU single market — cross-border clients still need per-country tax checks." },
    { title: "Startup ecosystem", body: "Incubators, accelerators and investor networks cluster in Amsterdam, Rotterdam, Utrecht and Eindhoven." },
    { title: "Skilled workforce", body: "Universities and tech employers feed talent into consulting, tech and creative sectors." },
    { title: "Digital infrastructure", body: "Reliable connectivity supports remote teams, SaaS and digital service businesses." },
    { title: "High quality of life", body: "Cities offer international schools, cycling culture and stable public services — useful for relocating teams." },
  ] satisfies StartingBusinessCard[],
  whyNetherlandsScenarios: [
    { profile: "Ecommerce founder", scenario: "Wants EU fulfilment base near Rotterdam", whatToCheck: "Logistics partners, KvK activity description and BTW orientation." },
    { profile: "Tech consultant — remote team", scenario: "Hires contractors across EU from Utrecht", whatToCheck: "Structure beyond solo ZZP if payroll and liability grow." },
    { profile: "Life sciences — Leiden", scenario: "Spin-off from university research network", whatToCheck: "Sector grants via RVO; IP and partnership agreements with lawyer." },
  ] satisfies StartingBusinessScenarioRow[],
  whyNetherlandsNextSteps: [
    "Shortlist two cities that match your sector before signing office or co-working leases.",
    "Read the cities section to compare client access, costs and talent pools.",
    "Use RVO and city guides to map grants and networks — not as a substitute for KvK registration.",
  ],
  structuresHeading: "Common Dutch Business Structures",
  structuresParagraphs: [
    "Dutch businesses take several legal forms — from solo self-employment (often ZZP/eenmanszaak) to BV companies and partnerships.",
    "Different structures suit different goals, liability preferences and growth plans. This section orients you — it does not recommend one option.",
  ],
  structuresPoints: [
    "ZZP/eenmanszaak — common solo self-employment starting point",
    "BV — private limited company with separate legal personality",
    "Partnerships — shared ownership and responsibility models",
    "Confirm structure with KvK and qualified advisers before registering",
  ],
  businessStructures: [
    { title: "ZZP / Sole Proprietorship (eenmanszaak)", body: "Example: developer registers online for ~€80 KvK fee, invoices €4,500/project ex BTW — fast solo path; liability often linked to you personally." },
    { title: "BV (Private Limited Company)", body: "Example: two founders budget €1,500–€3,000 notary + €250/mo accountant before first €100k revenue year — separate legal entity." },
    { title: "Partnerships (maatschap)", body: "Example: two accountants share profits 60/40 — partnership agreement should fix exits and capital calls in writing." },
    { title: "General Partnership (VOF)", body: "Example: retail partners split €180k turnover — verify how joint liability works with a lawyer before signing." },
    { title: "Foundations (stichting)", body: "Example: non-profit arm holding grants — different from commercial BV; verify activity rules." },
    { title: "Other legal entities", body: "Example: foreign branch registration — specialist setup often €2k+ in professional fees beyond KvK." },
  ] satisfies StartingBusinessCard[],
  structuresComparisonRows: [
    { topic: "ZZP / eenmanszaak", dutchContext: "KvK ~€80 · setup often under €2k year one", whatToConfirm: "Liability and tax on profit with accountant" },
    { topic: "BV", dutchContext: "Notary ~€1.5k–€3k+ · accountant ~€150–€400/mo", whatToConfirm: "Director salary, corporate tax and payroll if hiring" },
    { topic: "VOF / maatschap", dutchContext: "Lower entry than BV; shared liability", whatToConfirm: "Written partner agreement before first €10k revenue" },
    { topic: "Scaling path", dutchContext: "Many convert after ~€80k–€120k solo revenue", whatToConfirm: "Tax adviser on timing of BV conversion" },
  ] satisfies StartingBusinessComparisonRow[],
  structuresWorkedExamples: [
    { profile: "Solo consultant", keyFigures: "€90/hr · 24 hrs/mo · ~€26k/yr", exampleMath: "Eenmanszaak often sufficient year one — BV may add €2k+ setup without benefit yet", whatToConfirm: "Accountant scoping call with revenue forecast." },
    { profile: "Co-founders — tech", keyFigures: "2 founders · hire at €60k in month 8", exampleMath: "BV + notary ~€2k + payroll tax from hire month — plan €8k+ pre-revenue buffer", whatToConfirm: "Shareholder agreement before first investor conversation." },
    { profile: "Agency + subcontractors", keyFigures: "€35k/mo client · €18k/mo to freelancers", exampleMath: "Classification risk if 80% revenue via one client — structure review before scaling", whatToConfirm: "Lawyer + accountant on VOF vs BV vs ZZP mix." },
  ] satisfies StartingBusinessWorkedExampleRow[],
  structuresScenarios: [
    { profile: "Solo consultant", scenario: "Day-rate work; no employees planned year one", whatToCheck: "ZZP/eenmanszaak vs premature BV — accountant scoping call." },
    { profile: "Co-founders — tech startup", scenario: "Two founders; planning hire in 6 months", whatToCheck: "BV with shareholder agreement vs VOF — notary and lawyer input." },
    { profile: "Agency with subcontractors", scenario: "Invoices clients; uses freelancers", whatToCheck: "Classification and liability — structure review before scaling." },
  ] satisfies StartingBusinessScenarioRow[],
  structuresNextSteps: [
    "Book a 30-minute accountant scoping call with a rough revenue forecast — structure debates stall without numbers.",
    "Read ZZP guide if you are solo; plan BV conversation if co-founders or hiring are likely within 12 months.",
    "Register only after structure choice is documented — changing form mid-year adds cost and admin.",
  ],
  structuresGuideLinks: [
    { label: "ZZP Netherlands", href: ZZP_NETHERLANDS_PATH, status: "live", description: "Most common solo starting point — registration, taxes and invoicing." },
    { label: "BV vs ZZP comparison", href: BV_VS_ZZP_NETHERLANDS_PATH, status: "comingSoon", description: "Future guide when scaling beyond solo self-employment." },
    { label: "Contractor vs employee", href: "/netherlands/jobs/contractor-vs-employee-netherlands/", status: "live", description: "Compare employment with entrepreneurship before choosing a path." },
  ] satisfies StartingBusinessLink[],
  kvkHeading: "Understanding the Dutch Chamber of Commerce (KVK)",
  kvkParagraphs: [
    "The KVK (Kamer van Koophandel) is the Dutch Chamber of Commerce. It plays a central role in business registration and maintains public company records.",
    "Entrepreneurs use KvK for registration, updating business information and accessing official orientation resources. Requirements vary by legal form and activity.",
  ],
  kvkPoints: [
    "Registration — enrol your business and receive a KvK number",
    "Company records — public business information linked to your registration",
    "Updates — change trade name, address or activity when needed",
    "Resources — official orientation for starting and running a business",
  ],
  kvkChecklist: [
    "Budget around €80 one-time KvK fee for eenmanszaak — verify current amount on kvk.nl.",
    "Prepare valid ID, BSN, Dutch business address and 2–3 sentence activity description.",
    "Expect an 8-digit KvK number (example format: 12345678) on confirmation.",
    "Update KvK within weeks if activity, address or trade name changes materially.",
  ],
  kvkWorkedExamples: [
    { profile: "Online eenmanszaak", keyFigures: "Fee ~€80 · timing 1–5 days", exampleMath: "Register Tuesday with BSN ready → KvK number often same week → bank asks for extract next", whatToConfirm: "Fee and steps on kvk.nl before paying." },
    { profile: "Trade name vs personal name", keyFigures: "Brand 'Northline Studio' on invoices", exampleMath: "KvK trade name registration may differ from personal legal name — align with client contracts", whatToConfirm: "Invoice template matches KvK extract." },
    { profile: "Dual activity", keyFigures: "Consulting now · ecommerce in 6 months", exampleMath: "Activity description too narrow → KvK update later; plan broader description if allowed", whatToConfirm: "KvK guidance on combined activities." },
  ] satisfies StartingBusinessWorkedExampleRow[],
  kvkGuideLinks: [
    { label: "KvK registration guide", href: KVK_REGISTRATION_NETHERLANDS_PATH, status: "comingSoon", description: "Future deep-dive on Chamber of Commerce enrolment steps." },
    { label: "ZZP Netherlands", href: ZZP_NETHERLANDS_PATH, status: "live", description: "Solo self-employment framework many entrepreneurs start with." },
    { label: "BV vs ZZP comparison", href: BV_VS_ZZP_NETHERLANDS_PATH, status: "comingSoon", description: "Future guide comparing common solo and company structures." },
    { label: "Business.gov.nl", href: "https://business.gov.nl/", status: "live", description: "Government portal for starting and running a business." },
  ] satisfies StartingBusinessLink[],
  kvkScenarios: [
    { profile: "Trade name choice", scenario: "Wants brand name vs personal name on invoices", whatToCheck: "KvK trade name rules and client contract expectations." },
    { profile: "Activity description", scenario: "Consulting plus planned ecommerce revenue", whatToCheck: "Whether KvK activity covers both or needs update later." },
    { profile: "Address change", scenario: "Moves from Amsterdam to Utrecht mid-year", whatToCheck: "Update KvK and invoice details; contracts may reference location." },
    { profile: "Online registration", scenario: "Expat registers via kvk.nl without Dutch fluency", whatToCheck: "English resources on kvk.nl; prepare BSN, ID and activity text." },
  ] satisfies StartingBusinessScenarioRow[],
  kvkNextSteps: [
    "Gather BSN, valid ID and a clear activity description before starting online enrolment.",
    "Decide trade name and whether invoices will use personal or brand name.",
    "Save your KvK number immediately — banks and clients will ask for it.",
  ],
  registrationHeading: "How Business Registration Typically Works",
  registrationParagraphs: [
    "Registration is a conceptual sequence — exact order and requirements depend on your situation, nationality, structure and business activity.",
    "Most entrepreneurs clarify their concept, choose a structure, register with KvK, set up tax administration, open banking and prepare invoicing before substantial operations.",
  ],
  registrationPoints: [
    "Business concept — clarify activity, clients and rough financial model",
    "Structure choice — align legal form with growth and liability context",
    "KvK registration — obtain KvK number and trade name",
    "Tax registration — income tax, BTW and payroll choices with Belastingdienst",
    "Banking and admin — accounts, bookkeeping and contract templates",
  ],
  registrationSteps: [
    { title: "Develop business concept", body: "Example: target €5k/mo from 3 retainer clients at €1,500/mo ex BTW — validate before spending on BV." },
    { title: "Choose structure", body: "Example: solo at €30k year-one forecast → eenmanszaak; two founders + €80k hire plan → BV conversation." },
    { title: "Register with KvK", body: "Example: online enrolment ~€80, KvK number often within 1–5 business days once documents are ready." },
    { title: "Tax registration", body: "Example: invoice €10,000 ex BTW in Q1 → set aside €2,100 BTW (21%) plus income tax reserve before spending." },
    { title: "Open business banking", body: "Example: bank onboarding 2–4 weeks after KvK — plan interim payment route for first client." },
    { title: "Set up administration", body: "Example: bookkeeping software ~€15–€40/mo from first €500 invoice — capture receipts same week." },
    { title: "Start operating", body: "Example: launch week 4 after KvK, bank and invoice template ready — not before permit clarity if IND-linked." },
  ] satisfies StartingBusinessCard[],
  registrationTimeline: [
    { step: "Concept + structure choice", typicalTiming: "Week 1–2", example: "Model €35k year-one revenue; pick eenmanszaak vs BV" },
    { step: "KvK registration", typicalTiming: "Week 2–3", example: "Pay ~€80 online; receive 8-digit KvK number" },
    { step: "Belastingdienst BTW setup", typicalTiming: "Week 3", example: "Confirm BTW filing frequency before first 21% invoice" },
    { step: "Business bank account", typicalTiming: "Week 3–5", example: "Allow 2–4 weeks; some banks wait after KvK date" },
    { step: "First client invoice", typicalTiming: "Week 4+", example: "€4,500 ex BTW → €945 BTW line item if standard rate applies" },
  ] satisfies StartingBusinessTimelineRow[],
  registrationNote:
    "Timelines vary — solo ZZP registration can move quickly once documents are ready; BV incorporation involves notary steps. Permit clearance may precede KvK for some expats.",
  registrationChecklist: [
    "Confirm permit rules on ind.nl if you are not on EU free movement.",
    "Register KvK before large client invoices — avoid backdating surprises.",
    "Choose bookkeeping approach (software or accountant) in month one.",
    "Open business bank account if client payments warrant separation.",
    "Prepare standard contract and invoice templates before first sale.",
  ],
  registrationScenarios: [
    { profile: "New arrival — BSN first", scenario: "Has BSN and address; launch date in 4 weeks", whatToCheck: "KvK timeline + BTW choice before first invoice." },
    { profile: "BV with co-founder", scenario: "Two shareholders; plans first hire in Q3", whatToCheck: "Notary incorporation, shareholder agreement and payroll setup order." },
    { profile: "Remote EU founder — Rotterdam", scenario: "Existing EU clients; relocates to Netherlands", whatToCheck: "Tax residency shift, KvK registration and cross-border VAT with accountant." },
    { profile: "Late registration", scenario: "Operated 2 months before KvK", whatToCheck: "Backdating questions, BTW on past invoices — Belastingdienst and accountant." },
  ] satisfies StartingBusinessScenarioRow[],
  registrationNextSteps: [
    "Confirm permit rules on ind.nl before relying on business income if you are not on EU free movement.",
    "Complete KvK before sending large client invoices — backdating creates tax and contract friction.",
    "Open banking and bookkeeping in the same week as registration when possible.",
  ],
  taxesHeading: "Understanding Business Taxes",
  taxesParagraphs: [
    "Businesses in the Netherlands may encounter income tax, corporate tax, BTW (VAT), payroll taxes and ongoing reporting obligations — exact mix depends on structure and activity.",
    "Expats with foreign clients, assets abroad or prior employment in other countries should treat tax planning as core setup. This is orientation only, not tax advice.",
  ],
  taxesPoints: [
    "Income tax — on business profit for sole traders and owners",
    "Corporate tax — relevant for BV and some entity types",
    "BTW (VAT) — many businesses charge and report VAT on invoices",
    "Payroll tax — when you hire employees",
    "Professional help — accountants common in first business year",
  ],
  taxesChecklist: [
    "Set aside monthly reserve for income tax and BTW — amount varies by situation.",
    "Track invoices and expenses from first client payment.",
    "Read expat taxes guide if you have foreign income or assets.",
    "Confirm filing deadlines on belastingdienst.nl.",
  ],
  taxesComparisonRows: [
    { topic: "Solo ZZP / eenmanszaak", dutchContext: "Example: €30k profit → income tax on profit + often 21% BTW on invoices", whatToConfirm: "KOR small business scheme if turnover under ~€20k — verify rules" },
    { topic: "BV", dutchContext: "Corporate tax on profit + director salary/payroll", whatToConfirm: "DGA salary norms with tax adviser — not forum guesses" },
    { topic: "EU B2B clients", dutchContext: "Reverse charge may apply — 0% BTW on invoice with client VAT ID", whatToConfirm: "Valid VAT ID proof on file per invoice" },
    { topic: "Quarterly BTW", dutchContext: "Example: Q1 sales €24k ex BTW → ~€5,040 BTW collected to remit", whatToConfirm: "Filing deadline on belastingdienst.nl calendar" },
  ] satisfies StartingBusinessComparisonRow[],
  taxesWorkedExamples: [
    { profile: "First BTW quarter — consultant", keyFigures: "Q1 revenue €18,000 ex BTW", exampleMath: "21% BTW ≈ €3,780 to set aside; spent full €18k → cash crunch at filing", whatToConfirm: "Payment plan with Belastingdienst if needed; accountant catch-up." },
    { profile: "Mixed employment + business", keyFigures: "Jan–Jun salary €42k · Jul–Dec profit €22k", exampleMath: "Combined annual return — pro-rata BTW quarters in H2", whatToConfirm: "Accountant before first H2 invoice." },
    { profile: "US SaaS clients — USD", keyFigures: "$5,000/mo retainer · EUR accounting", exampleMath: "Convert at invoice date; BTW/VAT treatment varies — reserve 30% orientation", whatToConfirm: "Tax adviser before month 3 of billing." },
  ] satisfies StartingBusinessWorkedExampleRow[],
  taxGuideLinks: [
    { label: "Expat taxes Netherlands", href: EXPAT_TAXES_NETHERLANDS_PATH, status: "live", description: "Broader expat tax orientation when business income joins other streams." },
    { label: "Foreign income Netherlands", href: FOREIGN_INCOME_NETHERLANDS_PATH, status: "live", description: "Cross-border clients and income outside the Netherlands." },
    { label: "Double taxation Netherlands", href: DOUBLE_TAXATION_NETHERLANDS_PATH, status: "live", description: "Treaty concepts when invoicing internationally." },
    { label: "VAT Netherlands", href: VAT_NETHERLANDS_PATH, status: "comingSoon", description: "Future dedicated BTW guide — confirm rules with Belastingdienst meanwhile." },
  ] satisfies StartingBusinessLink[],
  taxesScenarios: [
    { profile: "First-year surprise", scenario: "Spent full revenue; large tax bill due", whatToCheck: "Payment plan with Belastingdienst; accountant for next-year reserves." },
    { profile: "BV founder salary", scenario: "Unsure about director salary vs dividends", whatToCheck: "Tax adviser on DGA and corporate tax — not forum advice." },
    { profile: "Mixed employment + business", scenario: "Jan–Jun employed; Jul–Dec entrepreneurship same year", whatToCheck: "Combined annual return and pro-rata BTW quarters with accountant." },
    { profile: "US client retainer", scenario: "Monthly USD invoices from SaaS customers", whatToCheck: "BTW/VAT treatment and income tax reporting — tax adviser setup." },
  ] satisfies StartingBusinessScenarioRow[],
  taxesNextSteps: [
    "Open a separate savings tag or account for BTW and income tax reserves from month one.",
    "Read expat taxes and foreign income guides if clients or assets are outside the Netherlands.",
    "Confirm filing deadlines on belastingdienst.nl and add them to your calendar.",
  ],
  bankingHeading: "Business Bank Accounts",
  bankingParagraphs: [
    "Many businesses choose dedicated business banking to separate client payments from personal spending, simplify bookkeeping and present professionally to clients and partners.",
    "Banks vary in fees, English support, integration with accounting tools and onboarding requirements for new KvK registrations.",
  ],
  bankingPoints: [
    "Separate finances — clearer records for tax and audits",
    "Client payments — professional invoicing and reconciliation",
    "Bookkeeping — bank feeds into accounting software",
    "Scaling — payroll and multi-currency needs later",
  ],
  bankingChecklist: [
    "Compare business account fees and English-language support before heavy revenue.",
    "Check whether your bank accepts your legal form and KvK registration age.",
    "Connect bank feed to bookkeeping software in month one.",
    "Plan how to handle BTW set-asides — separate account or clear tagging.",
  ],
  bankingGuideLinks: [
    { label: "Best bank for ZZP", href: BEST_BANK_ZZP_PATH, status: "live", description: "Compare business banking options for self-employed and small businesses." },
    { label: "Business bank account guide", href: BUSINESS_BANK_ACCOUNT_NETHERLANDS_PATH, status: "comingSoon", description: "Future dedicated guide on Dutch business banking setup." },
    { label: "ZZP Netherlands", href: ZZP_NETHERLANDS_PATH, status: "live", description: "Solo self-employment context when banking for lean startups." },
    { label: "Financial advisors", href: FINANCIAL_ADVISORS_PATH, status: "live", description: "Cash-flow and buffer planning alongside banking choices." },
  ] satisfies StartingBusinessLink[],
  bankingScenarios: [
    { profile: "New KvK — account delay", scenario: "Bank wants 4 weeks after registration", whatToCheck: "Interim payment flow; inform clients of banking timeline." },
    { profile: "Multi-currency clients", scenario: "USD and EUR invoices same quarter", whatToCheck: "FX fees and accounting treatment — accountant and bank comparison." },
    { profile: "Personal account mixing", scenario: "All revenue through private account 6 months", whatToCheck: "Separate business account; retrospective bookkeeping cleanup." },
    { profile: "BV payroll later", scenario: "Plans first employee in 9 months", whatToCheck: "Bank payroll features and fee schedule before hiring." },
  ] satisfies StartingBusinessScenarioRow[],
  bankingComparisonRows: [
    { topic: "Solo ZZP", dutchContext: "Accounts often €0–€15/mo; some free tiers for 12 months", whatToConfirm: "English support and accounting export format" },
    { topic: "BV", dutchContext: "Corporate packages ~€15–€40/mo; payroll add-on extra", whatToConfirm: "Multi-user access before first hire" },
    { topic: "International clients", dutchContext: "SEPA €0–€0.25; FX on USD clients ~0.5–1.5%+", whatToConfirm: "Wise/PayPal vs bank for USD retainer" },
    { topic: "New KvK", dutchContext: "Onboarding often 2–4 weeks after registration", whatToConfirm: "Interim payment instructions for first €5k client" },
  ] satisfies StartingBusinessComparisonRow[],
  bankingWorkedExamples: [
    { profile: "New KvK — 3-week delay", keyFigures: "Client pays €6,200 in week 2", exampleMath: "Temporary personal account receipt → transfer to business account when open; document for bookkeeper", whatToConfirm: "Bank's KvK-age policy before signing client." },
    { profile: "Multi-currency SaaS", keyFigures: "€12k EUR + $8k USD/quarter", exampleMath: "FX spread on $8k can cost €80–€150+/quarter — compare providers", whatToConfirm: "Accounting treatment of FX gains/losses." },
  ] satisfies StartingBusinessWorkedExampleRow[],
  bankingNextSteps: [
    "Compare at least two business accounts on fees, English support and accounting integrations.",
    "Ask what KvK extract and ID documents the bank needs before your first client payment date.",
    "Connect bank feed to bookkeeping software in month one — retroactive reconciliation is painful.",
  ],
  administrationHeading: "Business Administration Essentials",
  administrationParagraphs: [
    "Strong administration — bookkeeping, invoices, contracts, receipts and reporting — is critical for long-term business success and calmer tax seasons.",
    "Systems set up in month one cost far less than reconstructing records after a busy launch quarter.",
  ],
  administrationPoints: [
    "Bookkeeping — income and expense records from first transaction",
    "Invoices — required fields for Dutch clients when BTW applies",
    "Contracts — scope, payment terms and IP for client work",
    "Receipts — digital capture for deductible expense evidence",
    "Reporting — annual accounts and BTW filings on schedule",
  ],
  administrationChecklist: [
    "Choose bookkeeping software or accountant before first invoice.",
    "Use invoice templates that meet Belastingdienst requirements.",
    "Store contracts and amendments in one searchable folder.",
    "Schedule monthly admin time — weekly during launch if possible.",
  ],
  administrationScenarios: [
    { profile: "Shoebox receipts", scenario: "No digital capture after 8 months trading", whatToCheck: "Accountant catch-up; implement app workflow immediately." },
    { profile: "Verbal client deals", scenario: "Scope disputes on fixed-fee project", whatToCheck: "Written SOW and change-order process for future work." },
    { profile: "Subcontractor invoices", scenario: "Pays freelancers without formal agreements", whatToCheck: "Contractor agreements and BTW on incoming invoices." },
    { profile: "Annual accounts deadline", scenario: "BV year-end approaching; books incomplete", whatToCheck: "Accountant engagement 6–8 weeks before deadline." },
  ] satisfies StartingBusinessScenarioRow[],
  administrationComparisonRows: [
    { topic: "Bookkeeping rhythm", dutchContext: "Weekly capture, monthly reconcile is a common pattern", whatToConfirm: "Software or accountant from first transaction" },
    { topic: "Invoices", dutchContext: "Required fields differ when BTW applies", whatToConfirm: "Template review before first Dutch B2B invoice" },
    { topic: "Contracts", dutchContext: "Scope and IP disputes are expensive without writing", whatToConfirm: "SOW for projects over a few days of work" },
    { topic: "BTW filings", dutchContext: "Quarterly or annual depending on scheme", whatToConfirm: "Belastingdienst deadlines in calendar from month one" },
  ] satisfies StartingBusinessComparisonRow[],
  administrationGuideLinks: [
    { label: "ZZP Netherlands", href: ZZP_NETHERLANDS_PATH, status: "live", description: "Invoicing and admin patterns many solo entrepreneurs follow." },
    { label: "Expat taxes guide", href: EXPAT_TAXES_NETHERLANDS_PATH, status: "live", description: "Tax filing context when business income joins other streams." },
    { label: "Accountants", href: ACCOUNTANTS_PATH, status: "comingSoon", description: "Future directory for bookkeeping and annual accounts support." },
    { label: "VAT Netherlands", href: VAT_NETHERLANDS_PATH, status: "comingSoon", description: "Future BTW guide — confirm invoice fields with Belastingdienst meanwhile." },
  ] satisfies StartingBusinessLink[],
  administrationNextSteps: [
    "Pick bookkeeping software or an accountant before your first paid invoice.",
    "Create invoice and contract templates that match your structure and BTW status.",
    "Block one recurring admin slot in your calendar — weekly during launch, monthly once stable.",
  ],
  visasHeading: "Entrepreneurs and Residence Status",
  visasParagraphs: [
    "Some entrepreneurs must consider residence permits, self-employment routes and startup programmes before relying on business income. Permit route and KvK registration are separate planning tracks.",
    "This is orientation only — not immigration advice. Verify current rules on ind.nl and with qualified immigration advisers.",
  ],
  visasPoints: [
    "EU/EEA/Swiss — often simpler self-employment context; still verify activity rules",
    "Self-employed visa — separate route with points and business plan requirements",
    "Startup visa — accelerator-linked programmes for innovative startups",
    "Employment-linked permits — additional business activity may need IND review",
  ],
  visasChecklist: [
    "Check ind.nl before KvK if your permit is employment-linked.",
    "Do not assume client work is allowed because KvK registration succeeded.",
    "Keep permit and registration documents for renewals and banking.",
    "Use immigration lawyers for route changes — not for everyday KvK questions.",
  ],
  visasComparisonRows: [
    { topic: "EU free movement", dutchContext: "Often straightforward business registration", whatToConfirm: "Activity, insurance and tax still your responsibility" },
    { topic: "Self-employed visa", dutchContext: "Points-based entrepreneur route", whatToConfirm: "Business plan and IND criteria — separate from casual projects" },
    { topic: "Startup visa", dutchContext: "Facilitator-linked innovative startup route", whatToConfirm: "Eligible facilitators on ind.nl; not all businesses qualify" },
    { topic: "Employment permit", dutchContext: "Primary job tied to sponsor", whatToConfirm: "Side business may be restricted — IND first" },
  ] satisfies StartingBusinessComparisonRow[],
  visaGuideLinks: [
    { label: "Self-employed visa", href: SELF_EMPLOYED_VISA_PATH, status: "live", description: "Orientation on entrepreneur residence routes and requirements." },
    { label: "Startup visa guide", href: STARTUP_VISA_NETHERLANDS_PATH, status: "comingSoon", description: "Future guide on startup facilitator programmes." },
    { label: "Visas & residency hub", href: VISAS_HUB_PATH, status: "live", description: "Broader permit and residency orientation for expats." },
    { label: "Immigration lawyers", href: IMMIGRATION_LAWYERS_PATH, status: "live", description: "Qualified help when permits and business plans intersect." },
  ] satisfies StartingBusinessLink[],
  visasScenarios: [
    { profile: "HSM — side venture", scenario: "Weekend ecommerce while in sponsored role", whatToCheck: "IND rules on additional activity before any sales." },
    { profile: "Self-employed visa applicant", scenario: "Building points-based business plan", whatToCheck: "IND criteria separate from KvK registration timing." },
    { profile: "EU citizen — straightforward", scenario: "German founder registers in Amsterdam", whatToCheck: "Still verify tax, insurance and activity — permit simpler than non-EU." },
    { profile: "Startup facilitator", scenario: "Accepted into accelerator; needs startup visa", whatToCheck: "Facilitator requirements on ind.nl and contract with programme." },
  ] satisfies StartingBusinessScenarioRow[],
  visasNextSteps: [
    "Check ind.nl before KvK if your current permit is employment-linked or sponsor-tied.",
    "Do not assume KvK registration alone authorises work — permit and registration are separate tracks.",
    "Keep permit and registration documents together for banking and renewals.",
  ],
  ecosystemHeading: "The Dutch Startup Ecosystem",
  ecosystemParagraphs: [
    "The Netherlands hosts a dense startup ecosystem — incubators, accelerators, co-working spaces and investor networks cluster in Amsterdam, Rotterdam, Utrecht, Eindhoven and Delft.",
    "Ecosystem support helps with network and mentorship; it does not replace KvK registration, tax compliance or permit rules.",
  ],
  ecosystemPoints: [
    "Amsterdam — broad tech, creative and international founder density",
    "Rotterdam — logistics, port-linked ventures and urban innovation",
    "Utrecht — health, gaming and central Randstad access",
    "Eindhoven — Brainport hardware, deep tech and corporate R&D links",
    "Delft — university spin-offs and engineering-led startups",
  ],
  ecosystemCards: [
    { title: "Incubators & accelerators", body: "Programmes offer mentorship, workspace and sometimes startup visa facilitation — verify fit and equity terms." },
    { title: "Co-working & labs", body: "Flexible space for early teams without long office leases — compare city costs." },
    { title: "Investor networks", body: "Angels and VCs active in Amsterdam and Eindhoven — prepare admin and cap table basics first." },
    { title: "Corporate partnerships", body: "Brainport and Randstad corporates run innovation programmes — useful for B2B pilots." },
    { title: "Government programmes", body: "RVO and regional agencies publish grants and orientation — verify eligibility on official sites." },
    { title: "International networks", body: "Expat founder groups and industry meetups help with hiring and client introductions." },
  ] satisfies StartingBusinessCard[],
  ecosystemLinks: [
    { label: "Amsterdam city guide", href: AMSTERDAM_PATH, status: "live", description: "Largest startup density and international hiring market." },
    { label: "Eindhoven city guide", href: EINDHOVEN_PATH, status: "live", description: "Brainport deep tech and hardware ecosystem." },
    { label: "RVO", href: "https://www.rvo.nl/", status: "live", description: "Government agency for entrepreneurship programmes and grants." },
    { label: "Startup visa guide", href: STARTUP_VISA_NETHERLANDS_PATH, status: "comingSoon", description: "Future guide on facilitator-linked startup residence routes." },
    { label: "Business consultants", href: BUSINESS_CONSULTANTS_PATH, status: "comingSoon", description: "Future directory for business model and scaling support." },
    { label: "ZZP guide", href: ZZP_NETHERLANDS_PATH, status: "live", description: "Many ecosystem participants start as solo ZZP before scaling." },
  ] satisfies StartingBusinessLink[],
  ecosystemScenarios: [
    { profile: "Accelerator acceptance", scenario: "Offers €50k for 8% equity", whatToCheck: "Lawyer review of terms; KvK structure and cap table alignment." },
    { profile: "Corporate pilot — Eindhoven", scenario: "Hardware startup partners with ASML supplier network", whatToCheck: "IP, NDA and BV liability context before scaling production." },
    { profile: "Grant application — RVO", scenario: "Applies for innovation subsidy", whatToCheck: "Eligibility on rvo.nl; accountant for project accounting rules." },
  ] satisfies StartingBusinessScenarioRow[],
  ecosystemNextSteps: [
    "Attend two sector meetups before choosing an incubator or accelerator programme.",
    "Verify whether ecosystem support replaces or complements KvK registration and tax compliance — it does not replace them.",
    "Read city guides for Amsterdam, Eindhoven or Rotterdam if location affects your client and hiring plan.",
  ],
  citiesHeading: "Where Entrepreneurs Often Start Businesses",
  citiesParagraphs: [
    "City choice affects client access, costs, talent pools and startup networks. The Randstad and Brainport dominate international entrepreneurship, but smaller cities offer niche strengths.",
    "Verify sector fit and cost of living before signing leases — remote and hybrid models reduce city lock-in for some businesses.",
  ],
  citiesPoints: [
    "Amsterdam — highest international density; higher costs",
    "Rotterdam — logistics and port-linked opportunities",
    "Eindhoven — deep tech and hardware ecosystem",
    "The Hague — international institutions and government-adjacent services",
  ],
  cityCards: [
    { title: "Amsterdam", body: "Strengths: tech, agencies, international clients. Co-working often €350–€650/month; higher salary competition." },
    { title: "Rotterdam", body: "Strengths: logistics, port trade. Office/co-working often €250–€450/month — lower than Amsterdam for many founders." },
    { title: "Utrecht", body: "Central Randstad access; co-working ~€280–€500/month; strong health and gaming hiring pool." },
    { title: "Eindhoven", body: "Brainport hardware/deep tech; lab space premiums; strong TU/e intern pipeline." },
    { title: "The Hague", body: "International orgs and legal services; B2G clients; office costs mid-Randstad." },
    { title: "Leiden", body: "Life sciences cluster; Bio Science Park network; smaller founder scene than Amsterdam." },
    { title: "Delft", body: "Engineering spin-offs; TU Delft talent; lower living costs than Amsterdam." },
    { title: "Groningen", body: "Northern hub; co-working ~€150–€300/month orientation; lower living costs." },
  ] satisfies StartingBusinessCard[],
  cityCostExamples: [
    { profile: "Amsterdam vs Utrecht — agency of 3", keyFigures: "Amsterdam desk €600/mo · Utrecht €380/mo", exampleMath: "Save ~€2,640/year on space — weigh against client networking density", whatToConfirm: "Visit two meetups in each city before lease." },
    { profile: "Remote-first SaaS", keyFigures: "Founder in Groningen · clients EU-wide", exampleMath: "City cost matters less if sales are remote — still pick KvK address correctly", whatToConfirm: "Registered address rules with KvK." },
  ] satisfies StartingBusinessWorkedExampleRow[],
  cityGuideLinks: [
    { label: "Amsterdam", href: AMSTERDAM_PATH, status: "live", description: "International startup capital — clients, events and hiring." },
    { label: "Rotterdam", href: ROTTERDAM_PATH, status: "live", description: "Port city with logistics and innovation networks." },
    { label: "Utrecht", href: UTRECHT_PATH, status: "live", description: "Central Randstad hub with health and tech growth." },
    { label: "Eindhoven", href: EINDHOVEN_PATH, status: "live", description: "Brainport deep tech and corporate R&D access." },
    { label: "The Hague", href: THE_HAGUE_PATH, status: "live", description: "International institutions and professional services." },
    { label: "Leiden", href: LEIDEN_PATH, status: "live", description: "Life sciences and research-driven ventures." },
    { label: "Delft", href: DELFT_PATH, status: "live", description: "Engineering startups and university spin-offs." },
    { label: "Groningen", href: GRONINGEN_PATH, status: "live", description: "Northern city with lower costs and university talent." },
  ] satisfies StartingBusinessLink[],
  citiesComparisonRows: [
    { topic: "Client access", dutchContext: "Amsterdam highest international density", whatToConfirm: "Remote sales may reduce need to be in capital" },
    { topic: "Office cost", dutchContext: "Amsterdam typically highest; Groningen lower", whatToConfirm: "Co-working vs lease for your team size" },
    { topic: "Sector fit", dutchContext: "Eindhoven hardware; Hague legal/institutional", whatToConfirm: "Match city to industry network" },
    { topic: "Hiring pool", dutchContext: "Randstad broad; university cities for interns", whatToConfirm: "Hybrid roles widen geographic recruiting" },
  ] satisfies StartingBusinessComparisonRow[],
  citiesChecklist: [
    "List must-have clients and partners — which city puts you closest?",
    "Compare office or co-working costs for a 12-month runway model.",
    "Check commute and international school needs if relocating family.",
    "Visit industry meetups in two cities before signing a lease.",
  ],
  citiesScenarios: [
    { profile: "Amsterdam vs Utrecht — agency", scenario: "Clients mostly remote; team of three", whatToCheck: "Utrecht office cost savings vs Amsterdam networking — test both meetups." },
    { profile: "Hardware — Eindhoven", scenario: "Needs lab space and TU/e interns", whatToCheck: "Brainport facilities and RVO programmes before Amsterdam default." },
    { profile: "Diplomatic services — Hague", scenario: "B2G and NGO clients", whatToCheck: "Sector network in Hague vs Amsterdam generalist scene." },
  ] satisfies StartingBusinessScenarioRow[],
  freelancingVsBusinessHeading: "Freelancing, ZZP and Business Ownership",
  freelancingVsBusinessParagraphs: [
    "Some entrepreneurs start with freelancing, consulting or ZZP — others build agencies, technology companies, ecommerce brands or multi-person service businesses from day one.",
    "The path can evolve: many founders register as ZZP first and restructure into BV or partnerships when hiring, raising capital or sharing ownership.",
  ],
  freelancingVsBusinessPoints: [
    "ZZP — lean solo registration for invoicing clients",
    "Freelancing — broad concept; often maps to ZZP locally",
    "Agency / company — team, payroll and higher admin",
    "Ecommerce — inventory, BTW and fulfilment complexity",
  ],
  freelancingVsBusinessRows: [
    { topic: "Starting point", dutchContext: "ZZP/eenmanszaak — fast solo setup", whatToConfirm: "Agency or BV when hiring or sharing ownership" },
    { topic: "Income model", dutchContext: "Client invoices; variable cash flow", whatToConfirm: "Product revenue, retainers and payroll as you scale" },
    { topic: "Admin load", dutchContext: "Bookkeeping + often BTW yourself", whatToConfirm: "Payroll, corporate accounts and governance later" },
    { topic: "Permit context", dutchContext: "Self-employment rules for solo work", whatToConfirm: "Startup visa or employer sponsorship if team scales" },
    { topic: "Growth path", dutchContext: "Many start ZZP; restructure later", whatToConfirm: "Timing of BV conversion with tax adviser" },
  ] satisfies StartingBusinessComparisonRow[],
  freelancingVsBusinessGuideLinks: [
    { label: "ZZP Netherlands", href: ZZP_NETHERLANDS_PATH, status: "live", description: "Dutch self-employment framework many entrepreneurs start with." },
    { label: "Freelancing Netherlands", href: FREELANCING_NETHERLANDS_PATH, status: "live", description: "Broader freelance guide — clients, visas, cities and pipeline." },
    { label: "BV vs ZZP", href: BV_VS_ZZP_NETHERLANDS_PATH, status: "comingSoon", description: "Future comparison when scaling beyond solo work." },
    { label: "Contractor vs employee", href: "/netherlands/jobs/contractor-vs-employee-netherlands/", status: "live", description: "Compare employment with self-employment before choosing a path." },
  ] satisfies StartingBusinessLink[],
  freelancingVsBusinessScenarios: [
    { profile: "Consultant → agency", scenario: "Year one ZZP; plans two hires year two", whatToCheck: "BV timing, payroll and client contract updates with accountant." },
    { profile: "Ecommerce solo", scenario: "Shopify store; no employees yet", whatToCheck: "BTW on sales, inventory accounting and KvK activity description." },
    { profile: "Tech co-founders", scenario: "Skip ZZP; start BV with two shareholders", whatToCheck: "Notary costs vs speed — lawyer for shareholder agreement." },
  ] satisfies StartingBusinessScenarioRow[],
  freelancingVsBusinessNextSteps: [
    "Start with ZZP guide if you are solo with client invoices — it is the fastest path for many expats.",
    "Plan BV or partnership conversations before hiring, raising capital or sharing ownership.",
    "Read contractor vs employee guide if you are leaving employment for self-employment.",
  ],
  costsHeading: "Typical Startup Costs",
  costsParagraphs: [
    "Startup costs vary widely by structure, sector and speed of launch. Model categories conservatively — under-budgeting tax reserves and professional fees is common.",
    "Ranges below are orientation examples, not quotes or guarantees. Confirm current fees on official sites and with providers.",
  ],
  costsPoints: [
    "Registration — KvK fees; BV adds notary and incorporation costs",
    "Banking — monthly account fees and payment processing",
    "Software — bookkeeping, invoicing and productivity tools",
    "Accounting — annual and quarterly filing support",
    "Insurance — liability, inventory or professional indemnity as needed",
    "Marketing — website, ads and launch campaigns",
    "Equipment — laptops, tools or inventory for your sector",
  ],
  costCards: [
    { title: "KvK registration", body: "Eenmanszaak orientation: around €80 one-time (verify on kvk.nl). BV adds notary fees on top." },
    { title: "Banking", body: "Typical range €0–€15/month early stage; corporate packages higher with payroll features." },
    { title: "Software", body: "Bookkeeping + invoicing often €15–€40/month; CRM add-ons €20–€80/month." },
    { title: "Accounting", body: "ZZP annual support often €800–€2,500/year; BV monthly €150–€400+ depending on complexity." },
    { title: "Insurance", body: "Professional liability often €30–€120/month by sector; ecommerce stock insurance separate." },
    { title: "Marketing & web", body: "Basic site €500–€3,000 launch; paid ads budget highly variable — model separately from registration." },
  ] satisfies StartingBusinessCard[],
  costsWorkedExamples: [
    { profile: "Lean ZZP — consultant", keyFigures: "KvK €80 · software €25/mo · accountant €1,200/yr", exampleMath: "Year-one setup ~€80 + €300 + €1,200 ≈ €1,580 before living costs", whatToConfirm: "Add 25–35% tax reserve on revenue." },
    { profile: "BV — two founders", keyFigures: "Notary €2,000 · accountant €250/mo · minimal ads €1,000", exampleMath: "Pre-revenue setup often €5k–€8k in first 90 days", whatToConfirm: "Notary quote before signing term sheet." },
    { profile: "Ecommerce launch", keyFigures: "KvK €80 · stock €12,000 · Shopify ~€30/mo", exampleMath: "Inventory dominates — registration fee is not the main budget line", whatToConfirm: "6-month stock + returns buffer." },
  ] satisfies StartingBusinessWorkedExampleRow[],
  costsComparisonRows: [
    { topic: "ZZP / eenmanszaak", dutchContext: "Lower setup; KvK fee + basic tools", whatToConfirm: "Accountant and insurance as revenue grows" },
    { topic: "BV", dutchContext: "Notary + higher ongoing compliance", whatToConfirm: "Total first-year cost with corporate accountant" },
    { topic: "Ecommerce", dutchContext: "Inventory and fulfilment cash tied up", whatToConfirm: "Working capital separate from registration fees" },
    { topic: "Tax reserves", dutchContext: "Many set aside 25–35% of revenue", whatToConfirm: "Accountant refines for your structure and clients" },
  ] satisfies StartingBusinessComparisonRow[],
  costsScenarios: [
    { profile: "Lean ZZP — consultant", scenario: "KvK + software + accountant setup", whatToCheck: "€2–5k first-year orientation budget excluding living costs." },
    { profile: "BV with two founders", scenario: "Notary, accountant, minimal marketing", whatToCheck: "€5–15k+ setup range — get notary quote before committing." },
    { profile: "Ecommerce launch", scenario: "Stock purchase dominates registration fee", whatToCheck: "Inventory cash flow model separate from KvK cost." },
  ] satisfies StartingBusinessScenarioRow[],
  costsNextSteps: [
    "Build a 12-month cash-flow model including personal living costs — registration fees are rarely the biggest line.",
    "Get quotes for notary, accountant and insurance before choosing BV or complex structures.",
    "Add a tax reserve line — many founders under-budget BTW and income tax in year one.",
  ],
  mistakesHeading: "Mistakes New Entrepreneurs Make",
  mistakesParagraphs: [
    "New entrepreneurs — especially expats — often repeat predictable errors: weak admin, optimistic tax math, no runway and structures chosen for appearance rather than fit.",
    "Most costly mistakes happen in the first 90 days — before habits, buffers and professional relationships are in place. Use this section as a pre-launch reality check, not a post-mortem.",
  ],
  mistakePreventionTips: [
    "Register KvK before substantial client revenue — backdating creates tax and contract friction.",
    "Set BTW and income tax aside from the first payment; spending full revenue is a common year-one surprise.",
    "Write contracts for any project over a few days — verbal scope disputes are expensive.",
    "Ask an accountant or immigration adviser early when permits, BV structure or cross-border clients are involved.",
  ],
  mistakeCards: [
    { title: "Ignoring administration", body: "Scrambling at year-end costs time, money and risks compliance gaps." },
    { title: "Underestimating taxes", body: "Spending full revenue before BTW and income tax due dates." },
    { title: "Weak financial planning", body: "No monthly cash-flow view; surprise shortfalls in quiet quarters." },
    { title: "No emergency fund", body: "Three to six months of personal expenses is a common buffer target." },
    { title: "Poor market research", body: "Assuming international demand without Dutch client validation." },
    { title: "Overcomplicated structures", body: "BV or partnership overhead before revenue justifies it." },
    { title: "Ignoring contracts", body: "Verbal deals fail on scope, IP and payment disputes." },
    { title: "Trying to do everything alone", body: "Deferring accountant, lawyer or immigration help when complexity is already high." },
  ] satisfies StartingBusinessCard[],
  mistakesChecklist: [
    "Register KvK before substantial client revenue.",
    "Set BTW and income tax aside from first payment.",
    "Write contracts for projects over a few days of work.",
    "Review permit rules if income is not yet IND-compliant.",
  ],
  mistakesScenarios: [
    { profile: "Premature BV", scenario: "Incorporates before first paying client", whatToCheck: "ZZP may suffice year one — accountant on timing." },
    { profile: "Permit + revenue", scenario: "Invoices before IND clearance on side venture", whatToCheck: "Immigration lawyer before continuing activity." },
    { profile: "No market test", scenario: "Quits job for product with no pilot customers", whatToCheck: "Validate willingness to pay in Netherlands before full leap." },
    { profile: "DIY cross-border tax", scenario: "EU and UK clients; no accountant year one", whatToCheck: "Tax adviser before Q4 BTW and income tax surprise." },
  ] satisfies StartingBusinessScenarioRow[],
  mistakesNextSteps: [
    "Walk the launch checklist section and mark items you have not started yet.",
    "Model three months of personal expenses as a buffer before going full-time.",
    "Book a scoped accountant call if cross-border clients or BV structure are in your plan.",
  ],
  servicesHeading: "Professional Services That Help Entrepreneurs",
  servicesIntroParagraphs: [
    "Accountants, tax advisers, immigration lawyers and business consultants can help with specific steps — they do not replace KvK registration, Belastingdienst filings or IND compliance.",
    "Use professionals for scoped review on structure, cross-border clients, permits and first-year admin — still read official sources yourself.",
  ],
  serviceCategories: [
    { label: "Accountants", href: ACCOUNTANTS_PATH, description: "Bookkeeping, annual accounts and filing support for new businesses.", status: "comingSoon" },
    { label: "Tax advisors", href: TAX_ADVISORS_PATH, description: "BTW, income tax, corporate tax and cross-border orientation.", status: "live" },
    { label: "Financial advisors", href: FINANCIAL_ADVISORS_PATH, description: "Runway, buffers, insurance and cash-flow planning for founders.", status: "live" },
    { label: "Business consultants", href: BUSINESS_CONSULTANTS_PATH, description: "Business model, market entry and scaling beyond day-one registration.", status: "comingSoon" },
    { label: "Immigration lawyers", href: IMMIGRATION_LAWYERS_PATH, description: "Permit and entrepreneur route questions alongside business plans.", status: "live" },
  ] satisfies ServiceCategory[],
  servicesWhenToUse: [
    "Accountants — first-year bookkeeping, BTW filings and annual accounts",
    "Tax advisors — cross-border clients, BV structure and complex income",
    "Financial advisors — runway, buffers and insurance when personal finances intertwine",
    "Business consultants — market entry, pricing and scaling beyond solo ZZP",
    "Immigration lawyers — permit changes when entrepreneurship affects residency",
  ],
  serviceScenarios: [
    { profile: "Complex first year", scenario: "EU + US clients; considering BV mid-year", whatToCheck: "Tax advisor + accountant scoping before structure change." },
    { profile: "Permit change", scenario: "Employment permit ending; wants full-time business", whatToCheck: "Immigration lawyer before relying on revenue pipeline." },
    { profile: "First hire", scenario: "ZZP founder ready to employ designer", whatToCheck: "Accountant on payroll; business consultant on org design." },
  ] satisfies StartingBusinessScenarioRow[],
  servicesNote:
    "Professional listings help discovery — they do not replace KvK registration, Belastingdienst filings or IND compliance. Confirm credentials and scope before hiring.",
  checklistHeading: "Business Launch Checklist",
  checklistParagraphs: [
    "Use this checklist as a practical launch sequence — adapt order if your permit or structure requires different timing.",
  ],
  startupChecklist: [
    "Validate idea — confirm paying clients or realistic path to revenue",
    "Understand structure options — ZZP, BV, partnerships with adviser input",
    "Register business — KvK enrolment with correct activity description",
    "Set up tax administration — income tax and BTW choices with Belastingdienst",
    "Open bank account — separate business payments from personal spending",
    "Organize bookkeeping — software or accountant from first transaction",
    "Create contracts — scope, payment terms and IP for client work",
    "Obtain insurance if needed — liability or professional cover for your sector",
    "Build online presence — website, profiles and basic marketing assets",
    "Launch operations — start sales or delivery with compliance in parallel",
  ],
  checklistScenarios: [
    { profile: "Permit-first founder", scenario: "IND clearance pending; concept validated", whatToCheck: "Permit before KvK if employment-linked; otherwise parallel planning." },
    { profile: "Ecommerce launch", scenario: "Shop ready; stock inbound", whatToCheck: "BTW on sales, returns policy and inventory records before ads go live." },
    { profile: "Agency — two founders", scenario: "BV incorporated; no clients yet", whatToCheck: "Contracts and banking before team salaries or subcontractor spend." },
  ] satisfies StartingBusinessScenarioRow[],
  checklistNextSteps: [
    "Tick items in order — permit and structure clarity before large spending.",
    "Save copies of KvK confirmation, bank onboarding and first invoice template in one folder.",
    "Revisit the checklist after 90 days of trading — admin gaps show up quickly.",
  ],
  expatQuestions: [
    { q: "Can foreigners start businesses?", a: "Yes — example: EU founder registers eenmanszaak online in week 2; non-EU founder may need IND route first. KvK success does not replace permit rules." },
    { q: "Do I need Dutch citizenship?", a: "No — citizenship is not required. Example: Indian consultant with valid residence permit registers at KvK for ~€80; verify work rights on ind.nl." },
    { q: "What is KVK?", a: "Chamber of Commerce — assigns 8-digit KvK number (e.g. 12345678 format). Central to registration; fee for eenmanszaak around €80 (verify on kvk.nl)." },
    { q: "What taxes apply?", a: "Often 21% BTW on B2B invoices plus income tax on profit. Example: €10k ex BTW sale → ~€2.1k BTW to set aside; many founders reserve 25–35% total until accountant confirms." },
    { q: "Do I need a business bank account?", a: "Not always mandatory for every form, but practical from first €5k+ client payment — banks often want KvK extract and ID; onboarding 2–4 weeks." },
    { q: "Can I work internationally?", a: "Yes — example: Rotterdam consultant invoices DE client €8k/quarter with reverse charge. Cross-border rules vary per client country." },
    { q: "How much does setup cost?", a: "Lean ZZP often €1.5k–€5k year one (excl. living costs): KvK ~€80, software, accountant. BV setups often €5k–€15k+ with notary." },
    { q: "Which structure should I choose?", a: "Depends on revenue and co-founders — example: €30k solo → eenmanszaak; two founders hiring at €60k → BV discussion. Confirm with accountant." },
  ],
  hrConversationPrompts: [
    { audience: "KvK", question: "Which legal form fits my activity and ownership plans?", whyAsk: "Registration choice affects admin and public records from day one." },
    { audience: "Accountant", question: "What tax and BTW setup fits my client mix in year one?", whyAsk: "Avoid incorrect invoices and Belastingdienst corrections." },
    { audience: "IND / immigration adviser", question: "Does my permit allow this business activity and revenue?", whyAsk: "KvK success does not replace permit compliance." },
    { audience: "Bank", question: "What documents do you need for a new KvK registration?", whyAsk: "Prevents payment delays while account onboarding completes." },
    { audience: "Co-founder / partner", question: "What happens if one of us exits in the first 12 months?", whyAsk: "Shareholder or partnership agreements should cover exits early." },
    { audience: "Financial adviser", question: "How many months of runway should I hold before going full-time?", whyAsk: "Employment safety nets do not transfer automatically." },
  ],
  questionScenarios: [
    { profile: "Before registering", scenario: "Knows KvK basics but not permit rules", whatToCheck: "IND first for employment-linked permits, then KvK." },
    { profile: "Structure paralysis", scenario: "Debating BV vs ZZP for 3 months", whatToCheck: "Accountant scoping call with revenue forecast — decide and move." },
    { profile: "Bank + tax same week", scenario: "Launch date fixed; admin not ready", whatToCheck: "Use conversation prompts with bank and accountant in one planning week." },
  ] satisfies StartingBusinessScenarioRow[],
  faq: [
    { q: "Can foreigners start businesses in the Netherlands?", a: "Yes — EU founders often register within 1–5 business days once BSN and address are ready. Non-EU founders should verify IND rules before relying on revenue." },
    { q: "What is KVK?", a: "The Dutch Chamber of Commerce. You receive an 8-digit KvK number; eenmanszaak registration fee is around €80 (verify on kvk.nl)." },
    { q: "What business structures exist?", a: "Common forms include eenmanszaak (solo, ~€80 KvK), BV (notary ~€1.5k–€3k+), VOF/maatschap partnerships and stichting non-profits." },
    { q: "How long does registration take?", a: "Solo KvK online often 1–5 business days; BV adds notary weeks. Banking may take 2–4 weeks after KvK." },
    { q: "What taxes apply?", a: "Often 21% BTW on invoices plus income tax on profit. Example: reserve 25–35% of revenue until an accountant confirms your situation." },
    { q: "Do I need a business bank account?", a: "Strongly practical from early client payments — many founders open one in week 3–5 after KvK, before €5k+ invoices." },
    { q: "Can I operate internationally?", a: "Yes — many invoice EU clients with reverse charge or local VAT rules. Confirm per client with accountant before scaling cross-border." },
    { q: "What are the first steps?", a: "Model year-one revenue, confirm permit if needed, register KvK (~€80), set BTW admin, open bank (2–4 weeks), then invoice with contracts and reserves in place." },
  ],
  faqNextSteps: [
    "Bookmark KvK and Business.gov.nl before registering.",
    "Read ZZP guide if you are starting solo.",
    "Confirm permit rules on ind.nl if you are not on EU free movement.",
  ],
  faqScenarios: [
    { profile: "FAQ to action", scenario: "Understands foreigners can start; ready to register", whatToCheck: "Walk registration section + accountant shortlist." },
    { profile: "Structure FAQ", scenario: "Read structures list — still unsure", whatToCheck: "KvK orientation call or accountant scoping — do not guess." },
    { profile: "International FAQ", scenario: "Plans US and EU clients from year one", whatToCheck: "Foreign income guide + tax adviser before cross-border invoices." },
  ] satisfies StartingBusinessScenarioRow[],
  officialSources: [
    { label: "KVK", href: "https://www.kvk.nl/", description: "Business registration, trade names and entrepreneur information." },
    { label: "Business.gov.nl", href: "https://business.gov.nl/", description: "Government portal for starting and running a business in English." },
    { label: "Belastingdienst", href: "https://www.belastingdienst.nl/", description: "Income tax, BTW and filing obligations." },
    { label: "Government.nl", href: "https://www.government.nl/", description: "Official information on living and working in the Netherlands." },
    { label: "IND", href: "https://ind.nl/", description: "Residence permits and work permission for expat entrepreneurs." },
    { label: "RVO", href: "https://www.rvo.nl/", description: "Entrepreneurship programmes, grants and business development support." },
  ],
  officialSourcesNote:
    "Business regulations, registration requirements, taxes and immigration rules can change over time. Always verify current information through official resources.",
  sourceVerificationTips: [
    "KvK — registration requirements and legal forms",
    "Belastingdienst — income tax, BTW and filing deadlines",
    "Business.gov.nl — step-by-step business setup orientation",
    "IND — permit rules before relying on business income",
    "RVO — grants and entrepreneurship programmes",
  ],
  officialSourcesScenarios: [
    { profile: "Source routing", scenario: "Unsure whether question is tax or permit", whatToCheck: "Permit → IND; registration → KvK; tax → Belastingdienst; grants → RVO." },
    { profile: "KvK vs Belastingdienst", scenario: "Registered at KvK; unsure about BTW filing", whatToCheck: "Belastingdienst for BTW; KvK does not handle tax returns." },
    { profile: "Business.gov.nl orientation", scenario: "Wants English setup checklist", whatToCheck: "Business.gov.nl overview, then KvK and Belastingdienst for specifics." },
  ] satisfies StartingBusinessScenarioRow[],
  relatedGuides: [
    { label: "ZZP Netherlands", href: ZZP_NETHERLANDS_PATH, status: "live", description: "Dutch self-employment framework many entrepreneurs start with." },
    { label: "Freelancing Netherlands", href: FREELANCING_NETHERLANDS_PATH, status: "live", description: "Broader freelance guide — clients, cities, visas and pipeline." },
    { label: "Expat Taxes Netherlands", href: EXPAT_TAXES_NETHERLANDS_PATH, status: "live", description: "Tax orientation when business income joins other streams." },
    { label: "VAT Netherlands", href: VAT_NETHERLANDS_PATH, status: "comingSoon", description: "Future dedicated BTW guide — confirm rules with Belastingdienst meanwhile." },
    { label: "Accountants", href: ACCOUNTANTS_PATH, status: "comingSoon", description: "Future directory for bookkeeping and filing support." },
    { label: "Business Consultants", href: BUSINESS_CONSULTANTS_PATH, status: "comingSoon", description: "Future directory for business model and scaling support." },
  ] satisfies StartingBusinessLink[],
  relatedGuideReadingOrder: [
    "Read ZZP guide if you are starting solo — fastest path for many consultants.",
    "Open freelancing guide for client acquisition and city context beyond registration.",
    "Read expat taxes before your first full business tax year.",
    "Browse tax advisors when cross-border clients or BV structure add complexity.",
  ],
  relatedGuideScenarios: [
    { profile: "Just registered", scenario: "KvK done; first Dutch client next week", whatToCheck: "ZZP or freelancing invoicing guides + expat taxes for set-asides." },
    { profile: "Scaling EU clients", scenario: "Three new countries in pipeline", whatToCheck: "Foreign income and tax advisors before first cross-border invoice." },
  ] satisfies StartingBusinessScenarioRow[],
  exploreNextCards: [
    { label: "ZZP Guide", href: ZZP_NETHERLANDS_PATH, status: "live", description: "Dutch self-employment framework — registration, taxes and clients." },
    { label: "Freelancing Guide", href: FREELANCING_NETHERLANDS_PATH, status: "live", description: "Broader freelance orientation beyond solo registration." },
    { label: "Business Banking", href: BEST_BANK_ZZP_PATH, status: "live", description: "Compare business banking for entrepreneurs and ZZP'ers." },
    { label: "VAT Guide", href: VAT_NETHERLANDS_PATH, status: "comingSoon", description: "Future BTW guide — confirm rules with Belastingdienst meanwhile." },
    { label: "Tax Advisors", href: TAX_ADVISORS_PATH, status: "live", description: "Find tax support for business setup and cross-border work." },
  ] satisfies StartingBusinessLink[],
  exploreNextTips: [
    "Open ZZP guide if you are starting solo with client invoices.",
    "Read freelancing guide for pipeline and city context beyond registration.",
    "Compare business banking before your first substantial client payments.",
    "Browse tax advisors when BTW, BV or international clients add complexity.",
  ],
} as const;

export type StartingBusinessNetherlandsPage = typeof startingBusinessNetherlandsPage;
