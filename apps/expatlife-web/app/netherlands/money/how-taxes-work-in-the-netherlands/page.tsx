import type { Metadata } from "next";
import { absoluteUrlFromPath,  pageMetadataTitle } from "@/lib/seo/metadata";
import { HowTaxesWorkNlView } from "@/src/components/money/how-taxes-work-nl/HowTaxesWorkNlView";
import { howTaxesWorkNlPageModel } from "@/src/components/money/how-taxes-work-nl/howTaxesWorkNlPageModel";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { WebPageJsonLd } from "@/lib/seo/jsonld";
import { getSiteOrigin } from "@/lib/site-origin";

const baseUrl = getSiteOrigin();
const { path, seo, publishDate, hero, ogImage } = howTaxesWorkNlPageModel;
const ogImageUrl = new URL(ogImage.src, baseUrl).toString();

export const metadata: Metadata = {
  title: pageMetadataTitle(seo.title),
  description: seo.description,
  keywords: [...seo.keywords],
  robots: { index: true, follow: true },
  alternates: { canonical: absoluteUrlFromPath(path)},
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: "article",
    url: absoluteUrlFromPath(path),
    publishedTime: publishDate,
    modifiedTime: publishDate,
    images: [
      {
        url: ogImageUrl,
        width: ogImage.width,
        height: ogImage.height,
        alt: ogImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [ogImageUrl],
  },
};

export const revalidate = CONTENT_REVALIDATE;

export default function HowTaxesWorkInTheNetherlandsPage() {
  return (
    <>
      <WebPageJsonLd name={hero.pageTitle} description={seo.description} urlPath={path} datePublished={publishDate} />
      <HowTaxesWorkNlView />
    </>
  );
}
