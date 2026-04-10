import { cn } from "@/lib/cn";

/**
 * Move-pillar hero: permit timeline → branch points (renew / change path) → next-step planning.
 */
export function ExtensionsChangesHeroGraphic({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-50 via-white to-indigo-50/60 shadow-card ring-1 ring-slate-900/[0.04] sm:rounded-2xl",
        "max-h-[min(158px,38vh)] sm:max-h-none sm:min-h-[198px]",
        className
      )}
      aria-hidden
    >
      <div className="pointer-events-none absolute -right-8 -top-10 h-40 w-40 rounded-full bg-indigo-400/[0.08] blur-3xl sm:h-48 sm:w-48" />
      <div className="pointer-events-none absolute -bottom-14 -left-8 h-36 w-36 rounded-full bg-copilot-primary/[0.06] blur-3xl" />

      <div className="relative flex h-full min-h-0 flex-col justify-between p-2.5 sm:aspect-[16/11] sm:p-5 md:p-6">
        <div className="space-y-1.5 sm:space-y-2">
          <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
            {[
              { k: "Renew", tone: "emerald" },
              { k: "Change job", tone: "sky" },
              { k: "Study ends", tone: "violet" },
              { k: "Family", tone: "amber" },
              { k: "ZZP shift", tone: "slate" },
            ].map(({ k, tone }) => (
              <span
                key={k}
                className={cn(
                  "rounded-full border px-1.5 py-0.5 text-[7px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-sm sm:px-2.5 sm:py-1 sm:text-[10px]",
                  tone === "emerald" && "border-emerald-200/90 bg-emerald-50/95 text-emerald-900",
                  tone === "sky" && "border-sky-200/90 bg-sky-50/95 text-sky-900",
                  tone === "violet" && "border-violet-200/90 bg-violet-50/95 text-violet-900",
                  tone === "amber" && "border-amber-200/90 bg-amber-50/95 text-amber-900",
                  tone === "slate" && "border-slate-200/90 bg-white/95 text-slate-800"
                )}
              >
                {k}
              </span>
            ))}
          </div>
          <div className="hidden flex-wrap items-center gap-1 sm:flex">
            {[
              { k: "Hold", tone: "slate" as const },
              { k: "Event", tone: "amber" as const },
              { k: "Branch", tone: "indigo" as const },
              { k: "Plan", tone: "emerald" as const },
            ].map(({ k, tone }) => (
              <span
                key={k}
                className={cn(
                  "rounded-md border px-1.5 py-0.5 text-[7px] font-semibold uppercase tracking-wide shadow-sm sm:text-[9px]",
                  tone === "slate" && "border-slate-200/90 bg-white/90 text-slate-600",
                  tone === "amber" && "border-amber-200/80 bg-amber-50/90 text-amber-900",
                  tone === "indigo" && "border-indigo-200/80 bg-indigo-50/90 text-indigo-900",
                  tone === "emerald" && "border-emerald-200/80 bg-emerald-50/90 text-emerald-900"
                )}
              >
                {k}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mt-0.5 flex min-h-0 flex-1 items-center justify-center py-0 sm:mt-1 sm:py-0.5">
          <svg
            viewBox="0 0 400 220"
            className="h-[76px] w-auto max-w-full text-slate-800 min-[400px]:h-[84px] sm:h-full sm:max-h-[min(100%,198px)] md:max-h-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="ec-card" x1="40" y1="30" x2="220" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="#eef2ff" />
                <stop offset="1" stopColor="#f8fafc" />
              </linearGradient>
              <linearGradient id="ec-flow" x1="0" y1="0" x2="1" y2="0">
                <stop stopColor="#4f46e5" stopOpacity="0.4" />
                <stop offset="1" stopColor="#059669" stopOpacity="0.45" />
              </linearGradient>
              <linearGradient id="ec-accent" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#4f46e5" stopOpacity="0.88" />
                <stop offset="1" stopColor="#059669" stopOpacity="0.85" />
              </linearGradient>
            </defs>

            <text x="24" y="22" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="600" fill="#475569" opacity="0.9">
              Now
            </text>
            <text x="152" y="22" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="600" fill="#475569" opacity="0.9">
              Life event
            </text>
            <text x="268" y="22" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="600" fill="#475569" opacity="0.9">
              Next steps
            </text>

            <path d="M72 26 H132 M232 26 H288" stroke="url(#ec-flow)" strokeWidth="2.5" strokeLinecap="round" opacity="0.88" />

            <g transform="translate(28 40)">
              <rect x="0" y="8" width="64" height="88" rx="9" fill="#fff" stroke="#0f172a" strokeWidth="1.35" opacity="0.93" />
              <rect x="8" y="20" width="48" height="6" rx="2" fill="#c7d2fe" opacity="0.95" />
              <rect x="8" y="32" width="36" height="4" rx="1" fill="#e2e8f0" />
              <rect x="8" y="40" width="48" height="4" rx="1" fill="#e2e8f0" />
              <rect x="8" y="56" width="28" height="14" rx="3" fill="url(#ec-accent)" opacity="0.9" />
              <text x="14" y="66" fontSize="6.5" fontWeight="700" fill="white">
                OK
              </text>
            </g>

            <g transform="translate(118 52)">
              <rect x="0" y="0" width="104" height="68" rx="11" fill="url(#ec-card)" stroke="#94a3b8" strokeWidth="1" strokeOpacity="0.45" />
              <circle cx="28" cy="28" r="10" fill="#fff" stroke="#6366f1" strokeWidth="1.2" />
              <path d="M28 22v12M22 28h12" stroke="#6366f1" strokeWidth="1.3" strokeLinecap="round" />
              <rect x="48" y="20" width="44" height="5" rx="1.5" fill="#e2e8f0" />
              <rect x="48" y="30" width="36" height="4" rx="1" fill="#cbd5e1" />
              <path d="M52 48 H92" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.7" />
              <text x="52" y="60" fontSize="7" fill="#64748b" fontFamily="system-ui,sans-serif" fontWeight="600">
                Job · study · family
              </text>
            </g>

            <path d="M 222 86 Q 248 52 278 86" stroke="url(#ec-flow)" strokeWidth="2.2" fill="none" strokeLinecap="round" opacity="0.75" />
            <path d="M 222 100 Q 248 134 278 100" stroke="url(#ec-flow)" strokeWidth="2.2" fill="none" strokeLinecap="round" opacity="0.75" />
            <text x="278" y="78" fontSize="6.5" fill="#059669" fontWeight="700" fontFamily="system-ui,sans-serif" opacity="0.9">
              Renew
            </text>
            <text x="278" y="118" fontSize="6.5" fill="#4f46e5" fontWeight="700" fontFamily="system-ui,sans-serif" opacity="0.9">
              New basis
            </text>

            <g transform="translate(268 72)">
              <rect x="0" y="0" width="108" height="44" rx="8" fill="#fff" stroke="#0f172a" strokeWidth="1.15" />
              <rect x="8" y="10" width="36" height="6" rx="2" fill="#d1fae5" />
              <rect x="52" y="10" width="48" height="6" rx="2" fill="#e0e7ff" />
              <rect x="8" y="22" width="92" height="3" rx="1" fill="#e2e8f0" />
              <rect x="8" y="28" width="56" height="3" rx="1" fill="#e2e8f0" />
            </g>

            <g transform="translate(268 124)">
              <rect x="0" y="0" width="108" height="44" rx="8" fill="#fff" stroke="#0f172a" strokeWidth="1.15" opacity="0.92" />
              <rect x="8" y="10" width="92" height="5" rx="1.5" fill="#fef3c7" />
              <rect x="8" y="20" width="72" height="3" rx="1" fill="#e2e8f0" />
              <rect x="8" y="26" width="48" height="3" rx="1" fill="#e2e8f0" />
            </g>

            <path d="M24 184h352" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 5" opacity="0.45" />
            <g fontFamily="system-ui,sans-serif" fontSize="6.5" fontWeight="600" fill="#64748b">
              <line x1="56" y1="176" x2="56" y2="184" stroke="#94a3b8" strokeWidth="1.2" />
              <text x="44" y="174" textAnchor="middle">
                −6 mo
              </text>
              <line x1="140" y1="176" x2="140" y2="184" stroke="#94a3b8" strokeWidth="1.2" />
              <text x="128" y="174" textAnchor="middle">
                −3 mo
              </text>
              <line x1="220" y1="176" x2="220" y2="184" stroke="#94a3b8" strokeWidth="1.2" />
              <text x="208" y="174" textAnchor="middle">
                Check-in
              </text>
              <line x1="320" y1="176" x2="320" y2="184" stroke="#64748b" strokeWidth="1.5" />
              <text x="308" y="174" textAnchor="middle" fill="#0f172a" opacity="0.75">
                Due
              </text>
            </g>
            <text x="28" y="204" fontSize="8" fill="#64748b" fontWeight="500" fontFamily="system-ui,sans-serif">
              Plan early · branch calmly · confirm officially
            </text>
          </svg>
        </div>

        <p className="mt-0.5 text-center text-[8px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:mt-1 sm:text-[10px]">
          After arrival · when circumstances shift
        </p>
      </div>
    </div>
  );
}
