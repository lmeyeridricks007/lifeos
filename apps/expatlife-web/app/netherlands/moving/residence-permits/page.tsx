import type { Metadata } from "next";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { ResidencePermitsView } from "@/src/components/moving/residence-permits/ResidencePermitsView";
import { PAGE_HERO_SUBTITLE, RESIDENCE_PERMITS_CANONICAL } from "@/src/components/moving/residence-permits/residencePermitsContent";

export const revalidate = CONTENT_REVALIDATE;

/** Short title only — root layout applies `%s | ExpatCopilot`. */
const META_TITLE = "Residence Permits in the Netherlands";
const META_DESCRIPTION = PAGE_HERO_SUBTITLE;

export const metadata: Metadata = {
  ...buildSocialMetadata({
    title: META_TITLE,
    description: META_DESCRIPTION,
    path: RESIDENCE_PERMITS_CANONICAL,
    ogType: "article",
  }),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  keywords: [
    "residence permit Netherlands expat",
    "dutch residence permit guide",
    "netherlands residence permit work study family",
    "moving to netherlands residence permit",
    "residence permit netherlands practical guide",
  ],
};

export default function NetherlandsMovingResidencePermitsPage() {
  return <ResidencePermitsView />;
}
