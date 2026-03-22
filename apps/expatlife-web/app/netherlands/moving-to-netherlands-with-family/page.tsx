import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { guideShareMetadata } from "@/lib/seo/netherlandsGuideShareMetadata";

export const revalidate = 86400;

export const metadata = guideShareMetadata("moving-to-netherlands-with-family");

export default function MovingToNetherlandsWithFamilyPage() {
  return <GuideBySlugPage slug="moving-to-netherlands-with-family" />;
}
