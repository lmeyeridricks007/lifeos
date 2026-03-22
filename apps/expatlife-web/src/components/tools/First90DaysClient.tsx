"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { SegmentedControl } from "@/components/ui/segmented-control";
import { ToolInputsCard } from "./ToolInputsCard";
import { ToolResultsLoading } from "./ToolResultsLoading";
import { SignupCTA } from "./SignupCTA";
import { AffiliateBlockView } from "@/src/components/affiliates/AffiliateBlockView";
import type { AffiliatePlacement, AffiliateProvider } from "@/src/lib/affiliates/types";
import {
  resolveNinetyDayPlan,
  resolveNinetyDayTasks,
  resolveNinetyDayUnknowns,
  resolveNinetyDayAffiliates,
  type First90DaysInputExtended,
  type NinetyDayTask,
  type NinetyDayUnknown,
  type TasksByPhase,
  type NinetyDayPhase,
} from "@/src/lib/tools/first-90-days";
import type { First90DaysDatasetsV2, First90DaysInput } from "@/src/lib/tools/loadFirst90DaysContent";
import {
  NinetyDayRoadmapSummary,
  NinetyDayProgressBar,
  NinetyDayTimelineSection,
  NinetyDayUnknownsPanel,
} from "./first-90-days";
import { ToolResultsHeader } from "./shared/ToolResultsHeader";
import { build90DayRelatedLinks } from "@/src/lib/tools/first90DaysRules";

const STORAGE_KEY = "expatlife-first-90-days-inputs";
const PROGRESS_KEY = "expatlife-first-90-days-completed";
const GLOBAL_ORIGIN_KEYS = ["expatlife-origin", "expatlife-origin-country"] as const;
const PARAM_KEYS = [
  "arrivalStage",
  "household",
  "startingJobSoon",
  "needsIntegrationAwareness",
  "from",
  "arrivalDate",
  "needsDrivingSoon",
  "housingSituation",
  "hasBankAccountAlready",
  "hasBSNAlready",
  "wantsLanguageSupport",
  "hasKidsAdminNeeds",
  "needsUtilitiesSetup",
] as const;

type First90DaysInputValues = First90DaysInputExtended & {
  arrivalDate: string;
};

const DEFAULTS: First90DaysInputValues = {
  arrivalStage: "arriving-soon",
  household: "solo",
  startingJobSoon: "yes",
  needsIntegrationAwareness: "yes",
  from: "south-africa",
  arrivalDate: "",
  needsDrivingSoon: false,
  housingSituation: "temporary",
  hasBankAccountAlready: false,
  hasBSNAlready: false,
  wantsLanguageSupport: false,
  hasKidsAdminNeeds: false,
  needsUtilitiesSetup: true,
};

function getGlobalOrigin(): string | null {
  if (typeof window === "undefined") return null;
  for (const key of GLOBAL_ORIGIN_KEYS) {
    const value = window.localStorage.getItem(key);
    if (value) return value;
  }
  return null;
}

function getValuesFromSearchParams(searchParams: URLSearchParams): Partial<First90DaysInputValues> {
  const out: Partial<First90DaysInputValues> = {};
  const arrivalStage = searchParams.get("arrivalStage");
  const household = searchParams.get("household");
  const startingJobSoon = searchParams.get("startingJobSoon");
  const needsIntegrationAwareness = searchParams.get("needsIntegrationAwareness");
  const from = searchParams.get("from");
  const arrivalDate = searchParams.get("arrivalDate");
  const needsDrivingSoon = searchParams.get("needsDrivingSoon");
  const housingSituation = searchParams.get("housingSituation");
  const hasBankAccountAlready = searchParams.get("hasBankAccountAlready");
  const hasBSNAlready = searchParams.get("hasBSNAlready");
  const wantsLanguageSupport = searchParams.get("wantsLanguageSupport");
  const hasKidsAdminNeeds = searchParams.get("hasKidsAdminNeeds");
  const needsUtilitiesSetup = searchParams.get("needsUtilitiesSetup");

  if (
    arrivalStage === "arriving-soon" ||
    arrivalStage === "already-arrived" ||
    arrivalStage === "arrived-a-while-ago"
  )
    out.arrivalStage = arrivalStage;
  if (household === "solo" || household === "partner" || household === "kids") out.household = household;
  if (startingJobSoon === "yes" || startingJobSoon === "no") out.startingJobSoon = startingJobSoon;
  if (needsIntegrationAwareness === "yes" || needsIntegrationAwareness === "no")
    out.needsIntegrationAwareness = needsIntegrationAwareness;
  if (from) out.from = from;
  if (arrivalDate) out.arrivalDate = arrivalDate;
  if (needsDrivingSoon === "true") out.needsDrivingSoon = true;
  if (needsDrivingSoon === "false") out.needsDrivingSoon = false;
  if (
    housingSituation === "temporary" ||
    housingSituation === "stable-rental" ||
    housingSituation === "still-looking" ||
    housingSituation === "with-family-or-friends"
  )
    out.housingSituation = housingSituation;
  if (hasBankAccountAlready === "true") out.hasBankAccountAlready = true;
  if (hasBankAccountAlready === "false") out.hasBankAccountAlready = false;
  if (hasBSNAlready === "true") out.hasBSNAlready = true;
  if (hasBSNAlready === "false") out.hasBSNAlready = false;
  if (wantsLanguageSupport === "true") out.wantsLanguageSupport = true;
  if (wantsLanguageSupport === "false") out.wantsLanguageSupport = false;
  if (hasKidsAdminNeeds === "true") out.hasKidsAdminNeeds = true;
  if (hasKidsAdminNeeds === "false") out.hasKidsAdminNeeds = false;
  if (needsUtilitiesSetup === "true") out.needsUtilitiesSetup = true;
  if (needsUtilitiesSetup === "false") out.needsUtilitiesSetup = false;

  return out;
}

function reorderAffiliateItems(
  items: Array<{ provider: AffiliateProvider; reason: string; meta?: Record<string, string> }>,
  categoryOrder: string[]
) {
  const indexByCategory = new Map(categoryOrder.map((category, idx) => [category, idx]));
  return [...items].sort((a, b) => {
    const aIndex = Math.min(...a.provider.categoryIds.map((id) => indexByCategory.get(id) ?? 999));
    const bIndex = Math.min(...b.provider.categoryIds.map((id) => indexByCategory.get(id) ?? 999));
    return aIndex - bIndex;
  });
}

function parseCompletedIds(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = window.localStorage.getItem(PROGRESS_KEY);
    if (!raw) return new Set();
    const arr = JSON.parse(raw) as string[];
    return new Set(Array.isArray(arr) ? arr : []);
  } catch {
    return new Set();
  }
}

export function First90DaysClient({
  initialValuesJson,
  initialMode,
  datasetsV2Json,
  metaJson,
  originCountriesJson,
  signupCtaJson,
  placementId,
}: {
  initialValuesJson?: string;
  initialMode?: "default" | "personalized";
  datasetsV2Json: string;
  metaJson: string;
  originCountriesJson: string;
  signupCtaJson: string;
  placementId: string;
}) {
  const datasets = useMemo(() => JSON.parse(datasetsV2Json) as First90DaysDatasetsV2, [datasetsV2Json]);
  const meta = useMemo(
    () =>
      JSON.parse(metaJson) as {
        toolPanel: { whatYouGetTitle: string; whatYouGetItems: string[] };
        results: { title: string };
      },
    [metaJson]
  );
  const originCountries = useMemo(
    () => JSON.parse(originCountriesJson) as Array<{ value: string; label: string }>,
    [originCountriesJson]
  );
  const signupCta = useMemo(
    () =>
      JSON.parse(signupCtaJson) as {
        title: string;
        subtitle: string;
        bullets: string[];
        primaryCtaLabel: string;
        primaryCtaHref: string;
        secondaryCtaLabel: string;
      },
    [signupCtaJson]
  );

  const genericTasks = useMemo(
    () => (datasets.genericTasks ?? []) as NinetyDayTask[],
    [datasets.genericTasks]
  );
  const countryTasks = useMemo(
    () => (datasets.countryTasks ?? []) as NinetyDayTask[],
    [datasets.countryTasks]
  );
  const unknownsData = useMemo(
    () => (datasets.unknowns ?? []) as NinetyDayUnknown[],
    [datasets.unknowns]
  );
  const taskContacts = useMemo(() => datasets.taskContacts ?? null, [datasets.taskContacts]);

  const serverInitialValues = useMemo((): Partial<First90DaysInputValues> => {
    if (!initialValuesJson) return {};
    try {
      return JSON.parse(initialValuesJson) as Partial<First90DaysInputValues>;
    } catch {
      return {};
    }
  }, [initialValuesJson]);

  const [values, setValues] = useState<First90DaysInputValues>(() => {
    if (Object.keys(serverInitialValues).length > 0) return { ...DEFAULTS, ...serverInitialValues } as First90DaysInputValues;
    if (typeof window === "undefined") return DEFAULTS;
    const fromQuery = getValuesFromSearchParams(new URLSearchParams(window.location.search));
    if (Object.keys(fromQuery).length > 0) return { ...DEFAULTS, ...fromQuery };
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) return { ...DEFAULTS, ...(JSON.parse(raw) as Partial<First90DaysInputValues>) };
    } catch {
      // ignore
    }
    const globalOrigin = getGlobalOrigin();
    if (globalOrigin) return { ...DEFAULTS, from: globalOrigin };
    return DEFAULTS;
  });

  const startWithPersonalized = initialMode === "personalized" && Object.keys(serverInitialValues).length > 0;
  const [completedIds, setCompletedIds] = useState<Set<string>>(parseCompletedIds);
  const [hasGenerated, setHasGenerated] = useState(startWithPersonalized);
  const [mode, setMode] = useState<"default" | "personalized">(() => (startWithPersonalized ? "personalized" : "default"));
  const [affiliateData, setAffiliateData] = useState<{
    placement: AffiliatePlacement;
    items: Array<{ provider: AffiliateProvider; reason: string; meta?: Record<string, string> }>;
  } | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const input: First90DaysInputExtended = useMemo(
    () => ({
      arrivalStage: values.arrivalStage,
      household: values.household,
      startingJobSoon: values.startingJobSoon,
      needsIntegrationAwareness: values.needsIntegrationAwareness,
      from: values.from,
      arrivalDate: values.arrivalDate || undefined,
      needsDrivingSoon: values.needsDrivingSoon,
      housingSituation: values.housingSituation,
      hasBankAccountAlready: values.hasBankAccountAlready,
      hasBSNAlready: values.hasBSNAlready,
      wantsLanguageSupport: values.wantsLanguageSupport,
      hasKidsAdminNeeds: values.hasKidsAdminNeeds,
      needsUtilitiesSetup: values.needsUtilitiesSetup,
    }),
    [values]
  );

  const roadmap = useMemo(
    () => resolveNinetyDayPlan(input),
    [input]
  );
  const tasksByPhase = useMemo(
    () =>
      resolveNinetyDayTasks(
        input,
        genericTasks,
        countryTasks,
        datasets.countryOverlays,
        datasets.conditionOverlays
      ),
    [input, genericTasks, countryTasks, datasets.countryOverlays, datasets.conditionOverlays]
  );
  const unknowns = useMemo(
    () => resolveNinetyDayUnknowns(input, unknownsData),
    [input, unknownsData]
  );
  const affiliateContext = useMemo(
    () =>
      resolveNinetyDayAffiliates(input, datasets.affiliateMapping as Parameters<typeof resolveNinetyDayAffiliates>[1]),
    [input, datasets.affiliateMapping]
  );
  const relatedLinks = useMemo(
    () =>
      build90DayRelatedLinks(
        { ...input, arrivalDate: input.arrivalDate },
        { milestones: { week1to2: [], week3to4: [], month2: [], month3: [] }, unknowns: [], readinessRules: { weights: {} as Record<keyof First90DaysInput, number>, bands: [] } }
      ),
    [input]
  );

  const totalTasks = useMemo(() => {
    let n = 0;
    const phases: NinetyDayPhase[] = [
      "arrival-carry-over",
      "early-setup",
      "stabilizing-routines",
      "longer-term-setup",
    ];
    for (const p of phases) n += (tasksByPhase[p] ?? []).length;
    return n;
  }, [tasksByPhase]);

  const updateUrl = useCallback((nextValues: First90DaysInputValues) => {
    const params = new URLSearchParams();
    for (const key of PARAM_KEYS) {
      const value = nextValues[key as keyof First90DaysInputValues];
      if (value !== undefined && value !== null && value !== "")
        params.set(key, String(value));
    }
    const q = params.toString();
    const url = q ? `${window.location.pathname}?${q}` : window.location.pathname;
    window.history.replaceState({}, "", url);
  }, []);

  const handleToggleComplete = useCallback((taskId: string) => {
    setCompletedIds((prev) => {
      const next = new Set(prev);
      if (next.has(taskId)) next.delete(taskId);
      else next.add(taskId);
      try {
        window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(Array.from(next)));
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const persistAndGenerate = useCallback(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
      window.localStorage.setItem("expatlife-origin", values.from);
      window.localStorage.setItem("expatlife-origin-country", values.from);
    } catch {
      // ignore
    }
    updateUrl(values);
    setHasGenerated(true);
    setMode("personalized");
    setAffiliateData(null);
    fetch(
      `/api/affiliate-placement?placementId=${encodeURIComponent(
        placementId
      )}&destination=netherlands&origin=${encodeURIComponent(values.from)}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data?.placement || !data?.items) return;
        setAffiliateData({
          placement: {
            ...data.placement,
            categoryOrder: affiliateContext.categoryOrder,
          } as AffiliatePlacement,
          items: reorderAffiliateItems(data.items, affiliateContext.categoryOrder),
        });
      })
      .catch(() => {});
  }, [affiliateContext.categoryOrder, placementId, updateUrl, values]);

  const handleGenerate = useCallback(() => {
    setIsGenerating(true);
    persistAndGenerate();
    setTimeout(() => setIsGenerating(false), 800);
  }, [persistAndGenerate]);

  const handleReset = useCallback(() => {
    setHasGenerated(false);
    setMode("default");
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fromQuery = getValuesFromSearchParams(new URLSearchParams(window.location.search));
    if (Object.keys(fromQuery).length > 0) {
      setValues((prev) => ({ ...prev, ...fromQuery }));
      return;
    }
    const globalOrigin = getGlobalOrigin();
    if (globalOrigin) setValues((prev) => ({ ...prev, from: prev.from || globalOrigin }));
  }, []);

  return (
    <>
      <ToolInputsCard
        mode="custom"
        title="Your settlement situation"
        generateLabel="Create my 90-day plan"
        onGenerate={handleGenerate}
        isGenerating={isGenerating}
        originCountries={originCountries}
        originValue={values.from}
        onOriginChange={(from) => setValues((prev) => ({ ...prev, from }))}
        whatYouGetTitle={meta.toolPanel.whatYouGetTitle}
        whatYouGetItems={meta.toolPanel.whatYouGetItems}
        customForm={
          <>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Arrival stage</label>
              <SegmentedControl
                name="arrivalStage"
                options={[
                  { value: "arriving-soon", label: "Arriving soon" },
                  { value: "already-arrived", label: "Already arrived" },
                  { value: "arrived-a-while-ago", label: "Arrived a while ago" },
                ]}
                value={values.arrivalStage}
                onChange={(arrivalStage) =>
                  setValues((prev) => ({
                    ...prev,
                    arrivalStage: arrivalStage as First90DaysInputValues["arrivalStage"],
                  }))
                }
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Household</label>
              <SegmentedControl
                name="household"
                options={[
                  { value: "solo", label: "Solo" },
                  { value: "partner", label: "Partner" },
                  { value: "kids", label: "Kids" },
                ]}
                value={values.household}
                onChange={(household) =>
                  setValues((prev) => ({ ...prev, household: household as First90DaysInputValues["household"] }))
                }
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Starting job soon</label>
              <SegmentedControl
                name="startingJobSoon"
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                ]}
                value={values.startingJobSoon}
                onChange={(startingJobSoon) =>
                  setValues((prev) => ({
                    ...prev,
                    startingJobSoon: startingJobSoon as First90DaysInputValues["startingJobSoon"],
                  }))
                }
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Needs integration awareness
              </label>
              <SegmentedControl
                name="needsIntegrationAwareness"
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                ]}
                value={values.needsIntegrationAwareness}
                onChange={(needsIntegrationAwareness) =>
                  setValues((prev) => ({
                    ...prev,
                    needsIntegrationAwareness:
                      needsIntegrationAwareness as First90DaysInputValues["needsIntegrationAwareness"],
                  }))
                }
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Housing situation
              </label>
              <SegmentedControl
                name="housingSituation"
                options={[
                  { value: "temporary", label: "Temporary" },
                  { value: "stable-rental", label: "Stable rental" },
                  { value: "still-looking", label: "Still looking" },
                  { value: "with-family-or-friends", label: "With family or friends" },
                ]}
                value={values.housingSituation ?? "temporary"}
                onChange={(housingSituation) =>
                  setValues((prev) => ({
                    ...prev,
                    housingSituation: housingSituation as First90DaysInputValues["housingSituation"],
                  }))
                }
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Do you already have a Dutch bank account?
              </label>
              <SegmentedControl
                name="hasBankAccountAlready"
                options={[
                  { value: "no", label: "No" },
                  { value: "yes", label: "Yes" },
                ]}
                value={values.hasBankAccountAlready ? "yes" : "no"}
                onChange={(v) =>
                  setValues((prev) => ({ ...prev, hasBankAccountAlready: v === "yes" }))
                }
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Do you already have a BSN?
              </label>
              <SegmentedControl
                name="hasBSNAlready"
                options={[
                  { value: "no", label: "No" },
                  { value: "yes", label: "Yes" },
                ]}
                value={values.hasBSNAlready ? "yes" : "no"}
                onChange={(v) =>
                  setValues((prev) => ({ ...prev, hasBSNAlready: v === "yes" }))
                }
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Will you need to drive in the Netherlands soon?
              </label>
              <SegmentedControl
                name="needsDrivingSoon"
                options={[
                  { value: "no", label: "No" },
                  { value: "yes", label: "Yes" },
                ]}
                value={values.needsDrivingSoon ? "yes" : "no"}
                onChange={(v) =>
                  setValues((prev) => ({ ...prev, needsDrivingSoon: v === "yes" }))
                }
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Do you want language or integration support in the first months?
              </label>
              <SegmentedControl
                name="wantsLanguageSupport"
                options={[
                  { value: "no", label: "No" },
                  { value: "yes", label: "Yes" },
                ]}
                value={values.wantsLanguageSupport ? "yes" : "no"}
                onChange={(v) =>
                  setValues((prev) => ({ ...prev, wantsLanguageSupport: v === "yes" }))
                }
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Do you expect school or childcare setup tasks?
              </label>
              <SegmentedControl
                name="hasKidsAdminNeeds"
                options={[
                  { value: "no", label: "No" },
                  { value: "yes", label: "Yes" },
                ]}
                value={values.hasKidsAdminNeeds ? "yes" : "no"}
                onChange={(v) =>
                  setValues((prev) => ({ ...prev, hasKidsAdminNeeds: v === "yes" }))
                }
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Will you need to arrange utilities or internet?
              </label>
              <SegmentedControl
                name="needsUtilitiesSetup"
                options={[
                  { value: "no", label: "No" },
                  { value: "yes", label: "Yes" },
                ]}
                value={values.needsUtilitiesSetup ? "yes" : "no"}
                onChange={(v) =>
                  setValues((prev) => ({ ...prev, needsUtilitiesSetup: v === "yes" }))
                }
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Arrival date (optional)
              </label>
              <Input
                type="date"
                value={values.arrivalDate}
                onChange={(e) => setValues((prev) => ({ ...prev, arrivalDate: e.target.value }))}
              />
            </div>
          </>
        }
      />

      {isGenerating ? (
        <ToolResultsLoading message="Creating your 90-day plan..." />
      ) : (
        <div className="mt-10 space-y-10">
          <ToolResultsHeader
            title={mode === "default" ? "Common 90-day roadmap" : "Your 90-day roadmap"}
            mode={mode}
            onReset={handleReset}
            resetLabel="Show common roadmap again"
          />
          <NinetyDayRoadmapSummary
            title={meta.results.title}
            summary={roadmap.summary}
            focusFirst={roadmap.focusFirst}
            stabilizeByMonth2={roadmap.stabilizeByMonth2}
            buildByMonth3={roadmap.buildByMonth3}
          />

          {totalTasks > 0 && (
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
              <NinetyDayProgressBar
                completed={completedIds.size}
                total={totalTasks}
              />
            </section>
          )}

          {(
            [
              "arrival-carry-over",
              "early-setup",
              "stabilizing-routines",
              "longer-term-setup",
            ] as NinetyDayPhase[]
          ).map((phase) => (
            <NinetyDayTimelineSection
              key={phase}
              phase={phase}
              tasks={tasksByPhase[phase] ?? []}
              taskContacts={taskContacts}
              originCountry={values.from}
              completedIds={completedIds}
              onToggleComplete={handleToggleComplete}
              onlyOneExpandedPerSection={true}
              affiliateItems={affiliateData?.items ?? []}
            />
          ))}

          <NinetyDayUnknownsPanel
            unknowns={unknowns}
            title="Things to confirm"
          />

          {relatedLinks.length > 0 && (
            <section>
              <h3 className="text-lg font-semibold text-slate-900">Relevant guides</h3>
              <ul className="mt-3 flex flex-wrap gap-3">
                {relatedLinks.map((link, index) => (
                  <li key={`${link.href}-${index}`}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-brand-600 hover:text-brand-700"
                    >
                      {link.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {values.from && (
            <section className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-700">
                Read the{" "}
                <Link
                  href={`/netherlands/moving/moving-to-netherlands-from/${values.from}/`}
                  className="font-semibold text-brand-700 hover:underline"
                >
                  {values.from.replace(/-/g, " ")} → Netherlands guide
                </Link>
                .
              </p>
            </section>
          )}

          {affiliateData && affiliateData.items.length > 0 && (
            <AffiliateBlockView
              placement={affiliateData.placement}
              items={affiliateData.items}
            />
          )}

          <SignupCTA
            title={signupCta.title}
            subtitle={signupCta.subtitle}
            bullets={signupCta.bullets}
            primaryCtaLabel={signupCta.primaryCtaLabel}
            primaryCtaHref={signupCta.primaryCtaHref}
            secondaryCtaLabel={signupCta.secondaryCtaLabel}
            variant="inline"
          />
        </div>
      )}
    </>
  );
}
