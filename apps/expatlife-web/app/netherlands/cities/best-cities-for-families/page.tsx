import type { Metadata } from "next";
import { FAMILIES_CITIES_HERO_SRC } from "@/src/components/cities/best-cities-for-families/BestCitiesForFamiliesHeroGraphic";
import { BestCitiesForFamiliesView } from "@/src/components/cities/best-cities-for-families/BestCitiesForFamiliesView";
import { bestCitiesForFamiliesPageModel } from "@/src/components/cities/best-cities-for-families/bestCitiesForFamiliesPageModel";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { WebPageJsonLd } from "@/lib/seo/jsonld";
import { getSiteOrigin } from "@/lib/site-origin";

const baseUrl = getSiteOrigin();
const { path, seo, publishDate, hero } = bestCitiesForFamiliesPageModel;

const familiesHeroImageUrl = new URL(FAMILIES_CITIES_HERO_SRC, baseUrl).toString();

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
        url: familiesHeroImageUrl,
        width: 1600,
        height: 1100,
        alt: "Dutch neighbourhood at golden hour — family-friendly cities guide hero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [familiesHeroImageUrl],
  },
};

export const revalidate = CONTENT_REVALIDATE;

export default function BestCitiesForFamiliesPage() {
  return (
    <>
      <WebPageJsonLd name={hero.pageTitle} description={seo.description} urlPath={path} datePublished={publishDate} />
      <BestCitiesForFamiliesView />
    </>
  );
}
