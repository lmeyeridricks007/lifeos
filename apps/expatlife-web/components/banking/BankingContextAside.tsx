import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { bankingGuideTertiaryLinkClass } from "@/components/banking/bankingPageUi";

function AsideCtaLink({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

/**
 * Calm cross-link aside for Money · Banking pages — one per page recommended.
 */
export function BankingContextAside({
  title,
  body,
  href,
  ctaLabel,
  className,
  tone = "default",
}: {
  title: string;
  body: string;
  href: string;
  ctaLabel: string;
  className?: string;
  tone?: "default" | "copilot";
}) {
  const onCopilot = tone === "copilot";
  return (
    <aside
      className={cn(
        "max-w-3xl rounded-xl border p-4 text-sm leading-snug shadow-sm sm:p-5",
        onCopilot
          ? "border-copilot-primary/12 bg-white/85 text-copilot-text-secondary ring-1 ring-copilot-primary/[0.06]"
          : "border-border/55 bg-slate-50/90 text-foreground-muted ring-1 ring-border/40",
        className
      )}
      aria-label={title}
    >
      <p className={cn("text-xs font-bold uppercase tracking-[0.12em]", onCopilot ? "text-copilot-text-muted" : "text-foreground-muted")}>{title}</p>
      <p className={cn("mt-2", onCopilot ? "text-copilot-text-secondary" : "text-foreground-muted")}>{body}</p>
      <p className="mt-3">
        <AsideCtaLink href={href} className={cn(bankingGuideTertiaryLinkClass, "inline-flex min-h-[44px] items-center font-semibold")}>
          {ctaLabel} →
        </AsideCtaLink>
      </p>
    </aside>
  );
}
