import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { HUB_SECTION_IDS } from "./contract-ids";
import { PageFamilyRegion } from "./PageFamilyRegion";

export function HubPageRoot({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn(className)}>{children}</div>;
}

export function HubHero({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <PageFamilyRegion
      as="header"
      family="hub"
      contractSection="hero"
      id={HUB_SECTION_IDS.hero}
      className={cn(className)}
    >
      {children}
    </PageFamilyRegion>
  );
}

/** “What this section helps with” — purpose / orientation (often overlaps with at-a-glance on hubs). */
export function HubWhatThisHelpsWith({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <PageFamilyRegion
      as="section"
      family="hub"
      contractSection="purpose"
      id={HUB_SECTION_IDS.purpose}
      className={cn(className)}
    >
      {children}
    </PageFamilyRegion>
  );
}

/** Primary pathways / scenario clusters. */
export function HubPathways({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <PageFamilyRegion
      as="section"
      family="hub"
      contractSection="pathways"
      id={HUB_SECTION_IDS.pathways}
      className={cn(className)}
    >
      {children}
    </PageFamilyRegion>
  );
}

/** Stage cards, category grids, comparison entry points. */
export function HubCategoriesOrComparisons({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <PageFamilyRegion
      as="div"
      family="hub"
      contractSection="categories"
      id={HUB_SECTION_IDS.categories}
      className={cn(className)}
    >
      {children}
    </PageFamilyRegion>
  );
}

export function HubTools({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <PageFamilyRegion
      as="section"
      family="hub"
      contractSection="tools"
      id={HUB_SECTION_IDS.tools}
      className={cn(className)}
    >
      {children}
    </PageFamilyRegion>
  );
}

export function HubRelatedNextSteps({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <PageFamilyRegion
      as="section"
      family="hub"
      contractSection="related-next"
      id={HUB_SECTION_IDS.related}
      className={cn(className)}
    >
      {children}
    </PageFamilyRegion>
  );
}

export function HubFaq({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <PageFamilyRegion
      as="section"
      family="hub"
      contractSection="faq"
      id={HUB_SECTION_IDS.faq}
      className={cn(className)}
    >
      {children}
    </PageFamilyRegion>
  );
}
