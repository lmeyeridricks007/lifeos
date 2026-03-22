import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { guideShareMetadata } from "@/lib/seo/netherlandsGuideShareMetadata";

export const revalidate = 86400;

export const metadata = guideShareMetadata("bringing-pets-to-netherlands");

export default function BringingPetsPage() {
  return <GuideBySlugPage slug="bringing-pets-to-netherlands" />;
}
