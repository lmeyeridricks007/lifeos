/**
 * Shared content types and defaults for tool explanatory sections.
 * Used by ToolIntroSection, ToolHowItWorksSection, etc.
 */

export type ToolExplanatorySection = {
  id: string;
  title: string;
  /** Optional short subtitle or eyebrow */
  subtitle?: string;
  /** HTML-safe paragraphs or list items; render as prose. */
  body: string[];
  /** Optional list of bullet points. */
  bullets?: string[];
};

export type ToolRelatedGuide = {
  href: string;
  title: string;
  description: string;
};

export type ToolRelatedTool = {
  href: string;
  label: string;
  description?: string;
};

export type ToolPhaseOverviewItem = {
  phase: string;
  label: string;
  summary: string;
};
