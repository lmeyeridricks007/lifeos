import Link from "next/link";
import { cn } from "@/lib/cn";
import type { CountryLandingContext } from "@/src/lib/tools/shared/toolCountryContext";

export type ToolCountryContextBlockProps = {
  context: CountryLandingContext;
  className?: string;
  /** Align with moving-cluster tool pages (copilot tokens + surfaces). */
  variant?: "default" | "copilot";
};

/**
 * Country-aware block for origin landing pages: intro, what often matters, document notes.
 */
export function ToolCountryContextBlock({
  context,
  className,
  variant = "default",
}: ToolCountryContextBlockProps) {
  const copilot = variant === "copilot";
  return (
    <div
      className={cn(
        "rounded-2xl p-5 md:p-6",
        copilot
          ? "border-0 bg-copilot-bg-soft/90 shadow-expatos-sm ring-1 ring-copilot-primary/10"
          : "border border-slate-200 bg-gradient-to-br from-slate-50 to-sky-50/30 shadow-sm",
        className
      )}
    >
      {context.intro ? (
        <p className={cn("md:text-base", copilot ? "text-copilot-text-primary" : "text-slate-700")}>{context.intro}</p>
      ) : null}
      {context.whatOftenMatters?.length ? (
        <div className="mt-4">
          <h3
            className={cn(
              "text-sm font-semibold uppercase tracking-wide",
              copilot ? "text-copilot-text-muted" : "text-slate-500"
            )}
          >
            What often matters when moving from {context.countryLabel}
          </h3>
          <ul
            className={cn(
              "mt-2 list-disc space-y-1 pl-5 text-sm",
              copilot ? "text-copilot-text-secondary" : "text-slate-600"
            )}
          >
            {context.whatOftenMatters.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
      {context.documentConsiderations?.length ? (
        <div className="mt-4">
          <h3
            className={cn(
              "text-sm font-semibold uppercase tracking-wide",
              copilot ? "text-copilot-text-muted" : "text-slate-500"
            )}
          >
            Document & logistics considerations
          </h3>
          <ul
            className={cn(
              "mt-2 list-disc space-y-1 pl-5 text-sm",
              copilot ? "text-copilot-text-secondary" : "text-slate-600"
            )}
          >
            {context.documentConsiderations.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
      {context.transferTravelNotes?.length ? (
        <div className="mt-4">
          <h3
            className={cn(
              "text-sm font-semibold uppercase tracking-wide",
              copilot ? "text-copilot-text-muted" : "text-slate-500"
            )}
          >
            Transfer, travel & timing
          </h3>
          <ul
            className={cn(
              "mt-2 list-disc space-y-1 pl-5 text-sm",
              copilot ? "text-copilot-text-secondary" : "text-slate-600"
            )}
          >
            {context.transferTravelNotes.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
      {context.countryGuideHref ? (
        <p className="mt-4">
          <Link
            href={context.countryGuideHref}
            className={cn(
              "font-medium hover:underline",
              copilot
                ? "text-copilot-primary hover:text-copilot-primary-strong"
                : "text-brand-600 hover:text-brand-700"
            )}
          >
            Read our guide for moving from {context.countryLabel} →
          </Link>
        </p>
      ) : null}
    </div>
  );
}
