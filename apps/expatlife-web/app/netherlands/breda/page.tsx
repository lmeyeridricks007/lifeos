import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { ArticleJsonLd, FaqPageJsonLd } from "@/lib/seo/jsonld";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CityHubTemplate } from "@/src/components/city-hub/CityHubTemplate";
import { bredaCityPage } from "@/src/data/cities/breda";
import { getBredaCityServices } from "@/src/data/services/breda-city-services";
import { getSiteOrigin } from "@/lib/site-origin";
import { cloneSafeMetadata } from "@/lib/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

const baseUrl = getSiteOrigin();
const path = bredaCityPage.path;

export const metadata: Metadata = cloneSafeMetadata({
  ...buildSocialMetadata({
    title: String(bredaCityPage.seo.title),
    description: String(bredaCityPage.seo.description),
    path: String(path),
    ogType: "article",
    publishGate: { publish: bredaCityPage.publish, publishDate: bredaCityPage.publishDate },
  }),
  keywords: bredaCityPage.seo.keywords,
});

export const revalidate = CONTENT_REVALIDATE;

export default function BredaCityPage() {
  const allServices = getBredaCityServices();
  const dataWithBanking = {
    ...bredaCityPage,
    banking: {
      ...bredaCityPage.banking,
      services: allServices.filter((s) => s.category === "Banking / money"),
    },
  };

  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Cities", item: new URL("/netherlands/cities/", baseUrl).toString() },
    { name: "Breda", item: new URL(path, baseUrl).toString() },
  ];

  const dateModified =
    bredaCityPage.publish && bredaCityPage.publishDate
      ? bredaCityPage.publishDate
      : new Date().toISOString().slice(0, 10);

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <ArticleJsonLd
        headline={bredaCityPage.hero.title}
        description={bredaCityPage.seo.description}
        dateModified={dateModified}
        urlPath={path}
      />
      {bredaCityPage.faqs?.length ? <FaqPageJsonLd items={bredaCityPage.faqs} /> : null}
      <CityHubTemplate data={dataWithBanking} allServices={allServices} />
    </>
  );
}
