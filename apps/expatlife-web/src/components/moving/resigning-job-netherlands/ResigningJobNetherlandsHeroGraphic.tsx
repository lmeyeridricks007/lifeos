import { cn } from "@/lib/cn";

/** Move-pillar hero visual: exit decision, notice/contract, permit & payroll handoff — calm professional tone. */
export function ResigningJobNetherlandsHeroGraphic({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-50 via-white to-rose-50/40 shadow-card ring-1 ring-slate-900/[0.04]",
        "max-h-[min(128px,30vh)] sm:max-h-[min(208px,34vh)] md:max-h-none md:min-h-[188px]",
        className
      )}
      aria-hidden
    >
      <div className="pointer-events-none absolute -right-10 -top-12 h-44 w-44 rounded-full bg-rose-400/[0.08] blur-3xl sm:h-52 sm:w-52" />
      <div className="pointer-events-none absolute -bottom-14 -left-10 h-36 w-36 rounded-full bg-slate-400/[0.07] blur-3xl" />

      <div className="relative flex h-full min-h-0 flex-col justify-between p-2.5 sm:p-4 md:aspect-[16/11] md:p-6">
        <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
          {[
            { label: "Notice", tone: "amber" },
            { label: "Contract", tone: "slate" },
            { label: "Permit", tone: "violet" },
            { label: "Payroll", tone: "sky" },
            { label: "Housing", tone: "rose" },
            { label: "Family", tone: "emerald" },
            { label: "Timing", tone: "orange" },
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
                tone === "rose" && "border-rose-200/90 bg-rose-50/95 text-rose-900",
                tone === "orange" && "border-orange-200/90 bg-orange-50/95 text-orange-900"
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
              <linearGradient id="rjnl-path" x1="0" y1="0" x2="1" y2="0">
                <stop stopColor="#be123c" stopOpacity="0.35" />
                <stop offset="0.45" stopColor="#64748b" stopOpacity="0.45" />
                <stop offset="1" stopColor="#7c3aed" stopOpacity="0.42" />
              </linearGradient>
              <linearGradient id="rjnl-doc" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#f43f5e" stopOpacity="0.12" />
                <stop offset="1" stopColor="#6366f1" stopOpacity="0.15" />
              </linearGradient>
            </defs>

            <text x="16" y="18" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="600" fill="#475569" opacity="0.9">
              Current role
            </text>
            <text x="158" y="18" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="600" fill="#475569" opacity="0.9">
              Decision & notice
            </text>
            <text x="292" y="18" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="600" fill="#475569" opacity="0.9">
              What comes next
            </text>

            <g transform="translate(20 36)">
              <rect x="0" y="0" width="90" height="76" rx="12" fill="#fff" stroke="#0f172a" strokeWidth="1.05" opacity="0.96" />
              <rect x="10" y="12" width="56" height="5" rx="2" fill="#fecdd3" />
              <rect x="10" y="24" width="70" height="4" rx="1.5" fill="#e2e8f0" />
              <rect x="10" y="34" width="48" height="4" rx="1.5" fill="#e2e8f0" />
              <rect x="10" y="48" width="70" height="20" rx="6" fill="url(#rjnl-doc)" stroke="#fda4af" strokeWidth="0.8" />
              <text x="18" y="62" fontSize="6.5" fontWeight="700" fill="#9f1239" fontFamily="system-ui,sans-serif">
                contract
              </text>
            </g>

            <path d="M110 74 H138" stroke="url(#rjnl-path)" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
            <rect x="124" y="68" width="10" height="12" rx="2" fill="#fff" stroke="#94a3b8" strokeWidth="0.7" opacity="0.95" />
            <path d="M126 71h6M126 74h4" stroke="#64748b" strokeWidth="0.6" strokeLinecap="round" />

            <g transform="translate(142 40)">
              <rect x="0" y="0" width="96" height="80" rx="14" fill="#fff7f7" stroke="#fda4af" strokeWidth="1.1" />
              <path d="M48 18 L58 38 L38 38 Z" fill="#fecdd3" stroke="#fb7185" strokeWidth="0.9" />
              <text x="48" y="54" textAnchor="middle" fontSize="7" fontWeight="700" fill="#9f1239" fontFamily="system-ui,sans-serif">
                resign?
              </text>
              <rect x="14" y="60" width="68" height="12" rx="4" fill="#fff" stroke="#e2e8f0" strokeWidth="0.8" />
              <text x="20" y="69" fontSize="5.5" fontWeight="600" fill="#64748b" fontFamily="system-ui,sans-serif">
                notice · date · HR
              </text>
            </g>

            <path d="M234 68 C258 56 278 56 298 72" stroke="url(#rjnl-path)" strokeWidth="2.2" fill="none" strokeLinecap="round" opacity="0.85" />
            <path d="M234 82 C260 94 282 96 302 88" stroke="url(#rjnl-path)" strokeWidth="2.2" fill="none" strokeLinecap="round" opacity="0.85" />

            <g transform="translate(286 38)">
              <rect x="0" y="0" width="98" height="92" rx="12" fill="#fff" stroke="#0f172a" strokeWidth="1.05" />
              <rect x="10" y="10" width="38" height="14" rx="4" fill="#ede9fe" />
              <rect x="54" y="10" width="34" height="14" rx="4" fill="#dbeafe" />
              <text x="16" y="20" fontSize="6" fontWeight="700" fill="#5b21b6" fontFamily="system-ui,sans-serif">
                stay
              </text>
              <text x="58" y="20" fontSize="6" fontWeight="700" fill="#1e40af" fontFamily="system-ui,sans-serif">
                pay
              </text>
              <rect x="10" y="30" width="78" height="4" rx="1.5" fill="#e2e8f0" />
              <rect x="10" y="40" width="60" height="4" rx="1.5" fill="#e2e8f0" />
              <rect x="10" y="54" width="78" height="22" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.9" />
              <text x="14" y="68" fontSize="6.5" fontWeight="700" fill="#334155" fontFamily="system-ui,sans-serif">
                rent · health · family
              </text>
            </g>

            <path d="M20 158h360" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 5" opacity="0.45" />
            <g fontFamily="system-ui,sans-serif" fontSize="6.5" fontWeight="600" fill="#64748b">
              <text x="65" y="152" textAnchor="middle">
                Read exit terms
              </text>
              <text x="190" y="152" textAnchor="middle">
                Choose timing
              </text>
              <text x="335" y="152" textAnchor="middle">
                Plan the month after
              </text>
            </g>
            <text x="20" y="200" fontSize="7.5" fill="#64748b" fontWeight="500" fontFamily="system-ui,sans-serif">
              One decision — separate clocks for contract, IND/payroll, and monthly life
            </text>
          </svg>
        </div>

        <p className="mt-0.5 text-center text-[8px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:mt-1 sm:text-[10px]">
          Exit · stay & payroll · rent & cover — line them up before you send
        </p>
      </div>
    </div>
  );
}
