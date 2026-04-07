import { transitionSurface } from "./interaction";

/**
 * Shared interactive chrome for compact toolbars (aligned with Button secondary semantics).
 */
export const toolbarControlClass = [
  transitionSurface,
  "inline-flex items-center gap-2 rounded-lg border border-border bg-surface-raised px-3 py-2 text-sm font-medium text-foreground-muted ease-out hover:border-border-strong hover:bg-surface-muted active:bg-surface-subtle motion-reduce:active:bg-surface-raised focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/25 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
].join(" ");

/** Smaller, quieter controls for editorial hero reference layout (save / copy / share row). */
export const toolbarControlQuietClass = [
  transitionSurface,
  "inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-surface-muted/40 px-2.5 py-1.5 text-xs font-medium text-slate-600 ease-out hover:border-border hover:bg-surface-muted hover:text-slate-800 active:bg-surface-muted/70 motion-reduce:active:bg-surface-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/20 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
].join(" ");

/** Save / copy / share on dark hero (ExpatOS moving pillar) */
export const toolbarControlInverseClass = [
  transitionSurface,
  "inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/10 px-2.5 py-1.5 text-xs font-medium text-slate-100 ease-out hover:border-white/35 hover:bg-white/15 hover:text-white active:bg-white/10 motion-reduce:active:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copilot-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-copilot-bg-dark",
].join(" ");
