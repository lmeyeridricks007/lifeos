import type { Metadata } from "next";
import { GuideBySlugPage } from "@/src/components/guides/GuideBySlugPage";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { LONG_TERM_STAY_CLUSTER_PUBLISH_DATE } from "@/src/components/moving/long-term-stay-cluster/longTermStayClusterPaths";

const SLUG = "permanent-residence-netherlands";
const PATH = "/netherlands/citizenship/permanent-residence/";

export const revalidate = CONTENT_REVALIDATE;

export const metadata: Metadata = buildSocialMetadata({
  title: "Permanent Residence in the Netherlands: HSM, 5 Years & IND Next Steps",
  description:
    "Permanent residence after HSM or other lawful stay: five-year path, inburgering vs exemption, job changes near year five, and what PR is not (citizenship). Orientation only — confirm on IND.",
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
