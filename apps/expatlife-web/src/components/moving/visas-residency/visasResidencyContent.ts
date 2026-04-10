/**
 * Back-compat re-exports for metadata, SEO, and any legacy imports.
 * Source of truth: `./config/moveVisaResidency.config.ts`
 */
import {
  moveVisaResidencyFaq,
  moveVisaResidencyMisunderstandings,
  moveVisaResidencyPageMeta,
  moveVisaResidencyRelatedTools,
  moveVisaResidencyRouteCards,
  moveVisaResidencySections,
  moveVisaResidencyTips,
} from "./config";
import type {
  MoveVisaResidencySection,
  MoveVisaResidencySectionAfterArrival,
  MoveVisaResidencySectionStudyFamily,
  MoveVisaResidencySectionWorkRoutes,
} from "./config/moveVisaResidency.types";

function sectionWorkRoutes(s: MoveVisaResidencySection): s is MoveVisaResidencySectionWorkRoutes {
  return s.kind === "workRoutes";
}
function sectionStudyFamily(s: MoveVisaResidencySection): s is MoveVisaResidencySectionStudyFamily {
  return s.kind === "studyFamily";
}
function sectionAfterArrival(s: MoveVisaResidencySection): s is MoveVisaResidencySectionAfterArrival {
  return s.kind === "afterArrival";
}

const meta = moveVisaResidencyPageMeta;
const tools = moveVisaResidencyRelatedTools;
const reassurance = moveVisaResidencyTips[0];

export const VISAS_RESIDENCY_CANONICAL = meta.canonicalPath;
export const MOVE_PILLAR_HUB = meta.movePillarHubPath;
export const PAGE_HERO_SUBTITLE = meta.hero.subtitle;
export const HERO_BULLETS = meta.hero.bullets;

export const SECTION_NAV_ITEMS = meta.sectionNav;
export const SECTION_NAV_DEEP_LINKS = meta.deepLinks;

export const HELPFUL_TOOLS_JOURNEY_INTRO = tools.journeyIntro;
export const HELPFUL_TOOLS_SECTIONS = tools.sections;

export const AT_GLANCE_SECTION_SUBTITLE = meta.atAGlance.subtitle;
export const AT_GLANCE_GRID = meta.atAGlance.cells;
export const AT_GLANCE_NOTE = meta.atAGlance.note;

export const REASSURANCE_CALLOUT = {
  title: reassurance.title,
  body: reassurance.body,
};

export const ROUTE_DOORWAYS = moveVisaResidencyRouteCards.map((c) => ({
  id: c.id,
  title: c.title,
  description: c.intro,
  bestFor: c.bestFor,
  chips: [...c.chips],
  cta: c.nextStep.ctaLabel,
  href: c.nextStep.href,
}));

/** Mirrors doorway cards (replaces legacy “main routes” section block). */
export const MAIN_ROUTES_SECTION_INTRO =
  "Pick the situation that sounds like you in the route cards, then open the matching guides—work, study, family, self-employed, or changing your stay.";

export const MAIN_ROUTE_CATEGORIES = moveVisaResidencyRouteCards.map((c) => ({
  title: c.title,
  chip: c.chips[0] ?? "Route",
  summary: c.intro,
  bestFor: c.bestFor,
  next: [{ label: c.nextStep.ctaLabel, href: c.nextStep.href }],
}));

export const WORK_ROUTES_BULLETS = moveVisaResidencySections.find(sectionWorkRoutes)?.keyPoints ?? [];

const studyFamilyBlock = moveVisaResidencySections.find(sectionStudyFamily);
export const STUDY_FAMILY_SUBSECTIONS =
  studyFamilyBlock?.blocks.map((b) => ({
    id: b.id,
    badge: b.chip,
    title: b.title,
    body: b.intro,
    linkLabel: b.nextStep.ctaLabel,
    href: b.nextStep.href,
  })) ?? [];

const after = moveVisaResidencySections.find(sectionAfterArrival);
export const AFTER_ARRIVAL_LEAD = after?.intro ?? "";
export const AFTER_ARRIVAL_PHASES = after?.phases ?? [];
export const AFTER_ARRIVAL_MORE = after?.moreNote ?? "";

export const MISUNDERSTANDINGS = moveVisaResidencyMisunderstandings.map(({ title, body }) => ({ title, body }));

export const FAQ_ITEMS = [...moveVisaResidencyFaq];

/** @deprecated Use HELPFUL_TOOLS_SECTIONS */
export const TOOL_GRID = HELPFUL_TOOLS_SECTIONS.flatMap((s) => s.items);
