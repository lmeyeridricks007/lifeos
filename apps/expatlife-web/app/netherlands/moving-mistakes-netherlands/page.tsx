import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { NETHERLANDS_GUIDE_PAGE_MONETIZATION } from "@/src/lib/monetization/netherlandsGuideMonetizationRegistry";
import type { PageMonetizationMetadata } from "@/src/lib/monetization/pageMonetizationMetadata";
import { guideShareMetadata } from "@/lib/seo/netherlandsGuideShareMetadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;
const SLUG = "moving-mistakes-netherlands" as const;

const monetization: PageMonetizationMetadata | undefined =
  NETHERLANDS_GUIDE_PAGE_MONETIZATION[SLUG];


export const metadata = guideShareMetadata("moving-mistakes-netherlands");

export default function MovingMistakesPage() {
  return <GuideBySlugPage slug={SLUG} monetization={monetization} />;
}
