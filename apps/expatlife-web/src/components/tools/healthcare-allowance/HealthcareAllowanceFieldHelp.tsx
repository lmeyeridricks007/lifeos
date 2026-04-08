"use client";

import { HelpTooltip } from "@/src/components/tools/payslip-decoder/HelpTooltip";

export const HA_FIELD_HELP = {
  age:
    "The allowance estimate in this tool is aimed at adults. Under 18 you are normally outside the zorgtoeslag path we model here — confirm exceptions with Dienst Toeslagen if unsure.",
  toeslagpartner:
    "A toeslagpartner is someone Dienst Toeslagen treats as your partner for allowances — often a spouse or registered partner, but official rules decide. When included here, we use the higher combined income and asset ceilings.",
  annualIncome:
    "Enter your best estimate of annual income this tool should test (often gross employment income before the allowance test). Official toeslagen use their own income definition — this is planning-only.",
  assetsJan1:
    "The asset test looks at what you held on 1 January (savings, investments, etc.), not your monthly spending money. Amounts are combined with your partner’s when a toeslagpartner is included.",
  premium:
    "We compare your estimated allowance to a gross basic premium — either the site’s average planning figure or a premium you type in. Your real invoice can differ by insurer and year.",
  monthlyVsAnnual:
    "Monthly allowance is the planning rate for a full benefit month. Annual rows multiply by 12 (full year) or by the insured months you set (partial year).",
  partialYear:
    "If you were not insured all year, we scale the annual allowance total by the number of months you select (or we derive from your start month). Months are capped at 12.",
  estimatedVsOfficial:
    "This number is an indicative estimate from our thresholds and taper — not Dienst Toeslagen’s calculator and not a promise of payment. Only the government can confirm your award.",
} as const;

export function HaFieldHelp({ label, helpKey }: { label: string; helpKey: keyof typeof HA_FIELD_HELP }) {
  return (
    <HelpTooltip label={label}>
      <span className="block text-copilot-text-primary">{HA_FIELD_HELP[helpKey]}</span>
    </HelpTooltip>
  );
}
