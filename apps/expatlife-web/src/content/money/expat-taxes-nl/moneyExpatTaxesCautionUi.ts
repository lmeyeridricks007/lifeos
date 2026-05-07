/**
 * Shared caution chip copy + styles for expat taxes scenario picker and early-signal cards.
 */

export type MoneyExpatTaxesCautionTier = "simple" | "worth_checking" | "consider_support";

export const moneyExpatTaxesCautionChip: Record<
  MoneyExpatTaxesCautionTier,
  { readonly label: string; readonly chipClass: string }
> = {
  simple: {
    label: "Usually straightforward",
    chipClass: "border-emerald-200/80 bg-emerald-50/90 text-emerald-950",
  },
  worth_checking: {
    label: "Worth a closer look",
    chipClass: "border-amber-200/80 bg-amber-50/90 text-amber-950",
  },
  consider_support: {
    label: "May need paid help",
    chipClass: "border-slate-200 bg-slate-50 text-slate-800",
  },
} as const;
