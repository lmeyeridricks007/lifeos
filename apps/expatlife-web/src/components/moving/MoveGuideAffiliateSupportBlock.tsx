import Link from "next/link";
import { BoldInline } from "@/components/content/PillarContentBlocks";
import { AffiliateBlockView } from "@/src/components/affiliates/AffiliateBlockView";
import { AffiliateDisclosure } from "@/src/components/affiliates/AffiliateDisclosure";
import { loadPlacementWithProviders } from "@/src/lib/affiliates/loadAffiliates";
import { cn } from "@/lib/cn";
import { movingNlGuideSectionShellClass, movingNlGuideSectionTopAccentClass } from "@/lib/ui/moving-nl-pillar-identity";

type MoveGuideAffiliateSupportLink = {
  href: string;
  label: string;
};

type MoveGuideAffiliateSupportBlockProps = {
  placementId: string;
  categoryLinks: MoveGuideAffiliateSupportLink[];
  browseLabel?: string;
  destinationCountry?: string;
  originCountry?: string;
  /** Avoid a second H2 when wrapped in a SectionBlock that already titles the block. */
  hidePlacementTitle?: boolean;
};

export function MoveGuideAffiliateSupportBlock({
  placementId,
  categoryLinks,
  browseLabel,
  destinationCountry = "netherlands",
  originCountry,
  hidePlacementTitle,
}: MoveGuideAffiliateSupportBlockProps) {
  const data = loadPlacementWithProviders(placementId, destinationCountry, originCountry);
  const hasCards = Boolean(data?.items.length);
  const placement = data?.placement;
  /** When the registry returns no rows, still show the placement framing + disclosure so mid-page is not only inline links. */
  const showPlacementFallback = Boolean(placement && !hasCards && categoryLinks.length > 0);

  if (!hasCards && categoryLinks.length === 0) return null;

  return (
    <div className="space-y-4">
      {hasCards && data ? (
        <AffiliateBlockView placement={data.placement} items={data.items} hidePlacementTitle={hidePlacementTitle} />
      ) : null}
      {showPlacementFallback && placement ? (
        <div className={cn("relative overflow-hidden", movingNlGuideSectionShellClass)}>
          <div className={movingNlGuideSectionTopAccentClass} aria-hidden />
          <div className="relative">
            {placement.title && !hidePlacementTitle ? (
              <h2 className="text-xl font-bold tracking-tight text-copilot-text-primary sm:text-2xl">{placement.title}</h2>
            ) : null}
            {placement.intro ? (
              <p
                className={cn(
                  "text-sm text-copilot-text-secondary md:text-base",
                  placement.title && !hidePlacementTitle ? "mt-2" : "mt-0"
                )}
              >
                <BoldInline text={placement.intro} className="[&_strong]:font-semibold [&_strong]:text-copilot-text-primary" />
              </p>
            ) : null}
            <div className="mt-4">
              <AffiliateDisclosure text={placement.disclosure} variant="copilot" />
            </div>
          </div>
        </div>
      ) : null}
      {categoryLinks.length ? (
        <p className="text-sm leading-relaxed text-foreground-muted">
          {browseLabel ?? (hasCards ? "Browse more companies: " : "Browse companies by category: ")}
          {categoryLinks.map((link, index) => (
            <span key={link.href}>
              {index > 0 ? <span aria-hidden> · </span> : null}
              <Link href={link.href} className="font-semibold text-link hover:underline">
                {link.label}
              </Link>
            </span>
          ))}
        </p>
      ) : null}
    </div>
  );
}
