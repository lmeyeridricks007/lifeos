import type { Metadata } from "next";
import Link from "next/link";
import { ToolPageTemplate } from "@/src/components/tools/ToolPageTemplate";
import { ToolHero } from "@/src/components/tools/ToolHero";
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
import { ARRIVAL_PLANNER_RELATED_GUIDES, ARRIVAL_PLANNER_RELATED_TOOLS } from "@/src/lib/tools/shared/toolInternalLinks";
import { buildSocialMetadata } from "@/lib/seo/metadata";

export const revalidate = 3600;

const canonical = "/netherlands/moving/tools/arrival-planner/";

export const metadata: Metadata = buildSocialMetadata({
  title: "Arrival planner for the Netherlands (free tool)",
  description:
    "Build a personalized arrival plan for the Netherlands. See what to prioritize in your first week, first month, and which steps often need appointments.",
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

  const intro = (
    <>
      {meta.seo.introParagraphs?.map((paragraph, index) => (
        <p key={index} className="mb-3">
          {paragraph}
        </p>
      ))}
    </>
  );

  const pageTitle = "Arrival Planner for the Netherlands (Free Tool)";
  const pageDescription =
    "Build a personalized arrival plan for the Netherlands. See what to prioritize in your first week, first month, and which steps often need appointments.";
  const breadcrumbItems = getToolBreadcrumbItems("Arrival Planner", canonical);
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
              subtitle="Explore realistic arrival situations and prefill the planner in one click."
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
        relatedGuides={ARRIVAL_PLANNER_RELATED_GUIDES}
        internalLinkStrip={
          <nav className="flex flex-wrap gap-4 text-sm" aria-label="Related guides and tools">
            {ARRIVAL_PLANNER_RELATED_GUIDES.slice(0, 6).map((g) => (
              <Link key={g.href} href={g.href} className="font-medium text-brand-600 hover:text-brand-700">
                {g.title}
              </Link>
            ))}
            {ARRIVAL_PLANNER_RELATED_TOOLS.map((t) => (
              <Link key={t.href} href={t.href} className="font-medium text-brand-600 hover:text-brand-700">
                {t.label}
              </Link>
            ))}
          </nav>
        }
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
