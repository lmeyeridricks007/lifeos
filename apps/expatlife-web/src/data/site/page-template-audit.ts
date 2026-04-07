/**
 * Route → page archetype audit for ExpatOS template rollout.
 *
 * - `guideShell` = `GuidePageTemplate` from `@/components/page/page-templates` (layout composer + page-family `guide` contract).
 * - `guideJson` = `GuidePageTemplate` from `@/src/components/guides/GuidePageTemplate` (data-driven editorial guides).
 * - `clusterHub` = `ClusterHubPageTemplate` (hub contract regions).
 * - `toolLanding` = `ToolLandingPageTemplate` + tool UI templates under `src/components/tools`.
 * - `articleSupport` = `ArticleSupportPageTemplate` or article-shaped layouts.
 * - `custom` = portal, city hub, catch-all, or legal — keep bespoke until a template fits.
 */

export type TemplateArchetype =
  | "clusterHub"
  | "guideShell"
  | "guideJson"
  | "toolLanding"
  | "articleSupport"
  | "custom";

/** Routes migrated in batch 1 (this pass). */
export const MIGRATED_BATCH_1_ROUTES = [
  "/netherlands/moving-to-the-netherlands",
  "/netherlands/tools",
  "/netherlands/moving/tools",
  "/netherlands/work/tools",
  "/netherlands/housing/tools",
  "/netherlands/money/tools",
  "/netherlands/health/tools",
  "/netherlands/integration/tools",
  "/netherlands/transport/tools",
  "/netherlands/leaving/tools",
  "/netherlands/family/tools",
  "/netherlands/citizenship/tools",
  "/netherlands/tools/advanced",
] as const;

/**
 * Batch 2 — interactive tool landings + placeholders + country tool landings.
 * - All pages using `ToolPageTemplate` now get `PillarMainStack` rhythm under the hero.
 * - `ToolPlaceholderTemplate` + `ToolCountryLandingTemplate` compose `ToolLandingPageTemplate`.
 */
export const MIGRATED_BATCH_2_ROUTES = [
  "/netherlands/moving/tools/arrival-planner",
  "/netherlands/moving/tools/moving-checklist",
  "/netherlands/moving/tools/document-readiness",
  "/netherlands/moving/tools/first-90-days",
  "/netherlands/moving/tools/relocation-cost-estimator",
  "/netherlands/visa-checker",
  "/netherlands/document-readiness-checker",
  "/netherlands/visa-timeline-estimator",
  "/netherlands/visa-cost-calculator",
  "/netherlands/visa-application-plan",
  "/netherlands/visa/compare-visas",
  "/netherlands/moving/tools/arrival-planner/from/[country]",
  "/netherlands/moving/tools/moving-checklist/from/[country]",
  "/netherlands/moving/tools/document-readiness/from/[country]",
  "/netherlands/moving/tools/first-90-days/from/[country]",
] as const;

/** Category tool placeholder routes (`[slug]`) also use migrated `ToolPlaceholderTemplate` (noindex). */
export const MIGRATED_BATCH_2_PLACEHOLDER_PATTERN =
  "netherlands/{moving,money,work,housing,health,integration,transport,leaving,family,citizenship}/tools/[slug]";

/**
 * Batch 3 — supporting / trust / JSON editorial guides.
 * - `TrustPageLayout` composes `ArticleSupportPageTemplate` (trust + legal routes).
 * - `GuidePageTemplate` (JSON) wraps at-a-glance + main column grid in `PillarMainStack` for clearer rhythm.
 */
export const MIGRATED_BATCH_3_TRUST_ROUTES = [
  "/affiliate-disclosure",
  "/contact",
  "/cookies",
  "/disclaimer",
  "/editorial-policy",
  "/how-this-site-works",
  "/how-we-rank-services",
  "/methodology",
  "/privacy",
  "/sources",
  "/sitemap",
  "/terms",
] as const;

/**
 * Batch 4 — remaining trust URL + hub rhythm on NL directory pages.
 * - `/about/affiliate-disclosure` → `TrustPageLayout` / `ArticleSupportPageTemplate`.
 * - `/netherlands/cities`, `/netherlands/services` → `PillarMainStack` under `HubHero` for consistent hero-to-body spacing.
 */
export const MIGRATED_BATCH_4_ROUTES = ["/about/affiliate-disclosure", "/netherlands/cities", "/netherlands/services"] as const;

/**
 * Batch 5 — city hub + NL service category body rhythm.
 * - `CityHubTemplate`: `GuidePageTemplate` + pillar regions (every `/netherlands/{city}/` hub in `NETHERLANDS_CITY_HUB_PAGES`).
 * - Service category pages: `PillarMainStack` after the hero `<section>`, before the main `Section`.
 */
export const MIGRATED_BATCH_5_SERVICE_ROUTES = [
  "/netherlands/services/banks",
  "/netherlands/services/health-insurance",
  "/netherlands/services/immigration-lawyers",
  "/netherlands/services/mobile-connectivity",
  "/netherlands/services/highly-skilled-migrant-sponsors",
  "/netherlands/services/housing-platforms",
  "/netherlands/services/relocation-agencies",
  "/netherlands/services/relocation-services",
  "/netherlands/services/startup-visa-advisors",
  "/netherlands/services/rental-agencies",
  "/netherlands/services/visa-consultants",
] as const;

export const MIGRATED_BATCH_5_CITY_HUB_NOTE =
  "All city hubs in `NETHERLANDS_CITY_HUB_PAGES` render `CityHubTemplate` only; shared subcomponents (TOC grid, comparison table, related guides grid, hero) apply site-wide to those routes.";

/**
 * Batch 6 — lightweight category stub, about body, origin-country hub index.
 * - `/netherlands/services/[slug]` (registry stub): `PillarMainStack` for title block vs back link (room to grow).
 * - `/about`: `PillarMainStack` under marketing hero, around main `Section` (same rhythm as service hubs).
 * - `/netherlands/moving-to-netherlands-from`: stack after `EditorialContentHeader` + intro with `mt-8` + `space-y-0` so default stack gaps do not alter existing section spacing; first tools band `mt-0`.
 */
export const MIGRATED_BATCH_6_ROUTES = [
  "/about",
  "/netherlands/moving-to-netherlands-from",
] as const;

export const MIGRATED_BATCH_6_SERVICES_SLUG_PATTERN =
  "/netherlands/services/[slug] (category registry pages; not the 11 long-form category URLs)";

/**
 * Batch 7 — NL portal + Contentlayer MDX moving guides.
 * - `/netherlands/`: `PortalNetherlandsTemplate` wraps stacked `Section`s after the gradient hero in `PillarMainStack` (`mt-6` / `sm:mt-7`, `space-y-0` so section padding is unchanged).
 * - `/netherlands/moving/guides/[slug]` (MDX-only path): `PillarMainStack` after `EditorialContentHeader` with `mt-10` / `md:mt-12` matching prior `ArticleBody` offsets.
 */
export const MIGRATED_BATCH_7_ROUTES = ["/netherlands"] as const;

export const MIGRATED_BATCH_7_GUIDE_MDX_NOTE =
  "Contentlayer guides at `/netherlands/moving/guides/[slug]` that render `renderContentlayerMdxArticle` use the new stack; JSON guides still use `GuidePageTemplate` (already batched).";

/**
 * Batch 8 — search + scenario guide shell (future / optional routes).
 * - `/search`: `PillarMainStack` under the `Section` heading uses **padding-top** (`pt-6` / `sm:pt-7` / `md:pt-8`) so spacing is reliable (no margin collapse with the heading block).
 * - `ScenarioGuideTemplate`: `PillarMainStack` after `PageHeader` + intro; first block uses `pt-0` with `mt-8` on the stack to match the prior quick-answer offset.
 */
export const MIGRATED_BATCH_8_ROUTES = ["/search"] as const;

export const MIGRATED_BATCH_8_SCENARIO_GUIDE_NOTE =
  "Routes that render `ScenarioGuideTemplate` inherit the stack when wired up (template lives under `src/components/relocation`).";

/**
 * Batch 9 — coming-soon catch-all + unused country moving shell.
 * - `ComingSoonPage`: padding-top stack under `Section` title (same pattern as `/search`); used by `/netherlands/[...slug]` for non-guide segments.
 * - `CountryMovingPageTemplate`: `PillarMainStack` after `CountryHero` (`mt-6` / `sm:mt-7`, `space-y-0`) for hub-aligned hero-to-body rhythm when this template is wired to a route.
 */
export const MIGRATED_BATCH_9_COMING_SOON_NOTE =
  "`ComingSoonPage` stack applies to planned mega-menu paths rendered via `/netherlands/[...slug]` (not single-segment JSON guides).";

export const MIGRATED_BATCH_9_COUNTRY_MOVING_NOTE =
  "`CountryMovingPageTemplate` in `src/components/country-pages` is not mounted from `app` today; stack is ready for a future origin-country route.";

/**
 * Batch 10 — dev preview + legacy coming-soon variant.
 * - `/dev/phase2-components`: scenario blocks use `PillarMainStack` with `space-y-16` / `md:space-y-20` (replaces the prior flex column gap).
 * - `components/content/coming-soon-page.tsx`: same padding-top stack under `Section` as `/search` / `ComingSoonPage` (not referenced from `app` today).
 */
export const MIGRATED_BATCH_10_ROUTES = ["/dev/phase2-components"] as const;

export const MIGRATED_BATCH_10_LEGACY_COMING_SOON_NOTE =
  "Alternate `ComingSoonPage` in `components/content/coming-soon-page.tsx` is aligned with the stack pattern for consistency if imported later.";

/** All JSON-driven guides using `GuideBySlugPage` or `GuidePageTemplate` from `src/components/guides`. */
export const MIGRATED_BATCH_3_GUIDE_JSON_NOTE =
  "Every route that renders `GuidePageTemplate` (guides) or `GuideBySlugPage` inherits the new at-a-glance ↔ main column stack spacing.";

/**
 * High-level classification (not exhaustive; extend as batches land).
 * Prefer matching the longest specific path when adding entries.
 */
export const ROUTE_TEMPLATE_HINTS: Partial<Record<string, TemplateArchetype>> = {
  "/search": "custom",
  "/netherlands": "custom",
  "/netherlands/cities": "clusterHub",
  "/netherlands/services": "clusterHub",
  "/about/affiliate-disclosure": "articleSupport",
  "/netherlands/tools": "clusterHub",
  "/netherlands/tools/advanced": "clusterHub",
  "/netherlands/moving-to-the-netherlands": "guideShell",
  "/netherlands/moving/guides": "guideJson",
  "/netherlands/visa": "guideJson",
  "/netherlands/moving/tools": "clusterHub",
  "/netherlands/money/tools": "clusterHub",
  "/netherlands/taxes/tools": "clusterHub",
  "/netherlands/taxes/tools/30-ruling-calculator": "toolLanding",
  "/netherlands/taxes/tools/dutch-salary-net-calculator": "toolLanding",
  "/netherlands/work/tools": "clusterHub",
  "/netherlands/housing/tools": "clusterHub",
  "/netherlands/visa-checker": "toolLanding",
  "/netherlands/document-readiness-checker": "toolLanding",
  "/netherlands/visa-cost-calculator": "toolLanding",
  "/netherlands/visa-timeline-estimator": "toolLanding",
  "/netherlands/visa-application-plan": "toolLanding",
  "/netherlands/visa/compare-visas": "toolLanding",
  "/netherlands/moving/tools/arrival-planner": "toolLanding",
  "/netherlands/bsn-registration": "articleSupport",
  "/netherlands/register-address-netherlands": "articleSupport",
};
