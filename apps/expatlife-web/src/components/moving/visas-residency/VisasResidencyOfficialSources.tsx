import Link from "next/link";
import { BoldParagraph } from "@/components/content/PillarContentBlocks";
import { cn } from "@/lib/cn";
import { movingNlShellFaqClass } from "@/lib/ui/moving-nl-pillar-identity";
import type { MoveVisaResidencyReferences } from "./config/moveVisaResidency.types";

const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";

export function VisasResidencyOfficialSources({
  references,
  className,
  density = "default",
  omitSectionId = false,
  hideSurfaceHeading = false,
}: {
  references: MoveVisaResidencyReferences;
  className?: string;
  /** Compact layout: single column, tighter spacing — for long guide pages. */
  density?: "default" | "compact";
  /** When the parent supplies the scroll anchor (e.g. wraps in `<details id={sectionId}>`). */
  omitSectionId?: boolean;
  /** When true, keep a screen-reader heading but hide the visible title (parent provides summary UI). */
  hideSurfaceHeading?: boolean;
}) {
  const compact = density === "compact";
  const headingClass = cn(
    "font-bold tracking-tight text-foreground",
    compact ? "text-lg sm:text-xl" : "text-xl",
    hideSurfaceHeading && "sr-only"
  );
  return (
    <section
      id={omitSectionId ? undefined : references.sectionId}
      aria-labelledby="vr-official-heading"
      className={cn(SECTION_SCROLL_MARGIN, compact ? "mt-6" : "mt-8", movingNlShellFaqClass, className)}
    >
      <h2 id="vr-official-heading" className={headingClass}>
        {references.sectionTitle}
      </h2>
      <BoldParagraph
        text={references.disclaimer}
        className={cn(
          "text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground",
          compact ? "mt-2 text-xs leading-relaxed sm:text-sm" : "mt-3 text-sm leading-relaxed"
        )}
      />
      <div className={cn(compact ? "mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5" : "mt-6 grid gap-6 sm:grid-cols-2")}>
        {references.groups.map((g) => (
          <div key={g.id}>
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-foreground-muted">{g.title}</h3>
            <ul className={cn("space-y-2 text-sm", compact ? "mt-1.5" : "mt-2")}>
              {g.links.map((link) => (
                <li key={link.label}>
                  {link.type === "external" ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-link underline-offset-2 hover:text-link-hover hover:underline"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="font-medium text-link hover:text-link-hover hover:underline">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
