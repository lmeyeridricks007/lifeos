"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { InfoBox } from "@/components/ui/info-box";
import { ToolResultsLoading } from "@/src/components/tools/ToolResultsLoading";
import { cn } from "@/lib/cn";
import { calculateExamReadiness } from "@/src/lib/tools/inburgering-exam-readiness/engine";
import {
  DEFAULT_EXAM_READINESS_INPUT,
  type ExamReadinessBand,
  type ExamReadinessInput,
} from "@/src/lib/tools/inburgering-exam-readiness/types";
import {
  examReadinessToSearchParams,
  hasExamReadinessUrlParams,
  loadExamReadinessFromStorage,
  parseExamReadinessSearchParams,
  sanitizeExamReadinessInput,
  saveExamReadinessToStorage,
} from "@/src/lib/tools/inburgering-exam-readiness/urlState";
import {
  BOOKING_WINDOW_OPTIONS,
  KNM_MATERIALS_OPTIONS,
  MODULE_STATUS_OPTIONS,
  PARTICIPATION_OPTIONS,
  TARGET_LEVEL_OPTIONS,
} from "@/src/content/tools/inburgering-exam-readiness/content";

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

function bandTone(band: ExamReadinessBand): "good" | "watch" | "early" | "review" {
  if (band === "ready_to_book_verify") return "good";
  if (band === "prioritize_weak_modules") return "watch";
  if (band === "early_prep") return "early";
  if (band === "refresh_knm_materials") return "watch";
  return "review";
}

function toneClass(tone: ReturnType<typeof bandTone>): string {
  if (tone === "good") return "border-l-emerald-500/80 bg-gradient-to-br from-emerald-50/90 to-white";
  if (tone === "watch") return "border-l-amber-500/80 bg-gradient-to-br from-amber-50/80 to-white";
  if (tone === "early") return "border-l-sky-500/80 bg-gradient-to-br from-sky-50/80 to-white";
  return "border-l-rose-400/80 bg-gradient-to-br from-rose-50/70 to-white";
}

function statusBadge(status: "strength" | "gap" | "watch" | "info"): string {
  if (status === "strength") return "bg-emerald-100 text-emerald-900";
  if (status === "gap") return "bg-rose-100 text-rose-900";
  if (status === "watch") return "bg-amber-100 text-amber-950";
  return "bg-slate-100 text-slate-700";
}

export function InburgeringExamReadinessClient() {
  const router = useRouter();
  const pathname = usePathname();
  const [input, setInput] = useState<ExamReadinessInput>(DEFAULT_EXAM_READINESS_INPUT);
  const [hydrated, setHydrated] = useState(false);
  const [hasRun, setHasRun] = useState(false);
  const [lastRunInput, setLastRunInput] = useState<ExamReadinessInput | null>(null);
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
    let next = sanitizeExamReadinessInput(DEFAULT_EXAM_READINESS_INPUT);
    if (hasExamReadinessUrlParams(sp)) {
      next = sanitizeExamReadinessInput({ ...next, ...parseExamReadinessSearchParams(sp) });
    } else {
      const stored = loadExamReadinessFromStorage();
      if (stored) next = sanitizeExamReadinessInput({ ...next, ...stored });
    }
    setInput(next);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    saveExamReadinessToStorage(input);
    const t = window.setTimeout(() => {
      const query = examReadinessToSearchParams(input).toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    }, 280);
    return () => window.clearTimeout(t);
  }, [hydrated, input, pathname, router]);

  const result = useMemo(
    () => (lastRunInput ? calculateExamReadiness(lastRunInput) : null),
    [lastRunInput]
  );
  const inputKey = useMemo(() => examReadinessToSearchParams(input).toString(), [input]);
  const resultKey = useMemo(
    () => (lastRunInput ? examReadinessToSearchParams(lastRunInput).toString() : ""),
    [lastRunInput]
  );
  const resultsStale = hasRun && !isCalculating && resultKey !== "" && resultKey !== inputKey;

  const patch = useCallback((next: Partial<ExamReadinessInput>) => {
    setInput((prev) => sanitizeExamReadinessInput({ ...prev, ...next }));
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
      const snap = sanitizeExamReadinessInput({ ...latestInputRef.current });
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
        title="Exam readiness self-check"
        subtitle="Rate language modules and KNM prep against your target level. This is a planning checklist — not a pass prediction."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Target exam level">
            <select
              className={selectClass}
              value={input.targetLevel}
              onChange={(e) =>
                patch({ targetLevel: e.target.value as ExamReadinessInput["targetLevel"] })
              }
            >
              {TARGET_LEVEL_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Reading">
            <select
              className={selectClass}
              value={input.reading}
              onChange={(e) => patch({ reading: e.target.value as ExamReadinessInput["reading"] })}
            >
              {MODULE_STATUS_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Writing">
            <select
              className={selectClass}
              value={input.writing}
              onChange={(e) => patch({ writing: e.target.value as ExamReadinessInput["writing"] })}
            >
              {MODULE_STATUS_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Speaking">
            <select
              className={selectClass}
              value={input.speaking}
              onChange={(e) => patch({ speaking: e.target.value as ExamReadinessInput["speaking"] })}
            >
              {MODULE_STATUS_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Listening">
            <select
              className={selectClass}
              value={input.listening}
              onChange={(e) =>
                patch({ listening: e.target.value as ExamReadinessInput["listening"] })
              }
            >
              {MODULE_STATUS_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="KNM (Knowledge of Dutch Society)">
            <select
              className={selectClass}
              value={input.knm}
              onChange={(e) => patch({ knm: e.target.value as ExamReadinessInput["knm"] })}
            >
              {MODULE_STATUS_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Participation / labour-market modules">
            <select
              className={selectClass}
              value={input.participationModules}
              onChange={(e) =>
                patch({
                  participationModules: e.target.value as ExamReadinessInput["participationModules"],
                })
              }
            >
              {PARTICIPATION_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="KNM study materials">
            <select
              className={selectClass}
              value={input.knmMaterials}
              onChange={(e) =>
                patch({ knmMaterials: e.target.value as ExamReadinessInput["knmMaterials"] })
              }
            >
              {KNM_MATERIALS_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Booking window">
            <select
              className={selectClass}
              value={input.bookingWindow}
              onChange={(e) =>
                patch({ bookingWindow: e.target.value as ExamReadinessInput["bookingWindow"] })
              }
            >
              {BOOKING_WINDOW_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <InfoBox variant="info" title="Self-assessment only">
          Self-assessment only — verify with current DUO practice exams; no pass prediction; KNM updated 1 July 2025.
        </InfoBox>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <Button type="button" onClick={handleCalculate} disabled={isCalculating}>
            {isCalculating ? "Checking…" : "Check exam readiness"}
          </Button>
          <button
            type="button"
            className="text-sm font-medium text-copilot-text-secondary underline-offset-2 hover:underline"
            onClick={() => {
              setInput(sanitizeExamReadinessInput(DEFAULT_EXAM_READINESS_INPUT));
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
          <ToolResultsLoading progressPct={progressPct} label="Checking exam readiness priorities…" />
        ) : null}

        {hasRun && result && !isCalculating ? (
          <CardShell title="Readiness results" subtitle={result.confidenceNote}>
            {resultsStale ? (
              <p className="rounded-xl bg-amber-50 px-3 py-2 text-sm text-amber-950 ring-1 ring-amber-200/80">
                Inputs changed since the last run. Re-check to refresh this result.
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

            {result.priorityModules.length > 0 ? (
              <div className="space-y-2">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-copilot-primary">
                  Priority modules
                </h4>
                <ul className="list-disc space-y-1 pl-5 text-sm text-copilot-text-secondary">
                  {result.priorityModules.map((module) => (
                    <li key={module}>{module}</li>
                  ))}
                </ul>
              </div>
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
