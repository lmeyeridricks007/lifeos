import type { Metadata } from "next";
import { BestCitiesForExpatsView } from "@/src/components/cities/best-cities-for-expats/BestCitiesForExpatsView";
import { bestCitiesForExpatsPageModel } from "@/src/components/cities/best-cities-for-expats/bestCitiesForExpatsPageModel";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { WebPageJsonLd } from "@/lib/seo/jsonld";
import { getSiteOrigin } from "@/lib/site-origin";

const baseUrl = getSiteOrigin();
const { path, seo, publishDate, hero } = bestCitiesForExpatsPageModel;

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
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
};

export const revalidate = CONTENT_REVALIDATE;

export default function BestCitiesForExpatsPage() {
  return (
    <>
      <WebPageJsonLd
        name={hero.pageTitle}
        description={seo.description}
        urlPath={path}
        datePublished={publishDate}
      />
      <BestCitiesForExpatsView />
    </>
  );
}
