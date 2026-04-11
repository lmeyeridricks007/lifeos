import { CardLink } from "@/components/ui/card-link";
import { cn } from "@/lib/cn";

export type MovePillarExploreCard = {
  href: string;
  title: string;
  description: string;
  meta?: string;
};

const DEFAULT_CARDS: MovePillarExploreCard[] = [
  {
    href: "/netherlands/moving-to-the-netherlands/",
    title: "Moving to the Netherlands",
    description: "Main Move pillar: scenarios, timeline, stages, and the full toolkit.",
    meta: "Move",
  },
  {
    href: "/netherlands/moving/visas-residency/",
    title: "Visas & residency orientation",
    description: "Doorway cards for work, study, family, and ZZP before you fixate on one permit name.",
    meta: "Move",
  },
  {
    href: "/netherlands/moving/working-in-the-netherlands/",
    title: "Working in the Netherlands",
    description: "Work-led move guide linking offers, salary, permits, payroll, housing, and first-month setup.",
    meta: "Move",
  },
  {
    href: "/netherlands/moving/changing-jobs-netherlands/",
    title: "Changing jobs in the Netherlands",
    description: "Practical checklist for job switches: contracts, permits, salary, housing, and admin timing.",
    meta: "Move",
  },
  {
    href: "/netherlands/moving/resigning-job-netherlands/",
    title: "Resigning a job in the Netherlands",
    description: "Exit planning: notice, contract clauses, permits, salary continuity, and life admin before you resign.",
    meta: "Move",
  },
  {
    href: "/netherlands/moving/layoffs-netherlands/",
    title: "Layoffs in the Netherlands",
    description: "Redundancy and role-ending risk: employment, permits, salary continuity, housing, and calm next steps.",
    meta: "Move",
  },
  {
    href: "/netherlands/moving/twv-work-permit/",
    title: "TWV work permit",
    description: "Practical guide to when TWV may matter, how it differs from other routes, and what to clarify early.",
    meta: "Move",
  },
  {
    href: "/netherlands/moving/residence-permits/",
    title: "Residence permits in the Netherlands",
    description: "Permit purpose, renewal, and what comes after approval—next to the route overview.",
    meta: "Move",
  },
  {
    href: "/netherlands/moving/extensions-changes/",
    title: "Extensions & changes in the Netherlands",
    description: "After arrival: expiries, renewals, job and life shifts—when to act and what to open next.",
    meta: "Move",
  },
  {
    href: "/netherlands/moving/status-changes/",
    title: "Status changes in the Netherlands",
    description: "When the basis of your stay may be changing across work, study, family, or self-employment.",
    meta: "Move",
  },
  {
    href: "/netherlands/moving/tools/",
    title: "Move & immigration tools",
    description: "Checklists, planners, document readiness, first 90 days, and arrival flow.",
    meta: "Tools",
  },
  {
    href: "/netherlands/work/tools/",
    description: "Job offer comparison, contract scanner, payslip decoder—pair with a work-led permit.",
    meta: "Work",
    title: "Work tools",
  },
  {
    href: "/netherlands/money/tools/",
    description: "Cost of living, salary net, healthcare allowance—budget the months after you land.",
    meta: "Money",
    title: "Money tools",
  },
  {
    href: "/netherlands/housing/tools/",
    description: "Rent affordability and housing decision tools once registration and income are clearer.",
    meta: "Housing",
    title: "Housing tools",
  },
  {
    href: "/netherlands/living/survival-guide/",
    description: "OV, apps, payments, groceries—daily rhythm after admin is moving.",
    meta: "Living",
    title: "Netherlands Survival Guide",
  },
];

type Props = {
  /** Override or extend the default pillar strip (e.g. mark current page in copy). */
  cards?: MovePillarExploreCard[];
  className?: string;
  /** Omit or pass empty string to hide the kicker row (parent section supplies the heading). */
  title?: string;
  excludeHref?: string;
  /** When true, card `description` strings may use `**bold**` segments. */
  descriptionMarkdown?: boolean;
};

/**
 * “Explore this pillar” strip aligned with Living’s continue-pillar pattern — CardLink grid for Move / adjacent pillars.
 */
export function MovePillarExploreGrid({
  cards = DEFAULT_CARDS,
  className,
  title = "Explore the journey",
  excludeHref,
  descriptionMarkdown,
}: Props) {
  const normalizedExclude = excludeHref?.replace(/\/+$/, "") ?? null;
  const visibleCards =
    normalizedExclude == null
      ? cards
      : cards.filter((c) => c.href.replace(/\/+$/, "") !== normalizedExclude);

  return (
    <div className={className}>
      {title ? (
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-foreground-muted">{title}</p>
      ) : null}
      <div className={cn(title ? "mt-3" : "", "grid gap-3 sm:grid-cols-2 lg:grid-cols-3")}>
        {visibleCards.map((c) => (
          <CardLink
            key={c.href}
            href={c.href}
            title={c.title}
            description={c.description}
            descriptionMarkdown={descriptionMarkdown}
            meta={c.meta}
          />
        ))}
      </div>
    </div>
  );
}
