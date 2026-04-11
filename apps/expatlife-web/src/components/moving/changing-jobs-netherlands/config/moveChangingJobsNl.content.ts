import type { ChangingJobsNlPageMeta } from "./moveChangingJobsNl.types";
import {
  toGridCards,
  toJourneyBlocks,
  toPracticalLifeCards,
} from "./changing-jobs/moveChangingJobsNl.config.types";
import { moveChangingJobsFaq } from "./changing-jobs/moveChangingJobsFaq.config";
import { moveChangingJobsMisunderstandings, moveChangingJobsMisunderstandingsRegion } from "./changing-jobs/moveChangingJobsMisunderstandings.config";
import { moveChangingJobsReferences } from "./changing-jobs/moveChangingJobsReferences.config";
import {
  moveChangingJobsContinueMove,
  moveChangingJobsExplorePillarCards,
  moveChangingJobsRelatedTools,
  moveChangingJobsToolsJourneySnapshot,
  moveChangingJobsToolsRegion,
} from "./changing-jobs/moveChangingJobsRelatedTools.config";
import { moveChangingJobsNlRoutes, workingInNl } from "./changing-jobs/moveChangingJobsNl.routes";
import { moveChangingJobsSections } from "./changing-jobs/moveChangingJobsSections.config";
import { moveChangingJobsStartCards, moveChangingJobsStartHereRegion } from "./changing-jobs/moveChangingJobsStartCards.config";
import { moveChangingJobsTips } from "./changing-jobs/moveChangingJobsTips.config";

export { moveChangingJobsNlRoutes } from "./changing-jobs/moveChangingJobsNl.routes";

const ROUTES = moveChangingJobsNlRoutes;
const sec = moveChangingJobsSections;

const hero = {
  eyebrow: "Netherlands · Moving",
  pageTitle: "Changing Jobs in the Netherlands",
  subtitle:
    "Plan a Dutch job switch as **one decision stack**: **notice and contract**, **stay and work authorization** (when it applies), **net pay and benefits**, and **housing, commute, and household admin** — so nothing important waits until after you resign.",
  contextChips: ["Notice", "Offer", "Permit", "Payroll", "Rent", "Family", "Timing"],
  bullets: [
    "See what can move **besides the job title** — in four quick layers",
    "Separate **before you resign** vs **before you sign** vs **before day one**",
    "Know **which questions to ask early** (HR, payroll, mobility) without guessing outcomes",
    "Open **one** next tool or guide when you are ready — the page still works standalone",
  ],
  primaryCta: { label: "Start with the essentials", href: "#start-here" },
  secondaryCta: { label: "What a switch can affect", href: "#what-job-change-affects" },
} as const;

const atAGlance = {
  sectionTitle: "At a glance",
  subtitle:
    "Orientation for anyone weighing a job switch in the Netherlands — especially when work, stay, money, and daily life are linked.",
  cells: [
    {
      title: "What this page is for",
      body: "A **structured scan**: what to check **before you resign**, **before you sign**, and **before the new role starts** — without pretending one size fits all.",
    },
    {
      title: "Best for",
      body: "People for whom a new employer is **not only payroll**: **permits, 30% context, rent, commute, childcare, or partner circumstances** may move with the job.",
    },
    {
      title: "What it covers",
      body: "**Contracts and notice**, **status and sponsorship questions** (high level), **salary and monthly reality**, **life admin** — plus links to Move guides and calculators.",
    },
    {
      title: "What it skips",
      body: "**Binding legal or immigration answers.** Use this to **frame questions and sequence next steps**; confirm outcomes with **employers, IND, Belastingdienst, or advisers**.",
    },
  ],
  note:
    "You do **not** need every deep Work-cluster page built yet: this guide still gives you a **usable sequence** and **where to click next**. When specialist pages exist, they slot into the same flow.",
} as const;

const pillarJourneyBridge = {
  id: "move-pillar-context",
  eyebrow: "Inside the Move pillar",
  title: "How this page connects to the rest of ExpatCopilot",
  intro:
    "**Working in the Netherlands** is the work-led move story. **This page** is the **switch** story: same pillar, different moment. When stay or employer processes matter, pair **Residence permits**, **Extensions & changes**, **Status changes**, and **TWV** with **Work**, **Money**, and **Housing** tools for concrete numbers.",
  links: [
    {
      href: ROUTES.hub,
      label: "Moving to the Netherlands",
      description: "Main Move hub when the wider relocation story still needs a home.",
      meta: "Move",
    },
    {
      href: workingInNl,
      label: "Working in the Netherlands",
      description: "Work-led relocation framing when the move itself is still forming.",
      meta: "Move",
    },
    {
      href: ROUTES.resigningJob,
      label: "Resigning a job in the Netherlands",
      description: "Exit timing, contract review, and life admin before you send resignation.",
      meta: "Move",
    },
    {
      href: ROUTES.layoffs,
      label: "Layoffs in the Netherlands",
      description: "When a role may end without you choosing it — employment, stay, money, and life admin in one map.",
      meta: "Move",
    },
    {
      href: ROUTES.visas,
      label: "Visas & residency orientation",
      description: "Route doorway when the basis of stay may be shifting, not only the employer name.",
      meta: "Move",
    },
    {
      href: ROUTES.residencePermits,
      label: "Residence permits",
      description: "Permit purpose, continuity, and what “residence for work” can mean over time.",
      meta: "Move",
    },
    {
      href: ROUTES.extensions,
      label: "Extensions & changes",
      description: "Renewals, employer shifts, and life changes after you are already settled.",
      meta: "Move",
    },
    {
      href: ROUTES.statusChanges,
      label: "Status changes",
      description: "When the basis of stay itself—not only the employer name—may be in motion.",
      meta: "Move",
    },
    {
      href: ROUTES.twvWorkPermit,
      label: "TWV work permit",
      description: "Employer-driven work authorization context when that layer may apply.",
      meta: "Move",
    },
    {
      href: ROUTES.jobOffer,
      label: "Job offer comparison",
      description: "Compare packages side by side when two roles are on the table.",
      meta: "Work",
    },
  ],
} as const;

const whatNextRegion = {
  eyebrow: "How to use this page",
  title: "How to use this page and what to do next",
  subtitle:
    "Leave with a **sequence**: scan → compare contracts → clarify status if needed → model money → pick **one** next action. Repeat next week with new facts.",
} as const;

const progressionSteps = [
  {
    id: "scan",
    label: "Scan the four layers",
    href: "#what-job-change-affects",
    description: "Career, stay, money, life admin — skip layers on purpose, not by accident.",
  },
  {
    id: "compare",
    label: "Compare exit and entry contracts",
    href: "#contracts-notice",
    description: "Notice, clauses, dates, and what must be in writing before you sign.",
  },
  {
    id: "clarify",
    label: "Clarify status and employer steps (if relevant)",
    href: "#permits-status",
    description: "Who acts, by when, and how start date relates to processing — while you can still negotiate timing.",
  },
  {
    id: "model",
    label: "Model net pay + rent + household",
    href: "#salary-tax-col",
    description: "One monthly picture beats two isolated calculators.",
  },
  {
    id: "life",
    label: "Plan life admin around the switch",
    href: "#practical-life",
    description: "Housing proofs, insurance, registration, family logistics — same calendar as work dates.",
  },
  {
    id: "tools",
    label: "Open one tool cluster when you are ready",
    href: "#helpful-tools",
    description: "Work, Money, Housing, or Move — match the cluster to this week’s bottleneck.",
  },
] as const;

const sectionNav = [
  { href: "#at-a-glance", label: "At a glance" },
  { href: "#start-here", label: "Start here" },
  { href: "#what-job-change-affects", label: "What a job change can affect" },
  { href: "#contracts-notice", label: "Contracts & notice" },
  { href: "#permits-status", label: "Permits & status" },
  { href: "#salary-tax-col", label: "Salary, tax & cost of living" },
  { href: "#job-switch-providers", label: "Compare providers" },
  { href: "#practical-life", label: "Practical life impact" },
  { href: "#misunderstandings", label: "Common misunderstandings" },
  { href: "#what-next", label: "What to do next" },
  { href: "#helpful-tools", label: "Helpful tools" },
  { href: "#faq", label: "FAQ" },
  { href: "#official-sources", label: "Official sources" },
] as const;

const deepLinks = [
  { href: ROUTES.hub, label: "Moving to the Netherlands (hub)", description: "Full relocation map, scenarios, and tools." },
  { href: workingInNl, label: "Working in the Netherlands", description: "Work-led move framing alongside this switch guide." },
  { href: ROUTES.resigningJob, label: "Resigning a job in the Netherlands", description: "Exit planning, contract review, and admin before you resign." },
  { href: ROUTES.layoffs, label: "Layoffs in the Netherlands", description: "Redundancy risk, employment ending, permits, and monthly-life planning." },
  { href: ROUTES.visas, label: "Visas & residency orientation", description: "Route doorway when status questions reopen." },
  { href: ROUTES.residencePermits, label: "Residence permits", description: "Permit continuity and purpose in plain language." },
  { href: ROUTES.extensions, label: "Extensions & changes", description: "Renewals and employer or life shifts after arrival." },
  { href: ROUTES.statusChanges, label: "Status changes", description: "When the basis of stay—not only the job—may be shifting." },
  { href: ROUTES.twvWorkPermit, label: "TWV work permit", description: "TWV-oriented context when that layer may apply." },
  { href: ROUTES.jobOffer, label: "Job offer comparison tool", description: "Compare two real offers on more than gross salary." },
  { href: ROUTES.contractScanner, label: "Employment contract risk scanner", description: "Structured read of clauses before you sign." },
  { href: ROUTES.salaryNet, label: "Dutch salary net calculator", description: "Rough take-home after a switch." },
  { href: ROUTES.ruling, label: "30% ruling calculator", description: "Planning check when the expat tax facility might matter." },
  { href: ROUTES.first90Days, label: "First 90 days planner", description: "Sequence admin when the switch overlaps with settling-in tasks." },
] as const;

const journeyAffects = toJourneyBlocks(sec.whatJobChangeAffects.blocks);
const gridContracts = toGridCards(sec.contracts.blocks);
const gridPermits = toGridCards(sec.permits.blocks);
const gridSalary = toGridCards(sec.salary.blocks);

export const changingJobsNlPageMeta = {
  canonicalPath: ROUTES.canonical,
  movePillarHubPath: ROUTES.hub,
  hero: { ...hero, contextChips: [...hero.contextChips], bullets: [...hero.bullets] },
  atAGlance: { ...atAGlance, cells: [...atAGlance.cells] },
  reassurance: [...moveChangingJobsTips.reassurance],
  confidenceChecklist: [...moveChangingJobsTips.confidenceChecklist],
  pillarJourneyBridge: { ...pillarJourneyBridge, links: [...pillarJourneyBridge.links] },
  startHereRegion: moveChangingJobsStartHereRegion,
  startHereCards: moveChangingJobsStartCards,
  whatAffectsSection: {
    ...sec.whatJobChangeAffects,
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
    cards: toPracticalLifeCards(sec.practicalLife.cards),
  },
  misunderstandingsRegion: moveChangingJobsMisunderstandingsRegion,
  misunderstandings: moveChangingJobsMisunderstandings,
  whatNextRegion,
  progressionSteps: [...progressionSteps],
  toolsRegion: moveChangingJobsToolsRegion,
  toolsJourneySnapshot: { ...moveChangingJobsToolsJourneySnapshot, steps: [...moveChangingJobsToolsJourneySnapshot.steps] },
  explorePillarCards: [...moveChangingJobsExplorePillarCards],
  relatedTools: moveChangingJobsRelatedTools,
  continueMove: { ...moveChangingJobsContinueMove, cards: [...moveChangingJobsContinueMove.cards] },
  sectionNav: [...sectionNav],
  deepLinks,
  faq: moveChangingJobsFaq,
  references: moveChangingJobsReferences,
} satisfies ChangingJobsNlPageMeta;

export type ChangingJobsNlPageMetaType = typeof changingJobsNlPageMeta;
