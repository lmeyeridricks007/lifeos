import type { Metadata } from "next";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { LanguageView } from "@/src/components/living/language/LanguageView";
import { LIVING_LANGUAGE_PATH } from "@/src/components/living/livingPillarContent";

export const revalidate = CONTENT_REVALIDATE;

const canonical = LIVING_LANGUAGE_PATH;
const META_TITLE = "Language & Phrases for Life in the Netherlands";
const META_DESCRIPTION =
  "The practical Dutch layer that helps newcomers handle shops, transport, cafes, work, neighbors, and everyday errands with less friction and more confidence.";

export const metadata: Metadata = {
  ...buildSocialMetadata({
    title: META_TITLE,
    description: META_DESCRIPTION,
    path: canonical,
    ogType: "article",
  }),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  keywords: [
    "dutch phrases for expats",
    "do i need dutch in the netherlands",
    "useful dutch phrases daily life",
    "language guide netherlands expat",
    "english vs dutch netherlands",
  ],
};

export default function NetherlandsLivingLanguagePage() {
  return <LanguageView />;
}
