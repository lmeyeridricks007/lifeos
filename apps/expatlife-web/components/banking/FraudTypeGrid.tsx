import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/cn";
import { transitionSurface } from "@/lib/ui/interaction";
import {
  movingNlCardMicroLiftClass,
  movingNlCardShadowHoverClass,
  movingNlSignatureGradientClass,
} from "@/lib/ui/moving-nl-pillar-identity";
import {
  BANKING_VISUAL_CARD_BODY_CLASS,
  BANKING_VISUAL_CARD_CHIP_CLASS,
  BANKING_VISUAL_CARD_SHELL_CLASS,
  bankingGuideTertiaryLinkClass,
} from "@/components/banking/bankingPageUi";
import type { BankingFraudType } from "@/src/data/banking/bankingSafety";

/** Top accent rails — match {@link StageCards} `copilotDark` tiles on {@link PillarDarkStagesBand}. */
const ON_DARK_BAND_CARD_RAIL = [
  "from-blue-500 via-copilot-accent to-cyan-400",
  "from-cyan-400 via-blue-500 to-copilot-primary",
  "from-copilot-primary to-copilot-accent",
] as const;

const onDarkBandLinkClass =
  "text-sm font-bold text-copilot-primary underline-offset-2 transition-colors hover:text-copilot-primary-strong hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copilot-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-copilot-surface rounded-sm";

const FRAUD_TYPE_CHIP = "Pattern";

const DEFAULT_LABELS = {
  chip: FRAUD_TYPE_CHIP,
  whatItMeans: "What it can look like:",
  checksTitle: "Warning signs",
  action: "Safer action:",
} as const;

/** Optional overrides for {@link FraudTypeGrid} row labels (e.g. onboarding-friction guides). */
export type FraudTypeGridLabels = {
  chip?: string;
  whatItMeans?: string;
  checksTitle?: string;
  action?: string;
};

/**
 * Fraud / scam type cards — banking visual shell, same family as {@link SafeBankingHabits}.
 * Pass `labels` to reuse the same grid for other “pattern → checks → action” topics (e.g. account onboarding).
 */
export function FraudTypeGrid({
  types,
  className,
  chipLabel = FRAUD_TYPE_CHIP,
  labels,
  variant = "default",
}: {
  types: readonly BankingFraudType[];
  className?: string;
  /** @deprecated prefer `labels.chip` — kept for backward compatibility */
  chipLabel?: string;
  labels?: FraudTypeGridLabels;
  /** `onDarkBand` — elevated light tiles inside {@link PillarDarkStagesBand} (moving hub parity). */
  variant?: "default" | "onDarkBand";
}) {
  if (!types.length) return null;

  const L = { ...DEFAULT_LABELS, ...labels, chip: labels?.chip ?? chipLabel };
  const onDarkBand = variant === "onDarkBand";

  return (
    <div
      className={cn(
        "grid min-w-0 grid-cols-1 sm:grid-cols-2",
        onDarkBand ? "gap-4 sm:gap-5 md:gap-6" : "gap-3",
        className
      )}
    >
      {types.map((c, i) => (
        <article
          key={c.id}
          className={cn(
            "relative flex min-h-0 min-w-0 max-w-full flex-col overflow-hidden rounded-2xl border-0",
            onDarkBand
              ? cn(
                  transitionSurface,
                  "bg-copilot-surface text-copilot-text-primary shadow-[0_16px_40px_rgba(0,0,0,0.28),0_4px_12px_rgba(0,0,0,0.12)] ring-1 ring-white/30",
                  movingNlCardShadowHoverClass,
                  movingNlCardMicroLiftClass
                )
              : cn(BANKING_VISUAL_CARD_SHELL_CLASS, movingNlCardMicroLiftClass)
          )}
        >
          <div
            className={cn(
              "h-1.5 w-full shrink-0 rounded-t-2xl bg-gradient-to-r opacity-100",
              onDarkBand ? ON_DARK_BAND_CARD_RAIL[i % ON_DARK_BAND_CARD_RAIL.length] : movingNlSignatureGradientClass
            )}
            aria-hidden
          />
          <div className={cn(onDarkBand ? "flex flex-1 flex-col p-5 sm:p-6" : BANKING_VISUAL_CARD_BODY_CLASS, "min-w-0")}>
            <span
              className={cn(
                onDarkBand
                  ? "inline-flex w-fit rounded-full border border-slate-200/90 bg-copilot-bg-soft/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.13em] text-copilot-text-muted ring-1 ring-slate-900/[0.04]"
                  : BANKING_VISUAL_CARD_CHIP_CLASS
              )}
            >
              {L.chip}
            </span>
            <h3
              className={cn(
                "mt-2 break-words text-base font-bold leading-snug tracking-tight",
                onDarkBand ? "text-copilot-text-primary" : "text-foreground"
              )}
            >
              {c.title}
            </h3>
            <div
              className={cn(
                "mt-3 min-w-0 space-y-3 text-sm leading-relaxed",
                onDarkBand ? "text-copilot-text-secondary" : "text-foreground-muted"
              )}
            >
              <p className="break-words">
                <span className={cn("font-semibold", onDarkBand ? "text-copilot-text-primary" : "text-foreground")}>{L.whatItMeans}</span>{" "}
                {c.whatItLooksLike}
              </p>
              <div
                className={cn(
                  "rounded-lg px-3 py-2.5 sm:px-3.5 sm:py-3",
                  onDarkBand
                    ? "border border-sky-200/90 bg-sky-50 ring-1 ring-sky-900/[0.06]"
                    : "border border-brand/15 bg-brand/[0.04] ring-1 ring-brand/10"
                )}
              >
                <p
                  className={cn(
                    "text-[10px] font-bold uppercase tracking-[0.12em]",
                    onDarkBand ? "text-sky-900" : "text-brand-strong"
                  )}
                >
                  {L.checksTitle}
                </p>
                <ul
                  className={cn(
                    "mt-1.5 list-disc space-y-1 pl-4 text-sm sm:space-y-1.5",
                    onDarkBand ? "text-slate-800 marker:text-sky-700" : "marker:text-brand"
                  )}
                  role="list"
                >
                  {c.warningSigns.map((w) => (
                    <li key={w} className="break-words">
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={cn(
                  "relative isolate flex gap-3 rounded-lg border px-3 py-3 shadow-sm sm:gap-3.5 sm:px-4 sm:py-3.5",
                  onDarkBand
                    ? "border-emerald-200 bg-emerald-50 text-slate-800 ring-1 ring-emerald-900/10 border-l-[3px] border-l-emerald-600"
                    : cn(
                        "border-emerald-200/80 bg-gradient-to-b from-emerald-50/95 to-emerald-50/50 ring-1 ring-emerald-900/[0.05]",
                        "border-l-[3px] border-l-emerald-600/75"
                      )
                )}
              >
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" strokeWidth={2} aria-hidden />
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-900">{L.action.replace(/:\s*$/, "")}</p>
                  <p
                    className={cn(
                      "mt-2 text-sm font-medium leading-relaxed sm:text-[0.9375rem] sm:leading-relaxed",
                      onDarkBand ? "text-slate-800" : "text-foreground"
                    )}
                  >
                    {c.saferAction}
                  </p>
                </div>
              </div>
              {c.relatedLinks && c.relatedLinks.length > 0 ? (
                <div className="flex flex-wrap gap-x-3 gap-y-1 pt-1">
                  {c.relatedLinks.map((l) => (
                    <Link key={l.href} href={l.href} className={onDarkBand ? onDarkBandLinkClass : bankingGuideTertiaryLinkClass}>
                      {l.label} →
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
