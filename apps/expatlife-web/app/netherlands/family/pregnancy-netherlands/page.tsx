import type { Metadata } from "next";
import { ArticleJsonLd, FaqPageJsonLd, HowToJsonLd, WebPageJsonLd } from "@/lib/seo/jsonld";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { cloneSafeMetadata } from "@/lib/metadata";
import { getSiteOrigin } from "@/lib/site-origin";
import { PregnancyNetherlandsView } from "@/src/components/family/pregnancy-netherlands/PregnancyNetherlandsView";
import { pregnancyNetherlandsPage as page } from "@/src/components/family/pregnancy-netherlands/pregnancyNetherlandsPageModel";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

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

function MedicalWebPageJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
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
      "@type": "MedicalSpecialty",
      name: "Pregnancy / Prenatal Care Orientation",
      description:
        "Orientation for expats on pregnancy in the Netherlands — finding a midwife, trimester checkpoints, BSN and registration timing, insurance basics and what to prepare.",
    },
    audience: {
      "@type": "PeopleAudience",
      audienceType: "Expats living in or relocating to the Netherlands",
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default function PregnancyNetherlandsPage() {
  return (
    <>
      <WebPageJsonLd name={hero.pageTitle} description={seo.description} urlPath={path} datePublished={publishDate} />
      <ArticleJsonLd headline={hero.pageTitle} description={seo.description} dateModified={publishDate} urlPath={path} />
      <MedicalWebPageJsonLd />
      <FaqPageJsonLd items={page.faq.map((item) => ({ q: item.q, a: item.a }))} url={new URL(path, baseUrl).toString()} />
      <HowToJsonLd
        name={page.howToSchema.name}
        description={page.howToSchema.description}
        steps={page.howTo.steps.map((step) => ({ name: step.name, text: step.text }))}
        urlPath={`${path}${page.howToSchema.anchor}`}
      />
      <PregnancyNetherlandsView />
    </>
  );
}
