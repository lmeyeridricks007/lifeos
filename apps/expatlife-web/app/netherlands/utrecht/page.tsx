import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { ArticleJsonLd, FaqPageJsonLd } from "@/lib/seo/jsonld";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { cloneSafeMetadata } from "@/lib/metadata";
import { CityHubTemplate } from "@/src/components/city-hub/CityHubTemplate";
import { utrechtCityPage } from "@/src/data/cities/utrecht";
import { getUtrechtServices } from "@/src/data/services/utrecht";
import { getSiteOrigin } from "@/lib/site-origin";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

const baseUrl = getSiteOrigin();
const path = utrechtCityPage.path;

export const metadata: Metadata = cloneSafeMetadata({
  ...buildSocialMetadata({
    title: String(utrechtCityPage.seo.title),
    description: String(utrechtCityPage.seo.description),
    path: String(path),
    ogType: "article",
    publishGate: { publish: utrechtCityPage.publish, publishDate: utrechtCityPage.publishDate },
  }),
  keywords: utrechtCityPage.seo.keywords,
});

export const revalidate = CONTENT_REVALIDATE;

export default function UtrechtCityPage() {
  const allServices = getUtrechtServices();
  const dataWithBanking = {
    ...utrechtCityPage,
    banking: {
      ...utrechtCityPage.banking,
      services: getUtrechtServices(["Banking / money"]),
    },
  };

  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Cities", item: new URL("/netherlands/cities/", baseUrl).toString() },
    { name: "Utrecht", item: new URL(path, baseUrl).toString() },
  ];

  const dateModified = new Date().toISOString().slice(0, 10);

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <ArticleJsonLd
        headline={utrechtCityPage.hero.title}
        description={utrechtCityPage.seo.description}
        dateModified={dateModified}
        urlPath={path}
      />
      {utrechtCityPage.faqs?.length ? (
        <FaqPageJsonLd items={utrechtCityPage.faqs} />
      ) : null}
      <CityHubTemplate data={dataWithBanking} allServices={allServices} />
    </>
  );
}
