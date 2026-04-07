import Link from "next/link";
import type { CityJobsEcosystem } from "@/src/lib/city-hub/types";
import { Briefcase, Building2, Factory } from "lucide-react";
import { SectionBlock } from "@/components/page/pillar-template";
import { cn } from "@/lib/cn";
import {
  movingNlCardMicroLiftClass,
  movingNlSignatureGradientClass,
} from "@/lib/ui/moving-nl-pillar-identity";

function normalizeJobsHeading(heading: string): string {
  return heading
    .replace(/\s*\(Context\)\s*$/i, "")
    .replace(/\s*\(Amsterdam Area Context\)\s*$/i, "")
    .replace(/\s*\(context\)\s*$/i, "")
    .trim();
}

export function CityStatsCards({ data }: { data: CityJobsEcosystem }) {
  const hasCounts = data.companiesCount != null || data.jobsCount != null;
  const title = normalizeJobsHeading(data.heading);

  return (
    <SectionBlock id="jobs-ecosystem" title={title} compact className="scroll-mt-24">
      {hasCounts ? (
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {data.companiesCount != null && (
            <div
              className={cn(
                "relative overflow-hidden rounded-2xl border-0 bg-copilot-surface p-5 shadow-expatos-md ring-1 ring-copilot-primary/[0.07]",
                movingNlCardMicroLiftClass
              )}
            >
              <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
              <div className="relative z-[1] flex items-start gap-4">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-copilot-primary/12 text-copilot-primary"
                  aria-hidden
                >
                  <Building2 className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-sm font-medium text-copilot-text-muted">Companies</p>
                  <p className="mt-1 text-3xl font-bold tabular-nums tracking-tight text-copilot-text-primary">
                    {data.companiesCount.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          )}
          {data.jobsCount != null && (
            <div
              className={cn(
                "relative overflow-hidden rounded-2xl border-0 bg-copilot-surface p-5 shadow-expatos-md ring-1 ring-copilot-primary/[0.07]",
                movingNlCardMicroLiftClass
              )}
            >
              <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
              <div className="relative z-[1] flex items-start gap-4">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-copilot-accent/15 text-copilot-accent"
                  aria-hidden
                >
                  <Briefcase className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-sm font-medium text-copilot-text-muted">Jobs</p>
                  <p className="mt-1 text-3xl font-bold tabular-nums tracking-tight text-copilot-text-primary">
                    {data.jobsCount.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : null}

      <div className={cn("grid gap-4 lg:grid-cols-2", hasCounts && "mt-6")}>
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl border-0 bg-copilot-surface p-5 shadow-expatos-md ring-1 ring-copilot-primary/[0.07]",
            movingNlCardMicroLiftClass
          )}
        >
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <div className="relative z-[1] mb-4 flex items-center gap-3">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-copilot-primary/10 text-copilot-primary"
              aria-hidden
            >
              <Factory className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <p className="text-sm font-bold text-copilot-text-primary">Key industries</p>
          </div>
          <ul className="relative z-[1] space-y-2.5 text-sm text-copilot-text-secondary">
            {data.industries.map((ind, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copilot-primary/40" aria-hidden />
                <span className="leading-relaxed">{ind}</span>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl border-0 bg-copilot-surface p-5 shadow-expatos-md ring-1 ring-copilot-primary/[0.07]",
            movingNlCardMicroLiftClass
          )}
        >
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <div className="relative z-[1] mb-4 flex items-center gap-3">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-copilot-accent/12 text-copilot-accent"
              aria-hidden
            >
              <Building2 className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <div>
              <p className="text-sm font-bold text-copilot-text-primary">Major employers</p>
              <p className="text-xs text-copilot-text-muted">Non-exhaustive examples</p>
            </div>
          </div>
          <ul className="relative z-[1] space-y-2.5 text-sm text-copilot-text-secondary">
            {data.majorEmployers.map((emp, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copilot-accent/50" aria-hidden />
                <span className="leading-relaxed">{emp}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {(data.sourceLabel || data.sourceHref) && (
        <p className="mt-5 text-sm text-copilot-text-muted">
          {data.sourceHref ? (
            <Link
              href={data.sourceHref}
              className="font-semibold text-copilot-primary hover:text-copilot-primary-strong hover:underline"
            >
              {data.sourceLabel || "Source: Business.gov.nl / CBS"}
            </Link>
          ) : (
            data.sourceLabel
          )}
        </p>
      )}
    </SectionBlock>
  );
}
