import type { Metadata } from "next";
import { absoluteUrlFromPath,  pageMetadataTitle } from "@/lib/seo/metadata";
import { ArticleJsonLd, FaqPageJsonLd, HowToJsonLd, WebPageJsonLd } from "@/lib/seo/jsonld";
import { getSiteOrigin } from "@/lib/site-origin";
import { HealthInsuranceComparisonNetherlandsView } from "@/src/components/health/HealthInsuranceComparisonNetherlandsView";
import { healthInsuranceComparisonNetherlandsPage as page } from "@/src/components/health/healthInsuranceComparisonNetherlandsPageModel";
import { resolveSchemaDateModified } from "@/src/lib/freshness/format";

export const revalidate = 86400;

const baseUrl = getSiteOrigin();
const { path, seo, hero, publishDate } = page;
const dateModified =
  resolveSchemaDateModified({
    lastReviewedIso: "lastReviewedIso" in page ? (page as { lastReviewedIso?: string }).lastReviewedIso : null,
    lastReviewedText: "lastReviewed" in page ? `Last reviewed: ${page.lastReviewed}` : null,
    publishDateIso: publishDate,
  }) ?? "2026-08-30";

export const metadata: Metadata = {
  title: pageMetadataTitle(seo.title),
  description: seo.description,
  keywords: [...seo.keywords],
  alternates: { canonical: absoluteUrlFromPath(path)},
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: "article",
    url: absoluteUrlFromPath(path),
    images: [{ url: hero.image.src, alt: hero.image.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [hero.image.src],
  },
};

function MedicalWebPageJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: hero.pageTitle,
    description: seo.description,
    url: absoluteUrlFromPath(path),
    datePublished: publishDate,
    isPartOf: {
      "@type": "WebSite",
      name: "ExpatLife",
      url: baseUrl,
    },
    about: {
      "@type": "MedicalSpecialty",
      name: "Health Insurance Comparison / Zorgverzekering vergelijken",
      description:
        "Orientation for expats on comparing Dutch health insurance — basic vs supplementary decision factors, insurer choice factors, eigen risico tradeoffs and what to check on comparison sites. Not an insurer ranking.",
    },
    audience: {
      "@type": "PeopleAudience",
      audienceType: "Expats living in or relocating to the Netherlands",
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default function HealthInsuranceComparisonNetherlandsPage() {
  return (
    <>
      <WebPageJsonLd name={hero.pageTitle} description={seo.description} urlPath={path} datePublished={publishDate} />
      <ArticleJsonLd headline={hero.pageTitle} description={seo.description} dateModified={dateModified} urlPath={path} />
      <MedicalWebPageJsonLd />
      <FaqPageJsonLd items={page.faq.map((item) => ({ q: item.q, a: item.a }))} url={absoluteUrlFromPath(path)} />
      <HowToJsonLd
        name={page.howToSchema.name}
        description={page.howToSchema.description}
        steps={page.howItWorks.howToSteps.map((step) => ({ name: step.name, text: step.text }))}
        urlPath={`${path}${page.howToSchema.anchor}`}
      />
      <HealthInsuranceComparisonNetherlandsView />
    </>
  );
}
