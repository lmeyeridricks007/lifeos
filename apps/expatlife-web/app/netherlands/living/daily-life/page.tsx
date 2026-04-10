import type { Metadata } from "next";
import { DailyLifeView } from "@/src/components/living/daily-life/DailyLifeView";
import { LIVING_DAILY_LIFE_PATH } from "@/src/components/living/livingPillarContent";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { buildSocialMetadata } from "@/lib/seo/metadata";

export const revalidate = CONTENT_REVALIDATE;

const canonical = LIVING_DAILY_LIFE_PATH;

const SHORT_TITLE = "Daily Life Basics in the Netherlands";
const META_DESCRIPTION =
  "Groceries, shop hours, paying by card or phone, parcels, and everyday habits for people new to the Netherlands—clear and practical.";

export const metadata: Metadata = {
  ...buildSocialMetadata({
    title: SHORT_TITLE,
    description: META_DESCRIPTION,
    path: canonical,
    ogType: "article",
  }),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  keywords: [
    "daily life in netherlands expat",
    "everyday life netherlands guide",
    "groceries payments shopping netherlands expat",
    "dutch daily life basics",
    "living in netherlands everyday guide",
  ],
};

export default function NetherlandsLivingDailyLifePage() {
  return <DailyLifeView />;
}
