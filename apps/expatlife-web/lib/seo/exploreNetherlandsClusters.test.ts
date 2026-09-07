import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  EXPLORE_GLOBAL_MAX,
  EXPLORE_TOTAL_MAX,
  detectExploreCluster,
  resolveExploreNetherlandsLinks,
} from "./exploreNetherlandsClusters";

describe("exploreNetherlandsClusters (IA-P1-EXPLORE-CONCENTRATION)", () => {
  it("detects representative clusters", () => {
    assert.equal(detectExploreCluster("/netherlands/taxes/30-percent-ruling"), "tax");
    assert.equal(detectExploreCluster("/netherlands/amsterdam"), "cities");
    assert.equal(detectExploreCluster("/netherlands/moving/moving-to-netherlands-from/south-africa"), "country_origin");
    assert.equal(detectExploreCluster("/netherlands/health/gp-netherlands"), "health");
    assert.equal(detectExploreCluster("/netherlands/housing/housing-costs-netherlands"), "housing");
  });

  it("caps links and keeps a tiny global set", () => {
    const { links } = resolveExploreNetherlandsLinks("/netherlands/taxes/30-percent-ruling");
    assert.ok(links.length <= EXPLORE_TOTAL_MAX);
    const globals = links.filter((l) => l.tier === "global");
    assert.ok(globals.length <= EXPLORE_GLOBAL_MAX);
  });

  it("tax pages prefer tax-related destinations", () => {
    const { cluster, links } = resolveExploreNetherlandsLinks("/netherlands/taxes/gross-vs-net-salary");
    assert.equal(cluster, "tax");
    const hrefs = links.map((l) => l.href).join(" ");
    assert.match(hrefs, /30-percent|salary|payslip|allowance|tax/i);
    assert.doesNotMatch(hrefs, /layoffs-netherlands|resigning-job/);
  });

  it("country guides include live country tool landings when supported", () => {
    const { links } = resolveExploreNetherlandsLinks(
      "/netherlands/moving/moving-to-netherlands-from/germany"
    );
    const hrefs = links.map((l) => l.href);
    assert.ok(hrefs.some((h) => h.includes("/moving-checklist/from/germany")));
    assert.ok(hrefs.some((h) => h.includes("/arrival-planner/from/germany")));
  });

  it("excludes current page and excludeHrefs", () => {
    const { links } = resolveExploreNetherlandsLinks("/netherlands/cities", {
      excludeHrefs: ["/netherlands/housing"],
    });
    assert.ok(!links.some((l) => l.href === "/netherlands/cities"));
    assert.ok(!links.some((l) => l.href === "/netherlands/housing"));
  });

  it("is deterministic (no rotation)", () => {
    const a = resolveExploreNetherlandsLinks("/netherlands/health/pharmacies-netherlands");
    const b = resolveExploreNetherlandsLinks("/netherlands/health/pharmacies-netherlands");
    assert.deepEqual(
      a.links.map((l) => l.href),
      b.links.map((l) => l.href)
    );
  });
});
