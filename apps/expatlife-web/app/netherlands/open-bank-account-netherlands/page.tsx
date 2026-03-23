import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { guideShareMetadata } from "@/lib/seo/netherlandsGuideShareMetadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

export const metadata = guideShareMetadata("open-bank-account-netherlands");

export default function OpenBankAccountNetherlandsPage() {
  return <GuideBySlugPage slug="open-bank-account-netherlands" />;
}
