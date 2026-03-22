"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SegmentedControl } from "@/components/ui/segmented-control";
import { ContentTable, ContentTableRow, ContentTableCell } from "@/components/ui/content-table";
import { cn } from "@/lib/cn";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { ToolResultsLoading } from "../ToolResultsLoading";
import {
  getDefaultVisaCheckerAnswers,
  type VisaCheckerAnswers,
  type CitizenshipCategory,
  type MovePurpose,
  type YesNoUnsure,
  type SalaryRange,
  type AgeBracket,
  type EntrepreneurType,
  type PartnerFamilyContext,
  type StudyIntent,
  type StudyType,
} from "@/src/lib/visa-checker/types";
import { getRecommendations } from "@/src/lib/visa-checker/recommendationEngine";
import {
  getRouteBySlug,
  getRoutesBySlugs,
  type VisaCheckerRouteEntry,
} from "@/src/lib/visa-checker/routes";
import type { VisaRouteSlug } from "@/src/lib/visa-checker/types";

const STORAGE_KEY = "expatlife-visa-checker";

const CITIZENSHIP_OPTIONS: { value: CitizenshipCategory; label: string }[] = [
  { value: "eu-eea-ch", label: "EU / EEA / Switzerland" },
  { value: "united-states", label: "United States" },
  { value: "united-kingdom", label: "United Kingdom" },
  { value: "india", label: "India" },
  { value: "south-africa", label: "South Africa" },
  { value: "other", label: "Other" },
];

const PURPOSE_OPTIONS: { value: MovePurpose; label: string }[] = [
  { value: "work", label: "Work for a company" },
  { value: "business", label: "Start a business / freelance" },
  { value: "study", label: "Study" },
  { value: "partner-family", label: "Join partner or family" },
  { value: "exploring", label: "Still exploring" },
];

const YES_NO_UNSURE: { value: YesNoUnsure; label: string }[] = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
  { value: "unsure", label: "Not sure" },
];

const SALARY_OPTIONS: { value: SalaryRange; label: string }[] = [
  { value: "under-45k", label: "Under €45,000" },
  { value: "45k-60k", label: "€45,000 – €60,000" },
  { value: "60k-80k", label: "€60,000 – €80,000" },
  { value: "80k-plus", label: "€80,000+" },
  { value: "not-sure", label: "Not sure" },
];

const AGE_OPTIONS: { value: AgeBracket; label: string }[] = [
  { value: "under-30", label: "Under 30" },
  { value: "30-plus", label: "30 or over" },
];

const ENTREPRENEUR_OPTIONS: { value: EntrepreneurType; label: string }[] = [
  { value: "freelancer", label: "Freelancer / consultant" },
  { value: "founder", label: "Founder / startup" },
  { value: "small-business", label: "Small business owner" },
  { value: "not-sure", label: "Not sure" },
];

const PARTNER_OPTIONS: { value: PartnerFamilyContext; label: string }[] = [
  { value: "partner-spouse", label: "Yes, partner/spouse" },
  { value: "family-member", label: "Yes, family member" },
  { value: "no", label: "No" },
  { value: "not-sure", label: "Not sure" },
];

const STUDY_INTENT_OPTIONS: { value: StudyIntent; label: string }[] = [
  { value: "yes-admission", label: "Yes, I have or expect admission" },
  { value: "possibly", label: "Possibly" },
  { value: "no", label: "No" },
];

const STUDY_TYPE_OPTIONS: { value: StudyType; label: string }[] = [
  { value: "university-hbo", label: "University / HBO" },
  { value: "vocational-other", label: "Vocational / other" },
  { value: "not-sure", label: "Not sure" },
];

function buildSteps(answers: VisaCheckerAnswers): string[] {
  const steps: string[] = ["Citizenship", "Purpose"];
  if (answers.movePurpose === "work") {
    steps.push("Job offer", "Salary");
  }
  if (
    answers.movePurpose === "business" ||
    (answers.movePurpose === "exploring" && answers.citizenshipCategory === "united-states")
  ) {
    steps.push("Business context");
  }
  if (answers.movePurpose === "partner-family" || answers.movePurpose === "exploring") {
    steps.push("Partner / family");
  }
  if (answers.movePurpose === "study" || answers.movePurpose === "exploring") {
    steps.push("Study");
  }
  steps.push("Results");
  return steps;
}

const SCENARIO_PRESETS: Record<string, Partial<VisaCheckerAnswers>> = {
  "india-hsm": {
    citizenshipCategory: "india",
    movePurpose: "work",
    hasDutchJobOffer: "yes",
    employerSponsorKnown: "yes",
    salaryRange: "60k-80k",
  },
  "us-daft": {
    citizenshipCategory: "united-states",
    movePurpose: "business",
    isUSCitizen: true,
    entrepreneurType: "freelancer",
    exploringDAFT: "yes",
  },
  "uk-student": {
    citizenshipCategory: "united-kingdom",
    movePurpose: "study",
    studyIntent: "yes-admission",
    studyType: "university-hbo",
  },
  "partner-join": {
    citizenshipCategory: "other",
    movePurpose: "partner-family",
    hasPartnerInNL: "partner-spouse",
  },
  "consultant-exploring": {
    citizenshipCategory: "south-africa",
    movePurpose: "exploring",
    hasDutchJobOffer: "no",
  },
  "family-work": {
    citizenshipCategory: "india",
    movePurpose: "work",
    hasDutchJobOffer: "yes",
    employerSponsorKnown: "yes",
    salaryRange: "80k-plus",
  },
};

export type VisaCheckerClientProps = {
  initialScenario?: string;
  visaCheckerHref: string;
  compareAllHref: string;
  relocationCostHref: string;
  movingChecklistHref: string;
  first90Href: string;
  documentReadinessHref: string;
  arrivalPlannerHref: string;
  /** Rendered right after "Why these options were recommended" (above Typical next steps). */
  recommendedServicesSection?: React.ReactNode;
  /** Rendered right after recommended services section. */
  recommendedLawyersSection?: React.ReactNode;
};

export function VisaCheckerClient({
  initialScenario,
  visaCheckerHref,
  compareAllHref,
  relocationCostHref,
  movingChecklistHref,
  first90Href,
  documentReadinessHref,
  arrivalPlannerHref,
  recommendedServicesSection,
  recommendedLawyersSection,
}: VisaCheckerClientProps) {
  const [answers, setAnswers] = useState<VisaCheckerAnswers>(() => {
    const base = getDefaultVisaCheckerAnswers();
    const preset = initialScenario ? SCENARIO_PRESETS[initialScenario] : undefined;
    if (!preset) return base;
    const merged = { ...base, ...preset };
    if (merged.citizenshipCategory === "united-states") merged.isUSCitizen = true;
    return merged;
  });
  const [stepIndex, setStepIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [isLoadingResults, setIsLoadingResults] = useState(false);

  // When URL has ?scenario=... (e.g. user clicked "Use this example"), apply preset and reset form
  useEffect(() => {
    if (!initialScenario) return;
    const preset = SCENARIO_PRESETS[initialScenario];
    if (!preset) return;
    const base = getDefaultVisaCheckerAnswers();
    const merged = { ...base, ...preset } as VisaCheckerAnswers;
    if (merged.citizenshipCategory === "united-states") merged.isUSCitizen = true;
    setAnswers(merged);
    setStepIndex(0);
    setShowResults(false);
  }, [initialScenario]);

  const steps = useMemo(() => buildSteps(answers), [answers]);
  const currentStepId = steps[stepIndex];
  const isLastStep = stepIndex === steps.length - 1;
  const canGoNext = stepIndex < steps.length - 1;
  const canGoBack = stepIndex > 0;

  const update = useCallback(<K extends keyof VisaCheckerAnswers>(key: K, value: VisaCheckerAnswers[K]) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }, []);

  const LOADING_DELAY_MS = 1000;
  const handleNext = useCallback(() => {
    if (isLastStep) {
      setIsLoadingResults(true);
      setTimeout(() => {
        setShowResults(true);
        setIsLoadingResults(false);
        try {
          const el = document.getElementById("visa-checker-results");
          el?.scrollIntoView({ behavior: "smooth" });
        } catch {
          // ignore
        }
      }, LOADING_DELAY_MS);
    } else {
      setStepIndex((i) => Math.min(i + 1, steps.length - 1));
    }
  }, [isLastStep, steps.length]);

  const handleBack = useCallback(() => {
    setStepIndex((i) => Math.max(0, i - 1));
  }, []);

  const handleReset = useCallback(() => {
    setAnswers(getDefaultVisaCheckerAnswers());
    setStepIndex(0);
    setShowResults(false);
    setIsLoadingResults(false);
    try {
      document.getElementById("tool-inputs")?.scrollIntoView({ behavior: "smooth" });
    } catch {
      // ignore
    }
  }, []);

  const recommendation = useMemo(() => getRecommendations(answers), [answers]);
  const allSuggestedSlugs = useMemo(
    () => [
      ...recommendation.primaryRecommendations.map((p) => p.slug),
      ...recommendation.secondaryRecommendations.map((s) => s.slug),
    ],
    [recommendation]
  );
  const tableRoutes = useMemo(
    () => getRoutesBySlugs(allSuggestedSlugs.length > 0 ? (allSuggestedSlugs as VisaRouteSlug[]) : ["highly-skilled-migrant", "eu-blue-card", "dutch-american-friendship-treaty", "self-employed-visa", "student-visa", "partner-family-visa"]),
    [allSuggestedSlugs]
  );

  const resultsBlock = showResults && (
    <div id="visa-checker-results" className="scroll-mt-24 space-y-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-slate-900">Your visa recommendations</h2>
        <Button variant="secondary" onClick={handleReset}>
          Start over
        </Button>
      </div>

      {recommendation.primaryRecommendations.length === 0 && (
        <section
          className="rounded-2xl border-2 border-amber-200 bg-amber-50/90 p-5 md:p-6"
          aria-labelledby="no-primary-heading"
        >
          <h3 id="no-primary-heading" className="text-lg font-semibold text-amber-900">
            No visa route fits your situation right now
          </h3>
          <p className="mt-2 text-sm text-amber-800">
            Based on your answers, there is no single visa or residence route that clearly applies yet. That’s common if you’re still exploring or missing a key requirement (for example a job offer or admission). Below we explain why and list routes you may qualify for once you have certain things in place.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-amber-800">
            {recommendation.explanation.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </section>
      )}

      {recommendation.primaryRecommendations.length > 0 && (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
          <h3 className="text-lg font-semibold text-slate-900">Primary recommendations</h3>
          <p className="mt-1 text-sm text-slate-600">These routes may best fit your situation.</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
            {recommendation.primaryRecommendations.map((item) => {
              const route = getRouteBySlug(item.slug);
              if (!route) return null;
              return (
                <VisaResultCard key={item.slug} route={route} priority="primary" reason={item.reason} />
              );
            })}
          </div>
        </section>
      )}

      {recommendation.secondaryRecommendations.length > 0 && (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
          <h3 className="text-lg font-semibold text-slate-900">Other routes to compare</h3>
          <p className="mt-1 text-sm text-slate-600">Worth checking based on your answers.</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
            {recommendation.secondaryRecommendations.map((item) => {
              const route = getRouteBySlug(item.slug);
              if (!route) return null;
              return (
                <VisaResultCard
                  key={item.slug}
                  route={route}
                  priority="secondary"
                  reason={item.reason}
                  gapsToQualify={item.gapsToQualify}
                />
              );
            })}
          </div>
        </section>
      )}

      <section className="rounded-2xl border-2 border-brand-200 bg-gradient-to-br from-brand-50/90 to-slate-50/90 p-5 shadow-sm md:p-6 ring-1 ring-brand-100/50">
        <h3 className="text-lg font-semibold text-slate-900">Why these options were recommended</h3>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-700">
          {recommendation.explanation.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </section>

      {recommendedLawyersSection ? (
        <div id="recommended-immigration-lawyers" className="scroll-mt-24">
          {recommendedLawyersSection}
        </div>
      ) : null}
      {recommendedServicesSection ? (
        <div id="recommended-services" className="scroll-mt-24">
          {recommendedServicesSection}
        </div>
      ) : null}

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
        <h3 className="text-lg font-semibold text-slate-900">Typical next steps</h3>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
          {recommendation.nextSteps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href={relocationCostHref}>
            <Button>Estimate relocation cost</Button>
          </Link>
          <Link href={movingChecklistHref}>
            <Button variant="secondary">Generate moving checklist</Button>
          </Link>
          <Link href={first90Href}>
            <Button variant="secondary">First 90 days planner</Button>
          </Link>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
        <h3 className="text-lg font-semibold text-slate-900">Visa comparison</h3>
        <p className="mt-1 text-sm text-slate-600">Compare recommended and alternative routes.</p>
        <div className="mt-4 overflow-x-auto">
          <ContentTable
            headers={["Visa / route", "Best for", "Difficulty", "Typical timeline", "Typical fee", "Guide"]}
            minWidth="720px"
          >
            {tableRoutes.map((route) => (
              <ContentTableRow key={route.slug}>
                <ContentTableCell emphasis>{route.title}</ContentTableCell>
                <ContentTableCell>{route.bestFor}</ContentTableCell>
                <ContentTableCell>{route.complexityLabel}</ContentTableCell>
                <ContentTableCell>{route.timelineRange}</ContentTableCell>
                <ContentTableCell>{route.currentFeeReference}</ContentTableCell>
                <ContentTableCell>
                  <Link href={route.guideHref} className="font-medium text-brand-600 hover:text-brand-700">
                    View guide
                  </Link>
                </ContentTableCell>
              </ContentTableRow>
            ))}
          </ContentTable>
        </div>
      </section>

      <div className="flex flex-wrap gap-3">
        <Button onClick={handleReset}>Start over</Button>
        <Link href={compareAllHref}>
          <Button variant="secondary">Compare all visa types</Button>
        </Link>
      </div>
    </div>
  );

  return (
    <>
    <div id="tool-inputs" className="scroll-mt-24">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          {steps.map((label, i) => (
            <button
              key={label}
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
          {currentStepId === "Citizenship" && (
            <>
              <p className="text-sm text-slate-600">What passport or citizenship do you hold?</p>
              <SegmentedControl
                name="citizenship"
                options={CITIZENSHIP_OPTIONS}
                value={answers.citizenshipCategory}
                onChange={(v) => {
                  update("citizenshipCategory", v as CitizenshipCategory);
                  update("isUSCitizen", v === "united-states");
                }}
              />
            </>
          )}

          {currentStepId === "Purpose" && (
            <>
              <p className="text-sm text-slate-600">Why are you moving to the Netherlands?</p>
              <SegmentedControl
                name="purpose"
                options={PURPOSE_OPTIONS}
                value={answers.movePurpose}
                onChange={(v) => update("movePurpose", v as MovePurpose)}
              />
            </>
          )}

          {currentStepId === "Job offer" && (
            <>
              <p className="text-sm text-slate-600">Do you already have a job offer from a Dutch employer?</p>
              <SegmentedControl
                name="jobOffer"
                options={YES_NO_UNSURE}
                value={answers.hasDutchJobOffer ?? ""}
                onChange={(v) => update("hasDutchJobOffer", v as YesNoUnsure)}
              />
              {answers.hasDutchJobOffer === "yes" && (
                <div className="pt-4">
                  <p className="text-sm text-slate-600">Is the employer a recognized sponsor, or do you not know yet?</p>
                  <SegmentedControl
                    name="sponsor"
                    options={YES_NO_UNSURE}
                    value={answers.employerSponsorKnown ?? ""}
                    onChange={(v) => update("employerSponsorKnown", v as YesNoUnsure)}
                  />
                </div>
              )}
            </>
          )}

          {currentStepId === "Salary" && (
            <>
              <p className="text-sm text-slate-600">What salary range do you expect in the Netherlands?</p>
              <SegmentedControl
                name="salary"
                options={SALARY_OPTIONS}
                value={answers.salaryRange ?? ""}
                onChange={(v) => update("salaryRange", v as SalaryRange)}
              />
              <p className="text-sm text-slate-600">Age bracket (for threshold context)</p>
              <SegmentedControl
                name="age"
                options={AGE_OPTIONS}
                value={answers.ageBracket ?? ""}
                onChange={(v) => update("ageBracket", v as AgeBracket)}
              />
            </>
          )}

          {currentStepId === "Business context" && (
            <>
              <p className="text-sm text-slate-600">Are you planning to move as:</p>
              <SegmentedControl
                name="entrepreneur"
                options={ENTREPRENEUR_OPTIONS}
                value={answers.entrepreneurType ?? answers.workProfile ?? ""}
                onChange={(v) => {
                  update("entrepreneurType", v as EntrepreneurType);
                  update("workProfile", v as EntrepreneurType);
                }}
              />
              {answers.citizenshipCategory === "united-states" && (
                <div className="pt-4">
                  <p className="text-sm text-slate-600">Are you exploring the Dutch-American Friendship Treaty (DAFT) route?</p>
                  <SegmentedControl
                    name="daft"
                    options={YES_NO_UNSURE}
                    value={answers.exploringDAFT ?? ""}
                    onChange={(v) => update("exploringDAFT", v as YesNoUnsure)}
                  />
                </div>
              )}
            </>
          )}

          {currentStepId === "Partner / family" && (
            <>
              <p className="text-sm text-slate-600">Do you have a partner or close family member already living legally in the Netherlands?</p>
              <SegmentedControl
                name="partner"
                options={PARTNER_OPTIONS}
                value={answers.hasPartnerInNL ?? ""}
                onChange={(v) => update("hasPartnerInNL", v as PartnerFamilyContext)}
              />
            </>
          )}

          {currentStepId === "Study" && (
            <>
              <p className="text-sm text-slate-600">Are you planning to move mainly for study?</p>
              <SegmentedControl
                name="studyIntent"
                options={STUDY_INTENT_OPTIONS}
                value={answers.studyIntent ?? ""}
                onChange={(v) => update("studyIntent", v as StudyIntent)}
              />
              {(answers.studyIntent === "yes-admission" || answers.studyIntent === "possibly") && (
                <div className="pt-4">
                  <p className="text-sm text-slate-600">Education level / intended route</p>
                  <SegmentedControl
                    name="studyType"
                    options={STUDY_TYPE_OPTIONS}
                    value={answers.studyType ?? ""}
                    onChange={(v) => update("studyType", v as StudyType)}
                  />
                </div>
              )}
            </>
          )}

          {currentStepId === "Results" && (
            <p className="text-sm text-slate-600">Click &quot;See results&quot; to get your visa recommendations.</p>
          )}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {canGoBack && (
            <Button variant="secondary" onClick={handleBack} disabled={isLoadingResults}>
              <ChevronLeft className="mr-1 h-4 w-4" aria-hidden />
              Back
            </Button>
          )}
          <Button onClick={handleNext} disabled={isLoadingResults} className="inline-flex items-center gap-2">
            {isLoadingResults ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                Finding your visa options...
              </>
            ) : (
              <>
                {isLastStep ? "See results" : "Next"}
                {!isLastStep && <ChevronRight className="ml-1 h-4 w-4" aria-hidden />}
              </>
            )}
          </Button>
        </div>
      </div>
    </div>

    {isLoadingResults ? (
      <ToolResultsLoading message="Finding your visa options..." />
    ) : (
      resultsBlock
    )}
    </>
  );
}

function VisaResultCard({
  route,
  priority,
  reason,
  gapsToQualify,
}: {
  route: VisaCheckerRouteEntry;
  priority: "primary" | "secondary";
  reason?: string;
  gapsToQualify?: string[];
}) {
  const hasGaps = priority === "secondary" && gapsToQualify && gapsToQualify.length > 0;
  return (
    <div
      className={cn(
        "rounded-xl border-2 p-4",
        priority === "primary" ? "border-brand-200 bg-brand-50/50" : "border-slate-200 bg-slate-50/50"
      )}
    >
      <h4 className="font-semibold text-slate-900">{route.title}</h4>
      <p className="mt-1 text-sm text-slate-600">{route.bestFor}</p>
      {reason && <p className="mt-1 text-xs text-slate-500">{reason}</p>}
      {hasGaps && (
        <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50/80 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-800">
            What you need to qualify (compared to your answers)
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-amber-900">
            {gapsToQualify.map((gap, i) => (
              <li key={i}>{gap}</li>
            ))}
          </ul>
        </div>
      )}
      <p className="mt-2 text-xs text-slate-600">
        Typical complexity: {route.complexityLabel} · Timeline: {route.timelineRange} · Fee: {route.currentFeeReference}
      </p>
      <Link
        href={route.guideHref}
        className="mt-3 inline-block text-sm font-medium text-brand-600 hover:text-brand-700"
      >
        View full guide →
      </Link>
    </div>
  );
}
