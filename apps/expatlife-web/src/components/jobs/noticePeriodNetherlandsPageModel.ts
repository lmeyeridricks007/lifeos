export const NOTICE_PERIOD_NETHERLANDS_PATH = "/netherlands/jobs/notice-period-netherlands/" as const;
export const NOTICE_PERIOD_AFFILIATE_PLACEMENT_ID = "nl-jobs-notice-period-support-providers" as const;

export const EMPLOYMENT_CONTRACT_NETHERLANDS_PATH = "/netherlands/jobs/employment-contract-netherlands/" as const;
export const PROBATION_PERIOD_NETHERLANDS_PATH = "/netherlands/jobs/probation-period-netherlands/" as const;
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
export const FINANCIAL_ADVISORS_PATH = "/netherlands/services/financial-advisors/" as const;
export const MORTGAGE_ADVISORS_PATH = "/netherlands/services/mortgage-advisors/" as const;
export const CONTRACT_RISK_SCANNER_PATH = "/netherlands/work/tools/employment-contract-risk-scanner/" as const;

export type NoticePeriodLink = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "comingSoon";
};

export type NoticeCard = {
  title: string;
  body: string;
};

export type NoticeScenarioRow = {
  profile: string;
  scenario: string;
  whatToCheck: string;
};

export type NoticeComparisonRow = {
  label: string;
  probationPeriod: string;
  noticePeriod: string;
};

export type NoticeNoticeRow = {
  topic: string;
  employeeNotice: string;
  employerNotice: string;
};

export type NoticeTimingRow = {
  label: string;
  duringProbation: string;
  afterProbation: string;
};

export type NoticeWorkedExampleRow = {
  profile: string;
  situation: string;
  likelyLastDay: string;
  whatToConfirm: string;
};

export type NoticeConversationPrompt = {
  audience: string;
  question: string;
  whyAsk: string;
};

export type ServiceCategory = {
  label: string;
  href: string;
  description: string;
};

const INFOGRAPHIC_VERSION = "premium-v3";

const visual = (name: string, alt: string, caption: string) => ({
  src: `/images/infographics/netherlands-notice-period-${name}-${INFOGRAPHIC_VERSION}.png`,
  alt,
  caption,
});

export const noticePeriodNetherlandsPage = {
  slug: "notice-period-netherlands",
  path: NOTICE_PERIOD_NETHERLANDS_PATH,
  publish: true,
  publishDate: "2026-08-26",
  seo: {
    title: "Notice Periods in the Netherlands | Expat Employment Guide",
    description:
      "Learn how notice periods work in the Netherlands, including employee notice periods, job changes, resignations, employment contracts and what expats should understand.",
    keywords: [
      "notice period netherlands",
      "resignation notice period netherlands",
      "dutch notice period",
      "employment notice period netherlands",
      "notice period work contract netherlands",
      "changing jobs netherlands",
      "resignation netherlands",
      "employment contract netherlands",
      "probation vs notice period",
      "highly skilled migrant resignation",
    ],
  },
  hero: {
    eyebrow: "Netherlands · Jobs · Career transitions",
    pageTitle: "Notice Periods in the Netherlands",
    subtitle:
      "Understand how notice periods work in Dutch employment contracts and what expats should know when changing jobs, relocating or planning their next career move.",
    primaryCta: { label: "Understand Notice Periods", href: "#intro" },
    secondaryCta: { label: "Explore Career Guides", href: JOBS_HUB_PATH },
    chips: ["Resignation timing", "Contract clauses", "Job changes", "Expat context"],
    image: {
      src: "/images/heroes/netherlands-notice-period-netherlands-hero-v3.png",
      alt: "Photorealistic editorial photo of an international professional in a bright Amsterdam office reviewing an employment agreement with the notice period clause highlighted, with Dutch canal houses and bicycles visible through the window — calm career-transition atmosphere, not termination imagery.",
    },
  },
  visuals: {
    intro: visual(
      "intro",
      "Infographic explaining what a notice period is in Dutch employment, the gap between notifying departure and employment ending, and why expats should read contract clauses early.",
      "Notice periods bridge resignation or termination notice and your last working day — dates should be in writing."
    ),
    snapshot: visual(
      "snapshot",
      "Infographic snapshot comparing notice during proeftijd vs after probation, with employee vs employer timing and job-change planning cues.",
      "Compare during-proeftijd notice with post-proeftijd notice before you resign or accept a start date."
    ),
    whyNotice: visual(
      "why-notice",
      "Infographic showing why notice periods exist for employers and employees during Dutch employment transitions, with handover and planning examples.",
      "Notice creates time for handover and parallel planning — ask HR to confirm your last working day in writing."
    ),
    employeeVsEmployer: visual(
      "employee-vs-employer",
      "Infographic comparing employee and employer notice obligations in Dutch employment contracts with asymmetric notice examples.",
      "Employee and employer notice may differ — highlight both articles and email HR for your calculated last day."
    ),
    contracts: visual(
      "contracts",
      "Infographic showing where notice periods appear in Dutch employment contracts alongside salary, duration, probation and benefits.",
      "Notice sits next to proeftijd and contract duration — review the full package together."
    ),
    probationVsNotice: visual(
      "probation-vs-notice",
      "Infographic comparison table of Dutch probation periods vs notice periods for expats who confuse proeftijd with resignation timing.",
      "Probation applies at the start; notice applies when employment ends — different clauses, different planning."
    ),
    changingJobs: visual(
      "changing-jobs",
      "Infographic of how notice periods affect job changes, start dates and negotiations between Dutch employers for international hires.",
      "Your notice timeline often sets the earliest realistic start date at a new employer."
    ),
    hsm: visual(
      "hsm",
      "Infographic connecting notice periods to highly skilled migrant employment transitions including sponsorship changes — orientation only, not immigration advice.",
      "Verify IND rules on official sources when employment continuity affects permits."
    ),
    internationalRelocation: visual(
      "international-relocation",
      "Infographic of expats leaving the Netherlands coordinating notice periods with housing, relocation logistics and international moves.",
      "Employment end dates often anchor lease, school and shipping timelines."
    ),
    mortgages: visual(
      "mortgages",
      "Infographic explaining how career transitions and notice periods may intersect with mortgage and financial planning for expats in the Netherlands.",
      "Income continuity during transitions may matter to lenders — confirm with advisers independently."
    ),
    misconceptions: visual(
      "misconceptions",
      "Infographic debunking common notice period myths for expats in the Netherlands.",
      "Home-country notice habits do not override written Dutch contract terms."
    ),
    transitionTips: visual(
      "transition-tips",
      "Infographic with practical tips for managing Dutch job transitions smoothly around notice periods and relocation timing.",
      "Written timelines from HR reduce last-minute surprises for you and your next employer."
    ),
    mistakes: visual(
      "mistakes",
      "Infographic of common expat mistakes around Dutch notice periods including confusing probation, ignoring contracts and poor relocation coordination.",
      "Read notice clauses before signing relocation deposits or accepting a new start date."
    ),
    questions: visual(
      "questions",
      "Infographic of HR and manager questions about Dutch notice periods, last working day calculation, leave during notice and permit timing.",
      "Email HR these prompts before resigning — written last-day confirmation protects your next role timeline."
    ),
    relatedGuides: visual(
      "related-guides",
      "Infographic linking notice period research to employment contracts, probation, finding jobs, salary and highly skilled migrant guides with reading order.",
      "Follow the reading order when notice intersects with contracts, proeftijd or permit planning."
    ),
    services: visual(
      "services",
      "Infographic showing professional services that may help during Dutch job transitions including career coaches, recruitment and immigration support.",
      "Services support planning — they do not replace reading your contract or official guidance."
    ),
    faq: visual(
      "faq",
      "Infographic FAQ overview for Dutch notice periods covering probation differences, visas, job changes and contracts.",
      "Answers here are orientation only — verify contract-specific details in writing."
    ),
    officialSources: visual(
      "official-sources",
      "Infographic map of official Dutch employment sources including Government.nl, Business.gov.nl, UWV, IND and NederlandWereldwijd.",
      "Employment and permit rules change — check official sites for current requirements."
    ),
    exploreNext: visual(
      "explore-next",
      "Infographic connecting notice period orientation to employment contracts, probation, finding jobs, expat salary and highly skilled migrant guides.",
      "Continue from notice basics into contracts, salary and relocation planning."
    ),
  },
  sectionNav: [
    { href: "#intro", label: "Overview" },
    { href: "#snapshot", label: "Snapshot" },
    { href: "#why-notice", label: "Why notice" },
    { href: "#employee-vs-employer", label: "Employee vs employer" },
    { href: "#contracts", label: "Contracts" },
    { href: "#probation-vs-notice", label: "Probation vs notice" },
    { href: "#changing-jobs", label: "Job changes" },
    { href: "#hsm", label: "HSM" },
    { href: "#international-relocation", label: "Leaving NL" },
    { href: "#mortgages", label: "Financial planning" },
    { href: "#misconceptions", label: "Myths" },
    { href: "#transition-tips", label: "Tips" },
    { href: "#mistakes", label: "Mistakes" },
    { href: "#questions", label: "Questions" },
    { href: "#related-guides", label: "Guides" },
    { href: "#services", label: "Services" },
    { href: "#faq", label: "FAQ" },
    { href: "#official-sources", label: "Sources" },
    { href: "#explore-next", label: "Explore next" },
  ],
  intro: {
    heading: "What Is a Notice Period?",
    paragraphs: [
      "A notice period is the amount of time that generally exists between notifying an employer of departure — or receiving notice that employment will end — and the official end of your employment relationship.",
      "Notice periods are commonly included in Dutch employment contracts. They give both sides time to plan handovers, recruit replacements and coordinate transitions rather than ending employment instantly.",
      "For expats, understanding notice periods matters when changing employers, accepting new opportunities, relocating internationally or managing visa sponsorship transitions. This guide explains practical awareness — not legal or employment law advice.",
    ],
    keyPoints: [
      { title: "Contract-defined timing", body: "Example: permanent contract Article 12 — 1 calendar month after proeftijd; separate Article 11 may allow 1 week during proeftijd only." },
      { title: "Two-way planning window", body: "Example: you resign 8 September with 1-month notice; employer may need 2 months if they end the role — both clauses can coexist." },
      { title: "Separate from probation", body: "Example: 2-month proeftijd ending 31 July does not set notice length — post-proeftijd notice might still be 1 month from 1 August onward." },
      { title: "Relocation and visa links", body: "Example: last working day 30 November affects lease break, IND job-search window and a 1 December start date a recruiter proposed." },
    ] satisfies NoticeCard[],
    scenarios: [
      { profile: "Software engineer — Amsterdam scale-up", scenario: "Permanent contract: 1-week notice during proeftijd, 1 calendar month after; resignation email sent Monday 9 June in week 5 of proeftijd", whatToCheck: "Probation notice article only — last day may be ~16 June, not 9 July. Confirm by email before telling the new employer." },
      { profile: "Project manager — 14-month fixed term", scenario: "Contract ends 31 December; employer gives 1-month notice on 1 November; employee had planned to resign in December anyway", whatToCheck: "Written end date on termination letter, final payslip in January and whether 30% ruling employer change needs planning." },
      { profile: "Data analyst — during proeftijd", scenario: "2-month proeftijd to 30 April; wants to accept competitor offer with 1 May start while still in week 6", whatToCheck: "During-proeftijd notice (often days, not months) vs post-proeftijd 1-month clause if they wait until 1 May." },
      { profile: "Family repatriation — Eindhoven", scenario: "1-month notice submitted 15 August; school in home country starts 1 September; shipping booked for 20 August", whatToCheck: "Whether employer accepts early release, garden leave or strict last day 15 September — contract governs unless HR agrees otherwise in writing." },
    ] satisfies NoticeScenarioRow[],
  },
  introPlanningSteps: [
    "Locate the notice period article in your contract — note employee notice, employer notice and any probation-specific notice.",
    "Ask HR whether notice starts from the date you inform them or from month-end (employer policy varies).",
    "If a visa or new role depends on timing, model best-case and worst-case last working days before committing deposits.",
  ],
  snapshotCards: [
    { label: "Usually in contracts", value: "Written terms", note: "Notice length and process are typically defined in your employment agreement or applicable CAO context." },
    { label: "Job changes", value: "Timing anchor", note: "Your notice timeline often sets the earliest realistic start date at a new employer." },
    { label: "Not probation", value: "Different clause", note: "Proeftijd applies at the start of employment; notice applies when employment ends." },
    { label: "Employee vs employer", value: "May differ", note: "Employee resignation notice and employer termination notice are not always identical." },
    { label: "Relocation", value: "Plan early", note: "Notice end dates often coordinate with lease, school and international move timelines." },
    { label: "Visa-sponsored roles", value: "Extra awareness", note: "Employment transitions may intersect with permit rules — verify on official IND sources." },
  ],
  snapshotNextSteps: [
    "Write employee and employer notice lengths on one page with contract article numbers.",
    "Compare notice during proeftijd (if any) with notice after probation ends.",
    "If changing jobs, share a realistic availability date with recruiters before verbal acceptances.",
  ],
  noticeTimingHeading: "Notice during proeftijd vs after it ends",
  noticeTimingParagraphs: [
    "Many Dutch contracts define shorter notice rules during probation and different rules once proeftijd completes. If you might resign early or plan an exit after passing probation, compare both clauses before you act.",
    "This table is orientation only — your contract, CAO or sector agreement governs exact timing.",
  ],
  noticeTimingRows: [
    { label: "Employee resignation", duringProbation: "Example: 4 days or 1 week from resignation email during 2-month proeftijd", afterProbation: "Example: 1 calendar month — resignation 3 June may mean last day 3 July or 30 June" },
    { label: "Employer termination", duringProbation: "Example: employer ends role in week 3 with short proeftijd notice only", afterProbation: "Example: employer gives 2-month notice while employee notice stays 1 month" },
    { label: "Last working day", duringProbation: "Resignation email 9 June + 1-week proeftijd notice → ask if last day is 16 June", afterProbation: "Same email after proeftijd → ask HR if last day is 9 July or 30 June (month-end rule)" },
    { label: "New employer start date", duringProbation: "Offer for 1 May start while still in April proeftijd — may be feasible with short proeftijd notice", afterProbation: "Recruiter wants 15 July start; 1-month notice from 3 June needs HR-confirmed last day first" },
  ] satisfies NoticeTimingRow[],
  noticeWorkedExamplesHeading: "Worked examples: resignation → likely last working day",
  noticeWorkedExamplesParagraphs: [
    "These scenarios show how the same contract wording can produce different last working days depending on employer calculation rules. Always ask HR to confirm your date in writing — examples here are illustrative, not legal advice.",
  ],
  noticeWorkedExamples: [
    { profile: "Permanent — calendar month from date", situation: "Post-proeftijd; Article 12 = 1 month; resignation email to HR 3 June", likelyLastDay: "Often 3 July if counted from resignation date", whatToConfirm: "Email HR: “Please confirm my official last working day if I resign today.”" },
    { profile: "Permanent — month-end rule", situation: "Same contract type; resignation 3 June; employer policy runs notice to end of calendar month", likelyLastDay: "Often 30 June instead of 3 July", whatToConfirm: "Ask whether notice ends on month-end or exact day-count — policy varies." },
    { profile: "During proeftijd — short notice", situation: "Week 5 of 2-month proeftijd; Article 11 = 1 week employee notice; resignation 9 June", likelyLastDay: "Often ~16 June if 7 calendar days from 9 June", whatToConfirm: "Use proeftijd notice article only — post-proeftijd month does not apply yet." },
    { profile: "Fixed-term — contract end date", situation: "12-month contract ends 31 August; no renewal; no separate resignation needed", likelyLastDay: "31 August unless employer gives earlier notice with written end date", whatToConfirm: "Written contract end date and whether employer notice changes the end date." },
    { profile: "Mutual early release", situation: "1-month notice from 1 September; new employer needs 15 September start; employee asks HR for release", likelyLastDay: "Only 15 September if employer agrees in writing — contract alone may require ~1 October", whatToConfirm: "Signed or emailed HR confirmation of agreed last day before accepting the new start date." },
  ] satisfies NoticeWorkedExampleRow[],
  snapshotScenarios: [
    { profile: "UK hire — assumed 2 weeks", scenario: "Permanent role in Rotterdam; contract Article 14 = 1 calendar month; verbal resignation planned for Friday", whatToCheck: "Home-country habit does not apply — read Article 14 and email HR for last day before telling the new employer." },
    { profile: "Passed proeftijd — planning Q4 exit", scenario: "Proeftijd ended 31 July; post-proeftijd notice 1 month; wants 1 November last day for relocation", whatToCheck: "Resignation timing working backward from 1 November — confirm with HR whether month-end rules apply." },
    { profile: "0.8 FTE logistics coordinator", scenario: "Notice clause says 1 month with no FTE qualifier; resignation planned mid-month", whatToCheck: "Whether notice is calendar-based full month or pro-rated — HR answer in writing." },
    { profile: "Recruiter pressure — immediate start", scenario: "Agency says “just give 2 weeks”; contract shows 1 month after proeftijd", whatToCheck: "Share contract-based availability (e.g. “earliest start after confirmed last day in October”) before signing offer letter." },
  ] satisfies NoticeScenarioRow[],
  whyNoticeHeading: "Why Notice Periods Exist",
  whyNoticeParagraphs: [
    "Notice periods help employers plan staffing, transfer responsibilities and recruit replacements without abrupt disruption. They also give employees time to complete projects, hand over knowledge and plan their next role.",
    "For international hires, that planning window often overlaps with relocation, housing and visa logistics. When timelines are clear in writing, transitions tend to feel less uncertain for everyone involved.",
  ],
  whyNoticeEmployerPoints: [
    "Plan workload coverage and knowledge transfer",
    "Recruit or redeploy team members before a role becomes vacant",
    "Manage client and project continuity during departures",
    "Align exit dates with payroll, benefits and compliance processes",
  ],
  whyNoticeEmployeePoints: [
    "Complete projects and document handovers professionally",
    "Plan the start date at a new employer realistically",
    "Coordinate housing, school and relocation moves",
    "Avoid burning bridges when references may matter later",
  ],
  whyNoticeScenarios: [
    { profile: "Client migration lead — The Hague", scenario: "2-month notice in contract; team needs 6 weeks to finish government client handover", whatToCheck: "Whether employer accepts shorter notice by mutual agreement — still confirm last day and handover scope in writing." },
    { profile: "Fintech product owner — Amsterdam", scenario: "1-month notice; signed offer with competitor for start in 3 weeks", whatToCheck: "Contract notice governs — negotiate new start date only after HR confirms realistic last working day." },
    { profile: "Employer reorganisation — Utrecht", scenario: "Role made redundant with 1-month employer notice on 1 October; employee on HS migrant permit", whatToCheck: "Written termination date, transition pay lines on final payslip and IND job-search orientation — verify independently." },
    { profile: "Consultant between projects", scenario: "Bench period during 1-month notice; manager expects full-time handover anyway", whatToCheck: "Whether garden leave or reduced hours are allowed during notice — employer policy, not assumption." },
  ] satisfies NoticeScenarioRow[],
  whyNoticeChecklist: [
    "Treat notice as planning time for handover — not as punishment for leaving.",
    "Ask HR to confirm whether garden leave or remote work is allowed during notice.",
    "If relocating, start lease and shipping conversations before submitting resignation when possible.",
  ],
  employeeVsEmployerHeading: "Employee vs Employer Notice Periods",
  employeeVsEmployerParagraphs: [
    "Employment contracts may define separate notice obligations for employees who resign and employers who end employment. The arrangements may not always be identical — one side might have a longer notice period than the other.",
    "Sector CAOs, collective agreements or employer policies can add context. This section explains concepts only — do not treat it as interpretation of your specific contract.",
  ],
  noticeObligationRows: [
    { topic: "Employee resignation", employeeNotice: "How far in advance you must notify HR or your manager when you choose to leave", employerNotice: "Not applicable — this row describes your obligation when resigning" },
    { topic: "Employer termination", employeeNotice: "Not applicable — this row describes employer obligation when ending employment", employerNotice: "How much warning an employer may need to provide before employment ends" },
    { topic: "During proeftijd", employeeNotice: "Often shorter than post-probation notice — many contracts use days or one week", employerNotice: "May also be shorter during probation — read the proeftijd article separately" },
    { topic: "After proeftijd", employeeNotice: "Commonly one calendar month on permanent roles — verify your contract", employerNotice: "Employer notice may differ from employee notice — compare both clauses" },
  ] satisfies NoticeNoticeRow[],
  employeeVsEmployerScenarios: [
    { profile: "Corporate — asymmetric notice", scenario: "Article 12: employee 1 month; Article 13: employer 2 months on same permanent contract", whatToCheck: "Both article numbers on your summary sheet — ask HR which applies if employer initiates exit vs you resign." },
    { profile: "Resignation email — 1 June", scenario: "Employee notice 1 calendar month; resignation email timestamped 09:15 on 1 June", whatToCheck: "HR reply confirming last day 1 July vs 30 June — month-end calculation varies by payroll team." },
    { profile: "Fixed-term non-renewal — 9-month role", scenario: "Employer email 1 July: contract ends 31 August; references 1-month employer notice clause", whatToCheck: "Whether employment ends 31 August regardless or earlier with notice — written end date on HR letter." },
    { profile: "Startup — same notice both ways", scenario: "Employee and employer both 1 month during and after proeftijd in a 50-person SaaS company", whatToCheck: "Still confirm during-proeftijd subsection — some startups shorten only employee notice in proeftijd." },
  ] satisfies NoticeScenarioRow[],
  employeeVsEmployerChecklist: [
    "Highlight employee notice, employer notice and during-proeftijd notice in your contract PDF.",
    "Note whether CAO or sector rules are referenced — ask HR which document governs.",
    "Before resigning, email HR to confirm calculated last working day in writing.",
  ],
  employeeVsEmployerCards: [
    { title: "Employee resignation notice", body: "How much lead time you must give when you resign — often one calendar month after proeftijd on permanent roles." },
    { title: "Employer termination notice", body: "How much warning an employer may need before ending employment — may differ from employee notice." },
    { title: "During-proeftijd notice", body: "Shorter notice rules that may apply only while probation is active — read as a separate clause." },
    { title: "Asymmetric notice pairs", body: "Many contracts set different lengths for employee vs employer — compare both before planning exit." },
  ] satisfies NoticeCard[],
  contractsHeading: "Where Notice Periods Appear in Contracts",
  contractsParagraphs: [
    "Notice periods are often included alongside salary information, contract duration, probation periods, benefits and working hours. Reading them together helps you understand how early employment and exit timing connect.",
    "If you are reviewing an offer or recently started, open the employment contract guide to see how notice fits with proeftijd, contract type and relocation clauses.",
  ],
  contractsPoints: [
    "Employee notice: article stating how you resign and minimum lead time",
    "Employer notice: article stating how the employer may end employment",
    "Probation notice: separate shorter rules that may apply during proeftijd",
    "Linked clauses: relocation repayment, bonus timing or non-compete references near notice articles",
  ],
  contractsClauseCards: [
    { title: "Employee notice article", body: "How you resign, minimum lead time and whether notice runs calendar-month or from resignation date." },
    { title: "Employer notice article", body: "How the employer may end employment — often longer than employee notice on permanent roles." },
    { title: "During-proeftijd notice", body: "Separate shorter rules that may apply only while probation is active — do not assume post-proeftijd timing." },
    { title: "Linked exit clauses", body: "Relocation repayment, bonus eligibility or non-compete lines that sit near notice articles." },
  ] satisfies NoticeCard[],
  contractsReviewFlow: [
    { title: "Locate all notice articles", body: "Find employee, employer and during-proeftijd notice in your contract PDF — note article numbers." },
    { title: "Compare with proeftijd dates", body: "Check whether notice rules change after proeftijd ends and how that affects resignation planning." },
    { title: "Email HR for last working day", body: "Before resigning, ask HR to confirm calculated last day in writing — month-end rules vary." },
    { title: "Scan linked exit clauses", body: "Review relocation, bonus and non-compete lines that may trigger on early departure." },
  ] satisfies NoticeCard[],
  contractsScenarios: [
    { profile: "Offer review — Big Four hire", scenario: "Permanent contract: 2-month proeftijd, 1-month employee notice, 2-month employer notice, pension after proeftijd", whatToCheck: "Notice during vs after proeftijd, bonus paid only after proeftijd and €8k relocation repayment if leaving within 12 months." },
    { profile: "Agency → direct — IT contractor", scenario: "6-month agency phase ends; new direct contract resets proeftijd and notice on 1 March", whatToCheck: "Whether notice clock and proeftijd restart on direct contract — who signs and which articles govern exit." },
    { profile: "Part-time 0.8 FTE — HR generalist", scenario: "Notice = 1 month with no FTE qualifier; works Mon–Thu only", whatToCheck: "Calendar month vs working-day calculation — ask HR before planning 0.8 FTE job change." },
    { profile: "Offer with garden leave clause", scenario: "Senior hire contract allows employer to send employee home during notice with full pay", whatToCheck: "When garden leave can be invoked and whether laptop access and handover still apply." },
  ] satisfies NoticeScenarioRow[],
  contractsReviewTips: [
    "Find all three notice areas if present: employee, employer and during-proeftijd.",
    "Note contract article numbers on a one-page summary for future reference.",
    "Check whether notice interacts with relocation repayment or bonus eligibility.",
    "Use the contract risk scanner for clause awareness — not legal verdicts.",
  ],
  probationVsNoticeHeading: "Probation Period vs Notice Period",
  probationVsNoticeParagraphs: [
    "Many expats confuse probation (proeftijd) with notice periods because both appear in employment contracts and both relate to timing. They serve different purposes at different stages of employment.",
    "Probation applies at the start of employment as an onboarding and evaluation phase. Notice applies when employment ends — whether you resign, the employer ends the role or a fixed term expires with notice.",
  ],
  probationVsNoticeRows: [
    { label: "When it applies", probationPeriod: "Start of employment — onboarding and evaluation phase", noticePeriod: "When employment ends — resignation, termination or transition" },
    { label: "Primary purpose", probationPeriod: "Assess fit, training and early performance alignment", noticePeriod: "Plan handover, staffing and departure logistics" },
    { label: "Typical duration", probationPeriod: "Often 1–2 months depending on contract type (statutory caps apply)", noticePeriod: "Often weeks to months — defined in contract or CAO context" },
    { label: "Expat planning", probationPeriod: "Visa, onboarding and early relocation settling", noticePeriod: "Next job start dates, leaving NL, housing exit and permit changes" },
  ] satisfies NoticeComparisonRow[],
  probationVsNoticeCards: [
    { title: "When each applies", body: "Proeftijd sits at employment start; notice applies when employment ends — different stages, different planning." },
    { title: "What each is for", body: "Probation assesses fit early; notice creates handover time when someone leaves." },
    { title: "Typical timing", body: "Proeftijd is often 1–2 months; notice is often weeks to months — both are contract-specific." },
    { title: "Expat planning angle", body: "Probation overlaps onboarding and visas; notice overlaps job search, housing exit and permit changes." },
  ] satisfies NoticeCard[],
  probationVsNoticeScenarios: [
    { profile: "Confusing duration with notice", scenario: "2-month proeftijd to 30 April; assumes resignation requires 2-month notice", whatToCheck: "Article 11 (proeftijd notice, e.g. 1 week) vs Article 12 (post-proeftijd 1 month) — separate lines in contract PDF." },
    { profile: "Week 4 resignation — pharma QA", scenario: "Resignation 18 March in week 4 of 2-month proeftijd; 1-week proeftijd notice applies", whatToCheck: "Last day ~25 March under short proeftijd notice — not 18 April post-proeftijd month." },
    { profile: "Exit planned day after proeftijd", scenario: "Proeftijd ends 31 May; wants to resign 1 June with 1-month post-proeftijd notice", whatToCheck: "Post-proeftijd clause from 1 June — confirm last day ~1 July or 30 June with HR." },
    { profile: "Employer ends role in proeftijd", scenario: "Employer terminates in week 6 using proeftijd notice only; employee had already searched for new role", whatToCheck: "Employer notice during proeftijd vs employee notice if roles were reversed — both articles matter." },
  ] satisfies NoticeScenarioRow[],
  changingJobsHeading: "Changing Employers and Notice Periods",
  changingJobsParagraphs: [
    "When changing jobs, notice periods may influence start dates, relocation planning, onboarding schedules and negotiations between current and future employers. Competitive sectors sometimes see parallel conversations about release dates.",
    "Recruiters and new employers often ask for your earliest availability — that usually depends on your current contract notice, not verbal assumptions from home-country practice.",
  ],
  changingJobsPoints: [
    "Earliest start date: typically after your notice period ends unless employer agrees otherwise in writing",
    "Overlap negotiations: some employers accept shorter notice by mutual agreement — confirm formally",
    "Fixed-term endings: may follow contract end dates rather than standard resignation notice",
    "Reference timing: professional exits during notice can affect references and network relationships",
  ],
  changingJobsScenarios: [
    { profile: "Competing offer — scale-up to corporate", scenario: "Current: 1-month notice from 1st of month; new employer wants 15 September start; today is 20 August", whatToCheck: "Whether last day can be 31 August or requires September — ask HR before signing new contract with 15 September start." },
    { profile: "Recruiter pressure — immediate start", scenario: "Agency email: “Client needs you Monday”; contract shows 1-month notice after proeftijd", whatToCheck: "Reply with contract-based availability; ask current HR about early release only if new offer depends on it." },
    { profile: "Internal transfer — same group", scenario: "Moving from Amsterdam BV to Eindhoven BV on 1 November; new contract with fresh 1-month notice", whatToCheck: "Whether old notice runs until transfer or new terms start 1 November — HR letter with both dates." },
    { profile: "Garden leave — bank compliance", scenario: "Employer sends employee home on full pay for full 1-month notice; laptop collected day 1", whatToCheck: "Written garden-leave policy, pay continuity and whether any handover is still expected remotely." },
    { profile: "Holiday during notice", scenario: "Employee has 8 days leave left; wants to use them in final notice month starting 1 October", whatToCheck: "HR policy on offsetting leave against notice — not automatic from UK/US practice." },
  ] satisfies NoticeScenarioRow[],
  changingJobsChecklist: [
    "Tell recruiters your realistic availability based on contract notice — not hope.",
    "Ask HR whether notice can start mid-month or only from month-end.",
    "Confirm whether unused leave can offset part of notice — policy varies.",
    "Align new employer start date only after you understand your last working day.",
  ],
  hsmHeading: "Notice Periods for Highly Skilled Migrants",
  hsmParagraphs: [
    "For visa-sponsored employees, employment transitions can involve sponsorship changes, employer switches and relocation planning that feel more urgent than for local hires. Notice timing may intersect with permit validity and job-search windows.",
    "Contract salary, employer sponsor status and employment continuity may matter for permit routes — verify current IND requirements on official sources. This guide does not provide immigration advice.",
  ],
  hsmPoints: [
    "Changing employers may require a new sponsor and permit process — plan before resigning.",
    "Notice end date may affect when a new employment relationship can start for permit purposes.",
    "Relocation repayment clauses sometimes trigger on early exit — read alongside notice articles.",
    "Keep HR timelines and official IND guidance aligned — verbal assurances are not substitutes for written terms.",
  ],
  hsmScenarios: [
    { profile: "Sponsor switch — recognised employer A → B", scenario: "1-month notice from 5 August; new recognised sponsor wants 1 September start for permit transfer", whatToCheck: "IND transfer timing, notice last day from HR email and signed employment contract start date alignment." },
    { profile: "Resignation — planning move abroad", scenario: "HS migrant on 1-month notice considering return to Singapore; permit valid to March next year", whatToCheck: "IND rules on employment end, job-search period and family permit — verify on ind.nl before resigning." },
    { profile: "Fixed-term ends — no renewal", scenario: "18-month contract ends 30 November; employer notice letter dated 1 October", whatToCheck: "Written end date, sponsor notification duties and whether permit validity ends with employment." },
    { profile: "Salary threshold concern", scenario: "New offer slightly below current IND threshold; still serving notice on old role", whatToCheck: "Whether new contract meets current highly skilled migrant salary requirements — verify IND independently." },
  ] satisfies NoticeScenarioRow[],
  hsmChecklist: [
    "Confirm recognised-sponsor status of any new employer on the IND list before resigning.",
    "Model notice last day against permit expiry and new contract start dates.",
    "Ask HR in writing how employment end affects sponsor notification — verify IND rules separately.",
    "Read relocation clawback clauses alongside notice before giving resignation.",
  ],
  internationalRelocationHeading: "Leaving the Netherlands and Notice Periods",
  internationalRelocationParagraphs: [
    "Expats leaving the Netherlands often coordinate notice periods with housing transitions, school moves, shipping timelines and international relocation logistics. Employment end dates frequently anchor the wider move plan.",
    "Notice timing may affect when you can terminate a lease, deregister from the municipality or align partner employment — plan buffer time beyond the minimum notice if possible.",
  ],
  internationalRelocationPoints: [
    "Align last working day with lease break or notice to landlord",
    "Coordinate school term endings and family relocation flights",
    "Plan BSN deregistration and health insurance switch timing",
    "Allow buffer for employer equipment return and final payslip processing",
  ],
  internationalRelocationScenarios: [
    { profile: "Family repatriation — US", scenario: "2-month notice from 1 August; children’s US school starts 25 August; shipping booked 20 August", whatToCheck: "Whether HR agrees early last day or garden leave; lease break vs employment last day." },
    { profile: "Garden leave + apartment handover", scenario: "1-month notice from 1 September; employer garden leave; Amsterdam lease requires 1-month tenant notice", whatToCheck: "Last working day vs lease notice deadline — two separate timelines to model." },
    { profile: "Partner on dependant permit", scenario: "Primary HS migrant resigns 15 October with 1-month notice; partner works part-time on dependant route", whatToCheck: "IND guidance on dependant permits when sponsor employment ends — verify before resignation." },
    { profile: "Remote finish then fly out", scenario: "Last 2 weeks of notice worked remotely from home country already packed", whatToCheck: "Employer policy on remote notice work, equipment return and BSN deregistration timing." },
  ] satisfies NoticeScenarioRow[],
  mortgagesHeading: "Employment Stability and Financial Planning",
  mortgagesParagraphs: [
    "Career transitions may affect mortgage applications, housing decisions, financial planning and relocation timelines. Lenders and advisers often look at employment continuity, contract type and income stability — not only headline salary.",
    "Some expats delay property purchases or refinancing until after a job change settles. Speak to mortgage and financial advisers about your profile — this is orientation only, not financial advice.",
  ],
  mortgagesPoints: [
    "Gap between jobs may affect borrowing capacity until new employment is established",
    "Notice period itself is not a legal barrier — lender policy varies by profile",
    "Fixed-term contracts and recent job changes may be reviewed together",
    "Financial advisers can help model scenarios — confirm fees and scope independently",
  ],
  mortgageScenarios: [
    { profile: "Buying during notice — dual income", scenario: "Couple applied in August; primary earner submitted 1-month resignation 1 September effective October", whatToCheck: "Lender may reassess — tell adviser before binding mortgage offer; partner income may carry file." },
    { profile: "Fixed-term ending — next role unsigned", scenario: "Contract ends 31 December; wants to buy in February after new job starts", whatToCheck: "Income history lender needs post-transition — model with mortgage adviser before non-refundable deposit." },
    { profile: "Probation passed — notice for better role", scenario: "Passed proeftijd 31 July; resigning 1 August with 1-month notice; new permanent contract from 1 October", whatToCheck: "How lender treats in-notice vs new-contract income — policies differ by bank." },
    { profile: "Garden leave — income continues", scenario: "Full pay during 1-month garden leave; purchase planned during notice month", whatToCheck: "Whether lender accepts garden-leave payslips and future employer contract together." },
  ] satisfies NoticeScenarioRow[],
  mortgagePlanningTips: [
    "Tell mortgage advisers if a job change is planned during the application window.",
    "Gather employment contract, recent payslips and any employer statement early.",
    "Avoid non-refundable property deposits until employment continuity is clear to lenders.",
    "Browse mortgage and financial adviser directories for scoped help — not guarantees.",
  ],
  mythCards: [
    { title: "Notice periods are always identical", body: "Employee and employer notice often differ — and probation notice may differ again." },
    { title: "Probation and notice are the same", body: "Proeftijd applies at employment start; notice applies when employment ends." },
    { title: "Expats have different legal notice rules", body: "Treatment follows contract and applicable frameworks — not nationality alone." },
    { title: "Notice only matters for senior staff", body: "Notice clauses appear across roles — junior hires still need to read theirs." },
    { title: "You can ignore contract clauses", body: "Written terms govern timing — home-country habits do not override Dutch contracts." },
    { title: "Notice never affects relocation", body: "Last working day often anchors lease, visa and international move planning." },
  ] satisfies NoticeCard[],
  mythRealityChecks: [
    "Written contract articles govern notice — informal HR chat does not replace them.",
    "Probation notice and post-probation notice are separate — read both before resigning.",
    "Visa and mortgage planning should use realistic notice end dates, not best-case guesses.",
  ],
  mythScenarios: [
    { profile: "UK hire — 2 weeks assumed", scenario: "Permanent contract Article 14 = 1 calendar month; employee gives “two weeks” verbally to manager", whatToCheck: "Written contract governs — HR may expect compliance with 1-month clause and correct last day." },
    { profile: "Proeftijd = notice length", scenario: "2-month proeftijd ending 30 April; employee tells recruiter they need 2-month notice", whatToCheck: "Open Article 11 vs 12 — post-proeftijd notice may be 1 month from 1 May onward." },
    { profile: "Verbal HR shortcut", scenario: "HR says “just work two more weeks” despite 1-month contract; no email confirmation", whatToCheck: "Ask HR to confirm last working day by email — verbal assurances do not override contract." },
    { profile: "Senior hire exception myth", scenario: "Recruiter: “C-level hires never serve notice in NL”; contract shows 3-month clause", whatToCheck: "Share realistic availability from contract before signing offer with tight start date." },
  ] satisfies NoticeScenarioRow[],
  transitionTips: [
    { title: "Review contract terms early", body: "Locate notice articles before you need them — during offer review or onboarding." },
    { title: "Clarify timelines in writing", body: "Ask HR to confirm last working day calculation and month-end rules." },
    { title: "Coordinate relocation plans", body: "Align notice with lease, school and shipping — build buffer time." },
    { title: "Communicate professionally", body: "Resignation conversations benefit from clarity and documented confirmation." },
    { title: "Understand onboarding schedules", body: "Share realistic availability with new employers based on notice, not hope." },
    { title: "Plan financial transitions", body: "Model income gaps, benefits end dates and housing costs during change." },
    { title: "Keep documentation organized", body: "Save resignation confirmation, payslips and contract excerpts." },
    { title: "Allow buffer time", body: "Unexpected handover tasks often extend busy notice periods slightly." },
  ] satisfies NoticeCard[],
  transitionScenarios: [
    { profile: "Professional resignation — SaaS PM", scenario: "1-month notice from 2 September with written handover doc listing Jira epics and client contacts", whatToCheck: "HR reply confirming last day 2 October (or 30 September) and laptop return slot." },
    { profile: "Parallel job search — data engineer", scenario: "Recruiter asks availability 15 October while employee still on 1-month notice from 1 September", whatToCheck: "Share range based on HR-confirmed last day — avoid verbal “I can start 15 October” before confirmation." },
    { profile: "Garden leave — financial services", scenario: "Employer activates garden leave 1 November for full notice month; Slack access removed", whatToCheck: "Written policy on pay, benefits and whether any compliance handover still required." },
    { profile: "Holiday offset — 8 days remaining", scenario: "Employee asks to take 8 days leave in final notice month starting 1 December", whatToCheck: "HR answer on whether leave reduces notice or runs parallel — payroll may differ." },
  ] satisfies NoticeScenarioRow[],
  hrConversationPrompts: [
    { audience: "HR", question: "Which contract article defines employee and employer notice — and any separate proeftijd notice?", whyAsk: "Article numbers prevent confusion when timing matters later." },
    { audience: "HR", question: "If I resign today, what is my official last working day?", whyAsk: "Month-end vs calendar-day calculation affects new job and relocation planning." },
    { audience: "HR", question: "Can unused holiday reduce part of my notice period?", whyAsk: "Policy varies — written confirmation avoids payroll surprises." },
    { audience: "Manager", question: "What handover deliverables do you expect before my last day?", whyAsk: "Clarity reduces conflict during notice and supports references." },
    { audience: "HR", question: "How does my resignation affect benefits, pension and final payslip timing?", whyAsk: "Benefits end dates may differ from last working day." },
    { audience: "HR", question: "If my role supports a permit, what employer notification steps apply when I resign?", whyAsk: "Orientation for sponsored routes — verify IND rules independently afterward." },
  ] satisfies NoticeConversationPrompt[],
  questionScenarios: [
    { profile: "Before resigning — offer signed", scenario: "Signed new contract starting 1 November; current role 1-month notice; today is 15 September", whatToCheck: "Calculate whether 1 November is feasible — email HR for last day before telling current employer." },
    { profile: "HS migrant — sponsor switch", scenario: "Notice from 1 August; new recognised sponsor contract 1 September; permit transfer in progress", whatToCheck: "Model HR last day vs IND transfer window — verify ind.nl guidance separately." },
    { profile: "Mortgage viewing during notice", scenario: "Viewing booked 20 September; serving 1-month notice from 1 September", whatToCheck: "Tell mortgage adviser about notice and planned employer change before making offer." },
    { profile: "Manager asks for exit interview date", scenario: "HR confirms last day 31 October; manager schedules exit interview 28 October", whatToCheck: "Align handover meetings with confirmed last day — keep HR email as reference." },
  ] satisfies NoticeScenarioRow[],
  mistakeCards: [
    { title: "Confusing probation with notice", body: "Proeftijd and notice govern different phases — read separate contract articles." },
    { title: "Ignoring contract details", body: "Assuming home-country notice length creates avoidable conflicts with employers." },
    { title: "Underestimating relocation timing", body: "Shipping, lease and school moves need more time than notice alone." },
    { title: "Assuming home-country practices", body: "Dutch contracts and CAO context govern — verify in writing." },
    { title: "Failing to coordinate start dates", body: "New employers need realistic availability based on your notice clause." },
    { title: "Overlooking visa implications", body: "Sponsored routes may need permit planning before resignation — verify IND rules." },
    { title: "Not planning housing transitions", body: "Last working day and lease break dates should align deliberately." },
    { title: "Waiting until the last minute", body: "Reading notice clauses during offer review prevents rushed decisions later." },
  ] satisfies NoticeCard[],
  mistakeRecoveryTips: [
    "If you already verbalised a start date, re-read notice and correct recruiters immediately with contract-based timing.",
    "When visa timing is unclear, verify IND rules before submitting resignation — not after.",
    "If relocation deposits are non-refundable, model notice last day before paying.",
  ],
  mistakeScenarios: [
    { profile: "Wrong notice — US 2 weeks", scenario: "Gave 2 weeks verbally; contract required 1 month after proeftijd; new employer told 15 October start", whatToCheck: "Email HR immediately; correct recruiter with contract-based last day — may need to renegotiate offer." },
    { profile: "Visa surprise — after resigning", scenario: "Resigned 1 June; learned mid-June that permit job-search clock started earlier than expected", whatToCheck: "IND official guidance on employment end — verify independently for next steps." },
    { profile: "Lease vs employment mismatch", scenario: "HR last day 15 September; Amsterdam lease requires tenant notice to 1 September for 1 October exit", whatToCheck: "Coordinate housing notice separately — employment notice does not auto-align with landlord rules." },
    { profile: "Relocation clawback shock", scenario: "Resigned during month 8; contract required repayment of €6k relocation if leaving before month 12", whatToCheck: "Relocation repayment clause near notice articles — model cost before resigning." },
  ] satisfies NoticeScenarioRow[],
  expatQuestions: [
    { q: "What is a notice period?", a: "The time between notifying departure (or receiving termination notice) and the official end of employment. Example: resignation email 3 June with 1-month notice may mean last day 3 July or 30 June — confirm with HR." },
    { q: "How is it different from probation?", a: "Probation (proeftijd) applies at the start — e.g. 2 months to 31 July. Notice applies when employment ends — e.g. 1 month after proeftijd from 1 August. Separate contract articles." },
    { q: "Does it affect job changes?", a: "Yes. Example: 1-month notice from 1 September often means earliest new start ~1 October unless HR agrees early release in writing." },
    { q: "Does it affect visas?", a: "Employment transitions may matter for sponsored routes. Example: HS migrant with last day 30 September and new sponsor contract 1 October — verify IND transfer rules on ind.nl." },
    { q: "Can it impact relocation plans?", a: "Often yes. Example: last working day 15 September vs Amsterdam lease requiring tenant notice by 1 September for 1 October exit — two separate timelines." },
    { q: "Is it included in contracts?", a: "Usually yes — e.g. Article 11 (1 week during proeftijd), Article 12 (1 month employee notice), Article 13 (2 months employer notice)." },
    { q: "Does it affect mortgages?", a: "Career transitions may matter to lenders. Example: mortgage application in September while primary earner serves 1-month notice from 1 August — tell your adviser before binding offer." },
    { q: "What should expats understand before resigning?", a: "Read notice articles, email HR for last working day (e.g. “If I resign today, what is my official last day?”), then model visa, housing and next-role dates before submitting resignation." },
  ],
  relatedWorkGuides: [
    { label: "Employment Contracts Netherlands", href: EMPLOYMENT_CONTRACT_NETHERLANDS_PATH, status: "live", description: "Read notice alongside contract type, proeftijd and salary clauses." },
    { label: "Probation Period Netherlands", href: PROBATION_PERIOD_NETHERLANDS_PATH, status: "live", description: "Understand proeftijd separately from notice periods." },
    { label: "Finding Jobs in the Netherlands", href: FINDING_JOBS_NETHERLANDS_PATH, status: "live", description: "Job search and offer timing when planning a transition." },
    { label: "Expat Salary Netherlands", href: EXPAT_SALARY_NETHERLANDS_PATH, status: "live", description: "Salary context when comparing offers during a job change." },
    { label: "Employee Benefits Netherlands", href: EMPLOYEE_BENEFITS_NETHERLANDS_PATH, status: "live", description: "Benefits end dates and transitions when employment ends." },
    { label: "Employee Rights Netherlands", href: "/netherlands/jobs/employee-rights-netherlands/", status: "live", description: "Workplace protections, leave, sick pay and equal treatment orientation." },
  ] satisfies NoticePeriodLink[],
  relatedGuideScenarios: [
    { profile: "Offer review — fintech PM, Amsterdam", scenario: "Permanent contract: 2-month proeftijd to 30 September, 1-month employee notice, €7,200/month, €5k relocation clawback if leaving before month 12", whatToCheck: "Open employment contract guide — read notice Articles 11–12 alongside proeftijd end date and clawback before signing." },
    { profile: "Planning Q3 resignation — UX lead", scenario: "Passed proeftijd 31 May; 1-month notice; wants 1 September last day for US relocation; recruiter pushing 15 August start", whatToCheck: "Notice guide for resignation timing + finding jobs guide for realistic availability dates with recruiters." },
    { profile: "Confused by proeftijd — backend engineer", scenario: "2-month proeftijd ending 30 April; told recruiter they need “2 months’ notice” because of proeftijd length", whatToCheck: "Probation guide for proeftijd end date; notice guide for post-proeftijd 1-month clause from 1 May onward." },
    { profile: "Benefits end date — HR business partner", scenario: "1-month notice from 1 October; company car and health allowance listed in contract benefits section", whatToCheck: "Employee benefits guide for what ends on last working day vs month-end payroll cut-off." },
  ] satisfies NoticeScenarioRow[],
  serviceCategories: [
    { label: "Career coaches", href: CAREER_COACHES_PATH, description: "Transition planning, interview prep and resignation communication framing — not legal advice." },
    { label: "Recruitment agencies", href: RECRUITMENT_AGENCIES_PATH, description: "Job search support when planning your next role after notice." },
    { label: "Immigration lawyers", href: IMMIGRATION_LAWYERS_PATH, description: "Permit questions when employment changes — verify scope before engaging." },
    { label: "Relocation services", href: RELOCATION_SERVICES_PATH, description: "Move logistics aligned with employment end dates and family transitions." },
    { label: "Financial advisors", href: FINANCIAL_ADVISORS_PATH, description: "Financial planning during career transitions — not employment law advice." },
  ] satisfies ServiceCategory[],
  servicesWhenToUse: [
    "Career coaches: when you need help planning a professional exit or next-role strategy.",
    "Recruitment agencies: when job search timing must align with notice end dates.",
    "Immigration lawyers: when permit continuity depends on employment transitions.",
    "Relocation services: when leaving the Netherlands or moving cities during notice.",
    "Financial advisers: when mortgages or major financial decisions intersect with job changes.",
  ],
  serviceScenarios: [
    { profile: "Planned resignation — marketing lead", scenario: "1-month notice from 1 October; wants coaching on resignation email and stakeholder messaging", whatToCheck: "Career coach scope — still read notice, clawback and non-compete clauses yourself." },
    { profile: "Sponsor switch — DevOps engineer", scenario: "Notice ends 15 November; immigration lawyer engaged for permit transfer timing", whatToCheck: "Lawyer scope vs IND self-service info — verify official rules independently." },
    { profile: "Leaving NL — family of four", scenario: "Last working day 30 June; relocation agency booked for 5 July flight and school enrolment", whatToCheck: "Align agency timeline with HR-confirmed last day and lease break date." },
    { profile: "Mortgage + job change — dual career household", scenario: "Financial adviser session booked while primary earner serves 1-month notice", whatToCheck: "Adviser fees and whether session covers employment transition only — not legal notice advice." },
  ] satisfies NoticeScenarioRow[],
  servicesNote:
    "Professional services may help with specific steps — they do not replace reading your contract, using official sources or obtaining qualified advice when needed.",
  faq: [
    { q: "What is a notice period?", a: "The time between notifying departure or receiving termination notice and the official end of employment. Example: 1-month clause with resignation 5 June — ask HR if last day is 5 July or 30 June." },
    { q: "Is notice period different from probation?", a: "Yes. Proeftijd runs at the start (e.g. to 30 April). Notice runs when employment ends (e.g. 1 week during proeftijd vs 1 month after). Different articles." },
    { q: "Does notice period affect job changes?", a: "Often yes. Example: recruiter wants 15 October start while you serve 1-month notice from 1 September — share HR-confirmed last day before accepting." },
    { q: "Does notice period affect visa sponsorship?", a: "Employment transitions may matter. Example: sponsor switch with old role ending 30 September and new contract 1 October — verify IND rules independently." },
    { q: "Where is notice period defined?", a: "Usually in your employment contract — e.g. employee notice Article 12, employer notice Article 13, proeftijd notice Article 11." },
    { q: "Can notice period affect relocation?", a: "Yes. Example: HR last day 30 June; family flight booked 5 July; lease break requires 1-month tenant notice — align all three timelines." },
    { q: "Does it affect mortgage applications?", a: "Career transitions may matter to lenders. Example: buying during 1-month notice — disclose planned employer change to your mortgage adviser early." },
    { q: "What should expats understand about notice periods?", a: "Read notice clauses early, email HR for written last-day confirmation, and model visa, housing and next-role dates before resigning — home-country habits (e.g. 2 weeks) rarely apply." },
  ],
  faqScenarios: [
    { profile: "Resignation timing — 5 June", scenario: "1-month post-proeftijd notice; resignation email sent 09:00 on 5 June", whatToCheck: "HR confirmation: last day 5 July vs 30 June — do not plan move until answered." },
    { profile: "Still in proeftijd — week 3", scenario: "Proeftijd to 30 April; resignation 12 March; 1-week proeftijd notice in contract", whatToCheck: "Short proeftijd notice applies — last day ~19 March, not 12 April." },
    { profile: "HS migrant — sponsor change", scenario: "Notice last day 30 September; new sponsor contract 1 October; transfer application planned", whatToCheck: "IND transfer rules and gap between employments — verify on ind.nl." },
    { profile: "Employer ends role — not resignation", scenario: "Employer 1-month notice letter 1 August; employee did not resign", whatToCheck: "Employer notice article and written termination date — different planning path from resignation." },
  ] satisfies NoticeScenarioRow[],
  faqNextSteps: [
    "Open your contract and highlight employee, employer and probation notice articles.",
    "Email HR to confirm how last working day is calculated for your notice length.",
    "If sponsored, verify IND rules before submitting resignation.",
  ],
  officialSources: [
    { label: "Government.nl", href: "https://www.government.nl/", description: "Official Dutch government information on work, residence and public services." },
    { label: "Business.gov.nl", href: "https://business.gov.nl/", description: "Employment contracts, hiring and employer obligations in the Netherlands." },
    { label: "UWV", href: "https://www.uwv.nl/", description: "Employee insurance, benefits and labour market information." },
    { label: "IND", href: "https://ind.nl/", description: "Immigration and residence permit rules for employed migrants." },
    { label: "NederlandWereldwijd", href: "https://www.nederlandwereldwijd.nl/", description: "Government portal with official links for Dutch nationals abroad and incoming workers." },
  ],
  officialSourcesNote:
    "Employment regulations, immigration requirements and workplace practices can change over time. Always verify current information through official sources.",
  sourceVerificationTips: [
    "Cross-check contract topics on Business.gov.nl before relying on informal HR summaries.",
    "Verify IND permit rules on ind.nl when employment end affects sponsorship.",
    "Use UWV and Government.nl for broader employment and benefits context — not contract interpretation.",
  ],
  relatedGuides: [
    { label: "Employment Contracts Netherlands", href: EMPLOYMENT_CONTRACT_NETHERLANDS_PATH, status: "live", description: "Notice clauses inside the full contract picture." },
    { label: "Probation Period Netherlands", href: PROBATION_PERIOD_NETHERLANDS_PATH, status: "live", description: "Proeftijd vs notice — separate planning topics." },
    { label: "Finding Jobs in the Netherlands", href: FINDING_JOBS_NETHERLANDS_PATH, status: "live", description: "Job search when planning a transition." },
    { label: "Expat Salary Netherlands", href: EXPAT_SALARY_NETHERLANDS_PATH, status: "live", description: "Compare offers during a job change." },
    { label: "Moving to the Netherlands", href: MOVING_HUB_PATH, status: "live", description: "Relocation hub connecting work, housing and visas." },
    { label: "Visas & residency", href: VISAS_HUB_PATH, status: "live", description: "Permit routes that may depend on continued employment." },
  ] satisfies NoticePeriodLink[],
  exploreNextCards: [
    { label: "Employment Contracts", href: EMPLOYMENT_CONTRACT_NETHERLANDS_PATH, status: "live", description: "Read notice inside the full contract picture." },
    { label: "Probation Period", href: PROBATION_PERIOD_NETHERLANDS_PATH, status: "live", description: "Understand proeftijd separately from notice." },
    { label: "Finding Jobs", href: FINDING_JOBS_NETHERLANDS_PATH, status: "live", description: "Continue job search and transition planning." },
    { label: "Expat Salary", href: EXPAT_SALARY_NETHERLANDS_PATH, status: "live", description: "Benchmark salary lines when changing roles." },
    { label: "Highly Skilled Migrant Guide", href: HSM_VISA_PATH, status: "live", description: "Permit context when notice overlaps with sponsor changes." },
  ] satisfies NoticePeriodLink[],
  exploreNextTips: [
    "Open the employment contract guide to read notice with proeftijd and duration clauses",
    "Verify IND rules if your permit depends on continued employment",
    "Share contract-based availability dates with recruiters before accepting offers",
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
      description: "Read notice alongside proeftijd, contract duration and salary lines.",
    },
    {
      label: "Probation period guide",
      href: PROBATION_PERIOD_NETHERLANDS_PATH,
      description: "Separate proeftijd planning from notice and resignation timing.",
    },
    {
      label: "Finding jobs guide",
      href: FINDING_JOBS_NETHERLANDS_PATH,
      description: "Job search strategy when planning your next role after notice.",
    },
  ] satisfies NoticePeriodLink[],
  affiliatePlacementId: NOTICE_PERIOD_AFFILIATE_PLACEMENT_ID,
} as const;
