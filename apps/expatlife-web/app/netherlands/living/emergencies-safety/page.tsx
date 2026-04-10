import type { Metadata } from "next";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { LIVING_EMERGENCIES_SAFETY_PATH } from "@/src/components/living/livingPillarContent";
import { EmergenciesSafetyView } from "@/src/components/living/emergencies-safety/EmergenciesSafetyView";

export const revalidate = CONTENT_REVALIDATE;

const canonical = LIVING_EMERGENCIES_SAFETY_PATH;
const META_TITLE = "Emergencies & Safety in the Netherlands";
const META_DESCRIPTION =
  "A practical guide to what to do in emergencies, urgent situations, and everyday safety moments in the Netherlands, from emergency numbers and urgent care to transport incidents, lost items, and basic preparedness.";

export const metadata: Metadata = {
  ...buildSocialMetadata({
    title: META_TITLE,
    description: META_DESCRIPTION,
    path: canonical,
    ogType: "article",
  }),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  keywords: [
    "emergency number netherlands expat",
    "safety in netherlands expat",
    "urgent care netherlands expat",
    "what to do in emergency netherlands",
    "newcomer safety guide netherlands",
  ],
};

export default function NetherlandsLivingEmergenciesSafetyPage() {
  return <EmergenciesSafetyView />;
}
