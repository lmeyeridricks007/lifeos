import { JOB_OFFER_OFFICIAL_SOURCES } from "@/src/content/tools/job-offer-comparison/content";

export function JobOfferComparisonOfficialSources() {
  return (
    <div className="space-y-4">
      <p className="text-sm leading-relaxed text-copilot-text-secondary">
        Official and primary references for background reading. They do not personalise to your contract or permit — pair them with
        professional advice.
      </p>
      <ul className="space-y-4">
        {JOB_OFFER_OFFICIAL_SOURCES.map((s) => (
          <li key={`${s.title}-${s.href}`} className="rounded-xl border border-copilot-primary/10 bg-copilot-surface p-4 shadow-expatos-sm">
            <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-base font-semibold text-copilot-primary hover:underline">
              {s.title}
            </a>
            <p className="mt-2 text-sm text-copilot-text-secondary">{s.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
