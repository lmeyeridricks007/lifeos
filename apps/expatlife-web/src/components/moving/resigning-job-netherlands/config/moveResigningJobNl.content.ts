import type { ChangingJobsNlPageMeta } from "../../changing-jobs-netherlands/config/moveChangingJobsNl.types";
import {
  mapResigningGridCards,
  mapResigningJourneyBlocks,
  mapResigningPracticalCards,
} from "./resigning-job/moveResigningJobNl.config.types";
import {
  moveResigningJobContinueMove,
  moveResigningJobExplorePillarCards,
  moveResigningJobFaq,
  moveResigningJobMisunderstandings,
  moveResigningJobMisunderstandingsRegion,
  moveResigningJobReferences,
  moveResigningJobRelatedTools,
  moveResigningJobSections,
  moveResigningJobStartCards,
  moveResigningJobStartHereRegion,
  moveResigningJobTips,
  moveResigningJobToolsJourneySnapshot,
  moveResigningJobToolsRegion,
  moveResigningJobNlRoutes,
  workingInNl,
  changingJobsNl,
} from "./resigning-job";

export { moveResigningJobNlRoutes } from "./resigning-job";

const ROUTES = moveResigningJobNlRoutes;
const sec = moveResigningJobSections;

const hero = {
  eyebrow: "Netherlands · Moving",
  pageTitle: "Resigning a Job in the Netherlands",
  subtitle:
    "**One decision, several clocks**: notice and contract on one side; **stay, payroll, rent, and coverage** on the other. This guide helps you **sequence** what to read and who to ask — **before** you fix a last day.",
  contextChips: ["Notice", "Contract", "Stay", "Payroll", "Rent", "Coverage", "Timing"],
  bullets: [
    "See **four layers** (work, stay, money, life) so nothing important stays invisible",
    "Know **what to verify before notice** vs **before your last day** vs **before access ends**",
    "Use **real routes** (Move guides + calculators) — not legal advice, but a sane order of operations",
  ],
  primaryCta: { label: "Three checkpoints", href: "#start-here" },
  secondaryCta: { label: "What resignation can affect", href: "#what-resignation-affects" },
} as const;

const atAGlance = {
  sectionTitle: "At a glance",
  subtitle:
    "Orientation for anyone weighing resignation in NL — especially when **stay, landlord proofs, or household costs** still lean on this job.",
  cells: [
    {
      title: "What this page is for",
      body: "A **checklist-shaped** walkthrough: **read contract → flag stay if needed → stress-test money → line up life admin** — in an order that avoids nasty surprises.",
    },
    {
      title: "Best for",
      body: "People where **permits, sponsor letters, rent math, insurance, or family files** might move when employment does — including **no next job yet**.",
    },
    {
      title: "What it covers",
      body: "**Notice & clauses**, **status questions** (high level), **pay and benefits through the exit**, and **housing / health / family** handoffs — with links to tools and Move guides.",
    },
    {
      title: "What it skips",
      body: "**Binding legal, tax, or immigration outcomes**. Confirm with **employer, IND, Belastingdienst**, or a qualified adviser when stakes are high.",
    },
  ],
  note:
    "You do **not** need every answer tonight. You **do** need to know **which clock** you are racing — contract, stay, cash, or coverage — so you can open **one** right page or tool next.",
} as const;

const pillarJourneyBridge = {
  id: "move-pillar-context",
  eyebrow: "Inside the Move pillar",
  title: "How this page connects to the rest of ExpatCopilot",
  intro:
    "**Working in NL** = the work-led move story. **Changing jobs** = exit **and** a signed next step. **This page** = you are leaving (or planning to) **before** the next chapter is clear. When stay or monthly life might shift, pair these Move guides with **Work**, **Money**, and **Housing** tools — **one cluster at a time**.",
  links: [
    {
      href: ROUTES.hub,
      label: "Moving to the Netherlands",
      description: "Main Move hub when the wider relocation map needs a home.",
      meta: "Move",
    },
    {
      href: workingInNl,
      label: "Working in the Netherlands",
      description: "Work-led relocation framing when employment still anchors the story.",
      meta: "Move",
    },
    {
      href: changingJobsNl,
      label: "Changing jobs in the Netherlands",
      description: "When a next employer and aligned dates are part of the plan.",
      meta: "Move",
    },
    {
      href: ROUTES.layoffs,
      label: "Layoffs in the Netherlands",
      description: "When the role may end through redundancy — map stay, money, and life admin next to HR news.",
      meta: "Move",
    },
    {
      href: ROUTES.visas,
      label: "Visas & residency orientation",
      description: "Route doorway when status questions reopen.",
      meta: "Move",
    },
    {
      href: ROUTES.residencePermits,
      label: "Residence permits",
      description: "Permit purpose, continuity, and employer-linked context.",
      meta: "Move",
    },
    {
      href: ROUTES.extensions,
      label: "Extensions & changes",
      description: "Renewals, employer shifts, and life changes after arrival.",
      meta: "Move",
    },
    {
      href: ROUTES.statusChanges,
      label: "Status changes",
      description: "When the basis of stay — not only the payslip — may move.",
      meta: "Move",
    },
    {
      href: ROUTES.twvWorkPermit,
      label: "TWV work permit",
      description: "Employer-driven work authorization when that layer may apply.",
      meta: "Move",
    },
    {
      href: ROUTES.contractScanner,
      label: "Employment contract risk scanner",
      description: "Structured pass on exit clauses before you resign.",
      meta: "Work",
    },
    {
      href: ROUTES.salaryNet,
      label: "Dutch salary net calculator",
      description: "Rough take-home through transitions and gaps.",
      meta: "Money",
    },
  ],
} as const;

const whatNextRegion = {
  eyebrow: "How to use this page",
  title: "What to do next",
  subtitle:
    "**Scan** what could move → **read your contract** → if stay might be job-tied, **ask early** → **model one lean month** → pick **one** tool or guide for this week. The list below is a **menu**, not a single-day sprint.",
} as const;

const progressionSteps = [
  {
    id: "understand",
    label: "Scan what could move",
    href: "#what-resignation-affects",
    description: "Four layers — employment, stay, money, life. Deep-dive only where you are exposed.",
  },
  {
    id: "review",
    label: "Contract & notice pass",
    href: "#notice-contract-review",
    description: "Clauses, dates, HR asks, and what belongs in writing before you commit.",
  },
  {
    id: "clarify",
    label: "Stay & status (if relevant)",
    href: "#permits-status",
    description: "Job-tied permits: ask mobility early — then return to money with clearer facts.",
  },
  {
    id: "model",
    label: "Stress-test money",
    href: "#salary-benefits-tax",
    description: "Net pay, gaps, rent, childcare — one sober monthly frame.",
  },
  {
    id: "tools",
    label: "Pick one tool cluster",
    href: "#helpful-tools",
    description: "Move, Work, Money, Housing, or Living — match the pile to this week’s bottleneck.",
  },
  {
    id: "life",
    label: "Life admin handoff",
    href: "#practical-life",
    description: "Housing, health, registration, family — after the resignation message is sent.",
  },
] as const;

const sectionNav = [
  { href: "#at-a-glance", label: "At a glance" },
  { href: "#start-here", label: "Start here" },
  { href: "#what-resignation-affects", label: "What resignation can affect" },
  { href: "#notice-contract-review", label: "Notice & contract review" },
  { href: "#permits-status", label: "Permits & status" },
  { href: "#salary-benefits-tax", label: "Salary, benefits & tax" },
  { href: "#resignation-support-providers", label: "Professional support" },
  { href: "#practical-life", label: "Practical life impact" },
  { href: "#misunderstandings", label: "Common misunderstandings" },
  { href: "#what-next", label: "What to do next" },
  { href: "#helpful-tools", label: "Helpful tools" },
  { href: "#faq", label: "FAQ" },
  { href: "#official-sources", label: "Official sources" },
] as const;

const deepLinks = [
  { href: ROUTES.hub, label: "Moving to the Netherlands (hub)", description: "Full relocation map, scenarios, and tools." },
  { href: workingInNl, label: "Working in the Netherlands", description: "Work-led move framing alongside resignation planning." },
  { href: changingJobsNl, label: "Changing jobs in the Netherlands", description: "When exit timing aligns with a next role." },
  { href: ROUTES.layoffs, label: "Layoffs in the Netherlands", description: "When redundancy or role-ending risk is in play." },
  { href: ROUTES.visas, label: "Visas & residency orientation", description: "Route doorway when status questions reopen." },
  { href: ROUTES.residencePermits, label: "Residence permits", description: "Permit continuity and purpose in plain language." },
  { href: ROUTES.extensions, label: "Extensions & changes", description: "Renewals and employer or life shifts after arrival." },
  { href: ROUTES.statusChanges, label: "Status changes", description: "When the basis of stay may be shifting." },
  { href: ROUTES.twvWorkPermit, label: "TWV work permit", description: "Employer-linked work permission context." },
  { href: ROUTES.contractScanner, label: "Employment contract risk scanner", description: "Clause pass before you resign." },
  { href: ROUTES.jobOffer, label: "Job offer comparison tool", description: "When a next offer is on the table." },
  { href: ROUTES.salaryNet, label: "Dutch salary net calculator", description: "Rough take-home through transitions." },
  { href: ROUTES.ruling, label: "30% ruling calculator", description: "Planning check when the expat tax facility might matter." },
  { href: ROUTES.first90Days, label: "First 90 days planner", description: "Sequence admin when exit overlaps settling-in tasks." },
] as const;

const journeyAffects = mapResigningJourneyBlocks(sec.whatResignationAffects.blocks);
const gridContracts = mapResigningGridCards(sec.contracts.blocks);
const gridPermits = mapResigningGridCards(sec.permits.blocks);
const gridSalary = mapResigningGridCards(sec.salary.blocks);

export const resigningJobNlPageMeta = {
  canonicalPath: ROUTES.canonical,
  movePillarHubPath: ROUTES.hub,
  hero: { ...hero, contextChips: [...hero.contextChips], bullets: [...hero.bullets] },
  atAGlance: { ...atAGlance, cells: [...atAGlance.cells] },
  reassurance: [...moveResigningJobTips.reassurance],
  confidenceChecklist: [...moveResigningJobTips.confidenceChecklist],
  reassuranceFooter: moveResigningJobTips.reassuranceFooter,
  practicalTipCallouts: [...(moveResigningJobTips.practicalCallouts ?? [])],
  pillarJourneyBridge: { ...pillarJourneyBridge, links: [...pillarJourneyBridge.links] },
  startHereRegion: moveResigningJobStartHereRegion,
  startHereCards: moveResigningJobStartCards,
  whatAffectsSection: {
    ...sec.whatResignationAffects,
    blocks: journeyAffects,
    stages: journeyAffects,
  },
  contractsSection: {
    ...sec.contracts,
    blocks: gridContracts,
    cards: gridContracts,
  },
  permitsSection: {
    ...sec.permits,
    blocks: gridPermits,
    cards: gridPermits,
  },
  salarySection: {
    ...sec.salary,
    blocks: gridSalary,
    cards: gridSalary,
  },
  practicalLifeSection: {
    ...sec.practicalLife,
    cards: mapResigningPracticalCards(sec.practicalLife.cards),
  },
  misunderstandingsRegion: moveResigningJobMisunderstandingsRegion,
  misunderstandings: [...moveResigningJobMisunderstandings],
  whatNextRegion,
  progressionSteps: [...progressionSteps],
  toolsRegion: moveResigningJobToolsRegion,
  toolsJourneySnapshot: { ...moveResigningJobToolsJourneySnapshot, steps: [...moveResigningJobToolsJourneySnapshot.steps] },
  explorePillarCards: [...moveResigningJobExplorePillarCards],
  relatedTools: moveResigningJobRelatedTools,
  continueMove: { ...moveResigningJobContinueMove, cards: [...moveResigningJobContinueMove.cards] },
  sectionNav: [...sectionNav],
  deepLinks,
  faq: moveResigningJobFaq,
  references: moveResigningJobReferences,
} satisfies ChangingJobsNlPageMeta;

export type ResigningJobNlPageMetaType = typeof resigningJobNlPageMeta;
