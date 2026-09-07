import Link from "next/link";
import { cn } from "@/lib/cn";

export type AuthorityCitationBlockProps = {
  /** Short name for suggested reference, e.g. "ExpatCopilot Official Figures 2026" */
  referenceName: string;
  /** Canonical page path (no domain) */
  pagePath: string;
  /** Primary data / authority sources shown as text */
  dataSources: string;
  /** Human-readable last updated / as-of */
  updated: string;
  /** One–three sentences on how figures or estimates are produced */
  methodologySummary: string;
  /** Optional link to deeper methodology on the same page or site */
  methodologyHref?: string;
  methodologyLinkLabel?: string;
  /** Optional machine-readable downloads we own rights to redistribute */
  downloads?: Array<{ label: string; href: string; note?: string }>;
  className?: string;
  variant?: "default" | "copilot";
};

/**
 * Subtle citeability block for authority assets — not outreach/linkbait copy.
 */
export function AuthorityCitationBlock({
  referenceName,
  pagePath,
  dataSources,
  updated,
  methodologySummary,
  methodologyHref,
  methodologyLinkLabel = "Methodology details",
  downloads,
  className,
  variant = "default",
}: AuthorityCitationBlockProps) {
  const copilot = variant === "copilot";
  const absoluteHint = `https://www.expatcopilot.com${pagePath.startsWith("/") ? pagePath : `/${pagePath}`}`;

  return (
    <section
      id="citation"
      className={cn(
        "scroll-mt-28 rounded-2xl p-5 md:p-6",
        copilot
          ? "border-0 bg-copilot-bg-soft/90 shadow-expatos-sm ring-1 ring-copilot-primary/10"
          : "border border-slate-200 bg-slate-50/80 shadow-sm",
        className
      )}
    >
      <h2 className={cn("text-lg font-semibold", copilot ? "text-copilot-text-primary" : "text-slate-900")}>
        Reference & citation
      </h2>
      <p className={cn("mt-2 text-sm leading-relaxed", copilot ? "text-copilot-text-secondary" : "text-slate-600")}>
        For editors, HR, and researchers who need a dated pointer—not a substitute for the official authority pages.
      </p>
      <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
        <div>
          <dt className={cn("text-xs font-semibold uppercase tracking-wide", copilot ? "text-copilot-text-muted" : "text-slate-500")}>
            Suggested reference
          </dt>
          <dd className={cn("mt-1 font-medium", copilot ? "text-copilot-text-primary" : "text-slate-900")}>{referenceName}</dd>
        </div>
        <div>
          <dt className={cn("text-xs font-semibold uppercase tracking-wide", copilot ? "text-copilot-text-muted" : "text-slate-500")}>
            Updated
          </dt>
          <dd className={cn("mt-1", copilot ? "text-copilot-text-primary" : "text-slate-800")}>{updated}</dd>
        </div>
        <div className="sm:col-span-2">
          <dt className={cn("text-xs font-semibold uppercase tracking-wide", copilot ? "text-copilot-text-muted" : "text-slate-500")}>
            Data sources
          </dt>
          <dd className={cn("mt-1 leading-relaxed", copilot ? "text-copilot-text-secondary" : "text-slate-700")}>{dataSources}</dd>
        </div>
        <div className="sm:col-span-2">
          <dt className={cn("text-xs font-semibold uppercase tracking-wide", copilot ? "text-copilot-text-muted" : "text-slate-500")}>
            Methodology
          </dt>
          <dd className={cn("mt-1 leading-relaxed", copilot ? "text-copilot-text-secondary" : "text-slate-700")}>
            {methodologySummary}
            {methodologyHref ? (
              <>
                {" "}
                <Link
                  href={methodologyHref}
                  className={cn(
                    "font-medium hover:underline",
                    copilot ? "text-copilot-primary" : "text-brand-600"
                  )}
                >
                  {methodologyLinkLabel}
                </Link>
              </>
            ) : null}
          </dd>
        </div>
        <div className="sm:col-span-2">
          <dt className={cn("text-xs font-semibold uppercase tracking-wide", copilot ? "text-copilot-text-muted" : "text-slate-500")}>
            Page URL
          </dt>
          <dd className={cn("mt-1 break-all font-mono text-xs", copilot ? "text-copilot-text-secondary" : "text-slate-600")}>
            {absoluteHint}
          </dd>
        </div>
      </dl>
      {downloads?.length ? (
        <div className="mt-4 border-t border-slate-200/80 pt-4">
          <p className={cn("text-xs font-semibold uppercase tracking-wide", copilot ? "text-copilot-text-muted" : "text-slate-500")}>
            Downloads
          </p>
          <ul className="mt-2 space-y-2">
            {downloads.map((d) => (
              <li key={d.href}>
                <a
                  href={d.href}
                  className={cn(
                    "text-sm font-medium hover:underline",
                    copilot ? "text-copilot-primary" : "text-brand-600"
                  )}
                >
                  {d.label}
                </a>
                {d.note ? (
                  <span className={cn("ml-2 text-xs", copilot ? "text-copilot-text-muted" : "text-slate-500")}>{d.note}</span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
