import type { Metadata } from "next";
import { pageMetadataTitle } from "@/lib/seo/metadata";
import { ArticleJsonLd, FaqPageJsonLd, HowToJsonLd, WebPageJsonLd } from "@/lib/seo/jsonld";
import { getSiteOrigin } from "@/lib/site-origin";
import { HealthcareForChildrenNetherlandsView } from "@/src/components/family/HealthcareForChildrenNetherlandsView";
import { healthcareForChildrenNetherlandsPage as page } from "@/src/components/family/healthcareForChildrenNetherlandsPageModel";

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
    about: {
      "@type": "Thing",
      name: "Healthcare for children in the Netherlands",
      description:
        "Orientation for expat families on children's healthcare in the Netherlands — health insurance, GPs, youth healthcare (JGZ), vaccinations, hospitals, dental care and emergency care.",
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default function HealthcareForChildrenNetherlandsPage() {
  return (
    <>
      <WebPageJsonLd name={hero.pageTitle} description={seo.description} urlPath={path} datePublished={publishDate} />
      <ArticleJsonLd headline={hero.pageTitle} description={seo.description} dateModified={publishDate} urlPath={path} />
      <CollectionPageJsonLd />
      <FaqPageJsonLd items={page.faq.map((item) => ({ q: item.q, a: item.a }))} url={new URL(path, baseUrl).toString()} />
      <HowToJsonLd
        name={page.howToSchema.name}
        description={page.howToSchema.description}
        steps={page.gp.howToSteps.map((step) => ({ name: step.name, text: step.text }))}
        urlPath={`${path}${page.howToSchema.anchor}`}
      />
      <HealthcareForChildrenNetherlandsView />
    </>
  );
}
