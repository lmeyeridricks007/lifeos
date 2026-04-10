import { cn } from "@/lib/cn";

/**
 * Move-pillar hero: permit lifecycle (purpose → hold → renew → local), route chips, SVG flow.
 */
export function ResidencePermitsHeroGraphic({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-50 via-white to-emerald-50/70 shadow-card ring-1 ring-slate-900/[0.04] sm:rounded-2xl",
        /** Mobile: cap height so hero column stays balanced; desktop keeps natural proportion */
        "max-h-[min(175px,40vh)] sm:max-h-none sm:min-h-[200px]",
        className
      )}
      aria-hidden
    >
      <div className="pointer-events-none absolute -right-8 -top-10 h-40 w-40 rounded-full bg-emerald-400/[0.09] blur-3xl sm:h-48 sm:w-48" />
      <div className="pointer-events-none absolute -bottom-14 -left-8 h-36 w-36 rounded-full bg-copilot-primary/[0.06] blur-3xl" />

      <div className="relative flex h-full min-h-0 flex-col justify-between p-2.5 sm:aspect-[16/11] sm:p-5 md:p-6">
        <div className="space-y-1.5 sm:space-y-2">
          <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
            {[
              { k: "Work", tone: "sky" },
              { k: "Study", tone: "violet" },
              { k: "Family", tone: "amber" },
              { k: "ZZP", tone: "slate" },
              { k: "Renew", tone: "emerald" },
            ].map(({ k, tone }) => (
              <span
                key={k}
                className={cn(
                  "rounded-full border px-1.5 py-0.5 text-[7px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-sm sm:px-2.5 sm:py-1 sm:text-[10px]",
                  tone === "sky" && "border-sky-200/90 bg-sky-50/95 text-sky-900",
                  tone === "violet" && "border-violet-200/90 bg-violet-50/95 text-violet-900",
                  tone === "amber" && "border-amber-200/90 bg-amber-50/95 text-amber-900",
                  tone === "slate" && "border-slate-200/90 bg-white/95 text-slate-800",
                  tone === "emerald" && "border-emerald-200/90 bg-emerald-50/95 text-emerald-900"
                )}
              >
                {k}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-1">
            {["Apply", "Hold", "Renew", "Local"].map((k) => (
              <span
                key={k}
                className="rounded-md border border-slate-200/90 bg-white/90 px-1.5 py-0.5 text-[7px] font-semibold uppercase tracking-wide text-slate-600 shadow-sm sm:text-[9px]"
              >
                {k}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mt-0.5 flex min-h-0 flex-1 items-center justify-center py-0 sm:mt-1 sm:py-0.5">
          <svg
            viewBox="0 0 400 220"
            className="h-[92px] w-auto max-w-full text-slate-800 sm:h-full sm:max-h-[min(100%,200px)] md:max-h-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="rp-card" x1="60" y1="40" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ecfdf5" />
                <stop offset="1" stopColor="#f8fafc" />
              </linearGradient>
              <linearGradient id="rp-arc" x1="0" y1="0" x2="1" y2="0">
                <stop stopColor="#059669" stopOpacity="0.45" />
                <stop offset="1" stopColor="#2563eb" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="rp-chip" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#059669" stopOpacity="0.9" />
                <stop offset="1" stopColor="#2563eb" stopOpacity="0.85" />
              </linearGradient>
            </defs>

            <text x="24" y="22" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="600" fill="#475569" opacity="0.9">
              Purpose
            </text>
            <text x="168" y="22" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="600" fill="#475569" opacity="0.9">
              Permit
            </text>
            <text x="288" y="22" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="600" fill="#475569" opacity="0.9">
              Renew · switch
            </text>

            <path d="M88 26 H152 M248 26 H300" stroke="url(#rp-arc)" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />

            <g transform="translate(32 40)">
              <rect x="8" y="0" width="72" height="92" rx="9" fill="#fff" stroke="#0f172a" strokeWidth="1.4" opacity="0.92" />
              <rect x="0" y="8" width="72" height="92" rx="9" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" opacity="0.65" />
              <rect x="12" y="18" width="48" height="6" rx="2" fill="#cbd5e1" />
              <rect x="12" y="30" width="36" height="4" rx="1" fill="#e2e8f0" />
              <rect x="12" y="38" width="52" height="4" rx="1" fill="#e2e8f0" />
            </g>

            <g transform="translate(130 46)">
              <rect x="0" y="0" width="112" height="72" rx="11" fill="url(#rp-card)" stroke="#94a3b8" strokeWidth="1" strokeOpacity="0.45" />
              <rect x="12" y="12" width="56" height="7" rx="2" fill="#a7f3d0" opacity="0.95" />
              <rect x="12" y="26" width="88" height="4" rx="1" fill="#cbd5e1" />
              <rect x="12" y="34" width="72" height="4" rx="1" fill="#cbd5e1" />
              <rect x="12" y="46" width="40" height="14" rx="3" fill="url(#rp-chip)" opacity="0.88" />
              <text x="18" y="56" fontSize="7" fontWeight="700" fill="white">
                VALID
              </text>
            </g>

            <path
              d="M 268 118 Q 310 86 340 118"
              stroke="url(#rp-arc)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              opacity="0.75"
            />
            <circle cx="340" cy="118" r="5" fill="#059669" opacity="0.85" />

            <g transform="translate(260 130)">
              <rect x="0" y="0" width="108" height="52" rx="8" fill="#fff" stroke="#0f172a" strokeWidth="1.2" />
              <rect x="8" y="10" width="40" height="6" rx="2" fill="#dbeafe" />
              <rect x="8" y="22" width="92" height="3" rx="1" fill="#e2e8f0" />
              <rect x="8" y="28" width="64" height="3" rx="1" fill="#e2e8f0" />
            </g>

            <path d="M24 196h352" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 5" opacity="0.5" />
            <text x="28" y="208" fontSize="8" fill="#64748b" fontWeight="500" fontFamily="system-ui,sans-serif">
              BSN · gemeente · payroll · insurance
            </text>
          </svg>
        </div>

        <p className="mt-0.5 text-center text-[8px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:mt-1 sm:text-[10px]">
          Route → permit → renew → local setup
        </p>
      </div>
    </div>
  );
}
