import type { Metadata } from "next";
import { GuidePageTemplate } from "@/src/components/guides/GuidePageTemplate";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { ArticleJsonLd, FaqPageJsonLd } from "@/lib/seo/jsonld";
import { PARTNER_FAMILY_VISA } from "@/src/content/visas/partner-family-visa";
import { partnerFamilyToGuideData } from "@/src/lib/visas/visaToGuideData";
import { getSiteOrigin } from "@/lib/site-origin";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

const baseUrl = getSiteOrigin();
const data = partnerFamilyToGuideData(PARTNER_FAMILY_VISA);

/** Static metadata only (plain strings) to avoid DataCloneError. */
export const metadata: Metadata = {
  title: String(data.metaTitle ?? data.title),
  description: String(PARTNER_FAMILY_VISA.seo.description),
  alternates: { canonical: String(data.path) },
  openGraph: {
    title: String(data.metaTitle ?? data.title),
    description: String(PARTNER_FAMILY_VISA.seo.description),
    type: "article",
    url: String(new URL(data.path, baseUrl).toString()),
  },
  twitter: {
    card: "summary_large_image",
    title: String(data.metaTitle ?? data.title),
    description: String(PARTNER_FAMILY_VISA.seo.description),
  },
};

const breadcrumbCrumbs = [
  { name: "Home", item: new URL("/", baseUrl).toString() },
  { name: "Netherlands", item: new URL("/netherlands", baseUrl).toString() },
  { name: "Visa", item: new URL("/netherlands/visa", baseUrl).toString() },
  { name: data.breadcrumbLabel ?? data.title, item: new URL(data.path, baseUrl).toString() },
];

export default function PartnerFamilyVisaPage() {
  const serializableData = JSON.parse(JSON.stringify(data));
  const canonicalUrl = new URL(data.path.startsWith("/") ? data.path : `/${data.path}`, baseUrl).toString();

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <ArticleJsonLd
        headline={data.title}
        description={data.description}
        dateModified={new Date().toISOString().slice(0, 10)}
        urlPath={data.path}
      />
      {data.faq?.length ? <FaqPageJsonLd items={data.faq} /> : null}
      <GuidePageTemplate
        data={serializableData}
        affiliateBlocks={{}}
        canonicalUrl={canonicalUrl}
      />
    </>
  );
}
