import type { ReactNode } from "react";
import { BestProvidersMiniList } from "./BestProvidersMiniList";
import { MonetizationProviderTrustFooter } from "./MonetizationProviderTrustFooter";
import { RecommendationBlock } from "./RecommendationBlock";
import { SoftCTA } from "./SoftCTA";
import { loadBestProvidersPage } from "@/src/data/monetization/best-pages";
import { bestRowsToMiniListItems } from "@/src/data/monetization/best-pages/utils";
import {
  DEFAULT_MONETIZATION_DISCLOSURE,
  getRecommendationsForContext,
  GUIDE_MINI_LIST_EDITORIAL_RATIONALE,
  monetizationProviderToCardProps,
} from "@/src/lib/monetization";
import { SOFT_CTA_PATHS } from "@/src/lib/soft-cta/paths";
import { clampProvidersForPageType } from "@/src/lib/monetization/pageTypePolicy";
import { shouldRenderSelectiveSetupMonetization } from "@/src/lib/monetization/moveClusterPostFaqPolicy";

/** Match FAQ shell horizontal padding (`movingNlShellFaqClass`) for alignment with the accordion block. */
function ContainerIntro({ children }: { children: ReactNode }) {
  return <div className="w-full min-w-0 px-4 sm:px-6">{children}</div>;
}

/**
 * Post-FAQ monetization for high-intent **setup/admin** moving guides (BSN, address, gemeente, bank-before-BSN).
 * Does not run on low-intent awareness pages.
 */
export function MoveClusterSelectiveSetupMonetization({ slug }: { slug: string }) {
  if (!shouldRenderSelectiveSetupMonetization(slug)) return null;

  if (slug === "can-i-open-bank-account-before-bsn") {
    const page = loadBestProvidersPage("banks-for-expats");
    if (!page) return null;
    const items = bestRowsToMiniListItems(page.rows, 4);
    return (
      <div className="w-full scroll-mt-24 space-y-5">
        <ContainerIntro>
          <BestProvidersMiniList
            title="Banks expats often compare first"
            items={items}
            viewAllHref={page.path}
            viewAllLabel="Full comparison & methodology"
            contained={false}
            trustFooter="none"
            visualVariant="movingGuide"
            outerSectionClassName="pt-2 pb-0 sm:pt-3 md:pt-4"
          />
        </ContainerIntro>
        <ContainerIntro>
          <MonetizationProviderTrustFooter
            className="mt-6"
            disclosureText={DEFAULT_MONETIZATION_DISCLOSURE}
            editorialRationale={GUIDE_MINI_LIST_EDITORIAL_RATIONALE}
            visualVariant="movingGuide"
          />
        </ContainerIntro>
        <SoftCTA
          variant="inline"
          eyebrow="Next step"
          title="Read how BSN timing affects banking"
          description="Our open-account guide explains typical bank asks, BSN timing, and document patterns—then you can return to the comparison when you are ready to apply."
          primaryCta={{ label: "Open bank account guide", href: "/netherlands/open-bank-account-netherlands/" }}
          secondaryCta={{ label: "Open banking comparison", href: page.path }}
          contained
        />
      </div>
    );
  }

  const raw = getRecommendationsForContext({
    pageSlug: slug,
    topic: "relocation",
  });
  const providers = clampProvidersForPageType("guide", raw);
  const recoItems = providers.map(monetizationProviderToCardProps);
  if (recoItems.length === 0) {
    return (
      <div className="w-full scroll-mt-24">
        <SoftCTA
          variant="inline"
          eyebrow="Next step"
          title="Sequence registration and your move"
          description="Use a checklist and relocation comparison when you want help coordinating shipment timing, housing, and arrival admin—not a substitute for gemeente appointments."
          primaryCta={{ label: "Build a moving checklist", href: SOFT_CTA_PATHS.movingChecklist }}
          secondaryCta={{ label: "Relocation comparison", href: "/netherlands/best/relocation-for-expats/" }}
          contained
        />
      </div>
    );
  }

  return (
    <div className="w-full scroll-mt-24 space-y-6">
      <RecommendationBlock
        eyebrow="Optional support"
        title="Relocation help during registration and arrival"
        subtitle="Some expats brief destination-services firms for logistics and paperwork. Others handle gemeente steps alone—use this as orientation, not a requirement."
        items={recoItems}
        disclosureText={DEFAULT_MONETIZATION_DISCLOSURE}
        editorialRationale="We show this because many readers on BSN, address, and municipality pages compare self-serve timelines with light professional support."
        variant="compact"
        contained
        pillarVisualVariant="movingGuide"
      />
      <SoftCTA
        variant="card"
        eyebrow="Plan the rest"
        title="Keep admin tasks in order"
        description="Pair any provider outreach with a dated checklist and a first-90-days view so insurance, housing, and appointments do not collide."
        primaryCta={{ label: "Moving checklist", href: SOFT_CTA_PATHS.movingChecklist }}
        secondaryCta={{ label: "First 90 days", href: SOFT_CTA_PATHS.first90Days }}
        contained
      />
    </div>
  );
}
