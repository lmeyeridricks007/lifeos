import type { LucideIcon } from "lucide-react";
import { Building2, FileText, Fingerprint, MapPin } from "lucide-react";
import { cn } from "@/lib/cn";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import { AccountProtectionChecklist } from "@/components/banking/AccountProtectionChecklist";

export type DocumentChecklistGroup = {
  id: string;
  title: string;
  items: readonly string[];
};

function iconForGroupId(id: string): LucideIcon {
  switch (id) {
    case "identity-uploads":
      return Fingerprint;
    case "address-contact":
      return MapPin;
    case "linked-records":
      return Building2;
    default:
      return FileText;
  }
}

type Common = {
  className?: string;
  /** Parent section h2 id (e.g. SectionBlock heading) for the list region. */
  ariaLabelledBy?: string;
};

type FlatProps = Common & {
  items: readonly string[];
  groups?: never;
};

type GroupedProps = Common & {
  groups: readonly DocumentChecklistGroup[];
  items?: never;
};

export type DocumentCheckListProps = FlatProps | GroupedProps;

/**
 * Document / identity checklist — flat (delegates to {@link AccountProtectionChecklist}) or grouped with accessible `h3` per group.
 */
export function DocumentCheckList(props: DocumentCheckListProps) {
  const grouped = "groups" in props ? props.groups : undefined;
  if (grouped && grouped.length > 0) {
    const { className, ariaLabelledBy } = props;
    const groups = grouped;
    return (
      <div
        className={cn(
          "grid min-w-0 max-w-full grid-cols-1 items-start gap-5 sm:gap-6 lg:grid-cols-3 lg:gap-5 xl:gap-6",
          className
        )}
        {...(ariaLabelledBy ? { "aria-labelledby": ariaLabelledBy } : {})}
      >
        {groups.map((g) => {
          const Icon = iconForGroupId(g.id);
          return (
            <section
              key={g.id}
              className={cn(
                "relative flex min-h-0 min-w-0 flex-col overflow-hidden rounded-2xl border-0 bg-gradient-to-b from-white via-copilot-bg-soft/35 to-copilot-bg-light/60 shadow-expatos-md ring-1 ring-copilot-primary/[0.09]",
                movingNlCardMicroLiftClass
              )}
              aria-labelledby={`document-checklist-${g.id}-heading`}
            >
              <div className={cn("h-1 w-full shrink-0", movingNlSignatureGradientClass)} aria-hidden />
              <div className="flex min-h-0 w-full min-w-0 flex-col gap-3 p-5 sm:gap-3.5 sm:p-6">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-copilot-primary/14 via-white to-copilot-accent/10 text-copilot-primary shadow-sm ring-1 ring-copilot-primary/12"
                  aria-hidden
                >
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3
                  id={`document-checklist-${g.id}-heading`}
                  className="text-sm font-semibold leading-snug tracking-tight text-copilot-text-primary"
                >
                  {g.title}
                </h3>
                <AccountProtectionChecklist
                  className="mt-0 w-full min-w-0 max-w-none"
                  items={g.items}
                  ariaLabelledBy={`document-checklist-${g.id}-heading`}
                  variant="panel"
                />
              </div>
            </section>
          );
        })}
      </div>
    );
  }

  const flatItems = "items" in props ? props.items : undefined;
  if (flatItems && flatItems.length > 0) {
    return <AccountProtectionChecklist items={flatItems} className={props.className} ariaLabelledBy={props.ariaLabelledBy} />;
  }

  return null;
}
