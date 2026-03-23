import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { ArticleJsonLd, FaqPageJsonLd } from "@/lib/seo/jsonld";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CityHubTemplate } from "@/src/components/city-hub/CityHubTemplate";
import { amstelveenCityPage } from "@/src/data/cities/amstelveen";
import { getAmstelveenCityServices } from "@/src/data/services/amstelveen-city-services";
import { getSiteOrigin } from "@/lib/site-origin";
import { cloneSafeMetadata } from "@/lib/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

const baseUrl = getSiteOrigin();
const path = amstelveenCityPage.path;

export const metadata: Metadata = cloneSafeMetadata({
  ...buildSocialMetadata({
    title: String(amstelveenCityPage.seo.title),
    description: String(amstelveenCityPage.seo.description),
    path: String(path),
    ogType: "article",
    publishGate: { publish: amstelveenCityPage.publish, publishDate: amstelveenCityPage.publishDate },
  }),
  keywords: amstelveenCityPage.seo.keywords,
});

export const revalidate = CONTENT_REVALIDATE;

export default function AmstelveenCityPage() {
  const allServices = getAmstelveenCityServices();
  const dataWithBanking = {
    ...amstelveenCityPage,
    banking: {
      ...amstelveenCityPage.banking,
      services: allServices.filter((s) => s.category === "Banking / money"),
    },
  };

  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Cities", item: new URL("/netherlands/cities/", baseUrl).toString() },
    { name: "Amstelveen", item: new URL(path, baseUrl).toString() },
  ];

  const dateModified =
    amstelveenCityPage.publish && amstelveenCityPage.publishDate
      ? amstelveenCityPage.publishDate
      : new Date().toISOString().slice(0, 10);

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <ArticleJsonLd
        headline={amstelveenCityPage.hero.title}
        description={amstelveenCityPage.seo.description}
        dateModified={dateModified}
        urlPath={path}
      />
      {amstelveenCityPage.faqs?.length ? <FaqPageJsonLd items={amstelveenCityPage.faqs} /> : null}
      <CityHubTemplate data={dataWithBanking} allServices={allServices} />
    </>
  );
}
