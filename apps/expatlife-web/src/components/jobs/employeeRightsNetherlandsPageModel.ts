export const EMPLOYEE_RIGHTS_NETHERLANDS_PATH = "/netherlands/jobs/employee-rights-netherlands/" as const;
export const EMPLOYEE_RIGHTS_AFFILIATE_PLACEMENT_ID = "nl-jobs-employee-rights-support-providers" as const;

export const EMPLOYMENT_CONTRACT_NETHERLANDS_PATH = "/netherlands/jobs/employment-contract-netherlands/" as const;
export const PROBATION_PERIOD_NETHERLANDS_PATH = "/netherlands/jobs/probation-period-netherlands/" as const;
export const NOTICE_PERIOD_NETHERLANDS_PATH = "/netherlands/jobs/notice-period-netherlands/" as const;
export const EMPLOYEE_BENEFITS_NETHERLANDS_PATH = "/netherlands/jobs/employee-benefits-netherlands/" as const;
export const FINDING_JOBS_NETHERLANDS_PATH = "/netherlands/jobs/finding-jobs-netherlands/" as const;
export const EXPAT_SALARY_NETHERLANDS_PATH = "/netherlands/jobs/expat-salary-netherlands/" as const;
export const HOLIDAY_ALLOWANCE_NETHERLANDS_PATH = "/netherlands/jobs/holiday-allowance-netherlands/" as const;
export const HSM_VISA_PATH = "/netherlands/visa/highly-skilled-migrant/" as const;
export const MOVING_HUB_PATH = "/netherlands/moving-to-the-netherlands/" as const;
export const JOBS_HUB_PATH = "/netherlands/moving/working-in-the-netherlands/" as const;
export const VISAS_HUB_PATH = "/netherlands/moving/visas-residency/" as const;
export const IMMIGRATION_LAWYERS_PATH = "/netherlands/services/immigration-lawyers/" as const;
export const CAREER_COACHES_PATH = "/netherlands/services/career-coaches/" as const;
export const RECRUITMENT_AGENCIES_PATH = "/netherlands/services/recruitment-agencies/" as const;
export const RELOCATION_SERVICES_PATH = "/netherlands/services/relocation-services/" as const;
export const CONTRACT_RISK_SCANNER_PATH = "/netherlands/work/tools/employment-contract-risk-scanner/" as const;

export type EmployeeRightsLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type EmployeeRightsCard = {
  title: string;
  body: string;
};

export type EmployeeRightsComparisonRow = {
  topic: string;
  dutchContext: string;
  whatToConfirm: string;
};

export type EmployeeRightsConversationPrompt = {
  audience: string;
  question: string;
  whyAsk: string;
};

export type EmployeeRightsScenarioRow = {
  profile: string;
  scenario: string;
  whatToCheck: string;
};

export type ServiceCategory = {
  label: string;
  href: string;
  description: string;
};

const INFOGRAPHIC_VERSION = "premium-v2";

const visual = (name: string, alt: string, caption: string) => ({
  src: `/images/infographics/netherlands-employee-rights-${name}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const employeeRightsNetherlandsPage = {
  slug: "employee-rights-netherlands",
  path: EMPLOYEE_RIGHTS_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2026-08-30",
  affiliatePlacementId: EMPLOYEE_RIGHTS_AFFILIATE_PLACEMENT_ID,
  seo: {
    title: "Employee Rights in the Netherlands | Expat Work Guide",
    description:
      "Learn about employee rights in the Netherlands, including contracts, holidays, sick leave, parental leave, workplace protections and what expats should know.",
    keywords: [
      "employee rights netherlands",
      "workers rights netherlands",
      "employment rights netherlands",
      "employee protections netherlands",
      "expat employee rights netherlands",
      "dutch labor rights",
      "sick leave netherlands",
      "holiday entitlement netherlands",
      "workplace rights netherlands",
      "highly skilled migrant employee rights",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Jobs · Workplace rights",
    pageTitle: "Employee Rights in the Netherlands",
    subtitle:
      "Understand the key workplace rights, protections and benefits employees commonly receive in the Netherlands, including leave, contracts, sick pay and workplace standards.",
    primaryCta: { label: "Understand Employee Rights", href: "#intro" },
    secondaryCta: { label: "Explore Career Guides", href: JOBS_HUB_PATH },
    chips: ["Contract protections", "Leave & wellbeing", "Equal treatment", "Expat context"],
    image: {
      src: "/images/heroes/netherlands-employee-rights-netherlands-hero-v2.png",
      alt: "Photorealistic editorial photo of a diverse international team reviewing an Employee Handbook and workplace rights welcome folder together in a bright Amsterdam office lounge, with Dutch canal houses and bicycles visible through the window — positive collaborative onboarding atmosphere.",
    },
  },
  visuals: {
    intro: visual(
      "intro",
      "Premium infographic record-file builder showing six Dutch workplace protection areas — contracts, hours, leave, sick pay, safety and equal treatment — with concrete expat examples and a three-step checklist rail.",
      "Start here: open your contract, bookmark official sources, and email HR when policy is unclear."
    ),
    snapshot: visual(
      "snapshot",
      "Premium at-a-glance infographic with six employee-rights cards — written contracts, paid holiday, sick leave, parental leave, anti-discrimination and workplace safety — each with practical example labels.",
      "Compare these six areas against your contract and HR handbook — exact terms vary by employer and sector."
    ),
    contractRights: visual(
      "contract-rights",
      "Premium contract review infographic highlighting sample articles — vacation days, proeftijd notice, employee notice, salary and hybrid policy — with a pre-signing checklist.",
      "Before signing: reconcile offer email vs contract, check vakantiegeld separately, and note proeftijd end date."
    ),
    workingHours: visual(
      "working-hours",
      "Premium weekly calendar infographic comparing full-time 36–40h, part-time 0.8 FTE, hybrid office days and overtime CAO notes for Dutch employment.",
      "Confirm contracted hours, core availability and whether evening contact is expected — not just team habit."
    ),
    holidayEntitlement: visual(
      "holiday-entitlement",
      "Premium calendar-flow infographic on vacation days, mid-year pro-rata accrual, 1 July carry-over, Koningsdag and company shutdown weeks plus vakantiegeld timing.",
      "Ask HR how many days you accrue, whether public holidays deduct from balance, and when unused days expire."
    ),
    sickLeave: visual(
      "sick-leave",
      "Premium sick-leave timeline infographic from day-one HR reporting through occupational health contact and phased reintegration return-to-work planning.",
      "Save your sick-reporting number now — Dutch illness processes often differ sharply from US or UK habits."
    ),
    parentalLeave: visual(
      "parental-leave",
      "Premium parental-leave timeline from due date through maternity, partner leave, optional parental months and part-time return example.",
      "Notify HR early, check employer top-up clauses, and verify current rules on Government.nl."
    ),
    workplaceSafety: visual(
      "workplace-safety",
      "Premium workplace safety checklist board covering ergonomics, lab PPE, evacuation routes, harassment reporting and mental wellbeing support.",
      "Know your reporting route for hazards and grievances — employer duty of care applies in office and hybrid setups."
    ),
    discrimination: visual(
      "discrimination",
      "Premium equal-treatment bridge infographic showing protected grounds — nationality, gender, religion, disability, age — with promotion and accommodation examples.",
      "Workplace protections apply regardless of passport — document concerns and review official equal-treatment guidance."
    ),
    hsm: visual(
      "hsm",
      "Premium two-track bridge infographic separating workplace rights (same as colleagues) from IND permit rules (salary threshold, sponsor, transfer timing) for highly skilled migrants.",
      "HR for sick leave and holidays; IND official sources for permit questions — two separate planning tracks."
    ),
    remoteWork: visual(
      "remote-work",
      "Premium hybrid split-scene infographic on office-day policy, equipment stipend, and approval needed before working abroad with tax and permit caution notes.",
      "Get hybrid rules in writing — especially equipment budget and whether December work-from-home-country is allowed."
    ),
    misconceptions: visual(
      "misconceptions",
      "Premium myth-vs-reality board debunking six common expat misunderstandings about Dutch employee rights, part-time status, sick leave and visa treatment.",
      "If a colleague says foreigners have fewer rights — check your contract and official sources instead."
    ),
    responsibilities: visual(
      "responsibilities",
      "Premium balance-scale infographic pairing employee rights with responsibilities — conduct, policies, communication, reintegration cooperation and notice handover.",
      "Rights come with duties too — follow sick reporting times and security policies even when protections apply."
    ),
    questions: visual(
      "questions",
      "Premium eight-card Q&A infographic answering common expat questions on rights, sick leave, holidays, discrimination, parental leave, HSM, remote work and contracts.",
      "Use these as conversation starters with HR — written answers beat verbal assurances."
    ),
    relatedGuides: visual(
      "related-guides",
      "Premium numbered route-map infographic linking employee rights to employment contracts, benefits, probation, notice period and finding jobs guides.",
      "Suggested order: contracts → benefits → probation/notice when planning a job change."
    ),
    services: visual(
      "services",
      "Premium provider map infographic showing when immigration lawyers, career coaches, recruiters and relocation services may help during rights and contract questions.",
      "Use professionals for scoped review — still read your contract and official sources yourself."
    ),
    faq: visual(
      "faq",
      "Premium FAQ accordion board with eight employee-rights questions and short orientation answers on sick leave, holidays, discrimination and remote work.",
      "FAQ answers orient you — confirm contract-specific details with HR in writing."
    ),
    officialSources: visual(
      "official-sources",
      "Premium Netherlands map infographic pinning six official sources — Government.nl, Business.gov.nl, UWV, Netherlands Labour Authority, IND and NederlandWereldwijd — with what to verify where.",
      "Bookmark these before you need them — employment and permit rules change over time."
    ),
    exploreNext: visual(
      "explore-next",
      "Premium canal-route journey infographic with five next-step guides — employment contracts, benefits, finding jobs, expat salary and moving to the Netherlands.",
      "Pick your next guide based on whether you are reviewing an offer, comparing benefits or planning a move."
    ),
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#contract-rights", label: "Contracts" },
    { href: "#working-hours", label: "Hours" },
    { href: "#holiday-entitlement", label: "Holidays" },
    { href: "#sick-leave", label: "Sick leave" },
    { href: "#parental-leave", label: "Parental leave" },
    { href: "#workplace-safety", label: "Safety" },
    { href: "#discrimination", label: "Equal treatment" },
    { href: "#hsm", label: "HSM" },
    { href: "#remote-work", label: "Remote work" },
    { href: "#misconceptions", label: "Myths" },
    { href: "#responsibilities", label: "Responsibilities" },
    { href: "#questions", label: "Questions" },
    { href: "#related-guides", label: "Guides" },
    { href: "#services", label: "Services" },
    { href: "#faq", label: "FAQ" },
    { href: "#official-sources", label: "Sources" },
    { href: "#explore-next", label: "Explore next" },
  ],
  intro: {
    heading: "Understanding Employee Rights in the Netherlands",
    paragraphs: [
      "The Netherlands is known for strong employee protections and structured workplace standards. Employees commonly benefit from protections related to employment contracts, working hours, paid leave, sick leave, workplace safety and equal treatment.",
      "For expats and international professionals, Dutch workplace protections may differ significantly from home-country systems — both in what is written in your contract and in how processes such as sick leave or parental leave are handled day to day.",
      "This guide explains practical awareness to reduce uncertainty and help you understand workplace expectations. It is not legal advice, employment law advice or dispute resolution guidance.",
    ],
    keyPoints: [
      { title: "Written contracts are common", body: "Example: permanent contract listing salary €5,400/month, 36-hour week, 25 vacation days and separate sick-pay policy — read all articles, not just the salary line." },
      { title: "Leave and sick pay differ by country", body: "Example: US hire surprised that illness may trigger employer–employee reintegration meetings — verify UWV and HR policy, not home-country habit." },
      { title: "Equal treatment applies broadly", body: "Example: international team lead in Rotterdam — nationality should not affect promotion criteria; verify internal policy and official equal-treatment guidance." },
      { title: "Visa route adds planning layers", body: "Example: HS migrant on recognised sponsor contract — workplace rights generally match other employees; permit rules are separate on IND official sources." },
    ] satisfies EmployeeRightsCard[],
    scenarios: [
      { profile: "UK hire — first Dutch contract", scenario: "Permanent role Amsterdam; contract lists 38-hour week, 25 vacation days, 1-month notice and pension after proeftijd", whatToCheck: "All contract articles before signing — compare with employment contract guide and HR answers in writing." },
      { profile: "Part-time parent — Utrecht", scenario: "0.8 FTE marketing role; asks whether holiday and sick leave are pro-rated", whatToCheck: "Contract FTE clause, HR policy and official guidance — part-time workers generally retain core protections." },
      { profile: "Illness during probation — pharma QA", scenario: "Week 4 of 2-month proeftijd; flu absence for 5 working days", whatToCheck: "Sick reporting procedure, company doctor process and contract sick-pay wording — differs from many countries." },
      { profile: "HS migrant — scale-up engineer", scenario: "Recognised sponsor contract €6,100/month; compares rights with local Dutch colleague on same team", whatToCheck: "Workplace protections should align; salary threshold and sponsor duties are separate IND topics." },
    ] satisfies EmployeeRightsScenarioRow[],
  },
  introPlanningSteps: [
    "Read your employment contract and any employee handbook — note hours, leave, sick reporting and conduct policies.",
    "Bookmark official sources (Government.nl, Business.gov.nl, UWV, Netherlands Labour Authority) for current rules.",
    "If something feels unclear, ask HR in writing and keep replies for your records — orientation only, not legal advice.",
  ],
  snapshotCards: [
    { label: "Written contracts", value: "Common", note: "Salary, hours, leave and notice are typically defined in your agreement." },
    { label: "Paid holiday", value: "Entitlement exists", note: "Annual leave is a standard part of Dutch employment — exact days vary by contract." },
    { label: "Sick leave", value: "Protections exist", note: "Illness and reintegration processes differ from many home countries." },
    { label: "Parental leave", value: "Options exist", note: "Maternity, partner and parental leave frameworks apply depending on circumstances." },
    { label: "Equal treatment", value: "Protected", note: "Discrimination on protected grounds is generally prohibited in employment." },
    { label: "Workplace safety", value: "Employer duty", note: "Healthy and safe working environments are a baseline expectation." },
  ],
  snapshotNextSteps: [
    "Highlight contract articles on hours, vacation days, sick leave and notice.",
    "Confirm how many vacation days you accrue per year and whether public holidays affect planning.",
    "Save official source links before you need them during illness or a job change.",
  ],
  rightsComparisonHeading: "Dutch workplace rights vs common expat assumptions",
  rightsComparisonParagraphs: [
    "Many international hires compare Dutch protections with home-country habits. This table orients you on where Dutch employment often differs — your contract, CAO and employer policy still govern exact terms.",
  ],
  rightsComparisonRows: [
    { topic: "Written contract", dutchContext: "Standard — salary, hours, leave and notice in signed agreement", whatToConfirm: "Offer email vs final contract — which version governs?" },
    { topic: "Holiday leave", dutchContext: "Paid annual leave commonly ~4 weeks full-time + vakantiegeld", whatToConfirm: "Accrual mid-year, carry-over deadline and public holiday policy" },
    { topic: "Sick leave", dutchContext: "Report day 1; occupational health and reintegration may follow", whatToConfirm: "HR sick line, pay continuation and doctor visit rules" },
    { topic: "Part-time work", dutchContext: "Widespread including senior roles — core protections generally apply", whatToConfirm: "Whether leave and benefits are pro-rated in writing" },
    { topic: "Equal treatment", dutchContext: "Protected grounds include nationality, gender, religion, disability, age", whatToConfirm: "Internal grievance route and official equal-treatment guidance" },
    { topic: "Visa-sponsored roles", dutchContext: "Workplace rights generally match colleagues; IND rules are separate", whatToConfirm: "HR for rights questions; ind.nl for permit timing" },
  ] satisfies EmployeeRightsComparisonRow[],
  snapshotScenarios: [
    { profile: "UK hire — first contract", scenario: "Permanent Amsterdam role; assumes 2 weeks notice habit; contract shows 25 leave days and Dutch sick reporting", whatToCheck: "Read full contract — home-country habits do not override written Dutch terms." },
    { profile: "Part-time parent — Utrecht", scenario: "0.8 FTE HR role; asks if holiday and sick leave are pro-rated", whatToCheck: "Contract FTE clause and HR policy in writing — core protections generally apply." },
    { profile: "Illness week 4 of proeftijd", scenario: "Pharma QA hire; flu absence 5 days during 2-month proeftijd", whatToCheck: "Sick reporting procedure and company doctor process — differs from many countries." },
    { profile: "HS migrant — scale-up", scenario: "Recognised sponsor €6,100/month; compares rights with Dutch colleague on same team", whatToCheck: "Workplace protections should align; IND threshold checked separately on ind.nl." },
  ] satisfies EmployeeRightsScenarioRow[],
  contractRightsHeading: "Rights Related to Employment Contracts",
  contractRightsParagraphs: [
    "Employment contracts commonly define salary, working hours, benefits, notice periods and probation periods. They are the first document to read when you want to understand your workplace rights in practice.",
    "Employees should understand contract terms before signing — especially clauses on leave, sick pay, non-compete, relocation repayment and variable pay. When in doubt, ask HR for clarification in writing.",
  ],
  contractRightsPoints: [
    "Salary and pay frequency — gross amount, holiday allowance inclusion and bonus conditions",
    "Working hours and location — full-time, part-time, hybrid or on-site expectations",
    "Leave entitlements — vacation days, public holiday policy and carry-over rules",
    "Probation and notice — separate articles for proeftijd and end-of-employment timing",
    "Benefits and policies — pension, mobility, insurance and expense reimbursement",
  ],
  contractRightsChecklist: [
    "Compare written offer with final contract before signing.",
    "Check whether holiday allowance is listed separately from base salary.",
    "Note probation end date and post-proeftijd notice articles.",
    "Ask HR about any non-compete, clawback or garden-leave clauses.",
  ],
  contractReviewFlow: [
    { title: "Locate rights articles", body: "Find vacation, sick leave, hours, conduct and equal-treatment clauses — note article numbers." },
    { title: "Compare offer vs contract", body: "Reconcile offer email lines (days, salary, hybrid policy) with the signed PDF before day one." },
    { title: "Email HR for clarity", body: "Ask written answers on accrual, sick reporting and hybrid rules — keep replies on file." },
    { title: "Scan linked clauses", body: "Review pension, relocation clawback and non-compete lines alongside core rights articles." },
  ] satisfies EmployeeRightsCard[],
  contractRightsScenarios: [
    { profile: "Offer vs contract mismatch — fintech", scenario: "Offer email: 27 vacation days; signed contract Article 8: 25 days plus collective agreement reference", whatToCheck: "Written contract governs — ask HR to reconcile before signing." },
    { profile: "Fixed-term renewal — project manager", scenario: "12-month contract ending 31 December; employer offers 6-month extension with same rights", whatToCheck: "Whether benefits, pension and leave continue unchanged on renewal letter." },
    { profile: "Agency → direct hire — developer", scenario: "6-month agency phase; new direct contract resets proeftijd and benefits", whatToCheck: "Which rights start fresh on direct contract — pension, leave accrual and notice." },
    { profile: "English contract — Big Four", scenario: "Bilingual contract; employee reads English summary only", whatToCheck: "Dutch version may govern legally — ask HR which version is authoritative." },
  ] satisfies EmployeeRightsScenarioRow[],
  workingHoursHeading: "Working Hours and Work-Life Balance",
  workingHoursParagraphs: [
    "The Netherlands is internationally known for work-life balance, flexible working arrangements and a strong part-time work culture. Many expats notice shorter formal hours and clearer boundaries than in other countries.",
    "Full-time schedules, part-time roles, overtime and flexible arrangements are usually defined in your contract and employer policy. Overtime treatment varies by sector and collective agreements.",
  ],
  workingHoursCards: [
    { title: "Full-time schedules", body: "Example: 36-hour week in contract with core availability 09:00–17:30 — confirm whether Friday WFH is policy or informal." },
    { title: "Part-time culture", body: "Example: 0.8 FTE Mon–Thu — holiday and sick leave often pro-rated; core protections still apply, not second-class status." },
    { title: "Overtime", body: "Example: deadline month with evening work; contract silent — ask HR or CAO whether time in lieu or pay applies." },
    { title: "Flexible work", body: "Example: team norm Tue–Thu office but contract location clause says Amsterdam — get hybrid rules in writing." },
  ] satisfies EmployeeRightsCard[],
  workingHoursChecklist: [
    "Confirm contracted hours and core availability windows in your agreement.",
    "Ask whether evening Slack or email contact is expected beyond contract hours.",
    "If part-time, clarify pro-rating for leave, pension and benefits in writing.",
    "When hybrid policy changes, request an updated written policy — not just a team email.",
  ],
  workingHoursComparisonRows: [
    { pattern: "Full-time permanent", typicalHours: "Often 36–40 hours/week", whatToConfirm: "Contract hours, lunch break rules and core meeting times" },
    { pattern: "Part-time 0.8 FTE", typicalHours: "Example: Mon–Thu only", whatToConfirm: "Leave accrual, sick pay and pension pro-rating" },
    { pattern: "Hybrid default", typicalHours: "Example: 2–3 office days/week", whatToConfirm: "Written policy vs informal team habit" },
    { pattern: "Overtime month", typicalHours: "Extra hours around deadlines", whatToConfirm: "CAO, time-in-lieu or overtime pay rules with HR" },
  ] satisfies { pattern: string; typicalHours: string; whatToConfirm: string }[],
  workingHoursScenarios: [
    { profile: "0.6 FTE designer — Haarlem", scenario: "Works Mon–Wed; manager schedules Thursday client calls", whatToCheck: "Contract hours vs manager expectations — clarify availability in writing." },
    { profile: "Consulting — overtime month", scenario: "Deadline month with evening work; contract silent on overtime pay", whatToCheck: "CAO or HR policy on overtime compensation or time in lieu." },
    { profile: "Hybrid policy change", scenario: "Employer moves from 3 days office to 4 days office from September", whatToCheck: "Written policy update, commute support and whether contract location clause applies." },
    { profile: "US hire — always-on culture", scenario: "Slack messages expected evenings; Dutch colleagues disconnect at 18:00", whatToCheck: "Team norms vs contract hours — discuss boundaries with manager and HR." },
  ] satisfies EmployeeRightsScenarioRow[],
  holidayEntitlementHeading: "Holiday Leave and Vacation Rights",
  holidayEntitlementParagraphs: [
    "Employees in the Netherlands commonly receive paid annual leave as part of employment. Public holidays and company shutdown periods may affect planning but are handled differently by employer.",
    "Exact vacation days depend on your contract, sector and any collective agreement. Avoid assuming your home-country holiday calendar applies — confirm accrual, carry-over and booking rules with HR.",
  ],
  holidayEntitlementPoints: [
    "Paid annual leave is a standard employment benefit — days are usually stated in your contract",
    "Public holidays may be paid days off depending on employer and sector practice",
    "Holiday allowance (vakantiegeld) is often paid separately — see holiday allowance guide",
    "Planning and approval processes vary — check internal leave systems and team policy",
  ],
  holidayEntitlementChecklist: [
    "Confirm total vacation days per year and pro-rata rule if you start mid-year.",
    "Ask when unused days expire — many employers use a 1 July carry-over deadline.",
    "Clarify whether public holidays (e.g. Koningsdag) deduct from your balance.",
    "Check whether company shutdown weeks count as vacation or paid closure.",
  ],
  holidayEntitlementScenarios: [
    { profile: "New hire — July start", scenario: "25 vacation days per year; starts 15 July mid-year", whatToCheck: "Pro-rata accrual for first calendar year — HR calculation in writing." },
    { profile: "Carry-over — finance analyst", scenario: "5 unused days from 2025; wants to use in Q1 2026", whatToCheck: "Employer policy on carry-over expiry — often 1 July deadline in many companies." },
    { profile: "Public holiday — Kings Day", scenario: "Team off on Koningsdag; international hire asks if deducted from vacation balance", whatToCheck: "Company public holiday policy vs personal vacation days." },
    { profile: "Shutdown week — manufacturing", scenario: "Company closes last week of August; employee planned separate September trip", whatToCheck: "Whether shutdown counts as vacation or paid company closure." },
  ] satisfies EmployeeRightsScenarioRow[],
  sickLeaveHeading: "Sick Leave and Workplace Absence",
  sickLeaveParagraphs: [
    "Employees may have protections related to illness, recovery periods, reintegration and employer responsibilities during absence. Dutch sick leave systems often surprise expats because they differ from many countries.",
    "Reporting illness promptly, cooperating with occupational health processes and following employer procedures are commonly expected alongside employee protections. Verify UWV and official guidance for your situation.",
  ],
  sickLeavePoints: [
    "Report illness according to employer procedure — usually before a set time on day one",
    "Employer may involve occupational health services and reintegration planning",
    "Pay during illness depends on contract, CAO and statutory context — confirm with HR",
    "Long-term absence may trigger structured reintegration — not instant termination",
  ],
  sickLeaveChecklist: [
    "Save your employer sick-reporting number and procedure in your phone.",
    "Ask HR how sick pay is described in your contract during short vs longer absence.",
    "Keep medical information private unless occupational health requests relevant details.",
    "Use UWV and official sources for orientation — not social media anecdotes.",
  ],
  sickLeaveTimelineRows: [
    { stage: "Day 1 — report illness", employeeAction: "Call HR line before 09:00 (typical employer rule)", example: "Flu Monday — use contract procedure, not only a Slack message to manager" },
    { stage: "Week 1–2", employeeAction: "Occupational health may contact you", example: "Short absence — confirm pay continuation on first payslip line" },
    { stage: "Week 6+ — reintegration", employeeAction: "Company doctor may propose adjusted duties", example: "Back pain — phased return hours documented in reintegration plan" },
    { stage: "Longer absence", employeeAction: "Structured reintegration; verify UWV orientation", example: "Burnout leave — cooperate with meetings; protections may still apply" },
  ] satisfies { stage: string; employeeAction: string; example: string }[],
  sickLeaveScenarios: [
    { profile: "Short illness — software engineer", scenario: "Flu on Monday; contract requires calling HR line before 09:00", whatToCheck: "Reporting channel, pay continuation first week and doctor visit rules." },
    { profile: "Back pain — warehouse supervisor", scenario: "Gradual return after 6 weeks; company doctor proposes adjusted duties", whatToCheck: "Reintegration plan, adapted hours and pay during phased return." },
    { profile: "Mental health — consultant", scenario: "Burnout leave; embarrassed to report to manager", whatToCheck: "HR confidential reporting route and occupational health process — protections may apply." },
    { profile: "US hire assumption", scenario: "Expects unpaid sick days after 3 days; Dutch contract shows continued pay context", whatToCheck: "Contract sick-pay clause and CAO — differs from many US employers." },
  ] satisfies EmployeeRightsScenarioRow[],
  parentalLeaveHeading: "Parental and Family Leave",
  parentalLeaveParagraphs: [
    "The Netherlands has frameworks for maternity leave, partner leave and parental leave. Family-related workplace protections and benefits may be available depending on employment status, partner situation and employer policies.",
    "Rules and pay during leave can change — verify current official guidance on Government.nl and UWV. Employer top-ups beyond statutory minimums vary widely.",
  ],
  parentalLeavePoints: [
    "Maternity leave applies around childbirth — verify current statutory framework on official sources",
    "Partner leave allows non-birthing parents time around birth — employer policy may extend basics",
    "Parental leave may be unpaid or partially paid depending on choices and eligibility",
    "Employers may offer enhanced family benefits beyond statutory minimums",
  ],
  parentalLeaveChecklist: [
    "Notify HR early with due date and planned leave blocks — deadlines vary by employer.",
    "Ask whether contract adds pay top-up beyond statutory minimums.",
    "Plan team coverage before partner or parental leave starts.",
    "Verify current rules on Government.nl — frameworks can change.",
  ],
  parentalLeaveTimelineRows: [
    { phase: "Before birth", planning: "Notify HR; confirm pay top-up clause", example: "Due date 15 March — email HR in January with intended leave blocks" },
    { phase: "Maternity leave", planning: "Verify current statutory framework on official sources", example: "Birthing parent — check employer enhancement in contract, not colleague anecdotes" },
    { phase: "Partner leave", planning: "Schedule around birth and team handover", example: "Non-birthing parent — confirm duration and pay percentage with HR" },
    { phase: "Parental leave", planning: "Optional extended months — partly paid depending on choices", example: "3 days/week for 6 months from June — eligibility and team plan in writing" },
  ] satisfies { phase: string; planning: string; example: string }[],
  parentalLeaveScenarios: [
    { profile: "Expecting parent — dual career", scenario: "Due date 15 March; both partners work full-time in Amsterdam", whatToCheck: "Maternity vs partner leave timing, pay during leave and HR notification deadlines." },
    { profile: "Parental leave — part-time return", scenario: "Wants 3 days parental leave per week for 6 months from June", whatToCheck: "Eligibility, pay percentage and team coverage plan with HR." },
    { profile: "Expat family — no local network", scenario: "Partner leave planned April; relocation from UK 8 months ago", whatToCheck: "Leave pay, childcare planning and any permit-related employment continuity separately on IND." },
    { profile: "Employer top-up — corporate HR", scenario: "Contract adds 100% pay for first 6 weeks maternity beyond statutory context", whatToCheck: "Written enhancement clause — not assumed from colleagues' anecdotes." },
  ] satisfies EmployeeRightsScenarioRow[],
  workplaceSafetyHeading: "Workplace Safety and Wellbeing",
  workplaceSafetyParagraphs: [
    "Employers generally have responsibilities regarding workplace safety, healthy working environments, wellbeing considerations and risk management. Employees also have duties to follow safety rules and report hazards.",
    "For office, hybrid and on-site roles, this may include ergonomics, evacuation procedures, harassment policies and mental wellbeing resources. Use Netherlands Labour Authority and official sources for current standards.",
  ],
  workplaceSafetyPoints: [
    "Safe physical workplace — equipment, ergonomics and evacuation procedures",
    "Healthy working conditions — workload, harassment policies and wellbeing support",
    "Risk assessments for relevant roles — especially on-site, lab or industrial settings",
    "Reporting routes for unsafe conditions or misconduct",
  ],
  workplaceSafetyChecklist: [
    "Locate evacuation routes and first-aid contacts for your office or site.",
    "If hybrid, ask about home-office ergonomics budget and assessment support.",
    "Know the internal grievance route before you need it for harassment concerns.",
    "Report hazards through employer channels — verify Netherlands Labour Authority guidance separately.",
  ],
  workplaceSafetyScenarios: [
    { profile: "Home office — hybrid developer", scenario: "Employer provides €500 desk budget; employee asks about eye strain assessments", whatToCheck: "Written hybrid safety policy and occupational health support for home setup." },
    { profile: "Lab role — biotech", scenario: "New hire needs safety training before bench access", whatToCheck: "Mandatory training completion and PPE rules — employer responsibility." },
    { profile: "Harassment concern — sales team", scenario: "Employee reports inappropriate comments to HR", whatToCheck: "Internal grievance procedure and equal treatment frameworks — verify official reporting guidance." },
    { profile: "Construction site visit", scenario: "Office worker visits site without induction", whatToCheck: "Site safety induction requirements before access — employer coordination." },
  ] satisfies EmployeeRightsScenarioRow[],
  discriminationHeading: "Equal Treatment in the Workplace",
  discriminationParagraphs: [
    "Employees are generally protected from discrimination relating to nationality, gender, religion, disability, age and other protected characteristics. International professionals receive workplace protections as well.",
    "This guide does not interpret discrimination law or advise on disputes. If you have concerns, review employer policies and official Netherlands Labour Authority guidance, and seek qualified advice when needed.",
  ],
  discriminationPoints: [
    "Recruitment and promotion should be based on relevant qualifications, not protected characteristics",
    "Nationality or ethnic background should not justify unequal treatment in employment",
    "Reasonable accommodation may be relevant for disability — employer policies vary",
    "Internal reporting and official channels exist — verify current guidance independently",
  ],
  discriminationChecklist: [
    "Document dates and specifics if you experience concerning comments or decisions.",
    "Review employer equal-treatment and grievance policies in your handbook.",
    "Ask HR in writing about accommodation requests — keep replies on file.",
    "Use official Netherlands Labour Authority guidance for orientation — not legal advice from forums.",
  ],
  discriminationScenarios: [
    { profile: "Non-Dutch candidate — final round", scenario: "Recruiter asks about “cultural fit” in ways that reference nationality", whatToCheck: "Equal treatment in hiring — document concerns and review official guidance." },
    { profile: "Part-time parent — promotion", scenario: "Passed over for promotion; manager cites availability despite strong performance", whatToCheck: "Whether part-time status was applied inconsistently — HR review and official sources." },
    { profile: "Religious observance — Friday prayer", scenario: "Employee requests short Friday adjustment; team policy unclear", whatToCheck: "Employer accommodation policy and equal treatment principles." },
    { profile: "Age comment — senior hire", scenario: "Jokes about “digital age” in meetings targeting older expat hire", whatToCheck: "Harassment policy and reporting route — not legal advice from this guide." },
  ] satisfies EmployeeRightsScenarioRow[],
  hsmHeading: "Employee Rights for Highly Skilled Migrants",
  hsmParagraphs: [
    "Visa-sponsored employees generally receive workplace protections similar to other employees in the Netherlands. Employment contracts, workplace rights, salary arrangements and employer responsibilities still apply.",
    "Permit rules, salary thresholds and sponsor duties are separate from general workplace rights — verify current IND requirements on official sources. This is not immigration advice.",
  ],
  hsmPoints: [
    "Workplace protections generally apply regardless of permit route",
    "Contract salary and role should align with sponsor obligations — verify IND independently",
    "Changing employers may affect permits — separate from sick leave or holiday rights",
    "Keep employment documents for permit renewals and sponsor audits",
  ],
  hsmChecklist: [
    "Confirm contract matches IND salary threshold for your route and age band.",
    "Understand that workplace rights questions go to HR; permit questions to official IND sources.",
    "Keep payslips and contract amendments if sponsor status or role changes.",
    "Read highly skilled migrant guide alongside this page — different topics.",
  ],
  hsmRightsComparisonRows: [
    { topic: "Sick leave", workplaceRights: "Same reporting and reintegration process as colleagues", permitTrack: "IND not involved in day-to-day illness — verify HR policy" },
    { topic: "Vacation days", workplaceRights: "Contract accrual and carry-over rules apply", permitTrack: "Separate from permit validity dates" },
    { topic: "Salary change", workplaceRights: "HR contract amendment and payslip", permitTrack: "Check IND salary threshold on ind.nl before accepting" },
    { topic: "Employer switch", workplaceRights: "Standard notice and handover rules", permitTrack: "Sponsor transfer timing — verify IND independently" },
  ] satisfies { topic: string; workplaceRights: string; permitTrack: string }[],
  hsmScenarios: [
    { profile: "Recognised sponsor — data engineer", scenario: "Same team rights as Dutch colleague; permit tied to sponsor A", whatToCheck: "Workplace issues via HR; sponsor switch via IND rules separately." },
    { profile: "Salary review — below threshold concern", scenario: "Promotion €5,900/month; worries about IND minimum", whatToCheck: "Current IND threshold on ind.nl — verify independently before accepting." },
    { profile: "Illness during permit renewal", scenario: "Sick leave Q2; renewal paperwork due Q3", whatToCheck: "HR sick process plus IND renewal timing — two separate planning tracks." },
    { profile: "Startup → corporate move", scenario: "New recognised sponsor contract; asks if leave balance resets", whatToCheck: "Transfer of accrued leave and contract terms — HR letter plus permit transfer rules." },
  ] satisfies EmployeeRightsScenarioRow[],
  remoteWorkHeading: "Remote Work and Flexible Working",
  remoteWorkParagraphs: [
    "Modern Dutch workplaces increasingly offer hybrid work, remote work and flexible arrangements. Policies vary significantly between employers — from fully remote tech teams to strict office attendance in regulated sectors.",
    "Confirm written policy on location, equipment, expenses, data security and cross-border work before working from abroad. Working from another country may raise tax and permit questions outside this guide.",
  ],
  remoteWorkPoints: [
    "Hybrid schedules — office days, core hours and meeting expectations",
    "Home office support — equipment budget, desk/chair and IT security",
    "Remote from abroad — often requires employer approval; tax and permit risks",
    "Performance management — outcomes and communication norms in flexible teams",
  ],
  remoteWorkChecklist: [
    "Get written hybrid policy: office days, core hours and meeting expectations.",
    "Confirm equipment budget, expense rules and who owns gear on exit.",
    "Ask approval process before working from another country — even briefly.",
    "Clarify data security rules for home office and personal devices.",
  ],
  remoteWorkScenarios: [
    { profile: "Hybrid — 2/3 split", scenario: "Contract silent on location; team norm Tue–Thu office", whatToCheck: "Ask HR to confirm written hybrid policy and whether commute allowance applies." },
    { profile: "Work from home country — December", scenario: "Wants 2 weeks remote from UK family visit", whatToCheck: "Employer approval, payroll and potential tax/permit implications." },
    { profile: "Equipment stipend", scenario: "€400 home office budget; employee buys monitor and chair", whatToCheck: "Expense rules, ownership of equipment on exit and ergonomic policy." },
    { profile: "Fully remote hire — SaaS", scenario: "Lives in Groningen; company HQ Amsterdam; never required in office", whatToCheck: "Written remote-first policy, travel expectations and on-site meeting frequency." },
  ] satisfies EmployeeRightsScenarioRow[],
  misconceptionCards: [
    { title: "Expats have fewer rights", body: "Example: HS migrant on same team as Dutch colleague — sick leave and vacation use the same HR process; passport alone does not reduce protections." },
    { title: "Part-time means fewer protections", body: "Example: 0.8 FTE HR role — holiday may be pro-rated but equal treatment and sick reporting rules still apply." },
    { title: "Sick leave works the same everywhere", body: "Example: US hire expects unpaid days after 3; Dutch contract may show continued pay and reintegration meetings." },
    { title: "Contracts are optional", body: "Example: startup hire works 3 weeks without signed contract — request written terms on salary, hours and leave immediately." },
    { title: "Holiday systems are universal", body: "Example: assumes Christmas is paid closure; NL employer may handle public holidays differently from home country." },
    { title: "Visa holders get different treatment", body: "Example: colleague says foreigners skip sick pay — check HR policy and contract, not breakroom rumours." },
  ] satisfies EmployeeRightsCard[],
  mythRealityChecks: [
    "Ask HR for written answers — anecdotes from expat forums are not contract terms.",
    "Compare official Dutch sources with your contract, not with your previous country only.",
    "Separate workplace rights questions from IND permit questions — different official channels.",
  ],
  misconceptionScenarios: [
    { profile: "“I'm just a visa worker”", scenario: "HS migrant told by colleague that sick leave “doesn't apply to foreigners”", whatToCheck: "HR policy and official sources — workplace protections generally apply equally." },
    { profile: "Verbal offer only", scenario: "Startup hire starts without signed contract for 3 weeks", whatToCheck: "Request written contract immediately — rights and pay terms should be documented." },
    { profile: "US sick day bank", scenario: "Expects 10 PTO days for illness; Dutch contract uses different framework", whatToCheck: "Contract sick leave and vacation articles — separate concepts from US PTO." },
    { profile: "Public holiday myth", scenario: "Assumes all EU countries treat Christmas the same as NL employer", whatToCheck: "Employer public holiday list and whether days are paid closures." },
  ] satisfies EmployeeRightsScenarioRow[],
  responsibilitiesHeading: "Employee Responsibilities",
  responsibilitiesParagraphs: [
    "Workplace rights are balanced with responsibilities including professional conduct, following workplace policies, clear communication and meeting reasonable performance expectations.",
    "Cooperating with sick reporting, reintegration, safety rules and confidentiality policies supports both your protection and your working relationship — especially during job changes or relocation.",
  ],
  responsibilitiesCards: [
    { title: "Professional conduct", body: "Example: give 1-month notice with written handover — professional exit supports references even when rights apply." },
    { title: "Follow policies", body: "Example: sick line before 09:00 in contract — texting manager at 10:00 may not satisfy reporting rules." },
    { title: "Communicate clearly", body: "Example: email HR for hybrid abroad approval in December — verbal OK from manager may not be enough." },
    { title: "Performance expectations", body: "Example: rights to sick leave do not remove project delivery expectations during phased return." },
  ] satisfies EmployeeRightsCard[],
  responsibilitiesScenarios: [
    { profile: "Sick reporting — late call", scenario: "Employee texts manager at 10:00; policy requires HR line before 09:00", whatToCheck: "Follow reporting procedure — may affect pay or occupational health process." },
    { profile: "Confidential project", scenario: "Consultant shares client data in personal WhatsApp", whatToCheck: "Data security policy — employee duty alongside employer systems." },
    { profile: "Notice period handover", scenario: "1-month notice; minimal handover despite contract duty to cooperate", whatToCheck: "Professional conduct during notice — separate from rights, affects references." },
    { profile: "Reintegration meetings", scenario: "Employee skips company doctor appointments during long sick leave", whatToCheck: "Cooperation expectations during reintegration — verify official and HR guidance." },
  ] satisfies EmployeeRightsScenarioRow[],
  responsibilitiesFlow: [
    { title: "Follow reporting rules", body: "Use HR sick lines, security policies and expense rules as written — even when protections apply." },
    { title: "Communicate in writing", body: "Email HR for leave, illness and hybrid questions; verbal assurances are harder to rely on later." },
    { title: "Cooperate during absence", body: "Attend occupational health and reintegration meetings when requested — part of the process." },
    { title: "Maintain professional conduct", body: "Handover during notice, respectful behaviour and data security support smoother exits and references." },
  ] satisfies EmployeeRightsCard[],
  hrConversationPrompts: [
    { audience: "HR", question: "How many vacation days do I accrue per year and when do unused days expire?", whyAsk: "Mid-year starts and 1 July carry-over rules vary by employer." },
    { audience: "HR", question: "What is the sick-reporting procedure and pay continuation during short illness?", whyAsk: "Dutch sick leave often differs from US or UK habits — confirm day one." },
    { audience: "HR", question: "Which contract articles cover hybrid work, equipment budget and working abroad?", whyAsk: "Policies vary — written answers prevent tax and permit surprises." },
    { audience: "HR", question: "How are part-time hours reflected in leave, pension and benefits?", whyAsk: "0.8 FTE roles need clarity on pro-rating in writing." },
    { audience: "HR", question: "What is the internal route for equal-treatment or harassment concerns?", whyAsk: "Know the grievance path before you need it — verify official guidance separately." },
    { audience: "HR", question: "If my role supports a permit, what employer steps apply when my employment changes?", whyAsk: "Orientation for sponsored routes — verify IND rules independently afterward." },
  ] satisfies EmployeeRightsConversationPrompt[],
  questionScenarios: [
    { profile: "Before first sick day", scenario: "Never used Dutch sick reporting; contract says call HR before 09:00", whatToCheck: "Use HR prompts table — save sick line and ask pay continuation rules in writing." },
    { profile: "Mid-year hire — holidays", scenario: "Starts 1 September; contract 25 days/year", whatToCheck: "Ask accrual and carry-over questions from HR prompts before booking Christmas travel." },
    { profile: "Hybrid abroad — December", scenario: "Wants 2 weeks from UK; contract silent on location", whatToCheck: "Hybrid and abroad-work HR prompts — written approval before booking flights." },
    { profile: "Promotion + IND threshold", scenario: "Offer €5,900/month; worries about sponsor salary rules", whatToCheck: "Workplace rights via HR; IND threshold checked separately on ind.nl." },
  ] satisfies EmployeeRightsScenarioRow[],
  expatQuestions: [
    { q: "What rights do employees have?", a: "Commonly: written contracts, paid leave, sick leave frameworks, equal treatment and safe workplaces. Example: 25 vacation days and sick reporting in your contract — read all articles." },
    { q: "What happens if I get sick?", a: "Report illness per employer procedure — often before 09:00 on day one. Example: flu Monday — call HR line, follow occupational health if absence continues." },
    { q: "How much holiday leave exists?", a: "Usually stated in your contract — often around four weeks for full-time roles, varying by sector. Example: 25 days plus public holiday policy — confirm accrual with HR." },
    { q: "Can employers discriminate?", a: "Equal treatment is generally protected — nationality, gender, religion, disability and age among protected grounds. Verify official guidance for reporting routes." },
    { q: "What rights do parents have?", a: "Maternity, partner and parental leave frameworks exist — pay and duration depend on choices and employer top-ups. Check Government.nl for current rules." },
    { q: "Do highly skilled migrants have the same protections?", a: "Generally yes for workplace rights; permit rules are separate. Example: same sick leave process as Dutch colleague; IND threshold checked independently." },
    { q: "How does remote work fit in?", a: "Policies vary — hybrid norms, equipment budgets and abroad-work approval. Example: 2 office days/week in team policy but not in contract — ask HR to confirm." },
    { q: "Are contracts required?", a: "Written employment contracts are standard in the Netherlands. Example: do not start work without signed terms on salary, hours and leave." },
  ],
  relatedWorkGuides: [
    { label: "Employment Contracts Netherlands", href: EMPLOYMENT_CONTRACT_NETHERLANDS_PATH, status: "live", description: "Read rights inside the full contract picture — notice, proeftijd and benefits." },
    { label: "Employee Benefits Netherlands", href: EMPLOYEE_BENEFITS_NETHERLANDS_PATH, status: "live", description: "Pension, holiday allowance, leave and expat packages beyond base salary." },
    { label: "Probation Period Netherlands", href: PROBATION_PERIOD_NETHERLANDS_PATH, status: "live", description: "Proeftijd rights and expectations during early employment." },
    { label: "Notice Period Netherlands", href: NOTICE_PERIOD_NETHERLANDS_PATH, status: "live", description: "End-of-employment timing when changing jobs or resigning." },
    { label: "Freelancing Netherlands", href: "/netherlands/jobs/freelancing-netherlands/", status: "live", description: "ZZP registration, taxes and client contracts when leaving employment." },
    { label: "Finding Jobs in the Netherlands", href: FINDING_JOBS_NETHERLANDS_PATH, status: "live", description: "Job search and offer review when comparing employer protections." },
  ] satisfies EmployeeRightsLink[],
  relatedGuideScenarios: [
    { profile: "Offer review — compliance officer", scenario: "Permanent contract with 25 leave days, 2-month proeftijd, pension after proeftijd", whatToCheck: "Employment contract guide + this rights page before signing." },
    { profile: "Illness + benefits question", scenario: "Long sick leave; asks whether pension contributions continue", whatToCheck: "Employee benefits guide for pay and pension during absence — verify with HR." },
    { profile: "Job change — rights comparison", scenario: "Two offers: scale-up vs corporate; different leave and hybrid policies", whatToCheck: "Compare total package using benefits and contract guides, not salary alone." },
    { profile: "Leaving during proeftijd", scenario: "Wants to exit week 5; confused about notice vs rights", whatToCheck: "Probation guide for proeftijd notice; notice guide if passed proeftijd." },
  ] satisfies EmployeeRightsScenarioRow[],
  serviceCategories: [
    { label: "Immigration & employment lawyers", href: IMMIGRATION_LAWYERS_PATH, description: "Contract review and permit questions — verify scope; not a substitute for HR on day-to-day rights." },
    { label: "Career coaches", href: CAREER_COACHES_PATH, description: "Workplace navigation, negotiation framing and transition planning — not legal advice." },
    { label: "Recruitment agencies", href: RECRUITMENT_AGENCIES_PATH, description: "Job search support when comparing employers and contract terms." },
    { label: "Immigration lawyers", href: IMMIGRATION_LAWYERS_PATH, description: "Permit continuity when employment changes — verify IND rules independently." },
    { label: "Relocation services", href: RELOCATION_SERVICES_PATH, description: "Family relocation aligned with employment start dates and contract timing." },
  ] satisfies ServiceCategory[],
  servicesWhenToUse: [
    "Immigration lawyers: when contract terms intersect with permit salary or sponsor duties.",
    "Career coaches: when you need help comparing offers or planning a professional exit.",
    "Recruitment agencies: when evaluating multiple employers' contract and benefits structures.",
    "Relocation services: when family moves depend on contract start dates and leave planning.",
  ],
  serviceScenarios: [
    { profile: "Contract review — senior hire", scenario: "Complex clawback and non-compete clauses in English contract", whatToCheck: "Lawyer scope for contract review — still use HR for internal policies." },
    { profile: "Illness + permit renewal", scenario: "Long sick leave overlapping IND renewal month", whatToCheck: "Separate HR sick process from immigration lawyer permit timing." },
    { profile: "Offer comparison — dual offers", scenario: "Corporate vs startup; different leave and hybrid policies", whatToCheck: "Career coach for negotiation framing — read contracts yourself first." },
    { profile: "Family relocation — HRBP", scenario: "Parental leave then international move; contract ends June", whatToCheck: "Relocation agency logistics vs employment last day — align timelines." },
  ] satisfies EmployeeRightsScenarioRow[],
  servicesNote:
    "Professional services may help with specific steps — they do not replace reading your contract, using official sources or obtaining qualified advice when needed.",
  faq: [
    { q: "What employee rights exist in the Netherlands?", a: "Commonly: written contracts, paid annual leave, sick leave frameworks, parental leave options, equal treatment protections and workplace safety standards. Exact terms are in your contract and official sources." },
    { q: "What happens if I get sick?", a: "Report illness through employer procedure — often on day one before a set time. Pay and reintegration depend on contract, CAO and statutory context — verify UWV guidance." },
    { q: "How much holiday leave do employees receive?", a: "Usually defined in your contract — full-time roles often receive around four weeks annually, varying by sector. Confirm accrual, carry-over and public holiday policy with HR." },
    { q: "Are employees protected from discrimination?", a: "Equal treatment in employment is generally protected on grounds including nationality, gender, religion, disability and age. Verify Netherlands Labour Authority guidance for current frameworks." },
    { q: "What parental rights exist?", a: "Maternity, partner and parental leave frameworks apply depending on circumstances. Pay and duration vary — check Government.nl and employer policy for current rules." },
    { q: "Do expats have the same protections?", a: "Workplace protections generally apply regardless of nationality. Permit rules are a separate topic on official IND sources — not fewer workplace rights by default." },
    { q: "Are contracts important?", a: "Yes. Written contracts typically define salary, hours, leave, notice, probation and benefits. Read before signing and keep copies of amendments." },
    { q: "How does remote work fit into employee rights?", a: "Hybrid and remote policies vary by employer — confirm written rules on location, equipment, expenses and working abroad before assuming flexibility." },
  ],
  faqScenarios: [
    { profile: "Holiday accrual — mid-year hire", scenario: "Starts 1 September; contract 25 days/year", whatToCheck: "Pro-rata vacation calculation for year one — HR email confirmation." },
    { profile: "Sick leave — week one", scenario: "Migraine Monday; never used Dutch sick process before", whatToCheck: "HR reporting line and pay continuation — UWV for longer absence orientation." },
    { profile: "Discrimination concern", scenario: "Repeated nationality comments in team meetings", whatToCheck: "Employer grievance route and official equal treatment guidance — seek qualified advice if needed." },
    { profile: "Remote from abroad", scenario: "Wants December work from US; employer silent on policy", whatToCheck: "Written approval before travel — tax and permit risks beyond basic rights." },
  ] satisfies EmployeeRightsScenarioRow[],
  faqNextSteps: [
    "Open your contract and highlight leave, sick leave, hours and conduct policies.",
    "Bookmark official sources below for illness, leave and equal treatment questions.",
    "Ask HR in writing when internal policy is unclear — keep replies for your records.",
  ],
  officialSources: [
    { label: "Government.nl", href: "https://www.government.nl/", description: "Central portal for Dutch government information on employment, leave and living in the Netherlands." },
    { label: "Business.gov.nl", href: "https://business.gov.nl/", description: "Practical business and employment information including contracts and hiring context." },
    { label: "UWV", href: "https://www.uwv.nl/", description: "Employee insurance and benefits institution — sick leave and reintegration orientation." },
    { label: "Netherlands Labour Authority", href: "https://www.nllabourauthority.nl/", description: "Workplace standards, safety and labour law enforcement information." },
    { label: "IND", href: "https://ind.nl/", description: "Immigration and permit rules when employment status affects residency — verify independently." },
    { label: "NederlandWereldwijd", href: "https://www.nederlandwereldwijd.nl/", description: "Consular and living-abroad information for international residents." },
  ],
  officialSourcesNote:
    "Employment regulations, workplace protections and labour rules can change over time. Always verify current requirements through official resources — this page is orientation only.",
  sourceVerificationTips: [
    "Government.nl and Business.gov.nl — employment, leave and contract context.",
    "UWV — sick leave, benefits and reintegration orientation.",
    "Netherlands Labour Authority — workplace safety and equal treatment frameworks.",
    "IND — permit rules when employment status affects residency (separate from general workplace rights).",
  ],
  officialSourcesScenarios: [
    { profile: "Sick leave beyond 6 weeks", scenario: "HR mentions occupational health and reintegration plan", whatToCheck: "UWV and Government.nl for process orientation — then confirm employer policy in writing." },
    { profile: "Equal treatment concern", scenario: "Passed over for promotion; wonders if nationality played a role", whatToCheck: "Netherlands Labour Authority and Government.nl equal-treatment pages — document facts before escalating." },
    { profile: "HSM job change", scenario: "New employer; same permit type; salary above threshold", whatToCheck: "IND for transfer rules; HR for workplace rights — two separate verification tracks." },
    { profile: "Contract vs handbook mismatch", scenario: "Handbook says 25 leave days; contract says 20", whatToCheck: "Business.gov.nl for contract hierarchy context — ask HR which document governs." },
  ] satisfies EmployeeRightsScenarioRow[],
  exploreNextTips: [
    "Start with the employment contract guide if you have not read your signed agreement end to end.",
    "Open employee benefits when comparing offers — pension and vakantiegeld change total value.",
    "Use finding jobs and expat salary guides when evaluating employer protections alongside pay.",
  ],
  exploreNextCards: [
    { label: "Employment Contracts", href: EMPLOYMENT_CONTRACT_NETHERLANDS_PATH, status: "live", description: "Contract types, proeftijd, notice and benefits in one place." },
    { label: "Dutch workplace culture", href: "/netherlands/jobs/dutch-workplace-culture/", status: "live", description: "Communication, feedback and day-to-day workplace expectations." },
    { label: "Employee Benefits", href: EMPLOYEE_BENEFITS_NETHERLANDS_PATH, status: "live", description: "Pension, vakantiegeld, leave and expat packages." },
    { label: "Finding Jobs", href: FINDING_JOBS_NETHERLANDS_PATH, status: "live", description: "Search, offers and employer comparison for international hires." },
    { label: "Expat Salary", href: EXPAT_SALARY_NETHERLANDS_PATH, status: "live", description: "Salary benchmarks and negotiation context." },
    { label: "Moving to the Netherlands", href: MOVING_HUB_PATH, status: "live", description: "Relocation hub connecting work, housing and visas." },
  ] satisfies EmployeeRightsLink[],
  planningLinks: [
    { label: "Employment contract guide", href: EMPLOYMENT_CONTRACT_NETHERLANDS_PATH, description: "Read rights alongside contract type, proeftijd and notice." },
    { label: "Dutch workplace culture guide", href: "/netherlands/jobs/dutch-workplace-culture/", description: "Adapt to communication, feedback and team norms alongside legal rights." },
    { label: "Employee benefits guide", href: EMPLOYEE_BENEFITS_NETHERLANDS_PATH, description: "Pension, holiday allowance and leave in total compensation." },
    { label: "Highly skilled migrant guide", href: HSM_VISA_PATH, description: "Permit context separate from general workplace rights." },
    { label: "Contract risk scanner", href: CONTRACT_RISK_SCANNER_PATH, description: "Orientation checklist before signing — not legal advice." },
  ] satisfies EmployeeRightsLink[],
  toolLink: { label: "Run contract risk scanner", href: CONTRACT_RISK_SCANNER_PATH },
} as const;

export type EmployeeRightsNetherlandsPage = typeof employeeRightsNetherlandsPage;
