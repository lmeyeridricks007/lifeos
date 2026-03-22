import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { guideShareMetadata } from "@/lib/seo/netherlandsGuideShareMetadata";

export const revalidate = 86400;

export const metadata = guideShareMetadata("municipality-registration-netherlands");

export default function MunicipalityRegistrationNetherlandsPage() {
  return <GuideBySlugPage slug="municipality-registration-netherlands" />;
}
