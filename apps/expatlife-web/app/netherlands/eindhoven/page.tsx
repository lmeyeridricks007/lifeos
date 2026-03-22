import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { ArticleJsonLd, FaqPageJsonLd } from "@/lib/seo/jsonld";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { cloneSafeMetadata } from "@/lib/metadata";
import { CityHubTemplate } from "@/src/components/city-hub/CityHubTemplate";
import { eindhovenCityPage } from "@/src/data/cities/eindhoven";
import { getEindhovenServices } from "@/src/data/services/eindhoven";
import { getSiteOrigin } from "@/lib/site-origin";

const baseUrl = getSiteOrigin();
const path = eindhovenCityPage.path;

/** Menu: Netherlands > Cities > Eindhoven. Breadcrumb: Home > Netherlands > Cities > Eindhoven */
export const metadata: Metadata = cloneSafeMetadata({
  ...buildSocialMetadata({
    title: String(eindhovenCityPage.seo.title),
    description: String(eindhovenCityPage.seo.description),
    path: String(path),
    ogType: "article",
  }),
  keywords: eindhovenCityPage.seo.keywords,
});

export const revalidate = 86400;

export default function EindhovenCityPage() {
  const allServices = getEindhovenServices();
  const dataWithBanking = {
    ...eindhovenCityPage,
    banking: {
      ...eindhovenCityPage.banking,
      services: getEindhovenServices(["Banking / money"]),
    },
  };

  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Cities", item: new URL("/netherlands/cities/", baseUrl).toString() },
    { name: "Eindhoven", item: new URL(path, baseUrl).toString() },
  ];

  const dateModified = new Date().toISOString().slice(0, 10);

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <ArticleJsonLd
        headline={eindhovenCityPage.hero.title}
        description={eindhovenCityPage.seo.description}
        dateModified={dateModified}
        urlPath={path}
      />
      {eindhovenCityPage.faqs?.length ? (
        <FaqPageJsonLd items={eindhovenCityPage.faqs} />
      ) : null}
      <CityHubTemplate data={dataWithBanking} allServices={allServices} />
    </>
  );
}
