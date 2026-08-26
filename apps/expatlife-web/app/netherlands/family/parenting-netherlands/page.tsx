import type { Metadata } from "next";
import { pageMetadataTitle } from "@/lib/seo/metadata";
import { ArticleJsonLd, FaqPageJsonLd, WebPageJsonLd } from "@/lib/seo/jsonld";
import { getSiteOrigin } from "@/lib/site-origin";
import { ParentingNetherlandsView } from "@/src/components/family/ParentingNetherlandsView";
import { parentingNetherlandsPage as page } from "@/src/components/family/parentingNetherlandsPageModel";

export const revalidate = 86400;

const baseUrl = getSiteOrigin();
const { path, seo, hero, publishDate } = page;

export const metadata: Metadata = {
  title: pageMetadataTitle(seo.title),
  description: seo.description,
  keywords: [...seo.keywords],
  alternates: { canonical: path },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: "article",
    url: new URL(path, baseUrl).toString(),
    images: [{ url: hero.image.src, alt: hero.image.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [hero.image.src],
  },
};

function CollectionPageJsonLd() {
  const pageUrl = new URL(path, baseUrl).toString();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: hero.pageTitle,
    description: seo.description,
    url: pageUrl,
    datePublished: publishDate,
    isPartOf: {
      "@type": "WebSite",
      name: "ExpatCopilot",
      url: baseUrl,
    },
    about: {
      "@type": "Thing",
      name: "Parenting in the Netherlands",
      description: "Guide to raising children in the Netherlands for expat families",
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default function ParentingNetherlandsPage() {
  return (
    <>
      <WebPageJsonLd name={hero.pageTitle} description={seo.description} urlPath={path} datePublished={publishDate} />
      <ArticleJsonLd headline={hero.pageTitle} description={seo.description} dateModified={publishDate} urlPath={path} />
      <CollectionPageJsonLd />
      <FaqPageJsonLd items={page.faq.map((item) => ({ q: item.q, a: item.a }))} url={new URL(path, baseUrl).toString()} />
      <ParentingNetherlandsView />
    </>
  );
}
