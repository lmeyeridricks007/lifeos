import type { Metadata } from "next";
import { ArticleJsonLd, FaqPageJsonLd, WebPageJsonLd } from "@/lib/seo/jsonld";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { getSiteOrigin } from "@/lib/site-origin";
import { MunicipalityServicesNetherlandsView } from "@/src/components/practical-life/MunicipalityServicesNetherlandsView";
import { municipalityServicesNetherlandsPage as page } from "@/src/components/practical-life/municipalityServicesNetherlandsPageModel";

const baseUrl = getSiteOrigin();

export const revalidate = CONTENT_REVALIDATE;

export const metadata: Metadata = {
  title: page.seo.title,
  description: page.seo.description,
  keywords: page.seo.keywords,
  alternates: { canonical: page.path },
  openGraph: {
    title: page.seo.title,
    description: page.seo.description,
    type: "article",
    url: new URL(page.path, baseUrl).toString(),
    images: [page.hero.image.src],
  },
  twitter: {
    card: "summary_large_image",
    title: page.seo.title,
    description: page.seo.description,
    images: [page.hero.image.src],
  },
};

function MunicipalityDirectoryJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Major municipality websites in the Netherlands",
    description: "Neutral directory of major Dutch municipality examples for expat orientation.",
    numberOfItems: page.municipalityDirectory.length,
    itemListElement: page.municipalityDirectory.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "GovernmentOrganization",
        name: entry.name,
        url: entry.website,
        description: entry.summary,
      },
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default function MunicipalityServicesNetherlandsPage() {
  const dateModified = new Date().toISOString().slice(0, 10);

  return (
    <>
      <WebPageJsonLd name={page.hero.pageTitle} description={page.seo.description} urlPath={page.path} datePublished={page.publishDate} />
      <ArticleJsonLd headline={page.hero.pageTitle} description={page.seo.description} dateModified={dateModified} urlPath={page.path} />
      <FaqPageJsonLd items={page.faqs} url={new URL(page.path, baseUrl).toString()} />
      <MunicipalityDirectoryJsonLd />
      <MunicipalityServicesNetherlandsView />
    </>
  );
}
