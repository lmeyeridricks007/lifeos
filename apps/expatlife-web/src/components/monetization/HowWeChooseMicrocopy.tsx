import Link from "next/link";
import { cn } from "@/lib/cn";
import { HOW_WE_CHOOSE_CRITERIA, MONETIZATION_TRUST_URLS } from "@/src/lib/monetization/trustCopy";
import { monetizationTrustPanelClass } from "./monetizationTrustStyles";

/** Inline links to ranking, affiliate, and editorial trust pages (reusable under methodology blocks). */
export function MonetizationTrustResourceLinks({ className }: { className?: string }) {
  return (
    <p className={cn("text-xs text-foreground-muted", className)}>
      <Link href={MONETIZATION_TRUST_URLS.howWeRank} className="font-semibold text-link hover:text-link-hover hover:underline">
        How we rank services
      </Link>
      <span aria-hidden> · </span>
      <Link
        href={MONETIZATION_TRUST_URLS.affiliateDisclosure}
        className="font-semibold text-link hover:text-link-hover hover:underline"
      >
        Affiliate disclosure
      </Link>
      <span aria-hidden> · </span>
      <Link
        href={MONETIZATION_TRUST_URLS.editorialPolicy}
        className="font-semibold text-link hover:text-link-hover hover:underline"
      >
        Editorial policy
      </Link>
    </p>
  );
}

export type HowWeChooseMicrocopyProps = {
  className?: string;
  /** Show link to full methodology page. */
  showMethodologyLink?: boolean;
  /** Netherlands moving-guide typography + surfaces */
  tone?: "default" | "copilot";
  /** Omit outer panel — use inside a parent card (e.g. FAQ-matched shell). */
  embedded?: boolean;
};

/**
 * Compact “how we choose” pattern for recommendation and provider modules.
 */
export function HowWeChooseMicrocopy({
  className,
  showMethodologyLink = true,
  tone = "default",
  embedded = false,
}: HowWeChooseMicrocopyProps) {
  const copilot = tone === "copilot";
  const headingClass = copilot ? "text-[11px] font-semibold uppercase tracking-wider text-copilot-text-muted" : "text-[11px] font-semibold uppercase tracking-wider text-foreground-muted";
  const itemShell = copilot
    ? "rounded-lg bg-copilot-surface px-3 py-2 ring-1 ring-copilot-primary/10"
    : "rounded-lg bg-surface-raised/80 px-3 py-2 ring-1 ring-border/60";
  const labelClass = copilot ? "font-medium text-copilot-text-primary" : "font-medium text-foreground";
  const hintClass = copilot ? "mt-0.5 block text-xs leading-snug text-copilot-text-secondary" : "mt-0.5 block text-xs leading-snug text-foreground-muted";

  const body = (
    <>
      <p className={headingClass}>How we choose</p>
      <ul className="mt-3 grid w-full min-w-0 grid-cols-1 gap-2 sm:grid-cols-2">
        {HOW_WE_CHOOSE_CRITERIA.map((c) => (
          <li key={c.label} className={itemShell}>
            <span className={labelClass}>{c.label}</span>
            <span className={hintClass}>{c.hint}</span>
          </li>
        ))}
      </ul>
      {showMethodologyLink ? (
        <MonetizationTrustResourceLinks
          className={cn("mt-3", copilot && "text-copilot-text-secondary [&_a]:text-copilot-primary [&_a]:hover:text-copilot-primary-strong")}
        />
      ) : null}
    </>
  );

  if (embedded) {
    return <div className={cn("w-full min-w-0 space-y-0", className)}>{body}</div>;
  }

  const shell = copilot
    ? "rounded-2xl border border-slate-200/70 bg-copilot-bg-soft/50 p-4 shadow-expatos-sm ring-1 ring-slate-900/[0.05] sm:p-5"
    : cn(monetizationTrustPanelClass, "border-l-accent/70");

  return <div className={cn(shell, className)}>{body}</div>;
}
