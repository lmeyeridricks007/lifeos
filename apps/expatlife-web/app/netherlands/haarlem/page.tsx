import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { ArticleJsonLd, FaqPageJsonLd } from "@/lib/seo/jsonld";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CityHubTemplate } from "@/src/components/city-hub/CityHubTemplate";
import { haarlemCityPage } from "@/src/data/cities/haarlem";
import { getHaarlemCityServices } from "@/src/data/services/haarlem-city-services";
import { getSiteOrigin } from "@/lib/site-origin";
import { cloneSafeMetadata } from "@/lib/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

const baseUrl = getSiteOrigin();
const path = haarlemCityPage.path;

export const metadata: Metadata = cloneSafeMetadata({
  ...buildSocialMetadata({
    title: String(haarlemCityPage.seo.title),
    description: String(haarlemCityPage.seo.description),
    path: String(path),
    ogType: "article",
    publishGate: { publish: haarlemCityPage.publish, publishDate: haarlemCityPage.publishDate },
  }),
  keywords: haarlemCityPage.seo.keywords,
});

export const revalidate = CONTENT_REVALIDATE;

export default function HaarlemCityPage() {
  const allServices = getHaarlemCityServices();
  const dataWithBanking = {
    ...haarlemCityPage,
    banking: {
      ...haarlemCityPage.banking,
      services: allServices.filter((s) => s.category === "Banking / money"),
    },
  };

  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Cities", item: new URL("/netherlands/cities/", baseUrl).toString() },
    { name: "Haarlem", item: new URL(path, baseUrl).toString() },
  ];

  const dateModified =
    haarlemCityPage.publish && haarlemCityPage.publishDate
      ? haarlemCityPage.publishDate
      : new Date().toISOString().slice(0, 10);

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <ArticleJsonLd
        headline={haarlemCityPage.hero.title}
        description={haarlemCityPage.seo.description}
        dateModified={dateModified}
        urlPath={path}
      />
      {haarlemCityPage.faqs?.length ? <FaqPageJsonLd items={haarlemCityPage.faqs} /> : null}
      <CityHubTemplate data={dataWithBanking} allServices={allServices} />
    </>
  );
}
