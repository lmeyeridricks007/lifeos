"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import type { OutboundLinkType } from "@/lib/analytics/track";
import { utmContentFromPath, withPartnerReferralUtms } from "@/lib/analytics/referral-utm";

export type TrackedExternalLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "onClick"
> & {
  href: string;
  linkType: OutboundLinkType;
  /** Sent as `page_context` when set; otherwise `OutboundClickCapture` uses the live URL. */
  pageContext?: string;
  /** For analytics when children are not plain text. */
  linkText?: string;
  partnerSlug?: string;
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
};

/**
 * External link with `data-outbound-*` hints for {@link OutboundClickCapture} (GA4/GTM dataLayer, PostHog).
 * Tracking runs once in document capture phase to cover plain `<a>` and this component consistently.
 */
export function TrackedExternalLink({
  href,
  linkType,
  pageContext,
  linkText,
  partnerSlug,
  children,
  onClick,
  ...rest
}: TrackedExternalLinkProps) {
  const pathname = usePathname();
  const hrefWithUtms = useMemo(
    () =>
      withPartnerReferralUtms(href, {
        partnerSlug,
        utmContent: utmContentFromPath(pathname ?? ""),
      }),
    [href, partnerSlug, pathname]
  );

  return (
    <a
      href={hrefWithUtms}
      data-outbound-link-type={linkType}
      {...(partnerSlug ? { "data-outbound-partner-slug": partnerSlug } : {})}
      {...(linkText != null && linkText !== "" ? { "data-outbound-link-text": linkText } : {})}
      {...(pageContext != null && pageContext !== "" ? { "data-outbound-page-context": pageContext } : {})}
      onClick={onClick}
      {...rest}
    >
      {children}
    </a>
  );
}
