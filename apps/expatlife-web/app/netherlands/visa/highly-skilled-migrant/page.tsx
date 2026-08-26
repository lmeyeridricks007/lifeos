import type { Metadata } from "next";
import { GuidePageTemplate } from "@/src/components/guides/GuidePageTemplate";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { ArticleJsonLd, FaqPageJsonLd } from "@/lib/seo/jsonld";
import { HIGHLY_SKILLED_MIGRANT_VISA } from "@/src/content/visas/highly-skilled-migrant";
import { highlySkilledMigrantToGuideData } from "@/src/lib/visas/visaToGuideData";
import { getSiteOrigin } from "@/lib/site-origin";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { getVisasResidencyInstructionalFigure } from "@/src/components/moving/visas-residency-cluster/visasResidencyInstructionalRasterAssets";
import { HSM_JOB_LOSS_CLUSTER_PUBLISH_DATE } from "@/src/components/moving/work-permits-job-changes-cluster/hsmJobLossClusterPaths";

export const revalidate = CONTENT_REVALIDATE;

const baseUrl = getSiteOrigin();
const data = highlySkilledMigrantToGuideData(HIGHLY_SKILLED_MIGRANT_VISA);

export const metadata: Metadata = buildSocialMetadata({
  title: String(data.metaTitle ?? data.title),
  description: String(HIGHLY_SKILLED_MIGRANT_VISA.seo.description),
  path: data.path,
  ogType: "article",
  publishGate: { publish: true, publishDate: HSM_JOB_LOSS_CLUSTER_PUBLISH_DATE },
});

const breadcrumbCrumbs = [
  { name: "Home", item: new URL("/", baseUrl).toString() },
  { name: "Netherlands", item: new URL("/netherlands", baseUrl).toString() },
  { name: "Visa", item: new URL("/netherlands/visa", baseUrl).toString() },
  { name: data.breadcrumbLabel ?? data.title, item: new URL(data.path, baseUrl).toString() },
];

export default function HighlySkilledMigrantVisaPage() {
  const serializableData = JSON.parse(JSON.stringify(data));
  const canonicalUrl = new URL(data.path.startsWith("/") ? data.path : `/${data.path}`, baseUrl).toString();

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <ArticleJsonLd
        headline={data.title}
        description={data.description}
        dateModified="2026-08-26"
        urlPath={data.path}
      />
      {data.faq?.length ? <FaqPageJsonLd items={data.faq} /> : null}
      <GuidePageTemplate
        data={serializableData}
        affiliateBlocks={{}}
        canonicalUrl={canonicalUrl}
        planningInstructionalFigure={getVisasResidencyInstructionalFigure(HIGHLY_SKILLED_MIGRANT_VISA.slug)}
      />
    </>
  );
}
