import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { Container } from "@/components/ui/container";
import { getFeaturedOriginCountryGuides } from "@/src/lib/countries/originCountryGuides";
import { OriginCountryGuideGrid } from "@/src/components/guides/OriginCountryGuideGrid";
import { guideShareMetadata } from "@/lib/seo/netherlandsGuideShareMetadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

export const metadata = guideShareMetadata("eu-vs-non-eu-moving-to-netherlands");

export default function EuVsNonEuMovingToNetherlandsPage() {
  return (
    <>
      <GuideBySlugPage slug="eu-vs-non-eu-moving-to-netherlands" />
      <Container className="py-8">
        <OriginCountryGuideGrid
          title="See country-specific relocation guides"
          intro="Origin-country guides cover visa context, document differences, and first-step planning for EU and non-EU routes."
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
