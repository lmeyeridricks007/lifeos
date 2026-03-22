import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { guideShareMetadata } from "@/lib/seo/netherlandsGuideShareMetadata";

export const revalidate = 86400;

export const metadata = guideShareMetadata("moving-documents-checklist");

export default function MovingDocumentsChecklistPage() {
  return <GuideBySlugPage slug="moving-documents-checklist" />;
}
