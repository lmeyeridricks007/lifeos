import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { NETHERLANDS_GUIDE_PAGE_MONETIZATION } from "@/src/lib/monetization/netherlandsGuideMonetizationRegistry";
import type { PageMonetizationMetadata } from "@/src/lib/monetization/pageMonetizationMetadata";
import { Container } from "@/components/ui/container";
import { getFeaturedOriginCountryGuides } from "@/src/lib/countries/originCountryGuides";
import { OriginCountryGuideGrid } from "@/src/components/guides/OriginCountryGuideGrid";
import { guideShareMetadata } from "@/lib/seo/netherlandsGuideShareMetadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

const SLUG = "moving-to-netherlands-cost" as const;

const monetization: PageMonetizationMetadata | undefined =
  NETHERLANDS_GUIDE_PAGE_MONETIZATION[SLUG];

export const metadata = guideShareMetadata("moving-to-netherlands-cost");

export default function MovingToNetherlandsCostPage() {
  return (
    <>
      <GuideBySlugPage slug={SLUG} monetization={monetization} />
      <Container className="py-8">
        <OriginCountryGuideGrid
          title="Moving from a specific country?"
          intro="Country-specific relocation guides include cost context, document planning, and links to the relocation cost estimator and checklist tools."
          items={getFeaturedOriginCountryGuides(4)}
          limit={4}
          showViewAll={true}
          compact={true}
          contained={false}
        />
      </Container>
    </>
  );
}
