import type { Metadata } from "next";
import { ArticleJsonLd, FaqPageJsonLd, WebPageJsonLd } from "@/lib/seo/jsonld";
import { getSiteOrigin } from "@/lib/site-origin";
import { InternationalSchoolsNetherlandsView } from "@/src/components/education/InternationalSchoolsNetherlandsView";
import { internationalSchoolsNetherlandsPage as page } from "@/src/components/education/internationalSchoolsNetherlandsPageModel";

export const revalidate = 86400;

const baseUrl = getSiteOrigin();
const { path, seo, hero, publishDate, schools } = page;

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

function SchoolsCollectionJsonLd() {
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
      name: "International schools in the Netherlands",
      numberOfItems: schools.length,
      itemListElement: schools.slice(0, 50).map((school, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "EducationalOrganization",
          name: school.name,
          url: school.website,
          address: {
            "@type": "PostalAddress",
            addressLocality: school.city,
            addressCountry: "NL",
          },
          description: `${school.curriculum.join(", ")} · Ages ${school.ages} · ${school.languages.join(", ")}`,
        },
      })),
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

function SchoolsItemListJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Directory of international schools in the Netherlands",
    description: "Searchable directory of IB, British, American, European and bilingual international schools for expat families.",
    numberOfItems: schools.length,
    itemListElement: schools.slice(0, 50).map((school, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: school.name,
      url: school.website,
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default function InternationalSchoolsNetherlandsPage() {
  return (
    <>
      <WebPageJsonLd name={hero.pageTitle} description={seo.description} urlPath={path} datePublished={publishDate} />
      <ArticleJsonLd headline={hero.pageTitle} description={seo.description} dateModified={publishDate} urlPath={path} />
      <FaqPageJsonLd items={page.faq.map((item) => ({ q: item.q, a: item.a }))} url={new URL(path, baseUrl).toString()} />
      <SchoolsCollectionJsonLd />
      <SchoolsItemListJsonLd />
      <InternationalSchoolsNetherlandsView />
    </>
  );
}
