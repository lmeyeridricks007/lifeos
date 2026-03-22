import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { guideShareMetadata } from "@/lib/seo/netherlandsGuideShareMetadata";

export const revalidate = 86400;

export const metadata = guideShareMetadata("health-insurance-netherlands");

export default function HealthInsuranceNetherlandsPage() {
  return <GuideBySlugPage slug="health-insurance-netherlands" />;
}
