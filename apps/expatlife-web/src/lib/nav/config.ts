/**
 * Primary navigation config (top-level pillars + mega menus).
 * Rollback reference: `config.pre-phase1.ts` + `types.pre-phase1.ts`.
 */
import type { CountryOption, MegaMenu, NavItem, NavSection, TopNavEntry, TopNavKey } from "./types";
import { orderMegaMenuSectionItems, sortNavItemsForDisplay } from "./navItemModel";
import { getDomainFeaturedTools, getTopLevelToolsMenuGroups } from "@/src/lib/tools/getFeaturedTools";
import type { ToolRecord } from "@/src/lib/tools/loadToolRegistry";
import { getToolCategoryById, loadToolRegistry } from "@/src/lib/tools/loadToolRegistry";
import { getRouteStatus } from "@/src/lib/routes/routeStatus";
import { isComingSoonContent } from "@/src/lib/content/contentPublishStatus";
import { getClusterPageByPath } from "@/src/lib/guides/livingCultureCluster";
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
    "Moving to the Netherlands",
    "/netherlands/moving-to-the-netherlands/",
    "Start with the move, then explore Dutch culture, language, and integration."
  ),
};

function filterMegaMenu(menu: MegaMenu): MegaMenu {
  let sections = menu.sections
    .map((section) => ({
      ...section,
      items: orderMegaMenuSectionItems(section.items.map(filterNavItem).filter((x): x is NavItem => x != null)),
    }))
    .filter((section) => section.items.length > 0);

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
        item("Expat taxes Netherlands", "/netherlands/taxes/expat-taxes-netherlands/", "Expat tax overview."),
        item("Banking", "/netherlands/money/banking", "Accounts, switching, and everyday banking."),
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
    /** Culture: featured CTA points at the main moving guide (onboarding), not culture silo. */
    if (
      menu.key === "culture" &&
      (!featured || featured.navStatus !== "live" || !featured.href)
    ) {
      const chain = [
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

/** Money mega tools column: tax/money calculators from registry (Soon when placeholder) + tools hub. */
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
  ];
  return sortNavItemsForDisplay([...dedupeNavItems(toolItemsByIds(ids)), item("Open tools hub", "/netherlands/tools/")]);
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

function buildToolsMegaSections(): NavSection[] {
  return getTopLevelToolsMenuGroups().map(({ category, tools }) => {
    const viewAll = item(`View all ${category.label} tools`, category.route);
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
        ...toolItemsByIds(housingToolIds),
        viewAll,
      ]);
      return { title: category.label, items: housingItems };
    }
    return {
      title: category.label,
      items: dedupeNavItems([...tools.map(toToolNavItem), viewAll]),
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

const WORK_PATH_HIGHLIGHT_MOVING: readonly string[] = [
  "/netherlands/moving/working-in-the-netherlands",
  "/netherlands/moving/twv-work-permit",
  "/netherlands/work/working-in-netherlands",
  "/netherlands/work/changing-jobs-netherlands",
  "/netherlands/work/resigning-job-netherlands",
  "/netherlands/work/layoffs-netherlands",
];

const WORK_PATH_HIGHLIGHT_CULTURE: readonly string[] = [
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
  "housing",
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

  if (
    pathname.startsWith("/netherlands/tools") ||
    pathname.startsWith("/tools") ||
    pathname.startsWith("/netherlands/housing/tools")
  ) {
    return "tools";
  }

  if (pathname.startsWith("/netherlands/services")) return "services";

  if (pathname.startsWith("/netherlands/cities")) return "cities";

  if (CITY_HUB_PREFIXES.some((pre) => pathname === pre || pathname.startsWith(`${pre}/`))) return "cities";

  if (pathname.startsWith("/netherlands/money") || pathname.startsWith("/netherlands/taxes")) return "money";

  if (
    pathname === "/netherlands/family/tools/childcare-cost-estimator" ||
    pathname.startsWith("/netherlands/family/tools/childcare-cost-estimator/")
  ) {
    return "money";
  }

  if (pathname.startsWith("/netherlands/work")) return getWorkClusterNavKey(pathname);

  if (pathname.startsWith("/netherlands/living")) return "living";

  const seg1 = pathname.split("/").filter(Boolean)[1];
  if (seg1 && HOUSING_GUIDE_FIRST_SEGMENTS.has(seg1)) return "living";

  if (isCulturePillarPath(pathname)) return "culture";

  if (isStartHerePath(pathname)) return "moving";

  if (isMovingPillarPath(pathname)) return "moving";

  return null;
}

export const TOP_NAV: TopNavEntry[] = [
  { key: "moving", label: "Move" },
  { key: "cities", label: "Cities", href: "/netherlands/cities/" },
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
          item("Visas & residency orientation", "/netherlands/moving/visas-residency/"),
          item("Extensions & changes", "/netherlands/moving/extensions-changes/"),
          item("Moving checklist Netherlands", "/netherlands/moving-checklist-netherlands"),
          item("Moving from your country", "/netherlands/moving-to-netherlands-from"),
          item("Documents needed", "/netherlands/documents-needed-to-move-netherlands"),
          item("Moving timeline", "/netherlands/moving-to-netherlands-timeline"),
          item("Moving costs", "/netherlands/moving-to-netherlands-cost"),
          item("Moving with family", "/netherlands/moving-to-netherlands-with-family"),
          item("Move without a job", "/netherlands/move-to-netherlands-without-job"),
          item("EU vs non-EU", "/netherlands/eu-vs-non-eu-moving-to-netherlands"),
          item("Bringing pets", "/netherlands/bringing-pets-to-netherlands"),
        ],
      },
      {
        title: "Early setup",
        items: [
          item("Health insurance", "/netherlands/health-insurance-netherlands"),
          item("Municipality registration", "/netherlands/municipality-registration-netherlands"),
          item("BSN registration", "/netherlands/bsn-registration/"),
          item("Register your address", "/netherlands/register-address-netherlands/"),
          item("DigiD guide", "/netherlands/digid-awareness/"),
          item("Open a bank account", "/netherlands/open-bank-account-netherlands"),
          item("Shipping household goods", "/netherlands/shipping-household-goods-netherlands"),
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
          item("Working in the Netherlands", "/netherlands/moving/working-in-the-netherlands/"),
          item("TWV work permit", "/netherlands/moving/twv-work-permit/"),
          item("Residence permits", "/netherlands/moving/residence-permits/"),
          item("Extensions & changes", "/netherlands/moving/extensions-changes/"),
          item("Status changes", "/netherlands/moving/status-changes/"),
        ],
      },
      {
        title: "First weeks & months",
        items: [
          item("First 30 days", "/netherlands/first-30-days-netherlands"),
          item("First 60 days", "/netherlands/first-60-days-netherlands"),
          item("First 90 days", "/netherlands/first-90-days-netherlands"),
        ],
      },
      {
        title: "Work permits & job changes",
        items: [
          item("Working in the Netherlands", "/netherlands/moving/working-in-the-netherlands/"),
          item("TWV work permit", "/netherlands/moving/twv-work-permit/"),
          item("Changing jobs Netherlands", "/netherlands/work/changing-jobs-netherlands/"),
          item("Resigning job Netherlands", "/netherlands/work/resigning-job-netherlands/"),
          item("Layoffs Netherlands", "/netherlands/work/layoffs-netherlands/"),
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
        items: [
          item("Amsterdam", "/netherlands/amsterdam"),
          item("Rotterdam", "/netherlands/rotterdam"),
          item("Utrecht", "/netherlands/utrecht"),
          item("The Hague", "/netherlands/the-hague"),
          item("Eindhoven", "/netherlands/eindhoven"),
          item("Haarlem", "/netherlands/haarlem"),
        ],
      },
      {
        title: "More cities / browse all",
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
        ],
      },
      {
        title: "Compare / discover",
        items: [
          item(
            "Netherlands city comparison tool",
            "/netherlands/tools/city-comparison/",
            "Compare cities on modelled costs, commute, family fit, and lifestyle — planning only."
          ),
          soon("Best cities for expats"),
          soon("Best cities for families"),
          soon("Affordable cities"),
          soon("Amsterdam vs Rotterdam"),
          soon("Randstad overview"),
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
          item("Banking", "/netherlands/money/banking"),
          item("Bank comparison", "/netherlands/money/banking/bank-comparison"),
          item("Family banking", "/netherlands/money/banking/family-banking"),
          item("Change bank", "/netherlands/money/banking/change-bank"),
          item("FX abroad", "/netherlands/money/banking/fx-abroad"),
          soon("Best bank for expats"),
        ],
      },
      {
        title: "Taxes",
        items: [
          item("Netherlands tax guide for expats", "/netherlands/taxes/"),
          item("Expat taxes Netherlands", "/netherlands/taxes/expat-taxes-netherlands/"),
          item("How taxes work in the Netherlands", "/netherlands/taxes/how-taxes-work-netherlands/"),
          item("Tax residency Netherlands", "/netherlands/taxes/tax-residency-netherlands/"),
          item("Tax return Netherlands", "/netherlands/taxes/tax-return-netherlands/"),
          item("30% ruling", "/netherlands/taxes/30-percent-ruling/"),
          item("Tax advisors (guide)", "/netherlands/taxes/tax-advisors-netherlands/"),
        ],
      },
      {
        title: "Salary & allowances",
        items: [
          item("Employment overview", "/netherlands/money/taxes/employment-overview"),
          item("Net salary Netherlands", "/netherlands/taxes/net-salary-netherlands/"),
          item("Gross vs net salary Netherlands", "/netherlands/taxes/gross-vs-netherlands-salary/"),
          item("Payroll tax Netherlands", "/netherlands/taxes/payroll-tax-netherlands/"),
          item("Average salary Netherlands", "/netherlands/work/average-salary-netherlands/"),
          item("Salary negotiation Netherlands", "/netherlands/work/salary-negotiation-netherlands/"),
          item("Minimum wage Netherlands", "/netherlands/work/minimum-wage-netherlands/"),
          item("Expat salary Netherlands", "/netherlands/work/expat-salary-netherlands/"),
          item("Employee benefits Netherlands", "/netherlands/work/employee-benefits-netherlands/"),
          item("Pension Netherlands", "/netherlands/work/pension-netherlands/"),
          item("Holiday allowance Netherlands", "/netherlands/work/holiday-allowance-netherlands/"),
          item("Bonus tax Netherlands", "/netherlands/work/bonus-tax-netherlands/"),
          item("Healthcare allowance", "/netherlands/taxes/healthcare-allowance/"),
          item("Rent allowance", "/netherlands/taxes/rent-allowance/"),
          item("Childcare allowance", "/netherlands/taxes/childcare-allowance/"),
        ],
      },
      {
        title: "Employment contracts & rights",
        items: [
          item("Moving for work", "/netherlands/moving/working-in-the-netherlands/"),
          item("Working in the Netherlands", "/netherlands/work/working-in-netherlands/"),
          item("Employment contract Netherlands", "/netherlands/work/employment-contract-netherlands/"),
          item("Probation period Netherlands", "/netherlands/work/probation-period-netherlands/"),
          item("Notice period Netherlands", "/netherlands/work/notice-period-netherlands/"),
          item("Employee rights Netherlands", "/netherlands/work/employee-rights-netherlands/"),
        ],
      },
      {
        title: "Freelancing & work format",
        items: [
          item("Freelancing Netherlands", "/netherlands/work/freelancing-netherlands/"),
          item("ZZP Netherlands", "/netherlands/work/zzp-netherlands/"),
          item("Contractor vs employee Netherlands", "/netherlands/work/contractor-vs-employee-netherlands/"),
        ],
      },
      {
        title: "Job search",
        items: [
          item("Finding jobs Netherlands", "/netherlands/work/finding-jobs-netherlands/"),
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
        title: "Buying & housing economics",
        items: [
          item("Buying a house", "/netherlands/buying-house-netherlands/"),
          item("Mortgage (expats)", "/netherlands/mortgage-netherlands-expats/"),
          item("Property tax", "/netherlands/property-tax-netherlands/"),
          item("Buy vs rent", "/netherlands/buy-vs-rent-netherlands/"),
        ],
      },
      {
        title: "Insurance & expat tax topics",
        items: [
          item("Insurance", "/netherlands/money/insurance"),
          item("Health", "/netherlands/money/insurance/health"),
          item("Liability + household", "/netherlands/money/insurance/liability-household"),
          item("Double taxation", "/netherlands/taxes/double-taxation-netherlands/"),
          item("Foreign income", "/netherlands/taxes/foreign-income-netherlands/"),
          item("Taxes after moving", "/netherlands/taxes/taxes-after-moving-netherlands/"),
          item("Leaving Netherlands tax", "/netherlands/taxes/leaving-netherlands-tax/"),
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
          item("Bank comparison", "/netherlands/services/bank-comparison/"),
          item("Mortgage advisors", "/netherlands/services/mortgage-advisors/"),
          item("Financial advisors", "/netherlands/services/financial-advisors/"),
          item("View all services", "/netherlands/services/"),
        ],
      },
      {
        title: "Health & insurance",
        items: [
          item("Health insurance", "/netherlands/services/health-insurance/"),
          item("Compare health insurance", "/netherlands/services/compare-health-insurance/"),
          item("Insurance providers", "/netherlands/services/insurance-providers/"),
        ],
      },
      {
        title: "Housing & relocation",
        items: [
          item("Housing platforms", "/netherlands/services/housing-platforms/"),
          item("Expat housing agencies", "/netherlands/services/expat-housing-agencies/"),
          item("Relocation services", "/netherlands/services/relocation-services/"),
          item("Moving companies", "/netherlands/services/moving-companies/"),
          item("International shipping", "/netherlands/services/international-shipping/"),
        ],
      },
      {
        title: "Immigration & work permits",
        items: [
          item("Visa consultants", "/netherlands/services/visa-consultants/"),
          item("Immigration lawyers", "/netherlands/services/immigration-lawyers/"),
          item("Work permit services", "/netherlands/services/work-permit-services/"),
        ],
      },
      {
        title: "Connectivity",
        items: [
          item("Mobile & connectivity", "/netherlands/services/mobile-connectivity/"),
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
        title: "Start here",
        items: [
          item(
            "Survival Guide",
            "/netherlands/living/survival-guide/",
            "OV, apps, PIN-first payments, weather, and first-week sequencing—bookmarkable hub."
          ),
          item(
            "Essential apps",
            "/netherlands/living/apps/",
            "What to install first: transport, Tikkie, groceries, delivery, and chat—curated for newcomers."
          ),
          item(
            "Daily life basics",
            "/netherlands/living/daily-life/",
            "Groceries, errands, payments, deliveries, and household rhythms—practical onboarding beside apps and transport."
          ),
          item(
            "Payments basics",
            "/netherlands/living/payments/",
            "PIN, contactless, Tikkie, and what usually works at Dutch tills—without duplicating full banking guides."
          ),
          item(
            "Shopping & groceries",
            "/netherlands/living/shopping-groceries/",
            "How supermarkets, self-checkout, store apps, household basics, and delivery habits actually work in the Netherlands."
          ),
          item(
            "Healthcare basics",
            "/netherlands/living/healthcare-basics/",
            "Insurance, GP registration, pharmacies, urgent care, and the healthcare flow newcomers usually need first."
          ),
          item(
            "Emergencies & safety",
            "/netherlands/living/emergencies-safety/",
            "112, urgent vs non-urgent situations, lost items, and the practical safety basics newcomers should know early."
          ),
          item(
            "Dutch Culture & Etiquette",
            "/netherlands/living/culture-etiquette/",
            "Directness, invitations, neighbors, work culture, and the social cues newcomers usually learn by trial and error."
          ),
        ],
      },
      {
        title: "Housing",
        items: [
          item("Housing in the Netherlands", "/netherlands/living/housing/", "Living cluster: rental and home setup."),
          item("Rental market", "/netherlands/living/rental-market/", "Demand, viewings, and timelines."),
          item("Registering your address", "/netherlands/living/registering-your-address/", "Rental address context (BRP under Move)."),
          item("Rental contracts and deposits", "/netherlands/living/rental-contracts-and-deposits/", "Before you sign."),
          item("Housing costs", "/netherlands/living/housing-costs/", "Typical costs (calculators under Money)."),
        ],
      },
      {
        title: "Utilities",
        items: [
          item("Utilities in the Netherlands", "/netherlands/living/utilities/", "Energy, water, and setup flow."),
          item("Energy and water", "/netherlands/living/energy-and-water/", "Suppliers and metering basics."),
          item("Internet and mobile", "/netherlands/living/internet-and-mobile/", "Home connectivity setup."),
          item("Municipality services", "/netherlands/living/municipality-services/", "Local digital services (not BRP)."),
        ],
      },
      {
        title: "Daily life",
        items: [
          item("Daily life in the Netherlands", "/netherlands/living/daily-life/", "Rhythms, expectations, and local life."),
          item(
            "Payments basics",
            "/netherlands/living/payments/",
            "How paying in shops and online usually works: debit norms, apps, and first-week setup."
          ),
          item(
            "Dutch Culture & Etiquette",
            "/netherlands/living/culture-etiquette/",
            "Directness, invitations, public etiquette, and work or neighbor norms."
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
            "Healthcare basics",
            "/netherlands/living/healthcare-basics/",
            "Insurance, huisarts setup, pharmacies, urgent care, and everyday healthcare expectations for newcomers."
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
          item("Waste and recycling", "/netherlands/living/waste-and-recycling/", "Sorting, pickup, and containers."),
          item("Parking and local permits", "/netherlands/living/parking-and-local-permits/", "Street parking and permits."),
          item("Community basics", "/netherlands/living/community-basics/", "Neighbors, noise, and building life."),
        ],
      },
      {
        title: "Digital life / admin-light",
        items: [
          item("DigiD awareness", "/netherlands/living/digid-awareness/", "Cluster entry + link to full guide."),
          item("Government portals overview", "/netherlands/living/government-portals-overview/", "Where tasks usually live online."),
          item("Subscriptions and cancellations", "/netherlands/living/subscriptions-and-cancellations/", "Contracts and notice windows."),
          item("Privacy and safety basics", "/netherlands/living/privacy-and-safety-basics/", "Practical digital hygiene."),
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
    showFeatured: false,
    megaDensity: "full",
    sections: [
      {
        title: "Workplace culture",
        items: [
          item("Dutch workplace culture", "/netherlands/culture/dutch-workplace-culture/", "Norms, pace, and expectations."),
          item("Dutch directness at work", "/netherlands/culture/dutch-directness-at-work/", "Feedback and bluntness in context."),
          item("Meetings and consensus", "/netherlands/culture/meetings-and-consensus/", "How decisions tend to form."),
          item("Hierarchy and flatness", "/netherlands/culture/hierarchy-and-flatness/", "Titles, autonomy, and structure."),
          item("Written follow-ups", "/netherlands/culture/written-follow-ups/", "Email, Slack, and documentation."),
        ],
      },
      {
        title: "Social norms",
        items: [
          item("Dutch social norms", "/netherlands/culture/dutch-social-norms/", "Everyday social expectations."),
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
      "Moving to the Netherlands",
      "/netherlands/moving-to-the-netherlands/",
      "Anchor the practical move first, then unpack Dutch workplace cues, social norms, and language basics."
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
