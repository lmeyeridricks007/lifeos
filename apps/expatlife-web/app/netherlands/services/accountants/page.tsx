import type { Metadata } from "next";
import { pageMetadataTitle } from "@/lib/seo/metadata";
import { ArticleJsonLd, FaqPageJsonLd, WebPageJsonLd } from "@/lib/seo/jsonld";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { cloneSafeMetadata } from "@/lib/metadata";
import { getSiteOrigin } from "@/lib/site-origin";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { AccountantsNetherlandsView } from "@/src/components/services/accountants/AccountantsNetherlandsView";
import { accountantsNetherlandsPage as page } from "@/src/components/services/accountants/accountantsNetherlandsPageModel";

export const revalidate = CONTENT_REVALIDATE;

const baseUrl = getSiteOrigin();
const { path, seo, hero, publishDate } = page;

export const metadata: Metadata = cloneSafeMetadata({
  ...buildSocialMetadata({
    title: seo.title,
    description: seo.description,
    path,
    ogType: "article",
    imagePath: hero.image.src,
    publishGate: { publish: true, publishDate },
  }),
  keywords: [...seo.keywords],
});

function ProviderDirectoryJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Accountants in the Netherlands for expats — bookkeeping and administratiekantoren",
    description:
      "Structured directory of Dutch accountants and bookkeeping offices for BTW, jaarrekening and payroll admin. Informational soft discovery — not a ranking.",
    numberOfItems: page.providers.length,
    itemListElement: page.providers.map((provider, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": ["AccountingService", "LocalBusiness", "ProfessionalService"],
        name: provider.name,
        url: provider.website,
        areaServed: provider.region,
        serviceType: "Dutch accountant / administratiekantoor / bookkeeping",
        description: provider.summary,
        knowsLanguage: provider.languages,
        address: {
          "@type": "PostalAddress",
          addressLocality: provider.city,
          addressCountry: "NL",
        },
      },
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default function AccountantsNetherlandsPage() {
  return (
    <>
      <WebPageJsonLd name={hero.pageTitle} description={seo.description} urlPath={path} datePublished={publishDate} />
      <ArticleJsonLd headline={hero.pageTitle} description={seo.description} dateModified={publishDate} urlPath={path} />
      <FaqPageJsonLd items={page.faqs} url={new URL(path, baseUrl).toString()} />
      <ProviderDirectoryJsonLd />
      <AccountantsNetherlandsView />
    </>
  );
}
