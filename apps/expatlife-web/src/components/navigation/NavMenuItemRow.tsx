"use client";

import Link from "next/link";
import type { Ref, RefObject } from "react";
import type { NavItem } from "@/src/lib/nav/types";
import { isNavItemActive, isNavItemLinkable } from "@/src/lib/nav/navItemModel";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";
import { cn } from "@/lib/cn";
import { transitionColors } from "@/lib/ui/interaction";

type Variant = "mega" | "mobile" | "toolSidebar";

type NavMenuItemRowProps = {
  item: NavItem;
  pathname: string;
  variant: Variant;
  onNavigate?: () => void;
  attachFirstLinkRef?: boolean;
  firstLinkRef?: RefObject<HTMLAnchorElement | null>;
};

/**
 * Single nav row for mega menu or mobile drawer: live links vs roadmap (coming soon) rows.
 * Non-links are not anchors; `role="group"` + `aria-label` communicate state without implying a broken link.
 */
export function NavMenuItemRow({
  item,
  pathname,
  variant,
  onNavigate,
  attachFirstLinkRef,
  firstLinkRef,
}: NavMenuItemRowProps) {
  const linkable = isNavItemLinkable(item);
  const active = isNavItemActive(pathname, item);

  if (!linkable) {
    const customRoadmapBadge = Boolean(item.badge);
    /** Short pill label in tools rail; mega/mobile use muted inline text to avoid badge walls. */
    const badgeLabel = item.badge ?? "Soon";
    const ariaStatus = customRoadmapBadge ? item.badge! : "coming soon";
    if (variant === "toolSidebar") {
      return (
        <span
          role="group"
          aria-label={`${item.label}, ${ariaStatus}`}
          className="flex min-h-[2.75rem] w-full min-w-0 cursor-default items-center gap-2 rounded-lg border border-dashed border-border/70 bg-surface-subtle/80 px-3 py-2 text-sm font-medium text-foreground-faint"
        >
          <span className="min-w-0 flex-1 leading-snug">{item.label}</span>
          <ComingSoonBadge className="ml-auto shrink-0" label={badgeLabel} emphasis={customRoadmapBadge} />
        </span>
      );
    }
    return (
      <span
        role="group"
        className={cn(
          "flex w-full min-w-0 cursor-default items-center gap-2 rounded-lg py-1.5 pl-2 pr-2 -mx-2 text-sm",
          variant === "mega" ? "text-foreground-faint" : "min-h-[44px] cursor-not-allowed text-foreground-faint/90"
        )}
        aria-label={`${item.label}, ${ariaStatus}`}
      >
        <span
          className={cn(
            "min-w-0 flex-1 font-medium leading-snug",
            variant === "mega" ? "text-foreground-muted" : "text-foreground-faint"
          )}
        >
          {item.label}
        </span>
        {customRoadmapBadge ? (
          <ComingSoonBadge className="shrink-0" label={badgeLabel} emphasis />
        ) : (
          <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground-faint">
            Soon
          </span>
        )}
      </span>
    );
  }

  const href = item.href!;
  if (variant === "toolSidebar") {
    return (
      <Link
        href={href}
        onClick={onNavigate}
        aria-current={active ? "page" : undefined}
        className={cn(
          transitionColors,
          "flex min-h-[2.75rem] items-center gap-2 rounded-lg border border-border bg-surface-raised px-3 py-2 text-sm font-medium text-foreground-muted ease-out hover:border-brand/25 hover:bg-brand-muted hover:text-foreground active:bg-brand-muted/70 motion-reduce:active:bg-brand-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/20 focus-visible:ring-inset",
          active && "border-brand/30 bg-brand-muted"
        )}
      >
        <span className="min-w-0 flex-1 leading-snug">{item.label}</span>
        {item.badge ? <ComingSoonBadge emphasis label={item.badge} className="shrink-0" /> : null}
      </Link>
    );
  }
  return (
    <Link
      ref={attachFirstLinkRef ? (firstLinkRef as Ref<HTMLAnchorElement>) : undefined}
      href={href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
        className={cn(
        transitionColors,
        "flex gap-2 rounded-lg pl-2 pr-1 -mx-2 text-sm ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/20 focus-visible:ring-inset",
        variant === "mega" && "min-h-11 items-center py-2",
        variant === "mobile" && "min-h-[44px] items-center py-2.5 leading-snug",
        variant !== "mega" && variant !== "mobile" && "items-start py-1.5 sm:items-center",
        variant === "mega" &&
          (active
            ? "bg-brand-muted/90 font-semibold text-brand-strong ring-1 ring-inset ring-brand/10"
            : "text-foreground-muted hover:bg-brand-muted/70 hover:text-foreground focus-visible:bg-brand-muted/70 active:bg-brand-muted/50 motion-reduce:active:bg-transparent"),
        variant === "mobile" &&
          (active
            ? "bg-brand-muted font-semibold text-brand-strong"
            : "text-foreground-muted hover:bg-surface-muted active:bg-surface-subtle motion-reduce:active:bg-transparent")
      )}
    >
      <span className="min-w-0 flex-1 font-medium leading-snug">{item.label}</span>
      {item.badge ? <ComingSoonBadge emphasis label={item.badge} className="mt-0.5 shrink-0 sm:mt-0" /> : null}
    </Link>
  );
}
