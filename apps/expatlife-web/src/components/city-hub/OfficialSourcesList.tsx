import type { CityOfficialSource } from "@/src/lib/city-hub/types";

/**
 * Lists official or trusted sources with links. Use on guides and service pages for E-E-A-T:
 * clearly surfaces where rules and facts come from; distinguish official sources from editorial summary.
 */
export function OfficialSourcesList({ sources }: { sources: CityOfficialSource[] }) {
  if (!sources?.length) return null;

  const byCategory = sources.reduce<Record<string, CityOfficialSource[]>>((acc, s) => {
    (acc[s.category] = acc[s.category] || []).push(s);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      {Object.entries(byCategory).map(([category, items]) => (
        <div key={category}>
          <h3 className="text-base font-semibold text-slate-900">{category}</h3>
          <ul className="mt-3 space-y-2">
            {items.map((src) => (
              <li key={src.url}>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-brand-700 hover:text-brand-800 underline"
                >
                  {src.label}
                  <span className="ml-1" aria-hidden>→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
