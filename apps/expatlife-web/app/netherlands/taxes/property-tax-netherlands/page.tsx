import type { Metadata } from "next";
import { ArticleJsonLd, FaqPageJsonLd, WebPageJsonLd } from "@/lib/seo/jsonld";
import { getSiteOrigin } from "@/lib/site-origin";
import { PropertyTaxNetherlandsView } from "@/src/components/taxes/PropertyTaxNetherlandsView";
import { propertyTaxNetherlandsPage as page } from "@/src/components/taxes/propertyTaxNetherlandsPageModel";

export const revalidate = 86400;

const baseUrl = getSiteOrigin();
const { path, seo, hero, publishDate } = page;

export const metadata: Metadata = {
  title: seo.title,
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

export default function PropertyTaxNetherlandsPage() {
  return (
    <>
      <WebPageJsonLd name={hero.pageTitle} description={seo.description} urlPath={path} datePublished={publishDate} />
      <ArticleJsonLd headline={hero.pageTitle} description={seo.description} dateModified={publishDate} urlPath={path} />
      <FaqPageJsonLd items={page.faq.map((item) => ({ q: item.q, a: item.a }))} url={new URL(path, baseUrl).toString()} />
      <PropertyTaxNetherlandsView />
    </>
  );
}
