import type { Metadata } from "next";
import { ArticleJsonLd, FaqPageJsonLd, WebPageJsonLd } from "@/lib/seo/jsonld";
import { getSiteOrigin } from "@/lib/site-origin";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { MortgageAdvisorsNetherlandsView } from "@/src/components/services/mortgage-advisors/MortgageAdvisorsNetherlandsView";
import { mortgageAdvisorsNetherlandsPage as page } from "@/src/components/services/mortgage-advisors/mortgageAdvisorsNetherlandsPageModel";

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
    name: "Mortgage advisors in the Netherlands for expats",
    description: "Structured directory of mortgage advisor providers serving expats and international professionals in the Netherlands.",
    numberOfItems: page.providers.length,
    itemListElement: page.providers.map((provider, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "FinancialService",
        name: provider.name,
        url: provider.website,
        areaServed: provider.region,
        serviceType: "Mortgage advice",
        description: provider.summary,
        knowsLanguage: provider.languages,
      },
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default function MortgageAdvisorsNetherlandsPage() {
  const dateModified = new Date().toISOString().slice(0, 10);

  return (
    <>
      <WebPageJsonLd name={page.hero.pageTitle} description={page.seo.description} urlPath={page.path} datePublished={page.publishDate} />
      <ArticleJsonLd headline={page.hero.pageTitle} description={page.seo.description} dateModified={dateModified} urlPath={page.path} />
      <FaqPageJsonLd items={page.faqs} />
      <ProviderDirectoryJsonLd />
      <MortgageAdvisorsNetherlandsView />
    </>
  );
}
