/**
 * Equity rebalance report for IA-P1-EXPLORE-CONCENTRATION.
 * Simulates explore inlinks before (fixed 23) vs after (cluster-resolved) across sitemap paths.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { collectLiveSitemapNormalizedPaths } from "../src/lib/sitemap/liveSitemapPaths";
import { resolveExploreNetherlandsLinks } from "../lib/seo/exploreNetherlandsClusters";
import { toSiteHref } from "../lib/seo/site-url";

const REPO = join(process.cwd(), "../..");
const OUT = join(REPO, "reports/remediation");

const OLD_EXPLORE = [
  "/netherlands/moving-to-the-netherlands",
  "/netherlands/moving/visas-residency",
  "/netherlands/moving/working-in-the-netherlands",
  "/netherlands/moving/changing-jobs-netherlands",
  "/netherlands/moving/resigning-job-netherlands",
  "/netherlands/moving/layoffs-netherlands",
  "/netherlands/moving/twv-work-permit",
  "/netherlands/moving/residence-permits",
  "/netherlands/moving/extensions-changes",
  "/netherlands/moving/status-changes",
  "/netherlands/cities",
  "/netherlands/cities/best-cities-for-expats",
  "/netherlands/cities/best-cities-for-families",
  "/netherlands/cities/cheapest-cities-for-expats",
  "/netherlands/tools/city-comparison",
  "/netherlands/living/survival-guide",
  "/netherlands/living/getting-around",
  "/netherlands/living/apps",
  "/netherlands/living/daily-life",
  "/netherlands/living/language",
  "/netherlands/living/weather",
  "/netherlands/services",
  "/netherlands/tools",
].map((p) => toSiteHref(p));

function median(nums: number[]): number {
  if (!nums.length) return 0;
  const s = [...nums].sort((a, b) => a - b);
  const mid = Math.floor(s.length / 2);
  return s.length % 2 ? s[mid]! : (s[mid - 1]! + s[mid]!) / 2;
}

function topN(map: Map<string, number>, n: number) {
  return [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, n);
}

function gini(values: number[]): number {
  const n = values.length;
  if (!n) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const sum = sorted.reduce((a, b) => a + b, 0);
  if (sum === 0) return 0;
  let acc = 0;
  for (let i = 0; i < n; i++) {
    acc += (2 * (i + 1) - n - 1) * sorted[i]!;
  }
  return acc / (n * sum);
}

function main() {
  const paths = collectLiveSitemapNormalizedPaths().filter(
    (p) => p === "/netherlands" || p.startsWith("/netherlands/")
  );

  const before = new Map<string, number>();
  const after = new Map<string, number>();
  const clusterAfter = new Map<string, number>();

  for (const p of OLD_EXPLORE) before.set(p, (before.get(p) ?? 0) + paths.length);

  for (const page of paths) {
    const { cluster, links } = resolveExploreNetherlandsLinks(page);
    for (const l of links) {
      after.set(l.href, (after.get(l.href) ?? 0) + 1);
      if (l.tier === "cluster") {
        clusterAfter.set(cluster, (clusterAfter.get(cluster) ?? 0) + 1);
      }
    }
  }

  const beforeVals = [...before.values()];
  const afterVals = [...after.values()];
  // Concentration among pages that receive explore equity
  const beforeMax = Math.max(...beforeVals, 0);
  const afterMax = Math.max(...afterVals, 0);
  const beforeShareTop5 =
    topN(before, 5).reduce((s, [, v]) => s + v, 0) / Math.max(1, beforeVals.reduce((a, b) => a + b, 0));
  const afterShareTop5 =
    topN(after, 5).reduce((s, [, v]) => s + v, 0) / Math.max(1, afterVals.reduce((a, b) => a + b, 0));

  const examples = [
    "/netherlands/taxes/30-percent-ruling",
    "/netherlands/amsterdam",
    "/netherlands/moving/moving-to-netherlands-from/south-africa",
    "/netherlands/health/gp-netherlands",
    "/netherlands/housing/housing-costs-netherlands",
    "/netherlands/jobs/finding-jobs-netherlands",
    "/netherlands/living/survival-guide",
    "/netherlands/services",
    "/netherlands/money/banking/best-banks-expats",
    "/netherlands/moving/visas-residency",
  ].map((path) => {
    const { cluster, links } = resolveExploreNetherlandsLinks(path);
    return {
      path,
      cluster,
      linkCount: links.length,
      links: links.map((l) => `${l.label} (${l.tier}: ${l.href})`),
    };
  });

  const report = {
    netherlands_pages_simulated: paths.length,
    before: {
      explore_targets: OLD_EXPLORE.length,
      links_per_page: OLD_EXPLORE.length,
      max_explore_inlinks: beforeMax,
      median_explore_inlinks_among_targets: median(beforeVals),
      gini_among_targets: Number(gini(beforeVals).toFixed(3)),
      top5_share_of_explore_equity: Number(beforeShareTop5.toFixed(3)),
      most_linked: topN(before, 15).map(([href, count]) => ({ href, explore_inlinks: count })),
    },
    after: {
      distinct_explore_targets: after.size,
      avg_links_per_page: Number(
        (
          [...after.values()].reduce((a, b) => a + b, 0) / Math.max(1, paths.length)
        ).toFixed(2)
      ),
      max_explore_inlinks: afterMax,
      median_explore_inlinks_among_targets: median(afterVals),
      gini_among_targets: Number(gini(afterVals).toFixed(3)),
      top5_share_of_explore_equity: Number(afterShareTop5.toFixed(3)),
      most_linked: topN(after, 15).map(([href, count]) => ({ href, explore_inlinks: count })),
      cluster_edge_counts: Object.fromEntries(
        [...clusterAfter.entries()].sort((a, b) => b[1] - a[1])
      ),
    },
    examples,
  };

  mkdirSync(OUT, { recursive: true });
  writeFileSync(join(OUT, "_explore-equity-summary.json"), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
}

main();
