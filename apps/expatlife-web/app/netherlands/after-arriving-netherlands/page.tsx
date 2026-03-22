import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { guideShareMetadata } from "@/lib/seo/netherlandsGuideShareMetadata";

export const revalidate = 86400;

export const metadata = guideShareMetadata("after-arriving-netherlands");

export default function AfterArrivingNetherlandsPage() {
  return <GuideBySlugPage slug="after-arriving-netherlands" />;
}
