import type { Metadata } from "next";
import { absoluteUrlFromPath } from "@/lib/seo/metadata";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { ArticleJsonLd, FaqPageJsonLd } from "@/lib/seo/jsonld";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CityHubTemplate } from "@/src/components/city-hub/CityHubTemplate";
import { delftCityPage } from "@/src/data/cities/delft";
import { getDelftCityServices } from "@/src/data/services/delft-city-services";
import { getSiteOrigin } from "@/lib/site-origin";
import { cloneSafeMetadata } from "@/lib/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

const baseUrl = getSiteOrigin();
const path = delftCityPage.path;

export const metadata: Metadata = cloneSafeMetadata({
  ...buildSocialMetadata({
    title: String(delftCityPage.seo.title),
    description: String(delftCityPage.seo.description),
    path: String(path),
    ogType: "article",
    publishGate: { publish: delftCityPage.publish, publishDate: delftCityPage.publishDate },
  }),
  keywords: delftCityPage.seo.keywords,
});

export const revalidate = CONTENT_REVALIDATE;

export default function DelftCityPage() {
  const allServices = getDelftCityServices();
  const dataWithBanking = {
    ...delftCityPage,
    banking: {
      ...delftCityPage.banking,
      services: allServices.filter((s) => s.category === "Banking / money"),
    },
  };

  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: absoluteUrlFromPath("/netherlands/") },
    { name: "Cities", item: absoluteUrlFromPath("/netherlands/cities/") },
    { name: "Delft", item: absoluteUrlFromPath(path) },
  ];

  const dateModified =
    delftCityPage.publish && delftCityPage.publishDate
      ? delftCityPage.publishDate
      : new Date().toISOString().slice(0, 10);

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <ArticleJsonLd
        headline={delftCityPage.hero.title}
        description={delftCityPage.seo.description}
        dateModified={dateModified}
        urlPath={path}
      />
      {delftCityPage.faqs?.length ? <FaqPageJsonLd items={delftCityPage.faqs} /> : null}
      <CityHubTemplate data={dataWithBanking} allServices={allServices} />
    </>
  );
}
