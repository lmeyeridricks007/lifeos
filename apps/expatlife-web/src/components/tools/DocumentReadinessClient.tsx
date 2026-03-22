"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { SegmentedControl } from "@/components/ui/segmented-control";
import { ToolInputsCard } from "./ToolInputsCard";
import { ToolResultsLoading } from "./ToolResultsLoading";
import { DocumentReadinessResults } from "./DocumentReadinessResults";
import { ToolResultsHeader } from "./shared/ToolResultsHeader";
import { SignupCTA } from "./SignupCTA";
import { AffiliateBlockView } from "@/src/components/affiliates/AffiliateBlockView";
import type { AffiliatePlacement, AffiliateProvider } from "@/src/lib/affiliates/types";
import type {
  DocumentReadinessDatasets,
  DocumentReadinessInput,
  DocumentReadinessMeta,
} from "@/src/lib/tools/loadDocumentReadinessContent";
import {
  buildAffiliateContext,
  buildDocumentChecklist,
  buildDocumentSummary,
  buildMissingDocuments,
  buildPackOutline,
  buildReadinessScore,
} from "@/src/lib/tools/documentReadinessRules";
import type { ChecklistStatus } from "./DocumentStatusToggle";

type InputValues = {
  scenario: "work" | "partner" | "family" | "unsure";
  hasPassport: "yes" | "no";
  hasCivilCertificates: "yes" | "no" | "na";
  hasProofOfAddress: "yes" | "no" | "soon";
  hasEmploymentDocs: "yes" | "no" | "na";
  from: string;
  notes: string;
};

const STORAGE_KEY = "expatlife-document-readiness-inputs";
const CHECKLIST_KEY = "expatlife-document-readiness-checklist";
const GLOBAL_ORIGIN_KEYS = ["expatlife-origin", "expatlife-origin-country"] as const;
const PARAM_KEYS = [
  "scenario",
  "hasPassport",
  "hasCivilCertificates",
  "hasProofOfAddress",
  "hasEmploymentDocs",
  "from",
] as const;

const DEFAULTS: InputValues = {
  scenario: "work",
  hasPassport: "yes",
  hasCivilCertificates: "no",
  hasProofOfAddress: "soon",
  hasEmploymentDocs: "yes",
  from: "south-africa",
  notes: "",
};

function getGlobalOrigin(): string | null {
  if (typeof window === "undefined") return null;
  for (const key of GLOBAL_ORIGIN_KEYS) {
    const value = window.localStorage.getItem(key);
    if (value) return value;
  }
  return null;
}

function parseSearchParams(searchParams: URLSearchParams): Partial<InputValues> {
  const out: Partial<InputValues> = {};
  const scenario = searchParams.get("scenario");
  const hasPassport = searchParams.get("hasPassport");
  const hasCivilCertificates = searchParams.get("hasCivilCertificates");
  const hasProofOfAddress = searchParams.get("hasProofOfAddress");
  const hasEmploymentDocs = searchParams.get("hasEmploymentDocs");
  const from = searchParams.get("from");

  if (scenario === "work" || scenario === "partner" || scenario === "family" || scenario === "unsure") out.scenario = scenario;
  if (hasPassport === "yes" || hasPassport === "no") out.hasPassport = hasPassport;
  if (hasCivilCertificates === "yes" || hasCivilCertificates === "no" || hasCivilCertificates === "na") {
    out.hasCivilCertificates = hasCivilCertificates;
  }
  if (hasProofOfAddress === "yes" || hasProofOfAddress === "no" || hasProofOfAddress === "soon") {
    out.hasProofOfAddress = hasProofOfAddress;
  }
  if (hasEmploymentDocs === "yes" || hasEmploymentDocs === "no" || hasEmploymentDocs === "na") {
    out.hasEmploymentDocs = hasEmploymentDocs;
  }
  if (from) out.from = from;
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

type ResultState = {
  summary: string;
  readiness: ReturnType<typeof buildReadinessScore>;
  packOutline: ReturnType<typeof buildPackOutline>;
  missingDocuments: ReturnType<typeof buildMissingDocuments>;
  checklist: ReturnType<typeof buildDocumentChecklist>;
};

export function DocumentReadinessClient({
  defaultResultJson,
  initialResultJson,
  initialValuesJson,
  initialMode,
  datasetsJson,
  metaJson,
  originCountriesJson,
  signupCtaJson,
  placementId,
}: {
  defaultResultJson: string;
  initialResultJson?: string;
  initialValuesJson?: string;
  initialMode?: "default" | "personalized";
  datasetsJson: string;
  metaJson: string;
  originCountriesJson: string;
  signupCtaJson: string;
  placementId: string;
}) {
  const datasets = useMemo(() => JSON.parse(datasetsJson) as DocumentReadinessDatasets, [datasetsJson]);
  const meta = useMemo(
    () =>
      JSON.parse(metaJson) as {
        toolPanel: DocumentReadinessMeta["toolPanel"];
        results: DocumentReadinessMeta["results"];
        infographic?: DocumentReadinessMeta["infographic"];
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

  const [localStatuses, setLocalStatuses] = useState<Record<string, ChecklistStatus>>(() => {
    if (typeof window === "undefined") return {};
    try {
      const raw = window.localStorage.getItem(CHECKLIST_KEY);
      if (raw) return JSON.parse(raw) as Record<string, ChecklistStatus>;
    } catch {
      // ignore
    }
    return {};
  });

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

  const initialValues = useMemo((): Partial<InputValues> => {
    if (!initialValuesJson) return {};
    try {
      return JSON.parse(initialValuesJson) as Partial<InputValues>;
    } catch {
      return {};
    }
  }, [initialValuesJson]);

  const startWithPersonalized = initialMode === "personalized" && initialResult !== null;

  const [values, setValues] = useState<InputValues>(() => {
    if (Object.keys(initialValues).length > 0) return { ...DEFAULTS, ...initialValues } as InputValues;
    if (typeof window === "undefined") return DEFAULTS;
    const fromQuery = parseSearchParams(new URLSearchParams(window.location.search));
    if (Object.keys(fromQuery).length > 0) return { ...DEFAULTS, ...fromQuery };
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) return { ...DEFAULTS, ...(JSON.parse(raw) as Partial<InputValues>) };
    } catch {
      // ignore
    }
    const origin = getGlobalOrigin();
    if (origin) return { ...DEFAULTS, from: origin };
    return DEFAULTS;
  });

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

  const updateUrl = useCallback((nextValues: InputValues) => {
    const params = new URLSearchParams();
    for (const key of PARAM_KEYS) {
      const value = nextValues[key];
      if (value) params.set(key, value);
    }
    const q = params.toString();
    const url = q ? `${window.location.pathname}?${q}` : window.location.pathname;
    window.history.replaceState({}, "", url);
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
    } catch {
      // ignore
    }
  }, [values]);

  useEffect(() => {
    try {
      window.localStorage.setItem(CHECKLIST_KEY, JSON.stringify(localStatuses));
    } catch {
      // ignore
    }
  }, [localStatuses]);

  const generate = useCallback(() => {
    const input: DocumentReadinessInput = {
      scenario: values.scenario,
      hasPassport: values.hasPassport,
      hasCivilCertificates: values.hasCivilCertificates,
      hasProofOfAddress: values.hasProofOfAddress,
      hasEmploymentDocs: values.hasEmploymentDocs,
      from: values.from,
      notes: values.notes,
    };

    const checklist = buildDocumentChecklist(input, datasets);
    const missingDocuments = buildMissingDocuments(input, datasets);
    const packOutline = buildPackOutline(input, datasets);
    const readiness = buildReadinessScore(input, datasets);
    const summary = buildDocumentSummary(input, datasets);
    const results = { summary, readiness, packOutline, missingDocuments, checklist };
    setResult(results);
    setMode("personalized");
    setAffiliateData(null);
    updateUrl(values);

    const defaultsFromResult: Record<string, ChecklistStatus> = {};
    for (const categoryItems of Object.values(checklist)) {
      for (const item of categoryItems) {
        defaultsFromResult[item.id] =
          item.status === "ready"
            ? "ready"
            : item.status === "not_applicable"
              ? "not_applicable"
              : "missing";
      }
    }
    setLocalStatuses((prev) => ({ ...defaultsFromResult, ...prev }));

    const affiliateContext = buildAffiliateContext(input, { checklist, missing: missingDocuments });
    fetch(
      `/api/affiliate-placement?placementId=${encodeURIComponent(
        placementId
      )}&destination=netherlands&origin=${encodeURIComponent(values.from)}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data?.placement || !data?.items) return;
        setAffiliateData({
          placement: { ...data.placement, categoryOrder: affiliateContext.categoryOrder } as AffiliatePlacement,
          items: reorderAffiliateItems(data.items, affiliateContext.categoryOrder),
        });
      })
      .catch(() => {});
  }, [datasets, placementId, updateUrl, values]);

  const handleGenerate = useCallback(() => {
    setIsGenerating(true);
    generate();
    setTimeout(() => setIsGenerating(false), 1500);
  }, [generate]);

  const handleReset = useCallback(() => {
    const defaultState = defaultResultRef.current;
    if (defaultState) {
      setResult(defaultState);
      setMode("default");
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fromQuery = parseSearchParams(new URLSearchParams(window.location.search));
    if (Object.keys(fromQuery).length > 0) setValues((prev) => ({ ...prev, ...fromQuery }));
  }, []);

  return (
    <>
      <ToolInputsCard
        mode="custom"
        title="Your document situation"
        generateLabel="Check my documents"
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
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Scenario</label>
              <SegmentedControl
                name="scenario"
                options={[
                  { value: "work", label: "Work" },
                  { value: "partner", label: "Partner" },
                  { value: "family", label: "Family" },
                  { value: "unsure", label: "Unsure" },
                ]}
                value={values.scenario}
                onChange={(scenario) => setValues((prev) => ({ ...prev, scenario: scenario as InputValues["scenario"] }))}
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Has passport</label>
              <SegmentedControl
                name="hasPassport"
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                ]}
                value={values.hasPassport}
                onChange={(hasPassport) =>
                  setValues((prev) => ({ ...prev, hasPassport: hasPassport as InputValues["hasPassport"] }))
                }
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Has birth or marriage certificates</label>
              <SegmentedControl
                name="hasCivilCertificates"
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                  { value: "na", label: "N/A" },
                ]}
                value={values.hasCivilCertificates}
                onChange={(hasCivilCertificates) =>
                  setValues((prev) => ({
                    ...prev,
                    hasCivilCertificates: hasCivilCertificates as InputValues["hasCivilCertificates"],
                  }))
                }
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Has proof of address</label>
              <SegmentedControl
                name="hasProofOfAddress"
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "soon", label: "Soon" },
                  { value: "no", label: "No" },
                ]}
                value={values.hasProofOfAddress}
                onChange={(hasProofOfAddress) =>
                  setValues((prev) => ({
                    ...prev,
                    hasProofOfAddress: hasProofOfAddress as InputValues["hasProofOfAddress"],
                  }))
                }
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Has employment docs</label>
              <SegmentedControl
                name="hasEmploymentDocs"
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                  { value: "na", label: "N/A" },
                ]}
                value={values.hasEmploymentDocs}
                onChange={(hasEmploymentDocs) =>
                  setValues((prev) => ({
                    ...prev,
                    hasEmploymentDocs: hasEmploymentDocs as InputValues["hasEmploymentDocs"],
                  }))
                }
              />
            </div>
          </>
        }
      />

      {isGenerating ? (
        <ToolResultsLoading message="Checking your documents..." />
      ) : result ? (
        <div className="mt-10 space-y-10">
          <ToolResultsHeader
            title={mode === "default" ? "Common relocation document pack" : "Your document checklist"}
            mode={mode}
            onReset={handleReset}
            resetLabel="Show common document pack again"
          />
          <DocumentReadinessResults
            title={meta.results.title}
            summary={result.summary}
            readiness={result.readiness}
            packOutline={result.packOutline}
            missingDocuments={result.missingDocuments}
            checklist={result.checklist}
            localStatuses={localStatuses}
            onStatusChange={(id, status) => setLocalStatuses((prev) => ({ ...prev, [id]: status }))}
            notes={values.notes}
            onNotesChange={(notes) => setValues((prev) => ({ ...prev, notes }))}
            originCountry={values.from}
          />

          {values.from ? (
            <section className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-700">
                Read the{" "}
                <Link
                  href={`/netherlands/moving/moving-to-netherlands-from/${values.from}/`}
                  className="font-semibold text-brand-700 hover:underline"
                >
                  {values.from.replace(/-/g, " ")} -&gt; Netherlands guide
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
