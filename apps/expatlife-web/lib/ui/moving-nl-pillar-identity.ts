/**
 * Moving NL hub — ExpatOS Bold Tech + Guidance.
 * Cobalt + ink surfaces, cyan guidance accents, shadow-first (no hairline borders as default).
 *
 * For site-wide naming (canvas, hero shell), import `@/lib/ui/site-shell-identity` instead.
 */

/** Signature gradient — primary → cyan (repeating brand language) */
export const movingNlSignatureGradientClass = "bg-gradient-to-r from-copilot-primary via-blue-500 to-copilot-accent";

/** L0 — page canvas */
export const movingNlPageCanvasClass =
  "min-h-screen bg-copilot-bg-light [background-image:linear-gradient(180deg,hsl(210_40%_99%)_0%,hsl(214_32%_97%)_100%)]";

/** L1 — hero shell: light framed surface (title + media + share) for moving pillar */
export const movingNlHeroShellClass =
  "relative overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-white via-copilot-bg-soft/70 to-copilot-bg-light p-0 shadow-expatos-md ring-1 ring-slate-900/[0.04] sm:rounded-2xl";

/** Hero inner padding (applied on a child so media can bleed to edges) */
export const movingNlHeroInnerPadClass = "px-5 pb-6 pt-7 sm:px-8 sm:pb-7 sm:pt-9 md:px-10 md:pb-8 md:pt-10";

export const movingNlHeroTopAccentClass =
  "pointer-events-none absolute inset-x-0 top-0 z-[1] h-1 bg-gradient-to-r from-copilot-primary via-blue-500 to-copilot-accent";

export const movingNlHeroGlowPrimaryClass =
  "pointer-events-none absolute -right-24 -top-32 h-72 w-72 rounded-full bg-copilot-primary/25 blur-3xl sm:h-96 sm:w-96";

export const movingNlHeroGlowSecondaryClass =
  "pointer-events-none absolute -bottom-28 -left-16 h-64 w-64 rounded-full bg-copilot-accent/20 blur-3xl";

/** At a glance — quiet tinted band */
export const movingNlShellAtGlanceClass =
  "rounded-2xl border-0 bg-copilot-bg-soft/80 px-4 py-5 shadow-expatos-sm sm:px-6 sm:py-6";

/** Choose your path — decision engine surface */
export const movingNlShellPathwaysClass =
  "relative overflow-hidden rounded-2xl border-0 bg-gradient-to-b from-copilot-bg-soft via-white to-copilot-bg-light px-4 py-5 shadow-expatos-md sm:px-6 sm:py-6";

export const movingNlPathwaysBackdropClass =
  "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(37,99,235,0.12),transparent_55%)]";

/** Helpful tools — utility bay */
export const movingNlShellToolsClass =
  "rounded-2xl border-0 bg-white/90 px-4 py-5 shadow-expatos-sm ring-1 ring-copilot-primary/[0.06] sm:px-6 sm:py-6";

export const movingNlShellStagesEssentialsClass = "flex flex-col gap-7 py-1 sm:gap-8 sm:py-2";

/** Practical essentials panel — light gradient stack under the dark stages band */
export const movingNlEssentialsSurfaceClass =
  "rounded-2xl bg-gradient-to-b from-white via-copilot-bg-light to-copilot-bg-soft/50 p-5 shadow-expatos-sm ring-1 ring-copilot-primary/[0.06] sm:p-7";

/**
 * Dark “3 stages” system band — ink gradient (contrast vs light hero shell above), plus page-level glow/wash layers.
 */
export const movingNlDarkStagesBandClass =
  "relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-copilot-bg-dark via-[#111c33] to-copilot-surface-dark p-8 shadow-expatos-xl ring-1 ring-black/20 sm:p-10 md:px-11 md:py-10";

/** Bottom-weighted vignette (reads as depth, like cinematic hero) */
export const movingNlDarkStagesVignetteClass =
  "pointer-events-none absolute inset-0 z-0 bg-gradient-to-t from-black/35 via-black/[0.07] to-transparent";

/** Subtle cobalt → cyan wash (Bold Tech grading, matches hero glow language) */
export const movingNlDarkStagesAtmosphereClass =
  "pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-copilot-primary/18 via-transparent to-copilot-accent/12";

/** @deprecated Prefer hero glows + atmosphere on the band; kept for callers that still import it */
export const movingNlDarkStagesSheenClass =
  "pointer-events-none absolute -right-20 top-1/2 z-0 h-64 w-64 -translate-y-1/2 rounded-full bg-copilot-accent/15 blur-3xl";

/** Next steps — momentum */
export const movingNlShellNextStepsClass =
  "relative overflow-hidden rounded-2xl border-0 bg-gradient-to-br from-copilot-bg-soft via-white to-blue-50/90 px-4 py-5 shadow-expatos-md sm:px-6 sm:py-6";

export const movingNlNextStepsAccentClass =
  "pointer-events-none absolute inset-x-0 top-0 z-[1] h-1 bg-gradient-to-r from-copilot-primary via-copilot-accent to-blue-400";

/** FAQ — calmer product support */
export const movingNlShellFaqClass =
  "rounded-2xl border-0 bg-slate-50/90 px-4 py-5 shadow-inner sm:px-6 sm:py-6";

/**
 * Inner card for FAQ accordions and post-FAQ monetization shortlists — keep in sync with `FAQBlock`.
 */
export const movingNlFaqCardInnerClass =
  "rounded-2xl bg-copilot-surface p-4 shadow-expatos-md ring-1 ring-slate-900/[0.05] sm:p-5";

/**
 * JSON Move guide — main column section shell (matches ExpatCopilot pillar body rhythm).
 * Use with `movingNlGuideSectionTopAccentClass` for the signature gradient cap.
 */
export const movingNlGuideSectionShellClass =
  "rounded-2xl border-0 bg-copilot-surface p-5 shadow-expatos-md ring-1 ring-copilot-primary/[0.08] sm:p-6 md:p-7";

export const movingNlGuideSectionTopAccentClass =
  "pointer-events-none absolute inset-x-0 top-0 z-[1] h-1 bg-gradient-to-r from-copilot-primary via-blue-500 to-copilot-accent";

/** Typography */
export const movingNlSectionH2Class =
  "scroll-mt-24 text-2xl font-bold tracking-tight text-copilot-text-primary sm:text-3xl";

export const movingNlSectionH2OnDarkClass =
  "scroll-mt-24 text-2xl font-bold tracking-tight text-white sm:text-3xl";

/** Slightly larger system heading for the 3-stages signature band */
export const movingNlSectionH2StagesSignatureClass =
  "scroll-mt-24 text-2xl font-bold tracking-tight text-white drop-shadow-sm sm:text-3xl md:text-[2rem] md:leading-[1.15]";

export const movingNlSectionSubtitleClass =
  "mt-2.5 max-w-3xl text-base leading-relaxed text-copilot-text-secondary sm:mt-3 sm:text-[1.0625rem]";

export const movingNlSectionSubtitleOnDarkClass =
  "mt-3 max-w-3xl text-base font-normal leading-relaxed text-slate-100 sm:mt-4 sm:text-[1.0625rem] sm:leading-relaxed";

/** Cards — shadow-first */
export const movingNlCardShadowClass = "border-0 shadow-expatos-md";

export const movingNlCardShadowHoverClass =
  "transition-[box-shadow,transform] duration-200 ease-out hover:shadow-expatos-hover motion-reduce:transition-none motion-reduce:hover:shadow-expatos-md";

export const movingNlCardMicroLiftClass =
  "transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0";

/** Primary CTAs — white on cobalt */
export const movingNlPathPrimaryCtaClass =
  "inline-flex w-full min-h-[48px] items-center justify-center rounded-xl bg-copilot-primary px-4 py-3 text-center text-sm font-semibold text-white shadow-expatos-md transition-all duration-200 visited:text-white hover:bg-copilot-primary-strong hover:text-white hover:shadow-expatos-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copilot-accent/80 focus-visible:ring-offset-2 focus-visible:ring-offset-copilot-bg-light focus-visible:text-white active:scale-[0.99] active:text-white motion-reduce:active:scale-100";

export const movingNlToolInlineCtaClass =
  "inline-flex shrink-0 items-center justify-center rounded-xl bg-copilot-primary px-4 py-2.5 text-sm font-semibold text-white shadow-expatos-sm transition-all duration-200 visited:text-white hover:bg-copilot-primary-strong hover:text-white hover:shadow-expatos-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copilot-accent/70 focus-visible:ring-offset-2 focus-visible:text-white active:text-white";

/** JSON guide right rail — pillar card surfaces + gradient cap */
export const movingNlSidebarModuleClass =
  "relative overflow-hidden rounded-2xl border-0 bg-copilot-surface p-5 shadow-expatos-md ring-1 ring-copilot-primary/[0.07] sm:p-6";

export const movingNlSidebarModuleAccentClass = "pointer-events-none absolute inset-x-0 top-0 z-[1] h-1";

export const movingNlSidebarModuleTitleClass =
  "text-[10px] font-bold uppercase tracking-[0.16em] text-copilot-text-muted";

export const movingNlSidebarLinkRowClass =
  "flex items-center justify-between gap-2 rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/60 px-3 py-2.5 text-sm font-semibold text-copilot-text-primary shadow-expatos-sm transition hover:border-copilot-primary/18 hover:bg-copilot-bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copilot-accent/40 focus-visible:ring-offset-2";

export const movingNlSidebarLinkChevronClass = "shrink-0 text-copilot-text-muted";

/** Secondary row (outline) for sidebar CTAs */
export const movingNlSidebarSecondaryRowClass =
  "inline-flex min-h-[44px] w-full items-center justify-center rounded-xl border border-slate-900/12 bg-copilot-surface px-5 py-2.5 text-sm font-semibold text-copilot-text-primary shadow-expatos-sm ring-1 ring-copilot-primary/10 transition hover:bg-copilot-bg-soft sm:w-auto";

/** @deprecated Prefer movingNlCardMicroLiftClass */
export const movingNlPathCardMotionClass = movingNlCardMicroLiftClass;

/** @deprecated */
export const movingNlPrimaryCtaBoostClass = "shadow-expatos-md hover:shadow-expatos-hover transition-shadow duration-200";

/** @deprecated */
export const movingNlCardElevatedShadowClass = movingNlCardShadowClass;
export const movingNlCardScenarioShadowClass = movingNlCardShadowClass;
export const movingNlCardToolShadowClass = movingNlCardShadowClass;
export const movingNlCardStageShadowClass = movingNlCardShadowClass;
export const movingNlCardEssentialShadowClass = movingNlCardShadowClass;
