import Link from "next/link";
import { cn } from "@/lib/cn";
import { guideSectionH2Class, hubPathwayCardClass } from "@/lib/ui/page-family";
import {
  movingNlCardMicroLiftClass,
  movingNlCardShadowHoverClass,
  movingNlSectionH2Class,
  movingNlSectionSubtitleClass,
  movingNlSignatureGradientClass,
} from "@/lib/ui/moving-nl-pillar-identity";

export type NextStepItem = {
  label: string;
  href: string;
  description?: string;
};

export type NextStepsProps = {
  id?: string;
  title?: string;
  /** Short line under the heading (reference guide pages). */
  subtitle?: string;
  items: NextStepItem[];
  /** Cap list length (default 3; pillar hubs may use more). */
  maxItems?: number;
  /** Tighter cards and spacing. */
  compact?: boolean;
  /** Numbered step badges + progression copy */
  variant?: "default" | "progression";
  /** Moving NL hub: bold SaaS CTA strip */
  movingHubPremium?: boolean;
  /**
   * When the parent already provides eyebrow/title/subtitle (e.g. `SectionBlock`), omit the inner
   * “Keep momentum” band + duplicate heading so only the numbered pathway grid renders.
   */
  suppressChrome?: boolean;
  className?: string;
};

const premiumCardClass =
  "relative block h-full overflow-hidden rounded-2xl border-0 bg-copilot-surface p-5 shadow-expatos-md no-underline ring-1 ring-copilot-primary/[0.08] transition-all duration-200 ease-out hover:shadow-expatos-hover motion-reduce:transition-none motion-reduce:hover:shadow-expatos-md";

export function NextSteps({
  id,
  title = "Next steps",
  subtitle,
  items,
  maxItems = 3,
  compact,
  variant = "default",
  movingHubPremium = false,
  suppressChrome = false,
  className,
}: NextStepsProps) {
  const headingId = id ? `${id}-heading` : undefined;
  const progression = variant === "progression";
  const h2Class = movingHubPremium ? movingNlSectionH2Class : guideSectionH2Class;
  const introClass = movingHubPremium
    ? movingNlSectionSubtitleClass
    : "mt-2 max-w-2xl text-sm leading-relaxed text-foreground-muted";

  return (
    <section id={id} aria-labelledby={suppressChrome ? undefined : headingId} className={cn("min-w-0", className)}>
      {!suppressChrome && movingHubPremium ? (
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-copilot-text-muted">Keep momentum</p>
      ) : null}
      {!suppressChrome ? (
        <h2 id={headingId} className={cn(h2Class, movingHubPremium && "mt-2")}>
          {title}
        </h2>
      ) : null}
      {!suppressChrome && subtitle != null && subtitle !== "" ? (
        <p className={introClass}>{subtitle}</p>
      ) : !suppressChrome && progression ? (
        <p className={introClass}>
          A deliberate order: start broad, then lock in admin, then choose your visa path.
        </p>
      ) : null}
      <ul
        className={cn(
          "grid sm:grid-cols-2 lg:grid-cols-3",
          suppressChrome ? "mt-0" : movingHubPremium ? "mt-4" : "mt-5",
          compact ? "gap-4" : "gap-4 sm:gap-5"
        )}
      >
        {items.slice(0, maxItems).map((item, index) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={cn(
                movingHubPremium ? cn(premiumCardClass, movingNlCardShadowHoverClass, movingNlCardMicroLiftClass) : hubPathwayCardClass,
                "group",
                !movingHubPremium && "h-full",
                !movingHubPremium && (compact ? "p-4" : "p-6")
              )}
            >
              {movingHubPremium ? (
                <div className={cn("absolute inset-x-0 top-0 h-1 opacity-90", movingNlSignatureGradientClass)} aria-hidden />
              ) : null}
              <div className={cn("flex gap-3.5", movingHubPremium && "relative pt-0.5")}>
                {progression ? (
                  <span
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white shadow-expatos-sm",
                      movingHubPremium
                        ? "bg-gradient-to-br from-copilot-primary to-copilot-primary-strong ring-1 ring-copilot-primary/30"
                        : "bg-brand-muted text-brand-strong ring-1 ring-brand/20"
                    )}
                    aria-hidden
                  >
                    {index + 1}
                  </span>
                ) : null}
                <div className="min-w-0 flex-1">
                  <span
                    className={cn(
                      "font-bold leading-snug",
                      movingHubPremium ? "text-copilot-text-primary" : "text-foreground"
                    )}
                  >
                    {item.label}
                  </span>
                  {item.description ? (
                    <p
                      className={cn(
                        movingHubPremium ? "text-copilot-text-secondary" : "text-foreground-muted",
                        compact ? "mt-1.5 text-xs leading-relaxed" : "mt-2 text-sm leading-relaxed"
                      )}
                    >
                      {item.description}
                    </p>
                  ) : null}
                  <span
                    className={cn(
                      "mt-3 inline-flex items-center gap-1.5 text-xs font-bold transition-colors",
                      movingHubPremium
                        ? "text-copilot-primary group-hover:text-copilot-primary-strong"
                        : "font-medium text-foreground-muted group-hover:text-brand-strong"
                    )}
                  >
                    Continue
                    <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
