import type { Metadata } from "next";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { LivingTopicPlaceholderView } from "@/src/components/living/LivingTopicPlaceholderView";
import { LIVING_PLACEHOLDER_PAYMENTS } from "@/src/components/living/livingTopicPlaceholders";

export const revalidate = CONTENT_REVALIDATE;

const c = LIVING_PLACEHOLDER_PAYMENTS;

export const metadata: Metadata = {
  ...buildSocialMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path: c.path,
    ogType: "article",
  }),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export default function NetherlandsLivingPaymentsPage() {
  return <LivingTopicPlaceholderView content={c} />;
}
