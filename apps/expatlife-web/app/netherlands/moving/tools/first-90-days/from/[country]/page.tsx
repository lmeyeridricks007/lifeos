import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolCountryLandingTemplate } from "@/src/components/tools/shared/ToolCountryLandingTemplate";
import { getCountryLandingContent, getSupportedOriginCountrySlugs, isValidToolCountryLanding } from "@/src/lib/tools/shared/loadCountryLandingContent";
import { getOriginCountryLabel } from "@/src/lib/tools/shared/toolCountryContext";
import { FIRST_90_DAYS_RELATED_GUIDES } from "@/src/lib/tools/shared/toolInternalLinks";
import { buildBreadcrumbSchema, getToolBreadcrumbItems } from "@/src/lib/seo/breadcrumbSchema";

export const revalidate = 3600;

const TOOL_PATH = "/netherlands/moving/tools/first-90-days/";
const TOOL_NAME = "First 90 Days Planner";
const TOOL_DESCRIPTION =
  "Create a week-by-week plan for your first 90 days in the Netherlands. DigiD, GP, recurring payments, transport, and integration.";
const CTA_LABEL = "Create my 90-day plan";

type PageProps = { params: Promise<{ country: string }> | { country: string } };

export async function generateStaticParams() {
  return getSupportedOriginCountrySlugs().map((country) => ({ country }));
}

/** Return plain JSON-serializable metadata only to avoid DataCloneError in Next.js metadata resolution. */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const country = typeof params === "object" && "then" in params ? (await params).country : params.country;
  const label = getOriginCountryLabel(country);
  const title = `${TOOL_NAME} for the Netherlands — from ${label} (Free Tool)`;
  const description = `Settling in the Netherlands from ${label}? Plan your first 90 days: DigiD, healthcare, transport, and daily routines.`;
  const canonical = `${TOOL_PATH}from/${country}/`;
  const raw = {
    title: String(title),
    description: String(description),
    alternates: { canonical: String(canonical) },
    openGraph: { title: String(title), description: String(description), url: String(canonical) },
  };
  return JSON.parse(JSON.stringify(raw)) as Metadata;
}

export default async function First90DaysFromCountryPage(props: PageProps) {
  const params = await Promise.resolve(props.params);
  const countrySlug = typeof params === "object" && "country" in params ? params.country : "";
  if (!isValidToolCountryLanding(countrySlug, "first-90-days")) notFound();

  const content = getCountryLandingContent(countrySlug, "first-90-days");
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
    ...getToolBreadcrumbItems("First 90 Days Planner", TOOL_PATH),
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
        relatedGuides={FIRST_90_DAYS_RELATED_GUIDES}
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
