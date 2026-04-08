import Link from "next/link";
import { LastUpdated } from "@/components/ui/LastUpdated";
import { healthcareOfficialSourcesConfig } from "@/src/lib/tools/healthcare-allowance/config/healthcareOfficialSources";

export function HealthcareAllowanceOfficialSources() {
  const { lastUpdatedLabel, introParagraph, sources, internalSeeAlso } = healthcareOfficialSourcesConfig;

  return (
    <section className="space-y-4">
      <LastUpdated date={lastUpdatedLabel} className="text-copilot-text-secondary" />
      <p className="text-sm leading-relaxed text-copilot-text-secondary">{introParagraph}</p>
      <ul className="space-y-3">
        {sources.map((s) => (
          <li key={s.id} className="rounded-xl border border-copilot-primary/[0.08] bg-copilot-bg-soft/40 p-3 sm:p-4">
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-copilot-primary hover:underline"
            >
              {s.label} →
            </a>
            <p className="mt-1 text-xs leading-relaxed text-copilot-text-secondary sm:text-sm">{s.hint}</p>
          </li>
        ))}
      </ul>
      <p className="text-sm leading-relaxed text-copilot-text-secondary">
        On ExpatCopilot:{" "}
        {internalSeeAlso.map((item, i) => (
          <span key={item.path}>
            {i > 0 ? " · " : null}
            <Link href={item.path} className="font-medium text-copilot-primary hover:underline">
              {item.label}
            </Link>
          </span>
        ))}
        .
      </p>
    </section>
  );
}
