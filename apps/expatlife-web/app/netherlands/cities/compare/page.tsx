import type { Metadata } from "next";
import { WebPageJsonLd } from "@/lib/seo/jsonld";
import { getSiteOrigin } from "@/lib/site-origin";
import { CitiesCompareHubView } from "@/src/components/cities/compare/CitiesCompareHubView";
import { citiesCompareHubPage as page } from "@/src/components/cities/compare/citiesCompareHubPageModel";

export const revalidate = 86400;

const baseUrl = getSiteOrigin();

export const metadata: Metadata = {
  title: page.seo.title,
  description: page.seo.description,
  keywords: [...page.seo.keywords],
  alternates: { canonical: page.path },
  openGraph: {
    title: page.seo.title,
    description: page.seo.description,
    type: "website",
    url: new URL(page.path, baseUrl).toString(),
  },
};

export default function CitiesCompareHubPage() {
  return (
    <>
      <WebPageJsonLd name={page.hero.pageTitle} description={page.seo.description} urlPath={page.path} datePublished={page.publishDate} />
      <CitiesCompareHubView />
    </>
  );
}
