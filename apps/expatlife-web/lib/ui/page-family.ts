import {
  activeBrightnessPress,
  transitionInteractive,
  transitionSurface,
} from "./interaction";

/**
 * Shared surfaces and CTAs for page-family templates (guides, tools, hubs).
 * Keeps composition contracts unchanged — only visual consistency.
 */
/** @deprecated Import `siteHubHeroSectionClass` from `@/lib/ui/site-shell-identity`; kept for older imports. */
export { siteHubHeroSectionClass as guideHeroShellClass } from "./site-shell-identity";

export const guideCtaBandClass =
  "rounded-card border border-brand/25 bg-gradient-to-br from-brand-muted/45 to-surface-raised p-6 shadow-card ring-1 ring-border/25 sm:p-8";

export const guidePrimaryCtaClass = [
  transitionInteractive,
  activeBrightnessPress,
  "inline-flex min-h-[44px] items-center justify-center rounded-xl border border-brand-strong/20 bg-brand px-6 py-3 text-base font-semibold text-brand-foreground shadow-card ease-out hover:bg-brand-strong hover:shadow-card-hover",
].join(" ");

export const guideSecondaryCtaClass = [
  transitionSurface,
  "inline-flex min-h-[44px] items-center justify-center rounded-xl border border-border bg-surface-raised px-5 py-2.5 text-sm font-medium text-foreground shadow-card ease-out hover:border-border-strong hover:bg-surface-muted active:bg-surface-subtle motion-reduce:active:bg-surface-raised",
].join(" ");

export const guideSectionH2Class =
  "scroll-mt-24 text-2xl font-semibold tracking-tight text-foreground";

export const guideStageCardClass = [
  transitionSurface,
  "rounded-card border border-border bg-surface-raised p-5 shadow-card ring-1 ring-border/15 ease-out hover:border-border-strong/90 hover:shadow-card-hover motion-reduce:hover:shadow-card motion-reduce:hover:border-border",
].join(" ");

export const guideFaqSurfaceClass =
  "rounded-card border border-border bg-surface-muted/25 p-5 shadow-none ring-1 ring-border/15 md:p-6";

export const toolMainSurfaceClass =
  "rounded-card border border-border bg-surface-muted/40 p-5 shadow-card ring-1 ring-border/10 md:p-6";

export const toolIntroSurfaceClass =
  "rounded-card border border-border/80 bg-gradient-to-br from-surface-muted/90 to-brand-muted/25 p-5 shadow-card ring-1 ring-border/15 md:p-6";

export const hubOrientPanelClass =
  "rounded-card border border-border bg-surface-muted/50 p-5 text-sm leading-relaxed text-foreground-muted shadow-none ring-1 ring-border/15";

export const hubPathwayCardClass = [
  transitionInteractive,
  "group block rounded-card border border-border bg-surface-raised p-5 shadow-card ease-out hover:border-border-strong hover:shadow-card-hover motion-reduce:hover:shadow-card active:brightness-[0.99] motion-reduce:active:brightness-100",
].join(" ");

export const hubToolStatusLiveClass = "bg-success-muted text-success border border-success-border/60";
export const hubToolStatusSoonClass = "bg-warning-muted text-warning border border-warning-border/70";
