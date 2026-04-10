import Link from "next/link";
import { cn } from "@/lib/cn";
import { movingNlShellFaqClass } from "@/lib/ui/moving-nl-pillar-identity";
import type { MoveVisaResidencyReferences } from "./config/moveVisaResidency.types";

const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";

export function VisasResidencyOfficialSources({
  references,
  className,
}: {
  references: MoveVisaResidencyReferences;
  className?: string;
}) {
  return (
    <section
      id={references.sectionId}
      aria-labelledby="vr-official-heading"
      className={cn(SECTION_SCROLL_MARGIN, "mt-8", movingNlShellFaqClass, className)}
    >
      <h2 id="vr-official-heading" className="text-xl font-bold tracking-tight text-foreground">
        {references.sectionTitle}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{references.disclaimer}</p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {references.groups.map((g) => (
          <div key={g.id}>
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-foreground-muted">{g.title}</h3>
            <ul className="mt-2 space-y-2 text-sm">
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
