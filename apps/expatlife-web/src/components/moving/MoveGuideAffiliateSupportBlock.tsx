import Link from "next/link";
import { AffiliateBlockView } from "@/src/components/affiliates/AffiliateBlockView";
import { loadPlacementWithProviders } from "@/src/lib/affiliates/loadAffiliates";

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
};

export function MoveGuideAffiliateSupportBlock({
  placementId,
  categoryLinks,
  browseLabel,
  destinationCountry = "netherlands",
  originCountry,
}: MoveGuideAffiliateSupportBlockProps) {
  const data = loadPlacementWithProviders(placementId, destinationCountry, originCountry);
  const hasCards = Boolean(data?.items.length);

  if (!hasCards && categoryLinks.length === 0) return null;

  return (
    <div className="space-y-4">
      {hasCards && data ? <AffiliateBlockView placement={data.placement} items={data.items} /> : null}
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
