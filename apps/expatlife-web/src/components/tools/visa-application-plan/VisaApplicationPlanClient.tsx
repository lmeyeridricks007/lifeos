"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SegmentedControl } from "@/components/ui/segmented-control";
import { cn } from "@/lib/cn";
import type { VisaApplicationPlanAnswers, VisaPlanRoute, CitizenshipCategory, HouseholdType, ApplicationStage, DocumentReadinessLevel, MissingDocumentArea, TargetMoveWindow, PracticalSetupNeed } from "@/src/lib/visa-plan/types";
import { runPlanEngine } from "@/src/lib/visa-plan/planEngine";
import { COUNTRY_QUICK_PICKS, COUNTRY_SELECT_OPTIONS } from "@/src/data/tools/document-readiness/countries-list";
import { VisaApplicationPlanResults } from "./VisaApplicationPlanResults";
import { ToolResultsLoading } from "@/src/components/tools/ToolResultsLoading";

const STEPS = [
  "Visa route",
  "Country & citizenship",
  "Household",
  "Application status",
  "Document readiness",
  "Timing",
  "Practical setup",
  "Review",
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

const CITIZENSHIP_OPTIONS = [
  { value: "eu", label: "EU / EEA / Switzerland" },
  { value: "non-eu", label: "Non-EU / non-EEA" },
  { value: "not-sure", label: "Not sure" },
];

const HOUSEHOLD_OPTIONS = [
  { value: "just-me", label: "Just me" },
  { value: "partner", label: "Partner / spouse" },
  { value: "partner-and-children", label: "Partner + children" },
  { value: "children-only", label: "Children only joining me" },
  { value: "pet", label: "Pet" },
  { value: "not-sure", label: "Not sure" },
];

const STAGE_OPTIONS = [
  { value: "just-exploring", label: "Just exploring" },
  { value: "chosen-route", label: "Chosen likely visa route" },
  { value: "gathering-documents", label: "Gathering documents" },
  { value: "ready-to-apply", label: "Ready to apply soon" },
  { value: "already-submitted", label: "Already submitted" },
  { value: "approved-planning-move", label: "Approved / planning move" },
];

const DOC_READINESS_OPTIONS = [
  { value: "most-ready", label: "Most important documents are ready" },
  { value: "some-ready", label: "Some are ready, some still missing" },
  { value: "barely-started", label: "I have barely started" },
  { value: "not-sure", label: "Not sure" },
];

const MISSING_DOC_OPTIONS: { value: MissingDocumentArea; label: string }[] = [
  { value: "passport-identity", label: "Passport / identity" },
  { value: "employer-contract", label: "Employer / contract docs" },
  { value: "study-admission", label: "Study admission docs" },
  { value: "partner-family-docs", label: "Partner / family docs" },
  { value: "business-docs", label: "Business docs" },
  { value: "civil-documents", label: "Civil documents" },
  { value: "translations-apostille", label: "Translations / apostille / legalization" },
  { value: "not-sure", label: "Not sure" },
];

const TIMING_OPTIONS = [
  { value: "within-1-month", label: "Within 1 month" },
  { value: "1-3-months", label: "In 1–3 months" },
  { value: "3-6-months", label: "In 3–6 months" },
  { value: "6-plus-months", label: "In 6+ months" },
  { value: "not-sure", label: "Not sure" },
];

const PRACTICAL_OPTIONS: { value: PracticalSetupNeed; label: string }[] = [
  { value: "temporary-housing", label: "Temporary housing" },
  { value: "long-term-housing", label: "Long-term housing" },
  { value: "bank-account", label: "Bank account" },
  { value: "insurance", label: "Insurance" },
  { value: "flights", label: "Flights" },
  { value: "shipping", label: "Shipping / luggage" },
  { value: "municipality-registration", label: "Municipality registration planning" },
  { value: "school-family-setup", label: "School / family setup" },
  { value: "pet-logistics", label: "Pet logistics" },
  { value: "not-sure", label: "Not sure" },
];

const DEFAULT_ANSWERS: VisaApplicationPlanAnswers = {
  primaryRoute: "not-sure",
  countryCode: "",
  citizenshipCategory: "not-sure",
  householdType: "just-me",
  includesPets: false,
  applicationStage: "just-exploring",
  documentReadinessLevel: "not-sure",
  missingDocumentAreas: [],
  targetMoveWindow: "not-sure",
  hasFixedStartDate: false,
  practicalSetupNeeds: [],
};

type Props = {
  initialPrefill?: Partial<VisaApplicationPlanAnswers>;
};

export function VisaApplicationPlanClient({ initialPrefill }: Props) {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<VisaApplicationPlanAnswers>(() => ({
    ...DEFAULT_ANSWERS,
    ...initialPrefill,
    missingDocumentAreas: initialPrefill?.missingDocumentAreas ?? [],
    practicalSetupNeeds: initialPrefill?.practicalSetupNeeds ?? [],
  }));
  const [result, setResult] = useState<ReturnType<typeof runPlanEngine> | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const update = useCallback(<K extends keyof VisaApplicationPlanAnswers>(key: K, value: VisaApplicationPlanAnswers[K]) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }, []);

  const toggleMissingDoc = useCallback((area: MissingDocumentArea) => {
    setAnswers((prev) => {
      const next = prev.missingDocumentAreas.includes(area)
        ? prev.missingDocumentAreas.filter((a) => a !== area)
        : [...prev.missingDocumentAreas, area];
      return { ...prev, missingDocumentAreas: next };
    });
  }, []);

  const togglePractical = useCallback((need: PracticalSetupNeed) => {
    setAnswers((prev) => {
      const next = prev.practicalSetupNeeds.includes(need)
        ? prev.practicalSetupNeeds.filter((n) => n !== need)
        : [...prev.practicalSetupNeeds, need];
      return { ...prev, practicalSetupNeeds: next };
    });
  }, []);

  const currentStepId = STEPS[stepIndex];
  const isLastStep = stepIndex === STEPS.length - 1;
  const canGoBack = stepIndex > 0;

  const handleNext = useCallback(() => {
    if (isLastStep) {
      setIsGenerating(true);
      setResult(null);
      const computed = runPlanEngine(answers);
      setTimeout(() => {
        setResult(computed);
        setIsGenerating(false);
        document.getElementById("visa-plan-results")?.scrollIntoView({ behavior: "smooth" });
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

  if (result) {
    return (
      <div className="space-y-8">
        <VisaApplicationPlanResults result={result} answers={answers} onStartOver={handleStartOver} />
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
          {/* Step 1 — Visa route */}
          {currentStepId === "Visa route" && (
            <>
              <p className="text-sm text-slate-600">Which route best matches your move?</p>
              <SegmentedControl
                name="route"
                options={ROUTE_OPTIONS}
                value={answers.primaryRoute}
                onChange={(v) => update("primaryRoute", v as VisaPlanRoute)}
              />
              {answers.primaryRoute === "not-sure" && (
                <div className="rounded-xl border border-amber-200 bg-amber-50/80 p-3 text-sm text-slate-700">
                  You may get a better result if you use the{" "}
                  <Link href="/netherlands/visa-checker/" className="font-semibold text-brand-600 hover:underline">
                    Visa Checker
                  </Link>{" "}
                  first. You can continue for a general plan.
                </div>
              )}
            </>
          )}

          {/* Step 2 — Country & citizenship */}
          {currentStepId === "Country & citizenship" && (
            <>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Which country are you moving from?</label>
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
                  className="w-full max-w-xs rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800"
                >
                  {COUNTRY_SELECT_OPTIONS.map((opt) => (
                    <option key={opt.value || "empty"} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Citizenship category</label>
                <SegmentedControl
                  name="citizenship"
                  options={CITIZENSHIP_OPTIONS}
                  value={answers.citizenshipCategory}
                  onChange={(v) => update("citizenshipCategory", v as CitizenshipCategory)}
                />
              </div>
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
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="pets"
                  checked={answers.includesPets}
                  onChange={(e) => update("includesPets", e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-brand-600"
                />
                <label htmlFor="pets" className="text-sm text-slate-700">I am moving with a pet</label>
              </div>
            </>
          )}

          {/* Step 4 — Application status */}
          {currentStepId === "Application status" && (
            <>
              <p className="text-sm text-slate-600">Where are you in the process?</p>
              <SegmentedControl
                name="stage"
                options={STAGE_OPTIONS}
                value={answers.applicationStage}
                onChange={(v) => update("applicationStage", v as ApplicationStage)}
              />
            </>
          )}

          {/* Step 5 — Document readiness */}
          {currentStepId === "Document readiness" && (
            <>
              <p className="text-sm text-slate-600">How ready are your documents?</p>
              <SegmentedControl
                name="docReadiness"
                options={DOC_READINESS_OPTIONS}
                value={answers.documentReadinessLevel}
                onChange={(v) => update("documentReadinessLevel", v as DocumentReadinessLevel)}
              />
              <div className="pt-2">
                <label className="mb-1.5 block text-sm font-medium text-slate-700">What is still missing most? (optional, multi-select)</label>
                <div className="flex flex-wrap gap-2">
                  {MISSING_DOC_OPTIONS.filter((o) => o.value !== "not-sure").map((opt) => {
                    const selected = answers.missingDocumentAreas.includes(opt.value);
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => toggleMissingDoc(opt.value)}
                        className={cn(
                          "rounded-full border px-3 py-1.5 text-sm font-medium",
                          selected ? "border-brand-600 bg-brand-50 text-brand-800" : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                        )}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          {/* Step 6 — Timing */}
          {currentStepId === "Timing" && (
            <>
              <p className="text-sm text-slate-600">When do you want to move?</p>
              <SegmentedControl
                name="timing"
                options={TIMING_OPTIONS}
                value={answers.targetMoveWindow}
                onChange={(v) => update("targetMoveWindow", v as TargetMoveWindow)}
              />
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Do you already have a fixed start date?</label>
                <SegmentedControl
                  name="fixedDate"
                  options={[
                    { value: "yes", label: "Yes" },
                    { value: "no", label: "No" },
                  ]}
                  value={answers.hasFixedStartDate ? "yes" : "no"}
                  onChange={(v) => update("hasFixedStartDate", v === "yes")}
                />
              </div>
            </>
          )}

          {/* Step 7 — Practical setup */}
          {currentStepId === "Practical setup" && (
            <>
              <p className="text-sm text-slate-600">Which practical areas do you still need to arrange? (multi-select)</p>
              <div className="flex flex-wrap gap-2">
                {PRACTICAL_OPTIONS.filter((o) => o.value !== "not-sure").map((opt) => {
                  const selected = answers.practicalSetupNeeds.includes(opt.value);
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
              </div>
            </>
          )}

          {/* Step 8 — Review */}
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
                    {COUNTRY_SELECT_OPTIONS.find((c) => c.value === answers.countryCode)?.label ??
                      (answers.countryCode || "—")}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-slate-500">Household</span>
                  <p className="text-sm font-medium text-slate-800">
                    {HOUSEHOLD_OPTIONS.find((h) => h.value === answers.householdType)?.label ?? answers.householdType}
                    {answers.includesPets ? " + pet" : ""}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-slate-500">Stage</span>
                  <p className="text-sm font-medium text-slate-800">
                    {STAGE_OPTIONS.find((s) => s.value === answers.applicationStage)?.label ?? answers.applicationStage}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-slate-500">Document status</span>
                  <p className="text-sm font-medium text-slate-800">
                    {DOC_READINESS_OPTIONS.find((d) => d.value === answers.documentReadinessLevel)?.label ?? answers.documentReadinessLevel}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-slate-500">Target move</span>
                  <p className="text-sm font-medium text-slate-800">
                    {TIMING_OPTIONS.find((t) => t.value === answers.targetMoveWindow)?.label ?? answers.targetMoveWindow}
                    {answers.hasFixedStartDate ? " (fixed date)" : ""}
                  </p>
                </div>
              </div>
              {answers.practicalSetupNeeds.length > 0 && (
                <div>
                  <span className="text-xs font-semibold uppercase text-slate-500">Practical setup needs</span>
                  <p className="text-sm text-slate-700">{answers.practicalSetupNeeds.join(", ")}</p>
                </div>
              )}
              <p className="text-sm text-slate-600">Click &quot;Generate my visa plan&quot; to see your personalized plan.</p>
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
              "Generating..."
            ) : (
              <>
                {isLastStep ? "Generate my visa plan" : "Next"}
                {!isLastStep && <ChevronRight className="ml-1 h-4 w-4" aria-hidden />}
              </>
            )}
          </Button>
        </div>
      </div>

      {isGenerating && (
        <div className="mt-6">
          <ToolResultsLoading message="Building your visa plan..." />
        </div>
      )}
    </div>
  );
}
