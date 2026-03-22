"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SegmentedControl } from "@/components/ui/segmented-control";
import { cn } from "@/lib/cn";
import type { VisaCostCalculatorAnswers } from "@/src/data/tools/visa-cost-calculator/types";
import { runVisaCostEngine } from "@/src/lib/visa-cost-calculator/costEngine";
import { COUNTRY_QUICK_PICKS, COUNTRY_SELECT_OPTIONS } from "@/src/data/tools/document-readiness/countries-list";
import { VisaCostCalculatorResults } from "./VisaCostCalculatorResults";
import { ToolResultsLoading } from "@/src/components/tools/ToolResultsLoading";

const STEPS = [
  "Visa route",
  "Country / origin",
  "Household",
  "Route details",
  "Document complexity",
  "Travel / move setup",
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

const TRAVEL_BAND_OPTIONS = [
  { value: "nearby-europe", label: "Nearby Europe" },
  { value: "medium-haul", label: "Medium haul" },
  { value: "long-haul", label: "Long haul" },
];

const HOUSEHOLD_OPTIONS = [
  { value: "solo", label: "Just me" },
  { value: "partner", label: "Partner / spouse" },
  { value: "partner-and-children", label: "Partner + children" },
  { value: "children-only", label: "Children only joining me" },
  { value: "pet", label: "Pet" },
  { value: "not-sure", label: "Not sure" },
];

const DOC_COMPLEXITY_OPTIONS = [
  { value: "translation", label: "Translation" },
  { value: "apostille", label: "Apostille" },
  { value: "legalization", label: "Legalization" },
  { value: "certified-copies", label: "Certified copies" },
  { value: "replacement-civil", label: "Replacement civil documents" },
  { value: "not-sure", label: "Not sure" },
];

const COST_CATEGORY_OPTIONS = [
  { value: "flights", label: "Flights" },
  { value: "temporary-housing", label: "Temporary housing" },
  { value: "shipping-luggage", label: "Shipping / extra luggage" },
  { value: "first-week-admin", label: "First-week admin setup" },
  { value: "bank-phone-insurance", label: "Bank / phone / insurance setup" },
  { value: "pet-travel", label: "Pet travel costs" },
  { value: "none", label: "None of these" },
];

const TEMP_HOUSING_OPTIONS = [
  { value: "none", label: "None" },
  { value: "1-week", label: "1 week" },
  { value: "2-weeks", label: "2 weeks" },
  { value: "1-month", label: "1 month" },
  { value: "more-than-1-month", label: "More than 1 month" },
];

const DEFAULT_ANSWERS: VisaCostCalculatorAnswers = {
  primaryRoute: "not-sure",
  countryCode: "",
  travelDistanceBand: "",
  householdType: "not-sure",
  includesPets: false,
  workAgeBand: "not-sure",
  sponsorStatus: "not-sure",
  studyType: "not-sure",
  entrepreneurMode: "not-sure",
  businessStage: "not-sure",
  partnerJoiningSponsor: "not-sure",
  sponsorIncomeStatus: "not-sure",
  documentComplexityFlags: [],
  documentReadinessLevel: "",
  includedCostCategories: [],
  tempHousingDuration: "",
};

function deriveTravelBand(countryCode: string): string {
  const longHaul = ["india", "united-states", "south-africa", "australia", "brazil", "china", "japan", "mexico"];
  const mediumHaul = ["united-kingdom", "russia", "ukraine", "turkey", "egypt"];
  if (longHaul.includes(countryCode)) return "long-haul";
  if (mediumHaul.includes(countryCode)) return "medium-haul";
  if (countryCode && ["germany", "france", "belgium", "spain", "italy", "poland"].includes(countryCode)) return "nearby-europe";
  return "";
}

type Props = {
  initialPrefill?: Partial<VisaCostCalculatorAnswers>;
  onApplyScenario?: (answers: Partial<VisaCostCalculatorAnswers>) => void;
};

export function VisaCostCalculatorClient({ initialPrefill, onApplyScenario }: Props) {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<VisaCostCalculatorAnswers>(() => ({
    ...DEFAULT_ANSWERS,
    ...initialPrefill,
    documentComplexityFlags: initialPrefill?.documentComplexityFlags ?? [],
    includedCostCategories: initialPrefill?.includedCostCategories ?? [],
  }));
  const [result, setResult] = useState<ReturnType<typeof runVisaCostEngine> | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const update = useCallback(<K extends keyof VisaCostCalculatorAnswers>(key: K, value: VisaCostCalculatorAnswers[K]) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }, []);

  const toggleList = useCallback(
    (key: "documentComplexityFlags" | "includedCostCategories", value: string) => {
      setAnswers((prev) => {
        const arr = [...prev[key]];
        const idx = arr.indexOf(value);
        if (idx >= 0) arr.splice(idx, 1);
        else if (value !== "none") arr.push(value);
        if (value === "none") return { ...prev, [key]: [] };
        return { ...prev, [key]: arr };
      });
    },
    []
  );

  const currentStepId = STEPS[stepIndex];
  const isLastStep = stepIndex === STEPS.length - 1;
  const canGoBack = stepIndex > 0;

  const handleNext = useCallback(() => {
    if (isLastStep) {
      setIsGenerating(true);
      setResult(null);
      const computed = runVisaCostEngine(answers);
      setTimeout(() => {
        setResult(computed);
        setIsGenerating(false);
        document.getElementById("visa-cost-results")?.scrollIntoView({ behavior: "smooth" });
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
    (prefill: Partial<VisaCostCalculatorAnswers>) => {
      setAnswers((prev) => ({
        ...prev,
        ...prefill,
        documentComplexityFlags: (prefill.documentComplexityFlags as string[]) ?? prev.documentComplexityFlags,
        includedCostCategories: (prefill.includedCostCategories as string[]) ?? prev.includedCostCategories,
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
        <div id="visa-cost-results" className="scroll-mt-24">
          <VisaCostCalculatorResults result={result} answers={answers} onStartOver={handleStartOver} />
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
          {/* Step 1 — Visa route */}
          {currentStepId === "Visa route" && (
            <>
              <p className="text-sm text-slate-600">Which route best matches your move?</p>
              <SegmentedControl
                name="route"
                options={ROUTE_OPTIONS}
                value={answers.primaryRoute}
                onChange={(v) => update("primaryRoute", v as VisaCostCalculatorAnswers["primaryRoute"])}
              />
              {answers.primaryRoute === "not-sure" && (
                <div className="rounded-xl border border-amber-200 bg-amber-50/80 p-3 text-sm text-slate-700">
                  <Link href="/netherlands/visa-checker/" className="font-semibold text-brand-600 hover:underline">
                    Use the Visa Checker
                </Link>{" "}
                  for a better cost estimate, or continue for broad ranges.
                </div>
              )}
            </>
          )}

          {/* Step 2 — Country / origin */}
          {currentStepId === "Country / origin" && (
            <>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Which country are you moving from?</label>
                <div className="mb-2 flex flex-wrap gap-2">
                  {COUNTRY_QUICK_PICKS.map((c) => (
                    <button
                      key={c.value}
                      type="button"
                      onClick={() => {
                        update("countryCode", c.value);
                        if (c.value !== "other") update("travelDistanceBand", deriveTravelBand(c.value) as VisaCostCalculatorAnswers["travelDistanceBand"]);
                      }}
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
                  onChange={(e) => {
                    const v = e.target.value;
                    update("countryCode", v);
                    if (v) update("travelDistanceBand", deriveTravelBand(v) as VisaCostCalculatorAnswers["travelDistanceBand"]);
                  }}
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
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Travel distance band</label>
                <SegmentedControl
                  name="travelBand"
                  options={TRAVEL_BAND_OPTIONS}
                  value={answers.travelDistanceBand}
                  onChange={(v) => update("travelDistanceBand", v as VisaCostCalculatorAnswers["travelDistanceBand"])}
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
                onChange={(v) => update("householdType", v as VisaCostCalculatorAnswers["householdType"])}
              />
              <div>
                <label className="flex items-center gap-2 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    checked={answers.includesPets}
                    onChange={(e) => update("includesPets", e.target.checked)}
                    className="rounded border-slate-300"
                  />
                  Include pet(s)
                </label>
              </div>
            </>
          )}

          {/* Step 4 — Route details */}
          {currentStepId === "Route details" && (
            <>
              {["highly-skilled-migrant", "eu-blue-card"].includes(answers.primaryRoute) && (
                <>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">Do you already have a Dutch employer sponsor?</label>
                    <SegmentedControl
                      name="sponsor"
                      options={[
                        { value: "yes", label: "Yes" },
                        { value: "no", label: "No" },
                        { value: "not-sure", label: "Not sure" },
                      ]}
                      value={answers.sponsorStatus}
                      onChange={(v) => update("sponsorStatus", v as VisaCostCalculatorAnswers["sponsorStatus"])}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">Age band (for HSM salary thresholds)</label>
                    <SegmentedControl
                      name="workAge"
                      options={[
                        { value: "under-30", label: "Under 30" },
                        { value: "30-or-over", label: "30 or over" },
                        { value: "not-sure", label: "Not sure" },
                      ]}
                      value={answers.workAgeBand}
                      onChange={(v) => update("workAgeBand", v as VisaCostCalculatorAnswers["workAgeBand"])}
                    />
                  </div>
                </>
              )}
              {answers.primaryRoute === "student" && (
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">Study type</label>
                  <SegmentedControl
                    name="studyType"
                    options={[
                      { value: "university-hbo", label: "University / HBO" },
                      { value: "secondary-mbo", label: "Secondary / MBO" },
                      { value: "not-sure", label: "Not sure" },
                    ]}
                    value={answers.studyType}
                    onChange={(v) => update("studyType", v as VisaCostCalculatorAnswers["studyType"])}
                  />
                </div>
              )}
              {["self-employed", "daft"].includes(answers.primaryRoute) && (
                <>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">Business stage</label>
                    <SegmentedControl
                      name="businessStage"
                      options={[
                        { value: "planning", label: "Planning" },
                        { value: "existing-business", label: "Existing business" },
                        { value: "existing-clients", label: "Existing clients already" },
                        { value: "not-sure", label: "Not sure" },
                      ]}
                      value={answers.businessStage}
                      onChange={(v) => update("businessStage", v as VisaCostCalculatorAnswers["businessStage"])}
                    />
                  </div>
                </>
              )}
              {answers.primaryRoute === "partner-family" && (
                <>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">Are you moving to join a spouse/partner already in the Netherlands?</label>
                    <SegmentedControl
                      name="partnerJoining"
                      options={[
                        { value: "yes", label: "Yes" },
                        { value: "no", label: "No" },
                        { value: "not-sure", label: "Not sure" },
                      ]}
                      value={answers.partnerJoiningSponsor}
                      onChange={(v) => update("partnerJoiningSponsor", v as VisaCostCalculatorAnswers["partnerJoiningSponsor"])}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">Is the sponsor income situation already clear?</label>
                    <SegmentedControl
                      name="sponsorIncome"
                      options={[
                        { value: "yes", label: "Yes" },
                        { value: "no", label: "No" },
                        { value: "not-sure", label: "Not sure" },
                      ]}
                      value={answers.sponsorIncomeStatus}
                      onChange={(v) => update("sponsorIncomeStatus", v as VisaCostCalculatorAnswers["sponsorIncomeStatus"])}
                    />
                  </div>
                </>
              )}
              {answers.primaryRoute === "not-sure" && (
                <p className="text-sm text-slate-500">Select a visa route in step 1 for route-specific questions.</p>
              )}
            </>
          )}

          {/* Step 5 — Document complexity */}
          {currentStepId === "Document complexity" && (
            <>
              <p className="text-sm text-slate-600">Will you likely need any of the following?</p>
              <div className="flex flex-wrap gap-2">
                {DOC_COMPLEXITY_OPTIONS.filter((o) => o.value !== "not-sure").map((opt) => {
                  const isSelected = answers.documentComplexityFlags.includes(opt.value);
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => toggleList("documentComplexityFlags", opt.value)}
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
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">How prepared are your documents?</label>
                <SegmentedControl
                  name="readiness"
                  options={[
                    { value: "mostly-ready", label: "Mostly ready" },
                    { value: "partly-ready", label: "Partly ready" },
                    { value: "hardly-started", label: "Hardly started" },
                    { value: "", label: "Skip" },
                  ]}
                  value={answers.documentReadinessLevel}
                  onChange={(v) => update("documentReadinessLevel", v as VisaCostCalculatorAnswers["documentReadinessLevel"])}
                />
              </div>
            </>
          )}

          {/* Step 6 — Travel / move setup */}
          {currentStepId === "Travel / move setup" && (
            <>
              <p className="text-sm text-slate-600">Which practical items should be included in this estimate?</p>
              <div className="flex flex-wrap gap-2">
                {COST_CATEGORY_OPTIONS.map((opt) => {
                  const isNone = opt.value === "none";
                  const isSelected = isNone ? answers.includedCostCategories.length === 0 : answers.includedCostCategories.includes(opt.value);
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        if (isNone) update("includedCostCategories", []);
                        else toggleList("includedCostCategories", opt.value);
                      }}
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
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Temporary housing need</label>
                <SegmentedControl
                  name="tempHousing"
                  options={TEMP_HOUSING_OPTIONS}
                  value={answers.tempHousingDuration}
                  onChange={(v) => update("tempHousingDuration", v as VisaCostCalculatorAnswers["tempHousingDuration"])}
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
                    {COUNTRY_SELECT_OPTIONS.find((c) => c.value === answers.countryCode)?.label ??
                      (answers.countryCode || "—")}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-slate-500">Distance</span>
                  <p className="text-sm font-medium text-slate-800">
                    {TRAVEL_BAND_OPTIONS.find((t) => t.value === answers.travelDistanceBand)?.label ??
                      (answers.travelDistanceBand || "—")}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-slate-500">Household</span>
                  <p className="text-sm font-medium text-slate-800">
                    {HOUSEHOLD_OPTIONS.find((h) => h.value === answers.householdType)?.label ?? answers.householdType}
                  </p>
                </div>
                {answers.documentComplexityFlags.length > 0 && (
                  <div className="sm:col-span-2">
                    <span className="text-xs font-semibold uppercase text-slate-500">Document complexity</span>
                    <p className="text-sm text-slate-700">{answers.documentComplexityFlags.join(", ")}</p>
                  </div>
                )}
                {answers.includedCostCategories.length > 0 && (
                  <div className="sm:col-span-2">
                    <span className="text-xs font-semibold uppercase text-slate-500">Practical setup included</span>
                    <p className="text-sm text-slate-700">{answers.includedCostCategories.join(", ")}</p>
                  </div>
                )}
              </div>
              <p className="text-sm text-slate-600">Click &quot;Calculate my visa costs&quot; to see your estimate.</p>
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
                {isLastStep ? "Calculate my visa costs" : "Next"}
                {!isLastStep && <ChevronRight className="ml-1 h-4 w-4" aria-hidden />}
              </>
            )}
          </Button>
        </div>
      </div>

      {isGenerating && (
        <div className="mt-6">
          <ToolResultsLoading message="Calculating your cost range..." />
        </div>
      )}
    </div>
  );
}
