import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { ArticleJsonLd, FaqPageJsonLd } from "@/lib/seo/jsonld";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CityHubTemplate } from "@/src/components/city-hub/CityHubTemplate";
import { groningenCityPage } from "@/src/data/cities/groningen";
import { getGroningenCityServices } from "@/src/data/services/groningen-city-services";
import { getSiteOrigin } from "@/lib/site-origin";
import { cloneSafeMetadata } from "@/lib/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

const baseUrl = getSiteOrigin();
const path = groningenCityPage.path;

export const metadata: Metadata = cloneSafeMetadata({
  ...buildSocialMetadata({
    title: String(groningenCityPage.seo.title),
    description: String(groningenCityPage.seo.description),
    path: String(path),
    ogType: "article",
  }),
  keywords: groningenCityPage.seo.keywords,
});

export const revalidate = CONTENT_REVALIDATE;

export default function GroningenCityPage() {
  const allServices = getGroningenCityServices();
  const dataWithBanking = {
    ...groningenCityPage,
    banking: {
      ...groningenCityPage.banking,
      services: allServices.filter((s) => s.category === "Banking / money"),
    },
  };

  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Cities", item: new URL("/netherlands/cities/", baseUrl).toString() },
    { name: "Groningen", item: new URL(path, baseUrl).toString() },
  ];

  const dateModified =
    groningenCityPage.publish && groningenCityPage.publishDate
      ? groningenCityPage.publishDate
      : new Date().toISOString().slice(0, 10);

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <ArticleJsonLd
        headline={groningenCityPage.hero.title}
        description={groningenCityPage.seo.description}
        dateModified={dateModified}
        urlPath={path}
      />
      {groningenCityPage.faqs?.length ? <FaqPageJsonLd items={groningenCityPage.faqs} /> : null}
      <CityHubTemplate data={dataWithBanking} allServices={allServices} />
    </>
  );
}
