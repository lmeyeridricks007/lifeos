import { cn } from "@/lib/cn";

/**
 * Move-pillar hero: purpose → permit → local setup, with pathway cards and document motifs.
 */
export function VisasResidencyHeroGraphic({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-50 via-white to-sky-50/80 shadow-card ring-1 ring-slate-900/[0.04] sm:rounded-2xl",
        /** Mobile: cap height so the hero column doesn’t dominate; desktop: natural aspect. */
        "max-h-[200px] sm:max-h-none sm:min-h-[220px]",
        className
      )}
      aria-hidden
    >
      <div className="pointer-events-none absolute -right-10 -top-12 h-44 w-44 rounded-full bg-copilot-primary/[0.07] blur-3xl sm:-right-14 sm:-top-16 sm:h-52 sm:w-52" />
      <div className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative flex h-full min-h-0 flex-col justify-between p-3 sm:aspect-[16/11] sm:p-6 md:p-7">
        <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
          {[
            { k: "Work", tone: "sky" },
            { k: "Study", tone: "violet" },
            { k: "Partner", tone: "amber" },
            { k: "ZZP", tone: "slate" },
            { k: "Extend", tone: "blue" },
          ].map(({ k, tone }) => (
            <span
              key={k}
              className={cn(
                "rounded-full border px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-sm sm:px-2.5 sm:py-1 sm:text-[10px]",
                tone === "sky" && "border-sky-200/90 bg-sky-50/95 text-sky-900",
                tone === "violet" && "border-violet-200/90 bg-violet-50/95 text-violet-900",
                tone === "amber" && "border-amber-200/90 bg-amber-50/95 text-amber-900",
                tone === "slate" && "border-slate-200/90 bg-white/95 text-slate-800",
                tone === "blue" && "border-blue-200/90 bg-blue-50/95 text-blue-900"
              )}
            >
              {k}
            </span>
          ))}
        </div>

        <div className="relative mt-1 flex min-h-0 flex-1 items-center justify-center py-0 sm:mt-2 sm:py-1">
          <svg
            viewBox="0 0 400 220"
            className="h-[120px] w-auto max-w-full text-slate-800 sm:h-full sm:max-h-[min(100%,210px)] md:max-h-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="vr-card-a" x1="40" y1="40" x2="180" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="#eff6ff" />
                <stop offset="1" stopColor="#f8fafc" />
              </linearGradient>
              <linearGradient id="vr-card-b" x1="200" y1="30" x2="360" y2="210" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ecfeff" />
                <stop offset="1" stopColor="#f1f5f9" />
              </linearGradient>
              <linearGradient id="vr-chip" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#2563eb" stopOpacity="0.9" />
                <stop offset="1" stopColor="#06b6d4" stopOpacity="0.85" />
              </linearGradient>
              <linearGradient id="vr-step" x1="0" y1="0" x2="1" y2="0">
                <stop stopColor="#2563eb" stopOpacity="0.35" />
                <stop offset="1" stopColor="#06b6d4" stopOpacity="0.35" />
              </linearGradient>
            </defs>

            {/* Step labels — purpose → permit → local */}
            <g fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="600" fill="#475569">
              <text x="28" y="22" opacity="0.85">
                Purpose
              </text>
              <text x="168" y="22" opacity="0.85">
                Permit path
              </text>
              <text x="288" y="22" opacity="0.85">
                Local setup
              </text>
            </g>

            {/* Flow connectors */}
            <path
              d="M92 28 H148 M248 28 H292"
              stroke="url(#vr-step)"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.9"
            />
            <path d="M148 28 L158 24 V32 Z M292 28 L302 24 V32 Z" fill="#64748b" opacity="0.6" />

            {/* Document stack (purpose) */}
            <g transform="translate(36 38)">
              <rect x="0" y="8" width="56" height="72" rx="8" fill="#fff" stroke="#0f172a" strokeWidth="1.5" opacity="0.95" />
              <rect x="6" y="18" width="44" height="5" rx="1" fill="#e2e8f0" />
              <rect x="6" y="28" width="32" height="4" rx="1" fill="#cbd5e1" />
              <rect x="4" y="0" width="56" height="72" rx="8" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1" transform="translate(8 -6)" opacity="0.5" />
            </g>

            {/* Pathway cards (permit) */}
            <rect x="118" y="44" width="100" height="64" rx="10" fill="url(#vr-card-a)" stroke="#94a3b8" strokeWidth="1" strokeOpacity="0.45" />
            <rect x="128" y="54" width="36" height="6" rx="2" fill="#93c5fd" opacity="0.9" />
            <rect x="128" y="66" width="80" height="4" rx="1" fill="#cbd5e1" />
            <rect x="128" y="74" width="64" height="4" rx="1" fill="#cbd5e1" />
            <circle cx="198" cy="92" r="10" fill="#fff" stroke="#2563eb" strokeWidth="1.2" />
            <path d="M198 86v12M192 92h12" stroke="#2563eb" strokeWidth="1.3" strokeLinecap="round" />

            <rect x="232" y="48" width="120" height="58" rx="10" fill="url(#vr-card-b)" stroke="#94a3b8" strokeWidth="1" strokeOpacity="0.4" />
            <rect x="242" y="58" width="48" height="6" rx="2" fill="#a5f3fc" opacity="0.85" />
            <rect x="242" y="70" width="100" height="4" rx="1" fill="#e2e8f0" />
            <rect x="242" y="78" width="72" height="4" rx="1" fill="#e2e8f0" />

            {/* Residence card */}
            <g transform="translate(268 108)">
              <rect x="0" y="0" width="88" height="54" rx="8" fill="#fff" stroke="#0f172a" strokeWidth="1.5" />
              <rect x="8" y="10" width="26" height="7" rx="2" fill="#dbeafe" />
              <rect x="8" y="22" width="72" height="4" rx="1" fill="#e2e8f0" />
              <rect x="56" y="32" width="24" height="12" rx="2" fill="url(#vr-chip)" opacity="0.88" />
            </g>

            {/* Ground line: gemeente / BSN hint */}
            <path d="M32 188h336" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 5" opacity="0.55" />
            <g fontSize="8" fill="#64748b" fontWeight="500">
              <text x="36" y="204">
                BRP · BSN · bank · insurance
              </text>
            </g>
          </svg>
        </div>

        <p className="mt-0.5 text-center text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:mt-1 sm:text-[10px]">
          Official routes · your next step
        </p>
      </div>
    </div>
  );
}
