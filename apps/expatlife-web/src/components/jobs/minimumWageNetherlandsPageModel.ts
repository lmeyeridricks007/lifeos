export const MINIMUM_WAGE_NETHERLANDS_PATH = "/netherlands/jobs/minimum-wage-netherlands/" as const;
export const DUTCH_SALARY_NET_CALCULATOR_PATH = "/netherlands/taxes/tools/dutch-salary-net-calculator/" as const;
export const AVERAGE_SALARY_NETHERLANDS_PATH = "/netherlands/taxes/average-salary-netherlands/" as const;
export const NET_SALARY_NETHERLANDS_PATH = "/netherlands/taxes/net-salary-netherlands/" as const;
export const GROSS_VS_NET_SALARY_PATH = "/netherlands/taxes/gross-vs-net-salary/" as const;
export const PAYROLL_TAX_NETHERLANDS_PATH = "/netherlands/taxes/payroll-tax-netherlands/" as const;
export const SALARY_NEGOTIATION_NETHERLANDS_PATH = "/netherlands/jobs/salary-negotiation-netherlands/" as const;
export const TAXES_HUB_PATH = "/netherlands/taxes/" as const;
export const CITIES_HUB_PATH = "/netherlands/cities/" as const;
export const HSM_VISA_PATH = "/netherlands/visa/highly-skilled-migrant/" as const;
export const THIRTY_PERCENT_RULING_GUIDE_PATH = "/netherlands/taxes/30-percent-ruling/" as const;
export const MOVING_CHECKLIST_TOOL_PATH = "/netherlands/moving/tools/moving-checklist/" as const;
export const COST_OF_LIVING_CALCULATOR_PATH = "/netherlands/money/tools/cost-of-living-calculator/" as const;
export const RENT_AFFORDABILITY_CALCULATOR_PATH = "/netherlands/housing/tools/rent-affordability-calculator/" as const;

export const MINIMUM_WAGE_AFFILIATE_PLACEMENT_ID = "nl-jobs-minimum-wage-support-providers" as const;

export type MinimumWageNetherlandsLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export const minimumWageNetherlandsPage = {
  slug: "minimum-wage-netherlands",
  path: MINIMUM_WAGE_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2026-08-26",
  lastReviewed: "26 August 2026",
  heroOfficialSources: [
    {
      label: "Government.nl — Minimum wage amounts",
      href: "https://www.government.nl/themes/work/minimum-wage/minimum-wage-amounts",
    },
    {
      label: "Rijksoverheid — Bedragen minimumloon 2026",
      href: "https://www.rijksoverheid.nl/themas/werk/minimumloon/bedragen-minimumloon/bedragen-minimumloon-2026",
    },
  ],
  seo: {
    title: "Minimum Wage in the Netherlands | Salary, Taxes & Cost of Living Guide",
    description:
      "Dutch minimum wage from 1 July 2026: €14.99/hr for 21+, age-based youth tiers, gross vs net pay, and whether minimum wage is enough to live on as an expat.",
    keywords: [
      "minimum wage netherlands",
      "dutch minimum wage",
      "netherlands minimum wage",
      "minimum salary netherlands",
      "wage netherlands",
      "minimum wage netherlands expats",
      "minimum wage amsterdam",
      "salary after tax minimum wage",
      "netherlands hourly wage",
      "minimum wage students netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Jobs · Wages",
    pageTitle: "Minimum Wage in the Netherlands",
    subtitle:
      "Understand how Dutch minimum wage works, how much employees may earn, what reaches your bank account after tax, and what expats should know before accepting lower-salary roles.",
    primaryCta: { label: "Understand Minimum Wage", href: "#intro" },
    secondaryCta: { label: "Explore Salary Guides", href: TAXES_HUB_PATH },
    chips: ["€14.99/hr from July 2026", "Age-based rates", "Gross vs net", "Official sources"],
    image: {
      src: "/images/heroes/netherlands-minimum-wage-hero-v3.png",
      alt: "Photorealistic editorial photo of a young employee working a everyday shift at a bright Dutch supermarket checkout, with bicycles and canal-side brick buildings visible through the storefront — calm, realistic working-life atmosphere.",
    },
  },
  infographics: {
    howItWorks: {
      src: "/images/infographics/netherlands-how-minimum-wage-works-infographic.png",
      alt: "Infographic explaining how minimum wage works in the Netherlands from government statutory floor through age-based rates to gross and net pay.",
      caption: "Minimum wage is a legal floor — not a typical salary for most professional expat roles.",
    },
    snapshot: {
      src: "/images/infographics/netherlands-minimum-wage-snapshot-infographic.png",
      alt: "Infographic snapshot of Dutch minimum wage at a glance including government management, age structure and gross versus net reality.",
      caption: "Use this quick reference before comparing offers, student jobs or part-time contracts.",
    },
    ageBands: {
      src: "/images/infographics/netherlands-minimum-wage-age-bands-infographic.png",
      alt: "Infographic showing age-based minimum wage tiers in the Netherlands from youth rates to full adult minimum wage.",
      caption: "Youth minimum wage tiers change with age — always check the current official schedule.",
    },
    grossVsNet: {
      src: "/images/infographics/netherlands-minimum-wage-gross-vs-net-infographic.png",
      alt: "Infographic showing gross minimum wage flowing through payroll tax and deductions to estimated net take-home pay.",
      caption: "Minimum wage is usually discussed gross. Net pay depends on payroll setup and personal circumstances.",
    },
    livingCosts: {
      src: "/images/infographics/netherlands-minimum-wage-living-costs-infographic.png",
      alt: "Infographic comparing living on minimum wage across Dutch cities from expensive Randstad cities to more affordable regional cities.",
      caption: "The same gross minimum wage can feel very different depending on rent and city costs.",
    },
    hourlyMonthly: {
      src: "/images/infographics/netherlands-minimum-wage-hourly-monthly-infographic.png",
      alt: "Infographic explaining how Dutch minimum wage may be quoted hourly, weekly or monthly and how hours worked affect total earnings.",
      caption: "Since 2024 the statutory minimum is an hourly rate — multiply by contracted hours for monthly gross. Contracts may still quote weekly or monthly equivalents.",
    },
    afterTax: {
      src: "/images/infographics/netherlands-minimum-wage-after-tax-infographic.png",
      alt: "Infographic showing gross minimum wage flowing through payroll tax, pension and deductions to illustrative net take-home pay.",
      caption: "Take-home pay is personal — use the net salary calculator with your contract inputs.",
    },
    expats: {
      src: "/images/infographics/netherlands-minimum-wage-expats-infographic.png",
      alt: "Infographic explaining minimum wage context for expats including skilled routes above the floor versus student and service roles near minimum wage.",
      caption: "Minimum wage is not the same as visa salary thresholds — check your route separately.",
    },
    students: {
      src: "/images/infographics/netherlands-minimum-wage-students-infographic.png",
      alt: "Infographic about student and part-time minimum wage work in the Netherlands including age tiers and common job types.",
      caption: "Youth minimum wage tiers and working-hour rules apply to many student jobs.",
    },
    vsAverage: {
      src: "/images/infographics/netherlands-minimum-wage-vs-average-infographic.png",
      alt: "Infographic comparing Dutch minimum wage as a legal floor against broader average salary benchmarks for employed professionals.",
      caption: "Average salaries are usually much higher than the statutory minimum for professional roles.",
    },
    industries: {
      src: "/images/infographics/netherlands-minimum-wage-industries-infographic.png",
      alt: "Infographic of industries where minimum wage roles are more common in the Netherlands including hospitality, retail, logistics and cleaning.",
      caption: "Actual pay can still vary by employer, CAO agreements and role seniority.",
    },
    calculatorFlow: {
      src: "/images/infographics/netherlands-minimum-wage-calculator-flow-infographic.png",
      alt: "Infographic flow for estimating minimum wage take-home pay using gross inputs, payroll assumptions and the net salary calculator.",
      caption: "Model your own contract before judging whether a role works financially.",
    },
    commonQuestions: {
      src: "/images/infographics/netherlands-minimum-wage-questions-infographic.png",
      alt: "Infographic summarising common expat questions about Dutch minimum wage including Amsterdam affordability, after-tax pay and age bands.",
      caption: "Use official sources and calculators to verify answers for your situation.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "How it works" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#what-is", label: "What is it" },
    { href: "#age-based", label: "Age bands" },
    { href: "#monthly-hourly", label: "Hourly vs monthly" },
    { href: "#gross-vs-net", label: "Gross vs net" },
    { href: "#after-tax", label: "After tax" },
    { href: "#living-costs", label: "Living costs" },
    { href: "#expats", label: "Expats" },
    { href: "#students", label: "Students" },
    { href: "#vs-average", label: "Vs average" },
    { href: "#industries", label: "Industries" },
    { href: "#questions", label: "Questions" },
    { href: "#calculator", label: "Calculator" },
    { href: "#services", label: "Services" },
    { href: "#faq", label: "FAQ" },
    { href: "#sources", label: "Sources" },
  ],
  whatIsKeyFacts: [
    { label: "Legal basis", value: "Statutory minimum hourly wage set by Dutch government" },
    { label: "Who it covers", value: "Employees aged 15 and over in eligible employment" },
    { label: "How quoted", value: "Hourly gross since 2024 — monthly pay follows contracted hours" },
    { label: "Holiday allowance", value: "Usually 8% on top of base gross — confirm contract wording" },
  ],
  conceptCards: [
    {
      title: "Legal floor",
      body: "Minimum wage sets a statutory minimum — employers must pay at least the published rate for eligible work.",
    },
    {
      title: "Age-based tiers",
      body: "Younger workers often have lower minimum wage levels until the full adult rate applies.",
    },
    {
      title: "Gross ≠ net",
      body: "Headline minimum wage is usually gross. Take-home pay depends on payroll tax, pension and personal setup.",
    },
  ],
  snapshotCards: [
    { label: "Current adult rate (21+)", value: "€14.99/hr from 1 July 2026" },
    { label: "Previous adult rate", value: "€14.71/hr (1 Jan – 30 Jun 2026)" },
    { label: "Managed by", value: "Dutch government" },
    { label: "Applies to", value: "Employees aged 15+" },
    { label: "Structure", value: "Hourly rate since 2024" },
    { label: "Next typical update", value: "1 January 2027 (confirm on Government.nl)" },
  ],
  snapshotChecklist: [
    "Check whether your contract quotes hourly, weekly or monthly gross pay.",
    "Confirm your age band on the official government minimum wage schedule.",
    "Estimate net pay and compare rent before accepting a minimum-wage-level role.",
  ],
  monthlyHourlyTips: [
    "Since 2024, Dutch minimum wage is an hourly rate — monthly pay depends on contracted hours, not a fixed government monthly amount.",
    "Full-time contracts often use ~36–40 hours per week; multiply hourly minimum × hours for a rough monthly gross.",
    "Holiday allowance (vakantiegeld, typically 8%) is usually paid separately — read whether your quoted figure includes it.",
    "Overtime, shift premiums and CAO agreements can push total earnings above the statutory hourly floor.",
  ],
  monthlyHourlyExamples: [
    { label: "36 hrs/week at adult minimum", value: "~€2,340/mo gross", note: "Illustrative at €14.99/hr (from 1 July 2026) — verify current rate and your contract hours." },
    { label: "24 hrs/week part-time", value: "~€1,560/mo gross", note: "Illustrative at €14.99/hr (from 1 July 2026) — net depends on payroll setup." },
    { label: "12 hrs/week student shift", value: "Age-dependent gross", note: "Youth hourly tiers apply below 21 — confirm your age band on Government.nl." },
  ],
  expatTips: [
    "Highly skilled migrant and multinational roles are usually well above minimum wage — but verify written offers and visa salary thresholds separately.",
    "Students and hospitality newcomers may encounter minimum-wage-level hourly pay — check your age band on the official schedule.",
    "Minimum wage is not an immigration salary threshold — visa routes (e.g. HSM) have separate gross requirements.",
    "Highly skilled migrant 2026 IND floors: €5,942/month gross (30+), €4,357 (under 30), €3,122 reduced criterion in certain cases — see the HSM guide.",
    "Compare gross minimum wage with city rent and transport before relocating on a lower-paid role — Randstad cities are often tight.",
  ],
  expatScenarios: [
    {
      title: "Skilled expat route",
      body: "Multinational, tech, finance and university roles typically sit far above the statutory minimum. Focus on gross offer, 30% ruling eligibility and visa thresholds — not the legal floor.",
    },
    {
      title: "Student or entry service role",
      body: "Retail, hospitality and part-time jobs often pay at youth or adult minimum tiers. Confirm hourly rate, contracted hours and whether holiday allowance is on top.",
    },
    {
      title: "Newcomer without skilled visa",
      body: "Some newcomers take entry roles while building Dutch experience. Model net pay and rent together — minimum wage alone may not cover solo housing in Amsterdam.",
    },
  ],
  livingCostsTips: [
    "Rent is usually the largest cost — shared housing is common for minimum-wage-level earners in Randstad cities.",
    "Health insurance (zorgverzekering) is mandatory for residents — budget roughly ~€142–€159/month for basic cover in 2026 (average market pricing is often around €159/month before eigen risico).",
    "Transport passes and bike costs vary by commute — factor in travel between cheaper housing and work locations.",
    "A second income, housemate or family support often makes minimum-wage-level roles workable in expensive cities.",
  ],
  studentTips: [
    "Many students work retail, hospitality, delivery or service jobs alongside studies.",
    "Youth minimum wage tiers apply until the full adult rate — confirm your age band.",
    "Working-hour rules for younger workers may limit how much you can work alongside study.",
    "Part-time earnings depend on contracted hours, not the headline monthly minimum alone.",
  ],
  industryCards: [
    { title: "Hospitality", body: "Hotels, cafés and restaurants often hire at or near minimum wage for entry roles." },
    { title: "Retail", body: "Shop floor and checkout roles frequently use statutory minimum pay scales." },
    { title: "Food service", body: "Kitchen, counter and delivery support jobs may sit at minimum wage tiers." },
    { title: "Delivery services", body: "Courier and platform logistics roles vary — confirm employment vs contractor status." },
    { title: "Warehousing & logistics", body: "Shift work may pay at or slightly above minimum depending on CAO agreements." },
    { title: "Cleaning services", body: "Contract cleaning often follows minimum wage unless sector agreements apply." },
    { title: "Seasonal work", body: "Tourism and agriculture peaks may offer temporary minimum-wage-level roles." },
  ],
  expatQuestions: [
    {
      q: "Is minimum wage enough in Amsterdam?",
      a: "For many single workers, minimum wage alone is tight in Amsterdam once rent, transport and insurance are included. Shared housing and careful budgeting are common.",
    },
    {
      q: "How much is minimum wage after tax?",
      a: "Take-home pay depends on payroll tax, pension and personal circumstances. Use the net salary calculator with your gross contract figure — do not assume a fixed net amount.",
    },
    {
      q: "Do students receive minimum wage?",
      a: "Yes — eligible student jobs must meet the statutory minimum for the worker's age band. Youth tiers apply below age 21.",
    },
    {
      q: "Does age affect minimum wage?",
      a: "Yes. The Netherlands uses age-based minimum wage levels until the full adult rate applies at 21.",
    },
    {
      q: "Is minimum wage monthly or hourly?",
      a: "Since 2024 Dutch law sets minimum wage as an hourly rate (currently €14.99/hr for 21+ from 1 July 2026). There is no fixed statutory monthly amount — monthly gross depends on your contracted hours. Government.nl may show weekly or monthly equivalents for convenience, but the legal floor is hourly.",
    },
    {
      q: "Do expats earn minimum wage?",
      a: "Many expats in professional roles earn far above minimum wage. Some students, newcomers and service workers may encounter minimum-wage-level pay.",
    },
    {
      q: "What jobs pay minimum wage?",
      a: "Entry hospitality, retail, cleaning, logistics and seasonal roles are common examples — actual pay can still vary by employer and CAO.",
    },
    {
      q: "How does minimum wage compare to average salary?",
      a: "Minimum wage is the legal floor. Average salaries for employed professionals are typically much higher — see the average salary guide for benchmarks.",
    },
  ],
  cityComparisons: [
    { label: "Amsterdam", href: "/netherlands/cities/amsterdam/", note: "High rent — minimum wage alone is often tight without shared housing." },
    { label: "Utrecht", href: "/netherlands/cities/utrecht/", note: "Strong student city with high housing demand." },
    { label: "Haarlem", href: "/netherlands/cities/haarlem/", note: "Randstad commute costs can add pressure to lower salaries." },
    { label: "Groningen", href: "/netherlands/cities/groningen/", note: "Often more affordable than core Randstad for students." },
    { label: "Tilburg", href: "/netherlands/cities/tilburg/", note: "Regional city with lower typical rent than Amsterdam." },
    { label: "Arnhem", href: "/netherlands/cities/arnhem/", note: "Eastern city — compare transport and rent assumptions." },
    { label: "Nijmegen", href: "/netherlands/cities/nijmegen/", note: "University city — student jobs and shared housing are common." },
    { label: "Rotterdam", href: "/netherlands/cities/rotterdam/", note: "Large city — rent varies by neighbourhood significantly." },
  ],
  calculatorToolCta: {
    title: "Estimate Take-Home Salary",
    description:
      "Once you know the gross minimum wage or contract figure, use the Dutch salary net calculator to estimate what may reach your bank account after payroll deductions.",
    supportingText:
      "The tool supports gross salary, holiday allowance, pension, 30% ruling scenarios and side-by-side offer comparison. Results are illustrative — not tax advice.",
    primaryCta: { label: "Open net salary calculator", href: DUTCH_SALARY_NET_CALCULATOR_PATH },
    secondaryCta: { label: "Net salary guide", href: NET_SALARY_NETHERLANDS_PATH },
    disclaimer: "Calculator outputs are orientation only. Confirm payslip lines and tax treatment with your employer or a qualified adviser.",
    prepItems: [
      { label: "Gross basis", body: "Confirm hourly, weekly or monthly gross and whether holiday allowance is included." },
      { label: "Age band", body: "Check the statutory minimum tier that applies to your age." },
      { label: "City costs", body: "Compare estimated net pay against local rent and commute." },
    ],
  },
  affiliatePlacementId: MINIMUM_WAGE_AFFILIATE_PLACEMENT_ID,
  servicesWhenToUse: [
    { title: "Tax advisors", body: "Helpful for payslip questions, payroll tax context and annual return planning on lower salaries." },
    { title: "Relocation services", body: "Useful when a job offer depends on housing search, timing and family logistics." },
    { title: "Career support", body: "Recruitment and career guidance may help before accepting long-term minimum-wage-level roles." },
  ],
  services: [
    { label: "Recruitment agencies", href: "/netherlands/services/recruitment-agencies/", status: "live", description: "Services directory for comparing recruitment agency providers." },
    { label: "Relocation services", href: "/netherlands/services/relocation-services/", status: "live", description: "Help with move planning alongside job evaluation." },
    { label: "Tax advisors", href: "/netherlands/services/tax-advisors/", status: "live", description: "Payroll and tax questions for international workers." },
  ] satisfies MinimumWageNetherlandsLink[],
  relatedSalaryGuides: [
    { label: "Average Salary Netherlands", href: AVERAGE_SALARY_NETHERLANDS_PATH, status: "live", description: "Compare minimum wage with broader labour market benchmarks." },
    { label: "Net Salary Netherlands", href: NET_SALARY_NETHERLANDS_PATH, status: "live", description: "Understand take-home pay from gross offers." },
    { label: "Gross vs Net Salary", href: GROSS_VS_NET_SALARY_PATH, status: "live", description: "Why Dutch salaries are quoted gross." },
    { label: "Payroll Tax", href: PAYROLL_TAX_NETHERLANDS_PATH, status: "live", description: "How payroll deductions affect net pay." },
    { label: "Salary Negotiation", href: SALARY_NEGOTIATION_NETHERLANDS_PATH, status: "live", description: "When your offer sits above the legal floor." },
  ] satisfies MinimumWageNetherlandsLink[],
  relatedGuides: [
    {
      label: "Highly skilled migrant visa",
      href: HSM_VISA_PATH,
      status: "live",
      description: "Minimum wage is not an HSM salary threshold — 2026 IND floors are €5,942 (30+), €4,357 (under 30), €3,122 reduced.",
    },
    { label: "Netherlands Taxes Guide", href: TAXES_HUB_PATH, status: "live", description: "Salary and tax hub for expats." },
    { label: "Average Salary Netherlands", href: AVERAGE_SALARY_NETHERLANDS_PATH, status: "live", description: "Labour market benchmarks beyond the legal floor." },
    { label: "Expat Salary in the Netherlands", href: "/netherlands/jobs/expat-salary-netherlands/", status: "live", description: "Salary expectations for international professionals by city and industry." },
    { label: "Net Salary Netherlands", href: NET_SALARY_NETHERLANDS_PATH, status: "live", description: "Estimate take-home pay." },
    { label: "Gross vs Net Salary", href: GROSS_VS_NET_SALARY_PATH, status: "live", description: "Gross and net salary context." },
    { label: "Salary Negotiation", href: SALARY_NEGOTIATION_NETHERLANDS_PATH, status: "live", description: "Negotiating above minimum wage roles." },
    { label: "Moving to the Netherlands", href: "/netherlands/moving-to-the-netherlands/", status: "live", description: "Relocation planning with employment context." },
    { label: "Dutch Cities Guide", href: CITIES_HUB_PATH, status: "live", description: "Compare living costs by city." },
  ] satisfies MinimumWageNetherlandsLink[],
  exploreNextCards: [
    { label: "Average Salary Guide", href: AVERAGE_SALARY_NETHERLANDS_PATH, status: "live", description: "Benchmark beyond the legal floor." },
    { label: "Net Salary Calculator", href: DUTCH_SALARY_NET_CALCULATOR_PATH, status: "live", description: "Estimate take-home from gross pay." },
    { label: "Gross vs Net Salary", href: GROSS_VS_NET_SALARY_PATH, status: "live", description: "Understand Dutch salary wording." },
    { label: "Salary Negotiation", href: SALARY_NEGOTIATION_NETHERLANDS_PATH, status: "live", description: "When you can negotiate above the floor." },
    { label: "Dutch Cities Guide", href: CITIES_HUB_PATH, status: "live", description: "Compare city living costs." },
  ] satisfies MinimumWageNetherlandsLink[],
  officialSources: [
    {
      label: "Government.nl — Minimum wage amounts",
      href: "https://www.government.nl/themes/work/minimum-wage/minimum-wage-amounts",
      description: "Official hourly minimum wage tables for 1 July 2026 and 1 January 2026.",
    },
    {
      label: "Rijksoverheid — Bedragen minimumloon 2026",
      href: "https://www.rijksoverheid.nl/themas/werk/minimumloon/bedragen-minimumloon/bedragen-minimumloon-2026",
      description: "Dutch-language official minimum wage amounts for 2026.",
    },
    {
      label: "Business.gov.nl — Minimum wage",
      href: "https://business.gov.nl/regulation/minimum-wage/",
      description: "Employer-facing guidance on statutory minimum wage compliance.",
    },
    {
      label: "Belastingdienst",
      href: "https://www.belastingdienst.nl/",
      description: "Dutch Tax Administration — payroll tax and income tax context.",
    },
    {
      label: "Statistics Netherlands (CBS)",
      href: "https://www.cbs.nl/en-gb",
      description: "Official wage and labour market statistics for broader salary context.",
    },
  ],
  faq: [
    {
      q: "What is the minimum wage in the Netherlands?",
      a: "From 1 July 2026 the statutory hourly minimum for workers aged 21+ is €14.99/hr before tax (it was €14.71/hr from 1 January to 30 June 2026). Youth tiers apply below 21. Rates are published on Government.nl — verify the current schedule rather than relying on copied figures.",
    },
    {
      q: "Is minimum wage monthly or hourly?",
      a: "Since 2024 Dutch law sets minimum wage as an hourly rate (€14.99/hr for 21+ from 1 July 2026). Monthly gross follows contracted hours — there is no fixed government monthly minimum. Verify the current hourly schedule on Government.nl.",
    },
    {
      q: "Does minimum wage depend on age?",
      a: "Yes. Younger workers have lower statutory minimum wage tiers until the full adult rate generally applies from age 21.",
    },
    {
      q: "How much is minimum wage after tax?",
      a: "Take-home pay depends on payroll tax, pension contributions and personal circumstances. Use the net salary calculator with your gross contract figure for an illustrative estimate.",
    },
    {
      q: "Is minimum wage enough to live on?",
      a: "It depends on city, housing, household size and lifestyle. Minimum wage alone is often tight in expensive Randstad cities without shared accommodation or additional income.",
    },
    {
      q: "Do students receive minimum wage?",
      a: "Eligible student jobs must meet the statutory minimum for the worker's age band. Youth rates apply below the full adult minimum.",
    },
    {
      q: "How does minimum wage compare to average salary?",
      a: "Minimum wage is the legal floor. Average salaries for employed professionals are typically much higher — see the average salary guide for sector and city benchmarks.",
    },
    {
      q: "Do expats earn minimum wage?",
      a: "Many expats in skilled roles earn well above minimum wage. Some students, newcomers and service workers may encounter minimum-wage-level hourly pay.",
    },
  ],
} as const;
