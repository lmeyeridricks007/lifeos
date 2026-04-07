import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuidePageTemplate } from "@/src/components/guides/GuidePageTemplate";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { ArticleJsonLd, FaqPageJsonLd } from "@/lib/seo/jsonld";
import { loadGuideBySlug } from "@/src/lib/guides/loadGuide";
import { loadPlacementWithProviders } from "@/src/lib/affiliates/loadAffiliates";
import { DOCUMENT_TRANSLATION_COUNTRY_EXAMPLES } from "@/src/data/guides/document-translation-country-examples";
import { DOCUMENT_TRANSLATION_DOCUMENT_TYPES } from "@/src/data/guides/document-translation-document-types";
import {
  DOCUMENT_TRANSLATION_COST_RANGES,
  DOCUMENT_TRANSLATION_TIMING,
  DOCUMENT_TRANSLATION_COST_DISCLAIMER,
} from "@/src/data/guides/document-translation-costs";
import { DOCUMENT_TRANSLATION_TRANSLATOR_RESOURCES } from "@/src/data/guides/document-translation-translator-resources";
import { getSiteOrigin } from "@/lib/site-origin";
import { buildNetherlandsGuideAffiliateSlots } from "@/src/components/monetization";

import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

const DOCUMENT_TRANSLATION_SLUG = "document-translation-netherlands" as const;

const baseUrl = getSiteOrigin();

/** Static metadata only (plain strings) to avoid DataCloneError. */
export const metadata: Metadata = {
  title: String("Document Translation in the Netherlands | Sworn Translation, Legalisation, Costs"),
  description: String(
    "A practical guide to translating foreign documents for use in the Netherlands, including when translation is required, which languages are accepted, sworn translators, legalisation order, costs, and common mistakes."
  ),
  alternates: { canonical: String("/netherlands/document-translation-netherlands/") },
  openGraph: {
    title: String("Document Translation in the Netherlands | Sworn Translation, Legalisation, Costs"),
    description: String(
      "A practical guide to translating foreign documents for use in the Netherlands, including when translation is required, which languages are accepted, sworn translators, legalisation order, costs, and common mistakes."
    ),
    type: "article",
    url: String("/netherlands/document-translation-netherlands/"),
  },
  twitter: {
    card: "summary_large_image",
    title: String("Document Translation in the Netherlands | Sworn Translation, Legalisation, Costs"),
    description: String(
      "A practical guide to translating foreign documents for use in the Netherlands, including when translation is required, which languages are accepted, sworn translators, legalisation order, costs, and common mistakes."
    ),
  },
};

export default function DocumentTranslationPage() {
  const data = loadGuideBySlug(DOCUMENT_TRANSLATION_SLUG);
  if (!data) notFound();

  const mergedData = {
    ...data,
    documentTranslationCountryExamples: DOCUMENT_TRANSLATION_COUNTRY_EXAMPLES,
    documentTranslationDocumentTypes: DOCUMENT_TRANSLATION_DOCUMENT_TYPES,
    documentTranslationCostRanges: DOCUMENT_TRANSLATION_COST_RANGES,
    documentTranslationTiming: DOCUMENT_TRANSLATION_TIMING,
    documentTranslationCostDisclaimer: DOCUMENT_TRANSLATION_COST_DISCLAIMER,
    documentTranslationTranslatorResources: DOCUMENT_TRANSLATION_TRANSLATOR_RESOURCES,
  };

  const placementIds = new Set<string>();
  for (const section of mergedData.sections) {
    if (section.affiliatePlacementId) placementIds.add(section.affiliatePlacementId);
  }
  if (mergedData.resourcesAffiliatePlacementId) {
    placementIds.add(mergedData.resourcesAffiliatePlacementId);
  }

  const affiliateBlocks: Record<
    string,
    {
      placement: NonNullable<ReturnType<typeof loadPlacementWithProviders>>["placement"];
      items: NonNullable<ReturnType<typeof loadPlacementWithProviders>>["items"];
    }
  > = {};
  for (const id of Array.from(placementIds)) {
    const result = loadPlacementWithProviders(id, "netherlands", undefined);
    if (result != null) affiliateBlocks[id] = { placement: result.placement, items: result.items };
  }

  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands", baseUrl).toString() },
    { name: "Moving", item: new URL("/netherlands/moving/", baseUrl).toString() },
    {
      name: mergedData.breadcrumbLabel ?? mergedData.title,
      item: new URL(mergedData.path, baseUrl).toString(),
    },
  ];

  const dateModified = new Date().toISOString().slice(0, 10);
  const serializableData = JSON.parse(JSON.stringify(mergedData));
  const serializableBlocks = JSON.parse(JSON.stringify(affiliateBlocks));
  const { contextualAffiliateAfterFirstSection, contextualAffiliateBeforeNextSteps } =
    buildNetherlandsGuideAffiliateSlots(DOCUMENT_TRANSLATION_SLUG, mergedData.path);

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <ArticleJsonLd
        headline={mergedData.title}
        description={mergedData.description}
        dateModified={dateModified}
        urlPath={mergedData.path}
      />
      {mergedData.faq?.length ? <FaqPageJsonLd items={mergedData.faq} /> : null}
      <GuidePageTemplate
        data={serializableData}
        affiliateBlocks={serializableBlocks}
        canonicalUrl={new URL(mergedData.path.startsWith("/") ? mergedData.path : `/${mergedData.path}`, baseUrl).toString()}
        contextualAffiliateAfterFirstSection={contextualAffiliateAfterFirstSection}
        contextualAffiliateBeforeNextSteps={contextualAffiliateBeforeNextSteps}
      />
    </>
  );
}
