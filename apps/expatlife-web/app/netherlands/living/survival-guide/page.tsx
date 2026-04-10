import type { Metadata } from "next";
import { SurvivalGuideView } from "@/src/components/living/survival-guide/SurvivalGuideView";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

const canonical = "/netherlands/living/survival-guide/";

const META_TITLE = "Netherlands Survival Guide for Expats | ExpatCopilot";
const META_DESCRIPTION =
  "Practical Netherlands survival guide for expats: OV and bike defaults, apps, PIN-first payments, groceries, weather, and first-week sequencing you can bookmark.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical },
  keywords: [
    "Netherlands survival guide expat",
    "living in the Netherlands guide",
    "daily life Netherlands expat",
    "apps needed in Netherlands",
    "getting around in Netherlands",
    "expat daily life Netherlands",
  ],
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: canonical,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
  },
};

export default function NetherlandsLivingSurvivalGuidePage() {
  return <SurvivalGuideView />;
}
