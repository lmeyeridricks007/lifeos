"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SegmentedControl } from "@/components/ui/segmented-control";
import { cn } from "@/lib/cn";
import { ChevronLeft, ChevronRight, Lightbulb, Loader2, Plane, FileText, Home, Package } from "lucide-react";
import { ToolResultsLoading } from "../ToolResultsLoading";
import {
  getDefaultInput,
  calculateRelocationCost,
  type RelocationCostEstimatorInput,
  type RelocationCostResult,
} from "@/src/lib/tools/relocation-cost-estimator";
import type {
  HouseholdType,
  RegionOfOrigin,
  CityInNetherlands,
  PetsOption,
  VisaRoute,
  MovingMethod,
  TemporaryHousingType,
  MonthlyRentBand,
  LifestyleLevel,
} from "@/src/lib/tools/relocation-cost-estimator";

const STORAGE_KEY = "expatlife-relocation-cost-estimator";
const STEPS: readonly string[] = [
  "Who is moving?",
  "Visa / relocation route",
  "Moving logistics",
  "Housing",
  "Setup costs",
  "Pets",
  "Review and calculate",
];

function formatEur(n: number): string {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(n);
}

function formatRange(low: number, high: number): string {
  return `${formatEur(low)} – ${formatEur(high)}`;
}

function PdfDownloadButton({
  input,
  result,
  label,
}: {
  input: RelocationCostEstimatorInput;
  result: RelocationCostResult;
  label: string;
}) {
  const [loading, setLoading] = useState(false);
  const handleClick = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/relocation-cost-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input, result }),
      });
      if (!res.ok) throw new Error("PDF failed");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "relocation-cost-estimate-netherlands.pdf";
      a.click();
      URL.revokeObjectURL(url);
    } finally {
      setLoading(false);
    }
  }, [input, result]);
  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-brand-700/20 bg-gradient-to-r from-brand-600 to-cyan-600 px-5 text-sm font-semibold text-white shadow hover:from-brand-700 hover:to-cyan-700 disabled:opacity-70"
    >
      {loading ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : null}
      {label}
    </button>
  );
}

function deriveTravelersAndHousehold(householdType: HouseholdType): {
  adults: number;
  children: number;
  numberOfTravelers: number;
} {
  switch (householdType) {
    case "single":
      return { adults: 1, children: 0, numberOfTravelers: 1 };
    case "couple":
      return { adults: 2, children: 0, numberOfTravelers: 2 };
    case "couple-1-child":
      return { adults: 2, children: 1, numberOfTravelers: 3 };
    case "couple-2-children":
      return { adults: 2, children: 2, numberOfTravelers: 4 };
    case "family-3-plus-children":
      return { adults: 2, children: 4, numberOfTravelers: 6 };
    default:
      return { adults: 1, children: 0, numberOfTravelers: 1 };
  }
}

const SUMMARY_LABELS: Record<string, string> = {
  "single": "Single",
  "couple": "Couple",
  "couple-1-child": "Couple + 1 child",
  "couple-2-children": "Couple + 2 children",
  "family-3-plus-children": "Family (3+ children)",
  "eu-eea": "EU / EEA",
  "uk": "UK",
  "usa-canada": "USA / Canada",
  "australia-nz": "Australia / New Zealand",
  "asia": "Asia",
  "middle-east": "Middle East",
  "africa": "Africa",
  "latin-america": "Latin America",
  "other": "Other",
  "amsterdam": "Amsterdam",
  "rotterdam": "Rotterdam",
  "utrecht": "Utrecht",
  "the-hague": "The Hague",
  "eindhoven": "Eindhoven",
  "other-flexible": "Other / flexible",
  "eu-eea-citizen": "EU / EEA citizen",
  "highly-skilled-migrant": "Highly Skilled Migrant",
  "partner-family": "Partner / family route",
  "student": "Student",
  "self-employed": "Self-employed / entrepreneur",
  "other-unsure": "Other / unsure",
  "suitcases-only": "Suitcases only",
  "ship-few-boxes": "Ship a few boxes",
  "small-shipment": "Small shipment",
  "large-shipment": "Large shipment / container",
  "none": "None",
  "hotel": "Hotel",
  "airbnb": "Airbnb / short stay",
  "serviced-apartment": "Serviced apartment",
  "temporary-rental": "Temporary rental",
  "under-1500": "Under €1,500",
  "1500-2000": "€1,500 – €2,000",
  "2000-2500": "€2,000 – €2,500",
  "2500-3500": "€2,500 – €3,500",
  "3500-plus": "€3,500+",
  "dog": "Dog",
  "cat": "Cat",
  "dog-and-cat": "Dog + cat",
  "multiple-pets": "Multiple pets",
  "minimal": "Minimal setup",
  "standard": "Standard setup",
  "comfortable": "Comfortable setup",
};

function summaryLabel(value: string): string {
  return SUMMARY_LABELS[value] ?? value.replace(/-/g, " ");
}

/** Example budget presets to prefill the calculator. */
const EXAMPLE_PRESETS: Record<string, Partial<RelocationCostEstimatorInput>> = {
  "single-expat": {
    householdType: "single",
    adults: 1,
    children: 0,
    pets: "none",
    regionOfOrigin: "eu-eea",
    cityInNetherlands: "other-flexible",
    visaRoute: "eu-eea-citizen",
    movingMethod: "suitcases-only",
    numberOfTravelers: 1,
    temporaryHousingType: "none",
    monthlyLongTermRent: "1500-2000",
    lifestyleLevel: "standard",
    includePetCosts: false,
  },
  couple: {
    householdType: "couple",
    adults: 2,
    children: 0,
    pets: "none",
    regionOfOrigin: "eu-eea",
    cityInNetherlands: "amsterdam",
    visaRoute: "eu-eea-citizen",
    movingMethod: "ship-few-boxes",
    numberOfTravelers: 2,
    temporaryHousingType: "airbnb",
    temporaryHousingDurationWeeks: "2",
    monthlyLongTermRent: "2000-2500",
    lifestyleLevel: "standard",
    includePetCosts: false,
  },
  family: {
    householdType: "couple-2-children",
    adults: 2,
    children: 2,
    pets: "none",
    regionOfOrigin: "eu-eea",
    cityInNetherlands: "other-flexible",
    visaRoute: "highly-skilled-migrant",
    movingMethod: "small-shipment",
    numberOfTravelers: 4,
    temporaryHousingType: "airbnb",
    temporaryHousingDurationWeeks: "4",
    monthlyLongTermRent: "2500-3500",
    lifestyleLevel: "comfortable",
    includePetCosts: false,
  },
  "with-pets": {
    householdType: "couple",
    adults: 2,
    children: 0,
    pets: "dog",
    regionOfOrigin: "uk",
    cityInNetherlands: "other-flexible",
    visaRoute: "partner-family",
    movingMethod: "suitcases-only",
    numberOfTravelers: 2,
    temporaryHousingType: "none",
    monthlyLongTermRent: "2000-2500",
    lifestyleLevel: "standard",
    includePetCosts: true,
    petRelocationService: false,
    petTravelByAir: true,
    numberOfPets: 1,
  },
};

export type RelocationCostEstimatorClientProps = {
  whatYouGetTitle: string;
  whatYouGetItems: string[];
  ctaBlockTitle: string;
  ctaBlockText: string;
  ctaChecklistHref: string;
  ctaChecklistLabel: string;
  ctaFirst90Href: string;
  ctaFirst90Label: string;
  disclaimerNote: string;
  pdfButtonLabel: string;
  recommendationsIntro?: string;
};

export function RelocationCostEstimatorClient({
  whatYouGetTitle,
  whatYouGetItems,
  ctaBlockTitle,
  ctaBlockText,
  ctaChecklistHref,
  ctaChecklistLabel,
  ctaFirst90Href,
  ctaFirst90Label,
  disclaimerNote,
  pdfButtonLabel,
  recommendationsIntro,
}: RelocationCostEstimatorClientProps) {
  const [input, setInput] = useState<RelocationCostEstimatorInput>(getDefaultInput);
  const [step, setStep] = useState(0);
  const [result, setResult] = useState<RelocationCostResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<RelocationCostEstimatorInput>;
        setInput((prev) => ({ ...prev, ...parsed }));
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    const { adults, children, numberOfTravelers } = deriveTravelersAndHousehold(input.householdType);
    setInput((prev) => ({
      ...prev,
      adults,
      children,
      numberOfTravelers,
    }));
  }, [input.householdType]);

  useEffect(() => {
    if (input.pets !== "none") {
      setInput((prev) => ({ ...prev, includePetCosts: true }));
    }
  }, [input.pets]);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(input));
    } catch {
      // ignore
    }
  }, [input]);

  const LOADING_DELAY_MS = 1200;
  const handleCalculate = useCallback(() => {
    setIsCalculating(true);
    const res = calculateRelocationCost(input);
    setTimeout(() => {
      setResult(res);
      setIsCalculating(false);
      const el = document.getElementById("relocation-results");
      el?.scrollIntoView({ behavior: "smooth" });
    }, LOADING_DELAY_MS);
  }, [input]);

  const showPetsStep = input.pets !== "none";
  const stepList = useMemo(() => {
    if (!showPetsStep) return STEPS.filter((s) => s !== "Pets");
    return [...STEPS];
  }, [showPetsStep]);

  const currentStepLabel = stepList[step];
  const isLastStep = step === stepList.length - 1;
  const canGoNext = step < stepList.length - 1;
  const canGoBack = step > 0;

  const update = useCallback(<K extends keyof RelocationCostEstimatorInput>(
    key: K,
    value: RelocationCostEstimatorInput[K]
  ) => {
    setInput((prev) => ({ ...prev, [key]: value }));
  }, []);

  const applyExamplePreset = useCallback((key: string) => {
    const preset = EXAMPLE_PRESETS[key];
    if (!preset) return;
    const base = getDefaultInput();
    const merged = { ...base, ...preset };
    const { adults, children, numberOfTravelers } = deriveTravelersAndHousehold(merged.householdType);
    setInput({ ...merged, adults, children, numberOfTravelers });
    setStep(0);
  }, []);

  return (
    <div className="space-y-8">
      <div id="tool-inputs" className="scroll-mt-24">
        <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div id="example-budgets" className="scroll-mt-24 mb-5 rounded-xl border border-sky-200/80 bg-sky-50/60 p-4">
              <p className="text-sm font-semibold text-slate-800">Example budgets</p>
              <p className="mt-1 text-xs text-slate-600">Start with an example and then personalize it.</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  { key: "single-expat", label: "Single expat" },
                  { key: "couple", label: "Couple" },
                  { key: "family", label: "Family" },
                  { key: "with-pets", label: "Moving with pets" },
                ].map(({ key, label }) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => applyExamplePreset(key)}
                    className="rounded-full border border-sky-300 bg-white px-4 py-2 text-sm font-medium text-sky-800 shadow-sm transition hover:bg-sky-50 hover:border-sky-400"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4 flex flex-wrap items-center gap-2">
              {stepList.map((label, i) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setStep(i)}
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-medium",
                    step === i
                      ? "bg-brand-600 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  )}
                  aria-current={step === i ? "step" : undefined}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <h2 className="text-lg font-semibold text-slate-900">{currentStepLabel}</h2>

            <div className="mt-5 space-y-5">
              {/* Step 1 — Who is moving? */}
              {currentStepLabel === "Who is moving?" && (
                <>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Household type
                    </label>
                    <SegmentedControl
                      name="householdType"
                      options={[
                        { value: "single", label: "Single" },
                        { value: "couple", label: "Couple" },
                        { value: "couple-1-child", label: "Couple + 1 child" },
                        { value: "couple-2-children", label: "Couple + 2 children" },
                        { value: "family-3-plus-children", label: "Family 3+ children" },
                      ]}
                      value={input.householdType}
                      onChange={(v) => update("householdType", v as HouseholdType)}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Region of origin
                    </label>
                    <SegmentedControl
                      name="regionOfOrigin"
                      options={[
                        { value: "eu-eea", label: "EU / EEA" },
                        { value: "uk", label: "UK" },
                        { value: "usa-canada", label: "USA / Canada" },
                        { value: "australia-nz", label: "Australia / NZ" },
                        { value: "asia", label: "Asia" },
                        { value: "middle-east", label: "Middle East" },
                        { value: "africa", label: "Africa" },
                        { value: "latin-america", label: "Latin America" },
                        { value: "other", label: "Other" },
                      ]}
                      value={input.regionOfOrigin}
                      onChange={(v) => update("regionOfOrigin", v as RegionOfOrigin)}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      City / target area in NL (optional)
                    </label>
                    <SegmentedControl
                      name="cityInNetherlands"
                      options={[
                        { value: "amsterdam", label: "Amsterdam" },
                        { value: "rotterdam", label: "Rotterdam" },
                        { value: "utrecht", label: "Utrecht" },
                        { value: "the-hague", label: "The Hague" },
                        { value: "eindhoven", label: "Eindhoven" },
                        { value: "other-flexible", label: "Other / flexible" },
                      ]}
                      value={input.cityInNetherlands}
                      onChange={(v) => update("cityInNetherlands", v as CityInNetherlands)}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Pets
                    </label>
                    <SegmentedControl
                      name="pets"
                      options={[
                        { value: "none", label: "None" },
                        { value: "dog", label: "Dog" },
                        { value: "cat", label: "Cat" },
                        { value: "dog-and-cat", label: "Dog + cat" },
                        { value: "multiple-pets", label: "Multiple pets" },
                      ]}
                      value={input.pets}
                      onChange={(v) => update("pets", v as PetsOption)}
                    />
                  </div>
                </>
              )}

              {/* Step 2 — Visa route */}
              {currentStepLabel === "Visa / relocation route" && (
                <>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Visa / relocation route
                    </label>
                    <SegmentedControl
                      name="visaRoute"
                      options={[
                        { value: "eu-eea-citizen", label: "EU / EEA citizen" },
                        { value: "highly-skilled-migrant", label: "Highly Skilled Migrant" },
                        { value: "partner-family", label: "Partner / family route" },
                        { value: "student", label: "Student" },
                        { value: "self-employed", label: "Self-employed / entrepreneur" },
                        { value: "other-unsure", label: "Other / unsure" },
                      ]}
                      value={input.visaRoute}
                      onChange={(v) => update("visaRoute", v as VisaRoute)}
                    />
                  </div>
                  <p className="text-sm text-slate-600">
                    Visa and permit costs vary by route and may also depend on document preparation,
                    translations, and appointments.
                  </p>
                </>
              )}

              {/* Step 3 — Moving logistics */}
              {currentStepLabel === "Moving logistics" && (
                <>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Moving method
                    </label>
                    <SegmentedControl
                      name="movingMethod"
                      options={[
                        { value: "suitcases-only", label: "Suitcases only" },
                        { value: "ship-few-boxes", label: "Ship a few boxes" },
                        { value: "small-shipment", label: "Small shipment" },
                        { value: "large-shipment", label: "Large shipment / container" },
                      ]}
                      value={input.movingMethod}
                      onChange={(v) => update("movingMethod", v as MovingMethod)}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Number of travelers
                    </label>
                    <Input
                      type="number"
                      min={1}
                      max={10}
                      value={input.numberOfTravelers}
                      onChange={(e) =>
                        update("numberOfTravelers", Math.max(1, parseInt(e.target.value, 10) || 1))
                      }
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Flight style
                    </label>
                    <SegmentedControl
                      name="flightStyle"
                      options={[
                        { value: "economy", label: "Economy / standard" },
                        { value: "mixed", label: "Mixed / average" },
                        { value: "higher-flexibility", label: "Higher flexibility" },
                      ]}
                      value={input.flightStyle}
                      onChange={(v) => update("flightStyle", v as "economy" | "mixed" | "higher-flexibility")}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Arrival season / urgency
                    </label>
                    <SegmentedControl
                      name="arrivalUrgency"
                      options={[
                        { value: "flexible", label: "Flexible" },
                        { value: "standard", label: "Standard timing" },
                        { value: "last-minute", label: "Last-minute / high season" },
                      ]}
                      value={input.arrivalUrgency}
                      onChange={(v) => update("arrivalUrgency", v as "flexible" | "standard" | "last-minute")}
                    />
                  </div>
                </>
              )}

              {/* Step 4 — Housing */}
              {currentStepLabel === "Housing" && (
                <>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Temporary housing type
                    </label>
                    <SegmentedControl
                      name="temporaryHousingType"
                      options={[
                        { value: "none", label: "None / staying with family" },
                        { value: "hotel", label: "Hotel" },
                        { value: "airbnb", label: "Airbnb / short stay" },
                        { value: "serviced-apartment", label: "Serviced apartment" },
                        { value: "temporary-rental", label: "Temporary rental" },
                      ]}
                      value={input.temporaryHousingType}
                      onChange={(v) => update("temporaryHousingType", v as TemporaryHousingType)}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Temporary housing duration
                    </label>
                    <SegmentedControl
                      name="temporaryHousingDurationWeeks"
                      options={[
                        { value: "1", label: "1 week" },
                        { value: "2", label: "2 weeks" },
                        { value: "4", label: "4 weeks" },
                        { value: "6-plus", label: "6+ weeks" },
                      ]}
                      value={input.temporaryHousingDurationWeeks}
                      onChange={(v) => update("temporaryHousingDurationWeeks", v as "1" | "2" | "4" | "6-plus")}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Long-term monthly rent target
                    </label>
                    <SegmentedControl
                      name="monthlyLongTermRent"
                      options={[
                        { value: "under-1500", label: "Under €1,500" },
                        { value: "1500-2000", label: "€1,500–€2,000" },
                        { value: "2000-2500", label: "€2,000–€2,500" },
                        { value: "2500-3500", label: "€2,500–€3,500" },
                        { value: "3500-plus", label: "€3,500+" },
                      ]}
                      value={input.monthlyLongTermRent}
                      onChange={(v) => update("monthlyLongTermRent", v as MonthlyRentBand)}
                    />
                    <p className="mt-1 text-xs text-slate-500">
                      Amsterdam and Utrecht typically sit higher than many other Dutch cities.
                    </p>
                  </div>
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="checkbox"
                      checked={input.includeDeposit}
                      onChange={(e) => update("includeDeposit", e.target.checked)}
                      className="rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                    />
                    <span className="text-sm text-slate-700">Include rent deposit in estimate</span>
                  </label>
                </>
              )}

              {/* Step 5 — Setup costs */}
              {currentStepLabel === "Setup costs" && (
                <>
                  <p className="text-sm text-slate-600">
                    Select the setup items you expect to need in your first months.
                  </p>
                  <div className="space-y-2">
                    {[
                      ["includeMunicipalityRegistration", "Municipality registration / admin setup"],
                      ["includeBankingSetup", "Banking setup"],
                      ["includeInsuranceSetup", "Health insurance setup"],
                      ["includeUtilitiesSetup", "Utilities / internet setup"],
                      ["includeFurniture", "Furniture / household basics"],
                      ["includeBike", "Bike purchase"],
                    ].map(([key, label]) => (
                      <label key={key} className="flex cursor-pointer items-center gap-2">
                        <input
                          type="checkbox"
                          checked={input[key as keyof RelocationCostEstimatorInput] as boolean}
                          onChange={(e) =>
                            update(key as keyof RelocationCostEstimatorInput, e.target.checked)
                          }
                          className="rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                        />
                        <span className="text-sm text-slate-700">{label}</span>
                      </label>
                    ))}
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Lifestyle / setup level
                    </label>
                    <SegmentedControl
                      name="lifestyleLevel"
                      options={[
                        { value: "minimal", label: "Minimal setup" },
                        { value: "standard", label: "Standard setup" },
                        { value: "comfortable", label: "Comfortable setup" },
                      ]}
                      value={input.lifestyleLevel}
                      onChange={(v) => update("lifestyleLevel", v as LifestyleLevel)}
                    />
                  </div>
                </>
              )}

              {/* Step 6 — Pets (conditional) */}
              {currentStepLabel === "Pets" && (
                <>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Number of pets
                    </label>
                    <Input
                      type="number"
                      min={1}
                      max={5}
                      value={input.numberOfPets}
                      onChange={(e) =>
                        update("numberOfPets", Math.max(1, parseInt(e.target.value, 10) || 1))
                      }
                    />
                  </div>
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="checkbox"
                      checked={input.petRelocationService}
                      onChange={(e) => update("petRelocationService", e.target.checked)}
                      className="rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                    />
                    <span className="text-sm text-slate-700">Using relocation service for pets?</span>
                  </label>
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="checkbox"
                      checked={input.petTravelByAir}
                      onChange={(e) => update("petTravelByAir", e.target.checked)}
                      className="rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                    />
                    <span className="text-sm text-slate-700">Likely pet travel by air?</span>
                  </label>
                  <p className="text-sm text-slate-600">
                    Pet travel costs vary significantly by route, airline, animal size, and whether a
                    relocation company is used.
                  </p>
                </>
              )}

              {/* Step 7 — Review */}
              {currentStepLabel === "Review and calculate" && (
                <div className="space-y-4">
                  <p className="text-sm font-medium text-slate-500">Review your choices before calculating</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Household</p>
                      <p className="mt-1 font-medium text-slate-900">{summaryLabel(input.householdType)}</p>
                      <p className="mt-0.5 text-sm text-slate-600">
                        {input.adults} adult{input.adults !== 1 ? "s" : ""}
                        {input.children > 0 ? `, ${input.children} child${input.children !== 1 ? "ren" : ""}` : ""}
                      </p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Origin & destination</p>
                      <p className="mt-1 font-medium text-slate-900">{summaryLabel(input.regionOfOrigin)}</p>
                      <p className="mt-0.5 text-sm text-slate-600">City: {summaryLabel(input.cityInNetherlands)}</p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Visa & move</p>
                      <p className="mt-1 font-medium text-slate-900">{summaryLabel(input.visaRoute)}</p>
                      <p className="mt-0.5 text-sm text-slate-600">Moving: {summaryLabel(input.movingMethod)}</p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Housing</p>
                      <p className="mt-1 font-medium text-slate-900">
                        {input.temporaryHousingType === "none" ? "No temporary housing" : summaryLabel(input.temporaryHousingType)}
                      </p>
                      <p className="mt-0.5 text-sm text-slate-600">Rent band: {summaryLabel(input.monthlyLongTermRent)}</p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:col-span-2">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Setup & pets</p>
                      <div className="mt-1 flex flex-wrap gap-x-6 gap-y-1 text-sm">
                        <span className="font-medium text-slate-900">{summaryLabel(input.lifestyleLevel)}</span>
                        <span className="text-slate-600">
                          Pets: {input.pets === "none" ? "None" : summaryLabel(input.pets)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {canGoBack && (
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setStep((s) => s - 1)}
                  className="inline-flex items-center gap-1"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Back
                </Button>
              )}
              {canGoNext && (
                <Button
                  type="button"
                  onClick={() => setStep((s) => s + 1)}
                  className="inline-flex items-center gap-1"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              )}
              {isLastStep && (
                <Button
                  type="button"
                  onClick={handleCalculate}
                  disabled={isCalculating}
                  className="inline-flex items-center gap-2"
                >
                  {isCalculating ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                      Calculating...
                    </>
                  ) : (
                    "Calculate My Budget"
                  )}
                </Button>
              )}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-24 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="bg-gradient-to-r from-brand-50 via-cyan-50 to-sky-50 px-5 py-4">
                <span className="inline-flex items-center rounded-full border border-brand-200 bg-white px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-700">
                  Preview
                </span>
                <h3 className="mt-2 text-base font-semibold text-slate-900">{whatYouGetTitle}</h3>
              </div>
              <ul className="space-y-2 p-4">
                {whatYouGetItems.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2.5"
                  >
                    <span className="pt-1 text-sm font-medium text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {isCalculating ? (
        <ToolResultsLoading message="Calculating your budget..." />
      ) : result ? (
        <div id="relocation-results" className="scroll-mt-24 space-y-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5 md:p-6">
            <p className="text-sm text-slate-600">{disclaimerNote}</p>
          </div>

          <section aria-labelledby="results-summary-heading">
            <h2 id="results-summary-heading" className="text-xl font-semibold text-slate-900">
              Your estimated budget
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-brand-200/90 bg-gradient-to-br from-brand-50/90 to-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                  One-time relocation
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-900">
                  {formatRange(result.oneTimeLow, result.oneTimeHigh)}
                </p>
              </div>
              <div className="rounded-xl border border-sky-200/90 bg-gradient-to-br from-sky-50/80 to-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">
                  Monthly living
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-900">
                  {formatRange(result.monthlyLow, result.monthlyHigh)} / month
                </p>
              </div>
              <div className="rounded-xl border border-amber-200/80 bg-gradient-to-br from-amber-50/70 to-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                  First-year total
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-900">
                  {formatRange(result.firstYearLow, result.firstYearHigh)}
                </p>
              </div>
            </div>
          </section>

          <section aria-labelledby="breakdown-heading">
            <h2 id="breakdown-heading" className="text-lg font-semibold text-slate-900">
              Cost breakdown
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Travel & move",
                  items: result.breakdown.travelAndMove,
                  icon: Plane,
                  className: "rounded-xl border border-sky-200/90 bg-gradient-to-br from-sky-50/80 to-white p-4 shadow-sm border-l-4 border-l-sky-500",
                  titleClass: "text-sky-700",
                },
                {
                  title: "Paperwork & route",
                  items: result.breakdown.paperworkAndRoute,
                  icon: FileText,
                  className: "rounded-xl border border-amber-200/80 bg-gradient-to-br from-amber-50/70 to-white p-4 shadow-sm border-l-4 border-l-amber-500",
                  titleClass: "text-amber-700",
                },
                {
                  title: "Housing setup",
                  items: result.breakdown.housingSetup,
                  icon: Home,
                  className: "rounded-xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/70 to-white p-4 shadow-sm border-l-4 border-l-emerald-500",
                  titleClass: "text-emerald-700",
                },
                {
                  title: "Arrival setup",
                  items: result.breakdown.arrivalSetup,
                  icon: Package,
                  className: "rounded-xl border border-brand-200/90 bg-gradient-to-br from-brand-50/90 to-white p-4 shadow-sm border-l-4 border-l-brand-500",
                  titleClass: "text-brand-700",
                },
              ].map(
                (group) =>
                  group.items.length > 0 && (
                    <div key={group.title} className={group.className}>
                      <div className="flex items-center gap-2">
                        <group.icon className="h-4 w-4 shrink-0" aria-hidden />
                        <h3 className={cn("text-sm font-semibold", group.titleClass)}>{group.title}</h3>
                      </div>
                      <ul className="mt-3 space-y-3" role="list">
                        {group.items.map((item, i) => (
                          <li
                            key={i}
                            className="flex flex-col gap-0.5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between"
                          >
                            <div className="min-w-0">
                              <span className="text-sm font-medium text-slate-800">{item.label}</span>
                              {item.reason && (
                                <p className="mt-0.5 text-xs text-slate-500">{item.reason}</p>
                              )}
                            </div>
                            <span className="shrink-0 text-sm font-semibold tabular-nums text-slate-900">
                              {formatRange(item.range.min, item.range.max)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
              )}
            </div>
          </section>

          {recommendationsIntro && (
            <div className="rounded-2xl border border-violet-200/80 bg-gradient-to-br from-violet-50/60 to-slate-50/80 p-5 shadow-sm md:p-6 border-l-4 border-l-violet-500">
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-violet-600" aria-hidden>
                  <Lightbulb className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-semibold text-slate-900">Recommendations</h3>
                  <p className="mt-1.5 text-sm text-slate-600">{recommendationsIntro}</p>
                  <ul className="mt-4 space-y-3" role="list">
                    {input.cityInNetherlands === "amsterdam" && input.householdType !== "single" && (
                      <li className="flex gap-3 text-sm text-slate-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" aria-hidden />
                        <span>Amsterdam + family: housing and deposit pressure is often high; consider nearby cities for lower upfront costs.</span>
                      </li>
                    )}
                    {input.pets !== "none" && (
                      <li className="flex gap-3 text-sm text-slate-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" aria-hidden />
                        <span>Plan pet documents and vet visits early; requirements vary by airline and destination.</span>
                      </li>
                    )}
                    {input.visaRoute !== "eu-eea-citizen" && (
                      <li className="flex gap-3 text-sm text-slate-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" aria-hidden />
                        <span>Non-EU route: paperwork and timing can add cost; allow buffer for translations and appointments.</span>
                      </li>
                    )}
                    {input.temporaryHousingType !== "none" && (
                      <li className="flex gap-3 text-sm text-slate-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" aria-hidden />
                        <span>Temporary housing overlap can increase first-month spend; factor in both temp and first long-term rent if they overlap.</span>
                      </li>
                    )}
                    {input.movingMethod === "suitcases-only" && (
                      <li className="flex gap-3 text-sm text-slate-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" aria-hidden />
                        <span>Suitcases-only keeps move cost lower but may mean higher furniture and basics spend after arrival.</span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            <PdfDownloadButton input={input} result={result} label={pdfButtonLabel} />
          </div>

          <div className="rounded-2xl border border-sky-200/70 bg-gradient-to-br from-sky-50/60 to-slate-50/80 p-5 shadow-sm md:p-6">
            <h3 className="text-lg font-semibold text-slate-900">{ctaBlockTitle}</h3>
            <p className="mt-2 text-sm text-slate-600">{ctaBlockText}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href={ctaChecklistHref}>
                <Button>{ctaChecklistLabel}</Button>
              </Link>
              <Link href={ctaFirst90Href}>
                <Button variant="secondary">{ctaFirst90Label}</Button>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
