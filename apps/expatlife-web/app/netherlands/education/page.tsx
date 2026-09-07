import type { Metadata } from "next";
import { absoluteUrlFromPath, pageMetadataTitle } from "@/lib/seo/metadata";
import { ArticleJsonLd, FaqPageJsonLd, WebPageJsonLd } from "@/lib/seo/jsonld";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { getSiteOrigin } from "@/lib/site-origin";
import { EducationNetherlandsHubView } from "@/src/components/education/EducationNetherlandsHubView";
import { educationNetherlandsHubPage as page } from "@/src/components/education/educationNetherlandsHubPageModel";

export const revalidate = CONTENT_REVALIDATE;

const baseUrl = getSiteOrigin();

export const metadata: Metadata = {
  title: pageMetadataTitle(page.seo.title),
  description: page.seo.description,
  keywords: [...page.seo.keywords],
  alternates: { canonical: absoluteUrlFromPath(page.path) },
  openGraph: {
    title: page.seo.title,
    description: page.seo.description,
    type: "website",
    url: absoluteUrlFromPath(page.path),
  },
  twitter: {
    card: "summary",
    title: page.seo.title,
    description: page.seo.description,
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

function EducationCollectionJsonLd() {
  const liveChildren = page.journeySections.flatMap((s) => s.links.filter((l) => l.status !== "comingSoon"));
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: page.hero.pageTitle,
    description: page.seo.description,
    url: new URL(page.path, baseUrl).toString(),
    isPartOf: { "@type": "WebSite", name: "ExpatCopilot", url: baseUrl },
    mainEntity: {
      "@type": "ItemList",
      name: "Education and childcare guides for expats in the Netherlands",
      numberOfItems: liveChildren.length,
      itemListElement: liveChildren.map((guide, index) => ({
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

export default function NetherlandsEducationHubPage() {
  return (
    <>
      <WebPageJsonLd name={page.hero.pageTitle} description={page.seo.description} urlPath={page.path} datePublished={page.publishDate} />
      <ArticleJsonLd
        headline={page.hero.pageTitle}
        description={page.seo.description}
        dateModified={page.publishDate}
        urlPath={page.path}
      />
      <FaqPageJsonLd items={[...page.faqs]} url={new URL(page.path, baseUrl).toString()} />
      <EducationCollectionJsonLd />
      <EducationNetherlandsHubView />
    </>
  );
}
