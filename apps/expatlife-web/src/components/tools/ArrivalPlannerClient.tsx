"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { SegmentedControl } from "@/components/ui/segmented-control";
import { ToolInputsCard } from "./ToolInputsCard";
import type { ArrivalPlannerInputValues } from "./ToolInputsCard";
import { ToolResultsLoading } from "./ToolResultsLoading";
import { ArrivalPlannerResults } from "./ArrivalPlannerResults";
import { ArrivalPlannerTaskResults } from "./ArrivalPlannerTaskResults";
import { ToolResultsHeader } from "./shared/ToolResultsHeader";
import { SignupCTA } from "./SignupCTA";
import { AffiliateBlockView } from "@/src/components/affiliates/AffiliateBlockView";
import type { AffiliatePlacement, AffiliateProvider } from "@/src/lib/affiliates/types";
import {
  buildArrivalAffiliateContext,
  buildArrivalRelatedLinks,
  buildArrivalSummary,
  buildAppointmentsList,
  buildFirstMonthMilestones,
  buildFirstWeekMilestones,
  buildRemindersList,
} from "@/src/lib/tools/arrivalPlannerRules";
import type { ArrivalPlannerDatasets } from "@/src/lib/tools/loadArrivalPlannerContent";
import {
  getOriginMeta,
  resolveArrivalPlannerTasks,
  buildTaskResultSummary,
  type ArrivalPlannerCountry,
  type ArrivalTaskResolved,
} from "@/src/lib/tools/arrival-planner";

const STORAGE_KEY = "expatlife-arrival-planner-inputs";
const GLOBAL_ORIGIN_KEYS = ["expatlife-origin", "expatlife-origin-country"] as const;
const PARAM_KEYS = [
  "from",
  "arrivalDate",
  "addressStatus",
  "household",
  "needBankingSoon",
  "startingJobSoon",
  "thirtyRulingRelevant",
  "planningToDrive",
  "shippingHouseholdGoods",
  "documentPrepStatus",
  "familyAdminNeeded",
] as const;

type ExtendedValues = ArrivalPlannerInputValues & {
  startingJobSoon?: boolean;
  thirtyRulingRelevant?: "unknown" | "likely" | "no";
  planningToDrive?: boolean;
  shippingHouseholdGoods?: boolean;
  documentPrepStatus?: "unknown" | "mostly-ready" | "missing-some-documents";
  familyAdminNeeded?: boolean;
};

const DEFAULTS: ExtendedValues = {
  from: "south-africa",
  arrivalDate: "",
  addressStatus: "soon",
  household: "solo",
  needBankingSoon: "yes",
  startingJobSoon: false,
  thirtyRulingRelevant: "unknown",
  planningToDrive: false,
  shippingHouseholdGoods: false,
  documentPrepStatus: "unknown",
  familyAdminNeeded: false,
};

function isAddressStatus(value?: string): value is ArrivalPlannerInputValues["addressStatus"] {
  return value === "yes" || value === "soon" || value === "no";
}

function isHousehold(value?: string): value is ArrivalPlannerInputValues["household"] {
  return value === "solo" || value === "partner" || value === "kids";
}

function isNeedBankingSoon(value?: string): value is ArrivalPlannerInputValues["needBankingSoon"] {
  return value === "yes" || value === "no";
}

function getValuesFromSearchParams(searchParams: URLSearchParams): Partial<ExtendedValues> {
  const out: Partial<ExtendedValues> = {};
  const from = searchParams.get("from");
  const arrivalDate = searchParams.get("arrivalDate");
  const addressStatus = searchParams.get("addressStatus") ?? undefined;
  const household = searchParams.get("household") ?? undefined;
  const needBankingSoon = searchParams.get("needBankingSoon") ?? undefined;
  const startingJobSoon = searchParams.get("startingJobSoon");
  const thirtyRulingRelevant = searchParams.get("thirtyRulingRelevant");
  const planningToDrive = searchParams.get("planningToDrive");
  const shippingHouseholdGoods = searchParams.get("shippingHouseholdGoods");
  const documentPrepStatus = searchParams.get("documentPrepStatus");
  const familyAdminNeeded = searchParams.get("familyAdminNeeded");

  if (from) out.from = from;
  if (arrivalDate) out.arrivalDate = arrivalDate;
  if (isAddressStatus(addressStatus)) out.addressStatus = addressStatus;
  if (isHousehold(household)) out.household = household;
  if (isNeedBankingSoon(needBankingSoon)) out.needBankingSoon = needBankingSoon;
  if (startingJobSoon === "true") out.startingJobSoon = true;
  if (startingJobSoon === "false") out.startingJobSoon = false;
  if (thirtyRulingRelevant === "unknown" || thirtyRulingRelevant === "likely" || thirtyRulingRelevant === "no")
    out.thirtyRulingRelevant = thirtyRulingRelevant;
  if (planningToDrive === "true") out.planningToDrive = true;
  if (planningToDrive === "false") out.planningToDrive = false;
  if (shippingHouseholdGoods === "true") out.shippingHouseholdGoods = true;
  if (shippingHouseholdGoods === "false") out.shippingHouseholdGoods = false;
  if (
    documentPrepStatus === "unknown" ||
    documentPrepStatus === "mostly-ready" ||
    documentPrepStatus === "missing-some-documents"
  )
    out.documentPrepStatus = documentPrepStatus;
  if (familyAdminNeeded === "true") out.familyAdminNeeded = true;
  if (familyAdminNeeded === "false") out.familyAdminNeeded = false;

  return out;
}

function getGlobalOrigin(): string | null {
  if (typeof window === "undefined") return null;
  for (const key of GLOBAL_ORIGIN_KEYS) {
    const value = window.localStorage.getItem(key);
    if (value) return value;
  }
  return null;
}

function reorderAffiliateItems(
  items: Array<{ provider: AffiliateProvider; reason: string; meta?: Record<string, string> }>,
  categoryOrder: string[]
) {
  const indexByCategory = new Map(categoryOrder.map((category, idx) => [category, idx]));
  return [...items].sort((a, b) => {
    const aIndex = Math.min(
      ...a.provider.categoryIds.map((categoryId) => indexByCategory.get(categoryId) ?? 999)
    );
    const bIndex = Math.min(
      ...b.provider.categoryIds.map((categoryId) => indexByCategory.get(categoryId) ?? 999)
    );
    return aIndex - bIndex;
  });
}

export type ArrivalPlannerClientProps = {
  /** Server-computed default result for initial load (common first days plan) */
  defaultResultJson: string;
  /** When URL has tool params, server passes personalized result so we start in personalized mode */
  initialResultJson?: string;
  initialMode?: "default" | "personalized";
  /** Server-computed initial values from URL searchParams; avoids hydration mismatch with localStorage */
  initialValuesJson?: string;
  datasetsJson: string;
  taskDataJson?: string;
  metaJson: string;
  originCountriesJson: string;
  signupCtaJson: string;
  placementId: string;
};

export function ArrivalPlannerClient({
  defaultResultJson,
  initialResultJson,
  initialMode,
  initialValuesJson,
  datasetsJson,
  taskDataJson,
  metaJson,
  originCountriesJson,
  signupCtaJson,
  placementId,
}: ArrivalPlannerClientProps) {
  const datasets = useMemo(() => JSON.parse(datasetsJson) as ArrivalPlannerDatasets, [datasetsJson]);
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
  const taskData = useMemo(() => {
    if (!taskDataJson) return null;
    try {
      return JSON.parse(taskDataJson) as {
        countries: Array<{ slug: string; label: string; regionGroup: string; distanceCategory: string; countryGuideHref?: string }>;
        genericTasks: Array<Record<string, unknown>>;
        overlayTasks: Array<Record<string, unknown>>;
        regionOverlays: Record<string, string[]>;
        distanceOverlays: Record<string, string[]>;
        countryOverlays: Record<string, string[]>;
        conditionOverlays: Record<string, string[]>;
        taskContacts: Record<string, { name: string; website: string; contactSummary: string }>;
      };
    } catch {
      return null;
    }
  }, [taskDataJson]);
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

  const [values, setValues] = useState<ExtendedValues>(() => {
    // Use server-passed initial values so server and client render the same (avoids hydration error)
    if (initialValuesJson != null && initialValuesJson !== "") {
      try {
        const fromServer = JSON.parse(initialValuesJson) as Partial<ExtendedValues>;
        return { ...DEFAULTS, ...fromServer };
      } catch {
        // fall through to DEFAULTS
      }
    }
    // Server or client without initialValuesJson: use DEFAULTS only (no localStorage on server)
    if (typeof window === "undefined") return DEFAULTS;
    // Client without initialValuesJson: prefer URL, then localStorage, then global origin
    const params = new URLSearchParams(window.location.search);
    const fromParams = getValuesFromSearchParams(params);
    if (Object.keys(fromParams).length > 0) return { ...DEFAULTS, ...fromParams };
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<ArrivalPlannerInputValues>;
        return { ...DEFAULTS, ...parsed };
      }
    } catch {
      // ignore
    }
    const globalOrigin = getGlobalOrigin();
    if (globalOrigin) return { ...DEFAULTS, from: globalOrigin };
    return DEFAULTS;
  });

  type ResultState =
    | {
        type: "legacy";
        summary: string;
        firstWeek: ReturnType<typeof buildFirstWeekMilestones>;
        firstMonth: ReturnType<typeof buildFirstMonthMilestones>;
        appointments: ReturnType<typeof buildAppointmentsList>;
        reminders: ReturnType<typeof buildRemindersList>;
        relatedLinks: ReturnType<typeof buildArrivalRelatedLinks>;
      }
    | {
        type: "tasks";
        summary: string;
        tasks: ArrivalTaskResolved[];
        originCountry: ArrivalPlannerCountry | null;
        regionGroup: string;
        distanceCategory: string;
      };

  const defaultResult = useMemo((): ResultState | null => {
    try {
      return JSON.parse(defaultResultJson) as ResultState;
    } catch {
      return null;
    }
  }, [defaultResultJson]);

  const initialResult = useMemo((): ResultState | null => {
    if (!initialResultJson) return null;
    try {
      return JSON.parse(initialResultJson) as ResultState;
    } catch {
      return null;
    }
  }, [initialResultJson]);

  const startWithPersonalized = initialMode === "personalized" && initialResult !== null;
  const [result, setResult] = useState<ResultState | null>(() =>
    startWithPersonalized ? initialResult : defaultResult
  );
  const [mode, setMode] = useState<"default" | "personalized">(() =>
    startWithPersonalized ? "personalized" : "default"
  );
  const defaultResultRef = useRef<ResultState | null>(defaultResult);
  if (defaultResultRef.current === null && defaultResult !== null) defaultResultRef.current = defaultResult;

  const [affiliateData, setAffiliateData] = useState<{
    placement: AffiliatePlacement;
    items: Array<{ provider: AffiliateProvider; reason: string; meta?: Record<string, string> }>;
  } | null>(null);

  const [isGenerating, setIsGenerating] = useState(false);
  const toolRef = useRef<HTMLDivElement>(null);

  const updateUrl = useCallback((nextValues: ExtendedValues) => {
    const params = new URLSearchParams();
    for (const key of PARAM_KEYS) {
      const value = (nextValues as Record<string, unknown>)[key];
      if (value !== undefined && value !== "" && value !== false) {
        params.set(key, String(value));
      }
    }
    const query = params.toString();
    const url = query ? `${window.location.pathname}?${query}` : window.location.pathname;
    window.history.replaceState({}, "", url);
  }, []);

  const persistAndGenerate = useCallback(() => {
    const input = {
      from: values.from,
      arrivalDate: values.arrivalDate || undefined,
      addressStatus: values.addressStatus,
      household: values.household,
      needBankingSoon: values.needBankingSoon,
    };

    let affiliateContext: { categoryOrder: string[]; emphasis: string };

    if (taskData) {
      const originMeta = getOriginMeta(values.from, taskData.countries as ArrivalPlannerCountry[]);
      const extendedInput = {
        originCountry: values.from,
        arrivalDate: values.arrivalDate || undefined,
        addressStatus: values.addressStatus,
        household: values.household,
        needBankingSoon: values.needBankingSoon,
        startingJobSoon: values.startingJobSoon ?? false,
        thirtyRulingRelevant: values.thirtyRulingRelevant ?? "unknown",
        planningToDrive: values.planningToDrive ?? false,
        shippingHouseholdGoods: values.shippingHouseholdGoods ?? false,
        documentPrepStatus: values.documentPrepStatus ?? "unknown",
        familyAdminNeeded: values.familyAdminNeeded ?? false,
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
      setResult({
        type: "tasks",
        summary,
        tasks,
        originCountry: originMeta.country,
        regionGroup: originMeta.regionGroup,
        distanceCategory: originMeta.distanceCategory,
      });
      setMode("personalized");
      affiliateContext = buildArrivalAffiliateContext(input, {
        firstWeek: [],
        firstMonth: [],
        appointments: [],
        reminders: [],
      });
    } else {
      const firstWeek = buildFirstWeekMilestones(input, datasets);
      const firstMonth = buildFirstMonthMilestones(input, datasets);
      const appointments = buildAppointmentsList(input, datasets);
      const reminders = buildRemindersList(input, datasets);
      const summary = buildArrivalSummary(input, datasets);
      const relatedLinks = buildArrivalRelatedLinks(input, datasets);
      setResult({
        type: "legacy",
        summary,
        firstWeek,
        firstMonth,
        appointments,
        reminders,
        relatedLinks,
      });
      setMode("personalized");
      affiliateContext = buildArrivalAffiliateContext(input, {
        firstWeek,
        firstMonth,
        appointments,
        reminders,
      });
    }

    setAffiliateData(null);

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
      window.localStorage.setItem("expatlife-origin", values.from);
      window.localStorage.setItem("expatlife-origin-country", values.from);
    } catch {
      // ignore
    }

    updateUrl(values);

    fetch(
      `/api/affiliate-placement?placementId=${encodeURIComponent(
        placementId
      )}&destination=netherlands&origin=${encodeURIComponent(values.from)}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data?.placement || !data?.items) return;
        const reorderedItems = reorderAffiliateItems(data.items, affiliateContext.categoryOrder);
        const placement = {
          ...data.placement,
          categoryOrder: affiliateContext.categoryOrder,
        } as AffiliatePlacement;
        setAffiliateData({ placement, items: reorderedItems });
      })
      .catch(() => {});
  }, [datasets, taskData, placementId, updateUrl, values]);

  const LOADING_DELAY_MS = 1500;
  const handleGenerate = useCallback(() => {
    setIsGenerating(true);
    persistAndGenerate();
    setTimeout(() => setIsGenerating(false), LOADING_DELAY_MS);
  }, [persistAndGenerate]);

  const handleReset = useCallback(() => {
    const defaultState = defaultResultRef.current;
    if (defaultState) {
      setResult(defaultState);
      setMode("default");
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const fromParams = getValuesFromSearchParams(params);
    if (Object.keys(fromParams).length > 0) {
      setValues((prev) => ({ ...prev, ...fromParams }));
      return;
    }
    const globalOrigin = getGlobalOrigin();
    if (globalOrigin) {
      setValues((prev) => ({ ...prev, from: prev.from || globalOrigin }));
    }
  }, []);

  return (
    <>
      <div ref={toolRef}>
        <ToolInputsCard
          mode="custom"
          title="Your arrival situation"
          generateLabel="Build my arrival plan"
          onGenerate={handleGenerate}
          isGenerating={isGenerating}
          originCountries={originCountries}
          originValue={values.from}
          onOriginChange={(from) => setValues((prev) => ({ ...prev, from }))}
          customForm={
            <>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Arrival date (optional)
                </label>
                <Input
                  type="date"
                  value={values.arrivalDate}
                  onChange={(event) =>
                    setValues((prev) => ({ ...prev, arrivalDate: event.target.value }))
                  }
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Do you already have an address?
                </label>
                <SegmentedControl
                  name="addressStatus"
                  options={[
                    { value: "yes", label: "I already have an address" },
                    { value: "soon", label: "I'll have one soon" },
                    { value: "no", label: "I don't have one yet" },
                  ]}
                  value={values.addressStatus}
                  onChange={(addressStatus) =>
                    setValues((prev) => ({
                      ...prev,
                      addressStatus: addressStatus as ArrivalPlannerInputValues["addressStatus"],
                    }))
                  }
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Household size
                </label>
                <SegmentedControl
                  name="household"
                  options={[
                    { value: "solo", label: "Solo" },
                    { value: "partner", label: "Partner" },
                    { value: "kids", label: "Kids" },
                  ]}
                  value={values.household}
                  onChange={(household) =>
                    setValues((prev) => ({
                      ...prev,
                      household: household as ArrivalPlannerInputValues["household"],
                    }))
                  }
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Need banking soon?
                </label>
                <SegmentedControl
                  name="needBankingSoon"
                  options={[
                    { value: "yes", label: "Yes" },
                    { value: "no", label: "No" },
                  ]}
                  value={values.needBankingSoon}
                  onChange={(needBankingSoon) =>
                    setValues((prev) => ({
                      ...prev,
                      needBankingSoon: needBankingSoon as ArrivalPlannerInputValues["needBankingSoon"],
                    }))
                  }
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Are you starting work soon?
                </label>
                <SegmentedControl
                  name="startingJobSoon"
                  options={[
                    { value: "false", label: "No" },
                    { value: "true", label: "Yes" },
                  ]}
                  value={values.startingJobSoon ? "true" : "false"}
                  onChange={(v) => setValues((prev) => ({ ...prev, startingJobSoon: v === "true" }))}
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Could the 30% ruling / expat scheme be relevant?
                </label>
                <SegmentedControl
                  name="thirtyRulingRelevant"
                  options={[
                    { value: "unknown", label: "Unknown" },
                    { value: "likely", label: "Likely" },
                    { value: "no", label: "No" },
                  ]}
                  value={values.thirtyRulingRelevant ?? "unknown"}
                  onChange={(v) =>
                    setValues((prev) => ({
                      ...prev,
                      thirtyRulingRelevant: v as "unknown" | "likely" | "no",
                    }))
                  }
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Will you need to drive in the Netherlands soon?
                </label>
                <SegmentedControl
                  name="planningToDrive"
                  options={[
                    { value: "false", label: "No" },
                    { value: "true", label: "Yes" },
                  ]}
                  value={values.planningToDrive ? "true" : "false"}
                  onChange={(v) => setValues((prev) => ({ ...prev, planningToDrive: v === "true" }))}
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Are you shipping household goods?
                </label>
                <SegmentedControl
                  name="shippingHouseholdGoods"
                  options={[
                    { value: "false", label: "No" },
                    { value: "true", label: "Yes" },
                  ]}
                  value={values.shippingHouseholdGoods ? "true" : "false"}
                  onChange={(v) => setValues((prev) => ({ ...prev, shippingHouseholdGoods: v === "true" }))}
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  How ready are your documents?
                </label>
                <SegmentedControl
                  name="documentPrepStatus"
                  options={[
                    { value: "unknown", label: "Unknown" },
                    { value: "mostly-ready", label: "Mostly ready" },
                    { value: "missing-some-documents", label: "Missing some" },
                  ]}
                  value={values.documentPrepStatus ?? "unknown"}
                  onChange={(v) =>
                    setValues((prev) => ({
                      ...prev,
                      documentPrepStatus: v as "unknown" | "mostly-ready" | "missing-some-documents",
                    }))
                  }
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Do you need extra family admin follow-up?
                </label>
                <SegmentedControl
                  name="familyAdminNeeded"
                  options={[
                    { value: "false", label: "No" },
                    { value: "true", label: "Yes" },
                  ]}
                  value={values.familyAdminNeeded ? "true" : "false"}
                  onChange={(v) => setValues((prev) => ({ ...prev, familyAdminNeeded: v === "true" }))}
                />
              </div>
            </>
          }
          whatYouGetTitle={meta.toolPanel.whatYouGetTitle}
          whatYouGetItems={meta.toolPanel.whatYouGetItems}
        />
      </div>

      {isGenerating ? (
        <ToolResultsLoading message="Building your arrival plan..." />
      ) : result ? (
        <div className="mt-10 space-y-10">
          <ToolResultsHeader
            title={mode === "default" ? "Common first days plan" : "Your arrival plan"}
            mode={mode}
            onReset={handleReset}
            resetLabel="Show common plan again"
          />
          {result.type === "tasks" ? (
            <ArrivalPlannerTaskResults
              title={meta.results.title}
              summary={result.summary}
              tasks={result.tasks}
              originCountry={result.originCountry}
              regionGroup={result.regionGroup}
              distanceCategory={result.distanceCategory}
              originSlug={values.from || undefined}
              affiliateItems={affiliateData?.items ?? []}
              reminders={buildRemindersList(
                {
                  from: values.from,
                  addressStatus: values.addressStatus,
                  household: values.household,
                  needBankingSoon: values.needBankingSoon,
                },
                datasets
              ).map((r) => ({ id: r.id, label: r.label }))}
            />
          ) : (
            <ArrivalPlannerResults
              title={meta.results.title}
              summary={result.summary}
              firstWeek={result.firstWeek}
              firstMonth={result.firstMonth}
              appointments={result.appointments}
              reminders={result.reminders}
            />
          )}

          {result.type === "legacy" && result.relatedLinks.length > 0 ? (
            <section>
              <h3 className="text-lg font-semibold text-slate-900">Relevant guides</h3>
              <ul className="mt-3 flex flex-wrap gap-3">
                {result.relatedLinks.map((link, index) => (
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
          ) : null}

          {values.from && (result.type !== "tasks" || !result.originCountry?.countryGuideHref) ? (
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
          ) : null}

          {affiliateData && affiliateData.items.length > 0 ? (
            <AffiliateBlockView placement={affiliateData.placement} items={affiliateData.items} />
          ) : null}

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
      ) : null}
    </>
  );
}
