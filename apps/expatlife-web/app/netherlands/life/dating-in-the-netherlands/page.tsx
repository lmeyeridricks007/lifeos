import type { Metadata } from "next";
import { ArticleJsonLd, FaqPageJsonLd, WebPageJsonLd } from "@/lib/seo/jsonld";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { getSiteOrigin } from "@/lib/site-origin";
import { DatingNetherlandsView } from "@/src/components/life/DatingNetherlandsView";
import { datingNetherlandsPage as page } from "@/src/components/life/datingNetherlandsPageModel";

const baseUrl = getSiteOrigin();

export const revalidate = CONTENT_REVALIDATE;

export const metadata: Metadata = {
  title: page.seo.title,
  description: page.seo.description,
  keywords: [...page.seo.keywords],
  alternates: { canonical: page.path },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: page.seo.title,
    description: page.seo.description,
    type: "article",
    url: new URL(page.path, baseUrl).toString(),
    images: [{ url: page.hero.image.src, alt: page.hero.image.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: page.seo.title,
    description: page.seo.description,
    images: [page.hero.image.src],
  },
};

function ItemListJsonLd({
  name,
  items,
}: {
  name: string;
  items: readonly { name: string; description: string }[];
}) {
  const url = new URL(page.path, baseUrl).toString();
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    url,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      description: item.description,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function DatingNetherlandsPage() {
  const appListItems = page.datingApps.map((app) => ({
    name: app.name,
    description: `${app.audience}. ${app.strengths} Best in ${app.bestCities}. ${app.pricing}.`,
  }));
  const eventListItems = page.singlesEvents.map((event) => ({
    name: event.name,
    description: `${event.audience}, ages ${event.ageRange}. ${event.note} Typical cost: ${event.typicalCost}. Cities: ${event.cities}.`,
  }));

  return (
    <>
      <WebPageJsonLd name={page.hero.pageTitle} description={page.seo.description} urlPath={page.path} datePublished={page.publishDate} />
      <ArticleJsonLd headline={page.hero.pageTitle} description={page.seo.description} dateModified={page.publishDate} urlPath={page.path} />
      <FaqPageJsonLd items={page.faq.map((item) => ({ q: item.q, a: item.a }))} url={new URL(page.path, baseUrl).toString()} />
      <ItemListJsonLd name="Dating apps in the Netherlands" items={appListItems} />
      <ItemListJsonLd name="Singles events in the Netherlands" items={eventListItems} />
      <DatingNetherlandsView />
    </>
  );
}
