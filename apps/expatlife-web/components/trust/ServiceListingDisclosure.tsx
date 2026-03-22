import Link from "next/link";

/**
 * Trust note for service category pages: explains data source and that inclusion ≠ endorsement.
 * Place near the provider directory or at the bottom of the listing section.
 */
export type ServiceListingSourceType = "official_register" | "trusted_ecosystem" | "curated" | "mixed";

const SOURCE_MESSAGES: Record<ServiceListingSourceType, string> = {
  official_register:
    "This list is built from an official or public register. Inclusion follows the criteria of that source.",
  trusted_ecosystem:
    "This list is based on trusted public-support or institutional ecosystems. We structure the data for comparison.",
  curated:
    "This list is editorially curated for relevance to expats. We add and update providers based on public information.",
  mixed:
    "This list may combine official registers, trusted ecosystems, and editorial curation. See the category page for details.",
};

type Props = {
  /** How the provider data is sourced. */
  sourceType: ServiceListingSourceType;
  /** Optional short note (e.g. "Source: IND recognised sponsors register"). */
  sourceNote?: string;
  /** Optional link to methodology or how we rank page. */
  methodologyHref?: string;
  className?: string;
};

export function ServiceListingDisclosure({
  sourceType,
  sourceNote,
  methodologyHref = "/how-we-rank-services/",
  className = "",
}: Props) {
  return (
    <div
      className={`rounded-xl border border-slate-200 bg-amber-50/50 p-4 text-sm text-slate-700 ${className}`}
      role="note"
      aria-label="Service listing disclosure"
    >
      <p className="font-semibold text-slate-800">About this list</p>
      <p className="mt-1">{SOURCE_MESSAGES[sourceType]}</p>
      {sourceNote ? (
        <p className="mt-1 text-slate-600">{sourceNote}</p>
      ) : null}
      <p className="mt-2">
        Inclusion does not mean endorsement. Always verify current pricing, scope, and availability directly with the provider.
      </p>
      {methodologyHref ? (
        <p className="mt-2">
          <Link href={methodologyHref} className="font-medium text-brand-600 hover:text-brand-700 hover:underline">
            How we rank and review services
          </Link>
        </p>
      ) : null}
    </div>
  );
}
