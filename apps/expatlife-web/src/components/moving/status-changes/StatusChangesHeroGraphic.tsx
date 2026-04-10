import { cn } from "@/lib/cn";

export function StatusChangesHeroGraphic({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-50 via-white to-indigo-50/60 shadow-card ring-1 ring-slate-900/[0.04]",
        "max-h-[min(154px,36vh)] sm:max-h-none sm:min-h-[196px]",
        className
      )}
      aria-hidden
    >
      <div className="pointer-events-none absolute -right-10 -top-12 h-44 w-44 rounded-full bg-indigo-400/[0.08] blur-3xl sm:h-52 sm:w-52" />
      <div className="pointer-events-none absolute -bottom-14 -left-10 h-40 w-40 rounded-full bg-copilot-primary/[0.07] blur-3xl" />

      <div className="relative flex h-full min-h-0 flex-col justify-between p-2.5 sm:aspect-[16/11] sm:p-5 md:p-6">
        <div className="space-y-1.5 sm:space-y-2">
          <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
            {[
              { label: "Study -> Work", tone: "violet" },
              { label: "Employer change", tone: "sky" },
              { label: "Family", tone: "amber" },
              { label: "Self-employed", tone: "slate" },
              { label: "Next stage", tone: "emerald" },
            ].map(({ label, tone }) => (
              <span
                key={label}
                className={cn(
                  "rounded-full border px-1.5 py-0.5 text-[7px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-sm sm:px-2.5 sm:py-1 sm:text-[10px]",
                  tone === "violet" && "border-violet-200/90 bg-violet-50/95 text-violet-900",
                  tone === "sky" && "border-sky-200/90 bg-sky-50/95 text-sky-900",
                  tone === "amber" && "border-amber-200/90 bg-amber-50/95 text-amber-900",
                  tone === "slate" && "border-slate-200/90 bg-white/95 text-slate-800",
                  tone === "emerald" && "border-emerald-200/90 bg-emerald-50/95 text-emerald-900"
                )}
              >
                {label}
              </span>
            ))}
          </div>
          <div className="hidden flex-wrap items-center gap-1 sm:flex">
            {[
              { label: "Basis", tone: "slate" as const },
              { label: "Shift", tone: "amber" as const },
              { label: "Continuity", tone: "indigo" as const },
              { label: "Plan next", tone: "emerald" as const },
            ].map(({ label, tone }) => (
              <span
                key={label}
                className={cn(
                  "rounded-md border px-1.5 py-0.5 text-[7px] font-semibold uppercase tracking-wide shadow-sm sm:text-[9px]",
                  tone === "slate" && "border-slate-200/90 bg-white/90 text-slate-600",
                  tone === "amber" && "border-amber-200/80 bg-amber-50/90 text-amber-900",
                  tone === "indigo" && "border-indigo-200/80 bg-indigo-50/90 text-indigo-900",
                  tone === "emerald" && "border-emerald-200/80 bg-emerald-50/90 text-emerald-900"
                )}
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mt-0.5 flex min-h-0 flex-1 items-center justify-center py-0 sm:mt-1 sm:py-0.5">
          <svg
            viewBox="0 0 400 220"
            className="h-[74px] w-auto max-w-full min-[400px]:h-[84px] sm:h-full sm:max-h-[min(100%,196px)] md:max-h-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sc-card" x1="56" y1="24" x2="220" y2="196" gradientUnits="userSpaceOnUse">
                <stop stopColor="#eff6ff" />
                <stop offset="1" stopColor="#f8fafc" />
              </linearGradient>
              <linearGradient id="sc-flow" x1="0" y1="0" x2="1" y2="0">
                <stop stopColor="#4f46e5" stopOpacity="0.45" />
                <stop offset="1" stopColor="#059669" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="sc-accent" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#4f46e5" stopOpacity="0.92" />
                <stop offset="1" stopColor="#0ea5e9" stopOpacity="0.88" />
              </linearGradient>
            </defs>

            <text x="24" y="22" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="600" fill="#475569" opacity="0.9">
              Current basis
            </text>
            <text x="158" y="22" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="600" fill="#475569" opacity="0.9">
              Life shift
            </text>
            <text x="286" y="22" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="600" fill="#475569" opacity="0.9">
              Continuity plan
            </text>

            <path d="M84 26 H138 M236 26 H290" stroke="url(#sc-flow)" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />

            <g transform="translate(28 44)">
              <rect x="0" y="0" width="88" height="96" rx="12" fill="#fff" stroke="#0f172a" strokeWidth="1.1" opacity="0.96" />
              <rect x="10" y="14" width="52" height="6" rx="2" fill="#c7d2fe" />
              <rect x="10" y="26" width="66" height="4" rx="1.5" fill="#e2e8f0" />
              <rect x="10" y="36" width="60" height="4" rx="1.5" fill="#e2e8f0" />
              <rect x="10" y="52" width="66" height="22" rx="6" fill="url(#sc-accent)" opacity="0.9" />
              <text x="18" y="66" fontSize="7" fontWeight="700" fill="white" fontFamily="system-ui,sans-serif">
                Basis of stay
              </text>
              <text x="18" y="77" fontSize="6.3" fontWeight="600" fill="white" fontFamily="system-ui,sans-serif">
                work · study · family
              </text>
            </g>

            <g transform="translate(136 54)">
              <rect x="0" y="0" width="116" height="78" rx="13" fill="url(#sc-card)" stroke="#94a3b8" strokeWidth="1" strokeOpacity="0.5" />
              <circle cx="30" cy="30" r="12" fill="#fff" stroke="#6366f1" strokeWidth="1.25" />
              <path d="M30 23v14M23 30h14" stroke="#6366f1" strokeWidth="1.4" strokeLinecap="round" />
              <rect x="50" y="20" width="48" height="5" rx="1.5" fill="#e2e8f0" />
              <rect x="50" y="30" width="40" height="4" rx="1" fill="#cbd5e1" />
              <path d="M54 48 H98" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.7" />
              <text x="52" y="61" fontSize="7" fill="#64748b" fontFamily="system-ui,sans-serif" fontWeight="600">
                situation changes
              </text>
            </g>

            <path d="M252 92 C274 58 308 58 332 88" stroke="url(#sc-flow)" strokeWidth="2.4" fill="none" strokeLinecap="round" opacity="0.82" />
            <path d="M252 98 C278 122 308 124 336 108" stroke="url(#sc-flow)" strokeWidth="2.4" fill="none" strokeLinecap="round" opacity="0.82" />
            <path d="M252 102 C280 146 320 150 348 144" stroke="url(#sc-flow)" strokeWidth="2.4" fill="none" strokeLinecap="round" opacity="0.82" />

            <g transform="translate(286 54)">
              <rect x="0" y="0" width="86" height="34" rx="8" fill="#fff" stroke="#0f172a" strokeWidth="1.05" />
              <rect x="8" y="8" width="30" height="5" rx="2" fill="#d1fae5" />
              <rect x="44" y="8" width="34" height="5" rx="2" fill="#e0e7ff" />
              <rect x="8" y="18" width="56" height="3" rx="1" fill="#e2e8f0" />
              <text x="8" y="30" fontSize="6.4" fill="#0f766e" fontWeight="700" fontFamily="system-ui,sans-serif">
                same basis?
              </text>
            </g>

            <g transform="translate(292 96)">
              <rect x="0" y="0" width="86" height="34" rx="8" fill="#fff" stroke="#0f172a" strokeWidth="1.05" opacity="0.95" />
              <rect x="8" y="8" width="62" height="5" rx="2" fill="#fef3c7" />
              <rect x="8" y="18" width="50" height="3" rx="1" fill="#e2e8f0" />
              <text x="8" y="30" fontSize="6.4" fill="#92400e" fontWeight="700" fontFamily="system-ui,sans-serif">
                what changes?
              </text>
            </g>

            <g transform="translate(298 138)">
              <rect x="0" y="0" width="86" height="34" rx="8" fill="#fff" stroke="#0f172a" strokeWidth="1.05" opacity="0.92" />
              <rect x="8" y="8" width="44" height="5" rx="2" fill="#dbeafe" />
              <rect x="8" y="18" width="58" height="3" rx="1" fill="#e2e8f0" />
              <text x="8" y="30" fontSize="6.4" fill="#1d4ed8" fontWeight="700" fontFamily="system-ui,sans-serif">
                next step
              </text>
            </g>

            <path d="M24 188h352" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 5" opacity="0.45" />
            <g fontFamily="system-ui,sans-serif" fontSize="6.5" fontWeight="600" fill="#64748b">
              <line x1="58" y1="180" x2="58" y2="188" stroke="#94a3b8" strokeWidth="1.2" />
              <text x="46" y="178" textAnchor="middle">
                Notice
              </text>
              <line x1="156" y1="180" x2="156" y2="188" stroke="#94a3b8" strokeWidth="1.2" />
              <text x="144" y="178" textAnchor="middle">
                Check
              </text>
              <line x1="248" y1="180" x2="248" y2="188" stroke="#94a3b8" strokeWidth="1.2" />
              <text x="236" y="178" textAnchor="middle">
                Clarify
              </text>
              <line x1="336" y1="180" x2="336" y2="188" stroke="#64748b" strokeWidth="1.5" />
              <text x="324" y="178" textAnchor="middle" fill="#0f172a" opacity="0.78">
                Plan
              </text>
            </g>
            <text x="28" y="208" fontSize="8" fill="#64748b" fontWeight="500" fontFamily="system-ui,sans-serif">
              {"Notice the shift -> protect continuity -> open the right next step"}
            </text>
          </svg>
        </div>

        <p className="mt-0.5 text-center text-[8px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:mt-1 sm:text-[10px]">
          Calm planning when life moves first
        </p>
      </div>
    </div>
  );
}
