/**
 * Primary navigation config (top-level pillars + mega menus).
 * Rollback reference: `config.pre-phase1.ts` + `types.pre-phase1.ts`.
 */
import type { CountryOption, MegaMenu, NavItem, NavSection, TopNavEntry, TopNavKey } from "./types";
import { orderMegaMenuSectionItems, resolveNavActivePath, sortNavItemsForDisplay } from "./navItemModel";
import { getDomainFeaturedTools, getTopLevelToolsMenuGroups } from "@/src/lib/tools/getFeaturedTools";
import type { ToolRecord } from "@/src/lib/tools/loadToolRegistry";
import { getToolCategoryById, loadToolRegistry } from "@/src/lib/tools/loadToolRegistry";
import { getRouteStatus } from "@/src/lib/routes/routeStatus";
import { isComingSoonContent } from "@/src/lib/content/contentPublishStatus";
import { getClusterPageByPath } from "@/src/lib/guides/livingCultureCluster";
import { normalizeSitePath } from "@/src/data/site/route-registry";
/** Static menu rows: authored as live; `filterNavItem` reconciles with route registry. */
const item = (label: string, href: string, description?: string, badge?: string): NavItem => ({
  label,
  href,
  navStatus: "live",
  description,
  badge,
});

/** Planned / unpublished row — never rendered as a dead link. */
function soon(label: string): NavItem {
  return { label, navStatus: "comingSoon" };
}

function toToolNavItem(tool: ToolRecord): NavItem {
  if (tool.status === "placeholder") {
    return {
      label: tool.title,
      description: tool.summary,
      navStatus: "comingSoon",
    };
  }
  return item(tool.title, tool.route, tool.summary);
}

function toolById(id: string): ToolRecord | undefined {
  return loadToolRegistry().find((t) => t.id === id);
}

function toolItemsByIds(ids: string[]): NavItem[] {
  const out: NavItem[] = [];
  for (const id of ids) {
    const t = toolById(id);
    if (t) out.push(toToolNavItem(t));
  }
  return out;
}

function dedupeNavItems(items: NavItem[]): NavItem[] {
  const seen = new Set<string>();
  return items.filter((x) => {
    const k = `${x.label}\0${x.href ?? x.navStatus}`;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

const VIEW_ALL_LABELS: Partial<Record<TopNavKey, string>> = {
  moving: "View all Move tools",
  money: "View all Money tools",
  culture: "View all tools",
  living: "View all Living tools",
  tools: "View all tools",
};

/** Which pillars append a global tools hub link after the domain “view all” row. */
const APPEND_OPEN_TOOLS_HUB = new Set<TopNavKey>([
  "moving",
  "cities",
  "money",
  "services",
  "living",
  "culture",
  "tools",
]);

/**
 * Tools column from `menu-features.json` domainMenus + optional global hub link.
 * Cities/Services use hand-authored `soon()` rows in RAW when no registry match is desired.
 */
function buildToolRailForKey(menuKey: TopNavKey): NavItem[] {
  const domain = getDomainFeaturedTools(menuKey);
  const category = domain ? getToolCategoryById(domain.categoryId) : undefined;
  const viewAllHref = category?.route ?? "/netherlands/tools/";
  const viewAllLabel = VIEW_ALL_LABELS[menuKey] ?? "View all tools";
  const toolItems = domain ? domain.tools.map(toToolNavItem) : [];
  const deduped = dedupeNavItems(toolItems);
  const out: NavItem[] = [...deduped];
  if (domain && deduped.length > 0) {
    out.push(item(viewAllLabel, viewAllHref));
  }
  if (APPEND_OPEN_TOOLS_HUB.has(menuKey)) {
    const hasHub = out.some((x) => x.href === "/netherlands/tools/" && x.label === "Open tools hub");
    if (!hasHub) {
      out.push(item("Open tools hub", "/netherlands/tools/"));
    }
  }
  return out;
}

function filterNavItem(entry: NavItem): NavItem | null {
  if (entry.navStatus === "hidden") return null;
  if (entry.navStatus === "comingSoon") {
    return entry;
  }
  if (!entry.href) return null;
  const st = getRouteStatus(entry.href);
  if (st === "live") {
    const clusterEntry = getClusterPageByPath(entry.href);
    if (clusterEntry && isComingSoonContent(clusterEntry.contentStatus)) {
      return {
        ...entry,
        href: undefined,
        navStatus: "comingSoon",
        badge: entry.badge,
      };
    }
    return { ...entry, navStatus: "live", href: entry.href };
  }
  if (st === "hidden") {
    return null;
  }
  return {
    ...entry,
    href: undefined,
    navStatus: "comingSoon",
    badge: entry.badge,
  };
}

function mvpFallbackSection(menuLabel: string): NavSection {
  return {
    title: "Quick links",
    items: [
      item("Netherlands hub", "/netherlands/", "Guides, cities, and services overview."),
      item("Moving to the Netherlands", "/netherlands/moving-to-the-netherlands/", "Main relocation guide."),
      item("Services directory", "/netherlands/services/", "Banks, insurance, housing, immigration support."),
      item("Cities overview", "/netherlands/cities/", "Compare major Dutch cities."),
      item("Tools hub", "/netherlands/tools/", "Checklists, planners, and calculators."),
    ],
  };
}

/** When a featured item resolves to non-live after routing, use a pillar-specific default (never generic Moving for unrelated pillars). */
const DEFAULT_FEATURED_FALLBACK: Partial<Record<TopNavKey, NavItem>> = {
  moving: item(
    "Moving to the Netherlands",
    "/netherlands/moving-to-the-netherlands/",
    "Main relocation guide and hub."
  ),
  cities: item("Cities hub", "/netherlands/cities/", "Compare Dutch cities and read expat city guides."),
  money: item(
    "Netherlands taxes",
    "/netherlands/taxes/",
    "Tax guides, banking, insurance, and cost-of-living essentials for expats."
  ),
  services: item("Services directory", "/netherlands/services/", "Banks, insurance, housing, immigration support."),
  tools: item("Open all tools", "/netherlands/tools/", "Checklists, planners, and calculators."),
  living: item(
    "Netherlands Survival Guide",
    "/netherlands/living/survival-guide/",
    "Day-to-day life, transport, apps, payments, and practical rhythms after you arrive."
  ),
  culture: item(
    "Dutch Culture",
    "/netherlands/life/dutch-culture/",
    "Flagship overview of Dutch values, traditions, daily life and integration context for expats."
  ),
};

function dedupeMegaMenuSectionsByHref(sections: NavSection[]): NavSection[] {
  const seen = new Set<string>();
  return sections
    .map((section) => ({
      ...section,
      items: section.items.filter((entry) => {
        if (!entry.href) return true;
        const key = normalizeSitePath(resolveNavActivePath(entry.href));
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      }),
    }))
    .filter((section) => section.items.length > 0);
}

function filterMegaMenu(menu: MegaMenu): MegaMenu {
  let sections = dedupeMegaMenuSectionsByHref(
    menu.sections
      .map((section) => ({
        ...section,
        items: orderMegaMenuSectionItems(
          section.items.map(filterNavItem).filter((x): x is NavItem => x != null),
          section.comingSoonFirst ? { comingSoonFirst: true } : undefined
        ),
      }))
      .filter((section) => section.items.length > 0)
  );

  if (sections.length === 0) {
    sections = [mvpFallbackSection(menu.label)];
  }

  let featured: NavItem | null | undefined = menu.featured ? filterNavItem(menu.featured) : null;
  if (menu.showFeatured === false) {
    featured = undefined;
  } else {
    if (!featured || featured.navStatus !== "live" || !featured.href) {
      const fb = DEFAULT_FEATURED_FALLBACK[menu.key];
      featured = fb ? filterNavItem(fb) : null;
    }
    if ((!featured || featured.navStatus !== "live" || !featured.href) && menu.key === "moving") {
      featured = filterNavItem(
        item(
          "Moving to the Netherlands",
          "/netherlands/moving-to-the-netherlands/",
          "Main relocation guide and hub."
        )
      );
    }
    /** Living: prefer living hub, then housing hub, then renting pillar. */
    if (
      menu.key === "living" &&
      (!featured || featured.navStatus !== "live" || !featured.href)
    ) {
      const chain = [
        item(
          "Netherlands Survival Guide",
          "/netherlands/living/survival-guide/",
          "Day-to-day transport, apps, payments, weather, and practical rhythms."
        ),
        item("Housing in the Netherlands", "/netherlands/housing/", "Housing hub and guides."),
        item("Renting in the Netherlands", "/netherlands/renting-in-the-netherlands/", "Renting overview."),
        item("Netherlands hub", "/netherlands/", "Guides, cities, and services overview."),
      ];
      for (const cand of chain) {
        const f = filterNavItem(cand);
        if (f && f.navStatus === "live" && f.href) {
          featured = f;
          break;
        }
      }
      if (!featured || featured.navStatus !== "live" || !featured.href) {
        for (const cand of chain) {
          const f = filterNavItem(cand);
          if (f && f.navStatus === "comingSoon") {
            featured = f;
            break;
          }
        }
      }
    }
    /** Money: prefer Taxes cluster hub, then expat pillar, then Banking. */
    if (
      menu.key === "money" &&
      (!featured || featured.navStatus !== "live" || !featured.href)
    ) {
      const chain = [
        item("Netherlands taxes", "/netherlands/taxes/", "Tax guides for expats."),
        item("Expat Taxes in the Netherlands", "/netherlands/money/expat-taxes-netherlands/", "Scenario-led expat tax topics and tools."),
        item("Banking", "/netherlands/money/banking/", "Accounts, switching, and everyday banking."),
      ];
      for (const cand of chain) {
        const f = filterNavItem(cand);
        if (f && f.navStatus === "live" && f.href) {
          featured = f;
          break;
        }
      }
      if (!featured || featured.navStatus !== "live" || !featured.href) {
        for (const cand of chain) {
          const f = filterNavItem(cand);
          if (f && f.navStatus === "comingSoon") {
            featured = f;
            break;
          }
        }
      }
    }
    /** Culture: prefer flagship Dutch Culture hub, then moving onboarding guide. */
    if (
      menu.key === "culture" &&
      (!featured || featured.navStatus !== "live" || !featured.href)
    ) {
      const chain = [
        item(
          "Dutch Culture",
          "/netherlands/life/dutch-culture/",
          "Flagship overview of Dutch values, traditions, daily life and integration context for expats."
        ),
        item(
          "Moving to the Netherlands",
          "/netherlands/moving-to-the-netherlands/",
          "Plan the move first, then layer in workplace norms, social cues, and language basics."
        ),
        item("Netherlands hub", "/netherlands/", "Guides, cities, and services overview."),
      ];
      for (const cand of chain) {
        const f = filterNavItem(cand);
        if (f && f.navStatus === "live" && f.href) {
          featured = f;
          break;
        }
      }
    }
  }

  let toolsList = sortNavItemsForDisplay((menu.tools ?? []).map(filterNavItem).filter((x): x is NavItem => x != null));
  if (menu.showToolsRail === false) {
    toolsList = [];
  }

  return {
    ...menu,
    sections,
    featured: featured === null ? undefined : featured,
    tools: toolsList,
  };
}

/** Money mega menu tools column: calculators + bank comparison from registry + tools hub (banking guides stay in section columns). */
function buildMoneyToolRail(): NavItem[] {
  const ids = [
    "thirty-percent-ruling-calculator",
    "dutch-salary-net-calculator",
    "job-offer-comparison-tool",
    "expat-cost-of-living-calculator",
    "childcare-cost-estimator",
    "rent-affordability-calculator",
    "healthcare-allowance-estimator",
    "double-tax-awareness-tool",
    "employment-contract-risk-scanner",
    "payslip-decoder",
    "employment-type-scenario-tool",
    /** Banking & transfer tools in the Money mega menu tools rail. */
    "netherlands-bank-comparison-tool",
    "netherlands-banking-cost-estimator",
    "netherlands-transfer-cost-calculator",
  ];
  const toolRows = sortNavItemsForDisplay(dedupeNavItems(toolItemsByIds(ids)));
  /** Hub links after registry tools so order stays predictable (not sorted with tool titles). */
  return [
    ...toolRows,
    item("Money & Tax tools hub", "/netherlands/money/tools/", "Calculators and planners grouped under Money & Tax on ExpatCopilot."),
    item("Open tools hub", "/netherlands/tools/", "Browse all tools across categories."),
  ];
}

/** Living mega tools column: curated housing tools from `menu-features.json` + view-all + hub. */
function buildLivingToolRail(): NavItem[] {
  return buildToolRailForKey("living");
}

/** Culture mega tools: partner, childcare, inburgering-style tools from domain config + view-all + hub. */
function buildCultureToolRail(): NavItem[] {
  return buildToolRailForKey("culture");
}

/** Services mega tools rail: minimal Move tools that support provider decisions + global hub. */
function buildServicesToolRail(): NavItem[] {
  return sortNavItemsForDisplay([
    ...dedupeNavItems(toolItemsByIds(["document-readiness", "arrival-planner"])),
    item("Open tools hub", "/netherlands/tools/"),
  ]);
}

function shouldShowToolInTopLevelCategory(categoryId: string, route: string): boolean {
  if (categoryId === "taxes-tools") {
    return route.startsWith("/netherlands/taxes/tools/") && !route.includes("healthcare-allowance-estimator");
  }
  if (categoryId === "healthcare") {
    return route.startsWith("/netherlands/health/tools/") || route.includes("healthcare-allowance-estimator");
  }
  if (categoryId === "work-employment") {
    return route.startsWith("/netherlands/work/tools/");
  }
  if (categoryId === "money-tax") {
    return (
      route.startsWith("/netherlands/money/tools/") ||
      route.startsWith("/netherlands/family/tools/childcare-cost-estimator") ||
      route.startsWith("/netherlands/tools/bank") ||
      route.startsWith("/netherlands/tools/transfer-cost-calculator") ||
      route.startsWith("/netherlands/tools/city-comparison")
    );
  }
  if (categoryId === "housing") {
    return (
      route.startsWith("/netherlands/housing/tools/") ||
      route.startsWith("/netherlands/living/tools/utilities-services-comparison/")
    );
  }
  return true;
}

function buildToolsMegaSections(): NavSection[] {
  return getTopLevelToolsMenuGroups().map(({ category, tools }) => {
    const viewAll = item(`View all ${category.label} tools`, category.route);
    const categoryTools = tools.filter((tool) => shouldShowToolInTopLevelCategory(category.id, tool.route));
    if (category.id === "housing") {
      const housingToolIds = [
        "rent-affordability-calculator",
        "deposit-return-risk-checker",
        "mortgage-eligibility-estimator",
        "utilities-services-comparison-tool",
        "buy-vs-rent-calculator",
        "dutch-rental-budget-calculator",
      ];
      const housingItems = dedupeNavItems([
        ...toolItemsByIds(housingToolIds).filter((tool) =>
          tool.href ? shouldShowToolInTopLevelCategory(category.id, tool.href) : true
        ),
        viewAll,
      ]);
      return { title: category.label, items: housingItems };
    }
    return {
      title: category.label,
      items: dedupeNavItems([...categoryTools.map(toToolNavItem), viewAll]),
    };
  });
}

function pathMatches(pathname: string, base: string): boolean {
  if (pathname === base || pathname === `${base}/`) return true;
  if (base !== "/" && pathname.startsWith(`${base}/`)) return true;
  return false;
}

/** Onboarding / planning hub pages (pillar: Move). */
function isStartHerePath(pathname: string): boolean {
  const prefixes = [
    "/netherlands/moving-to-the-netherlands",
    "/netherlands/moving-to-netherlands-from",
    "/netherlands/moving-checklist-netherlands",
    "/netherlands/documents-needed-to-move-netherlands",
    "/netherlands/moving-to-netherlands-timeline",
    "/netherlands/moving-to-netherlands-cost",
    "/netherlands/move-to-netherlands-without-job",
    "/netherlands/moving-to-netherlands-with-family",
    "/netherlands/eu-vs-non-eu-moving-to-netherlands",
    "/netherlands/moving-to-netherlands-with-partner",
    "/netherlands/moving-to-netherlands-with-kids",
    "/netherlands/bringing-pets-to-netherlands",
  ];
  return prefixes.some((pre) => pathname === pre || pathname.startsWith(`${pre}/`));
}

/** Culture pillar: language, family, soft health topics, and culture URLs (not `/netherlands/work/*` job law). */
function isCulturePillarPath(pathname: string): boolean {
  if (pathname.startsWith("/netherlands/culture")) return true;
  if (pathname.startsWith("/netherlands/language")) return true;
  if (pathname.startsWith("/netherlands/family")) return true;
  if (pathname === "/netherlands/health" || pathname === "/netherlands/health/" || pathname.startsWith("/netherlands/health/")) {
    return true;
  }
  return false;
}

/** Living-owned health/family guides that sit in the Living mega menu (not Culture). */
const LIVING_OWNED_HEALTH_FAMILY_PREFIXES: readonly string[] = [
  "/netherlands/health/gp-netherlands",
  "/netherlands/health/dentists-netherlands",
  "/netherlands/health/hospitals-netherlands",
  "/netherlands/health/emergency-healthcare-netherlands",
  "/netherlands/health/mental-healthcare-netherlands",
  "/netherlands/health/pharmacies-netherlands",
  "/netherlands/health/prescriptions-netherlands",
  "/netherlands/health/physiotherapy-netherlands",
  "/netherlands/health/maternity-care-netherlands",
  "/netherlands/health/health-insurance-comparison-netherlands",
  "/netherlands/family/child-benefits-netherlands",
  /** Legacy singular URL — keep Living tab active before redirect. */
  "/netherlands/family/child-benefit-netherlands",
  "/netherlands/family/giving-birth-netherlands",
  "/netherlands/family/pregnancy-netherlands",
  "/netherlands/family/pets-netherlands",
];

function isLivingOwnedHealthFamilyPath(pathname: string): boolean {
  const base = resolveNavActivePath(pathname).split("?")[0].replace(/\/+$/, "") || "/";
  return LIVING_OWNED_HEALTH_FAMILY_PREFIXES.some((pre) => base === pre || base.startsWith(`${pre}/`));
}

const WORK_PATH_HIGHLIGHT_MOVING: readonly string[] = [
  "/netherlands/moving/working-in-the-netherlands",
  "/netherlands/moving/changing-jobs-netherlands",
  "/netherlands/moving/resigning-job-netherlands",
  "/netherlands/moving/layoffs-netherlands",
  "/netherlands/moving/twv-work-permit",
  "/netherlands/work/working-in-netherlands",
  "/netherlands/work/changing-jobs-netherlands",
  "/netherlands/work/resigning-job-netherlands",
  "/netherlands/work/layoffs-netherlands",
];

/** Jobs & salaries App Router guides — primary Move menu cluster; highlight Move (not Money) at top level. */
const JOBS_SALARY_GUIDE_PREFIXES: readonly string[] = [
  "/netherlands/jobs/salary-negotiation-netherlands",
  "/netherlands/jobs/minimum-wage-netherlands",
  "/netherlands/jobs/expat-salary-netherlands",
  "/netherlands/jobs/employee-benefits-netherlands",
  "/netherlands/jobs/pension-netherlands-expats",
  "/netherlands/jobs/holiday-allowance-netherlands",
  "/netherlands/jobs/finding-jobs-netherlands",
  "/netherlands/jobs/recruitment-agencies-netherlands",
  "/netherlands/jobs/english-speaking-jobs-netherlands",
  "/netherlands/jobs/remote-work-netherlands",
  "/netherlands/jobs/cv-netherlands",
  "/netherlands/jobs/cover-letter-netherlands",
  "/netherlands/jobs/linkedin-netherlands",
  "/netherlands/jobs/interview-tips-netherlands",
  "/netherlands/jobs/networking-netherlands",
  "/netherlands/jobs/employment-contract-netherlands",
  "/netherlands/jobs/probation-period-netherlands",
  "/netherlands/jobs/notice-period-netherlands",
  "/netherlands/jobs/employee-rights-netherlands",
  "/netherlands/jobs/freelancing-netherlands",
  "/netherlands/jobs/starting-consultancy-netherlands",
  "/netherlands/jobs/contractor-vs-employee-netherlands",
];

/** Jobs URLs owned by Culture mega menu (not Move/Money). */
const CULTURE_OWNED_JOBS_GUIDE_PREFIXES: readonly string[] = [
  "/netherlands/jobs/dutch-workplace-culture",
  "/netherlands/jobs/dutch-directness-at-work",
];

/** Life URLs owned by Culture mega menu (not Living). */
const CULTURE_OWNED_LIFE_GUIDE_PREFIXES: readonly string[] = [
  "/netherlands/life/dutch-culture",
  "/netherlands/life/dutch-social-norms",
  "/netherlands/life/dutch-holidays-and-traditions",
  "/netherlands/life/dutch-birthday-traditions",
  "/netherlands/life/dutch-etiquette",
  "/netherlands/life/dutch-humour",
];

/** Business App Router guides — highlight Move at top level (canonical URL under `/business/`). */
const BUSINESS_GUIDE_PREFIXES: readonly string[] = [
  "/netherlands/business/zzp-netherlands",
  "/netherlands/business/starting-a-business-netherlands",
];

/** Tax/compensation guides surfaced under Move → More — highlight Move at top level (canonical URL may live under `/taxes/`). */
const MOVE_TAX_COMPENSATION_GUIDE_PREFIXES: readonly string[] = [
  "/netherlands/taxes/bonus-tax-netherlands",
  "/netherlands/taxes/healthcare-allowance-netherlands",
  /** Legacy URL (301 → canonical guide) — keep Move tab active before redirect. */
  "/netherlands/taxes/healthcare-allowance",
  "/netherlands/taxes/childcare-allowance-netherlands",
  /** Legacy URL (301 → canonical guide) — keep Move tab active before redirect. */
  "/netherlands/taxes/childcare-allowance",
];

/** Housing guides surfaced under Move → Housing — highlight Move at top level (not Living). */
const MOVE_HOUSING_GUIDE_PREFIXES: readonly string[] = [
  "/netherlands/housing/housing-costs-netherlands",
  "/netherlands/housing/rental-contracts-and-deposits-netherlands",
  "/netherlands/housing/rental-scams-netherlands",
  /** Legacy URL (301 → canonical guide) — keep Move tab active before redirect. */
  "/netherlands/living/housing-costs",
  /** Legacy URL (301 → canonical guide) — keep Move tab active before redirect. */
  "/netherlands/living/rental-contracts-and-deposits",
];

/** Housing-related guides under Living → Housing (URL may live under `/taxes/`). */
const LIVING_HOUSING_GUIDE_PREFIXES: readonly string[] = [
  "/netherlands/utilities",
  "/netherlands/practical-life/waste-and-recycling-netherlands",
  "/netherlands/practical-life/parking-and-local-permits-netherlands",
  "/netherlands/practical-life/subscriptions-and-cancellations-netherlands",
  "/netherlands/taxes/rent-allowance-netherlands",
  /** Legacy URL (301 → canonical guide) — keep Living tab active before redirect. */
  "/netherlands/taxes/rent-allowance",
  "/netherlands/taxes/property-tax-netherlands",
  "/netherlands/housing/buying-a-house-netherlands",
  "/netherlands/housing/mortgages-netherlands-expats",
  "/netherlands/housing/buy-vs-rent-netherlands",
  /** Legacy flat URL (301 → canonical guide) — keep Living tab active before redirect. */
  "/netherlands/buying-house-netherlands",
  /** Legacy flat URL (301 → canonical guide) — keep Living tab active before redirect. */
  "/netherlands/mortgage-netherlands-expats",
  /** Legacy flat URL (301 → canonical property-tax guide) — keep Living tab active before redirect. */
  "/netherlands/property-tax-netherlands",
  /** Legacy flat URL (301 → canonical buy-vs-rent guide) — keep Living tab active before redirect. */
  "/netherlands/buy-vs-rent-netherlands",
];

function isJobsSalaryGuidePath(pathname: string): boolean {
  const base = resolveNavActivePath(pathname).split("?")[0].replace(/\/+$/, "") || "/";
  return JOBS_SALARY_GUIDE_PREFIXES.some((pre) => base === pre || base.startsWith(`${pre}/`));
}

function isCultureOwnedJobsGuidePath(pathname: string): boolean {
  const base = resolveNavActivePath(pathname).split("?")[0].replace(/\/+$/, "") || "/";
  return CULTURE_OWNED_JOBS_GUIDE_PREFIXES.some((pre) => base === pre || base.startsWith(`${pre}/`));
}

function isCultureOwnedLifeGuidePath(pathname: string): boolean {
  const base = resolveNavActivePath(pathname).split("?")[0].replace(/\/+$/, "") || "/";
  return CULTURE_OWNED_LIFE_GUIDE_PREFIXES.some((pre) => base === pre || base.startsWith(`${pre}/`));
}

function isBusinessGuidePath(pathname: string): boolean {
  const base = resolveNavActivePath(pathname).split("?")[0].replace(/\/+$/, "") || "/";
  return BUSINESS_GUIDE_PREFIXES.some((pre) => base === pre || base.startsWith(`${pre}/`));
}

function isMoveTaxCompensationGuidePath(pathname: string): boolean {
  const base = pathname.split("?")[0].replace(/\/+$/, "") || "/";
  return MOVE_TAX_COMPENSATION_GUIDE_PREFIXES.some((pre) => base === pre || base.startsWith(`${pre}/`));
}

function isMoveHousingGuidePath(pathname: string): boolean {
  const base = resolveNavActivePath(pathname).split("?")[0].replace(/\/+$/, "") || "/";
  return MOVE_HOUSING_GUIDE_PREFIXES.some((pre) => base === pre || base.startsWith(`${pre}/`));
}

function isLivingHousingGuidePath(pathname: string): boolean {
  const base = pathname.split("?")[0].replace(/\/+$/, "") || "/";
  return LIVING_HOUSING_GUIDE_PREFIXES.some((pre) => base === pre || base.startsWith(`${pre}/`));
}

const WORK_PATH_HIGHLIGHT_CULTURE: readonly string[] = [
  /** Legacy URL (301 → canonical workplace culture guide) — Culture tab before redirect. */
  "/netherlands/work/work-culture-netherlands",
  "/netherlands/work/work-hours-netherlands",
];

function getWorkClusterNavKey(pathname: string): TopNavKey {
  const base = pathname.split("?")[0].replace(/\/+$/, "") || "/";
  for (const pre of WORK_PATH_HIGHLIGHT_MOVING) {
    if (base === pre || base.startsWith(`${pre}/`)) return "moving";
  }
  for (const pre of WORK_PATH_HIGHLIGHT_CULTURE) {
    if (base === pre || base.startsWith(`${pre}/`)) return "culture";
  }
  return "money";
}

/**
 * Relocation / visa / integration pillar paths not covered by Start-here-style planning pages.
 * Keep in sync with hub pages under `/netherlands/`.
 */
function isMovingPillarPath(pathname: string): boolean {
  if (isStartHerePath(pathname)) return false;
  const movingPrefixes = [
    "/netherlands/moving/",
    "/netherlands/visa/",
    "/netherlands/visas-residency",
    "/netherlands/integration",
    "/netherlands/citizenship",
    "/netherlands/leaving",
    "/netherlands/visa-checker",
    "/netherlands/visa-timeline-estimator",
    "/netherlands/visa-cost-calculator",
    "/netherlands/visa-application-plan",
    "/netherlands/document-readiness-checker",
    "/netherlands/municipality-registration-netherlands",
    "/netherlands/health-insurance-netherlands",
    "/netherlands/utilities",
    "/netherlands/practical-life",
    "/netherlands/government-services",
    "/netherlands/digid-awareness",
    "/netherlands/shipping-household-goods-netherlands",
    "/netherlands/open-bank-account-netherlands",
    "/netherlands/first-30-days-netherlands",
    "/netherlands/first-60-days-netherlands",
    "/netherlands/first-90-days-netherlands",
    "/netherlands/bsn-registration",
    "/netherlands/register-address-netherlands",
    "/netherlands/settling-in-netherlands",
    "/netherlands/moving-mistakes-netherlands",
    "/netherlands/moving-requirements-netherlands",
    "/netherlands/moving-documents-checklist",
    "/netherlands/visa-documents-netherlands",
    "/netherlands/document-translation-netherlands",
    "/netherlands/can-i-open-bank-account-before-bsn",
    "/netherlands/moving-to-netherlands-steps",
  ];
  return movingPrefixes.some((pre) => pathname === pre || pathname.startsWith(`${pre}/`) || pathname.startsWith(pre));
}

/** First path segment after `/netherlands/` for planned housing-cluster guides (active nav: Living). */
const HOUSING_GUIDE_FIRST_SEGMENTS = new Set([
  "renting-in-the-netherlands",
  "how-to-rent-in-netherlands",
  "rental-contract-netherlands",
  "rental-deposit-netherlands",
  "rent-increase-rules-netherlands",
  "finding-apartment-netherlands",
  "best-housing-websites-netherlands",
  "temporary-housing-netherlands",
  "expat-housing-agencies-netherlands",
  "average-rent-netherlands",
  "rent-prices-amsterdam",
  "rent-prices-rotterdam",
  "rent-prices-utrecht",
  "renter-rights-netherlands",
  "rent-control-netherlands",
  "reporting-bad-landlord-netherlands",
  "social-housing-netherlands",
  "private-rental-netherlands",
  "furnished-vs-unfurnished-netherlands",
  "utilities",
  "utilities-in-netherlands",
  "electricity-providers-netherlands",
  "internet-providers-netherlands",
  "registering-address-rental",
  "rental-insurance-netherlands",
  "inventory-check-rental-netherlands",
  "buying-house-netherlands",
  "mortgage-netherlands-expats",
  "property-tax-netherlands",
  "buy-vs-rent-netherlands",
  "housing-netherlands",
  "renting-in-netherlands",
]);

/** Major Dutch city hub paths. */
const CITY_HUB_PREFIXES = [
  "/netherlands/randstad",
  "/netherlands/amsterdam",
  "/netherlands/rotterdam",
  "/netherlands/utrecht",
  "/netherlands/the-hague",
  "/netherlands/eindhoven",
  "/netherlands/haarlem",
  "/netherlands/groningen",
  "/netherlands/delft",
  "/netherlands/leiden",
  "/netherlands/maastricht",
  "/netherlands/breda",
  "/netherlands/tilburg",
  "/netherlands/arnhem",
  "/netherlands/nijmegen",
  "/netherlands/amstelveen",
] as const;

/** Returns which top nav key is active for the current path (for trigger highlighting). */
export function getActiveNavKey(pathname: string): TopNavKey | null {
  if (!pathname || pathname === "/") return null;
  const path = resolveNavActivePath(pathname);

  if (
    path.startsWith("/netherlands/tools") ||
    path.startsWith("/tools") ||
    path.startsWith("/netherlands/housing/tools")
  ) {
    return "tools";
  }

  if (path.startsWith("/netherlands/services")) return "services";

  if (path.startsWith("/netherlands/cities")) return "cities";

  if (CITY_HUB_PREFIXES.some((pre) => path === pre || path.startsWith(`${pre}/`))) return "cities";

  if (isCultureOwnedJobsGuidePath(path)) return "culture";

  if (isCultureOwnedLifeGuidePath(path)) return "culture";

  if (isJobsSalaryGuidePath(path)) return "moving";

  if (isBusinessGuidePath(path)) return "moving";

  if (isMoveHousingGuidePath(path)) return "moving";

  if (isLivingHousingGuidePath(path)) return "living";

  if (path === "/netherlands/housing") return "moving";

  if (
    path.startsWith("/netherlands/housing/") &&
    !path.startsWith("/netherlands/housing/tools")
  ) {
    return "living";
  }

  if (isMoveTaxCompensationGuidePath(path)) return "moving";

  if (path.startsWith("/netherlands/money") || path.startsWith("/netherlands/taxes") || path.startsWith("/netherlands/jobs")) {
    return "money";
  }

  if (
    path === "/netherlands/family/tools/childcare-cost-estimator" ||
    path.startsWith("/netherlands/family/tools/childcare-cost-estimator/")
  ) {
    return "money";
  }

  if (path.startsWith("/netherlands/work")) return getWorkClusterNavKey(path);

  if (path.startsWith("/netherlands/living")) return "living";

  if (path.startsWith("/netherlands/education")) return "living";

  if (path.startsWith("/netherlands/life")) return "living";

  if (isLivingOwnedHealthFamilyPath(path)) return "living";

  const seg1 = path.split("/").filter(Boolean)[1];
  if (seg1 && HOUSING_GUIDE_FIRST_SEGMENTS.has(seg1)) return "living";

  if (isCulturePillarPath(path)) return "culture";

  if (isStartHerePath(path)) return "moving";

  if (isMovingPillarPath(path)) return "moving";

  return null;
}

export const TOP_NAV: TopNavEntry[] = [
  { key: "moving", label: "Move" },
  /** No `href` — click opens the mega menu so guides (hub, best, cheapest, tools) stay discoverable. */
  { key: "cities", label: "Cities" },
  { key: "money", label: "Money" },
  { key: "services", label: "Services", href: "/netherlands/services/" },
  { key: "living", label: "Living" },
  { key: "culture", label: "Culture" },
  { key: "tools", label: "Tools", href: "/netherlands/tools/" },
];

const RAW_MEGA_MENUS: Record<TopNavKey, MegaMenu> = {
  moving: {
    key: "moving",
    label: "Move",
    showFeatured: false,
    sections: [
      {
        title: "Planning",
        items: [
          item("Moving to the Netherlands", "/netherlands/moving-to-the-netherlands"),
          item("Moving checklist Netherlands", "/netherlands/moving-checklist-netherlands"),
          item("Moving from your country", "/netherlands/moving-to-netherlands-from"),
          item("Documents needed", "/netherlands/documents-needed-to-move-netherlands"),
          item("Step-by-step moving guide", "/netherlands/moving-to-netherlands-steps/"),
          item("Key requirements", "/netherlands/moving-requirements-netherlands/"),
          item("Common moving mistakes", "/netherlands/moving-mistakes-netherlands/"),
          item("Moving documents checklist", "/netherlands/moving-documents-checklist/"),
          item("Moving timeline", "/netherlands/moving-to-netherlands-timeline"),
          item("Moving costs", "/netherlands/moving-to-netherlands-cost"),
          item("Moving with family", "/netherlands/moving-to-netherlands-with-family"),
          item("Moving with a partner", "/netherlands/moving-to-netherlands-with-partner/"),
          item("Moving with kids", "/netherlands/moving-to-netherlands-with-kids/"),
          item("Move without a job", "/netherlands/move-to-netherlands-without-job"),
          item("EU vs non-EU", "/netherlands/eu-vs-non-eu-moving-to-netherlands"),
          item("Bringing pets", "/netherlands/bringing-pets-to-netherlands"),
        ],
      },
      {
        title: "Documents",
        items: [
          item("Visa documents", "/netherlands/visa-documents-netherlands/"),
          item("Apostille documents", "/netherlands/apostille-documents-netherlands/"),
          item("Document legalization", "/netherlands/document-legalization-netherlands/"),
          item("Document translation", "/netherlands/document-translation-netherlands/"),
        ],
      },
      {
        title: "Early setup",
        items: [
          item("Health insurance", "/netherlands/health-insurance-netherlands"),
          item("Municipality registration", "/netherlands/municipality-registration-netherlands"),
          item("BSN registration", "/netherlands/bsn-registration/"),
          item(
            "Register your address",
            "/netherlands/practical-life/registering-your-address-netherlands/",
            "Municipality address registration, BSN connection, documents and appointment steps."
          ),
          item("Open a bank account", "/netherlands/open-bank-account-netherlands"),
          item("Shipping household goods", "/netherlands/shipping-household-goods-netherlands"),
        ],
      },
      {
        title: "Practical life",
        items: [
          item(
            "Utilities",
            "/netherlands/utilities/utilities-netherlands/",
            "Set up electricity, gas or heating, water, internet, mobile and waste collection after moving."
          ),
          item(
            "Energy and water",
            "/netherlands/utilities/energy-and-water-netherlands/",
            "Electricity, gas, water, district heating, costs and setup after moving."
          ),
          item(
            "Internet and mobile",
            "/netherlands/utilities/internet-and-mobile-netherlands/",
            "Fibre, broadband, SIM-only, eSIM, providers and setup after moving."
          ),
          item(
            "Internet providers",
            "/netherlands/services/internet-providers/",
            "Compare fibre, cable and DSL ISPs — provider directory beside the how-to guide."
          ),
          item(
            "Energy providers",
            "/netherlands/services/energy-providers/",
            "Compare electricity and gas suppliers — provider directory beside Energy and water."
          ),
          item(
            "Phone providers",
            "/netherlands/services/phone-providers/",
            "Compare prepaid, SIM-only and eSIM plans — provider directory."
          ),
          item(
            "Municipality services",
            "/netherlands/practical-life/municipality-services-netherlands/",
            "Gemeente registration, BSN, local taxes, permits, parking and waste for expats."
          ),
          item(
            "Waste and recycling",
            "/netherlands/practical-life/waste-and-recycling-netherlands/",
            "Sorting rules, collection schedules, underground containers and milieustraat for expats."
          ),
          item(
            "Parking and local permits",
            "/netherlands/practical-life/parking-and-local-permits-netherlands/",
            "Resident permits, visitor passes, paid zones, parking apps and municipality permits."
          ),
          item(
            "Subscriptions and cancellations",
            "/netherlands/practical-life/subscriptions-and-cancellations-netherlands/",
            "Contracts, notice periods, gym, internet, utilities and cancellation processes for expats."
          ),
          item(
            "Privacy and safety basics",
            "/netherlands/practical-life/privacy-and-safety-basics-netherlands/",
            "Personal safety, digital security, scam awareness and emergency services for expats."
          ),
        ],
      },
      {
        title: "Registration",
        items: [
          item(
            "Registering your address",
            "/netherlands/practical-life/registering-your-address-netherlands/",
            "Municipality address registration, BSN connection, documents and appointment steps."
          ),
          item("BSN Netherlands", "/netherlands/practical-life/bsn-netherlands/", "BSN routes, documents and timing for newcomers."),
          item("DigiD Netherlands", "/netherlands/practical-life/digid-netherlands/", "Digital identity setup after registration."),
          item(
            "Government portals",
            "/netherlands/practical-life/government-portals-netherlands/",
            "Map of Dutch government websites, DigiD, taxes, IND and gemeente portals."
          ),
          item("Local taxes Netherlands", "/netherlands/practical-life/local-taxes-netherlands/", "Gemeente tax letters, charges and payment steps."),
        ],
      },
      {
        title: "Housing",
        items: [
          item(
            "Housing in the Netherlands",
            "/netherlands/housing/",
            "Renting, buying, costs, mortgages, cities and accommodation for expats."
          ),
          item(
            "Renting in the Netherlands",
            "/netherlands/housing/renting-in-the-netherlands/",
            "Contracts, deposits, viewings and tenant orientation for newcomers."
          ),
          item(
            "Rental Scams",
            "/netherlands/housing/rental-scams-netherlands/",
            "Warning signs, landlord verification, safe payments and reporting housing fraud."
          ),
          item(
            "Buying a house in the Netherlands",
            "/netherlands/housing/buying-a-house-netherlands/",
            "Purchase process, kosten koper, bidding and owner responsibilities."
          ),
          item(
            "Mortgages for expats",
            "/netherlands/housing/mortgages-netherlands-expats/",
            "Mortgage eligibility, borrowing capacity and application steps."
          ),
          item(
            "Buy vs rent in the Netherlands",
            "/netherlands/housing/buy-vs-rent-netherlands/",
            "Compare rental flexibility with ownership stability and costs."
          ),
          item(
            "Housing costs in the Netherlands",
            "/netherlands/housing/housing-costs-netherlands/",
            "Rent, purchase, utilities, hidden costs and city-by-city comparisons for expats."
          ),
          item(
            "Property tax in the Netherlands",
            "/netherlands/taxes/property-tax-netherlands/",
            "WOZ value and municipal owner charges."
          ),
        ],
      },
      {
        title: "Visas & residency",
        items: [
          item("Compare visas", "/netherlands/visa/compare-visas"),
          item("DAFT (US entrepreneurs)", "/netherlands/visa/dutch-american-friendship-treaty"),
          item("EU Blue Card", "/netherlands/visa/eu-blue-card"),
          item("Highly skilled migrant", "/netherlands/visa/highly-skilled-migrant"),
          item("Partner & family", "/netherlands/visa/partner-family-visa"),
          item("Self-employed visa", "/netherlands/visa/self-employed-visa"),
          item("Student visa", "/netherlands/visa/student-visa"),
          item("Visas & residency", "/netherlands/moving/visas-residency/"),
          item("Residence permits", "/netherlands/moving/residence-permits/"),
          item("Extensions & changes", "/netherlands/moving/extensions-changes/"),
          item("Status changes", "/netherlands/moving/status-changes/"),
        ],
      },
      {
        title: "First weeks & months",
        items: [
          item("After arriving", "/netherlands/after-arriving-netherlands/"),
          item("Settling in", "/netherlands/settling-in-netherlands/"),
          item("First 30 days", "/netherlands/first-30-days-netherlands"),
          item("First 60 days", "/netherlands/first-60-days-netherlands"),
          item("First 90 days", "/netherlands/first-90-days-netherlands"),
        ],
      },
      {
        title: "Jobs & salaries",
        items: [
          item(
            "Finding jobs in the Netherlands",
            "/netherlands/jobs/finding-jobs-netherlands/",
            "How expats find work: Dutch job market, English roles, recruiters, visa sponsorship and city demand."
          ),
          item(
            "Recruitment agencies Netherlands",
            "/netherlands/jobs/recruitment-agencies-netherlands/",
            "How Dutch recruiters, uitzendbureaus and intermediars work for expats: when to use them, fees and partnership habits."
          ),
          item(
            "English speaking jobs Netherlands",
            "/netherlands/jobs/english-speaking-jobs-netherlands/",
            "English-friendly roles for expats: sectors, cities, language reality checks and when Dutch is still needed."
          ),
          item(
            "Remote work Netherlands",
            "/netherlands/jobs/remote-work-netherlands/",
            "Remote and hybrid employment for expats: employer expectations, abroad caution and home-office habits."
          ),
          item(
            "CV Netherlands",
            "/netherlands/jobs/cv-netherlands/",
            "Dutch CV and application norms: length, photo, motivation letter, LinkedIn alignment and common mistakes."
          ),
          item(
            "Cover letter Netherlands",
            "/netherlands/jobs/cover-letter-netherlands/",
            "Dutch motivation letters (motivatiebrief): when required, length, tone, structure, language and common mistakes."
          ),
          item(
            "LinkedIn Netherlands",
            "/netherlands/jobs/linkedin-netherlands/",
            "LinkedIn for Dutch job search: profile, headline, Open to Work, messaging recruiters and Dutch hiring norms."
          ),
          item(
            "Interview tips Netherlands",
            "/netherlands/jobs/interview-tips-netherlands/",
            "Dutch job interview culture for expats: preparation, directness, common questions, remote vs onsite and follow-up."
          ),
          item(
            "Networking Netherlands",
            "/netherlands/jobs/networking-netherlands/",
            "Professional networking for expats: events, communities, referrals, warm intros and Dutch directness in outreach."
          ),
          item(
            "Salary negotiation",
            "/netherlands/jobs/salary-negotiation-netherlands/",
            "How expats negotiate Dutch job offers: culture, gross vs net, benefits and total compensation."
          ),
          item(
            "Minimum wage",
            "/netherlands/jobs/minimum-wage-netherlands/",
            "Dutch minimum wage for expats: age bands, taxes, take-home pay and living costs."
          ),
          item(
            "Expat salary",
            "/netherlands/jobs/expat-salary-netherlands/",
            "Salary expectations for international professionals by city, industry, taxes and the 30% ruling."
          ),
          item(
            "Employee benefits",
            "/netherlands/jobs/employee-benefits-netherlands/",
            "Pension, holiday allowance, leave, remote work and expat compensation packages explained."
          ),
          item(
            "Pension in the Netherlands",
            "/netherlands/jobs/pension-netherlands-expats/",
            "Dutch pension system for expats: AOW, employer pensions, deductions and portability."
          ),
          item(
            "Employment contracts",
            "/netherlands/jobs/employment-contract-netherlands/",
            "Dutch employment contracts for expats: temporary vs permanent, probation, notice periods and benefits."
          ),
          item(
            "Probation period",
            "/netherlands/jobs/probation-period-netherlands/",
            "How proeftijd works in Dutch employment contracts and what expats should expect during onboarding."
          ),
          item(
            "Notice period",
            "/netherlands/jobs/notice-period-netherlands/",
            "How notice periods work in Dutch employment contracts when changing jobs, resigning or planning transitions."
          ),
          item(
            "Employee rights",
            "/netherlands/jobs/employee-rights-netherlands/",
            "Workplace rights, leave, sick pay and equal treatment for expats in Dutch employment."
          ),
          item(
            "Freelancing",
            "/netherlands/jobs/freelancing-netherlands/",
            "ZZP registration, taxes, client contracts and freelancing orientation for expats."
          ),
          item(
            "Starting consultancy",
            "/netherlands/jobs/starting-consultancy-netherlands/",
            "How expats start a consultancy practice: positioning, first clients, rates orientation, contracts and KvK/ZZP overlap."
          ),
          item(
            "Contractor vs employee",
            "/netherlands/jobs/contractor-vs-employee-netherlands/",
            "Compare employment and contractor or ZZP work models: income, benefits, taxes, pensions and expat tradeoffs."
          ),
          item(
            "Holiday allowance",
            "/netherlands/jobs/holiday-allowance-netherlands/",
            "How vakantiegeld works for expats: payment timing, salary inclusion and tax context."
          ),
        ],
      },
      {
        title: "Business",
        items: [
          item(
            "ZZP in the Netherlands",
            "/netherlands/business/zzp-netherlands/",
            "What a ZZP'er is, KvK registration, taxes, invoicing and expat considerations for Dutch self-employment."
          ),
          item(
            "Contractor vs employee",
            "/netherlands/jobs/contractor-vs-employee-netherlands/",
            "Compare employment and ZZP or contractor models before choosing your work structure."
          ),
          item(
            "Starting a business",
            "/netherlands/business/starting-a-business-netherlands/",
            "Cornerstone guide for expats starting a business: KvK, structures, taxes, banking, visas and practical first steps."
          ),
        ],
      },
      {
        title: "Work permits & job changes",
        items: [
          item("Working in the Netherlands", "/netherlands/moving/working-in-the-netherlands/"),
          item("Changing jobs in the Netherlands", "/netherlands/moving/changing-jobs-netherlands/"),
          item("TWV work permit", "/netherlands/moving/twv-work-permit/"),
          item("Resigning a job in the Netherlands", "/netherlands/moving/resigning-job-netherlands/"),
          item("Layoffs in the Netherlands", "/netherlands/moving/layoffs-netherlands/"),
        ],
      },
    ],
    featured: item(
      "Moving to the Netherlands",
      "/netherlands/moving-to-the-netherlands/",
      "Start with the main moving guide, then explore documents, registration, timelines, and scenario-specific pages."
    ),
    tools: buildToolRailForKey("moving"),
  },
  cities: {
    key: "cities",
    label: "Cities",
    showFeatured: false,
    sections: [
      {
        title: "Popular cities",
        comingSoonFirst: true,
        items: [
          item(
            "Randstad Guide",
            "/netherlands/randstad/",
            "Compare Amsterdam, Rotterdam, The Hague, Utrecht and nearby cities as one connected region."
          ),
          item("Amsterdam", "/netherlands/amsterdam"),
          item("Rotterdam", "/netherlands/rotterdam"),
          item("Utrecht", "/netherlands/utrecht"),
          item("The Hague", "/netherlands/the-hague"),
          item("Eindhoven", "/netherlands/eindhoven"),
          item("Haarlem", "/netherlands/haarlem"),
        ],
      },
      {
        title: "More Cities",
        items: [
          item("Cities hub", "/netherlands/cities/", "Compare Dutch cities and read expat city guides."),
          item("Amstelveen", "/netherlands/amstelveen"),
          item("Arnhem", "/netherlands/arnhem"),
          item("Breda", "/netherlands/breda"),
          item("Delft", "/netherlands/delft"),
          item("Groningen", "/netherlands/groningen"),
          item("Leiden", "/netherlands/leiden"),
          item("Maastricht", "/netherlands/maastricht"),
          item("Nijmegen", "/netherlands/nijmegen"),
          item("Tilburg", "/netherlands/tilburg/"),
        ],
      },
      {
        title: "Compare / discover",
        items: [
          item(
            "Best cities for expats",
            "/netherlands/cities/best-cities-for-expats/",
            "Shortlists, scenarios, and trade-offs — then open city guides and calculators."
          ),
          item(
            "Cheapest cities for expats",
            "/netherlands/cities/cheapest-cities-for-expats/",
            "Affordability lens: rent pressure, commute trade-offs, and calculators — not a ranking."
          ),
          item(
            "Best Dutch cities for families",
            "/netherlands/cities/best-cities-for-families/",
            "Housing, childcare, schools, commute, and honest day-in-the-life trade-offs — practical shortlists."
          ),
          item(
            "Best Dutch cities for international professionals",
            "/netherlands/cities/best-cities-for-international-professionals/",
            "Job-market fit, net pay vs rent, hybrid commute honesty, and career scenario shortlists."
          ),
          item(
            "Compare cities hub",
            "/netherlands/cities/compare/",
            "Head-to-head city comparisons and links to shortlist guides and tools."
          ),
          item(
            "Amsterdam vs Rotterdam",
            "/netherlands/cities/amsterdam-vs-rotterdam/",
            "Housing, jobs, salaries, lifestyle, transport and expat life — flagship Randstad comparison."
          ),
        ],
      },
    ],
    featured: item("Cities hub", "/netherlands/cities/", "Compare Dutch cities and read expat city guides."),
    tools: [
      item(
        "Netherlands city comparison tool",
        "/netherlands/tools/city-comparison/",
        "Rank 2–4 cities from your budget, office location, and priority sliders."
      ),
      item(
        "Rent affordability calculator",
        "/netherlands/housing/tools/rent-affordability-calculator/",
        "Max rent from income, landlord gross checks, and move-in cash — before you search."
      ),
      item(
        "Cost of living calculator",
        "/netherlands/money/tools/cost-of-living-calculator/",
        "Full monthly bands by city and household next to rent planning."
      ),
      item("Open tools hub", "/netherlands/tools/"),
    ],
  },
  money: {
    key: "money",
    label: "Money",
    showFeatured: false,
    megaDensity: "full",
    sections: [
      {
        title: "Banking",
        roadmapNote: "Entries without a published page yet appear as muted roadmap rows (not links).",
        items: [
          item("Banking", "/netherlands/money/banking/"),
          item(
            "Types of bank accounts",
            "/netherlands/money/banking/types-of-accounts/",
            "Simple guide: everyday account, savings, joint, student, business, and app-style banks — read this before you compare fees."
          ),
          item(
            "Joint bank accounts",
            "/netherlands/money/banking/joint-accounts/",
            "Gezamenlijke rekening for couples and housemates: shared access, dual cards, household habits, indicative joint fees, and a calm exit checklist."
          ),
          item(
            "Student bank accounts",
            "/netherlands/money/banking/student-accounts/",
            "Studentrekening for international and Dutch students: eligibility, package fees, debit habits, and what changes after graduation."
          ),
          item(
            "How payments work",
            "/netherlands/money/banking/how-payments-work/",
            "Your account number, paying on Dutch websites, bank transfers, cards in shops, rent, salary, and bills — without jargon."
          ),
          item(
            "Cash vs card",
            "/netherlands/money/banking/cash-vs-card/",
            "PIN-first shops, when cash still helps, contactless habits, and calm tourist/expat till scenarios — everyday payment culture."
          ),
          item(
            "Debit cards",
            "/netherlands/money/banking/debit-cards/",
            "Dutch debit / PIN culture: pinpas basics, Maestro and Debit Mastercard norms, shops, ATMs, and credit-first habit shifts."
          ),
          item(
            "Credit cards",
            "/netherlands/money/banking/credit-cards/",
            "How credit fits Dutch payment culture: availability, when useful, fees orientation, and credit vs debit for everyday spend."
          ),
          item(
            "Banking fees & costs",
            "/netherlands/money/banking/fees/",
            "Simple guide: common bank charges in the Netherlands, what to check on each bank’s website, and how to compare costs."
          ),
          item(
            "Cheapest bank accounts",
            "/netherlands/money/banking/cheapest-accounts/",
            "Low-cost Dutch accounts for expats — monthly vs total cost, hidden fees, and digital vs traditional — verify on official sites."
          ),
          item(
            "Traditional vs digital banks",
            "/netherlands/money/banking/traditional-vs-digital/",
            "Easy read: big Dutch banks vs app-only banks, when people use both, and what to check with your employer or landlord."
          ),
          item(
            "Best banks for expats",
            "/netherlands/money/banking/best-banks-expats/",
            "Compare banks side by side: fees, English help, and signing up — always double-check on each bank’s website."
          ),
          item(
            "International transfers",
            "/netherlands/money/banking/international-transfers/",
            "Sending money abroad from a Dutch account: fees, exchange rates, timing, and what to check before you send."
          ),
          item(
            "Wise vs Revolut",
            "/netherlands/money/banking/wise-vs-revolut/",
            "Decision orientation for multi-currency and app banking: when each tends to fit, fees/FX framing, and Dutch-account pairing — not a winner ranking."
          ),
          item(
            "Banking safety & fraud",
            "/netherlands/money/banking/security/",
            "Practical guide for expats: phishing, fake bank messages, payment-request and marketplace scams, card habits, transfers, and what to do if something looks wrong."
          ),
          item(
            "Bank account rejected or delayed",
            "/netherlands/money/banking/account-rejection/",
            "Rejected, blocked, or slow Dutch bank applications — common causes, document checks, BSN timing, and next steps without panic."
          ),
          item(
            "Best bank for freelancers (ZZP)",
            "/netherlands/money/banking/best-bank-zzp/",
            "Business accounts, typical freelancer setups, and fair comparison — always confirm products and prices on each bank’s website."
          ),
          item("Family banking", "/netherlands/money/banking/family-banking"),
          item("Change bank", "/netherlands/money/banking/change-bank"),
          item("FX abroad", "/netherlands/money/banking/fx-abroad"),
        ],
      },
      {
        title: "Taxes",
        items: [
          item("Taxes hub (Netherlands)", "/netherlands/taxes/", "Tax pillar landing — guides and calculators."),
          item(
            "Netherlands tax guide for expats",
            "/netherlands/money/tax-guide-for-expats/",
            "Money-pillar orientation: payroll, returns, 30% ruling, Box 3, payslips, cross-border — planning only."
          ),
          item("Expat Taxes in the Netherlands", "/netherlands/money/expat-taxes-netherlands/", "Scenario-led expat tax topics."),
          item(
            "How taxes work in the Netherlands",
            "/netherlands/money/how-taxes-work-in-the-netherlands/",
            "Money-pillar foundation: payroll vs return, boxes, credits, allowances — general Dutch tax map."
          ),
          item(
            "Tax residency in the Netherlands",
            "/netherlands/money/tax-residency-netherlands/",
            "Money-pillar orientation: tax vs immigration residency, ties, cross-border awareness — not a determination tool."
          ),
          item(
            "Tax return in the Netherlands",
            "/netherlands/money/tax-return-netherlands/",
            "Money-pillar orientation: what the annual return does, prep checklists, payroll vs filing — not a filing portal."
          ),
          item(
            "30% ruling in the Netherlands",
            "/netherlands/taxes/30-percent-ruling/",
            "Taxes guide: what the 30% facility is, employer involvement, eligibility, changes, and official sources."
          ),
          item(
            "Double taxation in the Netherlands",
            "/netherlands/taxes/double-taxation-netherlands/",
            "Tax treaties, foreign income, residency and cross-border expat tax scenarios."
          ),
          item(
            "Foreign income in the Netherlands",
            "/netherlands/taxes/foreign-income-netherlands/",
            "Foreign salary, rental income, investments, remote work and worldwide income concepts."
          ),
          item(
            "Taxes after moving to the Netherlands",
            "/netherlands/taxes/taxes-after-moving-netherlands/",
            "Starter roadmap for tax residency, payroll, allowances, 30% ruling and annual returns after relocation."
          ),
          item(
            "Leaving the Netherlands tax",
            "/netherlands/taxes/leaving-netherlands-tax/",
            "Exit guide for deregistration, residency changes, final tax returns, pensions, allowances and cross-border income."
          ),
          item(
            "Bonus tax in the Netherlands",
            "/netherlands/taxes/bonus-tax-netherlands/",
            "Why bonuses seem heavily taxed — payroll withholding, bijzondere beloning and expat payslip context."
          ),
          item(
            "Healthcare allowance in the Netherlands",
            "/netherlands/taxes/healthcare-allowance-netherlands/",
            "Zorgtoeslag guide: who may qualify, how to apply and what expats should know about Dutch health insurance support."
          ),
          item(
            "Childcare allowance in the Netherlands",
            "/netherlands/taxes/childcare-allowance-netherlands/",
            "Kinderopvangtoeslag guide for expat families — registered childcare, work rules and application steps."
          ),
          item(
            "Tax advisors for expats",
            "/netherlands/money/taxes/tax-advisors/",
            "How to find and compare Dutch tax advisors for returns, 30% ruling, ZZP and cross-border questions."
          ),
        ],
      },
      {
        title: "Jobs & salaries",
        items: [
          item("Employment overview", "/netherlands/money/taxes/employment-overview"),
          item("Net salary Netherlands", "/netherlands/taxes/net-salary-netherlands/"),
          item("Gross vs net salary Netherlands", "/netherlands/taxes/gross-vs-net-salary/"),
          item("Payroll tax Netherlands", "/netherlands/taxes/payroll-tax-netherlands/"),
          item("Average salary Netherlands", "/netherlands/taxes/average-salary-netherlands/"),
          item("Finding jobs Netherlands", "/netherlands/jobs/finding-jobs-netherlands/"),
          item(
            "Recruitment agencies Netherlands",
            "/netherlands/jobs/recruitment-agencies-netherlands/",
            "How Dutch recruiters, uitzendbureaus and intermediars work for expats."
          ),
          item(
            "English speaking jobs Netherlands",
            "/netherlands/jobs/english-speaking-jobs-netherlands/",
            "English-friendly roles: sectors, cities and language reality checks."
          ),
          item(
            "Remote work Netherlands",
            "/netherlands/jobs/remote-work-netherlands/",
            "Remote and hybrid employment norms for expats in the Netherlands."
          ),
          item(
            "CV Netherlands",
            "/netherlands/jobs/cv-netherlands/",
            "Dutch CV and application norms: length, photo, motivation letter and LinkedIn alignment."
          ),
          item(
            "Cover letter Netherlands",
            "/netherlands/jobs/cover-letter-netherlands/",
            "Dutch motivation letters (motivatiebrief): when required, length, tone, structure and language choice."
          ),
          item(
            "LinkedIn Netherlands",
            "/netherlands/jobs/linkedin-netherlands/",
            "LinkedIn for Dutch job search: profile, headline, Open to Work, messaging recruiters and Dutch hiring norms."
          ),
          item(
            "Interview tips Netherlands",
            "/netherlands/jobs/interview-tips-netherlands/",
            "Dutch job interview culture for expats: preparation, directness, common questions and follow-up."
          ),
          item(
            "Networking Netherlands",
            "/netherlands/jobs/networking-netherlands/",
            "Professional networking for expats: events, communities, referrals, warm intros and Dutch directness in outreach."
          ),
          item("Job websites Netherlands", "/netherlands/work/job-websites-netherlands/"),
          item("LinkedIn jobs Netherlands", "/netherlands/work/linkedin-jobs-netherlands/"),
          item("Jobs in Amsterdam", "/netherlands/work/jobs-in-amsterdam/"),
          item("Jobs in Rotterdam", "/netherlands/work/jobs-in-rotterdam/"),
          item("Jobs in Utrecht", "/netherlands/work/jobs-in-utrecht/"),
          item("Jobs in The Hague", "/netherlands/work/jobs-in-the-hague/"),
          item("Jobs in Eindhoven", "/netherlands/work/jobs-in-eindhoven/"),
        ],
      },
      {
        title: "Employment contracts & rights",
        items: [
          item("Employment contract Netherlands", "/netherlands/jobs/employment-contract-netherlands/"),
          item("Probation period Netherlands", "/netherlands/jobs/probation-period-netherlands/"),
          item("Notice period Netherlands", "/netherlands/jobs/notice-period-netherlands/"),
          item("Employee rights Netherlands", "/netherlands/jobs/employee-rights-netherlands/"),
          item("Freelancing Netherlands", "/netherlands/jobs/freelancing-netherlands/"),
          item("Starting consultancy Netherlands", "/netherlands/jobs/starting-consultancy-netherlands/"),
          item("Contractor vs employee Netherlands", "/netherlands/jobs/contractor-vs-employee-netherlands/"),
          item("ZZP Netherlands", "/netherlands/business/zzp-netherlands/"),
          item("Starting a business Netherlands", "/netherlands/business/starting-a-business-netherlands/"),
        ],
      },
      {
        title: "Cost of living & everyday money",
        items: [
          item(
            "Cost of living in the Netherlands",
            "/netherlands/money/cost-of-living-netherlands/",
            "What drives Dutch living costs in 2026: housing, insurance, groceries, transport and childcare — plus indicative city bands and how to read the numbers."
          ),
          item(
            "Hidden costs of living",
            "/netherlands/money/hidden-costs-netherlands/",
            "Surprise lines beyond headline rent — deposits, setup, allowances timing and everyday traps."
          ),
          item(
            "Financial checklist for expats",
            "/netherlands/money/financial-checklist-netherlands/",
            "Ordered money setup steps after you choose a place — banking, insurance, budget and buffers."
          ),
          item(
            "Monthly budget for expats",
            "/netherlands/money/monthly-budget-netherlands/",
            "Category template, planning workflow and an example month for expat households."
          ),
          item(
            "Saving money in the Netherlands",
            "/netherlands/money/saving-money-netherlands/",
            "Practical levers and habits to cut everyday spend after you know your cost drivers."
          ),
        ],
      },
      {
        title: "Insurance & expat tax topics",
        items: [
          item("Insurance", "/netherlands/money/insurance"),
          item("Health", "/netherlands/money/insurance/health"),
          item("Liability + household", "/netherlands/money/insurance/liability-household"),
        ],
      },
    ],
    featured: item(
      "Netherlands taxes",
      "/netherlands/taxes/",
      "Taxes, banking, insurance, and cost-of-living essentials for expats."
    ),
    tools: buildMoneyToolRail(),
  },
  services: {
    key: "services",
    label: "Services",
    showFeatured: false,
    megaDensity: "full",
    sections: [
      {
        title: "Banking & financial services",
        roadmapNote: "Entries without a published page yet appear as muted roadmap rows (not links).",
        items: [
          item("Banks", "/netherlands/services/banks/"),
          item("Tax Advisors", "/netherlands/services/tax-advisors/", "Tax returns, 30% ruling, ZZP and cross-border tax support for expats."),
          item(
            "Accountants",
            "/netherlands/services/accountants/",
            "Compare accountants and administratiekantoren for bookkeeping, BTW, jaarrekening and ZZP admin."
          ),
          item(
            "Mortgage advisors",
            "/netherlands/services/mortgage-advisors/",
            "Compare mortgage advisors, broker models, fees and expat document support."
          ),
          item(
            "Financial advisors",
            "/netherlands/services/financial-advisors/",
            "Compare financial advisors for pensions, investments, wealth planning and cross-border finances."
          ),
          item(
            "Business consultants",
            "/netherlands/services/business-consultants/",
            "Compare business consultants for strategy, market entry, KvK growth facilitation and operations."
          ),
          item("View all services", "/netherlands/services/"),
        ],
      },
      {
        title: "Health & insurance",
        items: [
          item("Health insurance", "/netherlands/services/health-insurance/"),
          item(
            "Compare health insurance",
            "/netherlands/health/health-insurance-comparison-netherlands/",
            "Decision framework for comparing Dutch basic and supplementary health insurance — not an insurer ranking."
          ),
          item(
            "Insurance providers",
            "/netherlands/services/insurance-providers/",
            "Compare Dutch insurers across health, liability, home, travel and business insurance."
          ),
          item(
            "Insurance brokers",
            "/netherlands/services/insurance-brokers/",
            "Compare Dutch insurance brokers and adviseurs who help shortlist liability, home, travel and business packages."
          ),
        ],
      },
      {
        title: "Housing & relocation",
        items: [
          item("Housing platforms", "/netherlands/services/housing-platforms/"),
          item("Rental agencies", "/netherlands/services/rental-agencies/"),
          item(
            "Estate agents",
            "/netherlands/services/estate-agents/",
            "Compare Dutch makelaars for buying and selling property — aankoopmakelaar and verkoopmakelaar support."
          ),
          item(
            "Notaries",
            "/netherlands/services/notaries/",
            "Compare Dutch notaris support for purchase deeds, hypotheekakte, inheritance orientation and family agreements."
          ),
          item("Expat housing agencies", "/netherlands/services/expat-housing-agencies/"),
          item("Relocation agencies", "/netherlands/services/relocation-agencies/"),
          item("Relocation services", "/netherlands/services/relocation-services/"),
          item(
            "Moving companies",
            "/netherlands/services/moving-companies/",
            "Compare domestic Dutch movers for house and apartment moves within the Netherlands — packing, stairs and city-to-city vans."
          ),
          item(
            "Removal companies",
            "/netherlands/services/removal-companies/",
            "International household removals for arrivals and leavers — door-to-door overseas moves."
          ),
          item(
            "Storage companies",
            "/netherlands/services/storage-companies/",
            "Compare Dutch self-storage and temporary furniture storage for lease gaps and international move windows."
          ),
          item(
            "Pet relocation companies",
            "/netherlands/services/pet-relocation-companies/",
            "Compare specialist pet import/export and flight-pet logistics providers — IATA crates, quarantine orientation and ground transfer."
          ),
          item(
            "Cleaning companies",
            "/netherlands/services/cleaning-companies/",
            "Compare domestic cleaners, deep cleans and end-of-tenancy / oplevering providers for expats — weekly help and deposit-return cleans."
          ),
          item(
            "Handymen",
            "/netherlands/services/handymen/",
            "Compare klusjesman providers for shelves, furniture assembly, painting touch-ups and small home repairs — soft discovery for expats."
          ),
          item("International shipping", "/netherlands/services/international-shipping/"),
        ],
      },
      {
        title: "Immigration & work permits",
        items: [
          item("Visa consultants", "/netherlands/services/visa-consultants/"),
          item("Immigration lawyers", "/netherlands/services/immigration-lawyers/"),
          item(
            "Highly skilled migrant sponsors",
            "/netherlands/services/highly-skilled-migrant-sponsors/",
            "Search the official IND recognised sponsor register."
          ),
          item(
            "Startup visa advisors",
            "/netherlands/services/startup-visa-advisors/",
            "Compare startup facilitators and startup-route support."
          ),
          item("Work permit services", "/netherlands/services/work-permit-services/"),
        ],
      },
      {
        title: "Work & career support",
        items: [
          item(
            "Recruitment agencies",
            "/netherlands/services/recruitment-agencies/",
            "Compare recruitment agency types, fee models, languages and sector coverage — provider directory."
          ),
        ],
      },
      {
        title: "Connectivity",
        items: [
          item(
            "Internet providers",
            "/netherlands/services/internet-providers/",
            "Compare fibre, cable and DSL ISPs, contracts, install and TV bundles — provider directory."
          ),
          item(
            "Energy providers",
            "/netherlands/services/energy-providers/",
            "Compare electricity and gas suppliers, fixed vs variable contracts and switching — provider directory."
          ),
          item(
            "Phone providers",
            "/netherlands/services/phone-providers/",
            "Compare prepaid, SIM-only and eSIM phone plans for expats — provider directory."
          ),
          item("Mobile & connectivity", "/netherlands/services/mobile-connectivity/"),
        ],
      },
      {
        title: "Family & education",
        items: [
          item(
            "International schools",
            "/netherlands/services/international-schools/",
            "Compare international schools as providers — curricula, fee orientation, admission and locations (not the Living education system guide)."
          ),
          item(
            "Daycare providers",
            "/netherlands/services/daycare-providers/",
            "Compare daycare / kinderopvang providers — KDV, gastouderbureaus, commute and LRK checks (not the Living Childcare education system guide)."
          ),
        ],
      },
    ],
    featured: item("Services directory", "/netherlands/services/", "Banks, insurance, housing, immigration support."),
    tools: buildServicesToolRail(),
  },
  tools: {
    key: "tools",
    label: "Tools",
    showFeatured: false,
    /** Category cards already list every tool; omit duplicate “Tools” sidebar rail. */
    showToolsRail: false,
    megaDensity: "full",
    sections: buildToolsMegaSections(),
    featured: item("Open all tools", "/netherlands/tools/", "Browse calculators, planners, and checklists by category."),
  },
  living: {
    key: "living",
    label: "Living",
    /** Survival Guide featured card improves discoverability alongside dense section columns + tools rail. */
    showFeatured: true,
    megaDensity: "full",
    sections: [
      {
        title: "Life in the Netherlands",
        items: [
          item(
            "Survival Guide",
            "/netherlands/living/survival-guide/",
            "OV, apps, PIN-first payments, weather, and first-week sequencing—bookmarkable hub."
          ),
          item(
            "Daily life in the Netherlands",
            "/netherlands/living/daily-life/",
            "Rhythms, expectations, and local life."
          ),
          item(
            "Life in the Netherlands",
            "/netherlands/life/",
            "Hub for community, integration, social norms, dating and social life guides."
          ),
          item(
            "Community basics",
            "/netherlands/life/community-basics-netherlands/",
            "Making friends, neighbors, clubs, volunteering and integration."
          ),
          item(
            "Making Dutch Friends",
            "/netherlands/life/making-dutch-friends/",
            "Activity routes, sports clubs, neighbours and realistic friendship timelines."
          ),
          item(
            "Expat Loneliness",
            "/netherlands/life/expat-loneliness-netherlands/",
            "Why loneliness is common after moving, how to rebuild community and when to seek support."
          ),
          item(
            "Dutch social norms",
            "/netherlands/life/dutch-social-norms/",
            "Everyday etiquette, greetings, birthdays, punctuality and neighbour culture."
          ),
          item(
            "Dating in the Netherlands",
            "/netherlands/life/dating-in-the-netherlands/",
            "Dutch dating culture, apps, singles events, sports clubs and where to meet people."
          ),
        ],
      },
      {
        title: "Housing",
        items: [
          item("Housing in the Netherlands", "/netherlands/housing/", "Central housing hub for renting, buying, costs and cities."),
          item("Rental market", "/netherlands/living/rental-market/", "Demand, viewings, and timelines."),
          item(
            "Registering your address",
            "/netherlands/practical-life/registering-your-address-netherlands/",
            "Municipality address registration, BSN and document steps for newcomers."
          ),
          item("Rental contracts and deposits", "/netherlands/housing/rental-contracts-and-deposits-netherlands/", "Leases, deposits, inventory and inspections before you sign."),
          item(
            "Rental Scams",
            "/netherlands/housing/rental-scams-netherlands/",
            "Spot warning signs, verify landlords, protect deposits and report housing fraud."
          ),
          item("Housing costs", "/netherlands/housing/housing-costs-netherlands/", "Rent, buying, utilities and city cost comparisons."),
          item(
            "Rent allowance in the Netherlands",
            "/netherlands/taxes/rent-allowance-netherlands/",
            "Huurtoeslag guide: who may qualify, property rules, income tests and how to apply through Dienst Toeslagen."
          ),
          item(
            "Buying a house in the Netherlands",
            "/netherlands/housing/buying-a-house-netherlands/",
            "Expat guide to mortgages, kosten koper, overbidding and the Dutch home buying process."
          ),
          item(
            "Mortgages for expats",
            "/netherlands/housing/mortgages-netherlands-expats/",
            "Dutch mortgage eligibility, borrowing capacity, fixed vs variable rates and application steps."
          ),
          item(
            "Property tax in the Netherlands",
            "/netherlands/taxes/property-tax-netherlands/",
            "WOZ value, municipal taxes and recurring owner costs for expats."
          ),
          item(
            "Buy vs rent in the Netherlands",
            "/netherlands/housing/buy-vs-rent-netherlands/",
            "Decision guide for expats comparing rental flexibility with ownership stability."
          ),
        ],
      },
      {
        title: "Education",
        items: [
          item(
            "International schools",
            "/netherlands/education/international-schools-netherlands/",
            "Flagship guide to international education — curricula, directory, admissions and fees."
          ),
          item(
            "Dutch schools",
            "/netherlands/education/dutch-schools-netherlands/",
            "Basisschool, secondary pathways, enrolment, language support and comparison with international schools."
          ),
          soon("Education hub"),
          soon("Dutch education system"),
          soon("IB schools Netherlands"),
          soon("British schools Netherlands"),
          soon("American schools Netherlands"),
        ],
      },
      {
        title: "Childcare",
        items: [
          item(
            "Daycare in the Netherlands",
            "/netherlands/education/daycare-netherlands/",
            "Flagship childcare guide — kinderopvang types, directory, costs, allowance and waiting lists."
          ),
          item(
            "After-School Care (BSO)",
            "/netherlands/education/after-school-care-netherlands/",
            "Buitenschoolse opvang guide — hours, costs, allowance, holiday care and provider orientation."
          ),
          item(
            "Before-School Care (VSO)",
            "/netherlands/education/before-school-care-netherlands/",
            "Voorschoolse opvang guide — morning care, school drop-off, costs, allowance and provider orientation."
          ),
          item(
            "Child Benefits",
            "/netherlands/family/child-benefits-netherlands/",
            "Kinderbijslag, kindgebonden budget and childcare allowance — eligibility and application orientation."
          ),
        ],
      },
      {
        title: "Utilities",
        items: [
          item(
            "Utilities in the Netherlands",
            "/netherlands/utilities/utilities-netherlands/",
            "Set up electricity, gas or heating, water, internet, mobile and waste collection after moving."
          ),
          item("Energy and water", "/netherlands/utilities/energy-and-water-netherlands/", "Electricity, gas, water, district heating, costs and setup."),
          item(
            "Internet and mobile",
            "/netherlands/utilities/internet-and-mobile-netherlands/",
            "Fibre, broadband, mobile, SIM-only, eSIM, costs and provider setup."
          ),
          item(
            "Internet providers",
            "/netherlands/services/internet-providers/",
            "Compare fibre, cable and DSL ISPs — provider directory (setup how-to stays on Internet and mobile)."
          ),
          item(
            "Energy providers",
            "/netherlands/services/energy-providers/",
            "Compare electricity and gas suppliers — provider directory (meters and water stay on Energy and water)."
          ),
          item(
            "Phone providers",
            "/netherlands/services/phone-providers/",
            "Compare prepaid, SIM-only and eSIM plans — provider directory beside Mobile & connectivity."
          ),
          item(
            "Municipality services",
            "/netherlands/practical-life/municipality-services-netherlands/",
            "Gemeente services, registration context, BSN, local taxes, parking and waste."
          ),
        ],
      },
      {
        title: "Daily life",
        items: [
          item(
            "Payments basics",
            "/netherlands/living/payments/",
            "How paying in shops and online usually works: debit norms, apps, and first-week setup."
          ),
          item("Getting around", "/netherlands/living/getting-around/", "OV, bikes, and local mobility."),
          item(
            "Essential apps",
            "/netherlands/living/apps/",
            "Curated install order: transport, Tikkie, groceries, delivery, and chat for newcomers."
          ),
          item(
            "Shopping & groceries",
            "/netherlands/living/shopping-groceries/",
            "Supermarkets, self-checkout, household basics, deliveries, and the store habits that shape everyday errands."
          ),
          item(
            "Dutch supermarkets",
            "/netherlands/living/dutch-supermarkets/",
            "How Dutch grocery chains work day to day: formats, opening hours, bags, self-scan and loyalty apps orientation, weekly rhythm."
          ),
          item(
            "Best supermarkets",
            "/netherlands/living/best-supermarkets-netherlands/",
            "Decision guide: which supermarket fit matches budget, organic, international products, one-stop, neighbourhood or delivery — not a ranked awards list."
          ),
          item(
            "Cheap groceries",
            "/netherlands/living/cheap-groceries-netherlands/",
            "Spend less on food: discounters, Bonus and weekly offers, private label, timing, waste reduction and student-friendly budget tactics."
          ),
          item(
            "International supermarkets",
            "/netherlands/living/international-supermarkets-netherlands/",
            "Find non-Dutch products: world-food aisles, specialty and ethnic markets, and when to use which — not an Asian-only deep dive."
          ),
          item(
            "Asian supermarkets",
            "/netherlands/living/asian-supermarkets-netherlands/",
            "Asian toko and supermarket shopping: formats, product categories, city patterns and first-visit tips — not a ranked store awards list."
          ),
          item(
            "Turkish supermarkets",
            "/netherlands/living/turkish-supermarkets-netherlands/",
            "Turkish and Middle-Eastern specialty shopping: formats, spices, breads, dairy drinks, city patterns and first-visit tips — not a ranked store awards list."
          ),
          item(
            "Indian supermarkets",
            "/netherlands/living/indian-supermarkets-netherlands/",
            "Indian and South Asian specialty shopping: formats, spices, dal, rice, flours, pickles, snacks, city patterns and first-visit tips — not a ranked store awards list."
          ),
          item(
            "South African shops",
            "/netherlands/living/south-african-shops-netherlands/",
            "South African specialty shops and comfort foods: biltong, pantry staples, sauces, sweets, city patterns and first-visit tips — not a ranked store awards list."
          ),
          item(
            "Meal kits",
            "/netherlands/living/meal-kits-netherlands/",
            "Subscription meal-kit boxes: how they work, cost modelling vs supermarket cooking, who they suit, and pause/skip/cancel habits — not a ranked meal-kit awards list."
          ),
          item(
            "Food delivery",
            "/netherlands/living/food-delivery-netherlands/",
            "Restaurant takeaway apps and grocery delivery: fees, tipping norms, coverage checks and when delivery beats cooking or shopping — not a ranked delivery-app awards list."
          ),
          item(
            "Restaurants",
            "/netherlands/living/restaurants-netherlands/",
            "Sit-down dining culture: reservations, lunch vs dinner, terraces, bills and service, dietary norms and what expats should expect — not a ranked restaurant awards list."
          ),
          item(
            "Tipping",
            "/netherlands/living/tipping-netherlands/",
            "Dutch tipping norms for restaurants, cafés, delivery and everyday service — usually more modest than US expectations, not a tip-app ranking."
          ),
          item(
            "Emergencies & safety",
            "/netherlands/living/emergencies-safety/",
            "Emergency numbers, urgent situations, lost items, and calm readiness for day-to-day Dutch life."
          ),
          item("Language & phrases", "/netherlands/living/language/", "Practical Dutch for daily life (Living hub)."),
          item(
            "Weather & seasons",
            "/netherlands/living/weather/",
            "Wind, rain, dark days, and what actually changes in everyday Dutch life."
          ),
          item(
            "Waste and recycling",
            "/netherlands/practical-life/waste-and-recycling-netherlands/",
            "Sorting, pickup schedules, underground containers and recycling centers."
          ),
          item(
            "Parking and local permits",
            "/netherlands/practical-life/parking-and-local-permits-netherlands/",
            "Resident permits, visitor passes, paid zones, parking apps and municipality permits."
          ),
        ],
      },
      {
        title: "Public transport",
        items: [
          item(
            "OV-chipkaart",
            "/netherlands/living/ov-chipkaart-netherlands/",
            "Personal OV-chipkaart for expats: anonymous vs personal, top-up, check-in/out, missed checkout and when OVpay is enough."
          ),
          item(
            "OVpay",
            "/netherlands/living/ovpay-netherlands/",
            "Contactless OV travel for expats: bank card or phone check-in/out, day caps orientation, and when to prefer OVpay vs OV-chipkaart."
          ),
          item(
            "NS trains",
            "/netherlands/living/ns-trains-netherlands/",
            "NS train travel for expats: ticket types (single, Flex, season), how to buy, peak orientation and first-week commute tips."
          ),
          item(
            "Trams",
            "/netherlands/living/trams-netherlands/",
            "City tram travel for expats: GVB, HTM, RET and U-OV orientation, check-in/out, etiquette and when tram beats bus or metro."
          ),
          item(
            "Metro",
            "/netherlands/living/metro-netherlands/",
            "Metro travel for expats: Amsterdam GVB and Rotterdam RET orientation, OVpay/chipkaart tickets, peak tips, NS interchange and when metro beats tram or bus."
          ),
          item(
            "Regional buses",
            "/netherlands/living/regional-buses-netherlands/",
            "Regional and city bus travel for expats: operators orientation, OVpay/chipkaart check-in quirks, 9292 planning, night buses lightly and when buses are the only link."
          ),
          item(
            "Train discounts",
            "/netherlands/living/train-discounts-netherlands/",
            "NS train discount products for expats: Dal Voordeel, Weekend Voordeel, Flex and season orientation, chipkaart vs OVpay, and when a discount beats pay-as-you-go."
          ),
          item(
            "Weekend travel",
            "/netherlands/living/weekend-travel-netherlands/",
            "Weekend getaways by Dutch public transport for expats: day trips and weekends with NS and regional OV, discount orientation, last mile and packing tips."
          ),
        ],
      },
      {
        title: "Weekend & lifestyle",
        items: [
          item(
            "Weekend trips",
            "/netherlands/living/weekend-trips-netherlands/",
            "Weekend trip ideas for expats: city, coast and nature getaways, when to go, packing culture and how to choose a vibe — transport depth on Weekend travel."
          ),
          item(
            "National parks",
            "/netherlands/living/national-parks-netherlands/",
            "Nationale Parken orientation for expats: how Dutch national parks work, visitor basics and calm nature-weekend planning."
          ),
          item(
            "Hiking",
            "/netherlands/living/hiking-netherlands/",
            "Hiking and walking culture in the Netherlands for expats: trail habits, etiquette, kit orientation and weekend walking ideas."
          ),
          item(
            "Museums",
            "/netherlands/living/museums-netherlands/",
            "Museum-going for expats: Museumkaart orientation, free days and booking habits, city patterns, etiquette and rainy-day museum plans."
          ),
          item(
            "Hidden gems",
            "/netherlands/living/hidden-gems-netherlands/",
            "Lesser-known places for expats: neighbourhood gems, small towns, quiet edges and leave-no-trace habits — not a ranked secrets list."
          ),
          item(
            "Beach towns",
            "/netherlands/living/beach-towns-netherlands/",
            "Coastal towns and beach-day culture for expats: seasons, North Sea vs Zeeland vs Wadden orientation, packing and crowds — not a ranked beaches list."
          ),
          item(
            "Castles",
            "/netherlands/living/castles-netherlands/",
            "Castles and historic houses for expats: visit culture, booking and seasons, regional orientation, gardens vs interiors — not a ranked castles list."
          ),
          item(
            "Road trips",
            "/netherlands/living/road-trips-netherlands/",
            "Leisure road trips for expats: when a car helps, route planning, parking and ferry habits, sharing vs owning — not a ranked routes list."
          ),
          item(
            "Day trips",
            "/netherlands/living/day-trips-netherlands/",
            "Same-day outings for expats: day-out patterns, timing, packing light, when a day trip beats overnight — not a ranked destinations list."
          ),
        ],
      },
      {
        title: "Cycling",
        items: [
          item(
            "Cycling",
            "/netherlands/living/cycling-netherlands/",
            "Everyday cycling for expats: buy or borrow a bike, rules and etiquette, lights and locks, rain and winter, parking and theft prevention, and when the bike beats OV."
          ),
          item(
            "Bike sharing",
            "/netherlands/living/bike-sharing-netherlands/",
            "Shared and subscription bikes for expats: when sharing beats owning, Swapfiets-style doorstep plans, OV-fiets and city systems, costs orientation and train multimodal tips."
          ),
        ],
      },
      {
        title: "Driving & cars",
        items: [
          item(
            "Driving licence exchange",
            "/netherlands/living/driving-licence-exchange-netherlands/",
            "Foreign licence validity, RDW and municipality exchange steps, documents and timelines for expats."
          ),
          item(
            "Buying a car",
            "/netherlands/living/buying-a-car-netherlands/",
            "Buy used or new in NL: BPM and tax orientation, RDW registration, insurance, APK and ownership costs."
          ),
          item(
            "Road tax",
            "/netherlands/living/road-tax-netherlands/",
            "Dutch motor vehicle tax (wegenbelasting): who pays, weight/fuel/province factors, check and pay via official portals."
          ),
          item(
            "Car insurance",
            "/netherlands/living/car-insurance-netherlands/",
            "Dutch car insurance for expats: mandatory WA, WA+ vs all-risk, what to compare, registration timing and soft quote comparison."
          ),
          item(
            "MOT / APK",
            "/netherlands/living/mot-apk-netherlands/",
            "Dutch APK vehicle inspection (MOT): when due, how to book RDW-approved stations, pass/fail orientation and ownership timing after buying a car."
          ),
          item(
            "Speed cameras",
            "/netherlands/living/speed-cameras-netherlands/",
            "Dutch speed cameras, flitsers and trajectcontrole for expats: how enforcement works, how fines arrive, and high-level pay or object orientation."
          ),
          item(
            "Electric vehicles",
            "/netherlands/living/electric-vehicles-netherlands/",
            "Buying and using EVs in NL: home and public charging, tax and road-tax orientation, range and winter notes, insurance and APK ties."
          ),
          item(
            "Car sharing",
            "/netherlands/living/car-sharing-netherlands/",
            "Car sharing for expats: when sharing beats owning, membership models, trip flow, cost orientation vs ownership, licence and insurance notes."
          ),
          item(
            "Lease cars",
            "/netherlands/living/lease-cars-netherlands/",
            "Private lease, operational lease and company cars for expats: bijtelling orientation, costs vs buy, and contract watch-outs."
          ),
        ],
      },
      {
        title: "Healthcare",
        items: [
          item(
            "Healthcare basics",
            "/netherlands/living/healthcare-basics/",
            "Insurance, huisarts setup, pharmacies, urgent care, and everyday healthcare expectations for newcomers."
          ),
          item(
            "General Practitioner (GP)",
            "/netherlands/health/gp-netherlands/",
            "Huisarts registration, appointments, referrals, prescriptions and out-of-hours care for expats."
          ),
          item(
            "Dentists",
            "/netherlands/health/dentists-netherlands/",
            "Finding a dentist, dental insurance, check-ups, emergency care, children's dentistry and orthodontics."
          ),
          item(
            "Hospitals",
            "/netherlands/health/hospitals-netherlands/",
            "Hospital care, GP referrals, specialists, outpatient clinics, admissions, UMCs and what expats should expect."
          ),
          item(
            "Emergency Healthcare",
            "/netherlands/health/emergency-healthcare-netherlands/",
            "112, Huisartsenpost, SEH, ambulance, emergency pharmacy and urgent care pathways for expats."
          ),
          item(
            "Mental Healthcare",
            "/netherlands/health/mental-healthcare-netherlands/",
            "GP first contact, POH-GGZ, GGZ specialist care, stepped care, waiting times and crisis routes for expats."
          ),
          item(
            "Pharmacies",
            "/netherlands/health/pharmacies-netherlands/",
            "Dutch apotheken, opening hours, OTC vs prescription pickup, counseling and emergency pharmacy orientation."
          ),
          item(
            "Prescriptions",
            "/netherlands/health/prescriptions-netherlands/",
            "Recepten, e-prescriptions, herhaalrecept, medication lists, insurance orientation and foreign prescriptions."
          ),
          item(
            "Physiotherapy",
            "/netherlands/health/physiotherapy-netherlands/",
            "Fysiotherapie for expats — direct access, GP referral, finding a therapist, insurance limits and English support."
          ),
          item(
            "Maternity care",
            "/netherlands/health/maternity-care-netherlands/",
            "Verloskundige first line, obstetric and hospital pathways, registration timing, insurance and kraamzorg awareness."
          ),
          item(
            "Health insurance comparison",
            "/netherlands/health/health-insurance-comparison-netherlands/",
            "Compare Dutch health insurance for expats — basic vs supplementary factors, eigen risico, networks and comparison-site checks."
          ),
        ],
      },
      {
        title: "Family & pets",
        items: [
          item(
            "Pregnancy",
            "/netherlands/family/pregnancy-netherlands/",
            "Expat pregnancy orientation — finding a midwife, trimester checkpoints, BSN timing, insurance basics and what to prepare."
          ),
          item(
            "Giving birth",
            "/netherlands/family/giving-birth-netherlands/",
            "Birth-day orientation — home, hospital or birth centre, when to call the midwife, packing, partner role and first hours."
          ),
          item(
            "Pets",
            "/netherlands/family/pets-netherlands/",
            "Everyday pet life after arrival — housing rules, chip norms, vets, insurance orientation, parks etiquette and costs."
          ),
        ],
      },
      {
        title: "Digital life / admin-light",
        items: [
          item("DigiD awareness", "/netherlands/practical-life/digid-netherlands/", "Digital identity setup after registration."),
          item("Government portals overview", "/netherlands/practical-life/government-portals-netherlands/", "Map of Dutch government websites and digital services."),
          item(
            "Subscriptions and cancellations",
            "/netherlands/practical-life/subscriptions-and-cancellations-netherlands/",
            "Contracts, notice periods and cancellation processes for expats."
          ),
          item(
            "Privacy and safety basics",
            "/netherlands/practical-life/privacy-and-safety-basics-netherlands/",
            "Personal safety, digital security, scams and emergency orientation for expats."
          ),
        ],
      },
    ],
    featured: item(
      "Netherlands Survival Guide",
      "/netherlands/living/survival-guide/",
      "Your Living pillar entry: day-one through month-one rhythm, topic cards, tools, and FAQs."
    ),
    tools: buildLivingToolRail(),
  },
  culture: {
    key: "culture",
    label: "Culture",
    showFeatured: true,
    /** Tools live in the Tools pillar; keep Culture mega focused on guides. */
    showToolsRail: false,
    megaDensity: "full",
    sections: [
      {
        title: "Workplace culture",
        items: [
          item(
            "Dutch workplace culture",
            "/netherlands/jobs/dutch-workplace-culture/",
            "Communication styles, feedback, hierarchy, meetings and work-life balance in Dutch companies."
          ),
          item(
            "Dutch directness at work",
            "/netherlands/jobs/dutch-directness-at-work/",
            "Understand direct feedback, meeting debate and how to adapt professionally as an expat."
          ),
          item("Meetings and consensus", "/netherlands/culture/meetings-and-consensus/", "How decisions tend to form."),
          item("Hierarchy and flatness", "/netherlands/culture/hierarchy-and-flatness/", "Titles, autonomy, and structure."),
          item("Written follow-ups", "/netherlands/culture/written-follow-ups/", "Email, Slack, and documentation."),
        ],
      },
      {
        title: "Social norms",
        items: [
          item(
            "Dutch Culture",
            "/netherlands/life/dutch-culture/",
            "Flagship overview of Dutch values, traditions, daily life and integration context for expats."
          ),
          item("Dutch social norms", "/netherlands/life/dutch-social-norms/", "Everyday social expectations, greetings and unwritten rules."),
          item("Dutch Etiquette", "/netherlands/life/dutch-etiquette/", "Practical manners for greetings, dining, neighbours, gifts and everyday life."),
          item("Dutch Humour Explained", "/netherlands/life/dutch-humour/", "Dry wit, sarcasm, teasing and how humour connects to Dutch directness."),
          item("Making Dutch Friends", "/netherlands/life/making-dutch-friends/", "Friendship circles, borrels, clubs and realistic timelines for expats."),
          item(
            "Expat Loneliness",
            "/netherlands/life/expat-loneliness-netherlands/",
            "Relocation loneliness, friendship culture, communities and practical wellbeing routes."
          ),
          item("Dating in the Netherlands", "/netherlands/life/dating-in-the-netherlands/", "Apps, culture, singles events and activity-first ways to meet people."),
          item("Dutch Holidays & Traditions", "/netherlands/life/dutch-holidays-and-traditions/", "King's Day, Sinterklaas, Christmas and public holidays."),
          item("Dutch Birthday Traditions", "/netherlands/life/dutch-birthday-traditions/", "Circle parties, congratulations, gifts and birthday etiquette."),
          item("Communication style", "/netherlands/culture/communication-style/", "Tone, humor, and clarity."),
          item("Invitations and planning", "/netherlands/culture/invitations-and-planning/", "How social plans usually work."),
          item("Time and boundaries", "/netherlands/culture/time-and-boundaries/", "Punctuality and personal space."),
          item("What feels normal in Dutch daily life", "/netherlands/culture/what-feels-normal-in-dutch-daily-life/", "Small moments that add up."),
        ],
      },
      {
        title: "Traditions",
        items: [
          item("Dutch traditions", "/netherlands/culture/dutch-traditions/", "Calendar touchpoints and customs."),
          item("King's Day", "/netherlands/culture/kings-day/", "Orange, markets, and city rhythms."),
          item("Sinterklaas", "/netherlands/culture/sinterklaas/", "Seasonal tradition context."),
          item("National holidays", "/netherlands/culture/national-holidays/", "Public holidays and closures."),
          item("Dutch social calendar", "/netherlands/culture/dutch-social-calendar/", "Seasonal events and themes."),
        ],
      },
      {
        title: "Family",
        items: [
          item(
            "Parenting",
            "/netherlands/family/parenting-netherlands/",
            "Dutch parenting culture, childcare, schools, healthcare and everyday family life for expat families."
          ),
          item(
            "Family activities",
            "/netherlands/family/family-activities-netherlands/",
            "Parks, museums, libraries, sports clubs, seasonal outings and rainy-day plans for expat families."
          ),
          item(
            "Healthcare for Children",
            "/netherlands/family/healthcare-for-children-netherlands/",
            "GPs, Youth Healthcare (JGZ), vaccinations, specialists, dental care and emergencies for children."
          ),
          item("Family tools", "/netherlands/family/tools/", "Childcare estimator, partner checks and family planning tools."),
          item("Moving with kids", "/netherlands/moving-to-netherlands-with-kids/", "Registration, schools, childcare and healthcare for relocating families."),
        ],
      },
      {
        title: "Language + integration",
        items: [
          item("Dutch language basics", "/netherlands/culture/dutch-language-basics/", "Starter phrases and patterns."),
          item("Learning Dutch", "/netherlands/culture/learning-dutch/", "Courses, practice, and pace."),
          item("Inburgering exams", "/netherlands/culture/inburgering-exams/", "Exams and preparation framing."),
          item("Practice scenarios", "/netherlands/culture/practice-scenarios/", "Real-life speaking prompts."),
          item("Family and school culture", "/netherlands/culture/family-and-school-culture/", "School rhythms for families."),
          item("Health system culture basics", "/netherlands/culture/health-system-culture-basics/", "How care interactions often feel."),
        ],
      },
    ],
    featured: item(
      "Dutch Culture",
      "/netherlands/life/dutch-culture/",
      "Your Culture pillar entry: values, traditions, social norms, workplace cues and language basics for expats."
    ),
    tools: buildCultureToolRail(),
  },
};

export const MEGA_MENUS: Record<TopNavKey, MegaMenu> = Object.fromEntries(
  (Object.keys(RAW_MEGA_MENUS) as TopNavKey[]).map((key) => [key, filterMegaMenu(RAW_MEGA_MENUS[key])])
) as Record<TopNavKey, MegaMenu>;

export const COUNTRIES: CountryOption[] = [{ slug: "netherlands", label: "Netherlands" }];

/** Old `move` / `culture` keys → see `navKeyCompat.ts` for mapping tables. */
export {
  normalizeTopNavKey,
  normalizeDomainMenuKey,
  LEGACY_TOP_NAV_KEY_TO_CURRENT,
  LEGACY_DOMAIN_MENU_KEY_TO_CURRENT,
} from "./navKeyCompat";
