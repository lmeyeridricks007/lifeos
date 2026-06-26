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
  "/netherlands/utilities/electricity-netherlands/": { title: "Electricity Netherlands", section: "guides" },
  "/netherlands/utilities/internet-providers-netherlands/": { title: "Internet Providers Netherlands", section: "guides" },
  "/netherlands/utilities/water-netherlands/": { title: "Water Netherlands", section: "guides" },
  "/netherlands/utilities/gas-netherlands/": { title: "Gas Netherlands", section: "guides" },
  "/netherlands/utilities/district-heating-netherlands/": { title: "District Heating Netherlands", section: "guides" },
  "/netherlands/utilities/mobile-providers-netherlands/": { title: "Mobile Providers Netherlands", section: "guides" },
  "/netherlands/utilities/energy-providers-netherlands/": { title: "Energy Providers Netherlands", section: "guides" },
  "/netherlands/practical-life/bsn-netherlands/": { title: "BSN Netherlands", section: "guides" },
  "/netherlands/practical-life/digid-netherlands/": { title: "DigiD Netherlands", section: "guides" },
  "/netherlands/practical-life/government-portals-netherlands/": { title: "Government Portals Netherlands", section: "guides" },
  "/netherlands/practical-life/subscriptions-and-cancellations-netherlands/": { title: "Subscriptions and Cancellations Netherlands", section: "guides" },
  "/netherlands/practical-life/privacy-and-safety-basics-netherlands/": { title: "Privacy and Safety Basics Netherlands", section: "guides" },
  "/netherlands/government-services/": { title: "Government Services Netherlands", section: "guides" },
  "/netherlands/practical-life/address-registration-netherlands/": { title: "Address Registration Netherlands", section: "guides" },
  "/netherlands/practical-life/local-taxes-netherlands/": { title: "Local Taxes Netherlands", section: "guides" },
  "/netherlands/registering-address-rental/": { title: "Registering address (rental)", section: "guides" },
  "/netherlands/rental-insurance-netherlands/": { title: "Rental insurance Netherlands", section: "guides" },
  "/netherlands/inventory-check-rental-netherlands/": { title: "Inventory check rental Netherlands", section: "guides" },
  "/netherlands/housing/renting-in-the-netherlands/": { title: "Renting in the Netherlands", section: "guides" },
  "/netherlands/housing/housing-costs-netherlands/": { title: "Housing Costs Netherlands", section: "guides" },
  "/netherlands/housing/rental-contracts-and-deposits-netherlands/": {
    title: "Rental Contracts and Deposits Netherlands",
    section: "guides",
  },
  "/netherlands/housing/social-housing-netherlands/": { title: "Social Housing Netherlands", section: "guides" },
  "/netherlands/housing/temporary-accommodation-netherlands/": { title: "Temporary Accommodation Netherlands", section: "guides" },
  "/netherlands/housing/neighborhoods/": { title: "Best Neighborhoods Netherlands", section: "guides" },
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
  /** Taxes SEO cluster (planned child guides — nav surfaces as Soon until promoted to live). */
  "/netherlands/money/": { title: "Money in the Netherlands", section: "guides" },
  "/netherlands/money/expat-taxes-netherlands/": { title: "Expat Taxes in the Netherlands", section: "guides" },
  "/netherlands/taxes/how-taxes-work-netherlands/": { title: "How taxes work Netherlands", section: "guides" },
  "/netherlands/taxes/tax-residency-netherlands/": { title: "Tax residency Netherlands", section: "guides" },
  "/netherlands/taxes/tax-brackets-netherlands/": { title: "Tax brackets Netherlands", section: "guides" },
  "/netherlands/taxes/tax-return-netherlands/": { title: "Tax return Netherlands", section: "guides" },
  "/netherlands/money/taxes/30-percent-ruling/": { title: "30% ruling in the Netherlands", section: "guides" },
  "/netherlands/money/taxes/tax-advisors/": { title: "Netherlands tax advisors for expats (guide)", section: "guides" },
  "/netherlands/taxes/30-ruling-eligibility/": { title: "30% ruling eligibility", section: "guides" },
  "/netherlands/taxes/30-ruling-salary-requirements/": { title: "30% ruling salary requirements", section: "guides" },
  "/netherlands/taxes/30-ruling-application/": { title: "30% ruling application", section: "guides" },
  "/netherlands/taxes/30-ruling-expiry/": { title: "30% ruling expiry", section: "guides" },
  /** Live App Router guides — listed in EXTRA_LIVE_PATHS; do not duplicate here or nav shows “Soon”. */
  "/netherlands/taxes/expat-tax-return/": { title: "Expat tax return", section: "guides" },
  "/netherlands/taxes/self-employed-tax-netherlands/": { title: "Self-employed tax Netherlands", section: "guides" },
  "/netherlands/taxes/zzp-tax-netherlands/": { title: "ZZP tax Netherlands", section: "guides" },
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
  "/netherlands/services/compare-health-insurance/": { title: "Compare health insurance", section: "services" },
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
  "/netherlands/work/freelancing-netherlands/": { title: "Freelancing Netherlands", section: "guides" },
  "/netherlands/work/zzp-netherlands/": { title: "ZZP Netherlands", section: "guides" },
  "/netherlands/work/work-culture-netherlands/": { title: "Work culture Netherlands", section: "guides" },
  "/netherlands/work/work-hours-netherlands/": { title: "Work hours Netherlands", section: "guides" },
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
  /** Live App Router service directory — mortgage advisor discovery for expats. */
  "/netherlands/services/mortgage-advisors/",
  /** Live App Router service directory — financial advisor discovery for expats. */
  "/netherlands/services/financial-advisors/",
  "/netherlands/cities/",
  "/netherlands/cities/best-cities-for-expats/",
  "/netherlands/cities/cheapest-cities-for-expats/",
  "/netherlands/cities/best-cities-for-families/",
  "/netherlands/cities/best-cities-for-international-professionals/",
  /** Live App Router guide — city comparison hub index. */
  "/netherlands/cities/compare/",
  /** Live App Router guide — Amsterdam vs Rotterdam flagship comparison. */
  "/netherlands/cities/amsterdam-vs-rotterdam/",
  "/netherlands/randstad/",
  /** Flagship housing hub (App Router) — keep live so nav and related guides never show “Soon”. */
  "/netherlands/housing/",
  /** Live App Router guide — buying property pillar for expats (Housing cluster). */
  "/netherlands/housing/buying-a-house-netherlands/",
  /** Live App Router guide — mortgage planning for expats (Housing cluster). */
  "/netherlands/housing/mortgages-netherlands-expats/",
  /** Live App Router guide — property tax and recurring homeowner costs (Taxes + Housing cluster). */
  "/netherlands/taxes/property-tax-netherlands/",
  /** Live App Router guide — buy vs rent decision guide for expats (Housing cluster). */
  "/netherlands/housing/buy-vs-rent-netherlands/",
  "/netherlands/housing/housing-costs-netherlands/",
  "/netherlands/housing/rental-contracts-and-deposits-netherlands/",
  /** Legacy Living URL (301 → canonical housing costs guide). */
  "/netherlands/living/housing-costs/",
  /** Legacy Living URL (301 → canonical rental contracts guide). */
  "/netherlands/living/rental-contracts-and-deposits/",
  /** Utilities hub and setup guide for expats after moving. */
  "/netherlands/utilities/",
  "/netherlands/utilities/utilities-netherlands/",
  "/netherlands/utilities/energy-and-water-netherlands/",
  "/netherlands/utilities/internet-and-mobile-netherlands/",
  "/netherlands/life/",
  "/netherlands/life/community-basics-netherlands/",
  "/netherlands/life/making-dutch-friends/",
  "/netherlands/life/dutch-culture/",
  "/netherlands/life/dutch-social-norms/",
  "/netherlands/life/dating-in-the-netherlands/",
  "/netherlands/life/dutch-holidays-and-traditions/",
  "/netherlands/life/dutch-birthday-traditions/",
  "/netherlands/culture/dutch-birthday-traditions/",
  "/netherlands/life/dutch-etiquette/",
  "/netherlands/culture/dutch-etiquette/",
  "/netherlands/life/dutch-humour/",
  "/netherlands/culture/dutch-humour/",
  "/netherlands/practical-life/municipality-services-netherlands/",
  "/netherlands/practical-life/registering-your-address-netherlands/",
  "/netherlands/practical-life/waste-and-recycling-netherlands/",
  "/netherlands/practical-life/parking-and-local-permits-netherlands/",
  "/netherlands/practical-life/digid-netherlands/",
  "/netherlands/practical-life/government-portals-netherlands/",
  "/netherlands/practical-life/subscriptions-and-cancellations-netherlands/",
  "/netherlands/practical-life/privacy-and-safety-basics-netherlands/",
  "/netherlands/government-services/",
  /** Legacy flat URL; 301 → buying guide — keep live so nav never surfaces as “Soon”. */
  "/netherlands/buying-house-netherlands/",
  /** Legacy flat URL; 301 → mortgage guide — keep live so nav never surfaces as “Soon”. */
  "/netherlands/mortgage-netherlands-expats/",
  /** Legacy flat URL; 301 → canonical property tax guide — keep live so nav never surfaces as “Soon”. */
  "/netherlands/property-tax-netherlands/",
  /** Legacy flat URL; 301 → canonical buy vs rent guide — keep live so nav never surfaces as “Soon”. */
  "/netherlands/buy-vs-rent-netherlands/",
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
  /** Money pillar hub — orientation links to banking, taxes, and tools. */
  "/netherlands/money/",
  /** Taxes SEO pillar hub (App Router). */
  "/netherlands/taxes/",
  "/netherlands/taxes/expat-taxes-netherlands/",
  "/netherlands/taxes/30-percent-ruling/",
  "/netherlands/taxes/net-salary-netherlands/",
  "/netherlands/taxes/gross-vs-net-salary/",
  "/netherlands/taxes/payroll-tax-netherlands/",
  "/netherlands/taxes/bonus-tax-netherlands/",
  /** Live App Router guide — double taxation and treaty concepts for expats. */
  "/netherlands/taxes/double-taxation-netherlands/",
  /** Live App Router guide — foreign income and cross-border reporting concepts for expats. */
  "/netherlands/taxes/foreign-income-netherlands/",
  /** Live App Router guide — first tax steps after relocating to the Netherlands. */
  "/netherlands/taxes/taxes-after-moving-netherlands/",
  /** Live App Router guide — exit tax considerations for expats leaving the Netherlands. */
  "/netherlands/taxes/leaving-netherlands-tax/",
  /** Legacy flat URL; 301 → canonical double taxation guide — keep live so nav never surfaces as “Soon”. */
  "/netherlands/double-taxation-netherlands/",
  "/netherlands/taxes/healthcare-allowance-netherlands/",
  /** Legacy taxes URL; 301 → healthcare allowance guide — keep live so nav never surfaces as “Soon”. */
  "/netherlands/taxes/healthcare-allowance/",
  "/netherlands/taxes/rent-allowance-netherlands/",
  "/netherlands/taxes/childcare-allowance-netherlands/",
  /** Legacy taxes URL; 301 → childcare allowance guide — keep live so nav never surfaces as “Soon”. */
  "/netherlands/taxes/childcare-allowance/",
  /** Legacy taxes URL; 301 → rent allowance guide — keep live so nav never surfaces as “Soon”. */
  "/netherlands/taxes/rent-allowance/",
  "/netherlands/taxes/average-salary-netherlands/",
  "/netherlands/jobs/salary-negotiation-netherlands/",
  /** Live App Router guide — keep in EXTRA_LIVE_PATHS so Money mega menu Jobs & salaries links stay clickable (not “Soon”). */
  "/netherlands/jobs/minimum-wage-netherlands/",
  "/netherlands/jobs/expat-salary-netherlands/",
  /** Live App Router guide — keep in EXTRA_LIVE_PATHS so Money mega menu Jobs & salaries links stay clickable (not “Soon”). */
  "/netherlands/jobs/employee-benefits-netherlands/",
  /** Flagship education guide — international schools cornerstone for relocating families. */
  "/netherlands/education/international-schools-netherlands/",
  /** Flagship education guide — Dutch public and special schools for expat families. */
  "/netherlands/education/dutch-schools-netherlands/",
  /** Flagship education guide — Dutch public and special schools for expat families. */
  "/netherlands/education/dutch-schools-netherlands/",
  /** Live App Router guide — pension pillar for expats (Jobs & salaries cluster). */
  "/netherlands/jobs/pension-netherlands-expats/",
  /** Live App Router guide — holiday allowance (vakantiegeld) for expats (Jobs & salaries cluster). */
  "/netherlands/jobs/holiday-allowance-netherlands/",
  "/netherlands/jobs/finding-jobs-netherlands/",
  "/netherlands/jobs/employment-contract-netherlands/",
  "/netherlands/jobs/probation-period-netherlands/",
  "/netherlands/jobs/notice-period-netherlands/",
  "/netherlands/jobs/employee-rights-netherlands/",
  "/netherlands/jobs/dutch-workplace-culture/",
  "/netherlands/jobs/dutch-directness-at-work/",
  /** Legacy Culture-cluster URL (301 → canonical jobs guide). */
  "/netherlands/culture/dutch-directness-at-work/",
  /** Legacy Culture-cluster URL (301 → canonical Life guide). */
  "/netherlands/culture/dutch-social-norms/",
  "/netherlands/culture/dutch-culture/",
  "/netherlands/culture/dating-in-the-netherlands/",
  "/netherlands/culture/making-dutch-friends/",
  "/netherlands/culture/dutch-holidays-and-traditions/",
  "/netherlands/jobs/freelancing-netherlands/",
  /** Legacy Work-cluster URL (301 → canonical workplace culture guide). */
  "/netherlands/work/work-culture-netherlands/",
  /** Live App Router guide — contractor vs employee comparison (Jobs & salaries cluster). */
  "/netherlands/jobs/contractor-vs-employee-netherlands/",
  /** Live App Router guide — ZZP self-employment cornerstone (Business cluster). */
  "/netherlands/business/zzp-netherlands/",
  /** Live App Router guide — starting a business cornerstone (Business cluster). */
  "/netherlands/business/starting-a-business-netherlands/",
  /** Money pillar tax orientation guide (App Router). */
  "/netherlands/money/tax-guide-for-expats/",
  "/netherlands/money/how-taxes-work-in-the-netherlands/",
  "/netherlands/money/tax-residency-netherlands/",
  "/netherlands/money/tax-return-netherlands/",
  "/netherlands/money/expat-taxes-netherlands/",
  "/netherlands/money/taxes/tax-advisors/",
  "/netherlands/money/banking/",
  "/netherlands/money/banking/best-banks-expats/",
  "/netherlands/money/banking/traditional-vs-digital/",
  "/netherlands/money/banking/fees/",
  "/netherlands/money/banking/cheapest-accounts/",
  "/netherlands/money/banking/types-of-accounts/",
  "/netherlands/money/banking/how-payments-work/",
  "/netherlands/money/banking/international-transfers/",
  "/netherlands/money/banking/security/",
  "/netherlands/money/banking/account-rejection/",
  "/netherlands/money/banking/best-bank-zzp/",
  "/netherlands/moving/visas-residency/",
  "/netherlands/moving/working-in-the-netherlands/",
  "/netherlands/moving/changing-jobs-netherlands/",
  "/netherlands/moving/resigning-job-netherlands/",
  /** Layoffs guide (App Router). Keep live so mega menu / `filterNavItem` never surface it as “Soon”. */
  "/netherlands/moving/layoffs-netherlands/",
  /** Legacy Work-cluster URL; 301 → `/netherlands/jobs/employment-contract-netherlands/`. */
  "/netherlands/work/employment-contract-netherlands/",
  /** Legacy Work-cluster URL; 301 → `/netherlands/jobs/probation-period-netherlands/`. */
  "/netherlands/work/probation-period-netherlands/",
  /** Legacy Work-cluster URL; 301 → `/netherlands/jobs/notice-period-netherlands/`. */
  "/netherlands/work/notice-period-netherlands/",
  /** Legacy Work-cluster URL; 301 → `/netherlands/jobs/employee-rights-netherlands/`. */
  "/netherlands/work/employee-rights-netherlands/",
  /** Legacy Work-cluster URL; 301 → `/netherlands/jobs/freelancing-netherlands/`. */
  "/netherlands/work/freelancing-netherlands/",
  /** Legacy Work-cluster URL; 301 → `/netherlands/business/zzp-netherlands/`. */
  "/netherlands/work/zzp-netherlands/",
  /** Legacy Work-cluster URL; 301 → `/netherlands/jobs/contractor-vs-employee-netherlands/`. */
  "/netherlands/work/contractor-vs-employee-netherlands/",
  /** Legacy Work-cluster URL; 301 → Move guide — must not surface as “coming soon” in nav or link helpers. */
  "/netherlands/work/changing-jobs-netherlands/",
  /** Legacy Work-cluster URL; 301 → Move guide. */
  "/netherlands/work/resigning-job-netherlands/",
  /** Legacy Work-cluster URL; 301 → Move guide. */
  "/netherlands/work/layoffs-netherlands/",
  /** Legacy Work-cluster URL; 301 → `/netherlands/taxes/bonus-tax-netherlands/`. */
  "/netherlands/work/bonus-tax-netherlands/",
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
