import type { Metadata } from "next";
import { ToolPageTemplate } from "@/src/components/tools/ToolPageTemplate";
import { MoveHero } from "@/components/page/move-shell";
import { ExamplesSection } from "@/src/components/tools/ExamplesSection";
import { ArrivalPlannerClient } from "@/src/components/tools/ArrivalPlannerClient";
import {
  loadArrivalPlannerDatasets,
  loadArrivalPlannerExamples,
  loadArrivalPlannerFaq,
  loadArrivalPlannerMeta,
  loadArrivalPlannerTaskData,
} from "@/src/lib/tools/loadArrivalPlannerContent";
import {
  getOriginMeta,
  ARRIVAL_GENERIC_DEFAULT_INPUT,
  resolveArrivalPlannerTasks,
  buildTaskResultSummary,
} from "@/src/lib/tools/arrival-planner";
import {
  buildFirstWeekMilestones,
  buildFirstMonthMilestones,
  buildAppointmentsList,
  buildRemindersList,
  buildArrivalSummary,
  buildArrivalRelatedLinks,
} from "@/src/lib/tools/arrivalPlannerRules";
import { getArrivalPlannerInitialFromSearchParams } from "@/src/lib/tools/arrivalPlannerInitialFromSearchParams";
import { buildSoftwareApplicationSchema } from "@/src/lib/seo/toolSchema";
import { buildBreadcrumbSchema, getToolBreadcrumbItems } from "@/src/lib/seo/breadcrumbSchema";
import { buildFaqSchema } from "@/src/lib/seo/faqSchema";
import type { ToolRelatedGuide } from "@/src/lib/tools/shared/toolPageContent";
import { buildSocialMetadata } from "@/lib/seo/metadata";

import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { MoveClusterToolPostValueBlock } from "@/src/components/monetization/MoveClusterToolPostValueBlock";

export const revalidate = CONTENT_REVALIDATE;

const canonical = "/netherlands/moving/tools/arrival-planner/";

export const metadata: Metadata = buildSocialMetadata({
  title: "Arrival planner for the Netherlands (free tool)",
  description:
    "Build a prioritized first-week and first-month plan for the Netherlands—tasks, appointments, and reminders based on your situation. About 2 minutes.",
  path: canonical,
  ogType: "website",
});

type PageProps = { searchParams?: Promise<Record<string, string | string[] | undefined>> };

export default async function ArrivalPlannerPage(props: PageProps) {
  const meta = loadArrivalPlannerMeta();
  const datasets = loadArrivalPlannerDatasets();
  const taskData = loadArrivalPlannerTaskData();
  const examples = loadArrivalPlannerExamples();
  const faq = loadArrivalPlannerFaq();
  const emptyParams: Record<string, string | string[] | undefined> = {};
  const searchParamsResolved = await Promise.resolve(props.searchParams ?? emptyParams).catch(() => emptyParams);
  const searchParams = searchParamsResolved && typeof searchParamsResolved === "object" ? searchParamsResolved : emptyParams;
  const initialValues = getArrivalPlannerInitialFromSearchParams(searchParams);

  if (!meta || !datasets) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 text-center">
        <p className="text-slate-600">Tool content could not be loaded. Please try again later.</p>
      </div>
    );
  }

  const legacyDefaultInput = {
    from: "south-africa",
    arrivalDate: "",
    addressStatus: "soon" as const,
    household: "solo" as const,
    needBankingSoon: "yes" as const,
  };

  const hasInitialParams = Object.keys(initialValues).length > 0;
  const mergedForPersonalized = hasInitialParams
    ? {
        from: initialValues.from ?? "south-africa",
        arrivalDate: initialValues.arrivalDate ?? "",
        addressStatus: initialValues.addressStatus ?? "soon",
        household: initialValues.household ?? "solo",
        needBankingSoon: initialValues.needBankingSoon ?? "yes",
      }
    : null;

  const defaultResultJson =
    taskData != null
      ? (() => {
          const originMeta = getOriginMeta(ARRIVAL_GENERIC_DEFAULT_INPUT.originCountry, taskData.countries);
          const tasks = resolveArrivalPlannerTasks(ARRIVAL_GENERIC_DEFAULT_INPUT, {
            genericTasks: taskData.genericTasks as Parameters<typeof resolveArrivalPlannerTasks>[1]["genericTasks"],
            overlayTasks: taskData.overlayTasks as Parameters<typeof resolveArrivalPlannerTasks>[1]["overlayTasks"],
            regionOverlays: taskData.regionOverlays,
            distanceOverlays: taskData.distanceOverlays,
            countryOverlays: taskData.countryOverlays,
            conditionOverlays: taskData.conditionOverlays,
            contacts: taskData.taskContacts,
            regionGroup: originMeta.regionGroup,
            distanceCategory: originMeta.distanceCategory,
          });
          const summary = buildTaskResultSummary(
            ARRIVAL_GENERIC_DEFAULT_INPUT,
            originMeta.regionGroup,
            originMeta.distanceCategory,
            originMeta.country?.label
          );
          return JSON.stringify({
            type: "tasks",
            summary,
            tasks,
            originCountry: originMeta.country,
            regionGroup: originMeta.regionGroup,
            distanceCategory: originMeta.distanceCategory,
          });
        })()
      : JSON.stringify({
          type: "legacy",
          summary: buildArrivalSummary(legacyDefaultInput, datasets),
          firstWeek: buildFirstWeekMilestones(legacyDefaultInput, datasets),
          firstMonth: buildFirstMonthMilestones(legacyDefaultInput, datasets),
          appointments: buildAppointmentsList(legacyDefaultInput, datasets),
          reminders: buildRemindersList(legacyDefaultInput, datasets),
          relatedLinks: buildArrivalRelatedLinks(legacyDefaultInput, datasets),
        });

  let initialResultJson: string | undefined;
  let initialMode: "default" | "personalized" = "default";

  if (hasInitialParams && mergedForPersonalized) {
    const input = mergedForPersonalized;
    if (taskData != null) {
      const originMeta = getOriginMeta(input.from, taskData.countries);
      const extendedInput = {
        originCountry: input.from,
        arrivalDate: input.arrivalDate || undefined,
        addressStatus: input.addressStatus,
        household: input.household,
        needBankingSoon: input.needBankingSoon,
        startingJobSoon: initialValues.startingJobSoon ?? false,
        thirtyRulingRelevant: initialValues.thirtyRulingRelevant ?? "unknown",
        planningToDrive: initialValues.planningToDrive ?? false,
        shippingHouseholdGoods: initialValues.shippingHouseholdGoods ?? false,
        documentPrepStatus: initialValues.documentPrepStatus ?? "unknown",
        familyAdminNeeded: initialValues.familyAdminNeeded ?? false,
      };
      const tasks = resolveArrivalPlannerTasks(extendedInput, {
        genericTasks: taskData.genericTasks as Parameters<typeof resolveArrivalPlannerTasks>[1]["genericTasks"],
        overlayTasks: taskData.overlayTasks as Parameters<typeof resolveArrivalPlannerTasks>[1]["overlayTasks"],
        regionOverlays: taskData.regionOverlays,
        distanceOverlays: taskData.distanceOverlays,
        countryOverlays: taskData.countryOverlays,
        conditionOverlays: taskData.conditionOverlays,
        contacts: taskData.taskContacts,
        regionGroup: originMeta.regionGroup,
        distanceCategory: originMeta.distanceCategory,
      });
      const summary = buildTaskResultSummary(
        extendedInput,
        originMeta.regionGroup,
        originMeta.distanceCategory,
        originMeta.country?.label
      );
      initialResultJson = JSON.stringify({
        type: "tasks",
        summary,
        tasks,
        originCountry: originMeta.country,
        regionGroup: originMeta.regionGroup,
        distanceCategory: originMeta.distanceCategory,
      });
    } else {
      initialResultJson = JSON.stringify({
        type: "legacy",
        summary: buildArrivalSummary(input, datasets),
        firstWeek: buildFirstWeekMilestones(input, datasets),
        firstMonth: buildFirstMonthMilestones(input, datasets),
        appointments: buildAppointmentsList(input, datasets),
        reminders: buildRemindersList(input, datasets),
        relatedLinks: buildArrivalRelatedLinks(input, datasets),
      });
    }
    initialMode = "personalized";
  }

  const pageTitle = "Arrival Planner for the Netherlands (Free Tool)";
  const pageDescription =
    "Build a prioritized first-week and first-month plan for the Netherlands—tasks, appointments, and reminders based on your situation.";
  const breadcrumbItems = getToolBreadcrumbItems("Arrival Planner", canonical);
  const breadcrumbJsonLd = buildBreadcrumbSchema(breadcrumbItems);
  const softwareAppJsonLd = buildSoftwareApplicationSchema({
    name: pageTitle,
    description: pageDescription,
    url: canonical,
    applicationCategory: "PlanningApplication",
  });
  const faqJsonLd = buildFaqSchema(faq.map((q) => ({ question: q.question, answer: q.answer })));

  const nextSteps: ToolRelatedGuide[] = [
    {
      href: "/netherlands/document-readiness-checker/",
      title: "Document Readiness Checker",
      description: "See which documents to prepare before and after arrival.",
    },
    {
      href: "/netherlands/moving/tools/moving-checklist/",
      title: "Moving checklist",
      description: "Pre-move tasks and deadlines in one place.",
    },
    {
      href: "/netherlands/municipality-registration-netherlands/",
      title: "Municipality registration & BSN",
      description: "How registration works and what to bring.",
    },
    {
      href: "/netherlands/moving/tools/first-90-days/",
      title: "First 90 Days Planner",
      description: "Plan week 2 through month 3 after landing.",
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      ) : null}

      <ToolPageTemplate
        movingClusterHero
        contentOrder="tool-first"
        mainSectionTitle="Arrival planner"
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
        disclosure={meta.disclosure}
        explanatorySections={meta.explanatorySections}
        examplesSection={
          examples.length > 0 ? (
            <ExamplesSection
              title="Example scenarios"
              subtitle="Prefill the planner from a realistic situation—one click."
              showHeading={false}
              examples={examples.map((example) => ({
                id: example.id,
                title: example.title,
                summary: example.summary,
                inputs: example.inputs as Record<string, string>,
                topTasks: example.firstWeekHighlights.slice(0, 3),
              }))}
              toolPath="/netherlands/moving/tools/arrival-planner"
              paramKeys={["from", "arrivalDate", "addressStatus", "household", "needBankingSoon", "startingJobSoon", "thirtyRulingRelevant", "planningToDrive", "shippingHouseholdGoods", "documentPrepStatus", "familyAdminNeeded"]}
              prefilledCtaLabel="Use this scenario"
            />
          ) : null
        }
        faqItems={faq}
        relatedGuides={nextSteps}
        postToolValue={<MoveClusterToolPostValueBlock preset="movingChecklistAndFirst90" />}
      >
        <ArrivalPlannerClient
          defaultResultJson={defaultResultJson}
          initialResultJson={initialResultJson}
          initialMode={initialMode}
          initialValuesJson={JSON.stringify(initialValues)}
          datasetsJson={JSON.stringify(datasets)}
          taskDataJson={taskData ? JSON.stringify(taskData) : undefined}
          metaJson={JSON.stringify({ toolPanel: meta.toolPanel, results: meta.results })}
          originCountriesJson={JSON.stringify(meta.originCountries ?? [])}
          signupCtaJson={JSON.stringify({
            title: "Save your arrival plan",
            subtitle:
              "Create a free account to keep your milestones, track what's done, and unlock a fuller relocation workspace.",
            bullets: [
              "save your plan",
              "track completed arrival tasks",
              "keep reminders in one place",
              "unlock more personalized planning tools",
            ],
            primaryCtaLabel: "Create free account",
            primaryCtaHref: "/signup",
            secondaryCtaLabel: "Maybe later",
          })}
          placementId="tool_arrival_planner_after_results"
        />
      </ToolPageTemplate>
    </>
  );
}
