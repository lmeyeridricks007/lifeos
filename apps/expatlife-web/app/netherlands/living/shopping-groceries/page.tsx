import type { Metadata } from "next";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { LIVING_SHOPPING_GROCERIES_PATH } from "@/src/components/living/livingPillarContent";
import { ShoppingGroceriesView } from "@/src/components/living/shopping-groceries/ShoppingGroceriesView";

export const revalidate = CONTENT_REVALIDATE;

const canonical = LIVING_SHOPPING_GROCERIES_PATH;
const META_TITLE = "Shopping & Groceries in the Netherlands";
const META_DESCRIPTION =
  "A practical guide to how grocery shopping, supermarket habits, self-checkout, household buying, deliveries, and everyday errands actually work in the Netherlands.";

export const metadata: Metadata = {
  ...buildSocialMetadata({
    title: META_TITLE,
    description: META_DESCRIPTION,
    path: canonical,
    ogType: "article",
  }),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  keywords: [
    "grocery shopping netherlands expat",
    "supermarkets in netherlands guide",
    "daily shopping netherlands expat",
    "self checkout netherlands",
    "shopping and groceries netherlands guide",
  ],
};

export default function NetherlandsLivingShoppingGroceriesPage() {
  return <ShoppingGroceriesView />;
}
