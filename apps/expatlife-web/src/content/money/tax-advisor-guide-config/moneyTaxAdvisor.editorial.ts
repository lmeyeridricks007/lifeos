/**
 * Editorial config for the Netherlands tax-advisor orientation guide.
 * No numeric tax rules. Route keys on scorecard rows resolve in `buildTaxAdvisorsNlPageModel`.
 */

export const moneyTaxAdvisorTrustCallouts = [
  {
    id: "not-advice",
    label: "Not tax advice",
    body: "Editorial orientation only — not a review of your file, letters, immigration status, or a substitute for Belastingdienst or a signed mandate.",
  },
  {
    id: "optional",
    label: "Paid help is optional",
    body: "Not everyone needs a tax adviser. Routine questions often stop at official pages, employer payroll, and free tools — firms are one path when you still want scoped help.",
  },
  {
    id: "verify",
    label: "Verify scope & price",
    body: "Before you pay, confirm who does the work, what is in scope, how documents are shared, and fees in writing.",
  },
] as const;

export const moneyTaxAdvisorNeedBuckets = [
  {
    id: "diy",
    title: "Probably DIY / tools first",
    body: "Straightforward Dutch employment — payslip vocabulary, net salary planning, no foreign lines.",
    bullets: [
      "Use salary net + payslip tools when payroll looks normal.",
      "Read how taxes work when wording, not your facts, is the blocker.",
    ] as const,
  },
  {
    id: "check",
    title: "Worth checking",
    body: "First return, 30% uncertainty, partner / allowance questions, or Box 3 you cannot map to official language yet.",
    bullets: [
      "Stack tax return + expat taxes guides with Belastingdienst pages for your year.",
      "A short call may be enough — full representation is not automatic.",
    ] as const,
  },
  {
    id: "advice",
    title: "Strongly consider advice",
    body: "Stacked facts: foreign income or assets, arrival/departure years, cross-border remote work, ZZP or mixed income, unclear residency, or 30% lines you cannot reconcile.",
    bullets: [
      "Bring a timeline and documents before you book — less hourly churn.",
      "When two countries matter, prefer firms used to expat files.",
    ] as const,
  },
] as const;

/** Triage scorecard rows — `toolKeys` resolve via `resolveTaxGuideTool` in the page model. */
const moneyTaxAdvisorScorecardRows = [
  {
    id: "sc-employment",
    situation: "Simple Dutch employment only",
    complexity: "tools_first" as const,
    toolKeys: ["salaryNet", "payslip", "howTaxesWorkInNl"] as const,
    advisorWhen:
      "Usually unnecessary for routine payroll and withholding — employer HR answers most slip questions; advisers add value mainly when something still does not reconcile after tools and official text.",
  },
  {
    id: "sc-first-return",
    situation: "First Dutch tax return",
    complexity: "worth_checking" as const,
    toolKeys: ["taxReturnNl", "expatTaxesGuide", "howTaxesWorkInNl"] as const,
    advisorWhen:
      "A one-off review, coach, or guided first filing can help when the return feels wide — many people still file alone once documents are sorted.",
  },
  {
    id: "sc-arrival-departure",
    situation: "Arrival or departure year",
    complexity: "consider_advice" as const,
    toolKeys: ["taxReturnNl", "expatTaxesGuide", "taxResidencyNl", "doubleTax"] as const,
    advisorWhen:
      "Often worth a conversation when income, registration, or two countries overlap in one calendar year — you still choose how much help to buy.",
  },
  {
    id: "sc-foreign-assets",
    situation: "Foreign assets or property",
    complexity: "consider_advice" as const,
    toolKeys: ["expatTaxesGuide", "doubleTax", "taxResidencyNl", "howTaxesWorkInNl"] as const,
    advisorWhen:
      "Box-style reporting and treaty angles are easy to misread from forums — scoped help is common when balances or structures are material.",
  },
  {
    id: "sc-foreign-income",
    situation: "Foreign income",
    complexity: "consider_advice" as const,
    toolKeys: ["doubleTax", "expatTaxesGuide", "taxReturnNl", "taxResidencyNl"] as const,
    advisorWhen:
      "Useful when sources or countries stack and you need a clear question list for each administration — not every foreign line needs full representation.",
  },
  {
    id: "sc-remote-cross-border",
    situation: "Remote cross-border work",
    complexity: "consider_advice" as const,
    toolKeys: ["doubleTax", "employmentType", "expatTaxesGuide", "taxResidencyNl"] as const,
    advisorWhen:
      "Employer location, workdays, and residency labels interact — advisers often help frame what to verify before you sign long mandates.",
  },
  {
    id: "sc-30-uncertain",
    situation: "30% ruling uncertainty",
    complexity: "worth_checking" as const,
    toolKeys: ["thirtyPercentRulingGuide", "ruling", "payslip", "workingNl"] as const,
    advisorWhen:
      "Helpful when payroll, letters, or employer changes disagree with your understanding — start with official facility pages and the calculator first.",
  },
  {
    id: "sc-self-mixed",
    situation: "Self-employment or mixed income",
    complexity: "consider_advice" as const,
    toolKeys: ["employmentType", "expatTaxesGuide", "taxReturnNl", "workingNl"] as const,
    advisorWhen:
      "Invoices, VAT, and employment in one year often deserve structured intake — compare bookkeeping vs personal return scope before you buy.",
  },
  {
    id: "sc-partner-allowances",
    situation: "Partner / family allowance complexity",
    complexity: "worth_checking" as const,
    toolKeys: ["healthcare", "expatTaxesGuide", "taxReturnNl", "childcare"] as const,
    advisorWhen:
      "Toeslagen and return-time choices are different systems — short advice can help when household settings are unclear, not only when numbers are huge.",
  },
  {
    id: "sc-residency-unsure",
    situation: "Unsure tax residency",
    complexity: "consider_advice" as const,
    toolKeys: ["taxResidencyNl", "doubleTax", "expatTaxesGuide", "taxReturnNl"] as const,
    advisorWhen:
      "When ties span borders or labels feel mismatched, advisers help you prepare questions — outcomes stay fact-specific and official pages still matter.",
  },
] as const;

const moneyTaxAdvisorSignalCards = [
  {
    id: "ww-arrival",
    title: "Arrival or departure year",
    whyItMatters: "Partial-year facts change what belongs in which boxes and which country asks first.",
    advisorHelps: "A firm can map your timeline to filing options and question lists — still confirm binding positions on official pages.",
    toolLabel: "Tax return guide",
    toolKey: "taxReturnNl" as const,
  },
  {
    id: "ww-foreign",
    title: "Foreign income or assets",
    whyItMatters: "Reporting and treaty angles are easy to misread from forums alone.",
    advisorHelps: "Translate your facts into Dutch return language and flag documentation gaps early.",
    toolLabel: "Expat taxes scenarios",
    toolKey: "expatTaxesGuide" as const,
  },
  {
    id: "ww-box3",
    title: "Box 3 uncertainty",
    whyItMatters: "Wealth reporting has its own vocabulary; mistakes are often process issues, not intent.",
    advisorHelps: "Clarify what counts, where, and which year rules apply before you file.",
    toolLabel: "How taxes work",
    toolKey: "howTaxesWorkInNl" as const,
  },
  {
    id: "ww-double",
    title: "Double-tax risk",
    whyItMatters: "Two countries asking questions does not always mean two bills — but the path is fact-specific.",
    advisorHelps: "Structure questions for each administration and identify treaty reading you still owe yourself.",
    toolLabel: "Double tax awareness tool",
    toolKey: "doubleTax" as const,
  },
  {
    id: "ww-30",
    title: "30% ruling complexity",
    whyItMatters: "Eligibility, employer policy, and payslip lines interact — calculators show scenarios, not payroll mandates.",
    advisorHelps: "Interpret letters, payroll mapping, and negotiation language with your contract facts.",
    toolLabel: "30% ruling guide",
    toolKey: "thirtyPercentRulingGuide" as const,
  },
  {
    id: "ww-mixed",
    title: "Self-employment / mixed income",
    whyItMatters: "Invoices, VAT, and employment can coexist in one year — easy to under-prepare.",
    advisorHelps: "Separate bookkeeping needs from personal return scope before you sign a mandate.",
    toolLabel: "Working in the Netherlands",
    toolKey: "workingNl" as const,
  },
  {
    id: "ww-family",
    title: "Family / partner complexity",
    whyItMatters: "Household choices affect allowances and credits — return questions stack.",
    advisorHelps: "Check who files, which boxes, and which proofs belong together for your household.",
    toolLabel: "Tax return guide",
    toolKey: "taxReturnNl" as const,
  },
  {
    id: "ww-return",
    title: "Tax return support",
    whyItMatters: "Even confident people may want a guided first filing or a pre-submit review.",
    advisorHelps: "Choose between coach, review-only, or full filing — ask which you are buying.",
    toolLabel: "Tax return guide",
    toolKey: "taxReturnNl" as const,
  },
] as const;

const moneyTaxAdvisorAdvisorServiceCategories = [
  {
    id: "sc-return",
    title: "Annual tax return filing",
    body: "End-to-end or review support for the Dutch income tax return — scope should say whether they file, advise, or represent.",
  },
  {
    id: "sc-review",
    title: "Expat tax review",
    body: "Structured pass over your year before you tick boxes — useful when facts are busy but not mysterious.",
  },
  {
    id: "sc-30",
    title: "30% ruling support",
    body: "Help with applications, employer letters, or reconciliation when payroll and expectations diverge — not the same as a headline calculator output.",
  },
  {
    id: "sc-residency",
    title: "Tax residency / cross-border review",
    body: "Narrative and tie-list work when more than one country could assert questions — still not a determination tool.",
  },
  {
    id: "sc-box3",
    title: "Box 3 / foreign asset reporting",
    body: "Mapping accounts and property to the right declarations for the year that applies.",
  },
  {
    id: "sc-se",
    title: "Self-employed tax setup",
    body: "Invoicing, VAT, and income lines that sit beside employment need a clear bookkeeping vs return split.",
  },
  {
    id: "sc-payroll",
    title: "Employer / payroll questions",
    body: "When withholding, allowances, or ruling lines need a payroll-aware explanation tied to your payslip.",
  },
  {
    id: "sc-household",
    title: "Allowance / household planning",
    body: "Toeslagen and return topics can interact — advisers may coordinate with Dienst Toeslagen rules you still read officially.",
  },
] as const;

/**
 * Grouped “use case” editorial: triage scorecard, when-to-consider signals, and advisor capability blurbs.
 * Import `moneyTaxAdvisorUseCases.scorecardRows` where you only need the scorecard.
 */
export const moneyTaxAdvisorUseCases = {
  scorecardRows: moneyTaxAdvisorScorecardRows,
  signalCards: moneyTaxAdvisorSignalCards,
  advisorServiceCategories: moneyTaxAdvisorAdvisorServiceCategories,
} as const;

export const moneyTaxAdvisorPreparationChecklist = [
  {
    id: "prep-personal",
    title: "Personal / admin",
    items: ["BSN and identity basics", "Arrival and any departure dates you can document", "Family / partner situation in plain facts (not labels)"],
  },
  {
    id: "prep-employment",
    title: "Employment / income",
    items: [
      "Contract and contract changes",
      "Jaaropgave and payslips for the years in scope",
      "Employer payroll contact if slips look wrong",
      "30% ruling letters or employer confirmations if relevant",
    ],
  },
  {
    id: "prep-foreign",
    title: "Foreign / cross-border",
    items: [
      "Foreign income summaries you can back with documents",
      "Accounts / assets / property outside the Netherlands you may need to declare",
      "Prior-country tax documents where they exist",
      "Remote work pattern facts (days, employer entity, contract geography)",
    ],
  },
  {
    id: "prep-questions",
    title: "Questions",
    items: [
      "A short list of what you want answered in one meeting",
      "Tax year and any deadlines you already know",
      "Desired output — e.g. filing only, written memo, or ongoing support",
    ],
  },
] as const;

export const moneyTaxAdvisorComparisonCriteria = [
  { id: "cmp-expat", title: "Expat-specific experience", body: "Do they routinely see international hires, not only domestic returns?" },
  { id: "cmp-cross", title: "Cross-border knowledge", body: "Can they name how they handle treaty reading and multi-country years?" },
  { id: "cmp-30", title: "30% ruling experience", body: "If ruling matters, ask for payroll-aware examples, not generic marketing." },
  { id: "cmp-price", title: "Transparent pricing", body: "Fixed fee, hourly, or caps — in writing before work starts." },
  { id: "cmp-scope", title: "Scope clarity", body: "What is in vs out of the engagement — representation, advice, or filing only?" },
  { id: "cmp-lang", title: "Communication language", body: "English sessions, document language, and who replies to email." },
  { id: "cmp-speed", title: "Response times", body: "Especially near deadlines — ask realistic turnaround." },
  { id: "cmp-explain", title: "Explain vs only file", body: "Do you want teaching alongside filing, or hands-off submission?" },
  { id: "cmp-data", title: "Data / security handling", body: "Upload channels, retention, and who accesses personal data." },
] as const;

export const moneyTaxAdvisorEngagementTypes = [
  {
    id: "eng-once",
    title: "One-off tax return filing",
    bestFor: "A single year where you want the return submitted or checked once.",
    ask: "Is review included before submit? Who signs?",
    avoid: "Assuming questions next year are included for free.",
  },
  {
    id: "eng-arrival",
    title: "First-year arrival review",
    bestFor: "New arrivals who want a map of topics before habits set.",
    ask: "What deliverable do you receive — meeting notes, memo, or checklist?",
    avoid: "Treating a one-hour call as full representation.",
  },
  {
    id: "eng-30",
    title: "30% ruling support",
    bestFor: "Application, employer coordination, or payslip mismatch questions.",
    ask: "Do they work with payroll language your employer recognises?",
    avoid: "Promises that ignore employer policy or Belastingdienst timing.",
  },
  {
    id: "eng-cross",
    title: "Cross-border tax review",
    bestFor: "Income or assets in more than one country in the same window.",
    ask: "How they coordinate questions with your prior advisers, if any.",
    avoid: "Generic checklists with no room for your dates.",
  },
  {
    id: "eng-se",
    title: "Self-employed setup",
    bestFor: "ZZP or mixed earners setting bookkeeping and return boundaries.",
    ask: "VAT registration and income recognition — who owns each task?",
    avoid: "Mixing bookkeeping software training with tax advice without agreeing scope.",
  },
  {
    id: "eng-ongoing",
    title: "Ongoing annual support",
    bestFor: "Households that want a repeatable annual rhythm.",
    ask: "Renewal pricing and what triggers out-of-scope fees.",
    avoid: "Autopay contracts without a yearly scope check-in.",
  },
] as const;

export const moneyTaxAdvisorRedFlags = [
  { id: "rf-price", title: "Vague pricing", body: "If you cannot get a written fee range and what it includes, pause." },
  { id: "rf-expat", title: "No expat / cross-border experience", body: "Routine domestic filing shops may decline complex years — clarity upfront beats mid-engagement handoff." },
  { id: "rf-refund", title: "Promising guaranteed refunds", body: "Outcomes depend on facts and year rules — marketing guarantees are a poor sign." },
  { id: "rf-assets", title: "Ignoring foreign assets", body: "If they wave away Box 3 or foreign lines without questions, widen your search." },
  { id: "rf-dates", title: "Not asking arrival / departure dates", body: "Timeline questions are basic intake — silence is odd." },
  { id: "rf-data", title: "Poor data handling", body: "Ad-hoc email attachments forever, no retention policy — ask for their process." },
  { id: "rf-scope", title: "Unclear scope", body: "You should know whether you bought answers, filing, or representation." },
  { id: "rf-generic", title: "Only generic advice", body: "If every answer starts with “it depends” without steering you to official tests, keep interviewing." },
] as const;

/** Verbatim prompts for consultations — not every firm answers yes to all rows. */
export const moneyTaxAdvisorQuestions = [
  { id: "hq-expats", text: "Do you work with expats regularly?" },
  { id: "hq-arrival-departure", text: "Have you handled arrival/departure year filings?" },
  { id: "hq-box3", text: "Can you advise on foreign assets / Box 3?" },
  { id: "hq-30", text: "Can you help with 30% ruling questions?" },
  { id: "hq-included", text: "What is included in the price?" },
  { id: "hq-not-included", text: "What is not included?" },
  { id: "hq-docs", text: "What documents do you need?" },
  { id: "hq-secure-share", text: "How do you handle secure document sharing?" },
  { id: "hq-explain", text: "Will you explain the outcome or only file?" },
  { id: "hq-followup", text: "What happens if Belastingdienst asks follow-up questions?" },
] as const;

export const moneyTaxAdvisorFaq = [
  {
    q: "Do expats need a tax advisor in the Netherlands?",
    a: "No. Many people use official guidance, employer payroll, and tools for routine questions. Advisers are optional when you want scoped help, a second read, or representation.",
  },
  {
    q: "When is a tax advisor worth it?",
    a: "Often when facts are stacked — foreign income or assets, arrival/departure years, self-employment, cross-border work, or disputes you cannot reconcile with calm reading.",
  },
  {
    q: "Can I file my Dutch tax return myself?",
    a: "Yes, many residents file through Belastingdienst channels once documents are sorted. Paid help is a choice, not a requirement.",
  },
  {
    q: "Should I use an advisor for the 30% ruling?",
    a: "Sometimes for applications, employer coordination, or payslip mismatches. For simple eligibility questions, start with the official facility pages and the calculator on ExpatCopilot.",
  },
  {
    q: "What should I prepare before contacting a tax advisor?",
    a: "Dates, contracts, payslips, jaaropgaven, foreign statements, and a short question list — see the checklist sections on this page.",
  },
  {
    q: "How do I compare tax advisors?",
    a: "Use expat experience, cross-border depth, transparent pricing, scope in writing, language, and data handling — compare criteria cards above.",
  },
  {
    q: "What are red flags?",
    a: "Vague pricing, guaranteed refunds, ignoring foreign lines, or unclear scope — see the red-flag cards for a quick scan.",
  },
  {
    q: "Is this page tax advice?",
    a: "No. ExpatCopilot provides orientation and links. For binding positions, use Belastingdienst materials and qualified professionals.",
  },
] as const;
