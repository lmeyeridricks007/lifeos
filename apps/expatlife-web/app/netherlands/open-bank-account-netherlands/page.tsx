import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { guideShareMetadata } from "@/lib/seo/netherlandsGuideShareMetadata";

export const revalidate = 86400;

export const metadata = guideShareMetadata("open-bank-account-netherlands");

export default function OpenBankAccountNetherlandsPage() {
  return <GuideBySlugPage slug="open-bank-account-netherlands" />;
}
