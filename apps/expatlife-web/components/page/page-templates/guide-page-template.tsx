import type { ReactNode } from "react";
import {
  GuideAtAGlance,
  GuideFaq,
  GuideHero,
  GuideKeySections,
  GuidePageRoot,
  GuideRelatedNextSteps,
  GuideScenario,
  GuideToolsRegion,
} from "@/components/page-families";
import { PillarMainStack } from "@/components/page/pillar-template";
import { cn } from "@/lib/cn";

export type GuidePageTemplateProps = {
  rootClassName?: string;
  mainStackClassName?: string;
  className?: string;
  hero: ReactNode;
  /**
   * Wraps hero + main stack (e.g. `<Container className="py-6 sm:py-8">…</Container>`).
   * Use for max-width + vertical padding around the full guide column.
   */
  wrapContent?: (inner: ReactNode) => ReactNode;
  atAGlance?: ReactNode;
  /** Primary explainer sections (3–6 blocks). Omit when everything lives in other slots. */
  keySections?: ReactNode;
  /** When true, renders `scenario` before `keySections` (moving pillar order). */
  scenarioBeforeKeySections?: boolean;
  darkSystem?: ReactNode;
  scenario?: ReactNode;
  tools?: ReactNode;
  nextSteps?: ReactNode;
  faq?: ReactNode;
  /** Rendered after the FAQ region (e.g. post-FAQ monetization per `MonetizationPageType`). */
  afterFaq?: ReactNode;
};

/**
 * Long-form guide archetype: pillar guides, renting, working in NL, etc.
 */
export function GuidePageTemplate({
  rootClassName,
  mainStackClassName,
  className,
  hero,
  wrapContent,
  atAGlance,
  keySections,
  scenarioBeforeKeySections = false,
  darkSystem,
  scenario,
  tools,
  nextSteps,
  faq,
  afterFaq,
}: GuidePageTemplateProps) {
  const main = (
    <>
      <GuideHero>{hero}</GuideHero>
      <PillarMainStack className={mainStackClassName}>
        {atAGlance != null ? <GuideAtAGlance>{atAGlance}</GuideAtAGlance> : null}
        {scenarioBeforeKeySections && scenario != null ? <GuideScenario>{scenario}</GuideScenario> : null}
        {keySections != null ? <GuideKeySections>{keySections}</GuideKeySections> : null}
        {darkSystem}
        {!scenarioBeforeKeySections && scenario != null ? <GuideScenario>{scenario}</GuideScenario> : null}
        {tools != null ? <GuideToolsRegion>{tools}</GuideToolsRegion> : null}
        {nextSteps != null ? <GuideRelatedNextSteps>{nextSteps}</GuideRelatedNextSteps> : null}
        {faq != null ? <GuideFaq>{faq}</GuideFaq> : null}
        {afterFaq != null ? <div className="w-full">{afterFaq}</div> : null}
      </PillarMainStack>
    </>
  );

  return (
    <GuidePageRoot className={cn(rootClassName, className)}>
      {wrapContent != null ? wrapContent(main) : main}
    </GuidePageRoot>
  );
}
