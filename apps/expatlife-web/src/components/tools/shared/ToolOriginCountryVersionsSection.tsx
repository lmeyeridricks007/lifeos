import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionBlock } from "@/components/page/pillar-template";
import { countryVersionsForTool, getMovingCountryTool } from "@/src/lib/tools/shared/countryToolLinkModel";
import type { ToolSlug } from "@/src/lib/tools/shared/loadCountryLandingContent";
import { toSiteHref } from "@/lib/seo/site-url";

type Props = {
  toolSlug: ToolSlug;
  /** Compact list under the interactive tool (not a keyword dump). */
  className?: string;
};

/**
 * Contextual “versions by origin country” for a base moving tool.
 * Links only to live `/from/{country}` landings — never staged or 404 country tools.
 */
export function ToolOriginCountryVersionsSection({ toolSlug, className }: Props) {
  const tool = getMovingCountryTool(toolSlug);
  const versions = countryVersionsForTool(toolSlug);
  const originHub = toSiteHref("/netherlands/moving-to-netherlands-from");

  return (
    <Container className={className}>
      <SectionBlock
        compact
        title={`Use this ${tool.label.toLowerCase()} from your country`}
        className="pt-4 md:pt-6"
      >
        <p className="max-w-3xl text-sm leading-relaxed text-copilot-text-secondary md:text-base">
          Prefer a page written for your origin? Open the country version first — it explains what often
          matters for your route, then opens the tool with your country prefilled. Or browse all{" "}
          <Link href={originHub} className="font-medium text-link hover:underline">
            moving-from-country guides
          </Link>
          .
        </p>
        <ul className="mt-4 columns-1 gap-x-8 sm:columns-2 lg:columns-3">
          {versions.map((v) => (
            <li key={v.slug} className="mb-2 break-inside-avoid">
              <Link
                href={v.href}
                className="text-sm font-medium text-link hover:underline"
              >
                {tool.label} from {v.label}
              </Link>
            </li>
          ))}
        </ul>
      </SectionBlock>
    </Container>
  );
}
