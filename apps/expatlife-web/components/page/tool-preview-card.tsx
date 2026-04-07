import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";

export type ToolPreviewCta = {
  label: string;
  href: string;
};

export type ToolPreviewCardProps = Omit<ComponentPropsWithoutRef<"article">, "children"> & {
  /** Small label above the title (e.g. “Tool”, “Planner”). */
  eyebrow?: string;
  title: string;
  description?: string;
  /** Short preview lines (2–4 recommended); extra items are ignored. */
  highlights?: string[];
  /**
   * Omit for a live tool with no status pill. `live` — show a “Live” pill. `coming_soon` — badge + disabled primary.
   */
  status?: "live" | "coming_soon";
  /** Override default status pill text (“Live” / short “Soon” on the badge). */
  statusLabel?: string;
  primaryCta: {
    label: string;
    /** Required when `status` is not `coming_soon`. */
    href?: string;
  };
  secondaryCta?: ToolPreviewCta;
  /** Rotates left accent + background tint (same palette as `PillarToolsStrip`). */
  accentIndex?: number;
  /** Stable id suffix when multiple cards share a title. */
  instanceId?: string;
};

const ACCENTS = [
  "border-l-sky-500 bg-sky-50/50",
  "border-l-teal-500 bg-teal-50/50",
  "border-l-amber-500 bg-amber-50/50",
  "border-l-emerald-500 bg-emerald-50/50",
] as const;

function slugify(input: string): string {
  const s = input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return s.length > 0 ? s.slice(0, 48) : "tool";
}

function hasRenderableContent(props: {
  title?: string;
  status?: "live" | "coming_soon";
  primaryCta?: ToolPreviewCardProps["primaryCta"];
}): boolean {
  if (!props.title?.trim() || !props.primaryCta?.label?.trim()) return false;
  if (props.status === "coming_soon") return true;
  return Boolean(props.primaryCta.href?.trim());
}

/**
 * Compact preview for a related tool on guides and decision pages — not an interactive tool shell.
 * Server component; no API calls.
 *
 * @example Live
 * ```tsx
 * <ToolPreviewCard
 *   eyebrow="Tool"
 *   title="Moving checklist"
 *   description="Turn your move into ordered tasks before and after arrival."
 *   highlights={["Phased tasks", "Print-friendly", "Links to official steps"]}
 *   status="live"
 *   primaryCta={{ label: "Open checklist", href: "/netherlands/moving/tools/moving-checklist/" }}
 *   accentIndex={1}
 *   secondaryCta={{ label: "Moving hub", href: "/netherlands/moving/hub/" }}
 * />
 * ```
 *
 * @example Coming soon
 * ```tsx
 * <ToolPreviewCard
 *   eyebrow="Coming next"
 *   title="City comparison"
 *   description="Compare cost and quality-of-life signals across Dutch cities."
 *   highlights={["Side-by-side metrics", "Official stats where available"]}
 *   status="coming_soon"
 *   primaryCta={{ label: "Open tool" }}
 *   secondaryCta={{ label: "Browse cities", href: "/netherlands/cities/" }}
 * />
 * ```
 */
export function ToolPreviewCard({
  eyebrow,
  title,
  description,
  highlights,
  status,
  statusLabel,
  primaryCta,
  secondaryCta,
  accentIndex = 0,
  instanceId,
  className,
  ...rest
}: ToolPreviewCardProps) {
  if (!hasRenderableContent({ title, status, primaryCta })) {
    return null;
  }

  const isSoon = status === "coming_soon";
  const accentClass = ACCENTS[Math.abs(accentIndex) % ACCENTS.length];
  const titleId = `tool-preview-${instanceId ?? slugify(title)}-title`;
  const bullets = (highlights ?? [])
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 4);

  const liveLabel = statusLabel?.trim() || "Live";
  const soonLabel = statusLabel?.trim() || "Soon";

  return (
    <article
      className={cn(
        "min-w-0 rounded-2xl border border-slate-200 p-5 shadow-sm transition hover:shadow-md",
        "border-l-4",
        accentClass,
        className
      )}
      aria-labelledby={titleId}
      {...rest}
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="min-w-0 flex-1 space-y-1">
          {eyebrow?.trim() ? (
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[hsl(var(--brand))]">
              {eyebrow.trim()}
            </p>
          ) : null}
          <h3 id={titleId} className="text-lg font-semibold tracking-tight text-slate-900">
            {title.trim()}
          </h3>
        </div>
        {status === "live" ? (
          <span
            className="shrink-0 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-800 ring-1 ring-emerald-100"
            title="Available now"
          >
            {liveLabel}
          </span>
        ) : isSoon ? (
          <ComingSoonBadge label={soonLabel} emphasis />
        ) : null}
      </div>

      {description?.trim() ? (
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{description.trim()}</p>
      ) : null}

      {bullets.length > 0 ? (
        <ul
          className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-700 marker:text-slate-400"
          aria-label="What this tool covers"
        >
          {bullets.map((line, i) => (
            <li key={`${i}-${line.slice(0, 24)}`} className="leading-snug">
              {line}
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-5 flex min-w-0 flex-wrap items-start gap-3">
        {isSoon ? (
          <Button
            type="button"
            variant="primary"
            disabled
            className="max-w-full cursor-not-allowed opacity-80 hover:!translate-y-0"
            title="This tool is not available yet"
          >
            {primaryCta.label.trim()}
          </Button>
        ) : primaryCta.href ? (
          <Link href={primaryCta.href.trim()} className="inline-flex max-w-full min-w-0">
            <Button type="button" variant="primary">
              {primaryCta.label.trim()}
            </Button>
          </Link>
        ) : null}

        {secondaryCta?.label?.trim() && secondaryCta.href?.trim() ? (
          <Link href={secondaryCta.href.trim()} className="inline-flex max-w-full min-w-0">
            <Button type="button" variant="secondary">
              {secondaryCta.label.trim()}
            </Button>
          </Link>
        ) : null}
      </div>
    </article>
  );
}
