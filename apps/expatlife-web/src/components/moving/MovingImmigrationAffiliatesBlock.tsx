import Link from "next/link";
import { AffiliateBlockView } from "@/src/components/affiliates/AffiliateBlockView";
import { loadPlacementWithProviders } from "@/src/lib/affiliates/loadAffiliates";

const PLACEMENT_ID = "nl-moving-visas-immigration-providers";

/**
 * Registry-backed providers for Move visa / residence permit guides.
 * Uses `nl-moving-visas-immigration-providers` placement + services hub fallbacks.
 * Render mid-journey in `PillarJourneyStack` (not in `tools`, which sorts after the full article).
 */
export function MovingImmigrationAffiliatesBlock() {
  const data = loadPlacementWithProviders(PLACEMENT_ID, "netherlands", undefined);
  const hasCards = Boolean(data?.items.length);

  return (
    <div className="space-y-4">
      {hasCards && data ? <AffiliateBlockView placement={data.placement} items={data.items} /> : null}
      <p className="text-sm leading-relaxed text-foreground-muted">
        {hasCards ? "More options: " : "Browse providers by category: "}
        <Link href="/netherlands/services/visa-consultants/" className="font-semibold text-link hover:underline">
          Visa consultants
        </Link>
        <span aria-hidden> · </span>
        <Link href="/netherlands/services/immigration-lawyers/" className="font-semibold text-link hover:underline">
          Immigration lawyers
        </Link>
        <span aria-hidden> · </span>
        <Link href="/netherlands/services/relocation-services/" className="font-semibold text-link hover:underline">
          Relocation services
        </Link>
        <span aria-hidden> · </span>
        <Link href="/netherlands/services/relocation-agencies/" className="font-semibold text-link hover:underline">
          Relocation agencies
        </Link>
        <span aria-hidden> · </span>
        <Link href="/netherlands/services/" className="font-semibold text-link hover:underline">
          All services
        </Link>
      </p>
    </div>
  );
}
