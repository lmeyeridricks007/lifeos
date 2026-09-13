import type { Metadata } from "next";
import { absoluteUrlFromPath } from "@/lib/seo/metadata";
import { ArticleJsonLd, FaqPageJsonLd, WebPageJsonLd } from "@/lib/seo/jsonld";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { getSiteOrigin } from "@/lib/site-origin";
import { DigiDNetherlandsView } from "@/src/components/practical-life/DigiDNetherlandsView";
import { digiDNetherlandsPage as page } from "@/src/components/practical-life/digiDNetherlandsPageModel";
import { resolveSchemaDateModified } from "@/src/lib/freshness/format";

const baseUrl = getSiteOrigin();

export const revalidate = CONTENT_REVALIDATE;

export const metadata: Metadata = {
  title: page.seo.title,
  description: page.seo.description,
  keywords: [...page.seo.keywords],
  alternates: { canonical: absoluteUrlFromPath(page.path)},
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

export default function DigiDNetherlandsPage() {
  const dateModified = resolveSchemaDateModified({
    lastReviewedIso: "lastReviewedIso" in page ? page.lastReviewedIso : null,
    lastReviewedText: "lastReviewed" in page ? `Last reviewed: ${page.lastReviewed}` : null,
    publishDateIso: page.publishDate,
  });

  return (
    <>
      <WebPageJsonLd
        name={page.hero.pageTitle}
        description={page.seo.description}
        urlPath={page.path}
        datePublished={page.publishDate}
      />
      {dateModified ? (
        <ArticleJsonLd
          headline={page.hero.pageTitle}
          description={page.seo.description}
          dateModified={dateModified}
          urlPath={page.path}
        />
      ) : null}
      <FaqPageJsonLd items={[...page.faqs]} url={new URL(page.path, baseUrl).toString()} />
      <DigiDNetherlandsView />
    </>
  );
}
