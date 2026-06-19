import type { Metadata } from "next";
import { ArticleJsonLd, FaqPageJsonLd, WebPageJsonLd } from "@/lib/seo/jsonld";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { getSiteOrigin } from "@/lib/site-origin";
import { GovernmentPortalsNetherlandsView } from "@/src/components/practical-life/GovernmentPortalsNetherlandsView";
import { governmentPortalsNetherlandsPage as page } from "@/src/components/practical-life/governmentPortalsNetherlandsPageModel";

const baseUrl = getSiteOrigin();

export const revalidate = CONTENT_REVALIDATE;

export const metadata: Metadata = {
  title: page.seo.title,
  description: page.seo.description,
  keywords: [...page.seo.keywords],
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

function GovernmentPortalsCollectionJsonLd() {
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
      name: "Dutch government portals for expats",
      numberOfItems: page.portalDirectory.length,
      itemListElement: page.portalDirectory.map((entry, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "WebPage",
          name: entry.name,
          url: entry.website,
          description: entry.purpose,
        },
      })),
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default function GovernmentPortalsNetherlandsPage() {
  const dateModified = new Date().toISOString().slice(0, 10);

  return (
    <>
      <WebPageJsonLd
        name={page.hero.pageTitle}
        description={page.seo.description}
        urlPath={page.path}
        datePublished={page.publishDate}
      />
      <ArticleJsonLd
        headline={page.hero.pageTitle}
        description={page.seo.description}
        dateModified={dateModified}
        urlPath={page.path}
      />
      <FaqPageJsonLd items={[...page.faqs]} url={new URL(page.path, baseUrl).toString()} />
      <GovernmentPortalsCollectionJsonLd />
      <GovernmentPortalsNetherlandsView />
    </>
  );
}
