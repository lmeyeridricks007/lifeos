export const SALARY_NEGOTIATION_NETHERLANDS_PATH = "/netherlands/jobs/salary-negotiation-netherlands/" as const;
export const DUTCH_SALARY_NET_CALCULATOR_PATH = "/netherlands/taxes/tools/dutch-salary-net-calculator/" as const;
export const SALARY_NEGOTIATION_AFFILIATE_PLACEMENT_ID = "nl-jobs-salary-negotiation-support-providers" as const;

export type SalaryNegotiationNetherlandsLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export const salaryNegotiationNetherlandsPage = {
  slug: "salary-negotiation-netherlands",
  path: SALARY_NEGOTIATION_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2026-06-07",
  seo: {
    title: "Salary Negotiation in the Netherlands | Expat Guide to Dutch Job Offers",
    description:
      "Learn how salary negotiation works in the Netherlands for expats, including Dutch work culture, gross vs net salary, benefits, the 30% ruling and common negotiation mistakes.",
    keywords: [
      "salary negotiation netherlands",
      "negotiate salary netherlands",
      "dutch salary negotiation",
      "expat salary negotiation netherlands",
      "salary offer netherlands",
      "gross salary netherlands",
      "highly skilled migrant salary",
      "negotiating benefits netherlands",
      "salary expectations netherlands",
      "job offer negotiation netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Jobs · Salary",
    pageTitle: "Salary Negotiation in the Netherlands",
    subtitle:
      "Understand how Dutch salary negotiation works, what expats can realistically negotiate, and how to evaluate job offers beyond just gross salary.",
    primaryCta: { label: "Understand Dutch Salary Culture", href: "#culture" },
    secondaryCta: { label: "Explore Salary & Tax Guides", href: "/netherlands/taxes/" },
    chips: ["Dutch work culture", "Total compensation", "Gross vs net", "Expat offers"],
    image: {
      src: "/images/heroes/netherlands-salary-negotiation-hero-v2.png",
      alt: "Photorealistic editorial photo of a professional calmly reviewing a Dutch job offer and compensation notes on a laptop in a bright modern Netherlands café workspace.",
    },
  },
  infographics: {
    howItWorks: {
      src: "/images/infographics/netherlands-how-salary-negotiation-works-infographic.png",
      alt: "Infographic showing how Dutch salary negotiation typically works from market research through offer clarification to calm negotiation and contract signing.",
      caption: "Negotiation is normal in the Netherlands, but the process is usually direct and pragmatic rather than adversarial.",
    },
    negotiationSnapshot: {
      src: "/images/infographics/netherlands-salary-negotiation-snapshot-infographic.png",
      alt: "Infographic snapshot of Dutch salary negotiation at a glance including gross quotes, negotiation style, benefits and total compensation.",
      caption: "Use this quick reference before comparing offers or preparing a counter-proposal.",
    },
    negotiationCulture: {
      src: "/images/infographics/netherlands-dutch-negotiation-culture-infographic.png",
      alt: "Infographic explaining Dutch salary negotiation culture: direct, practical and transparent versus aggressive tactics to avoid.",
      caption: "Dutch employers often value calm preparation and realistic expectations more than hard-selling negotiation tactics.",
    },
    whatToNegotiate: {
      src: "/images/infographics/netherlands-what-to-negotiate-salary-infographic.png",
      alt: "Infographic showing what can be negotiated in a Dutch job offer including salary, bonus, pension, remote work and relocation.",
      caption: "Not every employer offers flexibility in every area. Ask which components are open for discussion.",
    },
    totalCompensation: {
      src: "/images/infographics/netherlands-total-compensation-infographic.png",
      alt: "Infographic breakdown of total compensation in the Netherlands including base salary, holiday allowance, pension and benefits.",
      caption: "A slightly lower gross salary can sometimes mean a stronger overall package once benefits are included.",
    },
    negotiationMistakes: {
      src: "/images/infographics/netherlands-salary-negotiation-mistakes-infographic.png",
      alt: "Infographic of common expat salary negotiation mistakes in the Netherlands including focusing only on gross pay.",
      caption: "Use this as a checklist of pitfalls to avoid before you respond to an offer.",
    },
    whenToNegotiate: {
      src: "/images/infographics/netherlands-when-to-negotiate-salary-infographic.png",
      alt: "Infographic timeline for when to negotiate a Dutch job offer from research through contract review.",
      caption: "Negotiation is usually clearest after you understand the full package and before you sign.",
    },
    preparation: {
      src: "/images/infographics/netherlands-salary-negotiation-preparation-infographic.png",
      alt: "Infographic checklist for preparing salary negotiation in the Netherlands including market research, taxes and cost of living.",
      caption: "Decide your priorities before the conversation so the discussion stays focused and professional.",
    },
    thirtyRulingNegotiation: {
      src: "/images/infographics/netherlands-30-ruling-negotiation-infographic.png",
      alt: "Infographic explaining how the 30% ruling can affect job offer negotiation and take-home planning without guaranteeing eligibility.",
      caption: "Discuss employer support and salary structure — never assume the ruling is approved until official confirmation.",
    },
    negotiationByIndustry: {
      src: "/images/infographics/netherlands-negotiation-by-industry-infographic.png",
      alt: "Infographic comparing salary negotiation flexibility across Dutch industries from technology and startups to government and healthcare.",
      caption: "Flexibility varies by sector. Use industry context together with role demand, not outdated headline figures.",
    },
    expatScenarios: {
      src: "/images/infographics/netherlands-expat-negotiation-scenarios-infographic.png",
      alt: "Infographic map of common expat salary negotiation scenarios including HSM relocation, internal transfers and city comparisons.",
      caption: "Your negotiation priorities change depending on how you enter the Dutch labour market.",
    },
    offerVsLivingCosts: {
      src: "/images/infographics/netherlands-salary-offer-vs-living-costs-infographic.png",
      alt: "Infographic comparing a gross job offer against monthly living costs such as rent, transport, healthcare and childcare across Dutch cities.",
      caption: "A higher gross offer in an expensive city does not always mean more monthly flexibility.",
    },
    grossToNet: {
      src: "/images/infographics/netherlands-negotiation-gross-to-net-infographic.png",
      alt: "Infographic showing how a gross job offer flows through payroll tax, pension and allowances to estimated net take-home pay in the Netherlands.",
      caption: "Dutch offers are usually quoted gross. Estimate net pay before judging whether an offer works.",
    },
    calculatorFlow: {
      src: "/images/infographics/netherlands-negotiate-offer-calculator-flow-infographic.png",
      alt: "Infographic flow for estimating net pay before negotiating a Dutch job offer using gross salary, tax assumptions and city costs.",
      caption: "Model take-home pay first, then decide whether a counter-offer is realistic for your situation.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "How it works" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#what-to-negotiate", label: "What to negotiate" },
    { href: "#gross-vs-net", label: "Gross vs net" },
    { href: "#thirty-ruling", label: "30% ruling" },
    { href: "#culture", label: "Culture" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#total-compensation", label: "Total package" },
    { href: "#industry", label: "Industry" },
    { href: "#scenarios", label: "Scenarios" },
    { href: "#cost-of-living", label: "Cost of living" },
    { href: "#when-to-negotiate", label: "When" },
    { href: "#prepare", label: "Prepare" },
    { href: "#calculator", label: "Calculator" },
    { href: "#sources", label: "Sources" },
  ],
  conceptCards: [
    {
      title: "Negotiation is normal",
      body: "Salary discussion is common in the Netherlands, but the style is usually direct and pragmatic rather than aggressive.",
    },
    {
      title: "Bands and structure",
      body: "Many employers work within salary bands. Realistic, evidence-based requests often work better than extreme demands.",
    },
    {
      title: "Total package lens",
      body: "Base salary is only one part of the offer. Pension, allowance, mobility and relocation can change the real value.",
    },
  ],
  snapshotCards: [
    { label: "Salary usually quoted", value: "Gross (bruto)" },
    { label: "Negotiation style", value: "Direct and pragmatic" },
    { label: "Common topics", value: "Salary + benefits" },
    { label: "Expat factor", value: "30% ruling may matter" },
    { label: "Important", value: "Evaluate total compensation" },
    { label: "Culture", value: "Confidence without aggression" },
  ],
  snapshotChecklist: [
    "Confirm whether the offer is monthly or annual gross and whether holiday allowance is included.",
    "Estimate net pay before comparing offers — Dutch headlines are usually gross.",
    "List your top three negotiable items (salary, pension, relocation, remote work) before the conversation.",
  ],
  servicesWhenToUse: [
    { title: "Tax advisors", body: "Helpful for 30% ruling questions, cross-border pay and payroll tax context on offers." },
    { title: "Relocation services", body: "Useful when negotiation overlaps with housing, timing and family move logistics." },
    { title: "Immigration lawyers", body: "For visa or permit questions tied to employment offers — not for salary numbers themselves." },
  ],
  whatToNegotiateTips: [
    "Ask which parts of the package are fixed in a salary band versus genuinely flexible.",
    "Request a written summary of pension, holiday allowance (vakantiegeld) and any mobility or relocation items.",
    "If base salary has limited room, propose trade-offs (e.g. extra leave, training budget or hybrid days).",
  ],
  grossVsNetTips: [
    "Employers and recruiters usually quote annual or monthly gross (bruto) salary.",
    "Your payslip net amount depends on payroll tax, pension, and personal circumstances — not the headline alone.",
    "Model two scenarios (with and without 30% ruling) if you are unsure about expat tax treatment.",
  ],
  totalCompTips: [
    "Compare offers using the same time basis — monthly vs annual, and whether vakantiegeld is included.",
    "A lower gross base with a strong employer pension match can beat a higher gross with a weak scheme.",
    "One-off signing bonuses help less than recurring benefits if you plan to stay several years.",
  ],
  industryTips: [
    "Tech and engineering often have more room on base pay and remote work than regulated sectors.",
    "Finance packages may shift negotiation toward bonus targets and variable pay.",
    "Government, healthcare and academia usually follow published scales — focus on step, grade and allowances.",
  ],
  scenarioTips: [
    "International hires: confirm relocation, tax support and visa salary thresholds in writing.",
    "Internal transfers: compare home-country net pay with Dutch net, not gross alone.",
    "Comparing cities: run the same gross offer through rent and commute assumptions for each location.",
  ],
  costOfLivingFactors: [
    { title: "Rent", body: "Often the largest monthly cost — especially in Amsterdam and Utrecht." },
    { title: "Transport", body: "Commute days, OV subscriptions and car costs change real flexibility." },
    { title: "Childcare", body: "Major budget line for families; availability varies by city." },
    { title: "Healthcare", body: "Mandatory Dutch health insurance is a fixed monthly resident cost." },
  ],
  whenToNegotiateTips: [
    "Research market context before the final interview so you can respond quickly to an offer.",
    "Ask for the full package in writing before countering — verbal promises are hard to verify later.",
    "Keep counter-proposals short: one email with clear asks and brief rationale is usually enough.",
  ],
  prepareTips: [
    "Write down your minimum acceptable net monthly budget, not only a gross target.",
    "Prepare two or three priority asks so you do not overload the conversation.",
    "Know which items you are willing to trade (e.g. base vs extra leave vs relocation support).",
  ],
  negotiationTopics: [
    { title: "Base salary", body: "The headline gross figure — often the main discussion point, but not the full story." },
    { title: "Bonus structure", body: "Fixed vs variable pay, targets and payout timing vary by employer and sector." },
    { title: "Holiday allowance", body: "Often around 8% in the Netherlands. Check if it is included in the quoted annual figure." },
    { title: "Pension contribution", body: "Employer and employee pension shares can materially affect long-term value." },
    { title: "Remote work", body: "Hybrid arrangements may be negotiable, especially in tech and international roles." },
    { title: "Vacation days", body: "Statutory minimum exists, but extra days are sometimes negotiable." },
    { title: "Mobility budget", body: "Lease car, OV allowance or travel budget may appear in senior or client-facing roles." },
    { title: "Relocation package", body: "Common for international hires: moving costs, temporary housing or settling support." },
    { title: "Stock / equity", body: "More common in startups and some tech employers — understand vesting and tax treatment." },
    { title: "Training budget", body: "Professional development budget can be meaningful in consulting and specialist roles." },
    { title: "Signing bonus", body: "Sometimes used to bridge a gap — often one-off and may have repayment clauses." },
  ],
  cultureDoItems: [
    "Prepare with market context and a clear priority list.",
    "Ask direct questions about gross vs net, pension and allowance.",
    "Stay calm, concise and evidence-based.",
  ],
  cultureAvoidItems: [
    "Hard-selling or ultimatum-style tactics.",
    "Comparing offers across countries without tax context.",
    "Inflated claims without market support.",
  ],
  mistakeCards: [
    { title: "Focusing only on gross salary", body: "Take-home pay and benefits can change how an offer actually feels." },
    { title: "Ignoring pension contributions", body: "A strong pension match can outweigh a small base-salary difference." },
    { title: "Forgetting housing costs", body: "Amsterdam and Randstad rent can absorb headline pay quickly." },
    { title: "International comparison without tax", body: "Gross pay in one country is not directly comparable to Dutch net pay." },
    { title: "Assuming 30% ruling", body: "Eligibility is not automatic and should not be treated as guaranteed." },
    { title: "Negotiating too aggressively", body: "Extreme tactics can harm rapport in a direct, pragmatic culture." },
    { title: "Ignoring total compensation", body: "Mobility, bonus and allowance may matter as much as base pay." },
    { title: "Ignoring commute or hybrid costs", body: "Office days, travel time and OV costs affect monthly life." },
  ],
  totalCompensationItems: [
    { title: "Pension contributions", body: "Employer share and scheme quality vary — ask for a summary." },
    { title: "Holiday allowance", body: "Confirm whether vakantiegeld is on top of or inside the annual figure." },
    { title: "Mobility & remote work", body: "Car lease, travel budget or hybrid flexibility can add real value." },
    { title: "Bonus & equity", body: "Understand targets, vesting and whether amounts are realistic." },
    { title: "Relocation support", body: "Especially important for international hires and family moves." },
  ],
  industryCards: [
    { title: "Technology", body: "Often more flexibility on salary, equity and remote work; bands still exist." },
    { title: "Finance", body: "Structured bands with bonus-heavy packages; negotiation may focus on variable pay." },
    { title: "Consulting", body: "Title, bonus and travel expectations often matter alongside base pay." },
    { title: "Engineering", body: "Strong demand can create room — especially with niche skills." },
    { title: "Startups", body: "Equity and flexibility may be negotiable; cash may be tighter." },
    { title: "Healthcare", body: "More regulated pay scales; less room than corporate tech or finance." },
    { title: "Academia", body: "Structured scales and grant funding limit flexibility." },
    { title: "Government / NGOs", body: "Formal scales and transparency; limited individual negotiation room." },
  ],
  scenarioCards: [
    {
      title: "Highly skilled migrant relocating",
      body: "Check HSM salary thresholds, relocation support and tax setup. Link: Highly Skilled Migrant visa guide.",
      href: "/netherlands/visa/highly-skilled-migrant/",
    },
    {
      title: "Internal company transfer",
      body: "Compare home-country package with Dutch payroll, pension and cost of living.",
      href: "/netherlands/moving/working-in-the-netherlands/",
    },
    {
      title: "Startup employee",
      body: "Focus on equity terms, runway context and what happens if role changes.",
      href: "/netherlands/taxes/average-salary-netherlands/",
    },
    {
      title: "Senior tech professional",
      body: "Negotiate total package: base, bonus, equity, remote work and pension.",
      href: "/netherlands/amsterdam/",
    },
    {
      title: "Freelancer moving to employment",
      body: "Compare employed benefits (pension, security) with former freelance net income.",
      href: "/netherlands/taxes/gross-vs-net-salary/",
    },
    {
      title: "Couple relocating together",
      body: "Factor dual income timing, housing and childcare into the minimum acceptable offer.",
      href: "/netherlands/moving-to-the-netherlands/",
    },
    {
      title: "Amsterdam vs Eindhoven offers",
      body: "Higher Amsterdam gross may not beat Eindhoven once rent and commute are included.",
      href: "/netherlands/cities/",
    },
  ],
  cityCards: [
    { label: "Amsterdam", href: "/netherlands/amsterdam/", note: "Often highest salaries and highest housing pressure." },
    { label: "Utrecht", href: "/netherlands/utrecht/", note: "Strong demand with Randstad cost profile." },
    { label: "Rotterdam", href: "/netherlands/rotterdam/", note: "Major employers with different rent dynamics than Amsterdam." },
    { label: "Eindhoven", href: "/netherlands/eindhoven/", note: "Tech and engineering hub with different salary-to-rent balance." },
    { label: "Haarlem", href: "/netherlands/haarlem/", note: "Commuter option with Amsterdam-adjacent costs." },
    { label: "Leiden", href: "/netherlands/leiden/", note: "Science and biotech context near Randstad pricing." },
  ],
  preparationChecklist: [
    "Research market salaries for your role, city and sector using official and sector context.",
    "Understand Dutch taxes and estimate net salary from the gross offer.",
    "Compare cost of living for your target city and household setup.",
    "List which benefits matter most: pension, mobility, remote work, relocation.",
    "Clarify visa or sponsorship requirements if applicable.",
    "Decide your priorities before the negotiation conversation.",
  ],
  whenToNegotiateSteps: [
    { step: "1", title: "After the offer", body: "Once you have a written or verbal offer with core terms." },
    { step: "2", title: "Before signing", body: "Negotiate before the contract is signed, not after." },
    { step: "3", title: "With clarity", body: "Ask questions first, then make a focused counter-proposal." },
  ],
  calculatorToolCta: {
    title: "Estimate Your Take-Home Salary",
    description:
      "Before negotiating, estimate what the gross offer means in monthly take-home pay. That helps you judge whether a counter-offer is realistic.",
    supportingText:
      "Use the Dutch salary net calculator for orientation. Pair it with the net salary and gross vs net guides for context.",
    primaryCta: { label: "Open Dutch salary net calculator", href: DUTCH_SALARY_NET_CALCULATOR_PATH },
    secondaryCta: { label: "Net salary guide", href: "/netherlands/taxes/net-salary-netherlands/" },
    disclaimer: "Calculator results are planning estimates, not payroll or tax guarantees.",
    prepItems: [
      { label: "Gross basis", body: "Confirm monthly vs annual and whether holiday allowance is included." },
      { label: "Tax assumptions", body: "Model with and without 30% ruling if relevant." },
      { label: "City costs", body: "Compare estimated net pay against local rent and commute." },
    ],
  },
  relatedSalaryGuides: [
    { label: "Average Salary Netherlands", href: "/netherlands/taxes/average-salary-netherlands/", status: "live", description: "Benchmark salaries by city, industry and experience." },
    { label: "Minimum Wage in the Netherlands", href: "/netherlands/jobs/minimum-wage-netherlands/", status: "live", description: "Statutory pay floor, age bands and take-home pay context." },
    { label: "Gross vs Net Salary", href: "/netherlands/taxes/gross-vs-net-salary/", status: "live", description: "Understand why Dutch offers are quoted gross." },
    { label: "Net Salary Netherlands", href: "/netherlands/taxes/net-salary-netherlands/", status: "live", description: "Estimate take-home pay from your offer." },
    { label: "Payroll Tax", href: "/netherlands/taxes/payroll-tax-netherlands/", status: "live", description: "Learn how payroll deductions affect net pay." },
    { label: "30% Ruling", href: "/netherlands/taxes/30-percent-ruling/", status: "live", description: "Expat scheme context for offer evaluation." },
  ] satisfies SalaryNegotiationNetherlandsLink[],
  affiliatePlacementId: SALARY_NEGOTIATION_AFFILIATE_PLACEMENT_ID,
  services: [
    { label: "Recruitment agencies", href: "/netherlands/services/recruitment-agencies/", status: "comingSoon", description: "Future directory for recruitment support." },
    { label: "Relocation services", href: "/netherlands/services/relocation-services/", status: "live", description: "Help with move planning alongside offer evaluation." },
    { label: "Tax advisors", href: "/netherlands/services/tax-advisors/", status: "live", description: "Cross-border and ruling questions for complex offers." },
    { label: "Immigration lawyers", href: "/netherlands/services/immigration-lawyers/", status: "live", description: "Visa and permit context alongside employment offers." },
  ] satisfies SalaryNegotiationNetherlandsLink[],
  faq: [
    {
      q: "Is salary negotiation normal in the Netherlands?",
      a: "Yes. Negotiation is common, but Dutch culture usually favours direct, realistic and well-prepared discussion rather than aggressive tactics.",
    },
    {
      q: "Should I negotiate gross or net salary?",
      a: "Offers are usually discussed in gross terms. For your own planning, estimate net pay separately using calculators and tax context.",
    },
    {
      q: "Can I negotiate the 30% ruling?",
      a: "You can discuss employer support with the application process, but eligibility is not guaranteed and depends on official rules and personal circumstances.",
    },
    {
      q: "What benefits are negotiable?",
      a: "It varies by employer. Base salary, bonus, pension, remote work, mobility, relocation and sometimes extra leave may be open for discussion.",
    },
    {
      q: "How aggressive should negotiation be?",
      a: "Calm confidence with market evidence usually works better than ultimatums or hard-selling in Dutch workplace culture.",
    },
    {
      q: "What is considered a good salary?",
      a: "It depends on city, household, benefits and net pay. Use salary benchmark guides and cost-of-living context rather than a single national figure.",
    },
    {
      q: "Is pension important in Dutch offers?",
      a: "Yes. Employer pension contributions can be a major part of total compensation, especially over time.",
    },
    {
      q: "Can startups negotiate salary differently?",
      a: "Startups may offer more flexibility on equity and title, but cash and bands can be tighter. Always read the full package.",
    },
  ],
  officialSources: [
    {
      label: "Government.nl — Work in the Netherlands",
      href: "https://www.government.nl/topics/work-in-the-netherlands",
      description: "Official government information on working in the Netherlands.",
    },
    {
      label: "Belastingdienst",
      href: "https://www.belastingdienst.nl/",
      description: "Official Dutch tax authority for payroll and income tax context.",
    },
    {
      label: "Statistics Netherlands (CBS)",
      href: "https://www.cbs.nl/en-gb",
      description: "Official wage and labour market statistics for market research.",
    },
    {
      label: "I am Expat — Employment news",
      href: "https://www.iamexpat.nl/career/employment-news",
      description: "Supporting expat-facing employment and career context.",
    },
  ],
  relatedGuides: [
    { label: "Netherlands Taxes Guide", href: "/netherlands/taxes/", status: "live", description: "Salary and tax hub for expats." },
    { label: "Minimum Wage in the Netherlands", href: "/netherlands/jobs/minimum-wage-netherlands/", status: "live", description: "Legal pay floor, age bands and living-cost context." },
    { label: "Salary Negotiation Guide", href: "/netherlands/jobs/salary-negotiation-netherlands/", status: "live", description: "Negotiate benefits alongside base salary." },
    { label: "Employee Benefits Guide", href: "/netherlands/jobs/employee-benefits-netherlands/", status: "live", description: "Pension, allowance, leave and expat packages." },
    { label: "Pension Guide", href: "/netherlands/jobs/pension-netherlands-expats/", status: "live", description: "Dutch pension system for expats — AOW, employer schemes and portability." },
    { label: "Expat Salary in the Netherlands", href: "/netherlands/jobs/expat-salary-netherlands/", status: "live", description: "Salary expectations for international professionals before you negotiate." },
    { label: "Average Salary Netherlands", href: "/netherlands/taxes/average-salary-netherlands/", status: "live", description: "Salary benchmarking before you negotiate." },
    { label: "Net Salary Netherlands", href: "/netherlands/taxes/net-salary-netherlands/", status: "live", description: "Estimate take-home pay from offers." },
    { label: "Gross vs Net Salary", href: "/netherlands/taxes/gross-vs-net-salary/", status: "live", description: "Understand Dutch salary wording." },
    { label: "30% Ruling", href: "/netherlands/taxes/30-percent-ruling/", status: "live", description: "Expat scheme and offer context." },
    { label: "Moving to the Netherlands", href: "/netherlands/moving-to-the-netherlands/", status: "live", description: "Relocation planning with job offers." },
    { label: "Dutch Cities Guide", href: "/netherlands/cities/", status: "live", description: "Compare cities for cost of living." },
  ] satisfies SalaryNegotiationNetherlandsLink[],
  exploreNextCards: [
    { label: "Average Salary Guide", href: "/netherlands/taxes/average-salary-netherlands/", status: "live", description: "Benchmark before you negotiate." },
    { label: "Net Salary Calculator", href: DUTCH_SALARY_NET_CALCULATOR_PATH, status: "live", description: "Estimate take-home from your offer." },
    { label: "Gross vs Net Salary", href: "/netherlands/taxes/gross-vs-net-salary/", status: "live", description: "Clarify gross and net before counter-offers." },
    { label: "Pension Guide", href: "/netherlands/jobs/pension-netherlands-expats/", status: "live", description: "Understand Dutch pensions before negotiating." },
    { label: "Dutch Cities Guide", href: "/netherlands/cities/", status: "live", description: "Compare living costs by city." },
  ] satisfies SalaryNegotiationNetherlandsLink[],
} as const;
