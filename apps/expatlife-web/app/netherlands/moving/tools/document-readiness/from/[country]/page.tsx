import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolCountryLandingTemplate } from "@/src/components/tools/shared/ToolCountryLandingTemplate";
import { getCountryLandingContent, getSupportedOriginCountrySlugs, isValidToolCountryLanding } from "@/src/lib/tools/shared/loadCountryLandingContent";
import { getOriginCountryLabel } from "@/src/lib/tools/shared/toolCountryContext";
import { DOCUMENT_READINESS_RELATED_GUIDES } from "@/src/lib/tools/shared/toolInternalLinks";
import { buildBreadcrumbSchema, getToolBreadcrumbItems } from "@/src/lib/seo/breadcrumbSchema";
import { buildToolCountryLandingPageMetadata } from "@/lib/seo/toolCountryLandingMetadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

const TOOL_PATH = "/netherlands/moving/tools/document-readiness/";
const TOOL_NAME = "Document Readiness Checker";
const TOOL_DESCRIPTION =
  "Check which documents you need when moving to the Netherlands. Get a personalized checklist and see where to obtain missing documents.";
const CTA_LABEL = "Check my documents";

type PageProps = { params: Promise<{ country: string }> | { country: string } };

export async function generateStaticParams() {
  return getSupportedOriginCountrySlugs().map((country) => ({ country }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const country = typeof params === "object" && "then" in params ? (await params).country : params.country;
  const label = getOriginCountryLabel(country);
  const title = `${TOOL_NAME} for the Netherlands — from ${label} (Free Tool)`;
  const description = `Moving from ${label} to the Netherlands? Check which documents to prepare, including apostille and translation where relevant.`;
  const canonical = `${TOOL_PATH}from/${country}/`;
  return buildToolCountryLandingPageMetadata({
    canonicalPath: canonical,
    title,
    description,
  });
}

export default async function DocumentReadinessFromCountryPage(props: PageProps) {
  const params = await Promise.resolve(props.params);
  const countrySlug = typeof params === "object" && "country" in params ? params.country : "";
  if (!isValidToolCountryLanding(countrySlug, "document-readiness")) notFound();

  const content = getCountryLandingContent(countrySlug, "document-readiness");
  const countryLabel = getOriginCountryLabel(countrySlug);
  const context = {
    countrySlug,
    countryLabel,
    intro: content?.intro,
    whatOftenMatters: content?.whatOftenMatters,
    documentConsiderations: content?.documentConsiderations,
    transferTravelNotes: content?.transferTravelNotes,
    countryGuideHref: content?.countryGuideHref,
  };

  const breadcrumbItems = [
    ...getToolBreadcrumbItems("Document Readiness Checker", TOOL_PATH),
    { name: `From ${countryLabel}`, url: `${TOOL_PATH}from/${countrySlug}/` },
  ];
  const breadcrumbJsonLd = buildBreadcrumbSchema(breadcrumbItems);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ToolCountryLandingTemplate
        toolName={TOOL_NAME}
        toolPath={TOOL_PATH}
        toolDescription={TOOL_DESCRIPTION}
        countrySlug={countrySlug}
        countryLabel={countryLabel}
        context={context}
        relatedGuides={DOCUMENT_READINESS_RELATED_GUIDES}
        ctaLabel={CTA_LABEL}
        faq={[
          {
            id: "prefill",
            question: "Will the tool remember I'm from " + countryLabel + "?",
            answer: "When you click the button above, the tool opens with your origin set to " + countryLabel + ". You can change it anytime inside the tool.",
          },
        ]}
      />
    </>
  );
}
