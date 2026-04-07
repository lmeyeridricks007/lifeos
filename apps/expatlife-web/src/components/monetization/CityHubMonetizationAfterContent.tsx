import type { ReactNode } from "react";
import { BestProvidersMiniList } from "./BestProvidersMiniList";
import { RecommendationBlock } from "./RecommendationBlock";
import { SoftCTA } from "./SoftCTA";
import { loadBestProvidersPage } from "@/src/data/monetization/best-pages";
import { bestRowsToMiniListItems } from "@/src/data/monetization/best-pages/utils";
import {
  CITY_RELOCATION_BLOCK_RATIONALE,
  DEFAULT_MONETIZATION_DISCLOSURE,
  getRecommendationsForContext,
  monetizationProviderToCardProps,
  GUIDE_MINI_LIST_EDITORIAL_RATIONALE,
} from "@/src/lib/monetization";
import { MonetizationProviderTrustFooter } from "./MonetizationProviderTrustFooter";
import {
  clampPostFaqRecommendationSections,
  clampProvidersForPageType,
  getMonetizationPolicy,
} from "@/src/lib/monetization/pageTypePolicy";

export type CityHubMonetizationAfterContentProps = {
  cityName: string;
  citySlug: string;
  path: string;
};

/** Align post-FAQ monetization with FAQ shell inset (`px-4 sm:px-6`). */
function ContainerIntro({ children }: { children: ReactNode }) {
  return <div className="w-full min-w-0 px-4 sm:px-6">{children}</div>;
}

/**
 * City hub post-FAQ monetization: contextual relocation recommendations + relocation comparison mini-list (city policy).
 */
export function CityHubMonetizationAfterContent({ cityName, citySlug, path }: CityHubMonetizationAfterContentProps) {
  const policy = getMonetizationPolicy("city");

  const rawReco = getRecommendationsForContext({
    pageSlug: path.replace(/^\//, ""),
    city: citySlug,
    topic: "relocation",
  });
  const recoProviders = clampProvidersForPageType("city", rawReco);
  const recoItems = recoProviders.map(monetizationProviderToCardProps);

  const relocationPage = policy.surfaces.bestProvidersMiniList ? loadBestProvidersPage("relocation-for-expats") : null;

  const wantReco = policy.surfaces.recommendationBlock && recoItems.length > 0;
  const wantMini = Boolean(relocationPage?.rows.length);
  const requested = (wantReco ? 1 : 0) + (wantMini ? 1 : 0);
  const allowed = clampPostFaqRecommendationSections("city", requested);
  const includeReco = wantReco && allowed >= 1;
  const includeMini = wantMini && allowed >= (includeReco ? 2 : 1);

  const blocks: ReactNode[] = [];

  if (includeReco) {
    blocks.push(
      <ContainerIntro key="reco">
        <RecommendationBlock
          eyebrow="Local setup"
          title={`Relocation support often used from ${cityName}`}
          subtitle="Orientation only—queues at the gemeente, housing, and your employer still set the real timeline."
          items={recoItems}
          disclosureText={DEFAULT_MONETIZATION_DISCLOSURE}
          editorialRationale={CITY_RELOCATION_BLOCK_RATIONALE}
          variant="compact"
          contained={false}
          pillarVisualVariant="movingGuide"
        />
      </ContainerIntro>
    );
  }

  if (includeMini && relocationPage) {
    const items = bestRowsToMiniListItems(relocationPage.rows, 4);
    blocks.push(
      <div key="mini" className="w-full scroll-mt-24">
        <ContainerIntro>
          <BestProvidersMiniList
            title="Relocation firms — shortlist"
            items={items}
            viewAllHref={relocationPage.path}
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
        <ContainerIntro>
          <SoftCTA
            variant="card"
            cardVariant="expatCopilot"
            eyebrow="Next step"
            title="Turn the shortlist into a dated plan"
            description="Pair provider outreach with a moving checklist and first-90-days sequencing so admin tasks do not slip."
            primaryCta={{ label: "Moving checklist", href: "/netherlands/moving/tools/moving-checklist/" }}
            secondaryCta={{ label: "First 90 days", href: "/netherlands/moving/tools/first-90-days/" }}
            contained={false}
          />
        </ContainerIntro>
      </div>
    );
  }

  if (blocks.length === 0) return null;

  return <div className="w-full space-y-8 md:space-y-10">{blocks}</div>;
}
