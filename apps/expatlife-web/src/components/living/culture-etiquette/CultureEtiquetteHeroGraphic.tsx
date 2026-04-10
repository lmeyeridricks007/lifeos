import { cn } from "@/lib/cn";

/**
 * Social-orientation collage for Dutch Culture & Etiquette.
 * Keeps the same framed editorial treatment as other Living hero graphics:
 * layered chips, practical urban cues, and a soft SVG scene instead of stock imagery.
 */
export function CultureEtiquetteHeroGraphic({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative isolate max-h-[10.75rem] overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-amber-50/70 via-white to-sky-50/50 shadow-card ring-1 ring-slate-900/[0.04] sm:max-h-none sm:aspect-[16/11]",
        className
      )}
      aria-hidden
    >
      <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-copilot-primary/[0.08] blur-3xl sm:-right-16 sm:-top-20 sm:h-56 sm:w-56" />
      <div className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-amber-300/15 blur-3xl sm:h-48 sm:w-48" />
      <div className="pointer-events-none absolute left-[11%] top-8 h-px w-28 rotate-[-14deg] bg-gradient-to-r from-transparent via-sky-400/40 to-transparent sm:top-10" />
      <div className="pointer-events-none absolute right-[18%] top-12 h-px w-24 rotate-10 bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

      <div className="relative flex h-full min-h-0 flex-col justify-between p-2.5 sm:p-6 md:p-7">
        <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 md:gap-2">
          {[
            { k: "Talk", hint: "Direct, calm, clear" },
            { k: "Home", hint: "Visits and neighbors" },
            { k: "Work", hint: "Feedback and meetings" },
            { k: "Plans", hint: "Calendars and timing" },
            { k: "Public", hint: "Shared-space rhythm" },
          ].map(({ k, hint }) => (
            <span
              key={k}
              title={hint}
              className="rounded-full border border-slate-200/90 bg-white/95 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-slate-700 shadow-sm backdrop-blur-sm sm:px-2.5 sm:py-1 sm:text-[10px]"
            >
              {k}
            </span>
          ))}
        </div>

        <div className="relative mt-1 flex min-h-0 flex-1 items-center justify-center py-0.5 sm:mt-3 sm:py-2">
          <svg
            viewBox="0 0 400 268"
            className="h-full max-h-[8.9rem] w-auto max-w-full text-slate-800 sm:max-h-[min(100%,248px)] md:max-h-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="ecoce-panel" x1="18" y1="18" x2="382" y2="228" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fff7ed" stopOpacity="0.9" />
                <stop offset="0.45" stopColor="#f8fafc" />
                <stop offset="1" stopColor="#e0f2fe" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="ecoce-speech" x1="46" y1="44" x2="158" y2="126" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fde68a" stopOpacity="0.55" />
                <stop offset="1" stopColor="#f59e0b" stopOpacity="0.18" />
              </linearGradient>
              <linearGradient id="ecoce-card" x1="258" y1="92" x2="334" y2="188" gradientUnits="userSpaceOnUse">
                <stop stopColor="#93c5fd" stopOpacity="0.4" />
                <stop offset="1" stopColor="#0ea5e9" stopOpacity="0.12" />
              </linearGradient>
            </defs>

            <rect x="14" y="16" width="372" height="236" rx="18" fill="url(#ecoce-panel)" stroke="#cbd5e1" strokeWidth="1" strokeOpacity="0.55" />

            {/* subtle canal-house rhythm */}
            <g opacity="0.28" fill="#94a3b8">
              <path d="M28 120 L38 88 L48 88 L58 120 Z" />
              <rect x="30" y="120" width="26" height="26" />
              <path d="M60 120 L70 82 L80 82 L90 120 Z" />
              <rect x="62" y="120" width="26" height="26" />
              <rect x="92" y="104" width="20" height="42" rx="1" />
            </g>

            {/* speech bubbles / conversation */}
            <g>
              <rect x="36" y="42" width="96" height="48" rx="16" fill="url(#ecoce-speech)" stroke="#d97706" strokeWidth="1" strokeOpacity="0.35" />
              <path d="M64 88 L58 100 L76 90" fill="#fde68a" fillOpacity="0.55" stroke="#d97706" strokeOpacity="0.35" />
              <rect x="54" y="58" width="54" height="6" rx="3" fill="#f59e0b" opacity="0.35" />
              <rect x="54" y="70" width="38" height="6" rx="3" fill="#f59e0b" opacity="0.22" />

              <rect x="116" y="28" width="74" height="38" rx="14" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
              <path d="M144 66 L138 76 L154 68" fill="#fff" stroke="#cbd5e1" />
              <rect x="130" y="42" width="38" height="5" rx="2.5" fill="#94a3b8" opacity="0.55" />
            </g>

            {/* two people at table / cafe-home-work overlap */}
            <g stroke="#0f172a" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="132" cy="132" r="16" fill="#fff" strokeWidth="1.8" />
              <path d="M118 164c4-12 12-18 22-18s18 6 22 18" strokeWidth="2" />
              <circle cx="204" cy="128" r="16" fill="#fff" strokeWidth="1.8" />
              <path d="M188 162c4-11 12-17 24-17 10 0 18 6 22 17" strokeWidth="2" />
              <path d="M122 124c2 2 5 3 10 3 4 0 8-1 10-3" strokeWidth="1.5" opacity="0.75" />
              <path d="M194 121c3 3 6 4 10 4s8-1 10-4" strokeWidth="1.5" opacity="0.75" />
              <path d="M112 182h118" strokeWidth="2.2" opacity="0.82" />
              <path d="M146 182v16M196 182v16" strokeWidth="2" opacity="0.6" />
            </g>

            {/* calendar / plan cue */}
            <g>
              <rect x="170" y="52" width="46" height="34" rx="10" fill="#fff" stroke="#0f172a" strokeWidth="1.2" />
              <rect x="170" y="52" width="46" height="10" rx="10" fill="#f8fafc" />
              <path d="M182 48v10M204 48v10" stroke="#0f172a" strokeWidth="1.3" strokeLinecap="round" />
              <rect x="180" y="68" width="10" height="8" rx="3" fill="#f59e0b" opacity="0.45" />
              <rect x="194" y="68" width="12" height="8" rx="3" fill="#bae6fd" opacity="0.9" />
            </g>

            {/* home / office / calendar cards */}
            <g>
              <rect x="250" y="80" width="102" height="60" rx="14" fill="#fff" stroke="#0f172a" strokeWidth="1.4" />
              <rect x="262" y="92" width="78" height="16" rx="6" fill="url(#ecoce-card)" stroke="#38bdf8" strokeWidth="0.9" />
              <text x="301" y="104" textAnchor="middle" fill="#0369a1" fontSize="8" fontWeight="800" fontFamily="system-ui,sans-serif">
                CLEAR PLANS
              </text>
              <rect x="264" y="116" width="30" height="8" rx="3" fill="#e2e8f0" />
              <rect x="300" y="116" width="32" height="8" rx="3" fill="#e2e8f0" />

              <rect x="258" y="150" width="56" height="44" rx="10" fill="#fff" stroke="#0f172a" strokeWidth="1.3" />
              <path d="M270 186v-18h14l8 8v10" stroke="#0f172a" strokeWidth="1.5" />
              <path d="M284 168v8h8" stroke="#0f172a" strokeWidth="1.5" />

              <rect x="322" y="150" width="42" height="44" rx="10" fill="#fff" stroke="#0f172a" strokeWidth="1.3" />
              <rect x="330" y="160" width="26" height="6" rx="3" fill="#f59e0b" opacity="0.4" />
              <rect x="330" y="172" width="18" height="5" rx="2.5" fill="#94a3b8" opacity="0.55" />
              <rect x="330" y="181" width="22" height="5" rx="2.5" fill="#94a3b8" opacity="0.4" />

              <rect x="244" y="150" width="8" height="26" rx="4" fill="#fff7ed" stroke="#d97706" strokeWidth="1" opacity="0.95" />
              <path d="M246 152c0-5 4-8 8-8" stroke="#d97706" strokeWidth="1.2" strokeLinecap="round" />
            </g>

            {/* street + bike-lane rhythm */}
            <rect x="28" y="208" width="344" height="28" rx="10" fill="#f1f5f9" stroke="#e2e8f0" />
            <rect x="38" y="214" width="102" height="6" rx="3" fill="#fecaca" opacity="0.75" />
            <path d="M156 222h18M184 222h18M212 222h18" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="5 6" opacity="0.45" />
            <g transform="translate(286 207)" stroke="#0f172a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.72">
              <circle cx="10" cy="17" r="6.5" fill="#fff" />
              <circle cx="30" cy="17" r="6.5" fill="#fff" />
              <path d="M10 17h10l6-10h6" />
              <path d="M18 7l5 10" />
              <path d="M23 17h7" />
            </g>
          </svg>
        </div>

        <p className="mt-0.5 text-center text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:mt-1.5 sm:text-[11px]">
          Clarity · timing · home life · shared space
        </p>
      </div>
    </div>
  );
}
