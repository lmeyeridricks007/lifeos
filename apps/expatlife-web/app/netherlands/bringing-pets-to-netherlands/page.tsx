import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { guideShareMetadata } from "@/lib/seo/netherlandsGuideShareMetadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

export const metadata = guideShareMetadata("bringing-pets-to-netherlands");

export default function BringingPetsPage() {
  return <GuideBySlugPage slug="bringing-pets-to-netherlands" />;
}
