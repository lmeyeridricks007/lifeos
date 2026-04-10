/**
 * Canonical route readiness registry for MVP launch.
 *
 * - LIVE paths are collected into LIVE_PATHS (and pattern helpers in routeStatus).
 * - COMING_SOON_ROUTES lists planned URLs we may surface as non-clickable roadmap rows in UI
 *   (maps to editorial `planned` in `@/src/lib/content/contentPublishStatus` — no page yet).
 * - Live routes with thin/scaffold editorial content use `coming_soon` in cluster JSON, not this map.
 * - Anything not live and not explicitly coming-soon is treated as hidden for menus and safe linking.
 *
 * When a new page ships: add its normalized path to the live builder below (or the relevant JSON source).
 * When a planned service is ready: remove from COMING_SOON_ROUTES and ensure the path is in LIVE_PATHS.
 * Placeholder tools (`registry.json` status `placeholder`) surface as “coming soon” in UI; set status to `live` and ship the App Router page to flip links (e.g. payslip decoder).
 *
 * Audit: `listNonLiveHrefs` in `@/src/lib/routes/routeStatus` can be used in dev to spot bad internal URLs in ad-hoc arrays.
 */

import movingRegistry from "@/src/content/guides/netherlands/moving/registry.json";
import livingCultureCluster from "@/src/content/guides/netherlands/living-culture-cluster.json";
import toolsRegistry from "@/src/content/tools/registry.json";
import toolCategories from "@/src/content/tools/categories.json";
import { NETHERLANDS_SERVICES_CATEGORIES } from "@/src/data/services/categories";

/**
 * Must stay aligned with `ORIGIN_COUNTRY_CONFIG` in `src/lib/countries/originCountryGuides.ts` (client-safe; no fs).
 */
/** Exported for sitemap / crawl utilities; must match `ORIGIN_COUNTRY_CONFIG` slugs in originCountryGuides. */
export const ROUTING_ORIGIN_COUNTRY_SLUGS = [
  "south-africa",
  "india",
  "united-states",
  "united-kingdom",
  "canada",
  "australia",
  "new-zealand",
  "germany",
  "france",
  "brazil",
  "argentina",
  "chile",
  "mexico",
  "nigeria",
  "spain",
  "italy",
  "switzerland",
  "turkey",
  "pakistan",
  "philippines",
  "indonesia",
  "uae",
  "singapore",
  "japan",
  "south-korea",
  "sweden",
  "denmark",
  "norway",
  "ireland",
  "kenya",
] as const;

export type RouteSection =
  | "main"
  | "services"
  | "cities"
  | "trust"
  | "legal"
  | "guides"
  | "tools"
  | "visa"
  | "moving"
  | "other";

export type RouteRegistryEntry = {
  status: "live" | "coming-soon" | "hidden";
  title: string;
  section: RouteSection;
};

/** Planned or placeholder URLs — show only with explicit “Coming soon” treatment, never as normal internal links. */
export const COMING_SOON_ROUTES: Record<string, { title: string; section: RouteSection }> = {
  "/netherlands/services/temporary-accommodation/": {
    title: "Temporary Accommodation",
    section: "services",
  },
  "/netherlands/services/real-estate-agents/": {
    title: "Real Estate Agents",
    section: "services",
  },
  "/netherlands/services/international-schools/": {
    title: "International Schools",
    section: "services",
  },
  "/netherlands/housing-netherlands/": {
    title: "Housing in the Netherlands (guide)",
    section: "guides",
  },
  "/netherlands/renting-in-netherlands/": {
    title: "Renting in the Netherlands (guide)",
    section: "guides",
  },
  /** Housing SEO cluster (planned guides — nav surfaces as Soon until promoted to live). */
  "/netherlands/housing/": { title: "Housing hub", section: "guides" },
  "/netherlands/renting-in-the-netherlands/": { title: "Renting in the Netherlands (pillar)", section: "guides" },
  "/netherlands/how-to-rent-in-netherlands/": { title: "How to rent in the Netherlands", section: "guides" },
  "/netherlands/rental-contract-netherlands/": { title: "Rental contract Netherlands", section: "guides" },
  "/netherlands/rental-deposit-netherlands/": { title: "Rental deposit Netherlands", section: "guides" },
  "/netherlands/rent-increase-rules-netherlands/": { title: "Rent increase rules Netherlands", section: "guides" },
  "/netherlands/finding-apartment-netherlands/": { title: "Finding an apartment Netherlands", section: "guides" },
  "/netherlands/best-housing-websites-netherlands/": { title: "Best housing websites Netherlands", section: "guides" },
  "/netherlands/temporary-housing-netherlands/": { title: "Temporary housing Netherlands", section: "guides" },
  "/netherlands/expat-housing-agencies-netherlands/": { title: "Expat housing agencies Netherlands", section: "guides" },
  "/netherlands/average-rent-netherlands/": { title: "Average rent Netherlands", section: "guides" },
  "/netherlands/rent-prices-amsterdam/": { title: "Rent prices Amsterdam", section: "guides" },
  "/netherlands/rent-prices-rotterdam/": { title: "Rent prices Rotterdam", section: "guides" },
  "/netherlands/rent-prices-utrecht/": { title: "Rent prices Utrecht", section: "guides" },
  "/netherlands/renter-rights-netherlands/": { title: "Renter rights Netherlands", section: "guides" },
  "/netherlands/rent-control-netherlands/": { title: "Rent control Netherlands", section: "guides" },
  "/netherlands/reporting-bad-landlord-netherlands/": { title: "Reporting bad landlord Netherlands", section: "guides" },
  "/netherlands/social-housing-netherlands/": { title: "Social housing Netherlands", section: "guides" },
  "/netherlands/private-rental-netherlands/": { title: "Private rental Netherlands", section: "guides" },
  "/netherlands/furnished-vs-unfurnished-netherlands/": { title: "Furnished vs unfurnished Netherlands", section: "guides" },
  "/netherlands/utilities-in-netherlands/": { title: "Utilities in the Netherlands", section: "guides" },
  "/netherlands/electricity-providers-netherlands/": { title: "Electricity providers Netherlands", section: "guides" },
  "/netherlands/internet-providers-netherlands/": { title: "Internet providers Netherlands", section: "guides" },
  "/netherlands/registering-address-rental/": { title: "Registering address (rental)", section: "guides" },
  "/netherlands/rental-insurance-netherlands/": { title: "Rental insurance Netherlands", section: "guides" },
  "/netherlands/inventory-check-rental-netherlands/": { title: "Inventory check rental Netherlands", section: "guides" },
  "/netherlands/buying-house-netherlands/": { title: "Buying a house Netherlands", section: "guides" },
  "/netherlands/mortgage-netherlands-expats/": { title: "Mortgage Netherlands expats", section: "guides" },
  "/netherlands/property-tax-netherlands/": { title: "Property tax Netherlands", section: "guides" },
  "/netherlands/buy-vs-rent-netherlands/": { title: "Buy vs rent Netherlands", section: "guides" },
  "/netherlands/housing/renting-in-amsterdam/": { title: "Renting in Amsterdam", section: "guides" },
  "/netherlands/housing/renting-in-rotterdam/": { title: "Renting in Rotterdam", section: "guides" },
  "/netherlands/housing/renting-in-utrecht/": { title: "Renting in Utrecht", section: "guides" },
  "/netherlands/housing/renting-in-the-hague/": { title: "Renting in The Hague", section: "guides" },
  "/netherlands/housing/renting-in-eindhoven/": { title: "Renting in Eindhoven", section: "guides" },
  "/netherlands/housing/renting-in-groningen/": { title: "Renting in Groningen", section: "guides" },
  "/netherlands/housing/renting-in-leiden/": { title: "Renting in Leiden", section: "guides" },
  "/netherlands/housing/renting-in-delft/": { title: "Renting in Delft", section: "guides" },
  "/netherlands/housing/renting-in-haarlem/": { title: "Renting in Haarlem", section: "guides" },
  "/netherlands/housing/renting-in-amstelveen/": { title: "Renting in Amstelveen", section: "guides" },
  /** Taxes SEO cluster (planned — nav surfaces as Soon until promoted to live). */
  "/netherlands/taxes/": { title: "Netherlands taxes hub", section: "guides" },
  "/netherlands/taxes/expat-taxes-netherlands/": { title: "Expat taxes Netherlands", section: "guides" },
  "/netherlands/taxes/how-taxes-work-netherlands/": { title: "How taxes work Netherlands", section: "guides" },
  "/netherlands/taxes/tax-residency-netherlands/": { title: "Tax residency Netherlands", section: "guides" },
  "/netherlands/taxes/tax-brackets-netherlands/": { title: "Tax brackets Netherlands", section: "guides" },
  "/netherlands/taxes/tax-return-netherlands/": { title: "Tax return Netherlands", section: "guides" },
  "/netherlands/taxes/30-percent-ruling/": { title: "30% ruling", section: "guides" },
  "/netherlands/taxes/30-ruling-eligibility/": { title: "30% ruling eligibility", section: "guides" },
  "/netherlands/taxes/30-ruling-salary-requirements/": { title: "30% ruling salary requirements", section: "guides" },
  "/netherlands/taxes/30-ruling-application/": { title: "30% ruling application", section: "guides" },
  "/netherlands/taxes/30-ruling-expiry/": { title: "30% ruling expiry", section: "guides" },
  "/netherlands/taxes/net-salary-netherlands/": { title: "Net salary Netherlands", section: "guides" },
  "/netherlands/taxes/gross-vs-netherlands-salary/": { title: "Gross vs net salary Netherlands", section: "guides" },
  "/netherlands/taxes/payroll-tax-netherlands/": { title: "Payroll tax Netherlands", section: "guides" },
  "/netherlands/taxes/healthcare-allowance/": { title: "Healthcare allowance", section: "guides" },
  "/netherlands/taxes/rent-allowance/": { title: "Rent allowance", section: "guides" },
  "/netherlands/taxes/childcare-allowance/": { title: "Childcare allowance", section: "guides" },
  "/netherlands/taxes/double-taxation-netherlands/": { title: "Double taxation Netherlands", section: "guides" },
  "/netherlands/taxes/foreign-income-netherlands/": { title: "Foreign income Netherlands", section: "guides" },
  "/netherlands/taxes/expat-tax-return/": { title: "Expat tax return", section: "guides" },
  "/netherlands/taxes/self-employed-tax-netherlands/": { title: "Self-employed tax Netherlands", section: "guides" },
  "/netherlands/taxes/zzp-tax-netherlands/": { title: "ZZP tax Netherlands", section: "guides" },
  "/netherlands/taxes/taxes-after-moving-netherlands/": { title: "Taxes after moving Netherlands", section: "guides" },
  "/netherlands/taxes/leaving-netherlands-tax/": { title: "Leaving Netherlands tax", section: "guides" },
  "/netherlands/taxes/tools/net-salary-calculator/": { title: "Net salary calculator (taxes)", section: "tools" },
  "/netherlands/taxes/tools/allowance-estimator/": { title: "Allowance estimator (taxes)", section: "tools" },
  "/netherlands/taxes/tools/double-tax-checker/": { title: "Double tax checker (taxes)", section: "tools" },
  "/netherlands/taxes/bsn-and-tax-system/": { title: "BSN and tax system", section: "guides" },
  "/netherlands/taxes/dutch-tax-calendar/": { title: "Dutch tax calendar", section: "guides" },
  "/netherlands/taxes/tax-advisors-netherlands/": { title: "Tax advisors Netherlands", section: "guides" },
  "/netherlands/taxes/cost-of-living-amsterdam/": { title: "Cost of living Amsterdam (taxes)", section: "guides" },
  "/netherlands/taxes/cost-of-living-rotterdam/": { title: "Cost of living Rotterdam (taxes)", section: "guides" },
  "/netherlands/taxes/cost-of-living-utrecht/": { title: "Cost of living Utrecht (taxes)", section: "guides" },
  "/netherlands/taxes/cost-of-living-the-hague/": { title: "Cost of living The Hague (taxes)", section: "guides" },
  "/netherlands/taxes/cost-of-living-eindhoven/": { title: "Cost of living Eindhoven (taxes)", section: "guides" },
  /** Services hub — planned compare / provider directories (nav Soon until live). Live category pages come from `NETHERLANDS_SERVICES_CATEGORIES`. */
  "/netherlands/services/bank-comparison/": { title: "Bank comparison", section: "services" },
  "/netherlands/services/mortgage-advisors/": { title: "Mortgage advisors", section: "services" },
  "/netherlands/services/financial-advisors/": { title: "Financial advisors", section: "services" },
  "/netherlands/services/compare-health-insurance/": { title: "Compare health insurance", section: "services" },
  "/netherlands/services/insurance-providers/": { title: "Insurance providers", section: "services" },
  "/netherlands/services/expat-housing-agencies/": { title: "Expat housing agencies", section: "services" },
  "/netherlands/services/moving-companies/": { title: "Moving companies", section: "services" },
  "/netherlands/services/international-shipping/": { title: "International shipping", section: "services" },
  "/netherlands/services/work-permit-services/": { title: "Work permit services", section: "services" },
  /** Work cluster (planned guides — nav surfaces as Soon until promoted to live). Tool routes use `PLACEHOLDER_TOOL_PATHS` from tools registry. */
  "/netherlands/work/": { title: "Work in the Netherlands (hub)", section: "guides" },
  "/netherlands/work/working-in-netherlands/": { title: "Working in the Netherlands", section: "guides" },
  "/netherlands/work/employment-contract-netherlands/": { title: "Employment contract Netherlands", section: "guides" },
  "/netherlands/work/probation-period-netherlands/": { title: "Probation period Netherlands", section: "guides" },
  "/netherlands/work/notice-period-netherlands/": { title: "Notice period Netherlands", section: "guides" },
  "/netherlands/work/employee-rights-netherlands/": { title: "Employee rights Netherlands", section: "guides" },
  "/netherlands/work/average-salary-netherlands/": { title: "Average salary Netherlands", section: "guides" },
  "/netherlands/work/salary-negotiation-netherlands/": { title: "Salary negotiation Netherlands", section: "guides" },
  "/netherlands/work/minimum-wage-netherlands/": { title: "Minimum wage Netherlands", section: "guides" },
  "/netherlands/work/expat-salary-netherlands/": { title: "Expat salary Netherlands", section: "guides" },
  "/netherlands/work/employee-benefits-netherlands/": { title: "Employee benefits Netherlands", section: "guides" },
  "/netherlands/work/pension-netherlands/": { title: "Pension Netherlands", section: "guides" },
  "/netherlands/work/holiday-allowance-netherlands/": { title: "Holiday allowance Netherlands", section: "guides" },
  "/netherlands/work/bonus-tax-netherlands/": { title: "Bonus tax Netherlands", section: "guides" },
  "/netherlands/work/changing-jobs-netherlands/": { title: "Changing jobs Netherlands", section: "guides" },
  "/netherlands/work/resigning-job-netherlands/": { title: "Resigning job Netherlands", section: "guides" },
  "/netherlands/work/layoffs-netherlands/": { title: "Layoffs Netherlands", section: "guides" },
  "/netherlands/work/freelancing-netherlands/": { title: "Freelancing Netherlands", section: "guides" },
  "/netherlands/work/zzp-netherlands/": { title: "ZZP Netherlands", section: "guides" },
  "/netherlands/work/contractor-vs-employee-netherlands/": { title: "Contractor vs employee Netherlands", section: "guides" },
  "/netherlands/work/work-culture-netherlands/": { title: "Work culture Netherlands", section: "guides" },
  "/netherlands/work/work-hours-netherlands/": { title: "Work hours Netherlands", section: "guides" },
  "/netherlands/work/finding-jobs-netherlands/": { title: "Finding jobs Netherlands", section: "guides" },
  "/netherlands/work/job-websites-netherlands/": { title: "Job websites Netherlands", section: "guides" },
  "/netherlands/work/linkedin-jobs-netherlands/": { title: "LinkedIn jobs Netherlands", section: "guides" },
  "/netherlands/work/jobs-in-amsterdam/": { title: "Jobs in Amsterdam", section: "guides" },
  "/netherlands/work/jobs-in-rotterdam/": { title: "Jobs in Rotterdam", section: "guides" },
  "/netherlands/work/jobs-in-utrecht/": { title: "Jobs in Utrecht", section: "guides" },
  "/netherlands/work/jobs-in-the-hague/": { title: "Jobs in The Hague", section: "guides" },
  "/netherlands/work/jobs-in-eindhoven/": { title: "Jobs in Eindhoven", section: "guides" },
  /** Legacy visa URLs (non-Move) — planned; live Move cluster pages use `/netherlands/moving/…` in `EXTRA_LIVE_PATHS`. */
  "/netherlands/visas-residency/": { title: "Visas & residency hub", section: "visa" },
  "/netherlands/visas-residency/residence-permits/": { title: "Residence permits", section: "visa" },
  "/netherlands/visas-residency/extensions-changes/": { title: "Visa extensions & changes", section: "visa" },
  /** Canonical Move page is live (`EXTRA_LIVE_PATHS`); legacy URL above redirects in `next.config`. */
  "/netherlands/visas-residency/status-changes/": { title: "Immigration status changes", section: "visa" },
};

export function normalizeSitePath(href: string): string {
  let p = href.trim();
  if (!p.startsWith("/")) p = `/${p}`;
  const q = p.split(/[?#]/)[0] ?? p;
  const withSlash = q.endsWith("/") ? q : `${q}/`;
  return withSlash.toLowerCase();
}

const VISA_GUIDE_PATHS = [
  "/netherlands/visa/highly-skilled-migrant/",
  "/netherlands/visa/compare-visas/",
  "/netherlands/visa/eu-blue-card/",
  "/netherlands/visa/dutch-american-friendship-treaty/",
  "/netherlands/visa/self-employed-visa/",
  "/netherlands/visa/student-visa/",
  "/netherlands/visa/partner-family-visa/",
] as const;

/** Static pages and hubs not already covered by moving registry or tool registry. */
const EXTRA_LIVE_PATHS = [
  "/",
  "/about/",
  "/contact/",
  "/how-this-site-works/",
  "/privacy/",
  "/terms/",
  "/cookies/",
  "/disclaimer/",
  "/editorial-policy/",
  "/methodology/",
  "/sources/",
  "/how-we-rank-services/",
  "/affiliate-disclosure/",
  "/sitemap/",
  "/search/",
  "/netherlands/",
  "/netherlands/moving-to-the-netherlands/",
  "/netherlands/moving-to-netherlands-from/",
  "/netherlands/services/",
  "/netherlands/cities/",
  "/netherlands/amsterdam/",
  "/netherlands/rotterdam/",
  "/netherlands/utrecht/",
  "/netherlands/the-hague/",
  "/netherlands/eindhoven/",
  "/netherlands/haarlem/",
  "/netherlands/groningen/",
  "/netherlands/delft/",
  "/netherlands/leiden/",
  "/netherlands/maastricht/",
  "/netherlands/breda/",
  "/netherlands/tilburg/",
  "/netherlands/arnhem/",
  "/netherlands/nijmegen/",
  "/netherlands/amstelveen/",
  "/netherlands/tools/",
  "/netherlands/moving/visas-residency/",
  "/netherlands/moving/working-in-the-netherlands/",
  "/netherlands/moving/twv-work-permit/",
  "/netherlands/moving/residence-permits/",
  "/netherlands/moving/extensions-changes/",
  "/netherlands/moving/status-changes/",
  "/netherlands/moving/tools/",
  "/netherlands/visa-checker/",
  "/netherlands/visa-timeline-estimator/",
  "/netherlands/visa-cost-calculator/",
  "/netherlands/visa-application-plan/",
  "/netherlands/document-readiness-checker/",
  "/netherlands/settling-in-netherlands/",
  "/netherlands/bsn-registration/",
  "/netherlands/register-address-netherlands/",
  /** Living pillar root redirects to Survival Guide; keep live so menus and redirects stay valid. */
  "/netherlands/living/",
] as const;

function buildLivePathSet(): Set<string> {
  const s = new Set<string>();
  const add = (p: string) => s.add(normalizeSitePath(p));

  for (const p of EXTRA_LIVE_PATHS) add(p);
  for (const row of livingCultureCluster.entries as { path: string }[]) add(row.path);
  for (const g of movingRegistry.guides) add(g.path);
  // Live calculators/tools: canonical URLs only (redirect aliases live in next.config).
  for (const t of toolsRegistry.tools) {
    if (t.status === "live") add(t.route);
  }
  for (const p of VISA_GUIDE_PATHS) add(p);
  for (const c of NETHERLANDS_SERVICES_CATEGORIES) add(c.href);
  for (const { route } of toolCategories.categories) add(route);
  return s;
}

export const LIVE_PATHS: ReadonlySet<string> = buildLivePathSet();

/** Tool routes that are placeholders — safe to mention in nav as “Soon” but must not behave like normal links. */
export const PLACEHOLDER_TOOL_PATHS: ReadonlySet<string> = new Set(
  toolsRegistry.tools.filter((t) => t.status === "placeholder").map((t) => normalizeSitePath(t.route))
);

const ORIGIN_SLUG_SET = new Set<string>(ROUTING_ORIGIN_COUNTRY_SLUGS);

/** True if this path is a published-style “from [country]” guide under /netherlands/moving/moving-to-netherlands-from/{slug}/ */
export function isOriginCountryGuidePath(path: string): boolean {
  const n = normalizeSitePath(path);
  const m = n.match(/^\/netherlands\/moving\/moving-to-netherlands-from\/([a-z0-9-]+)\/$/);
  if (!m) return false;
  return ORIGIN_SLUG_SET.has(m[1]);
}

/** Slugs for `/moving/tools/{slug}/from/{country}/` — keep in sync with app route segments and sitemap builders. */
export const MOVING_TOOL_FROM_SLUGS = [
  "moving-checklist",
  "first-90-days",
  "arrival-planner",
  "document-readiness",
] as const;

const MOVING_TOOL_FROM_RE = new RegExp(
  `^/netherlands/moving/tools/(${MOVING_TOOL_FROM_SLUGS.join("|")})/from/([a-z0-9-]+)/$`
);

export function isMovingToolFromCountryPath(path: string): boolean {
  const n = normalizeSitePath(path);
  const m = n.match(MOVING_TOOL_FROM_RE);
  if (!m) return false;
  return ORIGIN_SLUG_SET.has(m[2]);
}
