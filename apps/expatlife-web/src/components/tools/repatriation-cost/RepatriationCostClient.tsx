"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { InfoBox } from "@/components/ui/info-box";
import { ToolResultsLoading } from "@/src/components/tools/ToolResultsLoading";
import { cn } from "@/lib/cn";
import { calculateRepatriationCost } from "@/src/lib/tools/repatriation-cost/engine";
import {
  DEFAULT_REPATRIATION_COST_INPUT,
  type CostRange,
  type RepatriationCostBand,
  type RepatriationCostInput,
} from "@/src/lib/tools/repatriation-cost/types";
import {
  hasRepatriationCostUrlParams,
  loadRepatriationCostFromStorage,
  parseRepatriationCostSearchParams,
  repatriationCostToSearchParams,
  sanitizeRepatriationCostInput,
  saveRepatriationCostToStorage,
} from "@/src/lib/tools/repatriation-cost/urlState";
import {
  FLIGHTS_OPTIONS,
  HOUSEHOLD_OPTIONS,
  LEASE_OPTIONS,
  PETS_OPTIONS,
  REGION_OPTIONS,
  SHIPPING_OPTIONS,
  TEMP_OPTIONS,
} from "@/src/content/tools/repatriation-cost/content";

const selectClass =
  "w-full rounded-xl border border-copilot-primary/15 bg-white px-3 py-2.5 text-sm text-copilot-text-primary shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-copilot-primary/35";

const eurFormat = new Intl.NumberFormat("en-NL", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

function formatEur(n: number): string {
  return eurFormat.format(n);
}

function formatRange(range: CostRange): string {
  return `${formatEur(range.min)} – ${formatEur(range.typical)} – ${formatEur(range.max)}`;
}

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

function bandTone(band: RepatriationCostBand): "good" | "watch" | "early" | "review" | "info" {
  if (band === "lean_exit") return "good";
  if (band === "typical_exit") return "info";
  if (band === "heavy_exit") return "watch";
  return "review";
}

function toneClass(tone: ReturnType<typeof bandTone>): string {
  if (tone === "good") return "border-l-emerald-500/80 bg-gradient-to-br from-emerald-50/90 to-white";
  if (tone === "watch") return "border-l-amber-500/80 bg-gradient-to-br from-amber-50/80 to-white";
  if (tone === "early") return "border-l-sky-500/80 bg-gradient-to-br from-sky-50/80 to-white";
  if (tone === "info") return "border-l-copilot-primary/60 bg-gradient-to-br from-copilot-bg-soft/80 to-white";
  return "border-l-rose-400/80 bg-gradient-to-br from-rose-50/70 to-white";
}

export function RepatriationCostClient() {
  const router = useRouter();
  const pathname = usePathname();
  const [input, setInput] = useState<RepatriationCostInput>(DEFAULT_REPATRIATION_COST_INPUT);
  const [hydrated, setHydrated] = useState(false);
  const [hasRun, setHasRun] = useState(false);
  const [lastRunInput, setLastRunInput] = useState<RepatriationCostInput | null>(null);
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
    let next = sanitizeRepatriationCostInput(DEFAULT_REPATRIATION_COST_INPUT);
    if (hasRepatriationCostUrlParams(sp)) {
      next = sanitizeRepatriationCostInput({ ...next, ...parseRepatriationCostSearchParams(sp) });
    } else {
      const stored = loadRepatriationCostFromStorage();
      if (stored) next = sanitizeRepatriationCostInput({ ...next, ...stored });
    }
    setInput(next);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    saveRepatriationCostToStorage(input);
    const t = window.setTimeout(() => {
      const query = repatriationCostToSearchParams(input).toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    }, 280);
    return () => window.clearTimeout(t);
  }, [hydrated, input, pathname, router]);

  const result = useMemo(
    () => (lastRunInput ? calculateRepatriationCost(lastRunInput) : null),
    [lastRunInput]
  );
  const inputKey = useMemo(() => repatriationCostToSearchParams(input).toString(), [input]);
  const resultKey = useMemo(
    () => (lastRunInput ? repatriationCostToSearchParams(lastRunInput).toString() : ""),
    [lastRunInput]
  );
  const resultsStale = hasRun && !isCalculating && resultKey !== "" && resultKey !== inputKey;

  const patch = useCallback((next: Partial<RepatriationCostInput>) => {
    setInput((prev) => sanitizeRepatriationCostInput({ ...prev, ...next }));
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
      const snap = sanitizeRepatriationCostInput({ ...latestInputRef.current });
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
        title="Estimate your exit logistics budget"
        subtitle="Orientation ranges for flights, shipping, lease risk, temporary housing, and pets — not mover quotes or tax advice."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Household size">
            <select
              className={selectClass}
              value={input.householdSize}
              onChange={(e) =>
                patch({ householdSize: e.target.value as RepatriationCostInput["householdSize"] })
              }
            >
              {HOUSEHOLD_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Destination region">
            <select
              className={selectClass}
              value={input.destinationRegion}
              onChange={(e) =>
                patch({ destinationRegion: e.target.value as RepatriationCostInput["destinationRegion"] })
              }
            >
              {REGION_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Shipping volume">
            <select
              className={selectClass}
              value={input.shippingVolume}
              onChange={(e) =>
                patch({ shippingVolume: e.target.value as RepatriationCostInput["shippingVolume"] })
              }
            >
              {SHIPPING_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Flights needed">
            <select
              className={selectClass}
              value={input.flightsNeeded}
              onChange={(e) =>
                patch({ flightsNeeded: e.target.value as RepatriationCostInput["flightsNeeded"] })
              }
            >
              {FLIGHTS_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Lease break risk">
            <select
              className={selectClass}
              value={input.leaseBreakRisk}
              onChange={(e) =>
                patch({ leaseBreakRisk: e.target.value as RepatriationCostInput["leaseBreakRisk"] })
              }
            >
              {LEASE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Temporary housing at destination">
            <select
              className={selectClass}
              value={input.tempHousingWeeks}
              onChange={(e) =>
                patch({ tempHousingWeeks: e.target.value as RepatriationCostInput["tempHousingWeeks"] })
              }
            >
              {TEMP_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Pets relocating">
            <select
              className={selectClass}
              value={input.pets}
              onChange={(e) => patch({ pets: e.target.value as RepatriationCostInput["pets"] })}
            >
              {PETS_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <InfoBox variant="info" title="Planning ranges only">
          These are orientation budget bands — not mover quotes. Tax, toeslagen, and Belastingdienst outcomes are not included.
        </InfoBox>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <Button type="button" onClick={handleCalculate} disabled={isCalculating}>
            {isCalculating ? "Estimating…" : "Estimate repatriation costs"}
          </Button>
          <button
            type="button"
            className="text-sm font-medium text-copilot-text-secondary underline-offset-2 hover:underline"
            onClick={() => {
              setInput(sanitizeRepatriationCostInput(DEFAULT_REPATRIATION_COST_INPUT));
              setHasRun(false);
              setLastRunInput(null);
            }}
          >
            Reset
          </button>
        </div>
      </CardShell>

      <div id="tool-results" className="scroll-mt-24 space-y-4 md:scroll-mt-28">
        {isCalculating ? (
          <ToolResultsLoading progressPct={progressPct} label="Building repatriation cost ranges…" />
        ) : null}

        {hasRun && result && !isCalculating ? (
          <CardShell title="Cost estimate results" subtitle={result.confidenceNote}>
            {resultsStale ? (
              <p className="rounded-xl bg-amber-50 px-3 py-2 text-sm text-amber-950 ring-1 ring-amber-200/80">
                Inputs changed since the last run. Re-estimate to refresh this result.
              </p>
            ) : null}

            <div
              className={cn(
                "rounded-2xl border-l-4 p-4 ring-1 ring-copilot-primary/[0.06]",
                toneClass(bandTone(result.band))
              )}
            >
              <p className="text-lg font-semibold text-copilot-text-primary">{result.headline}</p>
              <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">{result.summary}</p>
              <p className="mt-3 text-sm text-copilot-text-primary">
                Total (min – typical – max):{" "}
                <span className="font-semibold">{formatRange(result.total)}</span>
              </p>
            </div>

            {result.escalate ? (
              <InfoBox variant="warn" title="Clarify these inputs">
                <ul className="mt-1 list-disc space-y-1 pl-5">
                  {result.escalateReasons.map((reason) => (
                    <li key={reason}>{reason}</li>
                  ))}
                </ul>
              </InfoBox>
            ) : null}

            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-copilot-primary">
                Cost breakdown
              </h4>
              <ul className="space-y-2">
                {result.breakdown.map((item) => (
                  <li key={item.id} className="rounded-xl border border-copilot-primary/10 bg-white p-3">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <span className="font-semibold text-copilot-text-primary">{item.label}</span>
                      <span className="text-sm font-medium text-copilot-text-primary">
                        {formatRange(item.range)}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm text-copilot-text-secondary">{item.note}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-copilot-primary">
                Cash timing notes
              </h4>
              <ul className="list-disc space-y-1 pl-5 text-sm text-copilot-text-secondary">
                {result.cashTimingNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-copilot-primary">
                Suggested next steps
              </h4>
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
