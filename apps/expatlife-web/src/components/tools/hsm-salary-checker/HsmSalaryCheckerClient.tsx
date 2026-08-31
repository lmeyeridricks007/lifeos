"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { InfoBox } from "@/components/ui/info-box";
import { ToolResultsLoading } from "@/src/components/tools/ToolResultsLoading";
import { cn } from "@/lib/cn";
import { calculateHsmSalary } from "@/src/lib/tools/hsm-salary-checker/engine";
import { formatEurMonthly, HSM_SALARY_FIGURE_YEAR } from "@/src/lib/tools/hsm-salary-checker/thresholds";
import {
  DEFAULT_HSM_SALARY_INPUT,
  type HsmSalaryBand,
  type HsmSalaryInput,
} from "@/src/lib/tools/hsm-salary-checker/types";
import {
  hasHsmSalaryUrlParams,
  hsmSalaryToSearchParams,
  loadHsmSalaryFromStorage,
  parseHsmSalarySearchParams,
  sanitizeHsmSalaryInput,
  saveHsmSalaryToStorage,
} from "@/src/lib/tools/hsm-salary-checker/urlState";
import {
  AGE_BAND_OPTIONS,
  HOLIDAY_PAY_OPTIONS,
  HSM_SALARY_THRESHOLD_SUMMARY,
  REDUCED_OPTIONS,
  SPONSOR_OPTIONS,
} from "@/src/content/tools/hsm-salary-checker/content";

const selectClass =
  "w-full rounded-xl border border-copilot-primary/15 bg-white px-3 py-2.5 text-sm text-copilot-text-primary shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-copilot-primary/35";

function CardShell({
  title,
  subtitle,
  id,
  children,
}: {
  title: string;
  subtitle?: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-2xl border-0 bg-copilot-surface p-5 shadow-expatos-md ring-1 ring-copilot-primary/[0.08] md:scroll-mt-28 md:p-6"
    >
      <div>
        <h3 className="text-base font-semibold tracking-tight text-copilot-text-primary">{title}</h3>
        {subtitle ? <p className="mt-1 text-sm text-copilot-text-secondary">{subtitle}</p> : null}
      </div>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block space-y-1.5">
      <span className="text-sm font-semibold text-copilot-text-primary">{label}</span>
      {children}
    </label>
  );
}

function bandTone(band: HsmSalaryBand): "good" | "watch" | "early" | "review" | "info" {
  if (band === "likely_meets_standard_floor") return "good";
  if (band === "meets_only_if_reduced_applies") return "watch";
  if (band === "near_threshold_verify_components") return "watch";
  if (band === "below_floor") return "review";
  return "review";
}

function toneClass(tone: ReturnType<typeof bandTone>): string {
  if (tone === "good") return "border-l-emerald-500/80 bg-gradient-to-br from-emerald-50/90 to-white";
  if (tone === "watch") return "border-l-amber-500/80 bg-gradient-to-br from-amber-50/80 to-white";
  if (tone === "early") return "border-l-sky-500/80 bg-gradient-to-br from-sky-50/80 to-white";
  if (tone === "info") return "border-l-copilot-primary/60 bg-gradient-to-br from-copilot-bg-soft/80 to-white";
  return "border-l-rose-400/80 bg-gradient-to-br from-rose-50/70 to-white";
}

function statusBadge(status: "strength" | "gap" | "watch" | "info"): string {
  if (status === "strength") return "bg-emerald-100 text-emerald-900";
  if (status === "gap") return "bg-rose-100 text-rose-900";
  if (status === "watch") return "bg-amber-100 text-amber-950";
  return "bg-slate-100 text-slate-700";
}

export function HsmSalaryCheckerClient() {
  const router = useRouter();
  const pathname = usePathname();
  const [input, setInput] = useState<HsmSalaryInput>(DEFAULT_HSM_SALARY_INPUT);
  const [hydrated, setHydrated] = useState(false);
  const [hasRun, setHasRun] = useState(false);
  const [lastRunInput, setLastRunInput] = useState<HsmSalaryInput | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [progressPct, setProgressPct] = useState(0);
  const latestInputRef = useRef(input);
  const cancelRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    latestInputRef.current = input;
  }, [input]);

  useEffect(() => () => cancelRef.current?.(), []);

  useEffect(() => {
    const sp = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
    let next = sanitizeHsmSalaryInput(DEFAULT_HSM_SALARY_INPUT);
    if (hasHsmSalaryUrlParams(sp)) {
      next = sanitizeHsmSalaryInput({ ...next, ...parseHsmSalarySearchParams(sp) });
    } else {
      const stored = loadHsmSalaryFromStorage();
      if (stored) next = sanitizeHsmSalaryInput({ ...next, ...stored });
    }
    setInput(next);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    saveHsmSalaryToStorage(input);
    const t = window.setTimeout(() => {
      const query = hsmSalaryToSearchParams(input).toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    }, 280);
    return () => window.clearTimeout(t);
  }, [hydrated, input, pathname, router]);

  const result = useMemo(() => (lastRunInput ? calculateHsmSalary(lastRunInput) : null), [lastRunInput]);
  const inputKey = useMemo(() => hsmSalaryToSearchParams(input).toString(), [input]);
  const resultKey = useMemo(
    () => (lastRunInput ? hsmSalaryToSearchParams(lastRunInput).toString() : ""),
    [lastRunInput]
  );
  const resultsStale = hasRun && !isCalculating && resultKey !== "" && resultKey !== inputKey;

  const patch = useCallback((next: Partial<HsmSalaryInput>) => {
    setInput((prev) => sanitizeHsmSalaryInput({ ...prev, ...next }));
  }, []);

  const handleCalculate = useCallback(() => {
    if (isCalculating) return;
    cancelRef.current?.();
    setIsCalculating(true);
    setProgressPct(0);
    document.getElementById("tool-results")?.scrollIntoView({ behavior: "smooth", block: "start" });

    const durationMs = 700 + Math.random() * 500;
    const start = Date.now();
    const intervalId = window.setInterval(() => {
      setProgressPct(Math.min(95, ((Date.now() - start) / durationMs) * 100));
    }, 40);
    const timeoutId = window.setTimeout(() => {
      window.clearInterval(intervalId);
      setProgressPct(100);
      const snap = sanitizeHsmSalaryInput({ ...latestInputRef.current });
      setLastRunInput(snap);
      setHasRun(true);
      setIsCalculating(false);
      cancelRef.current = null;
    }, durationMs);

    cancelRef.current = () => {
      window.clearInterval(intervalId);
      window.clearTimeout(timeoutId);
      setIsCalculating(false);
    };
  }, [isCalculating]);

  return (
    <div className="space-y-6">
      <CardShell
        id="tool-inputs"
        title="Compare your offer to HSM salary floors"
        subtitle={`${HSM_SALARY_FIGURE_YEAR} planning figures — gross per month, typically without holiday pay. Not an IND decision.`}
      >
        <ul className="flex flex-wrap gap-2 text-xs text-copilot-text-secondary">
          {HSM_SALARY_THRESHOLD_SUMMARY.map((row) => (
            <li key={row.label} className="rounded-full bg-copilot-bg-soft px-3 py-1 ring-1 ring-copilot-primary/10">
              <span className="font-semibold text-copilot-text-primary">{row.label}:</span> {row.amount}
            </li>
          ))}
        </ul>

        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Gross monthly salary (€)">
            <input
              type="number"
              min={0}
              max={100000}
              step={50}
              className={selectClass}
              value={input.grossMonthly}
              onChange={(e) => patch({ grossMonthly: Number(e.target.value) })}
            />
          </Field>
          <Field label="Age at start of employment">
            <select
              className={selectClass}
              value={input.ageBand}
              onChange={(e) => patch({ ageBand: e.target.value as HsmSalaryInput["ageBand"] })}
            >
              {AGE_BAND_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Reduced salary criterion">
            <select
              className={selectClass}
              value={input.reducedCriterion}
              onChange={(e) => patch({ reducedCriterion: e.target.value as HsmSalaryInput["reducedCriterion"] })}
            >
              {REDUCED_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Does your figure include holiday pay / extras?">
            <select
              className={selectClass}
              value={input.holidayPayIncluded}
              onChange={(e) => patch({ holidayPayIncluded: e.target.value as HsmSalaryInput["holidayPayIncluded"] })}
            >
              {HOLIDAY_PAY_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Is the employer a recognised IND sponsor?">
            <select
              className={selectClass}
              value={input.sponsorStatus}
              onChange={(e) => patch({ sponsorStatus: e.target.value as HsmSalaryInput["sponsorStatus"] })}
            >
              {SPONSOR_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <InfoBox variant="info" title="Verify on IND">
          Amounts change. Confirm the current required amounts page before you accept an offer. Salary is only one HSM condition.
        </InfoBox>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <Button type="button" onClick={handleCalculate} disabled={isCalculating}>
            {isCalculating ? "Checking…" : "Check HSM salary fit"}
          </Button>
          <button
            type="button"
            className="text-sm font-medium text-copilot-text-secondary underline-offset-2 hover:underline"
            onClick={() => {
              setInput(sanitizeHsmSalaryInput(DEFAULT_HSM_SALARY_INPUT));
              setHasRun(false);
              setLastRunInput(null);
            }}
          >
            Reset
          </button>
        </div>
      </CardShell>

      <div id="tool-results" className="scroll-mt-24 space-y-4 md:scroll-mt-28">
        {isCalculating ? <ToolResultsLoading progressPct={progressPct} label="Comparing offer to HSM salary floors…" /> : null}

        {hasRun && result && !isCalculating ? (
          <CardShell title="Salary check results" subtitle={result.confidenceNote}>
            {resultsStale ? (
              <p className="rounded-xl bg-amber-50 px-3 py-2 text-sm text-amber-950 ring-1 ring-amber-200/80">
                Inputs changed since the last run. Re-check to refresh this result.
              </p>
            ) : null}

            <div className={cn("rounded-2xl border-l-4 p-4 ring-1 ring-copilot-primary/[0.06]", toneClass(bandTone(result.band)))}>
              <p className="text-lg font-semibold text-copilot-text-primary">{result.headline}</p>
              <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">{result.summary}</p>
              {result.applicableFloorEur != null ? (
                <p className="mt-3 text-sm text-copilot-text-primary">
                  Applicable floor: <span className="font-semibold">{formatEurMonthly(result.applicableFloorEur)}</span>
                  {result.gapToFloorEur != null && result.gapToFloorEur > 0 ? (
                    <>
                      {" "}
                      · Gap: <span className="font-semibold">{formatEurMonthly(result.gapToFloorEur)}</span>
                    </>
                  ) : null}
                </p>
              ) : null}
            </div>

            {result.escalate ? (
              <InfoBox variant="warn" title="Verify carefully">
                <ul className="mt-1 list-disc space-y-1 pl-5">
                  {result.escalateReasons.map((reason) => (
                    <li key={reason}>{reason}</li>
                  ))}
                </ul>
              </InfoBox>
            ) : null}

            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-copilot-primary">Checklist</h4>
              <ul className="space-y-2">
                {result.checklist.map((item) => (
                  <li key={item.id} className="rounded-xl border border-copilot-primary/10 bg-white p-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide",
                          statusBadge(item.status)
                        )}
                      >
                        {item.status}
                      </span>
                      <span className="font-semibold text-copilot-text-primary">{item.label}</span>
                    </div>
                    <p className="mt-1.5 text-sm text-copilot-text-secondary">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-copilot-primary">Topics to verify</h4>
              <ul className="list-disc space-y-1 pl-5 text-sm text-copilot-text-secondary">
                {result.topicsToVerify.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-copilot-primary">Suggested next steps</h4>
              <ul className="space-y-2">
                {result.nextSteps.map((step) => (
                  <li key={step.id}>
                    {step.href ? (
                      step.external ? (
                        <a
                          href={step.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-brand-600 hover:underline"
                        >
                          {step.label} →
                        </a>
                      ) : (
                        <Link href={step.href} className="text-sm font-medium text-brand-600 hover:underline">
                          {step.label} →
                        </Link>
                      )
                    ) : (
                      <span className="text-sm text-copilot-text-secondary">{step.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </CardShell>
        ) : null}
      </div>
    </div>
  );
}
