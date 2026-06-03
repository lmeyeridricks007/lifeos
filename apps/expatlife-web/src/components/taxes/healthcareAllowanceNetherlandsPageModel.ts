export const HEALTHCARE_ALLOWANCE_NETHERLANDS_PATH = "/netherlands/taxes/healthcare-allowance-netherlands/" as const;
export const HEALTHCARE_ALLOWANCE_ESTIMATOR_PATH = "/netherlands/taxes/tools/healthcare-allowance-estimator/" as const;
export const TAXES_HUB_PATH = "/netherlands/taxes/" as const;
export const HEALTH_INSURANCE_NETHERLANDS_PATH = "/netherlands/health-insurance-netherlands/" as const;
export const HEALTHCARE_HUB_PATH = "/netherlands/living/healthcare-basics/" as const;
export const BONUS_TAX_NETHERLANDS_PATH = "/netherlands/taxes/bonus-tax-netherlands/" as const;
export const EXPAT_SALARY_NETHERLANDS_PATH = "/netherlands/jobs/expat-salary-netherlands/" as const;
export const PAYROLL_TAX_NETHERLANDS_PATH = "/netherlands/taxes/payroll-tax-netherlands/" as const;
export const NET_SALARY_NETHERLANDS_PATH = "/netherlands/taxes/net-salary-netherlands/" as const;
export const GROSS_VS_NET_SALARY_PATH = "/netherlands/taxes/gross-vs-net-salary/" as const;
export const DUTCH_SALARY_NET_CALCULATOR_PATH = "/netherlands/taxes/tools/dutch-salary-net-calculator/" as const;
export const THIRTY_PERCENT_RULING_PATH = "/netherlands/taxes/30-percent-ruling/" as const;
export const EMPLOYEE_BENEFITS_NETHERLANDS_PATH = "/netherlands/jobs/employee-benefits-netherlands/" as const;
export const EXPAT_TAXES_NETHERLANDS_PATH = "/netherlands/taxes/expat-taxes-netherlands/" as const;
export const MOVING_TO_NETHERLANDS_PATH = "/netherlands/moving-to-the-netherlands/" as const;

export type HealthcareAllowanceNetherlandsLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export const healthcareAllowanceNetherlandsPage = {
  slug: "healthcare-allowance-netherlands",
  path: HEALTHCARE_ALLOWANCE_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2026-07-01",
  seo: {
    title: "Healthcare Allowance in the Netherlands (Zorgtoeslag) | Expat Guide",
    description:
      "Learn how healthcare allowance (zorgtoeslag) works in the Netherlands, who may qualify, how to apply and what expats should know about Dutch health insurance support.",
    keywords: [
      "healthcare allowance netherlands",
      "zorgtoeslag netherlands",
      "health insurance allowance netherlands",
      "healthcare benefit netherlands",
      "dutch healthcare allowance",
      "zorgtoeslag expats",
      "healthcare allowance expats",
      "dutch health insurance allowance",
      "apply for zorgtoeslag",
      "healthcare subsidy netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Taxes · Benefits",
    pageTitle: "Healthcare Allowance in the Netherlands",
    subtitle:
      "Understand zorgtoeslag — the Dutch benefit that can reduce mandatory basic health insurance premiums — including eligibility, income and asset tests, expat scenarios and how to apply.",
    primaryCta: { label: "Understand Healthcare Allowance", href: "#intro" },
    secondaryCta: { label: "Explore Dutch Healthcare", href: HEALTH_INSURANCE_NETHERLANDS_PATH },
    chips: ["Zorgtoeslag", "Income & assets", "Basic insurance", "Dienst Toeslagen"],
    image: {
      src: "/images/heroes/netherlands-healthcare-allowance-netherlands-hero-v2.png",
      alt: "Photorealistic editorial photo of an international couple reviewing Dutch health insurance documents and zorgtoeslag paperwork at a bright Rotterdam apartment kitchen table, with a health insurance card, tulips and canal houses visible through the window.",
    },
  },
  infographics: {
    introFlow: {
      src: "/images/infographics/netherlands-healthcare-allowance-intro-flow-v2.png",
      alt: "Infographic explaining Dutch healthcare allowance (zorgtoeslag): mandatory basic insurance, income and asset tests, and monthly premium support through Dienst Toeslagen.",
      caption: "Zorgtoeslag supports basic health insurance premiums — eligibility depends on income, assets and household type, not nationality alone.",
    },
    snapshot: {
      src: "/images/infographics/netherlands-healthcare-allowance-snapshot-v2.png",
      alt: "Infographic snapshot of Dutch healthcare allowance at a glance: zorgtoeslag purpose, income ceiling, asset test, insurance requirement, expat relevance and application channel.",
      caption: "Use this snapshot before applying — thresholds change with policy and only official sources determine entitlement.",
    },
    whyExists: {
      src: "/images/infographics/netherlands-healthcare-allowance-why-exists-v2.png",
      alt: "Infographic explaining why healthcare allowance exists in the Netherlands: mandatory insurance, premium affordability and targeted support for lower incomes.",
      caption: "The benefit bridges mandatory insurance obligations with affordability for qualifying households.",
    },
    whoQualifies: {
      src: "/images/infographics/netherlands-healthcare-allowance-who-qualifies-v2.png",
      alt: "Infographic overview of who may qualify for zorgtoeslag: Dutch basic insurance, residence, income limits, asset caps and household type.",
      caption: "Qualification is a bundle of conditions — confirm each on official toeslagen guidance.",
    },
    expats: {
      src: "/images/infographics/netherlands-healthcare-allowance-expats-v2.png",
      alt: "Infographic showing expat healthcare allowance context: insurance registration, move timing, partner abroad, package pay and official confirmation steps.",
      caption: "Expats follow the same benefit framework — but move timing and household setup add planning complexity.",
    },
    students: {
      src: "/images/infographics/netherlands-healthcare-allowance-students-v2.png",
      alt: "Infographic explaining healthcare allowance for students: insurance obligation, income from work or grants, asset tests and toeslagpartner rules.",
      caption: "Student status alone does not guarantee allowance — income, assets and insurance matter.",
    },
    howMuch: {
      src: "/images/infographics/netherlands-healthcare-allowance-how-much-v2.png",
      alt: "Infographic showing how healthcare allowance amounts are determined through income tapering toward ceilings — use the official estimator for personal figures.",
      caption: "Allowance tapers as income rises — use the healthcare allowance estimator for planning ranges, not hardcoded amounts.",
    },
    income: {
      src: "/images/infographics/netherlands-healthcare-allowance-income-v2.png",
      alt: "Infographic explaining why income matters for zorgtoeslag: single vs combined ceilings, toeslagpartner rules and taper toward zero allowance.",
      caption: "Income tests use official definitions — payslip gross alone may not match the toeslagen income picture.",
    },
    apply: {
      src: "/images/infographics/netherlands-healthcare-allowance-apply-v2.png",
      alt: "Infographic flow for applying for Dutch healthcare allowance through Dienst Toeslagen and Mijn Toeslagen.",
      caption: "Apply and update through official toeslagen channels — this guide does not submit applications.",
    },
    incomeChanges: {
      src: "/images/infographics/netherlands-healthcare-allowance-income-changes-v2.png",
      alt: "Infographic explaining income changes and healthcare allowance adjustments: raises, job changes, partner income and repayment risk.",
      caption: "Report changes promptly — overpayment can lead to repayment through Dienst Toeslagen.",
    },
    mistakes: {
      src: "/images/infographics/netherlands-healthcare-allowance-mistakes-v2.png",
      alt: "Infographic summarising common expat mistakes with zorgtoeslag: wrong household type, ignoring assets, optimistic income and late updates.",
      caption: "Conservative planning and official confirmation reduce common expat allowance mistakes.",
    },
    compareBenefits: {
      src: "/images/infographics/netherlands-healthcare-allowance-compare-benefits-v2.png",
      alt: "Infographic comparing healthcare allowance with other Dutch benefits such as huurtoeslag, kindgebonden budget and payroll tax credits.",
      caption: "Each toeslag has separate rules — qualifying for one does not automatically mean qualifying for others.",
    },
    healthInsurance: {
      src: "/images/infographics/netherlands-healthcare-allowance-health-insurance-v2.png",
      alt: "Infographic linking zorgtoeslag to Dutch basic health insurance: premium invoices, allowance timing and insurer choice context.",
      caption: "Allowance supports the basic premium — voluntary cover and add-ons sit outside typical zorgtoeslag scope.",
    },
    questions: {
      src: "/images/infographics/netherlands-healthcare-allowance-questions-v2.png",
      alt: "Infographic summarising common expat questions about Dutch healthcare allowance eligibility, partners, assets and applications.",
      caption: "Use these prompts when planning — then confirm on official sources or with qualified advice.",
    },
    relatedGuides: {
      src: "/images/infographics/netherlands-healthcare-allowance-related-guides-v2.png",
      alt: "Infographic linking to related tax and healthcare guides: health insurance, payroll tax, net salary and allowance estimator.",
      caption: "Connect allowance planning to insurance choice and broader tax context.",
    },
    calculatorFlow: {
      src: "/images/infographics/netherlands-healthcare-allowance-calculator-flow-v2.png",
      alt: "Infographic showing healthcare allowance estimator flow: enter income, assets, household type and insurance context, review planning range.",
      caption: "Use the estimator for orientation — only Dienst Toeslagen determines official entitlement.",
    },
    services: {
      src: "/images/infographics/netherlands-healthcare-allowance-services-v2.png",
      alt: "Infographic showing professional services for healthcare allowance questions: tax advisors, expat services, insurance brokers and social benefit advisers.",
      caption: "Use professionals for personal entitlement questions — this guide is orientation only.",
    },
    officialSources: {
      src: "/images/infographics/netherlands-healthcare-allowance-official-sources-v2.png",
      alt: "Infographic map of official Dutch healthcare allowance sources: Belastingdienst Toeslagen, Government.nl, Rijksoverheid and Mijn Toeslagen.",
      caption: "Verify current thresholds and rules on official government sources before applying.",
    },
    exploreNext: {
      src: "/images/infographics/netherlands-healthcare-allowance-explore-next-v2.png",
      alt: "Infographic linking to next-step guides: healthcare allowance estimator, health insurance, payroll tax and expat salary guides.",
      caption: "Move from zorgtoeslag concepts into estimation, insurance choice and salary planning.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#why-exists", label: "Why it exists" },
    { href: "#who-qualifies", label: "Who qualifies" },
    { href: "#expats", label: "Expats" },
    { href: "#students", label: "Students" },
    { href: "#how-much", label: "How much" },
    { href: "#income", label: "Income" },
    { href: "#apply", label: "Apply" },
    { href: "#income-changes", label: "Changes" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#compare-benefits", label: "Compare benefits" },
    { href: "#health-insurance", label: "Insurance" },
    { href: "#questions", label: "Questions" },
    { href: "#related-guides", label: "Related guides" },
    { href: "#calculator", label: "Estimator" },
    { href: "#services", label: "Services" },
    { href: "#faq", label: "FAQ" },
    { href: "#sources", label: "Sources" },
  ],
  conceptCards: [
    { title: "Zorgtoeslag", body: "A Dutch allowance (toeslag) that can reduce the cost of mandatory basic health insurance for qualifying residents." },
    { title: "Means-tested", body: "Eligibility and amount depend on income, assets on 1 January and household type — not nationality alone." },
    { title: "Official channel", body: "Applications and updates go through Dienst Toeslagen — not insurers and not third-party calculators." },
  ],
  snapshotCards: [
    { label: "Dutch name", value: "Zorgtoeslag" },
    { label: "Purpose", value: "Support basic health insurance premiums" },
    { label: "Key tests", value: "Income, assets, insurance, residence" },
    { label: "Household", value: "Single or toeslagpartner rules" },
    { label: "Expats", value: "Same framework — extra planning steps" },
    { label: "Planning tool", value: "Healthcare allowance estimator" },
  ],
  snapshotTips: [
    "Healthcare allowance is separate from payroll tax credits and from rent allowance (huurtoeslag).",
    "You generally need qualifying Dutch basic health insurance for the months you claim.",
    "Income and assets on 1 January are tested — monthly cash flow alone does not tell the full story.",
    "Only Dienst Toeslagen determines official entitlement — use this guide and the estimator for orientation.",
  ],
  introChecklist: [
    "Confirm you have or will have Dutch basic health insurance for the allowance year.",
    "Gather income planning figures and 1 January asset estimates before applying.",
    "Check whether a toeslagpartner applies to your household for the benefit year.",
    "Use the healthcare allowance estimator for ranges — then confirm on official toeslagen channels.",
  ],
  newcomerSurprises: [
    "Dutch health insurance is mandatory for most residents — it is not a free NHS-style public system.",
    "Premiums are paid to private insurers monthly, but zorgtoeslag may reduce the net cost for qualifying households.",
    "Healthcare allowance exists and many expats may qualify — eligibility depends on income, assets and insurance.",
    "Allowance is not automatic on your payslip — you apply through Dienst Toeslagen and keep records updated.",
  ],
  whyExistsTips: [
    "The Netherlands requires residents to hold basic health insurance — premiums can be a significant monthly cost.",
    "Zorgtoeslag targets support at households with lower means so mandatory insurance remains affordable.",
    "The benefit is administered as a toeslag through Dienst Toeslagen, separate from payroll withholding.",
    "Policy and thresholds change — always verify current rules on official sources before relying on planning figures.",
  ],
  whoQualifiesTips: [
    "Qualifying Dutch basic health insurance is typically required for the months you claim allowance.",
    "Legal residence and registration context matter alongside insurance — confirm your situation on official guidance.",
    "Income is tested against single or combined (toeslagpartner) ceilings depending on household type.",
    "Relevant assets on 1 January are tested separately from income — both gates must be considered.",
  ],
  qualificationCriteria: [
    { title: "Basic health insurance", body: "You generally need Dutch basic insurance (basisverzekering) for the relevant period." },
    { title: "Income within limits", body: "Taxable income is tested against statutory ceilings — higher with a toeslagpartner." },
    { title: "Assets within limits", body: "Savings and investments on 1 January are compared to a separate asset cap." },
    { title: "Household type", body: "Single vs toeslagpartner status changes which income and assets count together." },
    { title: "Residence & registration", body: "Legal residence and registration context matter — confirm your situation on official guidance." },
  ],
  expatTips: [
    "Zorgtoeslag depends on insurance, residence, income and assets — not nationality or expat label alone.",
    "Move timing, partner abroad and cross-border employment can complicate the income picture — plan conservatively.",
    "Multinational package pay, bonuses and equity may differ from simple gross salary — see payroll and bonus guides for context.",
    "Confirm household type and insurance registration before assuming eligibility from online calculators alone.",
  ],
  expatScenarios: [
    { title: "New arrival", body: "Register insurance promptly — allowance months align with insured and eligible periods, not move date alone." },
    { title: "Highly skilled migrant", body: "Package pay and partner setup may affect combined income tests — model scenarios before choosing a policy." },
    { title: "Partner abroad", body: "Toeslagpartner rules differ from informal cohabitation — confirm household type on official guidance." },
  ],
  studentTips: [
    "Students must still hold Dutch basic health insurance when required — allowance is not a substitute for insurance.",
    "Part-time work, internships and grants can count toward income tests depending on official definitions.",
    "Parental support and savings may affect asset tests on 1 January — not just student income.",
    "Student status does not automatically mean maximum allowance — income and assets still apply.",
  ],
  studentScenarios: [
    { title: "Working student", body: "Employment income can push you toward taper or ineligibility — update Dienst Toeslagen when hours change." },
    { title: "Grant-funded study", body: "Some funding may count in the income picture — verify categories on official toeslagen information." },
    { title: "Living with partner", body: "Combined income and asset tests may apply if toeslagpartner rules apply to your household." },
  ],
  howMuchTips: [
    "Allowance amounts taper as income approaches the statutory ceiling — they are not all-or-nothing until the limit.",
    "Maximum public figures change with policy — do not rely on outdated blog posts or forum numbers.",
    "Use the healthcare allowance estimator on this site for planning ranges based on current site configuration.",
    "Official awards use detailed rules — your real amount can differ from any planning estimate.",
  ],
  incomeTips: [
    "Toeslagen income definitions may differ from payslip gross or expat package headlines.",
    "With a toeslagpartner, combined income is tested against a higher ceiling — both incomes count.",
    "Bonuses, variable pay and cross-border income can move the real test — read the bonus tax guide for payroll context.",
    "Use conservative income inputs when uncertain — overestimating allowance creates repayment risk later.",
  ],
  incomeFactors: [
    { title: "Single vs partner ceiling", body: "Partner status switches you to combined income and asset tests with different limits." },
    { title: "Taper zone", body: "Allowance typically reduces gradually as income rises — not only at the hard ceiling." },
    { title: "Asset gate", body: "High 1 January assets can disqualify you even when monthly pay looks modest." },
    { title: "Updates required", body: "Report income changes to Dienst Toeslagen — estimates at application time are not permanent." },
  ],
  applicationSteps: [
    { step: "1", title: "Obtain your BSN", body: "Register with the municipality and secure a BSN — you typically need it for insurance and toeslagen processes." },
    { step: "2", title: "Arrange Dutch health insurance", body: "Take out mandatory basic health insurance (basisverzekering) with a Dutch insurer for the months you plan to claim." },
    { step: "3", title: "Create DigiD", body: "Set up DigiD for secure access to Dutch government portals, including Mijn Toeslagen." },
    { step: "4", title: "Access Toeslagen", body: "Log in to Mijn Toeslagen via toeslagen.nl with DigiD to start or manage your application." },
    { step: "5", title: "Submit your application", body: "Enter income estimates, 1 January assets and household type — confirm figures on official guidance before submitting." },
    { step: "6", title: "Monitor and update", body: "Track decisions in Mijn Toeslagen and report income, household or insurance changes promptly during the year." },
  ],
  applyTips: [
    "Apply through Dienst Toeslagen (often via Mijn Toeslagen) — insurers cannot grant zorgtoeslag on your behalf.",
    "You can often apply retroactively within official time limits — confirm current deadlines on Belastingdienst toeslagen pages.",
    "Keep copies of submitted figures — you may need to explain differences if income changes later.",
    "This guide does not submit applications or read government systems — orientation only.",
  ],
  incomeChangeTips: [
    "Salary increases, job changes and partner income shifts can reduce or remove allowance during the year.",
    "If you received too much based on later income, Dienst Toeslagen may recover overpayments — report changes early.",
    "Mid-year moves, insurance gaps and household changes can affect monthly entitlement — update official records.",
    "Use the estimator to stress-test higher income before assuming allowance will continue unchanged.",
  ],
  incomeChangeScenarios: [
    { title: "Raise or promotion", body: "Higher annual income may shrink allowance or push you above the ceiling — update toeslagen records." },
    { title: "Job loss or break", body: "Lower income may increase allowance — but asset tests and insurance continuity still apply." },
    { title: "Partner starts working", body: "Combined income can change quickly — toeslagpartner status means both incomes count." },
    { title: "Bonus or variable pay", body: "Irregular income can shift your annual test — model conservatively and report changes to Dienst Toeslagen." },
    { title: "Relocation abroad", body: "Leaving the Netherlands affects insurance months and allowance entitlement — update records before cancelling cover." },
    { title: "Partner moves to NL", body: "Household type may switch to toeslagpartner rules — combined income and assets then apply." },
  ],
  mistakeCards: [
    { title: "Assuming expats cannot apply", body: "Eligibility depends on insurance, income, assets and residence — nationality alone does not disqualify you." },
    { title: "Ignoring 1 January assets", body: "Savings and investments on 1 January are a separate test from monthly salary — high assets can block allowance." },
    { title: "Using gross salary only", body: "Toeslagen income definitions may differ from payslip headlines — optimistic inputs create repayment risk." },
    { title: "Wrong household type", body: "Treating a household as single when toeslagpartner rules apply (or vice versa) leads to wrong planning." },
    { title: "Skipping updates", body: "Failing to report raises or partner income changes is a common source of later recovery letters." },
    { title: "Confusing benefits", body: "Zorgtoeslag is not huurtoeslag, kindgebonden budget or payroll tax credit — each has separate rules." },
  ],
  mistakesTips: [
    "Many expats never apply because they assume foreign nationality disqualifies them — check insurance and income tests first.",
    "Conservative income estimates reduce repayment risk if your salary or bonus increases mid-year.",
    "Report household and partner changes to Dienst Toeslagen — informal cohabitation rules differ from toeslagpartner status.",
    "Do not cancel Dutch basic insurance early when leaving — allowance and insurance months must align for claims.",
  ],
  comparisonRows: [
    { component: "Healthcare allowance (zorgtoeslag)", treatment: "Supports basic health insurance premiums", note: "Income, assets, insurance and household tests" },
    { component: "Rent allowance (huurtoeslag)", treatment: "Separate toeslag for qualifying rent", note: "Different income and housing rules" },
    { component: "Child budget (kindgebonden budget)", treatment: "Separate family-related toeslag", note: "Not tied to health insurance premiums" },
    { component: "Payroll tax credit (heffingskorting)", treatment: "Applied through employer payroll", note: "Not the same as monthly zorgtoeslag" },
    { component: "Employee benefits", treatment: "Employer package items", note: "See employee benefits guide for package context" },
  ],
  comparisonTips: [
    "Healthcare allowance supports basic health insurance premiums — not rent or childcare directly.",
    "Payroll tax credit (heffingskorting) flows through employer payroll — separate from monthly zorgtoeslag.",
    "Huurtoeslag and kindgebonden budget have their own income and eligibility rules.",
    "Compare total household support across benefits — but check each one on official channels.",
  ],
  healthInsuranceTips: [
    "Zorgtoeslag reduces pressure on the mandatory basic premium — it does not replace the insurance obligation.",
    "You still choose an insurer and pay premiums — allowance is settled through Dienst Toeslagen, not as an automatic discount on every invoice.",
    "Voluntary dental, travel or supplemental cover typically sits outside basic zorgtoeslag scope.",
    "Read the health insurance guide before comparing gross premium posters — net cost after allowance may differ.",
  ],
  healthInsuranceLinks: [
    { title: "Health insurance guide", body: "Mandatory basic insurance, insurer choice and expat registration context.", href: HEALTH_INSURANCE_NETHERLANDS_PATH },
    { title: "Healthcare basics", body: "Broader Dutch care flow, urgent care and insurance orientation.", href: HEALTHCARE_HUB_PATH },
    { title: "Allowance estimator", body: "Plan zorgtoeslag ranges from income, assets and household inputs.", href: HEALTHCARE_ALLOWANCE_ESTIMATOR_PATH },
  ],
  healthInsuranceConcepts: [
    { title: "Basic premium (basisverzekering)", body: "The mandatory monthly insurance bill you pay to your chosen Dutch insurer — zorgtoeslag targets support for this cost." },
    { title: "Eigen risico (deductible)", body: "The annual healthcare deductible bucket you pay before full cover kicks in for many services — separate from monthly premium and allowance." },
    { title: "Supplemental cover", body: "Dental, travel or extra physiotherapy policies sit outside typical basic zorgtoeslag scope — compare total package cost separately." },
  ],
  futureBenefitLinks: [
    { label: "Housing allowance Netherlands", href: "/netherlands/taxes/rent-allowance-netherlands/", status: "live", description: "Huurtoeslag guide for qualifying rent situations — separate rules from zorgtoeslag." },
    { label: "Childcare allowance Netherlands", href: "/netherlands/taxes/childcare-allowance-netherlands/", status: "live", description: "Kinderopvangtoeslag guide — registered childcare and work requirements." },
  ] satisfies HealthcareAllowanceNetherlandsLink[],
  questionsSectionTips: [
    "Highly skilled migrants follow the same zorgtoeslag framework — confirm payroll package income against toeslagen definitions.",
    "Couples should verify toeslagpartner status before assuming single-household income limits apply.",
    "Students with part-time jobs may still qualify — but income and asset tests apply like any other resident.",
    "If you move away mid-year, insurance continuity and allowance months need careful planning before you cancel cover.",
  ],
  expatQuestions: [
    { q: "Can expats get healthcare allowance?", a: "Often yes if you meet insurance, residence, income and asset conditions — nationality alone does not determine eligibility. Confirm your personal situation on official toeslagen guidance." },
    { q: "Do I need Dutch health insurance first?", a: "In normal cases, yes — zorgtoeslag is tied to qualifying Dutch basic insurance for the months you claim. Without insurance, do not expect allowance." },
    { q: "Does my partner's income matter?", a: "When a toeslagpartner applies for the allowance year, combined income is tested against the partner ceiling. Confirm household type with Dienst Toeslagen." },
    { q: "Do savings affect zorgtoeslag?", a: "Yes — relevant assets on 1 January are compared to a statutory-style cap. This is separate from your monthly salary test." },
    { q: "How much will I receive?", a: "Amounts depend on income, household type and policy thresholds — they taper as income rises. Use the healthcare allowance estimator for planning ranges, not hardcoded figures." },
    { q: "Where do I apply?", a: "Applications and changes go through Dienst Toeslagen, often via Mijn Toeslagen. Insurers and third-party sites cannot grant official entitlement." },
    { q: "What if my salary changes?", a: "Report changes to Dienst Toeslagen. Raises can reduce allowance; failing to update can lead to repayment later." },
    { q: "Is this the same as rent allowance?", a: "No — huurtoeslag is a separate benefit with its own rules. You might qualify for one, both or neither." },
  ],
  relatedTaxGuides: [
    { label: "Health Insurance Netherlands", href: HEALTH_INSURANCE_NETHERLANDS_PATH, status: "live", description: "Mandatory basic insurance, registration and insurer choice for expats." },
    { label: "Expat Taxes Netherlands", href: EXPAT_TAXES_NETHERLANDS_PATH, status: "live", description: "Cross-border tax orientation for international residents." },
    { label: "30% Ruling", href: THIRTY_PERCENT_RULING_PATH, status: "live", description: "Expat tax scheme and payroll impact orientation." },
    { label: "Expat Salary Guide", href: EXPAT_SALARY_NETHERLANDS_PATH, status: "live", description: "Package context and salary expectations for international hires." },
    { label: "Bonus Tax Netherlands", href: BONUS_TAX_NETHERLANDS_PATH, status: "live", description: "How bonuses affect payroll — relevant for income planning." },
    { label: "Healthcare Allowance Estimator", href: HEALTHCARE_ALLOWANCE_ESTIMATOR_PATH, status: "live", description: "Plan zorgtoeslag ranges from income, assets and household inputs." },
  ] satisfies HealthcareAllowanceNetherlandsLink[],
  relatedGuideTips: [
    "Start with health insurance basics before comparing premium posters — allowance changes net affordability.",
    "Use the allowance estimator after you have rough income and asset figures — not as a substitute for official application.",
    "Read payroll tax and net salary guides to separate payslip deductions from toeslagen benefits.",
    "Bonus and variable pay can affect the income picture — model conservatively when planning allowance.",
  ],
  faqQuickChecks: [
    "Confirm Dutch basic health insurance for the months you plan to claim.",
    "Check single vs toeslagpartner household type before using combined income limits.",
    "Include 1 January assets in your planning — not just monthly salary.",
    "Report income and household changes to Dienst Toeslagen during the year.",
  ],
  servicesWhenToUse: [
    { title: "Tax advisors", body: "Personal income picture, toeslagpartner questions and cross-border employment context." },
    { title: "Expat services", body: "Move-year registration, insurance setup and allowance orientation for new arrivals." },
    { title: "Insurance brokers", body: "Policy choice and basic premium context — not official toeslag determination." },
    { title: "Social benefit advisers", body: "Complex household situations and correspondence with Dienst Toeslagen." },
  ],
  services: [
    { label: "Health insurance advisors", href: "/netherlands/services/health-insurance/", status: "live", description: "Insurance brokers and registration support for expats." },
    { label: "Relocation services", href: "/netherlands/services/relocation-services/", status: "live", description: "Move support including insurance and registration orientation." },
    { label: "Tax advisors", href: "/netherlands/services/tax-advisors/", status: "live", description: "Income and toeslagen planning context for expats." },
    { label: "Immigration specialists", href: "/netherlands/services/immigration-lawyers/", status: "live", description: "Residence and registration context for newcomers." },
  ] satisfies HealthcareAllowanceNetherlandsLink[],
  faq: [
    { q: "What is healthcare allowance (zorgtoeslag)?", a: "A Dutch benefit administered by Dienst Toeslagen that can reduce the cost of mandatory basic health insurance for qualifying residents. It is means-tested through income, assets and household rules." },
    { q: "Who qualifies for zorgtoeslag?", a: "Generally residents with qualifying Dutch basic insurance who meet income, asset and household tests. Exact rules change — confirm on official Belastingdienst and Rijksoverheid sources." },
    { q: "Can expats receive healthcare allowance?", a: "Expats can qualify when they meet the same insurance, income, asset and residence conditions. Nationality alone does not determine eligibility." },
    { q: "How do I apply for healthcare allowance?", a: "Apply through Dienst Toeslagen, often via Mijn Toeslagen. Gather income and asset figures first and update records when circumstances change." },
    { q: "Does my partner affect my allowance?", a: "If toeslagpartner rules apply, combined income and assets are tested against partner ceilings. Household type must match official definitions." },
    { q: "Do savings affect eligibility?", a: "Yes — relevant assets on 1 January are compared to a separate cap. High savings can disqualify you even with modest monthly income." },
    { q: "How much healthcare allowance will I get?", a: "Amounts taper with income and depend on policy thresholds. Use the healthcare allowance estimator for planning ranges — only Dienst Toeslagen determines official awards." },
    { q: "What happens if my income increases?", a: "Report changes to Dienst Toeslagen. Higher income can reduce or remove allowance; overpayments may be recovered if updates are late." },
  ],
  officialSources: [
    { label: "Belastingdienst — Healthcare benefit", href: "https://www.belastingdienst.nl/wps/wcm/connect/en/individuals/content/healthcare-benefit", description: "Official English overview of healthcare allowance (zorgtoeslag) from the Dutch Tax Administration." },
    { label: "Government.nl — Health insurance", href: "https://www.government.nl/topics/health-insurance", description: "Official Dutch government information on mandatory health insurance and related topics." },
    { label: "Toeslagen — Mijn toeslagen", href: "https://www.toeslagen.nl/", description: "Official portal to apply for and manage zorgtoeslag and other allowances." },
    { label: "NederlandWereldwijd", href: "https://www.nederlandwereldwijd.nl/", description: "Government information for Dutch nationals abroad and international context — useful for cross-border planning." },
  ],
  sourcesDisclaimer:
    "Healthcare allowance rules and eligibility requirements may change. Always verify current requirements through official government resources before applying or updating records.",
  relatedGuides: [
    { label: "Netherlands Taxes Hub", href: TAXES_HUB_PATH, status: "live", description: "Central Dutch tax guide for expats." },
    { label: "Expat Taxes in the Netherlands", href: EXPAT_TAXES_NETHERLANDS_PATH, status: "live", description: "Cross-border tax orientation for international residents." },
    { label: "Healthcare Allowance Estimator", href: HEALTHCARE_ALLOWANCE_ESTIMATOR_PATH, status: "live", description: "Plan zorgtoeslag ranges from your inputs." },
    { label: "Health Insurance Guide", href: HEALTH_INSURANCE_NETHERLANDS_PATH, status: "live", description: "Mandatory insurance and registration for expats." },
    { label: "Healthcare Basics", href: HEALTHCARE_HUB_PATH, status: "live", description: "Broader Dutch healthcare orientation." },
    { label: "Moving to the Netherlands", href: MOVING_TO_NETHERLANDS_PATH, status: "live", description: "Main relocation guide for insurance and toeslagen planning." },
    { label: "30% Ruling", href: THIRTY_PERCENT_RULING_PATH, status: "live", description: "Expat tax scheme orientation." },
  ] satisfies HealthcareAllowanceNetherlandsLink[],
  exploreNextCards: [
    { label: "Dutch Health Insurance", href: HEALTH_INSURANCE_NETHERLANDS_PATH, status: "live", description: "Mandatory basic insurance, registration and insurer choice for expats." },
    { label: "Expat Taxes", href: EXPAT_TAXES_NETHERLANDS_PATH, status: "live", description: "Cross-border tax orientation for international residents." },
    { label: "30% Ruling", href: THIRTY_PERCENT_RULING_PATH, status: "live", description: "Expat tax scheme and payroll impact orientation." },
    { label: "Expat Salary Guide", href: EXPAT_SALARY_NETHERLANDS_PATH, status: "live", description: "Salary expectations and package context for international hires." },
    { label: "Moving to the Netherlands", href: MOVING_TO_NETHERLANDS_PATH, status: "live", description: "Main relocation guide for newcomers planning insurance and toeslagen." },
    { label: "Healthcare Allowance Estimator", href: HEALTHCARE_ALLOWANCE_ESTIMATOR_PATH, status: "live", description: "Plan zorgtoeslag from income, assets and household inputs." },
  ] satisfies HealthcareAllowanceNetherlandsLink[],
  calculatorToolCta: {
    title: "Estimate Your Healthcare Allowance",
    description: "After understanding zorgtoeslag basics, use the healthcare allowance estimator to model planning ranges from income, assets and household type — orientation only, not an official determination.",
    supportingText: "Pair the estimator with the health insurance guide and official toeslagen sources. Thresholds change with policy.",
    primaryCta: { label: "Open healthcare allowance estimator", href: HEALTHCARE_ALLOWANCE_ESTIMATOR_PATH },
    secondaryCta: { label: "Health insurance guide", href: HEALTH_INSURANCE_NETHERLANDS_PATH },
    disclaimer: "Estimator outputs are planning-only. Only Dienst Toeslagen determines official entitlement and amounts.",
    prepItems: [
      { label: "Income figure", body: "Prepare a conservative annual income estimate for the allowance year." },
      { label: "1 January assets", body: "Include savings and investments held on 1 January — not just monthly cash flow." },
      { label: "Household type", body: "Confirm single vs toeslagpartner status before using combined limits." },
    ],
  },
} as const;
