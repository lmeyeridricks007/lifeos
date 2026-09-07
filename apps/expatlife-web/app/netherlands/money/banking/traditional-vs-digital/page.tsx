import type { Metadata } from "next";
import { absoluteUrlFromPath,  pageMetadataTitle } from "@/lib/seo/metadata";
import { TraditionalVsDigitalBanksView } from "@/src/components/money/traditional-vs-digital-banks/TraditionalVsDigitalBanksView";
import { traditionalVsDigitalBanksPageModel } from "@/src/components/money/traditional-vs-digital-banks/traditionalVsDigitalBanksPageModel";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { WebPageJsonLd } from "@/lib/seo/jsonld";
import { getSiteOrigin } from "@/lib/site-origin";

const baseUrl = getSiteOrigin();
const { path, seo, publishDate, heroImage } = traditionalVsDigitalBanksPageModel;
const ogImageUrl = new URL(heroImage.src, baseUrl).toString();

export const metadata: Metadata = {
  title: pageMetadataTitle(seo.title),
  description: seo.description,
  keywords: [...seo.keywords],
  alternates: { canonical: absoluteUrlFromPath(path)},
  robots: { index: true, follow: true },
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
        width: heroImage.width,
        height: heroImage.height,
        alt: heroImage.alt,
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

export default function TraditionalVsDigitalBanksNetherlandsPage() {
  return (
    <>
      <WebPageJsonLd
        name={traditionalVsDigitalBanksPageModel.hero.pageTitle}
        description={seo.description}
        urlPath={path}
        datePublished={publishDate}
      />
      <TraditionalVsDigitalBanksView />
    </>
  );
}
