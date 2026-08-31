"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { InfoBox } from "@/components/ui/info-box";
import { ToolResultsLoading } from "@/src/components/tools/ToolResultsLoading";
import { cn } from "@/lib/cn";
import { calculatePermanentResidenceEligibility } from "@/src/lib/tools/permanent-residence-eligibility/engine";
import { DEFAULT_PR_ELIGIBILITY_INPUT, type PrEligibilityInput, type PrEligibilityBand } from "@/src/lib/tools/permanent-residence-eligibility/types";
import {
  hasPrEligibilityUrlParams,
  loadPrEligibilityFromStorage,
  parsePrEligibilitySearchParams,
  prInputToSearchParams,
  sanitizePrEligibilityInput,
  savePrEligibilityToStorage,
} from "@/src/lib/tools/permanent-residence-eligibility/urlState";
import {
  ABSENCES_OPTIONS,
  AGE_OPTIONS,
  BRP_OPTIONS,
  CONTINUITY_OPTIONS,
  INTEGRATION_OPTIONS,
  PERMIT_TYPE_OPTIONS,
  PERMIT_VALID_OPTIONS,
  RESIDENCE_YEARS_OPTIONS,
} from "@/src/content/tools/permanent-residence-eligibility/content";

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

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block space-y-1.5">
      <span className="text-sm font-semibold text-copilot-text-primary">{label}</span>
      {children}
    </label>
  );
}

function bandTone(band: PrEligibilityBand): "good" | "watch" | "early" | "review" | "info" {
  if (band === "likely_ready_to_verify") return "good";
  if (band === "close_with_gaps") return "watch";
  if (band === "early_planning") return "early";
  if (band === "already_long_term") return "info";
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

export function PermanentResidenceEligibilityClient() {
  const router = useRouter();
  const pathname = usePathname();
  const [input, setInput] = useState<PrEligibilityInput>(DEFAULT_PR_ELIGIBILITY_INPUT);
  const [hydrated, setHydrated] = useState(false);
  const [hasRun, setHasRun] = useState(false);
  const [lastRunInput, setLastRunInput] = useState<PrEligibilityInput | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [progressPct, setProgressPct] = useState(0);
  const latestInputRef = useRef(input);
  const cancelRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    latestInputRef.current = input;
  }, [input]);

  useEffect(() => {
    return () => cancelRef.current?.();
  }, []);

  useEffect(() => {
    const sp = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
    let next = sanitizePrEligibilityInput(DEFAULT_PR_ELIGIBILITY_INPUT);
    if (hasPrEligibilityUrlParams(sp)) {
      next = sanitizePrEligibilityInput({ ...next, ...parsePrEligibilitySearchParams(sp) });
    } else {
      const stored = loadPrEligibilityFromStorage();
      if (stored) next = sanitizePrEligibilityInput({ ...next, ...stored });
    }
    setInput(next);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    savePrEligibilityToStorage(input);
    const t = window.setTimeout(() => {
      const query = prInputToSearchParams(input).toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    }, 280);
    return () => window.clearTimeout(t);
  }, [hydrated, input, pathname, router]);

  const result = useMemo(() => (lastRunInput ? calculatePermanentResidenceEligibility(lastRunInput) : null), [lastRunInput]);
  const inputKey = useMemo(() => prInputToSearchParams(input).toString(), [input]);
  const resultKey = useMemo(() => (lastRunInput ? prInputToSearchParams(lastRunInput).toString() : ""), [lastRunInput]);
  const resultsStale = hasRun && !isCalculating && resultKey !== "" && resultKey !== inputKey;

  const patch = useCallback((next: Partial<PrEligibilityInput>) => {
    setInput((prev) => sanitizePrEligibilityInput({ ...prev, ...next }));
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
      const snap = sanitizePrEligibilityInput({ ...latestInputRef.current });
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
        title="Your residence situation"
        subtitle="Answer in broad bands. This is a planning checklist — not an IND eligibility decision."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Consecutive lawful residence (approx.)">
            <select
              className={selectClass}
              value={input.residenceYears}
              onChange={(e) => patch({ residenceYears: e.target.value as PrEligibilityInput["residenceYears"] })}
            >
              {RESIDENCE_YEARS_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Main current / recent permit">
            <select
              className={selectClass}
              value={input.permitType}
              onChange={(e) => patch({ permitType: e.target.value as PrEligibilityInput["permitType"] })}
            >
              {PERMIT_TYPE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Permit continuity">
            <select
              className={selectClass}
              value={input.continuity}
              onChange={(e) => patch({ continuity: e.target.value as PrEligibilityInput["continuity"] })}
            >
              {CONTINUITY_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Long absences from the Netherlands">
            <select
              className={selectClass}
              value={input.absences}
              onChange={(e) => patch({ absences: e.target.value as PrEligibilityInput["absences"] })}
            >
              {ABSENCES_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Registered in the BRP">
            <select
              className={selectClass}
              value={input.brpRegistered}
              onChange={(e) => patch({ brpRegistered: e.target.value as PrEligibilityInput["brpRegistered"] })}
            >
              {BRP_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Civic integration evidence">
            <select
              className={selectClass}
              value={input.integration}
              onChange={(e) => patch({ integration: e.target.value as PrEligibilityInput["integration"] })}
            >
              {INTEGRATION_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Is your current residence permit valid?">
            <select
              className={selectClass}
              value={input.permitValid}
              onChange={(e) => patch({ permitValid: e.target.value as PrEligibilityInput["permitValid"] })}
            >
              {PERMIT_VALID_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Are you 18 or older?">
            <select
              className={selectClass}
              value={input.age18Plus}
              onChange={(e) => patch({ age18Plus: e.target.value as PrEligibilityInput["age18Plus"] })}
            >
              {AGE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <InfoBox variant="info" title="HSM tip">
          Permanent residence is a separate IND application. It does not pause HSM unemployment / job-search rules if you lose a sponsor.
        </InfoBox>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <Button type="button" onClick={handleCalculate} disabled={isCalculating}>
            {isCalculating ? "Checking…" : "Check PR readiness signals"}
          </Button>
          <button
            type="button"
            className="text-sm font-medium text-copilot-text-secondary underline-offset-2 hover:underline"
            onClick={() => {
              setInput(sanitizePrEligibilityInput(DEFAULT_PR_ELIGIBILITY_INPUT));
              setHasRun(false);
              setLastRunInput(null);
            }}
          >
            Reset
          </button>
        </div>
      </CardShell>

      <div id="tool-results" className="scroll-mt-24 space-y-4 md:scroll-mt-28">
        {isCalculating ? <ToolResultsLoading progressPct={progressPct} label="Mapping your answers to IND-oriented planning signals…" /> : null}

        {hasRun && result && !isCalculating ? (
          <CardShell title="Results" subtitle={result.confidenceNote}>
            {resultsStale ? (
              <p className="rounded-xl bg-amber-50 px-3 py-2 text-sm text-amber-950 ring-1 ring-amber-200/80">
                Inputs changed since the last run. Re-check to refresh this result.
              </p>
            ) : null}

            <div className={cn("rounded-2xl border-l-4 p-4 ring-1 ring-copilot-primary/[0.06]", toneClass(bandTone(result.band)))}>
              <p className="text-lg font-semibold text-copilot-text-primary">{result.headline}</p>
              <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">{result.summary}</p>
            </div>

            {result.escalate ? (
              <InfoBox variant="warn" title="Escalate carefully">
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
                      <span className={cn("rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide", statusBadge(item.status))}>
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
              <h4 className="text-sm font-semibold uppercase tracking-wide text-copilot-primary">Suggested next steps</h4>
              <ul className="space-y-2">
                {result.nextSteps.map((step) => (
                  <li key={step.id}>
                    {step.href ? (
                      step.external ? (
                        <a href={step.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-brand-600 hover:underline">
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
