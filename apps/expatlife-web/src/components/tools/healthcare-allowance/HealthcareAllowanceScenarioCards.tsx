import { healthcareWorkedExamples } from "@/src/lib/tools/healthcare-allowance/config/healthcareWorkedExamples";

export function HealthcareAllowanceScenarioCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {healthcareWorkedExamples.map((c) => (
        <article
          key={c.id}
          className="group relative flex flex-col overflow-hidden rounded-2xl border border-copilot-primary/[0.1] bg-gradient-to-br from-copilot-surface via-white to-copilot-bg-soft/80 p-5 shadow-expatos-md ring-1 ring-copilot-primary/[0.06] transition hover:shadow-expatos-lg hover:ring-copilot-primary/12 md:p-6"
        >
          <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[100%] bg-copilot-primary/[0.04] transition group-hover:bg-copilot-primary/[0.07]" aria-hidden />
          <p className="relative text-[11px] font-bold uppercase tracking-wider text-copilot-primary/80">{c.tag}</p>
          <h3 className="relative mt-2 text-base font-semibold leading-snug tracking-tight text-copilot-text-primary md:text-[1.05rem]">{c.title}</h3>
          <p className="relative mt-3 flex-1 text-sm leading-relaxed text-copilot-text-secondary">{c.body}</p>
          <p className="relative mt-4 border-t border-copilot-primary/10 pt-3 text-xs font-medium text-copilot-text-secondary">
            Try similar numbers in the estimator to see how the model responds.
          </p>
        </article>
      ))}
    </div>
  );
}
