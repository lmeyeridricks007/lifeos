import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { NETHERLANDS_GUIDE_PAGE_MONETIZATION } from "@/src/lib/monetization/netherlandsGuideMonetizationRegistry";
import type { PageMonetizationMetadata } from "@/src/lib/monetization/pageMonetizationMetadata";
import { Container } from "@/components/ui/container";
import { getFeaturedOriginCountryGuides } from "@/src/lib/countries/originCountryGuides";
import { OriginCountryGuideGrid } from "@/src/components/guides/OriginCountryGuideGrid";
import { guideShareMetadata } from "@/lib/seo/netherlandsGuideShareMetadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

const SLUG = "eu-vs-non-eu-moving-to-netherlands" as const;

const monetization: PageMonetizationMetadata | undefined =
  NETHERLANDS_GUIDE_PAGE_MONETIZATION[SLUG];

export const metadata = guideShareMetadata("eu-vs-non-eu-moving-to-netherlands");

export default function EuVsNonEuMovingToNetherlandsPage() {
  return (
    <>
      <GuideBySlugPage slug={SLUG} monetization={monetization} />
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
