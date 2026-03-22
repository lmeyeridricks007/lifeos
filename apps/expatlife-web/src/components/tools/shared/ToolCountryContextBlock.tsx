import Link from "next/link";
import type { CountryLandingContext } from "@/src/lib/tools/shared/toolCountryContext";

export type ToolCountryContextBlockProps = {
  context: CountryLandingContext;
  className?: string;
};

/**
 * Country-aware block for origin landing pages: intro, what often matters, document notes.
 */
export function ToolCountryContextBlock({ context, className = "" }: ToolCountryContextBlockProps) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-sky-50/30 p-5 shadow-sm md:p-6 ${className}`}
    >
      {context.intro ? (
        <p className="text-slate-700 md:text-base">{context.intro}</p>
      ) : null}
      {context.whatOftenMatters?.length ? (
        <div className="mt-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            What often matters when moving from {context.countryLabel}
          </h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
            {context.whatOftenMatters.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
      {context.documentConsiderations?.length ? (
        <div className="mt-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Document & logistics considerations
          </h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
            {context.documentConsiderations.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
      {context.transferTravelNotes?.length ? (
        <div className="mt-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Transfer, travel & timing
          </h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
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
            className="font-medium text-brand-600 hover:text-brand-700 hover:underline"
          >
            Read our guide for moving from {context.countryLabel} →
          </Link>
        </p>
      ) : null}
    </div>
  );
}
