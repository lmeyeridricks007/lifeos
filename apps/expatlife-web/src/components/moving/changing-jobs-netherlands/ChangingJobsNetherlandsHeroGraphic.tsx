import { cn } from "@/lib/cn";

export function ChangingJobsNetherlandsHeroGraphic({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-50 via-white to-violet-50/50 shadow-card ring-1 ring-slate-900/[0.04]",
        "max-h-[min(118px,30vh)] sm:max-h-none sm:min-h-[196px]",
        className
      )}
      aria-hidden
    >
      <div className="pointer-events-none absolute -right-8 -top-10 h-40 w-40 rounded-full bg-violet-400/[0.09] blur-3xl sm:h-48 sm:w-48" />
      <div className="pointer-events-none absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-emerald-400/[0.07] blur-3xl" />

      <div className="relative flex h-full min-h-0 flex-col justify-between p-2.5 sm:aspect-[16/11] sm:p-5 md:p-6">
        <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
          {[
            { label: "Notice", tone: "amber" },
            { label: "New offer", tone: "sky" },
            { label: "Stay / permit", tone: "violet" },
            { label: "Payroll", tone: "slate" },
            { label: "Rent & commute", tone: "rose" },
            { label: "Timing", tone: "emerald" },
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

        <div className="relative mt-0.5 flex min-h-0 flex-1 items-center justify-center py-0 sm:mt-1 sm:py-0.5">
          <svg
            viewBox="0 0 400 220"
            className="h-[70px] w-auto max-w-full min-[400px]:h-[82px] sm:h-full sm:max-h-[min(100%,194px)] md:max-h-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="cjnl-branch" x1="0" y1="0" x2="1" y2="0">
                <stop stopColor="#7c3aed" stopOpacity="0.45" />
                <stop offset="0.5" stopColor="#0d9488" stopOpacity="0.5" />
                <stop offset="1" stopColor="#0284c7" stopOpacity="0.48" />
              </linearGradient>
              <linearGradient id="cjnl-node" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#6366f1" stopOpacity="0.9" />
                <stop offset="1" stopColor="#14b8a6" stopOpacity="0.85" />
              </linearGradient>
            </defs>

            <text x="20" y="20" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="600" fill="#475569" opacity="0.88">
              Current role
            </text>
            <text x="168" y="20" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="600" fill="#475569" opacity="0.88">
              Admin handoff
            </text>
            <text x="300" y="20" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="600" fill="#475569" opacity="0.88">
              Next life setup
            </text>

            <g transform="translate(24 40)">
              <rect x="0" y="0" width="88" height="72" rx="12" fill="#fff" stroke="#0f172a" strokeWidth="1.05" opacity="0.96" />
              <rect x="10" y="12" width="52" height="5" rx="2" fill="#ddd6fe" />
              <rect x="10" y="24" width="68" height="4" rx="1.5" fill="#e2e8f0" />
              <rect x="10" y="34" width="44" height="4" rx="1.5" fill="#e2e8f0" />
              <rect x="10" y="48" width="30" height="14" rx="5" fill="#e0e7ff" />
              <rect x="46" y="48" width="32" height="14" rx="5" fill="#fef3c7" />
              <text x="16" y="58" fontSize="6" fontWeight="700" fill="#5b21b6" fontFamily="system-ui,sans-serif">
                notice
              </text>
              <text x="50" y="58" fontSize="6" fontWeight="700" fill="#92400e" fontFamily="system-ui,sans-serif">
                permit
              </text>
            </g>

            <path d="M112 76 H152" stroke="url(#cjnl-branch)" strokeWidth="2.5" strokeLinecap="round" opacity="0.88" />

            <g transform="translate(156 44)">
              <circle cx="44" cy="32" r="28" fill="#faf5ff" stroke="#a78bfa" strokeWidth="1.2" />
              <path d="M44 20v24M32 32h24" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" opacity="0.85" />
              <text x="44" y="70" textAnchor="middle" fontSize="7" fontWeight="700" fill="#5b21b6" fontFamily="system-ui,sans-serif">
                switch?
              </text>
            </g>

            <path d="M236 60 C260 48 288 48 312 64" stroke="url(#cjnl-branch)" strokeWidth="2.2" fill="none" strokeLinecap="round" opacity="0.82" />
            <path d="M236 76 C262 88 292 90 318 82" stroke="url(#cjnl-branch)" strokeWidth="2.2" fill="none" strokeLinecap="round" opacity="0.82" />

            <g transform="translate(288 42)">
              <rect x="0" y="0" width="92" height="88" rx="12" fill="#fff" stroke="#0f172a" strokeWidth="1.05" />
              <rect x="10" y="10" width="72" height="5" rx="2" fill="url(#cjnl-node)" opacity="0.35" />
              <rect x="10" y="22" width="36" height="12" rx="4" fill="#dbeafe" />
              <rect x="52" y="22" width="30" height="12" rx="4" fill="#d1fae5" />
              <text x="16" y="31" fontSize="6" fontWeight="700" fill="#1e40af" fontFamily="system-ui,sans-serif">
                salary
              </text>
              <text x="56" y="31" fontSize="6" fontWeight="700" fill="#047857" fontFamily="system-ui,sans-serif">
                rent
              </text>
              <rect x="10" y="40" width="72" height="4" rx="1.5" fill="#e2e8f0" />
              <rect x="10" y="50" width="56" height="4" rx="1.5" fill="#e2e8f0" />
              <rect x="10" y="64" width="72" height="14" rx="5" fill="#f5f3ff" stroke="#c4b5fd" strokeWidth="0.9" />
              <text x="14" y="74" fontSize="6.5" fontWeight="700" fill="#4c1d95" fontFamily="system-ui,sans-serif">
                payroll · BSN · insurance
              </text>
            </g>

            <path d="M24 154h352" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 5" opacity="0.4" />
            <g fontFamily="system-ui,sans-serif" fontSize="6.5" fontWeight="600" fill="#64748b">
              <text x="68" y="148" textAnchor="middle">
                Leave well
              </text>
              <text x="200" y="148" textAnchor="middle">
                Compare paths
              </text>
              <text x="334" y="148" textAnchor="middle">
                Land stable
              </text>
            </g>
            <text x="24" y="200" fontSize="7.5" fill="#64748b" fontWeight="500" fontFamily="system-ui,sans-serif">
              Same job change — permits, payroll, and rent move together
            </text>
          </svg>
        </div>

        <p className="mt-0.5 text-center text-[8px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:mt-1 sm:text-[10px]">
          Switch job · align stay & payroll · stress-test rent — one stack
        </p>
      </div>
    </div>
  );
}
