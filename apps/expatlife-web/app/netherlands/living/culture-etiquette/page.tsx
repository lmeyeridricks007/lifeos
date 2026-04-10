import type { Metadata } from "next";
import { CultureEtiquetteView } from "@/src/components/living/culture-etiquette/CultureEtiquetteView";
import { LIVING_CULTURE_ETIQUETTE_PATH } from "@/src/components/living/livingPillarContent";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { buildSocialMetadata } from "@/lib/seo/metadata";

export const revalidate = CONTENT_REVALIDATE;

const canonical = LIVING_CULTURE_ETIQUETTE_PATH;

const META_TITLE = "Dutch Culture & Etiquette | ExpatCopilot";
const META_DESCRIPTION =
  "A practical guide to everyday Dutch social norms — from direct communication and invitations to work culture, neighbors, birthdays, and the small habits that often surprise newcomers.";

export const metadata: Metadata = {
  ...buildSocialMetadata({
    title: META_TITLE,
    description: META_DESCRIPTION,
    path: canonical,
    ogType: "article",
    absoluteTitle: true,
  }),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  keywords: [
    "dutch culture for expats",
    "dutch etiquette guide",
    "directness netherlands expat",
    "social norms netherlands",
    "dutch work culture basics",
    "living in the netherlands culture guide",
  ],
};

export default function NetherlandsLivingCultureEtiquettePage() {
  return <CultureEtiquetteView />;
}
