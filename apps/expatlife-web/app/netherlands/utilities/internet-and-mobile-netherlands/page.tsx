import type { Metadata } from "next";
import { ArticleJsonLd, FaqPageJsonLd, WebPageJsonLd } from "@/lib/seo/jsonld";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { getSiteOrigin } from "@/lib/site-origin";
import { InternetAndMobileNetherlandsView } from "@/src/components/utilities/InternetAndMobileNetherlandsView";
import { internetAndMobileNetherlandsPage as page } from "@/src/components/utilities/internetAndMobileNetherlandsPageModel";

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

function ProviderDirectoryJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Internet and mobile providers in the Netherlands",
    description: "Neutral directory of internet and mobile provider examples in the Netherlands.",
    numberOfItems: page.providerDirectory.length,
    itemListElement: page.providerDirectory.map((provider, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Organization",
        name: provider.name,
        url: provider.website,
        areaServed: provider.serviceRegions,
        serviceType: provider.serviceType,
        description: provider.summary,
      },
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default function InternetAndMobileNetherlandsPage() {
  const dateModified = new Date().toISOString().slice(0, 10);

  return (
    <>
      <WebPageJsonLd name={page.hero.pageTitle} description={page.seo.description} urlPath={page.path} datePublished={page.publishDate} />
      <ArticleJsonLd headline={page.hero.pageTitle} description={page.seo.description} dateModified={dateModified} urlPath={page.path} />
      <FaqPageJsonLd items={page.faqs} url={new URL(page.path, baseUrl).toString()} />
      <ProviderDirectoryJsonLd />
      <InternetAndMobileNetherlandsView />
    </>
  );
}
