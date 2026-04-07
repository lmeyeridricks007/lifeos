import { RecommendationBlock } from "./RecommendationBlock";
import { SoftCTA } from "./SoftCTA";
import {
  DEFAULT_MONETIZATION_DISCLOSURE,
  getActiveProvidersByCategory,
  monetizationProviderToCardProps,
} from "@/src/lib/monetization";
import { clampProvidersForPageType } from "@/src/lib/monetization/pageTypePolicy";

/**
 * Appended below the Netherlands housing flagship pillar: one housing shortlist + CTA (no duplicate vs service hub pages on same visit).
 * Provider count follows `MonetizationPageType` `"pillar"` caps.
 */
export function HousingFlagshipMonetization() {
  const raw = getActiveProvidersByCategory("housing");
  const items = clampProvidersForPageType("pillar", raw).map(monetizationProviderToCardProps);

  return (
    <>
      <RecommendationBlock
        eyebrow="Search & platforms"
        title="Where many expats start a housing search"
        subtitle="Often chosen for digital browsing before you visit viewings: national listing portals, rental-focused sites, and furnished bridge options. Availability varies sharply by city—use these as orientation, then read rental scam and agency-fee guidance carefully."
        items={items}
        disclosureText={DEFAULT_MONETIZATION_DISCLOSURE}
        variant="compact"
        contained
      />
      <SoftCTA
        variant="card"
        eyebrow="Go deeper"
        title="Compare housing platforms and rental support"
        description="The services hub explains platform types, typical fees, and how listings differ from agency-led rentals."
        primaryCta={{ label: "Housing platforms hub", href: "/netherlands/services/housing-platforms/" }}
        secondaryCta={{ label: "Rental agencies directory", href: "/netherlands/services/rental-agencies/" }}
        contained
      />
    </>
  );
}
