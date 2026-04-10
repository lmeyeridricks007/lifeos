import type { Metadata } from "next";
import { EssentialAppsView } from "@/src/components/living/essential-apps/EssentialAppsView";
import { LIVING_ESSENTIAL_APPS_PATH } from "@/src/components/living/livingPillarContent";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

const canonical = LIVING_ESSENTIAL_APPS_PATH;

const META_TITLE = "Essential Apps for Life in the Netherlands | ExpatCopilot";
const META_DESCRIPTION =
  "Curated apps for Dutch daily life: OV, bank + Tikkie, groceries, delivery, rain radar, and chat—install order for your first days and weeks in the Netherlands.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical },
  keywords: [
    "best apps for netherlands expats",
    "essential apps netherlands",
    "apps you need in the netherlands",
    "dutch transport payment grocery apps",
    "expat daily life apps netherlands",
    "tikkie netherlands app",
    "9292 ns ovpay apps",
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

export default function NetherlandsLivingAppsPage() {
  return <EssentialAppsView />;
}
