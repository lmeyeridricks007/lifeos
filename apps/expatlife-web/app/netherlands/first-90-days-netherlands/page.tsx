import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { Container } from "@/components/ui/container";
import { getFeaturedOriginCountryGuides } from "@/src/lib/countries/originCountryGuides";
import { OriginCountryGuideGrid } from "@/src/components/guides/OriginCountryGuideGrid";
import { guideShareMetadata } from "@/lib/seo/netherlandsGuideShareMetadata";

export const revalidate = 86400;

export const metadata = guideShareMetadata("first-90-days-netherlands");

export default function First90DaysPage() {
  return (
    <>
      <GuideBySlugPage slug="first-90-days-netherlands" />
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
