"use client";

import Link from "next/link";
import type { Ref, RefObject } from "react";
import type { MegaMenu as MegaMenuType } from "@/src/lib/nav/types";
import { isNavItemLinkable } from "@/src/lib/nav/navItemModel";
import { NavMenuItemRow } from "@/src/components/navigation/NavMenuItemRow";
import { cn } from "@/lib/cn";

type MegaMenuProps = {
  menu: MegaMenuType;
  panelRef: RefObject<HTMLDivElement | null>;
  firstLinkRef: RefObject<HTMLAnchorElement | null>;
  onNavigate: () => void;
  pathname: string;
};

/** Sections column vs tools rail: tools track is half the width of the sections track (2fr : 1fr). */
const SECTIONS_AND_TOOLS_GRID = "xl:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]";

export function MegaMenu({ menu, panelRef, firstLinkRef, onNavigate, pathname }: MegaMenuProps) {
  const isToolsMenu = menu.key === "tools";
  const isCompact = menu.presentation === "compact";
  const tools = menu.tools ?? [];
  const showToolsCol = menu.showToolsRail !== false && tools.length > 0;
  const showFeaturedCard = menu.showFeatured !== false && Boolean(menu.featured);
  const sectionCount = menu.sections.length;
  /** Fewer section cards → narrower mega so the panel does not feel hollow. */
  const dense = sectionCount <= 2 && !isToolsMenu && !isCompact;

  let assignedFirstFocus = false;

  const sectionCards = menu.sections.map((section) => (
    <div
      key={section.title}
      className="min-w-0 rounded-card border border-border/60 bg-surface-muted/95 p-4 shadow-none ring-1 ring-inset ring-border/15 sm:p-[1.125rem]"
    >
      <h4 className="mb-3 border-b border-border/80 pb-2.5 text-[11px] font-bold uppercase leading-tight tracking-[0.12em] text-foreground-muted">
        {section.title}
      </h4>
      {section.roadmapNote ? (
        <p className="mb-2.5 text-[11px] leading-snug text-foreground-faint">{section.roadmapNote}</p>
      ) : null}
      <ul className="space-y-0.5">
        {section.items.map((entry, index) => {
          const isLive = isNavItemLinkable(entry);
          const attachFirstLinkRef = isLive && !assignedFirstFocus;
          if (attachFirstLinkRef) assignedFirstFocus = true;
          return (
            <li key={`${section.title}-${entry.label}-${index}`}>
              <NavMenuItemRow
                item={entry}
                pathname={pathname}
                variant="mega"
                onNavigate={onNavigate}
                attachFirstLinkRef={attachFirstLinkRef}
                firstLinkRef={firstLinkRef}
              />
            </li>
          );
        })}
      </ul>
    </div>
  ));

  const featuredLive = menu.featured?.navStatus === "live" && menu.featured.href;
  const featuredCompact =
    menu.megaDensity === "standard" || menu.presentation === "compact" || menu.key === "services";

  const featuredBlock = showFeaturedCard ? (
    <div
      className={cn(
        "flex flex-col gap-3.5 rounded-card border border-brand/25 bg-gradient-to-br from-brand-muted/90 to-accent-muted/80 shadow-card ring-1 ring-border/25",
        featuredCompact ? "p-4" : "p-5"
      )}
    >
      <p className="text-xs font-semibold uppercase leading-none tracking-[0.14em] text-brand-strong">Featured</p>
      <h4
        className={cn(
          "font-semibold leading-snug text-foreground",
          featuredCompact ? "text-sm" : "text-base"
        )}
      >
        {menu.featured?.label ?? `${menu.label} overview`}
      </h4>
      {menu.featured?.description ? (
        <p
          className={cn(
            "leading-relaxed text-foreground-muted",
            featuredCompact ? "text-xs" : "text-sm"
          )}
        >
          {menu.featured.description}
        </p>
      ) : null}
      {featuredLive ? (
        <Link
          href={menu.featured!.href!}
          onClick={onNavigate}
          className="mt-1 inline-flex w-fit items-center rounded-lg px-2 py-1.5 text-sm font-semibold text-link transition-colors duration-150 hover:bg-brand-muted hover:text-link-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/25 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
        >
          {menu.featured!.label} -&gt;
        </Link>
      ) : menu.featured?.navStatus === "comingSoon" ? (
        <p className="text-xs font-medium text-foreground-faint">Coming soon</p>
      ) : null}
    </div>
  ) : null;

  const listAlreadyHasToolsHub = tools.some(
    (t) => t.navStatus === "live" && t.href === "/netherlands/tools/" && /open tools hub/i.test(t.label)
  );

  const toolsBlock = showToolsCol ? (
    <div className="flex min-w-0 w-full flex-col gap-4 rounded-card border border-border/90 bg-surface-muted p-5 shadow-none ring-1 ring-inset ring-border/20">
      <div className="space-y-2">
        <h4 className="text-[11px] font-bold uppercase leading-none tracking-[0.12em] text-foreground-muted">Tools</h4>
        <p className="text-xs leading-relaxed text-foreground-muted/95">Fast actions for deterministic planning.</p>
      </div>
      <ul className="flex flex-col gap-2">
        {tools.map((tool, ti) => (
          <li key={`${tool.label}-${ti}`} className="min-w-0">
            <NavMenuItemRow item={tool} pathname={pathname} variant="toolSidebar" onNavigate={onNavigate} />
          </li>
        ))}
      </ul>
      {!listAlreadyHasToolsHub ? (
        <Link
          href="/netherlands/tools/"
          onClick={onNavigate}
          className="inline-flex w-fit items-center rounded-lg px-2 py-1.5 text-sm font-semibold text-link transition-colors duration-150 hover:bg-brand-muted hover:text-link-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/25 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
        >
          Open tools hub -&gt;
        </Link>
      ) : null}
    </div>
  ) : null;

  /**
   * Section cards: Tools mega uses 4 columns on xl. Other megas: 4+ cards 2×2 on xl, 6+ use 3 then 4 on 2xl,
   * 5 cards use 2 cols on xl and 3 on 2xl so rows stay balanced.
   */
  const sectionsGridClass = cn(
    "grid gap-4 sm:gap-gap-grid",
    isToolsMenu && "sm:grid-cols-2 xl:max-h-[65vh] xl:grid-cols-4 xl:overflow-y-auto xl:pr-2",
    !isToolsMenu &&
      !isCompact &&
      (sectionCount >= 6
        ? "sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 xl:max-h-[min(70vh,800px)] xl:overflow-y-auto xl:pr-1"
        : sectionCount === 5
          ? "sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 xl:max-h-[min(70vh,800px)] xl:overflow-y-auto xl:pr-1"
          : sectionCount >= 4
            ? "sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 xl:max-h-[min(70vh,800px)] xl:overflow-y-auto xl:pr-1"
            : sectionCount === 3
              ? "sm:grid-cols-2 xl:grid-cols-3 xl:max-h-[min(70vh,800px)] xl:overflow-y-auto xl:pr-1"
              : "sm:grid-cols-2 xl:max-h-[min(70vh,800px)] xl:overflow-y-auto xl:pr-1"),
    isCompact && "sm:grid-cols-2"
  );

  const nonCompactOuterClass = cn(
    "mx-auto box-border w-full max-w-[min(96rem,calc(100vw-1.5rem))] px-4 sm:w-[92%] sm:px-6 lg:px-8",
    menu.megaDensity === "standard" && "max-w-5xl",
    menu.megaDensity === "dense" && "max-w-4xl",
    !menu.megaDensity && dense && "max-w-5xl",
    !menu.megaDensity && !dense && "max-w-[min(90rem,calc(100vw-1.5rem))] sm:w-[90%]"
  );

  if (isCompact) {
    return (
      <div className="absolute inset-x-0 top-full z-50 pt-2" data-mega-menu-key={menu.key}>
        <div
          ref={panelRef as Ref<HTMLDivElement>}
          id="mega-menu-panel"
          role="dialog"
          aria-modal="true"
          aria-label={`${menu.label} menu`}
          className="mx-auto w-[min(100%,42rem)] max-w-[95vw] px-4 sm:px-6"
        >
          <div className="max-h-[calc(100vh-6rem)] overflow-y-auto overscroll-y-contain rounded-card border border-border bg-surface-raised p-5 pb-safe shadow-popover sm:p-6 sm:px-7 sm:pb-6">
            <div
              className={cn(
                "grid gap-6 lg:items-start",
                showFeaturedCard ? "lg:grid-cols-[1fr_minmax(0,17rem)]" : "lg:grid-cols-1"
              )}
            >
              <div className={sectionsGridClass}>{sectionCards}</div>
              {showFeaturedCard ? <div className="flex flex-col gap-4">{featuredBlock}</div> : null}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const mainGridCols =
    isToolsMenu && !showToolsCol && !showFeaturedCard
      ? "xl:grid-cols-1"
      : isToolsMenu || showToolsCol
        ? showFeaturedCard && showToolsCol
          ? "xl:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)]"
          : showFeaturedCard && !showToolsCol
            ? "xl:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]"
            : !showFeaturedCard && showToolsCol
              ? SECTIONS_AND_TOOLS_GRID
              : dense
                ? "xl:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1fr)]"
                : "xl:grid-cols-[3fr_1.1fr_1.1fr]"
        : "xl:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]";

  return (
    <div className="absolute inset-x-0 top-full z-50 pt-2" data-mega-menu-key={menu.key}>
      <div
        ref={panelRef as Ref<HTMLDivElement>}
        id="mega-menu-panel"
        role="dialog"
        aria-modal="true"
        aria-label={`${menu.label} menu`}
        className={nonCompactOuterClass}
      >
        <div className="max-h-[calc(100vh-6rem)] overflow-y-auto overscroll-y-contain rounded-card border border-border bg-surface-raised p-5 pb-safe shadow-popover sm:p-6 sm:px-7 sm:pb-6">
          <div className={cn("grid items-start gap-6 sm:gap-7", mainGridCols)}>
            <div className={cn(sectionsGridClass, showToolsCol && "min-w-0")}>{sectionCards}</div>

            {featuredBlock}

            {showToolsCol ? toolsBlock : null}
          </div>
        </div>
      </div>
    </div>
  );
}
