export const PENSION_NETHERLANDS_EXPATS_PATH = "/netherlands/jobs/pension-netherlands-expats/" as const;
export const DUTCH_SALARY_NET_CALCULATOR_PATH = "/netherlands/taxes/tools/dutch-salary-net-calculator/" as const;
export const SALARY_NEGOTIATION_NETHERLANDS_PATH = "/netherlands/jobs/salary-negotiation-netherlands/" as const;
export const EXPAT_SALARY_NETHERLANDS_PATH = "/netherlands/jobs/expat-salary-netherlands/" as const;
export const EMPLOYEE_BENEFITS_NETHERLANDS_PATH = "/netherlands/jobs/employee-benefits-netherlands/" as const;
export const NET_SALARY_NETHERLANDS_PATH = "/netherlands/taxes/net-salary-netherlands/" as const;
export const GROSS_VS_NET_SALARY_PATH = "/netherlands/taxes/gross-vs-net-salary/" as const;
export const PAYROLL_TAX_NETHERLANDS_PATH = "/netherlands/taxes/payroll-tax-netherlands/" as const;
export const AVERAGE_SALARY_NETHERLANDS_PATH = "/netherlands/taxes/average-salary-netherlands/" as const;
export const THIRTY_PERCENT_RULING_PATH = "/netherlands/taxes/30-percent-ruling/" as const;
export const TAXES_HUB_PATH = "/netherlands/taxes/" as const;
export const MOVING_HUB_PATH = "/netherlands/moving-to-the-netherlands/" as const;
export const JOBS_HUB_PATH = "/netherlands/moving/working-in-the-netherlands/" as const;

export const PENSION_NETHERLANDS_EXPATS_AFFILIATE_PLACEMENT_ID = "nl-jobs-pension-netherlands-expats-support-providers" as const;

export type PensionNetherlandsExpatsLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export const pensionNetherlandsExpatsPage = {
  slug: "pension-netherlands-expats",
  path: PENSION_NETHERLANDS_EXPATS_PATH,
  publish: true,
  publishDate: "2026-06-21",
  seo: {
    title: "Pension in the Netherlands for Expats | Dutch Retirement System Explained",
    description:
      "Learn how pensions work in the Netherlands for expats, including AOW, employer pensions, pension deductions, portability and retirement planning considerations for international professionals.",
    keywords: [
      "pension netherlands expats",
      "dutch pension system",
      "pension netherlands",
      "expat pension netherlands",
      "retirement netherlands expats",
      "AOW netherlands",
      "employer pension netherlands",
      "pension deductions netherlands",
      "dutch retirement system",
      "pension for international employees",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Jobs · Pension & retirement",
    pageTitle: "Pension in the Netherlands for Expats",
    subtitle:
      "Understand how the Dutch pension system works, including state pension (AOW), employer pensions, retirement contributions and what international professionals should consider when living or working in the Netherlands.",
    primaryCta: { label: "Understand Dutch Pensions", href: "#intro" },
    secondaryCta: { label: "Explore Salary & Benefits Guides", href: EMPLOYEE_BENEFITS_NETHERLANDS_PATH },
    chips: ["Three-pillar system", "AOW & employer schemes", "Payslip deductions", "Expat portability"],
    image: {
      src: "/images/heroes/netherlands-pension-netherlands-expats-hero-v3.png",
      alt: "Photorealistic editorial photo of an international professional reviewing pension documents at a bright Amsterdam canal-side desk, with soft-focus Dutch canal houses and a bicycle visible through the window.",
    },
  },
  infographics: {
    introFlow: {
      src: "/images/infographics/netherlands-pension-netherlands-expats-intro-flow-infographic.png",
      alt: "Infographic showing how the Dutch pension system layers state pension, employer pension and private savings for retirement income.",
      caption: "Retirement income in the Netherlands often combines multiple parts — not everyone participates equally in all three.",
    },
    offerReview: {
      src: "/images/infographics/netherlands-pension-netherlands-expats-offer-review-infographic.png",
      alt: "Infographic checklist for reviewing pension terms in a Dutch job offer including contribution rates, vesting, net pay and portability.",
      caption: "Use this checklist when comparing written offers — orientation only, not legal or financial advice.",
    },
    snapshot: {
      src: "/images/infographics/netherlands-pension-netherlands-expats-snapshot-infographic.png",
      alt: "Infographic snapshot of the Dutch pension system at a glance including AOW, employer pensions, salary deductions and expat portability.",
      caption: "Use this as orientation — pension setups vary significantly by employer, industry and personal situation.",
    },
    pillars: {
      src: "/images/infographics/netherlands-pension-netherlands-expats-pillars-infographic.png",
      alt: "Infographic explaining the three pillars of the Dutch pension system: state pension AOW, employer pension and private savings.",
      caption: "The three-pillar model is a framework — your participation in each part depends on residency, employment and choices.",
    },
    aow: {
      src: "/images/infographics/netherlands-pension-netherlands-expats-aow-infographic.png",
      alt: "Infographic explaining Dutch state pension AOW and how entitlement builds through residency and work history.",
      caption: "AOW eligibility and amounts depend on years insured and personal situation — verify with SVB and official sources.",
    },
    employer: {
      src: "/images/infographics/netherlands-pension-netherlands-expats-employer-infographic.png",
      alt: "Infographic explaining employer pension schemes in the Netherlands including contributions and sector pension funds.",
      caption: "Employer pension structures vary — read your contract and pension fund documentation carefully.",
    },
    deductions: {
      src: "/images/infographics/netherlands-pension-netherlands-expats-deductions-infographic.png",
      alt: "Infographic showing how pension contributions appear as salary deductions on Dutch payslips and affect net pay.",
      caption: "Pension deductions reduce take-home pay while building retirement savings — model net pay when comparing offers.",
    },
    leaving: {
      src: "/images/infographics/netherlands-pension-netherlands-expats-leaving-infographic.png",
      alt: "Infographic overview of pension portability and what may happen to Dutch pension rights when moving abroad.",
      caption: "Rules vary by pension provider, country and agreements — no guaranteed portability outcome.",
    },
    expatEmployees: {
      src: "/images/infographics/netherlands-pension-netherlands-expats-expat-employees-infographic.png",
      alt: "Infographic showing pension considerations for highly skilled migrants and international employees in the Netherlands.",
      caption: "Expat roles often include employer pension participation — compare total compensation, not salary alone.",
    },
    private: {
      src: "/images/infographics/netherlands-pension-netherlands-expats-private-infographic.png",
      alt: "Infographic overview of private pensions and additional retirement savings options in the Netherlands.",
      caption: "Personal retirement planning needs differ — this guide does not provide investment advice.",
    },
    industry: {
      src: "/images/infographics/netherlands-pension-netherlands-expats-industry-infographic.png",
      alt: "Infographic comparing pension scheme structures across Dutch industries including technology, finance, government and healthcare.",
      caption: "Contribution levels and pension structures vary strongly by sector and employer size.",
    },
    vsSalary: {
      src: "/images/infographics/netherlands-pension-netherlands-expats-vs-salary-infographic.png",
      alt: "Infographic showing why two identical salaries can have different long-term value depending on pension contributions.",
      caption: "Compare total compensation including pension when evaluating job offers.",
    },
    questions: {
      src: "/images/infographics/netherlands-pension-netherlands-expats-questions-infographic.png",
      alt: "Infographic summarising common expat questions about Dutch pensions including AOW, salary deductions and portability.",
      caption: "Use these prompts when reviewing contracts or planning a move — orientation only, not financial advice.",
    },
    salaryConnection: {
      src: "/images/infographics/netherlands-pension-netherlands-expats-salary-connection-infographic.png",
      alt: "Infographic connecting Dutch pensions to salary, payroll tax and employee benefits planning.",
      caption: "Pension affects both net salary and long-term savings — connect to salary and tax guides for full context.",
    },
    services: {
      src: "/images/infographics/netherlands-pension-netherlands-expats-services-infographic.png",
      alt: "Infographic showing professional services that may help with Dutch pension questions including tax advisors and payroll specialists.",
      caption: "Use professionals for contract-specific questions — this guide is orientation only.",
    },
    officialSourcesMap: {
      src: "/images/infographics/netherlands-pension-netherlands-expats-official-sources-infographic.png",
      alt: "Infographic map of official sources for Dutch pensions including Government.nl, SVB, Belastingdienst and AFM.",
      caption: "Pension rules change — verify current guidance on official government and regulator sites.",
    },
    exploreNext: {
      src: "/images/infographics/netherlands-pension-netherlands-expats-explore-next-infographic.png",
      alt: "Infographic showing connected next-step guides after the Dutch pension guide including employee benefits, salary negotiation and net salary calculator.",
      caption: "Pension planning connects naturally into salary, tax and relocation guides.",
    },
    calculatorFlow: {
      src: "/images/infographics/netherlands-pension-netherlands-expats-calculator-flow-infographic.png",
      alt: "Infographic flow for estimating net take-home pay after Dutch pension deductions and payroll tax.",
      caption: "Model net pay after pension deductions before comparing offers — orientation only, not tax advice.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#pillars", label: "Three pillars" },
    { href: "#aow", label: "AOW" },
    { href: "#employer-pension", label: "Employer pension" },
    { href: "#deductions", label: "Deductions" },
    { href: "#leaving", label: "Moving abroad" },
    { href: "#expat-employees", label: "Expat employees" },
    { href: "#private-pension", label: "Private savings" },
    { href: "#industry", label: "Industry" },
    { href: "#pension-vs-salary", label: "Pension vs salary" },
    { href: "#questions", label: "Questions" },
    { href: "#salary-benefits", label: "Salary & benefits" },
    { href: "#calculator", label: "Calculator" },
    { href: "#related-salary-guides", label: "Salary guides" },
    { href: "#services", label: "Services" },
    { href: "#faq", label: "FAQ" },
    { href: "#sources", label: "Sources" },
  ],
  conceptCards: [
    { title: "Multi-part system", body: "Dutch retirement income often combines state pension, employer schemes and personal savings — not a single programme." },
    { title: "Payslip surprises", body: "Many expats first notice pension as a salary deduction — it builds retirement savings but reduces monthly take-home pay." },
    { title: "Situations vary", body: "Eligibility, contribution levels and portability depend on residency, employment, pension provider and country agreements." },
  ],
  snapshotCards: [
    { label: "State pension", value: "AOW — government system" },
    { label: "Employer pension", value: "Common in many sectors" },
    { label: "Contributions", value: "Often salary deductions" },
    { label: "Expats", value: "May build partial rights" },
    { label: "International factor", value: "Portability matters" },
    { label: "Long-term planning", value: "Important for relocation" },
  ],
  pensionPillars: [
    { title: "State Pension (AOW)", body: "The Dutch government pension system. People generally build entitlement gradually while living or working in the Netherlands." },
    { title: "Employer Pension", body: "Workplace retirement schemes where employers and employees may both contribute through monthly payroll deductions." },
    { title: "Private Pension / Savings", body: "Additional personal retirement planning through savings products or investment accounts — participation is voluntary." },
  ],
  frameworkParticipation: [
    { title: "AOW state pension", body: "Administered by the SVB. Entitlement builds through insured years while living or working in the Netherlands." },
    { title: "Social insurance years", body: "Residency and work history determine how much AOW you may receive — rules are more complex than a simple yes/no." },
    { title: "Partial rights for expats", body: "Arriving later in life may mean building partial rather than full state pension entitlement." },
    { title: "Official verification", body: "Check your personal situation through SVB and Government.nl — do not assume full eligibility from a brief stay." },
  ],
  variableParticipation: [
    { title: "Employer pension schemes", body: "Contribution levels, fund type and employer matching vary significantly between employers and sectors." },
    { title: "Sector pension funds", body: "Industries like healthcare, education and construction often use shared sector funds with defined rules." },
    { title: "Private savings", body: "Personal pension products and additional savings are voluntary — needs differ by age, family and stay duration." },
    { title: "Portability", body: "Leaving the Netherlands before retirement may still preserve rights — transfer options depend on provider and country." },
  ],
  introChecklist: [
    "Ask HR for a written pension summary alongside your gross salary offer.",
    "Check payslip lines for employee and employer pension contributions.",
    "Understand how long you expect to stay in the Netherlands — portability may matter.",
    "Compare total compensation including pension, not headline salary alone.",
  ],
  snapshotTips: [
    "Most employed expats join an employer pension scheme — contribution levels vary by sector and employer size.",
    "AOW entitlement builds through insured years; shorter stays may create partial rather than full rights.",
    "Pension deductions on payslips are separate from payroll tax — both reduce take-home pay differently.",
    "Portability and preserved rights matter most if you may leave the Netherlands before retirement age.",
  ],
  deductionChecklist: [
    "Find the pension line on your payslip — often labeled pensioen or shown as a separate deduction.",
    "Distinguish employee pension contributions from payroll tax (loonheffing) on the same payslip.",
    "Ask HR whether employer contributions appear on the payslip or only in pension fund documentation.",
    "Model net pay with pension deductions included when comparing two gross salary offers.",
  ],
  leavingChecklist: [
    "Request a pension statement from your fund before your final working day in the Netherlands.",
    "Ask explicitly about preserved rights versus international transfer options for your destination.",
    "Keep records of contribution periods, fund name and contact details after you leave.",
    "Do not assume automatic portability — outcomes depend on fund rules and country agreements.",
  ],
  faqQuickChecks: [
    "Confirm pension fund name, employee rate and employer rate in your written contract.",
    "Check SVB for personal AOW orientation if you expect to stay several years or longer.",
    "Model net pay with pension deductions before accepting or negotiating an offer.",
    "Ask HR about portability if you may leave the Netherlands within five years.",
  ],
  relatedSalaryGuideTips: [
    "Use the gross vs net salary guide to see how pension deductions affect monthly take-home pay.",
    "Read the employee benefits guide for pension alongside holiday allowance, leave and mobility.",
    "Benchmark offers with the average salary guide before negotiating total compensation.",
    "Connect the payroll tax guide to understand all payslip deductions in context.",
  ],
  aowTips: [
    "AOW is the Dutch state pension administered through the SVB — eligibility builds through insured years in the Netherlands.",
    "The amount received depends on years insured, residency and work history — rules are more complex than a simple yes/no.",
    "Expats who arrive later in life may build partial AOW entitlement rather than a full state pension.",
    "Verify your personal situation through SVB and Government.nl — do not assume full eligibility from a brief stay.",
  ],
  employerPensionTips: [
    "Many Dutch employers offer pension schemes with both employer and employee contributions.",
    "Sector pension funds (bedrijfstakpensioenfondsen) are common in industries like healthcare, education and construction.",
    "Contribution percentages, vesting periods and scheme type vary significantly between employers.",
    "Read your pension fund documentation and contract — this guide does not interpret individual schemes.",
  ],
  deductionTips: [
    "Pension contributions often appear as separate lines on Dutch payslips alongside payroll tax.",
    "Employee contributions reduce monthly take-home pay while building retirement savings.",
    "Employer contributions may not appear as a deduction from your salary but still add to your pension pot.",
    "Model net pay with pension deductions included when comparing job offers — use the net salary calculator for orientation.",
  ],
  leavingTips: [
    "Many expats leave the Netherlands before retirement age — pension rights may remain preserved in the Dutch system.",
    "International transfer options may exist depending on your pension provider and destination country.",
    "Some bilateral agreements and EU rules can affect cross-border pension treatment — rules vary widely.",
    "Contact your pension fund directly for portability options — do not assume automatic transfer abroad.",
  ],
  expatEmployeeTips: [
    "Highly skilled migrants and international transfers often participate in employer pension schemes from day one.",
    "Some expats focus on headline salary while overlooking employer pension contributions and long-term value.",
    "Multinational employers may offer different pension arrangements than purely Dutch companies.",
    "Compare total compensation packages including pension when evaluating relocation offers.",
  ],
  privatePensionTips: [
    "Some residents use personal pension products or additional savings alongside mandatory schemes.",
    "Financial planning needs differ significantly — age, family situation and expected stay duration all matter.",
    "This guide does not provide investment recommendations or product comparisons.",
    "Consult a qualified financial adviser for personal retirement planning beyond employer schemes.",
  ],
  industryCards: [
    { title: "Technology", body: "Often competitive base salaries with standard employer pension participation; startup schemes may differ from large tech firms." },
    { title: "Finance", body: "Structured pension and bonus cycles; sector funds and company schemes common in banking and insurance." },
    { title: "Government", body: "Transparent pension scales through ABP and sector arrangements; strong long-term pension security." },
    { title: "Healthcare", body: "Sector pension funds with defined contribution or defined benefit structures; regulated pay scales." },
    { title: "Engineering", body: "Strong pension participation in larger firms; project-based employers may offer lighter schemes." },
    { title: "Education", body: "Sector pension via ABP or similar funds; predictable contribution structures." },
    { title: "Hospitality", body: "Pension participation varies; smaller employers may offer lighter or no supplementary schemes." },
    { title: "Startups", body: "Pension may be lighter than corporate employers; equity may be offered instead of strong pension matching." },
  ],
  industryTips: [
    "Sector pension funds in healthcare, education and government often follow predictable contribution scales.",
    "Tech and finance employers frequently offer strong employer matching — confirm the percentage in writing.",
    "Startups and hospitality may offer lighter schemes — weigh pension against equity, salary and flexibility.",
    "Compare fund type and employer share side by side when evaluating offers in different industries.",
  ],
  pensionVsSalaryTips: [
    "Two offers with identical gross salaries may have very different long-term value depending on pension contributions.",
    "Employer matching percentages can represent significant additional compensation over several years.",
    "A lower gross offer with strong employer pension contributions may outperform a higher base salary.",
    "Use the salary negotiation guide to compare total packages including pension in writing.",
  ],
  expatQuestions: [
    { q: "What is AOW?", a: "AOW is the Dutch state pension system. Entitlement generally builds through insured years while living or working in the Netherlands — amounts depend on personal history." },
    { q: "Do expats receive Dutch pensions?", a: "Expats employed in the Netherlands often participate in employer pension schemes and may build partial AOW rights depending on residency duration." },
    { q: "Why is pension deducted from salary?", a: "Employee pension contributions are typically deducted from gross salary through payroll, building retirement savings while reducing take-home pay." },
    { q: "Can I transfer my pension abroad?", a: "Transfer options depend on your pension provider, destination country and applicable agreements — outcomes are not guaranteed." },
    { q: "What happens if I leave the Netherlands?", a: "Pension rights may remain preserved in the Dutch system. Payment at retirement age may still be possible depending on your scheme and residency." },
    { q: "Are employer pensions mandatory?", a: "Many sectors require pension participation through collective agreements, but scheme details and contribution levels vary by employer." },
    { q: "Is pension included in salary?", a: "Employer pension contributions are typically separate from base salary. Employee contributions are deducted from gross pay on your payslip." },
    { q: "How do Dutch pensions compare internationally?", a: "The Netherlands ranks highly for pension system quality, but individual outcomes depend on your employment, stay duration and home country context." },
  ],
  salaryBenefitsItems: [
    { title: "Employee benefits", body: "Pension is often the largest long-term benefit in Dutch compensation packages alongside holiday allowance and leave.", href: EMPLOYEE_BENEFITS_NETHERLANDS_PATH },
    { title: "Salary negotiation", body: "Pension contribution levels and employer matching are valid negotiation topics alongside base salary.", href: SALARY_NEGOTIATION_NETHERLANDS_PATH },
    { title: "Gross vs net salary", body: "Pension deductions reduce take-home pay — understand how gross salary translates to net pay.", href: GROSS_VS_NET_SALARY_PATH },
    { title: "Payroll tax", body: "Pension contributions appear on payslips alongside payroll tax — model both when comparing offers.", href: PAYROLL_TAX_NETHERLANDS_PATH },
  ],
  relatedSalaryGuides: [
    { label: "Employee Benefits", href: EMPLOYEE_BENEFITS_NETHERLANDS_PATH, status: "live", description: "Full guide to Dutch work benefits including pension context." },
    { label: "Gross vs Net Salary", href: GROSS_VS_NET_SALARY_PATH, status: "live", description: "Understand how deductions affect take-home pay." },
    { label: "Payroll Tax", href: PAYROLL_TAX_NETHERLANDS_PATH, status: "live", description: "How payroll tax and deductions work in the Netherlands." },
    { label: "Expat Salary Guide", href: EXPAT_SALARY_NETHERLANDS_PATH, status: "live", description: "Salary expectations for international professionals." },
    { label: "Average Salary Netherlands", href: AVERAGE_SALARY_NETHERLANDS_PATH, status: "live", description: "Benchmark salaries by city and industry." },
    { label: "Salary Negotiation", href: SALARY_NEGOTIATION_NETHERLANDS_PATH, status: "live", description: "Negotiate total compensation including pension." },
  ] satisfies PensionNetherlandsExpatsLink[],
  calculatorToolCta: {
    title: "Estimate Take-Home Pay After Pension Deductions",
    description:
      "Pension contributions reduce monthly net pay while building retirement savings. Use the Dutch salary net calculator to model take-home pay alongside pension deductions.",
    supportingText:
      "Pair the calculator with the gross vs net and net salary guides when comparing written offers. Results are illustrative — not tax or payroll advice.",
    primaryCta: { label: "Open net salary calculator", href: DUTCH_SALARY_NET_CALCULATOR_PATH },
    secondaryCta: { label: "Net salary guide", href: NET_SALARY_NETHERLANDS_PATH },
    disclaimer: "Calculator outputs are orientation only. Confirm payslip lines and pension wording with your employer or a qualified adviser.",
    prepItems: [
      { label: "Gross basis", body: "Confirm monthly vs annual and whether holiday allowance is included in the quoted figure." },
      { label: "Pension share", body: "Employee and employer pension contributions affect monthly take-home pay." },
      { label: "Total package", body: "Compare pension value alongside base salary, bonus and other benefits." },
    ],
  },
  affiliatePlacementId: PENSION_NETHERLANDS_EXPATS_AFFILIATE_PLACEMENT_ID,
  servicesWhenToUse: [
    { title: "Tax advisors", body: "Help interpret how pension contributions and cross-border income affect your tax position." },
    { title: "Financial advisors", body: "Support personal retirement planning beyond employer schemes — not investment advice from this guide." },
    { title: "Payroll specialists", body: "Clarify payslip pension lines, contribution rates and contract wording." },
    { title: "Relocation services", body: "Long-term stay planning when pension portability and residency duration matter." },
  ],
  services: [
    { label: "Tax advisors", href: "/netherlands/services/tax-advisors/", status: "live", description: "Pension, payroll and cross-border tax context." },
    { label: "Payroll services", href: "/netherlands/services/payroll-services/", status: "comingSoon", description: "Future directory for payroll support." },
    { label: "Relocation services", href: "/netherlands/services/relocation-services/", status: "live", description: "Move planning alongside employment packages." },
    { label: "Financial advisors", href: "/netherlands/services/financial-advisors/", status: "comingSoon", description: "Future directory for financial planning support." },
  ] satisfies PensionNetherlandsExpatsLink[],
  faq: [
    {
      q: "How does the Dutch pension system work?",
      a: "The Netherlands uses a multi-pillar model combining state pension (AOW), employer pension schemes and optional private savings. Not everyone participates equally in all three parts.",
    },
    {
      q: "What is AOW?",
      a: "AOW is the Dutch state pension administered by the SVB. Entitlement generally builds through insured years while living or working in the Netherlands. The amount depends on years insured and personal situation.",
    },
    {
      q: "Do expats build Dutch pension rights?",
      a: "Expats employed in the Netherlands often participate in employer pension schemes and may build partial AOW entitlement depending on residency duration and work history.",
    },
    {
      q: "Why is pension deducted from salary?",
      a: "Employee pension contributions are typically deducted from gross salary through payroll. This builds retirement savings but reduces monthly take-home pay.",
    },
    {
      q: "Can I keep my pension if I leave the Netherlands?",
      a: "Pension rights may remain preserved in the Dutch system after departure. Payment options and international transfer depend on your pension provider, destination country and applicable agreements.",
    },
    {
      q: "Are employer pensions mandatory?",
      a: "Many sectors require pension participation through collective agreements, but contribution levels, scheme type and employer matching vary significantly.",
    },
    {
      q: "Is pension included in salary?",
      a: "Employer pension contributions are typically separate from base salary. Employee contributions appear as deductions on your payslip.",
    },
    {
      q: "How do pensions affect net salary?",
      a: "Pension contributions reduce take-home pay alongside payroll tax. Model net salary with pension deductions included when comparing job offers.",
    },
  ],
  officialSources: [
    {
      label: "Government.nl — Pensions",
      href: "https://www.government.nl/topics/pensions",
      description: "Official overview of the Dutch pension system and retirement framework.",
    },
    {
      label: "SVB",
      href: "https://www.svb.nl/en",
      description: "Social Insurance Bank — administers AOW state pension and related schemes.",
    },
    {
      label: "Business.gov.nl",
      href: "https://business.gov.nl/",
      description: "Employer and employee context for working and pensions in the Netherlands.",
    },
    {
      label: "Belastingdienst",
      href: "https://www.belastingdienst.nl/",
      description: "Tax authority guidance relevant to payroll deductions and pension contributions.",
    },
    {
      label: "Rijksoverheid — Pensioen",
      href: "https://www.rijksoverheid.nl/onderwerpen/pensioen",
      description: "Dutch-language official information on pensions and retirement.",
    },
    {
      label: "AFM",
      href: "https://www.afm.nl/en",
      description: "Dutch financial markets authority — regulates pension providers and financial products.",
    },
  ],
  relatedGuides: [
    { label: "Jobs & Career Hub", href: JOBS_HUB_PATH, status: "live", description: "Working in the Netherlands — employment context." },
    { label: "Employee Benefits", href: EMPLOYEE_BENEFITS_NETHERLANDS_PATH, status: "live", description: "Full guide to Dutch work benefits." },
    { label: "Holiday Allowance Guide", href: "/netherlands/jobs/holiday-allowance-netherlands/", status: "live", description: "How vakantiegeld works for expats." },
    { label: "Expat Salary Guide", href: EXPAT_SALARY_NETHERLANDS_PATH, status: "live", description: "Salary context for international professionals." },
    { label: "Netherlands Taxes Guide", href: TAXES_HUB_PATH, status: "live", description: "Tax hub connecting salary and pension." },
    { label: "Net Salary Guide", href: NET_SALARY_NETHERLANDS_PATH, status: "live", description: "Estimate take-home pay from your package." },
    { label: "Gross vs Net Salary", href: GROSS_VS_NET_SALARY_PATH, status: "live", description: "Why pension deductions matter for net pay." },
    { label: "Moving to the Netherlands", href: MOVING_HUB_PATH, status: "live", description: "Relocation planning with employment offers." },
  ] satisfies PensionNetherlandsExpatsLink[],
  exploreNextCards: [
    { label: "Employee Benefits", href: EMPLOYEE_BENEFITS_NETHERLANDS_PATH, status: "live", description: "Full Dutch work benefits guide." },
    { label: "Expat Salary Guide", href: EXPAT_SALARY_NETHERLANDS_PATH, status: "live", description: "Salary expectations for expats." },
    { label: "Net Salary Calculator", href: DUTCH_SALARY_NET_CALCULATOR_PATH, status: "live", description: "Estimate take-home pay after deductions." },
    { label: "30% Ruling", href: THIRTY_PERCENT_RULING_PATH, status: "live", description: "Expat tax scheme and package context." },
    { label: "Salary Negotiation", href: SALARY_NEGOTIATION_NETHERLANDS_PATH, status: "live", description: "Negotiate total compensation including pension." },
  ] satisfies PensionNetherlandsExpatsLink[],
} as const;
