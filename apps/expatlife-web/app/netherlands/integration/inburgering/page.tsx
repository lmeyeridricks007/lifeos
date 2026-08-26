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
  title: "Inburgering in the Netherlands: Requirements, Exams & Planning for Expats",
  description:
    "A practical guide to inburgering in the Netherlands for expats: who may need integration, language and KNM exams, and planning tools.",
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
