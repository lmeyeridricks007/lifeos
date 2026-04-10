import Link from "next/link";
import { cn } from "@/lib/cn";
import type { LivingAppsRichParagraph as RichParagraphSegments } from "./livingEssentialApps.types";

const linkClass = "font-semibold text-link hover:text-link-hover hover:underline";

function RichLink({ href, children }: { href: string; children: string }) {
  const external = href.startsWith("http://") || href.startsWith("https://");
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={linkClass}>
      {children}
    </Link>
  );
}

export function LivingAppsRichParagraph({
  segments,
  className,
}: {
  segments: RichParagraphSegments;
  className?: string;
}) {
  return (
    <p className={cn("text-sm leading-relaxed text-foreground-muted", className)}>
      {segments.map((bit, i) =>
        bit.kind === "text" ? (
          <span key={i}>{bit.text}</span>
        ) : (
          <RichLink key={i} href={bit.href}>
            {bit.text}
          </RichLink>
        )
      )}
    </p>
  );
}
