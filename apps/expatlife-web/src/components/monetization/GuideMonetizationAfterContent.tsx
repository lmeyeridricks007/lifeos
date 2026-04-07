import type { ReactNode } from "react";
import { BestProvidersMiniList } from "./BestProvidersMiniList";
import { MonetizationProviderTrustFooter } from "./MonetizationProviderTrustFooter";
import { SoftCTA } from "./SoftCTA";
import { DEFAULT_MONETIZATION_DISCLOSURE, GUIDE_MINI_LIST_EDITORIAL_RATIONALE } from "@/src/lib/monetization";
import { loadBestProvidersPage } from "@/src/data/monetization/best-pages";
import { bestRowsToMiniListItems } from "@/src/data/monetization/best-pages/utils";

export { guideHasMonetizationAfterContent } from "@/src/lib/guides/monetizationGuideSlugs";

const miniCommon = {
  contained: false as const,
  trustFooter: "none" as const,
  visualVariant: "movingGuide" as const,
  outerSectionClassName: "pt-2 pb-0 sm:pt-3 md:pt-4",
};

/** Full-width SoftCTA in guide main column; drop description max-width so copy matches shortlist width. */
const softCtaGuideShellClass = "w-full min-w-0 [&_p]:max-w-none";

/**
 * Single monetization region for high-intent guides: after FAQ, before legacy “useful services” affiliate strip when present.
 * Uses compact BestProviders mini-lists that deep-link to full comparison hubs—no duplicate full card grids on the same page.
 */
export function GuideMonetizationAfterContent({ slug }: { slug: string }) {
  switch (slug) {
    case "open-bank-account-netherlands": {
      const page = loadBestProvidersPage("banks-for-expats");
      if (!page) return null;
      const items = bestRowsToMiniListItems(page.rows, 4);
      return (
        <div className="w-full min-w-0 scroll-mt-24">
          <PostFaqGuideColumn>
            <BestProvidersMiniList
              title="Banks expats often compare"
              items={items}
              viewAllHref={page.path}
              viewAllLabel="Full comparison & methodology"
              {...miniCommon}
            />
            <MonetizationProviderTrustFooter
              className="mt-6 w-full min-w-0"
              disclosureText={DEFAULT_MONETIZATION_DISCLOSURE}
              editorialRationale={GUIDE_MINI_LIST_EDITORIAL_RATIONALE}
              visualVariant="movingGuide"
            />
            <SoftCTA
              variant="card"
              cardVariant="expatCopilot"
              eyebrow="Plan the next step"
              title="See the structured banking comparison"
              description="Tables, criteria, and FAQs on a single page—then cross-check BSN and document rules in our open-account guide. For the full services directory, use the banks hub."
              primaryCta={{ label: "Open full banking comparison", href: page.path }}
              secondaryCta={{ label: "All banks (services hub)", href: "/netherlands/services/banks/" }}
              contained={false}
              className={softCtaGuideShellClass}
            />
          </PostFaqGuideColumn>
        </div>
      );
    }
    case "health-insurance-netherlands": {
      const page = loadBestProvidersPage("health-insurance-for-expats");
      if (!page) return null;
      const items = bestRowsToMiniListItems(page.rows, 4);
      return (
        <div className="w-full min-w-0 scroll-mt-24">
          <PostFaqGuideColumn>
            <BestProvidersMiniList
              title="Dutch basic insurers"
              items={items}
              viewAllHref={page.path}
              viewAllLabel="Full comparison & methodology"
              {...miniCommon}
            />
            <MonetizationProviderTrustFooter
              className="mt-6 w-full min-w-0"
              disclosureText={DEFAULT_MONETIZATION_DISCLOSURE}
              editorialRationale={GUIDE_MINI_LIST_EDITORIAL_RATIONALE}
              visualVariant="movingGuide"
            />
            <SoftCTA
              variant="card"
              cardVariant="expatCopilot"
              eyebrow="Keep planning"
              title="Open the expat health insurance comparison"
              description="Side-by-side criteria for basic cover, English materials, and typical premium bands—plus links to official guidance."
              primaryCta={{ label: "Open full insurers comparison", href: page.path }}
              secondaryCta={{ label: "Health insurance hub", href: "/netherlands/services/health-insurance/" }}
              contained={false}
              className={softCtaGuideShellClass}
            />
          </PostFaqGuideColumn>
        </div>
      );
    }
    case "moving-to-netherlands-cost": {
      const page = loadBestProvidersPage("relocation-for-expats");
      if (!page) return null;
      const items = bestRowsToMiniListItems(page.rows, 4);
      return (
        <div className="w-full min-w-0 scroll-mt-24">
          <PostFaqGuideColumn>
            <BestProvidersMiniList
              title="Relocation support"
              items={items}
              viewAllHref={page.path}
              viewAllLabel="Full comparison & methodology"
              {...miniCommon}
            />
            <MonetizationProviderTrustFooter
              className="mt-6 w-full min-w-0"
              disclosureText={DEFAULT_MONETIZATION_DISCLOSURE}
              editorialRationale={GUIDE_MINI_LIST_EDITORIAL_RATIONALE}
              visualVariant="movingGuide"
            />
            <SoftCTA
              variant="band"
              eyebrow="Tools"
              title="Pair providers with a budget timeline"
              description="Use the relocation comparison for who to brief—then sequence costs with the estimator and checklist."
              primaryCta={{ label: "Relocation comparison", href: page.path }}
              secondaryCta={{ label: "Relocation cost estimator", href: "/netherlands/moving/tools/relocation-cost-estimator/" }}
              contained={false}
              className={softCtaGuideShellClass}
            />
          </PostFaqGuideColumn>
        </div>
      );
    }
    case "shipping-household-goods-netherlands": {
      const page = loadBestProvidersPage("relocation-for-expats");
      if (!page) return null;
      const items = bestRowsToMiniListItems(page.rows, 4);
      return (
        <div className="w-full min-w-0 scroll-mt-24">
          <PostFaqGuideColumn>
            <BestProvidersMiniList
              title="Moving & relocation support"
              items={items}
              viewAllHref={page.path}
              viewAllLabel="Full comparison & methodology"
              {...miniCommon}
            />
            <MonetizationProviderTrustFooter
              className="mt-6 w-full min-w-0"
              disclosureText={DEFAULT_MONETIZATION_DISCLOSURE}
              editorialRationale={GUIDE_MINI_LIST_EDITORIAL_RATIONALE}
              visualVariant="movingGuide"
            />
            <SoftCTA
              variant="card"
              cardVariant="expatCopilot"
              eyebrow="Stay organised"
              title="Compare relocation firms in one place"
              description="Structured notes for international moves—before you sign a shipment or destination-services scope."
              primaryCta={{ label: "Open relocation comparison", href: page.path }}
              secondaryCta={{ label: "Moving checklist", href: "/netherlands/moving/tools/moving-checklist/" }}
              contained={false}
              className={softCtaGuideShellClass}
            />
          </PostFaqGuideColumn>
        </div>
      );
    }
    default:
      return null;
  }
}

/** One horizontal shell for shortlist + trust + SoftCTA so widths match FAQ inset (`px-4 sm:px-6`). */
function PostFaqGuideColumn({ children }: { children: ReactNode }) {
  return <div className="w-full min-w-0 px-4 sm:px-6">{children}</div>;
}
