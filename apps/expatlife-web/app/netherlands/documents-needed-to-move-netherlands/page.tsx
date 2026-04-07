import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { NETHERLANDS_GUIDE_PAGE_MONETIZATION } from "@/src/lib/monetization/netherlandsGuideMonetizationRegistry";
import type { PageMonetizationMetadata } from "@/src/lib/monetization/pageMonetizationMetadata";
import { Container } from "@/components/ui/container";
import { getFeaturedOriginCountryGuides } from "@/src/lib/countries/originCountryGuides";
import { OriginCountryGuideGrid } from "@/src/components/guides/OriginCountryGuideGrid";
import { guideShareMetadata } from "@/lib/seo/netherlandsGuideShareMetadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

const SLUG = "documents-needed-to-move-netherlands" as const;

const monetization: PageMonetizationMetadata | undefined =
  NETHERLANDS_GUIDE_PAGE_MONETIZATION[SLUG];

export const metadata = guideShareMetadata("documents-needed-to-move-netherlands");

export default function DocumentsNeededPage() {
  return (
    <>
      <GuideBySlugPage slug={SLUG} monetization={monetization} />
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
