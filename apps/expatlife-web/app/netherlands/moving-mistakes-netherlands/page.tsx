import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { guideShareMetadata } from "@/lib/seo/netherlandsGuideShareMetadata";

export const revalidate = 86400;

export const metadata = guideShareMetadata("moving-mistakes-netherlands");

export default function MovingMistakesPage() {
  return <GuideBySlugPage slug="moving-mistakes-netherlands" />;
}
