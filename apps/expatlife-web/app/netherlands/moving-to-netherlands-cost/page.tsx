import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { Container } from "@/components/ui/container";
import { getFeaturedOriginCountryGuides } from "@/src/lib/countries/originCountryGuides";
import { OriginCountryGuideGrid } from "@/src/components/guides/OriginCountryGuideGrid";
import { guideShareMetadata } from "@/lib/seo/netherlandsGuideShareMetadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

export const metadata = guideShareMetadata("moving-to-netherlands-cost");

export default function MovingToNetherlandsCostPage() {
  return (
    <>
      <GuideBySlugPage slug="moving-to-netherlands-cost" />
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
