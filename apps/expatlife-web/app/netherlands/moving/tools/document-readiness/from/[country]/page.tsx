import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolCountryLandingTemplate } from "@/src/components/tools/shared/ToolCountryLandingTemplate";
import {
  getSupportedOriginCountrySlugs,
  isValidToolCountryLanding,
} from "@/src/lib/tools/shared/loadCountryLandingContent";
import { composeCountryToolLanding } from "@/src/lib/tools/shared/composeCountryToolLanding";
import { getOriginCountryLabel } from "@/src/lib/tools/shared/toolCountryContext";
import { DOCUMENT_READINESS_RELATED_GUIDES } from "@/src/lib/tools/shared/toolInternalLinks";
import { buildBreadcrumbSchema, getToolBreadcrumbItems } from "@/src/lib/seo/breadcrumbSchema";
import { buildToolCountryLandingPageMetadata } from "@/lib/seo/toolCountryLandingMetadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

const TOOL_PATH = "/netherlands/moving/tools/document-readiness";
const TOOL_NAME = "Document Readiness Checker";
const TOOL_SLUG = "document-readiness" as const;
const CTA_LABEL = "Check my documents";

type PageProps = { params: Promise<{ country: string }> | { country: string } };

export async function generateStaticParams() {
  return getSupportedOriginCountrySlugs().map((country) => ({ country }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const country =
    typeof params === "object" && "then" in params ? (await params).country : params.country;
  const composed = composeCountryToolLanding(country, TOOL_SLUG);
  const label = composed?.countryLabel ?? getOriginCountryLabel(country);
  const title = `${TOOL_NAME} for the Netherlands — from ${label} (Free Tool)`;
  const description =
    composed?.intro?.slice(0, 155) ||
    `Moving from ${label}? Check which documents may need legalisation or translation for Dutch use.`;
  return buildToolCountryLandingPageMetadata({
    canonicalPath: `${TOOL_PATH}/from/${country}`,
    title,
    description,
  });
}

export default async function DocumentReadinessFromCountryPage(props: PageProps) {
  const params = await Promise.resolve(props.params);
  const countrySlug = typeof params === "object" && "country" in params ? params.country : "";
  if (!isValidToolCountryLanding(countrySlug, TOOL_SLUG)) notFound();

  const context = composeCountryToolLanding(countrySlug, TOOL_SLUG);
  if (!context) notFound();

  const breadcrumbItems = [
    ...getToolBreadcrumbItems("Document Readiness Checker", TOOL_PATH),
    { name: `From ${context.countryLabel}`, url: `${TOOL_PATH}/from/${countrySlug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbSchema(breadcrumbItems)) }}
      />
      <ToolCountryLandingTemplate
        toolName={TOOL_NAME}
        toolPath={TOOL_PATH}
        toolDescription={context.taskExplanation}
        countrySlug={countrySlug}
        countryLabel={context.countryLabel}
        toolSlug={TOOL_SLUG}
        context={context}
        relatedGuides={DOCUMENT_READINESS_RELATED_GUIDES}
        ctaLabel={CTA_LABEL}
        faq={[
          {
            id: "prefill",
            question: `Will the tool remember I'm from ${context.countryLabel}?`,
            answer: `When you open the tool from this page, origin is prefilled to ${context.countryLabel}. You can change it anytime inside the tool.`,
          },
          {
            id: "legalisation",
            question: `Do ${context.countryLabel} documents need an apostille?`,
            answer:
              context.documentConsiderations?.[0] ||
              `It depends on the document and the receiving authority. Check Netherlands Worldwide country guidance and confirm with the Dutch body that asked for the record.`,
          },
        ]}
      />
    </>
  );
}
