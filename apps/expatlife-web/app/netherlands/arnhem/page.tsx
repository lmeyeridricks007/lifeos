import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { ArticleJsonLd, FaqPageJsonLd } from "@/lib/seo/jsonld";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CityHubTemplate } from "@/src/components/city-hub/CityHubTemplate";
import { arnhemCityPage } from "@/src/data/cities/arnhem";
import { getArnhemCityServices } from "@/src/data/services/arnhem-city-services";
import { getSiteOrigin } from "@/lib/site-origin";
import { cloneSafeMetadata } from "@/lib/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

const baseUrl = getSiteOrigin();
const path = arnhemCityPage.path;

export const metadata: Metadata = cloneSafeMetadata({
  ...buildSocialMetadata({
    title: String(arnhemCityPage.seo.title),
    description: String(arnhemCityPage.seo.description),
    path: String(path),
    ogType: "article",
  }),
  keywords: arnhemCityPage.seo.keywords,
});

export const revalidate = CONTENT_REVALIDATE;

export default function ArnhemCityPage() {
  const allServices = getArnhemCityServices();
  const dataWithBanking = {
    ...arnhemCityPage,
    banking: {
      ...arnhemCityPage.banking,
      services: allServices.filter((s) => s.category === "Banking / money"),
    },
  };

  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Cities", item: new URL("/netherlands/cities/", baseUrl).toString() },
    { name: "Arnhem", item: new URL(path, baseUrl).toString() },
  ];

  const dateModified =
    arnhemCityPage.publish && arnhemCityPage.publishDate
      ? arnhemCityPage.publishDate
      : new Date().toISOString().slice(0, 10);

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <ArticleJsonLd
        headline={arnhemCityPage.hero.title}
        description={arnhemCityPage.seo.description}
        dateModified={dateModified}
        urlPath={path}
      />
      {arnhemCityPage.faqs?.length ? <FaqPageJsonLd items={arnhemCityPage.faqs} /> : null}
      <CityHubTemplate data={dataWithBanking} allServices={allServices} />
    </>
  );
}
