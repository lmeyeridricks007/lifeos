import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { ArticleJsonLd, FaqPageJsonLd } from "@/lib/seo/jsonld";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CityHubTemplate } from "@/src/components/city-hub/CityHubTemplate";
import { nijmegenCityPage } from "@/src/data/cities/nijmegen";
import { getNijmegenCityServices } from "@/src/data/services/nijmegen-city-services";
import { getSiteOrigin } from "@/lib/site-origin";
import { cloneSafeMetadata } from "@/lib/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

const baseUrl = getSiteOrigin();
const path = nijmegenCityPage.path;

export const metadata: Metadata = cloneSafeMetadata({
  ...buildSocialMetadata({
    title: String(nijmegenCityPage.seo.title),
    description: String(nijmegenCityPage.seo.description),
    path: String(path),
    ogType: "article",
  }),
  keywords: nijmegenCityPage.seo.keywords,
});

export const revalidate = CONTENT_REVALIDATE;

export default function NijmegenCityPage() {
  const allServices = getNijmegenCityServices();
  const dataWithBanking = {
    ...nijmegenCityPage,
    banking: {
      ...nijmegenCityPage.banking,
      services: allServices.filter((s) => s.category === "Banking / money"),
    },
  };

  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Cities", item: new URL("/netherlands/cities/", baseUrl).toString() },
    { name: "Nijmegen", item: new URL(path, baseUrl).toString() },
  ];

  const dateModified =
    nijmegenCityPage.publish && nijmegenCityPage.publishDate
      ? nijmegenCityPage.publishDate
      : new Date().toISOString().slice(0, 10);

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <ArticleJsonLd
        headline={nijmegenCityPage.hero.title}
        description={nijmegenCityPage.seo.description}
        dateModified={dateModified}
        urlPath={path}
      />
      {nijmegenCityPage.faqs?.length ? <FaqPageJsonLd items={nijmegenCityPage.faqs} /> : null}
      <CityHubTemplate data={dataWithBanking} allServices={allServices} />
    </>
  );
}
