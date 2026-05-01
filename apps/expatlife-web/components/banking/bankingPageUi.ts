import { cn } from "@/lib/cn";
import { activeBrightnessPress, transitionInteractive } from "@/lib/ui/interaction";

/** Shared page chrome for Money · Banking hub and guide pages. */
export const BANKING_GUIDE_STACK_CLASS = "min-w-0 max-w-full gap-6 overflow-x-hidden sm:gap-8 md:gap-9";

/** Scroll offset for in-page anchors behind sticky chrome (banking guides). */
export const bankingGuideSectionScrollMarginClass = "scroll-mt-28 md:scroll-mt-32";

/** Primary / secondary / tertiary actions — match Best Banks, Fees, Traditional vs Digital, etc. */
export const bankingGuidePrimaryCtaClass = cn(
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-brand-strong/25 bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
  transitionInteractive,
  activeBrightnessPress
);

export const bankingGuideSecondaryCtaClass = cn(
  "inline-flex min-h-[44px] items-center justify-center rounded-xl border border-border bg-surface-raised px-5 py-2.5 text-sm font-semibold text-foreground shadow-card hover:border-border-strong hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
  transitionInteractive,
  activeBrightnessPress
);

export const bankingGuideTertiaryLinkClass =
  "text-sm font-medium text-link underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 rounded-sm";

/** Small uppercase context chips in banking heroes. */
export const bankingGuideInfoChipClass =
  "inline-flex rounded-full border border-copilot-primary/15 bg-copilot-bg-soft/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-copilot-primary";

export const BANKING_SECTION_PANEL_CLASS =
  "rounded-2xl border border-border/55 bg-gradient-to-b from-surface-muted/45 via-surface-raised to-surface-muted/30 px-5 pb-8 pt-7 shadow-sm ring-1 ring-border/20 sm:px-7 sm:pb-10 sm:pt-8";

/** Major guide section shell: scroll margin + shared banking panel. */
export const BANKING_GUIDE_MAJOR_SECTION_CLASS = cn(bankingGuideSectionScrollMarginClass, BANKING_SECTION_PANEL_CLASS);

/** Compact actions inside banking visual cards (fee pattern + low-cost shortlist). */
export const bankingGuideCardPrimaryCtaClass = cn(
  "inline-flex min-h-[40px] items-center justify-center rounded-xl border border-brand-strong/25 bg-brand px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
  transitionInteractive,
  activeBrightnessPress
);

export const bankingGuideCardSecondaryLinkClass =
  "inline-flex min-h-[40px] items-center justify-center rounded-xl border border-border bg-white/80 px-3 py-2 text-xs font-semibold text-link underline-offset-4 transition hover:border-border-strong hover:bg-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas";

export const bankingGuideCardSoftCtaClass =
  "inline-flex min-h-[40px] items-center justify-center rounded-xl border border-border bg-surface-raised px-3 py-2 text-xs font-semibold text-foreground shadow-sm transition hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas";

export const BANKING_AT_A_GLANCE_PANEL_CLASS =
  "relative overflow-hidden rounded-2xl border border-border/55 bg-gradient-to-b from-surface-muted/45 via-surface-raised to-surface-muted/30 p-6 shadow-sm ring-1 ring-border/20 sm:p-7";

export const BANKING_VISUAL_CARD_SHELL_CLASS =
  "relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-b from-copilot-bg-soft/70 via-white to-copilot-surface p-0 shadow-sm ring-1 ring-border/15";

export const BANKING_VISUAL_CARD_BODY_CLASS = "flex flex-1 flex-col p-4 sm:p-5";

export const BANKING_VISUAL_CARD_CHIP_CLASS =
  "rounded-full border border-border/70 bg-white/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.13em] text-foreground-muted ring-1 ring-border/25";

export const BANKING_VISUAL_CARD_NUMBER_CHIP_CLASS =
  "rounded-full bg-brand/10 px-2 py-1 text-[10px] font-bold tabular-nums text-brand-strong ring-1 ring-brand/20";

export const BANKING_VISUAL_CARD_PANEL_CLASS =
  "rounded-xl border border-border/55 bg-white/65 p-3 ring-1 ring-border/15";
