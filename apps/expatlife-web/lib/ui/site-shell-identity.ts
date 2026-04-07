/**
 * ExpatOS site shell — canonical visual language (aligned with Moving NL pillar).
 *
 * Use these tokens for page canvas, framed heroes, and hub section spacing so all routes
 * match the “card + cobalt accent + soft canvas” system. Low-level moving-NL names remain
 * in `moving-nl-pillar-identity.ts`; this module is the stable import surface for the rest
 * of the app.
 */

export {
  movingNlPageCanvasClass as sitePageCanvasClass,
  movingNlHeroShellClass as siteHeroFramedShellClass,
  movingNlHeroTopAccentClass as siteHeroTopAccentClass,
  movingNlHeroInnerPadClass as siteHeroInnerPadClass,
  movingNlHeroGlowPrimaryClass as siteHeroGlowPrimaryClass,
  movingNlHeroGlowSecondaryClass as siteHeroGlowSecondaryClass,
} from "./moving-nl-pillar-identity";

/** Outer hub / marketing hero band: vertical rhythm only; page background comes from `sitePageCanvasClass` on `<main>`. */
/** Vertical band under global header — keep tight so hero + `PageHero` don’t float with excess dead air */
export const siteHubHeroSectionClass =
  "relative overflow-hidden py-5 sm:py-7 md:py-9";

/**
 * `PillarGuideHeroRegion` — matches city hub hero band (`CityHubTemplate`); uniform vertical rhythm
 * around the framed shell.
 */
export const sitePillarGuideHeroBandClass =
  "relative overflow-hidden py-4 sm:py-5 md:py-6";

/**
 * First row inside framed hero below the cobalt accent (city breadcrumb band / moving eyebrow band).
 * Same horizontal inset as `sitePillarFramedHeroGutterXClass`.
 */
export const sitePillarFramedHeroTopBandClass =
  "px-5 pt-7 sm:px-8 sm:pt-9 md:px-10 md:pt-10";

/** Horizontal inset for title block, share row, and text above full-bleed hero media. */
export const sitePillarFramedHeroGutterXClass = "px-5 sm:px-8 md:px-10";

/** Vertical padding for `GuidePageTemplate` / pillar `wrapContent` + hub shells (one rhythm site-wide) */
export const siteGuideColumnPadYClass = "py-4 sm:py-6 md:py-7";
