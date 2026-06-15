import type { Metadata } from "next";
import { ArticleJsonLd, FaqPageJsonLd, WebPageJsonLd } from "@/lib/seo/jsonld";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { getSiteOrigin } from "@/lib/site-origin";
import { HousingNetherlandsView } from "@/src/components/housing/HousingNetherlandsView";
import { housingNetherlandsPage as page } from "@/src/components/housing/housingNetherlandsPageModel";

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

function HousingCollectionJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: page.hero.pageTitle,
    description: page.seo.description,
    url: new URL(page.path, baseUrl).toString(),
    isPartOf: {
      "@type": "WebSite",
      name: "ExpatLife",
      url: baseUrl,
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Housing guides for expats in the Netherlands",
      numberOfItems: page.featuredGuides.length,
      itemListElement: page.featuredGuides.map((guide, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "WebPage",
          name: guide.label,
          url: new URL(guide.href, baseUrl).toString(),
          description: guide.description,
        },
      })),
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default function HousingNetherlandsPage() {
  const dateModified = new Date().toISOString().slice(0, 10);

  return (
    <>
      <WebPageJsonLd name={page.hero.pageTitle} description={page.seo.description} urlPath={page.path} datePublished={page.publishDate} />
      <ArticleJsonLd headline={page.hero.pageTitle} description={page.seo.description} dateModified={dateModified} urlPath={page.path} />
      <FaqPageJsonLd items={page.faqs} url={new URL(page.path, baseUrl).toString()} />
      <HousingCollectionJsonLd />
      <HousingNetherlandsView />
    </>
  );
}
