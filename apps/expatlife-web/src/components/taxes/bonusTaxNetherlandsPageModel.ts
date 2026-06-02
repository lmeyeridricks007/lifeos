export const BONUS_TAX_NETHERLANDS_PATH = "/netherlands/taxes/bonus-tax-netherlands/" as const;
export const DUTCH_SALARY_NET_CALCULATOR_PATH = "/netherlands/taxes/tools/dutch-salary-net-calculator/" as const;
export const TAXES_HUB_PATH = "/netherlands/taxes/" as const;
export const GROSS_VS_NET_SALARY_PATH = "/netherlands/taxes/gross-vs-net-salary/" as const;
export const NET_SALARY_NETHERLANDS_PATH = "/netherlands/taxes/net-salary-netherlands/" as const;
export const PAYROLL_TAX_NETHERLANDS_PATH = "/netherlands/taxes/payroll-tax-netherlands/" as const;
export const THIRTY_PERCENT_RULING_PATH = "/netherlands/taxes/30-percent-ruling/" as const;
export const HOLIDAY_ALLOWANCE_NETHERLANDS_PATH = "/netherlands/jobs/holiday-allowance-netherlands/" as const;
export const EXPAT_SALARY_NETHERLANDS_PATH = "/netherlands/jobs/expat-salary-netherlands/" as const;
export const EMPLOYEE_BENEFITS_NETHERLANDS_PATH = "/netherlands/jobs/employee-benefits-netherlands/" as const;
export const PAYSLIP_DECODER_PATH = "/netherlands/work/tools/payslip-decoder/" as const;

export type BonusTaxNetherlandsLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export const bonusTaxNetherlandsPage = {
  slug: "bonus-tax-netherlands",
  path: BONUS_TAX_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2026-06-28",
  seo: {
    title: "Bonus Tax in the Netherlands | Why Bonuses Seem Taxed So High",
    description:
      "Learn how bonus taxation works in the Netherlands, including payroll withholding, special wage tax rules, the 30% ruling and why your bonus may appear heavily taxed.",
    keywords: [
      "bonus tax netherlands",
      "bonus taxed netherlands",
      "bonus tax rate netherlands",
      "dutch bonus tax",
      "bonus taxation netherlands",
      "special wage tax netherlands",
      "bonus tax expats",
      "net bonus calculator",
      "annual bonus netherlands",
      "bonus payroll tax netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Taxes · Compensation",
    pageTitle: "Bonus Tax in the Netherlands",
    subtitle:
      "Understand why Dutch bonuses often seem heavily taxed, how payroll withholding works and what expats should know about annual bonuses and special wage tax rules.",
    primaryCta: { label: "Understand Bonus Taxation", href: "#intro" },
    secondaryCta: { label: "Explore Salary & Tax Guides", href: TAXES_HUB_PATH },
    chips: ["Payroll withholding", "Bijzondere beloning", "Gross vs net", "Expat payslips"],
    image: {
      src: "/images/heroes/netherlands-bonus-tax-netherlands-hero-v3.png",
      alt: "Photorealistic editorial photo of a professional woman reviewing a Dutch loonstrook with a highlighted Bonus line at a modern Rotterdam office desk, holding a tablet with a salary breakdown chart and a city skyline view through floor-to-ceiling windows.",
    },
  },
  infographics: {
    introFlow: {
      src: "/images/infographics/netherlands-bonus-tax-intro-flow-infographic-v3.png",
      alt: "Infographic explaining why Dutch bonuses look heavily taxed: payroll processing, bijzondere beloning special withholding, and annual tax reconciliation.",
      caption: "The payslip percentage on a bonus is often withholding — not necessarily your final annual tax rate.",
    },
    snapshot: {
      src: "/images/infographics/netherlands-bonus-tax-snapshot-infographic-v3.png",
      alt: "Infographic snapshot of Dutch bonus taxation at a glance: taxable income, higher withholding, annual tax difference, bijzondere beloning, expat payslip confusion, and gross vs net bonus.",
      caption: "Bonuses are taxable — but the percentage on your payslip is often withholding, not your final annual tax rate.",
    },
    howItWorks: {
      src: "/images/infographics/netherlands-bonus-tax-how-it-works-infographic-v3.png",
      alt: "Infographic flow showing how bonuses are taxed from gross agreement through employer payroll, loonheffing withholding, to net bonus payment.",
      caption: "Bonuses generally flow through employer payroll like other taxable employment income.",
    },
    specialWageTax: {
      src: "/images/infographics/netherlands-bonus-tax-special-wage-infographic-v3.png",
      alt: "Infographic explaining bijzondere beloning special wage tax withholding on irregular payments including bonuses, commissions and lump sums.",
      caption: "Special withholding on irregular payments is a common reason bonuses look heavily taxed upfront.",
    },
    withholdingVsFinal: {
      src: "/images/infographics/netherlands-bonus-tax-withholding-vs-final-infographic-v3.png",
      alt: "Infographic comparing payroll withholding at bonus payment time with final annual tax reconciliation and possible refund or balance due.",
      caption: "Withholding at payment time ≠ your final annual tax bill. Reconciliation happens through the tax process.",
    },
    grossNet: {
      src: "/images/infographics/netherlands-bonus-tax-gross-net-infographic-v3.png",
      alt: "Infographic funnel from gross bonus through loonheffing and pension deductions to net bonus received on a stylized Dutch payslip.",
      caption: "Always compare gross bonus offers with estimated net outcomes — orientation only, not tax advice.",
    },
    expatContext: {
      src: "/images/infographics/netherlands-bonus-tax-expat-context-infographic-v3.png",
      alt: "Infographic showing common expat bonus tax confusion: multinational payroll, unfamiliar payslip labels, sign-on bonuses and cross-border complexity.",
      caption: "Multinational payroll and unfamiliar payslip labels often amplify bonus tax confusion for expats.",
    },
    thirtyRuling: {
      src: "/images/infographics/netherlands-bonus-tax-thirty-ruling-infographic-v3.png",
      alt: "Infographic overview of how the 30% ruling may affect bonus payroll treatment with eligibility and HR confirmation steps.",
      caption: "Eligibility and payroll application vary — confirm with your employer, not assumptions from guides.",
    },
    variableCompensation: {
      src: "/images/infographics/netherlands-bonus-tax-variable-comp-infographic-v3.png",
      alt: "Infographic comparing cash bonuses, RSUs, stock options and profit-sharing with notes that tax timing may differ for each.",
      caption: "Variable pay types can follow different timing and reporting rules — verify your specific award.",
    },
    examples: {
      src: "/images/infographics/netherlands-bonus-tax-examples-infographic-v3.png",
      alt: "Infographic with illustrative gross-to-net bonus examples for junior, senior, manager, highly skilled migrant and executive roles.",
      caption: "Illustrative scenarios only — no personalized calculations or guaranteed net outcomes.",
    },
    questions: {
      src: "/images/infographics/netherlands-bonus-tax-questions-infographic-v3.png",
      alt: "Infographic summarising eight common expat questions about Dutch bonus tax, special wage tax, refunds and net bonus estimates.",
      caption: "Use these prompts when reading payslips or comparing offers — orientation only.",
    },
    comparison: {
      src: "/images/infographics/netherlands-bonus-tax-comparison-infographic-v3.png",
      alt: "Infographic comparison table of base salary, holiday allowance, bonus, commission and stock compensation payroll treatments.",
      caption: "Different compensation components can follow different payroll treatments — compare total packages.",
    },
    payslip: {
      src: "/images/infographics/netherlands-bonus-tax-payslip-infographic-v3.png",
      alt: "Infographic annotated Dutch loonstrook showing gross bonus, loonheffing, bijzondere beloning, pension and net bonus paid lines.",
      caption: "Reading payslip labels correctly reduces confusion between withholding and final taxation.",
    },
    exploreNext: {
      src: "/images/infographics/netherlands-bonus-tax-explore-next-infographic-v3.png",
      alt: "Infographic linking to related next-step guides: net salary calculator, gross vs net, payroll tax, 30% ruling, holiday allowance and payslip decoder.",
      caption: "Connect bonus context to payroll tax, net salary and compensation guides.",
    },
    services: {
      src: "/images/infographics/netherlands-bonus-tax-services-infographic-v3.png",
      alt: "Infographic showing professional services for bonus tax questions: tax advisors, payroll specialists, expat tax services and financial advisors.",
      caption: "Use professionals for personal tax position — this guide is orientation only.",
    },
    officialSources: {
      src: "/images/infographics/netherlands-bonus-tax-official-sources-infographic-v3.png",
      alt: "Infographic map of official Dutch bonus tax sources: Belastingdienst, Government.nl and Business.gov.nl.",
      caption: "Verify current wage tax guidance on official government sources.",
    },
    calculatorFlow: {
      src: "/images/infographics/netherlands-bonus-tax-calculator-flow-infographic-v3.png",
      alt: "Infographic showing calculator flow to estimate net bonus pay: enter gross figures, add payroll assumptions, review loonheffing context, compare estimated net.",
      caption: "Use the net salary calculator for orientation — bonus withholding depends on employer payroll setup.",
    },
    totalCompensation: {
      src: "/images/infographics/netherlands-bonus-tax-total-compensation-infographic-v3.png",
      alt: "Infographic showing how bonus tax fits into total Dutch compensation: salary, vakantiegeld, bonus, pension, 30% ruling and benefits.",
      caption: "Compare the full package — not the bonus line in isolation.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#special-wage-tax", label: "Special wage tax" },
    { href: "#withholding", label: "Withholding" },
    { href: "#gross-net", label: "Gross vs net" },
    { href: "#expats", label: "Expats" },
    { href: "#thirty-ruling", label: "30% ruling" },
    { href: "#variable-pay", label: "RSUs & stock" },
    { href: "#examples", label: "Examples" },
    { href: "#questions", label: "Questions" },
    { href: "#comparison", label: "Compare pay" },
    { href: "#payslip", label: "Payslip" },
    { href: "#related-guides", label: "Related guides" },
    { href: "#calculator", label: "Calculator" },
    { href: "#services", label: "Services" },
    { href: "#faq", label: "FAQ" },
    { href: "#sources", label: "Sources" },
  ],
  conceptCards: [
    { title: "Taxable income", body: "Bonuses are generally employment income — not a separate tax-free payment in standard Dutch employment." },
    { title: "Payroll withholding", body: "Employers often withhold aggressively on irregular payments. That is not always your final effective rate." },
    { title: "Annual reconciliation", body: "Final tax outcomes depend on your full-year position, credits and annual filing — not one payslip line alone." },
  ],
  snapshotCards: [
    { label: "Legal status", value: "Taxable employment income" },
    { label: "Payslip effect", value: "Payroll withholding may look high" },
    { label: "Final tax", value: "Can differ from withholding" },
    { label: "Special rules", value: "Bijzondere beloning context" },
    { label: "Expats", value: "Often misread payslips" },
    { label: "Planning", value: "Gross bonus ≠ net bonus" },
  ],
  snapshotTips: [
    "The percentage withheld on a bonus payslip is often a payroll calculation — not a guaranteed final tax rate.",
    "Special wage tax (bijzondere beloning) rules can apply to irregular payments including many bonuses.",
    "Annual tax reconciliation may result in a refund or additional payment depending on your full-year position.",
    "The 30% ruling may affect payroll treatment for eligible expats — confirm eligibility and setup with HR.",
  ],
  introChecklist: [
    "Confirm whether the bonus figure quoted is gross or net.",
    "Ask HR whether bijzondere beloning special withholding applies to your bonus payment.",
    "Check whether pension deductions apply on the bonus payslip.",
    "Keep annual tax filing in mind — payslip withholding is not always the final outcome.",
  ],
  howItWorksTips: [
    "Bonuses are generally taxable employment income processed through Dutch employer payroll.",
    "Annual, performance, sales, retention and sign-on bonuses all typically pass through loonheffing withholding.",
    "Payroll systems apply wage tax at payment time — the payslip shows withholding, not necessarily final annual tax.",
    "Verify your contract and payslip — this guide does not interpret individual payroll setups.",
  ],
  payslipChecklist: [
    "Look for gross bonus or bijzondere beloning on your loonstrook — separate from monthly base salary.",
    "Identify loonheffing (wage tax) withheld on the bonus payment — often at a higher-looking percentage.",
    "Check pensioen (pension) deductions if your employer applies them to bonus payments.",
    "Compare the net bonus paid to your bank account — not the gross headline from your offer letter.",
  ],
  bonusTypes: [
    { title: "Annual performance bonus", body: "Common in corporate roles — often paid once per year with special withholding on the payslip." },
    { title: "Sales or commission bonus", body: "Variable pay tied to targets — may follow similar irregular-payment withholding logic." },
    { title: "Retention or sign-on bonus", body: "Contractual lump sums — still generally taxable through payroll when paid." },
    { title: "Discretionary bonus", body: "Employer-granted awards — tax treatment still runs through payroll, not as tax-free gifts." },
  ],
  specialWageTips: [
    "Dutch payroll applies special withholding logic to irregular payments — bijzondere beloning is the concept many employees encounter.",
    "Bonuses, commissions, holiday allowance and some one-time payments can trigger this treatment depending on payroll setup.",
    "Higher withholding on the payslip protects against under-withholding across the year — it is a collection mechanism.",
    "This guide explains orientation only — exact payroll rules depend on employer systems and official wage tax tables.",
  ],
  withholdingTips: [
    "Many employees say “my bonus was taxed at 49%” — they are usually describing payroll withholding, not a final annual rate.",
    "Payroll systems estimate annual income when calculating withholding on a one-off payment.",
    "If too much tax was withheld during the year, annual filing may produce a refund — depending on your situation.",
    "If too little was withheld overall, you may owe additional tax after reconciliation.",
  ],
  grossNetTips: [
    "Negotiate and compare gross bonus amounts — then model estimated net outcomes separately.",
    "Pension deductions may apply to bonus payments alongside wage tax withholding.",
    "A EUR 10,000 gross bonus does not mean EUR 10,000 spendable income — plan cash-flow accordingly.",
    "Use the net salary calculator for orientation — not as personalized tax advice.",
  ],
  expatTips: [
    "Multinational employers may use Dutch payroll for local employees while expats compare offers across countries.",
    "Payslip labels like loonheffing and bijzondere beloning are unfamiliar to many international hires.",
    "Relocation packages and sign-on bonuses still generally pass through Dutch payroll when paid locally.",
    "Cross-border tax residency can add complexity — use a qualified tax adviser for personal situations.",
  ],
  expatScenarios: [
    { title: "Finance & consulting", body: "Large annual bonuses with aggressive withholding — compare net cash-flow, not gross headline alone." },
    { title: "Tech & HSM roles", body: "Sign-on and performance bonuses alongside 30% ruling questions — confirm payroll setup in writing." },
    { title: "Multinational payroll", body: "Bonus paid from abroad vs Dutch entity — verify which payroll rules apply to your contract." },
  ],
  thirtyRulingTips: [
    "The 30% ruling may change how taxable salary is calculated — bonus treatment depends on payroll application.",
    "Eligibility is not automatic and rules change over time — read the dedicated guide for orientation.",
    "Do not assume a gross bonus quote translates to the same net outcome with or without the ruling.",
    "Confirm with HR and official Belastingdienst guidance — not generic online calculators alone.",
  ],
  variableCompItems: [
    { title: "Cash bonus", body: "Usually paid through payroll with wage tax withholding on the payment date." },
    { title: "RSUs / stock awards", body: "Tax timing and reporting may differ from cash — employer and award terms matter." },
    { title: "Stock options", body: "Exercise and vesting events can create separate tax moments — specialist advice often needed." },
    { title: "Profit-sharing", body: "May be structured as bonus-like payments — confirm contract and payroll treatment." },
  ],
  variableCompTips: [
    "Cash bonuses usually create one payroll moment — RSUs and options often create separate tax events.",
    "Employer reporting and award documentation determine timing — not generic bonus rules alone.",
    "Do not assume equity compensation follows identical withholding to a cash performance bonus.",
    "Cross-border equity plans may add filing complexity beyond Dutch payroll — seek specialist advice.",
  ],
  examplesTips: [
    "Illustrative examples show concepts only — no guaranteed net outcomes or personalized rates.",
    "Withholding on a bonus payslip often looks higher than monthly salary withholding on the same income level.",
    "Compare bonus net cash-flow alongside base salary, vakantiegeld and pension — not the bonus line alone.",
    "Highly skilled migrants and executives should confirm payroll setup in writing before planning spendable income.",
  ],
  comparisonTips: [
    "Base salary follows regular monthly loonheffing — bonuses often trigger special withholding on the payslip.",
    "Holiday allowance (vakantiegeld) is structured compensation — not the same as a discretionary performance bonus.",
    "Commissions may follow similar irregular-payment withholding logic — confirm timing in your contract.",
    "Stock and RSU awards are not identical to cash bonus payroll — verify award terms separately.",
  ],
  withholdingScenarios: [
    { title: "Refund possible", body: "If payroll withholding exceeded your final annual tax liability, filing may produce a refund — depending on your full-year position." },
    { title: "Balance due possible", body: "If overall withholding was too low across the year, you may owe additional tax after reconciliation." },
    { title: "Neither guaranteed", body: "One bonus payslip does not determine the outcome — annual position, credits and filing matter." },
  ],
  totalCompensationItems: [
    { title: "Base salary", body: "Monthly gross pay and regular loonheffing rhythm.", href: GROSS_VS_NET_SALARY_PATH },
    { title: "Holiday allowance", body: "Structured vakantiegeld — often confused with bonus pay.", href: HOLIDAY_ALLOWANCE_NETHERLANDS_PATH },
    { title: "Payroll tax", body: "Loonheffing basics before reading bonus lines.", href: PAYROLL_TAX_NETHERLANDS_PATH },
    { title: "Employee benefits", body: "Pension, leave and full package context.", href: EMPLOYEE_BENEFITS_NETHERLANDS_PATH },
    { title: "Expat salary", body: "Benchmark offers with bonus and tax context.", href: EXPAT_SALARY_NETHERLANDS_PATH },
    { title: "30% ruling", body: "Expat scheme and payroll impact orientation.", href: THIRTY_PERCENT_RULING_PATH },
  ],
  exampleCards: [
    {
      role: "Junior employee",
      grossBonus: "EUR 2,000 gross bonus",
      withholdingConcept: "Special withholding may apply — net payout often noticeably below gross.",
      annualPerspective: "Full-year tax reconciliation may adjust the effective outcome.",
    },
    {
      role: "Senior professional",
      grossBonus: "EUR 8,000 gross bonus",
      withholdingConcept: "Higher marginal withholding common on irregular payments.",
      annualPerspective: "Compare against total annual income — not the bonus line in isolation.",
    },
    {
      role: "Manager",
      grossBonus: "EUR 15,000 gross bonus",
      withholdingConcept: "Pension and payroll tax lines both reduce take-home on the bonus payslip.",
      annualPerspective: "Cash-flow planning should assume withholding, not gross amount.",
    },
    {
      role: "Highly skilled migrant",
      grossBonus: "EUR 10,000 gross bonus",
      withholdingConcept: "30% ruling payroll setup may change take-home — confirm with employer.",
      annualPerspective: "Cross-border context may add filing complexity beyond payroll.",
    },
    {
      role: "Executive",
      grossBonus: "EUR 25,000+ gross bonus",
      withholdingConcept: "Variable pay may combine cash and equity — different timing rules.",
      annualPerspective: "Professional tax advice often appropriate at this complexity level.",
    },
  ],
  expatQuestions: [
    { q: "Why was my bonus taxed so much?", a: "Dutch payroll often applies special withholding to irregular payments. The payslip percentage is usually withholding, not necessarily your final annual tax rate." },
    { q: "Is bonus tax higher than salary tax?", a: "Bonuses are taxed as employment income. Withholding rates on one-off payments can look higher than monthly salary withholding, but the underlying system connects to your annual position." },
    { q: "What is special wage tax?", a: "Payroll systems use special withholding rules (bijzondere beloning context) for many irregular payments including bonuses. It affects withholding timing, not a separate permanent tax category for most employees." },
    { q: "Will I get money back later?", a: "If payroll withholding exceeded your final tax liability for the year, annual reconciliation may produce a refund. This depends on your full-year situation — not guaranteed." },
    { q: "Does the 30% ruling affect bonuses?", a: "For eligible employees, payroll treatment may differ. Confirm eligibility and how your employer applies the scheme to bonus payments." },
    { q: "Are RSUs taxed differently?", a: "Equity awards often have distinct tax timing from cash bonuses. Treatment depends on award type, vesting and employer reporting — seek specialist advice." },
    { q: "Is holiday allowance taxed similarly?", a: "Holiday allowance (vakantiegeld) is also taxable employment income and may use special withholding. See the holiday allowance guide for package context." },
    { q: "How can I estimate my net bonus?", a: "Use gross figures from your offer, read payslip labels and try the net salary calculator for orientation — confirm specifics with payroll or a tax adviser." },
  ],
  comparisonRows: [
    { component: "Base salary", treatment: "Regular monthly payroll withholding", note: "Predictable monthly loonheffing rhythm" },
    { component: "Holiday allowance", treatment: "Often special / annual withholding", note: "Structured compensation — not discretionary bonus" },
    { component: "Bonus", treatment: "Irregular payment — special withholding common", note: "May look heavily taxed on payslip" },
    { component: "Commission", treatment: "Variable — often similar to bonus withholding", note: "Confirm timing in contract" },
    { component: "Stock / RSU", treatment: "Separate events — not identical to cash bonus", note: "Specialist advice often needed" },
  ],
  payslipItems: [
    { label: "Gross bonus", value: "Bonus amount before deductions", example: "EUR 5,000.00" },
    { label: "Loonheffing", value: "Wage tax withholding on bonus", example: "− varies" },
    { label: "Bijzondere beloning", value: "Special wage component label (if shown)", example: "context" },
    { label: "Pensioen", value: "Pension deduction if applicable", example: "− varies" },
    { label: "Net bonus paid", value: "Amount transferred to bank account", example: "EUR 2,500–3,500*" },
  ],
  relatedTaxGuides: [
    { label: "Gross vs Net Salary", href: GROSS_VS_NET_SALARY_PATH, status: "live", description: "Understand gross salary, net salary and payroll deductions." },
    { label: "Net Salary Netherlands", href: NET_SALARY_NETHERLANDS_PATH, status: "live", description: "Estimate take-home pay and compare salary scenarios." },
    { label: "Payroll Tax Netherlands", href: PAYROLL_TAX_NETHERLANDS_PATH, status: "live", description: "How loonheffing and payroll deductions work on payslips." },
    { label: "Holiday Allowance", href: HOLIDAY_ALLOWANCE_NETHERLANDS_PATH, status: "live", description: "How vakantiegeld fits into Dutch compensation packages." },
    { label: "Expat Salary Guide", href: EXPAT_SALARY_NETHERLANDS_PATH, status: "live", description: "Salary expectations and package context for expats." },
    { label: "30% Ruling", href: THIRTY_PERCENT_RULING_PATH, status: "live", description: "Expat tax scheme and payroll impact orientation." },
  ] satisfies BonusTaxNetherlandsLink[],
  relatedSalaryGuideTips: [
    "Start with payroll tax to understand loonheffing and payslip basics before interpreting bonus lines.",
    "Use gross vs net salary guide when comparing bonus-inclusive offers.",
    "Read holiday allowance guide to separate vakantiegeld from discretionary bonus pay.",
    "Model scenarios with the net salary calculator — orientation only, not tax advice.",
  ],
  faqQuickChecks: [
    "Confirm whether the bonus figure quoted is gross or net.",
    "Ask HR whether special wage withholding applies to your bonus payment.",
    "Check whether pension deductions apply to the bonus payslip.",
    "Keep annual tax filing in mind — withholding is not always the final outcome.",
  ],
  servicesWhenToUse: [
    { title: "Tax advisors", body: "Personal tax position, annual reconciliation and cross-border bonus questions." },
    { title: "Payroll specialists", body: "Payslip interpretation, employer withholding setup and bonus timing." },
    { title: "Expat tax services", body: "International employment, 30% ruling and multi-country filing context." },
    { title: "Financial advisors", body: "Cash-flow planning after bonus payments — not tax filing itself." },
  ],
  services: [
    { label: "Tax advisors", href: "/netherlands/services/tax-advisors/", status: "live", description: "Payroll tax and expat bonus context." },
    { label: "Payroll services", href: "/netherlands/services/payroll-services/", status: "comingSoon", description: "Future directory for payroll support." },
    { label: "Expat tax services", href: "/netherlands/services/expat-tax-services/", status: "comingSoon", description: "Future directory for expat tax specialists." },
    { label: "Financial advisors", href: "/netherlands/services/financial-advisors/", status: "comingSoon", description: "Future directory for financial planning support." },
  ] satisfies BonusTaxNetherlandsLink[],
  faq: [
    { q: "Why is my bonus taxed so much?", a: "Dutch payroll often withholds at higher rates on irregular payments through special wage tax logic. The payslip shows withholding — not necessarily your final annual tax rate." },
    { q: "Is bonus tax higher than salary tax?", a: "Bonuses are employment income taxed through the same broader system. One-off payments can show higher withholding percentages than monthly salary payslips." },
    { q: "What is special wage tax?", a: "Special wage tax (bijzondere beloning context) refers to payroll withholding rules for irregular payments such as many bonuses, commissions and some lump sums." },
    { q: "Is bonus withholding my final tax?", a: "Usually not. Withholding is collected at payment time. Final annual tax is determined through your overall tax position and annual process." },
    { q: "How are bonuses taxed for expats?", a: "Expats employed in the Netherlands generally follow the same payroll withholding principles. Payslip labels and multinational setups can add confusion." },
    { q: "Does the 30% ruling affect bonuses?", a: "For eligible employees, payroll treatment may differ. Confirm eligibility and employer application — not tax advice." },
    { q: "How can I estimate my net bonus?", a: "Use gross figures from HR, read payslip labels and try the net salary calculator for orientation. Confirm with payroll or a tax adviser." },
    { q: "Are RSUs taxed differently?", a: "Equity compensation often follows different tax timing from cash bonuses. Award terms and employer reporting determine treatment." },
  ],
  officialSources: [
    { label: "Belastingdienst", href: "https://www.belastingdienst.nl/", description: "Dutch Tax Administration — official wage tax and income guidance." },
    { label: "Government.nl", href: "https://www.government.nl/", description: "Official Dutch government information on work, income and taxes." },
    { label: "Business.gov.nl", href: "https://business.gov.nl/", description: "Employer guidance on payroll, wages and employment obligations." },
    { label: "Belastingdienst — wage tax", href: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontenten/belastingdienst/business/payroll_taxes/", description: "Official payroll tax overview for employers and reference context." },
  ],
  relatedGuides: [
    { label: "Netherlands Taxes Hub", href: TAXES_HUB_PATH, status: "live", description: "Central Dutch tax guide for expats." },
    { label: "Net Salary Guide", href: NET_SALARY_NETHERLANDS_PATH, status: "live", description: "Estimate take-home pay from your package." },
    { label: "Gross vs Net Salary", href: GROSS_VS_NET_SALARY_PATH, status: "live", description: "Why headline gross differs from net pay." },
    { label: "Payroll Tax Guide", href: PAYROLL_TAX_NETHERLANDS_PATH, status: "live", description: "Loonheffing and payslip basics." },
    { label: "30% Ruling", href: THIRTY_PERCENT_RULING_PATH, status: "live", description: "Expat tax scheme orientation." },
    { label: "Employee Benefits", href: EMPLOYEE_BENEFITS_NETHERLANDS_PATH, status: "live", description: "Full Dutch compensation package context." },
    { label: "Holiday Allowance", href: HOLIDAY_ALLOWANCE_NETHERLANDS_PATH, status: "live", description: "Vakantiegeld vs bonus distinction." },
  ] satisfies BonusTaxNetherlandsLink[],
  exploreNextCards: [
    { label: "Net Salary Calculator", href: DUTCH_SALARY_NET_CALCULATOR_PATH, status: "live", description: "Estimate take-home pay including bonus context." },
    { label: "Gross vs Net Salary", href: GROSS_VS_NET_SALARY_PATH, status: "live", description: "Clarify gross and net before comparing offers." },
    { label: "Payroll Tax Guide", href: PAYROLL_TAX_NETHERLANDS_PATH, status: "live", description: "Understand loonheffing on payslips." },
    { label: "30% Ruling", href: THIRTY_PERCENT_RULING_PATH, status: "live", description: "Expat scheme and payroll impact." },
    { label: "Holiday Allowance", href: HOLIDAY_ALLOWANCE_NETHERLANDS_PATH, status: "live", description: "Separate vakantiegeld from bonus pay." },
    { label: "Payslip decoder", href: PAYSLIP_DECODER_PATH, status: "live", description: "Decode bonus and tax lines on a loonstrook." },
  ] satisfies BonusTaxNetherlandsLink[],
  calculatorToolCta: {
    title: "Estimate Net Pay Including Bonuses",
    description: "After understanding bonus withholding, use the Dutch salary net calculator to model gross-to-net context alongside payroll tax.",
    supportingText: "Pair the calculator with payroll tax and gross vs net guides. Results are illustrative — not tax advice.",
    primaryCta: { label: "Open net salary calculator", href: DUTCH_SALARY_NET_CALCULATOR_PATH },
    secondaryCta: { label: "Payroll tax guide", href: PAYROLL_TAX_NETHERLANDS_PATH },
    disclaimer: "Calculator outputs are orientation only. Bonus withholding rules depend on employer payroll setup.",
    prepItems: [
      { label: "Gross bonus", body: "Confirm the bonus amount is quoted gross, not net." },
      { label: "Payment timing", body: "One-off bonus vs spread payments changes cash-flow planning." },
      { label: "Full package", body: "Compare bonus alongside salary, vakantiegeld and pension." },
    ],
  },
} as const;
