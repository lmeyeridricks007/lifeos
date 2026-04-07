import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { NETHERLANDS_GUIDE_PAGE_MONETIZATION } from "@/src/lib/monetization/netherlandsGuideMonetizationRegistry";
import type { PageMonetizationMetadata } from "@/src/lib/monetization/pageMonetizationMetadata";
import { Container } from "@/components/ui/container";
import { getFeaturedOriginCountryGuides } from "@/src/lib/countries/originCountryGuides";
import { OriginCountryGuideGrid } from "@/src/components/guides/OriginCountryGuideGrid";
import { guideShareMetadata } from "@/lib/seo/netherlandsGuideShareMetadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

const SLUG = "first-90-days-netherlands" as const;

const monetization: PageMonetizationMetadata | undefined =
  NETHERLANDS_GUIDE_PAGE_MONETIZATION[SLUG];

export const metadata = guideShareMetadata("first-90-days-netherlands");

export default function First90DaysPage() {
  return (
    <>
      <GuideBySlugPage slug={SLUG} monetization={monetization} />
      <Container className="py-8">
        <OriginCountryGuideGrid
          title="Moving from South Africa, India, the US, the UK, or another country?"
          intro="Start with your country-specific guide for origin-based planning notes and first-step priorities."
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
