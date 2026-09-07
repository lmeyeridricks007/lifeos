import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { composeCountryToolLanding } from "./composeCountryToolLanding";
import { SUPPORTED_ORIGIN_COUNTRIES } from "./toolCountryContext";

describe("composeCountryToolLanding", () => {
  it("returns record-backed context for every live origin × tool", () => {
    const tools = ["moving-checklist", "arrival-planner", "document-readiness", "first-90-days"] as const;
    for (const country of SUPPORTED_ORIGIN_COUNTRIES) {
      for (const tool of tools) {
        const page = composeCountryToolLanding(country, tool);
        assert.ok(page, `${country}/${tool}`);
        assert.ok(page.intro && page.intro.length > 80, `intro ${country}/${tool}`);
        assert.ok(page.taskExplanation);
        assert.ok(page.countryGuideHref?.includes(country));
        assert.ok((page.officialReferences?.length ?? 0) >= 1, `official refs ${country}`);
        assert.ok((page.whatOftenMatters?.length ?? 0) >= 2);
        assert.notEqual(page.qualityClass, undefined);
      }
    }
  });

  it("keeps South Africa checklist distinct from Germany (visa framing)", () => {
    const za = composeCountryToolLanding("south-africa", "moving-checklist");
    const de = composeCountryToolLanding("germany", "moving-checklist");
    assert.ok(za && de);
    assert.match(za.visaPathwayDifferences.join(" "), /non-EU|immigration/i);
    assert.match(de.visaPathwayDifferences.join(" "), /free-movement|EU\/EEA/i);
    assert.notEqual(za.intro, de.intro);
  });
});
