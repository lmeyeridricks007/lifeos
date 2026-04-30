import type { Metadata } from "next";
import { CheapestCitiesForExpatsView } from "@/src/components/cities/cheapest-cities-for-expats/CheapestCitiesForExpatsView";
import { cheapestCitiesForExpatsPageModel } from "@/src/components/cities/cheapest-cities-for-expats/cheapestCitiesForExpatsPageModel";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { WebPageJsonLd } from "@/lib/seo/jsonld";
import { getSiteOrigin } from "@/lib/site-origin";

const baseUrl = getSiteOrigin();
const { path, seo, publishDate, hero } = cheapestCitiesForExpatsPageModel;

const ogHeroPath = "/images/heroes/netherlands-cheapest-cities-expats-hero.webp" as const;

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
    images: [
      {
        url: ogHeroPath,
        width: 1536,
        height: 1024,
        alt: "Dutch residential street at golden hour — context for affordable city choices in the Netherlands.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [ogHeroPath],
  },
};

export const revalidate = CONTENT_REVALIDATE;

export default function CheapestCitiesForExpatsPage() {
  return (
    <>
      <WebPageJsonLd
        name={hero.pageTitle}
        description={seo.description}
        urlPath={path}
        datePublished={publishDate}
      />
      <CheapestCitiesForExpatsView />
    </>
  );
}
