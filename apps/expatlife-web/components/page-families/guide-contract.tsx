import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { GUIDE_SECTION_IDS } from "./contract-ids";
import { PageFamilyRegion } from "./PageFamilyRegion";

/** Root wrapper for guide-family pages (inner column may use `<main>`). */
export function GuidePageRoot({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("min-h-screen", className)}>{children}</div>;
}

export function GuideHero({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <PageFamilyRegion
      as="section"
      family="guide"
      contractSection="hero"
      id={GUIDE_SECTION_IDS.hero}
      className={className}
    >
      {children}
    </PageFamilyRegion>
  );
}

/** Optional: quick answers / “at a glance” summaries above the main column. */
export function GuideAtAGlance({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <PageFamilyRegion
      as="div"
      family="guide"
      contractSection="at-a-glance"
      id={GUIDE_SECTION_IDS.atAGlance}
      className={cn(className)}
    >
      {children}
    </PageFamilyRegion>
  );
}

/** Primary guide sections (JSON `sections` loop). */
export function GuideKeySections({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <PageFamilyRegion
      as="div"
      family="guide"
      contractSection="key-sections"
      id={GUIDE_SECTION_IDS.keySections}
      className={cn(className)}
    >
      {children}
    </PageFamilyRegion>
  );
}

/** Contextual tools (CTAs, featured tools, promo bands). */
export function GuideToolsRegion({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <PageFamilyRegion
      as="div"
      family="guide"
      contractSection="tools"
      id={GUIDE_SECTION_IDS.tools}
      className={cn(className)}
    >
      {children}
    </PageFamilyRegion>
  );
}

/** Scenario / personalization blocks. */
export function GuideScenario({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <PageFamilyRegion
      as="div"
      family="guide"
      contractSection="scenario"
      id={GUIDE_SECTION_IDS.scenario}
      className={cn(className)}
    >
      {children}
    </PageFamilyRegion>
  );
}

/** Related guides, “explore next”, end CTAs — internal next-step cluster. */
export function GuideRelatedNextSteps({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <PageFamilyRegion
      as="div"
      family="guide"
      contractSection="related-next"
      id={GUIDE_SECTION_IDS.related}
      className={cn(className)}
    >
      {children}
    </PageFamilyRegion>
  );
}

/** Optional `id` when the inner block already sets an anchor (e.g. `faq`). */
export function GuideFaq({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <PageFamilyRegion
      as="div"
      family="guide"
      contractSection="faq"
      id={id ?? GUIDE_SECTION_IDS.faq}
      className={cn(className)}
    >
      {children}
    </PageFamilyRegion>
  );
}
