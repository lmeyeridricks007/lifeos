import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { guideShareMetadata } from "@/lib/seo/netherlandsGuideShareMetadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

export const metadata = guideShareMetadata("move-to-netherlands-without-job");

export default function MoveToNetherlandsWithoutJobPage() {
  return <GuideBySlugPage slug="move-to-netherlands-without-job" />;
}
