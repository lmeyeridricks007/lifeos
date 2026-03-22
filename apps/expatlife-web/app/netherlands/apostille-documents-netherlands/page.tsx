import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { guideShareMetadata } from "@/lib/seo/netherlandsGuideShareMetadata";

export const revalidate = 86400;

export const metadata = guideShareMetadata("apostille-documents-netherlands");

export default function ApostilleDocumentsNetherlandsPage() {
  return <GuideBySlugPage slug="apostille-documents-netherlands" />;
}
