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
};

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
}: SignupCTAProps) {
  const isPanel = variant === "panel";
  const isSidebar = variant === "sidebar";

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
      <div className="mt-5 flex flex-wrap gap-3">
        <Link href={primaryCtaHref}>
          <Button variant="primary">{primaryCtaLabel}</Button>
        </Link>
        {secondaryCtaLabel != null && (
          <Link href={secondaryCtaHref ?? "#"}>
            <Button variant="secondary">{secondaryCtaLabel}</Button>
          </Link>
        )}
      </div>
    </div>
  );
}
