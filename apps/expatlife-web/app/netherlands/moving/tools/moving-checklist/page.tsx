import type { Metadata } from "next";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import {
  loadMovingChecklistMeta,
  loadMovingChecklistTaskData,
  loadMovingChecklistDocuments,
  loadMovingChecklistExamples,
  loadMovingChecklistFaq,
} from "@/src/lib/tools/loadMovingChecklistContent";
import { resolveMovingChecklist, GENERIC_DEFAULT_INPUT } from "@/src/lib/tools/moving-checklist";
import { buildDocumentsList, buildRelevantLinks } from "@/src/lib/tools/movingChecklistRules";
import {
  hasMovingChecklistParams,
  getMovingChecklistFullValuesFromSearchParams,
} from "@/src/lib/tools/movingChecklistInitialFromSearchParams";
import type { MovingChecklistInputExtended } from "@/src/lib/tools/moving-checklist/types";
import type { MovingChecklistInput } from "@/src/lib/tools/movingChecklistTypes";
import { ToolPageTemplate } from "@/src/components/tools/ToolPageTemplate";
import { MoveHero } from "@/components/page/move-shell";
import { MovingChecklistClient } from "@/src/components/tools/MovingChecklistClient";
import { ExamplesSection } from "@/src/components/tools/ExamplesSection";
import { buildSoftwareApplicationSchema } from "@/src/lib/seo/toolSchema";
import { buildBreadcrumbSchema, getToolBreadcrumbItems } from "@/src/lib/seo/breadcrumbSchema";
import { buildFaqSchema } from "@/src/lib/seo/faqSchema";
import {
  MOVING_HUB,
  PILLAR,
  MOVING_CHECKLIST_RELATED_GUIDES,
  MOVING_CHECKLIST_RELATED_TOOLS,
} from "@/src/lib/tools/shared/toolInternalLinks";
import Link from "next/link";

import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { MoveClusterToolPostValueBlock } from "@/src/components/monetization/MoveClusterToolPostValueBlock";

export const revalidate = CONTENT_REVALIDATE;

const canonical = "/netherlands/moving/tools/moving-checklist/";

export const metadata: Metadata = buildSocialMetadata({
  title: "Moving checklist for the Netherlands (free tool)",
  description:
    "Generate a personalized moving checklist for the Netherlands. See what to prepare before the move, after arrival, and during your first 90 days.",
  path: canonical,
  ogType: "website",
});

type PageProps = { searchParams?: Promise<Record<string, string | string[] | undefined>> };

export default async function MovingChecklistToolPage(props: PageProps) {
  const meta = loadMovingChecklistMeta();
  const taskData = loadMovingChecklistTaskData();
  const documents = loadMovingChecklistDocuments();
  const examples = loadMovingChecklistExamples();
  const faq = loadMovingChecklistFaq();

  if (!meta || !taskData || !documents) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 text-center">
        <p className="text-slate-600">Tool content could not be loaded. Please try again later.</p>
      </div>
    );
  }

  const emptyParams: Record<string, string | string[] | undefined> = {};
  const searchParamsResolved = await Promise.resolve(props.searchParams ?? emptyParams).catch(() => emptyParams);
  const searchParams = searchParamsResolved && typeof searchParamsResolved === "object" ? searchParamsResolved : emptyParams;

  const originCountries = meta.originCountries ?? [
    { value: "south-africa", label: "South Africa" },
    { value: "germany", label: "Germany" },
    { value: "united-kingdom", label: "United Kingdom" },
    { value: "other", label: "Other" },
  ];

  // Default generic result for initial load (SEO + useful baseline before user submits)
  const defaultResolved = resolveMovingChecklist(GENERIC_DEFAULT_INPUT, taskData);
  const legacyDefaultInput: MovingChecklistInput = {
    from: GENERIC_DEFAULT_INPUT.from,
    stage: GENERIC_DEFAULT_INPUT.stage,
    household: GENERIC_DEFAULT_INPUT.household,
    employment: GENERIC_DEFAULT_INPUT.employment,
    region: GENERIC_DEFAULT_INPUT.region,
    city: GENERIC_DEFAULT_INPUT.city ?? "",
  };
  const defaultDocuments = buildDocumentsList(legacyDefaultInput, { documents });
  const defaultLinks = buildRelevantLinks(legacyDefaultInput, meta.relatedLinks);

  // When URL has tool params, compute personalized result for initial state
  let initialResultJson: string | undefined;
  let initialDocumentsJson: string | undefined;
  let initialLinksJson: string | undefined;
  let initialValuesJson: string | undefined;
  let initialMode: "default" | "personalized" = "default";

  if (hasMovingChecklistParams(searchParams)) {
    const fullValues = getMovingChecklistFullValuesFromSearchParams(searchParams);
    const extendedInput: MovingChecklistInputExtended = {
      ...GENERIC_DEFAULT_INPUT,
      from: fullValues.from,
      stage: fullValues.stage as MovingChecklistInputExtended["stage"],
      household: fullValues.household as MovingChecklistInputExtended["household"],
      employment: fullValues.employment as MovingChecklistInputExtended["employment"],
      region: fullValues.region as MovingChecklistInputExtended["region"],
      city: fullValues.city ?? "",
      housingReadiness: fullValues.housingReadiness as MovingChecklistInputExtended["housingReadiness"],
      shippingNeeds: fullValues.shippingNeeds,
      kidsSchoolNeeds: fullValues.kidsSchoolNeeds,
      largeMoneyTransfer: fullValues.largeMoneyTransfer,
      hasCoreDocsReady: fullValues.hasCoreDocsReady,
      needsTemporaryHousing: fullValues.needsTemporaryHousing,
    };
    const legacyInput: MovingChecklistInput = {
      from: fullValues.from,
      stage: fullValues.stage as MovingChecklistInput["stage"],
      household: fullValues.household as MovingChecklistInput["household"],
      employment: fullValues.employment as MovingChecklistInput["employment"],
      region: fullValues.region as MovingChecklistInput["region"],
      city: fullValues.city || undefined,
    };
    const personalizedResolved = resolveMovingChecklist(extendedInput, taskData);
    const personalizedDocuments = buildDocumentsList(legacyInput, { documents });
    const personalizedLinks = buildRelevantLinks(legacyInput, meta.relatedLinks);
    initialResultJson = JSON.stringify(personalizedResolved);
    initialDocumentsJson = JSON.stringify(personalizedDocuments);
    initialLinksJson = JSON.stringify(personalizedLinks);
    initialValuesJson = JSON.stringify(fullValues);
    initialMode = "personalized";
  }

  const intro = (
    <>
      {meta.seo.introParagraphs?.map((p, i) => (
        <p key={i} className="mb-3">
          {p}
        </p>
      ))}
    </>
  );

  const pageTitle = "Moving Checklist for the Netherlands (Free Tool)";
  const pageDescription =
    "Generate a personalized moving checklist for the Netherlands. See what to prepare before the move, after arrival, and during your first 90 days.";
  const breadcrumbItems = getToolBreadcrumbItems("Moving Checklist", canonical);
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
        movingClusterHero
        hero={
          <MoveHero
            variant="tool"
            eyebrow="TOOL"
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
              subtitle="See sample checklists for different situations, then prefill the tool to get your own."
              showHeading={false}
              examples={examples}
              toolPath="/netherlands/moving/tools/moving-checklist"
              paramKeys={["from", "stage", "household", "employment", "region", "city", "housingReadiness", "shippingNeeds", "kidsSchoolNeeds", "largeMoneyTransfer", "hasCoreDocsReady", "needsTemporaryHousing"]}
              prefilledCtaLabel="Use this scenario"
            />
          ) : null
        }
        faqItems={faq}
        relatedGuides={MOVING_CHECKLIST_RELATED_GUIDES}
        internalLinkStrip={
          <nav className="flex flex-wrap gap-4 text-sm" aria-label="Moving hub, main guide, and related tools">
            <Link href={MOVING_HUB} className="font-medium text-brand-600 hover:text-brand-700">
              Moving hub
            </Link>
            <Link href={PILLAR} className="font-medium text-brand-600 hover:text-brand-700">
              Moving to the Netherlands guide
            </Link>
            {MOVING_CHECKLIST_RELATED_TOOLS.map((t) => (
              <Link key={t.href} href={t.href} className="font-medium text-brand-600 hover:text-brand-700">
                {t.label}
              </Link>
            ))}
          </nav>
        }
        postToolValue={<MoveClusterToolPostValueBlock preset="first90AndDocumentReadiness" />}
      >
        <MovingChecklistClient
          defaultResultJson={JSON.stringify(defaultResolved)}
          defaultDocumentsJson={JSON.stringify(defaultDocuments)}
          defaultLinksJson={JSON.stringify(defaultLinks)}
          initialResultJson={initialResultJson}
          initialDocumentsJson={initialDocumentsJson}
          initialLinksJson={initialLinksJson}
          initialValuesJson={initialValuesJson}
          initialMode={initialMode}
          taskDataJson={JSON.stringify(taskData)}
          documentsJson={JSON.stringify({ documents })}
          metaJson={JSON.stringify({
            hero: meta.hero,
            toolPanel: meta.toolPanel,
            results: meta.results,
            relatedLinks: meta.relatedLinks,
          })}
          originCountriesJson={JSON.stringify(originCountries)}
          signupCtaJson={JSON.stringify({
            title: "Save your relocation checklist",
            subtitle:
              "Create a free account to keep your plan, track progress, and unlock your full relocation workspace.",
            bullets: [
              "Save your checklist",
              "Track completed tasks",
              "Get timeline reminders",
              "Unlock deeper relocation tools",
            ],
            primaryCtaLabel: "Create free account",
            primaryCtaHref: "/signup",
            secondaryCtaLabel: "Maybe later",
          })}
          placementId="tool_moving_checklist_after_results"
        />
      </ToolPageTemplate>
    </>
  );
}
