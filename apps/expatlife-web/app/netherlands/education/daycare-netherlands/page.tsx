import type { Metadata } from "next";
import { ArticleJsonLd, FaqPageJsonLd, HowToJsonLd, WebPageJsonLd } from "@/lib/seo/jsonld";
import { getSiteOrigin } from "@/lib/site-origin";
import { DaycareNetherlandsView } from "@/src/components/education/DaycareNetherlandsView";
import { daycareNetherlandsPage as page } from "@/src/components/education/daycareNetherlandsPageModel";

export const revalidate = 86400;

const baseUrl = getSiteOrigin();
const { path, seo, hero, publishDate, providers } = page;

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

function DaycareCollectionJsonLd() {
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
      name: "Childcare providers in the Netherlands",
      numberOfItems: providers.length,
      itemListElement: providers.slice(0, 50).map((provider, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "ChildCare",
          name: provider.name,
          url: provider.website.startsWith("http") ? provider.website : undefined,
          description: `${provider.type} · Ages ${provider.ageGroups} · ${provider.languages}`,
        },
      })),
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default function DaycareNetherlandsPage() {
  return (
    <>
      <WebPageJsonLd name={hero.pageTitle} description={seo.description} urlPath={path} datePublished={publishDate} />
      <ArticleJsonLd headline={hero.pageTitle} description={seo.description} dateModified={publishDate} urlPath={path} />
      <FaqPageJsonLd items={page.faq.map((item) => ({ q: item.q, a: item.a }))} url={new URL(path, baseUrl).toString()} />
      <DaycareCollectionJsonLd />
      <HowToJsonLd
        name="How to choose a daycare in the Netherlands"
        description="Step-by-step orientation for expat families choosing registered childcare in the Netherlands."
        steps={page.choosing.howToSteps.map((step) => ({ name: step.name, text: step.text }))}
        urlPath={`${path}#choosing`}
      />
      <DaycareNetherlandsView />
    </>
  );
}
