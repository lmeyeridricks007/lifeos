import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { guideShareMetadata } from "@/lib/seo/netherlandsGuideShareMetadata";

export const revalidate = 86400;

export const metadata = guideShareMetadata("first-30-days-netherlands");

export default function First30DaysPage() {
  return <GuideBySlugPage slug="first-30-days-netherlands" />;
}
