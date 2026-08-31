"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { InfoBox } from "@/components/ui/info-box";
import { ToolResultsLoading } from "@/src/components/tools/ToolResultsLoading";
import { cn } from "@/lib/cn";
import { calculateIntegrationRequirement } from "@/src/lib/tools/integration-requirement/engine";
import {
  DEFAULT_INTEGRATION_REQUIREMENT_INPUT,
  type IntegrationRequirementBand,
  type IntegrationRequirementInput,
} from "@/src/lib/tools/integration-requirement/types";
import {
  hasIntegrationRequirementUrlParams,
  integrationRequirementToSearchParams,
  loadIntegrationRequirementFromStorage,
  parseIntegrationRequirementSearchParams,
  sanitizeIntegrationRequirementInput,
  saveIntegrationRequirementToStorage,
} from "@/src/lib/tools/integration-requirement/urlState";
import {
  COHORT_OPTIONS,
  EXEMPTION_OPTIONS,
  GOAL_OPTIONS,
  OBLIGATION_LETTER_OPTIONS,
  RESIDENCE_BASIS_OPTIONS,
  YEARS_IN_NL_OPTIONS,
} from "@/src/content/tools/integration-requirement/content";

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

function bandTone(band: IntegrationRequirementBand): "good" | "watch" | "early" | "review" | "info" {
  if (band === "follow_obligation_duo_gemeente") return "watch";
  if (band === "likely_no_obligation_plan_secure") return "early";
  if (band === "secure_residence_proof_needed") return "watch";
  if (band === "verify_exemption_path") return "watch";
  if (band === "already_secure_status") return "info";
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

export function IntegrationRequirementClient() {
  const router = useRouter();
  const pathname = usePathname();
  const [input, setInput] = useState<IntegrationRequirementInput>(DEFAULT_INTEGRATION_REQUIREMENT_INPUT);
  const [hydrated, setHydrated] = useState(false);
  const [hasRun, setHasRun] = useState(false);
  const [lastRunInput, setLastRunInput] = useState<IntegrationRequirementInput | null>(null);
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
    let next = sanitizeIntegrationRequirementInput(DEFAULT_INTEGRATION_REQUIREMENT_INPUT);
    if (hasIntegrationRequirementUrlParams(sp)) {
      next = sanitizeIntegrationRequirementInput({ ...next, ...parseIntegrationRequirementSearchParams(sp) });
    } else {
      const stored = loadIntegrationRequirementFromStorage();
      if (stored) next = sanitizeIntegrationRequirementInput({ ...next, ...stored });
    }
    setInput(next);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    saveIntegrationRequirementToStorage(input);
    const t = window.setTimeout(() => {
      const query = integrationRequirementToSearchParams(input).toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    }, 280);
    return () => window.clearTimeout(t);
  }, [hydrated, input, pathname, router]);

  const result = useMemo(
    () => (lastRunInput ? calculateIntegrationRequirement(lastRunInput) : null),
    [lastRunInput]
  );
  const inputKey = useMemo(() => integrationRequirementToSearchParams(input).toString(), [input]);
  const resultKey = useMemo(
    () => (lastRunInput ? integrationRequirementToSearchParams(lastRunInput).toString() : ""),
    [lastRunInput]
  );
  const resultsStale = hasRun && !isCalculating && resultKey !== "" && resultKey !== inputKey;

  const patch = useCallback((next: Partial<IntegrationRequirementInput>) => {
    setInput((prev) => sanitizeIntegrationRequirementInput({ ...prev, ...next }));
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
      const snap = sanitizeIntegrationRequirementInput({ ...latestInputRef.current });
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
        title="Integration requirement orientation"
        subtitle="Map obligation vs secure-residence evidence themes before you book exams. This is orientation — not a legal determination."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="What is your current residence basis?">
            <select
              className={selectClass}
              value={input.residenceBasis}
              onChange={(e) =>
                patch({ residenceBasis: e.target.value as IntegrationRequirementInput["residenceBasis"] })
              }
            >
              {RESIDENCE_BASIS_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Does your IND letter say you must inburgeren?">
            <select
              className={selectClass}
              value={input.obligationLetter}
              onChange={(e) =>
                patch({ obligationLetter: e.target.value as IntegrationRequirementInput["obligationLetter"] })
              }
            >
              {OBLIGATION_LETTER_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Which civic integration cohort applies?">
            <select
              className={selectClass}
              value={input.cohort}
              onChange={(e) => patch({ cohort: e.target.value as IntegrationRequirementInput["cohort"] })}
            >
              {COHORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="What is your main goal?">
            <select
              className={selectClass}
              value={input.goal}
              onChange={(e) => patch({ goal: e.target.value as IntegrationRequirementInput["goal"] })}
            >
              {GOAL_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Exemption or diploma pathway?">
            <select
              className={selectClass}
              value={input.exemptionSignal}
              onChange={(e) =>
                patch({ exemptionSignal: e.target.value as IntegrationRequirementInput["exemptionSignal"] })
              }
            >
              {EXEMPTION_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="How long have you been in the Netherlands?">
            <select
              className={selectClass}
              value={input.yearsInNl}
              onChange={(e) => patch({ yearsInNl: e.target.value as IntegrationRequirementInput["yearsInNl"] })}
            >
              {YEARS_IN_NL_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <InfoBox variant="info" title="Start with IND letter and DUO — not a legal determination">
          Only your IND decision letter and official DUO / gemeente portals decide whether you have inburgeringsplicht.
          Use this tool to orient obligation vs secure-residence evidence themes before you plan exams.
        </InfoBox>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <Button type="button" onClick={handleCalculate} disabled={isCalculating}>
            {isCalculating ? "Checking…" : "Check integration requirements"}
          </Button>
          <button
            type="button"
            className="text-sm font-medium text-copilot-text-secondary underline-offset-2 hover:underline"
            onClick={() => {
              setInput(sanitizeIntegrationRequirementInput(DEFAULT_INTEGRATION_REQUIREMENT_INPUT));
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
          <ToolResultsLoading progressPct={progressPct} label="Mapping integration requirement topics…" />
        ) : null}

        {hasRun && result && !isCalculating ? (
          <CardShell title="Orientation results" subtitle={result.confidenceNote}>
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
