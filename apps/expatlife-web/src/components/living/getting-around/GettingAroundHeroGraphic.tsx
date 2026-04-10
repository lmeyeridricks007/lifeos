import { cn } from "@/lib/cn";

/**
 * Transport-focused hero collage — train, tram, metro, bike, phone + tap — matches `LivingSurvivalHeroGraphic` framing.
 */
export function GettingAroundHeroGraphic({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative isolate max-h-[min(50vw,210px)] overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-50 via-white to-sky-50/50 shadow-card ring-1 ring-slate-900/[0.04] sm:max-h-none sm:rounded-2xl",
        className
      )}
      aria-hidden
    >
      <div className="pointer-events-none absolute -right-10 -top-14 h-44 w-44 rounded-full bg-copilot-primary/[0.07] blur-3xl sm:-right-14 sm:-top-16 sm:h-52 sm:w-52" />
      <div className="pointer-events-none absolute -bottom-16 -left-10 h-36 w-36 rounded-full bg-amber-400/10 blur-3xl sm:h-44 sm:w-44" />
      <div className="pointer-events-none absolute left-[8%] top-7 h-px w-24 rotate-[-18deg] bg-gradient-to-r from-transparent via-sky-400/50 to-transparent sm:top-9" />
      <div className="pointer-events-none absolute right-[18%] top-11 h-px w-20 rotate-12 bg-gradient-to-r from-transparent via-amber-400/45 to-transparent" />

      <div className="relative flex h-full min-h-0 flex-col justify-between p-3.5 sm:aspect-[16/11] sm:p-6 md:p-7">
        <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 md:gap-2">
          {[
            { k: "Train", hint: "NS · intercity spine" },
            { k: "Tram", hint: "Urban surface lines" },
            { k: "Tap", hint: "Check in / out" },
            { k: "App", hint: "9292 · live legs" },
            { k: "Bike", hint: "Station link" },
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

        <div className="relative mt-1.5 flex min-h-0 flex-1 items-center justify-center py-0.5 sm:mt-3 sm:py-2">
          <svg
            viewBox="0 0 400 260"
            className="h-full max-h-[min(180px,46vw)] w-auto max-w-full text-slate-800 sm:max-h-[min(100%,240px)] md:max-h-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="ecoga-hero-sky" x1="40" y1="0" x2="360" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="#bae6fd" stopOpacity="0.5" />
                <stop offset="1" stopColor="#f8fafc" />
              </linearGradient>
              <linearGradient id="ecoga-hero-train" x1="48" y1="88" x2="168" y2="168" gradientUnits="userSpaceOnUse">
                <stop stopColor="#facc15" />
                <stop offset="1" stopColor="#eab308" />
              </linearGradient>
              <linearGradient id="ecoga-hero-tap" x1="248" y1="118" x2="312" y2="186" gradientUnits="userSpaceOnUse">
                <stop stopColor="#34d399" stopOpacity="0.45" />
                <stop offset="1" stopColor="#10b981" stopOpacity="0.15" />
              </linearGradient>
            </defs>

            <rect x="16" y="20" width="368" height="132" rx="16" fill="url(#ecoga-hero-sky)" stroke="#94a3b8" strokeWidth="1" strokeOpacity="0.45" />

            {/* catenary hint */}
            <path d="M44 92h120" stroke="#64748b" strokeWidth="1" strokeDasharray="3 5" opacity="0.45" />
            <path d="M52 92v16M92 92v12M132 92v14" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />

            {/* route / map */}
            <path
              d="M48 56h88M48 76h120M200 56v52M260 68v48"
              stroke="#cbd5e1"
              strokeWidth="1.2"
              strokeDasharray="4 6"
              opacity="0.75"
            />
            <circle cx="120" cy="56" r="4.5" fill="#0ea5e9" opacity="0.55" />
            <circle cx="200" cy="96" r="4.5" fill="#10b981" opacity="0.6" />

            {/* train — larger, clearer */}
            <g stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M44 104h118l-11 52H55l-11-52z" fill="url(#ecoga-hero-train)" stroke="#ca8a04" strokeWidth="1.5" />
              <rect x="58" y="114" width="86" height="24" rx="3" fill="#fff" stroke="#0f172a" strokeWidth="1.5" />
              <path d="M68 146v16M96 146v16M124 146v16" opacity="0.88" />
            </g>

            {/* tram — red accent like NL streetcar cue */}
            <rect x="184" y="118" width="98" height="26" rx="7" fill="#b91c1c" opacity="0.92" />
            <rect x="192" y="124" width="11" height="12" rx="2" fill="#fef2f2" opacity="0.95" />
            <rect x="208" y="124" width="11" height="12" rx="2" fill="#fef2f2" opacity="0.95" />
            <rect x="224" y="124" width="11" height="12" rx="2" fill="#fef2f2" opacity="0.95" />
            <rect x="240" y="124" width="11" height="12" rx="2" fill="#fef2f2" opacity="0.95" />
            <circle cx="274" cy="144" r="5.5" fill="#fbbf24" stroke="#78350f" strokeWidth="1" />

            {/* metro tube */}
            <path d="M288 158h76" stroke="#475569" strokeWidth="7" strokeLinecap="round" opacity="0.4" />
            <path d="M296 158h60" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" opacity="0.65" />

            {/* bike — foreground scale */}
            <g transform="translate(272 44)">
              <circle cx="20" cy="42" r="15" fill="none" stroke="#0f172a" strokeWidth="2" />
              <circle cx="54" cy="42" r="15" fill="none" stroke="#0f172a" strokeWidth="2" />
              <path d="M20 42 L32 20 L46 20 L54 42 M32 20 L28 42" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
            </g>

            {/* phone + NFC / tap */}
            <g>
              <rect x="228" y="68" width="48" height="82" rx="11" fill="#fff" stroke="#0f172a" strokeWidth="2" />
              <rect x="237" y="78" width="30" height="38" rx="4" fill="#e0f2fe" stroke="#0ea5e9" strokeWidth="1" />
              <text x="252" y="102" textAnchor="middle" fill="#0369a1" fontSize="11" fontWeight="700" fontFamily="system-ui,sans-serif">
                9292
              </text>
              <rect x="244" y="124" width="40" height="24" rx="6" fill="url(#ecoga-hero-tap)" stroke="#059669" strokeWidth="1.5" />
              <text x="264" y="140" textAnchor="middle" fill="#065f46" fontSize="8" fontWeight="800" fontFamily="system-ui,sans-serif" letterSpacing="0.06em">
                TAP
              </text>
              {/* NFC waves */}
              <path
                d="M220 132c8-8 8-20 0-28"
                stroke="#10b981"
                strokeWidth="1.5"
                fill="none"
                opacity="0.55"
                strokeLinecap="round"
              />
              <path
                d="M214 138c14-14 14-34 0-48"
                stroke="#10b981"
                strokeWidth="1.2"
                fill="none"
                opacity="0.35"
                strokeLinecap="round"
              />
            </g>

            {/* ground / bike lane */}
            <rect x="24" y="168" width="352" height="72" rx="12" fill="#f1f5f9" stroke="#e2e8f0" />
            <rect x="32" y="176" width="336" height="10" rx="2" fill="#fef3c7" fillOpacity="0.6" />
            <path d="M40 181h12M60 181h12M80 181h12" stroke="#d97706" strokeWidth="1.2" strokeDasharray="5 8" opacity="0.5" />
          </svg>
        </div>

        <p className="mt-0.5 text-center text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:mt-2 sm:text-[11px]">
          Train · tram · metro · tap-to-pay · bike
        </p>
      </div>
    </div>
  );
}
