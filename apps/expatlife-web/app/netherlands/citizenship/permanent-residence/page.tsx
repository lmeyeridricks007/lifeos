import type { Metadata } from "next";
import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { LONG_TERM_STAY_CLUSTER_PUBLISH_DATE } from "@/src/components/moving/long-term-stay-cluster/longTermStayClusterPaths";

const SLUG = "permanent-residence-netherlands";
const PATH = "/netherlands/citizenship/permanent-residence/";

export const revalidate = CONTENT_REVALIDATE;

export const metadata: Metadata = buildSocialMetadata({
  title: "Permanent Residence in the Netherlands: Routes, Requirements & Next Steps",
  description:
    "A practical guide to permanent residence in the Netherlands for expats: EU long-term resident status, Dutch permanent residence, typical residence periods, and official next steps.",
  path: PATH,
  ogType: "article",
  publishGate: { publish: true, publishDate: LONG_TERM_STAY_CLUSTER_PUBLISH_DATE },
});

export default function PermanentResidenceNetherlandsPage() {
  return (
    <GuideBySlugPage
      slug={SLUG}
      breadcrumbMiddle={[
        { name: "Residence permits", href: "/netherlands/moving/residence-permits/" },
      ]}
    />
  );
}
