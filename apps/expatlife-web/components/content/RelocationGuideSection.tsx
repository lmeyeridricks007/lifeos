import type { ReactNode } from "react";
import { Section } from "@/components/ui/section";
import { ToolInfographicBlock } from "@/src/components/tools/shared/ToolInfographicBlock";

type RelocationGuideSectionProps = {
  id?: string;
  title: string;
  children: ReactNode;
  infographicSrc?: string;
  infographicAlt?: string;
};

/**
 * One of the three SEO content sections (before move, after arrival, first 90 days).
 * Renders title, prose content, and an optional infographic.
 */
export function RelocationGuideSection({
  id,
  title,
  children,
  infographicSrc,
  infographicAlt,
}: RelocationGuideSectionProps) {
  return (
    <Section id={id} title={title}>
      <div className="prose prose-slate max-w-none text-slate-700">
        {children}
      </div>
      {infographicSrc && infographicAlt ? (
        <div className="mt-8">
          <ToolInfographicBlock
            src={infographicSrc}
            alt={infographicAlt}
            width={800}
            height={450}
          />
        </div>
      ) : null}
    </Section>
  );
}
