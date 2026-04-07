import Link from "next/link";
import type { ResolvedScenario } from "@/components/content/PillarScenarioCards";
import { cn } from "@/lib/cn";
import {
  movingNlCardMicroLiftClass,
  movingNlCardShadowHoverClass,
  movingNlPathPrimaryCtaClass,
  movingNlSectionH2Class,
  movingNlSectionSubtitleClass,
  movingNlSignatureGradientClass,
} from "@/lib/ui/moving-nl-pillar-identity";

export type ChooseYourPathProps = {
  id?: string;
  /** Small caps label above the H2 (default: “Decision engine”). */
  eyebrow?: string;
  title?: string;
  intro: string;
  scenarios: ResolvedScenario[];
  className?: string;
};

const CHIP_CLASS =
  "inline-flex rounded-full border-0 bg-copilot-bg-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-copilot-primary ring-1 ring-copilot-primary/20";

const CHIP_LABELS: Record<string, string> = {
  work: "Work",
  partner_family: "Partner & family",
  study: "Study",
  unsure: "Unsure",
};

/**
 * Choose your path — decision engine: gradient cap, reading rail, bold action layer.
 */
export function ChooseYourPath({
  id = "scenarios",
  eyebrow = "Decision engine",
  title = "Choose your path",
  intro,
  scenarios,
  className,
}: ChooseYourPathProps) {
  const headingId = `${id}-heading`;
  const list = scenarios.slice(0, 5);

  return (
    <section id={id} aria-labelledby={headingId} className={cn("min-w-0", className)}>
      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-copilot-text-muted">{eyebrow}</p>
      <h2 id={headingId} className={cn(movingNlSectionH2Class, "mt-2")}>
        {title}
      </h2>
      {intro.trim() ? <p className={movingNlSectionSubtitleClass}>{intro}</p> : null}
      <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-5">
        {list.map((s) => (
          <article
            key={s.id}
            className={cn(
              "relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border-0 bg-copilot-surface p-5 shadow-expatos-md ring-1 ring-slate-900/[0.04] sm:p-6",
              movingNlCardShadowHoverClass,
              movingNlCardMicroLiftClass
            )}
          >
            <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
            <h3 className="pr-2 pt-1 text-base font-bold tracking-tight text-copilot-text-primary sm:text-lg">
              {s.personaTitle}
            </h3>
            {s.chips != null && s.chips.length > 0 ? (
              <ul className="mt-2.5 flex flex-wrap gap-1.5" aria-label="Topics">
                {s.chips.map((c) => (
                  <li key={c}>
                    <span className={CHIP_CLASS}>{CHIP_LABELS[c] ?? c}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted">
              What usually matters first
            </p>
            <ul className="mt-2 list-none space-y-2 text-sm leading-snug text-copilot-text-secondary">
              {s.whatMatters.slice(0, 3).map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copilot-accent" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="relative mt-4 overflow-hidden rounded-xl bg-gradient-to-r from-copilot-bg-soft/80 to-white pl-3 pr-3 py-3 shadow-expatos-sm ring-1 ring-copilot-primary/10 sm:pl-4">
              <div
                className="absolute bottom-0 left-0 top-0 w-1 rounded-l-xl bg-gradient-to-b from-copilot-primary to-copilot-accent"
                aria-hidden
              />
              <p className="pl-2 text-[10px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted">
                Suggested reading order
              </p>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm leading-snug marker:font-semibold marker:text-copilot-accent">
                {s.readingOrderLinks.slice(0, 3).map((link) => (
                  <li key={link.href} className="pl-0.5 marker:text-copilot-primary">
                    <Link
                      href={link.href}
                      className="font-medium text-copilot-text-primary decoration-transparent transition-colors hover:text-copilot-primary hover:underline"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
            {s.startToolLink ? (
              <div className="mt-4 rounded-xl bg-gradient-to-br from-slate-900/[0.03] to-copilot-bg-soft/40 p-4 shadow-inner">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted">
                  Fastest way to act
                </p>
                <Link href={s.startToolLink.href} className={cn(movingNlPathPrimaryCtaClass, "mt-3 no-underline")}>
                  {s.startToolLink.title}
                  <span className="ml-1" aria-hidden>
                    →
                  </span>
                </Link>
              </div>
            ) : null}
            {s.unknownsToConfirm.length > 0 ? (
              <p className="mt-3 rounded-xl bg-copilot-accent-warm/10 px-3 py-2.5 text-xs leading-snug text-copilot-text-primary ring-1 ring-copilot-accent-warm/20">
                <span className="font-bold text-copilot-accent-warm">Confirm:</span>{" "}
                {s.unknownsToConfirm.join(" · ")}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
