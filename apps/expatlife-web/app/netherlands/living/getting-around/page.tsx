import type { Metadata } from "next";
import { GettingAroundView } from "@/src/components/living/getting-around/GettingAroundView";
import { LIVING_GETTING_AROUND_PATH } from "@/src/components/living/livingPillarContent";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

const canonical = LIVING_GETTING_AROUND_PATH;

const META_TITLE = "Getting Around in the Netherlands | ExpatCopilot";
const META_DESCRIPTION =
  "Practical Dutch transport: NS, 9292, OVpay, tap-in discipline, trains and local transit, bikes, commuting reality, and FAQs—standalone guide for newcomers.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical },
  keywords: [
    "getting around in the netherlands",
    "netherlands transport guide expat",
    "how public transport works netherlands",
    "best apps for transport in netherlands",
    "commuting in the netherlands expat",
    "can i use bank card on dutch transport",
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

export default function NetherlandsLivingGettingAroundPage() {
  return <GettingAroundView />;
}
