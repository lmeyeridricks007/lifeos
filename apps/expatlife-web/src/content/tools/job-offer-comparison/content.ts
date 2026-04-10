import { OFFER_COMPARISON_FAQ } from "./config/offerComparisonFaq";
import { OFFER_COMPARISON_OFFICIAL_SOURCES } from "./config/offerComparisonOfficialSources";
import { OFFER_COMPARISON_WORKED_EXAMPLES } from "./config/offerComparisonWorkedExamples";

export const JOB_OFFER_COMPARISON_CANONICAL = "/netherlands/work/tools/job-offer-comparison/";
export const NL_BASE = "/netherlands";

export const JOB_OFFER_AT_A_GLANCE = [
  {
    title: "What this tool is for",
    description:
      "Compare two or three Dutch job offers (or your current job vs a new offer) on one screen: recurring cash, estimated take-home pay, benefits, 30% ruling and visa support, relocation help, contract checklist signals, commute, and rough money left after rent — so you are not deciding on gross salary alone.",
  },
  {
    title: "Best for",
    description:
      "Expats and internationals choosing between Dutch employers, couples picking a city before signing, people weighing permanent vs fixed-term, hybrid vs office-heavy roles, or a Dutch payroll job vs a foreign remote contract — anywhere the letter and the commute matter as much as the headline number.",
  },
  {
    title: "What it models",
    description:
      "Uses the same estimated take-home rules as the Dutch salary calculator (with per-offer holiday allowance and bonus handling), scores benefits and expat support from your answers, uses typical city rents like the cost-of-living tool, blends commute days and travel mode, applies Low/Medium/High priorities, and shows topic-by-topic winners plus email-ready questions for HR.",
  },
  {
    title: "Outputs you get",
    description:
      "A ranked pick with confidence context, topic-by-topic winners (cash, security, commute, affordability, expat support, and more), plain-language hidden-cost notes, money left after estimated rent, risk highlights, and “what would change the result” — plus HTML export for your notes or an advisor.",
  },
  {
    title: "What it skips",
    description:
      "It is not a contract review, tax return, payroll quote, or immigration decision. CAO details, exact pension accrual, stock vesting, IND timing, and clause enforceability belong to HR, payroll, the Employment Contract Risk Scanner, and qualified professionals.",
  },
  {
    title: "How to use it well",
    description:
      "Enter each offer honestly (including vakantiegeld included vs on top), then expand advanced benefits, contract/risk, and commute sections when the headline scores look too close to call. Adjust priorities to match how long you plan to stay and how much stability you need.",
  },
] as const;

/** Single compact intro: scope + essentials (one list on the page). */
export const JOB_OFFER_BEFORE_START_LEAD =
  "Planning and comparison only — not legal, tax, payroll, or immigration advice. Net pay and rent use the same default assumptions as the site’s salary and cost-of-living tools unless you override rent; confirm anything that matters with HR and professionals.";

/** Merged checklist + model limits — keep short to limit vertical space. */
export const JOB_OFFER_BEFORE_START_BULLETS = [
  "Have offer text ready (bonus, allowances, ruling wording). Headline gross often misleads once holiday pay, pension signals, rent, and commute are in the mix.",
  "If you won’t live in the office city, set job city, office city, and home/target city separately.",
  "30% ruling fields shape estimated take-home in the tool — not tax office approval. Foreign or contractor setups can change tax a lot; get professional advice when that’s you.",
  "Tied scores? Change priority weights and Calculate again. Exports help you brief advisors — they’re not a sign-this verdict. Heavy contract clauses → contract scanner or a lawyer.",
] as const;

export const JOB_OFFER_TOC = [
  { id: "job-offer-at-a-glance", label: "At a glance" },
  { id: "before-you-start", label: "Before you start" },
  { id: "tool-inputs", label: "Compare offers" },
  { id: "offer-comparison-form", label: "Offer details" },
  { id: "priority-weights", label: "What matters most" },
  { id: "run-comparison-calculation", label: "Calculate" },
  { id: "tool-results", label: "Results" },
  { id: "results-at-glance", label: "At a glance (results)" },
  { id: "results-summary", label: "Top recommendation" },
  { id: "decision-lenses", label: "Compare by topic" },
  { id: "what-would-change", label: "What would change the result" },
  { id: "headline-comparison", label: "Detailed score table" },
  { id: "hidden-costs", label: "Hidden costs" },
  { id: "affordability-view", label: "Real-life affordability" },
  { id: "risk-highlights", label: "Risk highlights" },
  { id: "negotiation-prep", label: "Questions to ask" },
  { id: "example-scenarios", label: "Example scenarios" },
  { id: "how-tool-works-inline", label: "How this tool works" },
  { id: "recommended-services", label: "Recommended services" },
  { id: "download-summary", label: "Save or share" },
  { id: "related-tools-inline", label: "Related tools" },
  { id: "related-guides", label: "Related guides" },
  { id: "seo-content", label: "Guide: salary, city & negotiation" },
  { id: "faq", label: "FAQ" },
  { id: "official-sources", label: "Official sources" },
] as const;

export const JOB_OFFER_QUICK_LINKS = [
  { label: "Start comparison", href: "#tool-inputs" },
  { label: "Calculate", href: "#run-comparison-calculation" },
  { label: "See results", href: "#tool-results" },
  { label: "Compare money", href: "#results-at-glance" },
  { label: "Hidden costs", href: "#hidden-costs" },
  { label: "Compare risk", href: "#risk-highlights" },
  { label: "Save or share", href: "#download-summary" },
] as const;

export const JOB_OFFER_RELATED_TOOLS = [
  { href: `${NL_BASE}/taxes/tools/dutch-salary-net-calculator/`, label: "Dutch salary net calculator →" },
  { href: `${NL_BASE}/taxes/tools/30-ruling-calculator/`, label: "30% ruling calculator →" },
  { href: `${NL_BASE}/work/tools/employment-contract-risk-scanner/`, label: "Employment contract risk scanner →" },
  { href: `${NL_BASE}/work/tools/employment-type-scenario-tool/`, label: "Employment type scenario tool →" },
  { href: `${NL_BASE}/taxes/tools/double-tax-awareness-tool/`, label: "Double tax awareness tool →" },
  { href: `${NL_BASE}/money/tools/cost-of-living-calculator/`, label: "Cost of living calculator →" },
  { href: `${NL_BASE}/housing/tools/rent-affordability-calculator/`, label: "Rent affordability calculator →" },
  { href: `${NL_BASE}/tools/city-comparison/`, label: "City comparison tool →" },
] as const;

/** Plain labels for contextual “refine your comparison” strips (no arrow suffix). */
export const JOB_OFFER_COMPARISON_TOOL_LINKS = [
  { href: `${NL_BASE}/taxes/tools/dutch-salary-net-calculator/`, label: "Dutch salary net calculator" },
  { href: `${NL_BASE}/taxes/tools/30-ruling-calculator/`, label: "30% ruling calculator" },
  { href: `${NL_BASE}/work/tools/employment-contract-risk-scanner/`, label: "Employment contract risk scanner" },
  { href: `${NL_BASE}/work/tools/employment-type-scenario-tool/`, label: "Employment type scenario tool" },
  { href: `${NL_BASE}/taxes/tools/double-tax-awareness-tool/`, label: "Double tax awareness tool" },
  { href: `${NL_BASE}/money/tools/cost-of-living-calculator/`, label: "Cost of living calculator" },
  { href: `${NL_BASE}/housing/tools/rent-affordability-calculator/`, label: "Rent affordability calculator" },
  { href: `${NL_BASE}/tools/city-comparison/`, label: "City comparison tool" },
] as const;

export const JOB_OFFER_RELATED_GUIDES = [
  {
    href: `${NL_BASE}/moving/working-in-the-netherlands/`,
    title: "Working in the Netherlands",
    description: "Move-focused guide linking offers, salary, permits, payroll, and first-month setup.",
  },
  {
    href: `${NL_BASE}/moving/twv-work-permit/`,
    title: "TWV work permit",
    description: "Useful when work authorization route and employer action affect whether an offer is really workable.",
  },
  {
    href: `${NL_BASE}/work/contracts/offer-comparison/`,
    title: "Dutch job offer comparison",
    description: "How to read offers, total reward, vakantiegeld, and what to verify before you accept.",
  },
  {
    href: `${NL_BASE}/work/employment-contract-netherlands/`,
    title: "Employment contract Netherlands",
    description: "What typically appears in Dutch contracts, fixed-term risk, and where surprises hide.",
  },
  {
    href: `${NL_BASE}/moving-to-the-netherlands/`,
    title: "Moving to the Netherlands",
    description: "Relocation timing, housing search, BSN, and admin alongside a new job.",
  },
  {
    href: `${NL_BASE}/taxes/expat-taxes-netherlands/`,
    title: "Expat taxes in the Netherlands",
    description: "Tax residency, payroll withholding, 30% ruling context, and when to involve a tax advisor.",
  },
  {
    href: `${NL_BASE}/moving/tools/moving-checklist/`,
    title: "Moving to the Netherlands checklist",
    description: "Step-by-step tasks that often run in parallel with offer negotiation and start dates.",
  },
  {
    href: `${NL_BASE}/moving/tools/first-90-days/`,
    title: "First 90 days in the Netherlands",
    description: "Registration, banking, insurance, and employer onboarding in the early weeks.",
  },
  {
    href: `${NL_BASE}/taxes/`,
    title: "Taxes in the Netherlands (hub)",
    description: "Links to calculators and guides when payroll and deductions are new territory.",
  },
];

export const JOB_OFFER_HOW_TO_STEPS = [
  {
    name: "Create a clean row per offer",
    text: "For each letter (A/B/C), set employer, role, contract type, work mode, job city, and office city when hybrid or office matters for commute.",
  },
  {
    name: "Enter gross pay the way the letter states it",
    text: "Pick annual or monthly gross, mark whether vakantiegeld is included in that figure or paid on top, and add bonus type (guaranteed vs discretionary), sign-on, and relocation lump sums separately from recurring base.",
  },
  {
    name: "Open advanced sections when numbers look close",
    text: "Use Advanced benefits & expat support for pension text, allowances, visa sponsorship, 30% ruling support level, relocation package strength, and clawback flags. Use Contract & risk for probation, notice, non-compete, and fixed-term renewal hints.",
  },
  {
    name: "Align commute and rent with real life",
    text: "Set commute days per week and travel mode, home or target city for rent, and either typical city rent or your own monthly budget so affordability is not stuck on Amsterdam gross while you plan to live elsewhere.",
  },
  {
    name: "Tune priorities to your horizon",
    text: "Low / Medium / High settings reshape the overall score: a short contract vs a long-term home, cash today vs stability, or commute sanity vs maximum net — open the priorities panel when the headline favourite feels wrong for your situation.",
  },
  {
    name: "Read topic cards, hidden costs, and negotiation prompts",
    text: "The topic-by-topic section shows who wins on pay, security, benefits, expat support, commute, and affordability. Pair hidden-cost lines and per-offer questions with employer answers before you sign.",
  },
  {
    name: "Export, then confirm with professionals",
    text: "Download the HTML summary or share a link to your setup for a tax advisor or lawyer — then validate net pay, clauses, and permit/sponsor steps with HR and official sources.",
  },
];

/** Worked examples — source of truth in `config/offerComparisonWorkedExamples.ts` */
export const JOB_OFFER_EXAMPLE_SCENARIOS = OFFER_COMPARISON_WORKED_EXAMPLES;

/** FAQ — source of truth in `config/offerComparisonFaq.ts` */
export const JOB_OFFER_FAQ = OFFER_COMPARISON_FAQ;

/** Official links — slim shape for existing list UI; full rows in `config/offerComparisonOfficialSources.ts` */
export const JOB_OFFER_OFFICIAL_SOURCES = OFFER_COMPARISON_OFFICIAL_SOURCES.map(({ title, href, body }) => ({
  title,
  href,
  body,
}));
