"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ChevronRight, ClipboardList } from "lucide-react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { SegmentedControl } from "@/components/ui/segmented-control";
import type { BankComparisonInput } from "@/src/lib/tools/bank-comparison/types";
import { bankToolCardClass, BANK_TOOL_FIELD, BANK_TOOL_LABEL } from "./bankComparisonUi";
import { getBankComparisonFormBlockers } from "./bankComparisonFormValidation";

function BoolRow({
  checked,
  onChange,
  label,
  description,
  id,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  description?: string;
  id: string;
}) {
  return (
    <label
      htmlFor={id}
      className={cn(
        "flex cursor-pointer gap-3 rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/50 p-3 outline-none focus-within:ring-2 focus-within:ring-copilot-primary/30 focus-within:ring-offset-2 sm:p-4",
        checked && "border-copilot-primary/35 bg-copilot-bg-soft",
      )}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
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

export type BankComparisonFormProps = {
  input: BankComparisonInput;
  onInputChange: <K extends keyof BankComparisonInput>(key: K, value: BankComparisonInput[K]) => void;
  step: number;
  onStepChange: (step: number) => void;
  totalSteps?: number;
  onReset: () => void;
  onSeeResults: () => void;
  onSkipToResults?: () => void;
  className?: string;
};

export function BankComparisonForm({
  input,
  onInputChange,
  step,
  onStepChange,
  totalSteps = 5,
  onReset,
  onSeeResults,
  onSkipToResults,
  className,
}: BankComparisonFormProps) {
  const [formError, setFormError] = useState<string | null>(null);

  const patch = useCallback(
    <K extends keyof BankComparisonInput>(key: K, value: BankComparisonInput[K]) => {
      onInputChange(key, value);
    },
    [onInputChange],
  );

  useEffect(() => {
    if (getBankComparisonFormBlockers(input).length === 0) setFormError(null);
  }, [input]);

  const tryGoResults = useCallback(() => {
    const blockers = getBankComparisonFormBlockers(input);
    if (blockers.length) {
      setFormError(blockers[0]!);
      onStepChange(totalSteps);
      return;
    }
    setFormError(null);
    onSeeResults();
  }, [input, onSeeResults, onStepChange, totalSteps]);

  const trySkip = useCallback(() => {
    const blockers = getBankComparisonFormBlockers(input);
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
        <section className={bankToolCardClass("space-y-5")} aria-labelledby="bc-step1">
          <h2 id="bc-step1" className="text-lg font-normal text-copilot-text-primary">
            Your situation
          </h2>
          <p className="text-sm leading-relaxed text-copilot-text-secondary">
            A few quick choices to start — the defaults are fine. You can add banking needs, international use, and filters in the next steps.
          </p>
          <fieldset className="min-w-0 border-0 p-0">
            <legend className={cn(BANK_TOOL_LABEL, "block w-full pb-2")}>You are closest to</legend>
            <div className={BANK_TOOL_FIELD}>
              <SegmentedControl
                pillTone="copilot"
                name="userType"
                groupLabel="Which situation describes you best?"
                value={input.userType}
                onChange={(v) => patch("userType", v as BankComparisonInput["userType"])}
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
            <legend className={cn(BANK_TOOL_LABEL, "block w-full pb-2")}>Dutch BSN</legend>
            <div className={BANK_TOOL_FIELD}>
              <SegmentedControl
                pillTone="copilot"
                name="bsn"
                groupLabel="Do you already have a Dutch BSN?"
                value={input.alreadyHasBSN}
                onChange={(v) => patch("alreadyHasBSN", v as BankComparisonInput["alreadyHasBSN"])}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                  { value: "not_yet", label: "Not yet" },
                ]}
              />
            </div>
          </fieldset>
          <fieldset className="min-w-0 border-0 p-0">
            <legend className={cn(BANK_TOOL_LABEL, "block w-full pb-2")}>Expected stay</legend>
            <div className={BANK_TOOL_FIELD}>
              <SegmentedControl
                pillTone="copilot"
                name="stay"
                groupLabel="How long do you expect to stay in the Netherlands?"
                value={input.expectedStay}
                onChange={(v) => patch("expectedStay", v as BankComparisonInput["expectedStay"])}
                options={[
                  { value: "less_than_1_year", label: "< 1 year" },
                  { value: "one_to_three_years", label: "1–3 years" },
                  { value: "long_term", label: "Long term" },
                ]}
              />
            </div>
          </fieldset>
        </section>
      ) : null}

      {step === 2 ? (
        <section className={bankToolCardClass("space-y-4")} aria-labelledby="bc-step2">
          <h2 id="bc-step2" className="text-lg font-normal text-copilot-text-primary">
            Banking needs
          </h2>
          <p className="text-sm text-copilot-text-secondary">Select what you need in the next 12–24 months — you can edit later.</p>
          <div className="grid gap-2 sm:grid-cols-2">
            <BoolRow
              id="bc-need-salary"
              checked={input.needsDutchSalaryAccount}
              onChange={(v) => patch("needsDutchSalaryAccount", v)}
              label="Dutch salary account"
              description="Your employer pays your salary into a Dutch account"
            />
            <BoolRow
              id="bc-need-rent"
              checked={input.needsRentPayments}
              onChange={(v) => patch("needsRentPayments", v)}
              label="Rent or big local bills"
              description="Paying rent or similar bills from the Netherlands"
            />
            <BoolRow id="bc-need-ideal" checked={input.needsIdeal} onChange={(v) => patch("needsIdeal", v)} label="iDEAL & local online shopping" />
            <BoolRow id="bc-need-joint" checked={input.needsJointAccount} onChange={(v) => patch("needsJointAccount", v)} label="Joint account" />
            <BoolRow
              id="bc-need-business"
              checked={input.needsBusinessAccount}
              onChange={(v) => patch("needsBusinessAccount", v)}
              label="Business / ZZP account"
            />
            <BoolRow id="bc-need-cc" checked={input.needsCreditCard} onChange={(v) => patch("needsCreditCard", v)} label="Credit card" />
            <BoolRow id="bc-need-savings" checked={input.needsSavingsAccount} onChange={(v) => patch("needsSavingsAccount", v)} label="Savings account" />
          </div>
        </section>
      ) : null}

      {step === 3 ? (
        <section className={bankToolCardClass("space-y-5")} aria-labelledby="bc-step3">
          <h2 id="bc-step3" className="text-lg font-normal text-copilot-text-primary">
            International use
          </h2>
          <fieldset className="min-w-0 border-0 p-0">
            <legend className={cn(BANK_TOOL_LABEL, "block w-full pb-2")}>Send money abroad</legend>
            <div className={BANK_TOOL_FIELD}>
              <SegmentedControl
                pillTone="copilot"
                name="abroad"
                groupLabel="How often do you send money abroad?"
                value={input.sendsMoneyAbroad}
                onChange={(v) => patch("sendsMoneyAbroad", v as BankComparisonInput["sendsMoneyAbroad"])}
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
            <legend className={cn(BANK_TOOL_LABEL, "block w-full pb-2")}>Currencies</legend>
            <div className={BANK_TOOL_FIELD}>
              <SegmentedControl
                pillTone="copilot"
                name="ccy"
                groupLabel="Which currencies do you need beyond everyday euros?"
                value={input.currenciesNeeded}
                onChange={(v) => patch("currenciesNeeded", v as BankComparisonInput["currenciesNeeded"])}
                options={[
                  { value: "EUR_only", label: "EUR only" },
                  { value: "EUR_plus_home_currency", label: "EUR + home" },
                  { value: "multiple_currencies", label: "Multi-currency" },
                ]}
              />
            </div>
          </fieldset>
          <BoolRow id="bc-travel" checked={input.travelsOften} onChange={(v) => patch("travelsOften", v)} label="Travel often (card and cash abroad)" />
          <BoolRow
            id="bc-intl-pay"
            checked={input.receivesInternationalPayments}
            onChange={(v) => patch("receivesInternationalPayments", v)}
            label="Receive international payments (invoices, clients abroad)"
          />
        </section>
      ) : null}

      {step === 4 ? (
        <section className={bankToolCardClass("space-y-5")} aria-labelledby="bc-step4">
          <h2 id="bc-step4" className="text-lg font-normal text-copilot-text-primary">
            Preferences
          </h2>
          <fieldset className="min-w-0 border-0 p-0">
            <legend className={cn(BANK_TOOL_LABEL, "block w-full pb-2")}>Top priority</legend>
            <div className={BANK_TOOL_FIELD}>
              <SegmentedControl
                pillTone="copilot"
                name="priority"
                groupLabel="What matters most in your next 12 to 24 months?"
                value={input.priority}
                onChange={(v) => patch("priority", v as BankComparisonInput["priority"])}
                options={[
                  { value: "lowest_cost", label: "Lowest cost" },
                  { value: "easiest_onboarding", label: "Easiest onboarding" },
                  { value: "local_dutch_integration", label: "Dutch integration" },
                  { value: "international_features", label: "International" },
                  { value: "freelancer_business_features", label: "Freelancer" },
                  { value: "family_long_term_setup", label: "Family / long term" },
                  { value: "balanced", label: "Balanced" },
                ]}
              />
            </div>
          </fieldset>
          <fieldset className="min-w-0 border-0 p-0">
            <legend className={cn(BANK_TOOL_LABEL, "block w-full pb-2")}>Support style</legend>
            <div className={BANK_TOOL_FIELD}>
              <SegmentedControl
                pillTone="copilot"
                name="support"
                groupLabel="What kind of customer support do you prefer?"
                value={input.supportPreference}
                onChange={(v) => patch("supportPreference", v as BankComparisonInput["supportPreference"])}
                options={[
                  { value: "app_only_ok", label: "App-first OK" },
                  { value: "english_support_important", label: "English matters" },
                  { value: "branch_or_human_support_preferred", label: "Human / branch" },
                ]}
              />
            </div>
          </fieldset>
          <fieldset className="min-w-0 border-0 p-0">
            <legend className={cn(BANK_TOOL_LABEL, "block w-full pb-2")}>Risk comfort</legend>
            <div className={BANK_TOOL_FIELD}>
              <SegmentedControl
                pillTone="copilot"
                name="risk"
                groupLabel="How do you feel about newer digital brands versus established banks?"
                value={input.riskTolerance}
                onChange={(v) => patch("riskTolerance", v as BankComparisonInput["riskTolerance"])}
                options={[
                  { value: "wants_established_bank", label: "Established bank" },
                  { value: "comfortable_digital", label: "Digital OK" },
                  { value: "wants_backup_account", label: "Want backup plan" },
                ]}
              />
            </div>
          </fieldset>
        </section>
      ) : null}

      {step === 5 ? (
        <section className={bankToolCardClass("space-y-5")} aria-labelledby="bc-step5">
          <h2 id="bc-step5" className="text-lg font-normal text-copilot-text-primary">
            Optional filters
          </h2>
          <BoolRow
            id="bc-inc-trad"
            checked={input.includeTraditionalBanks}
            onChange={(v) => patch("includeTraditionalBanks", v)}
            label="Include traditional Dutch banks"
            description="ING, ABN AMRO, Rabobank"
          />
          <BoolRow
            id="bc-inc-dig"
            checked={input.includeDigitalBanks}
            onChange={(v) => patch("includeDigitalBanks", v)}
            label="Include digital banks"
            description="bunq, Revolut, N26"
          />
          <BoolRow
            id="bc-inc-transfer"
            checked={input.includeTransferProviders}
            onChange={(v) => patch("includeTransferProviders", v)}
            label="Include transfer specialists"
            description="Wise — multi-currency sends"
          />
          <fieldset className="min-w-0 border-0 p-0">
            <legend className={cn(BANK_TOOL_LABEL, "block w-full pb-2")}>Monthly fees</legend>
            <div className={BANK_TOOL_FIELD}>
              <SegmentedControl
                pillTone="copilot"
                name="costpref"
                groupLabel="How strict are you about monthly bank fees?"
                value={input.maxMonthlyCostPreference}
                onChange={(v) => patch("maxMonthlyCostPreference", v as BankComparisonInput["maxMonthlyCostPreference"])}
                options={[
                  { value: "lowest_possible", label: "Lowest possible" },
                  { value: "reasonable_if_value", label: "Reasonable if value" },
                  { value: "flexible", label: "Flexible" },
                ]}
              />
            </div>
          </fieldset>
          <BoolRow
            id="bc-hybrid"
            checked={input.showHybridRecommendation}
            onChange={(v) => patch("showHybridRecommendation", v)}
            label="Allow “two bank” ideas"
            description="When both classic and app banks fit well, we may suggest using two accounts — still check what your employer and landlord accept."
          />
        </section>
      ) : null}

      <nav className="flex flex-wrap items-center justify-between gap-3" aria-label="Form steps">
        <Button
          type="button"
          variant="secondary"
          className="border-copilot-primary/20 bg-white text-copilot-text-primary shadow-expatos-sm"
          disabled={step <= 1}
          onClick={() => onStepChange(Math.max(1, step - 1))}
          aria-label={step <= 1 ? "Back (disabled on first step)" : `Go back to step ${step - 1}`}
        >
          <ArrowLeft className="mr-2 h-4 w-4" aria-hidden />
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
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
          </Button>
        ) : (
          <Button
            type="button"
            variant="secondary"
            className="border-copilot-primary/30 bg-copilot-primary text-white hover:bg-copilot-primary/90"
            onClick={tryGoResults}
            aria-label="See your bank comparison results"
          >
            See results
            <ChevronRight className="ml-2 h-4 w-4" aria-hidden />
          </Button>
        )}
      </nav>

      <div className="flex flex-wrap gap-2">
        {onSkipToResults ? (
          <Button
            type="button"
            variant="ghost"
            className="text-copilot-text-secondary"
            onClick={trySkip}
            aria-label="Skip remaining steps and view results using your answers so far"
          >
            <ClipboardList className="mr-1.5 h-4 w-4" aria-hidden />
            Skip to results (uses current answers)
          </Button>
        ) : null}
      </div>
    </div>
  );
}
