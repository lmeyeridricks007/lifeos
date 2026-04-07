import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { ContentTable, ContentTableCell, ContentTableRow } from "@/components/ui/content-table";
import { normalizeExternalProviderLogoSrc } from "@/src/lib/provider-logo-url";
import type { BestProviderComparisonRow } from "@/src/lib/monetization/bestProvidersContent";

export type ProvidersComparisonTableProps = {
  rows: BestProviderComparisonRow[];
  className?: string;
};

const HEADERS = [
  "Provider",
  "Best for",
  "English support",
  "Onboarding",
  "Price hint",
  "Notes",
  "",
] as const;

function isInternalHref(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

function CtaLink({
  href,
  label,
  isAffiliate,
}: {
  href: string;
  label: string;
  isAffiliate?: boolean;
}) {
  const rel = isAffiliate ? "sponsored noopener noreferrer" : "noopener noreferrer";
  const className = cn(
    "inline-flex min-h-9 items-center justify-center rounded-lg border border-border bg-surface-muted px-3 py-1.5 text-xs font-semibold text-foreground",
    "hover:border-border-strong hover:bg-surface-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
  );
  if (isInternalHref(href)) {
    return (
      <Link href={href} className={className}>
        {label}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel={rel} className={className}>
      {label}
    </a>
  );
}

/**
 * Structured provider comparison for “best of” pages—scannable columns, not long prose.
 */
export function ProvidersComparisonTable({ rows, className }: ProvidersComparisonTableProps) {
  if (!rows.length) return null;

  return (
    <ContentTable headers={[...HEADERS]} minWidth="920px" className={className}>
      {rows.map((row) => (
        <ContentTableRow key={row.id}>
          <ContentTableCell emphasis className="align-top">
            <div className="flex min-w-[140px] items-center gap-2">
              {row.logo?.src ? (
                <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-border/80 bg-surface-muted">
                  <Image
                    src={normalizeExternalProviderLogoSrc(row.logo.src)}
                    alt={row.logo.alt || row.name}
                    width={36}
                    height={36}
                    className="object-contain p-1"
                  />
                </span>
              ) : null}
              <span className="font-semibold text-foreground">{row.name}</span>
            </div>
          </ContentTableCell>
          <ContentTableCell className="align-top text-foreground-muted">{row.bestFor}</ContentTableCell>
          <ContentTableCell className="align-top text-foreground-muted">{row.englishSupport}</ContentTableCell>
          <ContentTableCell className="align-top text-foreground-muted">{row.onboardingEase}</ContentTableCell>
          <ContentTableCell className="align-top text-foreground-muted whitespace-nowrap">{row.priceHint}</ContentTableCell>
          <ContentTableCell className="align-top max-w-[200px] text-xs text-foreground-muted">{row.notes}</ContentTableCell>
          <ContentTableCell className="align-top whitespace-nowrap">
            <CtaLink href={row.ctaHref} label={row.ctaLabel} isAffiliate={row.isAffiliate} />
          </ContentTableCell>
        </ContentTableRow>
      ))}
    </ContentTable>
  );
}
