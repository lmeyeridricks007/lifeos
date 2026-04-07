import Link from "next/link";
import { LastUpdated } from "@/components/ui/LastUpdated";

const BASE = "/netherlands";

const OFFICIAL = [
  { label: "Statistics Netherlands (CBS) — Prices", href: "https://www.cbs.nl/en-gb/figures/detail/83956NED" },
  { label: "Government.nl — Cost of living", href: "https://www.government.nl/topics/asylum-migration-and-integration/immigration/dutch-society/cost-of-living" },
  { label: "Study in Holland — Living costs (indicative)", href: "https://www.studyinholland.nl/finances/cost-of-living" },
  { label: "European Commission — Your Europe consumer rights NL", href: "https://europa.eu/youreurope/citizens/consumers/shopping/guarantees-returns/index_en.htm" },
] as const;

export function CostOfLivingOfficialSources() {
  return (
    <section className="space-y-4" aria-labelledby="official-sources-heading">
      <h2 id="official-sources-heading" className="text-xl font-bold tracking-tight text-copilot-text-primary">
        Official sources
      </h2>
      <LastUpdated date="April 2026" className="text-sm text-copilot-text-secondary" />
      <p className="text-sm text-copilot-text-secondary">
        ExpatCopilot does not scrape listing sites or insurer portals for this tool. Use official statistics and provider quotes when you need certainty.
      </p>
      <ul className="space-y-2">
        {OFFICIAL.map((s) => (
          <li key={s.href}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-copilot-primary underline-offset-2 hover:underline"
            >
              {s.label} →
            </a>
          </li>
        ))}
      </ul>
      <p className="text-sm text-copilot-text-secondary">
        More on{" "}
        <Link href={`${BASE}/taxes/`} className="font-semibold text-copilot-primary hover:underline">
          Dutch taxes
        </Link>
        ,{" "}
        <Link href={`${BASE}/open-bank-account-netherlands/`} className="font-semibold text-copilot-primary hover:underline">
          banking
        </Link>
        , and{" "}
        <Link href={`${BASE}/health-insurance-netherlands/`} className="font-semibold text-copilot-primary hover:underline">
          health insurance
        </Link>
        .
      </p>
    </section>
  );
}
