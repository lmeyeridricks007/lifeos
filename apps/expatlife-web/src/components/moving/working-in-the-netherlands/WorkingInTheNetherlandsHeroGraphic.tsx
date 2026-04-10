import { cn } from "@/lib/cn";

export function WorkingInTheNetherlandsHeroGraphic({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-50 via-white to-indigo-50/60 shadow-card ring-1 ring-slate-900/[0.04]",
        "max-h-[min(148px,34vh)] sm:max-h-none sm:min-h-[196px]",
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
              { label: "Offer", tone: "sky" },
              { label: "Contract", tone: "violet" },
              { label: "Salary", tone: "emerald" },
              { label: "Permit", tone: "amber" },
              { label: "Payroll", tone: "slate" },
              { label: "Housing", tone: "rose" },
            ].map(({ label, tone }) => (
              <span
                key={label}
                className={cn(
                  "rounded-full border px-1.5 py-0.5 text-[7px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-sm sm:px-2.5 sm:py-1 sm:text-[10px]",
                  tone === "sky" && "border-sky-200/90 bg-sky-50/95 text-sky-900",
                  tone === "violet" && "border-violet-200/90 bg-violet-50/95 text-violet-900",
                  tone === "emerald" && "border-emerald-200/90 bg-emerald-50/95 text-emerald-900",
                  tone === "amber" && "border-amber-200/90 bg-amber-50/95 text-amber-900",
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
              { label: "Plan", tone: "slate" as const },
              { label: "Compare", tone: "indigo" as const },
              { label: "Relocate", tone: "amber" as const },
              { label: "Settle", tone: "emerald" as const },
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
              <linearGradient id="witn-flow" x1="0" y1="0" x2="1" y2="0">
                <stop stopColor="#4f46e5" stopOpacity="0.5" />
                <stop offset="1" stopColor="#059669" stopOpacity="0.55" />
              </linearGradient>
              <linearGradient id="witn-card" x1="44" y1="26" x2="220" y2="196" gradientUnits="userSpaceOnUse">
                <stop stopColor="#eff6ff" />
                <stop offset="1" stopColor="#f8fafc" />
              </linearGradient>
              <linearGradient id="witn-accent" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#4f46e5" stopOpacity="0.92" />
                <stop offset="1" stopColor="#0ea5e9" stopOpacity="0.88" />
              </linearGradient>
            </defs>

            <text x="24" y="22" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="600" fill="#475569" opacity="0.9">
              Offer
            </text>
            <text x="150" y="22" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="600" fill="#475569" opacity="0.9">
              Decision stack
            </text>
            <text x="281" y="22" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="600" fill="#475569" opacity="0.9">
              Setup after arrival
            </text>

            <path d="M84 26 H136 M240 26 H292" stroke="url(#witn-flow)" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />

            <g transform="translate(28 44)">
              <rect x="0" y="0" width="88" height="96" rx="12" fill="#fff" stroke="#0f172a" strokeWidth="1.1" opacity="0.96" />
              <rect x="10" y="12" width="44" height="6" rx="2" fill="#c7d2fe" />
              <rect x="10" y="24" width="66" height="4" rx="1.5" fill="#e2e8f0" />
              <rect x="10" y="34" width="54" height="4" rx="1.5" fill="#e2e8f0" />
              <rect x="10" y="48" width="68" height="20" rx="5" fill="url(#witn-accent)" opacity="0.92" />
              <text x="18" y="61" fontSize="7" fontWeight="700" fill="white" fontFamily="system-ui,sans-serif">
                offer + contract
              </text>
              <rect x="10" y="76" width="28" height="12" rx="4" fill="#dcfce7" />
              <rect x="44" y="76" width="34" height="12" rx="4" fill="#fef3c7" />
              <text x="16" y="84.5" fontSize="5.8" fontWeight="700" fill="#166534" fontFamily="system-ui,sans-serif">
                salary
              </text>
              <text x="50" y="84.5" fontSize="5.8" fontWeight="700" fill="#92400e" fontFamily="system-ui,sans-serif">
                permit
              </text>
            </g>

            <g transform="translate(136 54)">
              <rect x="0" y="0" width="118" height="80" rx="14" fill="url(#witn-card)" stroke="#94a3b8" strokeWidth="1" strokeOpacity="0.5" />
              <circle cx="28" cy="28" r="12" fill="#fff" stroke="#6366f1" strokeWidth="1.25" />
              <path d="M22 28h12M28 22v12" stroke="#6366f1" strokeWidth="1.4" strokeLinecap="round" />
              <rect x="48" y="18" width="54" height="5" rx="1.5" fill="#e2e8f0" />
              <rect x="48" y="29" width="42" height="4" rx="1" fill="#cbd5e1" />
              <rect x="16" y="48" width="24" height="12" rx="4" fill="#dbeafe" />
              <rect x="46" y="48" width="24" height="12" rx="4" fill="#dcfce7" />
              <rect x="76" y="48" width="24" height="12" rx="4" fill="#fee2e2" />
              <text x="20" y="56.6" fontSize="5.6" fontWeight="700" fill="#1d4ed8" fontFamily="system-ui,sans-serif">
                tax
              </text>
              <text x="49.5" y="56.6" fontSize="5.6" fontWeight="700" fill="#166534" fontFamily="system-ui,sans-serif">
                rent
              </text>
              <text x="79.5" y="56.6" fontSize="5.6" fontWeight="700" fill="#b91c1c" fontFamily="system-ui,sans-serif">
                admin
              </text>
              <text x="14" y="72" fontSize="7" fill="#64748b" fontFamily="system-ui,sans-serif" fontWeight="600">
                salary · permit · support
              </text>
            </g>

            <path d="M254 92 C274 64 304 60 330 82" stroke="url(#witn-flow)" strokeWidth="2.4" fill="none" strokeLinecap="round" opacity="0.82" />
            <path d="M254 98 C278 116 306 118 334 106" stroke="url(#witn-flow)" strokeWidth="2.4" fill="none" strokeLinecap="round" opacity="0.82" />
            <path d="M254 104 C278 146 316 148 344 140" stroke="url(#witn-flow)" strokeWidth="2.4" fill="none" strokeLinecap="round" opacity="0.82" />

            <g transform="translate(288 50)">
              <rect x="0" y="0" width="86" height="34" rx="8" fill="#fff" stroke="#0f172a" strokeWidth="1.05" />
              <rect x="8" y="8" width="22" height="5" rx="2" fill="#dbeafe" />
              <rect x="34" y="8" width="22" height="5" rx="2" fill="#dcfce7" />
              <rect x="60" y="8" width="18" height="5" rx="2" fill="#fef3c7" />
              <text x="8" y="28" fontSize="6.4" fill="#0f766e" fontWeight="700" fontFamily="system-ui,sans-serif">
                payroll + bank
              </text>
            </g>

            <g transform="translate(294 92)">
              <rect x="0" y="0" width="86" height="34" rx="8" fill="#fff" stroke="#0f172a" strokeWidth="1.05" opacity="0.95" />
              <rect x="8" y="8" width="64" height="5" rx="2" fill="#fef3c7" />
              <rect x="8" y="18" width="50" height="3" rx="1" fill="#e2e8f0" />
              <text x="8" y="30" fontSize="6.4" fill="#92400e" fontWeight="700" fontFamily="system-ui,sans-serif">
                BSN + insurance
              </text>
            </g>

            <g transform="translate(300 134)">
              <rect x="0" y="0" width="86" height="34" rx="8" fill="#fff" stroke="#0f172a" strokeWidth="1.05" opacity="0.92" />
              <rect x="8" y="8" width="42" height="5" rx="2" fill="#fee2e2" />
              <rect x="8" y="18" width="56" height="3" rx="1" fill="#e2e8f0" />
              <text x="8" y="30" fontSize="6.4" fill="#b91c1c" fontWeight="700" fontFamily="system-ui,sans-serif">
                housing + routine
              </text>
            </g>

            <path d="M24 188h352" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 5" opacity="0.45" />
            <g fontFamily="system-ui,sans-serif" fontSize="6.5" fontWeight="600" fill="#64748b">
              <line x1="58" y1="180" x2="58" y2="188" stroke="#94a3b8" strokeWidth="1.2" />
              <text x="46" y="178" textAnchor="middle">
                Offer
              </text>
              <line x1="156" y1="180" x2="156" y2="188" stroke="#94a3b8" strokeWidth="1.2" />
              <text x="144" y="178" textAnchor="middle">
                Compare
              </text>
              <line x1="252" y1="180" x2="252" y2="188" stroke="#94a3b8" strokeWidth="1.2" />
              <text x="240" y="178" textAnchor="middle">
                Relocate
              </text>
              <line x1="336" y1="180" x2="336" y2="188" stroke="#64748b" strokeWidth="1.5" />
              <text x="324" y="178" textAnchor="middle" fill="#0f172a" opacity="0.78">
                Settle
              </text>
            </g>
            <text x="28" y="208" fontSize="8" fill="#64748b" fontWeight="500" fontFamily="system-ui,sans-serif">
              {"Offer -> relocation decision -> admin setup -> working life"}
            </text>
          </svg>
        </div>

        <p className="mt-0.5 text-center text-[8px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:mt-1 sm:text-[10px]">
          Professional relocation, not only a job change
        </p>
      </div>
    </div>
  );
}
