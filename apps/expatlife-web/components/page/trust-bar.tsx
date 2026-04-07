import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";
import { LastUpdated } from "@/components/ui/LastUpdated";

export type TrustBarLink = {
  label: string;
  href: string;
};

export type TrustBarProps = Omit<ComponentPropsWithoutRef<"section">, "children"> & {
  /** Display date string from page meta (e.g. “March 2026” or ISO). */
  updatedDate?: string;
  /** Passed to {@link LastUpdated}; default “Last updated”. */
  updatedLabel?: string;
  /** Short trust line (e.g. reviewed against official sources). Plain text. */
  reviewedNote?: string;
  methodologyLink?: TrustBarLink;
  disclosureLink?: TrustBarLink;
  sourcesLink?: TrustBarLink;
  /** Optional editor/team line (e.g. “Editorial team”). */
  attribution?: string;
  /**
   * `inline` — under/near a header (light separator). `footer` — end of content (top rule like {@link TrustLinksBlock}).
   */
  variant?: "inline" | "footer";
};

function hasRenderableContent(props: Pick<
  TrustBarProps,
  | "updatedDate"
  | "reviewedNote"
  | "methodologyLink"
  | "disclosureLink"
  | "sourcesLink"
  | "attribution"
>): boolean {
  return Boolean(
    (props.updatedDate?.trim() ?? "") ||
      (props.reviewedNote?.trim() ?? "") ||
      (props.attribution?.trim() ?? "") ||
      (props.methodologyLink?.href?.trim() && props.methodologyLink?.label?.trim()) ||
      (props.disclosureLink?.href?.trim() && props.disclosureLink?.label?.trim()) ||
      (props.sourcesLink?.href?.trim() && props.sourcesLink?.label?.trim())
  );
}

const linkClass =
  "font-medium text-slate-700 underline-offset-2 transition hover:text-slate-900 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:ring-offset-2 rounded-sm";

/**
 * Lightweight trust and maintenance signals for editorial, comparison, and service pages.
 * Renders nothing when no fields are set. Server component.
 *
 * @example
 * ```tsx
 * import { TrustBar } from "@/components/page/trust-bar";
 *
 * <TrustBar
 *   variant="inline"
 *   updatedDate="April 2026"
 *   reviewedNote="Reviewed against official IND and government sources."
 *   methodologyLink={{ label: "Methodology", href: "/methodology/" }}
 *   disclosureLink={{ label: "Affiliate disclosure", href: "/affiliate-disclosure/" }}
 *   sourcesLink={{ label: "Sources we use", href: "/editorial-policy/" }}
 *   attribution="ExpatCopilot editorial"
 * />
 * ```
 */
export function TrustBar({
  updatedDate,
  updatedLabel,
  reviewedNote,
  methodologyLink,
  disclosureLink,
  sourcesLink,
  attribution,
  variant = "inline",
  className,
  ...rest
}: TrustBarProps) {
  if (
    !hasRenderableContent({
      updatedDate,
      reviewedNote,
      methodologyLink,
      disclosureLink,
      sourcesLink,
      attribution,
    })
  ) {
    return null;
  }

  const linkItems: TrustBarLink[] = [
    methodologyLink?.label?.trim() && methodologyLink.href?.trim() ? methodologyLink : null,
    disclosureLink?.label?.trim() && disclosureLink.href?.trim() ? disclosureLink : null,
    sourcesLink?.label?.trim() && sourcesLink.href?.trim() ? sourcesLink : null,
  ].filter((x): x is TrustBarLink => x != null);

  const isFooter = variant === "footer";

  return (
    <section
      className={cn(
        "text-sm",
        isFooter && "mt-8 border-t border-slate-200 pt-5",
        !isFooter && "border-b border-slate-100 pb-4",
        className
      )}
      aria-label="Trust and editorial information"
      {...rest}
    >
      <div className="flex flex-col gap-3 sm:gap-2">
        {(updatedDate?.trim() ||
          reviewedNote?.trim() ||
          attribution?.trim()) && (
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-4 sm:gap-y-1">
            {updatedDate?.trim() ? (
              <LastUpdated
                date={updatedDate.trim()}
                label={updatedLabel}
                className="text-slate-600"
              />
            ) : null}
            {reviewedNote?.trim() ? (
              <p className="max-w-prose text-slate-600 leading-snug">{reviewedNote.trim()}</p>
            ) : null}
            {attribution?.trim() ? (
              <p className="text-slate-500">{attribution.trim()}</p>
            ) : null}
          </div>
        )}

        {linkItems.length > 0 ? (
          <nav aria-label="Methodology and disclosure links">
            <ul className="flex flex-wrap gap-x-3 gap-y-1.5 sm:gap-x-4">
              {linkItems.map((item) => (
                <li key={`${item.href}::${item.label}`}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
    </section>
  );
}
