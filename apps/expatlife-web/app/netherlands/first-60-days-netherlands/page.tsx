import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { NETHERLANDS_GUIDE_PAGE_MONETIZATION } from "@/src/lib/monetization/netherlandsGuideMonetizationRegistry";
import type { PageMonetizationMetadata } from "@/src/lib/monetization/pageMonetizationMetadata";
import { guideShareMetadata } from "@/lib/seo/netherlandsGuideShareMetadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;
const SLUG = "first-60-days-netherlands" as const;

const monetization: PageMonetizationMetadata | undefined =
  NETHERLANDS_GUIDE_PAGE_MONETIZATION[SLUG];


export const metadata = guideShareMetadata("first-60-days-netherlands");

export default function First60DaysPage() {
  return <GuideBySlugPage slug={SLUG} monetization={monetization} />;
}
