import Link from "next/link";
import { LastUpdated } from "@/components/ui/LastUpdated";

const BASE = "/netherlands";

const OFFICIAL = [
  { label: "Government.nl — Topics and public service context", href: "https://www.government.nl/topics" },
  { label: "Statistics Netherlands (CBS) — Consumer prices and inflation", href: "https://www.cbs.nl/en-gb/figures/detail/83956NED" },
  { label: "Study in Holland — Practical student living context (housing pressure)", href: "https://www.studyinholland.nl/" },
  { label: "Authority for Consumers & Markets (ACM) — markets and consumer information", href: "https://www.acm.nl/en" },
  { label: "European Commission — Your Europe (housing and consumer rights overview)", href: "https://europa.eu/youreurope/citizens/housing/index_en.htm" },
] as const;

export function RentAffordabilityOfficialSources() {
  return (
    <section id="official-sources" className="space-y-4 scroll-mt-28 md:scroll-mt-32" aria-labelledby="ra-official-sources-heading">
      <h2 id="ra-official-sources-heading" className="text-xl font-bold tracking-tight text-copilot-text-primary">
        Official sources
      </h2>
      <LastUpdated date="April 2026" className="text-sm text-copilot-text-secondary" />
      <p className="text-sm text-copilot-text-secondary">
        This page uses planning ranges and editorial coefficients — not live listing feeds, not NVM or CBS rent microdata, and not personalized quotes from banks, insurers, or landlords. When you need precision for a decision, confirm against current official publications, municipal information, and documents from your employer and providers.
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
        More on how renting works in practice:{" "}
        <Link href={`${BASE}/living/rental-market/`} className="font-semibold text-copilot-primary hover:underline">
          rental market guide
        </Link>
        ,{" "}
        <Link href={`${BASE}/health-insurance-netherlands/`} className="font-semibold text-copilot-primary hover:underline">
          health insurance in the Netherlands
        </Link>
        , and the{" "}
        <Link href={`${BASE}/taxes/`} className="font-semibold text-copilot-primary hover:underline">
          taxes hub
        </Link>
        .
      </p>
    </section>
  );
}
