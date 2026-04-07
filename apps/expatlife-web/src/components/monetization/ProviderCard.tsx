import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { transitionSurface } from "@/lib/ui/interaction";
import { movingNlPathPrimaryCtaClass } from "@/lib/ui/moving-nl-pillar-identity";
import { normalizeExternalProviderLogoSrc } from "@/src/lib/provider-logo-url";
import { AffiliateDisclosureNote } from "./AffiliateDisclosureNote";
import type { ProviderCardLogo, ProviderCardProps } from "./provider-card-types";

export type { ProviderCardProps, ProviderCardLogo } from "./provider-card-types";

function isInternalHref(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

function LogoSlot({
  logo,
  name,
  copilot,
}: {
  logo: ProviderCardProps["logo"];
  name: string;
  copilot: boolean;
}) {
  const isObject = logo !== null && typeof logo === "object" && "src" in logo && typeof (logo as ProviderCardLogo).src === "string";
  if (!isObject) {
    return <div className="shrink-0">{logo as ReactNode}</div>;
  }
  const { src, alt } = logo as ProviderCardLogo;
  const normalized = normalizeExternalProviderLogoSrc(src);
  return (
    <div
      className={cn(
        "relative h-10 w-10 shrink-0 overflow-hidden rounded-lg",
        copilot
          ? "border border-copilot-primary/12 bg-copilot-bg-soft ring-1 ring-copilot-primary/10"
          : "border border-border/80 bg-surface-raised"
      )}
    >
      <Image src={normalized} alt={alt || name} width={40} height={40} className="object-contain p-1" />
    </div>
  );
}

const ctaBaseClass = cn(
  "inline-flex min-h-10 items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
  transitionSurface
);

/**
 * Compact, editorial provider tile — suitable for curated recommendations after content.
 */
const copilotSecondaryCtaClass = cn(
  "inline-flex w-full min-h-10 items-center justify-center rounded-xl border border-copilot-primary/15 bg-copilot-surface px-4 py-2 text-sm font-semibold text-copilot-text-primary shadow-expatos-sm ring-1 ring-copilot-primary/10 transition-colors",
  "hover:border-copilot-primary/22 hover:bg-copilot-bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copilot-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-copilot-surface"
);

export function ProviderCard({
  name,
  logo,
  description,
  tags,
  bestFor,
  priceHint,
  ctaLabel,
  href,
  isAffiliate,
  disclosureText,
  featured,
  layoutDensity = "default",
  tone = "default",
}: ProviderCardProps) {
  const copilot = tone === "copilot";
  const compact = layoutDensity === "compact";
  const rel = isAffiliate ? "sponsored noopener noreferrer" : "noopener noreferrer";
  const primaryCtaClass = cn(
    ctaBaseClass,
    "border border-brand-strong/25 bg-brand text-white shadow-card hover:bg-brand-strong hover:text-white"
  );
  const secondaryCtaClass = cn(
    ctaBaseClass,
    "border border-border bg-surface-raised text-foreground shadow-card hover:border-border-strong hover:bg-surface-muted"
  );
  const ctaClass = isAffiliate ? primaryCtaClass : secondaryCtaClass;

  const ctaCopilot = isInternalHref(href) ? (
    <Link href={href} className={copilotSecondaryCtaClass}>
      {ctaLabel}
    </Link>
  ) : (
    <a
      href={href}
      target="_blank"
      rel={rel}
      className={isAffiliate ? cn(movingNlPathPrimaryCtaClass, "text-center") : copilotSecondaryCtaClass}
    >
      {ctaLabel}
    </a>
  );

  const ctaDefault =
    isInternalHref(href) ? (
      <Link href={href} className={secondaryCtaClass}>
        {ctaLabel}
      </Link>
    ) : (
      <a href={href} target="_blank" rel={rel} className={ctaClass}>
        {ctaLabel}
      </a>
    );

  const cta = copilot ? ctaCopilot : ctaDefault;

  return (
    <article
      className={cn(
        "flex flex-col p-5",
        compact ? "h-auto min-h-[12rem]" : "h-full min-h-[14rem]",
        copilot
          ? "rounded-2xl border-0 bg-copilot-surface shadow-expatos-md ring-1 ring-copilot-primary/[0.08]"
          : "rounded-card border border-border bg-surface-raised shadow-card",
        featured &&
          (copilot ? "ring-2 ring-copilot-primary/15 ring-offset-0" : "ring-1 ring-brand/20")
      )}
    >
      <div className="flex items-start gap-3">
        <LogoSlot logo={logo} name={name} copilot={copilot} />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3
              className={cn(
                "text-base font-semibold tracking-tight",
                copilot ? "font-bold text-copilot-text-primary" : "text-foreground"
              )}
            >
              {name}
            </h3>
            {featured ? (
              <span
                className={cn(
                  "rounded-pill px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
                  copilot
                    ? "bg-copilot-bg-soft text-copilot-primary ring-1 ring-copilot-primary/20"
                    : "bg-brand-muted text-brand-strong"
                )}
              >
                Featured
              </span>
            ) : null}
          </div>
          {tags.length > 0 ? (
            <ul className="mt-2 flex flex-wrap gap-1.5" aria-label="Tags">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className={cn(
                    "rounded-md px-2 py-0.5 text-[11px] font-medium",
                    copilot
                      ? "bg-copilot-bg-soft text-copilot-text-secondary ring-1 ring-copilot-primary/10"
                      : "bg-surface-muted text-foreground-muted"
                  )}
                >
                  {tag}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
      <p
        className={cn(
          "mt-3 text-sm leading-relaxed",
          copilot ? "text-copilot-text-secondary" : "text-foreground-muted"
        )}
      >
        {description}
      </p>
      <dl className={cn("mt-3 space-y-1.5 text-xs", copilot ? "text-copilot-text-secondary" : "text-foreground-muted")}>
        <div>
          <dt className={cn("font-semibold", copilot ? "text-copilot-text-muted" : "text-foreground-subtle")}>Best for</dt>
          <dd>{bestFor}</dd>
        </div>
        <div>
          <dt className={cn("font-semibold", copilot ? "text-copilot-text-muted" : "text-foreground-subtle")}>Pricing</dt>
          <dd>{priceHint}</dd>
        </div>
      </dl>
      <div className={cn("mt-4 border-t pt-4", copilot ? "border-copilot-primary/10" : "border-border")}>{cta}</div>
      {isAffiliate && disclosureText ? (
        <AffiliateDisclosureNote spaced className={copilot ? "text-copilot-text-secondary" : undefined}>
          {disclosureText}
        </AffiliateDisclosureNote>
      ) : null}
    </article>
  );
}
