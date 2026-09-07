import { CardLink } from "@/components/ui/card-link";
import { Container } from "@/components/ui/container";
import { SectionBlock } from "@/components/page/pillar-template";
import {
  countryGuidePath,
  siblingCountryToolLandings,
} from "@/src/lib/tools/shared/countryToolLinkModel";
import type { ToolSlug } from "@/src/lib/tools/shared/loadCountryLandingContent";
import { getOriginCountryLabel } from "@/src/lib/tools/shared/toolCountryContext";
import Link from "next/link";

type Props = {
  countrySlug: string;
  currentTool: ToolSlug;
};

/**
 * Parent guide + sibling country-tool landings for the same origin.
 */
export function CountryToolLandingRelatedStrip({ countrySlug, currentTool }: Props) {
  const siblings = siblingCountryToolLandings(countrySlug, currentTool);
  const guideHref = countryGuidePath(countrySlug);
  const label = getOriginCountryLabel(countrySlug);

  return (
    <Container>
      <SectionBlock compact title={`Next steps for moving from ${label}`} className="pt-4 md:pt-6">
        <p className="mb-4 max-w-3xl text-sm text-copilot-text-secondary">
          Start from the{" "}
          <Link href={guideHref} className="font-medium text-link hover:underline">
            moving to the Netherlands from {label} guide
          </Link>
          , then use the other country-specific tools when you need them.
        </p>
        {siblings.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {siblings.map((s) => (
              <CardLink
                key={s.href}
                href={s.href}
                title={s.title}
                description={s.description}
                className="border-l-[3px] border-l-copilot-primary/70 bg-copilot-surface ring-1 ring-copilot-primary/10 hover:border-l-copilot-primary"
              />
            ))}
          </div>
        ) : null}
      </SectionBlock>
    </Container>
  );
}
