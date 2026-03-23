import type { Metadata } from "next";
import Link from "next/link";
import { ToolPageTemplate } from "@/src/components/tools/ToolPageTemplate";
import { ToolHero } from "@/src/components/tools/ToolHero";
import { ExamplesSection } from "@/src/components/tools/ExamplesSection";
import { DocumentReadinessClient } from "@/src/components/tools/DocumentReadinessClient";
import {
  loadDocumentReadinessDatasets,
  loadDocumentReadinessExamples,
  loadDocumentReadinessFaq,
  loadDocumentReadinessMeta,
} from "@/src/lib/tools/loadDocumentReadinessContent";
import {
  buildDocumentChecklist,
  buildMissingDocuments,
  buildPackOutline,
  buildReadinessScore,
  buildDocumentSummary,
} from "@/src/lib/tools/documentReadinessRules";
import {
  hasDocumentReadinessParams,
  getDocumentReadinessInitialFromSearchParams,
} from "@/src/lib/tools/documentReadinessInitialFromSearchParams";
import { buildSoftwareApplicationSchema } from "@/src/lib/seo/toolSchema";
import { buildBreadcrumbSchema, getToolBreadcrumbItems } from "@/src/lib/seo/breadcrumbSchema";
import { buildFaqSchema } from "@/src/lib/seo/faqSchema";
import { DOCUMENT_READINESS_RELATED_GUIDES, DOCUMENT_READINESS_RELATED_TOOLS } from "@/src/lib/tools/shared/toolInternalLinks";
import { buildSocialMetadata } from "@/lib/seo/metadata";

import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

const canonical = "/netherlands/moving/tools/document-readiness/";

export const metadata: Metadata = buildSocialMetadata({
  title: "Document readiness checker for moving to the Netherlands (free tool)",
  description:
    "Check which documents expats often prepare when moving to the Netherlands. Build a personalized checklist and see what may still be missing.",
  path: canonical,
  ogType: "website",
});

const DOCUMENT_READINESS_DEFAULTS = {
  scenario: "work" as const,
  hasPassport: "yes" as const,
  hasCivilCertificates: "no" as const,
  hasProofOfAddress: "soon" as const,
  hasEmploymentDocs: "yes" as const,
  from: "south-africa",
  notes: "",
};

type PageProps = { searchParams?: Promise<Record<string, string | string[] | undefined>> };

export default async function DocumentReadinessPage(props: PageProps) {
  const meta = loadDocumentReadinessMeta();
  const datasets = loadDocumentReadinessDatasets();
  const examples = loadDocumentReadinessExamples();
  const faq = loadDocumentReadinessFaq();

  const emptyParams: Record<string, string | string[] | undefined> = {};
  const searchParamsResolved = await Promise.resolve(props.searchParams ?? emptyParams).catch(() => emptyParams);
  const searchParams = searchParamsResolved && typeof searchParamsResolved === "object" ? searchParamsResolved : emptyParams;

  const hasParams = hasDocumentReadinessParams(searchParams);
  const initialValuesPartial = hasParams ? getDocumentReadinessInitialFromSearchParams(searchParams) : null;
  const initialValues = initialValuesPartial
    ? { ...DOCUMENT_READINESS_DEFAULTS, ...initialValuesPartial }
    : null;

  if (!meta || !datasets) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 text-center">
        <p className="text-slate-600">Tool content could not be loaded. Please try again later.</p>
      </div>
    );
  }

  const genericDefaultInput = {
    scenario: "work" as const,
    hasPassport: "yes" as const,
    hasCivilCertificates: "no" as const,
    hasProofOfAddress: "soon" as const,
    hasEmploymentDocs: "yes" as const,
    from: "south-africa",
    notes: "",
  };
  const defaultResult = {
    summary: buildDocumentSummary(genericDefaultInput, datasets),
    readiness: buildReadinessScore(genericDefaultInput, datasets),
    packOutline: buildPackOutline(genericDefaultInput, datasets),
    missingDocuments: buildMissingDocuments(genericDefaultInput, datasets),
    checklist: buildDocumentChecklist(genericDefaultInput, datasets),
  };
  const defaultResultJson = JSON.stringify(defaultResult);

  let initialResultJson: string | undefined;
  let initialValuesJson: string | undefined;
  let initialMode: "default" | "personalized" = "default";

  if (hasParams && initialValues) {
    const personalizedResult = {
      summary: buildDocumentSummary(initialValues, datasets),
      readiness: buildReadinessScore(initialValues, datasets),
      packOutline: buildPackOutline(initialValues, datasets),
      missingDocuments: buildMissingDocuments(initialValues, datasets),
      checklist: buildDocumentChecklist(initialValues, datasets),
    };
    initialResultJson = JSON.stringify(personalizedResult);
    initialValuesJson = JSON.stringify(initialValues);
    initialMode = "personalized";
  }

  const intro = (
    <>
      {meta.seo.introParagraphs?.map((paragraph, index) => (
        <p key={index} className="mb-3">
          {paragraph}
        </p>
      ))}
    </>
  );

  const pageTitle = "Document Readiness Checker for Moving to the Netherlands (Free Tool)";
  const pageDescription =
    "Check which documents expats often prepare when moving to the Netherlands. Build a personalized checklist and see what may still be missing.";
  const breadcrumbItems = getToolBreadcrumbItems("Document Readiness Checker", canonical);
  const breadcrumbJsonLd = buildBreadcrumbSchema(breadcrumbItems);
  const softwareAppJsonLd = buildSoftwareApplicationSchema({
    name: pageTitle,
    description: pageDescription,
    url: canonical,
    applicationCategory: "PlanningApplication",
  });
  const faqJsonLd = buildFaqSchema(faq.map((q) => ({ question: q.question, answer: q.answer })));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      ) : null}

      <ToolPageTemplate
        hero={
          <ToolHero
            eyebrow="Tool"
            title={meta.hero.title}
            subtitle={meta.hero.subtitle}
            introBullets={meta.hero.introBullets}
            primaryCtaLabel={meta.hero.primaryCtaLabel}
            primaryCtaScrollToId="tool-inputs"
            secondaryCtaLabel={meta.hero.secondaryCtaLabel}
            secondaryCtaHref={meta.hero.secondaryCtaHref}
            image={meta.hero.image}
            imageFallback={meta.hero.imageFallback}
          />
        }
        intro={intro}
        disclosure={meta.disclosure}
        explanatorySections={meta.explanatorySections}
        infographic={meta.infographic}
        examplesSection={
          examples.length > 0 ? (
            <ExamplesSection
              title="Example scenarios"
              subtitle="See realistic document situations and prefill the checker in one click."
              showHeading={false}
              examples={examples.map((example) => ({
                id: example.id,
                title: example.title,
                summary: example.summary,
                inputs: example.inputs as Record<string, string>,
                topTasks: example.topMissingDocuments.slice(0, 3),
              }))}
              toolPath="/netherlands/moving/tools/document-readiness"
              paramKeys={[
                "scenario",
                "hasPassport",
                "hasCivilCertificates",
                "hasProofOfAddress",
                "hasEmploymentDocs",
                "from",
              ]}
              prefilledCtaLabel="Use this scenario"
            />
          ) : null
        }
        faqItems={faq}
        relatedGuides={DOCUMENT_READINESS_RELATED_GUIDES}
        internalLinkStrip={
          <nav className="flex flex-wrap gap-4 text-sm" aria-label="Related guides and tools">
            {DOCUMENT_READINESS_RELATED_GUIDES.slice(0, 6).map((g) => (
              <Link key={g.href} href={g.href} className="font-medium text-brand-600 hover:text-brand-700">
                {g.title}
              </Link>
            ))}
            {DOCUMENT_READINESS_RELATED_TOOLS.map((t) => (
              <Link key={t.href} href={t.href} className="font-medium text-brand-600 hover:text-brand-700">
                {t.label}
              </Link>
            ))}
          </nav>
        }
      >
        <DocumentReadinessClient
          defaultResultJson={defaultResultJson}
          initialResultJson={initialResultJson}
          initialValuesJson={initialValuesJson}
          initialMode={initialMode}
          datasetsJson={JSON.stringify(datasets)}
          metaJson={JSON.stringify({
            toolPanel: meta.toolPanel,
            results: meta.results,
            infographic: meta.infographic,
          })}
          originCountriesJson={JSON.stringify(meta.originCountries ?? [])}
          signupCtaJson={JSON.stringify({
            title: "Save your document checklist",
            subtitle: "Create a free account to keep track of your documents, notes, and missing items.",
            bullets: [
              "save your document checklist",
              "store document notes",
              "track what is missing",
              "unlock your future document vault",
            ],
            primaryCtaLabel: "Create free account",
            primaryCtaHref: "/signup",
            secondaryCtaLabel: "Maybe later",
          })}
          placementId="tool_document_readiness_after_results"
        />
      </ToolPageTemplate>
    </>
  );
}
