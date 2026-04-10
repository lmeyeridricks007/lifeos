import type { Metadata } from "next";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { VisasResidencyView } from "@/src/components/moving/visas-residency/VisasResidencyView";
import {
  PAGE_HERO_SUBTITLE,
  VISAS_RESIDENCY_CANONICAL,
} from "@/src/components/moving/visas-residency/visasResidencyContent";

export const revalidate = CONTENT_REVALIDATE;

const META_TITLE = "Visas & Residency in the Netherlands | ExpatCopilot";
const META_DESCRIPTION = PAGE_HERO_SUBTITLE;

export const metadata: Metadata = {
  ...buildSocialMetadata({
    title: META_TITLE,
    description: META_DESCRIPTION,
    path: VISAS_RESIDENCY_CANONICAL,
    ogType: "article",
  }),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  keywords: [
    "visas and residency Netherlands expat",
    "move to Netherlands work study partner",
    "residence permit Netherlands guide",
    "Netherlands visa route overview",
    "Dutch residency options expats",
  ],
};

export default function NetherlandsMovingVisasResidencyPage() {
  return <VisasResidencyView />;
}
