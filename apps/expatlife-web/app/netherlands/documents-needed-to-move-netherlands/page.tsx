import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { Container } from "@/components/ui/container";
import { getFeaturedOriginCountryGuides } from "@/src/lib/countries/originCountryGuides";
import { OriginCountryGuideGrid } from "@/src/components/guides/OriginCountryGuideGrid";
import { guideShareMetadata } from "@/lib/seo/netherlandsGuideShareMetadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

export const metadata = guideShareMetadata("documents-needed-to-move-netherlands");

export default function DocumentsNeededPage() {
  return (
    <>
      <GuideBySlugPage slug="documents-needed-to-move-netherlands" />
      <Container className="py-8">
        <OriginCountryGuideGrid
          title="Country-specific document planning"
          intro="See country-specific relocation guides for document cues, apostille and legalization context, and next steps."
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
