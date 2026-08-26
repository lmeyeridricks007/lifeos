import type { Metadata } from "next";
import { pageMetadataTitle } from "@/lib/seo/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { ArticleJsonLd, WebPageJsonLd } from "@/lib/seo/jsonld";
import { getSiteOrigin } from "@/lib/site-origin";
import { TaxesHubView } from "@/src/components/taxes/TaxesHubView";
import { taxesHubPage } from "@/src/components/taxes/taxesHubPageModel";

export const revalidate = CONTENT_REVALIDATE;

const baseUrl = getSiteOrigin();
const { path, seo, publishDate, hero } = taxesHubPage;

export const metadata: Metadata = {
  title: pageMetadataTitle(seo.title),
  description: seo.description,
  keywords: [...seo.keywords],
  alternates: { canonical: path },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: "article",
    url: new URL(path, baseUrl).toString(),
    images: [{ url: hero.image.src, alt: hero.image.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [hero.image.src],
  },
};

export default function NetherlandsTaxesHubPage() {
  return (
    <>
      <WebPageJsonLd name={hero.pageTitle} description={seo.description} urlPath={path} datePublished={publishDate} />
      <ArticleJsonLd headline={hero.pageTitle} description={seo.description} dateModified={publishDate} urlPath={path} />
      <TaxesHubView />
    </>
  );
}
