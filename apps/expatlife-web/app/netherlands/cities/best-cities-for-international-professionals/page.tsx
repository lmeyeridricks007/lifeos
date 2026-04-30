import type { Metadata } from "next";
import { INTERNATIONAL_PROFESSIONALS_CITIES_HERO_SRC } from "@/src/components/cities/best-cities-for-international-professionals/BestCitiesForInternationalProfessionalsHeroGraphic";
import { BestCitiesForInternationalProfessionalsView } from "@/src/components/cities/best-cities-for-international-professionals/BestCitiesForInternationalProfessionalsView";
import { bestCitiesForInternationalProfessionalsPageModel } from "@/src/components/cities/best-cities-for-international-professionals/bestCitiesForInternationalProfessionalsPageModel";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { WebPageJsonLd } from "@/lib/seo/jsonld";
import { getSiteOrigin } from "@/lib/site-origin";

const baseUrl = getSiteOrigin();
const { path, seo, publishDate, hero } = bestCitiesForInternationalProfessionalsPageModel;

const professionalsHeroImageUrl = new URL(INTERNATIONAL_PROFESSIONALS_CITIES_HERO_SRC, baseUrl).toString();

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
        url: professionalsHeroImageUrl,
        width: 1600,
        height: 1100,
        alt: "Contemporary Dutch city at golden hour — career-led city choice for international professionals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [professionalsHeroImageUrl],
  },
};

export const revalidate = CONTENT_REVALIDATE;

export default function BestCitiesForInternationalProfessionalsPage() {
  return (
    <>
      <WebPageJsonLd name={hero.pageTitle} description={seo.description} urlPath={path} datePublished={publishDate} />
      <BestCitiesForInternationalProfessionalsView />
    </>
  );
}
