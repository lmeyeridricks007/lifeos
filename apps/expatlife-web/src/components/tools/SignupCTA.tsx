"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";

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
            "border-slate-200 bg-none bg-slate-100 from-slate-100 to-slate-100 text-slate-600 shadow-sm hover:from-slate-100 hover:to-slate-100",
          variant === "secondary" && "bg-slate-50 text-slate-500 shadow-none"
        )}
      >
        {label}
      </Button>
      <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-amber-900">
        Coming soon
      </span>
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
        "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",
        isPanel && "border-l-4 border-l-brand-500 bg-brand-50/30",
        isSidebar && "md:max-w-sm",
        className
      )}
    >
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{subtitle}</p>
      {bullets.length > 0 ? (
        <ul className="mt-4 space-y-2">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-sm text-slate-700">
              <span className="text-brand-500">•</span>
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
