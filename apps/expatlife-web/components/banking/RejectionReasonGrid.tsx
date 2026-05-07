import Link from "next/link";
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

export type RejectionReasonGridItem = {
  id: string;
  title: string;
  plainEnglishMeaning: string;
  whatToCheck: readonly string[];
  nextAction: string;
  relatedLinks?: readonly string[];
};

export type RejectionReasonLinkEntry = { href: string; label: string };

const DEFAULT_RESOLVE_LINKS = (): readonly RejectionReasonLinkEntry[] => [];

/** Top accent rails — match {@link FraudTypeGrid} `onDarkBand` / {@link StageCards} `copilotDark`. */
const ON_DARK_BAND_CARD_RAIL = [
  "from-blue-500 via-copilot-accent to-cyan-400",
  "from-cyan-400 via-blue-500 to-copilot-primary",
  "from-copilot-primary to-copilot-accent",
] as const;

const onDarkBandLinkClass =
  "text-sm font-semibold text-copilot-primary underline-offset-2 transition-colors hover:text-copilot-primary-strong hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copilot-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-copilot-surface rounded-sm";

/**
 * Rejection / delay / onboarding friction reasons — same visual shell as {@link FraudTypeGrid}.
 */
export function RejectionReasonGrid({
  reasons,
  className,
  chipLabel = "Pattern",
  resolveLinkEntries = DEFAULT_RESOLVE_LINKS,
  variant = "default",
}: {
  reasons: readonly RejectionReasonGridItem[];
  className?: string;
  chipLabel?: string;
  resolveLinkEntries?: (relatedLinks: readonly string[] | undefined) => readonly RejectionReasonLinkEntry[];
  /** `onDarkBand` — elevated light tiles inside {@link PillarDarkStagesBand} (banking security parity). */
  variant?: "default" | "onDarkBand";
}) {
  if (!reasons.length) return null;

  const onDarkBand = variant === "onDarkBand";

  return (
    <div
      className={cn(
        "grid min-w-0 grid-cols-1 overflow-x-hidden sm:grid-cols-2",
        onDarkBand ? "gap-4 sm:gap-5 md:gap-6" : "gap-3",
        className
      )}
    >
      {reasons.map((c, i) => {
        const links = resolveLinkEntries(c.relatedLinks);
        return (
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
                    ? "inline-flex w-fit rounded-full border border-slate-200/90 bg-copilot-bg-soft/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.13em] text-copilot-text-muted ring-1 ring-slate-900/[0.04]"
                    : BANKING_VISUAL_CARD_CHIP_CLASS
                )}
              >
                {chipLabel}
              </span>
              <h3
                className={cn(
                  "mt-2 break-words text-base font-semibold leading-snug tracking-tight",
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
                  <span className={cn("font-medium", onDarkBand ? "text-copilot-text-primary" : "text-foreground")}>What it may mean:</span>{" "}
                  {c.plainEnglishMeaning}
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
                      "text-[10px] font-semibold uppercase tracking-[0.12em]",
                      onDarkBand ? "text-sky-900" : "text-brand-strong"
                    )}
                  >
                    What to check
                  </p>
                  <ul
                    className={cn(
                      "mt-1.5 list-disc space-y-1 pl-4 text-sm sm:space-y-1.5",
                      onDarkBand ? "text-slate-800 marker:text-sky-700" : "marker:text-brand"
                    )}
                    role="list"
                  >
                    {c.whatToCheck.map((w) => (
                      <li key={w} className="break-words">
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
                {onDarkBand ? (
                  <div className="relative isolate rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-3 text-slate-800 shadow-sm ring-1 ring-emerald-900/10 sm:px-4 sm:py-3.5 border-l-[3px] border-l-emerald-600">
                    <p className="text-sm font-medium leading-relaxed sm:text-[0.9375rem] sm:leading-relaxed">
                      <span className="font-medium text-emerald-950">Next step:</span> {c.nextAction}
                    </p>
                  </div>
                ) : (
                  <p className="break-words">
                    <span className="font-medium text-foreground">Next step:</span> {c.nextAction}
                  </p>
                )}
                {links.length > 0 ? (
                  <div className="flex min-w-0 flex-col gap-1 pt-1 sm:flex-row sm:flex-wrap sm:gap-x-3 sm:gap-y-1">
                    {links.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className={cn(onDarkBand ? onDarkBandLinkClass : bankingGuideTertiaryLinkClass, "min-w-0 break-words")}
                      >
                        {l.label} →
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
