import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { guideShareMetadata } from "@/lib/seo/netherlandsGuideShareMetadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

export const metadata = guideShareMetadata("shipping-household-goods-netherlands");

export default function ShippingHouseholdGoodsPage() {
  return <GuideBySlugPage slug="shipping-household-goods-netherlands" />;
}
