import Link from "next/link";
import { cn } from "@/lib/cn";
import {
  HSM_IND_PAGE_LAST_UPDATE,
  HSM_IND_RESIDENCE_PERMIT_URL,
  HSM_JOB_SEARCH_RULE_EFFECTIVE_DATE,
  hsmJobSearchAfterPeriodEnds,
  hsmJobSearchDecisionMatrix,
  hsmJobSearchDisclaimer,
  hsmJobSearchNewEmployerNote,
  hsmJobSearchScenarios,
  hsmJobSearchWindowSummary,
  hsmJobLossSectionHeading,
} from "@/src/content/visas/hsmJobSearchWindow";
import {
  HSM_JOB_LOSS_SECTION_ID,
  HSM_VISA_JOB_LOSS_HREF,
  hsmJobLossNextSteps,
} from "./hsmJobLossClusterPaths";

type HsmIndJobSearchSectionProps = {
  id?: string;
  className?: string;
  /** When set, show a link to the full HSM visa guide section. */
  hsmGuideHref?: string;
  /** Layoffs vs changing-jobs vs HSM guide — controls next-step emphasis. */
  variant?: "layoffs" | "changing-jobs" | "hsm-guide";
};

export function HsmIndJobSearchSection({
  id = HSM_JOB_LOSS_SECTION_ID,
  className,
  hsmGuideHref = HSM_VISA_JOB_LOSS_HREF,
  variant = "layoffs",
}: HsmIndJobSearchSectionProps) {
  const nextSteps =
    variant === "changing-jobs"
      ? hsmJobLossNextSteps
      : [
          hsmJobLossNextSteps[0],
          hsmJobLossNextSteps[1],
          ...hsmJobLossNextSteps.slice(2),
        ];

  return (
    <section
      id={id}
      className={cn("scroll-mt-28 md:scroll-mt-32", className)}
      aria-labelledby={`${id}-heading`}
    >
      <div className="rounded-2xl border border-amber-200/80 bg-amber-50/70 p-5 shadow-sm ring-1 ring-amber-900/[0.04] sm:p-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-amber-950/80">
          IND rule · effective {HSM_JOB_SEARCH_RULE_EFFECTIVE_DATE} · page updated {HSM_IND_PAGE_LAST_UPDATE}
        </p>
        <h2 id={`${id}-heading`} className="mt-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          {hsmJobLossSectionHeading}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
          {hsmJobSearchWindowSummary} Official source:{" "}
          <a
            href={HSM_IND_RESIDENCE_PERMIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-link hover:text-link-hover"
          >
            IND — Highly skilled migrant
          </a>
          .
        </p>

        <div className="mt-5 overflow-x-auto rounded-xl border border-amber-200/70 bg-white/90">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-amber-200/70 bg-amber-50/80">
                {hsmJobSearchDecisionMatrix.headers.map((header) => (
                  <th key={header} className="px-4 py-3 font-bold text-foreground">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {hsmJobSearchDecisionMatrix.rows.map((row, index) => (
                <tr key={row[0]} className={index % 2 === 0 ? "bg-white" : "bg-amber-50/40"}>
                  {row.map((cell, cellIndex) => (
                    <td
                      key={`${row[0]}-${cellIndex}`}
                      className={cn(
                        "px-4 py-3",
                        cellIndex === 0 ? "font-medium text-foreground" : "font-semibold text-brand-strong"
                      )}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="border-t border-amber-200/70 px-4 py-3 text-xs leading-relaxed text-foreground-muted">
            {hsmJobSearchDecisionMatrix.footnote}
          </p>
        </div>

        <details className="mt-4 rounded-xl border border-amber-200/60 bg-white/80 px-4 py-3">
          <summary className="cursor-pointer text-sm font-semibold text-foreground">
            Full scenario notes (IND wording)
          </summary>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-amber-200/70">
                  <th className="px-2 py-2 font-bold text-foreground">Situation</th>
                  <th className="px-2 py-2 font-bold text-foreground">Maximum search period</th>
                  <th className="px-2 py-2 font-bold text-foreground">Notes</th>
                </tr>
              </thead>
              <tbody>
                {hsmJobSearchScenarios.map((row, index) => (
                  <tr key={row.id} className={index % 2 === 0 ? "bg-white" : "bg-amber-50/30"}>
                    <td className="px-2 py-2 font-medium text-foreground">{row.situation}</td>
                    <td className="px-2 py-2 font-semibold text-brand-strong">{row.maxSearchPeriod}</td>
                    <td className="px-2 py-2 text-foreground-muted">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>

        <ul className="mt-5 space-y-2 text-sm leading-relaxed text-foreground-muted">
          <li>
            <span className="font-semibold text-foreground">When the clock starts:</span> the job-search period begins on
            the day your employment contract ends.
          </li>
          <li>
            <span className="font-semibold text-foreground">Permit validity cap:</span> the search period cannot run past
            your permit’s remaining validity — if the permit expires sooner, your window is shorter.
          </li>
          <li>
            <span className="font-semibold text-foreground">If the period ends without a new sponsor:</span>{" "}
            {hsmJobSearchAfterPeriodEnds}
          </li>
          <li>
            <span className="font-semibold text-foreground">Finding a new role:</span> {hsmJobSearchNewEmployerNote}
          </li>
        </ul>

        <div className="mt-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-amber-950/80">Next steps</p>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            {nextSteps.map((step) => (
              <li key={step.href}>
                <Link
                  href={step.href}
                  className="block rounded-xl border border-amber-200/70 bg-white/90 px-4 py-3 shadow-sm transition hover:border-brand/30 hover:shadow-md"
                >
                  <span className="font-semibold text-link">{step.label}</span>
                  <span className="mt-1 block text-xs leading-relaxed text-foreground-muted">{step.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-foreground-muted">{hsmJobSearchDisclaimer}</p>

        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <a
            href={HSM_IND_RESIDENCE_PERMIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex font-semibold text-link hover:text-link-hover"
          >
            Read IND unemployment guidance →
          </a>
          {variant !== "hsm-guide" && hsmGuideHref ? (
            <Link href={hsmGuideHref} className="inline-flex font-semibold text-link hover:text-link-hover">
              Full HSM visa guide (salary, fees, process) →
            </Link>
          ) : null}
          {variant === "layoffs" ? (
            <Link
              href="/netherlands/moving/changing-jobs-netherlands/"
              className="inline-flex font-semibold text-link hover:text-link-hover"
            >
              Changing jobs guide →
            </Link>
          ) : null}
          {variant === "changing-jobs" ? (
            <Link
              href="/netherlands/moving/layoffs-netherlands/"
              className="inline-flex font-semibold text-link hover:text-link-hover"
            >
              Layoffs guide →
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
