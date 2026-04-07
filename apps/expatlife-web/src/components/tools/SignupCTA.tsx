"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";
import { transitionSurface } from "@/lib/ui/interaction";

export type SignupCTAProps = {
  title: string;
  subtitle: string;
  bullets: string[];
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  variant?: "inline" | "panel" | "sidebar";
  className?: string;
  /**
   * When true, primary CTA is shown but not navigable (signup not live yet).
   * Defaults to true; set false when `/signup` ships.
   */
  primaryComingSoon?: boolean;
  /**
   * When true, secondary CTA is shown as coming soon. If omitted, inferred when `secondaryCtaHref` is `/signup`.
   */
  secondaryComingSoon?: boolean;
};

function isSignupHref(href?: string | null): boolean {
  if (!href) return false;
  const path = href.split("?")[0]?.replace(/\/$/, "") ?? "";
  return path === "/signup";
}

function ComingSoonButton({
  label,
  variant,
}: {
  label: string;
  variant: "primary" | "secondary";
}) {
  return (
    <div className="inline-flex flex-col items-start gap-1.5">
      <Button
        type="button"
        variant={variant}
        disabled
        title="Account signup is coming soon"
        className={cn(
          "cursor-not-allowed opacity-80 hover:!translate-y-0",
          variant === "primary" &&
            "border-border bg-surface-muted text-foreground-muted shadow-card hover:bg-surface-muted",
          variant === "secondary" && "bg-surface-muted text-foreground-faint shadow-none"
        )}
      >
        {label}
      </Button>
      <ComingSoonBadge emphasis className="uppercase tracking-wide" label="Coming soon" />
    </div>
  );
}

export function SignupCTA({
  title,
  subtitle,
  bullets,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  variant = "inline",
  className,
  primaryComingSoon = true,
  secondaryComingSoon,
}: SignupCTAProps) {
  const isPanel = variant === "panel";
  const isSidebar = variant === "sidebar";

  const secondarySoon =
    secondaryComingSoon ??
    (secondaryCtaLabel != null && secondaryCtaHref != null && isSignupHref(secondaryCtaHref));

  return (
    <div
      className={cn(
        transitionSurface,
        "rounded-card border border-border bg-surface-raised p-6 shadow-card ring-1 ring-border/10",
        isPanel && "border-l-4 border-l-brand bg-brand-muted/35",
        isSidebar && "md:max-w-sm",
        className
      )}
    >
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{subtitle}</p>
      {bullets.length > 0 ? (
        <ul className="mt-4 space-y-2">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-sm text-foreground">
              <span className="text-brand" aria-hidden>
                •
              </span>
              {b}
            </li>
          ))}
        </ul>
      ) : null}
      <div className="mt-5 flex flex-wrap items-start gap-3">
        {primaryComingSoon ? (
          <ComingSoonButton label={primaryCtaLabel} variant="primary" />
        ) : (
          <Link href={primaryCtaHref}>
            <Button variant="primary">{primaryCtaLabel}</Button>
          </Link>
        )}
        {secondaryCtaLabel != null ? (
          secondarySoon ? (
            <ComingSoonButton label={secondaryCtaLabel} variant="secondary" />
          ) : (
            <Link href={secondaryCtaHref ?? "#"}>
              <Button variant="secondary">{secondaryCtaLabel}</Button>
            </Link>
          )
        ) : null}
      </div>
    </div>
  );
}
