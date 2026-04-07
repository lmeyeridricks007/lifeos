import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { TOOL_SECTION_IDS } from "./contract-ids";
import { PageFamilyRegion } from "./PageFamilyRegion";

export function ToolPageRoot({ className, children }: { className?: string; children: ReactNode }) {
  return <main className={cn(className)}>{children}</main>;
}

/** Title + value proposition (typically ToolHero client section). */
export function ToolHero({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <PageFamilyRegion as="div" family="tool" contractSection="hero" id={TOOL_SECTION_IDS.hero} className={cn(className)}>
      {children}
    </PageFamilyRegion>
  );
}

/** “What this tool helps with” — intro / disclosure block. */
export function ToolHelpsWith({ className, children }: { className?: string; children: ReactNode }) {
  if (children == null) return null;
  return (
    <PageFamilyRegion
      as="div"
      family="tool"
      contractSection="helps-with"
      id={TOOL_SECTION_IDS.helpsWith}
      className={cn(className)}
    >
      {children}
    </PageFamilyRegion>
  );
}

/** Primary inputs + interactive surface (checklist, planner, etc.). */
export function ToolSurface({ className, children }: { className?: string; children: ReactNode }) {
  if (children == null) return null;
  return (
    <PageFamilyRegion
      as="div"
      family="tool"
      contractSection="surface"
      id={TOOL_SECTION_IDS.surface}
      className={cn(className)}
    >
      {children}
    </PageFamilyRegion>
  );
}

/** Short usage guidance — infographics, explanatory cards, long SEO blocks that explain usage. */
export function ToolHowToUse({ className, children }: { className?: string; children: ReactNode }) {
  if (children == null) return null;
  return (
    <PageFamilyRegion
      as="div"
      family="tool"
      contractSection="how-to-use"
      id={TOOL_SECTION_IDS.howToUse}
      className={cn(className)}
    >
      {children}
    </PageFamilyRegion>
  );
}

/** Related guides, recommended services, “what happens next”. */
export function ToolWhatHappensNext({ className, children }: { className?: string; children: ReactNode }) {
  if (children == null) return null;
  return (
    <PageFamilyRegion
      as="div"
      family="tool"
      contractSection="what-next"
      id={TOOL_SECTION_IDS.whatNext}
      className={cn(className)}
    >
      {children}
    </PageFamilyRegion>
  );
}

/** FAQ accordion or trust / disclaimer emphasis. */
export function ToolFaqOrTrust({ className, children }: { className?: string; children: ReactNode }) {
  if (children == null) return null;
  return (
    <PageFamilyRegion
      as="div"
      family="tool"
      contractSection="faq-or-trust"
      id={TOOL_SECTION_IDS.faqOrTrust}
      className={cn(className)}
    >
      {children}
    </PageFamilyRegion>
  );
}
