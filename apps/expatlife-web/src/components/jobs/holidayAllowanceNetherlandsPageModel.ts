export const HOLIDAY_ALLOWANCE_NETHERLANDS_PATH = "/netherlands/jobs/holiday-allowance-netherlands/" as const;
export const DUTCH_SALARY_NET_CALCULATOR_PATH = "/netherlands/taxes/tools/dutch-salary-net-calculator/" as const;
export const SALARY_NEGOTIATION_NETHERLANDS_PATH = "/netherlands/jobs/salary-negotiation-netherlands/" as const;
export const EXPAT_SALARY_NETHERLANDS_PATH = "/netherlands/jobs/expat-salary-netherlands/" as const;
export const EMPLOYEE_BENEFITS_NETHERLANDS_PATH = "/netherlands/jobs/employee-benefits-netherlands/" as const;
export const PENSION_NETHERLANDS_EXPATS_PATH = "/netherlands/jobs/pension-netherlands-expats/" as const;
export const NET_SALARY_NETHERLANDS_PATH = "/netherlands/taxes/net-salary-netherlands/" as const;
export const GROSS_VS_NET_SALARY_PATH = "/netherlands/taxes/gross-vs-net-salary/" as const;
export const PAYROLL_TAX_NETHERLANDS_PATH = "/netherlands/taxes/payroll-tax-netherlands/" as const;
export const THIRTY_PERCENT_RULING_PATH = "/netherlands/taxes/30-percent-ruling/" as const;
export const TAXES_HUB_PATH = "/netherlands/taxes/" as const;
export const MOVING_HUB_PATH = "/netherlands/moving-to-the-netherlands/" as const;
export const JOBS_HUB_PATH = "/netherlands/moving/working-in-the-netherlands/" as const;

export const HOLIDAY_ALLOWANCE_NETHERLANDS_AFFILIATE_PLACEMENT_ID =
  "nl-jobs-holiday-allowance-netherlands-support-providers" as const;

export type HolidayAllowanceNetherlandsLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export const holidayAllowanceNetherlandsPage = {
  slug: "holiday-allowance-netherlands",
  path: HOLIDAY_ALLOWANCE_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2026-06-24",
  seo: {
    title: "Holiday Allowance in the Netherlands | Vakantiegeld Explained for Expats",
    description:
      "Learn how holiday allowance (vakantiegeld) works in the Netherlands, including how it is paid, taxed and included in salary packages for expats and employees.",
    keywords: [
      "holiday allowance netherlands",
      "vakantiegeld netherlands",
      "vacation allowance netherlands",
      "dutch holiday allowance",
      "holiday pay netherlands",
      "holiday allowance expats",
      "vakantiegeld expats",
      "salary netherlands holiday allowance",
      "gross salary holiday allowance",
      "netherlands work benefits",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Jobs · Compensation",
    pageTitle: "Holiday Allowance in the Netherlands",
    subtitle:
      "Understand how Dutch holiday allowance (vakantiegeld) works, when employees receive it, how it affects salary and taxes, and what expats should know when comparing job offers.",
    primaryCta: { label: "Understand Vakantiegeld", href: "#intro" },
    secondaryCta: { label: "Explore Salary & Tax Guides", href: TAXES_HUB_PATH },
    chips: ["Vakantiegeld", "Annual payment", "Gross compensation", "Offer comparisons"],
    image: {
      src: "/images/heroes/netherlands-holiday-allowance-netherlands-hero-v2.png",
      alt: "Photorealistic editorial photo of an international professional reviewing payslip notes and a May/June calendar at a canal-side café table in Amsterdam, with soft-focus Dutch canal houses and bicycles in the background.",
    },
  },
  infographics: {
    introFlow: {
      src: "/images/infographics/netherlands-holiday-allowance-intro-flow-infographic-v2.png",
      alt: "Infographic explaining what Dutch holiday allowance (vakantiegeld) is and how it fits into compensation packages.",
      caption: "Vakantiegeld is a common salary component in the Netherlands — not a universal bonus in every country.",
    },
    offerReview: {
      src: "/images/infographics/netherlands-holiday-allowance-offer-review-infographic-v2.png",
      alt: "Infographic checklist for reviewing holiday allowance wording in Dutch job offers including gross basis and payment timing.",
      caption: "Always confirm in writing whether quoted salary includes or excludes holiday allowance.",
    },
    snapshot: {
      src: "/images/infographics/netherlands-holiday-allowance-snapshot-infographic-v2.png",
      alt: "Infographic snapshot of Dutch holiday allowance at a glance including vakantiegeld term, payment timing and expat context.",
      caption: "Use this as orientation — exact arrangements vary by employer, industry and collective agreement.",
    },
    howItWorks: {
      src: "/images/infographics/netherlands-holiday-allowance-how-it-works-infographic-v2.png",
      alt: "Infographic showing how vakantiegeld is usually calculated as a percentage of salary and accrued over time.",
      caption: "Government guidance describes minimum rules — employer and CAO details can differ.",
    },
    paymentTiming: {
      src: "/images/infographics/netherlands-holiday-allowance-payment-timing-infographic-v2.png",
      alt: "Infographic showing when Dutch employers typically pay holiday allowance annually versus monthly spread options.",
      caption: "May/June is common for annual payouts — verify your contract and payslip schedule.",
    },
    mandatory: {
      src: "/images/infographics/netherlands-holiday-allowance-mandatory-infographic-v2.png",
      alt: "Infographic overview of when holiday allowance is mandatory under Dutch labour law and collective agreements.",
      caption: "Legal framing exists — implementation details vary. This is orientation, not legal advice.",
    },
    salaryInclusion: {
      src: "/images/infographics/netherlands-holiday-allowance-salary-inclusion-infographic-v2.png",
      alt: "Infographic comparing €60,000 salary offers with and without holiday allowance included in the quoted figure.",
      caption: "Illustrative examples only — always confirm gross basis and inclusions in writing.",
    },
    grossNet: {
      src: "/images/infographics/netherlands-holiday-allowance-gross-net-infographic-v2.png",
      alt: "Infographic explaining how holiday allowance is paid gross and affected by payroll tax and pension deductions.",
      caption: "Take-home value depends on payroll setup — model net pay rather than assuming the full gross amount.",
    },
    expatContext: {
      src: "/images/infographics/netherlands-holiday-allowance-expat-context-infographic-v2.png",
      alt: "Infographic showing common expat misunderstandings about Dutch holiday allowance when comparing international offers.",
      caption: "Vakantiegeld is typically structured compensation — not discretionary bonus money.",
    },
    thirtyRuling: {
      src: "/images/infographics/netherlands-holiday-allowance-thirty-ruling-infographic-v2.png",
      alt: "Infographic overview of how the 30% ruling may interact conceptually with holiday allowance and payroll tax.",
      caption: "Tax treatment depends on eligibility and payroll setup — not tax advice.",
    },
    industry: {
      src: "/images/infographics/netherlands-holiday-allowance-industry-infographic-v2.png",
      alt: "Infographic comparing holiday allowance structures across Dutch industries including tech, finance and hospitality.",
      caption: "Payment timing and contract wording vary strongly by sector and employer size.",
    },
    bonusVsAllowance: {
      src: "/images/infographics/netherlands-holiday-allowance-bonus-vs-allowance-infographic-v2.png",
      alt: "Infographic comparing structured holiday allowance with discretionary performance bonuses in Dutch compensation.",
      caption: "Holiday allowance and bonuses serve different roles in total compensation.",
    },
    questions: {
      src: "/images/infographics/netherlands-holiday-allowance-questions-infographic-v2.png",
      alt: "Infographic summarising common expat questions about vakantiegeld including taxation, timing and salary inclusion.",
      caption: "Use these prompts when reviewing contracts — orientation only, not payroll advice.",
    },
    totalCompensation: {
      src: "/images/infographics/netherlands-holiday-allowance-total-compensation-infographic-v2.png",
      alt: "Infographic connecting holiday allowance to total Dutch compensation including pension, bonus and benefits.",
      caption: "Compare full packages — base salary alone can mislead when vakantiegeld is quoted differently.",
    },
    services: {
      src: "/images/infographics/netherlands-holiday-allowance-services-infographic-v2.png",
      alt: "Infographic showing professional services that may help with holiday allowance and payroll questions.",
      caption: "Use professionals for contract-specific questions — this guide is orientation only.",
    },
    officialSourcesMap: {
      src: "/images/infographics/netherlands-holiday-allowance-official-sources-infographic-v2.png",
      alt: "Infographic map of official sources for Dutch holiday allowance including Government.nl, Rijksoverheid and Business.gov.nl.",
      caption: "Rules and guidance evolve — verify current information on official government sites.",
    },
    exploreNext: {
      src: "/images/infographics/netherlands-holiday-allowance-explore-next-infographic-v2.png",
      alt: "Infographic showing connected next-step guides after the holiday allowance guide including employee benefits and net salary calculator.",
      caption: "Vakantiegeld connects naturally into salary, tax and benefits guides.",
    },
    calculatorFlow: {
      src: "/images/infographics/netherlands-holiday-allowance-calculator-flow-infographic-v2.png",
      alt: "Infographic flow for modelling net pay including holiday allowance timing and payroll tax context.",
      caption: "Model annual and monthly pay before comparing offers — orientation only, not tax advice.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#payment-timing", label: "When paid" },
    { href: "#mandatory", label: "Mandatory?" },
    { href: "#salary-inclusion", label: "In salary?" },
    { href: "#gross-net", label: "Tax & net" },
    { href: "#expat-context", label: "Expats" },
    { href: "#thirty-ruling", label: "30% ruling" },
    { href: "#industry", label: "Industry" },
    { href: "#questions", label: "Questions" },
    { href: "#bonus-vs-allowance", label: "Bonus vs allowance" },
    { href: "#total-compensation", label: "Total package" },
    { href: "#related-salary-guides", label: "Salary guides" },
    { href: "#calculator", label: "Calculator" },
    { href: "#services", label: "Services" },
    { href: "#faq", label: "FAQ" },
    { href: "#sources", label: "Sources" },
  ],
  conceptCards: [
    { title: "Structured pay component", body: "Vakantiegeld is usually part of Dutch compensation — not a surprise bonus in most employment contracts." },
    { title: "Quote confusion", body: "Some offers quote salary excluding holiday allowance; others include it — comparisons go wrong quickly." },
    { title: "Gross context", body: "Holiday allowance is typically paid gross; payroll tax and pension deductions affect the net amount you receive." },
  ],
  snapshotCards: [
    { label: "Dutch term", value: "Vakantiegeld" },
    { label: "Minimum rule of thumb", value: "~8% of gross salary" },
    { label: "Often paid", value: "Yearly (May/June common)" },
    { label: "Usually discussed", value: "Gross (before tax)" },
    { label: "Offer trap", value: "Inclusive vs exclusive quotes" },
    { label: "Expats", value: "Often confuse with bonus pay" },
  ],
  snapshotTips: [
    "Government guidance references a minimum holiday allowance percentage — employer and CAO terms can differ.",
    "May/June annual payouts are common but not universal — some employers spread vakantiegeld monthly.",
    "Two offers with the same €60,000 headline can represent different total gross if one includes vakantiegeld.",
    "Holiday allowance is paid gross — payroll tax and pension reduce what lands in your account.",
  ],
  introChecklist: [
    "Ask whether quoted gross salary includes or excludes holiday allowance.",
    "Confirm payment timing — annual lump sum vs monthly spread.",
    "Check collective agreement (CAO) or contract wording for your role.",
    "Model net pay including vakantiegeld before comparing international offers.",
  ],
  howItWorksTips: [
    "Holiday allowance is commonly calculated as a percentage of salary accrued over the year — minimum rules exist under Dutch law (often discussed as ~8%).",
    "Employers may pay it as a separate annual amount or spread it across monthly payslips.",
    "Sector collective agreements (CAOs) often define timing, calculation basis and exceptions.",
    "Verify your personal contract and payslip — this guide does not interpret individual agreements.",
  ],
  proRataTips: [
    "Starting mid-year? Vakantiegeld is often calculated only for the months you actually worked.",
    "Leaving before the payout month? Check whether accrued allowance is paid out on your final settlement.",
    "Part-time contracts usually scale allowance proportionally to contracted hours.",
    "Overtime and variable pay may or may not count toward the calculation basis — confirm in your contract.",
  ],
  paymentTimingScenarios: [
    {
      title: "Annual lump sum (May/June)",
      body: "One larger gross payment before summer leave — plan rent, travel and tax prep around the spike.",
    },
    {
      title: "Monthly spread on payslip",
      body: "Smaller vakantiegeld component each month — smoother cash-flow without a seasonal windfall.",
    },
    {
      title: "Mid-year start (pro-rata)",
      body: "First-year allowance is often reduced to reflect only the months you were employed.",
    },
  ],
  paymentTimingTips: [
    "Many employers pay vakantiegeld once per year, often in May or June before summer leave.",
    "Some employers spread holiday allowance monthly — your payslip may show a smaller regular component instead of a lump sum.",
    "Payment date can affect cash-flow planning for rent, travel and tax prep — note it in your budget.",
    "Always confirm timing in your contract or HR documentation, not from general guides alone.",
  ],
  mandatoryTips: [
    "Dutch labour law includes minimum holiday allowance rules for employees covered by the scheme.",
    "Collective labour agreements may set higher standards or different implementation for specific sectors.",
    "Certain contract types and arrangements may differ — read your contract and official sources.",
    "This guide explains concepts only — not legal guarantees for your employment situation.",
  ],
  salaryInclusionExamples: [
    {
      title: "€60,000 excluding vakantiegeld",
      body: "If holiday allowance is paid on top, total gross compensation may be higher than the headline figure — often around 8% on top depending on contract rules.",
    },
    {
      title: "€60,000 including vakantiegeld",
      body: "The quoted figure already embeds holiday allowance — monthly base salary is lower than a comparable “excluding” offer with the same headline number.",
    },
    {
      title: "Why it matters",
      body: "Two offers with identical €60,000 labels can represent different total gross pay — always ask which basis HR uses.",
    },
  ],
  salaryWorkedExamples: [
    {
      label: "€60,000 excluding vakantiegeld",
      value: "~€64,800 illustrative total gross",
      note: "Rule of thumb: ~8% on €60,000 adds roughly €4,800 if paid on top. Your contract and CAO set the exact basis.",
    },
    {
      label: "€60,000 including vakantiegeld",
      value: "€60,000 total gross cap",
      note: "Monthly salary is lower because vakantiegeld is already inside the headline — not extra on top.",
    },
    {
      label: "Negotiation takeaway",
      value: "Compare total gross, not labels",
      note: "Ask HR: “Is this figure inclusive or exclusive of holiday allowance, and when is it paid?”",
    },
  ],
  salaryInclusionChecklist: [
    "Request the gross annual figure both with and without vakantiegeld if HR only quotes one number.",
    "Ask whether overtime, bonuses or allowances count toward the vakantiegeld calculation basis.",
    "Compare monthly base pay separately — inclusive quotes hide a lower monthly salary.",
    "Get payment timing in writing before accepting — lump sum vs monthly spread changes budgeting.",
  ],
  grossNetTips: [
    "Holiday allowance is generally paid gross — payroll tax and social contributions apply like other employment income.",
    "Pension deductions may also reduce the net amount depending on payroll setup.",
    "A large May/June payment can affect monthly cash-flow even when annual net is similar — plan accordingly.",
    "Use the gross vs net and net salary guides plus the calculator for orientation, not tax advice.",
  ],
  payslipChecklist: [
    "Look for a separate vakantiegeld or holiday allowance line on your May/June payslip — or a recurring component if spread monthly.",
    "Distinguish vakantiegeld from performance bonus lines — they are different compensation components.",
    "Check loonheffing (payroll tax) on the allowance payment — it is taxed like regular salary.",
    "Compare annual gross on your jaaropgave (annual statement) to confirm total vakantiegeld received.",
  ],
  expatTips: [
    "Many expats assume vakantiegeld is discretionary bonus pay — in the Netherlands it is usually structured compensation.",
    "International salary comparisons fail when one country includes holiday pay in monthly salary and another pays it separately.",
    "Recruiters may quote annual gross without clarifying inclusions — ask explicitly before negotiating.",
    "Connect to the employee benefits and salary negotiation guides for full package context.",
  ],
  expatScenarios: [
    {
      title: "US/UK monthly salary mindset",
      body: "If you expect all compensation in 12 equal payslips, a May/June vakantiegeld lump sum can surprise your budget — confirm timing early.",
    },
    {
      title: "Comparing offers across countries",
      body: "A higher Amsterdam gross may include vakantiegeld while a London offer does not — normalise total gross before deciding.",
    },
    {
      title: "Recruiter headline figures",
      body: "“€70k package” may or may not include holiday allowance — ask for a written breakdown of base, vakantiegeld, pension and bonus.",
    },
  ],
  thirtyRulingTips: [
    "Eligible expats under the 30% ruling may have different payroll tax treatment on compensation components.",
    "Holiday allowance still forms part of employment income — how it appears on payslips can differ by employer setup.",
    "Do not assume the ruling applies automatically or that net outcomes match generic calculators.",
    "Read the 30% ruling guide and confirm payroll treatment with your employer or a qualified tax adviser.",
  ],
  industryCards: [
    { title: "Technology", body: "Often clear annual vakantiegeld with May/June payout; startups may use simpler monthly structures." },
    { title: "Finance", body: "Structured contracts with explicit gross bases; bonus cycles separate from holiday allowance." },
    { title: "Consulting", body: "Project-based roles may differ — verify whether allowance applies to your contract type." },
    { title: "Hospitality", body: "Seasonal patterns may affect timing; CAO rules common in the sector." },
    { title: "Government", body: "Transparent scales with predictable vakantiegeld timing and calculation." },
    { title: "Healthcare", body: "Sector CAOs often define allowance rules alongside shift and scale pay." },
    { title: "Engineering", body: "Large employers typically follow standard annual vakantiegeld patterns." },
    { title: "Retail", body: "Part-time and variable hours can affect accrual — confirm basis in contract." },
  ],
  industryTips: [
    "CAO (collective agreement) rules often override generic assumptions — ask HR if your role is CAO-covered.",
    "Multinationals may apply Dutch vakantiegeld rules even when using global pay bands — verify local payroll setup.",
    "Agency and temporary contracts can have different allowance wording — read the agency agreement, not just the client role description.",
    "Sector norms help orientation but your written contract is what matters for your specific job.",
  ],
  expatQuestions: [
    { q: "Is holiday allowance extra salary?", a: "It is usually a structured part of Dutch compensation, not discretionary bonus pay — though contract wording determines how it appears in offers." },
    { q: "Is it included in job offers?", a: "Some employers quote salary excluding vakantiegeld; others include it in the headline figure. Always ask which basis is used." },
    { q: "Is vakantiegeld taxed?", a: "Holiday allowance is generally paid gross and subject to payroll tax like other employment income. Net amounts depend on your situation." },
    { q: "When is it paid?", a: "Many employers pay once per year, often in May or June. Others spread it monthly across payslips." },
    { q: "Is it mandatory?", a: "Minimum rules exist under Dutch law for covered employees, but details vary by contract type and collective agreements." },
    { q: "Do all employees receive it?", a: "Most employees in standard employment relationships receive holiday allowance, but exceptions and contract types exist — verify your agreement." },
    { q: "Monthly or yearly?", a: "Both structures exist. Annual lump sums are common; monthly spread is an alternative some employers use." },
    { q: "Does the 30% ruling affect it?", a: "Payroll tax treatment may differ for eligible expats — confirm with your employer and official guidance, not assumptions." },
  ],
  bonusVsAllowanceTips: [
    "Holiday allowance is typically a structured, recurring component tied to salary accrual.",
    "Bonuses are often performance-related, discretionary or contract-specific — different tax and timing rules may apply.",
    "Do not treat vakantiegeld as a guaranteed substitute for bonus schemes or vice versa.",
    "Compare total compensation including both when evaluating senior roles.",
  ],
  bonusComparisonRows: [
    { aspect: "Typical purpose", allowance: "Annual salary supplement for holiday period", bonus: "Performance, retention or discretionary reward" },
    { aspect: "Predictability", allowance: "Usually accrues with salary — minimum rules apply", bonus: "Often variable or contract-specific" },
    { aspect: "Payment timing", allowance: "May/June lump sum or monthly spread", bonus: "Year-end, quarterly or ad hoc" },
    { aspect: "Offer wording", allowance: "Often explicit as vakantiegeld or holiday allowance", bonus: "May be “target” or “up to” — not guaranteed" },
  ],
  totalCompensationItems: [
    { title: "Base salary", body: "Monthly or annual gross before clarifying inclusions.", href: EXPAT_SALARY_NETHERLANDS_PATH },
    { title: "Holiday allowance", body: "Vakantiegeld — confirm inclusion and payment timing.", href: HOLIDAY_ALLOWANCE_NETHERLANDS_PATH },
    { title: "Pension", body: "Employer and employee contributions affect long-term value.", href: PENSION_NETHERLANDS_EXPATS_PATH },
    { title: "Employee benefits", body: "Leave, mobility, WFH and insurance alongside vakantiegeld.", href: EMPLOYEE_BENEFITS_NETHERLANDS_PATH },
    { title: "Gross vs net", body: "Why headline gross differs from take-home after deductions.", href: GROSS_VS_NET_SALARY_PATH },
    { title: "Salary negotiation", body: "Compare packages in writing, not headline figures alone.", href: SALARY_NEGOTIATION_NETHERLANDS_PATH },
  ],
  relatedSalaryGuideTips: [
    "Use the gross vs net salary guide to see how vakantiegeld affects annual gross and take-home pay.",
    "Read the employee benefits guide for holiday allowance alongside pension, leave and mobility.",
    "Benchmark offers with the expat salary guide before negotiating total compensation.",
    "Connect the payroll tax guide to understand how holiday allowance appears on payslips.",
  ],
  faqQuickChecks: [
    "Confirm whether quoted salary includes or excludes holiday allowance in writing.",
    "Check payment timing — annual lump sum vs monthly spread on payslips.",
    "Model net pay with vakantiegeld included before comparing two offers.",
    "Verify CAO or sector rules if your employer mentions collective agreements.",
  ],
  relatedSalaryGuides: [
    { label: "Employee Benefits", href: EMPLOYEE_BENEFITS_NETHERLANDS_PATH, status: "live", description: "Full guide to Dutch work benefits including vakantiegeld context." },
    { label: "Salary Negotiation", href: SALARY_NEGOTIATION_NETHERLANDS_PATH, status: "live", description: "Negotiate total compensation including holiday allowance." },
    { label: "Gross vs Net Salary", href: GROSS_VS_NET_SALARY_PATH, status: "live", description: "Understand how deductions affect take-home pay." },
    { label: "Net Salary Guide", href: NET_SALARY_NETHERLANDS_PATH, status: "live", description: "Estimate take-home pay from your package." },
    { label: "Payroll Tax", href: PAYROLL_TAX_NETHERLANDS_PATH, status: "live", description: "How payroll tax applies to employment income." },
    { label: "Pension Guide", href: PENSION_NETHERLANDS_EXPATS_PATH, status: "live", description: "Pension alongside holiday allowance in total packages." },
  ] satisfies HolidayAllowanceNetherlandsLink[],
  calculatorToolCta: {
    title: "Model Take-Home Pay Including Vakantiegeld",
    description:
      "Holiday allowance affects annual gross and sometimes monthly cash-flow. Use the Dutch salary net calculator to explore gross-to-net context alongside payroll tax.",
    supportingText:
      "Pair the calculator with the gross vs net guide when comparing offers. Results are illustrative — not tax or payroll advice.",
    primaryCta: { label: "Open net salary calculator", href: DUTCH_SALARY_NET_CALCULATOR_PATH },
    secondaryCta: { label: "Gross vs net guide", href: GROSS_VS_NET_SALARY_PATH },
    disclaimer: "Calculator outputs are orientation only. Confirm contract wording and payslip lines with your employer.",
    prepItems: [
      { label: "Gross basis", body: "Confirm whether quoted salary includes or excludes holiday allowance." },
      { label: "Payment timing", body: "Annual lump sum vs monthly spread changes cash-flow planning." },
      { label: "Total package", body: "Compare vakantiegeld alongside pension, bonus and other benefits." },
    ],
  },
  affiliatePlacementId: HOLIDAY_ALLOWANCE_NETHERLANDS_AFFILIATE_PLACEMENT_ID,
  servicesWhenToUse: [
    { title: "Tax advisors", body: "Help interpret payroll tax and 30% ruling context for compensation components." },
    { title: "Payroll specialists", body: "Clarify payslip lines, vakantiegeld timing and contract wording." },
    { title: "Recruitment agencies", body: "Useful when comparing offer structures across Dutch employers." },
    { title: "Relocation services", body: "Employment package context when planning a move to the Netherlands." },
  ],
  services: [
    { label: "Tax advisors", href: "/netherlands/services/tax-advisors/", status: "live", description: "Payroll tax and expat compensation context." },
    { label: "Payroll services", href: "/netherlands/services/payroll-services/", status: "comingSoon", description: "Future directory for payroll support." },
    { label: "Recruitment agencies", href: "/netherlands/services/recruitment-agencies/", status: "live", description: "Services directory for comparing recruitment agency providers." },
    { label: "Relocation services", href: "/netherlands/services/relocation-services/", status: "live", description: "Move planning alongside employment offers." },
  ] satisfies HolidayAllowanceNetherlandsLink[],
  faq: [
    {
      q: "What is holiday allowance in the Netherlands?",
      a: "Holiday allowance (vakantiegeld) is a common part of Dutch compensation — usually calculated as a percentage of salary and paid annually or spread monthly depending on employer arrangements.",
    },
    {
      q: "Is vakantiegeld mandatory?",
      a: "Dutch labour law includes minimum holiday allowance rules for covered employees. Details may vary by contract type, employer and collective agreements.",
    },
    {
      q: "When is holiday allowance paid?",
      a: "Many employers pay once per year, often in May or June. Others spread vakantiegeld across monthly payslips.",
    },
    {
      q: "Is holiday allowance taxed?",
      a: "Holiday allowance is generally paid gross and subject to payroll tax like other employment income. Net amounts depend on your payroll setup and personal situation.",
    },
    {
      q: "Is holiday allowance included in salary?",
      a: "Some offers quote salary excluding vakantiegeld; others include it in the headline figure. Always confirm the gross basis in writing.",
    },
    {
      q: "Do expats receive holiday allowance?",
      a: "Expats in standard Dutch employment typically receive holiday allowance like other employees, subject to contract and sector rules.",
    },
    {
      q: "How is holiday allowance calculated?",
      a: "It is commonly calculated as a percentage of salary accrued over the year. Minimum rules exist — verify your contract and CAO for specifics.",
    },
    {
      q: "Does the 30% ruling affect holiday allowance?",
      a: "Payroll tax treatment may differ for eligible expats. Confirm with your employer and official guidance — not assumptions from generic guides.",
    },
  ],
  officialSources: [
    {
      label: "Government.nl — Holiday allowance",
      href: "https://www.government.nl/topics/minimum-wage/holiday-allowance",
      description: "Official overview of holiday allowance rules in the Netherlands.",
    },
    {
      label: "Business.gov.nl — Paying holiday allowance",
      href: "https://business.gov.nl/running-your-business/staff/terms-of-employment/paying-holiday-allowance-to-your-staff/",
      description: "Employer guidance on paying vakantiegeld to staff.",
    },
    {
      label: "Rijksoverheid — Vakantiegeld",
      href: "https://www.rijksoverheid.nl/onderwerpen/minimumloon/vakantiegeld",
      description: "Dutch-language official information on holiday allowance.",
    },
    {
      label: "Belastingdienst",
      href: "https://www.belastingdienst.nl/",
      description: "Tax authority guidance relevant to payroll and employment income.",
    },
  ],
  relatedGuides: [
    { label: "Jobs & Career Hub", href: JOBS_HUB_PATH, status: "live", description: "Working in the Netherlands — employment context." },
    { label: "Employee Benefits", href: EMPLOYEE_BENEFITS_NETHERLANDS_PATH, status: "live", description: "Full guide to Dutch work benefits." },
    { label: "Expat Salary Guide", href: EXPAT_SALARY_NETHERLANDS_PATH, status: "live", description: "Salary context for international professionals." },
    { label: "Netherlands Taxes Guide", href: TAXES_HUB_PATH, status: "live", description: "Tax hub connecting salary and vakantiegeld." },
    { label: "Net Salary Guide", href: NET_SALARY_NETHERLANDS_PATH, status: "live", description: "Estimate take-home pay from your package." },
    { label: "Gross vs Net Salary", href: GROSS_VS_NET_SALARY_PATH, status: "live", description: "Why holiday allowance affects net pay context." },
    { label: "Bonus Tax Guide", href: "/netherlands/taxes/bonus-tax-netherlands/", status: "live", description: "Why bonuses seem heavily taxed — withholding vs final tax." },
    { label: "Moving to the Netherlands", href: MOVING_HUB_PATH, status: "live", description: "Relocation planning with employment offers." },
  ] satisfies HolidayAllowanceNetherlandsLink[],
  exploreNextCards: [
    { label: "Employee Benefits", href: EMPLOYEE_BENEFITS_NETHERLANDS_PATH, status: "live", description: "Full Dutch work benefits guide." },
    { label: "Salary Negotiation", href: SALARY_NEGOTIATION_NETHERLANDS_PATH, status: "live", description: "Negotiate total compensation including vakantiegeld." },
    { label: "Net Salary Calculator", href: DUTCH_SALARY_NET_CALCULATOR_PATH, status: "live", description: "Estimate take-home pay after deductions." },
    { label: "30% Ruling", href: THIRTY_PERCENT_RULING_PATH, status: "live", description: "Expat tax scheme and package context." },
    { label: "Payroll Tax Guide", href: PAYROLL_TAX_NETHERLANDS_PATH, status: "live", description: "How payroll tax applies to employment income." },
    { label: "Bonus Tax Guide", href: "/netherlands/taxes/bonus-tax-netherlands/", status: "live", description: "Why bonuses seem heavily taxed on Dutch payslips." },
  ] satisfies HolidayAllowanceNetherlandsLink[],
} as const;
