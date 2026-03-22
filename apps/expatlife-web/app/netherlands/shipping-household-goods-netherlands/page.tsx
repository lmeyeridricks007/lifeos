import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { guideShareMetadata } from "@/lib/seo/netherlandsGuideShareMetadata";

export const revalidate = 86400;

export const metadata = guideShareMetadata("shipping-household-goods-netherlands");

export default function ShippingHouseholdGoodsPage() {
  return <GuideBySlugPage slug="shipping-household-goods-netherlands" />;
}
