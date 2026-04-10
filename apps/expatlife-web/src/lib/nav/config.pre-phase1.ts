/**
 * Frozen snapshot of `config.ts` before Phase 1 navigation IA (nine top-level pillars).
 * Roll back by restoring this file to `config.ts` and restoring `./types` from `types.pre-phase1.ts` concepts
 * (or use git). Kept for diff reference; imports legacy types so it stays typecheck-clean.
 */
import type { CountryOption, MegaMenu, NavItem, NavSection, TopNavEntry, TopNavKey } from "./types.pre-phase1";
import { getDomainFeaturedTools, getTopLevelToolsMenuGroups } from "@/src/lib/tools/getFeaturedTools";
import type { ToolRecord } from "@/src/lib/tools/loadToolRegistry";
import { getRouteStatus } from "@/src/lib/routes/routeStatus";

const item = (label: string, href: string, description?: string, badge?: string): NavItem => ({
  label,
  href,
  description,
  badge,
});

function toToolNavItem(tool: ToolRecord): NavItem {
  if (tool.status === "placeholder") {
    return { label: tool.title, description: tool.summary, badge: "Soon", disabled: true };
  }
  return item(tool.title, tool.route, tool.summary);
}

function filterNavItem(entry: NavItem): NavItem | null {
  if (entry.disabled && !entry.href) {
    return entry;
  }
  if (!entry.href) return null;
  const st = getRouteStatus(entry.href);
  if (st === "live") {
    return { ...entry, disabled: false };
  }
  // coming-soon (registry / placeholder tools) and hidden (not in live set yet): still show in mega menu, not clickable
  return { ...entry, href: undefined, disabled: true, badge: entry.badge ?? "Soon" };
}

function mvpFallbackSection(menuLabel: string): NavSection {
  return {
    title: menuLabel === "Tools" ? "Browse tools" : "Popular right now",
    items: [
      item("Netherlands hub", "/netherlands/", "Guides, cities, and services overview."),
      item("Moving to the Netherlands", "/netherlands/moving-to-the-netherlands/", "Main relocation guide."),
      item("Services directory", "/netherlands/services/", "Banks, insurance, housing, immigration support."),
      item("Cities overview", "/netherlands/cities/", "Compare major Dutch cities."),
      item("Tools hub", "/netherlands/tools/", "Checklists, planners, and calculators."),
    ],
  };
}

function filterMegaMenu(menu: MegaMenu): MegaMenu {
  let sections = menu.sections
    .map((section) => ({
      ...section,
      items: section.items.map(filterNavItem).filter((x): x is NavItem => x != null),
    }))
    .filter((section) => section.items.length > 0);

  if (sections.length === 0) {
    sections = [mvpFallbackSection(menu.label)];
  }

  let featured = menu.featured ? filterNavItem(menu.featured) : null;
  if (!featured?.href || featured.disabled) {
    featured = item(
      "Moving to the Netherlands",
      "/netherlands/moving-to-the-netherlands/",
      "Main relocation guide and hub."
    );
  }

  const tools = (menu.tools ?? []).map(filterNavItem).filter((x): x is NavItem => x != null);

  return { ...menu, sections, featured: featured ?? undefined, tools };
}

function getDomainToolItems(menuKey: string): NavItem[] {
  const domain = getDomainFeaturedTools(menuKey);
  if (!domain) return [];
  const viewAllLabel =
    menuKey === "move"
      ? "View all Move tools"
      : menuKey === "money"
        ? "View all Money tools"
        : menuKey === "work"
          ? "View all Work tools"
          : "View all tools";
  return [...domain.tools.map(toToolNavItem), item(viewAllLabel, domain.tools[0]?.pillarCategoryRoute ?? "/netherlands/tools/")];
}

function buildToolsMegaSections(): NavSection[] {
  return getTopLevelToolsMenuGroups().map(({ category, tools }) => ({
    title: category.label,
    items: [...tools.slice(0, 3).map(toToolNavItem), item(`View all ${category.label} tools`, category.route)],
  }));
}

/** Returns which top nav key is active for the current path (for highlighting). */
export function getActiveNavKey(pathname: string): TopNavKey | null {
  if (!pathname || pathname === "/") return null;
  if (pathname.startsWith("/netherlands/tools")) return "tools";
  if (pathname.startsWith("/netherlands/moving-to-the-netherlands") || pathname.startsWith("/netherlands/moving-to-netherlands-from") || pathname.startsWith("/netherlands/moving/") || pathname.startsWith("/netherlands/visa/")) return "move";
  if (pathname.startsWith("/netherlands/services")) return "move";
  if (pathname.startsWith("/netherlands/cities")) return "move";
  if (
    pathname.startsWith("/netherlands/amsterdam") ||
    pathname.startsWith("/netherlands/rotterdam") ||
    pathname.startsWith("/netherlands/utrecht") ||
    pathname.startsWith("/netherlands/the-hague") ||
    pathname.startsWith("/netherlands/eindhoven") ||
    pathname.startsWith("/netherlands/haarlem") ||
    pathname.startsWith("/netherlands/groningen") ||
    pathname.startsWith("/netherlands/delft") ||
    pathname.startsWith("/netherlands/leiden") ||
    pathname.startsWith("/netherlands/maastricht") ||
    pathname.startsWith("/netherlands/breda") ||
    pathname.startsWith("/netherlands/tilburg") ||
    pathname.startsWith("/netherlands/arnhem") ||
    pathname.startsWith("/netherlands/nijmegen") ||
    pathname.startsWith("/netherlands/amstelveen")
  )
    return "move";
  if (pathname.startsWith("/netherlands/move-to-netherlands-without-job") || pathname.startsWith("/netherlands/moving-to-netherlands-cost") || pathname.startsWith("/netherlands/moving-to-netherlands-with-family") || pathname.startsWith("/netherlands/eu-vs-non-eu-moving-to-netherlands") || pathname.startsWith("/netherlands/open-bank-account-netherlands") || pathname.startsWith("/netherlands/health-insurance-netherlands")) return "move";
  if (pathname.startsWith("/netherlands/work")) return "work";
  if (pathname.startsWith("/netherlands/money")) return "money";
  if (pathname.startsWith("/netherlands/living")) return "living";
  if (pathname.startsWith("/netherlands/culture")) return "culture";
  if (pathname.startsWith("/tools")) return "tools";
  return null;
}

export const TOP_NAV: TopNavEntry[] = [
  { key: "move", label: "Move", href: "/netherlands/moving-to-the-netherlands" },
  { key: "work", label: "Work" },
  { key: "money", label: "Money" },
  { key: "living", label: "Living" },
  { key: "culture", label: "Culture" },
  { key: "tools", label: "Tools", href: "/netherlands/tools" },
];

const RAW_MEGA_MENUS: Record<TopNavKey, MegaMenu> = {
  home: {
    key: "home",
    label: "Home",
    sections: [],
  },
  move: {
    key: "move",
    label: "Move",
    sections: [
      {
        title: "Start here",
        items: [
          item("Moving to the Netherlands", "/netherlands/moving-to-the-netherlands"),
          item("Moving From Your Country", "/netherlands/moving-to-netherlands-from"),
          item("Moving checklist Netherlands", "/netherlands/moving-checklist-netherlands"),
          item("Documents needed", "/netherlands/documents-needed-to-move-netherlands"),
          item("Moving timeline", "/netherlands/moving-to-netherlands-timeline"),
          item("Moving costs", "/netherlands/moving-to-netherlands-cost"),
        ],
      },
      {
        title: "Key admin",
        items: [
          item("Municipality registration", "/netherlands/municipality-registration-netherlands"),
          item("Health insurance", "/netherlands/health-insurance-netherlands"),
          item("DigiD awareness", "/netherlands/digid-awareness"),
          item("Shipping household goods", "/netherlands/shipping-household-goods-netherlands"),
          item("Open a bank account", "/netherlands/open-bank-account-netherlands"),
        ],
      },
      {
        title: "Scenarios",
        items: [
          item("Move without a job", "/netherlands/move-to-netherlands-without-job"),
          item("Moving with family", "/netherlands/moving-to-netherlands-with-family"),
          item("EU vs non-EU", "/netherlands/eu-vs-non-eu-moving-to-netherlands"),
          item("Moving with partner", "/netherlands/moving-to-netherlands-with-partner"),
          item("Moving with kids", "/netherlands/moving-to-netherlands-with-kids"),
          item("Bringing pets", "/netherlands/bringing-pets-to-netherlands"),
        ],
      },
      {
        title: "Services",
        items: [
          item("Health insurance", "/netherlands/services/health-insurance/"),
          item("Banks", "/netherlands/services/banks/"),
          item("Housing platforms", "/netherlands/services/housing-platforms/"),
          item("Visa consultants", "/netherlands/services/visa-consultants/"),
          item("Relocation services", "/netherlands/services/relocation-services/"),
          item("View all services", "/netherlands/services/"),
        ],
      },
      {
        title: "More",
        items: [
          item("Cities", "/netherlands/cities/", "Compare Dutch cities and read expat city guides."),
          item("First 30 days", "/netherlands/first-30-days-netherlands"),
          item("First 60 days", "/netherlands/first-60-days-netherlands"),
          item("First 90 days", "/netherlands/first-90-days-netherlands"),
          item("See all Move guides →", "/netherlands/moving-to-the-netherlands/"),
        ],
      },
      {
        title: "Visas & Residency",
        items: [
          item("Visas & residency", "/netherlands/visa/highly-skilled-migrant"),
          item("Compare visas", "/netherlands/visa/compare-visas"),
          item("Highly skilled migrant", "/netherlands/visa/highly-skilled-migrant"),
          item("EU Blue Card", "/netherlands/visa/eu-blue-card"),
          item("DAFT (US entrepreneurs)", "/netherlands/visa/dutch-american-friendship-treaty"),
          item("Self-employed visa", "/netherlands/visa/self-employed-visa"),
          item("Student visa", "/netherlands/visa/student-visa"),
          item("Partner & family", "/netherlands/visa/partner-family-visa"),
          item("Residence permits", "/netherlands/moving/residence-permits/"),
          item("Extensions & changes", "/netherlands/moving/extensions-changes/"),
          item("Status changes", "/netherlands/moving/status-changes/"),
        ],
      },
      {
        title: "Integration",
        items: [
          item("Integration", "/netherlands/integration"),
          item("Inburgering planner", "/netherlands/integration/inburgering-planner"),
          item("Exams overview", "/netherlands/integration/exams-overview"),
          item("Language + KNM", "/netherlands/integration/language-knm"),
          item("Progress tracking", "/netherlands/integration/progress-tracking"),
        ],
      },
      {
        title: "Citizenship + Leaving",
        items: [
          item("Citizenship", "/netherlands/citizenship"),
          item("Permanent residence", "/netherlands/citizenship/permanent-residence"),
          item("Naturalisation", "/netherlands/citizenship/naturalisation"),
          item("Timeline signals", "/netherlands/citizenship/timeline-signals"),
          item("Leaving", "/netherlands/leaving"),
          item("Deregistration checklist", "/netherlands/leaving/deregistration-checklist"),
          item("Exit evidence pack", "/netherlands/leaving/exit-evidence-pack"),
          item("Repatriation readiness", "/netherlands/leaving/repatriation-readiness"),
        ],
      },
    ],
    featured: item(
      "Moving to the Netherlands",
      "/netherlands/moving-to-the-netherlands/",
      "Start with the main moving guide, then explore documents, registration, timelines, and scenario-specific pages."
    ),
    tools: getDomainToolItems("move"),
  },
  work: {
    key: "work",
    label: "Work",
    sections: [
      {
        title: "Employment",
        items: [
          item("Contracts", "/netherlands/work/contracts"),
          item("Contract checklist", "/netherlands/work/contracts/checklist"),
          item("Clause explorer", "/netherlands/work/contracts/clause-explorer"),
          item("Offer comparison", "/netherlands/work/contracts/offer-comparison"),
          item("Risk signals", "/netherlands/work/contracts/risk-signals"),
          item("Document pack", "/netherlands/work/contracts/document-pack"),
        ],
      },
      {
        title: "Rights",
        items: [
          item("Rights", "/netherlands/work/rights"),
          item("Sick leave tracker", "/netherlands/work/rights/sick-leave-tracker"),
          item("Holiday leave", "/netherlands/work/rights/holiday-leave"),
          item("Parental leave", "/netherlands/work/rights/parental-leave"),
          item("Escalation path mapper", "/netherlands/work/rights/escalation-path-mapper"),
          item("Readiness score", "/netherlands/work/rights/readiness-score"),
        ],
      },
      {
        title: "Unions & Works Council",
        items: [
          item("Unions & works council", "/netherlands/work/unions-works-council"),
          item("OR awareness", "/netherlands/work/unions-works-council/or-awareness"),
          item("Support map", "/netherlands/work/unions-works-council/support-map"),
          item("Event log", "/netherlands/work/unions-works-council/event-log"),
          item("Ask generator", "/netherlands/work/unions-works-council/ask-generator"),
          item("Readiness", "/netherlands/work/unions-works-council/readiness"),
        ],
      },
      {
        title: "Payroll + Benefits + Career",
        items: [
          item("Payroll", "/netherlands/work/payroll"),
          item("Payslip decoder", "/netherlands/work/payroll/payslip-decoder"),
          item("What changed", "/netherlands/work/payroll/what-changed"),
          item("Annual overview", "/netherlands/work/payroll/annual-overview"),
          item("Evidence pack", "/netherlands/work/payroll/evidence-pack"),
          item("Confidence meter", "/netherlands/work/payroll/confidence-meter"),
          item("Benefits", "/netherlands/work/benefits"),
          item("Total rewards", "/netherlands/work/benefits/total-rewards"),
          item("Job change impact", "/netherlands/work/career/job-change-impact"),
          item("Sponsor dependency", "/netherlands/work/career/sponsor-dependency"),
          item("Transition planner", "/netherlands/work/career/transition-planner"),
          item("Decision canvas", "/netherlands/work/career/decision-canvas"),
        ],
      },
    ],
    featured: item("Contract checklist", "/netherlands/work/contracts/checklist"),
    tools: getDomainToolItems("work"),
  },
  money: {
    key: "money",
    label: "Money",
    sections: [
      {
        title: "Banking",
        items: [
          item("Banking", "/netherlands/money/banking"),
          item("Bank comparison", "/netherlands/money/banking/bank-comparison"),
          item("Family banking", "/netherlands/money/banking/family-banking"),
          item("Change bank", "/netherlands/money/banking/change-bank"),
          item("Mandate audit", "/netherlands/money/banking/mandate-audit"),
          item("FX abroad", "/netherlands/money/banking/fx-abroad"),
        ],
      },
      {
        title: "Taxes",
        items: [
          item("Taxes", "/netherlands/money/taxes"),
          item("Employment overview", "/netherlands/money/taxes/employment-overview"),
          item("Cross-border income", "/netherlands/money/taxes/cross-border-income"),
          item("Double tax", "/netherlands/money/taxes/double-tax"),
          item("Record keeping", "/netherlands/money/taxes/record-keeping"),
          item("Readiness score", "/netherlands/money/taxes/readiness-score"),
        ],
      },
      {
        title: "Insurance",
        items: [
          item("Insurance", "/netherlands/money/insurance"),
          item("Health", "/netherlands/money/insurance/health"),
          item("Liability + household", "/netherlands/money/insurance/liability-household"),
          item("Employer coverage", "/netherlands/money/insurance/employer-coverage"),
          item("Gaps awareness", "/netherlands/money/insurance/gaps-awareness"),
        ],
      },
      {
        title: "Wealth + Retirement",
        items: [
          item("Investments", "/netherlands/money/investments"),
          item("Landscape", "/netherlands/money/investments/landscape"),
          item("Employer pension", "/netherlands/money/investments/employer-pension"),
          item("Wealth structures", "/netherlands/money/investments/wealth-structures"),
          item("Cross-border signals", "/netherlands/money/investments/cross-border-signals"),
          item("Documents", "/netherlands/money/investments/documents"),
          item("Readiness", "/netherlands/money/investments/readiness"),
          item("Retirement", "/netherlands/money/retirement"),
          item("3 pillars", "/netherlands/money/retirement/3-pillars"),
          item("International continuity", "/netherlands/money/retirement/international-continuity"),
          item("What changes", "/netherlands/money/retirement/what-changes"),
          item("Evidence records", "/netherlands/money/retirement/evidence-records"),
          item("Readiness", "/netherlands/money/retirement/readiness"),
        ],
      },
    ],
    featured: item("Bank comparison", "/netherlands/money/banking/bank-comparison"),
    tools: getDomainToolItems("money"),
  },
  living: {
    key: "living",
    label: "Living",
    sections: [
      {
        title: "Housing",
        items: [
          item("Housing", "/netherlands/living/housing"),
          item("Rental market", "/netherlands/living/housing/rental-market"),
          item("Registration address", "/netherlands/living/housing/registration-address"),
          item("Deposits + contracts", "/netherlands/living/housing/deposits-contracts"),
          item("Moving checklist", "/netherlands/living/housing/moving-checklist"),
        ],
      },
      {
        title: "Utilities",
        items: [
          item("Utilities", "/netherlands/living/utilities"),
          item("Energy + water", "/netherlands/living/utilities/energy-water"),
          item("Internet + mobile", "/netherlands/living/utilities/internet-mobile"),
          item("Municipality services", "/netherlands/living/utilities/municipality-services"),
        ],
      },
      {
        title: "Local living",
        items: [
          item("Local living", "/netherlands/living/local"),
          item("Municipality setup", "/netherlands/living/local/municipality-setup"),
          item("Waste + recycling", "/netherlands/living/local/waste-recycling"),
          item("Parking permits", "/netherlands/living/local/parking-permits"),
          item("Community basics", "/netherlands/living/local/community-basics"),
        ],
      },
      {
        title: "Everyday life (initial)",
        items: [
          item("Digital government", "/netherlands/living/digital-government"),
          item("DigiD", "/netherlands/living/digital-government/digid"),
          item("Privacy + security", "/netherlands/living/digital-government/privacy-security"),
          item("Subscriptions", "/netherlands/living/subscriptions"),
          item("Tracker", "/netherlands/living/subscriptions/tracker"),
          item("Cancellations", "/netherlands/living/subscriptions/cancellations"),
        ],
      },
    ],
    featured: item("Housing", "/netherlands/living/housing"),
    tools: getDomainToolItems("living"),
  },
  culture: {
    key: "culture",
    label: "Culture",
    sections: [
      {
        title: "Workplace culture",
        items: [
          item("Workplace", "/netherlands/culture/workplace"),
          item("Directness", "/netherlands/culture/workplace/directness"),
          item("Meetings + consensus", "/netherlands/culture/workplace/meetings-consensus"),
          item("Hierarchy + flatness", "/netherlands/culture/workplace/hierarchy-flatness"),
          item("Written followups", "/netherlands/culture/workplace/written-followups"),
        ],
      },
      {
        title: "Social norms",
        items: [
          item("Social", "/netherlands/culture/social"),
          item("Communication", "/netherlands/culture/social/communication"),
          item("Invitations + planning", "/netherlands/culture/social/invitations-planning"),
          item("Time + boundaries", "/netherlands/culture/social/time-boundaries"),
          item("What's normal", "/netherlands/culture/social/whats-normal"),
        ],
      },
      {
        title: "Traditions",
        items: [
          item("Traditions", "/netherlands/culture/traditions"),
          item("King's Day", "/netherlands/culture/traditions/kings-day"),
          item("Sinterklaas", "/netherlands/culture/traditions/sinterklaas"),
          item("National holidays", "/netherlands/culture/traditions/national-holidays"),
          item("Calendar", "/netherlands/culture/traditions/calendar"),
        ],
      },
      {
        title: "Language + Family + Health",
        items: [
          item("Language", "/netherlands/language"),
          item("Dutch learning", "/netherlands/language/dutch-learning"),
          item("Inburgering exams", "/netherlands/language/inburgering-exams"),
          item("Practice simulation", "/netherlands/language/practice-simulation"),
          item("Family", "/netherlands/family"),
          item("Health", "/netherlands/health"),
        ],
      },
    ],
    featured: item("Workplace culture", "/netherlands/culture/workplace"),
    tools: getDomainToolItems("culture"),
  },
  tools: {
    key: "tools",
    label: "Tools",
    sections: buildToolsMegaSections(),
    featured: item("Open all tools", "/netherlands/tools/"),
    tools: getDomainToolItems("tools"),
  },
};

export const MEGA_MENUS: Record<TopNavKey, MegaMenu> = Object.fromEntries(
  (Object.keys(RAW_MEGA_MENUS) as TopNavKey[]).map((key) => [key, filterMegaMenu(RAW_MEGA_MENUS[key])])
) as Record<TopNavKey, MegaMenu>;

export const COUNTRIES: CountryOption[] = [{ slug: "netherlands", label: "Netherlands" }];
