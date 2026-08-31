import type { Metadata } from "next";
import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import {
  DUTCH_CITIZENSHIP_PATH,
  LONG_TERM_STAY_CLUSTER_PUBLISH_DATE,
  PERMANENT_RESIDENCE_PATH,
} from "@/src/components/moving/long-term-stay-cluster/longTermStayClusterPaths";

const SLUG = "dutch-citizenship-netherlands";

export const revalidate = CONTENT_REVALIDATE;

export const metadata: Metadata = buildSocialMetadata({
  title: "Dutch Citizenship for Expats: Naturalisation vs Option & Dual Nationality",
  description:
    "Naturalisation vs option, dual nationality caveats, and what inburgering unlocks for Dutch citizenship. Orientation only — confirm on IND and government.nl.",
  path: DUTCH_CITIZENSHIP_PATH,
  ogType: "article",
  publishGate: { publish: true, publishDate: LONG_TERM_STAY_CLUSTER_PUBLISH_DATE },
});

export default function DutchCitizenshipNetherlandsPage() {
  return (
    <GuideBySlugPage
      slug={SLUG}
      breadcrumbMiddle={[{ name: "Permanent residence", href: PERMANENT_RESIDENCE_PATH }]}
    />
  );
}
