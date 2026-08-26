import type { Metadata } from "next";
import { pageMetadataTitle } from "@/lib/seo/metadata";
import { ArticleJsonLd, FaqPageJsonLd, HowToJsonLd, WebPageJsonLd } from "@/lib/seo/jsonld";
import { getSiteOrigin } from "@/lib/site-origin";
import { AfterSchoolCareNetherlandsView } from "@/src/components/education/AfterSchoolCareNetherlandsView";
import { afterSchoolCareNetherlandsPage as page } from "@/src/components/education/afterSchoolCareNetherlandsPageModel";

export const revalidate = 86400;

const baseUrl = getSiteOrigin();
const { path, seo, hero, publishDate, providers } = page;

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

function BsoCollectionJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: hero.pageTitle,
    description: seo.description,
    url: new URL(path, baseUrl).toString(),
    datePublished: publishDate,
    isPartOf: {
      "@type": "WebSite",
      name: "ExpatLife",
      url: baseUrl,
    },
    mainEntity: {
      "@type": "ItemList",
      name: "BSO providers in the Netherlands",
      numberOfItems: providers.length,
      itemListElement: providers.map((provider, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "ChildCare",
          name: provider.provider,
          url: provider.website,
          description: `${provider.cities} · ${provider.languages}`,
        },
      })),
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default function AfterSchoolCareNetherlandsPage() {
  return (
    <>
      <WebPageJsonLd name={hero.pageTitle} description={seo.description} urlPath={path} datePublished={publishDate} />
      <ArticleJsonLd headline={hero.pageTitle} description={seo.description} dateModified={publishDate} urlPath={path} />
      <FaqPageJsonLd items={page.faq.map((item) => ({ q: item.q, a: item.a }))} url={new URL(path, baseUrl).toString()} />
      <BsoCollectionJsonLd />
      <HowToJsonLd
        name="How to choose BSO in the Netherlands"
        description="Step-by-step orientation for expat families choosing after-school care (buitenschoolse opvang) in the Netherlands."
        steps={page.choosingBso.howToSteps.map((step) => ({ name: step.name, text: step.text }))}
        urlPath={`${path}#choosing-bso`}
      />
      <AfterSchoolCareNetherlandsView />
    </>
  );
}
