import type { Metadata } from "next";
import { ClusterPillarHub } from "@/src/components/content/ClusterPillarHub";
import { LIVING_PILLAR_HUB_CONFIG } from "@/src/components/content/livingCulturePillarHubData";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

export const metadata: Metadata = buildSocialMetadata({
  title: LIVING_PILLAR_HUB_CONFIG.jsonLd.headline,
  description: LIVING_PILLAR_HUB_CONFIG.jsonLd.description,
  path: LIVING_PILLAR_HUB_CONFIG.jsonLd.canonicalPath,
  ogType: "article",
});

export default function NetherlandsLivingHubPage() {
  return <ClusterPillarHub config={LIVING_PILLAR_HUB_CONFIG} />;
}
