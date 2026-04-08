import Link from "next/link";
import { LastUpdated } from "@/components/ui/LastUpdated";

const BASE = "/netherlands";

const OFFICIAL = [
  { label: "Government.nl — living, housing, and public services topics", href: "https://www.government.nl/topics" },
  { label: "ACM — Dutch Authority for Consumers and Markets", href: "https://www.acm.nl/en" },
  { label: "ACM — energy for consumers (switching and contracts)", href: "https://www.acm.nl/en/market-regulation/sectors/energy/energy-for-consumers" },
  { label: "Statistics Netherlands (CBS) — prices and households", href: "https://www.cbs.nl/en-gb" },
  { label: "European Commission — Your Europe (energy & consumer rights)", href: "https://europa.eu/youreurope/citizens/consumers/energy-gas-electricity/index_en.htm" },
  {
    label: "Belastingdienst — benefits / allowances (toeslagen) in English",
    href: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontenten/belastingdienst/individuals/benefits/how_do_benefits_work/i_want_to_apply_for_a_benefit/i_want_to_apply_for_a_benefit",
  },
] as const;

export function UtilitiesServicesOfficialSources() {
  return (
    <section
      id="official-sources"
      className="space-y-4 scroll-mt-28 md:scroll-mt-32"
      aria-labelledby="us-official-sources-heading"
    >
      <h2 id="us-official-sources-heading" className="text-xl font-bold tracking-tight text-copilot-text-primary">
        Official sources
      </h2>
      <LastUpdated date="April 2026" className="text-sm text-copilot-text-secondary" />
      <p className="text-sm text-copilot-text-secondary">
        This tool uses editorial planning coefficients — not live feeds from energy retailers, municipalities, or water companies. For
        decisions that depend on your address, contract, or tax situation, use provider quotes, gemeente portals, water-authority sites, and
        regulator guidance. Your actual waste, sewer, or reinigingsrechten wording is set locally.
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
        ExpatCopilot guides (non-government):{" "}
        <Link href={`${BASE}/living/utilities/`} className="font-semibold text-copilot-primary hover:underline">
          utilities hub
        </Link>
        ,{" "}
        <Link href={`${BASE}/living/rental-market/`} className="font-semibold text-copilot-primary hover:underline">
          rental market guide
        </Link>
        ,{" "}
        <Link href={`${BASE}/health-insurance-netherlands/`} className="font-semibold text-copilot-primary hover:underline">
          health insurance for expats
        </Link>
        , and the{" "}
        <Link href={`${BASE}/moving-to-the-netherlands/`} className="font-semibold text-copilot-primary hover:underline">
          moving to the Netherlands
        </Link>{" "}
        pillar.
      </p>
    </section>
  );
}
