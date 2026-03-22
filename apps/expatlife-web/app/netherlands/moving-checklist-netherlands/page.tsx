import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { guideShareMetadata } from "@/lib/seo/netherlandsGuideShareMetadata";

export const revalidate = 86400;

export const metadata = guideShareMetadata("moving-checklist-netherlands");

export default function MovingChecklistPage() {
  return <GuideBySlugPage slug="moving-checklist-netherlands" />;
}
