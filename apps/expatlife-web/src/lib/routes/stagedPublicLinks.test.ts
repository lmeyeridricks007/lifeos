import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  SCHEDULED_GUIDES,
  isScheduledGuidePubliclyVisible,
} from "@/src/lib/publishing/scheduledGuides";
import {
  filterLiveInternalLinks,
  isGuideCardHrefLive,
  isRouteLive,
} from "@/src/lib/routes/routeStatus";

/** Residual staged destinations verified on production 2026-09-09 (post-deploy). */
const RESIDUAL_STAGED_DESTINATIONS = [
  "/netherlands/jobs/starting-consultancy-netherlands",
  "/netherlands/services/accountants",
  "/netherlands/services/business-consultants",
  "/netherlands/services/insurance-brokers",
  "/netherlands/services/recruitment-agencies",
  "/netherlands/services/career-coaches",
  "/netherlands/living/bike-sharing-netherlands",
  "/netherlands/services/insurance",
  "/netherlands/services/moving-companies",
  "/netherlands/services/removal-companies",
  "/netherlands/living/train-discounts-netherlands",
  "/netherlands/living/weekend-travel-netherlands",
  "/netherlands/living/trams-netherlands",
  "/netherlands/services/immigration-visas",
  "/netherlands/services/pet-relocation-companies",
  "/netherlands/services/daycare-providers",
  "/netherlands/living/museums-netherlands",
  "/netherlands/living/metro-netherlands",
  "/netherlands/living/regional-buses-netherlands",
  "/netherlands/living/cycling-netherlands",
  "/netherlands/services/notaries",
  "/netherlands/living/hiking-netherlands",
  "/netherlands/services/estate-agents",
  "/netherlands/services/documents-legal",
  "/netherlands/services/expat-tax-services",
  "/netherlands/services/compare-health-insurance",
  "/netherlands/services/international-schools",
  "/netherlands/living/weekend-trips-netherlands",
  "/netherlands/living/hidden-gems-netherlands",
  "/netherlands/jobs/networking-netherlands",
  "/netherlands/jobs/linkedin-netherlands",
  "/netherlands/services/banking-finance",
  "/netherlands/services/phone-providers",
  "/netherlands/services/internet-providers",
  "/netherlands/services/energy-providers",
  "/netherlands/services/storage-companies",
  "/netherlands/services/payroll-services",
] as const;

describe("staged public link regression guard", () => {
  it("never treats residual staged destinations as live clickable cards", () => {
    for (const href of RESIDUAL_STAGED_DESTINATIONS) {
      assert.equal(isRouteLive(href), false, `expected not live: ${href}`);
      assert.equal(
        isGuideCardHrefLive({ href, status: "live" }),
        false,
        `forced status:live must still block staged href: ${href}`
      );
      assert.equal(
        isGuideCardHrefLive({ href }),
        false,
        `missing status must still block staged href: ${href}`
      );
    }
  });

  it("filterLiveInternalLinks drops every residual staged destination", () => {
    const filtered = filterLiveInternalLinks(
      RESIDUAL_STAGED_DESTINATIONS.map((href) => ({ href, label: href }))
    );
    assert.equal(filtered.length, 0);
  });

  it("scheduled guides that are not yet public are not live", () => {
    const now = new Date("2026-09-09T12:00:00Z");
    for (const guide of SCHEDULED_GUIDES) {
      if (isScheduledGuidePubliclyVisible(guide.path, now)) continue;
      assert.equal(
        isRouteLive(guide.path, now),
        false,
        `scheduled not-yet-public must not be live: ${guide.path}`
      );
      assert.equal(
        isGuideCardHrefLive({ href: guide.path, status: "live" }),
        false,
        `LinkCard must not click through to scheduled: ${guide.path}`
      );
    }
  });
});
