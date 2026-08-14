export const CONTRACTOR_VS_EMPLOYEE_NETHERLANDS_PATH = "/netherlands/jobs/contractor-vs-employee-netherlands/" as const;
export const CONTRACTOR_VS_EMPLOYEE_AFFILIATE_PLACEMENT_ID = "nl-jobs-contractor-vs-employee-support-providers" as const;

export const FREELANCING_NETHERLANDS_PATH = "/netherlands/jobs/freelancing-netherlands/" as const;
export const STARTING_CONSULTANCY_NETHERLANDS_PATH = "/netherlands/jobs/starting-consultancy-netherlands/" as const;
export const ZZP_NETHERLANDS_PATH = "/netherlands/business/zzp-netherlands/" as const;
export const EMPLOYMENT_CONTRACT_NETHERLANDS_PATH = "/netherlands/jobs/employment-contract-netherlands/" as const;
export const EMPLOYEE_RIGHTS_NETHERLANDS_PATH = "/netherlands/jobs/employee-rights-netherlands/" as const;
export const EMPLOYEE_BENEFITS_NETHERLANDS_PATH = "/netherlands/jobs/employee-benefits-netherlands/" as const;
export const FINDING_JOBS_NETHERLANDS_PATH = "/netherlands/jobs/finding-jobs-netherlands/" as const;
export const EXPAT_SALARY_NETHERLANDS_PATH = "/netherlands/jobs/expat-salary-netherlands/" as const;
export const PENSION_NETHERLANDS_EXPATS_PATH = "/netherlands/jobs/pension-netherlands-expats/" as const;
export const HSM_VISA_PATH = "/netherlands/visa/highly-skilled-migrant/" as const;
export const MOVING_HUB_PATH = "/netherlands/moving-to-the-netherlands/" as const;
export const JOBS_HUB_PATH = "/netherlands/moving/working-in-the-netherlands/" as const;
export const VISAS_HUB_PATH = "/netherlands/moving/visas-residency/" as const;
export const IMMIGRATION_LAWYERS_PATH = "/netherlands/services/immigration-lawyers/" as const;
export const TAX_ADVISORS_PATH = "/netherlands/services/tax-advisors/" as const;
export const FINANCIAL_ADVISORS_PATH = "/netherlands/services/financial-advisors/" as const;
export const ACCOUNTANTS_PATH = "/netherlands/services/accountants/" as const;
export const BUSINESS_CONSULTANTS_PATH = "/netherlands/services/business-consultants/" as const;
export const MORTGAGE_ADVISORS_PATH = "/netherlands/services/mortgage-advisors/" as const;
export const MORTGAGES_NETHERLANDS_EXPATS_PATH = "/netherlands/housing/mortgages-netherlands-expats/" as const;
export const EXPAT_TAXES_NETHERLANDS_PATH = "/netherlands/taxes/expat-taxes-netherlands/" as const;
export const FOREIGN_INCOME_NETHERLANDS_PATH = "/netherlands/taxes/foreign-income-netherlands/" as const;
export const THIRTY_PERCENT_RULING_PATH = "/netherlands/taxes/30-percent-ruling/" as const;
export const CAREER_COACHES_PATH = "/netherlands/services/career-coaches/" as const;
export const RECRUITMENT_AGENCIES_PATH = "/netherlands/services/recruitment-agencies/" as const;

export type ContractorVsEmployeeLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type ContractorVsEmployeeCard = {
  title: string;
  body: string;
};

export type ContractorVsEmployeeScenarioRow = {
  profile: string;
  scenario: string;
  whatToCheck: string;
};

export type ContractorVsEmployeeComparisonRow = {
  topic: string;
  employee: string;
  contractor: string;
};

export type ServiceCategory = {
  label: string;
  href: string;
  description: string;
  status?: "live" | "comingSoon";
};

const INFOGRAPHIC_VERSION = "premium-v2";

const visual = (name: string, alt: string, caption: string) => ({
  src: `/images/infographics/netherlands-contractor-vs-employee-${name}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const contractorVsEmployeeNetherlandsPage = {
  slug: "contractor-vs-employee-netherlands",
  path: CONTRACTOR_VS_EMPLOYEE_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2026-09-09",
  affiliatePlacementId: CONTRACTOR_VS_EMPLOYEE_AFFILIATE_PLACEMENT_ID,
  seo: {
    title: "Contractor vs Employee in the Netherlands | Expat Comparison Guide",
    description:
      "Compare working as a contractor or employee in the Netherlands, including taxes, benefits, flexibility, pensions, income stability and expat considerations.",
    keywords: [
      "contractor vs employee netherlands",
      "contractor netherlands expat",
      "employee vs freelancer netherlands",
      "independent contractor netherlands",
      "zzp vs employment netherlands",
      "contractor taxes netherlands",
      "employment vs self employment netherlands",
      "expat contractor netherlands",
      "freelance vs employee netherlands",
      "contractor benefits netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Jobs · Work structure",
    pageTitle: "Contractor vs Employee in the Netherlands",
    subtitle:
      "Compare the benefits, tradeoffs and practical differences between working as an employee and working as a contractor or ZZP'er in the Netherlands.",
    primaryCta: { label: "Compare Work Models", href: "#intro" },
    secondaryCta: { label: "Explore Work Guides", href: JOBS_HUB_PATH },
    chips: ["Income & benefits", "Tax context", "Pension gap", "Expat permits"],
    image: {
      src: "/images/heroes/netherlands-contractor-vs-employee-netherlands-hero-v2.png",
      alt: "Photorealistic split-scene editorial photo — left: international employee reviewing an employment agreement at an Amsterdam office desk with canal houses through the window; right: independent contractor working on a laptop with KvK folder and invoice at a Rotterdam coworking space with the Erasmus Bridge visible outside. Both portrayed positively as balanced work-model choices.",
    },
  },
  visuals: {
    intro: visual(
      "intro",
      "Premium infographic record-file builder on choosing employee vs contractor paths — income, benefits, tax, pension, flexibility and permit context with expat examples and a three-step orientation rail.",
      "Start here: clarify whether you are comparing offers, changing structure or planning a move to the Netherlands."
    ),
    snapshot: visual(
      "snapshot",
      "Premium at-a-glance infographic with six cards split between employee stability and contractor flexibility — salary, benefits, pension, admin, risk and permit notes.",
      "Use this snapshot before diving into section detail — exact terms still depend on your contract and permit."
    ),
    comparison: visual(
      "comparison",
      "Premium comparison bridge infographic with ten-row employee vs contractor table — income stability, flexibility, benefits, pension, taxes, administration, client control, location, career path and risk.",
      "The comparison table orients you on typical differences — model your own numbers before deciding."
    ),
    employee: visual(
      "employee",
      "Premium employment desk scene highlighting contract protections, payroll, sick leave, vakantiegeld, employer pension and HR processes for Dutch employees.",
      "Employment bundles protections and admin support — compare total package, not headline salary alone."
    ),
    contractor: visual(
      "contractor",
      "Premium contractor workspace with KvK folder, client invoice, hourly rate card and independent project timeline for ZZP professionals.",
      "Contractors trade employer buffers for rate control and client choice — plan admin and reserves explicitly."
    ),
    income: visual(
      "income",
      "Premium income planning board contrasting monthly salary with variable project revenue, buffers and effective hourly rate math for contractors.",
      "Model net income after tax reserves, non-billable time and benefit gaps — not gross day rate alone."
    ),
    benefits: visual(
      "benefits",
      "Premium benefits comparison rail — health insurance, sick pay, holiday allowance, parental leave and equipment for employee vs contractor paths.",
      "Benefits often tilt the comparison toward employment when valued at market rates."
    ),
    taxes: visual(
      "taxes",
      "Premium tax desk infographic on payroll vs self-employed filings, BTW quarters, deductible expenses and 30% ruling context for expats.",
      "Tax treatment differs by structure — confirm with Belastingdienst and qualified advisers for your mix."
    ),
    flexibility: visual(
      "flexibility",
      "Premium calendar split-scene on employee core hours and hybrid policy vs contractor client choice, project timing and remote work freedom.",
      "Flexibility trade-offs cut both ways — stability vs control depends on your priorities."
    ),
    pensions: visual(
      "pensions",
      "Premium pension consultation scene on employer accrual, voluntary ZZP savings and pension gaps when switching between routes.",
      "Pension value is easy to overlook in contractor rate comparisons — model the gap explicitly."
    ),
    expats: visual(
      "expats",
      "Premium two-track bridge infographic separating IND permit rules from employment vs contractor work rights for international professionals.",
      "Permit route may constrain structure choice — verify ind.nl before signing either path."
    ),
    mortgages: visual(
      "mortgages",
      "Premium mortgage adviser desk scene on employment contract stability vs contractor income history for Dutch lender assessments.",
      "Mortgage lenders often prefer stable employment income — plan property timing if structure may change."
    ),
    international: visual(
      "international-clients",
      "Premium map-and-bridge infographic on EU vs non-EU clients, cross-border contracts and remote work from the Netherlands as employee or contractor.",
      "International clients add tax and permit layers — structure choice interacts with client location."
    ),
    whoChooses: visual(
      "who-chooses",
      "Premium profile cards for six archetypes — risk-averse employee, portfolio freelancer, interim specialist, parent seeking flexibility, career switcher and mortgage planner.",
      "There is no single right answer — match structure to income needs, permit and life stage."
    ),
    prosCons: visual(
      "pros-cons",
      "Premium balance-scale infographic pairing employee and contractor advantages and challenges across income, admin, benefits and risk.",
      "Honest pros and cons framing supports balanced decisions between offers."
    ),
    mistakes: visual(
      "mistakes",
      "Premium mistake board with eight common contractor-vs-employee pitfalls — rate math, classification, pension, permits, tax reserves and mortgage assumptions.",
      "Most costly mistakes come from comparing headline numbers without total package context."
    ),
    selfAssessment: visual(
      "self-assessment",
      "Premium eight-question self-assessment checklist on income stability, benefits value, admin capacity, permit fit, pension, mortgage plans and client mix.",
      "Work through these questions before accepting an offer or registering as contractor."
    ),
    questions: visual(
      "questions",
      "Premium eight-card Q&A infographic answering common expat questions on contractor vs employee choice, tax, permits, benefits and pensions.",
      "Use these as conversation starters with HR, accountants and official sources."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium numbered route-map linking contractor comparison to freelancing, ZZP, employment contract, employee rights, expat taxes and financial advisors.",
      "Suggested order: employment contract → employee rights → ZZP when leaning contractor."
    ),
    services: visual(
      "services",
      "Premium provider map showing when financial advisers, accountants, tax advisers, mortgage advisers and business consultants may help during structure decisions.",
      "Use professionals for scoped review alongside official sources."
    ),
    faq: visual(
      "faq",
      "Premium FAQ accordion board with eight contractor-vs-employee questions and short orientation answers.",
      "FAQ answers orient you — confirm contract-specific details independently."
    ),
    officialSources: visual(
      "official-sources",
      "Premium Netherlands map pinning KvK, Belastingdienst, Government.nl, Business.gov.nl and IND with what to verify where.",
      "Bookmark official sources before changing work structure or registering a business."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium canal-route journey infographic with five next-step guides — freelancing, ZZP, employment contract, expat taxes and financial advisors.",
      "Pick your next guide based on which route you are leaning toward."
    ),
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#comparison", label: "Comparison" },
    { href: "#employee", label: "Employee" },
    { href: "#contractor", label: "Contractor" },
    { href: "#income", label: "Income" },
    { href: "#benefits", label: "Benefits" },
    { href: "#taxes", label: "Taxes" },
    { href: "#flexibility", label: "Flexibility" },
    { href: "#pensions", label: "Pensions" },
    { href: "#expats", label: "Expats" },
    { href: "#mortgages", label: "Mortgages" },
    { href: "#international", label: "International" },
    { href: "#who-chooses", label: "Who chooses" },
    { href: "#pros-cons", label: "Pros & cons" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#self-assessment", label: "Self-check" },
    { href: "#questions", label: "Questions" },
    { href: "#related-guides", label: "Guides" },
    { href: "#services", label: "Services" },
    { href: "#faq", label: "FAQ" },
    { href: "#official-sources", label: "Sources" },
    { href: "#explore-next", label: "Explore next" },
  ],
  intro: {
    heading: "Employee or Contractor: Which Is Right for You?",
    paragraphs: [
      "International professionals in the Netherlands often face the same question: accept a salaried employment contract or work as an independent contractor — frequently through ZZP self-employment. Both paths are common in tech, consulting, creative services and interim management.",
      "The choice affects monthly cash flow, benefit access, tax administration, pension building, mortgage eligibility and how much control you have over clients and schedule. Many expats compare a contractor day rate with an employment salary without modelling the full picture.",
      "This guide offers a balanced comparison of typical patterns in the Netherlands. Your contract, permit, sector and client mix still determine exact terms — use official sources and qualified professionals to confirm your situation.",
    ],
    keyPoints: [
      { title: "Employment bundles protections", body: "Example: €5,800/month role with employer pension, sick pay and vakantiegeld — compare total value, not contractor hourly rate alone." },
      { title: "Contractors gain flexibility", body: "Example: €95/hour ZZP consultant choosing clients and project length — plan tax reserves, pension gap and slow months." },
      { title: "Classification matters", body: "Example: full-time work for one client via invoice — may resemble employment; verify independently before assuming contractor status." },
      { title: "Permits can constrain choice", body: "Example: highly skilled migrant on sponsored employment — side or full contractor work may need separate IND clearance." },
    ] satisfies ContractorVsEmployeeCard[],
    scenarios: [
      { profile: "Data engineer — Amsterdam", scenario: "€90/hour contractor vs €6,200/month employment with pension", whatToCheck: "Model 12-month net including pension, vakantiegeld, sick pay and admin time." },
      { profile: "Designer — agency offer", scenario: "Recruiter presents ZZP contract for otherwise employee-like role", whatToCheck: "Classification risk and employment contract guide for comparison." },
      { profile: "Consultant — EU clients", scenario: "Considering ZZP while employed at sponsor company", whatToCheck: "IND rules on additional activity plus employment contract clauses." },
      { profile: "Parent — flexibility priority", scenario: "Prefers contractor hours around school schedule", whatToCheck: "Buffer for unpaid gaps, health insurance and pension without employer accrual." },
    ] satisfies ContractorVsEmployeeScenarioRow[],
  },
  introPlanningSteps: [
    "List what you value — stable income, benefits, flexibility, pension, mortgage timing or international clients.",
    "Gather both offers in writing: employment package breakdown and contractor rate with expected billable hours.",
    "Bookmark KvK, Belastingdienst and ind.nl if permit or registration may apply.",
  ],
  snapshotCards: [
    { label: "Employee · Income", value: "Monthly salary", note: "Predictable payroll with holiday allowance and structured pay cycles." },
    { label: "Employee · Benefits", value: "Employer package", note: "Sick pay, pension contributions and paid leave commonly included." },
    { label: "Employee · Admin", value: "Low personal", note: "Employer handles payroll, tax withholding and much HR administration." },
    { label: "Contractor · Income", value: "Variable", note: "Project rates and client pipelines — buffers needed between engagements." },
    { label: "Contractor · Flexibility", value: "High control", note: "Choose clients, projects and schedule within contract and permit limits." },
    { label: "Contractor · Risk", value: "Self-managed", note: "Tax, BTW, insurance, pension and classification risk sit with you." },
  ],
  snapshotNextSteps: [
    "Run a total-compensation comparison using the comparison table below.",
    "Check permit rules on ind.nl before accepting contractor work.",
    "Speak with a tax adviser if cross-border clients or 30% ruling context applies.",
  ],
  snapshotComparisonHeading: "Four topics expats compare first",
  snapshotComparisonParagraphs: [
    "Before diving into all ten comparison rows, most expats start with income stability, benefits, pension and administration — the areas that most often change total compensation.",
  ],
  comparisonUseTips: [
    "Use the table to structure HR and accountant conversations — not as a final decision tool.",
    "Add pension, vakantiegeld and sick-pay value when comparing employment salary to contractor rates.",
    "Flag single-client contractor engagements for classification review before signing.",
    "Revisit the table if your permit, mortgage timeline or client mix changes.",
  ],
  comparisonHeading: "Employee vs Contractor — Quick Comparison",
  comparisonParagraphs: [
    "This table summarises typical differences international professionals see in the Netherlands. Exact terms depend on your contract, CAO, client mix and permit — use it to structure conversations, not as a substitute for personalised review.",
  ],
  comparisonTable: [
    { topic: "Income Stability", employee: "Monthly salary with predictable pay cycles and employer payroll", contractor: "Project-based income — gaps between clients are common" },
    { topic: "Flexibility", employee: "Contracted hours, employer direction and hybrid policies", contractor: "Greater control over clients, projects and schedule" },
    { topic: "Benefits", employee: "Sick pay, paid holiday and employer benefits often included", contractor: "No employer sick pay or paid leave by default" },
    { topic: "Pension", employee: "Employer pension contributions common in many sectors", contractor: "Voluntary pension savings — no automatic employer accrual" },
    { topic: "Taxes", employee: "Payroll tax withheld by employer; annual return may still apply", contractor: "Income tax, BTW filings and bookkeeping typically self-managed" },
    { topic: "Administration", employee: "Low — HR and payroll handle most compliance", contractor: "KvK registration, invoices, contracts and quarterly BTW" },
    { topic: "Client Control", employee: "Work for employer clients and internal teams", contractor: "Select and negotiate with multiple clients directly" },
    { topic: "Work Location", employee: "Hybrid and office policies set by employer", contractor: "Often remote-friendly — confirm contract and permit rules" },
    { topic: "Career Path", employee: "Promotion ladders, training and internal mobility", contractor: "Portfolio career across clients and sectors" },
    { topic: "Risk Level", employee: "Employer carries much employment and payroll risk", contractor: "Business, classification and client payment risk on you" },
  ] satisfies ContractorVsEmployeeComparisonRow[],
  comparisonScenarios: [
    { profile: "Rate vs package", scenario: "€85/hour contractor vs €5,500/month employment", whatToCheck: "Add pension, vakantiegeld, sick pay value and accountant fees to compare fairly." },
    { profile: "Interim specialist", scenario: "6-month contractor extension at same employer", whatToCheck: "Classification if engagement resembles permanent employment." },
    { profile: "Dual offers — tech", scenario: "Startup employment vs agency ZZP placement", whatToCheck: "Equity, pension, notice and IND permit implications on each path." },
    { profile: "Mortgage in 2 years", scenario: "Choosing contractor now for higher headline rate", whatToCheck: "Lender preference for employment history — mortgage guide and adviser." },
  ] satisfies ContractorVsEmployeeScenarioRow[],
  employeeHeading: "Working as an Employee in the Netherlands",
  employeeParagraphs: [
    "Employment in the Netherlands typically means a written contract, payroll processing, employer pension contributions in many sectors, paid vacation, sick leave processes and HR support for workplace matters.",
    "For expats, employment is often the default route on highly skilled migrant permits, intra-EU moves and roles with multinational employers. Protections and predictable income appeal when family stability or mortgage plans matter.",
  ],
  employeePoints: [
    "Written contract — salary, hours, notice, proeftijd and benefits spelled out",
    "Payroll — employer withholds wage tax and social contributions",
    "Sick leave — HR process and occupational health involvement when ill",
    "Holiday — paid vacation days and vakantiegeld commonly separate from base salary",
    "Pension — employer schemes common; accrual linked to employment",
  ],
  employeeCards: [
    { title: "Predictable cash flow", body: "Example: monthly €5,800 gross with vakantiegeld in May — easier budgeting for rent and family costs." },
    { title: "Workplace rights", body: "Example: parental leave, anti-discrimination protections and sick pay per Dutch employment standards." },
    { title: "Employer investment", body: "Example: training budget, equipment and internal career paths at larger employers." },
    { title: "Permit alignment", body: "Example: HSM route tied to sponsoring employer — straightforward for sponsored roles." },
  ] satisfies ContractorVsEmployeeCard[],
  employeeChecklist: [
    "Read employment contract guide before signing — notice, proeftijd and benefits.",
    "Confirm vakantiegeld, pension and hybrid policy in writing.",
    "Compare gross salary with net after payroll tax using official calculators.",
    "Review employee rights guide for leave, sick pay and workplace standards.",
  ],
  employeeGuideLinks: [
    { label: "Employment contract Netherlands", href: EMPLOYMENT_CONTRACT_NETHERLANDS_PATH, status: "live", description: "Contract types, clauses and signing checklist for Dutch employment." },
    { label: "Employee rights Netherlands", href: EMPLOYEE_RIGHTS_NETHERLANDS_PATH, status: "live", description: "Leave, sick pay, discrimination protections and HR processes." },
    { label: "Employee benefits Netherlands", href: EMPLOYEE_BENEFITS_NETHERLANDS_PATH, status: "live", description: "Pension, insurance and perks beyond base salary." },
    { label: "Expat salary Netherlands", href: EXPAT_SALARY_NETHERLANDS_PATH, status: "live", description: "Salary norms and negotiation context for international hires." },
  ] satisfies ContractorVsEmployeeLink[],
  employeeScenarios: [
    { profile: "First Dutch job — HR manager", scenario: "Permanent contract €62k with 25 vacation days", whatToCheck: "Contract articles, pension scheme and hybrid policy before signing." },
    { profile: "HSM transfer", scenario: "Moves from UK employer to Amsterdam sponsor", whatToCheck: "IND salary threshold, contract start date and permit timing." },
    { profile: "Part-time return — parent", scenario: "0.8 FTE after parental leave", whatToCheck: "Pro-rata benefits, pension accrual and vacation days." },
    { profile: "Scale-up offer", scenario: "Lower base but equity and learning budget", whatToCheck: "Total package vs contractor rate including risk and liquidity." },
  ] satisfies ContractorVsEmployeeScenarioRow[],
  contractorHeading: "Working as a Contractor in the Netherlands",
  contractorParagraphs: [
    "Contractors in the Netherlands often operate as ZZP freelancers — registered at KvK, invoicing clients, managing BTW and building their own client pipeline. Agencies and platforms also place contractors on interim assignments.",
    "Higher headline rates can appeal when you have in-demand skills, multiple client options and tolerance for variable income. Admin, tax planning and classification risk are part of the trade-off.",
  ],
  contractorPoints: [
    "KvK registration — business number before substantial commercial activity",
    "Client invoicing — hourly or project rates, payment terms and scope in writing",
    "BTW and income tax — quarterly VAT and annual filings typically self-managed",
    "Classification — long-term single-client work may resemble employment",
    "Buffers — tax reserves, sick periods and pension without employer support",
  ],
  contractorCards: [
    { title: "Rate control", body: "Example: senior consultant negotiates €110/hour ex BTW with two anchor clients." },
    { title: "Client choice", body: "Example: developer mixes Dutch startup and EU remote clients from Utrecht." },
    { title: "Project variety", body: "Example: interim CFO takes 3–9 month engagements across sectors." },
    { title: "Portfolio career", body: "Example: designer combines retainer clients with short campaign projects." },
  ] satisfies ContractorVsEmployeeCard[],
  contractorChecklist: [
    "Register at KvK before large client invoices if operating as ZZP.",
    "Open dedicated banking and invoice templates with KvK and BTW details.",
    "Model effective hourly income after non-billable admin and tax reserves.",
    "Read ZZP and freelancing guides for registration, tax and permit context.",
  ],
  contractorGuideLinks: [
    { label: "ZZP Netherlands", href: ZZP_NETHERLANDS_PATH, status: "live", description: "Dutch ZZP registration, taxes, invoicing and expat context." },
    { label: "Freelancing Netherlands", href: FREELANCING_NETHERLANDS_PATH, status: "live", description: "Broader freelance orientation including clients, cities and financial planning." },
    { label: "Employment contract Netherlands", href: EMPLOYMENT_CONTRACT_NETHERLANDS_PATH, status: "live", description: "Compare contractor agreements with employment contracts." },
    { label: "Expat taxes Netherlands", href: EXPAT_TAXES_NETHERLANDS_PATH, status: "live", description: "Tax context when contractor income joins other streams." },
  ] satisfies ContractorVsEmployeeLink[],
  contractorScenarios: [
    { profile: "Agency placement — developer", scenario: "12-month ZZP via recruiter at €88/hour", whatToCheck: "Fee structure, classification and exclusivity clauses." },
    { profile: "Former employer as client", scenario: "Leaves team to invoice same company as contractor", whatToCheck: "Classification, IND if permit tied to employer, contract scope." },
    { profile: "First ZZP year — consultant", scenario: "Two Dutch clients and one German B2B client", whatToCheck: "KvK, BTW per client country and accountant onboarding." },
    { profile: "Platform freelancer", scenario: "Mixes platform gigs and direct clients", whatToCheck: "Effective rate after platform fees and tax set-aside." },
  ] satisfies ContractorVsEmployeeScenarioRow[],
  incomeHeading: "Income Stability and Cash Flow",
  incomeParagraphs: [
    "Employment income arrives on predictable payroll cycles with holiday allowance often paid separately. Contractors experience peaks when projects run and gaps when pipelines slow — buffers matter.",
    "A contractor day rate can look attractive until you subtract non-billable sales time, BTW and income tax reserves, accountant fees and the value of employer benefits you must self-fund.",
  ],
  incomePoints: [
    "Employment — monthly gross with vakantiegeld commonly 8% on top of base",
    "Contractor — revenue minus tax, expenses and unpaid gaps between projects",
    "Billable hours — often 50–70% of calendar time for solo contractors",
    "Comparison mistake — equating €90/hour with €90 × 160 hours/month gross employment",
  ],
  incomeCards: [
    { title: "Employment stability", body: "Example: fixed monthly pay supports rent, school fees and mortgage applications." },
    { title: "Contractor peaks and gaps", body: "Example: strong Q1 and Q3; quiet summer — plan 3–6 month expense buffer." },
    { title: "Effective rate math", body: "Example: €100/hour × 24 billable hours/month ≠ €4,000 net take-home." },
    { title: "Mixed paths", body: "Example: employment Jan–Jun then contractor Jul–Dec — combined tax year planning." },
  ] satisfies ContractorVsEmployeeCard[],
  incomeGuideLinks: [
    { label: "Financial advisors", href: FINANCIAL_ADVISORS_PATH, status: "live", description: "Buffers and cash-flow planning when income becomes variable." },
    { label: "Employment contract Netherlands", href: EMPLOYMENT_CONTRACT_NETHERLANDS_PATH, status: "live", description: "Salary, bonus and vakantiegeld clauses on the employment path." },
  ] satisfies ContractorVsEmployeeLink[],
  incomeChecklist: [
    "List monthly fixed costs before comparing offers.",
    "For contractors: track one month of billable vs admin hours.",
    "Set aside tax and BTW percentage on each invoice payment.",
    "Include pension and benefit value in employment package total.",
  ],
  incomeScenarios: [
    { profile: "Rate negotiation", scenario: "Client offers €75/hour net without BTW clarity", whatToCheck: "Clarify ex/incl BTW and payment terms in writing." },
    { profile: "Slow pipeline", scenario: "Contractor — 8 weeks between projects", whatToCheck: "Buffer usage and whether employment would reduce stress." },
    { profile: "Bonus vs project windfall", scenario: "Employment bonus vs contractor large milestone payment", whatToCheck: "Tax treatment and timing — accountant orientation." },
    { profile: "Part-time contractor", scenario: "0.5 FTE equivalent billable hours alongside family", whatToCheck: "Minimum viable rate with lower hours and fixed costs." },
  ] satisfies ContractorVsEmployeeScenarioRow[],
  benefitsHeading: "Benefits and Protections",
  benefitsParagraphs: [
    "Dutch employees commonly receive paid vacation, sick leave processes, employer pension contributions and sometimes extras such as training budgets or equipment stipends. Contractors must arrange their own coverage and unpaid leave between projects.",
    "Mandatory basic health insurance applies to all residents — the difference is who structures ancillary benefits and income protection during illness.",
  ],
  benefitsPoints: [
    "Sick pay — employment HR process vs contractor savings or AOV insurance",
    "Paid holiday — employee vacation days vs unpaid contractor gaps",
    "Parental leave — employment entitlements vs self-funded time away",
    "Equipment — employer stipends vs deductible business purchases with rules",
    "Insurance — basic health mandatory; disability cover optional for contractors",
  ],
  benefitsCards: [
    { title: "Sick leave value", body: "Example: employee sick process vs contractor 6 weeks no client work — savings buffer critical." },
    { title: "Holiday allowance", body: "Example: vakantiegeld on employment — contractors build unpaid leave into rates." },
    { title: "Pension as benefit", body: "Example: employer 6% pension match — add to employment total when comparing rates." },
    { title: "Training budget", body: "Example: €2k annual L&D on employment — contractor funds own upskilling." },
  ] satisfies ContractorVsEmployeeCard[],
  benefitsChecklist: [
    "List benefits on employment offer letter vs market cost to self-fund.",
    "Compare health insurance and aanvullende options as resident.",
    "Ask about employer pension match percentage and accrual rules.",
    "For contractors: explore AOV/disability insurance with financial adviser.",
  ],
  benefitsGuideLinks: [
    { label: "Employee benefits Netherlands", href: EMPLOYEE_BENEFITS_NETHERLANDS_PATH, status: "live", description: "Typical perks and insurance beyond base salary." },
    { label: "Employee rights Netherlands", href: EMPLOYEE_RIGHTS_NETHERLANDS_PATH, status: "live", description: "Sick leave, leave entitlements and workplace protections." },
    { label: "Pension Netherlands expats", href: PENSION_NETHERLANDS_EXPATS_PATH, status: "live", description: "Employer pension context and gaps on contractor routes." },
  ] satisfies ContractorVsEmployeeLink[],
  benefitsScenarios: [
    { profile: "Illness — contractor", scenario: "Broken wrist; 10 weeks no billable work", whatToCheck: "Savings buffer; AOV for future — no employer sick pay." },
    { profile: "Family planning", scenario: "Parental leave on employment vs contractor pause", whatToCheck: "Employer top-up clauses and contractor buffer planning." },
    { profile: "Equipment needs", scenario: "Laptop and phone for remote work", whatToCheck: "Employer stipend vs contractor deductible purchase rules." },
    { profile: "Insurance switch", scenario: "Leaving employment to ZZP mid-year", whatToCheck: "Pick mandatory basic insurer within required window." },
  ] satisfies ContractorVsEmployeeScenarioRow[],
  taxesHeading: "Tax Considerations by Structure",
  taxesParagraphs: [
    "Employees see wage tax withheld through payroll; annual income tax returns may still apply for deductions or foreign income. Contractors manage income tax, BTW quarterly filings and deductible business expenses with accountant support.",
    "Expats with 30% ruling history, foreign assets or cross-border clients should treat structure choice as part of broader tax planning — not an isolated rate comparison.",
  ],
  taxesPoints: [
    "Employment — payroll withholding; jaaropgave from employer",
    "Contractor — profit-based income tax; kleineondernemersregeling may apply for BTW",
    "Deductibles — contractors claim business expenses with Belastingdienst rules",
    "30% ruling — primarily employment context; verify applicability before assuming on ZZP",
    "Mixed year — employment plus contractor income in same tax year needs coordination",
  ],
  taxesChecklist: [
    "Ask tax adviser how structure affects your expat tax position.",
    "Contractors: set monthly BTW and income tax reserve transfers.",
    "Confirm cross-border client VAT treatment before invoicing internationally.",
    "Keep receipts and contracts from day one on contractor path.",
  ],
  taxesCards: [
    { title: "Payroll withholding", body: "Example: employee sees loonheffing on payslip — employer remits; annual return may still apply for deductions." },
    { title: "Contractor BTW quarters", body: "Example: invoice €10,000 ex BTW in Q1 — set aside BTW and income tax before spending revenue." },
    { title: "30% ruling context", body: "Example: ruled employment income differs from ZZP assumptions — verify before switching structure." },
    { title: "Mixed tax year", body: "Example: employment Jan–Jun then contractor Jul–Dec — combined annual planning with accountant." },
  ] satisfies ContractorVsEmployeeCard[],
  taxesGuideLinks: [
    { label: "Expat taxes Netherlands", href: EXPAT_TAXES_NETHERLANDS_PATH, status: "live", description: "Broader expat tax orientation across income types." },
    { label: "Foreign income Netherlands", href: FOREIGN_INCOME_NETHERLANDS_PATH, status: "live", description: "Cross-border clients and assets affecting tax planning." },
    { label: "30% ruling", href: THIRTY_PERCENT_RULING_PATH, status: "live", description: "Ruling context when comparing employment and contractor routes." },
    { label: "Tax advisors", href: TAX_ADVISORS_PATH, status: "live", description: "Professional support for structure and filing questions." },
  ] satisfies ContractorVsEmployeeLink[],
  taxesScenarios: [
    { profile: "First ZZP year", scenario: "Former employee starts contracting mid-year", whatToCheck: "Combined annual return and pro-rata BTW quarters." },
    { profile: "30% ruling — switch", scenario: "Considering contractor after ruled employment", whatToCheck: "Tax adviser on ruling eligibility with self-employment income." },
    { profile: "EU B2B client", scenario: "Contractor invoices German company", whatToCheck: "Reverse charge VAT wording with accountant." },
    { profile: "Home office", scenario: "Wants to deduct rent portion as contractor", whatToCheck: "Belastingdienst workspace rules — accountant calculation." },
  ] satisfies ContractorVsEmployeeScenarioRow[],
  flexibilityHeading: "Flexibility and Work Control",
  flexibilityParagraphs: [
    "Contractors typically choose clients, project length and daily schedule within contract limits. Employees follow employer hours, hybrid policies and team expectations — though Dutch employers increasingly offer hybrid flexibility.",
    "Flexibility cuts both ways: contractors gain autonomy but carry pipeline risk; employees gain stability but less client choice.",
  ],
  flexibilityPoints: [
    "Contractor — negotiate project scope, location and meeting cadence per client",
    "Employee — core hours, office days and approval for extended remote abroad",
    "Interim contractors — fixed engagement end dates vs open-ended employment",
    "Side projects — employment contracts may restrict moonlighting",
  ],
  flexibilityCards: [
    { title: "Schedule control", body: "Example: contractor blocks mornings for family; employees align to team core hours." },
    { title: "Client selection", body: "Example: consultant declines sector misaligned with values — harder as employee." },
    { title: "Remote abroad", body: "Example: December work-from-home-country — employee needs HR approval; contractor checks permit and tax." },
    { title: "Project boundaries", body: "Example: contractor ends engagement at contract date — employee notice periods apply." },
  ] satisfies ContractorVsEmployeeCard[],
  flexibilityGuideLinks: [
    { label: "Employment contract Netherlands", href: EMPLOYMENT_CONTRACT_NETHERLANDS_PATH, status: "live", description: "Hybrid, hours and moonlighting clauses when flexibility is a priority." },
    { label: "Freelancing Netherlands", href: FREELANCING_NETHERLANDS_PATH, status: "live", description: "Client choice and schedule control on the contractor path." },
  ] satisfies ContractorVsEmployeeLink[],
  flexibilityChecklist: [
    "Get hybrid and remote-abroad rules in writing on employment offers.",
    "Contractors: define scope and change-order process in each client contract.",
    "Confirm permit allows work location if travelling while billing clients.",
    "Weigh flexibility against income stability for your life stage.",
  ],
  flexibilityScenarios: [
    { profile: "School-hours parent", scenario: "Prefers contractor afternoons-only availability", whatToCheck: "Rate high enough for reduced billable hours and gaps." },
    { profile: "Travel-heavy role", scenario: "Employment requires 2 days office in Randstad", whatToCheck: "Commute cost vs contractor remote from smaller city." },
    { profile: "Portfolio builder", scenario: "Wants multiple short clients per year", whatToCheck: "Contractor path fits; employment may limit side activity." },
    { profile: "Stability seeker", scenario: "Prefers predictable team and manager", whatToCheck: "Employment may outweigh contractor rate premium." },
  ] satisfies ContractorVsEmployeeScenarioRow[],
  pensionsHeading: "Pension and Long-Term Savings",
  pensionsParagraphs: [
    "Many Dutch employers contribute to pension schemes — a significant part of total compensation that contractors must replace voluntarily. Pension gaps compound over decades and are easy to miss in headline rate comparisons.",
    "Contractors explore voluntary pension products, investments and financial adviser support. Employees should still read pension scheme documents to understand accrual, portability and partner benefits.",
  ],
  pensionsPoints: [
    "Employer pension — common in many sectors; accrual tied to employment",
    "ZZP pension — voluntary contributions without employer match",
    "Portability — expats may have pensions abroad — coordinate planning",
    "Rate comparison — add pension gap euros to contractor cost model",
    "Mortgage link — pension assets may affect long-term planning conversations",
  ],
  pensionsChecklist: [
    "Request employer pension scheme summary before signing employment.",
    "Model contractor pension gap vs last employment package.",
    "Ask financial adviser about voluntary products for ZZP income.",
    "Read pension for expats guide for cross-border context.",
  ],
  pensionsCards: [
    { title: "Employer accrual", body: "Example: 6% employer pension on €5,800/month — add to employment total when comparing contractor rate." },
    { title: "ZZP voluntary savings", body: "Example: contractor sets €400/month to pension product — price into effective hourly rate." },
    { title: "Portability", body: "Example: UK pension pot plus Dutch employment — cross-border adviser for consolidation questions." },
    { title: "Mortgage link", body: "Example: lender may ask about pension assets — structure choice affects long-term planning narrative." },
  ] satisfies ContractorVsEmployeeCard[],
  pensionsGuideLinks: [
    { label: "Pension Netherlands expats", href: PENSION_NETHERLANDS_EXPATS_PATH, status: "live", description: "Employer schemes, gaps and expat pension planning." },
    { label: "Financial advisors", href: FINANCIAL_ADVISORS_PATH, status: "live", description: "Long-term savings when structure affects pension building." },
    { label: "Employee benefits Netherlands", href: EMPLOYEE_BENEFITS_NETHERLANDS_PATH, status: "live", description: "Pension as part of wider benefits package." },
  ] satisfies ContractorVsEmployeeLink[],
  pensionsScenarios: [
    { profile: "Age 40 — switch", scenario: "Leaving corporate pension to ZZP", whatToCheck: "Voluntary pension vs investments; rate adjustment for gap." },
    { profile: "Young professional", scenario: "Ignores pension on first contractor year", whatToCheck: "Start small voluntary contributions early — compounding matters." },
    { profile: "EU pension abroad", scenario: "Contractor in NL with UK pension pot", whatToCheck: "Cross-border adviser on consolidation and tax." },
    { profile: "Near retirement", scenario: "Short contractor contract before retirement", whatToCheck: "Accrual limits and AOW timing — financial adviser scope." },
  ] satisfies ContractorVsEmployeeScenarioRow[],
  expatsHeading: "Expat and Permit Considerations",
  expatsParagraphs: [
    "Nationality and residence permit type often shape whether employment or contractor work is practical. EU citizens generally have broader self-employment access subject to registration. Highly skilled migrants and other permit holders may be tied to sponsoring employers.",
    "IND rules and KvK registration are separate planning tracks — verify ind.nl before invoicing clients or changing structure.",
  ],
  expatsPoints: [
    "EU/EEA/Swiss — broader work and self-employment access with registration",
    "Highly skilled migrant — employment tied to sponsor; contractor side work often restricted",
    "Self-employment permit — separate entrepreneur route on ind.nl",
    "Partner permits — work rights vary by residence document",
    "Structure change — employment to contractor may affect permit validity",
  ],
  expatsChecklist: [
    "Read ind.nl for your permit type before accepting contractor work.",
    "Do not assume employment permit covers freelance invoicing.",
    "Consult immigration lawyer for route changes — not general forums.",
    "Keep sponsor HR informed if contract restricts additional activity.",
  ],
  expatsCards: [
    { title: "EU free movement", body: "Example: EU consultant registers KvK after BSN — broader self-employment access with registration." },
    { title: "Highly skilled migrant", body: "Example: sponsored employment at scale-up — side ZZP often needs IND clearance first." },
    { title: "Self-employment route", body: "Example: entrepreneur permit separate from employment sponsor — verify on ind.nl." },
    { title: "Structure change", body: "Example: leaving sponsor to freelance — IND timing before last employment day critical." },
  ] satisfies ContractorVsEmployeeCard[],
  expatsGuideLinks: [
    { label: "Highly skilled migrant visa", href: HSM_VISA_PATH, status: "live", description: "Sponsored employment route and salary thresholds." },
    { label: "Visas & residency hub", href: VISAS_HUB_PATH, status: "live", description: "Broader permit orientation for international residents." },
    { label: "Immigration lawyers", href: IMMIGRATION_LAWYERS_PATH, status: "live", description: "Professional support when permits intersect with work structure." },
    { label: "ZZP Netherlands", href: ZZP_NETHERLANDS_PATH, status: "live", description: "Registration and permit context for self-employment." },
  ] satisfies ContractorVsEmployeeLink[],
  expatsScenarios: [
    { profile: "HSM — side project", scenario: "Weekend consulting while on sponsored job", whatToCheck: "IND rules and employment moonlighting clause." },
    { profile: "EU consultant — relocation", scenario: "Moves to NL and registers KvK immediately", whatToCheck: "BSN, address registration and tax residency shift." },
    { profile: "Permit change", scenario: "Leaving sponsor to freelance full time", whatToCheck: "IND timing before last employment day and KvK start." },
    { profile: "Partner permit", scenario: "Work rights on family reunification card", whatToCheck: "Sticker text on residence document and ind.nl FAQ." },
  ] satisfies ContractorVsEmployeeScenarioRow[],
  mortgagesHeading: "Mortgages and Property Planning",
  mortgagesParagraphs: [
    "Dutch mortgage lenders often prefer stable employment income with contract history. Contractor income may require longer track records, higher buffers or specialist expat mortgage advisers.",
    "If buying property within a few years, structure choice and income documentation matter early — not only when you submit a mortgage application.",
  ],
  mortgagesPoints: [
    "Employment — payslips and permanent contract strengthen applications",
    "Contractor — lenders may want 2–3 years income history or averages",
    "ZZP volatility — buffers and adviser narrative help lender assessment",
    "Permit expiry — mortgage capacity may link to residence validity",
    "Joint applications — partner income and structure mix affect outcomes",
  ],
  mortgagesChecklist: [
    "Discuss timeline with mortgage adviser before choosing contractor path.",
    "Keep tax returns and accountant statements organised if self-employed.",
    "Model whether employment short term supports property goals.",
    "Read mortgages for expats guide for lender context.",
  ],
  mortgagesCards: [
    { title: "Employment payslips", body: "Example: permanent contract plus 3 months payslips — common lender starting point." },
    { title: "ZZP income history", body: "Example: 2–3 years averaged ZZP profit — accountant statement supports application." },
    { title: "Volatility buffer", body: "Example: lender may haircut variable contractor income — adviser explains narrative." },
    { title: "Permit length", body: "Example: residence valid 3+ years — some lenders link mortgage capacity to permit expiry." },
  ] satisfies ContractorVsEmployeeCard[],
  mortgagesGuideLinks: [
    { label: "Mortgages Netherlands expats", href: MORTGAGES_NETHERLANDS_EXPATS_PATH, status: "live", description: "How employment stability affects borrowing conversations." },
    { label: "Mortgage advisors", href: MORTGAGE_ADVISORS_PATH, status: "live", description: "Expat mortgage specialists for contractor income cases." },
    { label: "Financial advisors", href: FINANCIAL_ADVISORS_PATH, status: "live", description: "Property timing alongside structure and savings planning." },
  ] satisfies ContractorVsEmployeeLink[],
  mortgagesScenarios: [
    { profile: "Buying in 18 months", scenario: "Contractor now vs employment offer", whatToCheck: "Lender view of ZZP history — employment may help short term." },
    { profile: "Two-year ZZP track", scenario: "Established contractor applying for mortgage", whatToCheck: "Average income documentation with mortgage adviser." },
    { profile: "Couple — mixed", scenario: "Employee partner plus contractor applicant", whatToCheck: "Combined assessment and permit validity." },
    { profile: "Permit renewal", scenario: "Mortgage while residence expires in 2 years", whatToCheck: "Lender policy on permit length — adviser guidance." },
  ] satisfies ContractorVsEmployeeScenarioRow[],
  internationalHeading: "International Clients and Cross-Border Work",
  internationalParagraphs: [
    "Many Netherlands-based professionals serve EU and global clients whether employed or contracting. Client location affects VAT, contract law, currency and sometimes permit rules for work performed abroad.",
    "Contractors invoicing internationally need per-client BTW review. Employees working abroad even temporarily may need employer and tax clearance.",
  ],
  internationalPoints: [
    "EU B2B — reverse charge VAT common for contractors with valid client VAT IDs",
    "Non-EU clients — export and service rules vary by activity and residency",
    "Currency — EUR standard locally; FX planning for USD/GBP contracts",
    "Remote abroad — employee HR approval vs contractor permit and tax caution",
    "IP and contracts — explicit clauses for cross-border engagements",
  ],
  internationalChecklist: [
    "Validate EU client VAT numbers before zero-rating BTW on invoices.",
    "Define governing law and dispute resolution in large contracts.",
    "Confirm tax residency if clients and work locations multiply.",
    "Read foreign income guide when scaling international revenue.",
  ],
  internationalCards: [
    { title: "EU B2B reverse charge", body: "Example: contractor invoices German agency — reverse charge VAT with valid client VAT ID." },
    { title: "Non-EU USD client", body: "Example: US SaaS client paying USD — FX buffer and tax residency review with accountant." },
    { title: "Employee abroad December", body: "Example: hybrid employee wants family visit work — HR approval for tax and permit context." },
    { title: "Multi-country mix", body: "Example: NL, BE and UK clients — separate invoice templates and VAT treatment per client." },
  ] satisfies ContractorVsEmployeeCard[],
  internationalGuideLinks: [
    { label: "Foreign income Netherlands", href: FOREIGN_INCOME_NETHERLANDS_PATH, status: "live", description: "Cross-border income when clients sit outside the Netherlands." },
    { label: "Freelancing Netherlands", href: FREELANCING_NETHERLANDS_PATH, status: "live", description: "International client invoicing and remote work context." },
    { label: "Expat taxes Netherlands", href: EXPAT_TAXES_NETHERLANDS_PATH, status: "live", description: "Tax residency and multi-stream income planning." },
  ] satisfies ContractorVsEmployeeLink[],
  internationalScenarios: [
    { profile: "German B2B client", scenario: "Contractor invoices Berlin agency monthly", whatToCheck: "Reverse charge VAT and contract payment terms." },
    { profile: "US SaaS client", scenario: "USD hourly contract from Amsterdam base", whatToCheck: "Tax residency, BTW and FX buffer with accountant." },
    { profile: "Employee — work abroad December", scenario: "Wants holidays at family home while employed", whatToCheck: "HR approval for tax and permit implications." },
    { profile: "Multi-country clients", scenario: "Contractor with NL, BE and UK clients", whatToCheck: "Per-client VAT templates and accountant coordination." },
  ] satisfies ContractorVsEmployeeScenarioRow[],
  whoChoosesHeading: "Who Typically Chooses Each Route?",
  whoChoosesParagraphs: [
    "There is no universal right answer. Professionals lean toward employment when stability, benefits, internal career paths or mortgage timing dominate. Contractors often choose flexibility, rate control, portfolio careers or interim specialist markets.",
    "Some expats alternate paths over a Netherlands career — employment for permit and mortgage setup, then contractor phases for higher rates or project variety.",
  ],
  whoChoosesPoints: [
    "Newcomers and HSM hires often start employment for permit and stability",
    "Interim specialists and consultants often use contractor placements",
    "Parents and portfolio builders may prefer contractor scheduling with buffers",
    "Mortgage planners may sequence employment before property purchase",
  ],
  whoChoosesCards: [
    { title: "Stability-first professional", body: "Example: prefers predictable payroll, employer pension and HR support — employment fits." },
    { title: "Interim specialist", body: "Example: 6–12 month CFO or architect engagements — contractor interim market." },
    { title: "High-demand freelancer", body: "Example: senior dev with multiple client options — ZZP rate control." },
    { title: "Parent seeking flexibility", body: "Example: school-hour scheduling — contractor with buffer planning." },
    { title: "Career portfolio builder", body: "Example: mixes sectors and clients — contractor portfolio path." },
    { title: "Mortgage planner", body: "Example: employment short term before property purchase — structure sequencing." },
  ] satisfies ContractorVsEmployeeCard[],
  whoChoosesScenarios: [
    { profile: "Risk-averse — finance", scenario: "Chooses employment despite higher contractor rate", whatToCheck: "Values sick pay and pension over headline premium." },
    { profile: "Agency interim", scenario: "Specialist takes repeated contractor placements", whatToCheck: "Classification and fee structure each engagement." },
    { profile: "Startup employee", scenario: "Equity upside with employment at early-stage company", whatToCheck: "Liquidity risk vs contractor cash now." },
    { profile: "Bridge to ZZP", scenario: "Employment while building client pipeline", whatToCheck: "Moonlighting clauses and IND if permit restricts side work." },
  ] satisfies ContractorVsEmployeeScenarioRow[],
  prosConsPoints: [
    "Weight employment advantages when stability, sick pay and pension matter more than headline rate.",
    "Weight contractor advantages when client choice, rate control and project variety dominate.",
    "Compare challenges on both sides — notice periods and permit ties vs income gaps and admin load.",
    "Use scenario examples below when your profile resembles stability-first, interim or mortgage planning.",
  ],
  prosCons: {
    heading: "Advantages and Challenges by Route",
    paragraphs: [
      "Balanced pros and cons help compare employment packages with contractor offers on equal footing — include benefits, pension, admin and risk alongside headline numbers.",
    ],
    employee: {
      advantages: [
        "Predictable monthly income and employer payroll handling",
        "Sick pay, paid vacation and parental leave processes",
        "Employer pension contributions in many sectors",
        "Lower personal tax and compliance administration",
        "Internal career paths and employer training investment",
        "Stronger mortgage documentation for many lenders",
      ],
      challenges: [
        "Less control over clients and project selection",
        "Contracted hours and employer hybrid policies",
        "Notice periods and proeftijd on job changes",
        "Salary negotiation cycles vs immediate rate changes",
        "Moonlighting restrictions in some contracts",
        "Permit tied to sponsor on some routes",
      ],
    },
    contractor: {
      advantages: [
        "Higher headline rates possible for in-demand skills",
        "Choose clients, projects and schedule within limits",
        "Portfolio career across sectors and geographies",
        "Tax-deductible business expenses with proper records",
        "Clear project end dates without employment notice",
        "Serve international clients while based in the Netherlands",
      ],
      challenges: [
        "Irregular income and slow periods between projects",
        "No employer sick pay, paid holiday or pension by default",
        "KvK, BTW, contracts and payment chasing admin",
        "Classification risk with long single-client engagements",
        "Client dependency and late payment cash-flow risk",
        "Mortgage lenders may require longer income history",
      ],
    },
    scenarios: [
      { profile: "High rate — dev", scenario: "€110/hour contractor vs €7k employment", whatToCheck: "Still model pension, sick buffer and 25% non-billable time." },
      { profile: "Parent — flexibility", scenario: "Chooses contractor for schedule", whatToCheck: "Buffer for unpaid leave and insurance during gaps." },
      { profile: "Mortgage in 2 years", scenario: "Employment preferred for lender story", whatToCheck: "Short employment before property if contractor is long-term goal." },
      { profile: "Risk-averse consultant", scenario: "Employment despite lower gross", whatToCheck: "Values stability over rate — valid choice with eyes open." },
    ] satisfies ContractorVsEmployeeScenarioRow[],
  },
  mistakesHeading: "Common Comparison Mistakes",
  mistakesParagraphs: [
    "Expats often repeat predictable errors when weighing contractor vs employee paths: comparing gross day rates to monthly salary, ignoring pension and sick pay, overlooking permit rules or assuming mortgage lenders treat ZZP like payroll.",
    "Most issues are easier to prevent before signing than to fix after the wrong structure is locked in.",
  ],
  mistakesPoints: [
    "Build total compensation before comparing €/hour with €/month salary.",
    "Model pension and sick-pay gaps — not just tax and BTW reserves.",
    "Verify permit and classification rules before registering at KvK.",
    "Discuss mortgage and property timing with an adviser if buying within 2–3 years.",
  ],
  mistakeCards: [
    { title: "Comparing rate to salary directly", body: "Example: €90/hour vs €5,800/month without pension, vakantiegeld or tax admin." },
    { title: "Ignoring pension gap", body: "Example: strong contractor year with zero retirement savings — employer accrual lost." },
    { title: "Skipping classification review", body: "Example: 12-month single-client ZZP resembling employment — compliance risk." },
    { title: "Underestimating tax reserves", body: "Example: spends full contractor invoices — BTW and income tax shock." },
    { title: "Permit assumptions", body: "Example: HSM invoices side work without IND clearance." },
    { title: "Mortgage optimism", body: "Example: contractor path chosen months before mortgage application without adviser input." },
    { title: "Benefits blind spot", body: "Example: ignores sick pay value until first illness without savings." },
    { title: "Admin underestimation", body: "Example: 15 hours/month bookkeeping not priced into contractor rate." },
  ] satisfies ContractorVsEmployeeCard[],
  mistakesChecklist: [
    "Build total-compensation spreadsheet before accepting either offer.",
    "Get accountant input on classification for single-client engagements.",
    "Verify ind.nl if permit may restrict contractor activity.",
    "Discuss property timeline with mortgage adviser if relevant.",
  ],
  mistakesScenarios: [
    { profile: "Late classification review", scenario: "9-month exclusive ZZP; client requests employment switch", whatToCheck: "Accountant and employment contract guide comparison." },
    { profile: "Tax bill — year one ZZP", scenario: "No reserves; April payment due", whatToCheck: "Belastingdienst plan and next-year reserve automation." },
    { profile: "Permit violation", scenario: "Side freelance on employment permit", whatToCheck: "Immigration lawyer before continuing invoicing." },
    { profile: "Mortgage declined", scenario: "One-year ZZP history insufficient for lender", whatToCheck: "Mortgage adviser on documentation and timing." },
  ] satisfies ContractorVsEmployeeScenarioRow[],
  selfAssessmentHeading: "Self-Assessment: Which Route Fits You?",
  selfAssessmentParagraphs: [
    "These questions help structure your decision — they do not produce a score or recommendation. Work through them with your offers, permit documents and financial goals in front of you.",
  ],
  selfAssessmentPoints: [
    "Answer honestly about income stability needs over the next 2–3 years.",
    "Note admin capacity for KvK, BTW and client payment follow-up.",
    "Flag permit constraints and single-client classification before signing.",
    "Bring written offers and ind.nl printouts to accountant or HR conversations.",
  ],
  checklistQuestions: [
    "Do you need predictable monthly income for rent, family costs or mortgage applications in the next 2–3 years?",
    "How much do you value employer sick pay, paid vacation and parental leave versus higher headline rates?",
    "Can you manage KvK registration, BTW filings, contracts and client payment follow-up — or pay an accountant?",
    "Does your residence permit allow the contractor activity you are planning — check ind.nl independently?",
    "Have you modelled pension gap if moving from employment to contractor (or vice versa)?",
    "Do you have 3–6 months expenses saved for contractor gaps or illness without employer sick pay?",
    "Will you work mainly for one client long term — raising classification questions to verify?",
    "Are international clients, cross-border tax or 30% ruling part of your picture — needing adviser review?",
  ],
  selfAssessmentScenarios: [
    { profile: "Stable income need", scenario: "Young family with fixed rent and school fees", whatToCheck: "Employment may outweigh contractor rate if buffers are thin." },
    { profile: "Admin capacity low", scenario: "Prefers not to manage BTW and invoices", whatToCheck: "Employment or agency payroll interim vs solo ZZP." },
    { profile: "Permit constraint", scenario: "HSM cannot side freelance", whatToCheck: "Employment or formal permit change before contractor path." },
    { profile: "Portfolio goal", scenario: "Wants multiple sectors and clients", whatToCheck: "Contractor fit if permit and buffers align." },
  ] satisfies ContractorVsEmployeeScenarioRow[],
  expatQuestions: [
    { q: "Is it better to be an employee or contractor in the Netherlands?", a: "Depends on income stability needs, benefits value, permit rules, admin capacity and career goals — compare total package, not headline rate alone." },
    { q: "Do contractors earn more than employees?", a: "Headline rates can be higher but contractors cover tax, pension, sick periods and admin — net comparison varies by sector and hours." },
    { q: "Can expats work as contractors?", a: "Often yes for EU citizens with KvK registration; permit holders must verify IND rules for their document before invoicing." },
    { q: "What is ZZP vs employment?", a: "ZZP is self-employment without employees, usually invoicing clients; employment is a contract with employer payroll and protections." },
    { q: "Do contractors get benefits?", a: "No employer sick pay or paid holiday by default — contractors self-fund insurance, buffers and voluntary pension." },
    { q: "How do taxes differ?", a: "Employees have payroll withholding; contractors manage income tax, BTW and deductions — confirm with Belastingdienst and advisers." },
    { q: "Can highly skilled migrants freelance?", a: "Often restricted because employment is tied to a sponsor — verify ind.nl before contractor activity." },
    { q: "Which route helps with mortgages?", a: "Lenders often prefer stable employment history; contractors may need longer track records and specialist advisers." },
  ],
  hrConversationPrompts: [
    { audience: "HR", question: "Can you break down pension match, vakantiegeld and hybrid policy in writing?", whyAsk: "Total employment package beats verbal salary assurances." },
    { audience: "Accountant", question: "Does this engagement risk employment classification?", whyAsk: "Single-client ZZP needs independent review." },
    { audience: "IND / lawyer", question: "Does my permit allow this contractor activity?", whyAsk: "Structure choice may be permit-constrained." },
    { audience: "Mortgage adviser", question: "How would ZZP vs employment affect my application timeline?", whyAsk: "Property goals may sequence structure choice." },
    { audience: "Client", question: "Are rates ex or incl BTW with 14-day payment terms?", whyAsk: "Avoid ambiguous net pricing on contractor offers." },
    { audience: "Financial adviser", question: "How should I model pension gap in my rate?", whyAsk: "Long-term savings often missing from rate comparisons." },
  ],
  questionScenarios: [
    { profile: "Offer comparison week", scenario: "Two written offers — employment vs contractor", whatToCheck: "Use HR and accountant prompts before deadline." },
    { profile: "Permit + structure", scenario: "Considering contractor while on employment permit", whatToCheck: "IND/lawyer prompt before KvK registration." },
    { profile: "Mortgage planning", scenario: "Buying apartment in 24 months", whatToCheck: "Mortgage adviser prompt on income documentation." },
    { profile: "Rate negotiation", scenario: "Client pushes net hourly without BTW clarity", whatToCheck: "Contract prompt on ex/incl BTW and payment deadline." },
  ] satisfies ContractorVsEmployeeScenarioRow[],
  relatedGuides: [
    { label: "Freelancing Netherlands", href: FREELANCING_NETHERLANDS_PATH, status: "live", description: "ZZP setup, clients, taxes and financial planning for freelancers." },
    { label: "Starting consultancy", href: STARTING_CONSULTANCY_NETHERLANDS_PATH, status: "live", description: "Consultancy practice setup when the contractor path is advisory work." },
    { label: "ZZP Netherlands", href: ZZP_NETHERLANDS_PATH, status: "live", description: "Cornerstone guide on Dutch ZZP registration and invoicing." },
    { label: "Employment contract Netherlands", href: EMPLOYMENT_CONTRACT_NETHERLANDS_PATH, status: "live", description: "Contract clauses when comparing with contractor agreements." },
    { label: "Employee rights Netherlands", href: EMPLOYEE_RIGHTS_NETHERLANDS_PATH, status: "live", description: "Workplace protections on the employment path." },
    { label: "Expat taxes Netherlands", href: EXPAT_TAXES_NETHERLANDS_PATH, status: "live", description: "Tax orientation across employment and contractor income." },
    { label: "Financial advisors", href: FINANCIAL_ADVISORS_PATH, status: "live", description: "Buffers, pension and planning when income structure changes." },
  ] satisfies ContractorVsEmployeeLink[],
  relatedGuideReadingOrder: [
    "Read employment contract and employee rights if leaning employment.",
    "Open ZZP and freelancing guides if leaning contractor; Starting consultancy if building an advisory practice.",
    "Use expat taxes and financial advisors when cross-border or pension complexity appears.",
  ],
  relatedGuideScenarios: [
    { profile: "Employment path", scenario: "Accepting permanent offer next week", whatToCheck: "Employment contract → employee rights → benefits order." },
    { profile: "Contractor path", scenario: "First KvK registration planned", whatToCheck: "ZZP → freelancing → expat taxes for client mix." },
    { profile: "Consultancy path", scenario: "Leaving employment for niche advisory clients", whatToCheck: "Starting consultancy for practice design; this page for employment vs ZZP tradeoffs." },
    { profile: "Pension focus", scenario: "Leaving employer pension scheme", whatToCheck: "Pension for expats and financial advisors guides." },
  ] satisfies ContractorVsEmployeeScenarioRow[],
  serviceCategories: [
    { label: "Financial advisors", href: FINANCIAL_ADVISORS_PATH, status: "live", description: "Buffers, pension gaps and insurance when structure changes." },
    { label: "Accountants", href: ACCOUNTANTS_PATH, status: "live", description: "Bookkeeping, BTW and ZZP compliance for contractor paths." },
    { label: "Tax advisors", href: TAX_ADVISORS_PATH, status: "live", description: "Structure comparison, cross-border clients and expat context." },
    { label: "Mortgage advisors", href: MORTGAGE_ADVISORS_PATH, status: "live", description: "Property timing and lender view of contractor vs employment income." },
    { label: "Business consultants", href: BUSINESS_CONSULTANTS_PATH, status: "live", description: "Positioning and operations when choosing contractor route." },
  ] satisfies ServiceCategory[],
  servicesWhenToUse: [
    "Tax advisors: structure comparison, BTW, cross-border clients and expat tax context.",
    "Accountants: ongoing bookkeeping and compliance on contractor path.",
    "Financial advisers: pension gaps, buffers and insurance when income becomes variable.",
    "Mortgage advisers: lender requirements for employment vs ZZP income documentation.",
    "Business consultants: contractor positioning and client pipeline beyond day-one setup.",
  ],
  serviceScenarios: [
    { profile: "Offer comparison", scenario: "Employment vs contractor with signing deadline", whatToCheck: "Tax adviser on net comparison and classification." },
    { profile: "Mortgage in 18 months", scenario: "Choosing contractor now", whatToCheck: "Mortgage adviser on income history requirements." },
    { profile: "First ZZP year", scenario: "Complex EU clients", whatToCheck: "Accountant onboarding and BTW per client." },
    { profile: "Pension switch", scenario: "Corporate to contractor at age 42", whatToCheck: "Financial adviser on voluntary pension and rate model." },
  ] satisfies ContractorVsEmployeeScenarioRow[],
  servicesNote:
    "Professional services may help with specific comparison steps — they do not replace reading official sources or obtaining qualified advice for your situation.",
  faq: [
    { q: "Is it better to be an employee or contractor in the Netherlands?", a: "It depends on stability needs, benefits value, permit rules and admin capacity — compare total compensation, not headline rate alone." },
    { q: "Do contractors earn more than employees?", a: "Contractor rates can be higher gross but contractors cover tax reserves, pension gaps, sick periods and admin — net outcomes vary widely." },
    { q: "Can expats work as contractors in the Netherlands?", a: "Often yes for EU citizens with KvK registration; permit holders must verify IND rules on ind.nl before invoicing clients." },
    { q: "What is the difference between ZZP and employment?", a: "ZZP is self-employment invoicing clients; employment is a contract with employer payroll, sick pay and often pension contributions." },
    { q: "Do contractors receive employee benefits?", a: "Not by default — contractors arrange health insurance, buffers and voluntary pension without employer sick pay or paid holiday." },
    { q: "How do taxes differ for contractors and employees?", a: "Employees have wage tax withheld; contractors manage income tax, BTW filings and business deductions — confirm with Belastingdienst and advisers." },
    { q: "Can highly skilled migrants work as contractors?", a: "Often restricted because employment is tied to a sponsor — verify ind.nl before side or full freelance activity." },
    { q: "Which route is better for getting a mortgage?", a: "Lenders often prefer stable employment income; contractors may need longer track records and specialist expat mortgage advisers." },
  ],
  faqNextSteps: [
    "Build a total-compensation comparison before signing either offer.",
    "Check ind.nl if your permit may restrict contractor work.",
    "Speak with tax and mortgage advisers when cross-border or property goals apply.",
  ],
  faqScenarios: [
    { profile: "Signing deadline", scenario: "Two offers expire Friday", whatToCheck: "Accountant call and written HR benefit breakdown today." },
    { profile: "HSM side gig", scenario: "Weekend contractor idea while employed", whatToCheck: "IND FAQ and immigration lawyer before invoicing." },
    { profile: "Mortgage timeline", scenario: "Purchase planned in 20 months", whatToCheck: "Mortgage adviser on employment vs ZZP documentation." },
    { profile: "Rate confusion", scenario: "Client quotes net hourly rate", whatToCheck: "Clarify BTW and payment terms in contract." },
  ] satisfies ContractorVsEmployeeScenarioRow[],
  officialSources: [
    { label: "KvK", href: "https://www.kvk.nl/", description: "Chamber of Commerce — business registration when choosing contractor / ZZP route." },
    { label: "Belastingdienst", href: "https://www.belastingdienst.nl/", description: "Dutch Tax Administration — income tax, BTW and payroll vs self-employed filings." },
    { label: "Government.nl", href: "https://www.government.nl/", description: "Central portal for living, working and self-employment in the Netherlands." },
    { label: "Business.gov.nl", href: "https://business.gov.nl/", description: "Practical government information on employment and running a business." },
    { label: "IND", href: "https://ind.nl/", description: "Immigration and permit rules when structure choice affects residency — verify independently." },
  ],
  officialSourcesNote:
    "Employment law, tax thresholds and permit requirements change over time. Verify current rules through official resources — this page is orientation for comparison purposes.",
  sourceVerificationTips: [
    "KvK — registration steps when moving to contractor / ZZP path.",
    "Belastingdienst — BTW registration, payroll vs self-employed tax filings.",
    "Business.gov.nl — employment and self-employment checklists.",
    "Government.nl — working in the Netherlands overview.",
    "IND — permit types and whether contractor activity is allowed on your route.",
  ],
  officialSourcesScenarios: [
    { profile: "First KvK registration", scenario: "Choosing contractor path after employment", whatToCheck: "KvK online wizard and Business.gov.nl activity codes." },
    { profile: "BTW first quarter", scenario: "Contractor with approaching filing deadline", whatToCheck: "Belastingdienst portal and accountant coordination." },
    { profile: "Permit sticker review", scenario: "Unsure if self-employment allowed", whatToCheck: "IND website for document-specific work rights." },
    { profile: "Leaving employment", scenario: "Last employment day in 30 days", whatToCheck: "IND if permit tied to sponsor plus KvK timing." },
  ] satisfies ContractorVsEmployeeScenarioRow[],
  exploreNextTips: [
    "Open employment contract guide if leaning toward salaried route.",
    "Read ZZP and freelancing guides if leaning contractor; Starting consultancy for advisory practice design.",
    "Use expat taxes and financial advisors when pension or cross-border clients matter.",
  ],
  exploreNextCards: [
    { label: "Freelancing Netherlands", href: FREELANCING_NETHERLANDS_PATH, status: "live", description: "Freelance orientation beyond this comparison." },
    { label: "Starting consultancy", href: STARTING_CONSULTANCY_NETHERLANDS_PATH, status: "live", description: "Practice setup when the contractor path is consultancy." },
    { label: "ZZP Netherlands", href: ZZP_NETHERLANDS_PATH, status: "live", description: "Registration, taxes and invoicing for contractors." },
    { label: "Employment contract", href: EMPLOYMENT_CONTRACT_NETHERLANDS_PATH, status: "live", description: "Contract review when choosing employment." },
    { label: "Expat taxes", href: EXPAT_TAXES_NETHERLANDS_PATH, status: "live", description: "Tax planning across structure types." },
  ] satisfies ContractorVsEmployeeLink[],
  planningLinks: [
    { label: "Employment contract guide", href: EMPLOYMENT_CONTRACT_NETHERLANDS_PATH, description: "Contract clauses and signing checklist for employment path." },
    { label: "Starting consultancy", href: STARTING_CONSULTANCY_NETHERLANDS_PATH, description: "Advisory practice design on the contractor path." },
    { label: "ZZP guide", href: ZZP_NETHERLANDS_PATH, description: "Registration and tax orientation for contractor path." },
    { label: "Expat taxes guide", href: EXPAT_TAXES_NETHERLANDS_PATH, description: "Tax context when comparing or mixing structures." },
  ] satisfies ContractorVsEmployeeLink[],
  ecosystemLinks: [
    { label: "Finding jobs Netherlands", href: FINDING_JOBS_NETHERLANDS_PATH, status: "live", description: "Employer routes when employment is the target." },
    { label: "Employee rights Netherlands", href: EMPLOYEE_RIGHTS_NETHERLANDS_PATH, status: "live", description: "Protections on the employment path." },
    { label: "Freelancing Netherlands", href: FREELANCING_NETHERLANDS_PATH, status: "live", description: "Freelance hub for contractor orientation." },
    { label: "Starting consultancy", href: STARTING_CONSULTANCY_NETHERLANDS_PATH, status: "live", description: "Consultancy practice lane for advisory contractors." },
    { label: "Expat taxes Netherlands", href: EXPAT_TAXES_NETHERLANDS_PATH, status: "live", description: "Core tax orientation for international residents." },
    { label: "Highly skilled migrant", href: HSM_VISA_PATH, status: "live", description: "Sponsored employment permit context for expats." },
  ] satisfies ContractorVsEmployeeLink[],
} as const;

export type ContractorVsEmployeeNetherlandsPage = typeof contractorVsEmployeeNetherlandsPage;
