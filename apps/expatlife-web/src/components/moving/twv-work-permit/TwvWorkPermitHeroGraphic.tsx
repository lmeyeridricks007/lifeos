import { cn } from "@/lib/cn";

export function TwvWorkPermitHeroGraphic({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-50 via-white to-cyan-50/70 shadow-card ring-1 ring-slate-900/[0.04]",
        "max-h-[min(142px,32vh)] sm:max-h-none sm:min-h-[198px]",
        className
      )}
      aria-hidden
    >
      <div className="pointer-events-none absolute -right-12 -top-10 h-44 w-44 rounded-full bg-cyan-400/[0.08] blur-3xl sm:h-56 sm:w-56" />
      <div className="pointer-events-none absolute -bottom-12 -left-10 h-40 w-40 rounded-full bg-copilot-primary/[0.07] blur-3xl" />

      <div className="relative flex h-full min-h-0 flex-col justify-between p-2.5 sm:aspect-[16/11] sm:p-5 md:p-6">
        <div className="space-y-1.5 sm:space-y-2">
          <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
            {[
              { label: "TWV", tone: "amber" },
              { label: "GVVA", tone: "sky" },
              { label: "Free work", tone: "emerald" },
              { label: "Permit wording", tone: "violet" },
              { label: "Employer action", tone: "slate" },
              { label: "Timing", tone: "rose" },
            ].map(({ label, tone }) => (
              <span
                key={label}
                className={cn(
                  "rounded-full border px-1.5 py-0.5 text-[7px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-sm sm:px-2.5 sm:py-1 sm:text-[10px]",
                  tone === "amber" && "border-amber-200/90 bg-amber-50/95 text-amber-900",
                  tone === "sky" && "border-sky-200/90 bg-sky-50/95 text-sky-900",
                  tone === "emerald" && "border-emerald-200/90 bg-emerald-50/95 text-emerald-900",
                  tone === "violet" && "border-violet-200/90 bg-violet-50/95 text-violet-900",
                  tone === "slate" && "border-slate-200/90 bg-white/95 text-slate-800",
                  tone === "rose" && "border-rose-200/90 bg-rose-50/95 text-rose-900"
                )}
              >
                {label}
              </span>
            ))}
          </div>
          <div className="hidden flex-wrap items-center gap-1 sm:flex">
            {[
              { label: "Clarify", tone: "slate" as const },
              { label: "Compare routes", tone: "indigo" as const },
              { label: "Employer step", tone: "amber" as const },
              { label: "Plan timing", tone: "emerald" as const },
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
            className="h-[70px] w-auto max-w-full min-[400px]:h-[82px] sm:h-full sm:max-h-[min(100%,194px)] md:max-h-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="twv-flow" x1="0" y1="0" x2="1" y2="0">
                <stop stopColor="#0f766e" stopOpacity="0.55" />
                <stop offset="1" stopColor="#4f46e5" stopOpacity="0.55" />
              </linearGradient>
              <linearGradient id="twv-card" x1="40" y1="34" x2="224" y2="196" gradientUnits="userSpaceOnUse">
                <stop stopColor="#f0fdfa" />
                <stop offset="1" stopColor="#f8fafc" />
              </linearGradient>
              <linearGradient id="twv-accent" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#0f766e" stopOpacity="0.92" />
                <stop offset="1" stopColor="#0ea5e9" stopOpacity="0.88" />
              </linearGradient>
            </defs>

            <text x="18" y="22" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="600" fill="#475569" opacity="0.9">
              Employer + worker
            </text>
            <text x="146" y="22" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="600" fill="#475569" opacity="0.9">
              Route branching
            </text>
            <text x="292" y="22" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="600" fill="#475569" opacity="0.9">
              Practical next steps
            </text>

            <path d="M94 26 H138 M240 26 H286" stroke="url(#twv-flow)" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />

            <g transform="translate(26 46)">
              <rect x="0" y="0" width="94" height="94" rx="12" fill="#fff" stroke="#0f172a" strokeWidth="1.1" opacity="0.96" />
              <circle cx="22" cy="26" r="8" fill="#e0f2fe" />
              <circle cx="50" cy="26" r="8" fill="#fef3c7" />
              <rect x="10" y="44" width="72" height="18" rx="5" fill="url(#twv-accent)" opacity="0.92" />
              <text x="18" y="56" fontSize="7" fontWeight="700" fill="white" fontFamily="system-ui,sans-serif">
                role + authorization
              </text>
              <rect x="10" y="72" width="24" height="12" rx="4" fill="#fef3c7" />
              <rect x="40" y="72" width="20" height="12" rx="4" fill="#dbeafe" />
              <rect x="64" y="72" width="18" height="12" rx="4" fill="#dcfce7" />
              <text x="14" y="80.5" fontSize="5.6" fontWeight="700" fill="#92400e" fontFamily="system-ui,sans-serif">
                TWV
              </text>
              <text x="44" y="80.5" fontSize="5.6" fontWeight="700" fill="#1d4ed8" fontFamily="system-ui,sans-serif">
                GVVA
              </text>
              <text x="67" y="80.5" fontSize="5.6" fontWeight="700" fill="#166534" fontFamily="system-ui,sans-serif">
                free
              </text>
            </g>

            <g transform="translate(138 50)">
              <rect x="0" y="0" width="120" height="88" rx="14" fill="url(#twv-card)" stroke="#94a3b8" strokeWidth="1" strokeOpacity="0.5" />
              <rect x="16" y="18" width="88" height="6" rx="2" fill="#e2e8f0" />
              <rect x="16" y="30" width="58" height="4" rx="1.5" fill="#cbd5e1" />
              <path d="M20 54 H102" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="3 4" />
              <rect x="16" y="46" width="24" height="14" rx="5" fill="#fef3c7" />
              <rect x="48" y="46" width="24" height="14" rx="5" fill="#dbeafe" />
              <rect x="80" y="46" width="24" height="14" rx="5" fill="#dcfce7" />
              <text x="20" y="55.5" fontSize="5.8" fontWeight="700" fill="#92400e" fontFamily="system-ui,sans-serif">
                TWV
              </text>
              <text x="52" y="55.5" fontSize="5.8" fontWeight="700" fill="#1d4ed8" fontFamily="system-ui,sans-serif">
                GVVA
              </text>
              <text x="84" y="55.5" fontSize="5.8" fontWeight="700" fill="#166534" fontFamily="system-ui,sans-serif">
                free
              </text>
              <text x="16" y="74" fontSize="7" fill="#64748b" fontFamily="system-ui,sans-serif" fontWeight="600">
                category · permit wording · employer role
              </text>
            </g>

            <path d="M258 92 C280 64 306 62 332 82" stroke="url(#twv-flow)" strokeWidth="2.4" fill="none" strokeLinecap="round" opacity="0.82" />
            <path d="M258 98 C282 116 308 118 336 104" stroke="url(#twv-flow)" strokeWidth="2.4" fill="none" strokeLinecap="round" opacity="0.82" />
            <path d="M258 104 C284 144 316 146 344 138" stroke="url(#twv-flow)" strokeWidth="2.4" fill="none" strokeLinecap="round" opacity="0.82" />

            <g transform="translate(292 48)">
              <rect x="0" y="0" width="88" height="34" rx="8" fill="#fff" stroke="#0f172a" strokeWidth="1.05" />
              <rect x="8" y="8" width="56" height="5" rx="2" fill="#fef3c7" />
              <rect x="8" y="18" width="42" height="3" rx="1" fill="#e2e8f0" />
              <text x="8" y="30" fontSize="6.4" fill="#92400e" fontWeight="700" fontFamily="system-ui,sans-serif">
                clarify route
              </text>
            </g>

            <g transform="translate(298 90)">
              <rect x="0" y="0" width="88" height="34" rx="8" fill="#fff" stroke="#0f172a" strokeWidth="1.05" opacity="0.95" />
              <rect x="8" y="8" width="52" height="5" rx="2" fill="#dbeafe" />
              <rect x="8" y="18" width="60" height="3" rx="1" fill="#e2e8f0" />
              <text x="8" y="30" fontSize="6.4" fill="#1d4ed8" fontWeight="700" fontFamily="system-ui,sans-serif">
                employer check
              </text>
            </g>

            <g transform="translate(304 132)">
              <rect x="0" y="0" width="88" height="34" rx="8" fill="#fff" stroke="#0f172a" strokeWidth="1.05" opacity="0.92" />
              <rect x="8" y="8" width="42" height="5" rx="2" fill="#dcfce7" />
              <rect x="8" y="18" width="56" height="3" rx="1" fill="#e2e8f0" />
              <text x="8" y="30" fontSize="6.4" fill="#166534" fontWeight="700" fontFamily="system-ui,sans-serif">
                plan timing
              </text>
            </g>

            <path d="M24 188h352" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 5" opacity="0.45" />
            <g fontFamily="system-ui,sans-serif" fontSize="6.5" fontWeight="600" fill="#64748b">
              <line x1="62" y1="180" x2="62" y2="188" stroke="#94a3b8" strokeWidth="1.2" />
              <text x="50" y="178" textAnchor="middle">
                Work setup
              </text>
              <line x1="164" y1="180" x2="164" y2="188" stroke="#94a3b8" strokeWidth="1.2" />
              <text x="152" y="178" textAnchor="middle">
                Compare
              </text>
              <line x1="258" y1="180" x2="258" y2="188" stroke="#94a3b8" strokeWidth="1.2" />
              <text x="246" y="178" textAnchor="middle">
                Clarify
              </text>
              <line x1="344" y1="180" x2="344" y2="188" stroke="#64748b" strokeWidth="1.5" />
              <text x="332" y="178" textAnchor="middle" fill="#0f172a" opacity="0.78">
                Act
              </text>
            </g>
            <text x="24" y="208" fontSize="8" fill="#64748b" fontWeight="500" fontFamily="system-ui,sans-serif">
              {"Employer + route context -> work authorization clarity -> move planning"}
            </text>
          </svg>
        </div>

        <p className="mt-0.5 text-center text-[8px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:mt-1 sm:text-[10px]">
          Route clarity first, paperwork second
        </p>
      </div>
    </div>
  );
}
