"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SegmentedControl } from "@/components/ui/segmented-control";
import { cn } from "@/lib/cn";
import type {
  VisaTimelineEstimatorAnswers,
  VisaTimelineRoute,
  TravelDistanceBand,
  CurrentStage,
  DocumentReadinessLevel,
  DocumentBottleneck,
  YesNoUnsure,
  TargetMoveWindow,
  PracticalTimingArea,
} from "@/src/lib/visa-timeline-estimator/types";
import { runTimelineEngine } from "@/src/lib/visa-timeline-estimator/timelineEngine";
import { COUNTRY_QUICK_PICKS, COUNTRY_SELECT_OPTIONS } from "@/src/data/tools/document-readiness/countries-list";
import { VisaTimelineEstimatorResults } from "./VisaTimelineEstimatorResults";
import { ToolResultsLoading } from "@/src/components/tools/ToolResultsLoading";

const STEPS = [
  "Visa route",
  "Country",
  "Current stage",
  "Document readiness",
  "Route context",
  "Practical timing",
  "Review",
  "Results",
] as const;

const ROUTE_OPTIONS = [
  { value: "highly-skilled-migrant", label: "Highly Skilled Migrant" },
  { value: "eu-blue-card", label: "EU Blue Card" },
  { value: "self-employed", label: "Self-Employed" },
  { value: "daft", label: "DAFT" },
  { value: "student", label: "Student" },
  { value: "partner-family", label: "Partner / Family" },
  { value: "not-sure", label: "Not sure yet" },
];

const DISTANCE_OPTIONS = [
  { value: "nearby-europe", label: "Nearby Europe" },
  { value: "medium-haul", label: "Medium haul" },
  { value: "long-haul", label: "Long haul" },
  { value: "not-sure", label: "Not sure" },
];

const STAGE_OPTIONS = [
  { value: "just-exploring", label: "Just exploring" },
  { value: "chosen-route", label: "Chosen likely route" },
  { value: "gathering-documents", label: "Gathering documents" },
  { value: "ready-to-apply", label: "Ready to apply" },
  { value: "already-submitted", label: "Already submitted" },
  { value: "approved-planning-move", label: "Approved / planning move" },
];

const DOC_READINESS_OPTIONS = [
  { value: "most-ready", label: "Most important documents are ready" },
  { value: "some-ready", label: "Some are ready, some still missing" },
  { value: "barely-started", label: "I have barely started" },
  { value: "not-sure", label: "Not sure" },
];

const BOTTLENECK_OPTIONS: { value: DocumentBottleneck; label: string }[] = [
  { value: "passport-identity", label: "Passport / identity" },
  { value: "employer-contract", label: "Employment / sponsor documents" },
  { value: "study-admission", label: "Study documents" },
  { value: "business-docs", label: "Business documents" },
  { value: "partner-family-docs", label: "Partner / family documents" },
  { value: "civil-documents", label: "Civil documents" },
  { value: "translations-apostille", label: "Translations / apostille / legalization" },
  { value: "not-sure", label: "Not sure" },
];

const TARGET_MOVE_OPTIONS = [
  { value: "within-1-month", label: "Within 1 month" },
  { value: "1-3-months", label: "In 1–3 months" },
  { value: "3-6-months", label: "In 3–6 months" },
  { value: "6-plus-months", label: "In 6+ months" },
  { value: "not-sure", label: "Not sure" },
];

const PRACTICAL_OPTIONS: { value: PracticalTimingArea; label: string }[] = [
  { value: "temporary-housing", label: "Temporary housing search" },
  { value: "flights-travel", label: "Flights / travel booking" },
  { value: "shipping-luggage", label: "Shipping / extra luggage" },
  { value: "municipality-registration", label: "Municipality registration planning" },
  { value: "bank-phone-insurance", label: "Bank / phone / insurance setup" },
  { value: "family-school", label: "Family / school planning" },
  { value: "pet-logistics", label: "Pet logistics" },
  { value: "none", label: "None of these" },
];

const YES_NO_UNSURE: { value: YesNoUnsure; label: string }[] = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
  { value: "not-sure", label: "Not sure" },
];

const DEFAULT_ANSWERS: VisaTimelineEstimatorAnswers = {
  primaryRoute: "not-sure",
  countryCode: "",
  travelDistanceBand: "not-sure",
  currentStage: "just-exploring",
  documentReadinessLevel: "not-sure",
  documentBottleneck: "not-sure",
  sponsorReadyStatus: "not-sure",
  applicationStartedWithEmployer: "not-sure",
  admissionReadyStatus: "not-sure",
  studyStartDateFixed: "not-sure",
  businessReadinessStatus: "not-sure",
  stillDecidingDaftVsSelfEmployed: "not-sure",
  sponsorSituationClear: "not-sure",
  familyDocReadinessStatus: "not-sure",
  includedTimingAreas: [],
  targetMoveWindow: "not-sure",
};

type Props = {
  initialPrefill?: Partial<VisaTimelineEstimatorAnswers>;
};

export function VisaTimelineEstimatorClient({ initialPrefill }: Props) {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<VisaTimelineEstimatorAnswers>(() => ({
    ...DEFAULT_ANSWERS,
    ...initialPrefill,
    includedTimingAreas: initialPrefill?.includedTimingAreas ?? [],
  }));
  const [result, setResult] = useState<ReturnType<typeof runTimelineEngine> | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const update = useCallback(<K extends keyof VisaTimelineEstimatorAnswers>(
    key: K,
    value: VisaTimelineEstimatorAnswers[K]
  ) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }, []);

  const togglePractical = useCallback((area: PracticalTimingArea) => {
    if (area === "none") {
      setAnswers((prev) => ({ ...prev, includedTimingAreas: [] }));
      return;
    }
    setAnswers((prev) => {
      const next = prev.includedTimingAreas.includes(area)
        ? prev.includedTimingAreas.filter((a) => a !== area)
        : [...prev.includedTimingAreas.filter((a) => a !== "none"), area];
      return { ...prev, includedTimingAreas: next };
    });
  }, []);

  const currentStepId = STEPS[stepIndex];
  const isReviewStep = currentStepId === "Review";
  const isLastInputStep = stepIndex === STEPS.indexOf("Review");
  const canGoBack = stepIndex > 0;

  const handleNext = useCallback(() => {
    if (isReviewStep) {
      setIsGenerating(true);
      setResult(null);
      const computed = runTimelineEngine(answers);
      setTimeout(() => {
        setResult(computed);
        setIsGenerating(false);
        document.getElementById("visa-timeline-results")?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else {
      setStepIndex((i) => Math.min(i + 1, STEPS.length - 1));
    }
  }, [isReviewStep, answers]);

  const handleBack = useCallback(() => {
    setStepIndex((i) => Math.max(0, i - 1));
  }, []);

  const handleStartOver = useCallback(() => {
    setStepIndex(0);
    setAnswers({ ...DEFAULT_ANSWERS });
    setResult(null);
  }, []);

  if (result) {
    return (
      <div className="space-y-8">
        <VisaTimelineEstimatorResults result={result} answers={answers} onStartOver={handleStartOver} />
      </div>
    );
  }

  const workRoutes = ["highly-skilled-migrant", "eu-blue-card"];
  const isWorkRoute = workRoutes.includes(answers.primaryRoute);
  const isStudentRoute = answers.primaryRoute === "student";
  const isSelfEmployedOrDaft =
    answers.primaryRoute === "self-employed" || answers.primaryRoute === "daft";
  const isPartnerRoute = answers.primaryRoute === "partner-family";

  return (
    <div className="scroll-mt-24">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          {STEPS.filter((s) => s !== "Results").map((_, i) => (
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
          {/* Step 1 — Visa route */}
          {currentStepId === "Visa route" && (
            <>
              <p className="text-sm text-slate-600">Which route best matches your move?</p>
              <SegmentedControl
                name="route"
                options={ROUTE_OPTIONS}
                value={answers.primaryRoute}
                onChange={(v) => update("primaryRoute", v as VisaTimelineRoute)}
              />
              {answers.primaryRoute === "not-sure" && (
                <div className="rounded-xl border border-amber-200 bg-amber-50/80 p-3 text-sm text-slate-700">
                  Use the{" "}
                  <Link href="/netherlands/visa-checker/" className="font-semibold text-brand-600 hover:underline">
                    Visa Checker
                  </Link>{" "}
                  for a better result. You can continue for broad timing ranges.
                </div>
              )}
            </>
          )}

          {/* Step 2 — Country */}
          {currentStepId === "Country" && (
            <>
              <p className="text-sm text-slate-600">Which country are you moving from?</p>
              <div className="flex flex-wrap gap-2">
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
                className="w-full max-w-xs rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800"
              >
                {COUNTRY_SELECT_OPTIONS.map((opt) => (
                  <option key={opt.value || "empty"} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Travel distance band</label>
                <SegmentedControl
                  name="distance"
                  options={DISTANCE_OPTIONS}
                  value={answers.travelDistanceBand}
                  onChange={(v) => update("travelDistanceBand", v as TravelDistanceBand)}
                />
              </div>
            </>
          )}

          {/* Step 3 — Current stage */}
          {currentStepId === "Current stage" && (
            <>
              <p className="text-sm text-slate-600">Where are you in the process?</p>
              <SegmentedControl
                name="stage"
                options={STAGE_OPTIONS}
                value={answers.currentStage}
                onChange={(v) => update("currentStage", v as CurrentStage)}
              />
            </>
          )}

          {/* Step 4 — Document readiness */}
          {currentStepId === "Document readiness" && (
            <>
              <p className="text-sm text-slate-600">How ready are your documents?</p>
              <SegmentedControl
                name="docReadiness"
                options={DOC_READINESS_OPTIONS}
                value={answers.documentReadinessLevel}
                onChange={(v) => update("documentReadinessLevel", v as DocumentReadinessLevel)}
              />
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Biggest document bottleneck (optional)</label>
                <SegmentedControl
                  name="bottleneck"
                  options={BOTTLENECK_OPTIONS}
                  value={answers.documentBottleneck}
                  onChange={(v) => update("documentBottleneck", v as DocumentBottleneck)}
                />
              </div>
            </>
          )}

          {/* Step 5 — Route-specific context */}
          {currentStepId === "Route context" && (
            <>
              {isWorkRoute && (
                <>
                  <p className="text-sm text-slate-600">Do you already have a Dutch employer / sponsor ready?</p>
                  <SegmentedControl
                    name="sponsorReady"
                    options={YES_NO_UNSURE}
                    value={answers.sponsorReadyStatus}
                    onChange={(v) => update("sponsorReadyStatus", v as YesNoUnsure)}
                  />
                  <p className="text-sm text-slate-600">Has application paperwork already started with the employer?</p>
                  <SegmentedControl
                    name="appStarted"
                    options={YES_NO_UNSURE}
                    value={answers.applicationStartedWithEmployer}
                    onChange={(v) => update("applicationStartedWithEmployer", v as YesNoUnsure)}
                  />
                </>
              )}
              {isStudentRoute && (
                <>
                  <p className="text-sm text-slate-600">Do you already have admission / enrollment confirmed?</p>
                  <SegmentedControl
                    name="admissionReady"
                    options={YES_NO_UNSURE}
                    value={answers.admissionReadyStatus}
                    onChange={(v) => update("admissionReadyStatus", v as YesNoUnsure)}
                  />
                  <p className="text-sm text-slate-600">Is your study start date already fixed?</p>
                  <SegmentedControl
                    name="studyStartFixed"
                    options={YES_NO_UNSURE}
                    value={answers.studyStartDateFixed}
                    onChange={(v) => update("studyStartDateFixed", v as YesNoUnsure)}
                  />
                </>
              )}
              {isSelfEmployedOrDaft && (
                <>
                  <p className="text-sm text-slate-600">Are your business documents already prepared?</p>
                  <SegmentedControl
                    name="businessReady"
                    options={[
                      { value: "yes", label: "Yes" },
                      { value: "no", label: "No" },
                      { value: "not-sure", label: "Partly" },
                    ]}
                    value={answers.businessReadinessStatus}
                    onChange={(v) => update("businessReadinessStatus", v as YesNoUnsure)}
                  />
                  <p className="text-sm text-slate-600">Are you still deciding between DAFT and Self-Employed?</p>
                  <SegmentedControl
                    name="decidingDaft"
                    options={YES_NO_UNSURE}
                    value={answers.stillDecidingDaftVsSelfEmployed}
                    onChange={(v) => update("stillDecidingDaftVsSelfEmployed", v as YesNoUnsure)}
                  />
                </>
              )}
              {isPartnerRoute && (
                <>
                  <p className="text-sm text-slate-600">Is the sponsor situation already clear?</p>
                  <SegmentedControl
                    name="sponsorClear"
                    options={YES_NO_UNSURE}
                    value={answers.sponsorSituationClear}
                    onChange={(v) => update("sponsorSituationClear", v as YesNoUnsure)}
                  />
                  <p className="text-sm text-slate-600">Are your relationship / family documents ready?</p>
                  <SegmentedControl
                    name="familyDocs"
                    options={[
                      { value: "yes", label: "Yes" },
                      { value: "no", label: "No" },
                      { value: "not-sure", label: "Partly" },
                    ]}
                    value={answers.familyDocReadinessStatus}
                    onChange={(v) => update("familyDocReadinessStatus", v as YesNoUnsure)}
                  />
                </>
              )}
              {!isWorkRoute && !isStudentRoute && !isSelfEmployedOrDaft && !isPartnerRoute && (
                <p className="text-sm text-slate-600">Select a visa route in step 1 for route-specific questions.</p>
              )}
            </>
          )}

          {/* Step 6 — Practical timing */}
          {currentStepId === "Practical timing" && (
            <>
              <p className="text-sm text-slate-600">Which practical timing areas should be included? (multi-select)</p>
              <div className="flex flex-wrap gap-2">
                {PRACTICAL_OPTIONS.filter((o) => o.value !== "none").map((opt) => {
                  const selected = answers.includedTimingAreas.includes(opt.value);
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => togglePractical(opt.value)}
                      className={cn(
                        "rounded-full border px-3 py-1.5 text-sm font-medium",
                        selected ? "border-brand-600 bg-brand-50 text-brand-800" : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                      )}
                    >
                      {opt.label}
                    </button>
                  );
                })}
                <button
                  type="button"
                  onClick={() => togglePractical("none")}
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-sm font-medium",
                    answers.includedTimingAreas.length === 0 ? "border-brand-600 bg-brand-50 text-brand-800" : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                  )}
                >
                  None of these
                </button>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">When do you hope to move?</label>
                <SegmentedControl
                  name="targetMove"
                  options={TARGET_MOVE_OPTIONS}
                  value={answers.targetMoveWindow}
                  onChange={(v) => update("targetMoveWindow", v as TargetMoveWindow)}
                />
              </div>
            </>
          )}

          {/* Step 7 — Review */}
          {currentStepId === "Review" && (
            <div className="space-y-4 rounded-xl border border-slate-200 bg-slate-50/60 p-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <span className="text-xs font-semibold uppercase text-slate-500">Route</span>
                  <p className="text-sm font-medium text-slate-800">
                    {ROUTE_OPTIONS.find((r) => r.value === answers.primaryRoute)?.label ?? answers.primaryRoute}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-slate-500">Country</span>
                  <p className="text-sm font-medium text-slate-800">
                    {COUNTRY_SELECT_OPTIONS.find((c) => c.value === answers.countryCode)?.label ?? answers.countryCode || "—"}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-slate-500">Stage</span>
                  <p className="text-sm font-medium text-slate-800">
                    {STAGE_OPTIONS.find((s) => s.value === answers.currentStage)?.label ?? answers.currentStage}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-slate-500">Document readiness</span>
                  <p className="text-sm font-medium text-slate-800">
                    {DOC_READINESS_OPTIONS.find((d) => d.value === answers.documentReadinessLevel)?.label ?? answers.documentReadinessLevel}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-slate-500">Target move</span>
                  <p className="text-sm font-medium text-slate-800">
                    {TARGET_MOVE_OPTIONS.find((t) => t.value === answers.targetMoveWindow)?.label ?? answers.targetMoveWindow}
                  </p>
                </div>
              </div>
              {answers.includedTimingAreas.length > 0 && (
                <div>
                  <span className="text-xs font-semibold uppercase text-slate-500">Practical areas</span>
                  <p className="text-sm text-slate-700">
                    {answers.includedTimingAreas.map((a) => PRACTICAL_OPTIONS.find((p) => p.value === a)?.label ?? a).join(", ")}
                  </p>
                </div>
              )}
              <p className="text-sm text-slate-600">Click &quot;Estimate my timeline&quot; to see your personalized estimate.</p>
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
              "Calculating..."
            ) : (
              <>
                {isReviewStep ? "Estimate my timeline" : "Next"}
                {!isReviewStep && <ChevronRight className="ml-1 h-4 w-4" aria-hidden />}
              </>
            )}
          </Button>
        </div>
      </div>

      {isGenerating && (
        <div className="mt-6">
          <ToolResultsLoading message="Calculating your timeline..." />
        </div>
      )}
    </div>
  );
}
