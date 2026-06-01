export const AVERAGE_SALARY_NETHERLANDS_PATH = "/netherlands/taxes/average-salary-netherlands/" as const;
export const DUTCH_SALARY_NET_CALCULATOR_PATH = "/netherlands/taxes/tools/dutch-salary-net-calculator/" as const;
export const THIRTY_PERCENT_RULING_CALCULATOR_PATH = "/netherlands/taxes/tools/30-ruling-calculator/" as const;
export const PAYSLIP_DECODER_PATH = "/netherlands/work/tools/payslip-decoder/" as const;
export const EMPLOYMENT_TYPE_SCENARIO_TOOL_PATH = "/netherlands/work/tools/employment-type-scenario-tool/" as const;
export const COST_OF_LIVING_CALCULATOR_PATH = "/netherlands/money/tools/cost-of-living-calculator/" as const;
export const RENT_AFFORDABILITY_CALCULATOR_PATH = "/netherlands/housing/tools/rent-affordability-calculator/" as const;
export const TAXES_TOOLS_HUB_PATH = "/netherlands/taxes/tools/" as const;

export const AVERAGE_SALARY_TAX_ADVISOR_AFFILIATE_PLACEMENT_ID = "nl-money-tax-advisors-support-providers" as const;

export type AverageSalaryNetherlandsLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export const averageSalaryNetherlandsPage = {
  slug: "average-salary-netherlands",
  path: AVERAGE_SALARY_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2026-06-03",
  seo: {
    title: "Average Salary in the Netherlands | Income, Cities, Industries & Expat Guide",
    description:
      "Explore average salaries in the Netherlands, including income by city, industry and experience level. Learn what expats can expect and how salary compares after tax.",
    keywords: [
      "average salary netherlands",
      "average income netherlands",
      "dutch average salary",
      "netherlands salary guide",
      "salaries in the netherlands",
      "expat salary netherlands",
      "highly skilled migrant salary",
      "netherlands wages",
      "salary by city netherlands",
      "salary after tax netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Salary · Benchmarks",
    pageTitle: "Average Salary in the Netherlands",
    subtitle:
      "Understand salary expectations in the Netherlands, including average income levels, city differences, industry trends, taxes and what international professionals should realistically expect.",
    primaryCta: { label: "Explore Salary Insights", href: "#snapshot" },
    secondaryCta: { label: "Estimate Net Salary", href: DUTCH_SALARY_NET_CALCULATOR_PATH },
    chips: ["City differences", "Industry trends", "Expat salaries", "Gross vs net"],
    image: {
      src: "/images/heroes/netherlands-average-salary-hero-v2.png",
      alt: "Photorealistic editorial scene of an international professional reviewing salary charts on a laptop at a modern Dutch workspace, with soft-focus Amsterdam canal houses visible through the window.",
    },
  },
  infographics: {
    salaryFactors: {
      src: "/images/infographics/netherlands-salary-factors-infographic.png",
      alt: "Infographic showing city, industry, experience, education, employer and international expertise as factors affecting Dutch salary.",
      caption:
        "Use this as a mental model: national averages hide wide variation by city, industry, experience and employer setup.",
    },
    averageVsMedian: {
      src: "/images/infographics/netherlands-average-vs-median-salary-v2.png",
      alt: "Infographic comparing average salary and median salary in the Netherlands, showing how high earners can pull averages upward.",
      caption:
        "High earners can pull averages upward. Median income often gives a more realistic middle-point view.",
    },
    salaryByIndustry: {
      src: "/images/infographics/netherlands-salary-by-industry-infographic.png",
      alt: "Infographic overview of salary context across Dutch industries including technology, finance, engineering and healthcare.",
      caption:
        "Industry often matters more than headline national averages. Use official CBS wage data for current figures.",
    },
    salaryByCity: {
      src: "/images/infographics/netherlands-salary-by-city-infographic.png",
      alt: "Infographic comparing salary and cost-of-living context across Dutch cities including Amsterdam, Rotterdam, The Hague, Utrecht and Eindhoven.",
      caption:
        "City salary levels and living costs do not move in lockstep. Compare offers against rent, commute and lifestyle needs.",
    },
    grossToNet: {
      src: "/images/infographics/netherlands-average-salary-gross-to-net-v2.png",
      alt: "Infographic showing how gross salary in the Netherlands flows through payroll tax, pension and deductions to net take-home pay.",
      caption:
        "Dutch offers are usually quoted gross. Take-home pay depends on payroll tax, pension, benefits and personal circumstances.",
    },
    goodSalaryHouseholds: {
      src: "/images/infographics/netherlands-good-salary-household-profiles-infographic.png",
      alt: "Infographic showing what counts as a good salary for a single professional, couple and family in the Netherlands based on housing, commute and lifestyle factors.",
      caption:
        "A good salary depends on household size, city and living costs — not the headline number alone.",
    },
    experienceLadder: {
      src: "/images/infographics/netherlands-salary-by-experience-ladder-infographic.png",
      alt: "Infographic ladder showing salary expectations from entry-level through director and specialist expert roles in the Netherlands.",
      caption:
        "Experience, specialization and management responsibility often drive salary progression more than city alone.",
    },
    expatSalaryRoutes: {
      src: "/images/infographics/netherlands-expat-salary-routes-infographic.png",
      alt: "Infographic showing how expats arrive in the Netherlands through HSM, multinationals, transfers, tech and university routes and what affects pay.",
      caption:
        "Expat packages may include relocation, benefits and 30% ruling treatment that national averages do not capture.",
    },
    hsmSalaryContext: {
      src: "/images/infographics/netherlands-hsm-salary-context-infographic.png",
      alt: "Infographic explaining highly skilled migrant salary context including official thresholds, employer offers and tax considerations.",
      caption:
        "HSM minimum thresholds change regularly. Actual offers and take-home pay still vary by role and employer.",
    },
    salaryVsCostOfLiving: {
      src: "/images/infographics/netherlands-salary-vs-cost-of-living-infographic.png",
      alt: "Infographic comparing gross salary offers against monthly living costs including rent, transport, groceries, healthcare and childcare across Dutch cities.",
      caption:
        "Compare salary and living costs together. The same gross offer can feel very different across cities.",
    },
    expatSalaryQuestions: {
      src: "/images/infographics/netherlands-expat-salary-questions-infographic.png",
      alt: "Infographic summarizing common expat salary questions about offer competitiveness, Amsterdam costs, tax and international comparison.",
      caption:
        "Use these orientation prompts alongside calculators, city guides and official wage data.",
    },
    calculatorFlow: {
      src: "/images/infographics/netherlands-average-salary-gross-to-net-v2.png",
      alt: "Infographic showing the path from gross salary through payroll deductions to net take-home pay for calculator planning.",
      caption:
        "Use the calculator after you know your gross offer structure — the result is an estimate, not a payroll guarantee.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Average salary" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#good-salary", label: "Good salary" },
    { href: "#average-vs-median", label: "Avg vs median" },
    { href: "#experience", label: "Experience" },
    { href: "#industry", label: "Industry" },
    { href: "#roles", label: "By role" },
    { href: "#cities", label: "Cities" },
    { href: "#scenarios", label: "Scenarios" },
    { href: "#expats", label: "Expats" },
    { href: "#hsm", label: "HSM" },
    { href: "#gross-vs-net", label: "Gross vs net" },
    { href: "#cost-of-living", label: "Cost of living" },
    { href: "#questions", label: "Questions" },
    { href: "#calculator", label: "Calculator" },
    { href: "#sources", label: "Sources" },
  ],
  conceptCards: [
    {
      title: "National averages",
      body: "Useful starting points from CBS and wage statistics, but they hide city, industry and seniority differences.",
    },
    {
      title: "Your offer context",
      body: "A competitive salary depends on role, employer, location, experience and whether the package is gross or net-oriented.",
    },
    {
      title: "Take-home reality",
      body: "Taxes, pension and benefits change spendable income. Gross salary alone does not describe monthly life costs.",
    },
  ],
  snapshotContextCards: [
    { label: "Mid-level tech (employed)", value: "€60,000–€90,000 gross / year", note: "Software, data and product medior roles; Amsterdam intl. firms often higher." },
    { label: "Amsterdam knowledge workers", value: "€58,000–€100,000 gross / year", note: "Headline pay is higher; rent usually absorbs much of the gap." },
    { label: "HSM minimum (age 30+)", value: "€5,942 gross / month", note: "Legal IND floor only — many offers are higher. Excludes holiday allowance." },
  ],
  snapshotChecklist: [
    "Check whether the offer is monthly or annual gross, and whether holiday allowance is included.",
    "Compare the role against city rent, commute and household costs — not national averages alone.",
    "Use official CBS wage data for macro context, then calculators for your own take-home estimate.",
  ],
  goodSalaryChecklist: [
    "Rent and housing size usually matter more than small differences in gross pay.",
    "Dual income, childcare and school choices change what feels comfortable for families.",
    "A strong gross offer still needs a net-salary check before you sign.",
  ],
  experienceTips: [
    "Entry roles in high-demand sectors can still pay above generic national medians.",
    "International experience and niche skills often matter more after the mid-level stage.",
    "Management scope and employer type can shift pay more than years of experience alone.",
  ],
  industryTips: [
    "Tech, finance and engineering often sit above broader national wage averages.",
    "Healthcare and education often follow structured pay scales rather than open negotiation.",
    "Sales and consulting packages may include variable pay — compare total compensation, not base only.",
  ],
  costOfLivingFactors: [
    { title: "Rent", body: "Often the largest monthly cost, especially in Amsterdam and Utrecht." },
    { title: "Transport", body: "Commute time and OV costs can change how far salary goes." },
    { title: "Childcare", body: "Major budget item for families; availability varies by city." },
    { title: "Healthcare", body: "Mandatory insurance is a fixed monthly cost for residents." },
  ],
  calculatorOutputs: [
    "Estimated monthly and annual net salary",
    "Side-by-side comparison of two gross offers",
    "Scenario planning with 30% ruling assumptions",
  ],
  relatedCalculators: [
    {
      label: "Dutch salary net calculator",
      href: DUTCH_SALARY_NET_CALCULATOR_PATH,
      status: "live",
      description: "Estimate monthly and annual take-home pay from gross salary, pension, holiday allowance and 30% ruling assumptions.",
    },
    {
      label: "30% ruling eligibility calculator",
      href: THIRTY_PERCENT_RULING_CALCULATOR_PATH,
      status: "live",
      description: "Check likely eligibility and indicative allowance impact before comparing net salary scenarios.",
    },
    {
      label: "Expat cost of living calculator",
      href: COST_OF_LIVING_CALCULATOR_PATH,
      status: "live",
      description: "Estimate monthly expenses by city and household to see whether a gross offer fits local costs.",
    },
    {
      label: "Rent affordability calculator",
      href: RENT_AFFORDABILITY_CALCULATOR_PATH,
      status: "live",
      description: "Stress-test housing costs against estimated net pay and common Dutch rent norms.",
    },
    {
      label: "Dutch payslip decoder",
      href: PAYSLIP_DECODER_PATH,
      status: "live",
      description: "Understand bruto loon, loonheffing and netto loon lines on a real Dutch payslip.",
    },
    {
      label: "Employment type scenario tool",
      href: EMPLOYMENT_TYPE_SCENARIO_TOOL_PATH,
      status: "live",
      description: "Compare employee, contractor and ZZP setups when headline salary is not the full picture.",
    },
  ] satisfies AverageSalaryNetherlandsLink[],
  affiliatePlacementId: AVERAGE_SALARY_TAX_ADVISOR_AFFILIATE_PLACEMENT_ID,
  servicesWhenToUse: [
    { title: "Tax advisors", body: "Helpful for ruling eligibility, cross-border pay and payroll tax questions." },
    { title: "Relocation services", body: "Useful when salary planning overlaps with housing and move timing." },
    { title: "Recruitment context", body: "Agencies can explain market ranges, but verify offers with your own net estimate." },
  ],
  goodSalaryProfiles: [
    {
      title: "Single professional",
      body: "A good salary depends on rent, commute and lifestyle. Major Randstad cities usually need higher gross pay than smaller cities for the same comfort level.",
    },
    {
      title: "Couple",
      body: "Dual income, housing size and transport choices matter. One strong salary can work, but housing costs often dominate the budget conversation.",
    },
    {
      title: "Family with children",
      body: "Childcare, school choices, housing space and healthcare add pressure beyond headline salary. Family salary comfort varies widely by city.",
    },
  ],
  experienceLevels: [
    { title: "Entry-level", body: "Lower starting pay, but strong demand in tech, engineering and finance can still create competitive entry offers." },
    { title: "Mid-level", body: "Specialization and language skills start to matter more. International experience can push pay above local medians." },
    { title: "Senior professional", body: "Deep expertise, leadership scope and scarce skills often drive the largest salary jumps." },
    { title: "Manager", body: "Management responsibility, team size and employer type can matter more than years alone." },
    { title: "Director / specialist expert", body: "Top packages often combine base salary, bonus, pension, benefits and sometimes expat-specific arrangements." },
  ],
  industryCards: [
    { title: "Technology", body: "Often strong pay for software, data, product and engineering roles, especially in Amsterdam, Utrecht and Eindhoven." },
    { title: "Engineering", body: "High demand in infrastructure, manufacturing, semiconductors and technical sectors across multiple Dutch cities." },
    { title: "Finance", body: "Amsterdam and the Randstad remain important hubs for banking, fintech and corporate finance roles." },
    { title: "Consulting", body: "Project-based work with pay tied to seniority, specialization and client demand." },
    { title: "Healthcare", body: "Structured pay scales and regulated environments. International credentials may need local recognition." },
    { title: "Education", body: "More standardized pay bands. University and research roles can differ from school-level employment." },
    { title: "Logistics", body: "Rotterdam and port-related regions are strong for trade, supply chain and operations roles." },
    { title: "Marketing", body: "Pay varies by sector, language skills and whether the role is agency, in-house or international brand work." },
    { title: "Sales", body: "Often combines base salary with variable compensation. Package structure matters as much as headline pay." },
    { title: "Legal", body: "Corporate law, in-house counsel and international legal roles can pay well, especially in major business cities." },
  ],
  cityCards: [
    { label: "Amsterdam", href: "/netherlands/amsterdam/", highlights: ["International business", "Finance", "Tech"], note: "Often higher salaries, but housing costs are usually higher too." },
    { label: "Rotterdam", href: "/netherlands/rotterdam/", highlights: ["Logistics", "Trade", "Engineering"], note: "Strong port and industrial economy with a different cost profile from Amsterdam." },
    { label: "The Hague", href: "/netherlands/the-hague/", highlights: ["Government", "NGOs", "International orgs"], note: "Important for diplomacy, legal and international-sector roles." },
    { label: "Utrecht", href: "/netherlands/utrecht/", highlights: ["Central business hub", "Tech", "Services"], note: "Popular for commuters and companies wanting Randstad access with a different city feel." },
    { label: "Eindhoven", href: "/netherlands/eindhoven/", highlights: ["Technology", "Semiconductors", "Engineering"], note: "Strong tech and hardware ecosystem with a different salary-to-rent balance than Amsterdam." },
    { label: "Leiden", href: "/netherlands/leiden/", highlights: ["Science", "Biotech", "Research"], note: "University and life-sciences context can shape salary expectations." },
    { label: "Delft", href: "/netherlands/delft/", highlights: ["Engineering", "Technical sectors", "Research"], note: "Technical talent and university-linked employers are important local factors." },
  ],
  costOfLivingComparisons: [
    { pair: "Amsterdam vs Eindhoven", body: "Amsterdam often offers higher headline salaries, but Eindhoven can feel more manageable once rent and lifestyle costs are included." },
    { pair: "Amsterdam vs Rotterdam", body: "Both are major cities with strong employers, but housing and commute patterns can change how far the same gross salary goes." },
    { pair: "Utrecht vs Leiden", body: "Both sit in a high-demand region. Salary offers may look similar, but housing and family setup can change the real outcome." },
  ],
  expatPoints: [
    "Many expats arrive through highly skilled migrant routes, multinational employers or international transfers.",
    "Expat packages may include relocation support, pension differences or 30% ruling treatment that national averages do not capture.",
    "Language, niche expertise and international experience can push pay above local medians in some sectors.",
    "A competitive gross offer still needs to be checked against tax, rent and family costs.",
  ],
  scenarioQuestions: [
    {
      q: "Is €50k a good salary?",
      a: "€50,000 gross is near the national median full-time band (roughly €44k–€49k in 2026 planning terms). It can work for a single professional outside expensive Randstad cities, but Amsterdam usually needs more headroom once rent is included. Indicative net is often roughly €34k–€39k before lifestyle costs.",
    },
    {
      q: "Is €70k enough in Amsterdam?",
      a: "€70,000 gross is a solid band for many single professionals in Amsterdam (indicative net often roughly €46k–€52k). Housing, pension and 30% ruling treatment still matter. Families usually need a wider household budget than a single-earner €70k gross.",
    },
    {
      q: "What salary do highly skilled migrants earn?",
      a: "There is no single number. HSM routes have minimum salary thresholds that change over time, while actual offers vary by role and employer.",
    },
    {
      q: "How much tax will I pay?",
      a: "That depends on payroll setup, pension, tax credits, 30% ruling status and personal circumstances. Use salary and tax guides for orientation, not guarantees.",
    },
    {
      q: "What is a good family salary?",
      a: "Families usually need to weigh childcare, housing size, city and dual-income potential alongside gross salary.",
    },
    {
      q: "What is a good salary for a single expat?",
      a: "It depends on city and lifestyle, but many single expats focus on rent, transport, savings goals and whether the offer is gross or net-oriented.",
    },
    {
      q: "How does Dutch salary compare internationally?",
      a: "The Netherlands can be competitive in tech, finance and engineering, but headline gross pay should be compared with tax, benefits and living costs.",
    },
  ],
  calculatorToolCta: {
    title: "Estimate Your Take-Home Salary",
    description:
      "Once you understand average salary context, use the dedicated Dutch salary net calculator to estimate take-home pay from your own gross offer.",
    supportingText:
      "The tool supports gross salary, holiday allowance, pension, 30% ruling scenarios and side-by-side offer comparison.",
    primaryCta: { label: "Open Dutch salary net calculator", href: DUTCH_SALARY_NET_CALCULATOR_PATH },
    secondaryCta: { label: "Net salary guide", href: "/netherlands/taxes/net-salary-netherlands/" },
    disclaimer: "Calculator results are planning estimates, not payroll guarantees.",
    prepItems: [
      { label: "Offer basis", body: "Check whether the figure is monthly or yearly gross." },
      { label: "City context", body: "Compare the offer against local rent and commute costs." },
      { label: "Tax assumptions", body: "Confirm pension, ruling and allowance treatment." },
    ],
  },
  relatedSalaryGuides: [
    { label: "Net Salary Netherlands", href: "/netherlands/taxes/net-salary-netherlands/", status: "live", description: "Estimate take-home pay and compare salary scenarios." },
    { label: "Gross vs Net Salary", href: "/netherlands/taxes/gross-vs-net-salary/", status: "live", description: "Understand why Dutch offers are usually quoted gross." },
    { label: "Payroll Tax", href: "/netherlands/taxes/payroll-tax-netherlands/", status: "live", description: "Learn how loonheffing and payroll deductions affect net pay." },
    { label: "30% Ruling", href: "/netherlands/taxes/30-percent-ruling/", status: "live", description: "See how the expat scheme can affect take-home pay." },
    { label: "Expat Taxes", href: "/netherlands/taxes/expat-taxes-netherlands/", status: "live", description: "Broader expat tax context for salary and relocation planning." },
  ] satisfies AverageSalaryNetherlandsLink[],
  services: [
    { label: "Tax advisors", href: "/netherlands/services/tax-advisors/", status: "live", description: "Compare tax advisors for salary, ruling and cross-border questions." },
    { label: "Expat accountants", href: "/netherlands/services/accountants/", status: "comingSoon", description: "Future directory for accounting support." },
    { label: "Payroll specialists", href: "/netherlands/services/payroll-services/", status: "comingSoon", description: "Future directory for payroll help." },
    { label: "Recruitment agencies", href: "/netherlands/services/recruitment-agencies/", status: "comingSoon", description: "Future directory for recruitment support." },
    { label: "Relocation services", href: "/netherlands/services/relocation-services/", status: "live", description: "Help with salary planning alongside move logistics." },
  ] satisfies AverageSalaryNetherlandsLink[],
  faq: [
    {
      q: "What is the average salary in the Netherlands?",
      a: "CBS publishes wage and earnings statistics that provide national context, but averages vary widely by city, industry and experience. Use official data rather than outdated copied figures.",
    },
    {
      q: "What is a good salary in the Netherlands?",
      a: "A good salary depends on household size, city, housing costs and lifestyle. A gross figure that works in one city may feel tight in another.",
    },
    {
      q: "Is salary quoted gross or net?",
      a: "Dutch job offers and salary discussions are usually quoted gross unless explicitly stated otherwise.",
    },
    {
      q: "How much tax will I pay?",
      a: "Take-home pay depends on payroll tax, pension, tax credits, benefits and whether schemes such as the 30% ruling apply. Calculators can help with orientation.",
    },
    {
      q: "What salary do expats earn?",
      a: "Expat salaries vary by route, employer and sector. Highly skilled roles and multinational employers often pay above local medians, but there is no single expat salary.",
    },
    {
      q: "Is Amsterdam salary higher?",
      a: "Amsterdam often has higher headline salaries in finance, tech and international business, but housing costs are usually higher too.",
    },
    {
      q: "What salary do highly skilled migrants earn?",
      a: "Actual offers vary by role and employer. The HSM route also has official minimum salary thresholds that change over time and should be checked through official sources.",
    },
    {
      q: "How does cost of living affect salary?",
      a: "Rent, transport, childcare and healthcare can change how far the same gross salary goes. Salary benchmarking should always include living costs.",
    },
  ],
  officialSources: [
    {
      label: "Statistics Netherlands (CBS)",
      href: "https://www.cbs.nl/en-gb",
      description: "Official Dutch statistics on wages, earnings and labour market data.",
    },
    {
      label: "CBS average hourly wages update",
      href: "https://www.cbs.nl/en-gb/news/2024/47/average-hourly-wages-up-by-over-6-percent-in-2024",
      description: "Example of official CBS wage reporting. Check current-year pages for the latest figures.",
    },
    {
      label: "Government.nl minimum wage",
      href: "https://www.government.nl/topics/minimum-wage",
      description: "Official government information on minimum wage rules and updates.",
    },
    {
      label: "Belastingdienst",
      href: "https://www.belastingdienst.nl/",
      description: "Official Dutch tax authority for payroll tax and income tax context.",
    },
    {
      label: "I am Expat employment news",
      href: "https://www.iamexpat.nl/career/employment-news",
      description: "Supporting expat-facing employment and salary context.",
    },
  ],
  relatedGuides: [
    { label: "Netherlands Taxes Guide", href: "/netherlands/taxes/", status: "live", description: "Central Dutch tax hub for expats." },
    { label: "Salary Negotiation in the Netherlands", href: "/netherlands/jobs/salary-negotiation-netherlands/", status: "live", description: "Negotiate Dutch offers with culture and total-compensation context." },
    { label: "Net Salary in the Netherlands", href: "/netherlands/taxes/net-salary-netherlands/", status: "live", description: "Estimate take-home pay from gross offers." },
    { label: "Gross vs Net Salary", href: "/netherlands/taxes/gross-vs-net-salary/", status: "live", description: "Understand Dutch gross and net salary basics." },
    { label: "Payroll Tax", href: "/netherlands/taxes/payroll-tax-netherlands/", status: "live", description: "Learn how payroll deductions affect net pay." },
    { label: "30% Ruling", href: "/netherlands/taxes/30-percent-ruling/", status: "live", description: "Expat scheme context for salary planning." },
    { label: "Moving to the Netherlands", href: "/netherlands/moving-to-the-netherlands/", status: "live", description: "Relocation planning around work and salary." },
    { label: "Dutch Cities Guide", href: "/netherlands/cities/", status: "live", description: "Compare cities for work, housing and lifestyle." },
  ] satisfies AverageSalaryNetherlandsLink[],
  exploreNextCards: [
    { label: "Net salary calculator", href: DUTCH_SALARY_NET_CALCULATOR_PATH, status: "live", description: "Estimate take-home pay with your own inputs." },
    { label: "30% ruling calculator", href: THIRTY_PERCENT_RULING_CALCULATOR_PATH, status: "live", description: "Model eligibility and allowance impact on payroll." },
    { label: "Cost of living calculator", href: COST_OF_LIVING_CALCULATOR_PATH, status: "live", description: "Compare salary against monthly city expenses." },
    { label: "Salary negotiation guide", href: "/netherlands/jobs/salary-negotiation-netherlands/", status: "live", description: "Prepare for Dutch offer negotiation after benchmarking." },
    { label: "Payroll tax guide", href: "/netherlands/taxes/payroll-tax-netherlands/", status: "live", description: "Understand payroll deductions and loonheffing." },
    { label: "All tax tools", href: TAXES_TOOLS_HUB_PATH, status: "live", description: "Browse calculators and planning tools in the taxes cluster." },
  ] satisfies AverageSalaryNetherlandsLink[],
} as const;
