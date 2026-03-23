import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { guideShareMetadata } from "@/lib/seo/netherlandsGuideShareMetadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

export const metadata = guideShareMetadata("health-insurance-netherlands");

export default function HealthInsuranceNetherlandsPage() {
  return <GuideBySlugPage slug="health-insurance-netherlands" />;
}
