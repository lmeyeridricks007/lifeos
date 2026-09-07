/**
 * IA-P1 post-remediation internal-link graph (code-model + audit baseline).
 *
 * Builds reports/remediation/internal-link-graph-after.csv and orphans-after.csv
 * without a live production crawl: applies known new contextual edges from the
 * country-tool link model onto the pre-remediation graph.
 *
 * Usage: tsx scripts/build-ia-orphan-remediation-report.ts
 */
import { writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import {
  MOVING_COUNTRY_TOOLS,
  allLiveCountryToolLandingPaths,
  countryGuidePath,
  countryToolLandingPath,
  countryVersionsForTool,
  siblingCountryToolLandings,
} from "../src/lib/tools/shared/countryToolLinkModel";
import { SUPPORTED_ORIGIN_COUNTRIES } from "../src/lib/tools/shared/toolCountryContext";
import { toSiteHref } from "../lib/seo/site-url";

const REPO = join(process.cwd(), "../..");
const AUDIT = join(REPO, "reports/seo-audit");
const OUT = join(REPO, "reports/remediation");

type GraphRow = Record<string, string>;

function norm(urlOrPath: string): string {
  try {
    const u = urlOrPath.startsWith("http") ? new URL(urlOrPath) : new URL(urlOrPath, "https://www.expatcopilot.com");
    return toSiteHref(u.pathname);
  } catch {
    return toSiteHref(urlOrPath);
  }
}

function parseCsv(text: string): GraphRow[] {
  const lines = text.trim().split(/\r?\n/);
  const header = lines[0]!.split(",");
  const rows: GraphRow[] = [];
  for (const line of lines.slice(1)) {
    const cols: string[] = [];
    let cur = "";
    let q = false;
    for (let i = 0; i < line.length; i++) {
      const c = line[i]!;
      if (c === '"') {
        q = !q;
        continue;
      }
      if (c === "," && !q) {
        cols.push(cur);
        cur = "";
        continue;
      }
      cur += c;
    }
    cols.push(cur);
    const row: GraphRow = {};
    header.forEach((h, i) => {
      row[h] = cols[i] ?? "";
    });
    rows.push(row);
  }
  return rows;
}

function toCsv(rows: GraphRow[], columns: string[]): string {
  const esc = (v: string) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  return [columns.join(","), ...rows.map((r) => columns.map((c) => esc(r[c] ?? "")).join(","))].join("\n") + "\n";
}

/** New contextual inlink sources → landing path (normalized). */
function buildNewEdges(): Map<string, Set<string>> {
  const inlinks = new Map<string, Set<string>>();
  const add = (target: string, source: string) => {
    const t = norm(target);
    const s = norm(source);
    if (!inlinks.has(t)) inlinks.set(t, new Set());
    inlinks.get(t)!.add(s);
  };

  for (const tool of MOVING_COUNTRY_TOOLS) {
    // Base tool → every country version
    for (const v of countryVersionsForTool(tool.toolSlug)) {
      add(v.href, tool.basePath);
    }
  }

  for (const slug of SUPPORTED_ORIGIN_COUNTRIES) {
    const guide = countryGuidePath(slug);
    for (const tool of MOVING_COUNTRY_TOOLS) {
      const landing = countryToolLandingPath(tool.toolSlug, slug);
      if (!landing) continue;
      add(landing, guide);
      // Sibling landings
      for (const sib of siblingCountryToolLandings(slug, tool.toolSlug)) {
        add(sib.href, landing);
      }
    }
  }

  // Culture hub → residual editorial pages
  const cultureHub = "/netherlands/culture";
  for (const p of [
    "/netherlands/culture/communication-style",
    "/netherlands/culture/sinterklaas",
    "/netherlands/culture/what-feels-normal-in-dutch-daily-life",
  ]) {
    add(p, cultureHub);
  }

  return inlinks;
}

function main() {
  const beforeGraph = parseCsv(readFileSync(join(AUDIT, "internal-link-graph.csv"), "utf8"));
  const beforeOrphans = parseCsv(readFileSync(join(AUDIT, "orphan-pages.csv"), "utf8"));
  const newEdges = buildNewEdges();

  const liveLandings = new Set(allLiveCountryToolLandingPaths());

  let sumIn = 0;
  let indexable = 0;
  const afterRows: GraphRow[] = [];

  for (const row of beforeGraph) {
    const path = norm(row.url);
    const prevContextual = Number(row.contextual_inlinks || 0);
    const prevHref = Number(row.href_inlinks || 0);
    const added = newEdges.get(path)?.size ?? 0;
    const contextual = prevContextual + added;
    const href = prevHref + added;
    const orphan = contextual === 0 && href === 0 ? "yes" : "no";
    // Near-orphan: ≤1 contextual and not sitewide
    const near =
      orphan === "no" &&
      contextual <= 1 &&
      row.sitewide_or_nav_target !== "yes" &&
      Number(row.navigation_inlinks || 0) === 0
        ? "yes"
        : "no";

    if ((row.intent || "INDEXABLE") === "INDEXABLE") {
      indexable += 1;
      sumIn += href;
    }

    afterRows.push({
      ...row,
      url: `https://www.expatcopilot.com${path === "/" ? "/" : path}`,
      contextual_inlinks: String(contextual),
      href_inlinks: String(href),
      unique_inlink_pages: String(Math.max(Number(row.unique_inlink_pages || 0), contextual)),
      orphan,
      near_orphan: near,
      notes:
        added > 0
          ? `${row.notes || ""}; ia_p1_added_contextual_sources=${added}`.replace(/^; /, "")
          : row.notes || "",
    });
  }

  // Ensure every live landing appears even if missing from before graph
  const seen = new Set(afterRows.map((r) => norm(r.url)));
  for (const p of liveLandings) {
    if (seen.has(p)) continue;
    const added = newEdges.get(p)?.size ?? 0;
    afterRows.push({
      url: `https://www.expatcopilot.com${p}`,
      page_type: "country_tool_landing",
      cluster: p.includes("first-90-days") ? "first_90_days" : "moving",
      parent_hub: "https://www.expatcopilot.com/netherlands/moving-to-the-netherlands",
      href_inlinks: String(added),
      unique_inlink_pages: String(added),
      contextual_inlinks: String(added),
      navigation_inlinks: "0",
      outlinks: "0",
      crawl_depth_home: "3",
      crawl_depth_hub: "2",
      orphan: added === 0 ? "yes" : "no",
      near_orphan: added <= 1 ? "yes" : "no",
      links_to_redirects: "0",
      links_to_404: "0",
      intent: "INDEXABLE",
      severity: added === 0 ? "P1" : "INFO",
      notes: `ia_p1_model_only_row; added_contextual_sources=${added}`,
    });
  }

  const orphansAfter = afterRows.filter(
    (r) => r.intent === "INDEXABLE" && (r.orphan === "yes" || r.near_orphan === "yes")
  );

  // Classify orphans-after with reasons
  const orphanReport = orphansAfter.map((r) => {
    const path = norm(r.url);
    let reason = "residual";
    let page_type = r.page_type || "";
    if (path.includes("/from/") && (path.includes("nigeria") || path.includes("philippines"))) {
      reason = "TECH-P0_404_landing_not_live; do_not_link";
      page_type = "country_tool_landing_404";
    } else if (path === "/netherlands/living/government-portals-overview") {
      reason = "intentional_redirect_alias; canonical_is_practical-life/government-portals-netherlands";
      page_type = "redirect_alias";
    } else if (path.startsWith("/netherlands/culture/")) {
      reason = "scaffold_culture_article; hub_linked_after_ia_p1_if_still_listed_recheck_deploy";
      page_type = "culture_scaffold";
    } else if (liveLandings.has(path)) {
      reason = "UNEXPECTED_still_orphan_after_model";
      page_type = "country_tool_landing";
    }
    return {
      url: r.url,
      path,
      page_type,
      cluster: r.cluster || "",
      orphan: r.orphan,
      near_orphan: r.near_orphan,
      contextual_inlinks: r.contextual_inlinks,
      href_inlinks: r.href_inlinks,
      intent: r.intent,
      residual_reason: reason,
      notes: r.notes || "",
    };
  });

  mkdirSync(OUT, { recursive: true });
  const graphCols = Object.keys(afterRows[0]!);
  writeFileSync(join(OUT, "internal-link-graph-after.csv"), toCsv(afterRows, graphCols));
  const orphanCols = [
    "url",
    "path",
    "page_type",
    "cluster",
    "orphan",
    "near_orphan",
    "contextual_inlinks",
    "href_inlinks",
    "intent",
    "residual_reason",
    "notes",
  ];
  writeFileSync(join(OUT, "orphans-after.csv"), toCsv(orphanReport, orphanCols));

  const beforeOrphanYes = beforeOrphans.filter((r) => r.orphan === "yes" && r.intent === "INDEXABLE").length;
  const beforeNear = beforeOrphans.filter((r) => r.near_orphan === "yes" && r.intent === "INDEXABLE").length;
  const afterOrphanYes = afterRows.filter((r) => r.orphan === "yes" && r.intent === "INDEXABLE").length;
  const afterNear = afterRows.filter((r) => r.near_orphan === "yes" && r.intent === "INDEXABLE").length;
  const avgBefore =
    beforeGraph.filter((r) => r.intent === "INDEXABLE").reduce((s, r) => s + Number(r.href_inlinks || 0), 0) /
    Math.max(1, beforeGraph.filter((r) => r.intent === "INDEXABLE").length);
  const avgAfter = sumIn / Math.max(1, indexable);

  const countryToolCoverage = {
    tools: MOVING_COUNTRY_TOOLS.length,
    countries_with_live_landings: SUPPORTED_ORIGIN_COUNTRIES.length,
    live_landings: liveLandings.size,
    expected_min_inlinks_per_landing: ">=2 (country guide + base tool); typically +3 siblings",
  };

  const summary = {
    indexable_orphans_before: beforeOrphanYes,
    indexable_orphans_after_model: afterOrphanYes,
    near_orphans_before: beforeNear,
    near_orphans_after_model: afterNear,
    average_indexable_href_inlinks_before: Number(avgBefore.toFixed(2)),
    average_indexable_href_inlinks_after_model: Number(avgAfter.toFixed(2)),
    country_tool_coverage: countryToolCoverage,
    residual_orphan_rows: orphanReport.filter((r) => r.orphan === "yes").length,
  };

  writeFileSync(join(OUT, "_ia-p1-summary.json"), JSON.stringify(summary, null, 2));
  console.log(JSON.stringify(summary, null, 2));
  console.log("wrote", join(OUT, "internal-link-graph-after.csv"));
  console.log("wrote", join(OUT, "orphans-after.csv"));
}

main();
