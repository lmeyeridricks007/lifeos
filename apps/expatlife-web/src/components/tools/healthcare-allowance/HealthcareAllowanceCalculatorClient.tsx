"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { InfoBox } from "@/components/ui/info-box";
import { Input } from "@/components/ui/input";
import { ToolResultsLoading } from "@/src/components/tools/ToolResultsLoading";
import { cn } from "@/lib/cn";
import { computeHealthcareAllowance } from "@/src/lib/tools/healthcare-allowance/computeHealthcareAllowance";
import { HEALTHCARE_ALLOWANCE_CONFIG } from "@/src/lib/tools/healthcare-allowance/constants";
import { HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS } from "@/src/lib/tools/healthcare-allowance/defaultInputs";
import {
  downloadHealthcareAllowanceHtml,
  HA_EXPORT_DISCLAIMER_DEFAULT,
  openHealthcareAllowanceSummaryTab,
  openPrintHealthcareAllowanceSummary,
} from "@/src/lib/tools/healthcare-allowance/exportHtml";
import { formatHealthcareEur, formatHealthcareEurMonthly } from "@/src/lib/tools/healthcare-allowance/format";
import {
  hasHealthcareAllowanceUrlParams,
  loadHealthcareAllowanceFromStorage,
  parseHealthcareAllowanceSearchParams,
  haInputToSearchParams,
  saveHealthcareAllowanceToStorage,
  sanitizeHealthcareAllowanceInput,
} from "@/src/lib/tools/healthcare-allowance/urlState";
import type { HealthcareAllowanceComputation, HealthcareAllowanceExportPayload, HealthcareAllowanceInputs } from "@/src/lib/tools/healthcare-allowance/types";
import { HaFieldHelp } from "./HealthcareAllowanceFieldHelp";
import { buildPlainEnglishSummaryLines } from "./plainEnglishSummary";

const selectClass =
  "w-full rounded-xl border border-copilot-primary/15 bg-white px-3 py-2.5 text-sm text-copilot-text-primary shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-copilot-primary/35";

type Props = {
  calculatorCanonicalUrl: string;
  siteName: string;
};

function CardShell({
  title,
  subtitle,
  id,
  children,
  className,
}: {
  title: string;
  subtitle?: string;
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "rounded-2xl border-0 bg-copilot-surface p-5 shadow-expatos-md ring-1 ring-copilot-primary/[0.08] md:p-6 scroll-mt-24 md:scroll-mt-28",
        className
      )}
    >
      <div>
        <h3 className="text-base font-semibold tracking-tight text-copilot-text-primary">{title}</h3>
        {subtitle ? <p className="mt-1 text-sm text-copilot-text-secondary">{subtitle}</p> : null}
      </div>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

function eligibilityHeadline(status: HealthcareAllowanceComputation["eligibilityStatus"]): { label: string; tone: "good" | "watch" | "no" } {
  if (status === "likely_eligible") return { label: "Likely eligible", tone: "good" };
  if (status === "borderline") return { label: "Borderline — check carefully", tone: "watch" };
  return { label: "Likely not eligible", tone: "no" };
}

function kpiToneClass(tone: "good" | "watch" | "no"): string {
  if (tone === "good") return "border-l-emerald-500/80 bg-gradient-to-br from-emerald-50/90 to-white ring-emerald-900/[0.06]";
  if (tone === "watch") return "border-l-amber-500/80 bg-gradient-to-br from-amber-50/80 to-white ring-amber-900/[0.06]";
  return "border-l-slate-400/90 bg-gradient-to-br from-slate-50 to-white ring-slate-900/[0.05]";
}

function HealthcareAllowanceResultsBody({
  result,
  runInputs,
  plainEnglishLines,
  buildExportPayload,
  onReset,
}: {
  result: HealthcareAllowanceComputation;
  runInputs: HealthcareAllowanceInputs;
  plainEnglishLines: string[];
  buildExportPayload: () => HealthcareAllowanceExportPayload;
  onReset: () => void;
}) {
  const eligibilityKpi = eligibilityHeadline(result.eligibilityStatus);
  const secondaryCards = result.summaryCards.filter((c) => !["eligibility", "monthly_allowance", "net_premium"].includes(c.id));
  const showRepaymentCallout =
    result.eligibilityStatus === "likely_eligible" ||
    result.eligibilityStatus === "borderline" ||
    result.monthlyAllowanceEstimate > 0;

  return (
    <>
      <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-3">
        <div
          className={cn(
            "rounded-2xl border-0 p-5 shadow-expatos-md ring-1 md:p-6 border-l-[5px]",
            kpiToneClass(eligibilityKpi.tone)
          )}
        >
          <p className="text-xs font-bold uppercase tracking-wider text-copilot-text-secondary">Likely eligibility</p>
          <p className="mt-3 text-2xl font-bold tracking-tight text-copilot-text-primary sm:text-[1.65rem]">{eligibilityKpi.label}</p>
          <p className="mt-2 text-xs leading-relaxed text-copilot-text-secondary">Simplified planner screen — confirm with Dienst Toeslagen.</p>
        </div>
        <div className="rounded-2xl border-0 border-l-[5px] border-l-copilot-primary/70 bg-gradient-to-br from-copilot-bg-soft via-white to-sky-50/50 p-5 shadow-expatos-md ring-1 ring-copilot-primary/[0.1] md:p-6">
          <div className="flex items-start justify-between gap-2">
            <p className="text-xs font-bold uppercase tracking-wider text-copilot-text-secondary">Estimated monthly allowance</p>
            <HaFieldHelp label="Estimated monthly allowance" helpKey="estimatedVsOfficial" />
          </div>
          <p className="mt-3 text-2xl font-bold tracking-tight text-copilot-primary sm:text-[1.65rem]">
            {formatHealthcareEurMonthly(result.monthlyAllowanceEstimate)}
          </p>
          <p className="mt-2 flex flex-wrap items-center gap-1 text-xs leading-relaxed text-copilot-text-secondary">
            <span>Full-month rate in the model.</span>
            <HaFieldHelp label="Monthly rate" helpKey="monthlyVsAnnual" />
          </p>
        </div>
        <div className="rounded-2xl border-0 border-l-[5px] border-l-emerald-600/70 bg-gradient-to-br from-emerald-50/90 via-white to-copilot-bg-soft p-5 shadow-expatos-md ring-1 ring-emerald-900/[0.06] md:p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-copilot-text-secondary">Estimated net premium / month</p>
          <p className="mt-3 text-2xl font-bold tracking-tight text-emerald-900 sm:text-[1.65rem]">
            {formatHealthcareEurMonthly(result.monthlyNetPremiumEstimate)}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-copilot-text-secondary">
            Gross {formatHealthcareEurMonthly(result.grossMonthlyPremium)} minus estimated allowance in this run.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-copilot-primary/12 bg-white p-5 shadow-expatos-sm md:p-6">
        <p className="text-sm font-semibold text-copilot-text-primary">What this likely means for you</p>
        <ul className="mt-3 list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-copilot-text-secondary">
          {plainEnglishLines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p className="mt-4 rounded-lg bg-copilot-bg-soft/80 px-3 py-2 text-xs text-copilot-text-secondary">{result.recommendationText}</p>
      </div>

      {result.eligibilityStatus === "likely_not_eligible" ? (
        <InfoBox variant="warn" title="Likely not eligible in this model" className="border-red-200/90 bg-red-50/85 shadow-expatos-sm">
          <p className="text-sm text-copilot-text-secondary">
            One or more hard screens failed (income, assets, insurance, age, residence, or entitlement). The estimate is{" "}
            <strong>€0 allowance</strong> here. If your real situation is more nuanced, speak to Dienst Toeslagen or an adviser before you assume you
            cannot claim.
          </p>
        </InfoBox>
      ) : null}

      {result.eligibilityStatus === "borderline" ? (
        <InfoBox variant="warn" title="Borderline — plan for uncertainty" className="border-amber-300/90 bg-amber-50/90 shadow-expatos-sm">
          <p className="text-sm text-copilot-text-secondary">
            You are near a ceiling or a key answer is unclear. Use this as a <strong>stress test</strong>, not a budget lock — small changes to income,
            partner status, or assets can move the real outcome.
          </p>
        </InfoBox>
      ) : null}

      {result.eligibilityStatus === "likely_eligible" ? (
        <InfoBox variant="success" title="Likely eligible in this simplified check" className="border-emerald-200/90 bg-emerald-50/80 shadow-expatos-sm">
          <p className="text-sm text-copilot-text-secondary">
            You did not trigger the automatic blocks we model. That is encouraging for planning, but it is still <strong>not</strong> a guarantee of
            payment — only Dienst Toeslagen can confirm.
          </p>
        </InfoBox>
      ) : null}

      {(runInputs.incomeNotSure || result.usedMissingIncomeAssumption) && result.eligibilityStatus !== "likely_not_eligible" ? (
        <InfoBox variant="warn" title="Eligible only if your income picture stays accurate" className="border-amber-200/80 bg-amber-50/70">
          <p className="text-sm text-copilot-text-secondary">
            {result.usedMissingIncomeAssumption
              ? "Income was missing, so we used a conservative high test. Real eligibility depends on the income you actually report."
              : "You marked income as uncertain — we already inflated the test income. Update the numbers when you can; wrong estimates can mean repayments."}
          </p>
        </InfoBox>
      ) : null}

      {showRepaymentCallout && result.eligibilityStatus !== "likely_not_eligible" ? (
        <InfoBox variant="warn" title="Repayment & adjustment risk" className="border-amber-200/70 bg-amber-50/60">
          <ul className="list-disc space-y-1.5 pl-5 text-sm text-copilot-text-secondary">
            {result.repaymentRiskNotes.slice(0, 3).map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <p className="mt-2 text-xs text-copilot-text-secondary">If your income rises or your household changes, update Dienst Toeslagen promptly.</p>
        </InfoBox>
      ) : null}

      {secondaryCards.length > 0 ? (
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary">More detail</p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {secondaryCards.map((c) => (
              <div key={c.id} className="rounded-xl border border-copilot-primary/10 bg-copilot-surface/90 p-4 shadow-expatos-sm sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary">{c.label}</p>
                <p className="mt-2 break-words text-base font-semibold text-copilot-text-primary">{c.value}</p>
                {c.hint ? <p className="mt-1.5 text-xs leading-relaxed text-copilot-text-secondary">{c.hint}</p> : null}
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <div id="eligibility-diagnosis" className="scroll-mt-24 md:scroll-mt-28">
        <CardShell title="Eligibility diagnosis" subtitle="Why the model answered this way — plain language, not legal advice.">
          <InfoBox variant="info" title="How to read this" className="border-copilot-primary/15 bg-white/80">
            <p className="text-sm text-copilot-text-secondary">
              We apply <strong>{runInputs.taxYear}</strong> threshold numbers from our config and a simple taper. Dienst Toeslagen uses the full legal test.
            </p>
          </InfoBox>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-copilot-text-secondary">
            {result.eligibilityReasons.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <p className="text-sm font-medium text-copilot-text-primary">What could change the outcome</p>
          <ul className="list-disc space-y-1.5 pl-5 text-sm text-copilot-text-secondary">
            <li>Higher income or a partner pushing combined income over the ceiling</li>
            <li>1 January assets moving above the limit</li>
            <li>Losing Dutch basic insurance or leaving the Netherlands</li>
            <li>Fewer insured months than you assumed</li>
          </ul>
        </CardShell>
      </div>

      <div id="net-premium-after-allowance" className="scroll-mt-24 md:scroll-mt-28">
        <div className="relative overflow-hidden rounded-2xl border-0 bg-gradient-to-br from-copilot-primary/90 via-copilot-primary to-sky-900 p-5 text-white shadow-expatos-md sm:p-7 md:p-8">
          <div className="relative z-[1] space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs font-bold uppercase tracking-wider text-white/85">Net healthcare cost — breakdown</p>
              <HaFieldHelp label="Net premium breakdown" helpKey="monthlyVsAnnual" />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-3">
              <div className="rounded-xl border border-white/15 bg-white/10 p-4">
                <p className="text-sm text-white/85">Gross premium</p>
                <p className="mt-1 break-words text-xl font-bold sm:text-2xl">{formatHealthcareEurMonthly(result.grossMonthlyPremium)}</p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/10 p-4">
                <p className="text-sm text-white/85">− Estimated allowance</p>
                <p className="mt-1 break-words text-xl font-bold sm:text-2xl">{formatHealthcareEurMonthly(result.estimatedMonthlyAllowanceFullRate)}</p>
              </div>
              <div className="rounded-xl border border-emerald-200/30 bg-emerald-500/15 p-4">
                <p className="text-sm text-emerald-100">= Net (model)</p>
                <p className="mt-1 break-words text-xl font-bold text-white sm:text-2xl">{formatHealthcareEurMonthly(result.estimatedMonthlyNetPremium)}</p>
              </div>
            </div>
            {(runInputs.yearEstimateMode === "full_year" || runInputs.yearEstimateMode === "both") && (
              <div className="rounded-xl border border-white/20 bg-white/10 p-4 text-sm leading-relaxed">
                <p className="font-semibold text-white">12-month view</p>
                <p className="mt-1 text-white/90">
                  Allowance {formatHealthcareEur(result.estimatedAnnualAllowanceFullYear)} / yr · Net after allowance{" "}
                  {formatHealthcareEur(result.estimatedAnnualNetPremiumFullYear)} / yr
                </p>
              </div>
            )}
            {(runInputs.yearEstimateMode === "remaining" || runInputs.yearEstimateMode === "both") && (
              <div className="rounded-xl border border-white/20 bg-white/10 p-4 text-sm leading-relaxed">
                <p className="font-semibold text-white">Prorated ({result.allowanceMonthsInYear} mo)</p>
                <p className="mt-1 text-white/90">
                  Allowance {formatHealthcareEur(result.estimatedAnnualAllowanceProrated)} · Net cash-flow model{" "}
                  {formatHealthcareEur(result.estimatedAnnualNetPremiumProrated)}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div id="income-impact" className="scroll-mt-24 md:scroll-mt-28">
        <CardShell title="Income impact">
          <p className="text-sm leading-relaxed text-copilot-text-secondary">
            Ceiling for your profile: <strong>{formatHealthcareEur(result.incomeThresholdUsed)}</strong>. We use a{" "}
            <strong>plateau then taper</strong>: a lower slice of the window keeps the illustrative maximum, then the estimate falls toward zero as you
            approach the ceiling.
          </p>
          {runInputs.incomeNotSure ? (
            <InfoBox variant="warn" title="Income uncertainty" className="border-amber-200/80 bg-amber-50/80">
              <p className="text-sm text-copilot-text-secondary">A higher test income is applied per the rules config so the allowance is not optimistic.</p>
            </InfoBox>
          ) : null}
        </CardShell>
      </div>

      <div id="asset-impact" className="scroll-mt-24 md:scroll-mt-28">
        <CardShell title="Asset impact">
          <p className="text-sm leading-relaxed text-copilot-text-secondary">
            Asset ceiling: <strong>{formatHealthcareEur(result.assetThresholdUsed)}</strong>. At or above it, this planner sets allowance to zero even if
            income is low.
          </p>
        </CardShell>
      </div>

      <CardShell title="What affects your result most" subtitle="Practical levers — adjust these in the form to see sensitivity.">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {result.whatAffectsMost.map((x, idx) => (
            <div
              key={x}
              className="flex gap-3 rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/50 p-4 shadow-expatos-sm"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-copilot-primary/10 text-xs font-bold text-copilot-primary">
                {idx + 1}
              </span>
              <p className="text-sm leading-relaxed text-copilot-text-secondary">{x}</p>
            </div>
          ))}
        </div>
      </CardShell>

      <CardShell title="What to do next">
        <ul className="list-disc space-y-2 pl-5 text-sm text-copilot-text-secondary">
          {result.guidanceActions.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
        <p className="text-sm text-copilot-text-secondary">
          Official channel:{" "}
          <a href="https://www.toeslagen.nl/" target="_blank" rel="noopener noreferrer" className="font-semibold text-copilot-primary hover:underline">
            Dienst Toeslagen
          </a>
          .
        </p>
      </CardShell>

      {result.riskFlags.length > 0 ? (
        <InfoBox variant="info" title="Additional flags" className="border-copilot-primary/15 bg-copilot-bg-soft/80">
          <ul className="list-disc space-y-1.5 pl-5 text-sm text-copilot-text-secondary">
            {result.riskFlags.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </InfoBox>
      ) : null}

      {result.validationNotes.length > 0 ? (
        <InfoBox variant="warn" title="Input checks" className="border-amber-200/80 bg-amber-50/70">
          <ul className="list-disc space-y-1 pl-5 text-sm text-copilot-text-secondary">
            {result.validationNotes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </InfoBox>
      ) : null}

      <div
        id="download-summary"
        className="scroll-mt-24 rounded-2xl border border-copilot-primary/12 bg-gradient-to-br from-copilot-bg-soft/90 to-white p-5 shadow-expatos-md sm:p-6 md:scroll-mt-28"
      >
        <h3 className="text-lg font-semibold tracking-tight text-copilot-text-primary">Export &amp; share</h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-copilot-text-secondary">
          Download a self-contained HTML summary (inputs, headline results, eligibility notes, and disclaimer) or print / save as PDF. After you change
          inputs, the address bar can carry a compressed state (<code className="rounded bg-white/80 px-1.5 py-0.5 text-xs ring-1 ring-copilot-primary/10">?s=…</code>) for bookmarking.
        </p>
        <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:flex lg:flex-wrap">
          <Button type="button" className="w-full rounded-xl bg-copilot-primary sm:w-auto" onClick={() => downloadHealthcareAllowanceHtml(buildExportPayload())}>
            Download HTML
          </Button>
          <Button
            type="button"
            variant="secondary"
            className="w-full rounded-xl border-copilot-primary/25 bg-white text-copilot-text-primary shadow-sm hover:bg-copilot-bg-soft sm:w-auto"
            onClick={() => openPrintHealthcareAllowanceSummary(buildExportPayload())}
          >
            Print / Save PDF
          </Button>
          <Button
            type="button"
            variant="secondary"
            className="w-full rounded-xl border-copilot-primary/25 bg-white text-copilot-text-primary shadow-sm hover:bg-copilot-bg-soft sm:w-auto"
            onClick={() => openHealthcareAllowanceSummaryTab(buildExportPayload())}
          >
            Open in new tab
          </Button>
          <Button type="button" variant="ghost" className="w-full rounded-xl text-copilot-text-secondary sm:w-auto" onClick={onReset}>
            Reset to defaults
          </Button>
        </div>
      </div>
    </>
  );
}

export function HealthcareAllowanceCalculatorClient({ calculatorCanonicalUrl, siteName }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [inputs, setInputs] = useState<HealthcareAllowanceInputs>(() => ({ ...HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS }));
  const [lastRunInputs, setLastRunInputs] = useState<HealthcareAllowanceInputs | null>(null);
  const [hasRun, setHasRun] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [progressPct, setProgressPct] = useState(0);
  const [hydrated, setHydrated] = useState(false);
  const [userHasEdited, setUserHasEdited] = useState(false);
  const skipNextUrlWrite = useRef(true);
  const initialized = useRef(false);
  const latestInputRef = useRef(inputs);
  const cancelCalcRunRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    latestInputRef.current = inputs;
  }, [inputs]);

  const userPatch = useCallback((p: Partial<HealthcareAllowanceInputs>) => {
    setUserHasEdited(true);
    setInputs((prev) => sanitizeHealthcareAllowanceInput({ ...prev, ...p }));
  }, []);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    const sp = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
    let merged = sanitizeHealthcareAllowanceInput({});
    if (hasHealthcareAllowanceUrlParams(sp)) {
      const fromUrl = parseHealthcareAllowanceSearchParams(sp);
      merged = sanitizeHealthcareAllowanceInput({ ...merged, ...(fromUrl ?? {}) });
      setUserHasEdited(true);
      setLastRunInputs(merged);
      setHasRun(true);
    } else {
      const stored = loadHealthcareAllowanceFromStorage();
      if (stored) {
        merged = sanitizeHealthcareAllowanceInput({ ...merged, ...stored });
        setUserHasEdited(true);
      }
    }
    setInputs(merged);
    setHydrated(true);
    skipNextUrlWrite.current = true;
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    saveHealthcareAllowanceToStorage(inputs);
    if (skipNextUrlWrite.current) {
      skipNextUrlWrite.current = false;
      return;
    }
    const t = window.setTimeout(() => {
      const q = haInputToSearchParams(inputs);
      const qs = q.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    }, 320);
    return () => window.clearTimeout(t);
  }, [hydrated, inputs, pathname, router]);

  const displayResult = useMemo(
    () => (lastRunInputs ? computeHealthcareAllowance(lastRunInputs) : null),
    [lastRunInputs]
  );
  const plainEnglishLines = useMemo(
    () => (displayResult && lastRunInputs ? buildPlainEnglishSummaryLines(displayResult, lastRunInputs) : []),
    [displayResult, lastRunInputs]
  );

  const cfg = useMemo(() => HEALTHCARE_ALLOWANCE_CONFIG[inputs.taxYear], [inputs.taxYear]);

  const inputKey = useMemo(() => haInputToSearchParams(inputs).toString(), [inputs]);
  const resultKey = useMemo(
    () => (lastRunInputs ? haInputToSearchParams(lastRunInputs).toString() : ""),
    [lastRunInputs]
  );
  const resultsStale = hasRun && !isCalculating && resultKey !== "" && resultKey !== inputKey;

  const buildExportPayload = useCallback((): HealthcareAllowanceExportPayload => {
    if (!lastRunInputs || !displayResult) {
      throw new Error("Export requires a completed calculation run.");
    }
    return {
      siteName,
      generatedAtIso: new Date().toISOString(),
      disclaimer: HA_EXPORT_DISCLAIMER_DEFAULT,
      calculatorCanonicalUrl,
      inputs: lastRunInputs,
      result: displayResult,
      plainEnglishSummaryLines: plainEnglishLines,
    };
  }, [calculatorCanonicalUrl, displayResult, lastRunInputs, plainEnglishLines, siteName]);

  const handleCalculate = useCallback(() => {
    if (isCalculating) return;
    cancelCalcRunRef.current?.();
    cancelCalcRunRef.current = null;

    setIsCalculating(true);
    setProgressPct(0);
    document.getElementById("tool-results")?.scrollIntoView({ behavior: "smooth", block: "start" });

    const durationMs = 1000 + Math.random() * 1000;
    const start = Date.now();
    const intervalId = window.setInterval(() => {
      const t = (Date.now() - start) / durationMs;
      setProgressPct(Math.min(95, t * 100));
    }, 40);

    const timeoutId = window.setTimeout(() => {
      window.clearInterval(intervalId);
      setProgressPct(100);
      const snap = sanitizeHealthcareAllowanceInput({ ...latestInputRef.current });
      setLastRunInputs(snap);
      setHasRun(true);
      setIsCalculating(false);
      cancelCalcRunRef.current = null;
      window.setTimeout(() => setProgressPct(0), 400);
    }, durationMs);

    cancelCalcRunRef.current = () => {
      window.clearInterval(intervalId);
      window.clearTimeout(timeoutId);
      setIsCalculating(false);
      cancelCalcRunRef.current = null;
    };
  }, [isCalculating]);

  useEffect(() => () => cancelCalcRunRef.current?.(), []);

  const onReset = () => {
    cancelCalcRunRef.current?.();
    cancelCalcRunRef.current = null;
    skipNextUrlWrite.current = true;
    setUserHasEdited(false);
    setHasRun(false);
    setLastRunInputs(null);
    setIsCalculating(false);
    setProgressPct(0);
    setInputs({ ...HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS });
    router.replace(pathname, { scroll: false });
    saveHealthcareAllowanceToStorage(HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS);
  };

  const showPartnerIncome = inputs.householdType === "with_toeslagpartner" && inputs.partnerIncludedForYear;
  const showPartnerPanel = inputs.householdType === "with_toeslagpartner";

  const formBlockers =
    inputs.insuranceStatus === "no" || inputs.livingInNl === "no" || inputs.entitledToDutchInsurance === "no";

  const combinedIncomeZero =
    inputs.incomeEntryMode === "annual"
      ? inputs.annualIncomeYou + (showPartnerIncome ? inputs.annualIncomePartner : 0) === 0
      : inputs.monthlyGrossYou + (showPartnerIncome ? inputs.monthlyGrossPartner : 0) === 0;

  return (
    <div className="space-y-8 md:space-y-10">
      <div id="tool-inputs" className="scroll-mt-24 space-y-6 md:scroll-mt-28">
        {formBlockers ? (
          <InfoBox variant="warn" title="Quick heads-up" className="border-amber-200/90 bg-amber-50/90 shadow-expatos-sm">
            <p className="text-sm text-copilot-text-secondary">
              With no Dutch insurance, living outside the NL, or no entitlement to basic insurance, this model usually shows{" "}
              <strong>no allowance</strong>. You can still explore numbers, but treat the output as hypothetical.
            </p>
          </InfoBox>
        ) : null}

        <CardShell
          title="1 · Personal & insurance"
          subtitle="Who you are, your policy timing, and which premium we compare against for net cost."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary" htmlFor="ha-year">
                Tax year
              </label>
              <select id="ha-year" className={cn(selectClass, "mt-1")} value={inputs.taxYear} onChange={(e) => userPatch({ taxYear: Number(e.target.value) as 2026 })}>
                <option value={2026}>2026</option>
              </select>
            </div>
            <div>
              <div className="flex items-center gap-0.5">
                <label className="text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary" htmlFor="ha-age">
                  Age
                </label>
                <HaFieldHelp label="Age" helpKey="age" />
              </div>
              <Input
                id="ha-age"
                type="number"
                min={0}
                max={120}
                className="mt-1 rounded-xl border-copilot-primary/15"
                value={inputs.age}
                onChange={(e) => userPatch({ age: Number(e.target.value) })}
              />
              <p className="mt-1 text-xs text-copilot-text-secondary">Under 18, the planner assumes you are not in scope for this allowance estimate.</p>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary">Dutch basic health insurance</p>
            <p className="mt-1 text-sm text-copilot-text-secondary">Allowance is normally tied to holding basic insurance for the months you claim.</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {(
                [
                  ["yes", "Yes"],
                  ["no", "No"],
                  ["starting_soon", "Starting soon"],
                ] as const
              ).map(([v, lab]) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => userPatch({ insuranceStatus: v })}
                  className={cn(
                    "min-h-11 min-w-[44px] rounded-xl border px-3 py-2 text-sm font-medium transition",
                    inputs.insuranceStatus === v
                      ? "border-copilot-primary bg-copilot-primary text-white shadow-sm"
                      : "border-copilot-primary/20 bg-white text-copilot-text-primary hover:border-copilot-primary/40"
                  )}
                >
                  {lab}
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <div className="flex flex-wrap items-center gap-1">
                <label className="text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary" htmlFor="ha-start-month">
                  Insurance start month
                </label>
                <HaFieldHelp label="Insurance start month" helpKey="partialYear" />
              </div>
              <select
                id="ha-start-month"
                className={cn(selectClass, "mt-1")}
                value={inputs.insuranceStartMonth}
                onChange={(e) => userPatch({ insuranceStartMonth: Number(e.target.value) })}
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                  <option key={m} value={m}>
                    {new Date(2000, m - 1).toLocaleString("en", { month: "long" })}
                  </option>
                ))}
              </select>
            </div>
            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/50 p-3 sm:mt-6">
              <input
                type="checkbox"
                checked={inputs.insuredFullYear}
                onChange={(e) => userPatch({ insuredFullYear: e.target.checked })}
                className="h-4 w-4 rounded border-copilot-primary/30"
              />
              <span className="text-sm text-copilot-text-primary">Insured for the full calendar year</span>
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary">Living in the Netherlands?</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {(
                  [
                    ["yes", "Yes"],
                    ["no", "No"],
                  ] as const
                ).map(([v, lab]) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => userPatch({ livingInNl: v })}
                    className={cn(
                      "min-h-11 rounded-xl border px-3 py-2 text-sm font-medium transition",
                      inputs.livingInNl === v
                        ? "border-copilot-primary bg-copilot-primary text-white shadow-sm"
                        : "border-copilot-primary/20 bg-white text-copilot-text-primary hover:border-copilot-primary/40"
                    )}
                  >
                    {lab}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary">Entitled to Dutch basic insurance?</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {(
                  [
                    ["yes", "Yes"],
                    ["no", "No"],
                    ["unsure", "Not sure"],
                  ] as const
                ).map(([v, lab]) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => userPatch({ entitledToDutchInsurance: v })}
                    className={cn(
                      "min-h-11 rounded-xl border px-3 py-2 text-sm font-medium transition",
                      inputs.entitledToDutchInsurance === v
                        ? "border-copilot-primary bg-copilot-primary text-white shadow-sm"
                        : "border-copilot-primary/20 bg-white text-copilot-text-primary hover:border-copilot-primary/40"
                    )}
                  >
                    {lab}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary">Premium for net-cost comparison</p>
              <HaFieldHelp label="Premium" helpKey="premium" />
            </div>
            <p className="mt-1 text-sm text-copilot-text-secondary">
              We subtract estimated allowance from this gross line to show indicative net cost — not your insurer’s invoice.
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {(
                [
                  ["average", `Average (€${cfg.averageMonthlyBasicPremium}/mo)`],
                  ["manual", "I’ll enter my premium"],
                ] as const
              ).map(([v, lab]) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => userPatch({ premiumMode: v })}
                  className={cn(
                    "min-h-11 rounded-xl border px-3 py-2 text-sm font-medium transition",
                    inputs.premiumMode === v
                      ? "border-copilot-primary bg-copilot-primary text-white shadow-sm"
                      : "border-copilot-primary/20 bg-white text-copilot-text-primary hover:border-copilot-primary/40"
                  )}
                >
                  {lab}
                </button>
              ))}
            </div>
            {inputs.premiumMode === "manual" ? (
              <div className="mt-3">
                <label className="text-xs font-semibold text-copilot-text-secondary" htmlFor="ha-premium-manual">
                  Your monthly basic premium (€)
                </label>
                <Input
                  id="ha-premium-manual"
                  type="number"
                  min={0}
                  className="mt-1 max-w-full rounded-xl border-copilot-primary/15 sm:max-w-xs"
                  value={inputs.monthlyPremiumManual}
                  onChange={(e) => userPatch({ monthlyPremiumManual: Number(e.target.value) })}
                />
              </div>
            ) : null}
          </div>
        </CardShell>

        <CardShell title="2 · Household" subtitle="Single or with a toeslagpartner — partner fields appear when relevant.">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary">Household</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {(
                [
                  ["single", "Single"],
                  ["with_toeslagpartner", "With toeslagpartner"],
                ] as const
              ).map(([v, lab]) => (
                <button
                  key={v}
                  type="button"
                  onClick={() =>
                    userPatch({
                      householdType: v,
                      partnerIncludedForYear: v === "single" ? false : inputs.partnerIncludedForYear,
                    })
                  }
                  className={cn(
                    "min-h-11 rounded-xl border px-3 py-2 text-sm font-medium transition",
                    inputs.householdType === v
                      ? "border-copilot-primary bg-copilot-primary text-white shadow-sm"
                      : "border-copilot-primary/20 bg-white text-copilot-text-primary hover:border-copilot-primary/40"
                  )}
                >
                  {lab}
                </button>
              ))}
            </div>
            <p className="mt-2 flex flex-wrap items-center gap-1 text-xs text-copilot-text-secondary">
              <span>Toeslagpartner</span>
              <HaFieldHelp label="Toeslagpartner" helpKey="toeslagpartner" />
            </p>
          </div>

          <div
            className={cn(
              "overflow-hidden transition-[max-height,opacity] duration-300 ease-out motion-reduce:transition-none",
              showPartnerPanel ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
            )}
            aria-hidden={!showPartnerPanel}
          >
            <div className="space-y-4 border-t border-copilot-primary/10 pt-4">
              <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-copilot-primary/15 bg-copilot-bg-soft/60 p-3">
                <input
                  type="checkbox"
                  checked={inputs.partnerIncludedForYear}
                  onChange={(e) => userPatch({ partnerIncludedForYear: e.target.checked })}
                  className="mt-1 h-4 w-4 rounded border-copilot-primary/30"
                />
                <span className="text-sm text-copilot-text-primary">
                  Include my toeslagpartner for <strong>combined</strong> income and asset limits (higher ceilings than single).
                </span>
              </label>
            </div>
          </div>
        </CardShell>

        <CardShell title="3 · Income" subtitle="Annual or monthly gross — we annualize for the model.">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary">Entry style</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {(
                [
                  ["annual", "Annual amounts"],
                  ["monthly_gross", "Monthly gross × 12"],
                ] as const
              ).map(([v, lab]) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => userPatch({ incomeEntryMode: v })}
                  className={cn(
                    "min-h-11 rounded-xl border px-3 py-2 text-sm font-medium transition",
                    inputs.incomeEntryMode === v
                      ? "border-copilot-primary bg-copilot-primary text-white shadow-sm"
                      : "border-copilot-primary/20 bg-white text-copilot-text-primary hover:border-copilot-primary/40"
                  )}
                >
                  {lab}
                </button>
              ))}
            </div>
            <p className="mt-2 flex flex-wrap items-center gap-1 text-xs text-copilot-text-secondary">
              <span>What counts as income here</span>
              <HaFieldHelp label="Annual income" helpKey="annualIncome" />
            </p>
          </div>

          {combinedIncomeZero ? (
            <InfoBox variant="info" title="Income looks empty" className="border-sky-200/80 bg-sky-50/70">
              <p className="text-sm text-copilot-text-secondary">
                Combined income is <strong>€0</strong>. We will assume income is <strong>missing</strong> and stress-test with a high figure (a fraction of
                the ceiling) so the allowance estimate stays conservative — not optimistic. Add realistic figures when you have them.
              </p>
            </InfoBox>
          ) : null}

          {inputs.incomeEntryMode === "annual" ? (
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-semibold text-copilot-text-secondary" htmlFor="ha-inc-you-a">
                  Your annual income (€)
                </label>
                <Input
                  id="ha-inc-you-a"
                  type="number"
                  min={0}
                  className="mt-1 rounded-xl border-copilot-primary/15"
                  value={inputs.annualIncomeYou}
                  onChange={(e) => userPatch({ annualIncomeYou: Number(e.target.value) })}
                />
              </div>
              {showPartnerIncome ? (
                <div className="transition-opacity duration-200">
                  <label className="text-xs font-semibold text-copilot-text-secondary" htmlFor="ha-inc-par-a">
                    Partner annual income (€)
                  </label>
                  <Input
                    id="ha-inc-par-a"
                    type="number"
                    min={0}
                    className="mt-1 rounded-xl border-copilot-primary/15"
                    value={inputs.annualIncomePartner}
                    onChange={(e) => userPatch({ annualIncomePartner: Number(e.target.value) })}
                  />
                </div>
              ) : null}
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-semibold text-copilot-text-secondary" htmlFor="ha-inc-you-m">
                  Your monthly gross (€)
                </label>
                <Input
                  id="ha-inc-you-m"
                  type="number"
                  min={0}
                  className="mt-1 rounded-xl border-copilot-primary/15"
                  value={inputs.monthlyGrossYou}
                  onChange={(e) => userPatch({ monthlyGrossYou: Number(e.target.value) })}
                />
              </div>
              {showPartnerIncome ? (
                <div className="transition-opacity duration-200">
                  <label className="text-xs font-semibold text-copilot-text-secondary" htmlFor="ha-inc-par-m">
                    Partner monthly gross (€)
                  </label>
                  <Input
                    id="ha-inc-par-m"
                    type="number"
                    min={0}
                    className="mt-1 rounded-xl border-copilot-primary/15"
                    value={inputs.monthlyGrossPartner}
                    onChange={(e) => userPatch({ monthlyGrossPartner: Number(e.target.value) })}
                  />
                </div>
              ) : null}
            </div>
          )}
          <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-amber-200/80 bg-amber-50/50 p-3">
            <input
              type="checkbox"
              checked={inputs.incomeNotSure}
              onChange={(e) => userPatch({ incomeNotSure: e.target.checked })}
              className="mt-1 h-4 w-4 rounded border-copilot-primary/30"
            />
            <span className="text-sm text-copilot-text-primary">
              I&apos;m not sure about my income yet — inflate the test income using the site rule so the estimate errs on the safe side.
            </span>
          </label>
        </CardShell>

        <CardShell title="4 · Assets on 1 January" subtitle="Balance-sheet assets for the allowance test — not your monthly spending buffer.">
          <p className="flex flex-wrap items-center gap-1 text-sm text-copilot-text-secondary">
            <span>What belongs in this box</span>
            <HaFieldHelp label="Assets on 1 January" helpKey="assetsJan1" />
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-semibold text-copilot-text-secondary" htmlFor="ha-ast-you">
                Your assets 1 Jan (€)
              </label>
              <Input
                id="ha-ast-you"
                type="number"
                min={0}
                className="mt-1 rounded-xl border-copilot-primary/15"
                value={inputs.assetsYouJan1}
                onChange={(e) => userPatch({ assetsYouJan1: Number(e.target.value) })}
              />
            </div>
            {showPartnerIncome ? (
              <div className="transition-opacity duration-200">
                <label className="text-xs font-semibold text-copilot-text-secondary" htmlFor="ha-ast-par">
                  Partner assets 1 Jan (€)
                </label>
                <Input
                  id="ha-ast-par"
                  type="number"
                  min={0}
                  className="mt-1 rounded-xl border-copilot-primary/15"
                  value={inputs.assetsPartnerJan1}
                  onChange={(e) => userPatch({ assetsPartnerJan1: Number(e.target.value) })}
                />
              </div>
            ) : null}
          </div>
        </CardShell>

        <CardShell title="5 · Timing & how results are shown" subtitle="Part-year insurance and whether you want prorated, full-year, or both views.">
          <div>
            <div className="flex flex-wrap items-center gap-1">
              <label className="text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary" htmlFor="ha-mo-override">
                Allowance months (optional override)
              </label>
              <HaFieldHelp label="Partial year" helpKey="partialYear" />
            </div>
            <Input
              id="ha-mo-override"
              type="number"
              min={1}
              max={12}
              placeholder="Auto from insurance"
              className="mt-1 max-w-full rounded-xl border-copilot-primary/15 sm:max-w-xs"
              value={inputs.allowanceMonthsThisYear ?? ""}
              onChange={(e) => {
                const v = e.target.value;
                userPatch({ allowanceMonthsThisYear: v === "" ? null : Math.min(12, Math.max(1, Math.round(Number(v)))) });
              }}
            />
            <p className="mt-1 text-xs text-copilot-text-secondary">Leave empty unless you want to override the automatic month count (always 1–12).</p>
          </div>
          <label className="flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              checked={inputs.movingMidYear}
              onChange={(e) => userPatch({ movingMidYear: e.target.checked })}
              className="h-4 w-4 rounded border-copilot-primary/30"
            />
            <span className="text-sm text-copilot-text-primary">I moved to the Netherlands mid-year</span>
          </label>
          <div>
            <div className="flex flex-wrap items-center gap-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary">Result display</p>
              <HaFieldHelp label="Monthly vs annual estimate" helpKey="monthlyVsAnnual" />
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {(
                [
                  ["remaining", "Prorated year"],
                  ["full_year", "Full 12 months"],
                  ["both", "Show both"],
                ] as const
              ).map(([v, lab]) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => userPatch({ yearEstimateMode: v })}
                  className={cn(
                    "min-h-11 rounded-xl border px-3 py-2 text-sm font-medium transition",
                    inputs.yearEstimateMode === v
                      ? "border-copilot-primary bg-copilot-primary text-white shadow-sm"
                      : "border-copilot-primary/20 bg-white text-copilot-text-primary hover:border-copilot-primary/40"
                  )}
                >
                  {lab}
                </button>
              ))}
            </div>
          </div>
        </CardShell>
      </div>

      <div className="rounded-2xl border border-copilot-primary/12 bg-gradient-to-br from-copilot-bg-soft/80 to-white p-4 shadow-expatos-sm md:p-5">
        <h3 className="text-base font-semibold tracking-tight text-copilot-text-primary">Run calculation</h3>
        <p className="mt-2 text-sm text-copilot-text-secondary">
          Results stay hidden until you click <strong className="text-copilot-text-primary">Calculate</strong> — same pacing as our other calculators.
        </p>
        <p className="mt-2 text-sm text-copilot-text-secondary">
          Output is planning-only: simplified thresholds and taper — not a Dienst Toeslagen decision.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button type="button" className="min-h-11 w-full sm:w-auto" disabled={isCalculating} onClick={handleCalculate}>
            {isCalculating ? "Calculating…" : hasRun ? "Recalculate" : "Calculate"}
          </Button>
        </div>
        {hasRun && !isCalculating ? (
          <p className="mt-3 text-xs text-copilot-text-secondary">Showing your last calculated estimate.</p>
        ) : null}
      </div>

      <div id="tool-results" className="scroll-mt-24 space-y-5 md:scroll-mt-28 md:space-y-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h3 className="text-xl font-semibold tracking-tight text-copilot-text-primary">Your results</h3>
          <p className="text-xs text-copilot-text-secondary sm:text-right">
            After you run the calculator ·{" "}
            <span className="inline-flex items-center gap-0.5">
              not official
              <HaFieldHelp label="Estimated vs official" helpKey="estimatedVsOfficial" />
            </span>
          </p>
        </div>

        {hydrated && !userHasEdited && !hasRun && !isCalculating ? (
          <div className="rounded-2xl border border-dashed border-copilot-primary/25 bg-copilot-bg-soft/80 p-5 shadow-expatos-sm md:p-6">
            <p className="text-sm font-semibold text-copilot-text-primary">What you&apos;ll get from this run</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-copilot-text-secondary">
              <li>An <strong>estimated likely eligibility</strong> readout from a simple screen (not a government decision).</li>
              <li>An <strong>estimated monthly allowance</strong> using public ceilings and a transparent taper.</li>
              <li>An <strong>estimated / indicative net premium</strong> after that allowance for budgeting only.</li>
            </ul>
            <p className="mt-4 text-sm text-copilot-text-secondary">
              <strong>Who it&apos;s for:</strong> expats and residents comparing insurer posters to cash flow, couples checking combined ceilings, and anyone
              planning before applying to Dienst Toeslagen.
            </p>
            <p className="mt-2 text-xs text-copilot-text-secondary">Change any field above to personalize — defaults are only a starting point.</p>
          </div>
        ) : null}

        {isCalculating ? (
          <div className="space-y-3">
            <ToolResultsLoading
              variant="copilot"
              message="Estimating eligibility, allowance taper, net premium, and prorated views…"
            />
            <div className="mx-auto h-2 max-w-md overflow-hidden rounded-full bg-copilot-primary/10" aria-hidden>
              <div
                className="h-full rounded-full bg-copilot-primary transition-[width] duration-150 ease-linear"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
        ) : null}

        {!isCalculating && !hasRun ? (
          <InfoBox title="Results will appear here" variant="info">
            <p className="text-sm text-copilot-text-primary">
              Set your household, income, assets, and insurance details above, then click <strong>Calculate</strong> for estimated eligibility, monthly
              allowance, net premium, diagnosis, and export.
            </p>
          </InfoBox>
        ) : null}

        {!isCalculating && hasRun && resultsStale ? (
          <InfoBox title="Inputs changed since your last result" variant="info">
            <p className="text-sm text-copilot-text-primary">
              The sections below reflect your previous run. Click <strong>Recalculate</strong> to refresh.
            </p>
          </InfoBox>
        ) : null}

        {hasRun && displayResult && lastRunInputs && !isCalculating ? (
          <HealthcareAllowanceResultsBody
            result={displayResult}
            runInputs={lastRunInputs}
            plainEnglishLines={plainEnglishLines}
            buildExportPayload={buildExportPayload}
            onReset={onReset}
          />
        ) : null}
      </div>

      <p className="text-center text-xs text-copilot-text-secondary">
        Guide:{" "}
        <Link href="/netherlands/taxes/healthcare-allowance/" className="font-semibold text-copilot-primary hover:underline">
          Healthcare allowance in the Netherlands
        </Link>
      </p>
    </div>
  );
}
