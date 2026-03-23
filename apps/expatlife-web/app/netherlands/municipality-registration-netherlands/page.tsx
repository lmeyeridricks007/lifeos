import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { guideShareMetadata } from "@/lib/seo/netherlandsGuideShareMetadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

export const metadata = guideShareMetadata("municipality-registration-netherlands");

export default function MunicipalityRegistrationNetherlandsPage() {
  return <GuideBySlugPage slug="municipality-registration-netherlands" />;
}
