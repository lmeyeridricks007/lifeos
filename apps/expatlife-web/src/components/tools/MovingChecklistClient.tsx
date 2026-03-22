"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { buildDocumentsList, buildRelevantLinks } from "@/src/lib/tools/movingChecklistRules";
import type { MovingChecklistInput } from "@/src/lib/tools/movingChecklistTypes";
import type { MovingChecklistTaskData } from "@/src/lib/tools/loadMovingChecklistContent";
import type { MovingChecklistResolved } from "@/src/lib/tools/moving-checklist/types";
import { resolveMovingChecklist } from "@/src/lib/tools/moving-checklist";
import { ToolInputsCard } from "./ToolInputsCard";
import type { MovingChecklistInputValues } from "./ToolInputsCard";
import { ToolResultsLoading } from "./ToolResultsLoading";
import { ToolResultsHeader } from "./shared/ToolResultsHeader";
import { DocumentResults } from "./DocumentResults";
import { SignupCTA } from "./SignupCTA";
import { AffiliateBlockView } from "@/src/components/affiliates/AffiliateBlockView";
import type { AffiliatePlacement } from "@/src/lib/affiliates/types";
import type { AffiliateProvider } from "@/src/lib/affiliates/types";
import { MovingChecklistSummary } from "./moving-checklist/MovingChecklistSummary";
import { MovingChecklistPhaseSection } from "./moving-checklist/MovingChecklistPhaseSection";
import { ArrivalHandoffCard } from "./moving-checklist/ArrivalHandoffCard";

const STORAGE_KEY = "expatlife-moving-checklist-inputs";
const PARAM_KEYS = [
  "from",
  "stage",
  "household",
  "employment",
  "region",
  "city",
  "housingReadiness",
  "shippingNeeds",
  "kidsSchoolNeeds",
  "largeMoneyTransfer",
  "hasCoreDocsReady",
  "needsTemporaryHousing",
] as const;

const DEFAULTS: MovingChecklistInputValues = {
  from: "south-africa",
  stage: "before-move",
  household: "solo",
  employment: "job-offer",
  region: "non-eu",
  city: "",
  housingReadiness: "no-place-yet",
  shippingNeeds: false,
  kidsSchoolNeeds: false,
  largeMoneyTransfer: false,
  hasCoreDocsReady: false,
  needsTemporaryHousing: false,
};

function parseBool(s: string | null): boolean {
  if (s == null) return false;
  return s === "true" || s === "1";
}

function getValuesFromSearchParams(searchParams: URLSearchParams): Partial<MovingChecklistInputValues> {
  const out: Partial<MovingChecklistInputValues> = {};
  for (const key of PARAM_KEYS) {
    const v = searchParams.get(key);
    if (v == null || v === "") continue;
    if (key === "shippingNeeds" || key === "kidsSchoolNeeds" || key === "largeMoneyTransfer" || key === "hasCoreDocsReady" || key === "needsTemporaryHousing") {
      out[key] = parseBool(v);
    } else {
      (out as Record<string, string>)[key] = v;
    }
  }
  return out;
}

function valuesToExtendedInput(v: MovingChecklistInputValues): Parameters<typeof resolveMovingChecklist>[0] {
  return {
    from: v.from,
    stage: v.stage as "before-move" | "arriving-soon" | "already-arrived",
    household: v.household as "solo" | "partner" | "kids",
    employment: v.employment as "job-offer" | "employed" | "searching",
    region: v.region as "eu" | "non-eu",
    city: v.city || undefined,
    housingReadiness: v.housingReadiness as "no-place-yet" | "temporary-place" | "confirmed-rental" | "employer-arranged",
    shippingNeeds: v.shippingNeeds,
    kidsSchoolNeeds: v.kidsSchoolNeeds,
    largeMoneyTransfer: v.largeMoneyTransfer,
    hasCoreDocsReady: v.hasCoreDocsReady,
    needsTemporaryHousing: v.needsTemporaryHousing,
  };
}

function valuesToLegacyInput(v: MovingChecklistInputValues): MovingChecklistInput {
  return {
    from: v.from,
    stage: v.stage as MovingChecklistInput["stage"],
    household: v.household as MovingChecklistInput["household"],
    employment: v.employment as MovingChecklistInput["employment"],
    region: v.region as MovingChecklistInput["region"],
    city: v.city || undefined,
  };
}

export type MovingChecklistClientProps = {
  /** Server-computed default result for initial load (generic checklist) */
  defaultResultJson: string;
  defaultDocumentsJson: string;
  defaultLinksJson: string;
  /** When URL has tool params, server passes personalized result so we start in personalized mode */
  initialResultJson?: string;
  initialDocumentsJson?: string;
  initialLinksJson?: string;
  initialValuesJson?: string;
  initialMode?: "default" | "personalized";
  taskDataJson: string;
  documentsJson: string;
  metaJson: string;
  originCountriesJson: string;
  signupCtaJson: string;
  placementId: string;
};

export function MovingChecklistClient({
  defaultResultJson,
  defaultDocumentsJson,
  defaultLinksJson,
  initialResultJson,
  initialDocumentsJson,
  initialLinksJson,
  initialValuesJson,
  initialMode,
  taskDataJson,
  documentsJson,
  metaJson,
  originCountriesJson,
  signupCtaJson,
  placementId,
}: MovingChecklistClientProps) {
  const taskData = useMemo(() => JSON.parse(taskDataJson) as MovingChecklistTaskData, [taskDataJson]);
  const documentsData = useMemo(() => JSON.parse(documentsJson) as { documents: { categories: string[]; items: Array<{ id: string; label: string; category: string; conditions: Record<string, string[] | undefined>; whyItMatters: string }> } }, [documentsJson]);
  const meta = useMemo(
    () =>
      JSON.parse(metaJson) as {
        hero: { title: string; subtitle: string; primaryCtaLabel: string; secondaryCtaLabel: string; secondaryCtaHref: string; introBullets: string[]; image?: { src: string; alt: string } };
        toolPanel: { whatYouGetTitle: string; whatYouGetItems: string[] };
        results: { title: string };
        relatedLinks: Record<string, { label: string; href: string }>;
      },
    [metaJson]
  );
  const originCountries = useMemo(() => JSON.parse(originCountriesJson) as Array<{ value: string; label: string }>, [originCountriesJson]);
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
  const toolRef = useRef<HTMLDivElement>(null);

  const defaultResult = useMemo(() => {
    try {
      const resolved = JSON.parse(defaultResultJson) as MovingChecklistResolved;
      const documentsByCategory = JSON.parse(defaultDocumentsJson) as ReturnType<typeof buildDocumentsList>;
      const relevantLinks = JSON.parse(defaultLinksJson) as ReturnType<typeof buildRelevantLinks>;
      return { resolved, documentsByCategory, relevantLinks };
    } catch {
      return null;
    }
  }, [defaultResultJson, defaultDocumentsJson, defaultLinksJson]);

  const initialResult = useMemo(() => {
    if (!initialResultJson || !initialDocumentsJson || !initialLinksJson) return null;
    try {
      const resolved = JSON.parse(initialResultJson) as MovingChecklistResolved;
      const documentsByCategory = JSON.parse(initialDocumentsJson) as ReturnType<typeof buildDocumentsList>;
      const relevantLinks = JSON.parse(initialLinksJson) as ReturnType<typeof buildRelevantLinks>;
      return { resolved, documentsByCategory, relevantLinks };
    } catch {
      return null;
    }
  }, [initialResultJson, initialDocumentsJson, initialLinksJson]);

  const initialValues = useMemo((): Partial<MovingChecklistInputValues> => {
    if (!initialValuesJson) return {};
    try {
      return JSON.parse(initialValuesJson) as Partial<MovingChecklistInputValues>;
    } catch {
      return {};
    }
  }, [initialValuesJson]);

  // Server/client: use initial values from URL when provided, else DEFAULTS (avoids hydration mismatch).
  const [values, setValues] = useState<MovingChecklistInputValues>(() => ({
    ...DEFAULTS,
    ...initialValues,
  }));

  type ResultState = {
    resolved: MovingChecklistResolved;
    documentsByCategory: ReturnType<typeof buildDocumentsList>;
    relevantLinks: ReturnType<typeof buildRelevantLinks>;
  };

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

  const updateUrl = useCallback((v: MovingChecklistInputValues) => {
    const params = new URLSearchParams();
    PARAM_KEYS.forEach((key) => {
      const val = v[key];
      if (val != null && val !== "") params.set(key, String(val));
    });
    const q = params.toString();
    const url = q ? `${window.location.pathname}?${q}` : window.location.pathname;
    window.history.replaceState({}, "", url);
  }, []);

  const persistAndGenerate = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
    } catch {
      // ignore
    }
    updateUrl(values);
    const extendedInput = valuesToExtendedInput(values);
    const legacyInput = valuesToLegacyInput(values);
    const resolved = resolveMovingChecklist(extendedInput, taskData);
    const documentsByCategory = buildDocumentsList(legacyInput, documentsData);
    const relevantLinks = buildRelevantLinks(legacyInput, meta.relatedLinks);
    setResult({
      resolved,
      documentsByCategory,
      relevantLinks,
    });
    setMode("personalized");
    setAffiliateData(null);
    fetch(
      `/api/affiliate-placement?placementId=${encodeURIComponent(placementId)}&destination=netherlands&origin=${encodeURIComponent(values.from)}`
    )
      .then((r) => r.json())
      .then((data) => {
        if (data.placement && data.items) setAffiliateData({ placement: data.placement, items: data.items });
      })
      .catch(() => {});
  }, [values, taskData, documentsData, meta.relatedLinks, placementId, updateUrl]);

  const handleGenerate = useCallback(() => {
    setIsGenerating(true);
    persistAndGenerate();
    setTimeout(() => setIsGenerating(false), 1500);
  }, [persistAndGenerate]);

  const handleReset = useCallback(() => {
    const defaultState = defaultResultRef.current;
    if (defaultState) {
      setResult(defaultState);
      setMode("default");
    }
  }, []);

  // After hydration, sync from URL then localStorage so server and client initial render match.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromParams = getValuesFromSearchParams(params);
    if (Object.keys(fromParams).length > 0) {
      setValues((prev) => ({ ...prev, ...fromParams }));
    } else {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw) as Partial<MovingChecklistInputValues>;
          setValues((prev) => ({ ...prev, ...parsed }));
        }
      } catch {
        // ignore
      }
    }
  }, []);

  return (
    <>
      <div ref={toolRef}>
        <ToolInputsCard
          mode="moving-checklist"
          values={values}
          onChange={setValues}
          onGenerate={handleGenerate}
          isGenerating={isGenerating}
          originCountries={originCountries}
          whatYouGetTitle={meta.toolPanel.whatYouGetTitle}
          whatYouGetItems={meta.toolPanel.whatYouGetItems}
        />
      </div>

      {isGenerating ? (
        <ToolResultsLoading message="Building your checklist..." />
      ) : result ? (
        <div className="mt-10 space-y-10">
          <ToolResultsHeader
            title={mode === "default" ? "Common moving checklist" : "Your personalized moving checklist"}
            mode={mode}
            onReset={handleReset}
            resetLabel="Show common checklist again"
          />
          <MovingChecklistSummary
            title={meta.results.title}
            summary={result.resolved.summary}
          />

          <div className="space-y-5">
            {result.resolved.groups.map((group) => (
              <MovingChecklistPhaseSection key={group.phase} group={group} />
            ))}
          </div>

          <ArrivalHandoffCard />

          <DocumentResults
            documentsByCategory={result.documentsByCategory}
            documentsGuideHref="/netherlands/documents-needed-to-move-netherlands/"
          />
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="mb-2 text-sm font-medium text-slate-800">Check your document readiness</p>
            <p className="mb-3 text-sm text-slate-600">
              Use the full Document Readiness Checker for a detailed list tailored to your situation.
            </p>
            <Link
              href="/netherlands/moving/tools/document-readiness/"
              className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-brand-600 shadow-sm transition hover:border-brand-200 hover:text-brand-700"
            >
              Open Document Readiness Checker →
            </Link>
          </div>

          {result.relevantLinks.length > 0 ? (
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Relevant guides</h3>
              <ul className="mt-3 flex flex-wrap gap-3">
                {result.relevantLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-brand-600 hover:text-brand-700"
                    >
                      {link.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {values.from ? (
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
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
            </div>
          ) : null}

          {affiliateData && affiliateData.items.length > 0 ? (
            <AffiliateBlockView
              placement={affiliateData.placement}
              items={affiliateData.items}
              showStageChip={values.stage === "before-move" || values.stage === "arriving-soon"}
            />
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
