import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { guideShareMetadata } from "@/lib/seo/netherlandsGuideShareMetadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

export const metadata = guideShareMetadata("document-legalization-netherlands");

export default function DocumentLegalizationPage() {
  return <GuideBySlugPage slug="document-legalization-netherlands" />;
}
