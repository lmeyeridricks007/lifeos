export const EMPLOYEE_BENEFITS_NETHERLANDS_PATH = "/netherlands/jobs/employee-benefits-netherlands/" as const;
export const DUTCH_SALARY_NET_CALCULATOR_PATH = "/netherlands/taxes/tools/dutch-salary-net-calculator/" as const;
export const SALARY_NEGOTIATION_NETHERLANDS_PATH = "/netherlands/jobs/salary-negotiation-netherlands/" as const;
export const EXPAT_SALARY_NETHERLANDS_PATH = "/netherlands/jobs/expat-salary-netherlands/" as const;
export const AVERAGE_SALARY_NETHERLANDS_PATH = "/netherlands/taxes/average-salary-netherlands/" as const;
export const NET_SALARY_NETHERLANDS_PATH = "/netherlands/taxes/net-salary-netherlands/" as const;
export const GROSS_VS_NET_SALARY_PATH = "/netherlands/taxes/gross-vs-net-salary/" as const;
export const PAYROLL_TAX_NETHERLANDS_PATH = "/netherlands/taxes/payroll-tax-netherlands/" as const;
export const THIRTY_PERCENT_RULING_PATH = "/netherlands/taxes/30-percent-ruling/" as const;
export const TAXES_HUB_PATH = "/netherlands/taxes/" as const;
export const MOVING_HUB_PATH = "/netherlands/moving-to-the-netherlands/" as const;

export const EMPLOYEE_BENEFITS_AFFILIATE_PLACEMENT_ID = "nl-jobs-employee-benefits-support-providers" as const;

export type EmployeeBenefitsNetherlandsLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export const employeeBenefitsNetherlandsPage = {
  slug: "employee-benefits-netherlands",
  path: EMPLOYEE_BENEFITS_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2026-06-17",
  seo: {
    title: "Employee Benefits in the Netherlands | Expat Guide to Dutch Work Benefits",
    description:
      "Learn about employee benefits in the Netherlands, including pension, holiday allowance, vacation days, sick leave, parental leave, remote work and expat compensation packages.",
    keywords: [
      "employee benefits netherlands",
      "dutch employee benefits",
      "benefits netherlands jobs",
      "expat benefits netherlands",
      "netherlands work benefits",
      "holiday allowance netherlands",
      "pension netherlands expats",
      "vacation days netherlands",
      "parental leave netherlands",
      "sick leave netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Jobs · Employee benefits",
    pageTitle: "Employee Benefits in the Netherlands",
    subtitle:
      "Understand the most common employee benefits in the Netherlands, including pension, holiday allowance, paid leave, remote work and expat-focused compensation packages.",
    primaryCta: { label: "Explore Dutch Work Benefits", href: "#intro" },
    secondaryCta: { label: "Understand Salary & Taxes", href: GROSS_VS_NET_SALARY_PATH },
    chips: ["Total compensation", "Pension & leave", "Expat packages", "Negotiation context"],
    image: {
      src: "/images/heroes/netherlands-employee-benefits-hero-v2.png",
      alt: "Photorealistic editorial photo of an international professional reviewing a Dutch employee benefits overview beside a laptop in a bright Utrecht office lounge, with canal houses and bicycles visible through the window.",
    },
  },
  infographics: {
    introFlow: {
      src: "/images/infographics/netherlands-employee-benefits-intro-flow-infographic.png",
      alt: "Infographic showing how Dutch employee benefits layer onto gross salary to form total compensation including holiday allowance, pension, leave and employer perks.",
      caption: "Benefits sit on top of base salary — compare the full package, not the headline gross figure alone.",
    },
    offerReview: {
      src: "/images/infographics/netherlands-employee-benefits-offer-review-infographic.png",
      alt: "Infographic checklist for reviewing Dutch job offer benefits including vakantiegeld, pension, mobility and net pay modelling.",
      caption: "Use this checklist when comparing written offers — orientation only, not legal advice.",
    },
    snapshot: {
      src: "/images/infographics/netherlands-employee-benefits-snapshot-infographic.png",
      alt: "Infographic snapshot of Dutch employee benefits at a glance including holiday allowance, pension, paid leave, remote work, sick leave and expat relocation support.",
      caption: "Benefits vary by employer and industry — use this as orientation, not a guarantee of your package.",
    },
    mandatoryOptional: {
      src: "/images/infographics/netherlands-employee-benefits-mandatory-optional-infographic.png",
      alt: "Infographic comparing mandatory versus optional employee benefits in the Netherlands including statutory leave and employer-specific perks.",
      caption: "Some protections are defined by law or collective agreements; many perks depend on your employer.",
    },
    holidayAllowance: {
      src: "/images/infographics/netherlands-employee-benefits-holiday-allowance-infographic.png",
      alt: "Infographic explaining Dutch holiday allowance (vakantiegeld) as part of total compensation.",
      caption: "Holiday allowance is often around 8% of salary — confirm whether your offer includes it separately.",
    },
    vacation: {
      src: "/images/infographics/netherlands-employee-benefits-vacation-days-infographic.png",
      alt: "Infographic showing vacation days and paid leave in Dutch employment including statutory minimum and extra company leave.",
      caption: "Leave entitlements can vary by contract, sector and collective agreements.",
    },
    pension: {
      src: "/images/infographics/netherlands-employee-benefits-pension-infographic.png",
      alt: "Infographic explaining employer pension contributions in the Netherlands and expat portability considerations.",
      caption: "Pension can materially affect take-home pay and long-term savings — read your contract carefully.",
    },
    sickLeave: {
      src: "/images/infographics/netherlands-employee-benefits-sick-leave-infographic.png",
      alt: "Infographic overview of sick leave and employee protection during illness in the Netherlands with employer and employee responsibilities.",
      caption: "Illness and reintegration rules are governed by Dutch labour law — verify official guidance for your situation.",
    },
    parentalLeave: {
      src: "/images/infographics/netherlands-employee-benefits-parental-leave-infographic.png",
      alt: "Infographic showing maternity, partner and parental leave frameworks for employees in the Netherlands.",
      caption: "Family leave rules depend on employment status and employer policies — check official sources.",
    },
    remoteWork: {
      src: "/images/infographics/netherlands-employee-benefits-remote-work-infographic.png",
      alt: "Infographic showing remote work and hybrid benefits commonly offered by Dutch employers including flexibility and home office support.",
      caption: "Hybrid work is increasingly common but varies strongly by industry and role.",
    },
    mobility: {
      src: "/images/infographics/netherlands-employee-benefits-mobility-infographic.png",
      alt: "Infographic of transport and mobility benefits in the Netherlands including public transport, bicycle plans and mileage reimbursement.",
      caption: "Mobility support can significantly reduce commuting costs in Randstad cities.",
    },
    relocation: {
      src: "/images/infographics/netherlands-employee-benefits-relocation-expat-infographic.png",
      alt: "Infographic showing relocation benefits for expats in the Netherlands including housing, visa support and 30% ruling assistance.",
      caption: "International packages vary widely — seniority, employer and visa route all matter.",
    },
    bonusEquity: {
      src: "/images/infographics/netherlands-employee-benefits-bonus-equity-infographic.png",
      alt: "Infographic explaining bonuses, equity and variable compensation in Dutch employment across tech, finance and consulting.",
      caption: "Variable pay is more common in some sectors — understand tax treatment separately.",
    },
    industry: {
      src: "/images/infographics/netherlands-employee-benefits-by-industry-infographic.png",
      alt: "Infographic comparing employee benefit structures across Dutch industries including technology, finance, healthcare and government.",
      caption: "Benefit packages differ more by sector and employer size than by city alone.",
    },
    benefitsVsSalary: {
      src: "/images/infographics/netherlands-employee-benefits-vs-salary-infographic.png",
      alt: "Infographic showing why two identical gross salaries can feel different once pension, leave, remote work and mobility benefits are included.",
      caption: "Compare total compensation, not headline gross salary alone.",
    },
    questions: {
      src: "/images/infographics/netherlands-employee-benefits-questions-infographic.png",
      alt: "Infographic summarising common expat questions about Dutch employee benefits including holiday allowance, pension and transport reimbursement.",
      caption: "Use these prompts when reviewing an offer or preparing negotiation questions.",
    },
    taxConnection: {
      src: "/images/infographics/netherlands-employee-benefits-tax-connection-infographic.png",
      alt: "Infographic connecting Dutch employee benefits to salary, payroll tax and take-home pay planning.",
      caption: "Some benefits affect taxable income; others reduce living costs without changing gross salary.",
    },
    services: {
      src: "/images/infographics/netherlands-employee-benefits-services-infographic.png",
      alt: "Infographic showing professional services that may help with Dutch employee benefits questions including tax advisors, relocation and payroll specialists.",
      caption: "Use professionals for contract-specific questions — this guide is orientation only.",
    },
    officialSourcesMap: {
      src: "/images/infographics/netherlands-employee-benefits-official-sources-infographic.png",
      alt: "Infographic map of official sources for Dutch employment benefits including Government.nl, Rijksoverheid, UWV, Business.gov.nl and Belastingdienst.",
      caption: "Employment rules change — verify current guidance on official government sites.",
    },
    exploreNext: {
      src: "/images/infographics/netherlands-employee-benefits-explore-next-infographic.png",
      alt: "Infographic showing connected next-step guides after employee benefits including salary negotiation, expat salary, net calculator, 30% ruling and gross vs net salary.",
      caption: "Benefits connect naturally into salary negotiation, tax planning and relocation guides.",
    },
    calculatorFlow: {
      src: "/images/infographics/netherlands-employee-benefits-calculator-flow-infographic.png",
      alt: "Infographic flow for estimating net take-home pay after Dutch employee benefits including pension, holiday allowance and payroll deductions.",
      caption: "Model net pay after benefits before comparing offers — orientation only, not tax advice.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#mandatory-optional", label: "Mandatory vs optional" },
    { href: "#holiday-allowance", label: "Holiday allowance" },
    { href: "#vacation", label: "Vacation" },
    { href: "#pension", label: "Pension" },
    { href: "#sick-leave", label: "Sick leave" },
    { href: "#parental-leave", label: "Parental leave" },
    { href: "#remote-work", label: "Remote work" },
    { href: "#mobility", label: "Mobility" },
    { href: "#relocation", label: "Relocation" },
    { href: "#bonus-equity", label: "Bonus & equity" },
    { href: "#industry", label: "Industry" },
    { href: "#benefits-vs-salary", label: "Benefits vs salary" },
    { href: "#questions", label: "Questions" },
    { href: "#tax-connection", label: "Taxes" },
    { href: "#calculator", label: "Calculator" },
    { href: "#related-salary-guides", label: "Salary guides" },
    { href: "#services", label: "Services" },
    { href: "#faq", label: "FAQ" },
    { href: "#sources", label: "Sources" },
  ],
  conceptCards: [
    { title: "More than salary", body: "Dutch packages often include pension, holiday allowance, leave and mobility — not just gross pay." },
    { title: "Employer variation", body: "Benefit structures differ by company size, industry, contract type and collective agreements." },
    { title: "Long-term value", body: "Pension and leave can matter as much as a small base-salary difference over several years." },
  ],
  snapshotCards: [
    { label: "Holiday allowance", value: "Commonly offered (vakantiegeld)" },
    { label: "Pension", value: "Often employer-supported" },
    { label: "Paid leave", value: "Strong worker protections" },
    { label: "Remote work", value: "Increasingly common" },
    { label: "Sick leave", value: "Protected by law" },
    { label: "Expat packages", value: "May include relocation support" },
  ],
  introChecklist: [
    "Ask for a written benefits summary alongside the gross salary offer.",
    "Confirm whether holiday allowance is included in the quoted figure or paid separately.",
    "Compare pension contribution levels — they affect both net pay and retirement savings.",
    "Check mobility, remote work and relocation items if commuting or moving internationally.",
  ],
  statutoryBenefits: [
    { title: "Vacation entitlement", body: "Employees generally receive paid vacation days. Minimum statutory leave applies; many employers offer additional days." },
    { title: "Sick leave protections", body: "Ill employees have protections during illness. Employers and employees share reintegration responsibilities during longer absences." },
    { title: "Parental leave frameworks", body: "Maternity, partner and parental leave arrangements exist under Dutch rules — details depend on employment status and timing." },
    { title: "Minimum wage & contracts", body: "Statutory pay floors and contract rules set baseline employment conditions — benefits sit on top of these foundations." },
  ],
  optionalBenefits: [
    { title: "Bonuses & variable pay", body: "Annual or performance bonuses, profit-sharing and commission structures vary by sector." },
    { title: "Stock options & equity", body: "More common in tech, startups and finance — always read grant terms and tax implications." },
    { title: "Mobility budgets", body: "Public transport reimbursement, NS business cards, bicycle plans or company cars in some sectors." },
    { title: "Relocation support", body: "Temporary housing, moving allowances, visa support and 30% ruling assistance for international hires." },
    { title: "Wellness & extras", body: "Gym contributions, learning budgets, extra insurance or childcare support — highly employer-specific." },
  ],
  holidayAllowanceTips: [
    "Holiday allowance (vakantiegeld) is commonly around 8% of gross salary in many Dutch contracts.",
    "Some employers pay it as a lump sum in May or June; others include it monthly in payroll.",
    "Always confirm whether your quoted salary is inclusive or exclusive of vakantiegeld.",
    "Holiday allowance affects total compensation comparisons — include it when evaluating offers.",
  ],
  vacationTips: [
    "Statutory minimum paid leave applies; many employers grant additional company leave days.",
    "Part-time contracts scale leave proportionally — verify your contract wording.",
    "Collective labour agreements (CAO) in some sectors set leave above the legal minimum.",
    "Unused leave policies vary — ask how carry-over and payout work when leaving.",
  ],
  pensionTips: [
    "Many Dutch employers contribute to a pension scheme alongside employee contributions.",
    "Pension deductions can reduce monthly take-home pay while building long-term savings.",
    "For expats, portability, vesting periods and international retirement planning may matter.",
    "Compare employer contribution percentages — they can differ significantly between offers.",
  ],
  sickLeaveTips: [
    "Employees generally retain income protection during illness subject to Dutch rules and employer policies.",
    "Long-term illness triggers reintegration obligations for both employer and employee.",
    "UWV and government guidance define roles during extended absence — this guide does not interpret individual cases.",
    "Ask HR how sick pay, waiting days and occupational health support work in practice.",
  ],
  parentalLeaveTips: [
    "Maternity, partner (paternity) and parental leave arrangements exist for employees in the Netherlands.",
    "Entitlements and pay levels depend on employment status, timing and official rules at the time of leave.",
    "Employers may offer top-up schemes beyond statutory minimums — read your contract and HR policy.",
    "Family planning expats should compare leave policies alongside salary and childcare costs.",
  ],
  remoteWorkTips: [
    "Hybrid and remote work are common in knowledge sectors but less standard in on-site roles.",
    "Some employers offer home-office allowances, equipment budgets or fixed hybrid day policies.",
    "Tax and cross-border remote work can get complex for international hires — confirm with employer and advisers.",
    "Negotiate remote flexibility explicitly — it is not automatic in every Dutch contract.",
  ],
  mobilityTips: [
    "Randstad commuting costs can be significant — mobility benefits may offset NS train fares or cycling costs.",
    "NS business card, OV reimbursement and bicycle lease plans are common in larger employers.",
    "Company cars appear in some sectors; tax treatment differs from public transport reimbursement.",
    "Ask whether mobility is a gross addition or net reimbursement in your payslip.",
  ],
  relocationTips: [
    "International employers may offer relocation allowances, temporary housing or shipping support.",
    "Visa and work permit support may be bundled for highly skilled migrant routes.",
    "30% ruling application support is sometimes included — eligibility is not guaranteed.",
    "Seniority and employer type strongly influence relocation package depth.",
  ],
  bonusEquityTips: [
    "Tech, finance, consulting and startups more often include bonus or equity components.",
    "Understand vesting schedules, clawback clauses and tax treatment before valuing equity.",
    "Bonus targets may be discretionary — ask what was paid historically, not only the headline range.",
    "Variable pay can shift total compensation year to year — model conservative scenarios.",
  ],
  benefitsVsSalaryTips: [
    "Two offers with identical gross salary can differ once pension, leave and mobility are included.",
    "A lower gross offer with strong pension and extra leave may beat a higher base over time.",
    "Use the salary negotiation guide to compare total packages calmly and in writing.",
    "Model net pay after pension deductions — benefits affect take-home as well as long-term value.",
  ],
  industryCards: [
    { title: "Technology", body: "Often flexible on remote work, equity and learning budgets; pension and allowance still matter." },
    { title: "Finance", body: "Structured bonus cycles, pension and mobility benefits; less remote flexibility in some roles." },
    { title: "Consulting", body: "Travel expectations, bonus and mobility support common; work-life balance varies by firm." },
    { title: "Healthcare", body: "More regulated pay scales and leave; less variable pay than corporate sectors." },
    { title: "Government", body: "Transparent scales, strong leave and pension; limited individual negotiation room." },
    { title: "Startups", body: "Equity and flexibility may be offered; cash benefits and pension may be lighter." },
    { title: "Academia", body: "Structured scales, leave and pension via sector arrangements; less bonus culture." },
    { title: "Engineering", body: "Strong pension and mobility in larger firms; project-based employers vary more." },
  ],
  expatQuestions: [
    { q: "Is holiday allowance mandatory?", a: "Many employees receive vakantiegeld under contract or sector rules — confirm your specific offer and CAO context." },
    { q: "How many vacation days do employees get?", a: "Statutory minimum applies; many employers grant additional days. Part-time contracts scale proportionally." },
    { q: "Are pensions included automatically?", a: "Many employers enroll employees in a pension scheme, but contribution levels and eligibility vary — read your contract." },
    { q: "Can expats use Dutch pension systems?", a: "Often yes while employed in the Netherlands, but portability and international planning matter for long-term expats." },
    { q: "Do employers reimburse transport?", a: "Many offer NS reimbursement, bicycle plans or mobility budgets — especially in larger Randstad employers." },
    { q: "Is remote work common?", a: "Hybrid work is widespread in knowledge sectors but not universal — confirm policy for your role." },
    { q: "What benefits can be negotiated?", a: "Base salary, bonus, pension, mobility, remote work, relocation and sometimes extra leave may be open for discussion." },
    { q: "Are Dutch benefits better than in my country?", a: "Comparison depends on your home country, sector and family situation — focus on total package and net pay locally." },
  ],
  taxConnectionItems: [
    { title: "Gross vs net", body: "Pension and payroll deductions reduce take-home pay even when benefits add long-term value.", href: GROSS_VS_NET_SALARY_PATH },
    { title: "Payroll tax", body: "Some cash benefits are taxed through payroll; others reduce costs without increasing taxable income.", href: PAYROLL_TAX_NETHERLANDS_PATH },
    { title: "30% ruling", body: "Expat tax scheme can interact with how compensation is structured — eligibility is not automatic.", href: THIRTY_PERCENT_RULING_PATH },
    { title: "Salary negotiation", body: "Benefits are core negotiation topics alongside base salary — compare packages in writing.", href: SALARY_NEGOTIATION_NETHERLANDS_PATH },
  ],
  relatedSalaryGuides: [
    { label: "Salary Negotiation", href: SALARY_NEGOTIATION_NETHERLANDS_PATH, status: "live", description: "Negotiate total compensation beyond base salary." },
    { label: "Expat Salary Guide", href: EXPAT_SALARY_NETHERLANDS_PATH, status: "live", description: "Salary expectations for international professionals." },
    { label: "Average Salary Netherlands", href: AVERAGE_SALARY_NETHERLANDS_PATH, status: "live", description: "Benchmark salaries by city and industry." },
    { label: "Gross vs Net Salary", href: GROSS_VS_NET_SALARY_PATH, status: "live", description: "Understand Dutch gross salary quoting." },
    { label: "Payroll Tax", href: PAYROLL_TAX_NETHERLANDS_PATH, status: "live", description: "How payroll deductions affect net pay." },
  ] satisfies EmployeeBenefitsNetherlandsLink[],
  calculatorToolCta: {
    title: "Estimate Take-Home Pay After Benefits",
    description:
      "Pension, holiday allowance and payroll deductions all affect what reaches your bank account. Use the Dutch salary net calculator to model net pay alongside benefit value.",
    supportingText:
      "Pair the calculator with the gross vs net and net salary guides when comparing written offers. Results are illustrative — not tax or payroll advice.",
    primaryCta: { label: "Open net salary calculator", href: DUTCH_SALARY_NET_CALCULATOR_PATH },
    secondaryCta: { label: "Net salary guide", href: NET_SALARY_NETHERLANDS_PATH },
    disclaimer: "Calculator outputs are orientation only. Confirm payslip lines and benefit wording with your employer or a qualified adviser.",
    prepItems: [
      { label: "Gross basis", body: "Confirm monthly vs annual and whether vakantiegeld is included in the quoted figure." },
      { label: "Pension share", body: "Employer and employee pension contributions reduce monthly take-home pay." },
      { label: "Benefit value", body: "Compare mobility, leave and bonus items alongside estimated net pay." },
    ],
  },
  affiliatePlacementId: EMPLOYEE_BENEFITS_AFFILIATE_PLACEMENT_ID,
  servicesWhenToUse: [
    { title: "Tax advisors", body: "Help interpret how benefits, pension and cross-border income affect your tax position." },
    { title: "Relocation services", body: "Support when benefits include housing search, move timing or family logistics." },
    { title: "Immigration lawyers", body: "Visa and permit questions alongside employment offers and relocation packages." },
    { title: "Payroll specialists", body: "Clarify payslip items, pension deductions and contract benefit wording." },
  ],
  services: [
    { label: "Recruitment agencies", href: "/netherlands/services/recruitment-agencies/", status: "live", description: "Services directory for comparing recruitment agency providers." },
    { label: "Relocation services", href: "/netherlands/services/relocation-services/", status: "live", description: "Move planning alongside employment packages." },
    { label: "Tax advisors", href: "/netherlands/services/tax-advisors/", status: "live", description: "Benefits, pension and cross-border tax context." },
    { label: "Immigration lawyers", href: "/netherlands/services/immigration-lawyers/", status: "live", description: "Visa routes linked to employment offers." },
    { label: "Payroll services", href: "/netherlands/services/payroll-services/", status: "comingSoon", description: "Future directory for payroll support." },
  ] satisfies EmployeeBenefitsNetherlandsLink[],
  faq: [
    {
      q: "What employee benefits are common in the Netherlands?",
      a: "Many packages include pension contributions, holiday allowance (vakantiegeld), paid vacation, sick leave protections and increasingly hybrid work support. Expat packages may add relocation assistance.",
    },
    {
      q: "Is holiday allowance mandatory?",
      a: "Many Dutch employees receive vakantiegeld under contract or sector arrangements — commonly around 8% of salary. Confirm whether your offer includes it separately from base pay.",
    },
    {
      q: "How many vacation days do employees receive?",
      a: "Statutory minimum paid leave applies. Many employers grant additional company leave days, especially under collective agreements.",
    },
    {
      q: "Are pensions included in Dutch jobs?",
      a: "Many employers contribute to pension schemes, but contribution levels, vesting and scheme type vary. Pension affects both net pay and long-term savings.",
    },
    {
      q: "Is sick leave paid?",
      a: "Employees generally have income protection during illness under Dutch rules. Longer absences involve reintegration processes — verify official guidance for your situation.",
    },
    {
      q: "Is remote work common?",
      a: "Hybrid and remote work are widespread in knowledge sectors but not universal. Policies vary by employer, industry and role.",
    },
    {
      q: "What benefits do expats receive?",
      a: "International hires may receive relocation support, temporary housing, visa assistance and 30% ruling application help — packages vary by employer and seniority.",
    },
    {
      q: "Can benefits be negotiated?",
      a: "Yes. Pension, mobility, remote work, bonus, relocation and sometimes extra leave may be negotiable alongside base salary — especially in competitive sectors.",
    },
  ],
  officialSources: [
    {
      label: "Government.nl — Employment contracts & collective agreements",
      href: "https://www.government.nl/topics/employment-contract-and-collective-agreements",
      description: "Official overview of Dutch employment contracts and collective agreements.",
    },
    {
      label: "Business.gov.nl — Staff",
      href: "https://business.gov.nl/running-your-business/staff/",
      description: "Employer and employee context for working in the Netherlands.",
    },
    {
      label: "Rijksoverheid — Arbeidsvoorwaarden",
      href: "https://www.rijksoverheid.nl/onderwerpen/arbeidsvoorwaarden",
      description: "Dutch-language official information on employment terms.",
    },
    {
      label: "Belastingdienst",
      href: "https://www.belastingdienst.nl/",
      description: "Tax authority guidance relevant to payroll and benefits.",
    },
    {
      label: "UWV",
      href: "https://www.uwv.nl/",
      description: "Employee insurance and reintegration context during illness.",
    },
  ],
  relatedGuides: [
    { label: "Salary Negotiation", href: SALARY_NEGOTIATION_NETHERLANDS_PATH, status: "live", description: "Negotiate benefits alongside base salary." },
    { label: "Pension Guide", href: "/netherlands/jobs/pension-netherlands-expats/", status: "live", description: "Dutch pension system for expats — AOW, employer schemes and portability." },
    { label: "Holiday Allowance Guide", href: "/netherlands/jobs/holiday-allowance-netherlands/", status: "live", description: "How vakantiegeld works — payment timing, salary inclusion and tax context." },
    { label: "Bonus Tax Guide", href: "/netherlands/taxes/bonus-tax-netherlands/", status: "live", description: "Why bonuses seem heavily taxed — payroll withholding for expats." },
    { label: "Expat Salary Guide", href: EXPAT_SALARY_NETHERLANDS_PATH, status: "live", description: "Salary context for international professionals." },
    { label: "Netherlands Taxes Guide", href: TAXES_HUB_PATH, status: "live", description: "Tax hub connecting salary and benefits." },
    { label: "Net Salary Guide", href: NET_SALARY_NETHERLANDS_PATH, status: "live", description: "Estimate take-home pay from your package." },
    { label: "Gross vs Net Salary", href: GROSS_VS_NET_SALARY_PATH, status: "live", description: "Why benefits and deductions matter for net pay." },
    { label: "Moving to the Netherlands", href: MOVING_HUB_PATH, status: "live", description: "Relocation planning with employment offers." },
    { label: "Employee Rights Guide", href: "/netherlands/jobs/employee-rights-netherlands/", status: "live", description: "Workplace rights, leave, sick pay and equal treatment orientation." },
  ] satisfies EmployeeBenefitsNetherlandsLink[],
  exploreNextCards: [
    { label: "Holiday Allowance Guide", href: "/netherlands/jobs/holiday-allowance-netherlands/", status: "live", description: "Deep dive into vakantiegeld for expats." },
    { label: "Pension Guide", href: "/netherlands/jobs/pension-netherlands-expats/", status: "live", description: "Deep dive into Dutch pensions for expats." },
    { label: "Salary Negotiation", href: SALARY_NEGOTIATION_NETHERLANDS_PATH, status: "live", description: "Negotiate your full compensation package." },
    { label: "Expat Salary Guide", href: EXPAT_SALARY_NETHERLANDS_PATH, status: "live", description: "Salary expectations for expats." },
    { label: "Net Salary Calculator", href: DUTCH_SALARY_NET_CALCULATOR_PATH, status: "live", description: "Estimate take-home pay from gross offers." },
    { label: "30% Ruling", href: THIRTY_PERCENT_RULING_PATH, status: "live", description: "Expat tax scheme and package context." },
    { label: "Dutch workplace culture", href: "/netherlands/jobs/dutch-workplace-culture/", status: "live", description: "Workplace norms and expectations." },
  ] satisfies EmployeeBenefitsNetherlandsLink[],
} as const;
