import type { Metadata } from "next";
import { GuidePageTemplate } from "@/src/components/guides/GuidePageTemplate";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { ArticleJsonLd, FaqPageJsonLd } from "@/lib/seo/jsonld";
import { DAFT_VISA } from "@/src/content/visas/dutch-american-friendship-treaty";
import { daftToGuideData } from "@/src/lib/visas/visaToGuideData";
import { getSiteOrigin } from "@/lib/site-origin";

export const revalidate = 86400;

const baseUrl = getSiteOrigin();
const data = daftToGuideData(DAFT_VISA);

/** Static metadata only (plain strings) to avoid DataCloneError. */
export const metadata: Metadata = {
  title: String(data.metaTitle ?? data.title),
  description: String(DAFT_VISA.seo.description),
  alternates: { canonical: String(data.path) },
  openGraph: {
    title: String(data.metaTitle ?? data.title),
    description: String(DAFT_VISA.seo.description),
    type: "article",
    url: String(new URL(data.path, baseUrl).toString()),
  },
  twitter: {
    card: "summary_large_image",
    title: String(data.metaTitle ?? data.title),
    description: String(DAFT_VISA.seo.description),
  },
};

const breadcrumbCrumbs = [
  { name: "Home", item: new URL("/", baseUrl).toString() },
  { name: "Netherlands", item: new URL("/netherlands", baseUrl).toString() },
  { name: "Visa", item: new URL("/netherlands/visa", baseUrl).toString() },
  { name: data.breadcrumbLabel ?? data.title, item: new URL(data.path, baseUrl).toString() },
];

export default function DutchAmericanFriendshipTreatyVisaPage() {
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
