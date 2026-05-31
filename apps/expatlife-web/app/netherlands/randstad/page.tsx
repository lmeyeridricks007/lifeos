import type { Metadata } from "next";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { ArticleJsonLd, WebPageJsonLd } from "@/lib/seo/jsonld";
import { getSiteOrigin } from "@/lib/site-origin";
import { RandstadView } from "@/src/components/cities/randstad/RandstadView";
import { randstadPage } from "@/src/components/cities/randstad/randstadPageModel";

const baseUrl = getSiteOrigin();
const { path, seo, publishDate, hero } = randstadPage;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: [...seo.keywords],
  alternates: { canonical: path },
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: "article",
    url: new URL(path, baseUrl).toString(),
    images: [
      {
        url: hero.image.src,
        alt: hero.image.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [hero.image.src],
  },
};

export const revalidate = CONTENT_REVALIDATE;

export default function RandstadPage() {
  return (
    <>
      <WebPageJsonLd
        name={hero.pageTitle}
        description={seo.description}
        urlPath={path}
        datePublished={publishDate}
      />
      <ArticleJsonLd
        headline={hero.pageTitle}
        description={seo.description}
        dateModified={publishDate}
        urlPath={path}
      />
      <RandstadView />
    </>
  );
}
