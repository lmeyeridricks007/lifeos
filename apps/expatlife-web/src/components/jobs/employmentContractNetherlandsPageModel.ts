export const EMPLOYMENT_CONTRACT_NETHERLANDS_PATH = "/netherlands/jobs/employment-contract-netherlands/" as const;
export const EMPLOYMENT_CONTRACT_AFFILIATE_PLACEMENT_ID = "nl-jobs-employment-contract-support-providers" as const;

export const FINDING_JOBS_NETHERLANDS_PATH = "/netherlands/jobs/finding-jobs-netherlands/" as const;
export const EXPAT_SALARY_NETHERLANDS_PATH = "/netherlands/jobs/expat-salary-netherlands/" as const;
export const AVERAGE_SALARY_NETHERLANDS_PATH = "/netherlands/taxes/average-salary-netherlands/" as const;
export const NET_SALARY_NETHERLANDS_PATH = "/netherlands/taxes/net-salary-netherlands/" as const;
export const GROSS_VS_NET_SALARY_PATH = "/netherlands/taxes/gross-vs-net-salary/" as const;
export const HOLIDAY_ALLOWANCE_NETHERLANDS_PATH = "/netherlands/jobs/holiday-allowance-netherlands/" as const;
export const BONUS_TAX_NETHERLANDS_PATH = "/netherlands/taxes/bonus-tax-netherlands/" as const;
export const EMPLOYEE_BENEFITS_NETHERLANDS_PATH = "/netherlands/jobs/employee-benefits-netherlands/" as const;
export const PENSION_NETHERLANDS_EXPATS_PATH = "/netherlands/jobs/pension-netherlands-expats/" as const;
export const HSM_VISA_PATH = "/netherlands/visa/highly-skilled-migrant/" as const;
export const MORTGAGES_NETHERLANDS_EXPATS_PATH = "/netherlands/housing/mortgages-netherlands-expats/" as const;
export const MOVING_HUB_PATH = "/netherlands/moving-to-the-netherlands/" as const;
export const VISAS_HUB_PATH = "/netherlands/moving/visas-residency/" as const;
export const JOBS_HUB_PATH = "/netherlands/moving/working-in-the-netherlands/" as const;
export const CONTRACT_RISK_SCANNER_PATH = "/netherlands/work/tools/employment-contract-risk-scanner/" as const;
export const DUTCH_SALARY_NET_CALCULATOR_PATH = "/netherlands/taxes/tools/dutch-salary-net-calculator/" as const;
export const RECRUITMENT_AGENCIES_PATH = "/netherlands/services/recruitment-agencies/" as const;
export const CAREER_COACHES_PATH = "/netherlands/services/career-coaches/" as const;
export const IMMIGRATION_LAWYERS_PATH = "/netherlands/services/immigration-lawyers/" as const;
export const FINANCIAL_ADVISORS_PATH = "/netherlands/services/financial-advisors/" as const;
export const RELOCATION_SERVICES_PATH = "/netherlands/services/relocation-services/" as const;

export type EmploymentContractLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type ContractTypeCard = {
  title: string;
  body: string;
};

export type ComparisonRow = {
  label: string;
  permanent: string;
  temporary: string;
};

export type ContractScenarioRow = {
  profile: string;
  scenario: string;
  whatToCheck: string;
};

export type SalaryOfferExample = {
  label: string;
  grossMonthly: string;
  holidayAllowance: string;
  pension: string;
  travelOrExtras: string;
  planningNote: string;
};

export type ContractClauseExample = {
  clause: string;
  exampleWording: string;
  whyItMatters: string;
};

export type ServiceCategory = {
  label: string;
  href: string;
  description: string;
};

const INFOGRAPHIC_VERSION = "premium-v2";

const visual = (name: string, alt: string, caption: string) => ({
  src: `/images/infographics/netherlands-employment-contract-${name}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const employmentContractNetherlandsPage = {
  slug: "employment-contract-netherlands",
  path: EMPLOYMENT_CONTRACT_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2026-08-19",
  seo: {
    title: "Employment Contracts in the Netherlands | Expat Guide",
    description:
      "Learn how employment contracts work in the Netherlands, including permanent and temporary contracts, probation periods, notice periods, benefits and key clauses expats should understand.",
    keywords: [
      "employment contract netherlands",
      "dutch employment contract",
      "work contract netherlands",
      "employment agreement netherlands",
      "expat employment contract netherlands",
      "permanent contract netherlands",
      "temporary contract netherlands",
      "probation period netherlands",
      "notice period netherlands",
      "highly skilled migrant contract",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Jobs · Contracts",
    pageTitle: "Employment Contracts in the Netherlands",
    subtitle:
      "Understand how Dutch employment contracts work, including temporary and permanent contracts, probation periods, notice periods, benefits and what expats should review before signing.",
    primaryCta: { label: "Understand Dutch Contracts", href: "#intro" },
    secondaryCta: { label: "Explore Career Guides", href: JOBS_HUB_PATH },
    chips: ["Contract types", "Probation & notice", "Salary clauses", "Expat review checklist"],
    image: {
      src: "/images/heroes/netherlands-employment-contract-netherlands-hero-v2.png",
      alt: "Photorealistic editorial photo of an international professional reviewing a bilingual Dutch employment contract at a bright modern Rotterdam office desk, highlighting the probation clause, with the Erasmus Bridge and harbour skyline visible through the window.",
    },
  },
  visuals: {
    intro: visual(
      "intro",
      "Infographic explaining what Dutch employment contracts typically cover including salary, hours, benefits, notice periods and contract duration for expats.",
      "Written contracts are standard in the Netherlands — read them as part of your relocation planning, not only on signing day."
    ),
    snapshot: visual(
      "snapshot",
      "Infographic snapshot of six Dutch employment contract facts: written agreements, temporary contracts, permanent stability, probation, notice periods and benefits.",
      "Use this overview before comparing offers or discussing visa and mortgage plans."
    ),
    contractTypes: visual(
      "contract-types",
      "Infographic showing six Dutch employment contract types: permanent, temporary, fixed-term, part-time, on-call and agency staffing.",
      "Contract type affects stability, renewal expectations and how lenders or sponsors may view your income."
    ),
    permanentVsTemporary: visual(
      "permanent-vs-temporary",
      "Infographic comparing permanent and temporary Dutch employment contracts on stability, mortgage optics and renewal patterns.",
      "Many expats start on temporary contracts — plan around duration and renewal, not assumptions from home countries."
    ),
    probation: visual(
      "probation",
      "Infographic explaining Dutch probation periods (proeftijd) with employer and employee expectations during early employment.",
      "Probation is common in some contracts — understand timing and notice separately from the rest of the agreement."
    ),
    salaryCompensation: visual(
      "salary-compensation",
      "Infographic mapping salary and compensation clauses in Dutch contracts: gross pay, holiday allowance, bonus, pension, travel and overtime.",
      "Gross salary is only one line — model total compensation and net pay before you sign."
    ),
    workingHoursLeave: visual(
      "working-hours-leave",
      "Infographic showing working hours, part-time schedules, annual leave and public holiday context in Dutch employment contracts.",
      "The Netherlands is known for structured hours and strong work-life balance — confirm what your contract actually states."
    ),
    noticePeriods: visual(
      "notice-periods",
      "Infographic explaining employee and employer notice periods and resignation flow in Dutch employment contracts.",
      "Notice rules are often defined in the contract — do not assume home-country norms apply."
    ),
    pensionsBenefits: visual(
      "pensions-benefits",
      "Infographic of common Dutch employee benefits in contracts: pension, commuting, training, health-related perks, remote work and equipment.",
      "Benefits can materially change total compensation — compare packages, not headline salary alone."
    ),
    hsmContracts: visual(
      "hsm-contracts",
      "Infographic connecting Dutch employment contracts to highly skilled migrant visa sponsorship, salary thresholds and relocation planning.",
      "Contract terms may matter for permit routes — verify current IND rules on official sources, not assumptions."
    ),
    reviewChecklist: visual(
      "review-checklist",
      "Infographic checklist of eight items expats should review before signing a Dutch contract: salary, duration, probation, notice, pension, relocation, bonus and remote work.",
      "Understanding terms early reduces surprises during probation, relocation or mortgage applications."
    ),
    contractsMortgages: visual(
      "contracts-mortgages",
      "Infographic showing how Dutch mortgage providers may view contract type, employment stability and salary when assessing expat borrowers.",
      "Permanent contracts are often viewed differently from fixed-term roles — confirm lender policy with a mortgage adviser."
    ),
    mistakes: visual(
      "mistakes",
      "Infographic board of eight common expat employment contract mistakes including ignoring benefits, notice periods and temporary contract norms.",
      "Use this as an awareness checklist — not legal advice on any specific clause."
    ),
    questions: visual(
      "questions",
      "Infographic summarising eight questions expats ask about Dutch contracts: temporary contracts, probation, benefits, notice, visa links and mortgages.",
      "These prompts help structure research before signing or negotiating."
    ),
    relatedGuides: visual(
      "related-guides",
      "Infographic connecting employment contract research to finding jobs, expat salary, employee benefits, pension and average salary guides.",
      "Contracts sit at the centre of job, tax and relocation decisions — follow the guides that match your next step."
    ),
    services: visual(
      "services",
      "Infographic showing professional services that may support contract review planning: recruiters, career coaches, immigration lawyers, financial advisers and relocation support.",
      "Services can help with specific steps — they do not replace reading your contract or official guidance."
    ),
    faq: visual(
      "faq",
      "Infographic decision map of common Dutch employment contract FAQ topics: contract types, probation, notice, benefits, visa links and mortgage eligibility.",
      "FAQ answers should lead to the next fact, document or official verification step."
    ),
    officialSources: visual(
      "official-sources",
      "Infographic showing official Dutch employment and immigration sources: Government.nl, Business.gov.nl, UWV, IND and NederlandWereldwijd.",
      "Employment rules and permit requirements change — verify current information on official sites."
    ),
    exploreNext: visual(
      "explore-next",
      "Infographic connecting employment contract research to finding jobs, expat salary, pension, employee benefits and highly skilled migrant visa guides.",
      "Continue from contract orientation into salary, benefits, visa and relocation planning."
    ),
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#contract-types", label: "Types" },
    { href: "#permanent-vs-temporary", label: "Permanent vs temp" },
    { href: "#probation", label: "Probation" },
    { href: "#salary-compensation", label: "Salary" },
    { href: "#working-hours-leave", label: "Hours & leave" },
    { href: "#notice-periods", label: "Notice" },
    { href: "#pensions-benefits", label: "Benefits" },
    { href: "#hsm-contracts", label: "HSM" },
    { href: "#review-checklist", label: "Review" },
    { href: "#contracts-mortgages", label: "Mortgages" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#questions", label: "Questions" },
    { href: "#related-guides", label: "Guides" },
    { href: "#services", label: "Services" },
    { href: "#faq", label: "FAQ" },
    { href: "#official-sources", label: "Sources" },
    { href: "#explore-next", label: "Explore next" },
  ],
  intro: {
    heading: "Understanding Employment Contracts in the Netherlands",
    paragraphs: [
      "Most employees in the Netherlands receive a written employment agreement that outlines salary, working hours, benefits, notice periods and contract duration. For expats, that document is often the bridge between a job offer and everyday life in the Netherlands.",
      "Contracts can also influence visa status, relocation timing, mortgage conversations and long-term residency planning. Reading the agreement carefully helps you understand what you are committing to — without treating this guide as legal or employment law advice.",
    ],
    contractTopics: [
      { title: "Salary and allowances", body: "Gross salary, holiday allowance, bonuses and expense arrangements are usually spelled out in writing." },
      { title: "Duration and stability", body: "Permanent, fixed-term and agency contracts carry different expectations about renewal and continuity." },
      { title: "Probation and notice", body: "Early employment and exit rules are often defined separately from the rest of the package." },
      { title: "Benefits and pension", body: "Pension participation, commuting support and equipment policies can change total compensation materially." },
    ],
    expatAngles: [
      { title: "Visa and permit context", body: "Sponsored roles may require contract wording, salary levels and employer status that align with current IND rules." },
      { title: "Relocation planning", body: "Relocation clauses, start dates and remote-work expectations affect housing and family logistics." },
      { title: "Mortgage readiness", body: "Lenders often ask about contract type, probation and income continuity before assessing borrowing capacity." },
      { title: "Cross-border awareness", body: "Home-country assumptions about notice, benefits or probation do not always match Dutch practice." },
    ],
    scenarios: [
      { profile: "HS migrant joining a scale-up", scenario: "12-month fixed-term contract at €6,200/month gross with 2-month probation", whatToCheck: "IND salary threshold, recognised sponsor status, contract end date vs permit validity and conversion expectations." },
      { profile: "Dual-income family relocating to Utrecht", scenario: "One permanent contract (€4,800) + one 24-month fixed-term (€5,100)", whatToCheck: "Combined mortgage capacity, notice on each contract and whether relocation repayment applies to both roles." },
      { profile: "Remote worker with foreign employer", scenario: "Contract states 32 hours/week hybrid but employer entity is outside the Netherlands", whatToCheck: "Whether Dutch payroll and work-authorisation rules apply — this is not a standard Dutch employment contract pattern." },
    ] satisfies ContractScenarioRow[],
  },
  snapshotCards: [
    { label: "Written contracts", value: "Standard practice", note: "Most Dutch employers provide a written agreement before or at start date." },
    { label: "Temporary contracts", value: "Common for new hires", note: "Fixed-term contracts are normal — especially in the first years of employment." },
    { label: "Permanent contracts", value: "More stability", note: "Indefinite contracts are often viewed as stronger continuity for long-term plans." },
    { label: "Probation periods", value: "May apply", note: "Some roles include a probation window with separate notice rules." },
    { label: "Notice periods", value: "Usually defined", note: "Employee and employer notice are typically stated in the contract or CAO context." },
    { label: "Benefits", value: "Part of pay", note: "Pension, allowances and perks often belong in total-compensation comparisons." },
  ],
  snapshotNextSteps: [
    "Identify your contract type and end date before planning housing or relocation spend.",
    "List salary, allowance and pension lines separately — then estimate net pay.",
    "Cross-check visa-relevant salary or sponsorship wording against current IND guidance.",
  ],
  contractTypeCards: [
    { title: "Permanent contract", body: "An indefinite employment agreement — often associated with stronger continuity for mortgages and long-term planning." },
    { title: "Temporary contract", body: "A fixed-duration agreement that may be renewed depending on employer needs and legal frameworks." },
    { title: "Fixed-term contract", body: "A contract with a defined end date — common when hiring for projects or probationary phases." },
    { title: "Part-time contract", body: "Reduced weekly hours with pro-rated salary, leave and benefits according to the agreement." },
    { title: "On-call contract", body: "Work offered on variable schedules — hours and pay structures should be read carefully." },
    { title: "Agency / staffing contract", body: "Employment through an agency or temp firm — responsibilities may differ from direct employer contracts." },
  ],
  contractTypesNote:
    "Different contract types offer different levels of stability and flexibility. Treat labels as orientation — your specific agreement and any applicable CAO determine the details.",
  contractTypeReviewTips: [
    "Confirm whether you are employed directly by the company or through an agency.",
    "Note the exact start date, end date and any renewal or conversion language.",
    "Check whether a CAO or sector agreement is referenced — it may override generic assumptions.",
    "Ask HR how contract type affects probation, notice and benefits eligibility.",
    "If the role supports a visa, verify contract salary matches current IND threshold guidance.",
    "Keep a signed PDF copy before planning housing deposits or relocation spend.",
  ],
  contractTypeWhenToExpect: [
    { title: "Permanent after fixed-term", body: "Many employers use one or more fixed-term contracts before offering an indefinite agreement — ask about conversion criteria early." },
    { title: "Temporary for project roles", body: "Project hires and scale-ups often start on defined end dates — plan visas and housing around renewal uncertainty." },
    { title: "Part-time from day one", body: "Reduced hours are common in the Netherlands — confirm pro-rated leave, pension and holiday allowance in writing." },
    { title: "Agency before direct hire", body: "Staffing routes may differ on notice, benefits and who signs your payslips — read both agency and placement terms." },
  ] satisfies ContractTypeCard[],
  contractTypeExamples: [
    { profile: "First Dutch role after relocation", scenario: "Two consecutive 12-month fixed-term contracts, then indefinite", whatToCheck: "Written conversion criteria, chain-of-contract rules in your sector and whether HR confirms a permanent offer is realistic." },
    { profile: "Project hire in consulting", scenario: "7-month fixed-term tied to client project end date", whatToCheck: "Exact end date, extension language, notice during probation and what happens if the project ends early." },
    { profile: "Part-time return from parental leave", scenario: "0.8 FTE (32 hours) with pro-rated salary and leave", whatToCheck: "FTE percentage on payslip, pension accrual on part-time base and holiday allowance calculation method." },
    { profile: "Agency placement before direct hire", scenario: "Temp agency contract for first 6 months, then transfer to client payroll", whatToCheck: "Who pays pension and travel costs during agency phase, transfer date and whether benefits reset on conversion." },
    { profile: "On-call hospitality or events role", scenario: "Zero-hour style on-call with minimum monthly hours", whatToCheck: "Minimum guaranteed hours, call-out pay, cancellation rules and how annual leave accrues on variable income." },
  ] satisfies ContractScenarioRow[],
  permanentVsTemporaryHeading: "Permanent vs Temporary Contracts",
  permanentVsTemporaryParagraphs: [
    "Permanent contracts are often associated with long-term stability, stronger employment continuity and more predictable optics for mortgages or relocation planning.",
    "Temporary and fixed-term contracts are common — especially for new hires, project roles or employers testing fit. Many expats begin on temporary contracts before moving to more stable arrangements.",
  ],
  permanentVsTemporaryComparison: [
    { label: "Stability", permanent: "Indefinite term — stronger long-term continuity signal", temporary: "Fixed end date — renewal depends on employer and rules" },
    { label: "Mortgage optics", permanent: "Often viewed more favourably by lenders", temporary: "May require extra income or employer statements" },
    { label: "Renewal", permanent: "No automatic end date", temporary: "May be renewed or converted — not guaranteed" },
    { label: "Common for expats", permanent: "More common after initial fixed-term phases", temporary: "Very common in first Dutch roles" },
  ] satisfies ComparisonRow[],
  permanentVsTemporaryPlanningTips: [
    "If you are on a fixed-term contract, ask whether renewal or conversion to permanent is realistic before signing a long lease.",
    "Mortgage conversations often start with contract type and probation — do not assume a job offer alone qualifies you to borrow.",
    "Visa extensions may depend on continued employment — plan permit timelines around contract end dates.",
    "Compare two offers using total compensation and stability, not only headline salary on a temporary role.",
  ],
  permanentVsTemporaryScenarios: [
    { profile: "Fixed-term, planning to buy in year 2", scenario: "18-month contract ending March 2027; wants €420k mortgage in 2026", whatToCheck: "Lender may want employer statement on renewal intent, income history and probation completion before approval." },
    { profile: "Permanent offer vs higher fixed-term pay", scenario: "€5,400/month permanent vs €5,900/month 24-month fixed-term", whatToCheck: "Model net pay plus pension value — higher temporary gross may not offset weaker continuity for housing or visa extension." },
    { profile: "Contract ends before lease does", scenario: "12-month work contract but 24-month rental agreement signed on arrival", whatToCheck: "Renewal probability, notice if role ends early and whether relocation package included temporary housing support." },
  ] satisfies ContractScenarioRow[],
  probationHeading: "Probation Periods (Proeftijd)",
  probationParagraphs: [
    "Some Dutch employment contracts include a probation period at the start of employment. During this window, employer and employee may assess whether the role, team and expectations fit.",
    "Probation can affect notice periods and how quickly either side can end the relationship. The exact rules depend on your contract, role and applicable frameworks — verify details in your agreement and on official sources rather than assuming home-country norms.",
  ],
  probationPoints: [
    "Purpose: a structured early assessment period for both employer and employee.",
    "Expectations: performance, communication and role fit are usually reviewed more frequently.",
    "Notice: separate notice rules may apply during probation — read the contract carefully.",
    "Visa context: changing or losing a job during probation can affect permit planning — confirm IND rules independently.",
  ],
  probationChecklist: [
    "Find the probation start and end dates in the contract.",
    "Read notice rules that apply during probation versus after probation.",
    "Confirm whether performance reviews or milestones are referenced.",
    "Ask HR how probation affects benefits such as pension accrual or bonus eligibility.",
    "If you hold a work permit, note how job loss during probation may affect your route.",
  ],
  probationScenarios: [
    { profile: "Standard 2-month probation", scenario: "Proeftijd 1 March – 30 April; role starts 1 March", whatToCheck: "Shorter notice during probation (often 1 week each way in many contracts — verify yours), bonus eligibility and pension start date." },
    { profile: "HS migrant in probation", scenario: "Loses role in week 6 of 2-month probation", whatToCheck: "Permit reaction time, job search window and whether a new sponsor contract must start before current permit expires — verify IND rules." },
    { profile: "Probation extended informally", scenario: "Manager says probation continues another month without contract amendment", whatToCheck: "Only written contract terms count — ask HR to confirm end date and post-probation notice in writing." },
  ] satisfies ContractScenarioRow[],
  salaryCompensationHeading: "Salary and Compensation",
  salaryCompensationParagraphs: [
    "Dutch employment contracts usually quote gross salary and may reference holiday allowance, bonuses, pension contributions, travel allowances and overtime arrangements separately.",
    "Expats often compare offers using headline salary alone. A stronger package may include pension participation, commuting support or structured bonuses that change take-home outcomes materially.",
  ],
  salaryCompensationItems: [
    { title: "Gross salary", body: "Base monthly or annual pay before payroll tax and deductions.", link: { label: "Net salary guide", href: NET_SALARY_NETHERLANDS_PATH } },
    { title: "Holiday allowance", body: "Often 8% of gross annual salary — usually paid in May.", link: { label: "Holiday allowance guide", href: HOLIDAY_ALLOWANCE_NETHERLANDS_PATH } },
    { title: "Bonuses", body: "Performance or signing bonuses may have separate tax treatment.", link: { label: "Bonus tax guide", href: BONUS_TAX_NETHERLANDS_PATH } },
    { title: "Pension contributions", body: "Employer and employee pension participation affects long-term wealth.", link: { label: "Pension guide", href: PENSION_NETHERLANDS_EXPATS_PATH } },
    { title: "Travel allowances", body: "Commuting or travel costs may be reimbursed or structured separately.", link: { label: "Employee benefits guide", href: EMPLOYEE_BENEFITS_NETHERLANDS_PATH } },
    { title: "Overtime arrangements", body: "Overtime rules vary by role, CAO and contract wording.", link: { label: "Average salary context", href: AVERAGE_SALARY_NETHERLANDS_PATH } },
  ],
  salaryReviewTips: [
    "List gross salary, holiday allowance, pension and commuting lines separately before comparing offers.",
    "Model net pay with a calculator — two similar gross offers can differ materially after deductions.",
    "Check whether bonuses are guaranteed, discretionary or tied to company or individual targets.",
    "Confirm pay frequency, currency and any probation-linked salary review dates.",
    "Compare total package value if one employer offers stronger pension or travel support.",
  ],
  salaryOfferExamples: [
    {
      label: "Offer A — corporate HQ (Amsterdam)",
      grossMonthly: "€5,500",
      holidayAllowance: "8% (paid May)",
      pension: "Employer ~67% / employee ~33% of premium",
      travelOrExtras: "NS Business Card + €50 WFH allowance",
      planningNote: "Lower headline than B, but stronger pension and travel — often better long-term package.",
    },
    {
      label: "Offer B — scale-up (Utrecht)",
      grossMonthly: "€6,100",
      holidayAllowance: "8% (paid May)",
      pension: "Basic scheme — employee opt-in required",
      travelOrExtras: "€0.23/km capped at €200/month",
      planningNote: "Higher gross, but confirm pension opt-in, bonus discretion and 12-month contract end date.",
    },
    {
      label: "Offer C — agency placement",
      grossMonthly: "€4,950 (agency payroll)",
      holidayAllowance: "Included in hourly rate structure",
      pension: "StiPP or agency scheme — read annex",
      travelOrExtras: "Travel reimbursed after probation only",
      planningNote: "Compare agency phase vs promised direct-hire package before accepting relocation support.",
    },
  ] satisfies SalaryOfferExample[],
  relatedCalculators: [
    {
      label: "Dutch salary net calculator",
      href: DUTCH_SALARY_NET_CALCULATOR_PATH,
      description: "Estimate take-home pay from the gross salary stated in your contract.",
    },
    {
      label: "Net salary guide",
      href: NET_SALARY_NETHERLANDS_PATH,
      description: "Understand payroll tax, deductions and what affects net pay in the Netherlands.",
    },
    {
      label: "Gross vs net salary",
      href: GROSS_VS_NET_SALARY_PATH,
      description: "See how gross contract lines translate into monthly net income.",
    },
  ],
  workingHoursLeaveHeading: "Working Hours and Leave",
  workingHoursLeaveParagraphs: [
    "Full-time schedules in the Netherlands are often around 36–40 hours per week, but part-time work is common and should be stated clearly in the contract.",
    "Annual leave, public holidays and work-life balance expectations are part of Dutch employment culture — confirm how many leave days your agreement includes and whether any CAO references apply.",
  ],
  workingHoursLeavePoints: [
    "Full-time vs part-time hours should be explicit in the contract.",
    "Annual leave entitlement is usually defined in writing.",
    "Public holidays may not automatically mean paid time off — check employer policy.",
    "Remote or hybrid expectations should be clear if flexibility matters to you.",
  ],
  workingHoursScenarios: [
    { title: "Full-time 36-hour week", body: "Contract states 36 hours/week, 4 office days — typical in many Dutch employers. Confirm whether overtime is paid, compensated as time off or excluded for salaried staff." },
    { title: "Part-time 0.8 FTE", body: "32 hours/week on €4,800 FTE-equivalent salary → pro-rated pay ~€3,840/month. Check leave days (often 25 × 0.8 = 20), pension base and holiday allowance calculation." },
    { title: "Hybrid with abroad days", body: "Contract allows 2 days/week from home in NL but prohibits work from outside the EU. Clarify before planning monthly trips to home country." },
  ] satisfies ContractTypeCard[],
  noticeScenarios: [
    { profile: "Resigning after probation", scenario: "Employee notice stated as 1 calendar month in contract", whatToCheck: "Whether notice runs to month-end, unused leave offset rules and any relocation clawback if leaving within 12 months." },
    { profile: "Employer non-renewal", scenario: "Fixed-term ends 31 August; employer gives 1-month notice in July", whatToCheck: "Written confirmation, final payslip timing, transition payment references (if any) and permit/job-search implications." },
    { profile: "Leaving during probation", scenario: "Employee resigns with 1-week notice in week 5 of 8-week probation", whatToCheck: "Probation notice clause, equipment return, last working day confirmation and visa/permit next steps." },
  ] satisfies ContractScenarioRow[],
  noticePeriodsHeading: "Notice Periods",
  noticePeriodsParagraphs: [
    "Employment contracts often define how much notice an employee must give when resigning and how much notice an employer must give when ending employment.",
    "Notice periods can differ during probation, after long tenure or under specific CAO rules. Use this section for orientation only — do not treat it as dismissal or legal advice.",
  ],
  noticePeriodsPoints: [
    "Employee notice: how far in advance you must resign in writing.",
    "Employer notice: how much warning an employer may need to provide.",
    "Probation notice: may be shorter than post-probation rules.",
    "Resignation process: confirm whether email, HR portal or signed letter is required.",
  ],
  noticeResignationChecklist: [
    "Find employee notice length after probation in your contract or CAO reference.",
    "Confirm whether notice starts from the date you inform HR or from month-end.",
    "Check if unused leave can offset part of the notice period — employer policy varies.",
    "Ask whether relocation repayment or bonus clawback applies if you leave early.",
    "Keep written confirmation of resignation acceptance and final working day.",
  ],
  pensionsBenefitsHeading: "Pensions and Employee Benefits",
  pensionsBenefitsParagraphs: [
    "Beyond salary, Dutch contracts may reference pension plans, commuting allowances, training budgets, health-related benefits, remote-work policies and company equipment.",
    "Benefits vary widely by employer size, sector and CAO. Compare total packages when evaluating offers — especially if you are relocating with a family or planning a mortgage.",
  ],
  pensionsBenefitsCards: [
    { title: "Pension plans", body: "Second-pillar pension participation can be a major long-term benefit.", link: { label: "Pension Netherlands guide", href: PENSION_NETHERLANDS_EXPATS_PATH } },
    { title: "Commuting allowances", body: "Travel or home-office commuting support may be tax-relevant.", link: { label: "Employee benefits guide", href: EMPLOYEE_BENEFITS_NETHERLANDS_PATH } },
    { title: "Training budgets", body: "Professional development allowances are common in larger employers." },
    { title: "Health-related benefits", body: "Some employers offer supplementary perks — confirm scope and tax treatment." },
    { title: "Remote work allowances", body: "Hybrid policies and equipment budgets should be explicit if flexibility matters." },
    { title: "Company equipment", body: "Laptop, phone and tooling policies are often listed in HR appendices." },
  ],
  benefitsCompareTips: [
    "Build a simple table: pension employer share, travel allowance, training budget and insurance-related perks.",
    "Ask whether benefits start on day one or only after probation ends.",
    "Confirm tax treatment of allowances — some are structured as reimbursements rather than gross pay.",
    "Compare offers for families: childcare support, extra leave or insurance may matter more than a small salary gap.",
  ],
  benefitsPackageExamples: [
    { profile: "Large employer package", scenario: "€5,200 gross + full pension + €150 travel + €1,500 training budget", whatToCheck: "Pension employee share via payslip, travel tax treatment and whether training budget requires approval." },
    { profile: "Startup lean package", scenario: "€6,000 gross + minimal pension + laptop only", whatToCheck: "Whether you must opt into pension, stock/option wording (if any) and health-related perks vs higher cash." },
    { profile: "Family-focused package", scenario: "€4,900 gross + extra parental leave days + childcare scheme reference", whatToCheck: "Eligibility rules, tax treatment and whether benefits start after probation." },
  ] satisfies ContractScenarioRow[],
  hsmContractsHeading: "Employment Contracts for Highly Skilled Migrants",
  hsmContractsParagraphs: [
    "For highly skilled migrants and other sponsored routes, employment contracts often play an important role in visa applications, salary threshold checks and relocation planning.",
    "Contract duration, gross salary, employer sponsor status and role description may all matter when permits are assessed. This is orientation only — not immigration advice. Verify current IND requirements independently.",
  ],
  hsmContractsPoints: [
    "Salary thresholds and contract salary must align with current IND rules.",
    "Employer must often be a recognised sponsor for relevant permit routes.",
    "Contract end dates can affect permit validity and extension planning.",
    "Changing employers may trigger permit change procedures — plan before signing.",
  ],
  hsmContractScenarios: [
    { profile: "Switching employers on HSM route", scenario: "New role at different recognised sponsor within 3 months of arrival", whatToCheck: "New contract salary vs current IND threshold, start date alignment and whether permit change must complete before starting." },
    { profile: "Fixed-term HSM contract", scenario: "12-month contract; permit validity tied to employment", whatToCheck: "Contract end date on permit, extension paperwork timeline and probation timing relative to permit renewal." },
    { profile: "Salary mix in contract", scenario: "€5,000 base + €800 allowance + target bonus", whatToCheck: "Which lines IND and payroll treat as qualifying gross — do not assume all allowances count for threshold checks." },
  ] satisfies ContractScenarioRow[],
  reviewChecklistHeading: "What Expats Should Review Carefully",
  reviewChecklistIntro:
    "Understanding contract terms early can prevent misunderstandings later. Use this checklist for awareness — not as a substitute for reading your actual agreement or seeking qualified advice when needed.",
  reviewChecklist: [
    "Gross salary, pay frequency and currency",
    "Contract duration, renewal and conversion expectations",
    "Probation period length and notice during probation",
    "Notice periods after probation for employee and employer",
    "Pension participation, accrual and employee contributions",
    "Relocation support, repayment clauses and start-date conditions",
    "Bonus structure, targets and payment timing",
    "Remote-work, hybrid and equipment policies",
  ],
  reviewPriorityTips: [
    "Start with duration, probation and notice — these affect visa, housing and exit planning.",
    "Then model salary lines and pension — they drive net pay and long-term wealth.",
    "Finally review relocation, bonus and remote-work clauses that trigger later surprises.",
    "Use the contract risk scanner for clause awareness, then verify anything critical with HR or qualified advisers.",
  ],
  contractClauseExamples: [
    { clause: "Contract duration", exampleWording: "Arbeidsovereenkomst voor bepaalde tijd tot 31-12-2026", whyItMatters: "Fixed end date — plan housing, permit renewal and mortgage timing around December 2026." },
    { clause: "Probation", exampleWording: "Proeftijd: 2 maanden vanaf 01-03-2026", whyItMatters: "Shorter notice may apply until 30 April 2026 — different rules after probation ends." },
    { clause: "Salary", exampleWording: "Bruto maandsalaris €5.750 (fulltime 40 uur)", whyItMatters: "Confirm hours match your schedule; part-time pay scales from this FTE reference." },
    { clause: "Holiday allowance", exampleWording: "Vakantiegeld 8% uitbetaald in mei", whyItMatters: "May payment is a separate cash flow bump — model monthly budget without relying on it year-round." },
    { clause: "Notice", exampleWording: "Opzegtermijn werknemer 1 maand na proeftijd", whyItMatters: "Resignation timing affects start date at next employer and lease exit planning." },
    { clause: "Relocation repayment", exampleWording: "Relocatiekosten terug te betalen bij vertrek binnen 24 maanden", whyItMatters: "€8,000 relocation support could become repayable if you leave early — negotiate or clarify triggers." },
  ] satisfies ContractClauseExample[],
  contractsMortgagesHeading: "Employment Contracts and Mortgages",
  contractsMortgagesParagraphs: [
    "Mortgage providers often consider contract type, employment stability, probation status and salary level when assessing expat borrowers.",
    "Permanent contracts may be viewed differently from fixed-term or probationary roles. Lender policy varies — confirm requirements with a mortgage adviser before assuming an offer supports borrowing.",
  ],
  contractsMortgagesPoints: [
    "Fixed-term contracts may require employer statements or income history.",
    "Probation can delay mortgage applications with some lenders.",
    "Gross salary in the contract should align with payslip evidence.",
    "Visa or permit validity may be reviewed alongside employment proof.",
  ],
  mortgageDocumentsChecklist: [
    "Signed employment contract and recent payslips",
    "Employer statement confirming role, salary and contract end date if fixed-term",
    "Probation status and expected conversion date if applicable",
    "BSN registration and valid residence permit where relevant",
    "Mortgage adviser guidance on lender policy for your contract type",
  ],
  mortgageScenarios: [
    { profile: "Permanent contract, past probation", scenario: "€5,600/month gross, indefinite contract, 8 months in role", whatToCheck: "Payslips match contract, employer statement rarely needed — lender focuses on net income and debts." },
    { profile: "Fixed-term with renewal letter", scenario: "€6,800/month, 23 months remaining, employer letter confirms extension intent", whatToCheck: "Some lenders accept employer statements; others require permanent contract or longer track record." },
    { profile: "Still in probation", scenario: "Wants to bid on house during 2-month probation window", whatToCheck: "Many lenders wait until probation ends — confirm timing before paying notary deposits." },
    { profile: "Dual income, mixed contract types", scenario: "Partner permanent €4,200 + applicant fixed-term €5,100", whatToCheck: "Lender may weight incomes differently — model worst-case if fixed-term is not renewed." },
  ] satisfies ContractScenarioRow[],
  mistakeCards: [
    { title: "Focusing only on salary", body: "Holiday allowance, pension and allowances can change total value significantly." },
    { title: "Ignoring benefits", body: "Training, commuting and insurance-related perks are easy to overlook in headline comparisons." },
    { title: "Misunderstanding pension participation", body: "Not all employers structure pension the same way — confirm employee vs employer contributions." },
    { title: "Overlooking notice periods", body: "Resignation and termination notice may differ from what you expect from other countries." },
    { title: "Assuming home-country practices", body: "Probation, leave and contract renewal norms may differ in the Netherlands." },
    { title: "Not understanding temporary contracts", body: "A fixed end date is normal — plan housing and visas around renewal uncertainty." },
    { title: "Ignoring relocation clauses", body: "Repayment or clawback terms for relocation support can be costly if you leave early." },
    { title: "Overlooking remote-work rules", body: "Hybrid expectations should be explicit if you plan to work from abroad occasionally." },
  ],
  mistakeRecoveryTips: [
    "If you already signed, re-read probation, notice and relocation repayment clauses before making move decisions.",
    "Request written clarification from HR on any vague bonus, pension or remote-work wording.",
    "Model whether a stronger benefits package elsewhere offsets a modest salary difference.",
    "Before resigning, confirm notice length and any clawback terms in writing.",
  ],
  mistakeScenarios: [
    { profile: "Signed without reading annex", scenario: "Relocation repayment clause buried in HR appendix", whatToCheck: "Full PDF review including pension fund rules, travel policy and bonus plan — not only main contract pages." },
    { profile: "Assumed UK notice rules", scenario: "Gave 2 weeks' notice; contract required 1 month after probation", whatToCheck: "Employee notice in Dutch contract governs — informal HR chat does not override written terms." },
    { profile: "Compared gross only", scenario: "Accepted €6,000 offer over €5,700 without modelling pension and travel", whatToCheck: "Total compensation table with net calculator — €300 gross gap can shrink after pension opt-in and tax." },
  ] satisfies ContractScenarioRow[],
  expatQuestions: [
    { q: "Is a temporary contract normal?", a: "Yes. Fixed-term contracts are common for new hires and project roles. Many expats start temporary before moving to more stable arrangements." },
    { q: "What is a probation period?", a: "A probation period (proeftijd) is an early assessment window where different notice rules may apply. Read your contract for exact duration and conditions." },
    { q: "What benefits should I expect?", a: "Pension, holiday allowance, commuting support and training budgets are common — but packages vary by employer and sector." },
    { q: "How do notice periods work?", a: "Notice for resignation or termination is usually defined in the contract or applicable CAO. Do not assume home-country defaults." },
    { q: "Does my contract affect my visa?", a: "For sponsored routes, salary, employer status and contract terms may matter for permits. Verify current IND rules on official sources." },
    { q: "Can I get a mortgage with a temporary contract?", a: "Sometimes — but lenders often scrutinise fixed-term roles more closely. Policy varies by bank and profile." },
    { q: "What is holiday allowance?", a: "A statutory-style allowance often around 8% of gross annual salary, usually paid in May — typically referenced in Dutch contracts." },
    { q: "What pension contributions are typical?", a: "Many employers participate in sector or company pension schemes. Structures vary — compare employer and employee shares." },
  ],
  relatedWorkGuides: [
    { label: "Finding Jobs in the Netherlands", href: FINDING_JOBS_NETHERLANDS_PATH, status: "live", description: "Job search strategy before you reach the contract stage." },
    { label: "Expat Salary Netherlands", href: EXPAT_SALARY_NETHERLANDS_PATH, status: "live", description: "Salary benchmarks to compare against contract offers." },
    { label: "Average Salary Netherlands", href: AVERAGE_SALARY_NETHERLANDS_PATH, status: "live", description: "Market context for role and sector comparisons." },
    { label: "Employee Benefits Netherlands", href: EMPLOYEE_BENEFITS_NETHERLANDS_PATH, status: "live", description: "Benefits beyond base salary in Dutch packages." },
    { label: "Pension Netherlands", href: PENSION_NETHERLANDS_EXPATS_PATH, status: "live", description: "Pension participation and long-term planning context." },
  ] satisfies EmploymentContractLink[],
  serviceCategories: [
    { label: "Recruitment agencies", href: RECRUITMENT_AGENCIES_PATH, description: "Support finding roles — not contract legal review." },
    { label: "Career coaches", href: CAREER_COACHES_PATH, description: "Offer negotiation and career planning context." },
    { label: "Immigration lawyers", href: IMMIGRATION_LAWYERS_PATH, description: "Permit and sponsorship questions tied to employment." },
    { label: "Financial advisors", href: FINANCIAL_ADVISORS_PATH, description: "Salary, pension and cross-border planning orientation." },
    { label: "Relocation services", href: RELOCATION_SERVICES_PATH, description: "Move logistics linked to contract start dates." },
  ] satisfies ServiceCategory[],
  servicesNote:
    "Professional services may help with specific steps — they do not replace reading your contract, using official sources or obtaining qualified advice when needed.",
  relatedGuidesUseTips: [
    "Use the finding jobs guide if you are still comparing offers or negotiating start dates.",
    "Open the expat salary and net salary guides to stress-test gross lines in your contract.",
    "Follow pension and employee benefits guides for clauses that are easy to skim past.",
    "Use the moving and visas hubs if contract timing affects relocation or permit planning.",
  ],
  serviceSelectionTips: [
    "Recruiters help with role search — they typically do not provide legal contract review.",
    "Immigration lawyers may help with permit-linked contract questions — verify scope before engaging.",
    "Career coaches can support negotiation framing — bring your contract PDF and offer letter.",
    "Financial advisers may help model pension and cross-border pay — not clause-by-clause legal advice.",
  ],
  faq: [
    {
      q: "What is a Dutch employment contract?",
      a: "A written agreement outlining employment terms such as salary, hours, benefits, notice periods and contract duration. Most employees in the Netherlands receive one.",
    },
    {
      q: "Is a temporary contract normal?",
      a: "Yes. Fixed-term contracts are common, especially for new hires. Many expats begin on temporary contracts before more stable arrangements.",
    },
    {
      q: "What is a probation period?",
      a: "An early assessment period (proeftijd) where different notice rules may apply. Duration and conditions should be stated in your contract.",
    },
    {
      q: "How do notice periods work?",
      a: "Notice for resignation or termination is usually defined in the contract or applicable CAO. Rules may differ during probation.",
    },
    {
      q: "What benefits are common?",
      a: "Pension participation, holiday allowance, commuting support and training budgets are common — but vary by employer and sector.",
    },
    {
      q: "Can contracts affect visa sponsorship?",
      a: "For sponsored routes, contract salary, duration and employer status may matter. Verify current IND requirements on official sources — this is not immigration advice.",
    },
    {
      q: "Do contracts affect mortgage eligibility?",
      a: "Lenders often review contract type, probation and income stability. Permanent contracts may be viewed differently from fixed-term roles.",
    },
    {
      q: "What should expats review before signing?",
      a: "Salary, duration, probation, notice, pension, relocation clauses, bonus structure and remote-work policy. Use our contract risk scanner for clause awareness — not legal verdicts.",
    },
  ],
  officialSources: [
    { label: "Government.nl", href: "https://www.government.nl/", description: "Official Dutch government information on work, residence and public services." },
    { label: "Business.gov.nl", href: "https://business.gov.nl/", description: "Employment contracts, hiring and employer obligations in the Netherlands." },
    { label: "UWV", href: "https://www.uwv.nl/", description: "Employee insurance, benefits and labour market information." },
    { label: "IND", href: "https://ind.nl/", description: "Immigration and residence permit rules for employed migrants." },
    { label: "NederlandWereldwijd", href: "https://www.nederlandwereldwijd.nl/", description: "Government portal with official links for Dutch nationals abroad and incoming workers." },
  ],
  officialSourcesNote:
    "Employment law, visa sponsorship requirements and workplace regulations can change over time. Always verify current requirements through official resources.",
  relatedGuides: [
    { label: "Finding Jobs in the Netherlands", href: FINDING_JOBS_NETHERLANDS_PATH, status: "live", description: "Job search before the contract stage." },
    { label: "Expat Salary Netherlands", href: EXPAT_SALARY_NETHERLANDS_PATH, status: "live", description: "Compare offer lines against market benchmarks." },
    { label: "Net Salary Netherlands", href: NET_SALARY_NETHERLANDS_PATH, status: "live", description: "Estimate take-home pay from gross contract salary." },
    { label: "Pension Netherlands", href: PENSION_NETHERLANDS_EXPATS_PATH, status: "live", description: "Understand pension clauses in your package." },
    { label: "Moving to the Netherlands", href: MOVING_HUB_PATH, status: "live", description: "Relocation hub connecting work, housing and visas." },
    { label: "Visas & residency", href: VISAS_HUB_PATH, status: "live", description: "Permit routes that may depend on employment contracts." },
  ] satisfies EmploymentContractLink[],
  exploreNextCards: [
    { label: "Finding Jobs", href: FINDING_JOBS_NETHERLANDS_PATH, status: "live", description: "Continue job search planning alongside contract review." },
    { label: "Expat Salary", href: EXPAT_SALARY_NETHERLANDS_PATH, status: "live", description: "Benchmark the salary lines in your agreement." },
    { label: "Pension Guide", href: PENSION_NETHERLANDS_EXPATS_PATH, status: "live", description: "Follow pension clauses into long-term planning." },
    { label: "Employee Benefits", href: EMPLOYEE_BENEFITS_NETHERLANDS_PATH, status: "live", description: "Compare benefits beyond base pay." },
    { label: "Highly Skilled Migrant Guide", href: HSM_VISA_PATH, status: "live", description: "Permit context for sponsored employment contracts." },
  ] satisfies EmploymentContractLink[],
  exploreNextTips: [
    "Pick one salary or benefits guide to stress-test your offer lines",
    "Verify IND rules if your contract supports a sponsored permit route",
    "Run the contract risk scanner for clause awareness before signing",
  ],
  sourceVerificationTips: [
    "Check publication or update dates on official pages",
    "Confirm contract and permit rules with your employer and IND where relevant",
    "Use Business.gov.nl for hiring and contract context alongside Government.nl",
  ],
  faqNextSteps: [
    "If FAQ answers raise visa questions, verify current IND rules before signing or relocating.",
    "If notice or probation is unclear, ask HR for the exact contract article — not informal summaries.",
    "If mortgage plans depend on the role, speak to a mortgage adviser about contract type early.",
    "Run the contract risk scanner when you want a structured pass over common clause areas.",
  ],
  toolLink: {
    label: "Employment contract risk scanner",
    href: CONTRACT_RISK_SCANNER_PATH,
    description: "Paste contract text for a planning scan of common clause areas — not a legal verdict.",
  },
  affiliatePlacementId: EMPLOYMENT_CONTRACT_AFFILIATE_PLACEMENT_ID,
} as const;
