import type { MoveTwvWorkPermitPageMeta } from "./moveTwvWorkPermit.types";
import { moveTwvComparisonSections, moveTwvRouteCards } from "./moveTwvRouteCards.config";
import { moveTwvTips } from "./moveTwvTips.config";
import { moveTwvMisunderstandings, moveTwvMisunderstandingsRegion } from "./moveTwvMisunderstandings.config";
import { moveTwvFaq } from "./moveTwvFaq.config";
import { moveTwvReferences } from "./moveTwvReferences.config";
import {
  moveTwvContinueCards,
  moveTwvExploreCards,
  moveTwvRelatedTools,
  moveTwvToolsJourneySnapshot,
} from "./moveTwvRelatedTools.config";
import { moveTwvWorkPermitRoutes } from "./moveTwvWorkPermit.shared";

const ROUTES = moveTwvWorkPermitRoutes;

const moveTwvHero = {
  eyebrow: "Netherlands · Moving",
  pageTitle: "TWV Work Permit in the Netherlands",
  subtitle:
    "A practical guide to when a Dutch TWV work permit may matter, how it differs from GVVA or free-work setups, and what employees and employers should clarify before work or relocation plans start moving too fast.",
  contextChips: ["TWV", "GVVA", "Free work", "Student", "Employer action", "Timing"],
  bullets: [
    "Understand what a TWV is in **practical terms**",
    "See how it differs from **other work/residence setups**",
    "Learn when **employer action** usually matters most",
    "Get practical next steps without drowning in legal detail",
  ],
  primaryCta: { label: "Start with the basics", href: "#start-here" },
  secondaryCta: { label: "See when a TWV usually matters", href: "#when-twv-matters" },
  compareLinks: {
    visasPage: { label: "Visas & residency orientation", href: ROUTES.visas },
    permitsPage: { label: "Residence permits in the Netherlands", href: ROUTES.residencePermits },
    workingPage: { label: "Working in the Netherlands", href: ROUTES.workingPage },
  },
} as const;

const moveTwvAtAGlance = {
  sectionTitle: "At a glance",
  subtitle: "A Move-pillar orientation page for people trying to place TWV inside the bigger Dutch work-and-residence picture.",
  cells: [
    {
      title: "What this page is for",
      body: "**Practical orientation** on TWV work-permit context, so you can understand the route questions before you start treating every work case as the same permit story.",
    },
    {
      title: "Best for",
      body: "**Non-EU workers, employers, HR teams, and expats** trying to understand whether TWV is relevant, how employer action fits in, and what to clarify early.",
    },
    {
      title: "What it covers",
      body: "**What a TWV is, when it tends to matter, how it differs from GVVA or free-work situations, employer and employee roles, timing, and common misunderstandings.**",
    },
    {
      title: "What it skips",
      body: "**Final legal rulings, exact case-by-case outcomes, and full application procedure detail.** This page helps you orient and ask better questions next.",
    },
  ],
  note:
    "**Not every non-Dutch worker needs a TWV, and not every work situation uses the same permit path.** Use this page to understand the route logic first, then confirm specifics with official UWV, IND, employer, or legal guidance.",
} as const;

const moveTwvPillarJourneyBridge = {
  id: "move-pillar-context",
  eyebrow: "Inside the Move pillar",
  title: "How this page connects to the rest of ExpatCopilot",
  intro:
    "**Visas & residency** helps you compare routes. **Residence permits** explains permit context over time. **Working in the Netherlands** connects contracts, salary, payroll, and relocation setup. **This page** sits in the middle when the question is specifically about **work authorization structure**, employer action, and whether TWV is the route you should even be investigating.",
  links: [
    {
      href: ROUTES.hub,
      label: "Moving to the Netherlands",
      description: "The wider Move hub for scenarios, timelines, and planning tools.",
      meta: "Move",
    },
    {
      href: ROUTES.visas,
      label: "Visas & residency orientation",
      description: "Compare work, study, family, and self-employment routes before going deeper.",
      meta: "Move",
    },
    {
      href: ROUTES.residencePermits,
      label: "Residence permits",
      description: "Permit wording, continuity, renewal, and what residence means in practical life.",
      meta: "Move",
    },
    {
      href: ROUTES.workingPage,
      label: "Working in the Netherlands",
      description: "Use when contracts, salary, payroll, and move planning need to sit beside permit context.",
      meta: "Move",
    },
    {
      href: ROUTES.jobOffer,
      label: "Job offer comparison",
      description: "Useful when TWV questions affect whether an offer is really workable.",
      meta: "Work",
    },
    {
      href: ROUTES.first90Days,
      label: "First 90 days planner",
      description: "Useful once work authorization is clear and the move becomes operational.",
      meta: "Move",
    },
  ],
} as const;

const moveTwvStartHereRegion = {
  id: "start-here",
  eyebrow: "Start here",
  title: "What a TWV usually means",
  subtitle:
    "Treat TWV as a **specific work-authorization setup**, not as shorthand for every Dutch work permit. The useful first step is usually route clarity, not paperwork detail.",
} as const;

const moveTwvWhatNextRegion = {
  eyebrow: "How to use this page",
  title: "How to use this page and what to do next",
  subtitle:
    "The goal is simple: work out whether **TWV is even the right route to investigate**, then open the right pages and tools for route clarity, employer timing, and move planning.",
} as const;

const moveTwvProgressionSteps = [
  {
    id: "relevance",
    label: "Decide whether TWV is even the route you should investigate",
    href: "#start-here",
    description: "Use the start-here and comparison sections to avoid chasing the wrong acronym.",
  },
  {
    id: "category",
    label: "Confirm the broad work/residence category you are in",
    href: "#twv-vs-other-routes",
    description: "Route structure usually matters more than generic “work permit” language.",
  },
  {
    id: "employer",
    label: "Clarify employer role and timing",
    href: "#employer-employee-roles",
    description: "Work out who owns what before the move depends on assumptions.",
  },
  {
    id: "wording",
    label: "Check whether permit wording or route changes the answer",
    href: "#when-it-may-not",
    description: "Free-work rights or permit wording may matter more than TWV language.",
  },
  {
    id: "tools",
    label: "Open the right ExpatCopilot pages and tools next",
    href: "#helpful-tools",
    description: "Use salary, contracts, residence, and relocation tools once the route is clearer.",
  },
] as const;

const moveTwvToolsRegion = {
  id: "helpful-tools",
  title: "Helpful tools & related guides",
  subtitle:
    "Use **Move pages** for route clarity and timing, **Work tools** for offers and contracts, and **Money / Living** pages for the practical impact once work authorization becomes real.",
} as const;

const moveTwvContinueMove = {
  eyebrow: "Stay in the Move pillar",
  title: "Continue your move plan",
  subtitle: "This page works best as one stop in a wider work-and-residence sequence.",
  cards: moveTwvContinueCards,
} as const;

const moveTwvSectionNav = [
  { href: "#at-a-glance", label: "At a glance" },
  { href: "#start-here", label: "Start here" },
  { href: "#twv-vs-other-routes", label: "TWV vs other routes" },
  { href: "#when-twv-matters", label: "When TWV matters" },
  { href: "#when-it-may-not", label: "When it may not" },
  { href: "#employer-employee-roles", label: "Employer / employee roles" },
  { href: "#timing-changes", label: "Timing & changes" },
  { href: "#misunderstandings", label: "Common misunderstandings" },
  { href: "#what-next", label: "What to do next" },
  { href: "#helpful-tools", label: "Helpful tools" },
  { href: "#faq", label: "FAQ" },
  { href: "#official-sources", label: "Official sources" },
] as const;

const moveTwvDeepLinks = [
  {
    href: ROUTES.hub,
    label: "Moving to the Netherlands (hub)",
    description: "The wider relocation picture: stages, scenarios, tools, and FAQs.",
  },
  {
    href: ROUTES.workingPage,
    label: "Working in the Netherlands",
    description: "Work-led move guide for offers, salary, payroll, permits, and admin setup.",
  },
  {
    href: ROUTES.visas,
    label: "Visas & residency orientation",
    description: "Route overview before you go deep on one work-authorization structure.",
  },
  {
    href: ROUTES.residencePermits,
    label: "Residence permits in the Netherlands",
    description: "Useful when permit wording or permit category affects the work answer.",
  },
  {
    href: ROUTES.extensions,
    label: "Extensions & changes in the Netherlands",
    description: "Useful when TWV-related work timing turns into renewal or continuity questions later.",
  },
  {
    href: ROUTES.statusChanges,
    label: "Status changes in the Netherlands",
    description: "Useful when the basis of stay itself may shift after a work or life change.",
  },
  {
    href: ROUTES.jobOffer,
    label: "Job offer comparison tool",
    description: "Best next step when permit timing affects whether an offer is really workable.",
  },
  {
    href: ROUTES.salaryNet,
    label: "Dutch salary net calculator",
    description: "Translate gross salary into a more practical monthly number once the route is viable.",
  },
  {
    href: ROUTES.costOfLiving,
    label: "Cost of living calculator",
    description: "Check whether the wider move still works once rent and monthly expenses are included.",
  },
  {
    href: ROUTES.first90Days,
    label: "First 90 days planner",
    description: "Useful once work authorization becomes an actual relocation timeline.",
  },
  {
    href: ROUTES.contractScanner,
    label: "Employment contract risk scanner",
    description: "Spot contract timing and support questions before you sign.",
  },
  {
    href: ROUTES.healthcareBasics,
    label: "Healthcare basics",
    description: "Understand insurance setup once the move itself starts to feel operational.",
  },
] as const;

export const twvWorkPermitPageMeta: MoveTwvWorkPermitPageMeta = {
  canonicalPath: ROUTES.canonical,
  movePillarHubPath: ROUTES.hub,
  hero: {
    ...moveTwvHero,
    contextChips: [...moveTwvHero.contextChips],
    bullets: [...moveTwvHero.bullets],
  },
  atAGlance: {
    ...moveTwvAtAGlance,
    cells: [...moveTwvAtAGlance.cells],
  },
  reassurance: moveTwvTips.map((tip) => ({ title: tip.title, body: tip.intro })),
  pillarJourneyBridge: {
    ...moveTwvPillarJourneyBridge,
    links: [...moveTwvPillarJourneyBridge.links],
  },
  startHereRegion: moveTwvStartHereRegion,
  startHereCards: moveTwvRouteCards,
  comparisonSection: {
    ...moveTwvComparisonSections.comparison,
    cards: moveTwvComparisonSections.comparison.blocks,
  },
  mattersSection: {
    ...moveTwvComparisonSections.matters,
    cards: moveTwvComparisonSections.matters.blocks,
  },
  notApplySection: {
    ...moveTwvComparisonSections.notApply,
    cards: moveTwvComparisonSections.notApply.blocks,
  },
  rolesSection: {
    ...moveTwvComparisonSections.roles,
    cards: moveTwvComparisonSections.roles.blocks,
  },
  timingSection: {
    ...moveTwvComparisonSections.timing,
    cards: moveTwvComparisonSections.timing.blocks.map(({ internalLinks, ...card }) => ({
      ...card,
      links: internalLinks,
    })),
  },
  misunderstandingsRegion: moveTwvMisunderstandingsRegion,
  misunderstandings: moveTwvMisunderstandings.map(({ intro, ...item }) => ({
    ...item,
    body: intro,
  })),
  whatNextRegion: moveTwvWhatNextRegion,
  progressionSteps: [...moveTwvProgressionSteps],
  toolsRegion: moveTwvToolsRegion,
  toolsJourneySnapshot: {
    ...moveTwvToolsJourneySnapshot,
    steps: [...moveTwvToolsJourneySnapshot.steps],
  },
  explorePillarCards: [...moveTwvExploreCards],
  relatedTools: moveTwvRelatedTools,
  continueMove: {
    ...moveTwvContinueMove,
    cards: [...moveTwvContinueMove.cards],
  },
  sectionNav: [...moveTwvSectionNav],
  deepLinks: [...moveTwvDeepLinks],
  faq: moveTwvFaq,
  references: moveTwvReferences,
};

export type TwvWorkPermitPageMeta = typeof twvWorkPermitPageMeta;
export const moveTwvWorkPermitTips = moveTwvTips;
export const moveTwvWorkPermitStartCards = moveTwvRouteCards;
export const moveTwvWorkPermitSections = moveTwvComparisonSections;
export const moveTwvWorkPermitMisunderstandings = moveTwvMisunderstandings;
export const moveTwvWorkPermitFaq = moveTwvFaq;
export const moveTwvWorkPermitReferences = moveTwvReferences;
export const moveTwvWorkPermitRelatedTools = moveTwvRelatedTools;
export { moveTwvComparisonSections, moveTwvFaq, moveTwvMisunderstandings, moveTwvReferences, moveTwvRelatedTools, moveTwvRouteCards, moveTwvTips, moveTwvWorkPermitRoutes };
