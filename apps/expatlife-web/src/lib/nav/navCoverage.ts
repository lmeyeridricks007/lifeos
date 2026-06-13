import { MEGA_MENUS } from "./config";
import { isNavItemLinkable } from "./navItemModel";
import { getRouteStatus, isRouteLive } from "@/src/lib/routes/routeStatus";
import { LIVE_PATHS, normalizeSitePath } from "@/src/data/site/route-registry";
import { getClusterPageByPath } from "@/src/lib/guides/livingCultureCluster";
import { isComingSoonContent } from "@/src/lib/content/contentPublishStatus";
import { NETHERLANDS_SERVICES_CATEGORIES } from "@/src/data/services/categories";
import toolsRegistry from "@/src/content/tools/registry.json";

export type MenuRow = {
  menuKey: string;
  sectionTitle: string;
  label: string;
  href: string;
};

const ROOT_VISA_TOOL_PATHS = new Set([
  "/netherlands/visa-checker/",
  "/netherlands/visa-timeline-estimator/",
  "/netherlands/visa-cost-calculator/",
  "/netherlands/visa-application-plan/",
  "/netherlands/document-readiness-checker/",
]);

const LIVE_TOOL_ROUTES = new Set(
  toolsRegistry.tools.filter((t) => t.status === "live").map((t) => normalizeSitePath(t.route))
);

/** Editorial guides that may appear in only one mega-menu section column. */
export function collectLinkableMenuRows(): MenuRow[] {
  const rows: MenuRow[] = [];
  for (const [menuKey, menu] of Object.entries(MEGA_MENUS)) {
    for (const section of menu.sections) {
      for (const item of section.items) {
        if (item.href && isNavItemLinkable(item)) {
          rows.push({
            menuKey,
            sectionTitle: section.title,
            label: item.label,
            href: normalizeSitePath(item.href),
          });
        }
      }
    }
  }
  return rows;
}

export function groupMenuRowsByHref(rows: MenuRow[]): Map<string, MenuRow[]> {
  const hrefToRows = new Map<string, MenuRow[]>();
  for (const row of rows) {
    const list = hrefToRows.get(row.href) ?? [];
    list.push(row);
    hrefToRows.set(row.href, list);
  }
  return hrefToRows;
}

/** Live editorial pages expected to appear in a mega menu (excludes hubs, trust, tools, legacy redirects). */
export function shouldRequireMegaMenu(path: string): boolean {
  const p = normalizeSitePath(path);

  if (
    p === "/" ||
    p.startsWith("/about") ||
    p.startsWith("/contact") ||
    p.startsWith("/privacy") ||
    p.startsWith("/terms") ||
    p.startsWith("/cookies") ||
    p.startsWith("/disclaimer") ||
    p.startsWith("/editorial") ||
    p.startsWith("/methodology") ||
    p.startsWith("/sources") ||
    p.startsWith("/how-we-rank") ||
    p.startsWith("/affiliate") ||
    p.startsWith("/how-this-site") ||
    p === "/sitemap/" ||
    p === "/search/"
  ) {
    return false;
  }

  const hubOnly = new Set([
    "/netherlands/",
    "/netherlands/services/",
    "/netherlands/tools/",
    "/netherlands/cities/",
    "/netherlands/money/",
    "/netherlands/living/",
    "/netherlands/housing/",
    "/netherlands/taxes/",
    "/netherlands/moving/tools/",
  ]);
  if (hubOnly.has(p)) return false;

  const legacy = [
    "/netherlands/buying-house-netherlands/",
    "/netherlands/mortgage-netherlands-expats/",
    "/netherlands/property-tax-netherlands/",
    "/netherlands/buy-vs-rent-netherlands/",
    "/netherlands/double-taxation-netherlands/",
    "/netherlands/taxes/healthcare-allowance/",
    "/netherlands/taxes/childcare-allowance/",
    "/netherlands/taxes/rent-allowance/",
    "/netherlands/taxes/expat-taxes-netherlands/",
    "/netherlands/work/changing-jobs-netherlands/",
    "/netherlands/work/resigning-job-netherlands/",
    "/netherlands/work/layoffs-netherlands/",
    "/netherlands/work/bonus-tax-netherlands/",
    "/netherlands/work/employment-contract-netherlands/",
    "/netherlands/work/probation-period-netherlands/",
    "/netherlands/work/notice-period-netherlands/",
    "/netherlands/work/employee-rights-netherlands/",
    "/netherlands/work/freelancing-netherlands/",
    "/netherlands/work/zzp-netherlands/",
  ];
  if (legacy.includes(p)) return false;

  if (/^\/netherlands\/moving\/moving-to-netherlands-from\//.test(p)) return false;
  if (/^\/netherlands\/moving\/tools\/[^/]+\/from\//.test(p)) return false;
  if (/\/tools\/$/.test(p) && p !== "/netherlands/tools/") return false;
  if (LIVE_TOOL_ROUTES.has(p)) return false;
  if (ROOT_VISA_TOOL_PATHS.has(p)) return false;

  return true;
}

export function isEditoriallyActiveMenuTarget(path: string): boolean {
  if (!isRouteLive(path)) return false;
  const cluster = getClusterPageByPath(path);
  if (cluster && isComingSoonContent(cluster.contentStatus)) return false;
  return true;
}

export function listActivePathsRequiringMenu(): string[] {
  return Array.from(LIVE_PATHS).filter(shouldRequireMegaMenu).filter(isEditoriallyActiveMenuTarget).sort();
}

export function listMissingFromMegaMenu(): string[] {
  const hrefs = new Set(collectLinkableMenuRows().map((r) => r.href));
  return listActivePathsRequiringMenu().filter((p) => !hrefs.has(p));
}

/** Duplicate editorial hrefs across section columns (tools may repeat in tool rails). */
export function listDuplicateEditorialMenuHrefs(): Array<{ href: string; rows: MenuRow[] }> {
  const editorialRows = collectLinkableMenuRows().filter((r) => !LIVE_TOOL_ROUTES.has(r.href) && !ROOT_VISA_TOOL_PATHS.has(r.href));
  const grouped = groupMenuRowsByHref(editorialRows);
  return Array.from(grouped.entries())
    .filter(([, rows]) => rows.length > 1)
    .map(([href, rows]) => ({ href, rows }))
    .sort((a, b) => a.href.localeCompare(b.href));
}

export function listLiveServiceCategoriesMissingFromServicesMenu(): string[] {
  const serviceHrefs = new Set(
    MEGA_MENUS.services.sections.flatMap((s) =>
      s.items.filter(isNavItemLinkable).map((i) => normalizeSitePath(i.href!))
    )
  );
  return NETHERLANDS_SERVICES_CATEGORIES.map((c) => normalizeSitePath(c.href)).filter(
    (href) => isRouteLive(href) && !serviceHrefs.has(href)
  );
}

export function listNonLiveMenuHrefs(): string[] {
  return collectLinkableMenuRows()
    .filter((r) => getRouteStatus(r.href) !== "live")
    .map((r) => r.href);
}
