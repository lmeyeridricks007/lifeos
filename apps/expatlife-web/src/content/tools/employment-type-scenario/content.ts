export const EMPLOYMENT_TYPE_SCENARIO_CANONICAL = "/netherlands/work/tools/employment-type-scenario-tool/";
export const NL_BASE = "/netherlands";

export const EMPLOYMENT_TYPE_SCENARIO_AT_A_GLANCE = [
  {
    title: "What this tool is for",
    description:
      "Rank permanent employment, fixed-term employment, contractor (umbrella / payroll-style), ZZP, and foreign-remote patterns side by side — so you see money, admin, stability, and expat-fit signals before you negotiate or sign. It frames questions; it does not decide legal status.",
  },
  {
    title: "Best for",
    description:
      "Expats comparing two offers, freelancers unsure about ZZP vs payroll, contractors evaluating umbrella fees, and anyone who needs sponsorship or cross-border clarity alongside headline pay.",
  },
  {
    title: "What it models",
    description:
      "Indicative take-home (with clear limits), pension and leave relevance, contract-gap risk, visa/sponsorship practicality, tax-complexity hints, and your own priority sliders — so “best fit” reflects what you care about, not only gross income.",
  },
  {
    title: "What it skips",
    description:
      "Final wage tax, social premiums, CAO or collective rules, IND decisions, and client-vs-employment classification tests. Pair outputs with our salary, 30% ruling, double-tax, and contract tools, then confirm with payroll, legal, and tax advisors.",
  },
];

export const EMPLOYMENT_TYPE_SCENARIO_BEFORE_START_EXTRA = [
  "Actual tax and social outcomes vary by employer, payroll configuration, tax year, and personal situation — the tool uses the same indicative employee net model as our salary calculator for payroll paths.",
  "Visa and sponsorship compatibility must be confirmed on your permit type and contract; the tool surfaces practicality scores, not IND approval.",
  "ZZP and contractor paths depend on utilization, downtime, umbrella or admin fees, and insurance — stress-test assumptions with the advanced inputs.",
  "Higher gross or higher day rate does not automatically mean better fit once fees, benefits, stability, and immigration constraints are included.",
  "Export or print the summary to share with HR, a payroll provider, or an advisor — do not use the PDF as tax or legal filing.",
];

export const EMPLOYMENT_TYPE_TOC = [
  { id: "employment-type-at-a-glance", label: "At a glance" },
  { id: "before-you-start", label: "Before you start" },
  { id: "tool-inputs", label: "Tool inputs" },
  { id: "tool-mode", label: "Tool mode" },
  { id: "core-inputs", label: "Core inputs" },
  { id: "priority-weights", label: "Priority sliders" },
  { id: "advanced-assumptions", label: "Advanced assumptions" },
  { id: "tool-results", label: "Results" },
  { id: "results-summary", label: "Results summary" },
  { id: "decision-lenses", label: "Who wins by dimension" },
  { id: "where-money-goes", label: "Where the money goes" },
  { id: "scenario-comparison", label: "Scenario comparison" },
  { id: "scenario-negative-fit", label: "When not to choose each model" },
  { id: "scoring-explanations", label: "How scoring works" },
  { id: "risk-highlights", label: "Risk highlights" },
  { id: "money-breakdown", label: "Money breakdown" },
  { id: "questions-to-ask", label: "What to ask before choosing" },
  { id: "before-you-decide-checklist", label: "Before you decide checklist" },
  { id: "example-scenarios", label: "Worked example scenarios" },
  { id: "how-tool-works-inline", label: "How this tool works" },
  { id: "recommended-services", label: "Recommended services" },
  { id: "download-summary", label: "Download summary" },
  { id: "related-tools-inline", label: "Related tools" },
  { id: "seo-content", label: "Work models in depth" },
  { id: "comparison-education", label: "Comparison topics" },
  { id: "how-the-tool-works", label: "How this tool works (page)" },
  { id: "related-guides", label: "Related guides" },
  { id: "faq", label: "FAQ" },
  { id: "official-sources", label: "Official sources" },
] as const;

export const EMPLOYMENT_TYPE_QUICK_LINKS = [
  { label: "Start comparing", href: "#tool-inputs" },
  { label: "Priority sliders", href: "#priority-weights" },
  { label: "See results", href: "#tool-results" },
  { label: "Compare money outcomes", href: "#money-breakdown" },
  { label: "Compare risk & admin", href: "#risk-highlights" },
  { label: "Worked examples", href: "#example-scenarios" },
  { label: "Comparison topics", href: "#comparison-education" },
  { label: "Download summary", href: "#download-summary" },
] as const;

export const EMPLOYMENT_TYPE_RELATED_TOOLS = [
  { href: `${NL_BASE}/taxes/tools/dutch-salary-net-calculator/`, label: "Dutch salary net calculator →" },
  { href: `${NL_BASE}/taxes/tools/30-ruling-calculator/`, label: "30% ruling calculator →" },
  { href: `${NL_BASE}/taxes/tools/double-tax-awareness-tool/`, label: "Double tax awareness tool →" },
  { href: `${NL_BASE}/work/tools/employment-contract-risk-scanner/`, label: "Employment contract risk scanner →" },
  { href: `${NL_BASE}/money/tools/cost-of-living-calculator/`, label: "Cost of living calculator →" },
  { href: `${NL_BASE}/housing/tools/rent-affordability-calculator/`, label: "Rent affordability calculator →" },
] as const;

export const EMPLOYMENT_TYPE_RELATED_GUIDES = [
  {
    href: `${NL_BASE}/moving/working-in-the-netherlands/`,
    title: "Working in the Netherlands",
    description: "Move-focused guide connecting work model choices to relocation, permits, salary, and first-month admin.",
  },
  {
    href: `${NL_BASE}/moving/twv-work-permit/`,
    title: "TWV work permit",
    description: "Useful when employer-driven work authorization may change how you interpret the work setup.",
  },
  {
    href: `${NL_BASE}/work/contractor-vs-employee-netherlands/`,
    title: "Contractor vs employee Netherlands",
    description: "How independence differs from payroll in practice — beyond the label on the contract.",
  },
  {
    href: `${NL_BASE}/work/zzp-netherlands/`,
    title: "ZZP in the Netherlands",
    description: "Self-employment registration, mindset, and how ZZP compares to umbrella contractor routes.",
  },
  {
    href: `${NL_BASE}/work/freelancing-netherlands/`,
    title: "Freelancing in the Netherlands",
    description: "Permits, clients, and administration when you are not on a standard payslip.",
  },
  {
    href: `${NL_BASE}/work/working-in-netherlands/`,
    title: "Work permit Netherlands",
    description: "How work authorisation ties to employer, income, and contract type at a high level.",
  },
  {
    href: `${NL_BASE}/taxes/`,
    title: "Netherlands taxes hub",
    description: "Pillar overview: income tax, payroll, allowances, and where specialist guides sit.",
  },
  {
    href: `${NL_BASE}/taxes/expat-taxes-netherlands/`,
    title: "Expat taxes in the Netherlands",
    description: "Residency, worldwide income, and when cross-border filing gets non-trivial.",
  },
  {
    href: `${NL_BASE}/taxes/gross-vs-netherlands-salary/`,
    title: "Gross vs net salary Netherlands",
    description: "Why headline gross is a weak sole metric when comparing offers or day rates.",
  },
  {
    href: `${NL_BASE}/taxes/net-salary-netherlands/`,
    title: "Net salary in the Netherlands",
    description: "Concepts behind our indicative employee net figures used in this tool.",
  },
  {
    href: `${NL_BASE}/taxes/self-employed-tax-netherlands/`,
    title: "Self-employed tax Netherlands",
    description: "Directional context for ZZP tax proxies — not a substitute for an advisor.",
  },
  {
    href: `${NL_BASE}/taxes/30-percent-ruling/`,
    title: "30% ruling guide",
    description: "Eligibility themes to align with the dedicated 30% ruling calculator.",
  },
  {
    href: `${NL_BASE}/moving-to-the-netherlands/`,
    title: "Moving to the Netherlands",
    description: "Relocation hub for timing BRP, housing, and work start together.",
  },
];

export const EMPLOYMENT_TYPE_FAQ = [
  {
    id: "employee-or-zzp",
    question: "Should I choose employee or ZZP in the Netherlands?",
    answer:
      "It depends on your permit route, tolerance for admin, need for paid leave and pension accrual, and realistic billable utilization. This tool compares planning signals side by side — it does not decide legal status, DBA-style relationship tests, or your final tax position.",
  },
  {
    id: "zzp-better",
    question: "Is ZZP better than a permanent job in the Netherlands?",
    answer:
      "Not automatically. ZZP can win on flexibility or upside when utilization is strong, but employment often wins on predictable net, employer pension, sick pay, and simpler immigration storytelling. Compare scenarios here, then validate classification and tax with an advisor.",
  },
  {
    id: "best-for-expats-sponsorship",
    question: "Which employment type is easiest for expats who need sponsorship in the Netherlands?",
    answer:
      "Many residence routes expect a clear Dutch employer–employee relationship with a recognised sponsor and stable income evidence. Independence or foreign payroll can work in specific cases, but they are rarely the “default easy” path for first-time sponsorship — confirm with immigration counsel and the IND route that applies to you.",
  },
  {
    id: "contractor-vs-employee-difference",
    question: "What is the difference between a contractor and an employee in the Netherlands?",
    answer:
      "In everyday language, employees are on Dutch payroll with wage tax withheld and typical CAO or statutory protections. Contractors often invoice through a client relationship or use an umbrella/payroll provider that withholds tax for them; ZZP is self-employed with more admin and different risk. Labels on paper do not replace legal classification rules — use guides and professionals for your facts.",
  },
  {
    id: "fixed-vs-permanent-contract",
    question: "Fixed-term vs permanent contract Netherlands: what changes besides the end date?",
    answer:
      "Renewal probability, notice and transition, pension vesting, mortgage “income certainty” optics, and how tied your permit is to that specific employer can all differ even when gross salary looks the same. This tool lowers stability scores for fixed-term when you want long-term certainty — read your contract and use the employment contract risk scanner for clauses.",
  },
  {
    id: "ruling-all-types",
    question: "Does the 30% ruling apply to all employment types in this tool?",
    answer:
      "No. Eligibility depends on employer, minimum salary, distance history, application timing, and facility rules — not every contract label qualifies or keeps the facility. Use the dedicated 30% ruling calculator and official Belastingdienst guidance alongside this comparison.",
  },
  {
    id: "contractor-more-profit",
    question: "Is a higher day rate as a contractor more profitable than employment?",
    answer:
      "Sometimes on paper before umbrella fees, bench time, pension gaps, and lost employer-paid insurance. After those items, contractor routes may still win or lose depending on your inputs — that is why the tool models fee and utilization knobs instead of trusting gross alone.",
  },
  {
    id: "gross-not-best-fit",
    question: "Why can higher gross income score lower overall fit in this tool?",
    answer:
      "Overall fit mixes income with stability, benefits, admin burden, flexibility, sponsorship practicality, and tax complexity — weighted by your sliders. A scenario can show higher indicative net but weaker security or heavier immigration friction, which drags the combined score when you prioritise those dimensions.",
  },
  {
    id: "lose-going-self-employed",
    question: "What do I lose moving from employee to ZZP in the Netherlands?",
    answer:
      "Often automatic employer pension accrual, paid sick leave, collective agreement protections, payroll simplicity, and predictable monthly net. You may gain rate flexibility and business deductions, but you pick up VAT, bookkeeping, insurance, and gap risk — model both sides here, then confirm with a tax advisor.",
  },
  {
    id: "exact-tax",
    question: "Does this tool calculate exact Dutch wage tax or social premiums?",
    answer:
      "No. Employee paths reuse the same indicative net salary engine as our Dutch salary calculator. Contractor paths subtract umbrella-style fees then reuse payroll-style take-home assumptions. ZZP applies utilization and cost knobs plus a tax proxy — not a full entrepreneur return.",
  },
  {
    id: "fixed-vs-permanent",
    question: "Can I compare fixed-term and permanent employee scenarios?",
    answer:
      "Yes. Both use payroll-style money mechanics; fixed-term receives lower long-term stability scores than permanent when your profile values certainty. Always confirm end date, renewal conditions, and permit linkage in your actual contract.",
  },
  {
    id: "foreign-employer-living-nl",
    question: "How does the tool treat a foreign employer while I live in the Netherlands?",
    answer:
      "Enable the foreign-remote employee scenario and review expat practicality and tax-complexity flags. Cross-border payroll, social security, and withholding are highly fact-specific — use the double tax awareness tool and specialist advisors; the tool does not pick a treaty outcome.",
  },
];

export const EMPLOYMENT_TYPE_OFFICIAL_SOURCES = [
  { label: "IND — Immigration and Naturalisation Service (English)", href: "https://ind.nl/en" },
  { label: "Government.nl — Work in the Netherlands", href: "https://www.government.nl/topics/working-in-the-netherlands" },
  { label: "Business.gov.nl — Starting a business", href: "https://business.gov.nl/starting-a-business/" },
  { label: "Business.gov.nl — Taxes for entrepreneurs", href: "https://business.gov.nl/regulations/taxes/" },
  { label: "Belastingdienst — Income tax (individuals)", href: "https://www.belastingdienst.nl/wps/wcm/connect/en/individuals/content/income-tax" },
  { label: "Belastingdienst — Payroll tax (employers)", href: "https://www.belastingdienst.nl/wps/wcm/connect/en/business/content/payroll-taxes" },
  { label: "Your Europe — Working abroad / social security basics", href: "https://europa.eu/youreurope/citizens/work/index_en.htm" },
  { label: "Sociale Verzekeringsbank (SVB) — Dutch social security (English hub)", href: "https://www.svb.nl/en/" },
];

/** Steps for HowTo JSON-LD — mirror visible instructions on the tool page. */
export const EMPLOYMENT_TYPE_HOW_TO_STEPS = [
  {
    name: "Set your work profile and money inputs",
    text: "Choose residence context, sponsorship needs, industry, stability expectations, and benefit relevance. Enter gross salary for employee paths, day rate and umbrella fees for contractor paths, and rate plus utilization for ZZP.",
  },
  {
    name: "Pick compare-all or compare-two mode",
    text: "Either rank every scenario or narrow to two offers you are deciding between. Toggle advanced assumptions when you want foreign-remote, ruling, or downtime detail.",
  },
  {
    name: "Adjust priority sliders",
    text: "Weight net income, stability, admin, benefits, flexibility, sponsorship simplicity, and tax complexity so the overall score matches what matters to you.",
  },
  {
    name: "Read ranked outcomes, risks, and questions",
    text: "Review the comparison table, risk highlights, generated questions for HR or advisors, and the money breakdown. Re-run when you change fees, utilization, or priorities.",
  },
  {
    name: "Cross-check with specialist tools and providers",
    text: "Use the salary, 30% ruling, double tax, and contract scanner tools, then confirm outcomes with payroll, legal, and tax professionals before you sign.",
  },
] as const;

export const EMPLOYMENT_TYPE_EXAMPLE_SCENARIOS = [
  {
    title: "Permanent vs ZZP: high day rate, downtime changes the answer",
    whoFor: "Consultants comparing a payroll offer with a strong ZZP headline rate.",
    whenUseful: "You are tempted by the day rate but unsure how much bench time you will really have.",
    demonstrate: "Push unpaid downtime and billable utilization — net and stability scores usually move more than gross suggests.",
    keyInputs: "ZZP day rate, billable preset, unpaid downtime level, priority sliders for income vs stability.",
    tradeOffs: "ZZP can win on flexibility and sometimes net; employment wins on sick pay, pension rhythm, and sponsor story.",
    oftenWins: "If downtime is high, payroll often climbs the ranking; if utilization is solid and you accept admin, ZZP can lead on income.",
  },
  {
    title: "Expat needing sponsorship: employee model vs independence",
    whoFor: "Someone moving to NL who likely needs a recognised sponsor and a clear employment contract.",
    whenUseful: "You are weighing ZZP or contractor curiosity against a payroll offer.",
    demonstrate: "Set visa/sponsorship to “yes” and raise the sponsorship slider — employee archetypes typically lead on expat practicality.",
    keyInputs: "Visa sponsorship need, visa friendliness weight, contract gap risk, stability slider.",
    tradeOffs: "Lower upside on paper vs some freelance quotes; gain simpler permit narrative and predictable withholding.",
    oftenWins: "Permanent or fixed-term payroll usually leads on expat fit in this pass — not an IND decision.",
  },
  {
    title: "Contractor under umbrella: fees narrow the gap",
    whoFor: "A role offered via umbrella / payroll-style contracting with a juicy day rate.",
    whenUseful: "Two offers look far apart on gross but you have not modelled admin % and fixed fees.",
    demonstrate: "Open Advanced assumptions and match umbrella % and monthly admin — income scores often compress vs employee.",
    keyInputs: "Umbrella %, umbrella fixed fee, contractor day rate, employee gross for parity.",
    tradeOffs: "Provider fees buy compliance convenience; they eat the rate advantage quickly on some quotes.",
    oftenWins: "After realistic fees, permanent can catch up on net or overall if stability and benefits matter.",
  },
  {
    title: "Fixed-term vs permanent: similar pay, different security",
    whoFor: "Two payroll offers with close base pay but different contract length.",
    whenUseful: "You want to know whether the fixed-term premium (if any) compensates renewal risk.",
    demonstrate: "Compare the two scenarios directly; security and benefits scores diverge even when net is similar.",
    keyInputs: "Contract gap risk, stability slider, compare-two mode with fixed-term vs permanent.",
    tradeOffs: "Renewal uncertainty, notice periods, and sponsor continuity around end dates.",
    oftenWins: "Permanent leads stability; fixed-term can be rational for a bounded project if you accept the gap risk.",
  },
  {
    title: "Remote foreign employer: hidden treaty and admin complexity",
    whoFor: "Living in NL with salary from a non-Dutch employer comparing a local payroll counterfactual.",
    whenUseful: "Gross looks fine but you have not priced cross-border payroll friction.",
    demonstrate: "Enable foreign-remote scenario; watch expat practicality and tax-complexity flags even if net seems okay.",
    keyInputs: "Include foreign remote scenario, residence context, tax complexity slider.",
    tradeOffs: "Social security, withholding, and filing load — often under-modelled in casual comparisons.",
    oftenWins: "No universal winner; the tool highlights complexity so you brief payroll and tax advisors early.",
  },
];

export const EMPLOYMENT_BEFORE_YOU_DECIDE_GROUPS = [
  {
    title: "Permanent employee",
    bullets: [
      "Pension: accrual, employer match, and vesting rules?",
      "Probation length and notice after probation?",
      "Indefinite vs fixed — what does the letter actually say?",
      "Sponsor recognised and contract matches permit route?",
      "Paid leave, holiday allowance timing, and overtime expectations?",
      "Remote / hybrid and cross-border work allowed on paper?",
    ],
  },
  {
    title: "Fixed-term employee",
    bullets: [
      "Renewal likelihood and objective criteria?",
      "Gap risk between contracts — income for mortgage or rent proofs?",
      "End date, notice, and what happens to benefits at term?",
      "Sponsor implications if the contract is shorter than permit expectations?",
      "Conversion to permanent — is it in writing?",
    ],
  },
  {
    title: "Contractor / umbrella",
    bullets: [
      "All-in umbrella fee (% and fixed) and what is included?",
      "Employer costs embedded in the day rate vs extra?",
      "Sick leave / bench policy and who carries insurance gaps?",
      "Who remits wage tax and handles year-end statements?",
      "Payment terms, delays, and late-payment risk?",
      "Restrictions on taking a direct payroll role later?",
    ],
  },
  {
    title: "ZZP / self-employed",
    bullets: [
      "Realistic downtime and client concentration?",
      "Liability insurance and disability / income protection?",
      "AOV and entrepreneur obligations in your situation?",
      "Pension reserve % you will actually set aside?",
      "Accountant scope and VAT assumptions?",
      "Buffer months if invoices slip — cashflow reserve?",
    ],
  },
  {
    title: "Foreign employer (remote from NL)",
    bullets: [
      "Which entity is the legal employer of record for payroll and social security?",
      "Withholding and year-end statements in which country?",
      "Treaty position and residency tie-breaker risks?",
      "Health insurance and BRP timing vs salary start?",
      "Sponsor or highly skilled migrant narrative still relevant?",
    ],
  },
] as const;
