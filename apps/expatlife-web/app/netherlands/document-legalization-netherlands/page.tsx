import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { guideShareMetadata } from "@/lib/seo/netherlandsGuideShareMetadata";

export const revalidate = 86400;

export const metadata = guideShareMetadata("document-legalization-netherlands");

export default function DocumentLegalizationPage() {
  return <GuideBySlugPage slug="document-legalization-netherlands" />;
}
