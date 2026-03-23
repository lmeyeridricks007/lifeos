import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { ArticleJsonLd, FaqPageJsonLd } from "@/lib/seo/jsonld";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CityHubTemplate } from "@/src/components/city-hub/CityHubTemplate";
import { tilburgCityPage } from "@/src/data/cities/tilburg";
import { getTilburgCityServices } from "@/src/data/services/tilburg-city-services";
import { getSiteOrigin } from "@/lib/site-origin";
import { cloneSafeMetadata } from "@/lib/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

const baseUrl = getSiteOrigin();
const path = tilburgCityPage.path;

export const metadata: Metadata = cloneSafeMetadata({
  ...buildSocialMetadata({
    title: String(tilburgCityPage.seo.title),
    description: String(tilburgCityPage.seo.description),
    path: String(path),
    ogType: "article",
    publishGate: { publish: tilburgCityPage.publish, publishDate: tilburgCityPage.publishDate },
  }),
  keywords: tilburgCityPage.seo.keywords,
});

export const revalidate = CONTENT_REVALIDATE;

export default function TilburgCityPage() {
  const allServices = getTilburgCityServices();
  const dataWithBanking = {
    ...tilburgCityPage,
    banking: {
      ...tilburgCityPage.banking,
      services: allServices.filter((s) => s.category === "Banking / money"),
    },
  };

  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Cities", item: new URL("/netherlands/cities/", baseUrl).toString() },
    { name: "Tilburg", item: new URL(path, baseUrl).toString() },
  ];

  const dateModified =
    tilburgCityPage.publish && tilburgCityPage.publishDate
      ? tilburgCityPage.publishDate
      : new Date().toISOString().slice(0, 10);

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <ArticleJsonLd
        headline={tilburgCityPage.hero.title}
        description={tilburgCityPage.seo.description}
        dateModified={dateModified}
        urlPath={path}
      />
      {tilburgCityPage.faqs?.length ? <FaqPageJsonLd items={tilburgCityPage.faqs} /> : null}
      <CityHubTemplate data={dataWithBanking} allServices={allServices} />
    </>
  );
}
