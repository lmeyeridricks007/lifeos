import Link from "next/link";
import { citiesBestForExpatsRoutes as R } from "../best-cities-for-expats/config/citiesBestForExpats.routes";
import { CITIES_FUNNEL_PATHS, type CitiesFunnelPageKey } from "./citiesDecisionFunnel";

const FUNNEL_ENTRIES: { key: CitiesFunnelPageKey; href: string; label: string }[] = [
  { key: "best", href: CITIES_FUNNEL_PATHS.bestOverall, label: "Best cities for expats" },
  { key: "cheapest", href: CITIES_FUNNEL_PATHS.cheapest, label: "Cheapest cities for expats" },
  { key: "families", href: CITIES_FUNNEL_PATHS.families, label: "Best Dutch cities for families" },
  { key: "professionals", href: CITIES_FUNNEL_PATHS.professionals, label: "International professionals" },
];

/**
 * Hero cross-links: the three other funnel guides plus hubs — keeps every pillar page in the same loop.
 */
export function CitiesFunnelHeroCrossLinks({ current }: { current: CitiesFunnelPageKey }) {
  const others = FUNNEL_ENTRIES.filter((e) => e.key !== current);
  return (
    <p className="mt-4 w-full min-w-0 max-w-none text-pretty text-sm leading-snug text-foreground-muted sm:leading-relaxed">
      <span className="text-foreground">Other city lenses:</span>{" "}
      {others.map((e, i) => (
        <span key={e.key}>
          {i > 0 ? <span className="text-foreground-faint"> · </span> : null}
          <Link href={e.href} className="font-semibold text-link hover:text-link-hover hover:underline">
            {e.label}
          </Link>
        </span>
      ))}
      <span className="text-foreground-faint"> · </span>
      <Link href={R.citiesHub} className="font-semibold text-link hover:text-link-hover hover:underline">
        Cities hub
      </Link>
      <span className="text-foreground-faint"> · </span>
      <Link href="/netherlands/tools/" className="font-semibold text-link hover:text-link-hover hover:underline">
        Tools hub
      </Link>
    </p>
  );
}
