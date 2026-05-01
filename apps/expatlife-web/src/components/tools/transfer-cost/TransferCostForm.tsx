"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ChevronRight, ClipboardList, Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { Input, Select } from "@/components/ui/input";
import { SegmentedControl } from "@/components/ui/segmented-control";
import { bankToolCardClass, BANK_TOOL_FIELD, BANK_TOOL_LABEL } from "@/src/components/tools/banking/bankComparisonUi";
import {
  TRANSFER_COST_MAJOR_TO_CURRENCIES,
  TRANSFER_COST_OTHER_TO_CURRENCIES,
} from "@/src/data/tools/transferCostCalculatorAssumptions";
import type { TransferCostCalculatorInput } from "@/src/lib/tools/transfer-cost-calculator/types";
import { getTransferCostCalculatorBlockers } from "@/src/lib/tools/transfer-cost-calculator/engine";

const STEP_HELPERS: Record<number, string> = {
  1: "Pick how many euros you want to think about — we only model money leaving your Dutch euro account.",
  2: "How often you send changes the tips we show — the numbers stay simple ranges, not live prices.",
  3: "If you are not sure of the path yet, choose “Not sure” — we still show all three types so you can learn.",
  4: "Your priority only nudges the “best fit” idea — every number below is still a range.",
};

const navButtonClass = "min-h-[44px] border-copilot-primary/20 bg-white text-copilot-text-primary shadow-expatos-sm";
const primaryCtaClass = "min-h-[44px] border-copilot-primary/30 bg-copilot-primary text-white hover:bg-copilot-primary/90";

export type TransferCostFormProps = {
  input: TransferCostCalculatorInput;
  onInputChange: <K extends keyof TransferCostCalculatorInput>(key: K, value: TransferCostCalculatorInput[K]) => void;
  step: number;
  onStepChange: (step: number) => void;
  totalSteps?: number;
  onReset: () => void;
  onSeeResults: () => void;
  onSkipToResults?: () => void;
  /** True while the parent waits 1–2s before showing results — disables inputs and shows loading on the action button. */
  isResultsLoading?: boolean;
  className?: string;
};

export function TransferCostForm({
  input,
  onInputChange,
  step,
  onStepChange,
  totalSteps = 4,
  onReset,
  onSeeResults,
  onSkipToResults,
  isResultsLoading = false,
  className,
}: TransferCostFormProps) {
  const [formError, setFormError] = useState<string | null>(null);
  const patch = useCallback(
    <K extends keyof TransferCostCalculatorInput>(key: K, value: TransferCostCalculatorInput[K]) => {
      onInputChange(key, value);
    },
    [onInputChange],
  );

  useEffect(() => {
    if (getTransferCostCalculatorBlockers(input).length === 0) setFormError(null);
  }, [input]);

  const tryGoResults = useCallback(() => {
    const blockers = getTransferCostCalculatorBlockers(input);
    if (blockers.length) {
      setFormError(blockers[0]!);
      onStepChange(1);
      return;
    }
    setFormError(null);
    onSeeResults();
  }, [input, onSeeResults, onStepChange]);

  const trySkip = useCallback(() => {
    const blockers = getTransferCostCalculatorBlockers(input);
    if (blockers.length) {
      setFormError(blockers[0]!);
      onStepChange(1);
      return;
    }
    setFormError(null);
    onSkipToResults?.();
  }, [input, onSkipToResults, onStepChange]);

  return (
    <div className={cn("space-y-6", className)} aria-busy={isResultsLoading}>
      {isResultsLoading ? (
        <div
          className="flex items-center gap-3 rounded-xl border border-copilot-primary/15 bg-copilot-bg-soft/80 px-4 py-3 text-sm text-copilot-text-primary"
          role="status"
          aria-live="polite"
        >
          <Loader2 className="h-5 w-5 shrink-0 animate-spin text-copilot-primary" aria-hidden />
          <span>Calculating your estimate… this takes about one or two seconds.</span>
        </div>
      ) : null}
      {formError ? (
        <div className="rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm text-amber-950" role="alert">
          {formError}
        </div>
      ) : null}

      {step === 1 ? (
        <section className={bankToolCardClass("space-y-5")} aria-labelledby="tcc-step1">
          <h2 id="tcc-step1" className="text-lg font-normal text-copilot-text-primary">
            Transfer basics
          </h2>
          <p className="text-sm leading-relaxed text-copilot-text-secondary">
            We model euros you send from the Netherlands. The recipient’s currency only changes how wide we draw the exchange-rate cost range — we never load a live rate from the market.
          </p>
          {STEP_HELPERS[1] ? <p className="text-xs text-copilot-text-muted">{STEP_HELPERS[1]}</p> : null}

          <fieldset className="min-w-0 border-0 p-0">
            <legend className={cn(BANK_TOOL_LABEL, "block w-full pb-2")}>Send amount (EUR)</legend>
            <div className={BANK_TOOL_FIELD}>
              <SegmentedControl
                pillTone="copilot"
                name="amountBand"
                groupLabel="How many euros are you planning to send?"
                value={input.amountBand}
                disabled={isResultsLoading}
                onChange={(v) => patch("amountBand", v as TransferCostCalculatorInput["amountBand"])}
                options={[
                  { value: "100", label: "€100" },
                  { value: "250", label: "€250" },
                  { value: "500", label: "€500" },
                  { value: "1000", label: "€1,000" },
                  { value: "2500", label: "€2,500" },
                  { value: "5000", label: "€5,000" },
                  { value: "custom", label: "Custom" },
                ]}
              />
            </div>
          </fieldset>

          {input.amountBand === "custom" ? (
            <div>
              <label htmlFor="tcc-custom-amt" className={cn(BANK_TOOL_LABEL, "block")}>
                Custom amount (EUR)
              </label>
              <Input
                id="tcc-custom-amt"
                type="number"
                inputMode="decimal"
                min={1}
                step={1}
                disabled={isResultsLoading}
                className={cn(BANK_TOOL_FIELD, "max-w-full sm:max-w-xs")}
                value={input.customAmountEur ?? ""}
                onChange={(e) => patch("customAmountEur", e.target.value === "" ? undefined : Number(e.target.value))}
                placeholder="e.g. 750"
                aria-describedby="tcc-step1"
              />
            </div>
          ) : null}

          <fieldset className="min-w-0 border-0 p-0">
            <legend className={cn(BANK_TOOL_LABEL, "block w-full pb-2")}>From currency</legend>
            <p className="text-xs text-copilot-text-muted">This tool assumes you send from a euro balance in the Netherlands.</p>
            <div className={cn(BANK_TOOL_FIELD, "max-w-full sm:max-w-xs")}>
              <Select id="tcc-from" value={input.fromCurrency} disabled aria-label="From currency (EUR)">
                <option value="EUR">EUR</option>
              </Select>
            </div>
          </fieldset>

          <fieldset className="min-w-0 border-0 p-0">
            <legend className={cn(BANK_TOOL_LABEL, "block w-full pb-2")}>Recipient account currency</legend>
            <p className="text-xs text-copilot-text-muted">Common currencies are listed first; open the same menu for more — we only use this to widen or narrow the exchange-rate cost range.</p>
            <div className={cn(BANK_TOOL_FIELD, "max-w-full sm:max-w-sm")}>
              <Select
                id="tcc-to"
                value={input.toCurrency}
                disabled={isResultsLoading}
                onChange={(e) => patch("toCurrency", e.target.value)}
                aria-label="Recipient account currency"
              >
                <optgroup label="Common">
                  {[...TRANSFER_COST_MAJOR_TO_CURRENCIES].map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                  <option value="EUR">EUR (same currency / SEPA-style)</option>
                </optgroup>
                <optgroup label="More">
                  {TRANSFER_COST_OTHER_TO_CURRENCIES.map((c) => (
                    <option key={c} value={c === "Other / not listed" ? "OTHER" : c}>
                      {c}
                    </option>
                  ))}
                </optgroup>
              </Select>
            </div>
          </fieldset>
        </section>
      ) : null}

      {step === 2 ? (
        <section className={bankToolCardClass("space-y-5")} aria-labelledby="tcc-step2">
          <h2 id="tcc-step2" className="text-lg font-normal text-copilot-text-primary">
            How often you send
          </h2>
          {STEP_HELPERS[2] ? <p className="text-xs text-copilot-text-muted">{STEP_HELPERS[2]}</p> : null}
          <fieldset className="min-w-0 border-0 p-0">
            <legend className={cn(BANK_TOOL_LABEL, "block w-full pb-2")}>Frequency</legend>
            <div className={BANK_TOOL_FIELD}>
              <SegmentedControl
                pillTone="copilot"
                name="frequency"
                groupLabel="How often will you send about this amount?"
                value={input.frequency}
                disabled={isResultsLoading}
                onChange={(v) => patch("frequency", v as TransferCostCalculatorInput["frequency"])}
                options={[
                  { value: "one_time", label: "One time" },
                  { value: "occasional", label: "Occasionally" },
                  { value: "monthly", label: "Monthly" },
                  { value: "frequent", label: "Frequently" },
                ]}
              />
            </div>
          </fieldset>
        </section>
      ) : null}

      {step === 3 ? (
        <section className={bankToolCardClass("space-y-5")} aria-labelledby="tcc-step3">
          <h2 id="tcc-step3" className="text-lg font-normal text-copilot-text-primary">
            How you plan to send
          </h2>
          {STEP_HELPERS[3] ? <p className="text-xs text-copilot-text-muted">{STEP_HELPERS[3]}</p> : null}
          <fieldset className="min-w-0 border-0 p-0">
            <legend className={cn(BANK_TOOL_LABEL, "block w-full pb-2")}>Path you have in mind</legend>
            <div className={BANK_TOOL_FIELD}>
              <SegmentedControl
                pillTone="copilot"
                name="method"
                groupLabel="Traditional bank, digital bank, transfer company, or not sure?"
                value={input.method}
                disabled={isResultsLoading}
                onChange={(v) => patch("method", v as TransferCostCalculatorInput["method"])}
                options={[
                  { value: "traditional_bank", label: "Traditional bank" },
                  { value: "digital_bank", label: "Digital bank" },
                  { value: "transfer_provider", label: "Transfer provider" },
                  { value: "not_sure", label: "Not sure" },
                ]}
              />
            </div>
          </fieldset>
        </section>
      ) : null}

      {step === 4 ? (
        <section className={bankToolCardClass("space-y-5")} aria-labelledby="tcc-step4">
          <h2 id="tcc-step4" className="text-lg font-normal text-copilot-text-primary">
            What matters most
          </h2>
          {STEP_HELPERS[4] ? <p className="text-xs text-copilot-text-muted">{STEP_HELPERS[4]}</p> : null}
          <fieldset className="min-w-0 border-0 p-0">
            <legend className={cn(BANK_TOOL_LABEL, "block w-full pb-2")}>Priority</legend>
            <div className={BANK_TOOL_FIELD}>
              <SegmentedControl
                pillTone="copilot"
                name="priority"
                groupLabel="What matters most to you?"
                value={input.priority}
                disabled={isResultsLoading}
                onChange={(v) => patch("priority", v as TransferCostCalculatorInput["priority"])}
                options={[
                  { value: "cheapest", label: "Cheapest" },
                  { value: "fastest", label: "Fastest" },
                  { value: "most_convenient", label: "Most convenient" },
                  { value: "balanced", label: "Balanced" },
                ]}
              />
            </div>
          </fieldset>
          <fieldset className="min-w-0 border-0 p-0">
            <legend className={cn(BANK_TOOL_LABEL, "block w-full pb-2")}>Speed</legend>
            <div className={BANK_TOOL_FIELD}>
              <SegmentedControl
                pillTone="copilot"
                name="speedPreference"
                groupLabel="How urgent is arrival?"
                value={input.speedPreference}
                disabled={isResultsLoading}
                onChange={(v) => patch("speedPreference", v as TransferCostCalculatorInput["speedPreference"])}
                options={[
                  { value: "not_important", label: "Not important" },
                  { value: "same_day", label: "Same day if possible" },
                  { value: "instant_if_possible", label: "Instant if possible" },
                ]}
              />
            </div>
          </fieldset>
        </section>
      ) : null}

      <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <nav className="flex min-w-0 w-full flex-col gap-2 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-start sm:gap-3" aria-label="Form steps">
          <div className="flex w-full min-w-0 flex-wrap gap-2 sm:w-auto">
            <Button
              type="button"
              variant="secondary"
              className={cn(navButtonClass, "flex-1 sm:flex-none")}
              disabled={step <= 1 || isResultsLoading}
              onClick={() => onStepChange(Math.max(1, step - 1))}
              aria-label={step <= 1 ? "Back (disabled on first step)" : `Go back to step ${step - 1}`}
            >
              <ArrowLeft className="mr-2 h-4 w-4 shrink-0" aria-hidden />
              Back
            </Button>
            {step < totalSteps ? (
              <Button
                type="button"
                variant="secondary"
                className={cn(primaryCtaClass, "flex-1 sm:flex-none")}
                disabled={isResultsLoading}
                onClick={() => onStepChange(Math.min(totalSteps, step + 1))}
                aria-label={`Continue to step ${step + 1} of ${totalSteps}`}
              >
                Next
                <ArrowRight className="ml-2 h-4 w-4 shrink-0" aria-hidden />
              </Button>
            ) : (
              <Button
                type="button"
                variant="secondary"
                className={cn(primaryCtaClass, "flex-1 sm:flex-none")}
                disabled={isResultsLoading}
                onClick={tryGoResults}
                aria-busy={isResultsLoading}
                aria-label={isResultsLoading ? "Calculating your estimate" : "See your transfer cost estimate"}
              >
                {isResultsLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 shrink-0 animate-spin" aria-hidden />
                    Calculating…
                  </>
                ) : (
                  <>
                    See results
                    <ChevronRight className="ml-2 h-4 w-4 shrink-0" aria-hidden />
                  </>
                )}
              </Button>
            )}
          </div>
        </nav>
        <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-2 text-xs text-copilot-text-muted">
          <span className="tabular-nums">
            Step {step} of {totalSteps}
          </span>
          <button
            type="button"
            onClick={onReset}
            disabled={isResultsLoading}
            className="min-h-[44px] rounded-md px-1 font-medium text-copilot-text-primary underline decoration-copilot-primary/30 underline-offset-2 hover:decoration-copilot-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copilot-primary/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Start over
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {onSkipToResults ? (
          <Button
            type="button"
            variant="ghost"
            className="min-h-[44px] text-copilot-text-secondary"
            disabled={isResultsLoading}
            onClick={trySkip}
            aria-busy={isResultsLoading}
            aria-label={isResultsLoading ? "Calculating your estimate" : "Skip to results"}
          >
            {isResultsLoading ? (
              <>
                <Loader2 className="mr-1.5 h-4 w-4 shrink-0 animate-spin" aria-hidden />
                Calculating…
              </>
            ) : (
              <>
                <ClipboardList className="mr-1.5 h-4 w-4 shrink-0" aria-hidden />
                Skip to results (uses current answers)
              </>
            )}
          </Button>
        ) : null}
      </div>
    </div>
  );
}
