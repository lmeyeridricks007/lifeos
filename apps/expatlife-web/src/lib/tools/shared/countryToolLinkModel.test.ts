import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  MOVING_COUNTRY_TOOLS,
  allLiveCountryToolLandingPaths,
  countryGuidePath,
  countryToolHref,
  countryToolLandingPath,
  countryToolLinksForGuide,
  countryVersionsForTool,
  siblingCountryToolLandings,
} from "./countryToolLinkModel";

describe("countryToolLinkModel (IA-P1)", () => {
  it("emits 4 tools × 28 countries = 112 live landings", () => {
    const paths = allLiveCountryToolLandingPaths();
    assert.equal(paths.length, MOVING_COUNTRY_TOOLS.length * 28);
    assert.ok(paths.every((p) => !p.endsWith("/") || p === "/"));
    assert.ok(paths.includes("/netherlands/moving/tools/arrival-planner/from/south-africa"));
  });

  it("does not expose nigeria/philippines tool landings", () => {
    for (const tool of MOVING_COUNTRY_TOOLS) {
      assert.equal(countryToolLandingPath(tool.toolSlug, "nigeria"), null);
      assert.equal(countryToolLandingPath(tool.toolSlug, "philippines"), null);
      assert.match(countryToolHref(tool.toolSlug, "nigeria"), /\?from=nigeria/);
    }
  });

  it("country guide links prefer landings for supported origins", () => {
    const links = countryToolLinksForGuide("germany");
    assert.equal(links.length, 4);
    assert.ok(links.every((l) => l.isLanding));
    assert.equal(links.find((l) => l.toolSlug === "moving-checklist")?.href, "/netherlands/moving/tools/moving-checklist/from/germany");
  });

  it("base tool country versions list only live landings", () => {
    const versions = countryVersionsForTool("first-90-days");
    assert.equal(versions.length, 28);
    assert.ok(versions.every((v) => v.href.includes("/from/")));
    assert.ok(!versions.some((v) => v.slug === "nigeria"));
  });

  it("sibling landings exclude current tool and include guide parent path helper", () => {
    const siblings = siblingCountryToolLandings("canada", "arrival-planner");
    assert.equal(siblings.length, 3);
    assert.ok(!siblings.some((s) => s.toolSlug === "arrival-planner"));
    assert.equal(countryGuidePath("canada"), "/netherlands/moving/moving-to-netherlands-from/canada");
  });
});
