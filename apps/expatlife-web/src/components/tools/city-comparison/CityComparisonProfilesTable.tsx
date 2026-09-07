import { NORMALIZED_CITY_PROFILES } from "@/src/lib/tools/city-comparison/scoring/normalizedProfiles";
import { CITY_COMPARISON_PROFILES_AS_OF } from "@/src/lib/authority/cityComparisonProfilesDataset";

/**
 * Transparent editorial scoring attributes (1–10) used by the city comparison tool.
 */
export function CityComparisonProfilesTable() {
  const rows = Object.values(NORMALIZED_CITY_PROFILES);

  return (
    <div id="scoring-profiles" className="scroll-mt-28 space-y-3 md:scroll-mt-32">
      <h3 className="text-lg font-semibold text-copilot-text-primary">City scoring profiles (editorial)</h3>
      <p className="text-sm leading-relaxed text-copilot-text-secondary">
        Attributes are ExpatCopilot planning heuristics on a 1–10 scale (higher{" "}
        <strong>rent</strong> / <strong>living cost</strong> = more expensive). They are not official rankings,
        survey results, or live market indices. As of {CITY_COMPARISON_PROFILES_AS_OF}.
      </p>
      <p className="text-sm text-copilot-text-secondary">
        Download:{" "}
        <a href="/api/authority/city-comparison-profiles?format=json" className="font-medium text-brand-600 hover:underline">
          JSON
        </a>
        {" · "}
        <a href="/api/authority/city-comparison-profiles?format=csv" className="font-medium text-brand-600 hover:underline">
          CSV
        </a>
      </p>
      <div className="overflow-x-auto rounded-2xl border border-copilot-primary/10 bg-copilot-surface shadow-expatos-sm">
        <table className="w-full min-w-[960px] border-collapse text-left text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-copilot-primary/10 bg-copilot-bg-soft/80">
              <th scope="col" className="px-3 py-2 font-semibold text-copilot-text-primary">
                City
              </th>
              <th scope="col" className="px-3 py-2 font-semibold text-copilot-text-primary">
                Rent
              </th>
              <th scope="col" className="px-3 py-2 font-semibold text-copilot-text-primary">
                Living
              </th>
              <th scope="col" className="px-3 py-2 font-semibold text-copilot-text-primary">
                Career
              </th>
              <th scope="col" className="px-3 py-2 font-semibold text-copilot-text-primary">
                Expat ease
              </th>
              <th scope="col" className="px-3 py-2 font-semibold text-copilot-text-primary">
                Family
              </th>
              <th scope="col" className="px-3 py-2 font-semibold text-copilot-text-primary">
                Nightlife
              </th>
              <th scope="col" className="px-3 py-2 font-semibold text-copilot-text-primary">
                Calm
              </th>
              <th scope="col" className="px-3 py-2 font-semibold text-copilot-text-primary">
                Commute hub
              </th>
              <th scope="col" className="px-3 py-2 font-semibold text-copilot-text-primary">
                Intl schools
              </th>
              <th scope="col" className="px-3 py-2 font-semibold text-copilot-text-primary">
                Language ease
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((p, i) => (
              <tr key={p.id} className={i % 2 === 0 ? "bg-white" : "bg-copilot-bg-soft/40"}>
                <th scope="row" className="px-3 py-2 font-semibold text-copilot-text-primary">
                  {p.displayName}
                </th>
                <td className="px-3 py-2 tabular-nums text-copilot-text-secondary">{p.rentLevel}</td>
                <td className="px-3 py-2 tabular-nums text-copilot-text-secondary">{p.livingCostLevel}</td>
                <td className="px-3 py-2 tabular-nums text-copilot-text-secondary">{p.careerStrength}</td>
                <td className="px-3 py-2 tabular-nums text-copilot-text-secondary">{p.expatEase}</td>
                <td className="px-3 py-2 tabular-nums text-copilot-text-secondary">{p.familyFit}</td>
                <td className="px-3 py-2 tabular-nums text-copilot-text-secondary">{p.nightlife}</td>
                <td className="px-3 py-2 tabular-nums text-copilot-text-secondary">{p.calmNature}</td>
                <td className="px-3 py-2 tabular-nums text-copilot-text-secondary">{p.commuteHubStrength}</td>
                <td className="px-3 py-2 tabular-nums text-copilot-text-secondary">{p.internationalSchoolSupport}</td>
                <td className="px-3 py-2 tabular-nums text-copilot-text-secondary">{p.languageBarrierEase}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
