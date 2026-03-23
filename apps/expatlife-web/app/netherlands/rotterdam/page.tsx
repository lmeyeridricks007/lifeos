import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { ArticleJsonLd, FaqPageJsonLd } from "@/lib/seo/jsonld";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { cloneSafeMetadata } from "@/lib/metadata";
import { CityHubTemplate } from "@/src/components/city-hub/CityHubTemplate";
import { rotterdamCityPage } from "@/src/data/cities/rotterdam";
import { getRotterdamServices } from "@/src/data/services/rotterdam";
import { getSiteOrigin } from "@/lib/site-origin";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

const baseUrl = getSiteOrigin();
const path = rotterdamCityPage.path;

export const metadata: Metadata = cloneSafeMetadata({
  ...buildSocialMetadata({
    title: String(rotterdamCityPage.seo.title),
    description: String(rotterdamCityPage.seo.description),
    path: String(path),
    ogType: "article",
  }),
  keywords: rotterdamCityPage.seo.keywords,
});

export const revalidate = CONTENT_REVALIDATE;

export default function RotterdamCityPage() {
  const allServices = getRotterdamServices();
  const dataWithBanking = {
    ...rotterdamCityPage,
    banking: {
      ...rotterdamCityPage.banking,
      services: getRotterdamServices(["Banking / money"]),
    },
  };

  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Cities", item: new URL("/netherlands/cities/", baseUrl).toString() },
    { name: "Rotterdam", item: new URL(path, baseUrl).toString() },
  ];

  const dateModified = new Date().toISOString().slice(0, 10);

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <ArticleJsonLd
        headline={rotterdamCityPage.hero.title}
        description={rotterdamCityPage.seo.description}
        dateModified={dateModified}
        urlPath={path}
      />
      {rotterdamCityPage.faqs?.length ? (
        <FaqPageJsonLd items={rotterdamCityPage.faqs} />
      ) : null}
      <CityHubTemplate data={dataWithBanking} allServices={allServices} />
    </>
  );
}
