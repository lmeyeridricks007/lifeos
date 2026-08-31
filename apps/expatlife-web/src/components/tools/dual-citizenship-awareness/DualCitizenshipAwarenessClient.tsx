"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { InfoBox } from "@/components/ui/info-box";
import { ToolResultsLoading } from "@/src/components/tools/ToolResultsLoading";
import { cn } from "@/lib/cn";
import { calculateDualCitizenshipAwareness } from "@/src/lib/tools/dual-citizenship-awareness/engine";
import {
  DEFAULT_DUAL_CITIZENSHIP_INPUT,
  type DualAwarenessBand,
  type DualCitizenshipAwarenessInput,
} from "@/src/lib/tools/dual-citizenship-awareness/types";
import {
  dualInputToSearchParams,
  hasDualCitizenshipUrlParams,
  loadDualCitizenshipFromStorage,
  parseDualCitizenshipSearchParams,
  sanitizeDualCitizenshipInput,
  saveDualCitizenshipToStorage,
} from "@/src/lib/tools/dual-citizenship-awareness/urlState";
import {
  EXCEPTION_OPTIONS,
  HOME_RENOUNCE_OPTIONS,
  ROUTE_OPTIONS,
  YES_NO_UNSURE_OPTIONS,
} from "@/src/content/tools/dual-citizenship-awareness/content";

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

function bandTone(band: DualAwarenessBand): "good" | "watch" | "early" | "review" | "info" {
  if (band === "option_may_skip_renunciation") return "good";
  if (band === "possible_exception_to_document") return "watch";
  if (band === "likely_must_renounce") return "info";
  if (band === "prefer_pr_for_now") return "early";
  if (band === "home_country_friction") return "watch";
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

export function DualCitizenshipAwarenessClient() {
  const router = useRouter();
  const pathname = usePathname();
  const [input, setInput] = useState<DualCitizenshipAwarenessInput>(DEFAULT_DUAL_CITIZENSHIP_INPUT);
  const [hydrated, setHydrated] = useState(false);
  const [hasRun, setHasRun] = useState(false);
  const [lastRunInput, setLastRunInput] = useState<DualCitizenshipAwarenessInput | null>(null);
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
    let next = sanitizeDualCitizenshipInput(DEFAULT_DUAL_CITIZENSHIP_INPUT);
    if (hasDualCitizenshipUrlParams(sp)) {
      next = sanitizeDualCitizenshipInput({ ...next, ...parseDualCitizenshipSearchParams(sp) });
    } else {
      const stored = loadDualCitizenshipFromStorage();
      if (stored) next = sanitizeDualCitizenshipInput({ ...next, ...stored });
    }
    setInput(next);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    saveDualCitizenshipToStorage(input);
    const t = window.setTimeout(() => {
      const query = dualInputToSearchParams(input).toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    }, 280);
    return () => window.clearTimeout(t);
  }, [hydrated, input, pathname, router]);

  const result = useMemo(
    () => (lastRunInput ? calculateDualCitizenshipAwareness(lastRunInput) : null),
    [lastRunInput]
  );
  const inputKey = useMemo(() => dualInputToSearchParams(input).toString(), [input]);
  const resultKey = useMemo(
    () => (lastRunInput ? dualInputToSearchParams(lastRunInput).toString() : ""),
    [lastRunInput]
  );
  const resultsStale = hasRun && !isCalculating && resultKey !== "" && resultKey !== inputKey;

  const patch = useCallback((next: Partial<DualCitizenshipAwarenessInput>) => {
    setInput((prev) => sanitizeDualCitizenshipInput({ ...prev, ...next }));
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
      const snap = sanitizeDualCitizenshipInput({ ...latestInputRef.current });
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
        title="Dual nationality decision topics"
        subtitle="Map Dutch renunciation themes and home-country friction before you apply. This is awareness — not a dual-passport verdict."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Which route are you considering?">
            <select
              className={selectClass}
              value={input.routeFocus}
              onChange={(e) => patch({ routeFocus: e.target.value as DualCitizenshipAwarenessInput["routeFocus"] })}
            >
              {ROUTE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Home-country renunciation rules (as you understand them)">
            <select
              className={selectClass}
              value={input.homeCountryRenounce}
              onChange={(e) =>
                patch({ homeCountryRenounce: e.target.value as DualCitizenshipAwarenessInput["homeCountryRenounce"] })
              }
            >
              {HOME_RENOUNCE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Possible Dutch renunciation exception theme">
            <select
              className={selectClass}
              value={input.possibleException}
              onChange={(e) =>
                patch({ possibleException: e.target.value as DualCitizenshipAwarenessInput["possibleException"] })
              }
            >
              {EXCEPTION_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Willing to renounce your other nationality if required?">
            <select
              className={selectClass}
              value={input.willingToRenounce}
              onChange={(e) =>
                patch({ willingToRenounce: e.target.value as DualCitizenshipAwarenessInput["willingToRenounce"] })
              }
            >
              {YES_NO_UNSURE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Plan to live outside NL / EU for many years after becoming Dutch?">
            <select
              className={selectClass}
              value={input.planLiveOutsideNlEuLong}
              onChange={(e) =>
                patch({
                  planLiveOutsideNlEuLong: e.target.value as DualCitizenshipAwarenessInput["planLiveOutsideNlEuLong"],
                })
              }
            >
              {YES_NO_UNSURE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Concerned about home military service, inheritance, or similar duties?">
            <select
              className={selectClass}
              value={input.homeMilitaryOrInheritanceConcern}
              onChange={(e) =>
                patch({
                  homeMilitaryOrInheritanceConcern:
                    e.target.value as DualCitizenshipAwarenessInput["homeMilitaryOrInheritanceConcern"],
                })
              }
            >
              {YES_NO_UNSURE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Do you already hold Dutch + another nationality?">
            <select
              className={selectClass}
              value={input.alreadyDutchDual}
              onChange={(e) =>
                patch({ alreadyDutchDual: e.target.value as DualCitizenshipAwarenessInput["alreadyDutchDual"] })
              }
            >
              {YES_NO_UNSURE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <InfoBox variant="info" title="Policy-sensitive topic">
          Dual nationality rules change and are personal. Use official government.nl and IND pages — not forum posts — before you apply.
        </InfoBox>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <Button type="button" onClick={handleCalculate} disabled={isCalculating}>
            {isCalculating ? "Checking…" : "Check dual-citizenship topics"}
          </Button>
          <button
            type="button"
            className="text-sm font-medium text-copilot-text-secondary underline-offset-2 hover:underline"
            onClick={() => {
              setInput(sanitizeDualCitizenshipInput(DEFAULT_DUAL_CITIZENSHIP_INPUT));
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
          <ToolResultsLoading progressPct={progressPct} label="Mapping dual nationality decision topics…" />
        ) : null}

        {hasRun && result && !isCalculating ? (
          <CardShell title="Awareness results" subtitle={result.confidenceNote}>
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
