import type { ReactNode } from "react";
import Link from "next/link";
import type { LinkRegistry } from "@expatlife/content";
import { resolveLinkFromRegistry } from "@expatlife/content";
import { FileText, Home, Landmark } from "lucide-react";
import { InfoBox } from "@/components/ui/info-box";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlCardShadowHoverClass } from "@/lib/ui/moving-nl-pillar-identity";

export type PracticalEssentialsProps = {
  documents: {
    bullets: string[];
    primaryLinkKey: string;
  };
  banking: {
    bullets: string[];
    primaryLinkKey: string;
  };
  housing: {
    bullets: string[];
    registrationNote: string;
    primaryLinkKey: string;
  };
  linkRegistry: LinkRegistry;
};

export type PillarEssentialCardProps = {
  icon: ReactNode;
  title: string;
  accentClass: string;
  children: ReactNode;
};

/** Single elevated essentials tile (icon, title, body, optional warning + CTA as children). */
export function PillarEssentialCard({ icon, title, accentClass, children }: PillarEssentialCardProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-0 flex-col overflow-hidden rounded-2xl border-0 bg-copilot-surface p-5 shadow-expatos-md ring-1 ring-slate-900/[0.05] transition-[box-shadow,transform] duration-200 ease-out hover:shadow-expatos-hover sm:p-6",
        movingNlCardShadowHoverClass,
        movingNlCardMicroLiftClass
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1", accentClass)} aria-hidden />
      <div className="flex items-start gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-slate-50 to-white shadow-expatos-sm ring-1 ring-slate-900/5">
          {icon}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-bold tracking-tight text-copilot-text-primary sm:text-base">{title}</h3>
          <div className="mt-3 space-y-2 [&_ul]:space-y-2">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function PracticalEssentials({ documents, banking, housing, linkRegistry }: PracticalEssentialsProps) {
  const docLink = resolveLinkFromRegistry(linkRegistry, documents.primaryLinkKey);
  const bankLink = resolveLinkFromRegistry(linkRegistry, banking.primaryLinkKey);
  const housingLink = resolveLinkFromRegistry(linkRegistry, housing.primaryLinkKey);

  return (
    <div className="grid gap-4 sm:gap-5 lg:grid-cols-3 lg:items-stretch">
      <PillarEssentialCard
        title="Documents"
        accentClass="bg-gradient-to-r from-copilot-primary to-blue-600"
        icon={<FileText className="h-5 w-5 text-copilot-primary" aria-hidden />}
      >
        <ul className="list-none text-[0.8125rem] leading-snug text-copilot-text-secondary sm:text-sm">
          {documents.bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-copilot-primary" aria-hidden />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        {docLink ? (
          <Link
            href={docLink.href}
            className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-copilot-primary transition-colors hover:text-copilot-primary-strong hover:underline"
          >
            {docLink.title}
            <span aria-hidden>→</span>
          </Link>
        ) : null}
      </PillarEssentialCard>

      <PillarEssentialCard
        title="Banking"
        accentClass="bg-gradient-to-r from-copilot-accent to-blue-500"
        icon={<Landmark className="h-5 w-5 text-copilot-accent" aria-hidden />}
      >
        <ul className="list-none text-[0.8125rem] leading-snug text-copilot-text-secondary sm:text-sm">
          {banking.bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-copilot-accent" aria-hidden />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        {bankLink ? (
          <Link
            href={bankLink.href}
            className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-copilot-primary transition-colors hover:text-copilot-primary-strong hover:underline"
          >
            {bankLink.title}
            <span aria-hidden>→</span>
          </Link>
        ) : null}
      </PillarEssentialCard>

      <PillarEssentialCard
        title="Housing"
        accentClass="bg-gradient-to-r from-copilot-accent-warm to-amber-500"
        icon={<Home className="h-5 w-5 text-copilot-accent-warm" aria-hidden />}
      >
        <ul className="list-none text-[0.8125rem] leading-snug text-copilot-text-secondary sm:text-sm">
          {housing.bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-copilot-accent-warm" aria-hidden />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <InfoBox
          variant="warn"
          title="Registration"
          className="mt-2 rounded-xl border-0 bg-copilot-accent-warm/10 p-3 text-xs leading-relaxed ring-1 ring-copilot-accent-warm/25 [&_p]:text-copilot-text-primary [&_div.mt-1]:text-copilot-text-secondary"
        >
          {housing.registrationNote}
        </InfoBox>
        {housingLink ? (
          <Link
            href={housingLink.href}
            className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-copilot-primary transition-colors hover:text-copilot-primary-strong hover:underline"
          >
            {housingLink.title}
            <span aria-hidden>→</span>
          </Link>
        ) : null}
      </PillarEssentialCard>
    </div>
  );
}
