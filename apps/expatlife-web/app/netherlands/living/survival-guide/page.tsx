import type { Metadata } from "next";
import { absoluteUrlFromPath } from "@/lib/seo/metadata";
import { SurvivalGuideView } from "@/src/components/living/survival-guide/SurvivalGuideView";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { pageMetadataTitle, sharePreviewTitle } from "@/lib/seo/metadata";

export const revalidate = CONTENT_REVALIDATE;

const canonical = "/netherlands/living/survival-guide";

const META_TITLE = "Netherlands Survival Guide for Expats";
const META_DESCRIPTION =
  "First-weeks field guide for expats in the Netherlands: OV and bike defaults, must-have apps, PIN-first payments, groceries, weather, and a bookmarkable arrival sequence.";
const SHARE_TITLE = sharePreviewTitle(META_TITLE);

export const metadata: Metadata = {
  title: pageMetadataTitle(META_TITLE),
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
    title: SHARE_TITLE,
    description: META_DESCRIPTION,
    url: absoluteUrlFromPath(canonical),
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: SHARE_TITLE,
    description: META_DESCRIPTION,
  },
};

export default function NetherlandsLivingSurvivalGuidePage() {
  return <SurvivalGuideView />;
}
