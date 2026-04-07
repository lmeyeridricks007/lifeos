/**
 * Shared visual chrome for global shell: sticky sidebars, support modules, header utilities.
 */

/** Right-rail card: Start here, tools, affiliates (product support module). */
export const shellSupportModuleClass =
  "rounded-card border border-border/80 bg-surface-raised p-5 shadow-card ring-1 ring-border/25";

export const shellSupportModuleTitleClass =
  "text-[11px] font-bold uppercase tracking-[0.14em] text-brand-strong";

/** Primary action rows inside support modules (pillar sidebar). */
export const shellSupportActionLinkClass =
  "block rounded-lg border border-border/60 bg-surface-muted/50 px-3 py-2.5 text-sm font-medium text-foreground transition-colors duration-150 hover:border-brand/25 hover:bg-brand-muted/40 hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/20";

/** Compact header utility row: search, country, CTA alignment */
export const shellHeaderToolsClass = "flex shrink-0 flex-nowrap items-center gap-3 lg:gap-3.5";

/** Inline CTA chips (pillar mobile “Start here”). */
export const shellSupportChipLinkClass =
  "inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-surface-raised px-4 py-2.5 text-sm font-medium text-foreground shadow-card transition-[border-color,background-color,box-shadow] duration-150 hover:border-brand/25 hover:bg-brand-muted/40 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/20";
