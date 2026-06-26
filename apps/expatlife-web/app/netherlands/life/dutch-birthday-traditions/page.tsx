import type { Metadata } from "next";
import { ArticleJsonLd, FaqPageJsonLd, WebPageJsonLd } from "@/lib/seo/jsonld";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { getSiteOrigin } from "@/lib/site-origin";
import { DutchBirthdayTraditionsView } from "@/src/components/life/DutchBirthdayTraditionsView";
import { dutchBirthdayTraditionsPage as page } from "@/src/components/life/dutchBirthdayTraditionsPageModel";

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

export default function DutchBirthdayTraditionsPage() {
  return (
    <>
      <WebPageJsonLd name={page.hero.pageTitle} description={page.seo.description} urlPath={page.path} datePublished={page.publishDate} />
      <ArticleJsonLd headline={page.hero.pageTitle} description={page.seo.description} dateModified={page.publishDate} urlPath={page.path} />
      <FaqPageJsonLd items={page.faq.map((item) => ({ q: item.q, a: item.a }))} url={new URL(page.path, baseUrl).toString()} />
      <DutchBirthdayTraditionsView />
    </>
  );
}
