import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolCountryLandingTemplate } from "@/src/components/tools/shared/ToolCountryLandingTemplate";
import { getCountryLandingContent, getSupportedOriginCountrySlugs, isValidToolCountryLanding } from "@/src/lib/tools/shared/loadCountryLandingContent";
import { getOriginCountryLabel } from "@/src/lib/tools/shared/toolCountryContext";
import { ARRIVAL_PLANNER_RELATED_GUIDES } from "@/src/lib/tools/shared/toolInternalLinks";
import { buildBreadcrumbSchema, getToolBreadcrumbItems } from "@/src/lib/seo/breadcrumbSchema";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

const TOOL_PATH = "/netherlands/moving/tools/arrival-planner/";
const TOOL_NAME = "Arrival Planner";
const TOOL_DESCRIPTION =
  "Build a personalized arrival plan for your first week and first month in the Netherlands. Prioritize registration, BSN, and banking.";
const CTA_LABEL = "Build my arrival plan";

type PageProps = { params: Promise<{ country: string }> | { country: string } };

export async function generateStaticParams() {
  return getSupportedOriginCountrySlugs().map((country) => ({ country }));
}

/** Return plain JSON-serializable metadata only to avoid DataCloneError in Next.js metadata resolution. */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const country = typeof params === "object" && "then" in params ? (await params).country : params.country;
  const label = getOriginCountryLabel(country);
  const title = `${TOOL_NAME} for the Netherlands — from ${label} (Free Tool)`;
  const description = `Arriving in the Netherlands from ${label}? Plan your first days: registration, BSN, bank account, and health insurance.`;
  const canonical = `${TOOL_PATH}from/${country}/`;
  const raw = {
    title: String(title),
    description: String(description),
    alternates: { canonical: String(canonical) },
    openGraph: { title: String(title), description: String(description), url: String(canonical) },
  };
  return JSON.parse(JSON.stringify(raw)) as Metadata;
}

export default async function ArrivalPlannerFromCountryPage(props: PageProps) {
  const params = await Promise.resolve(props.params);
  const countrySlug = typeof params === "object" && "country" in params ? params.country : "";
  if (!isValidToolCountryLanding(countrySlug, "arrival-planner")) notFound();

  const content = getCountryLandingContent(countrySlug, "arrival-planner");
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
    ...getToolBreadcrumbItems("Arrival Planner", TOOL_PATH),
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
        relatedGuides={ARRIVAL_PLANNER_RELATED_GUIDES}
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
