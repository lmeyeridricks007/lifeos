"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ChevronRight, ClipboardList } from "lucide-react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SegmentedControl } from "@/components/ui/segmented-control";
import type { BankingCostEstimatorInputs } from "@/src/lib/banking/bankingCostEstimator";
import { getBankingCostEstimatorBlockers, normalizeCustomAmount } from "@/src/lib/banking/bankingCostEstimator";
import { bankToolCardClass, BANK_TOOL_FIELD, BANK_TOOL_LABEL } from "@/src/components/tools/banking/bankComparisonUi";

function BoolRow({
  checked,
  onChange,
  label,
  description,
  id,
  disabled,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  description?: string;
  id: string;
  disabled?: boolean;
}) {
  return (
    <label
      htmlFor={id}
      className={cn(
        "flex gap-3 rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/50 p-3 outline-none focus-within:ring-2 focus-within:ring-copilot-primary/30 focus-within:ring-offset-2 sm:p-4",
        checked && "border-copilot-primary/35 bg-copilot-bg-soft",
        disabled && "cursor-not-allowed opacity-60",
      )}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 h-4 w-4 shrink-0 accent-copilot-primary"
      />
      <span className="min-w-0">
        <span className="text-sm text-copilot-text-primary">{label}</span>
        {description ? <span className="mt-0.5 block text-xs text-copilot-text-secondary">{description}</span> : null}
      </span>
    </label>
  );
}

const STEP_HELPERS: Record<number, string> = {
  1: "Rough answers are fine — you can change anything before you see your range.",
  2: "Pick the fee level that feels closest; real bank prices still change on each website.",
  3: "Cash and spending in other currencies often change the total more than the monthly package fee.",
  4: "We use simple send-size bands — not a live exchange-rate quote for your country pair.",
  5: "Business extras only matter if you said you need a business account earlier.",
};

export type BankingCostEstimatorFormProps = {
  input: BankingCostEstimatorInputs;
  onInputChange: <K extends keyof BankingCostEstimatorInputs>(key: K, value: BankingCostEstimatorInputs[K]) => void;
  step: number;
  onStepChange: (step: number) => void;
  totalSteps?: number;
  onReset: () => void;
  onSeeResults: () => void;
  onSkipToResults?: () => void;
  /** One-line reassurance under the step title (lighter UX when true). */
  showStepHelper?: boolean;
  className?: string;
};

export function BankingCostEstimatorForm({
  input,
  onInputChange,
  step,
  onStepChange,
  totalSteps = 5,
  onReset,
  onSeeResults,
  onSkipToResults,
  showStepHelper = false,
  className,
}: BankingCostEstimatorFormProps) {
  const [formError, setFormError] = useState<string | null>(null);

  const patch = useCallback(
    <K extends keyof BankingCostEstimatorInputs>(key: K, value: BankingCostEstimatorInputs[K]) => {
      onInputChange(key, value);
    },
    [onInputChange],
  );

  useEffect(() => {
    if (getBankingCostEstimatorBlockers(input).length === 0) setFormError(null);
  }, [input]);

  const tryGoResults = useCallback(() => {
    const blockers = getBankingCostEstimatorBlockers(input);
    if (blockers.length) {
      setFormError(blockers[0]!);
      onStepChange(totalSteps);
      return;
    }
    setFormError(null);
    onSeeResults();
  }, [input, onSeeResults, onStepChange, totalSteps]);

  const trySkip = useCallback(() => {
    const blockers = getBankingCostEstimatorBlockers(input);
    if (blockers.length) {
      setFormError(blockers[0]!);
      onStepChange(totalSteps);
      return;
    }
    setFormError(null);
    onSkipToResults?.();
  }, [input, onSkipToResults, onStepChange, totalSteps]);

  return (
    <div className={cn("space-y-6", className)}>
      {formError ? (
        <div className="rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm text-amber-950" role="alert">
          {formError}
        </div>
      ) : null}

      {step === 1 ? (
        <section className={bankToolCardClass("space-y-5")} aria-labelledby="bce-step1">
          <h2 id="bce-step1" className="text-lg font-normal text-copilot-text-primary">
            Your banking setup
          </h2>
          <p className="text-sm leading-relaxed text-copilot-text-secondary">
            Rough planning choices only — defaults are fine. You can edit any step before viewing your range.
          </p>
          {showStepHelper && STEP_HELPERS[1] ? <p className="text-xs text-copilot-text-muted">{STEP_HELPERS[1]}</p> : null}
          <fieldset className="min-w-0 border-0 p-0">
            <legend className={cn(BANK_TOOL_LABEL, "block w-full pb-2")}>You are closest to</legend>
            <div className={BANK_TOOL_FIELD}>
              <SegmentedControl
                pillTone="copilot"
                name="userType"
                groupLabel="Which situation describes you best?"
                value={input.userType}
                onChange={(v) => patch("userType", v as BankingCostEstimatorInputs["userType"])}
                options={[
                  { value: "new_arrival", label: "New arrival" },
                  { value: "employee", label: "Employee" },
                  { value: "student", label: "Student" },
                  { value: "freelancer_zzp", label: "Freelancer / ZZP" },
                  { value: "family", label: "Family" },
                  { value: "international_professional", label: "International professional" },
                  { value: "short_term_stay", label: "Short stay" },
                ]}
              />
            </div>
          </fieldset>
          <fieldset className="min-w-0 border-0 p-0">
            <legend className={cn(BANK_TOOL_LABEL, "block w-full pb-2")}>Setup you have in mind</legend>
            <div className={BANK_TOOL_FIELD}>
              <SegmentedControl
                pillTone="copilot"
                name="setupType"
                groupLabel="Traditional, digital, hybrid, or not sure yet?"
                value={input.setupType}
                onChange={(v) => patch("setupType", v as BankingCostEstimatorInputs["setupType"])}
                options={[
                  { value: "traditional_only", label: "Traditional" },
                  { value: "digital_only", label: "Digital" },
                  { value: "hybrid", label: "Hybrid" },
                  { value: "not_sure", label: "Not sure" },
                ]}
              />
            </div>
          </fieldset>
          <fieldset className="min-w-0 border-0 p-0">
            <legend className={cn(BANK_TOOL_LABEL, "block w-full pb-2")}>Everyday accounts (IBANs you run)</legend>
            <div className={BANK_TOOL_FIELD}>
              <SegmentedControl
                pillTone="copilot"
                name="accountCount"
                groupLabel="How many everyday-style accounts do you expect to keep active?"
                value={input.accountCount}
                onChange={(v) => patch("accountCount", v as BankingCostEstimatorInputs["accountCount"])}
                options={[
                  { value: "one", label: "One" },
                  { value: "two", label: "Two" },
                  { value: "three_or_more", label: "Three+" },
                ]}
              />
            </div>
          </fieldset>
          <div className="grid gap-2 sm:grid-cols-2">
            <BoolRow
              id="bce-business"
              checked={input.needsBusinessAccount}
              onChange={(v) => patch("needsBusinessAccount", v)}
              label="Business / ZZP account"
              description="Separate IBAN for invoices and business cashflow"
            />
            <BoolRow
              id="bce-joint"
              checked={input.needsJointAccount}
              onChange={(v) => patch("needsJointAccount", v)}
              label="Joint account"
              description="Shared household bills or two adults on one package"
            />
          </div>
        </section>
      ) : null}

      {step === 2 ? (
        <section className={bankToolCardClass("space-y-5")} aria-labelledby="bce-step2">
          <h2 id="bce-step2" className="text-lg font-normal text-copilot-text-primary">
            Monthly account and card costs
          </h2>
          {showStepHelper && STEP_HELPERS[2] ? <p className="text-xs text-copilot-text-muted">{STEP_HELPERS[2]}</p> : null}
          <fieldset className="min-w-0 border-0 p-0">
            <legend className={cn(BANK_TOOL_LABEL, "block w-full pb-2")}>Monthly account fee (your guess)</legend>
            <div className={BANK_TOOL_FIELD}>
              <SegmentedControl
                pillTone="copilot"
                name="monthlyFee"
                groupLabel="What monthly fee pattern fits the accounts you are modelling?"
                value={input.monthlyAccountFee}
                onChange={(v) => patch("monthlyAccountFee", v as BankingCostEstimatorInputs["monthlyAccountFee"])}
                options={[
                  { value: "free_or_unknown", label: "Free / unknown" },
                  { value: "low", label: "Low" },
                  { value: "medium", label: "Medium" },
                  { value: "high", label: "High" },
                  { value: "custom_amount", label: "Custom €" },
                ]}
              />
            </div>
          </fieldset>
          {input.monthlyAccountFee === "custom_amount" ? (
            <div className="space-y-2">
              <label htmlFor="bce-custom-monthly" className={BANK_TOOL_LABEL}>
                Custom monthly fee (EUR)
              </label>
              <Input
                id="bce-custom-monthly"
                type="number"
                inputMode="decimal"
                min={0}
                step={0.5}
                placeholder="e.g. 4.50"
                value={input.customMonthlyAccountFee ?? ""}
                onChange={(e) => {
                  const raw = e.target.value;
                  patch("customMonthlyAccountFee", raw === "" ? undefined : (normalizeCustomAmount(raw) ?? undefined));
                }}
                className="max-w-xs border-copilot-primary/15"
              />
            </div>
          ) : null}
          <fieldset className="min-w-0 border-0 p-0">
            <legend className={cn(BANK_TOOL_LABEL, "block w-full pb-2")}>Extra debit cards</legend>
            <div className={BANK_TOOL_FIELD}>
              <SegmentedControl
                pillTone="copilot"
                name="extraCards"
                groupLabel="Beyond the first card on the main account"
                value={input.extraCards}
                onChange={(v) => patch("extraCards", v as BankingCostEstimatorInputs["extraCards"])}
                options={[
                  { value: "none", label: "None" },
                  { value: "one", label: "One extra" },
                  { value: "two_or_more", label: "Two+" },
                ]}
              />
            </div>
          </fieldset>
          <BoolRow
            id="bce-cc"
            checked={input.creditCardNeeded}
            onChange={(v) => patch("creditCardNeeded", v)}
            label="Credit card (paid product or bundle)"
            description="Include a planning band for a typical paid credit product — not a specific issuer quote."
          />
          <fieldset className="min-w-0 border-0 p-0">
            <legend className={cn(BANK_TOOL_LABEL, "block w-full pb-2")}>Premium plan level</legend>
            <div className={BANK_TOOL_FIELD}>
              <SegmentedControl
                pillTone="copilot"
                name="premium"
                groupLabel="Metal cards, insurance bundles, higher tiers"
                value={input.premiumPlan}
                onChange={(v) => patch("premiumPlan", v as BankingCostEstimatorInputs["premiumPlan"])}
                options={[
                  { value: "none", label: "None" },
                  { value: "basic", label: "Basic add-on" },
                  { value: "premium", label: "Premium" },
                  { value: "unknown", label: "Not sure" },
                ]}
              />
            </div>
          </fieldset>
        </section>
      ) : null}

      {step === 3 ? (
        <section className={bankToolCardClass("space-y-5")} aria-labelledby="bce-step3">
          <h2 id="bce-step3" className="text-lg font-normal text-copilot-text-primary">
            ATM and card usage
          </h2>
          {showStepHelper && STEP_HELPERS[3] ? <p className="text-xs text-copilot-text-muted">{STEP_HELPERS[3]}</p> : null}
          <fieldset className="min-w-0 border-0 p-0">
            <legend className={cn(BANK_TOOL_LABEL, "block w-full pb-2")}>Cash withdrawals (NL + abroad)</legend>
            <div className={BANK_TOOL_FIELD}>
              <SegmentedControl
                pillTone="copilot"
                name="atm"
                groupLabel="Roughly how often do you use ATMs?"
                value={input.atmWithdrawalsPerMonth}
                onChange={(v) => patch("atmWithdrawalsPerMonth", v as BankingCostEstimatorInputs["atmWithdrawalsPerMonth"])}
                options={[
                  { value: "none", label: "Rarely / never" },
                  { value: "one_to_two", label: "1–2 / mo" },
                  { value: "three_to_five", label: "3–5 / mo" },
                  { value: "frequent", label: "Often" },
                ]}
              />
            </div>
          </fieldset>
          <fieldset className="min-w-0 border-0 p-0">
            <legend className={cn(BANK_TOOL_LABEL, "block w-full pb-2")}>Non-euro or foreign card spend</legend>
            <div className={BANK_TOOL_FIELD}>
              <SegmentedControl
                pillTone="copilot"
                name="foreignCard"
                groupLabel="Paying in other currencies or on foreign terminals"
                value={input.foreignCardUse}
                onChange={(v) => patch("foreignCardUse", v as BankingCostEstimatorInputs["foreignCardUse"])}
                options={[
                  { value: "never", label: "Never" },
                  { value: "occasional", label: "Sometimes" },
                  { value: "monthly", label: "Monthly" },
                  { value: "frequent", label: "Often" },
                ]}
              />
            </div>
          </fieldset>
          <BoolRow
            id="bce-travel"
            checked={input.travelsOften}
            onChange={(v) => patch("travelsOften", v)}
            label="Travel often"
            description="Adds a small planning uplift for cross-border card and cash friction."
          />
        </section>
      ) : null}

      {step === 4 ? (
        <section className={bankToolCardClass("space-y-5")} aria-labelledby="bce-step4">
          <h2 id="bce-step4" className="text-lg font-normal text-copilot-text-primary">
            International transfers and FX
          </h2>
          {showStepHelper && STEP_HELPERS[4] ? <p className="text-xs text-copilot-text-muted">{STEP_HELPERS[4]}</p> : null}
          <fieldset className="min-w-0 border-0 p-0">
            <legend className={cn(BANK_TOOL_LABEL, "block w-full pb-2")}>Send money abroad</legend>
            <div className={BANK_TOOL_FIELD}>
              <SegmentedControl
                pillTone="copilot"
                name="sendAbroad"
                groupLabel="How often do you send money internationally?"
                value={input.sendsMoneyAbroad}
                onChange={(v) => patch("sendsMoneyAbroad", v as BankingCostEstimatorInputs["sendsMoneyAbroad"])}
                options={[
                  { value: "never", label: "Never" },
                  { value: "occasionally", label: "Sometimes" },
                  { value: "monthly", label: "Monthly" },
                  { value: "frequently", label: "Often" },
                ]}
              />
            </div>
          </fieldset>
          <fieldset className="min-w-0 border-0 p-0">
            <legend className={cn(BANK_TOOL_LABEL, "block w-full pb-2")}>Typical send size (when you send)</legend>
            <div className={BANK_TOOL_FIELD}>
              <SegmentedControl
                pillTone="copilot"
                name="avgXfer"
                groupLabel="Rough order of magnitude — not a live quote"
                value={input.averageTransferAmount}
                onChange={(v) => patch("averageTransferAmount", v as BankingCostEstimatorInputs["averageTransferAmount"])}
                options={[
                  { value: "under_250", label: "Under €250" },
                  { value: "250_to_1000", label: "€250–1k" },
                  { value: "1000_to_5000", label: "€1k–5k" },
                  { value: "over_5000", label: "Over €5k" },
                  { value: "custom_amount", label: "Custom €" },
                ]}
              />
            </div>
          </fieldset>
          {input.averageTransferAmount === "custom_amount" ? (
            <div className="space-y-2">
              <label htmlFor="bce-custom-xfer" className={BANK_TOOL_LABEL}>
                Typical transfer amount (EUR)
              </label>
              <Input
                id="bce-custom-xfer"
                type="number"
                inputMode="decimal"
                min={1}
                step={50}
                placeholder="e.g. 750"
                value={input.customTransferAmount ?? ""}
                onChange={(e) => {
                  const raw = e.target.value;
                  patch("customTransferAmount", raw === "" ? undefined : (normalizeCustomAmount(raw) ?? undefined));
                }}
                className="max-w-xs border-copilot-primary/15"
              />
            </div>
          ) : null}
          <fieldset className="min-w-0 border-0 p-0">
            <legend className={cn(BANK_TOOL_LABEL, "block w-full pb-2")}>Currencies you need</legend>
            <div className={BANK_TOOL_FIELD}>
              <SegmentedControl
                pillTone="copilot"
                name="ccy"
                groupLabel="Beyond everyday euros in the Netherlands"
                value={input.currenciesNeeded}
                onChange={(v) => patch("currenciesNeeded", v as BankingCostEstimatorInputs["currenciesNeeded"])}
                options={[
                  { value: "EUR_only", label: "EUR only" },
                  { value: "EUR_plus_home_currency", label: "EUR + home" },
                  { value: "multiple_currencies", label: "Multi-currency" },
                ]}
              />
            </div>
          </fieldset>
          <BoolRow
            id="bce-intl-in"
            checked={input.receivesInternationalPayments}
            onChange={(v) => patch("receivesInternationalPayments", v)}
            label="Receive international payments"
            description="Freelance clients, employer abroad, or family transfers in"
          />
        </section>
      ) : null}

      {step === 5 ? (
        <section className={bankToolCardClass("space-y-5")} aria-labelledby="bce-step5">
          <h2 id="bce-step5" className="text-lg font-normal text-copilot-text-primary">
            Business / family extras
          </h2>
          {showStepHelper && STEP_HELPERS[5] ? <p className="text-xs text-copilot-text-muted">{STEP_HELPERS[5]}</p> : null}
          <fieldset className="min-w-0 border-0 p-0">
            <legend className={cn(BANK_TOOL_LABEL, "block w-full pb-2")}>Business transaction volume</legend>
            <p className="text-xs text-copilot-text-secondary">Only affects the estimate when you tick a business / ZZP account.</p>
            <div className={cn(BANK_TOOL_FIELD, !input.needsBusinessAccount && "pointer-events-none opacity-50")}>
              <SegmentedControl
                pillTone="copilot"
                name="zzpVol"
                groupLabel="Rough flow through the business account"
                value={input.freelancerTransactionVolume}
                onChange={(v) => patch("freelancerTransactionVolume", v as BankingCostEstimatorInputs["freelancerTransactionVolume"])}
                options={[
                  { value: "not_applicable", label: "N/A" },
                  { value: "low", label: "Low" },
                  { value: "medium", label: "Medium" },
                  { value: "high", label: "High" },
                ]}
              />
            </div>
          </fieldset>
          <BoolRow
            id="bce-inv"
            checked={input.invoicingOrAccountingIntegrationNeeded}
            onChange={(v) => patch("invoicingOrAccountingIntegrationNeeded", v)}
            disabled={!input.needsBusinessAccount}
            label="Invoicing / accounting integration"
            description="Payment links, exports, or bookkeeping tools — planning uplift only."
          />
          <fieldset className="min-w-0 border-0 p-0">
            <legend className={cn(BANK_TOOL_LABEL, "block w-full pb-2")}>Shared household money friction</legend>
            <div className={BANK_TOOL_FIELD}>
              <SegmentedControl
                pillTone="copilot"
                name="familyShared"
                groupLabel="Shared costs across people or accounts"
                value={input.familySharedCosts}
                onChange={(v) => patch("familySharedCosts", v as BankingCostEstimatorInputs["familySharedCosts"])}
                options={[
                  { value: "not_applicable", label: "N/A" },
                  { value: "low", label: "Low" },
                  { value: "medium", label: "Medium" },
                  { value: "high", label: "High" },
                ]}
              />
            </div>
          </fieldset>
          <BoolRow
            id="bce-lowcost"
            checked={input.wantsLowestCost}
            onChange={(v) => patch("wantsLowestCost", v)}
            label="Optimise for lowest cost"
            description="Narrows some “unknown” bands slightly — still not a live quote."
          />
          <BoolRow
            id="bce-conv"
            checked={input.wantsConvenienceOverLowestCost}
            onChange={(v) => patch("wantsConvenienceOverLowestCost", v)}
            label="Prefer convenience over lowest cost"
            description="Adds a small soft uplift for richer bundles or support you might choose anyway."
          />
        </section>
      ) : null}

      <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <nav className="flex min-w-0 flex-wrap items-center justify-between gap-3 sm:justify-start" aria-label="Form steps">
          <Button
            type="button"
            variant="secondary"
            className="border-copilot-primary/20 bg-white text-copilot-text-primary shadow-expatos-sm"
            disabled={step <= 1}
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
              className="border-copilot-primary/30 bg-copilot-primary text-white hover:bg-copilot-primary/90"
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
              className="border-copilot-primary/30 bg-copilot-primary text-white hover:bg-copilot-primary/90"
              onClick={tryGoResults}
              aria-label="See your estimated banking cost range"
            >
              See results
              <ChevronRight className="ml-2 h-4 w-4 shrink-0" aria-hidden />
            </Button>
          )}
        </nav>
        <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-2 text-xs text-copilot-text-muted">
          <span className="tabular-nums">Step {step} of {totalSteps}</span>
          <button
            type="button"
            onClick={onReset}
            className="font-medium text-copilot-text-primary underline decoration-copilot-primary/30 underline-offset-2 hover:decoration-copilot-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copilot-primary/30 focus-visible:ring-offset-2"
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
            className="text-copilot-text-secondary"
            onClick={trySkip}
            aria-label="Skip remaining steps and view results using your answers so far"
          >
            <ClipboardList className="mr-1.5 h-4 w-4 shrink-0" aria-hidden />
            Skip to results (uses current answers)
          </Button>
        ) : null}
      </div>
    </div>
  );
}
