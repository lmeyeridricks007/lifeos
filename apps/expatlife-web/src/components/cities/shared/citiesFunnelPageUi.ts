import { cn } from "@/lib/cn";

/** Scroll offset for in-page anchors (city funnel pillar guides). */
export const CITIES_FUNNEL_SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";

/**
 * `GuidePageTemplate` `mainStackClassName` — aligned with Money · Banking hub guides
 * (vertical band under hero + section spacing).
 */
export const CITIES_FUNNEL_GUIDE_PAGE_MAIN_STACK_CLASS =
  "mt-2 space-y-4 py-6 sm:mt-3 sm:space-y-5 md:space-y-6 md:py-8";

/** `PillarJourneyStack` in key sections (with `MoveGuideSectionPanel` wrapper). */
export const CITIES_FUNNEL_KEY_SECTIONS_JOURNEY_STACK_CLASS =
  "min-w-0 max-w-full gap-6 overflow-x-hidden sm:gap-8 md:gap-9";

/** Shell for {@link MoveGuideSectionPanel} around city funnel journey stacks. */
export const CITIES_FUNNEL_MOVE_GUIDE_SECTION_PANEL_CLASS = "min-w-0 max-w-full";

/**
 * Top margin before non-framed journey slices (dark `PillarDarkStagesBand`, related guides strip).
 * Major copy sections use {@link SectionBlock} `funnelFramed` instead of hairline dividers.
 */
export const CITIES_FUNNEL_SECTION_MAJOR_BREAK = "mt-8 sm:mt-10";

/**
 * Soft copilot panel — use instead of `shadow-expatos-lg` / `shadow-expatos-md` on city funnel pages
 * so elevation does not bleed into the next section.
 */
export const CITIES_FUNNEL_SOFT_COPILOT_SURFACE =
  "relative overflow-hidden rounded-2xl border border-copilot-primary/[0.1] bg-copilot-surface shadow-sm ring-1 ring-copilot-primary/[0.07]";

/** “Planning toolkit” strip above shortlist grids (shared across funnel guides). */
export const CITIES_FUNNEL_PLANNING_TOOLKIT_SHELL = cn(
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
  "mt-6 p-4 sm:p-5"
);

/**
 * Before “Helpful tools” blocks: divider + modest margin only (`pt-0`).
 * Pair the inner `SectionBlock` with `compact` and a small `className` `pt-*`
 * so padding does not stack with `CITIES_FUNNEL_SECTION_MAJOR_BREAK`.
 */
export const CITIES_FUNNEL_SECTION_HELPFUL_TOOLS_BREAK =
  "border-t border-border/45 pt-0 mt-4 sm:mt-5";

/**
 * Before affiliate / “Recommended services” on city funnel guides: thin rule + small
 * margin only — inner `SectionBlock compact` already supplies top padding; avoid
 * stacking with `SECTION_MAJOR_BREAK` (which would double the gap).
 */
export const CITIES_FUNNEL_SECTION_RECOMMENDED_SERVICES_BREAK =
  "border-t border-border/45 pt-0 mt-4 sm:mt-5";

/**
 * Tighter break before the “Start here” lens grid (after Choose your city lens).
 * Avoids stacking `SECTION_MAJOR_BREAK` + extra margins + default SectionBlock top pad.
 */
export const CITIES_FUNNEL_CHOOSE_TO_START_BREAK =
  "border-t border-border/40 pt-5 mt-5 sm:pt-6 sm:mt-6";

/** Context chips under the hero title. */
export const CITIES_FUNNEL_INFO_CHIP =
  "inline-flex rounded-full border border-copilot-primary/15 bg-copilot-bg-soft/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-copilot-primary";

/** Compact tags on cards and scenario rows. */
export const CITIES_FUNNEL_SCENARIO_CHIP =
  "inline-flex rounded-full border border-border bg-surface-muted/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-foreground-muted";

/**
 * “By scenario” city pick tiles — each scenario lists three cities; one row from `md`
 * for side-by-side comparison (avoids a 2+1 orphan column on tablet/desktop).
 */
export const CITIES_FUNNEL_SCENARIO_PICKS_GRID =
  "mt-5 grid grid-cols-1 gap-4 md:grid-cols-3 md:items-stretch";

/** Shortlist city-card tier label — sentence case, readable (not `SCENARIO_CHIP` uppercase). */
export const CITIES_FUNNEL_SHORTLIST_TIER_PILL_PRIMARY =
  "inline-flex max-w-full items-center rounded-full border border-copilot-primary/20 bg-copilot-bg-soft/80 px-2.5 py-1 text-xs font-medium leading-snug text-copilot-text-primary";

export const CITIES_FUNNEL_SHORTLIST_TIER_PILL_SECONDARY =
  "inline-flex max-w-full items-center rounded-full border border-slate-200/90 bg-white/95 px-2.5 py-1 text-xs font-medium leading-snug text-copilot-text-secondary shadow-sm ring-1 ring-slate-900/[0.04]";

export const CITIES_FUNNEL_SHORTLIST_TIER_PILL_CAUTION =
  "inline-flex max-w-full items-center rounded-full border border-amber-200/85 bg-amber-50/90 px-2.5 py-1 text-xs font-medium leading-snug text-amber-950";

/** Insight block label on shortlist city cards (best for / watch-outs / next step). */
export const CITIES_FUNNEL_SHORTLIST_INSIGHT_LABEL =
  "text-xs font-semibold tracking-tight text-copilot-text-secondary";

/**
 * Trust pills under the hero subtitle — one style for all city funnel guides
 * (families, professionals, cheapest) so light/dark and borders stay consistent.
 */
export const CITIES_FUNNEL_TRUST_PILL =
  "inline-flex items-center rounded-full border border-slate-200/90 bg-white/95 px-3 py-1 text-xs font-semibold text-copilot-text-primary shadow-sm ring-1 ring-slate-900/[0.04]";

/**
 * Shared frame for raster heroes beside hero copy (cheapest / families / intl professionals).
 */
export function citiesFunnelHeroFigureClassName(className?: string) {
  return cn(
    "relative isolate m-0 w-full min-w-0 overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-100 shadow-card ring-1 ring-slate-900/[0.04]",
    "aspect-[16/11] max-h-[min(200px,42vh)] sm:max-h-[min(280px,50vh)] md:max-h-none md:aspect-[5/4] md:min-h-[220px] lg:min-h-[240px]",
    className
  );
}
