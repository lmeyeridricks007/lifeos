import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";

export type NextStepCta = {
  label: string;
  href: string;
};

export type NextStepCTAProps = Omit<ComponentPropsWithoutRef<"section">, "children"> & {
  title: string;
  description?: string;
  /** Short line explaining why this step matters (shown after description). */
  supportingText?: string;
  /** Optional bullets (e.g. what you’ll get next). */
  bullets?: string[];
  primaryCta: NextStepCta;
  secondaryCta?: NextStepCta;
  /**
   * `default` — neutral card. `emphasis` — light brand left accent (still restrained).
   */
  variant?: "default" | "emphasis";
  /** Stable id for the heading when multiple blocks exist on one page. */
  titleId?: string;
};

function slugify(input: string): string {
  const s = input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return s.length > 0 ? s.slice(0, 48) : "next-step";
}

function hasRenderableContent(props: { title?: string; primaryCta?: NextStepCta }): boolean {
  return Boolean(
    props.title?.trim() && props.primaryCta?.label?.trim() && props.primaryCta?.href?.trim()
  );
}

/**
 * Compact “what to do next” block for the middle or end of long-form pages.
 * Server component; no analytics hooks.
 *
 * @example
 * ```tsx
 * import { NextStepCTA } from "@/components/page/next-step-cta";
 *
 * <NextStepCTA
 *   title="Estimate your move budget"
 *   description="Get a structured first-year view before you commit to dates."
 *   supportingText="Best after you know your visa route and city."
 *   bullets={["Indicative ranges", "Adjustable assumptions"]}
 *   primaryCta={{ label: "Open cost estimator", href: "/netherlands/moving/tools/relocation-cost-estimator/" }}
 *   secondaryCta={{ label: "Moving hub", href: "/netherlands/moving/hub/" }}
 *   variant="emphasis"
 * />
 * ```
 */
export function NextStepCTA({
  title,
  description,
  supportingText,
  bullets,
  primaryCta,
  secondaryCta,
  variant = "default",
  titleId: titleIdProp,
  className,
  ...rest
}: NextStepCTAProps) {
  if (!hasRenderableContent({ title, primaryCta })) {
    return null;
  }

  const headingId = titleIdProp ?? `next-step-${slugify(title)}-title`;
  const list = (bullets ?? []).map((s) => s.trim()).filter(Boolean);
  const isEmphasis = variant === "emphasis";

  return (
    <section
      className={cn(
        "min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6",
        isEmphasis && "border-l-4 border-l-brand-600 bg-gradient-to-br from-slate-50/90 to-white",
        className
      )}
      aria-labelledby={headingId}
      {...rest}
    >
      <h3 id={headingId} className="text-lg font-semibold tracking-tight text-slate-900">
        {title.trim()}
      </h3>
      {description?.trim() ? (
        <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{description.trim()}</p>
      ) : null}
      {supportingText?.trim() ? (
        <p className="mt-2 text-sm text-slate-600">{supportingText.trim()}</p>
      ) : null}
      {list.length > 0 ? (
        <ul
          className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-700 marker:text-slate-400"
          aria-label="Supporting points"
        >
          {list.map((line, i) => (
            <li key={`${i}-${line.slice(0, 32)}`} className="leading-snug">
              {line}
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-5 flex min-w-0 flex-wrap items-center gap-3">
        <Link href={primaryCta.href.trim()} className="inline-flex max-w-full min-w-0">
          <Button type="button" variant="primary">
            {primaryCta.label.trim()}
          </Button>
        </Link>
        {secondaryCta?.label?.trim() && secondaryCta.href?.trim() ? (
          <Link href={secondaryCta.href.trim()} className="inline-flex max-w-full min-w-0">
            <Button type="button" variant="secondary">
              {secondaryCta.label.trim()}
            </Button>
          </Link>
        ) : null}
      </div>
    </section>
  );
}
