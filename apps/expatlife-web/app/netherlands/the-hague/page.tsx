import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { ArticleJsonLd, FaqPageJsonLd } from "@/lib/seo/jsonld";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { cloneSafeMetadata } from "@/lib/metadata";
import { CityHubTemplate } from "@/src/components/city-hub/CityHubTemplate";
import { theHagueCityPage } from "@/src/data/cities/the-hague";
import { getTheHagueServices } from "@/src/data/services/the-hague";
import { getSiteOrigin } from "@/lib/site-origin";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

const baseUrl = getSiteOrigin();
const path = theHagueCityPage.path;

/** Menu: Netherlands > Cities > The Hague. Breadcrumb: Home > Netherlands > Cities > The Hague */
export const metadata: Metadata = cloneSafeMetadata({
  ...buildSocialMetadata({
    title: String(theHagueCityPage.seo.title),
    description: String(theHagueCityPage.seo.description),
    path: String(path),
    ogType: "article",
    publishGate: { publish: theHagueCityPage.publish, publishDate: theHagueCityPage.publishDate },
  }),
  keywords: theHagueCityPage.seo.keywords,
});

export const revalidate = CONTENT_REVALIDATE;

export default function TheHagueCityPage() {
  const allServices = getTheHagueServices();
  const dataWithBanking = {
    ...theHagueCityPage,
    banking: {
      ...theHagueCityPage.banking,
      services: getTheHagueServices(["Banking / money"]),
    },
  };

  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Cities", item: new URL("/netherlands/cities/", baseUrl).toString() },
    { name: "The Hague", item: new URL(path, baseUrl).toString() },
  ];

  const dateModified = new Date().toISOString().slice(0, 10);

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <ArticleJsonLd
        headline={theHagueCityPage.hero.title}
        description={theHagueCityPage.seo.description}
        dateModified={dateModified}
        urlPath={path}
      />
      {theHagueCityPage.faqs?.length ? (
        <FaqPageJsonLd items={theHagueCityPage.faqs} />
      ) : null}
      <CityHubTemplate data={dataWithBanking} allServices={allServices} />
    </>
  );
}
