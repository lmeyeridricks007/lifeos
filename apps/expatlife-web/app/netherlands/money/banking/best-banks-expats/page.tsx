import type { Metadata } from "next";
import { BestBanksExpatsView } from "@/src/components/money/best-banks-expats/BestBanksExpatsView";
import { bestBanksExpatsPageModel } from "@/src/components/money/best-banks-expats/bestBanksExpatsPageModel";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { WebPageJsonLd } from "@/lib/seo/jsonld";
import { getSiteOrigin } from "@/lib/site-origin";

const baseUrl = getSiteOrigin();
const { path, seo, publishDate, heroImage } = bestBanksExpatsPageModel;
const ogImageUrl = new URL(heroImage.src, baseUrl).toString();

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: [...seo.keywords],
  alternates: { canonical: path },
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: "article",
    url: new URL(path, baseUrl).toString(),
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

export default function BestBanksExpatsNetherlandsPage() {
  return (
    <>
      <WebPageJsonLd
        name={bestBanksExpatsPageModel.hero.pageTitle}
        description={seo.description}
        urlPath={path}
        datePublished={publishDate}
      />
      <BestBanksExpatsView />
    </>
  );
}
