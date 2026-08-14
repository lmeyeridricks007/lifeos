import type { Metadata } from "next";
import { ArticleJsonLd, FaqPageJsonLd, WebPageJsonLd } from "@/lib/seo/jsonld";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { cloneSafeMetadata } from "@/lib/metadata";
import { getSiteOrigin } from "@/lib/site-origin";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { EnergyProvidersNetherlandsView } from "@/src/components/services/energy-providers/EnergyProvidersNetherlandsView";
import { energyProvidersNetherlandsPage as page } from "@/src/components/services/energy-providers/energyProvidersNetherlandsPageModel";

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
    name: "Energy providers in the Netherlands for expats — electricity and gas supplier orientation",
    description:
      "Structured directory of Dutch electricity and gas supplier types and comparison approaches for expats. Informational soft discovery — not a ranking.",
    numberOfItems: page.providers.length,
    itemListElement: page.providers.map((provider, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
        name: provider.name,
        url: provider.website,
        areaServed: provider.region,
        serviceType: "Dutch electricity / gas supplier orientation",
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

export default function EnergyProvidersNetherlandsPage() {
  return (
    <>
      <WebPageJsonLd name={hero.pageTitle} description={seo.description} urlPath={path} datePublished={publishDate} />
      <ArticleJsonLd headline={hero.pageTitle} description={seo.description} dateModified={publishDate} urlPath={path} />
      <FaqPageJsonLd items={page.faqs} url={new URL(path, baseUrl).toString()} />
      <ProviderDirectoryJsonLd />
      <EnergyProvidersNetherlandsView />
    </>
  );
}
