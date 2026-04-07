import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";

export type QuickAnswerCta = {
  label: string;
  href: string;
};

export type QuickAnswerProps = Omit<ComponentPropsWithoutRef<"section">, "children"> & {
  /** Optional heading (e.g. “At a glance”). Rendered as `h2` when present. */
  title?: string;
  /** One-line summary of what the page covers or concludes. */
  summary?: string;
  /** Short labels for who this applies to (shown as compact chips). */
  appliesTo?: string[];
  /** Typical timeline in plain language (e.g. “8–12 weeks”). */
  timeline?: string;
  /** Cost range or budget note in plain language. */
  costRange?: string;
  /** Short ordered steps to start (2–4 items work best). */
  firstSteps?: string[];
  /** Disclaimer or methodology note (smaller, secondary text). */
  note?: string;
  primaryCta?: QuickAnswerCta;
  secondaryCta?: QuickAnswerCta;
  /**
   * Disambiguate `id` when multiple `QuickAnswer` blocks share the same `title` on one page.
   * Defaults to a slug from `title` (omit when no title).
   */
  instanceId?: string;
};

function slugify(input: string): string {
  const s = input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return s.length > 0 ? s.slice(0, 48) : "summary";
}

function hasRenderableContent(props: Pick<
  QuickAnswerProps,
  | "title"
  | "summary"
  | "appliesTo"
  | "timeline"
  | "costRange"
  | "firstSteps"
  | "note"
  | "primaryCta"
  | "secondaryCta"
>): boolean {
  const {
    title,
    summary,
    appliesTo,
    timeline,
    costRange,
    firstSteps,
    note,
    primaryCta,
    secondaryCta,
  } = props;
  const hasList =
    (appliesTo?.some((s) => s.trim().length > 0) ?? false) ||
    (firstSteps?.some((s) => s.trim().length > 0) ?? false);
  const primaryOk =
    (primaryCta?.label?.trim() ?? "") && (primaryCta?.href?.trim() ?? "");
  const secondaryOk =
    (secondaryCta?.label?.trim() ?? "") && (secondaryCta?.href?.trim() ?? "");
  return Boolean(
    (title?.trim() ?? "") ||
      (summary?.trim() ?? "") ||
      hasList ||
      (timeline?.trim() ?? "") ||
      (costRange?.trim() ?? "") ||
      (note?.trim() ?? "") ||
      primaryOk ||
      secondaryOk
  );
}

/**
 * Compact “quick answer” block for the top of long-form pages (guides, services, cities, tools).
 * Server component; renders nothing when no meaningful fields are set.
 *
 * @example
 * ```tsx
 * import { QuickAnswer } from "@/components/page/quick-answer";
 *
 * <QuickAnswer
 *   title="At a glance"
 *   summary="Plan the highly skilled migrant route before you sign a contract."
 *   appliesTo={["Non-EU job seekers", "Employer sponsorship"]}
 *   timeline="Roughly 6–14 weeks from job offer to entry"
 *   costRange="Employer fees + IND application (check current IND schedule)"
 *   firstSteps={["Confirm salary meets threshold", "Ask HR for recognised sponsor status"]}
 *   note="Figures are indicative; confirm with IND and your employer."
 *   primaryCta={{ label: "Visa overview", href: "/netherlands/visas/" }}
 * />
 * ```
 */
export function QuickAnswer({
  title,
  summary,
  appliesTo,
  timeline,
  costRange,
  firstSteps,
  note,
  primaryCta,
  secondaryCta,
  instanceId,
  className,
  ...rest
}: QuickAnswerProps) {
  if (
    !hasRenderableContent({
      title,
      summary,
      appliesTo,
      timeline,
      costRange,
      firstSteps,
      note,
      primaryCta,
      secondaryCta,
    })
  ) {
    return null;
  }

  const titleTrim = title?.trim();
  const headingId =
    titleTrim != null && titleTrim.length > 0
      ? `quick-answer-${instanceId ?? slugify(titleTrim)}-heading`
      : undefined;

  const appliesFiltered = appliesTo?.map((s) => s.trim()).filter(Boolean) ?? [];
  const stepsFiltered = firstSteps?.map((s) => s.trim()).filter(Boolean) ?? [];

  const hasMetaRow = Boolean(timeline?.trim() || costRange?.trim());
  const hasSteps = stepsFiltered.length > 0;
  const hasApplies = appliesFiltered.length > 0;

  return (
    <section
      className={cn(
        "min-w-0 rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-50 to-sky-50/40 p-4 shadow-sm sm:p-5",
        className
      )}
      aria-labelledby={headingId}
      aria-label={headingId ? undefined : "Quick summary"}
      {...rest}
    >
      <div className="border-l-4 border-l-brand-600 pl-3 sm:pl-4">
        {titleTrim ? (
          <h2 id={headingId} className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
            {titleTrim}
          </h2>
        ) : null}

        {summary?.trim() ? (
          <p
            className={cn("text-sm leading-relaxed text-slate-700 sm:text-base", titleTrim ? "mt-2" : undefined)}
          >
            {summary.trim()}
          </p>
        ) : null}

        {hasApplies ? (
          <div className={cn("mt-3", titleTrim || summary?.trim() ? undefined : "mt-0")}>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500" id={headingId ? `${headingId}-applies-label` : undefined}>
              Applies to
            </p>
            <ul
              className="mt-1.5 flex flex-wrap gap-2"
              aria-labelledby={headingId ? `${headingId}-applies-label` : undefined}
              aria-label={headingId ? undefined : "Applies to"}
            >
              {appliesFiltered.map((item, i) => (
                <li key={`${i}-${item}`}>
                  <span className="inline-flex rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-medium text-slate-700 ring-1 ring-slate-200/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {hasMetaRow ? (
          <dl
            className={cn(
              "mt-4 grid gap-3 text-sm sm:grid-cols-2 sm:gap-4",
              !titleTrim && !summary?.trim() && !hasApplies ? "mt-0" : undefined
            )}
          >
            {timeline?.trim() ? (
              <div className="min-w-0">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Timeline</dt>
                <dd className="mt-1 font-medium text-slate-900">{timeline.trim()}</dd>
              </div>
            ) : null}
            {costRange?.trim() ? (
              <div className="min-w-0">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Cost</dt>
                <dd className="mt-1 font-medium text-slate-900">{costRange.trim()}</dd>
              </div>
            ) : null}
          </dl>
        ) : null}

        {hasSteps ? (
          <div
            className={cn(
              "mt-4",
              !hasMetaRow && !hasApplies && !titleTrim && !summary?.trim() ? "mt-0" : undefined
            )}
          >
            <p
              className="text-xs font-semibold uppercase tracking-wide text-slate-500"
              id={headingId ? `${headingId}-steps-label` : undefined}
            >
              First steps
            </p>
            <ol
              className="mt-2 list-decimal space-y-1.5 pl-5 text-sm text-slate-800 marker:text-slate-400"
              aria-labelledby={headingId ? `${headingId}-steps-label` : undefined}
              aria-label={headingId ? undefined : "First steps"}
            >
              {stepsFiltered.map((step, i) => (
                <li key={`${i}-${step.slice(0, 32)}`} className="leading-relaxed">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        ) : null}

        {note?.trim() ? (
          <p
            className={cn(
              "mt-4 border-t border-slate-200/80 pt-3 text-xs leading-relaxed text-slate-600",
              !titleTrim && !summary?.trim() && !hasApplies && !hasMetaRow && !hasSteps
                ? "mt-0 border-t-0 pt-0"
                : undefined
            )}
          >
            {note.trim()}
          </p>
        ) : null}

        {primaryCta?.label?.trim() && primaryCta.href?.trim() ? (
          <div className="mt-4 flex min-w-0 flex-wrap items-center gap-3">
            <Link href={primaryCta.href.trim()} className="inline-flex max-w-full min-w-0">
              <Button variant="primary">{primaryCta.label.trim()}</Button>
            </Link>
            {secondaryCta?.label?.trim() && secondaryCta.href?.trim() ? (
              <Link href={secondaryCta.href.trim()} className="inline-flex max-w-full min-w-0">
                <Button variant="secondary">{secondaryCta.label.trim()}</Button>
              </Link>
            ) : null}
          </div>
        ) : secondaryCta?.label?.trim() && secondaryCta.href?.trim() ? (
          <div className="mt-4 flex min-w-0 flex-wrap items-center gap-3">
            <Link href={secondaryCta.href.trim()} className="inline-flex max-w-full min-w-0">
              <Button variant="secondary">{secondaryCta.label.trim()}</Button>
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
