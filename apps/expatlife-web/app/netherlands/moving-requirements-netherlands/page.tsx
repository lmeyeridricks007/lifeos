import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { guideShareMetadata } from "@/lib/seo/netherlandsGuideShareMetadata";

export const revalidate = 86400;

export const metadata = guideShareMetadata("moving-requirements-netherlands");

export default function MovingRequirementsPage() {
  return <GuideBySlugPage slug="moving-requirements-netherlands" />;
}
