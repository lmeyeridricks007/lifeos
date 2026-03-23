import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { ArticleJsonLd, FaqPageJsonLd } from "@/lib/seo/jsonld";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CityHubTemplate } from "@/src/components/city-hub/CityHubTemplate";
import { maastrichtCityPage } from "@/src/data/cities/maastricht";
import { getMaastrichtCityServices } from "@/src/data/services/maastricht-city-services";
import { getSiteOrigin } from "@/lib/site-origin";
import { cloneSafeMetadata } from "@/lib/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

const baseUrl = getSiteOrigin();
const path = maastrichtCityPage.path;

export const metadata: Metadata = cloneSafeMetadata({
  ...buildSocialMetadata({
    title: String(maastrichtCityPage.seo.title),
    description: String(maastrichtCityPage.seo.description),
    path: String(path),
    ogType: "article",
  }),
  keywords: maastrichtCityPage.seo.keywords,
});

export const revalidate = CONTENT_REVALIDATE;

export default function MaastrichtCityPage() {
  const allServices = getMaastrichtCityServices();
  const dataWithBanking = {
    ...maastrichtCityPage,
    banking: {
      ...maastrichtCityPage.banking,
      services: allServices.filter((s) => s.category === "Banking / money"),
    },
  };

  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Cities", item: new URL("/netherlands/cities/", baseUrl).toString() },
    { name: "Maastricht", item: new URL(path, baseUrl).toString() },
  ];

  const dateModified =
    maastrichtCityPage.publish && maastrichtCityPage.publishDate
      ? maastrichtCityPage.publishDate
      : new Date().toISOString().slice(0, 10);

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <ArticleJsonLd
        headline={maastrichtCityPage.hero.title}
        description={maastrichtCityPage.seo.description}
        dateModified={dateModified}
        urlPath={path}
      />
      {maastrichtCityPage.faqs?.length ? <FaqPageJsonLd items={maastrichtCityPage.faqs} /> : null}
      <CityHubTemplate data={dataWithBanking} allServices={allServices} />
    </>
  );
}
