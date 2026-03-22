"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { trackOutboundLink, type OutboundLinkType } from "@/lib/analytics/track";

export type TrackedExternalLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "onClick"
> & {
  href: string;
  linkType: OutboundLinkType;
  /** Defaults to current pathname. */
  pageContext?: string;
  /** For analytics when children are not plain text. */
  linkText?: string;
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
};

export function TrackedExternalLink({
  href,
  linkType,
  pageContext,
  linkText,
  children,
  onClick,
  ...rest
}: TrackedExternalLinkProps) {
  const pathname = usePathname();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    const text =
      linkText ??
      (typeof children === "string" || typeof children === "number" ? String(children) : "");
    trackOutboundLink({
      destination_url: href,
      link_text: text,
      page_context: pageContext ?? pathname ?? "",
      link_type: linkType,
    });
  };

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
