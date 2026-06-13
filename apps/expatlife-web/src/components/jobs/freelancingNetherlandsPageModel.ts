export const FREELANCING_NETHERLANDS_PATH = "/netherlands/jobs/freelancing-netherlands/" as const;
export const ZZP_NETHERLANDS_PATH = "/netherlands/business/zzp-netherlands/" as const;
export const FREELANCING_AFFILIATE_PLACEMENT_ID = "nl-jobs-freelancing-support-providers" as const;

export const EMPLOYMENT_CONTRACT_NETHERLANDS_PATH = "/netherlands/jobs/employment-contract-netherlands/" as const;
export const EMPLOYEE_RIGHTS_NETHERLANDS_PATH = "/netherlands/jobs/employee-rights-netherlands/" as const;
export const FINDING_JOBS_NETHERLANDS_PATH = "/netherlands/jobs/finding-jobs-netherlands/" as const;
export const EXPAT_SALARY_NETHERLANDS_PATH = "/netherlands/jobs/expat-salary-netherlands/" as const;
export const HSM_VISA_PATH = "/netherlands/visa/highly-skilled-migrant/" as const;
export const MOVING_HUB_PATH = "/netherlands/moving-to-the-netherlands/" as const;
export const JOBS_HUB_PATH = "/netherlands/moving/working-in-the-netherlands/" as const;
export const VISAS_HUB_PATH = "/netherlands/moving/visas-residency/" as const;
export const IMMIGRATION_LAWYERS_PATH = "/netherlands/services/immigration-lawyers/" as const;
export const TAX_ADVISORS_PATH = "/netherlands/services/tax-advisors/" as const;
export const CAREER_COACHES_PATH = "/netherlands/services/career-coaches/" as const;
export const RECRUITMENT_AGENCIES_PATH = "/netherlands/services/recruitment-agencies/" as const;
export const RELOCATION_SERVICES_PATH = "/netherlands/services/relocation-services/" as const;
export const HEALTH_INSURANCE_PATH = "/netherlands/services/health-insurance/" as const;
export const THIRTY_PERCENT_RULING_PATH = "/netherlands/taxes/30-percent-ruling/" as const;
export const EXPAT_TAXES_NETHERLANDS_PATH = "/netherlands/taxes/expat-taxes-netherlands/" as const;
export const FOREIGN_INCOME_NETHERLANDS_PATH = "/netherlands/taxes/foreign-income-netherlands/" as const;
export const DOUBLE_TAXATION_NETHERLANDS_PATH = "/netherlands/taxes/double-taxation-netherlands/" as const;
export const FINANCIAL_ADVISORS_PATH = "/netherlands/services/financial-advisors/" as const;
export const ACCOUNTANTS_PATH = "/netherlands/services/accountants/" as const;
export const BUSINESS_CONSULTANTS_PATH = "/netherlands/services/business-consultants/" as const;
export const PENSION_NETHERLANDS_EXPATS_PATH = "/netherlands/jobs/pension-netherlands-expats/" as const;
export const BUSINESS_HUB_PATH = "/netherlands/business/" as const;
export const STARTING_BUSINESS_NETHERLANDS_PATH = "/netherlands/business/starting-a-business-netherlands/" as const;
export const VAT_NETHERLANDS_PATH = "/netherlands/taxes/vat-netherlands/" as const;

export type FreelancingLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type FreelancingCard = {
  title: string;
  body: string;
};

export type FreelancingScenarioRow = {
  profile: string;
  scenario: string;
  whatToCheck: string;
};

export type FreelancingComparisonRow = {
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

const INFOGRAPHIC_VERSION = "premium-v2";

const visual = (name: string, alt: string, caption: string) => ({
  src: `/images/infographics/netherlands-freelancing-${name}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const freelancingNetherlandsPage = {
  slug: "freelancing-netherlands",
  path: FREELANCING_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2026-09-02",
  affiliatePlacementId: FREELANCING_AFFILIATE_PLACEMENT_ID,
  seo: {
    title: "Freelancing in the Netherlands | ZZP & Self-Employment Guide",
    description:
      "Learn how freelancing works in the Netherlands, including ZZP registration, taxes, VAT, clients, visas and practical tips for expats and international professionals.",
    keywords: [
      "freelancing netherlands",
      "freelance netherlands expat",
      "zzp netherlands",
      "self employed netherlands",
      "freelancer netherlands",
      "zzp expat netherlands",
      "freelance taxes netherlands",
      "kvk registration netherlands",
      "freelance visa netherlands",
      "independent contractor netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Jobs · Freelancing & ZZP",
    pageTitle: "Freelancing in the Netherlands",
    subtitle:
      "Learn how freelancing and self-employment work in the Netherlands, including ZZP registration, taxes, invoicing, clients and practical considerations for expats.",
    primaryCta: { label: "Understand Freelancing", href: "#intro" },
    secondaryCta: { label: "Explore Work & Business Guides", href: JOBS_HUB_PATH },
    chips: ["ZZP basics", "Tax & VAT", "Client contracts", "Expat context"],
    image: {
      src: "/images/heroes/netherlands-freelancing-netherlands-hero-v2.png",
      alt: "Photorealistic editorial photo of an international woman freelancer working at a bright Dutch coworking desk with a laptop, KvK registration folder and client invoice — canal houses and bicycles visible through the window.",
    },
  },
  visuals: {
    intro: visual(
      "intro",
      "Premium infographic record-file builder showing six freelancing planning areas — ZZP status, registration, taxes, clients, insurance and visas — with concrete expat examples and a three-step checklist rail.",
      "Start here: confirm whether ZZP fits your situation, bookmark official sources and plan registration before your first invoice."
    ),
    snapshot: visual(
      "snapshot",
      "Premium at-a-glance infographic with six cards — self-employment prevalence, ZZP structure, registration, taxes, international clients and administration — each with practical notes.",
      "Compare these six areas against your plans — exact rules depend on your nationality, income and client mix."
    ),
    zzp: visual(
      "zzp",
      "Premium ZZP orientation infographic explaining eenmanszaak basics, KvK number, client invoicing and distinction from employment with sample €85/hour consultant scenario.",
      "ZZP is a common self-employment route — verify whether your work pattern qualifies before registering."
    ),
    vsEmployment: visual(
      "vs-employment",
      "Premium comparison bridge infographic contrasting employee contract protections vs ZZP independence — sick pay, pension, notice, holiday and client risk on each side.",
      "Freelancing trades employment protections for flexibility — compare total package, not headline day rate alone."
    ),
    registration: visual(
      "registration",
      "Premium registration timeline infographic from BSN and address through KvK enrolment, BTW choice and business bank account setup with Dutch desk scene.",
      "Register in a sensible order — KvK, tax choices and banking before large client invoices go out."
    ),
    taxesVat: visual(
      "taxes-vat",
      "Premium tax desk infographic on income tax, BTW/VAT quarters, deductible expenses, 30% ruling context and accountant handoff for expat freelancers.",
      "Plan quarterly BTW and annual income tax — expat cross-border income adds complexity fast."
    ),
    internationalClients: visual(
      "international-clients",
      "Premium map-and-bridge infographic on EU vs non-EU client invoicing, reverse charge, currency and contract clauses for remote freelancers based in the Netherlands.",
      "Client country changes VAT treatment — confirm each new market with your accountant."
    ),
    visas: visual(
      "visas",
      "Premium two-track bridge infographic separating IND permit rules from ZZP business activity for expat freelancers and highly skilled migrant transitions.",
      "Permit route and ZZP registration are separate planning tracks — verify IND rules independently."
    ),
    financialPlanning: visual(
      "financial-planning",
      "Premium financial planning board on buffer months, hourly rate math, BTW set-aside, pension gap and sick-day reserve for Dutch freelancers.",
      "Build buffers for tax, illness and slow client months — employment safety nets do not apply by default."
    ),
    healthPension: visual(
      "health-pension",
      "Premium insurance consultation scene on mandatory Dutch health insurance, aanvullende options and voluntary pension/ AOV context for ZZP professionals.",
      "Health insurance is mandatory; pension and disability cover are your responsibility to plan."
    ),
    findingClients: visual(
      "finding-clients",
      "Premium ecosystem map of LinkedIn, referrals, platforms, agencies and expat networks for finding freelance clients in Amsterdam, Rotterdam and remote NL markets.",
      "Mix channels — Dutch market rewards visible expertise and warm introductions."
    ),
    cities: visual(
      "cities",
      "Premium Netherlands city route map with eight freelancer hubs — Amsterdam, Rotterdam, Utrecht, The Hague, Eindhoven, Haarlem, Leiden and Groningen — with sector and cost-of-living hints.",
      "City choice affects client density, rates and living costs — align location with your sector and remote-client mix."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board with eight common expat freelancing pitfalls — taxes, bookkeeping, pension, client dependency, contracts, pricing, networking and cash flow — each with a smart-move fix.",
      "Most costly mistakes happen in the first 90 days — register and ask accountants early."
    ),
    prosCons: visual(
      "pros-cons",
      "Premium balance-scale infographic pairing freelancing advantages — flexibility, rate control, client choice — with challenges — admin, irregular income, no sick pay.",
      "Honest pros/cons framing helps you decide between ZZP and employment offers."
    ),
    questions: visual(
      "questions",
      "Premium eight-card Q&A infographic answering common expat freelancing questions on registration, tax, visas, insurance and client contracts.",
      "Use these as conversation starters with accountants and official sources — not legal advice."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium numbered route-map linking freelancing to finding jobs, expat taxes, foreign income, financial advisors and starting a business guides.",
      "Suggested order: job search bridge → expat taxes → foreign income when scaling international clients."
    ),
    services: visual(
      "services",
      "Premium provider map showing when accountants, tax advisors, business consultants, financial advisors and immigration lawyers may help during freelancing setup.",
      "Use professionals for scoped review — still read official sources yourself."
    ),
    faq: visual(
      "faq",
      "Premium FAQ accordion board with eight freelancing questions and short orientation answers on ZZP, tax, visas and insurance.",
      "FAQ answers orient you — confirm your situation with KvK, Belastingdienst and qualified advisers."
    ),
    officialSources: visual(
      "official-sources",
      "Premium Netherlands map infographic pinning six official sources — KvK, Belastingdienst, Business.gov.nl, Government.nl, IND and UWV — with what to verify where.",
      "Bookmark these before your first client invoice — rules and thresholds change over time."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium canal-route journey infographic with five next steps — starting a business, expat taxes, foreign income, financial advisors and finding clients.",
      "Pick your next guide based on whether you are planning taxes, scaling clients or building buffers."
    ),
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#zzp", label: "ZZP" },
    { href: "#vs-employment", label: "vs Employment" },
    { href: "#registration", label: "Registration" },
    { href: "#taxes-vat", label: "Tax & VAT" },
    { href: "#international-clients", label: "Intl clients" },
    { href: "#visas", label: "Visas" },
    { href: "#financial-planning", label: "Finance" },
    { href: "#health-pension", label: "Health" },
    { href: "#finding-clients", label: "Clients" },
    { href: "#cities", label: "Cities" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#pros-cons", label: "Pros & cons" },
    { href: "#questions", label: "Questions" },
    { href: "#related-guides", label: "Guides" },
    { href: "#services", label: "Services" },
    { href: "#faq", label: "FAQ" },
    { href: "#official-sources", label: "Sources" },
    { href: "#explore-next", label: "Explore next" },
  ],
  intro: {
    heading: "Can Expats Freelance in the Netherlands?",
    paragraphs: [
      "Many expats successfully freelance in the Netherlands. Freelancers work across industries such as software development, design, consulting, marketing, writing, photography, coaching and business services — often for Dutch, EU and global clients.",
      "However, freelancing involves both freedom and responsibility. You typically manage KvK registration, taxes, insurance, contracts and client administration yourself, while gaining flexibility over clients, hours and rates.",
      "This guide explains practical orientation to reduce overwhelm — not legal, tax or immigration advice. Verify your situation with KvK, Belastingdienst, IND and qualified professionals.",
    ],
    keyPoints: [
      { title: "ZZP is the common self-employment form", body: "Example: UX consultant registers eenmanszaak at KvK, invoices clients €90/hour ex BTW — verify whether your activity fits ZZP rules before starting." },
      { title: "Registration comes before large invoices", body: "Example: developer starts client work in month one without KvK — register early to avoid backdating and tax surprises." },
      { title: "Tax and VAT are your responsibility", body: "Example: €8,000/quarter revenue — plan BTW filings and income tax set-aside; expat cross-border income adds complexity." },
      { title: "Visa route matters separately", body: "Example: HS migrant considering side freelance work — employment permit rules and ZZP activity are separate IND topics." },
    ] satisfies FreelancingCard[],
    scenarios: [
      { profile: "UK developer — Amsterdam", scenario: "Offered 6-month freelance project €95/hour via agency; no KvK yet", whatToCheck: "Register KvK, confirm BTW status and written contract before day one." },
      { profile: "Designer — employed to ZZP", scenario: "Leaving permanent role to freelance for former employer as contractor", whatToCheck: "Employment vs contractor classification (DBA context) — verify with accountant, not verbal OK." },
      { profile: "Consultant — EU clients", scenario: "Based in Utrecht; clients in Germany and France; invoices in euros", whatToCheck: "Cross-border VAT rules per client country — accountant orientation early." },
      { profile: "HS migrant — side project", scenario: "Full-time sponsored job plus weekend freelance idea", whatToCheck: "IND rules on additional self-employment — separate from general ZZP registration." },
    ] satisfies FreelancingScenarioRow[],
  },
  introPlanningSteps: [
    "Decide whether ZZP fits your work pattern, income stability needs and permit situation.",
    "Plan KvK registration, BTW choice and business banking before sending client invoices.",
    "Bookmark KvK, Belastingdienst and Business.gov.nl — confirm health insurance and buffer savings.",
  ],
  snapshotCards: [
    { label: "Self-employment", value: "Common", note: "Freelancing and ZZP work are widespread across Dutch cities and sectors." },
    { label: "ZZP structure", value: "Popular", note: "Zelfstandige zonder personeel is the most common solo self-employment form." },
    { label: "Registration", value: "Often required", note: "Many freelancers register at KvK before substantial commercial activity." },
    { label: "Taxes", value: "Your responsibility", note: "Income tax, BTW/VAT and bookkeeping typically sit with you — not an employer." },
    { label: "International clients", value: "Common", note: "Many freelancers serve Dutch, EU and global clients while based in the Netherlands." },
    { label: "Administration", value: "Matters", note: "Invoices, contracts, reserves and compliance need ongoing attention." },
  ],
  snapshotNextSteps: [
    "Estimate monthly revenue, BTW and tax set-aside before accepting your first project.",
    "Compare freelance day rate with employment total package including pension and sick pay.",
    "Confirm health insurance and whether your permit allows the planned freelance activity.",
  ],
  snapshotComparisonHeading: "Freelancing vs common expat assumptions",
  snapshotComparisonParagraphs: [
    "Many international professionals compare Dutch freelancing with employment or home-country self-employment. This table orients you on typical differences — your contract, clients and permit route still govern exact terms.",
  ],
  snapshotComparisonRows: [
    { topic: "Income stability", dutchContext: "Project-based — buffers needed for slow months", whatToConfirm: "3–6 month expense reserve before leaving employment" },
    { topic: "Sick pay", dutchContext: "No employer sick leave by default", whatToConfirm: "AOV/disability insurance and savings plan" },
    { topic: "Pension", dutchContext: "No automatic employer pension", whatToConfirm: "Voluntary pension or investment plan with adviser" },
    { topic: "Tax admin", dutchContext: "Quarterly BTW and annual income tax filings", whatToConfirm: "Accountant scope and Belastingdienst deadlines" },
    { topic: "Client risk", dutchContext: "Late payment and scope creep are common risks", whatToConfirm: "Contract payment terms and deposit clauses" },
    { topic: "Permits", dutchContext: "Self-employment may need separate IND route", whatToConfirm: "ind.nl for your permit type before registering KvK" },
  ] satisfies FreelancingComparisonRow[],
  snapshotScenarios: [
    { profile: "First invoice — no KvK", scenario: "Consultant sends €12,000 invoice before registration", whatToCheck: "Register at KvK promptly — backdating and BTW questions with Belastingdienst." },
    { profile: "Rate comparison — employment offer", scenario: "€75/hour freelance vs €5,800/month employment", whatToCheck: "Add pension, vakantiegeld, sick pay and admin time to compare fairly." },
    { profile: "Remote from NL — US client", scenario: "Amsterdam-based; single US SaaS client; USD invoices", whatToCheck: "Tax residency, BTW and contract law — cross-border accountant review." },
    { profile: "Permit holder — side gig", scenario: "HSM employee wants weekend freelance photography", whatToCheck: "IND rules on additional activity — separate from KvK eligibility." },
  ] satisfies FreelancingScenarioRow[],
  zzpHeading: "What Is a ZZP'er?",
  zzpParagraphs: [
    "ZZP (zelfstandige zonder personeel) describes self-employed professionals without employees — the most common freelancing structure for solo consultants, developers and creatives.",
    "Most ZZP freelancers operate as eenmanszaak (sole proprietorship) registered at KvK. You invoice clients, manage taxes and carry business risk — unlike employees who receive contracts, sick pay and employer pension contributions.",
  ],
  zzpPoints: [
    "Eenmanszaak — sole proprietorship linked to you personally at KvK",
    "KvK registration — business number required before operating commercially",
    "Client invoicing — you set rates, send invoices and follow up on payment",
    "DBA / classification — working mainly for one client may resemble employment; verify independently",
    "Liability — professional and business risks sit with you unless contractually limited",
  ],
  zzpCards: [
    { title: "Typical ZZP profiles", body: "Example: IT consultant, marketing freelancer, interim HR specialist, translator — project-based work for multiple clients." },
    { title: "Not automatically ZZP", body: "Example: full-time role with one employer but paid via invoice — may be employment in practice; verify classification." },
    { title: "Registration trigger", body: "Example: first paid assignment in the Netherlands — register at KvK before substantial commercial activity." },
    { title: "Business vs hobby", body: "Example: occasional small gigs vs regular paid client work — KvK and tax treatment differ; confirm with official sources." },
  ] satisfies FreelancingCard[],
  zzpChecklist: [
    "Confirm your activity qualifies as independent self-employment for your situation.",
    "Register at KvK before sending substantial client invoices.",
    "Open a business bank account or dedicated account for client income.",
    "Ask an accountant about BTW, income tax and cross-border client rules early.",
  ],
  zzpScenarios: [
    { profile: "Developer — first Dutch client", scenario: "3-month React project €85/hour; works from home in Haarlem", whatToCheck: "KvK registration, BTW choice and written statement of work before start." },
    { profile: "Interim CFO — one main client", scenario: "4 days/week at single scale-up for 9 months", whatToCheck: "DBA/classification risk with one dominant client — accountant and contract review." },
    { profile: "Agency placement — payroll vs ZZP", scenario: "Recruiter offers ZZP contract for otherwise employee-like role", whatToCheck: "Compare with employment contract guide — classification matters for protections." },
    { profile: "Side freelance while employed", scenario: "Marketing manager with evening copywriting clients", whatToCheck: "Employment contract moonlighting clause plus separate KvK if commercial." },
  ] satisfies FreelancingScenarioRow[],
  vsEmploymentHeading: "Freelancing vs Traditional Employment",
  vsEmploymentParagraphs: [
    "Choosing between ZZP and employment affects income stability, admin burden, protections and long-term planning. Many expats receive both types of offers during their Netherlands career.",
    "Freelancers typically gain rate flexibility and client choice but lose employer sick pay, paid holiday, pension contributions and structured notice periods unless contractually negotiated.",
  ],
  vsEmploymentPoints: [
    "Employment — contract, CAO, sick leave, vakantiegeld and employer pension common",
    "ZZP — higher headline rates possible but you cover tax, insurance, pension and slow periods",
    "Hybrid paths — some professionals alternate employment and freelance phases",
    "Misclassification risk — long-term single-client ZZP may resemble employment",
  ],
  vsEmploymentSimpleRows: [
    { topic: "Income", dutchContext: "Employment: monthly salary + vakantiegeld", whatToConfirm: "ZZP: project rates — variable month to month" },
    { topic: "Benefits", dutchContext: "Employment: employer pension, sick pay common", whatToConfirm: "ZZP: self-funded insurance, pension and buffers" },
    { topic: "Flexibility", dutchContext: "Employment: contract hours and employer direction", whatToConfirm: "ZZP: choose clients, projects and schedule" },
    { topic: "Administration", dutchContext: "Employment: payroll handled by employer", whatToConfirm: "ZZP: KvK, BTW, invoices and contracts yourself" },
  ] satisfies FreelancingComparisonRow[],
  vsEmploymentComparisonRows: [
    { topic: "Sick leave", dutchContext: "Employee: HR sick process; ZZP: no pay unless insured/saved", whatToConfirm: "Compare AOV/disability cover if choosing ZZP" },
    { topic: "Holiday", dutchContext: "Employee: paid vacation days; ZZP: unpaid time between projects", whatToConfirm: "Build unpaid leave into rate and buffer planning" },
    { topic: "Pension", dutchContext: "Employee: employer scheme common; ZZP: voluntary savings", whatToConfirm: "Pension gap in total compensation comparison" },
    { topic: "Notice", dutchContext: "Employee: contract notice periods; ZZP: project contract end dates", whatToConfirm: "Termination clauses in client agreements" },
    { topic: "Tax admin", dutchContext: "Employee: payroll handled; ZZP: BTW and income tax yourself", whatToConfirm: "Accountant fees in freelance cost model" },
    { topic: "30% ruling", dutchContext: "Primarily employment context — verify if and how it applies to your route", whatToConfirm: "Tax adviser review before assuming ruling on ZZP income" },
  ] satisfies FreelancingComparisonRow[],
  vsEmploymentScenarios: [
    { profile: "Rate vs package — data engineer", scenario: "€90/hour ZZP vs €6,200/month employment with pension", whatToCheck: "Model 12-month net including pension, vakantiegeld and sick leave value." },
    { profile: "Former employer as client", scenario: "Leaving to invoice same team as contractor", whatToCheck: "Classification, IND if permit tied to employer, and contract scope." },
    { profile: "Agency payroll option", scenario: "Recruiter offers employed interim vs ZZP for same role", whatToCheck: "Total package, proeftijd, and who carries sick pay and pension." },
    { profile: "Startup founder-employee", scenario: "Small equity role plus freelance consulting on side", whatToCheck: "Separate KvK activity, employment contract clauses and tax treatment." },
  ] satisfies FreelancingScenarioRow[],
  registrationHeading: "How Freelancers Typically Register",
  registrationParagraphs: [
    "Registration is a practical first step: you typically need a BSN, Dutch address context and KvK enrolment for your eenmanszaak. BTW (VAT) registration with Belastingdienst often follows.",
    "Order matters — register before substantial commercial activity, set up banking for client payments and keep copies of registration confirmations for accountants and clients.",
  ],
  registrationPoints: [
    "BSN — citizen service number needed for registration and tax",
    "KvK — Chamber of Commerce registration for your business",
    "Belastingdienst — BTW number and income tax orientation",
    "Business bank account — separate client income from personal spending",
    "Trade name and activity code — choose accurate KvK activity description",
  ],
  registrationChecklist: [
    "Obtain or confirm your BSN and registered address context.",
    "Register eenmanszaak at KvK online or at a KvK office — note your KvK number.",
    "Apply for BTW number if required for your turnover and client mix.",
    "Open business banking and save registration PDFs for your accountant.",
  ],
  invoicingChecklist: [
    "Include your KvK number, trade name and BTW ID (if registered) on every invoice.",
    "State whether the rate is ex BTW or incl BTW — avoid ambiguous net pricing.",
    "Add payment terms (e.g. 14 days), bank details and a clear scope reference.",
    "Number invoices sequentially and keep copies for at least seven years.",
  ],
  invoicingNote:
    "Dutch clients often expect professional invoice layout and clear BTW treatment — templates from your accountant save disputes later.",
  registrationFlow: [
    { title: "Confirm eligibility", body: "Check permit rules on ind.nl if you are not an EU citizen with free movement." },
    { title: "Register at KvK", body: "Complete online enrolment — activity description, trade name and start date." },
    { title: "BTW with Belastingdienst", body: "Register for VAT if applicable — accountant helps choose small-business scheme vs standard." },
    { title: "Banking and templates", body: "Set up account, invoice template with KvK/BTW details and payment terms." },
  ] satisfies FreelancingCard[],
  registrationScenarios: [
    { profile: "New arrival — BSN week 2", scenario: "Registers KvK immediately after BSN appointment", whatToCheck: "Address registration timing and KvK online requirements." },
    { profile: "Remote EU freelancer — moves to NL", scenario: "Existing EU clients; relocates to Rotterdam", whatToCheck: "Tax residency shift, KvK registration and cross-border VAT with accountant." },
    { profile: "Late registration — 3 invoices sent", scenario: "Consultant operated 2 months before KvK", whatToCheck: "Backdating questions, BTW on past invoices — Belastingdienst and accountant." },
    { profile: "Trade name choice", scenario: "Uses personal name vs brand name on invoices", whatToCheck: "KvK trade name registration and client contract matching." },
  ] satisfies FreelancingScenarioRow[],
  taxesVatHeading: "Understanding Taxes and VAT",
  taxGuideLinks: [
    { label: "Expat taxes Netherlands", href: EXPAT_TAXES_NETHERLANDS_PATH, status: "live", description: "Broader expat tax orientation when freelance income joins employment or foreign assets." },
    { label: "Foreign income Netherlands", href: FOREIGN_INCOME_NETHERLANDS_PATH, status: "live", description: "Cross-border income context when clients or assets sit outside the Netherlands." },
    { label: "Double taxation Netherlands", href: DOUBLE_TAXATION_NETHERLANDS_PATH, status: "live", description: "Treaty and residency concepts when invoicing internationally." },
    { label: "VAT Netherlands", href: VAT_NETHERLANDS_PATH, status: "comingSoon", description: "Future dedicated BTW guide — confirm rules with Belastingdienst and an accountant meanwhile." },
  ] satisfies FreelancingLink[],
  taxesVatParagraphs: [
    "Freelancers in the Netherlands typically file BTW (VAT) returns quarterly and declare income for Dutch income tax annually. Deductible business expenses, cross-border clients and permit context can change your effective rate.",
    "Expats with foreign income, investments abroad or 30% ruling history should treat tax planning as a core setup step — not a year-end surprise.",
  ],
  taxesVatPoints: [
    "BTW — charge VAT on many domestic invoices; file quarterly via Belastingdienst",
    "Kleineondernemersregeling — small-business VAT scheme may apply below thresholds",
    "Income tax — annual return on profit after allowable deductions",
    "Deductibles — equipment, software, travel, accountant fees often deductible with rules",
    "Cross-border — EU B2B reverse charge and non-EU clients need per-case review",
  ],
  taxesVatChecklist: [
    "Ask an accountant whether kleineondernemersregeling fits your expected turnover.",
    "Set aside monthly percentage for BTW and income tax — do not spend full invoices.",
    "Track expenses with receipts from day one — messy records cost more later.",
    "Confirm how foreign clients affect VAT and tax residency before scaling.",
  ],
  taxesVatComparisonRows: [
    { topic: "Domestic B2B client", dutchContext: "Usually BTW on invoice unless exempt scheme", whatToConfirm: "Client VAT number and correct rate on invoice" },
    { topic: "EU B2B client", dutchContext: "Reverse charge may apply — no Dutch BTW on invoice", whatToConfirm: "Valid EU VAT ID and invoice wording with accountant" },
    { topic: "US SaaS client", dutchContext: "Export/service rules vary — residency matters", whatToConfirm: "Cross-border tax adviser before large contracts" },
    { topic: "Mixed employment + ZZP", dutchContext: "Two income streams in one tax year", whatToConfirm: "Payroll vs freelance declarations — accountant coordination" },
  ] satisfies FreelancingComparisonRow[],
  taxesVatScenarios: [
    { profile: "First BTW quarter — designer", scenario: "€18,000 revenue Q1; forgot BTW set-aside", whatToCheck: "Belastingdienst payment plan and accountant catch-up filings." },
    { profile: "30% ruling — new ZZP", scenario: "Former employee with ruling considering freelance switch", whatToCheck: "Tax adviser on ruling eligibility with self-employment income." },
    { profile: "Home office deduction", scenario: "Works from apartment; wants to deduct rent portion", whatToCheck: "Belastingdienst rules on home workspace — accountant calculation." },
    { profile: "Late freelancer registration", scenario: "Started mid-year; employment Jan–Jun then ZZP Jul–Dec", whatToCheck: "Combined annual return and pro-rata BTW quarters." },
  ] satisfies FreelancingScenarioRow[],
  internationalClientsHeading: "Foreign Clients and International Work",
  internationalClientGuideLinks: [
    { label: "Foreign income Netherlands", href: FOREIGN_INCOME_NETHERLANDS_PATH, status: "live", description: "When clients, assets or income streams sit outside the Netherlands." },
    { label: "Double taxation Netherlands", href: DOUBLE_TAXATION_NETHERLANDS_PATH, status: "live", description: "Treaty context for EU and global client relationships." },
  ] satisfies FreelancingLink[],
  internationalClientsParagraphs: [
    "Many Netherlands-based freelancers serve EU and global clients while living in Amsterdam, Rotterdam or smaller cities. Client location affects VAT, contract law and payment currency.",
    "Written contracts should cover scope, IP, payment terms, currency and dispute resolution — especially when clients are in other time zones and legal systems.",
  ],
  internationalClientsPoints: [
    "EU B2B — reverse charge VAT common with valid client VAT numbers",
    "Non-EU clients — export/service treatment depends on activity and residency",
    "Currency — EUR standard locally; USD/GBP contracts need FX planning",
    "IP and confidentiality — explicit clauses protect your work product",
    "Time zones — define response times and meeting windows in contracts",
  ],
  internationalClientsChecklist: [
    "Validate client VAT numbers for EU B2B before zero-rating BTW.",
    "Use written SOW with milestones, acceptance criteria and payment schedule.",
    "Define late-payment interest and stop-work rights in contract.",
    "Confirm which country's law governs disputes for large engagements.",
  ],
  internationalClientsScenarios: [
    { profile: "German agency — remote dev", scenario: "Utrecht-based; 12-month project; invoices in EUR", whatToCheck: "Reverse charge VAT, contract law and payment terms in writing." },
    { profile: "UK client post-Brexit", scenario: "Marketing retainer billed monthly in GBP", whatToCheck: "VAT and service export rules with accountant — not 2020 assumptions." },
    { profile: "US startup — USD contract", scenario: "$150/hour SOW; paid via Wise to NL account", whatToCheck: "Tax residency, BTW and FX buffer on USD income." },
    { profile: "Multi-client EU mix", scenario: "NL, BE and FR clients same quarter", whatToCheck: "Per-client VAT treatment on each invoice template." },
  ] satisfies FreelancingScenarioRow[],
  visasHeading: "Freelancing and Residence Status",
  visasParagraphs: [
    "Your residence and work permit type may restrict or shape self-employment activity. EU/EEA/Swiss citizens generally have different options than permit holders tied to a sponsoring employer.",
    "IND rules for self-employment, startup and highly skilled migrant routes are separate from KvK registration — verify on official sources before relying on this guide.",
  ],
  visasPoints: [
    "EU/EEA/Swiss — broader self-employment access subject to registration and tax rules",
    "Highly skilled migrant — employment tied to sponsor; side freelance often restricted",
    "Self-employment permit — separate IND route for qualifying entrepreneurs",
    "Partner/family permits — work rights vary; check ind.nl for your document",
    "Changing routes — employment to ZZP may affect permit validity",
  ],
  visasChecklist: [
    "Read ind.nl for your exact permit type before registering KvK activity.",
    "Do not assume HS migrant employment permit covers freelance side projects.",
    "Keep sponsor HR informed if employment permit terms restrict other work.",
    "Consult immigration lawyer for route changes — not general job forums.",
  ],
  visasComparisonRows: [
    { topic: "EU citizen freelancer", dutchContext: "Register KvK and tax; no work permit", whatToConfirm: "BSN, address and insurance setup" },
    { topic: "HS migrant — side gig", dutchContext: "Additional work often restricted", whatToConfirm: "IND and employer contract before invoicing" },
    { topic: "Self-employment visa", dutchContext: "Separate entrepreneur criteria on ind.nl", whatToConfirm: "Business plan and income thresholds independently" },
    { topic: "Partner permit", dutchContext: "Work rights on residence card", whatToConfirm: "IND sticker text and official FAQ" },
  ] satisfies FreelancingComparisonRow[],
  visasScenarios: [
    { profile: "HS migrant — weekend projects", scenario: "Wants to freelance outside sponsor job", whatToCheck: "IND rules and employment contract moonlighting clause." },
    { profile: "EU consultant — post-Brexit UK passport", scenario: "Moved under residency rights; starts ZZP", whatToCheck: "Registration and tax like other EU freelancers — permit not the blocker." },
    { profile: "Startup visa founder", scenario: "IND startup route plus client consulting income", whatToCheck: "Permit conditions vs actual client activity — immigration lawyer scope." },
    { profile: "Leaving employer — same clients", scenario: "Switch from HSM employment to ZZP with new clients", whatToCheck: "Permit change timing before KvK and last employment day." },
  ] satisfies FreelancingScenarioRow[],
  financialPlanningHeading: "Managing Variable Income",
  financialPlanningParagraphs: [
    "Without employer buffers, freelancers need explicit plans for tax set-aside, slow client months, equipment replacement and retirement savings. Hourly rate math should include non-billable admin time.",
    "A common mistake is comparing freelance day rates to gross employment salary without adding pension, vakantiegeld, sick leave and accountant costs.",
  ],
  financialPlanningPoints: [
    "Buffer fund — 3–6 months expenses for gaps between projects",
    "Tax reserve — separate account for BTW and income tax payments",
    "Rate calculation — billable hours are far below calendar hours",
    "Pension gap — voluntary contributions or investments",
    "Insurance — health mandatory; disability (AOV) worth exploring",
  ],
  financialPlanningChecklist: [
    "Calculate minimum monthly rate covering tax, pension and buffers.",
    "Track billable vs admin hours for one month — adjust rate upward.",
    "Automate monthly transfer to tax reserve account on invoice payment.",
    "Review AOV/disability insurance options with a financial adviser.",
  ],
  financialPlanningRateRows: [
    { topic: "Calendar hours", dutchContext: "~160 hours/month if full-time", whatToConfirm: "Not all hours are billable — sales and admin reduce effective rate" },
    { topic: "Billable target", dutchContext: "Often 50–70% of calendar hours", whatToConfirm: "Track one month; adjust pipeline or rate if below target" },
    { topic: "Tax + BTW reserve", dutchContext: "Many set aside 25–35% of revenue", whatToConfirm: "Accountant helps refine for your client mix and deductions" },
    { topic: "Pension + buffer", dutchContext: "No employer accrual on ZZP", whatToConfirm: "Add pension gap and 3–6 month buffer to rate model" },
    { topic: "Example — consultant", dutchContext: "€100/hr × 22 billable hrs = €2,200/mo gross", whatToConfirm: "Compare with employment package incl. pension and sick pay" },
  ] satisfies FreelancingComparisonRow[],
  financialPlanningScenarios: [
    { profile: "Rate reality check — consultant", scenario: "€100/hour target; only 22 billable hours/month after sales/admin", whatToCheck: "Effective hourly income far lower — raise rate or reduce non-billable load." },
    { profile: "Slow Q3 — designer", scenario: "One client paused; no income 6 weeks", whatToCheck: "Buffer fund usage and pipeline rebuilding — normal freelance cycle." },
    { profile: "Large tax bill — year one", scenario: "Spent full invoices; BTW + income tax due April", whatToCheck: "Belastingdienst payment plan; accountant for next-year reserves." },
    { profile: "Equipment cycle — video editor", scenario: "Camera upgrade €4,500; deductible with rules", whatToCheck: "Belastingdienst depreciation rules with accountant." },
  ] satisfies FreelancingScenarioRow[],
  financialPlanningGuideLinks: [
    { label: "Expat taxes Netherlands", href: EXPAT_TAXES_NETHERLANDS_PATH, status: "live", description: "Model income tax alongside freelance revenue and other income streams." },
    { label: "Foreign income Netherlands", href: FOREIGN_INCOME_NETHERLANDS_PATH, status: "live", description: "Cross-border clients change cash flow and tax planning assumptions." },
    { label: "Financial advisors", href: FINANCIAL_ADVISORS_PATH, status: "live", description: "Buffers, pension gaps and insurance when income becomes variable." },
  ] satisfies FreelancingLink[],
  healthPensionHeading: "Healthcare and Retirement Considerations",
  healthPensionGuideLinks: [
    { label: "Health insurance services", href: HEALTH_INSURANCE_PATH, status: "live", description: "Compare mandatory basic coverage when you become self-employed." },
    { label: "Pension for expats", href: PENSION_NETHERLANDS_EXPATS_PATH, status: "live", description: "Employer pension context and gaps when you move to ZZP." },
    { label: "Financial advisors", href: FINANCIAL_ADVISORS_PATH, status: "live", description: "Pension, buffers and insurance planning for variable freelance income." },
  ] satisfies FreelancingLink[],
  healthPensionParagraphs: [
    "All residents in the Netherlands must hold basic health insurance (basisverzekering). Freelancers choose their own insurer and may add aanvullende coverage.",
    "Employer pension contributions disappear on ZZP — plan voluntary pension products or investments. Disability insurance (AOV) is worth exploring for income protection.",
  ],
  healthPensionPoints: [
    "Basic health insurance — mandatory; compare insurers on coverage and premium",
    "Healthcare allowance — may apply depending on income — verify on toeslagen.nl",
    "No employer pension — build voluntary retirement savings",
    "AOV — disability insurance for self-employed income protection",
    "Dental and extras — optional aanvullende packages vary by insurer",
  ],
  healthPensionChecklist: [
    "Compare basic health insurers within 4 months of registration if newly arrived.",
    "Model pension gap vs last employment package when setting freelance rates.",
    "Ask financial adviser about AOV if you rely on freelance income for household bills.",
    "Keep insurance documents for mortgage or visa applications if relevant.",
  ],
  healthPensionScenarios: [
    { profile: "Switch from employer plan", scenario: "Leaves corporate job; must pick own insurer within deadline", whatToCheck: "Compare independer or insurer sites — mandatory basic coverage." },
    { profile: "Low income start — designer", scenario: "First year revenue below expectations", whatToCheck: "Healthcare allowance eligibility on toeslagen.nl independently." },
    { profile: "Pension gap — 15-year horizon", scenario: "Age 40; no employer pension accrual on ZZP", whatToCheck: "Voluntary pension product vs investment plan with adviser." },
    { profile: "Illness without AOV", scenario: "Broken wrist; 8 weeks no client work", whatToCheck: "Savings buffer; AOV for future — no employer sick pay." },
  ] satisfies FreelancingScenarioRow[],
  findingClientsHeading: "How Freelancers Commonly Find Clients",
  findingClientsCards: [
    { title: "LinkedIn", body: "Primary discovery channel for professional services — visible niche expertise and warm outreach." },
    { title: "Networking events", body: "Sector meetups, expat communities and industry conferences in Amsterdam, Rotterdam and Utrecht." },
    { title: "Referrals", body: "Former colleagues and managers often supply first clients — ask for introduction-ready referrals." },
    { title: "Recruitment agencies", body: "Interim and contractor placements — verify classification and fee structure before signing." },
    { title: "Freelance platforms", body: "Useful for visibility — compare platform fees, client quality and rate sustainability." },
    { title: "Industry communities", body: "Slack groups, associations and specialist forums where Dutch and international professionals collaborate." },
    { title: "Coworking spaces", body: "Community boards and informal introductions in shared offices across major cities." },
    { title: "Professional associations", body: "Sector bodies and expat professional networks that signal credibility to local clients." },
  ] satisfies FreelancingCard[],
  findingClientsParagraphs: [
    "The Dutch freelance market rewards visible expertise, referrals and professional networks. LinkedIn, former colleagues, expat communities and sector events are common channels alongside platforms and agencies.",
    "Cold outreach works better with a clear niche, case studies and Dutch/English profile tailored to local expectations — not generic global freelancer templates.",
  ],
  findingClientsPoints: [
    "LinkedIn — primary discovery channel for professional services in NL",
    "Referrals — former employers and colleagues often first clients",
    "Platforms — useful for visibility; compare fees and client quality",
    "Agencies — interim and contractor placements with classification checks",
    "Communities — expat professional groups and sector meetups",
  ],
  findingClientsChecklist: [
    "Publish 3–5 case studies or portfolio pieces with measurable outcomes.",
    "Ask two former colleagues for introduction-ready referrals this month.",
    "Set weekly outreach quota — messages, calls or event attendance.",
    "Track pipeline in simple CRM — proposal sent, follow-up date, status.",
  ],
  findingClientsScenarios: [
    { profile: "First client — network", scenario: "Former manager introduces scale-up CTO for architecture review", whatToCheck: "Written SOW, rate and KvK registration before kickoff." },
    { profile: "LinkedIn inbound — marketer", scenario: "Content posts lead to inbound DM from Dutch SaaS", whatToCheck: "Qualify budget and timeline; send proposal with payment terms." },
    { profile: "Agency bench — developer", scenario: "Joins agency freelancer pool; 15% fee on placements", whatToCheck: "Classification, rate after fee and exclusivity clauses." },
    { profile: "Platform race to bottom", scenario: "Low-rate platform bids vs direct clients at 2× rate", whatToCheck: "Focus pipeline on direct clients and referrals for sustainability." },
  ] satisfies FreelancingScenarioRow[],
  cityCards: [
    { label: "Amsterdam", href: "/netherlands/cities/amsterdam/", status: "live", description: "Large international client pool — tech, finance, creative and startup density with extensive coworking." },
    { label: "Rotterdam", href: "/netherlands/cities/rotterdam/", status: "live", description: "Port, logistics and creative sectors — growing freelance scene and international community." },
    { label: "Utrecht", href: "/netherlands/cities/utrecht/", status: "live", description: "Central consultancy and SaaS hub with strong networking across the Randstad." },
    { label: "The Hague", href: "/netherlands/cities/the-hague/", status: "live", description: "International organisations, legal and public-sector adjacent consulting opportunities." },
    { label: "Eindhoven", href: "/netherlands/cities/eindhoven/", status: "live", description: "Brainport high-tech ecosystem — engineering, design and deep-tech freelance demand." },
    { label: "Haarlem", href: "/netherlands/cities/haarlem/", status: "live", description: "Amsterdam-area alternative with creative professionals and commuter networking." },
    { label: "Leiden", href: "/netherlands/cities/leiden/", status: "live", description: "University city with research, biotech and international professional communities." },
    { label: "Groningen", href: "/netherlands/cities/groningen/", status: "live", description: "Northern city with lower living costs and growing student and startup networks." },
  ] satisfies FreelancingLink[],
  citiesHeading: "Popular Cities for Freelancers",
  citiesParagraphs: [
    "Freelancers cluster in Randstad cities for client density and networking, but remote work lets many professionals choose lower-cost cities while serving global clients.",
    "Match city to sector: tech and finance lean Amsterdam and Utrecht; high-tech engineering toward Eindhoven; international orgs toward The Hague; research and biotech toward Leiden.",
  ],
  citiesPoints: [
    "Coworking spaces — common entry point for networking and community boards",
    "Startup ecosystems — Amsterdam, Rotterdam, Eindhoven and Utrecht host active founder scenes",
    "International communities — expat professional groups accelerate warm introductions",
    "Commute trade-offs — Haarlem and Utrecht offer Randstad access with different rent profiles",
    "Remote-first — many freelancers serve EU/global clients regardless of city size",
  ],
  citiesComparisonRows: [
    { topic: "Client density", dutchContext: "Highest in Amsterdam, Utrecht, Rotterdam", whatToConfirm: "Sector fit matters more than city name alone" },
    { topic: "Living costs", dutchContext: "Amsterdam highest; Groningen often lower", whatToConfirm: "Model rent against expected freelance rate and buffer" },
    { topic: "Networking", dutchContext: "Meetups, coworking and LinkedIn events in Randstad", whatToConfirm: "Join one sector community in your first month" },
    { topic: "Remote clients", dutchContext: "Feasible from any Dutch city with good connectivity", whatToConfirm: "Time zones and contract law still follow client location" },
  ] satisfies FreelancingComparisonRow[],
  citiesScenarios: [
    { profile: "Developer — Amsterdam vs Utrecht", scenario: "Same remote EU clients; choosing where to live", whatToCheck: "Rent difference vs occasional in-person meetups in Amsterdam." },
    { profile: "Consultant — The Hague", scenario: "Targets international org and NGO adjacent work", whatToCheck: "Network in policy and legal circles; English common in sector." },
    { profile: "Designer — Haarlem commute", scenario: "Lives in Haarlem; clients mostly Amsterdam agencies", whatToCheck: "Factor travel time into billable-hour model or raise day rate." },
    { profile: "PhD freelancer — Leiden", scenario: "Biotech consulting alongside research network", whatToCheck: "Leiden corridor clients plus KvK registration before paid work." },
  ] satisfies FreelancingScenarioRow[],
  citiesChecklist: [
    "Shortlist cities by sector clusters and client types you target.",
    "Compare monthly rent and coworking costs against expected freelance revenue.",
    "Join one local professional or expat network in your chosen city early.",
    "Confirm permit and registration rules are the same regardless of city — IND and KvK are national.",
  ],
  mistakesHeading: "Common Freelancing Mistakes",
  mistakesParagraphs: [
    "Expats new to Dutch freelancing often repeat predictable errors: late registration, optimistic rate math, ignoring classification risk and skipping insurance buffers.",
    "Most issues are easier to prevent in the first 90 days than to fix after Belastingdienst letters or client payment disputes.",
  ],
  mistakeCards: [
    { title: "Underestimating taxes", body: "Example: spends full invoices — quarterly BTW and annual income tax create cash shocks." },
    { title: "Poor bookkeeping", body: "Example: mixed personal and client expenses — messy records cost more at year end." },
    { title: "Not saving for retirement", body: "Example: strong year-one revenue but no pension plan — employer accrual disappears on ZZP." },
    { title: "Depending on one client", body: "Example: 90% income from one engagement — classification and cash-flow risk if contract ends." },
    { title: "Ignoring contracts", body: "Example: scope creep on branding project — no written payment terms or change-order process." },
    { title: "Pricing too low", body: "Example: €70/hour ZZP vs €6k employment without pension and sick-pay math." },
    { title: "Ignoring networking", body: "Example: waits for inbound only — slow pipeline when a project pauses." },
    { title: "Poor cash-flow planning", body: "Example: 60-day client payment terms with no buffer — rent due before invoice clears." },
  ] satisfies FreelancingCard[],
  mistakesChecklist: [
    "Register KvK before substantial client revenue — not after first payment.",
    "Get accountant review before long single-client engagements.",
    "Use written contracts with payment terms, scope and IP clauses.",
    "Verify IND rules if any permit is tied to employment or residency route.",
  ],
  mistakesScenarios: [
    { profile: "Late KvK — consultant", scenario: "Three months of invoices; Belastingdienst inquiry", whatToCheck: "Accountant to regularise registration and BTW filings." },
    { profile: "DBA scare — single client", scenario: "12-month exclusive engagement; client asks for employment switch", whatToCheck: "Classification review; employment contract guide for comparison." },
    { profile: "Unpaid invoice — €9k", scenario: "Client delays 90 days; no contract late-fee clause", whatToCheck: "Legal collection route; future contracts with deposits." },
    { profile: "Permit side work", scenario: "HSM invoices without IND clearance", whatToCheck: "Immigration lawyer before continuing activity." },
  ] satisfies FreelancingScenarioRow[],
  prosCons: {
    heading: "Advantages and Challenges",
    paragraphs: [
      "Honest pros and cons help you compare ZZP with employment offers and home-country self-employment habits.",
    ],
    advantages: [
      "Flexibility over clients, hours and project selection",
      "Higher headline day rates possible for in-demand skills",
      "Ability to serve international clients while based in the Netherlands",
      "Tax-deductible business expenses with proper records",
      "Portfolio career — mix sectors and project types",
      "Location independence within NL for many remote-friendly roles",
    ],
    challenges: [
      "Irregular income and slow periods between projects",
      "No employer sick pay, paid holiday or automatic pension",
      "Admin burden — KvK, BTW, contracts and chasing payments",
      "Classification and permit risks if setup resembles employment",
      "Client dependency — late payers and scope creep hurt cash flow",
      "Isolation — fewer team structures unless you build networks",
    ],
    scenarios: [
      { profile: "Parent — flexibility priority", scenario: "Chooses ZZP for school-hours scheduling", whatToCheck: "Buffer for unpaid leave and health insurance during gaps." },
      { profile: "Risk-averse — mortgage planning", scenario: "Wants freelance income but buying apartment in 18 months", whatToCheck: "Lender view of ZZP income history — employment may be easier short term." },
      { profile: "High-demand dev — rate focus", scenario: "€110/hour vs €7k employment", whatToCheck: "Still model pension, sick buffer and 25% non-billable time." },
      { profile: "Creative — portfolio breadth", scenario: "Mixes NL and EU clients across sectors", whatToCheck: "Admin capacity for multi-client VAT and contracts." },
    ] satisfies FreelancingScenarioRow[],
  },
  hrConversationPrompts: [
    { audience: "Accountant", question: "Does kleineondernemersregeling fit my expected turnover and client mix?", whyAsk: "VAT scheme choice affects pricing and filing from day one." },
    { audience: "Accountant", question: "How should I invoice EU vs non-EU clients for BTW?", whyAsk: "Wrong VAT treatment creates corrections and client confusion." },
    { audience: "IND / lawyer", question: "Does my permit allow the freelance activity I am planning?", whyAsk: "KvK registration does not override permit restrictions." },
    { audience: "Client", question: "Can we define milestones, acceptance criteria and payment within 14 days?", whyAsk: "Written terms reduce scope creep and late payment." },
    { audience: "Former employer HR", question: "Does my employment contract restrict freelance side work?", whyAsk: "Moonlighting clauses may block overlap even with KvK registered." },
    { audience: "Insurer", question: "Which basic health package fits my expected ZZP income?", whyAsk: "Mandatory coverage with premium trade-offs." },
  ] satisfies { audience: string; question: string; whyAsk: string }[],
  questionScenarios: [
    { profile: "Before first invoice", scenario: "Client wants start Monday; KvK not done", whatToCheck: "Delay start or register urgently — use prompts with accountant." },
    { profile: "EU client VAT", scenario: "First German B2B invoice", whatToCheck: "Accountant prompt on reverse charge wording." },
    { profile: "Permit + KvK same week", scenario: "Registers business while on employment permit", whatToCheck: "IND/lawyer prompt before accepting freelance income." },
    { profile: "Rate negotiation", scenario: "Client pushes net rate without BTW clarity", whatToCheck: "Contract prompt on ex/incl BTW and payment deadline." },
  ] satisfies FreelancingScenarioRow[],
  expatQuestions: [
    { q: "Can foreigners freelance in the Netherlands?", a: "Often yes depending on nationality and permit — EU citizens typically register at KvK; permit holders must verify IND rules independently." },
    { q: "What is a ZZP'er?", a: "A ZZP'er is zelfstandige zonder personeel — self-employed without employees, usually registered as eenmanszaak at KvK." },
    { q: "Do I need to register?", a: "Many freelancers register at KvK before substantial commercial activity — requirements vary by situation." },
    { q: "How do taxes work?", a: "Freelancers commonly manage income tax, BTW/VAT and bookkeeping — confirm thresholds and filings with Belastingdienst and an accountant." },
    { q: "Can I work for foreign clients?", a: "Yes — many freelancers serve Dutch, EU and global clients; cross-border VAT and tax rules need per-client review." },
    { q: "Do I need VAT registration?", a: "Many freelancers charge BTW and file quarterly returns — small-business scheme may apply below thresholds; verify independently." },
    { q: "Can highly skilled migrants freelance?", a: "Often restricted because employment is tied to a sponsor — verify ind.nl before side or full freelance activity." },
    { q: "Is freelancing popular in the Netherlands?", a: "Yes — ZZP self-employment is common across consulting, tech, creative and business services in major cities." },
  ],
  relatedGuides: [
    { label: "ZZP in the Netherlands", href: ZZP_NETHERLANDS_PATH, status: "live", description: "Cornerstone guide on Dutch ZZP registration, taxes, invoicing and expat context." },
    { label: "Finding Jobs in the Netherlands", href: FINDING_JOBS_NETHERLANDS_PATH, status: "live", description: "Employer routes and job search when freelancing is a bridge or alternative." },
    { label: "Expat Taxes Netherlands", href: EXPAT_TAXES_NETHERLANDS_PATH, status: "live", description: "Tax orientation when freelance income joins employment or foreign assets." },
    { label: "Foreign Income Netherlands", href: FOREIGN_INCOME_NETHERLANDS_PATH, status: "live", description: "Cross-border income context for international client work." },
    { label: "Financial Advisors", href: FINANCIAL_ADVISORS_PATH, status: "live", description: "Pension, buffers and planning when income becomes variable." },
    { label: "Starting a Business Netherlands", href: STARTING_BUSINESS_NETHERLANDS_PATH, status: "comingSoon", description: "Future guide for broader entrepreneurship beyond solo ZZP." },
  ] satisfies FreelancingLink[],
  relatedGuideReadingOrder: [
    "Open finding jobs when freelancing is a bridge while you search for employment.",
    "Read expat taxes and foreign income guides before scaling international clients.",
    "Use financial advisors when buffers, pension gaps or insurance add complexity.",
  ],
  ecosystemLinks: [
    { label: "Finding jobs Netherlands", href: FINDING_JOBS_NETHERLANDS_PATH, status: "live", description: "Job search hub alongside freelance planning." },
    { label: "Expat taxes Netherlands", href: EXPAT_TAXES_NETHERLANDS_PATH, status: "live", description: "Core tax orientation for international residents." },
    { label: "Foreign income Netherlands", href: FOREIGN_INCOME_NETHERLANDS_PATH, status: "live", description: "When clients or assets sit outside the Netherlands." },
    { label: "Double taxation Netherlands", href: DOUBLE_TAXATION_NETHERLANDS_PATH, status: "live", description: "Treaty context for global client relationships." },
    { label: "Financial advisors", href: FINANCIAL_ADVISORS_PATH, status: "live", description: "Professional support for buffers, pension and insurance." },
    { label: "Business hub", href: BUSINESS_HUB_PATH, status: "comingSoon", description: "Future entrepreneurship cluster for company setup beyond ZZP." },
  ] satisfies FreelancingLink[],
  relatedGuideScenarios: [
    { profile: "Freelance bridge", scenario: "ZZP while searching for permanent employment", whatToCheck: "Finding jobs guide for pipeline; KvK for interim invoices." },
    { profile: "Scaling EU clients", scenario: "Second year with German and French B2B clients", whatToCheck: "Foreign income and double taxation guides before revenue grows." },
    { profile: "Variable income planning", scenario: "Leaving employment; first ZZP year", whatToCheck: "Financial advisors guide for buffers, pension gap and insurance." },
    { profile: "Beyond solo ZZP", scenario: "Considering hiring or BV structure later", whatToCheck: "Starting a business guide when live; accountant scoping meanwhile." },
  ] satisfies FreelancingScenarioRow[],
  serviceCategories: [
    { label: "Accountants", href: ACCOUNTANTS_PATH, status: "comingSoon", description: "Bookkeeping, BTW filings and ZZP compliance — confirm scope before engaging." },
    { label: "Tax advisors", href: TAX_ADVISORS_PATH, status: "live", description: "Income tax, cross-border clients, kleineondernemersregeling and expat context." },
    { label: "Business consultants", href: BUSINESS_CONSULTANTS_PATH, status: "comingSoon", description: "Structure, positioning and operational setup beyond day-one registration." },
    { label: "Financial advisors", href: FINANCIAL_ADVISORS_PATH, status: "live", description: "Buffers, pension gaps, insurance and variable-income planning." },
    { label: "Immigration lawyers", href: IMMIGRATION_LAWYERS_PATH, status: "live", description: "Permit questions when self-employment intersects with residency routes." },
  ] satisfies ServiceCategory[],
  servicesWhenToUse: [
    "Tax advisors: KvK setup, BTW scheme choice, quarterly filings and cross-border clients.",
    "Accountants: ongoing bookkeeping, BTW returns and income tax compliance.",
    "Immigration lawyers: permit restrictions, route changes and self-employment visa questions.",
    "Financial advisors: buffers, pension gaps, AOV and variable-income planning.",
    "Business consultants: positioning, operations and growth beyond day-one ZZP setup.",
  ],
  serviceScenarios: [
    { profile: "First year ZZP — US + NL clients", scenario: "Complex VAT and tax residency", whatToCheck: "Tax adviser with expat freelancer experience." },
    { profile: "HS migrant — route change", scenario: "Leaving sponsor to freelance full time", whatToCheck: "Immigration lawyer before last employment day." },
    { profile: "Single-client engagement", scenario: "9-month exclusive contract", whatToCheck: "Accountant on DBA/classification plus contract review." },
    { profile: "Pension and buffer planning", scenario: "Age 38 leaving corporate pension scheme", whatToCheck: "Financial adviser to model ZZP rate and retirement gap." },
  ] satisfies FreelancingScenarioRow[],
  servicesNote:
    "Professional services may help with specific steps — they do not replace reading official sources or obtaining qualified tax and immigration advice.",
  faq: [
    { q: "Can expats freelance in the Netherlands?", a: "Often yes depending on nationality and permit. EU citizens typically register at KvK; permit holders must verify IND rules on ind.nl before invoicing." },
    { q: "What is a ZZP'er?", a: "A ZZP'er is zelfstandige zonder personeel — self-employed without employees, usually registered as eenmanszaak at KvK." },
    { q: "Do freelancers register with KvK?", a: "Many register before substantial commercial activity and receive a KvK number for invoices and official correspondence." },
    { q: "How do freelance taxes work?", a: "Freelancers commonly manage income tax, BTW/VAT and bookkeeping — confirm thresholds and filing deadlines with Belastingdienst and an accountant." },
    { q: "Can freelancers work internationally?", a: "Yes — many serve Dutch, EU and global clients. Cross-border VAT and tax treatment need per-client review with qualified support." },
    { q: "Do freelancers pay VAT?", a: "Many charge BTW on invoices and file quarterly returns. Small-business VAT scheme may apply below thresholds — verify independently." },
    { q: "How do freelancers find clients?", a: "LinkedIn, referrals, agencies, platforms, coworking communities and professional associations are common channels in the Netherlands." },
    { q: "Is freelancing common in the Netherlands?", a: "Yes — ZZP self-employment is widespread across consulting, tech, creative and business services in major cities." },
  ],
  faqNextSteps: [
    "Confirm permit rules on ind.nl if you are not freelancing under EU free movement.",
    "Register at KvK and speak with a tax adviser before large client invoices.",
    "Build a 3–6 month buffer and compare health insurance options.",
  ],
  faqScenarios: [
    { profile: "KvK timing", scenario: "Client start date in 5 days; no registration yet", whatToCheck: "Priority KvK enrolment and accountant call this week." },
    { profile: "BTW threshold", scenario: "Expected €30k turnover year one", whatToCheck: "Small-business VAT scheme eligibility with accountant." },
    { profile: "HS migrant side project", scenario: "Weekend consulting while employed", whatToCheck: "IND FAQ and immigration lawyer before invoicing." },
    { profile: "Insurance deadline", scenario: "New arrival registering KvK", whatToCheck: "Basic health insurance within required window — compare insurers." },
  ] satisfies FreelancingScenarioRow[],
  officialSources: [
    { label: "KvK", href: "https://www.kvk.nl/", description: "Chamber of Commerce — business registration, trade names and activity codes for eenmanszaak." },
    { label: "Belastingdienst", href: "https://www.belastingdienst.nl/", description: "Dutch Tax Administration — BTW/VAT, income tax and freelancer tax information." },
    { label: "Business.gov.nl", href: "https://business.gov.nl/", description: "Practical government information on starting and running a business in the Netherlands." },
    { label: "Government.nl", href: "https://www.government.nl/", description: "Central portal for living, working and self-employment in the Netherlands." },
    { label: "IND", href: "https://ind.nl/", description: "Immigration and permit rules when self-employment affects residency — verify independently." },
    { label: "UWV", href: "https://www.uwv.nl/", description: "Employee insurance institution — orientation when transitioning from employment to ZZP." },
  ],
  officialSourcesNote:
    "Registration rules, tax thresholds and permit requirements change over time. Always verify current requirements through official resources — this page is orientation only.",
  sourceVerificationTips: [
    "KvK — business registration steps, trade names and activity codes.",
    "Belastingdienst — BTW registration, filing deadlines and income tax.",
    "Business.gov.nl — starting a business checklists and freelancer context.",
    "IND — permit types and whether self-employment is allowed on your route.",
  ],
  officialSourcesScenarios: [
    { profile: "First KvK registration", scenario: "Unsure which activity code to select", whatToCheck: "KvK online wizard and Business.gov.nl activity descriptions." },
    { profile: "BTW letter from Belastingdienst", scenario: "First quarterly filing deadline approaching", whatToCheck: "Belastingdienst Mijn Belastingdienst portal and accountant." },
    { profile: "Permit sticker — self-employed", scenario: "Residence card mentions work restrictions", whatToCheck: "IND website for document-specific work rights." },
    { profile: "Leaving employment for ZZP", scenario: "Last employment day 30 June", whatToCheck: "UWV orientation plus IND if permit tied to employer." },
  ] satisfies FreelancingScenarioRow[],
  exploreNextTips: [
    "Open expat taxes when freelance income joins employment or foreign assets in the same year.",
    "Read foreign income before scaling EU or global client contracts.",
    "Use financial advisor listings when buffers, pension gaps or insurance add complexity.",
  ],
  exploreNextCards: [
    { label: "Starting a Business", href: STARTING_BUSINESS_NETHERLANDS_PATH, status: "comingSoon", description: "Future guide for broader entrepreneurship beyond solo ZZP." },
    { label: "Expat Taxes", href: EXPAT_TAXES_NETHERLANDS_PATH, status: "live", description: "Tax orientation when freelance income joins other streams." },
    { label: "Foreign Income", href: FOREIGN_INCOME_NETHERLANDS_PATH, status: "live", description: "Cross-border income when clients sit outside the Netherlands." },
    { label: "Financial Advisors", href: FINANCIAL_ADVISORS_PATH, status: "live", description: "Buffers, pension and insurance planning for variable income." },
    { label: "Finding Clients", href: "#finding-clients", status: "live", description: "Return to client-acquisition channels and pipeline planning on this page." },
  ] satisfies FreelancingLink[],
  planningLinks: [
    { label: "Expat taxes guide", href: EXPAT_TAXES_NETHERLANDS_PATH, description: "Tax orientation when freelance income joins employment or foreign assets." },
    { label: "Foreign income guide", href: FOREIGN_INCOME_NETHERLANDS_PATH, description: "Cross-border clients and income streams outside the Netherlands." },
    { label: "Finding jobs guide", href: FINDING_JOBS_NETHERLANDS_PATH, description: "Employer routes when freelancing is a bridge while you search." },
    { label: "Financial advisors", href: FINANCIAL_ADVISORS_PATH, description: "Buffers, pension gaps and insurance for variable ZZP income." },
  ] satisfies FreelancingLink[],
} as const;

export type FreelancingNetherlandsPage = typeof freelancingNetherlandsPage;
