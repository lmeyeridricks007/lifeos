import type { Metadata } from "next";
import { absoluteUrlFromPath } from "@/lib/seo/metadata";
import { GuidePageTemplate } from "@/src/components/guides/GuidePageTemplate";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { ArticleJsonLd, FaqPageJsonLd } from "@/lib/seo/jsonld";
import {
  ORIENTATION_YEAR_CONTENT_DATE_MODIFIED,
  ORIENTATION_YEAR_VISA,
} from "@/src/content/visas/orientation-year";
import { orientationYearToGuideData } from "@/src/lib/visas/orientationYearToGuideData";
import { getSiteOrigin } from "@/lib/site-origin";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { getVisasResidencyInstructionalFigure } from "@/src/components/moving/visas-residency-cluster/visasResidencyInstructionalRasterAssets";

export const revalidate = CONTENT_REVALIDATE;

const baseUrl = getSiteOrigin();
const data = orientationYearToGuideData(ORIENTATION_YEAR_VISA);

/** Static metadata only (plain strings) to avoid DataCloneError. */
export const metadata: Metadata = {
  title: String(data.metaTitle ?? data.title),
  description: String(ORIENTATION_YEAR_VISA.seo.description),
  alternates: { canonical: absoluteUrlFromPath(String(data.path)) },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: String(data.metaTitle ?? data.title),
    description: String(ORIENTATION_YEAR_VISA.seo.description),
    type: "article",
    url: String(new URL(data.path, baseUrl).toString()),
  },
  twitter: {
    card: "summary_large_image",
    title: String(data.metaTitle ?? data.title),
    description: String(ORIENTATION_YEAR_VISA.seo.description),
  },
};

const breadcrumbCrumbs = [
  { name: "Home", item: new URL("/", baseUrl).toString() },
  { name: "Netherlands", item: absoluteUrlFromPath("/netherlands") },
  { name: "Visa", item: absoluteUrlFromPath("/netherlands/visa") },
  { name: data.breadcrumbLabel ?? data.title, item: new URL(data.path, baseUrl).toString() },
];

export default function OrientationYearVisaPage() {
  const serializableData = JSON.parse(JSON.stringify(data));
  const canonicalUrl = new URL(data.path.startsWith("/") ? data.path : `/${data.path}`, baseUrl).toString();

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <ArticleJsonLd
        headline={data.title}
        description={data.description}
        dateModified={ORIENTATION_YEAR_CONTENT_DATE_MODIFIED}
        urlPath={data.path}
      />
      {data.faq?.length ? <FaqPageJsonLd items={data.faq} /> : null}
      <GuidePageTemplate
        data={serializableData}
        affiliateBlocks={{}}
        canonicalUrl={canonicalUrl}
        planningInstructionalFigure={
          getVisasResidencyInstructionalFigure(ORIENTATION_YEAR_VISA.slug) ??
          getVisasResidencyInstructionalFigure("status-changes")
        }
      />
    </>
  );
}
