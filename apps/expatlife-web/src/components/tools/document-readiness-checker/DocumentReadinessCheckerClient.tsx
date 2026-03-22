"use client";

import { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SegmentedControl } from "@/components/ui/segmented-control";
import { cn } from "@/lib/cn";
import type { DocumentReadinessAnswers, DocumentStatusValue } from "@/src/lib/document-readiness/readinessEngine";
import { runReadinessEngine } from "@/src/lib/document-readiness/readinessEngine";
import type { PrimaryRoute, HouseholdType } from "@/src/data/tools/document-readiness/document-categories";
import { getDocumentCategoriesForRouteAndHousehold } from "@/src/data/tools/document-readiness/document-categories";
import { COUNTRY_QUICK_PICKS, COUNTRY_SELECT_OPTIONS } from "@/src/data/tools/document-readiness/countries-list";
import { ROUTE_DOCUMENT_MAP } from "@/src/data/tools/document-readiness/route-document-map";
import { DocumentReadinessCheckerResults } from "./DocumentReadinessCheckerResults";
import { ToolResultsLoading } from "@/src/components/tools/ToolResultsLoading";

const STEPS = [
  "Country & citizenship",
  "Visa route",
  "Household",
  "Context",
  "Document status",
  "Complexity",
  "Review",
] as const;

const CITIZENSHIP_OPTIONS = [
  { value: "eu", label: "EU / EEA / Switzerland" },
  { value: "non-eu", label: "Non-EU / non-EEA" },
  { value: "not-sure", label: "Not sure" },
];

const ROUTE_OPTIONS = [
  { value: "highly-skilled-migrant", label: "Highly Skilled Migrant" },
  { value: "eu-blue-card", label: "EU Blue Card" },
  { value: "self-employed", label: "Self-Employed" },
  { value: "daft", label: "DAFT" },
  { value: "student", label: "Student" },
  { value: "partner-family", label: "Partner / Family" },
  { value: "not-sure", label: "Not sure yet" },
];

const HOUSEHOLD_OPTIONS = [
  { value: "solo", label: "Just me" },
  { value: "partner", label: "Partner / spouse" },
  { value: "partner-and-children", label: "Partner + children" },
  { value: "children-only", label: "Children only joining me" },
  { value: "not-sure", label: "Not sure" },
];

const COMPLEXITY_OPTIONS = [
  { value: "translation", label: "Translation" },
  { value: "apostille", label: "Apostille" },
  { value: "legalization", label: "Legalization" },
  { value: "replacement", label: "Replacement copy" },
  { value: "certification", label: "Certification" },
  { value: "not-sure", label: "I am not sure" },
];

const DEFAULT_ANSWERS: DocumentReadinessAnswers = {
  countryCode: "",
  citizenshipCategory: "not-sure",
  primaryRoute: "not-sure",
  householdType: "not-sure",
  currentDocumentStatuses: {},
  complexityFlags: [],
};

type Props = {
  initialPrefill?: Partial<DocumentReadinessAnswers>;
  onApplyScenario?: (answers: Partial<DocumentReadinessAnswers>) => void;
};

export function DocumentReadinessCheckerClient({ initialPrefill, onApplyScenario }: Props) {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<DocumentReadinessAnswers>(() => ({
    ...DEFAULT_ANSWERS,
    ...initialPrefill,
    currentDocumentStatuses: { ...DEFAULT_ANSWERS.currentDocumentStatuses, ...initialPrefill?.currentDocumentStatuses },
    complexityFlags: initialPrefill?.complexityFlags ?? [],
  }));
  const [result, setResult] = useState<ReturnType<typeof runReadinessEngine> | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const update = useCallback(<K extends keyof DocumentReadinessAnswers>(key: K, value: DocumentReadinessAnswers[K]) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }, []);

  const updateDocumentStatus = useCallback((id: string, status: DocumentStatusValue) => {
    setAnswers((prev) => ({
      ...prev,
      currentDocumentStatuses: { ...prev.currentDocumentStatuses, [id]: status },
    }));
  }, []);

  const toggleComplexity = useCallback((flag: string) => {
    setAnswers((prev) => {
      const next = [...prev.complexityFlags];
      const idx = next.indexOf(flag as DocumentReadinessAnswers["complexityFlags"][number]);
      if (idx >= 0) next.splice(idx, 1);
      else next.push(flag as DocumentReadinessAnswers["complexityFlags"][number]);
      return { ...prev, complexityFlags: next };
    });
  }, []);

  const relevantCategories = useMemo(
    () => getDocumentCategoriesForRouteAndHousehold(answers.primaryRoute, answers.householdType),
    [answers.primaryRoute, answers.householdType]
  );

  const currentStepId = STEPS[stepIndex];
  const isLastStep = stepIndex === STEPS.length - 1;
  const canGoNext = stepIndex < STEPS.length - 1;
  const canGoBack = stepIndex > 0;

  const handleNext = useCallback(() => {
    if (isLastStep) {
      setIsGenerating(true);
      setResult(null);
      const computed = runReadinessEngine(answers);
      setTimeout(() => {
        setResult(computed);
        setIsGenerating(false);
        document.getElementById("document-readiness-results")?.scrollIntoView({ behavior: "smooth" });
      }, 600);
    } else {
      setStepIndex((i) => Math.min(i + 1, STEPS.length - 1));
    }
  }, [isLastStep, answers]);

  const handleBack = useCallback(() => {
    setStepIndex((i) => Math.max(0, i - 1));
  }, []);

  const handleStartOver = useCallback(() => {
    setStepIndex(0);
    setAnswers({ ...DEFAULT_ANSWERS });
    setResult(null);
  }, []);

  const applyScenario = useCallback(
    (prefill: Partial<DocumentReadinessAnswers>) => {
      setAnswers((prev) => ({
        ...prev,
        ...prefill,
        currentDocumentStatuses: { ...prev.currentDocumentStatuses, ...prefill.currentDocumentStatuses },
        complexityFlags: prefill.complexityFlags ?? prev.complexityFlags,
      }));
      setStepIndex(0);
      setResult(null);
      onApplyScenario?.(prefill);
    },
    [onApplyScenario]
  );

  if (result) {
    return (
      <div className="space-y-8">
        <div id="document-readiness-results" className="scroll-mt-24">
          <DocumentReadinessCheckerResults result={result} answers={answers} onStartOver={handleStartOver} />
        </div>
      </div>
    );
  }

  return (
    <div className="scroll-mt-24">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          {STEPS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setStepIndex(i)}
              className={cn(
                "rounded-full px-3 py-1 text-xs font-medium",
                stepIndex === i ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              )}
              aria-current={stepIndex === i ? "step" : undefined}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <h2 className="text-lg font-semibold text-slate-900">{currentStepId}</h2>

        <div className="mt-5 space-y-5">
          {/* Step 1 — Country & citizenship */}
          {currentStepId === "Country & citizenship" && (
            <>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Which country are your main documents coming from?
                </label>
                <p className="mb-2 text-xs text-slate-500">Quick pick or choose from the list below.</p>
                <div className="mb-2 flex flex-wrap gap-2">
                  {COUNTRY_QUICK_PICKS.map((c) => (
                    <button
                      key={c.value}
                      type="button"
                      onClick={() => update("countryCode", c.value)}
                      className={cn(
                        "rounded-full border px-3 py-1.5 text-sm font-medium",
                        answers.countryCode === c.value
                          ? "border-brand-600 bg-brand-50 text-brand-800"
                          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                      )}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
                <select
                  value={answers.countryCode}
                  onChange={(e) => update("countryCode", e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800"
                >
                  {COUNTRY_SELECT_OPTIONS.map((opt) => (
                    <option key={opt.value || "empty"} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">What is your citizenship category?</label>
                <SegmentedControl
                  name="citizenship"
                  options={CITIZENSHIP_OPTIONS}
                  value={answers.citizenshipCategory}
                  onChange={(v) => update("citizenshipCategory", v as DocumentReadinessAnswers["citizenshipCategory"])}
                />
              </div>
            </>
          )}

          {/* Step 2 — Visa route */}
          {currentStepId === "Visa route" && (
            <>
              <p className="text-sm text-slate-600">Which route best matches your move?</p>
              <SegmentedControl
                name="route"
                options={ROUTE_OPTIONS}
                value={answers.primaryRoute}
                onChange={(v) => update("primaryRoute", v as PrimaryRoute)}
              />
              {answers.primaryRoute === "not-sure" && (
                <div className="rounded-xl border border-amber-200 bg-amber-50/80 p-3 text-sm text-slate-700">
                  <Link href="/netherlands/visa-checker/" className="font-semibold text-brand-600 hover:underline">
                    Use the Visa Checker first
                  </Link>{" "}
                  for better results, or continue for broad document guidance.
                </div>
              )}
            </>
          )}

          {/* Step 3 — Household */}
          {currentStepId === "Household" && (
            <>
              <p className="text-sm text-slate-600">Who is moving with you?</p>
              <SegmentedControl
                name="household"
                options={HOUSEHOLD_OPTIONS}
                value={answers.householdType}
                onChange={(v) => update("householdType", v as HouseholdType)}
              />
            </>
          )}

          {/* Step 4 — Context (work / study / business / partner) */}
          {currentStepId === "Context" && (
            <>
              {["highly-skilled-migrant", "eu-blue-card"].includes(answers.primaryRoute) && (
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Do you already have a signed job offer or contract?
                  </label>
                  <SegmentedControl
                    name="jobOffer"
                    options={[
                      { value: "yes", label: "Yes" },
                      { value: "no", label: "No" },
                      { value: "not-sure", label: "Not sure" },
                    ]}
                    value={answers.jobOfferStatus ?? ""}
                    onChange={(v) => update("jobOfferStatus", v as DocumentReadinessAnswers["jobOfferStatus"])}
                  />
                </div>
              )}
              {answers.primaryRoute === "student" && (
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Do you already have admission or enrollment proof?
                  </label>
                  <SegmentedControl
                    name="studyAdmission"
                    options={[
                      { value: "yes", label: "Yes" },
                      { value: "no", label: "No" },
                      { value: "not-sure", label: "Not sure" },
                    ]}
                    value={answers.studyAdmissionStatus ?? ""}
                    onChange={(v) => update("studyAdmissionStatus", v as DocumentReadinessAnswers["studyAdmissionStatus"])}
                  />
                </div>
              )}
              {["self-employed", "daft"].includes(answers.primaryRoute) && (
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Do you already have business or client documentation prepared?
                  </label>
                  <SegmentedControl
                    name="businessDocs"
                    options={[
                      { value: "yes", label: "Yes" },
                      { value: "no", label: "No" },
                      { value: "partly", label: "Partly" },
                    ]}
                    value={answers.businessDocumentStatus ?? ""}
                    onChange={(v) => update("businessDocumentStatus", v as DocumentReadinessAnswers["businessDocumentStatus"])}
                  />
                </div>
              )}
              {answers.primaryRoute === "partner-family" && (
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Do you already have relationship proof ready?
                  </label>
                  <SegmentedControl
                    name="relationshipProof"
                    options={[
                      { value: "yes", label: "Yes" },
                      { value: "no", label: "No" },
                      { value: "partly", label: "Partly" },
                    ]}
                    value={answers.relationshipProofStatus ?? ""}
                    onChange={(v) => update("relationshipProofStatus", v as DocumentReadinessAnswers["relationshipProofStatus"])}
                  />
                </div>
              )}
              {answers.primaryRoute === "not-sure" && (
                <p className="text-sm text-slate-500">Select a visa route in step 2 for more specific questions.</p>
              )}
            </>
          )}

          {/* Step 5 — Document status */}
          {currentStepId === "Document status" && (
            <>
              <p className="text-sm text-slate-600">
                Which of these do you already have ready? (Based on your route and household.)
              </p>
              <div className="space-y-3">
                {relevantCategories.map((cat) => {
                  const status = answers.currentDocumentStatuses[cat.id] ?? "not_sure";
                  return (
                    <div
                      key={cat.id}
                      className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-slate-200 bg-slate-50/50 p-3"
                    >
                      <span className="text-sm font-medium text-slate-800">{cat.title}</span>
                      <div className="flex gap-2">
                        {(["ready", "not_ready", "not_sure"] as const).map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => updateDocumentStatus(cat.id, s)}
                            className={cn(
                              "rounded-full px-3 py-1 text-xs font-medium",
                              status === s
                                ? "bg-brand-600 text-white"
                                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                            )}
                          >
                            {s === "ready" ? "Ready" : s === "not_ready" ? "Not ready" : "Not sure"}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {/* Step 6 — Complexity */}
          {currentStepId === "Complexity" && (
            <>
              <p className="text-sm text-slate-600">Do any of your documents still need one of the following?</p>
              <div className="flex flex-wrap gap-2">
                {COMPLEXITY_OPTIONS.map((opt) => {
                  const isSelected = answers.complexityFlags.includes(opt.value as DocumentReadinessAnswers["complexityFlags"][number]);
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => toggleComplexity(opt.value)}
                      className={cn(
                        "rounded-full border px-3 py-1.5 text-sm font-medium",
                        isSelected ? "border-brand-600 bg-brand-50 text-brand-800" : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                      )}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
              <div className="pt-4">
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Have you already checked official source instructions for your route?
                </label>
                <SegmentedControl
                  name="officialSource"
                  options={[
                    { value: "yes", label: "Yes" },
                    { value: "no", label: "No" },
                    { value: "skip", label: "Skip" },
                  ]}
                  value={
                    answers.officialSourceChecked === true
                      ? "yes"
                      : answers.officialSourceChecked === false
                        ? "no"
                        : "skip"
                  }
                  onChange={(v) => update("officialSourceChecked", v === "yes" ? true : v === "no" ? false : undefined)}
                />
              </div>
            </>
          )}

          {/* Step 7 — Review */}
          {currentStepId === "Review" && (
            <div className="space-y-4 rounded-xl border border-slate-200 bg-slate-50/60 p-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <span className="text-xs font-semibold uppercase text-slate-500">Country / document origin</span>
                  <p className="text-sm font-medium text-slate-800">
                    {COUNTRY_SELECT_OPTIONS.find((c) => c.value === answers.countryCode)?.label ?? answers.countryCode || "—"}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-slate-500">Citizenship</span>
                  <p className="text-sm font-medium text-slate-800">{answers.citizenshipCategory}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-slate-500">Route</span>
                  <p className="text-sm font-medium text-slate-800">
                    {ROUTE_DOCUMENT_MAP.find((r) => r.route === answers.primaryRoute)?.label ?? answers.primaryRoute}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-slate-500">Household</span>
                  <p className="text-sm font-medium text-slate-800">
                    {HOUSEHOLD_OPTIONS.find((h) => h.value === answers.householdType)?.label ?? answers.householdType}
                  </p>
                </div>
              </div>
              {answers.complexityFlags.length > 0 && (
                <div>
                  <span className="text-xs font-semibold uppercase text-slate-500">Complexity notes</span>
                  <p className="text-sm text-slate-700">{answers.complexityFlags.join(", ")}</p>
                </div>
              )}
              <p className="text-sm text-slate-600">Click &quot;Check my readiness&quot; to see your results.</p>
            </div>
          )}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {canGoBack && (
            <Button variant="secondary" onClick={handleBack} disabled={isGenerating}>
              <ChevronLeft className="mr-1 h-4 w-4" aria-hidden />
              Back
            </Button>
          )}
          <Button onClick={handleNext} disabled={isGenerating}>
            {isGenerating ? (
              "Checking..."
            ) : (
              <>
                {isLastStep ? "Check my readiness" : "Next"}
                {!isLastStep && <ChevronRight className="ml-1 h-4 w-4" aria-hidden />}
              </>
            )}
          </Button>
        </div>
      </div>

      {isGenerating && (
        <div className="mt-6">
          <ToolResultsLoading message="Checking your documents..." />
        </div>
      )}
    </div>
  );
}
