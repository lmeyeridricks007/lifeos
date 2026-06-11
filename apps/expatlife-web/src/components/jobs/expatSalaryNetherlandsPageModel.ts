export const EXPAT_SALARY_NETHERLANDS_PATH = "/netherlands/jobs/expat-salary-netherlands/" as const;
export const DUTCH_SALARY_NET_CALCULATOR_PATH = "/netherlands/taxes/tools/dutch-salary-net-calculator/" as const;
export const AVERAGE_SALARY_NETHERLANDS_PATH = "/netherlands/taxes/average-salary-netherlands/" as const;
export const NET_SALARY_NETHERLANDS_PATH = "/netherlands/taxes/net-salary-netherlands/" as const;
export const GROSS_VS_NET_SALARY_PATH = "/netherlands/taxes/gross-vs-net-salary/" as const;
export const PAYROLL_TAX_NETHERLANDS_PATH = "/netherlands/taxes/payroll-tax-netherlands/" as const;
export const THIRTY_PERCENT_RULING_PATH = "/netherlands/taxes/30-percent-ruling/" as const;
export const SALARY_NEGOTIATION_NETHERLANDS_PATH = "/netherlands/jobs/salary-negotiation-netherlands/" as const;
export const MINIMUM_WAGE_NETHERLANDS_PATH = "/netherlands/jobs/minimum-wage-netherlands/" as const;
export const TAXES_HUB_PATH = "/netherlands/taxes/" as const;
export const CITIES_HUB_PATH = "/netherlands/cities/" as const;
export const HSM_VISA_PATH = "/netherlands/visa/highly-skilled-migrant/" as const;
export const MOVING_HUB_PATH = "/netherlands/moving-to-the-netherlands/" as const;
export const COST_OF_LIVING_CALCULATOR_PATH = "/netherlands/money/tools/cost-of-living-calculator/" as const;
export const RENT_AFFORDABILITY_CALCULATOR_PATH = "/netherlands/housing/tools/rent-affordability-calculator/" as const;
export const THIRTY_PERCENT_RULING_CALCULATOR_PATH = "/netherlands/taxes/tools/30-ruling-calculator/" as const;
export const EMPLOYMENT_TYPE_SCENARIO_TOOL_PATH = "/netherlands/work/tools/employment-type-scenario-tool/" as const;

export const EXPAT_SALARY_AFFILIATE_PLACEMENT_ID = "nl-jobs-expat-salary-support-providers" as const;

export type ExpatSalaryNetherlandsLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export const expatSalaryNetherlandsPage = {
  slug: "expat-salary-netherlands",
  path: EXPAT_SALARY_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2026-06-14",
  seo: {
    title: "Expat Salary in the Netherlands | Salary Expectations, Taxes & Cost of Living",
    description:
      "Learn what expats typically earn in the Netherlands, including salary expectations by city, industry and experience level, plus taxes, the 30% ruling and cost of living considerations.",
    keywords: [
      "expat salary netherlands",
      "salary for expats netherlands",
      "netherlands expat salary",
      "expat income netherlands",
      "highly skilled migrant salary netherlands",
      "average expat salary netherlands",
      "salary amsterdam expat",
      "salary after tax netherlands",
      "expat jobs netherlands",
      "dutch salary guide expats",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Jobs · Expat salary",
    pageTitle: "Expat Salary in the Netherlands",
    subtitle:
      "Understand what international professionals typically earn in the Netherlands, how salaries differ by city and industry, and how taxes and the 30% ruling affect take-home pay.",
    primaryCta: { label: "Explore Salary Expectations", href: "#intro" },
    secondaryCta: { label: "Estimate Net Salary", href: DUTCH_SALARY_NET_CALCULATOR_PATH },
    chips: ["City & industry", "Gross vs net", "30% ruling", "Relocation context"],
    image: {
      src: "/images/heroes/netherlands-expat-salary-hero-v2.png",
      alt: "Photorealistic editorial photo of an international professional reviewing gross-to-net salary charts on a laptop at a modern Dutch apartment, with Rotterdam skyline and relocation boxes visible through the window at golden hour.",
    },
  },
  infographics: {
    expatRoutes: {
      src: "/images/infographics/netherlands-expat-salary-routes-infographic.png",
      alt: "Infographic showing how expats arrive in the Netherlands through HSM, multinationals, transfers, tech and university routes and what affects pay.",
      caption: "Expat packages may include relocation, benefits and 30% ruling treatment that national averages do not capture.",
    },
    snapshot: {
      src: "/images/infographics/netherlands-expat-salary-factors-infographic.png",
      alt: "Infographic snapshot of six factors shaping expat salary in the Netherlands: top industries, expat hubs, gross quoting, tax impact, 30% ruling and housing costs.",
      caption: "There is no single expat salary — context matters more than headline national averages.",
    },
    goodSalary: {
      src: "/images/infographics/netherlands-expat-salary-good-salary-infographic.png",
      alt: "Infographic showing what counts as a good expat salary for single professionals, couples and families in the Netherlands.",
      caption: "A good salary depends on household size, city and living costs — not the headline number alone.",
    },
    vsAverage: {
      src: "/images/infographics/netherlands-expat-salary-vs-average-infographic.png",
      alt: "Infographic comparing how expats arrive in the Netherlands and why their salaries often differ from Dutch national averages.",
      caption: "Many expat roles sit above national medians — but comfort still depends on city and housing.",
    },
    industry: {
      src: "/images/infographics/netherlands-expat-salary-by-industry-infographic.png",
      alt: "Infographic overview of expat salary context across Dutch industries including technology, finance, engineering, consulting, data, healthcare and biotech.",
      caption: "Industry often matters more than headline national averages for international professionals.",
    },
    cities: {
      src: "/images/infographics/netherlands-expat-salary-by-city-infographic.png",
      alt: "Infographic comparing expat salary tendencies and cost-of-living context across Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven, Leiden, Delft and Haarlem.",
      caption: "City salary levels and living costs do not move in lockstep — compare offers against rent and commute.",
    },
    hsm: {
      src: "/images/infographics/netherlands-expat-salary-hsm-infographic.png",
      alt: "Infographic explaining highly skilled migrant salary context including IND thresholds, employer offers, tax setup and city differences.",
      caption: "HSM minimum thresholds change regularly — verify current figures on ind.nl.",
    },
    thirtyRuling: {
      src: "/images/infographics/netherlands-expat-salary-30-ruling-impact-infographic.png",
      alt: "Infographic showing how the Dutch 30% ruling can affect expat gross-to-net pay and relocation economics.",
      caption: "Eligibility is not automatic — see the 30% ruling guide and official Belastingdienst guidance.",
    },
    grossVsNet: {
      src: "/images/infographics/netherlands-expat-salary-gross-to-net-infographic.png",
      alt: "Infographic showing how gross expat salary flows through payroll tax, pension, social contributions and optional 30% ruling to net take-home pay.",
      caption: "Dutch offers are usually quoted gross. Model net pay before judging whether relocation works financially.",
    },
    scenarios: {
      src: "/images/infographics/netherlands-expat-salary-scenarios-infographic.png",
      alt: "Infographic showing common expat salary scenarios including junior professionals, senior engineers, finance roles, startups, relocating families and academics.",
      caption: "Experience, specialization and employer setup often drive outcomes more than city alone.",
    },
    livingCosts: {
      src: "/images/infographics/netherlands-expat-salary-living-costs-infographic.png",
      alt: "Infographic comparing expat gross salary against relative living costs including rent, transport and childcare across Dutch cities.",
      caption: "Compare salary and living costs together — the same gross offer can feel very different by city.",
    },
    questions: {
      src: "/images/infographics/netherlands-expat-salary-questions-infographic.png",
      alt: "Infographic summarizing common expat salary questions about offer competitiveness, Amsterdam costs, tax and international comparison.",
      caption: "Use these orientation prompts alongside calculators, city guides and official wage data.",
    },
    calculatorFlow: {
      src: "/images/infographics/netherlands-expat-salary-calculator-flow-infographic.png",
      alt: "Infographic showing the four-step flow to estimate expat take-home salary from gross offer through calculator to city comparison.",
      caption: "Use the calculator after you know your gross offer structure — results are illustrative only.",
    },
    negotiation: {
      src: "/images/infographics/netherlands-expat-salary-negotiation-infographic.png",
      alt: "Infographic showing what expats should negotiate beyond base salary including holiday allowance, pension, bonus, relocation and 30% ruling support.",
      caption: "Negotiation is common in the Netherlands — compare total compensation, not the headline gross figure alone.",
    },
    services: {
      src: "/images/infographics/netherlands-expat-salary-services-infographic.png",
      alt: "Infographic showing professional support options for expat salary planning including tax advisors, relocation services, immigration lawyers and recruitment context.",
      caption: "Use professionals for specific offer, tax and visa questions — this guide is orientation, not personalised advice.",
    },
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#good-salary", label: "Good salary" },
    { href: "#vs-average", label: "Vs average" },
    { href: "#industry", label: "Industry" },
    { href: "#cities", label: "Cities" },
    { href: "#hsm", label: "HSM" },
    { href: "#thirty-ruling", label: "30% ruling" },
    { href: "#gross-vs-net", label: "Gross vs net" },
    { href: "#scenarios", label: "Scenarios" },
    { href: "#living-costs", label: "Living costs" },
    { href: "#questions", label: "Questions" },
    { href: "#negotiation", label: "Negotiation" },
    { href: "#calculator", label: "Calculator" },
    { href: "#services", label: "Services" },
    { href: "#faq", label: "FAQ" },
    { href: "#sources", label: "Sources" },
  ],
  conceptCards: [
    { title: "No single number", body: "Expat salaries vary by industry, city, experience, employer and tax setup — national averages hide wide spread." },
    { title: "Gross ≠ net", body: "Dutch offers are usually quoted gross. Payroll tax, pension and personal circumstances shape take-home pay." },
    { title: "City + housing", body: "The same gross salary can feel very different in Amsterdam versus Groningen once rent and commute are included." },
  ],
  snapshotContextCards: [
    { label: "Mid-level tech (employed)", value: "Strong expat demand in Amsterdam & Eindhoven", note: "Software, data and product medior roles often sit above national medians — compare total package." },
    { label: "Randstad knowledge workers", value: "Higher pay potential, higher rent pressure", note: "Amsterdam and Utrecht headline salaries can look strong until housing is included." },
    { label: "HSM legal minimum", value: "IND threshold — not market rate", note: "Verify current gross minimums on ind.nl. Many skilled offers exceed the statutory floor." },
  ],
  snapshotCards: [
    { label: "Highest salaries", value: "Tech, finance, engineering" },
    { label: "Strong expat hubs", value: "Amsterdam, Utrecht, Eindhoven, The Hague" },
    { label: "Important", value: "Salary usually quoted gross" },
    { label: "Tax impact", value: "Payroll deductions matter" },
    { label: "Major factor", value: "30% ruling eligibility" },
    { label: "Reality", value: "Housing costs affect purchasing power" },
  ],
  thirtyRulingChecklist: [
    "Confirm whether your employer supports 30% ruling applications for eligible hires.",
    "Model net pay with and without ruling assumptions — eligibility is not guaranteed.",
    "Check official Belastingdienst guidance for current duration and eligibility rules.",
  ],
  negotiationTopics: [
    { title: "Base salary", body: "Confirm monthly vs annual gross and whether vakantiegeld is included in the quoted figure." },
    { title: "Holiday allowance", body: "Dutch contracts often include 8% holiday pay — verify if it is on top of or part of base salary." },
    { title: "Pension", body: "Employer pension contribution can materially change long-term value alongside take-home pay." },
    { title: "Relocation package", body: "Housing search, moving costs, temporary accommodation and family support may be negotiable." },
    { title: "30% ruling", body: "Ask whether the employer will apply and how payroll will reflect it during the qualifying period." },
    { title: "Variable pay", body: "Bonus, commission or equity may sit on top of base — understand tax treatment separately." },
  ],
  snapshotChecklist: [
    "Confirm whether your offer is monthly or annual gross and whether holiday allowance is included.",
    "Compare the offer against city rent and commute — not just national averages.",
    "Model net pay with the salary calculator before deciding if relocation works financially.",
  ],
  goodSalaryChecklist: [
    "Rent and housing size usually matter more than small gross differences for expats.",
    "Dual income, childcare and school choices change what feels comfortable for families.",
    "A strong gross offer still needs a net-salary check — especially with 30% ruling uncertainty.",
  ],
  experienceTips: [
    "Entry roles in tech, finance and engineering can still pay above generic national medians.",
    "International experience and niche skills often matter more after the mid-level stage.",
    "Relocation packages and employer type can shift total value more than base salary alone.",
  ],
  industryTips: [
    "Tech, finance and engineering often sit above broader national wage averages for expats.",
    "Healthcare and academia often follow structured pay scales rather than open negotiation.",
    "Consulting and finance packages may include variable pay — compare total compensation, not base only.",
  ],
  costOfLivingFactors: [
    { title: "Rent", body: "Often the largest monthly cost for expats, especially in Amsterdam and Utrecht." },
    { title: "Transport", body: "Commute time and OV costs can change how far an expat salary goes." },
    { title: "Childcare", body: "Major budget item for relocating families; availability varies by city." },
    { title: "Healthcare", body: "Mandatory insurance is a fixed monthly cost once you are resident." },
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
      label: "Employment type scenario tool",
      href: EMPLOYMENT_TYPE_SCENARIO_TOOL_PATH,
      status: "live",
      description: "Compare employee, contractor and ZZP setups when headline salary is not the full picture.",
    },
  ] satisfies ExpatSalaryNetherlandsLink[],
  experienceLevels: [
    { title: "Entry-level", body: "Lower starting pay, but strong demand in tech, finance and engineering can still create competitive entry offers for international hires." },
    { title: "Mid-level", body: "Specialization and language skills start to matter more. International experience can push expat pay above local medians." },
    { title: "Senior professional", body: "Deep expertise, leadership scope and scarce skills often drive the largest salary jumps for expats." },
    { title: "Manager", body: "Management responsibility, team size and multinational employer type can matter more than years alone." },
    { title: "Director / specialist expert", body: "Top packages often combine base salary, bonus, pension, benefits and sometimes expat-specific arrangements." },
  ],
  goodSalaryProfiles: [
    { title: "Single professional", body: "Comfort depends on city, rent and lifestyle. Many singles in Amsterdam target higher gross bands than in regional cities — use household planning ranges, not guarantees." },
    { title: "Couple", body: "Dual income lowers pressure, but housing size and commute still dominate. One primary earner needs wider gross headroom in Randstad markets." },
    { title: "Family with children", body: "Childcare, school choices and housing often matter more than small gross differences. Families in expensive cities usually need substantially higher household income." },
  ],
  industryCards: [
    { title: "Technology", body: "Strong expat demand; Amsterdam and Eindhoven hubs. Medior software roles often sit well above national medians." },
    { title: "Engineering", body: "Manufacturing, semiconductor and industrial roles — Brainport and Randstad hiring. CAO scales may cap flexibility in some employers." },
    { title: "Finance", body: "Banks, fintech and corporate finance. Variable pay and bonus structures can sit on top of base salary." },
    { title: "Consulting", body: "Professional services and Big Four-style employers. Travel and bonus components may affect total compensation." },
    { title: "Data & AI", body: "High demand for analysts, scientists and ML engineers. International English-language roles common in Randstad." },
    { title: "Healthcare", body: "Qualified clinical and research roles; public employers and CAO scales influence pay bands." },
    { title: "Biotech", body: "Leiden and university-corridor hiring. Corporate packages differ from academic pay scales." },
    { title: "Academia", body: "University and research institutes — structured scales, often below corporate tech pay for similar seniority." },
    { title: "Logistics", body: "Supply chain and operations roles; international hub activity around Rotterdam and Schiphol corridor." },
    { title: "Marketing", body: "Agency and in-house roles; creative and growth positions vary widely by employer and seniority." },
  ],
  cityComparisons: [
    { label: "Amsterdam", href: "/netherlands/cities/amsterdam/", highlights: ["Finance", "Tech", "International business"], note: "Highest knowledge-worker pay potential; housing often absorbs much of the premium." },
    { label: "Rotterdam", href: "/netherlands/cities/rotterdam/", highlights: ["Logistics", "Port", "Engineering"], note: "Port, logistics and growing tech — often lower rent than Amsterdam for similar roles." },
    { label: "The Hague", href: "/netherlands/cities/the-hague/", highlights: ["Government", "NGOs", "International orgs"], note: "Government, NGOs and international organisations — stable professional hiring." },
    { label: "Utrecht", href: "/netherlands/cities/utrecht/", highlights: ["Tech", "Services", "Central hub"], note: "Strong tech and services hub with high housing demand." },
    { label: "Eindhoven", href: "/netherlands/cities/eindhoven/", highlights: ["Semiconductors", "Engineering", "Brainport"], note: "Brainport tech and engineering — competitive medior engineering packages." },
    { label: "Leiden", href: "/netherlands/cities/leiden/", highlights: ["Biotech", "Research", "University"], note: "Biotech and university corridor — compare corporate vs academic pay." },
    { label: "Delft", href: "/netherlands/cities/delft/", highlights: ["Engineering", "Research", "University"], note: "Engineering and university town — commute-to-Rotterdam/The Hague is common." },
    { label: "Haarlem", href: "/netherlands/cities/haarlem/", highlights: ["Amsterdam commute", "Randstad", "Services"], note: "Randstad commute to Amsterdam — salary may follow Amsterdam employers with local rent trade-offs." },
  ],
  livingCostCities: [
    { label: "Amsterdam", href: "/netherlands/cities/amsterdam/", note: "Highest rent pressure — salary alone does not guarantee comfort without housing strategy." },
    { label: "Rotterdam", href: "/netherlands/cities/rotterdam/", note: "Often more affordable housing than Amsterdam for similar gross offers." },
    { label: "Utrecht", href: "/netherlands/cities/utrecht/", note: "High demand and student city dynamics — compare commute vs central rent." },
    { label: "Eindhoven", href: "/netherlands/cities/eindhoven/", note: "Strong tech pay with generally lower housing than core Randstad." },
    { label: "Groningen", href: "/netherlands/cities/groningen/", note: "More affordable regional city — lower gross may still work for some households." },
    { label: "Leiden", href: "/netherlands/cities/leiden/", note: "University city — shared housing and biotech corridor hiring are common." },
  ],
  scenarioCards: [
    { title: "Junior international professional", body: "Entry bands vary by industry. Tech starters in Randstad often land above national medians — confirm gross basis and holiday allowance." },
    { title: "Senior software engineer", body: "Strong market in Amsterdam and Eindhoven. Compare total package: base, bonus, pension, 30% ruling and relocation support." },
    { title: "Engineering specialist", body: "Brainport and industrial employers compete for experienced hires — CAO and overtime rules may apply." },
    { title: "Finance professional", body: "Base plus variable pay is common. Model net pay and bonus tax treatment separately." },
    { title: "Startup employee", body: "Cash salary may be lower with equity or growth upside — weigh risk against Randstad living costs." },
    { title: "Relocating family", body: "School, childcare and housing dominate the budget. Dual income and relocation package items matter as much as base salary." },
    { title: "Academic researcher", body: "University scales differ from corporate tech. Check contract type, funding source and career path." },
    { title: "International consultant", body: "Travel, bonus and employer pension design can move total compensation — negotiate the full package." },
  ],
  expatQuestions: [
    { q: "Is €50k enough in the Netherlands?", a: "For some singles outside core Randstad, €50k gross can be workable with careful budgeting. In Amsterdam, rent and lifestyle expectations often require higher household income — model net pay and housing together." },
    { q: "Is €70k a good salary in Amsterdam?", a: "€70k gross is solid for many single professionals in Amsterdam, but comfort still depends on rent, commute, pension and tax setup. Families usually need wider household planning." },
    { q: "What salary do highly skilled migrants earn?", a: "There is no single number. HSM routes have legal minimum thresholds that change over time, while actual market offers vary by role, industry and employer." },
    { q: "How much tax will I pay?", a: "Payroll tax, pension and personal circumstances affect take-home pay. Use the net salary calculator with your gross offer — do not assume a fixed percentage." },
    { q: "Does the 30% ruling make a big difference?", a: "For eligible employees, it can materially improve take-home pay during the qualifying period. Eligibility is not automatic and rules change — see the 30% ruling guide." },
    { q: "What salary is needed for a family?", a: "Depends on city, childcare, school choices and housing. Randstad families often need substantially higher gross household income than singles in regional cities." },
    { q: "Should I negotiate salary?", a: "Negotiation is common in the Netherlands, especially for skilled roles. Compare base salary with pension, holiday allowance, bonus and relocation support." },
    { q: "Is housing the biggest cost?", a: "For most expats, rent is the largest monthly expense — especially in Amsterdam and Utrecht. Always compare salary offers against local housing reality." },
  ],
  negotiationTips: [
    "Compare total compensation — pension, holiday allowance, bonus and relocation — not only base salary.",
    "Ask whether the quoted figure is monthly or annual gross and whether vakantiegeld is included.",
    "Use market benchmarks by city and industry before counter-offering.",
    "Model net pay with and without 30% ruling assumptions if relevant to your situation.",
  ],
  calculatorToolCta: {
    title: "Estimate Your Take-Home Salary",
    description: "Once you have a gross offer, use the Dutch salary net calculator to estimate what may reach your bank account after payroll deductions.",
    supportingText: "The tool supports gross salary, holiday allowance, pension, 30% ruling scenarios and side-by-side offer comparison. Results are illustrative — not tax advice.",
    primaryCta: { label: "Open net salary calculator", href: DUTCH_SALARY_NET_CALCULATOR_PATH },
    secondaryCta: { label: "Net salary guide", href: NET_SALARY_NETHERLANDS_PATH },
    disclaimer: "Calculator outputs are orientation only. Confirm payslip lines and tax treatment with your employer or a qualified adviser.",
    prepItems: [
      { label: "Gross basis", body: "Confirm monthly vs annual and whether holiday allowance is included in the quoted figure." },
      { label: "30% ruling", body: "Model with and without ruling if you may be eligible — do not treat it as guaranteed." },
      { label: "City costs", body: "Compare estimated net pay against local rent and commute before relocating." },
    ],
  },
  affiliatePlacementId: EXPAT_SALARY_AFFILIATE_PLACEMENT_ID,
  servicesWhenToUse: [
    { title: "Tax advisors", body: "Helpful for 30% ruling questions, cross-border income and annual return planning alongside a new offer." },
    { title: "Relocation services", body: "Useful when salary evaluation depends on housing search, timing and family logistics." },
    { title: "Immigration lawyers", body: "Support for visa and permit context when salary and employment route are linked." },
    { title: "Recruitment support", body: "Market context and offer benchmarking — not a substitute for your own negotiation." },
  ],
  services: [
    { label: "Recruitment agencies", href: "/netherlands/services/recruitment-agencies/", status: "comingSoon", description: "Future directory for job search support." },
    { label: "Relocation services", href: "/netherlands/services/relocation-services/", status: "live", description: "Help with move planning alongside offer evaluation." },
    { label: "Tax advisors", href: "/netherlands/services/tax-advisors/", status: "live", description: "Payroll, 30% ruling and tax questions for international workers." },
    { label: "Immigration lawyers", href: "/netherlands/services/immigration-lawyers/", status: "live", description: "Visa and permit context alongside employment offers." },
  ] satisfies ExpatSalaryNetherlandsLink[],
  relatedSalaryGuides: [
    { label: "Average Salary Netherlands", href: AVERAGE_SALARY_NETHERLANDS_PATH, status: "live", description: "Broader labour market benchmarks by city, industry and experience." },
    { label: "Net Salary Netherlands", href: NET_SALARY_NETHERLANDS_PATH, status: "live", description: "Understand take-home pay from gross offers." },
    { label: "Gross vs Net Salary", href: GROSS_VS_NET_SALARY_PATH, status: "live", description: "Why Dutch salaries are quoted gross." },
    { label: "Payroll Tax", href: PAYROLL_TAX_NETHERLANDS_PATH, status: "live", description: "How payroll deductions affect net pay." },
    { label: "30% Ruling", href: THIRTY_PERCENT_RULING_PATH, status: "live", description: "Expat scheme context for offer evaluation." },
    { label: "Salary Negotiation", href: SALARY_NEGOTIATION_NETHERLANDS_PATH, status: "live", description: "Negotiating total compensation in the Netherlands." },
    { label: "Employee Benefits Guide", href: "/netherlands/jobs/employee-benefits-netherlands/", status: "live", description: "Pension, allowance, leave and expat packages." },
  ] satisfies ExpatSalaryNetherlandsLink[],
  relatedGuides: [
    { label: "Finding Jobs in the Netherlands", href: "/netherlands/jobs/finding-jobs-netherlands/", status: "live", description: "Job market, visa sponsorship context, recruiters and Dutch hiring culture for expats." },
    { label: "Moving to the Netherlands", href: MOVING_HUB_PATH, status: "live", description: "Relocation planning with employment context." },
    { label: "Netherlands Taxes Guide", href: TAXES_HUB_PATH, status: "live", description: "Salary and tax hub for expats." },
    { label: "Highly Skilled Migrant Visa", href: HSM_VISA_PATH, status: "live", description: "Visa route context alongside salary thresholds." },
    { label: "Minimum Wage Guide", href: MINIMUM_WAGE_NETHERLANDS_PATH, status: "live", description: "Statutory floor vs professional expat salaries." },
    { label: "Dutch Cities Guide", href: CITIES_HUB_PATH, status: "live", description: "Compare living costs by city." },
    { label: "Salary Negotiation", href: SALARY_NEGOTIATION_NETHERLANDS_PATH, status: "live", description: "Negotiating above entry offers." },
    { label: "Employee Benefits Guide", href: "/netherlands/jobs/employee-benefits-netherlands/", status: "live", description: "Understand Dutch compensation packages beyond base salary." },
    { label: "Pension Guide", href: "/netherlands/jobs/pension-netherlands-expats/", status: "live", description: "Dutch pension system for expats — AOW, employer schemes and portability." },
    { label: "Holiday Allowance Guide", href: "/netherlands/jobs/holiday-allowance-netherlands/", status: "live", description: "How vakantiegeld works for expats comparing offers." },
    { label: "Bonus Tax Guide", href: "/netherlands/taxes/bonus-tax-netherlands/", status: "live", description: "Why bonuses seem heavily taxed — payroll withholding for expats." },
  ] satisfies ExpatSalaryNetherlandsLink[],
  exploreNextCards: [
    { label: "Average Salary Guide", href: AVERAGE_SALARY_NETHERLANDS_PATH, status: "live", description: "Benchmark beyond expat headlines." },
    { label: "Net Salary Calculator", href: DUTCH_SALARY_NET_CALCULATOR_PATH, status: "live", description: "Estimate take-home from gross pay." },
    { label: "30% Ruling", href: THIRTY_PERCENT_RULING_PATH, status: "live", description: "Expat tax scheme orientation." },
    { label: "Salary Negotiation", href: SALARY_NEGOTIATION_NETHERLANDS_PATH, status: "live", description: "Negotiate total compensation." },
    { label: "Pension Guide", href: "/netherlands/jobs/pension-netherlands-expats/", status: "live", description: "Dutch pension system for expats." },
    { label: "Dutch Cities Guide", href: CITIES_HUB_PATH, status: "live", description: "Compare city living costs." },
  ] satisfies ExpatSalaryNetherlandsLink[],
  officialSources: [
    { label: "Statistics Netherlands (CBS)", href: "https://www.cbs.nl/en-gb", description: "Official wage and labour market statistics for broader salary context." },
    { label: "IND — Immigration & Naturalisation Service", href: "https://ind.nl/en", description: "Highly skilled migrant salary thresholds and permit requirements." },
    { label: "Government.nl", href: "https://www.government.nl/", description: "Official government information on work, residence and labour topics." },
    { label: "Belastingdienst", href: "https://www.belastingdienst.nl/", description: "Dutch Tax Administration — payroll tax, income tax and 30% ruling context." },
    { label: "Business.gov.nl", href: "https://business.gov.nl/", description: "Employer and employee guidance on contracts, payroll and working in the Netherlands." },
  ],
  faq: [
    { q: "What salary do expats earn in the Netherlands?", a: "There is no single expat salary. International professionals in tech, finance and engineering often earn above national medians, but outcomes vary by city, experience, employer and tax setup." },
    { q: "What is a good salary for expats?", a: "A good salary depends on city, household size, housing, lifestyle and commute. Use planning ranges and calculators rather than treating any headline figure as a guarantee." },
    { q: "Is salary quoted gross or net?", a: "Dutch employment offers are usually quoted gross (bruto). Take-home pay depends on payroll tax, pension, tax credits and personal circumstances." },
    { q: "How much tax do expats pay?", a: "Tax treatment depends on residency, income type, payroll setup and whether the 30% ruling applies. Use the net salary calculator for illustrative planning — not as tax advice." },
    { q: "Does the 30% ruling increase take-home pay?", a: "For some eligible international employees, it can materially improve net pay during the qualifying period. Eligibility is not automatic — verify official rules and your employer's process." },
    { q: "What salary is enough in Amsterdam?", a: "Comfort depends on rent, household size and lifestyle. Many singles target higher gross bands in Amsterdam than in regional cities — compare net pay and housing together." },
    { q: "What do highly skilled migrants earn?", a: "HSM routes have legal minimum salary thresholds that change regularly. Actual market offers for skilled roles are often higher — check ind.nl for current thresholds." },
    { q: "Should expats negotiate salary?", a: "Negotiation is common for skilled roles. Focus on total compensation — base salary, pension, holiday allowance, bonus and relocation support — not the headline figure alone." },
  ],
} as const;
