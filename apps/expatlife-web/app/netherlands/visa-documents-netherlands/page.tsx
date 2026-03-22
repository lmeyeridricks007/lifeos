import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { guideShareMetadata } from "@/lib/seo/netherlandsGuideShareMetadata";

export const revalidate = 86400;

export const metadata = guideShareMetadata("visa-documents-netherlands");

export default function VisaDocumentsPage() {
  return <GuideBySlugPage slug="visa-documents-netherlands" />;
}
