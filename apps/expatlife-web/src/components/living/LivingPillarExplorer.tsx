import { NextSteps } from "@/components/page/moving-pillar";
import { cn } from "@/lib/cn";
import {
  LIVING_CULTURE_ETIQUETTE_PATH,
  LIVING_DAILY_LIFE_PATH,
  LIVING_EMERGENCIES_SAFETY_PATH,
  LIVING_ESSENTIAL_APPS_PATH,
  LIVING_GETTING_AROUND_PATH,
  LIVING_HEALTHCARE_BASICS_PATH,
  LIVING_LANGUAGE_PATH,
  LIVING_SHOPPING_GROCERIES_PATH,
  LIVING_SURVIVAL_GUIDE_PATH,
  LIVING_WEATHER_PATH,
} from "@/src/components/living/livingPillarContent";

/** Flagship Living guides — reuse on deep Living pages for Move-style “keep exploring” cohesion. */
export const LIVING_PILLAR_EXPLORER_ITEMS = [
  {
    label: "Netherlands Survival Guide",
    href: LIVING_SURVIVAL_GUIDE_PATH,
    description:
      "Your first week in one place: what to tackle first, quick links, helpful tools, and answers to common questions.",
  },
  {
    label: "Daily Life Basics",
    href: LIVING_DAILY_LIFE_PATH,
    description: "Groceries, parcels, payments, and household rhythm once the first-day urgency fades into ordinary weeks.",
  },
  {
    label: "Shopping & Groceries",
    href: LIVING_SHOPPING_GROCERIES_PATH,
    description: "How supermarkets, self-checkout, household basics, store apps, and delivery habits actually work once you need a reliable weekly rhythm.",
  },
  {
    label: "Healthcare Basics",
    href: LIVING_HEALTHCARE_BASICS_PATH,
    description: "How insurance, the GP, pharmacies, urgent care, and emergency routes fit together in real Dutch daily life.",
  },
  {
    label: "Emergencies & Safety",
    href: LIVING_EMERGENCIES_SAFETY_PATH,
    description: "Emergency numbers, urgent vs non-urgent situations, and the calm first-response habits that make stressful moments easier to handle.",
  },
  {
    label: "Essential apps",
    href: LIVING_ESSENTIAL_APPS_PATH,
    description: "Which apps to download first for trains, paying in shops, groceries, deliveries, and staying in touch.",
  },
  {
    label: "Getting around",
    href: LIVING_GETTING_AROUND_PATH,
    description:
      "How Dutch travel works day to day: trains and buses, route planners, paying with your OV-chipkaart, and cycling.",
  },
  {
    label: "Dutch Culture & Etiquette",
    href: LIVING_CULTURE_ETIQUETTE_PATH,
    description:
      "Directness, invitations, neighbors, birthdays, work culture, and the social cues that make daily interactions easier to read.",
  },
  {
    label: "Language & Phrases",
    href: LIVING_LANGUAGE_PATH,
    description: "Practical Dutch for shops, transport, work, and neighbors when a small language layer reduces friction fast.",
  },
  {
    label: "Weather & Seasons",
    href: LIVING_WEATHER_PATH,
    description: "Wind, rain, dark days, and what to wear when weather changes how Dutch daily life actually feels.",
  },
] as const;

type LivingPillarExplorerProps = {
  className?: string;
  /** Defaults to `explore-living-pillar` for in-page anchor / scroll margin. */
  id?: string;
  title?: string;
  subtitle?: string;
  items?: ReadonlyArray<{
    label: string;
    href: string;
    description: string;
  }>;
};

/**
 * Move-adjacent “explore this pillar” strip using the shared `NextSteps` / pathway card system.
 */
export function LivingPillarExplorer({
  className,
  id = "explore-living-pillar",
  title = "More guides for daily life",
  subtitle = "Your first week, the apps you'll actually use, the routines that shape ordinary life, and the language, etiquette, or weather cues that make settling in smoother.",
  items = LIVING_PILLAR_EXPLORER_ITEMS,
}: LivingPillarExplorerProps) {
  return (
    <NextSteps
      id={id}
      compact
      className={cn("scroll-mt-28 md:scroll-mt-32", className)}
      title={title}
      subtitle={subtitle}
      items={[...items]}
      maxItems={items.length}
    />
  );
}
