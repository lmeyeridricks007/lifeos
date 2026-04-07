import type { ReactNode } from "react";
import {
  ArticleBody,
  ArticleContextualTools,
  ArticleFaq,
  ArticleHero,
  ArticlePageRoot,
  ArticleRelated,
  ArticleSummary,
} from "@/components/page-families";
import { PillarMainStack } from "@/components/page/pillar-template";
import { cn } from "@/lib/cn";

export type ArticleSupportPageTemplateProps = {
  rootClassName?: string;
  mainStackClassName?: string;
  className?: string;
  hero: ReactNode;
  /**
   * Wraps the main stack (e.g. `<Section><Container>…</Container></Section>` for trust pages).
   */
  wrapContent?: (mainStack: ReactNode) => ReactNode;
  summary?: ReactNode;
  /** One or more key sections (caller composes 3–5 blocks inside). */
  body: ReactNode;
  contextualTools?: ReactNode;
  relatedGuides?: ReactNode;
  faq?: ReactNode;
};

/**
 * Narrow supporting guide archetype: BSN detail, deposit, probation, landlord issues, benefits deep-dives.
 */
export function ArticleSupportPageTemplate({
  rootClassName,
  mainStackClassName,
  className,
  hero,
  wrapContent,
  summary,
  body,
  contextualTools,
  relatedGuides,
  faq,
}: ArticleSupportPageTemplateProps) {
  const stack = (
    <PillarMainStack className={mainStackClassName}>
      {summary != null ? <ArticleSummary>{summary}</ArticleSummary> : null}
      <ArticleBody>{body}</ArticleBody>
      <ArticleContextualTools>{contextualTools}</ArticleContextualTools>
      <ArticleRelated>{relatedGuides}</ArticleRelated>
      <ArticleFaq>{faq}</ArticleFaq>
    </PillarMainStack>
  );

  return (
    <ArticlePageRoot className={cn(rootClassName, className)}>
      <ArticleHero>{hero}</ArticleHero>
      {wrapContent != null ? wrapContent(stack) : stack}
    </ArticlePageRoot>
  );
}
