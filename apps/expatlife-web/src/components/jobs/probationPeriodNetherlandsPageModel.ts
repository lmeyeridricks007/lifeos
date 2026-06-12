export const PROBATION_PERIOD_NETHERLANDS_PATH = "/netherlands/jobs/probation-period-netherlands/" as const;
export const PROBATION_PERIOD_AFFILIATE_PLACEMENT_ID = "nl-jobs-probation-period-support-providers" as const;

export const EMPLOYMENT_CONTRACT_NETHERLANDS_PATH = "/netherlands/jobs/employment-contract-netherlands/" as const;
export const FINDING_JOBS_NETHERLANDS_PATH = "/netherlands/jobs/finding-jobs-netherlands/" as const;
export const EXPAT_SALARY_NETHERLANDS_PATH = "/netherlands/jobs/expat-salary-netherlands/" as const;
export const EMPLOYEE_BENEFITS_NETHERLANDS_PATH = "/netherlands/jobs/employee-benefits-netherlands/" as const;
export const HSM_VISA_PATH = "/netherlands/visa/highly-skilled-migrant/" as const;
export const MORTGAGES_NETHERLANDS_EXPATS_PATH = "/netherlands/housing/mortgages-netherlands-expats/" as const;
export const MOVING_HUB_PATH = "/netherlands/moving-to-the-netherlands/" as const;
export const VISAS_HUB_PATH = "/netherlands/moving/visas-residency/" as const;
export const JOBS_HUB_PATH = "/netherlands/moving/working-in-the-netherlands/" as const;
export const RECRUITMENT_AGENCIES_PATH = "/netherlands/services/recruitment-agencies/" as const;
export const CAREER_COACHES_PATH = "/netherlands/services/career-coaches/" as const;
export const IMMIGRATION_LAWYERS_PATH = "/netherlands/services/immigration-lawyers/" as const;
export const RELOCATION_SERVICES_PATH = "/netherlands/services/relocation-services/" as const;
export const CONTRACT_RISK_SCANNER_PATH = "/netherlands/work/tools/employment-contract-risk-scanner/" as const;

export type ProbationPeriodLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type ProbationCard = {
  title: string;
  body: string;
};

export type ProbationScenarioRow = {
  profile: string;
  scenario: string;
  whatToCheck: string;
};

export type ProbationConversationPrompt = {
  audience: string;
  question: string;
  whyAsk: string;
};

export type ProbationDurationRow = {
  contractLength: string;
  maxProbation: string;
  planningNote: string;
};

export type ProbationComparisonRow = {
  label: string;
  duringProbation: string;
  afterProbation: string;
};

export type ServiceCategory = {
  label: string;
  href: string;
  description: string;
};

const INFOGRAPHIC_VERSION = "premium-v2";

const visual = (name: string, alt: string, caption: string) => ({
  src: `/images/infographics/netherlands-probation-period-${name}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const probationPeriodNetherlandsPage = {
  slug: "probation-period-netherlands",
  path: PROBATION_PERIOD_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2026-08-23",
  seo: {
    title: "Probation Period in the Netherlands (Proeftijd) | Expat Guide",
    description:
      "Learn how probation periods (proeftijd) work in the Netherlands, what expats should expect and how probation relates to employment contracts, visas and job stability.",
    keywords: [
      "probation period netherlands",
      "proeftijd netherlands",
      "probation period dutch employment contract",
      "probation period netherlands expat",
      "dutch probation period",
      "temporary contract probation",
      "employment contract netherlands",
      "expat job netherlands",
      "highly skilled migrant probation",
      "work contract netherlands",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Jobs · Onboarding",
    pageTitle: "Probation Period in the Netherlands",
    subtitle:
      "Understand how probation periods (proeftijd) work in Dutch employment contracts and what expats should expect when starting a new job.",
    primaryCta: { label: "Understand Probation Periods", href: "#intro" },
    secondaryCta: { label: "Explore Career Guides", href: JOBS_HUB_PATH },
    chips: ["Proeftijd basics", "Onboarding expectations", "Expat context", "Contract links"],
    image: {
      src: "/images/heroes/netherlands-probation-period-netherlands-hero-v2.png",
      alt: "Photorealistic editorial photo of an international professional being welcomed on their first day at a bright Amsterdam canal-side office, receiving an onboarding folder with proeftijd noted while canal houses and bicycles are visible through the window.",
    },
  },
  visuals: {
    intro: visual(
      "intro",
      "Infographic explaining what a Dutch probation period (proeftijd) is, typical contract placement and first-week actions for expats starting a new role.",
      "Start by locating the proeftijd clause — dates, notice rules and contract type should be read together."
    ),
    snapshot: visual(
      "snapshot",
      "Infographic snapshot of Dutch probation duration limits, notice patterns and contract-type links for expats planning around early employment.",
      "Statutory maximum durations depend on contract length — your agreement may be shorter but should not exceed legal caps."
    ),
    whyProbation: visual(
      "why-probation",
      "Infographic showing why employers and employees use probation periods in the Netherlands for performance and cultural fit.",
      "Probation is intended to benefit both sides when expectations are clear."
    ),
    expatExpectations: visual(
      "expat-expectations",
      "Infographic of what new employees typically experience during Dutch probation including onboarding, training and early feedback.",
      "Many companies treat probation as structured onboarding rather than constant testing."
    ),
    contractTypes: visual(
      "contract-types",
      "Infographic linking Dutch probation periods to permanent, temporary and fixed-term contracts with notice-during-vs-after comparison cues.",
      "Notice during proeftijd is often shorter — compare both clauses before you sign or resign."
    ),
    performance: visual(
      "performance",
      "Infographic of common performance evaluation areas during Dutch probation including communication, reliability and teamwork.",
      "Expectations vary by role — clarify success criteria with your manager early."
    ),
    workplaceCulture: visual(
      "workplace-culture",
      "Infographic explaining Dutch workplace culture during probation including direct communication, ownership and collaboration.",
      "Direct feedback is common in the Netherlands and usually practical, not personal."
    ),
    hsm: visual(
      "hsm",
      "Infographic connecting probation periods to highly skilled migrant employment including relocation and sponsorship planning context.",
      "Verify IND rules on official sources — this is not immigration advice."
    ),
    mortgages: visual(
      "mortgages",
      "Infographic explaining how probation may affect mortgage conversations for expats regarding income stability and contract type.",
      "Some buyers delay property plans until employment feels more established."
    ),
    misconceptions: visual(
      "misconceptions",
      "Infographic debunking common myths about Dutch probation periods for expats.",
      "Probation is normal — it does not automatically mean the employer expects failure."
    ),
    successTips: visual(
      "success-tips",
      "Infographic with practical tips for succeeding during a Dutch probation period as a new employee.",
      "Proactive communication and early feedback requests reduce uncertainty."
    ),
    mistakes: visual(
      "mistakes",
      "Infographic of common expat mistakes during Dutch probation periods including misreading direct feedback.",
      "Silence from managers rarely means everything is fine — ask for clarity."
    ),
    questions: visual(
      "questions",
      "Infographic of practical questions expats should ask HR and managers during Dutch probation onboarding about dates, notice and success criteria.",
      "Use these prompts in writing when possible — verbal answers alone create avoidable uncertainty."
    ),
    relatedGuides: visual(
      "related-guides",
      "Infographic linking probation research to employment contracts, finding jobs, salary and benefits guides.",
      "Probation sits inside the wider employment and relocation picture."
    ),
    services: visual(
      "services",
      "Infographic showing professional services that may help during Dutch probation planning including career coaches and relocation support.",
      "Services support planning — they do not replace reading your contract or official guidance."
    ),
    faq: visual(
      "faq",
      "Infographic FAQ overview for Dutch probation periods covering duration, visas, mortgages and expectations.",
      "Answers here are orientation only — verify contract-specific details in writing."
    ),
    officialSources: visual(
      "official-sources",
      "Infographic map of official Dutch employment sources including Government.nl, Business.gov.nl, UWV, IND and NederlandWereldwijd.",
      "Employment and permit rules change — check official sites for current requirements."
    ),
    exploreNext: visual(
      "explore-next",
      "Infographic connecting probation orientation to employment contracts, finding jobs, expat salary, mortgages and highly skilled migrant guides.",
      "Continue from probation basics into contracts, salary and relocation planning."
    ),
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#why-probation", label: "Why probation" },
    { href: "#expectations", label: "Expectations" },
    { href: "#contract-types", label: "Contracts" },
    { href: "#performance", label: "Performance" },
    { href: "#workplace-culture", label: "Culture" },
    { href: "#hsm", label: "HSM" },
    { href: "#mortgages", label: "Mortgages" },
    { href: "#misconceptions", label: "Myths" },
    { href: "#success-tips", label: "Tips" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#questions", label: "Questions" },
    { href: "#related-guides", label: "Guides" },
    { href: "#services", label: "Services" },
    { href: "#faq", label: "FAQ" },
    { href: "#official-sources", label: "Sources" },
    { href: "#explore-next", label: "Explore next" },
  ],
  intro: {
    heading: "What Is a Probation Period (Proeftijd)?",
    paragraphs: [
      "A probation period is an initial phase at the start of employment where both employer and employee evaluate whether the role, team and working relationship are a good fit. In Dutch contracts this is often called proeftijd.",
      "Many Dutch employment contracts include a probation period. For expats arriving from other countries, it can feel unfamiliar or stressful — but it is a normal part of many employment relationships in the Netherlands, not a sign that failure is expected.",
      "This guide explains practical expectations, common misconceptions and how probation connects to contracts, visas and relocation planning. It is orientation only — not legal or employment law advice.",
    ],
    keyPoints: [
      { title: "Mutual evaluation", body: "Both employer and employee assess fit during probation — it is not designed as a one-sided test." },
      { title: "Usually in writing", body: "Duration and conditions should appear in your employment contract or referenced HR documents." },
      { title: "Onboarding focus", body: "Many employers use probation to structure training, feedback and integration rather than constant scrutiny." },
      { title: "Expat context", body: "Relocation timing, visa routes and housing plans may intersect with early employment — plan holistically." },
    ] satisfies ProbationCard[],
    scenarios: [
      { profile: "First Dutch role after relocation", scenario: "2-month proeftijd on a 12-month fixed-term contract at €5,400/month gross", whatToCheck: "Exact probation end date, notice rules during proeftijd and whether HR confirms conversion expectations after probation." },
      { profile: "HS migrant joining tech employer", scenario: "1-month probation on indefinite contract with relocation package", whatToCheck: "Contract salary vs IND threshold, sponsor status and whether probation affects any repayment clauses on relocation support." },
      { profile: "Agency placement converting to direct hire", scenario: "6-week probation after transfer from staffing agency to client payroll", whatToCheck: "Whether probation resets benefits, pension participation and notice terms compared with the agency phase." },
      { profile: "Internal transfer with new proeftijd", scenario: "Moved to new team in same company; 1-month proeftijd on updated contract", whatToCheck: "Whether proeftijd is new or waived, and how notice differs from previous role." },
    ] satisfies ProbationScenarioRow[],
  },
  introPreStartSteps: [
    "Locate the proeftijd article in your contract and note start date, end date and any linked notice rules.",
    "Ask HR whether pension, holiday allowance and bonus eligibility start on day one or after probation.",
    "If a visa or relocation package depends on the role, confirm written terms before spending on housing deposits.",
  ],
  snapshotCards: [
    { label: "Written requirement", value: "Must be in contract", note: "Valid proeftijd is agreed in writing — verbal-only arrangements are not enough to rely on." },
    { label: "Typical durations", value: "1 or 2 months", note: "Many contracts use one month on shorter fixed terms and up to two months on indefinite or longer agreements — verify yours." },
    { label: "Legal maximum", value: "Depends on term", note: "Maximum allowed duration is linked to contract length — your clause cannot exceed statutory caps." },
    { label: "Notice during proeftijd", value: "Often shorter", note: "Employer and employee notice may differ from post-probation rules — read both side by side." },
    { label: "After proeftijd ends", value: "Terms may change", note: "Notice periods, benefits timing and review cadence may shift once probation completes." },
    { label: "Expat planning", value: "Cross-check early", note: "Visa, mortgage and lease timing often intersect with probation — plan before large commitments." },
  ],
  snapshotNextSteps: [
    "Compare your contract duration against the maximum probation table below — flag anything that looks longer than allowed.",
    "Write down notice rules for during proeftijd and after it ends on one page for quick reference.",
    "Schedule a 30-day check-in with your manager to confirm priorities and feedback rhythm.",
  ],
  durationNoticeHeading: "How Long Can Probation Last?",
  durationNoticeParagraphs: [
    "Dutch employment law sets maximum probation lengths based on your contract duration. Your written agreement can be shorter than the legal cap, but should not exceed it. Sector CAOs or collective agreements may add context — verify on official sources and in your contract.",
    "This table is orientation only. If your contract wording looks unusual, ask HR for clarification in writing rather than assuming home-country defaults.",
  ],
  durationNoticeRows: [
    { contractLength: "Fixed term of 6 months or less", maxProbation: "Usually not permitted", planningNote: "If proeftijd appears anyway, verify with HR and official Business.gov.nl guidance." },
    { contractLength: "Fixed term over 6 months up to 2 years", maxProbation: "Up to 1 month", planningNote: "Common for project roles — confirm end date does not extend probation informally." },
    { contractLength: "Indefinite contract or fixed term over 2 years", maxProbation: "Up to 2 months", planningNote: "Very common pattern — note exact calendar end date and post-probation notice." },
  ] satisfies ProbationDurationRow[],
  durationNoticeChecklist: [
    "Confirm proeftijd start date matches your employment start date unless the contract states otherwise.",
    "Check whether probation end date falls before any visa renewal or mortgage application deadline.",
    "Ask HR what changes on the day after proeftijd — notice, benefits and review frequency.",
    "If a manager mentions extending probation verbally, request an amended contract or written HR confirmation.",
  ],
  snapshotScenarios: [
    { profile: "Standard 2-month proeftijd", scenario: "Proeftijd 1 March – 30 April on indefinite contract; 1-week notice each way during proeftijd", whatToCheck: "Post-probation notice clause, pension start date and whether bonus is pro-rated in year one." },
    { profile: "1-month proeftijd on 18-month fixed term", scenario: "Project ends December 2027; proeftijd ends 30 April 2026", whatToCheck: "Probation ends well before contract end — confirm no informal extension and visa renewal timing." },
    { profile: "Probation extended verbally", scenario: "Manager says proeftijd continues into month 3 without contract amendment", whatToCheck: "Written contract end date only — ask HR to confirm legal proeftijd end in writing." },
    { profile: "6-month fixed-term with proeftijd clause", scenario: "Contract lists 2-month proeftijd on a 5-month role", whatToCheck: "Whether duration exceeds legal maximum for short fixed terms — verify with HR and Business.gov.nl." },
  ] satisfies ProbationScenarioRow[],
  noticeComparisonRows: [
    { label: "Employee resignation", duringProbation: "Often shorter — many contracts use days rather than months during proeftijd", afterProbation: "Usually longer — commonly one calendar month or more on permanent roles" },
    { label: "Employer termination", duringProbation: "May allow faster exit during proeftijd — exact wording varies by contract and CAO", afterProbation: "Stricter process and longer notice typically apply after probation ends" },
    { label: "Benefits and pension", duringProbation: "Some employers delay pension or bonus accrual until after proeftijd — check your contract", afterProbation: "Full package terms in your agreement usually apply once probation completes" },
    { label: "Performance reviews", duringProbation: "More frequent informal check-ins are common during onboarding", afterProbation: "Reviews may move to quarterly or annual cycles depending on employer policy" },
  ] satisfies ProbationComparisonRow[],
  afterProbationHeading: "What Usually Changes After Proeftijd Ends",
  afterProbationPoints: [
    "Notice periods for resignation or termination often increase — read the post-probation clause separately.",
    "Benefits such as pension participation or bonus eligibility may start or expand after probation if deferred in the contract.",
    "Informal probation anxiety often reduces — but performance expectations continue; ask how review cadence changes.",
    "Mortgage and relocation planning may become simpler once employment feels established — confirm with advisers independently.",
  ],
  afterProbationScenarios: [
    { profile: "Passed proeftijd on 1 May", scenario: "Notice changes from 1 week to 1 calendar month; pension starts same date", whatToCheck: "Updated payslip or HR letter showing pension deduction — not only verbal confirmation." },
    { profile: "Resignation planned right after proeftijd", scenario: "Wants to leave 15 June; proeftijd ended 31 May on permanent contract", whatToCheck: "Post-probation notice period and whether notice runs to calendar month-end." },
    { profile: "Bonus eligibility deferred", scenario: "Contract stated discretionary bonus only after proeftijd completes", whatToCheck: "Bonus plan timing, performance cycle and whether targets were set during proeftijd." },
  ] satisfies ProbationScenarioRow[],
  whyProbationHeading: "Why Employers Use Probation Periods",
  whyProbationParagraphs: [
    "Probation periods help employers evaluate performance, cultural fit and whether day-to-day expectations match the role description. They also give new hires time to understand processes, tools and team dynamics.",
    "For employees — including expats — probation is also a chance to evaluate the company, manager and role before committing long term. When communication is clear, the process is intended to benefit both parties.",
  ],
  whyProbationEmployerPoints: [
    "Assess job performance against agreed expectations",
    "Confirm cultural and team fit in a structured early window",
    "Align on tools, processes and communication norms",
    "Clarify role scope when reality differs from the job description",
  ],
  whyProbationEmployeePoints: [
    "Evaluate whether the role matches what was discussed in interviews",
    "Understand Dutch workplace norms and feedback styles",
    "Assess manager support, team collaboration and growth path",
    "Decide whether long-term employment feels realistic before deeper commitments",
  ],
  whyProbationChecklist: [
    "Treat probation as a two-way evaluation — note what you need from the employer to succeed.",
    "Compare daily role scope against the job description within the first two weeks.",
    "Identify one colleague outside your team who can explain informal norms and tools.",
    "Decide early whether visa, housing or family logistics still fit if the role underperforms expectations.",
  ],
  whyProbationScenarios: [
    { profile: "Role scope differs from interviews", scenario: "Project management role becomes mostly admin in week 2", whatToCheck: "Whether scope change is temporary onboarding or the ongoing role — ask manager and HR in writing." },
    { profile: "Culture mismatch, not performance", scenario: "Direct feedback feels harsh but work quality is fine", whatToCheck: "Whether coaching style is normal locally and how to request clearer expectations." },
    { profile: "Considering resignation during proeftijd", scenario: "Employee wants to leave after 3 weeks on 2-month probation", whatToCheck: "Employee notice during proeftijd in contract, relocation clawback and visa impact — verify independently." },
    { profile: "Employer reassessing fit", scenario: "Missed early deadlines due to delayed system access", whatToCheck: "Document blockers in writing — distinguish onboarding delays from performance concerns." },
  ] satisfies ProbationScenarioRow[],
  expectationsHeading: "What New Employees Typically Experience",
  expectationsParagraphs: [
    "During probation, many companies focus on onboarding rather than treating every week as a high-stakes evaluation. You may receive introductions, training sessions, documentation access and early check-ins with your manager or HR.",
    "Performance expectations still matter — but clarity, questions and regular feedback usually reduce uncertainty more than trying to guess what managers want.",
  ],
  expectationCards: [
    { title: "Onboarding sessions", body: "HR and team introductions, systems access and policy overviews are common in the first weeks." },
    { title: "Training and documentation", body: "Role-specific training, internal wikis and buddy systems help you ramp up without guessing processes." },
    { title: "Early feedback", body: "Short check-ins or structured reviews may happen more often during probation — use them to clarify expectations." },
    { title: "Team integration", body: "Lunch introductions, stand-ups and project shadowing help you understand collaboration norms." },
    { title: "Performance clarity", body: "Managers may outline priorities for the first 30, 60 and 90 days — ask for this in writing if it is verbal only." },
    { title: "HR touchpoints", body: "HR may confirm contract terms, benefits enrolment and probation end dates during onboarding." },
  ] satisfies ProbationCard[],
  expectationScenarios: [
    { profile: "Week 1 — corporate HQ", scenario: "HR onboarding, IT access delayed 3 days, buddy assigned on day 3", whatToCheck: "Which systems block delivery and who escalates access — flag early without appearing disengaged." },
    { profile: "Week 4 — scale-up product team", scenario: "First sprint demo; manager gives direct improvement notes in the meeting", whatToCheck: "Whether feedback is routine Dutch coaching — ask for one prioritized next step in writing." },
    { profile: "Mid-proeftijd — consulting firm", scenario: "Informal midpoint with manager; HR joins for contract and benefits questions", whatToCheck: "Written summary of gaps to close before proeftijd end date and any training still outstanding." },
    { profile: "Remote-first employer", scenario: "Most onboarding via video; first in-office day in week 3", whatToCheck: "Communication norms for async updates and when to escalate blockers during proeftijd." },
  ] satisfies ProbationScenarioRow[],
  contractTypesHeading: "How Probation Relates to Employment Contracts",
  contractTypesParagraphs: [
    "Probation periods may appear in permanent contracts, temporary contracts and fixed-term agreements. The contract type and probation wording are linked — duration, notice rules and renewal expectations should be read together.",
    "If you are reviewing an offer, open the employment contract guide to understand how proeftijd fits alongside contract duration, salary lines and notice periods.",
  ],
  contractTypesPoints: [
    "Permanent contracts may still include probation at the start of employment.",
    "Fixed-term and temporary contracts often include proeftijd — note whether probation ends before contract end date.",
    "Agency or staffing routes may reset probation when you transfer to direct employment.",
    "Probation notice rules may differ from post-probation notice — confirm both in writing.",
  ],
  contractTypeScenarios: [
    { profile: "Indefinite contract with 2-month proeftijd", scenario: "Permanent role after probation completes", whatToCheck: "Whether any conditions attach to passing probation and how notice changes after proeftijd ends." },
    { profile: "12-month fixed-term with 1-month proeftijd", scenario: "Project role with renewal uncertainty", whatToCheck: "Probation end date vs contract end date, extension language and visa renewal timing." },
    { profile: "Part-time 0.8 FTE start", scenario: "Proefperiode on reduced hours from day one", whatToCheck: "Whether performance expectations are pro-rated and how leave or pension accrues during probation." },
    { profile: "Agency to direct hire", scenario: "6 weeks on agency payroll, then transfer with new 1-month proeftijd", whatToCheck: "Whether benefits and pension reset on transfer and who signs the new contract." },
    { profile: "Second fixed-term in chain", scenario: "Third 12-month contract; 1-month proeftijd at each start", whatToCheck: "Whether proeftijd resets again and how chain-of-contract rules apply in your sector." },
  ] satisfies ProbationScenarioRow[],
  contractTypeReviewTips: [
    "Confirm whether proeftijd resets when moving from agency to direct employer payroll.",
    "Check if probation end date falls before contract end date on fixed-term roles.",
    "Compare notice during proeftijd with notice after — both should be in writing.",
    "Ask HR whether passing probation triggers pension, bonus or benefits changes.",
  ],
  performanceHeading: "How Success Is Usually Evaluated",
  performanceParagraphs: [
    "Employers often evaluate a mix of job performance, communication, reliability, teamwork, initiative and adaptability during probation. The weight given to each area varies significantly by role, sector and company culture.",
    "Rather than assuming home-country norms, ask your manager which outcomes matter most in the first months and how feedback will be shared.",
  ],
  performanceAreas: [
    { title: "Job performance", body: "Delivery against agreed tasks, quality standards and timelines for your role level." },
    { title: "Communication", body: "Clear updates, asking questions when blocked and responding to direct feedback constructively." },
    { title: "Reliability", body: "Attendance, punctuality and follow-through on commitments — especially during onboarding-heavy weeks." },
    { title: "Teamwork", body: "Collaboration across functions, respect for processes and constructive participation in meetings." },
    { title: "Initiative", body: "Proactive problem-solving within scope — balanced with asking before changing established workflows." },
    { title: "Adaptability", body: "Adjusting to Dutch workplace norms, tools and pace — particularly relevant for international hires." },
  ] satisfies ProbationCard[],
  performanceTips: [
    "Request a written or emailed summary of priorities for your first month.",
    "Schedule a brief weekly check-in with your manager during early probation.",
    "Document achievements and completed onboarding milestones — useful for feedback conversations.",
    "If expectations shift, ask whether the change is temporary onboarding or the ongoing standard.",
  ],
  performanceMilestones: [
    { profile: "Week 1–2", scenario: "Systems access, HR onboarding and team introductions", whatToCheck: "Whether you have the tools and documentation needed to deliver first tasks." },
    { profile: "Week 3–4", scenario: "First deliverables and initial feedback", whatToCheck: "Manager priorities still match what was discussed in week one." },
    { profile: "Mid-proeftijd", scenario: "Informal or formal midpoint review", whatToCheck: "Gaps to close before proeftijd ends and whether support is available." },
  ] satisfies ProbationScenarioRow[],
  performanceScenarios: [
    { profile: "Marketing coordinator", scenario: "Expected to run first campaign draft by week 4; feedback focuses on clarity not volume", whatToCheck: "Written success criteria — quality bar and approval steps, not only output count." },
    { profile: "Engineering hire", scenario: "First production commit targeted week 5 after security training", whatToCheck: "Whether delay in access affects evaluation — document blockers in weekly updates." },
    { profile: "Finance analyst", scenario: "Manager reviews accuracy and question-asking in first close cycle", whatToCheck: "Which mistakes are coaching vs performance concerns — ask for examples." },
  ] satisfies ProbationScenarioRow[],
  cultureHeading: "Understanding Dutch Workplace Culture",
  cultureParagraphs: [
    "Dutch workplaces often value direct communication, ownership, transparency, collaboration and independence. During probation, you may receive frank feedback sooner than in some other countries — this is usually intended to be practical, not personal.",
    "Understanding these norms early helps expats interpret feedback correctly and build trust with managers and colleagues.",
  ],
  cultureValues: [
    { title: "Direct communication", body: "Managers may state improvements plainly — treat this as clarity, not necessarily criticism of you as a person." },
    { title: "Ownership", body: "You may be expected to flag blockers early and propose solutions within your remit." },
    { title: "Transparency", body: "Open discussion about priorities and capacity is often preferred over silent struggle." },
    { title: "Collaboration", body: "Consensus and team input matter in many Dutch organisations — listen as actively as you contribute." },
    { title: "Independence", body: "Once oriented, many roles expect self-direction with periodic check-ins rather than constant supervision." },
  ] satisfies ProbationCard[],
  cultureTips: [
    "If feedback feels blunt, paraphrase it back to confirm you understood the actionable point.",
    "Ask which communication channel your team prefers for urgent vs non-urgent questions — Slack, email or in-person.",
    "Observe how senior colleagues run meetings — speaking order and preparation norms vary by company.",
    "Share progress briefly in stand-ups even when you are still learning — visibility reduces uncertainty.",
  ],
  cultureScenarios: [
    { profile: "Used to hierarchical deference", scenario: "Manager says 'just decide and tell me' in week 2", whatToCheck: "Decision boundaries for your level — what needs approval vs what you can own independently." },
    { profile: "Uncertain about lunch or social norms", scenario: "Team eats together but you are unsure about joining", whatToCheck: "Informal integration expectations — joining often helps probation relationships without affecting performance metrics." },
    { profile: "Direct feedback in week 3", scenario: "Manager says presentation 'needs to be sharper' in front of the team", whatToCheck: "Ask for one concrete example and revised standard — often coaching, not a termination signal." },
    { profile: "Hybrid schedule unclear", scenario: "Contract says hybrid but team is mostly in office Tue–Thu", whatToCheck: "Unwritten attendance expectations during proeftijd — clarify with manager early." },
  ] satisfies ProbationScenarioRow[],
  hsmHeading: "Probation Periods for Highly Skilled Migrants",
  hsmParagraphs: [
    "Many highly skilled migrants begin employment with probation periods like other employees. Relocation concerns, employment stability and sponsorship timing may feel more pressing when permits and family logistics depend on the role.",
    "Contract salary, employer sponsor status and employment continuity may matter for permit routes — verify current IND requirements on official sources. This guide does not provide immigration advice.",
  ],
  hsmPoints: [
    "Probation does not automatically invalidate sponsorship — but employment continuity and contract terms may matter for permits.",
    "Relocation packages sometimes include repayment clauses if you leave early — read these alongside proeftijd dates.",
    "If you plan to buy property, lenders may ask about probation status separately from visa type.",
    "Keep HR and immigration timelines aligned — informal verbal assurances are not substitutes for written contract terms.",
  ],
  hsmScenarios: [
    { profile: "HS migrant, 2-month proeftijd", scenario: "€6,100/month gross on recognised sponsor payroll", whatToCheck: "Salary threshold on IND site, probation end date and whether permit validity depends on continued employment." },
    { profile: "Family relocation during proeftijd", scenario: "Partner starts role with 1-month probation; primary visa tied to employment", whatToCheck: "What happens to dependants if employment ends during probation — verify on official IND guidance." },
    { profile: "Job loss in week 6 of proeftijd", scenario: "Role ends during 2-month proeftijd; permit valid 4 more months", whatToCheck: "Permit reaction time, job search window and whether new sponsor contract must start before expiry — verify IND rules." },
    { profile: "Salary just above threshold", scenario: "€5,650/month gross with 2-month proeftijd; threshold updated annually", whatToCheck: "Contract salary vs current IND minimum on official site — not interview verbal assurances." },
  ] satisfies ProbationScenarioRow[],
  hsmChecklist: [
    "Confirm employer recognised-sponsor status on the IND list before relying on HR assurances.",
    "Keep contract gross salary and proeftijd dates aligned with current IND threshold guidance.",
    "Ask HR in writing how job loss during proeftijd affects permit notification timelines.",
    "Read relocation repayment clauses alongside proeftijd — early exit may trigger clawbacks.",
  ],
  mortgagesHeading: "Can Probation Affect Mortgage Applications?",
  mortgagesParagraphs: [
    "Mortgage providers may consider employment status, contract type, income stability and whether you are still in probation when assessing borrowing capacity. Policies vary by lender, adviser and individual profile.",
    "Some expats choose to delay property purchases until employment feels more established or probation has completed — especially when combining a new role with relocation.",
  ],
  mortgagesPoints: [
    "Lenders may request recent payslips, employment contract and employer statements.",
    "Fixed-term contracts and probation may be reviewed together — not in isolation.",
    "Self-employed or agency-phase income may be treated differently from direct payroll employment.",
    "Speak to a mortgage adviser early if buying plans depend on your new contract.",
  ],
  mortgageScenarios: [
    { profile: "Buying during first month of proeftijd", scenario: "Permanent contract but probation not yet completed", whatToCheck: "Whether lender wants probation completed first or accepts employer statement about ongoing role." },
    { profile: "Fixed-term role with 2-month probation", scenario: "Wants mortgage approval before contract renewal", whatToCheck: "Renewal intent, income history and adviser guidance on timing — policies differ materially." },
    { profile: "Dual income — one in proeftijd", scenario: "Partner on permanent contract; primary earner in week 3 of 2-month proeftijd", whatToCheck: "How lender weights probation income vs established income — model both scenarios with adviser." },
    { profile: "Passed proeftijd, bidding on house", scenario: "Proeftijd ended 15 April; wants to bid in May", whatToCheck: "Recent payslips, employer statement and whether lender wants one full month post-proeftijd." },
  ] satisfies ProbationScenarioRow[],
  mortgagePlanningTips: [
    "Ask a mortgage adviser whether they require proeftijd completion before application or offer stage.",
    "Gather recent payslips, employment contract and any employer statement templates early.",
    "If buying with a partner, model scenarios where one income is still in probation.",
    "Delay non-refundable property deposits until lender pre-approval accounts for probation status.",
  ],
  mythCards: [
    { title: "Probation means the employer expects failure", body: "Probation is common in Dutch contracts — it structures early evaluation, not predicted termination." },
    { title: "Probation only benefits employers", body: "Employees also assess fit, culture and role accuracy during proeftijd." },
    { title: "Every company uses probation the same way", body: "Duration, feedback style and notice rules vary by employer, sector and contract type." },
    { title: "Expats are treated differently by default", body: "Treatment should follow contract and policy — ask HR if international hires have different onboarding paths." },
    { title: "Feedback means something is wrong", body: "Direct Dutch feedback during probation is often normal coaching, not a warning sign." },
    { title: "Probation automatically prevents mortgages", body: "Some lenders are cautious during proeftijd — others may proceed with extra documentation. Policies vary." },
  ] satisfies ProbationCard[],
  mythRealityChecks: [
    "Probation ending successfully is the normal outcome for most hires who communicate clearly.",
    "Direct feedback during proeftijd is often coaching — ask for examples and next steps.",
    "Written contract dates govern proeftijd — informal extensions without HR confirmation are risky to rely on.",
  ],
  mythScenarios: [
    { profile: "Myth: employer expects failure", scenario: "New hire anxious after blunt feedback in week 2 despite good output", whatToCheck: "Ask whether feedback is routine onboarding — request one example and one next step." },
    { profile: "Myth: feedback means trouble", scenario: "Manager lists three improvements in first monthly check-in", whatToCheck: "Whether cadence is normal locally — many Dutch teams give early direct coaching." },
    { profile: "Myth: no mortgage during proeftijd", scenario: "Lender initially hesitant; accepts file with employer statement", whatToCheck: "Adviser options vary — some lenders proceed with extra docs, others wait for proeftijd end." },
    { profile: "Myth: probation extended by manager", scenario: "Manager says 'let's extend proeftijd' without HR email", whatToCheck: "Only written contract dates count — ask HR to confirm legal end date." },
  ] satisfies ProbationScenarioRow[],
  successTips: [
    { title: "Ask questions early", body: "Clarify tools, processes and priorities in the first weeks rather than guessing." },
    { title: "Clarify expectations", body: "Request explicit success criteria for probation from your manager or HR." },
    { title: "Seek feedback regularly", body: "Short check-ins reduce surprises and show engagement." },
    { title: "Build relationships", body: "Introduce yourself across teams you will work with — not only your direct manager." },
    { title: "Understand company culture", body: "Observe meeting norms, communication channels and decision-making styles." },
    { title: "Communicate proactively", body: "Flag blockers early with proposed next steps — valued in many Dutch teams." },
    { title: "Document achievements", body: "Keep a simple log of completed tasks and positive feedback for review conversations." },
    { title: "Stay adaptable", body: "Adjust to local norms while bringing useful experience from previous countries." },
  ] satisfies ProbationCard[],
  successScenarios: [
    { profile: "Software engineer, week 3", scenario: "Blocked on internal tooling — raised in stand-up with proposed workaround", whatToCheck: "Manager confirms escalation path; visibility builds trust without over-apologising." },
    { profile: "Operations lead, week 5", scenario: "Emailed manager a 30/60-day priority summary for confirmation", whatToCheck: "Written alignment reduces guesswork — manager replies with corrections." },
    { profile: "Sales hire, week 6", scenario: "Requested short weekly check-in after quiet fortnight", whatToCheck: "Regular feedback rhythm prevents surprise at proeftijd end." },
    { profile: "HR business partner", scenario: "Documented completed onboarding modules and first project outcomes", whatToCheck: "Simple achievement log supports midpoint and end-of-proeftijd conversations." },
  ] satisfies ProbationScenarioRow[],
  mistakeCards: [
    { title: "Assuming silence means success", body: "If you receive little feedback, request a structured check-in rather than waiting until probation ends." },
    { title: "Not asking for feedback", body: "Managers may assume you are confident unless you ask for guidance." },
    { title: "Misinterpreting direct communication", body: "Plain Dutch feedback is often practical coaching — not personal criticism." },
    { title: "Ignoring company culture", body: "Workplace norms around meetings, email and hierarchy may differ from your previous country." },
    { title: "Comparing everything to home-country norms", body: "Useful experience matters — but local contract and culture context still governs." },
    { title: "Failing to clarify expectations", body: "Verbal promises without written role clarity create avoidable stress during proeftijd." },
    { title: "Underestimating onboarding importance", body: "Completing training and policy steps early prevents downstream issues." },
    { title: "Overthinking probation", body: "Focus on clear communication and steady performance rather than constant anxiety about edge cases." },
  ] satisfies ProbationCard[],
  mistakeRecoveryTips: [
    "If feedback surprised you, ask for one concrete example and one next step — not only general comments.",
    "When unsure about culture cues, ask a peer how they would handle the same situation locally.",
    "If expectations were verbal only, email a summary to your manager asking for confirmation or corrections.",
  ],
  mistakeScenarios: [
    { profile: "Assumed silence means success", scenario: "No structured feedback until week 7 of 8-week proeftijd", whatToCheck: "Book a check-in immediately — waiting until the last day creates avoidable uncertainty." },
    { profile: "Wrong notice on resignation", scenario: "Gave 2 weeks' notice; contract required 4 days during proeftijd", whatToCheck: "Employee notice during proeftijd in contract — home-country habits do not override Dutch wording." },
    { profile: "Ignored verbal extension", scenario: "Continued working past contract proeftijd end date because manager said so", whatToCheck: "HR written confirmation of end date and post-proeftijd notice before relying on verbal assurances." },
    { profile: "Skipped onboarding modules", scenario: "Missed compliance training deadline in week 2", whatToCheck: "Complete mandatory onboarding early — downstream HR issues can affect proeftijd reviews." },
  ] satisfies ProbationScenarioRow[],
  questionScenarios: [
    { profile: "Before day one", scenario: "Offer signed; start date in 3 weeks with 2-month proeftijd", whatToCheck: "Ask HR for exact proeftijd dates, notice during vs after and pension start in writing." },
    { profile: "Visa tied to role", scenario: "HS migrant starting 1-month proeftijd on sponsor payroll", whatToCheck: "Ask HR what happens to permit notification if employment ends during proeftijd — verify IND independently." },
    { profile: "Mid-proeftijd uncertainty", scenario: "Manager praise in meetings but no written priorities", whatToCheck: "Email three expected outcomes for remaining proeftijd weeks and ask for confirmation." },
  ] satisfies ProbationScenarioRow[],
  expatQuestions: [
    { q: "Is probation normal in the Netherlands?", a: "Yes. Many Dutch employment contracts include a proeftijd at the start of employment. It is a common structured evaluation period, not an unusual penalty." },
    { q: "How long does probation last?", a: "Duration should be stated in your contract and cannot exceed statutory maximums for your contract type. One or two months are common patterns — verify your exact dates." },
    { q: "Does probation affect visas?", a: "For sponsored routes, employment continuity and contract terms may matter. Verify current IND rules on official sources — this is not immigration advice." },
    { q: "Can I get a mortgage during probation?", a: "Some lenders review probation status alongside contract type and income stability. Policies vary — speak to a mortgage adviser about your profile." },
    { q: "What should I expect during probation?", a: "Onboarding, training, introductions and early feedback are typical. Many employers use probation to support integration rather than constant testing." },
    { q: "How is performance evaluated?", a: "Common areas include job delivery, communication, reliability, teamwork and adaptability — but priorities vary by role and employer." },
    { q: "Is direct feedback normal?", a: "Yes. Dutch workplaces often value direct communication. Feedback during probation is frequently practical and forward-looking." },
    { q: "What happens after probation?", a: "Notice rules and some benefits may change as defined in your contract. Ask HR for a written summary of differences after proeftijd ends." },
  ],
  hrConversationPrompts: [
    { audience: "HR", question: "What is the exact proeftijd end date and which contract article defines it?", whyAsk: "Calendar clarity prevents disputes about notice and benefits timing." },
    { audience: "HR", question: "How do employee and employer notice rules differ during vs after proeftijd?", whyAsk: "Resignation or termination timing affects visa, lease and mortgage plans." },
    { audience: "Manager", question: "What three outcomes define success in my first 30 and 60 days?", whyAsk: "Written or emailed priorities reduce guesswork during onboarding." },
    { audience: "Manager", question: "How often will we have feedback check-ins during probation?", whyAsk: "Sets expectations when direct Dutch feedback arrives without much preamble." },
    { audience: "HR", question: "When do pension, holiday allowance and bonus eligibility start?", whyAsk: "Some packages defer components until after proeftijd — affects total pay planning." },
    { audience: "HR", question: "If my role supports a permit, what happens if employment ends during proeftijd?", whyAsk: "Orientation for sponsored routes — verify IND rules independently afterward." },
  ] satisfies ProbationConversationPrompt[],
  relatedWorkGuides: [
    { label: "Employment Contracts Netherlands", href: EMPLOYMENT_CONTRACT_NETHERLANDS_PATH, status: "live", description: "How proeftijd fits into contract duration, notice and salary clauses." },
    { label: "Notice Period Netherlands", href: "/netherlands/jobs/notice-period-netherlands/", status: "live", description: "How notice periods work when employment ends — separate from proeftijd." },
    { label: "Finding Jobs in the Netherlands", href: FINDING_JOBS_NETHERLANDS_PATH, status: "live", description: "Job search context before you reach probation discussions." },
    { label: "Expat Salary Netherlands", href: EXPAT_SALARY_NETHERLANDS_PATH, status: "live", description: "Salary benchmarks to compare against your contract during onboarding." },
    { label: "Employee Benefits Netherlands", href: EMPLOYEE_BENEFITS_NETHERLANDS_PATH, status: "live", description: "Benefits enrolment often happens during early employment." },
    { label: "Highly Skilled Migrant Guide", href: HSM_VISA_PATH, status: "live", description: "Permit context when probation overlaps with sponsored employment." },
  ] satisfies ProbationPeriodLink[],
  serviceCategories: [
    { label: "Career coaches", href: CAREER_COACHES_PATH, description: "Onboarding communication, career planning and offer context — not legal contract review." },
    { label: "Recruitment agencies", href: RECRUITMENT_AGENCIES_PATH, description: "Role search support — not probation legal advice." },
    { label: "Immigration lawyers", href: IMMIGRATION_LAWYERS_PATH, description: "Permit questions when employment continuity matters — verify scope before engaging." },
    { label: "Relocation services", href: RELOCATION_SERVICES_PATH, description: "Move logistics aligned with contract start dates and family onboarding." },
  ] satisfies ServiceCategory[],
  servicesWhenToUse: [
    "Career coaches: when you need help framing feedback conversations or planning next steps if the role misfits.",
    "Immigration lawyers: when permit continuity depends on employment and HR answers feel unclear.",
    "Relocation services: when move timing, schooling or housing must align with proeftijd and contract start.",
    "Recruitment agencies: when you may need a new role quickly if employment ends during early proeftijd.",
  ],
  serviceScenarios: [
    { profile: "Role misfit during proeftijd", scenario: "Scope differs from interviews; considering resignation or internal move", whatToCheck: "Career coach for conversation framing — still read notice and clawback clauses yourself." },
    { profile: "Permit worry after HR meeting", scenario: "Unclear answers on job loss during proeftijd", whatToCheck: "Immigration lawyer for permit scope — verify against current IND guidance independently." },
    { profile: "Family arrives during proeftijd", scenario: "School and housing search overlaps with first month at work", whatToCheck: "Relocation service for logistics timing — separate from employment law advice." },
    { profile: "Sudden job search", scenario: "Employment ends in week 5 of 2-month proeftijd", whatToCheck: "Recruitment agency for search speed — notice and visa timing still governed by contract and IND rules." },
  ] satisfies ProbationScenarioRow[],
  servicesNote:
    "Professional services may help with specific steps — they do not replace reading your contract, using official sources or obtaining qualified advice when needed.",
  faq: [
    { q: "What is a probation period?", a: "An initial employment phase (proeftijd) where employer and employee evaluate fit. Valid terms must be agreed in writing in your contract." },
    { q: "How long can probation last in the Netherlands?", a: "Maximum duration depends on contract length — commonly up to one month on shorter fixed terms and up to two months on indefinite or longer agreements. Your contract may be shorter but should not exceed legal caps. Verify on Business.gov.nl and in your agreement." },
    { q: "Is probation normal in the Netherlands?", a: "Yes. Many Dutch contracts include probation at the start of employment. It is common practice, not an exceptional penalty." },
    { q: "What notice applies during probation?", a: "Notice during proeftijd is often shorter than after probation ends. Read both clauses in your contract — CAO or sector rules may also apply." },
    { q: "What should I expect during probation?", a: "Onboarding, training, introductions and early feedback are typical. Clarify success criteria with your manager in the first weeks." },
    { q: "How is performance evaluated?", a: "Employers often look at job delivery, communication, reliability, teamwork and adaptability — priorities vary by role." },
    { q: "Does probation affect visas?", a: "Employment continuity and contract terms may matter for sponsored routes. Verify current IND requirements on official sources." },
    { q: "Can I get a mortgage during probation?", a: "Lenders may consider probation status with contract type and income stability. Many buyers wait until proeftijd ends — confirm with a mortgage adviser." },
    { q: "What happens after probation?", a: "Notice periods and some benefits may change as defined in your contract. Ask HR for written confirmation of post-proeftijd terms." },
    { q: "Can probation be extended verbally?", a: "Rely on written contract terms. If a manager suggests extending proeftijd without a contract update, ask HR to confirm the legal end date in writing." },
    { q: "How can I succeed during probation?", a: "Ask questions early, seek regular feedback, clarify expectations in writing and communicate proactively with your manager." },
  ],
  faqScenarios: [
    { profile: "How long can proeftijd last?", scenario: "18-month fixed-term contract lists 1-month proeftijd starting 1 June", whatToCheck: "Matches common maximum for that contract length — still verify exact dates in writing." },
    { profile: "Notice during proeftijd", scenario: "Contract says 4 days employee notice during proeftijd, 1 month after", whatToCheck: "Compare both clauses before resigning — timing affects lease and next employer start date." },
    { profile: "Mortgage during proeftijd", scenario: "Permanent contract, week 2 of 2-month proeftijd, wants pre-approval", whatToCheck: "Ask adviser whether waiting until after proeftijd changes lender options." },
    { profile: "Verbal extension", scenario: "Manager suggests proeftijd continues; contract says end 30 June", whatToCheck: "FAQ answer: rely on written terms — HR confirmation required for any change." },
  ] satisfies ProbationScenarioRow[],
  officialSources: [
    { label: "Government.nl", href: "https://www.government.nl/", description: "Official Dutch government information on work, residence and public services." },
    { label: "Business.gov.nl", href: "https://business.gov.nl/", description: "Employment contracts, hiring and employer obligations in the Netherlands." },
    { label: "UWV", href: "https://www.uwv.nl/", description: "Employee insurance, benefits and labour market information." },
    { label: "IND", href: "https://ind.nl/", description: "Immigration and residence permit rules for employed migrants." },
    { label: "NederlandWereldwijd", href: "https://www.nederlandwereldwijd.nl/", description: "Government portal with official links for Dutch nationals abroad and incoming workers." },
  ],
  officialSourcesNote:
    "Employment rules, immigration requirements and contract regulations can change over time. Always verify current requirements through official resources.",
  relatedGuides: [
    { label: "Employment Contracts Netherlands", href: EMPLOYMENT_CONTRACT_NETHERLANDS_PATH, status: "live", description: "Read proeftijd alongside contract type, notice and salary clauses." },
    { label: "Notice Period Netherlands", href: "/netherlands/jobs/notice-period-netherlands/", status: "live", description: "Resignation and job-change timing — separate from proeftijd planning." },
    { label: "Finding Jobs in the Netherlands", href: FINDING_JOBS_NETHERLANDS_PATH, status: "live", description: "Job search before the contract and probation stage." },
    { label: "Expat Salary Netherlands", href: EXPAT_SALARY_NETHERLANDS_PATH, status: "live", description: "Compare offer lines during onboarding." },
    { label: "Mortgages for Expats", href: MORTGAGES_NETHERLANDS_EXPATS_PATH, status: "live", description: "How employment stability affects borrowing conversations." },
    { label: "Moving to the Netherlands", href: MOVING_HUB_PATH, status: "live", description: "Relocation hub connecting work, housing and visas." },
    { label: "Visas & residency", href: VISAS_HUB_PATH, status: "live", description: "Permit routes that may depend on continued employment." },
  ] satisfies ProbationPeriodLink[],
  relatedGuideScenarios: [
    { profile: "Still reviewing offer", scenario: "Signed offer with 2-month proeftijd; start in 2 weeks", whatToCheck: "Open employment contract guide for notice, duration and benefits clauses alongside proeftijd." },
    { profile: "Benchmarking salary", scenario: "€5,800/month gross during proeftijd on permanent contract", whatToCheck: "Use expat salary guide to compare sector benchmarks before accepting deferred bonus terms." },
    { profile: "Permit + probation overlap", scenario: "HS migrant with 1-month proeftijd starting next month", whatToCheck: "Highly skilled migrant guide for sponsor salary and employment continuity context." },
  ] satisfies ProbationScenarioRow[],
  exploreNextCards: [
    { label: "Employment Contracts", href: EMPLOYMENT_CONTRACT_NETHERLANDS_PATH, status: "live", description: "Understand proeftijd inside the full contract picture." },
    { label: "Finding Jobs", href: FINDING_JOBS_NETHERLANDS_PATH, status: "live", description: "Continue job search and offer planning." },
    { label: "Expat Salary", href: EXPAT_SALARY_NETHERLANDS_PATH, status: "live", description: "Benchmark salary lines from your new contract." },
    { label: "Mortgage Guide", href: MORTGAGES_NETHERLANDS_EXPATS_PATH, status: "live", description: "Plan property timing around employment stability." },
    { label: "Highly Skilled Migrant Guide", href: HSM_VISA_PATH, status: "live", description: "Permit context for sponsored roles with probation." },
  ] satisfies ProbationPeriodLink[],
  exploreNextTips: [
    "Open the employment contract guide to read proeftijd with notice and duration clauses",
    "Verify IND rules if your permit depends on continued employment",
    "Ask HR for probation end date and any change in notice terms after proeftijd",
  ],
  toolLink: {
    label: "Employment contract risk scanner",
    href: CONTRACT_RISK_SCANNER_PATH,
    description: "Paste contract text for a planning scan of common clause areas — not a legal verdict.",
  },
  planningLinks: [
    {
      label: "Employment contract guide",
      href: EMPLOYMENT_CONTRACT_NETHERLANDS_PATH,
      description: "Read proeftijd alongside notice periods, contract duration and salary lines.",
    },
    {
      label: "Expat salary guide",
      href: EXPAT_SALARY_NETHERLANDS_PATH,
      description: "Benchmark gross lines from your contract during onboarding.",
    },
    {
      label: "Employee benefits guide",
      href: EMPLOYEE_BENEFITS_NETHERLANDS_PATH,
      description: "Understand benefits enrolment that often happens during early employment.",
    },
  ] satisfies ProbationPeriodLink[],
  faqNextSteps: [
    "If visa questions remain, verify current IND rules before relying on verbal HR assurances.",
    "If proeftijd end date is unclear, ask HR for the exact contract article in writing.",
    "If mortgage plans depend on the role, speak to an adviser about probation timing early.",
    "Use the contract risk scanner when you want a structured pass over common clause areas.",
  ],
  sourceVerificationTips: [
    "Check publication or update dates on official pages before relying on summaries.",
    "Confirm contract-specific proeftijd rules with your employer in writing.",
    "Use Business.gov.nl for hiring context alongside Government.nl employment pages.",
  ],
  affiliatePlacementId: PROBATION_PERIOD_AFFILIATE_PLACEMENT_ID,
} as const;
