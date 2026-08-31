import type { Metadata } from "next";
import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import {
  INBURGERING_PATH,
  INTEGRATION_TOOLS_PATH,
  LONG_TERM_STAY_CLUSTER_PUBLISH_DATE,
} from "@/src/components/moving/long-term-stay-cluster/longTermStayClusterPaths";

const SLUG = "inburgering-netherlands";

export const revalidate = CONTENT_REVALIDATE;

export const metadata: Metadata = buildSocialMetadata({
  title: "Inburgering in the Netherlands: HSM, Wi 2021, B1 & KNM (2025)",
  description:
    "Do you have to inburgeren on HSM? Wet inburgering 2021 / B1 default, KNM changes from 1 July 2025, and DUO vs IND roles. Orientation only — confirm on official portals.",
  path: INBURGERING_PATH,
  ogType: "article",
  publishGate: { publish: true, publishDate: LONG_TERM_STAY_CLUSTER_PUBLISH_DATE },
});

export default function InburgeringNetherlandsPage() {
  return (
    <GuideBySlugPage
      slug={SLUG}
      breadcrumbMiddle={[{ name: "Integration", href: INTEGRATION_TOOLS_PATH }]}
    />
  );
}
