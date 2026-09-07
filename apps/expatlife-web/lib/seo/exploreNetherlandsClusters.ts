/**
 * IA-P1-EXPLORE-CONCENTRATION — cluster discovery map for ExploreNetherlandsCrossLinks.
 *
 * GLOBAL: tiny set of destinations that may appear on every NL page.
 * CLUSTER: most links depend on the current page cluster (deterministic, no rotation).
 */

import { toSiteHref } from "@/lib/seo/site-url";
import { isRouteLive } from "@/src/lib/routes/routeStatus";
import {
  countryToolLandingPath,
} from "@/src/lib/tools/shared/countryToolLinkModel";
import { isSupportedOriginCountry } from "@/src/lib/tools/shared/toolCountryContext";

export type ExploreLink = {
  href: string;
  label: string;
  /** global = sitewide-safe; cluster = topical for current page */
  tier: "global" | "cluster";
};

export type ExploreClusterId =
  | "tax"
  | "banking"
  | "cities"
  | "housing"
  | "health"
  | "country_origin"
  | "moving"
  | "visas"
  | "working"
  | "jobs"
  | "first_90_days"
  | "living"
  | "culture"
  | "family"
  | "education"
  | "services"
  | "tools"
  | "citizenship"
  | "integration"
  | "leaving"
  | "practical_life"
  | "transport"
  | "utilities"
  | "default";

export const EXPLORE_GLOBAL_MAX = 2;
export const EXPLORE_CLUSTER_MAX = 6;
export const EXPLORE_TOTAL_MAX = 8;

/** Genuinely global NL discovery (kept small on purpose). */
export const EXPLORE_GLOBAL_LINKS: readonly ExploreLink[] = [
  { href: "/netherlands/moving-to-the-netherlands", label: "Move to the Netherlands", tier: "global" },
  { href: "/netherlands/cities", label: "Dutch cities", tier: "global" },
] as const;

type ClusterLinkDef = { href: string; label: string };

/**
 * Deterministic cluster → related destinations.
 * Order = preference. Resolver filters live routes, current page, exclusions, then caps.
 */
export const EXPLORE_CLUSTER_LINKS: Record<ExploreClusterId, readonly ClusterLinkDef[]> = {
  tax: [
    { href: "/netherlands/taxes/30-percent-ruling", label: "30% ruling" },
    { href: "/netherlands/taxes/gross-vs-net-salary", label: "Gross vs net salary" },
    { href: "/netherlands/taxes/tools/dutch-salary-net-calculator", label: "Net salary calculator" },
    { href: "/netherlands/work/tools/payslip-decoder", label: "Payslip decoder" },
    { href: "/netherlands/taxes/healthcare-allowance-netherlands", label: "Healthcare allowance" },
    { href: "/netherlands/money/how-taxes-work-in-the-netherlands", label: "How taxes work" },
    { href: "/netherlands/taxes/average-salary-netherlands", label: "Average salary" },
  ],
  banking: [
    { href: "/netherlands/money/banking/best-banks-expats", label: "Best banks for expats" },
    { href: "/netherlands/open-bank-account-netherlands", label: "Open a bank account" },
    { href: "/netherlands/money/banking/fees", label: "Banking fees" },
    { href: "/netherlands/tools/bank-comparison", label: "Bank comparison" },
    { href: "/netherlands/money/banking", label: "Banking hub" },
  ],
  cities: [
    { href: "/netherlands/cities", label: "Cities hub" },
    { href: "/netherlands/money/cost-of-living-netherlands", label: "Cost of living" },
    { href: "/netherlands/cities/amsterdam-vs-rotterdam", label: "Amsterdam vs Rotterdam" },
    { href: "/netherlands/housing", label: "Housing in the Netherlands" },
    { href: "/netherlands/living/getting-around", label: "Getting around" },
    { href: "/netherlands/tools/city-comparison", label: "City comparison tool" },
    { href: "/netherlands/cities/best-cities-for-expats", label: "Best cities for expats" },
  ],
  housing: [
    { href: "/netherlands/housing", label: "Housing hub" },
    { href: "/netherlands/housing/housing-costs-netherlands", label: "Housing costs" },
    { href: "/netherlands/housing/rental-contracts-and-deposits-netherlands", label: "Rental contracts & deposits" },
    { href: "/netherlands/housing/tools/rent-affordability-calculator", label: "Rent affordability calculator" },
    { href: "/netherlands/cities", label: "Dutch cities" },
    { href: "/netherlands/services/housing-platforms", label: "Housing platforms" },
  ],
  health: [
    { href: "/netherlands/health", label: "Healthcare hub" },
    { href: "/netherlands/health-insurance-netherlands", label: "Health insurance guide" },
    { href: "/netherlands/health/gp-netherlands", label: "Finding a huisarts (GP)" },
    { href: "/netherlands/health/pharmacies-netherlands", label: "Pharmacies" },
    { href: "/netherlands/health/emergency-healthcare-netherlands", label: "Emergency healthcare" },
    { href: "/netherlands/health/hospitals-netherlands", label: "Hospitals" },
  ],
  country_origin: [
    // Dynamic country tools injected in resolver when slug known
    { href: "/netherlands/moving/visas-residency", label: "Visas & residency" },
    { href: "/netherlands/documents-needed-to-move-netherlands", label: "Documents needed to move" },
    { href: "/netherlands/after-arriving-netherlands", label: "After arriving" },
    { href: "/netherlands/moving-to-netherlands-cost", label: "Cost of moving" },
    { href: "/netherlands/moving-to-netherlands-from", label: "All origin-country guides" },
  ],
  moving: [
    { href: "/netherlands/moving-to-the-netherlands", label: "Moving pillar guide" },
    { href: "/netherlands/moving/visas-residency", label: "Visas & residency" },
    { href: "/netherlands/moving/tools/moving-checklist", label: "Moving checklist" },
    { href: "/netherlands/document-readiness-checker", label: "Document readiness" },
    { href: "/netherlands/moving/tools/arrival-planner", label: "Arrival planner" },
    { href: "/netherlands/after-arriving-netherlands", label: "After arriving" },
    { href: "/netherlands/moving-to-netherlands-from", label: "Moving from your country" },
  ],
  visas: [
    { href: "/netherlands/moving/visas-residency", label: "Visas & residency hub" },
    { href: "/netherlands/visa/highly-skilled-migrant", label: "Highly skilled migrant" },
    { href: "/netherlands/visa-checker", label: "Visa checker" },
    { href: "/netherlands/moving/residence-permits", label: "Residence permits" },
    { href: "/netherlands/visa/partner-family-visa", label: "Partner & family visa" },
    { href: "/netherlands/moving/tools/moving-checklist", label: "Moving checklist" },
  ],
  working: [
    { href: "/netherlands/moving/working-in-the-netherlands", label: "Working in the Netherlands" },
    { href: "/netherlands/jobs/finding-jobs-netherlands", label: "Finding jobs" },
    { href: "/netherlands/jobs/dutch-workplace-culture", label: "Dutch workplace culture" },
    { href: "/netherlands/moving/changing-jobs-netherlands", label: "Changing jobs" },
    { href: "/netherlands/taxes/30-percent-ruling", label: "30% ruling" },
    { href: "/netherlands/open-bank-account-netherlands", label: "Open a bank account" },
  ],
  jobs: [
    { href: "/netherlands/jobs/finding-jobs-netherlands", label: "Finding jobs" },
    { href: "/netherlands/jobs/expat-salary-netherlands", label: "Expat salary" },
    { href: "/netherlands/jobs/dutch-workplace-culture", label: "Workplace culture" },
    { href: "/netherlands/jobs/employment-contract-netherlands", label: "Employment contracts" },
    { href: "/netherlands/taxes/gross-vs-net-salary", label: "Gross vs net salary" },
    { href: "/netherlands/moving/working-in-the-netherlands", label: "Working orientation" },
  ],
  first_90_days: [
    { href: "/netherlands/after-arriving-netherlands", label: "After arriving hub" },
    { href: "/netherlands/first-90-days-netherlands", label: "First 90 days guide" },
    { href: "/netherlands/moving/tools/first-90-days", label: "First 90 days tool" },
    { href: "/netherlands/moving/tools/arrival-planner", label: "Arrival planner" },
    { href: "/netherlands/bsn-registration", label: "BSN registration" },
    { href: "/netherlands/municipality-registration-netherlands", label: "Municipality registration" },
  ],
  living: [
    { href: "/netherlands/living/survival-guide", label: "Survival guide" },
    { href: "/netherlands/living/getting-around", label: "Getting around" },
    { href: "/netherlands/living/daily-life", label: "Daily life basics" },
    { href: "/netherlands/living/apps", label: "Essential apps" },
    { href: "/netherlands/living/language", label: "Language & phrases" },
    { href: "/netherlands/services", label: "Services for expats" },
  ],
  culture: [
    { href: "/netherlands/culture", label: "Culture hub" },
    { href: "/netherlands/life/dutch-culture", label: "Dutch culture" },
    { href: "/netherlands/life/dutch-etiquette", label: "Dutch etiquette" },
    { href: "/netherlands/living/survival-guide", label: "Survival guide" },
    { href: "/netherlands/culture/learning-dutch", label: "Learning Dutch" },
    { href: "/netherlands/integration/inburgering", label: "Inburgering" },
  ],
  family: [
    { href: "/netherlands/family/family-activities-netherlands", label: "Family activities" },
    { href: "/netherlands/family/child-benefits-netherlands", label: "Child benefits" },
    { href: "/netherlands/education/daycare-netherlands", label: "Daycare" },
    { href: "/netherlands/education/international-schools-netherlands", label: "International schools" },
    { href: "/netherlands/family/healthcare-for-children-netherlands", label: "Healthcare for children" },
    { href: "/netherlands/cities/best-cities-for-families", label: "Best cities for families" },
  ],
  education: [
    { href: "/netherlands/education", label: "Education & childcare hub" },
    { href: "/netherlands/education/international-schools-netherlands", label: "International schools" },
    { href: "/netherlands/education/dutch-schools-netherlands", label: "Dutch schools" },
    { href: "/netherlands/education/daycare-netherlands", label: "Daycare" },
    { href: "/netherlands/family/family-activities-netherlands", label: "Family activities" },
    { href: "/netherlands/cities/best-cities-for-families", label: "Best cities for families" },
  ],
  services: [
    { href: "/netherlands/services", label: "Services hub" },
    { href: "/netherlands/services/relocation-agencies", label: "Relocation agencies" },
    { href: "/netherlands/services/immigration-lawyers", label: "Immigration lawyers" },
    { href: "/netherlands/services/housing-platforms", label: "Housing platforms" },
    { href: "/netherlands/services/tax-advisors", label: "Tax advisors" },
    { href: "/netherlands/how-we-rank-services", label: "How we rank services" },
  ],
  tools: [
    { href: "/netherlands/tools", label: "Planning tools hub" },
    { href: "/netherlands/moving/tools/moving-checklist", label: "Moving checklist" },
    { href: "/netherlands/money/tools/cost-of-living-calculator", label: "Cost of living calculator" },
    { href: "/netherlands/visa-checker", label: "Visa checker" },
    { href: "/netherlands/tools/city-comparison", label: "City comparison" },
    { href: "/netherlands/taxes/tools/dutch-salary-net-calculator", label: "Net salary calculator" },
  ],
  citizenship: [
    { href: "/netherlands/citizenship/permanent-residence", label: "Permanent residence" },
    { href: "/netherlands/citizenship/dutch-citizenship", label: "Dutch citizenship" },
    { href: "/netherlands/integration/inburgering", label: "Inburgering" },
    { href: "/netherlands/citizenship/tools", label: "Citizenship tools" },
    { href: "/netherlands/moving/visas-residency", label: "Visas & residency" },
  ],
  integration: [
    { href: "/netherlands/integration/inburgering", label: "Inburgering" },
    { href: "/netherlands/culture/learning-dutch", label: "Learning Dutch" },
    { href: "/netherlands/citizenship/permanent-residence", label: "Permanent residence" },
    { href: "/netherlands/integration/tools/integration-requirement-checker", label: "Integration requirement checker" },
    { href: "/netherlands/living/survival-guide", label: "Survival guide" },
  ],
  leaving: [
    { href: "/netherlands/leaving", label: "Leaving the Netherlands" },
    { href: "/netherlands/taxes/leaving-netherlands-tax", label: "Leaving & tax" },
    { href: "/netherlands/leaving/tools/exit-readiness-checker", label: "Exit readiness checker" },
    { href: "/netherlands/leaving/tools/repatriation-cost-calculator", label: "Repatriation cost calculator" },
  ],
  practical_life: [
    { href: "/netherlands/practical-life/registering-your-address-netherlands", label: "Registering your address" },
    { href: "/netherlands/practical-life/digid-netherlands", label: "DigiD" },
    { href: "/netherlands/practical-life/government-portals-netherlands", label: "Government portals" },
    { href: "/netherlands/bsn-registration", label: "BSN registration" },
    { href: "/netherlands/municipality-registration-netherlands", label: "Municipality registration" },
  ],
  transport: [
    { href: "/netherlands/living/getting-around", label: "Getting around" },
    { href: "/netherlands/living/ov-chipkaart-netherlands", label: "OV-chipkaart" },
    { href: "/netherlands/living/cycling-netherlands", label: "Cycling" },
    { href: "/netherlands/living/driving-licence-exchange-netherlands", label: "Driving licence exchange" },
    { href: "/netherlands/transport/tools", label: "Transport tools" },
  ],
  utilities: [
    { href: "/netherlands/utilities/utilities-netherlands", label: "Utilities hub" },
    { href: "/netherlands/utilities/energy-and-water-netherlands", label: "Energy & water" },
    { href: "/netherlands/utilities/internet-and-mobile-netherlands", label: "Internet & mobile" },
    { href: "/netherlands/living/tools/utilities-services-comparison", label: "Utilities comparison" },
  ],
  default: [
    { href: "/netherlands/moving-to-the-netherlands", label: "Move to the Netherlands" },
    { href: "/netherlands/services", label: "Services for expats" },
    { href: "/netherlands/tools", label: "Planning tools" },
    { href: "/netherlands/living/survival-guide", label: "Survival guide" },
    { href: "/netherlands/money/cost-of-living-netherlands", label: "Cost of living" },
  ],
};

/** Resolve topical cluster for a Netherlands pathname. */
export function detectExploreCluster(pathname: string): ExploreClusterId {
  const p = toSiteHref(pathname);

  if (p.includes("/moving/moving-to-netherlands-from/") || p === "/netherlands/moving-to-netherlands-from") {
    return "country_origin";
  }
  if (
    p.includes("/moving/tools/") &&
    (p.includes("/first-90-days") || p.includes("/arrival-planner"))
  ) {
    return "first_90_days";
  }
  if (
    p.startsWith("/netherlands/first-") ||
    p === "/netherlands/after-arriving-netherlands" ||
    p.startsWith("/netherlands/bsn") ||
    p.startsWith("/netherlands/municipality-registration")
  ) {
    return "first_90_days";
  }
  if (p.startsWith("/netherlands/taxes") || p.includes("/30-percent") || p.includes("/expat-taxes")) {
    return "tax";
  }
  if (p.startsWith("/netherlands/money/banking") || p.includes("bank-account") || p.includes("/tools/bank")) {
    return "banking";
  }
  if (p.startsWith("/netherlands/money") && (p.includes("tax") || p.includes("salary"))) {
    return "tax";
  }
  if (p.startsWith("/netherlands/money/cost-of-living") || p.includes("cost-of-living-calculator")) {
    return "cities";
  }
  if (p.startsWith("/netherlands/health") || p.includes("health-insurance")) {
    return "health";
  }
  if (p.startsWith("/netherlands/housing")) return "housing";
  if (p.startsWith("/netherlands/cities")) return "cities";
  if (
    /^\/netherlands\/(amsterdam|rotterdam|the-hague|utrecht|eindhoven|groningen|maastricht|haarlem|leiden|delft|tilburg|breda|nijmegen|arnhem|amstelveen|randstad)$/.test(
      p
    )
  ) {
    return "cities";
  }
  if (p.startsWith("/netherlands/visa") || p.includes("/visas-residency") || p.includes("/residence-permits")) {
    return "visas";
  }
  if (p.startsWith("/netherlands/jobs")) return "jobs";
  if (
    p.includes("/working-in-the-netherlands") ||
    p.includes("/changing-jobs") ||
    p.includes("/resigning-job") ||
    p.includes("/layoffs") ||
    p.includes("/twv-work-permit")
  ) {
    return "working";
  }
  if (p.startsWith("/netherlands/family")) return "family";
  if (p.startsWith("/netherlands/education")) return "education";
  if (p.startsWith("/netherlands/culture") || p.startsWith("/netherlands/life")) return "culture";
  if (p.startsWith("/netherlands/living")) {
    if (p.includes("getting-around") || p.includes("ov-") || p.includes("cycling") || p.includes("driving") || p.includes("car-")) {
      return "transport";
    }
    return "living";
  }
  if (p.startsWith("/netherlands/transport")) return "transport";
  if (p.startsWith("/netherlands/utilities")) return "utilities";
  if (p.startsWith("/netherlands/services")) return "services";
  if (p.startsWith("/netherlands/tools") || p.includes("/tools/")) return "tools";
  if (p.startsWith("/netherlands/citizenship")) return "citizenship";
  if (p.startsWith("/netherlands/integration")) return "integration";
  if (p.startsWith("/netherlands/leaving")) return "leaving";
  if (p.startsWith("/netherlands/practical-life") || p.includes("government-portals") || p.includes("digid")) {
    return "practical_life";
  }
  if (
    p.startsWith("/netherlands/moving") ||
    p.includes("moving-to-the-netherlands") ||
    p.includes("moving-to-netherlands") ||
    p.includes("moving-checklist") ||
    p.includes("document-readiness")
  ) {
    return "moving";
  }
  return "default";
}

function extractOriginCountrySlug(pathname: string): string | null {
  const p = toSiteHref(pathname);
  const fromGuide = p.match(/\/moving\/moving-to-netherlands-from\/([^/]+)$/);
  if (fromGuide?.[1]) return fromGuide[1];
  const fromTool = p.match(/\/from\/([^/]+)$/);
  if (fromTool?.[1]) return fromTool[1];
  return null;
}

export type ResolveExploreOptions = {
  /** Hrefs already prominent in the page body (normalized paths). */
  excludeHrefs?: readonly string[];
  /** Override “now” for live checks (tests). */
  now?: Date;
};

/**
 * Build the explore strip for a pathname: small global set + cluster set, capped, live-only.
 */
export function resolveExploreNetherlandsLinks(
  pathname: string,
  options: ResolveExploreOptions = {}
): { cluster: ExploreClusterId; links: ExploreLink[] } {
  const current = toSiteHref(pathname);
  const cluster = detectExploreCluster(current);
  const excluded = new Set<string>([
    current,
    ...(options.excludeHrefs ?? []).map((h) => toSiteHref(h)),
  ]);

  const pushUnique = (out: ExploreLink[], link: ExploreLink, remaining: { n: number }) => {
    if (remaining.n <= 0) return;
    const href = toSiteHref(link.href);
    if (excluded.has(href)) return;
    if (out.some((x) => toSiteHref(x.href) === href)) return;
    if (!isRouteLive(href, options.now)) return;
    out.push({ ...link, href });
    excluded.add(href);
    remaining.n -= 1;
  };

  const links: ExploreLink[] = [];
  const globalBudget = { n: EXPLORE_GLOBAL_MAX };
  for (const g of EXPLORE_GLOBAL_LINKS) {
    pushUnique(links, { ...g, href: toSiteHref(g.href) }, globalBudget);
  }

  const clusterBudget = { n: Math.min(EXPLORE_CLUSTER_MAX, EXPLORE_TOTAL_MAX - links.length) };
  const clusterCandidates: ExploreLink[] = [];

  // Country-origin: inject live country tool landings first (user journey).
  if (cluster === "country_origin") {
    const slug = extractOriginCountrySlug(current);
    if (slug && isSupportedOriginCountry(slug)) {
      const countryToolOrder = [
        { tool: "moving-checklist" as const, label: "Moving checklist for your country" },
        { tool: "document-readiness" as const, label: "Document readiness for your country" },
        { tool: "arrival-planner" as const, label: "Arrival planner for your country" },
        { tool: "first-90-days" as const, label: "First 90 days for your country" },
      ];
      for (const t of countryToolOrder) {
        const landing = countryToolLandingPath(t.tool, slug);
        if (!landing) continue; // never surface NG/PH 404 landings
        clusterCandidates.push({ href: landing, label: t.label, tier: "cluster" });
      }
    }
  }

  for (const c of EXPLORE_CLUSTER_LINKS[cluster] ?? EXPLORE_CLUSTER_LINKS.default) {
    clusterCandidates.push({ href: toSiteHref(c.href), label: c.label, tier: "cluster" });
  }

  for (const c of clusterCandidates) {
    pushUnique(links, c, clusterBudget);
  }

  return { cluster, links: links.slice(0, EXPLORE_TOTAL_MAX) };
}

/** All explore destinations that can ever appear (for equity reporting / tests). */
export function listAllExploreCandidateHrefs(): string[] {
  const set = new Set<string>();
  for (const g of EXPLORE_GLOBAL_LINKS) set.add(toSiteHref(g.href));
  for (const defs of Object.values(EXPLORE_CLUSTER_LINKS)) {
    for (const d of defs) set.add(toSiteHref(d.href));
  }
  return Array.from(set).sort();
}
