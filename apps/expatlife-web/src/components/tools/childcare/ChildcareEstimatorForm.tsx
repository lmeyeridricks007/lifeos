"use client";

import { useCallback, type ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { CollapsiblePanel } from "@/components/ui/collapsible-panel";
import { InfoBox } from "@/components/ui/info-box";
import { Input, Select } from "@/components/ui/input";
import { CARE_TYPE_LABELS, CITY_LABELS } from "@/src/lib/tools/childcare/childcareFormatters";
import { childcareIncomeLooksMissing, getChildcareFormChildIssues } from "@/src/lib/tools/childcare/childcareFormValidation";
import { CHILDCARE_TIPS } from "@/src/lib/tools/childcare/childcareTooltips";
import { sanitizeChildcareInput } from "@/src/lib/tools/childcare/childcareValidation";
import { ChildcareTip } from "@/src/components/tools/childcare/ChildcareTip";
import type {
  CareType,
  ChildAgeBand,
  ChildcareChildInput,
  ChildcareCityId,
  ChildcareEstimatorInput,
  ComfortLevel,
  HouseholdType,
  ProviderCostTier,
  RelocationStage,
  WorkingParentsStatus,
} from "@/src/types/tools/childcare";

function careTypeTooltip(careType: CareType): string {
  switch (careType) {
    case "daycare":
      return CHILDCARE_TIPS.careTypeDaycare;
    case "bso":
      return CHILDCARE_TIPS.careTypeBso;
    case "gastouder":
      return CHILDCARE_TIPS.careTypeGastouder;
    default:
      return CHILDCARE_TIPS.careTypeDaycare;
  }
}

const selectClass =
  "mt-1.5 min-h-11 w-full rounded-xl border border-copilot-primary/15 bg-copilot-surface px-3 py-2.5 text-sm text-copilot-text-primary shadow-expatos-sm focus:outline-none focus:ring-2 focus:ring-copilot-primary/30";

const labelClass = "text-sm font-semibold text-copilot-text-primary";

const CITY_OPTIONS: { value: ChildcareCityId; label: string }[] = [
  { value: "amsterdam", label: CITY_LABELS.amsterdam },
  { value: "rotterdam", label: CITY_LABELS.rotterdam },
  { value: "the-hague", label: CITY_LABELS["the-hague"] },
  { value: "utrecht", label: CITY_LABELS.utrecht },
  { value: "eindhoven", label: CITY_LABELS.eindhoven },
  { value: "haarlem", label: CITY_LABELS.haarlem },
  { value: "leiden", label: CITY_LABELS.leiden },
  { value: "delft", label: CITY_LABELS.delft },
  { value: "groningen", label: CITY_LABELS.groningen },
  { value: "tilburg", label: CITY_LABELS.tilburg },
  { value: "breda", label: CITY_LABELS.breda },
  { value: "arnhem-nijmegen", label: CITY_LABELS["arnhem-nijmegen"] },
  { value: "other", label: CITY_LABELS.other },
];

const INCOME_PRESETS = [28_000, 42_000, 58_000, 75_000, 95_000, 120_000, 160_000] as const;

type Props = {
  input: ChildcareEstimatorInput;
  onChange: (next: ChildcareEstimatorInput) => void;
};

function FieldSection({
  title,
  hint,
  children,
}: {
  title: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-copilot-primary/12 bg-copilot-bg-soft/40 p-4 shadow-expatos-sm md:p-5">
      <div className="flex items-center gap-1.5">
        <h3 className="text-sm font-bold uppercase tracking-wide text-copilot-primary">{title}</h3>
        {hint ? <ChildcareTip text={hint} label={title} /> : null}
      </div>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

export function ChildcareEstimatorForm({ input, onChange }: Props) {
  const patch = useCallback(
    (p: Partial<ChildcareEstimatorInput>) => {
      onChange(sanitizeChildcareInput({ ...input, ...p }));
    },
    [input, onChange]
  );

  const patchChild = useCallback(
    (id: string, p: Partial<ChildcareChildInput>) => {
      onChange(
        sanitizeChildcareInput({
          ...input,
          children: input.children.map((c) => (c.id === id ? { ...c, ...p } : c)),
        })
      );
    },
    [input, onChange]
  );

  const addChild = useCallback(() => {
    if (input.children.length >= 6) return;
    const n = input.children.length + 1;
    const template = input.children[input.children.length - 1] ?? input.children[0];
    const copy: ChildcareChildInput = {
      ...template,
      id: `child-${typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : Date.now()}`,
      label: `Child ${n}`,
    };
    onChange(sanitizeChildcareInput({ ...input, children: [...input.children, copy] }));
  }, [input, onChange]);

  const removeChild = useCallback(
    (id: string) => {
      if (input.children.length <= 1) return;
      onChange(sanitizeChildcareInput({ ...input, children: input.children.filter((c) => c.id !== id) }));
    },
    [input, onChange]
  );

  const childIssues = getChildcareFormChildIssues(input.children);
  const incomeMissing = childcareIncomeLooksMissing(input);

  const childCardInner = (child: ChildcareChildInput, idx: number) => {
    const issueForChild = childIssues.filter((i) => i.childId === child.id);
    return (
      <div className="rounded-xl border border-copilot-primary/15 bg-copilot-surface p-4 shadow-expatos-sm">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="font-semibold text-copilot-text-primary">{child.label || `Child ${idx + 1}`}</p>
          {input.children.length > 1 ? (
            <Button
              type="button"
              variant="ghost"
              className="min-h-9 px-3 py-1.5 text-sm text-copilot-text-secondary hover:text-destructive"
              onClick={() => removeChild(child.id)}
            >
              Remove
            </Button>
          ) : null}
        </div>
        {issueForChild.length > 0 ? (
          <ul className="mt-2 space-y-1 rounded-lg border border-amber-200/80 bg-amber-50/90 px-3 py-2 text-xs text-amber-950">
            {issueForChild.map((i) => (
              <li key={i.message}>{i.message}</li>
            ))}
          </ul>
        ) : null}
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div className="sm:col-span-2">
            <label className={labelClass} htmlFor={`${child.id}-label`}>
              Display name
            </label>
            <Input
              id={`${child.id}-label`}
              value={child.label}
              onChange={(e) => patchChild(child.id, { label: e.target.value })}
              className="mt-1.5 border-copilot-primary/15"
            />
          </div>
          <div>
            <label className={labelClass} htmlFor={`${child.id}-age`}>
              Age band
            </label>
            <Select
              id={`${child.id}-age`}
              className={selectClass}
              value={child.ageBand}
              onChange={(e) => patchChild(child.id, { ageBand: e.target.value as ChildAgeBand })}
            >
              <option value="0-1">0–1</option>
              <option value="1-3">1–3</option>
              <option value="4-7">4–7</option>
              <option value="8-12">8–12</option>
            </Select>
          </div>
          <div className="flex items-end gap-2 pb-1">
            <label className="flex cursor-pointer items-center gap-2 text-sm text-copilot-text-primary">
              <input
                type="checkbox"
                checked={child.schoolAge}
                onChange={(e) => patchChild(child.id, { schoolAge: e.target.checked })}
                className="rounded border-copilot-primary/30"
              />
              School-age (informational)
            </label>
          </div>
          <div>
            <label className={labelClass} htmlFor={`${child.id}-care`}>
              <span className="inline-flex items-center gap-0.5">
                Care type
                <ChildcareTip text={careTypeTooltip(child.careType)} label="Care type" />
              </span>
            </label>
            <Select
              id={`${child.id}-care`}
              className={selectClass}
              value={child.careType}
              onChange={(e) => patchChild(child.id, { careType: e.target.value as CareType })}
            >
              {(Object.keys(CARE_TYPE_LABELS) as CareType[]).map((k) => (
                <option key={k} value={k}>
                  {CARE_TYPE_LABELS[k]}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <label className={labelClass} htmlFor={`${child.id}-rate-mode`}>
              Rate input
            </label>
            <Select
              id={`${child.id}-rate-mode`}
              className={selectClass}
              value={child.rateMode}
              onChange={(e) => patchChild(child.id, { rateMode: e.target.value as "model" | "manual" })}
            >
              <option value="model">Model provider rate</option>
              <option value="manual">Quoted hourly rate</option>
            </Select>
          </div>
          {child.rateMode === "manual" ? (
            <div>
              <label className={labelClass} htmlFor={`${child.id}-manual`}>
                € / hour (gross)
              </label>
              <Input
                id={`${child.id}-manual`}
                type="number"
                min={0}
                step={0.01}
                value={child.manualHourlyRateEur ?? ""}
                onChange={(e) =>
                  patchChild(child.id, {
                    manualHourlyRateEur: e.target.value === "" ? null : Number(e.target.value),
                  })
                }
                className="mt-1.5 border-copilot-primary/15"
              />
            </div>
          ) : null}
          <div>
            <label className={labelClass} htmlFor={`${child.id}-hours-mode`}>
              Hours input
            </label>
            <Select
              id={`${child.id}-hours-mode`}
              className={selectClass}
              value={child.hoursInputMode}
              onChange={(e) =>
                patchChild(child.id, { hoursInputMode: e.target.value as "days_per_week" | "hours_per_month" })
              }
            >
              <option value="days_per_week">Days per week</option>
              <option value="hours_per_month">Hours per month</option>
            </Select>
          </div>
          {child.hoursInputMode === "days_per_week" ? (
            <div>
              <label className={labelClass} htmlFor={`${child.id}-days`}>
                Days / week
              </label>
              <Input
                id={`${child.id}-days`}
                type="number"
                min={0}
                max={7}
                step={1}
                value={child.daysPerWeek}
                onChange={(e) => patchChild(child.id, { daysPerWeek: Number(e.target.value) })}
                className="mt-1.5 border-copilot-primary/15"
              />
            </div>
          ) : (
            <div>
              <label className={labelClass} htmlFor={`${child.id}-hm`}>
                Hours / month
              </label>
              <Input
                id={`${child.id}-hm`}
                type="number"
                min={1}
                max={400}
                value={child.hoursPerMonth ?? ""}
                onChange={(e) =>
                  patchChild(child.id, {
                    hoursPerMonth: e.target.value === "" ? null : Number(e.target.value),
                  })
                }
                className="mt-1.5 border-copilot-primary/15"
              />
            </div>
          )}
          <div>
            <label className={labelClass} htmlFor={`${child.id}-sched`}>
              Schedule style
            </label>
            <Select
              id={`${child.id}-sched`}
              className={selectClass}
              value={child.scheduleMode}
              onChange={(e) => patchChild(child.id, { scheduleMode: e.target.value as "full_month" | "school_weeks_only" })}
            >
              <option value="full_month">Full-month style</option>
              <option value="school_weeks_only">School weeks only</option>
            </Select>
          </div>
          <div>
            <label className={labelClass} htmlFor={`${child.id}-reg`}>
              <span className="inline-flex items-center gap-0.5">
                Registration fee (one-off, €)
                <ChildcareTip text={CHILDCARE_TIPS.registrationFee} label="Registration fee" />
              </span>
            </label>
            <Input
              id={`${child.id}-reg`}
              type="number"
              min={0}
              value={child.registrationFeeEur}
              onChange={(e) => patchChild(child.id, { registrationFeeEur: Number(e.target.value) })}
              className="mt-1.5 border-copilot-primary/15"
            />
          </div>
          <div>
            <label className={labelClass} htmlFor={`${child.id}-meals`}>
              Meals / supplies / mo (€)
            </label>
            <Input
              id={`${child.id}-meals`}
              type="number"
              min={0}
              value={child.mealsSuppliesMonthlyEur}
              onChange={(e) => patchChild(child.id, { mealsSuppliesMonthlyEur: Number(e.target.value) })}
              className="mt-1.5 border-copilot-primary/15"
            />
          </div>
          <div>
            <label className={labelClass} htmlFor={`${child.id}-hol`}>
              Holiday care reserve / mo (€)
            </label>
            <Input
              id={`${child.id}-hol`}
              type="number"
              min={0}
              value={child.holidayCareReserveMonthlyEur}
              onChange={(e) => patchChild(child.id, { holidayCareReserveMonthlyEur: Number(e.target.value) })}
              className="mt-1.5 border-copilot-primary/15"
            />
          </div>
          <div>
            <label className={labelClass} htmlFor={`${child.id}-bk`}>
              Backup care reserve / mo (€)
            </label>
            <Input
              id={`${child.id}-bk`}
              type="number"
              min={0}
              value={child.backupCareReserveMonthlyEur}
              onChange={(e) => patchChild(child.id, { backupCareReserveMonthlyEur: Number(e.target.value) })}
              className="mt-1.5 border-copilot-primary/15"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="tool-inputs" className="space-y-6">
      <InfoBox title="What you will see" variant="info" className="shadow-expatos-sm">
        <p className="text-sm text-copilot-text-secondary">
          Fill the inputs below, then click <strong className="text-copilot-text-primary">Calculate</strong>. The results
          section shows <strong>gross provider cost</strong>, a <strong>directional childcare benefit</strong>, and{" "}
          <strong>net out-of-pocket</strong> per month, plus <strong>per-child breakdown</strong>,{" "}
          <strong>scenario comparisons</strong>, and <strong>first-month cash</strong> when you turn on setup toggles. Nothing is
          submitted to a server.
        </p>
      </InfoBox>

      {childIssues.length > 0 ? (
        <InfoBox title="Complete a few fields for clearer results" variant="warn" className="shadow-expatos-sm">
          <p className="text-sm text-copilot-text-secondary">
            You can still click Calculate — the model uses safe fallbacks — but hours and rates make the estimate more reliable.
          </p>
        </InfoBox>
      ) : null}

      <FieldSection title="Household context" hint={CHILDCARE_TIPS.householdContext}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <label className={labelClass} htmlFor="cc-tax-year">
              Tax year
            </label>
            <Select
              id="cc-tax-year"
              className={selectClass}
              value={String(input.taxYear)}
              onChange={(e) => patch({ taxYear: Number(e.target.value) as 2026 | 2027 })}
            >
              <option value="2026">2026</option>
              <option value="2027">2027 (placeholder caps)</option>
            </Select>
          </div>
          <div>
            <label className={labelClass} htmlFor="cc-city">
              City
            </label>
            <Select
              id="cc-city"
              className={selectClass}
              value={input.city}
              onChange={(e) => patch({ city: e.target.value as ChildcareCityId })}
            >
              {CITY_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <label className={labelClass} htmlFor="cc-household">
              Household type
            </label>
            <Select
              id="cc-household"
              className={selectClass}
              value={input.householdType}
              onChange={(e) => patch({ householdType: e.target.value as HouseholdType })}
            >
              <option value="couple">Couple</option>
              <option value="single">Single parent</option>
            </Select>
          </div>
          <div>
            <label className={labelClass} htmlFor="cc-relocation">
              Relocation stage
            </label>
            <Select
              id="cc-relocation"
              className={selectClass}
              value={input.relocationStage}
              onChange={(e) => patch({ relocationStage: e.target.value as RelocationStage })}
            >
              <option value="researching">Researching</option>
              <option value="moving_soon">Moving soon</option>
              <option value="in_nl">Already in NL</option>
            </Select>
          </div>
          <div>
            <label className={labelClass} htmlFor="cc-tier">
              Model provider rate tier
            </label>
            <Select
              id="cc-tier"
              className={selectClass}
              value={input.providerCostTier}
              onChange={(e) => patch({ providerCostTier: e.target.value as ProviderCostTier })}
            >
              <option value="low">Low anchor</option>
              <option value="standard">Standard (default)</option>
              <option value="premium">Premium anchor</option>
            </Select>
          </div>
        </div>
      </FieldSection>

      <FieldSection title="Childcare setup per child">
        <p className="text-sm text-copilot-text-secondary">
          Use a quoted hourly rate when you have one; otherwise the model uses your city and tier. With several children, each
          card collapses to keep the form scannable.
        </p>
        <div className="space-y-3">
          {input.children.map((child, idx) => {
            const hoursSummary =
              child.hoursInputMode === "days_per_week"
                ? `${child.daysPerWeek}d/wk`
                : `${child.hoursPerMonth ?? "—"}h/mo`;
            const panelTitle = `${child.label || `Child ${idx + 1}`} · ${CARE_TYPE_LABELS[child.careType]} · ${hoursSummary}`;
            if (input.children.length > 1) {
              return (
                <CollapsiblePanel
                  key={child.id}
                  title={panelTitle}
                  defaultOpen={idx === 0}
                  titleClassName="text-sm font-semibold text-copilot-text-primary"
                  triggerClassName="cursor-pointer rounded-t-xl bg-copilot-bg-soft/80 text-copilot-text-secondary hover:bg-copilot-bg-soft hover:text-copilot-text-primary"
                  className="border-copilot-primary/12 bg-copilot-surface/60"
                >
                  {childCardInner(child, idx)}
                </CollapsiblePanel>
              );
            }
            return <div key={child.id}>{childCardInner(child, idx)}</div>;
          })}
        </div>
        <Button
          type="button"
          variant="secondary"
          className="rounded-xl border-copilot-primary/25"
          onClick={addChild}
          disabled={input.children.length >= 6}
        >
          Add child
        </Button>
      </FieldSection>

      <FieldSection title="Childcare benefit planning" hint={CHILDCARE_TIPS.estimatedBenefit}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="sm:col-span-2">
            <label className={labelClass} htmlFor="cc-income">
              <span className="inline-flex items-center gap-0.5">
                Annual household income (€, gross planning figure)
                <ChildcareTip text={CHILDCARE_TIPS.estimatedBenefit} label="Income and benefit estimate" />
              </span>
            </label>
            <Input
              id="cc-income"
              type="number"
              min={0}
              value={input.benefit.annualHouseholdIncomeEur}
              onChange={(e) =>
                patch({ benefit: { ...input.benefit, annualHouseholdIncomeEur: Number(e.target.value) } })
              }
              className="mt-1.5 border-copilot-primary/15"
              aria-invalid={incomeMissing}
            />
            {incomeMissing ? (
              <p className="mt-2 text-xs text-amber-900">
                No income entered — the model uses a conservative default so the{" "}
                <strong>benefit estimate is rough and usually too low on subsidy</strong>. Add your real household income for a
                tighter planning number.
              </p>
            ) : null}
            <p className="mt-2 text-xs text-copilot-text-secondary">Quick income bands (approximate):</p>
            <div className="mt-1.5 flex flex-wrap gap-2">
              {INCOME_PRESETS.map((v) => (
                <Button
                  key={v}
                  type="button"
                  variant={input.benefit.annualHouseholdIncomeEur === v ? "primary" : "secondary"}
                  className="h-8 min-h-8 rounded-lg px-3 py-1 text-xs"
                  onClick={() => patch({ benefit: { ...input.benefit, annualHouseholdIncomeEur: v } })}
                >
                  €{(v / 1000).toFixed(0)}k
                </Button>
              ))}
            </div>
          </div>
          <div>
            <label className={labelClass} htmlFor="cc-wc">
              Working / studying parents (count)
            </label>
            <Select
              id="cc-wc"
              className={selectClass}
              value={String(input.benefit.workingParentsCount)}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                patch({
                  benefit: { ...input.benefit, workingParentsCount: Number(e.target.value) as 1 | 2 },
                })
              }
            >
              <option value="2">Two</option>
              <option value="1">One</option>
            </Select>
          </div>
          <div>
            <label className={labelClass} htmlFor="cc-ws">
              Work / study pattern
            </label>
            <Select
              id="cc-ws"
              className={selectClass}
              value={input.benefit.workingParentsStatus}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                patch({ benefit: { ...input.benefit, workingParentsStatus: e.target.value as WorkingParentsStatus } })
              }
            >
              <option value="both">Both working / studying</option>
              <option value="one">One working / studying</option>
              <option value="mixed">Mixed / not sure</option>
            </Select>
          </div>
          <div className="flex items-end pb-1 sm:col-span-2">
            <label className="flex cursor-pointer items-start gap-2 text-sm text-copilot-text-primary">
              <input
                type="checkbox"
                checked={input.benefit.useOfficialCapAwareEstimate}
                onChange={(e) =>
                  patch({ benefit: { ...input.benefit, useOfficialCapAwareEstimate: e.target.checked } })
                }
                className="mt-1 rounded border-copilot-primary/30"
              />
              <span>
                <span className="inline-flex flex-wrap items-center gap-1">
                  Use official-cap aware estimate (recommended)
                  <ChildcareTip text={CHILDCARE_TIPS.officialCap} label="Official reimbursable cap" />
                </span>
                <span className="mt-0.5 block text-xs font-normal text-copilot-text-secondary">
                  Reimbursable hours are capped per child per month; hourly subsidy uses the official max for your care type when
                  this is on.
                </span>
              </span>
            </label>
          </div>
        </div>
      </FieldSection>

      <FieldSection title="Setup / first-month planning" hint={CHILDCARE_TIPS.firstMonthCash}>
        <p className="text-sm text-copilot-text-secondary">
          Turn on the lines that match your contract. First-month cash is often higher than steady-state monthly net because of
          one-offs and invoice timing.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {(
            [
              ["includeRegistrationFees", "Registration / sign-up fees", CHILDCARE_TIPS.registrationFee],
              ["includeFirstInvoiceTimingRisk", "First-invoice timing buffer", CHILDCARE_TIPS.firstInvoiceTiming],
              ["includeAdvanceDeposit", "Deposit / prepayment placeholder", CHILDCARE_TIPS.advanceDeposit],
              ["includeSchoolHolidayReserve", "School holiday reserve (global)", CHILDCARE_TIPS.schoolHolidayReserve],
              ["includeEmergencyBackupReserve", "Emergency backup reserve (global)", CHILDCARE_TIPS.emergencyBackup],
              ["includePickupTransportReserve", "Pickup / transport reserve (global)", CHILDCARE_TIPS.pickupTransport],
            ] as const
          ).map(([key, lab, tip]) => (
            <label
              key={key}
              className="flex cursor-pointer items-start gap-2 text-sm text-copilot-text-primary"
            >
              <input
                type="checkbox"
                checked={input.setupFirstMonth[key]}
                onChange={(e) => patch({ setupFirstMonth: { ...input.setupFirstMonth, [key]: e.target.checked } })}
                className="mt-1 rounded border-copilot-primary/30"
              />
              <span className="inline-flex flex-wrap items-center gap-1">
                {lab}
                <ChildcareTip text={tip} label={lab} />
              </span>
            </label>
          ))}
        </div>
      </FieldSection>

      <FieldSection
        title="Family budget / work decision (optional)"
        hint="Net household income is after-tax cash for budget share hints — not sent to any server."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <label className={labelClass} htmlFor="cc-net">
              Household net income / month (€)
            </label>
            <Input
              id="cc-net"
              type="number"
              min={0}
              placeholder="e.g. 5200"
              value={input.workDecision.householdNetMonthlyEur ?? ""}
              onChange={(e) =>
                patch({
                  workDecision: {
                    ...input.workDecision,
                    householdNetMonthlyEur: e.target.value === "" ? null : Number(e.target.value),
                  },
                })
              }
              className="mt-1.5 border-copilot-primary/15"
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="cc-comfort">
              Desired comfort level
            </label>
            <Select
              id="cc-comfort"
              className={selectClass}
              value={input.workDecision.comfortLevel}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                patch({
                  workDecision: { ...input.workDecision, comfortLevel: e.target.value as ComfortLevel },
                })
              }
            >
              <option value="essential">Essential</option>
              <option value="balanced">Balanced</option>
              <option value="comfortable">Comfortable</option>
            </Select>
          </div>
          <div className="flex items-end pb-1">
            <label className="flex cursor-pointer items-center gap-2 text-sm text-copilot-text-primary">
              <input
                type="checkbox"
                checked={input.workDecision.secondParentReturningToWork}
                onChange={(e) =>
                  patch({
                    workDecision: { ...input.workDecision, secondParentReturningToWork: e.target.checked },
                  })
                }
                className="rounded border-copilot-primary/30"
              />
              Second parent increasing work soon
            </label>
          </div>
        </div>
      </FieldSection>

      <div className="flex flex-wrap gap-3">
        <Button
          type="button"
          variant="secondary"
          className="rounded-xl border-copilot-primary/25"
          onClick={() => onChange(sanitizeChildcareInput(undefined))}
        >
          Reset to defaults
        </Button>
      </div>
    </div>
  );
}
