import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import {
  BANKING_VISUAL_CARD_BODY_CLASS,
  BANKING_VISUAL_CARD_CHIP_CLASS,
  BANKING_VISUAL_CARD_NUMBER_CHIP_CLASS,
  BANKING_VISUAL_CARD_PANEL_CLASS,
  BANKING_VISUAL_CARD_SHELL_CLASS,
} from "@/components/banking/bankingPageUi";

export type SafeBankingHabitItem = {
  title: string;
  whyItMatters: string;
  practicalHabit: string;
};

/**
 * Habit cards for banking safety guides — matches Money · Banking visual card chrome.
 */
const DENSITY_GRID: Record<"default" | "readable", string> = {
  default: "grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
  readable: "grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3",
};

export function SafeBankingHabits({
  habits,
  className,
  chipLabel = "Habit",
  /** Fewer columns on wide screens — better for five long “first step” cards on account-rejection style pages. */
  density = "default",
}: {
  habits: readonly SafeBankingHabitItem[];
  className?: string;
  /** Uppercase chip text, e.g. "Habit". */
  chipLabel?: string;
  density?: keyof typeof DENSITY_GRID;
}) {
  if (!habits.length) return null;

  return (
    <div className={cn("grid min-w-0", DENSITY_GRID[density], className)}>
      {habits.map((card, index) => (
        <article key={card.title} className={cn(BANKING_VISUAL_CARD_SHELL_CLASS, movingNlCardMicroLiftClass, "min-w-0 max-w-full overflow-hidden")}>
          <div className={cn("h-1.5 w-full shrink-0", movingNlSignatureGradientClass)} aria-hidden />
          <div className={cn(BANKING_VISUAL_CARD_BODY_CLASS, "min-w-0")}>
            <div className="flex flex-wrap items-center gap-2">
              <span className={BANKING_VISUAL_CARD_CHIP_CLASS}>{chipLabel}</span>
              <span className={BANKING_VISUAL_CARD_NUMBER_CHIP_CLASS}>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="mt-2 break-words text-base font-semibold leading-snug tracking-tight text-foreground">{card.title}</h3>
            <div className={cn(BANKING_VISUAL_CARD_PANEL_CLASS, "mt-4 space-y-2")}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground-muted">Why it matters</p>
              <p className="text-xs leading-snug text-foreground-muted sm:text-[13px]">{card.whyItMatters}</p>
              <p className="pt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground-muted">Practical habit</p>
              <p className="text-xs leading-snug text-foreground-muted sm:text-[13px]">{card.practicalHabit}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
