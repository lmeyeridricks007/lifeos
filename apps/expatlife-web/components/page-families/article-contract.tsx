import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ARTICLE_SECTION_IDS } from "./contract-ids";
import { PageFamilyRegion } from "./PageFamilyRegion";

/** Long-form article / MDX fallback — one main landmark. */
export function ArticlePageRoot({ className, children }: { className?: string; children: ReactNode }) {
  return <main className={cn(className)}>{children}</main>;
}

export function ArticleHero({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <PageFamilyRegion
      as="header"
      family="article"
      contractSection="hero"
      id={ARTICLE_SECTION_IDS.hero}
      className={cn(className)}
    >
      {children}
    </PageFamilyRegion>
  );
}

/** Short summary / context above the body. */
export function ArticleSummary({ className, children }: { className?: string; children: ReactNode }) {
  if (children == null) return null;
  return (
    <PageFamilyRegion
      as="div"
      family="article"
      contractSection="summary"
      id={ARTICLE_SECTION_IDS.summary}
      className={cn(className)}
    >
      {children}
    </PageFamilyRegion>
  );
}

export function ArticleBody({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <PageFamilyRegion
      as="article"
      family="article"
      contractSection="body"
      id={ARTICLE_SECTION_IDS.body}
      className={cn(className)}
    >
      {children}
    </PageFamilyRegion>
  );
}

/** Optional calculators, checklists, or deep links placed after the main explainer body. */
export function ArticleContextualTools({ className, children }: { className?: string; children: ReactNode }) {
  if (children == null) return null;
  return (
    <PageFamilyRegion
      as="div"
      family="article"
      contractSection="contextual-tools"
      id={ARTICLE_SECTION_IDS.contextualTools}
      className={cn(className)}
    >
      {children}
    </PageFamilyRegion>
  );
}

export function ArticleRelated({ className, children }: { className?: string; children: ReactNode }) {
  if (children == null) return null;
  return (
    <PageFamilyRegion
      as="aside"
      family="article"
      contractSection="related"
      id={ARTICLE_SECTION_IDS.related}
      className={cn(className)}
    >
      {children}
    </PageFamilyRegion>
  );
}

export function ArticleFaq({ className, children }: { className?: string; children: ReactNode }) {
  if (children == null) return null;
  return (
    <PageFamilyRegion
      as="section"
      family="article"
      contractSection="faq"
      id={ARTICLE_SECTION_IDS.faq}
      className={cn(className)}
    >
      {children}
    </PageFamilyRegion>
  );
}
