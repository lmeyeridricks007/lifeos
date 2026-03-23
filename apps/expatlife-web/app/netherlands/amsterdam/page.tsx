import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { ArticleJsonLd, FaqPageJsonLd } from "@/lib/seo/jsonld";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CityHubTemplate } from "@/src/components/city-hub/CityHubTemplate";
import { amsterdamCityPage } from "@/src/data/cities/amsterdam";
import { getAmsterdamServices } from "@/src/data/services/amsterdam";
import { getSiteOrigin } from "@/lib/site-origin";
import { cloneSafeMetadata } from "@/lib/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

const baseUrl = getSiteOrigin();
const path = amsterdamCityPage.path;

/** Social previews + SEO; title/description from city content data. */
export const metadata: Metadata = cloneSafeMetadata({
  ...buildSocialMetadata({
    title: String(amsterdamCityPage.seo.title),
    description: String(amsterdamCityPage.seo.description),
    path: String(path),
    ogType: "article",
    publishGate: { publish: amsterdamCityPage.publish, publishDate: amsterdamCityPage.publishDate },
  }),
  keywords: amsterdamCityPage.seo.keywords,
});

export const revalidate = CONTENT_REVALIDATE;

export default function AmsterdamCityPage() {
  const allServices = getAmsterdamServices();
  const dataWithBanking = {
    ...amsterdamCityPage,
    banking: {
      ...amsterdamCityPage.banking,
      services: getAmsterdamServices(["Banking / money"]),
    },
  };

  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Cities", item: new URL("/netherlands/cities/", baseUrl).toString() },
    { name: "Amsterdam", item: new URL(path, baseUrl).toString() },
  ];

  const dateModified = new Date().toISOString().slice(0, 10);

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <ArticleJsonLd
        headline={amsterdamCityPage.hero.title}
        description={amsterdamCityPage.seo.description}
        dateModified={dateModified}
        urlPath={path}
      />
      {amsterdamCityPage.faqs?.length ? (
        <FaqPageJsonLd items={amsterdamCityPage.faqs} />
      ) : null}
      <CityHubTemplate data={dataWithBanking} allServices={allServices} />
    </>
  );
}
