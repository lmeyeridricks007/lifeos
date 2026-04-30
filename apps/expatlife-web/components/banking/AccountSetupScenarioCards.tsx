import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

const defaultSectionLabels = {
  setup: "Recommended setup",
  why: "Why",
  watchOut: "Watch-out",
} as const;

/** Plain-text body: paragraphs after blank lines, else bullet list if split with " · ", else one paragraph. */
function DigestText({ text, tone = "primary" }: { text: string; tone?: "primary" | "muted" }) {
  const t = text.trim();
  if (!t) return null;
  const toneClass =
    tone === "primary" ? "text-sm font-medium leading-relaxed text-foreground" : "text-sm leading-relaxed text-foreground-muted";

  if (t.includes("\n\n")) {
    const paras = t
      .split(/\n\n+/)
      .map((p) => p.trim())
      .filter(Boolean);
    return (
      <div className="space-y-2">
        {paras.map((p) => (
          <p key={p} className={toneClass}>
            {p}
          </p>
        ))}
      </div>
    );
  }
  if (t.includes(" · ")) {
    const items = t
      .split(" · ")
      .map((s) => s.trim())
      .filter(Boolean);
    return (
      <ul className={cn("list-disc space-y-1.5 pl-4 marker:text-brand", toneClass)} role="list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return <p className={toneClass}>{t}</p>;
}

export type AccountSetupScenarioCardVm = {
  readonly id: string;
  readonly title: string;
  readonly recommendedSetup: string;
  readonly why: string;
  /** Optional — hidden when empty. */
  readonly watchOut?: string;
  /** Optional editorial follow-up before CTAs. */
  readonly nextStep?: string;
  /** Primary CTA (required when you want a button; omit only for link-only cards). */
  readonly cta?: { readonly href: string; readonly label: string };
  readonly moreLinks?: readonly { readonly href: string; readonly label: string }[];
};

/**
 * Scenario cards for account-setup flows — matches banking guide card density and typography.
 */
export function AccountSetupScenarioCards({
  scenarios,
  className,
  /** `dense`: 2×N grid (readable for four “How payments work” quick cards). `default`: 2 cols, same at lg. */
  columns = "default",
  /** Override micro-labels (e.g. “Why it works” instead of “Why”). */
  labels: labelsProp,
}: {
  scenarios: readonly AccountSetupScenarioCardVm[];
  className?: string;
  columns?: "default" | "dense";
  labels?: Partial<{ setup: string; why: string; watchOut: string }>;
}) {
  const labels = { ...defaultSectionLabels, ...labelsProp };
  const grid =
    columns === "dense"
      ? "grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 lg:gap-5"
      : "grid min-w-0 gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-2 lg:gap-4";

  return (
    <div className={cn("min-w-0 overflow-x-hidden", grid, className)} role="list">
      {scenarios.map((s) => (
        <article
          key={s.id}
          role="listitem"
          className={cn(
            "relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-5",
            movingNlCardMicroLiftClass
          )}
        >
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <h3 className="text-pretty text-sm font-semibold tracking-tight text-foreground">{s.title}</h3>
          <p className={cn(kickerAccent, "mt-2.5")}>{labels.setup}</p>
          <div className="mt-1">
            <DigestText text={s.recommendedSetup} tone="primary" />
          </div>
          <p className={cn(kicker, "mt-3")}>{labels.why}</p>
          <div className="mt-1">
            <DigestText text={s.why} tone="muted" />
          </div>
          {s.watchOut?.trim() ? (
            <>
              <p className={cn(kicker, "mt-3 text-amber-900/80")}>{labels.watchOut}</p>
              <div className="mt-1">
                <DigestText text={s.watchOut} tone="muted" />
              </div>
            </>
          ) : null}
          {s.nextStep?.trim() ? (
            <>
              <p className={cn(kicker, "mt-3")}>Next step</p>
              <div className="mt-1">
                <DigestText text={s.nextStep} tone="muted" />
              </div>
            </>
          ) : null}
          {s.cta || s.moreLinks?.length ? (
            <div className="mt-4 flex min-h-0 flex-1 flex-col gap-2 border-t border-border/50 pt-3 sm:mt-5 sm:pt-4">
              {s.cta ? (
                <Link href={s.cta.href} className={primaryCtaClass}>
                  {s.cta.label}
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                </Link>
              ) : null}
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
          ) : null}
        </article>
      ))}
    </div>
  );
}
