import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { AccountSetupScenarioCardVm } from "@/components/banking/AccountSetupScenarioCards";
import { BoldParagraph } from "@/components/content/PillarContentBlocks";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import { activeBrightnessPress, transitionInteractive } from "@/lib/ui/interaction";

const kicker = "text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted";
const kickerAccent = "text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong";

const primaryCtaClass = cn(
  "inline-flex min-h-[44px] w-full max-w-full items-center justify-center gap-2 rounded-xl border border-brand-strong/25 bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas sm:w-auto",
  transitionInteractive,
  activeBrightnessPress
);

const tertiaryLinkClass =
  "text-xs font-semibold text-link underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 rounded-sm";

export type PaymentScenarioCardItem = {
  readonly id: string;
  readonly title: string;
  readonly usualMethod: string;
  readonly whatToWatch?: string;
  readonly watchOut?: string;
  readonly nextStep?: string;
  readonly cta: { readonly href: string; readonly label: string };
  readonly moreLinks?: readonly { readonly href: string; readonly label: string }[];
};

const defaultLabels = {
  usualMethod: "Usual payment method",
  whatToWatch: "What to watch",
  watchOut: "Watch-out",
} as const;

/** Map editorial scenario VMs into the slimmer payment scenario card shape. */
export function accountSetupScenarioToPaymentScenario(s: AccountSetupScenarioCardVm): PaymentScenarioCardItem {
  if (!s.cta) {
    throw new Error(`PaymentScenarioCards: scenario "${s.id}" is missing a primary CTA.`);
  }
  return {
    id: s.id,
    title: s.title,
    usualMethod: s.recommendedSetup,
    whatToWatch: s.why,
    watchOut: s.watchOut,
    nextStep: s.nextStep,
    cta: s.cta,
    moreLinks: s.moreLinks,
  };
}

/**
 * Scenario cards focused on **usual method**, **watch-outs**, and a **primary CTA** — same shell as {@link AccountSetupScenarioCards}.
 */
export function PaymentScenarioCards({
  scenarios,
  className,
  columns = "default",
  labels: labelsProp,
}: {
  scenarios: readonly PaymentScenarioCardItem[];
  className?: string;
  columns?: "default" | "dense";
  labels?: Partial<{ usualMethod: string; whatToWatch: string; watchOut: string }>;
}) {
  const labels = { ...defaultLabels, ...labelsProp };
  const grid =
    columns === "dense"
      ? "grid min-w-0 gap-2 sm:grid-cols-2 sm:gap-2.5 lg:grid-cols-3 lg:gap-3"
      : "grid min-w-0 gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-2 lg:gap-4";

  return (
    <div className={cn("min-w-0 overflow-x-hidden", grid, className)} role="list">
      {scenarios.map((s) => (
        <article
          key={s.id}
          role="listitem"
          className={cn(
            "relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-surface-raised p-3.5 shadow-card ring-1 ring-border/10 sm:p-5",
            movingNlCardMicroLiftClass
          )}
        >
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <h3 className="text-balance text-sm font-bold tracking-tight text-foreground">{s.title}</h3>

          <p className={cn(kickerAccent, "mt-3")}>{labels.usualMethod}</p>
          <BoldParagraph
            text={s.usualMethod}
            className="mt-1 text-sm font-semibold text-foreground [&_strong]:font-semibold [&_strong]:text-foreground"
          />

          {s.whatToWatch?.trim() ? (
            <>
              <p className={cn(kicker, "mt-3")}>{labels.whatToWatch}</p>
              <BoldParagraph text={s.whatToWatch} className="mt-1 text-sm text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground" />
            </>
          ) : null}

          {s.watchOut?.trim() ? (
            <>
              <p className={cn(kicker, "mt-3 text-amber-900/80")}>{labels.watchOut}</p>
              <BoldParagraph
                text={s.watchOut}
                className="mt-1 text-sm text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
              />
            </>
          ) : null}

          {s.nextStep?.trim() ? (
            <>
              <p className={cn(kicker, "mt-3")}>Next step</p>
              <BoldParagraph
                text={s.nextStep}
                className="mt-1 text-sm text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
              />
            </>
          ) : null}

          <div className="mt-4 flex min-h-0 flex-1 flex-col gap-2 border-t border-border/50 pt-4">
            <Link href={s.cta.href} className={primaryCtaClass}>
              {s.cta.label}
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
            </Link>
            {s.moreLinks?.length ? (
              <ul className="list-none space-y-1.5 p-0" aria-label="More links">
                {s.moreLinks.map((l) => (
                  <li key={l.href + l.label}>
                    <Link href={l.href} className={cn(tertiaryLinkClass, "inline-flex min-h-[40px] items-center")}>
                      {l.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
