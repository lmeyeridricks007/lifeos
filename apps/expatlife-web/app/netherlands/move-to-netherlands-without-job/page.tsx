import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { guideShareMetadata } from "@/lib/seo/netherlandsGuideShareMetadata";

export const revalidate = 86400;

export const metadata = guideShareMetadata("move-to-netherlands-without-job");

export default function MoveToNetherlandsWithoutJobPage() {
  return <GuideBySlugPage slug="move-to-netherlands-without-job" />;
}
