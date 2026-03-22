import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { guideShareMetadata } from "@/lib/seo/netherlandsGuideShareMetadata";

export const revalidate = 86400;

export const metadata = guideShareMetadata("first-60-days-netherlands");

export default function First60DaysPage() {
  return <GuideBySlugPage slug="first-60-days-netherlands" />;
}
