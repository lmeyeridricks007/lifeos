import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { ArticleJsonLd, FaqPageJsonLd } from "@/lib/seo/jsonld";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CityHubTemplate } from "@/src/components/city-hub/CityHubTemplate";
import { leidenCityPage } from "@/src/data/cities/leiden";
import { getLeidenCityServices } from "@/src/data/services/leiden-city-services";
import { getSiteOrigin } from "@/lib/site-origin";
import { cloneSafeMetadata } from "@/lib/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

const baseUrl = getSiteOrigin();
const path = leidenCityPage.path;

export const metadata: Metadata = cloneSafeMetadata({
  ...buildSocialMetadata({
    title: String(leidenCityPage.seo.title),
    description: String(leidenCityPage.seo.description),
    path: String(path),
    ogType: "article",
  }),
  keywords: leidenCityPage.seo.keywords,
});

export const revalidate = CONTENT_REVALIDATE;

export default function LeidenCityPage() {
  const allServices = getLeidenCityServices();
  const dataWithBanking = {
    ...leidenCityPage,
    banking: {
      ...leidenCityPage.banking,
      services: allServices.filter((s) => s.category === "Banking / money"),
    },
  };

  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Cities", item: new URL("/netherlands/cities/", baseUrl).toString() },
    { name: "Leiden", item: new URL(path, baseUrl).toString() },
  ];

  const dateModified =
    leidenCityPage.publish && leidenCityPage.publishDate
      ? leidenCityPage.publishDate
      : new Date().toISOString().slice(0, 10);

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <ArticleJsonLd
        headline={leidenCityPage.hero.title}
        description={leidenCityPage.seo.description}
        dateModified={dateModified}
        urlPath={path}
      />
      {leidenCityPage.faqs?.length ? <FaqPageJsonLd items={leidenCityPage.faqs} /> : null}
      <CityHubTemplate data={dataWithBanking} allServices={allServices} />
    </>
  );
}
