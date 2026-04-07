import Link from "next/link";
import { cityComparisonTableRows } from "@/src/data/cities/cityStats";
import { cn } from "@/lib/cn";
import { isRouteLive } from "@/src/lib/routes/routeStatus";
import { movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";

export function CityComparisonTable({
  currentCityName,
  ctaLabel,
  ctaHref,
}: {
  currentCityName: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-2xl border-0 bg-copilot-surface shadow-expatos-md ring-1 ring-copilot-primary/[0.07]">
        <div className={cn("absolute inset-x-0 top-0 z-[1] h-1", movingNlSignatureGradientClass)} aria-hidden />
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-copilot-primary/10 bg-copilot-bg-soft/80">
                <th className="px-4 py-3 font-semibold text-copilot-text-primary">City</th>
                <th className="px-4 py-3 font-semibold text-copilot-text-primary">Best for</th>
                <th className="px-4 py-3 font-semibold text-copilot-text-primary">Typical jobs</th>
                <th className="px-4 py-3 font-semibold text-copilot-text-primary">Lifestyle</th>
                <th className="px-4 py-3 font-semibold text-copilot-text-primary">Housing cost</th>
                <th className="px-4 py-3 font-semibold text-copilot-text-primary">Commute</th>
              </tr>
            </thead>
            <tbody>
              {cityComparisonTableRows.map((row) => (
                <tr
                  key={row.city}
                  className={cn(
                    "border-b border-copilot-primary/[0.06] last:border-b-0",
                    row.city === currentCityName && "bg-copilot-accent/[0.09]"
                  )}
                >
                  <td
                    className={cn(
                      "px-4 py-3 font-medium text-copilot-text-primary",
                      row.city === currentCityName && "border-l-[3px] border-l-copilot-accent"
                    )}
                  >
                    {isRouteLive(row.cityHref) ? (
                      <Link
                        href={row.cityHref}
                        className="font-medium text-copilot-primary hover:text-copilot-primary-strong hover:underline"
                      >
                        {row.city}
                      </Link>
                    ) : (
                      <span>{row.city}</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-copilot-text-secondary">{row.bestFor}</td>
                  <td className="px-4 py-3 text-copilot-text-secondary">{row.typicalJobs}</td>
                  <td className="px-4 py-3 text-copilot-text-secondary">{row.lifestyle}</td>
                  <td className="px-4 py-3 text-copilot-text-secondary">{row.housingCost}</td>
                  <td className="px-4 py-3 text-copilot-text-secondary">{row.commute}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p>
        <Link
          href={ctaHref}
          className="inline-flex items-center gap-1 text-sm font-semibold text-copilot-primary hover:text-copilot-primary-strong hover:underline"
        >
          {ctaLabel}
          <span aria-hidden>→</span>
        </Link>
      </p>
    </div>
  );
}
