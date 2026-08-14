import type { Metadata } from "next";
import { ArticleJsonLd, FaqPageJsonLd, WebPageJsonLd } from "@/lib/seo/jsonld";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { cloneSafeMetadata } from "@/lib/metadata";
import { getSiteOrigin } from "@/lib/site-origin";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { RecruitmentAgenciesNetherlandsView } from "@/src/components/services/recruitment-agencies/RecruitmentAgenciesNetherlandsView";
import { recruitmentAgenciesServicesNetherlandsPage as page } from "@/src/components/services/recruitment-agencies/recruitmentAgenciesNetherlandsPageModel";

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
    name: "Recruitment agencies in the Netherlands for expats",
    description:
      "Structured directory of recruitment agency providers serving expats and international professionals in the Netherlands. Informational soft discovery — not a ranking.",
    numberOfItems: page.providers.length,
    itemListElement: page.providers.map((provider, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": ["EmploymentAgency", "LocalBusiness"],
        name: provider.name,
        url: provider.website,
        areaServed: provider.region,
        serviceType: "Recruitment",
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

export default function RecruitmentAgenciesServicesNetherlandsPage() {
  return (
    <>
      <WebPageJsonLd name={hero.pageTitle} description={seo.description} urlPath={path} datePublished={publishDate} />
      <ArticleJsonLd headline={hero.pageTitle} description={seo.description} dateModified={publishDate} urlPath={path} />
      <FaqPageJsonLd items={page.faqs} url={new URL(path, baseUrl).toString()} />
      <ProviderDirectoryJsonLd />
      <RecruitmentAgenciesNetherlandsView />
    </>
  );
}
