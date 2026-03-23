import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { guideShareMetadata } from "@/lib/seo/netherlandsGuideShareMetadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

export const metadata = guideShareMetadata("moving-to-netherlands-steps");

export default function MovingToNetherlandsStepsPage() {
  return <GuideBySlugPage slug="moving-to-netherlands-steps" />;
}
