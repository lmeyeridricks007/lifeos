import Link from "next/link";
import type { ToolRelatedTool } from "@/src/lib/tools/shared/toolPageContent";

export type ToolRelatedToolsProps = {
  title?: string;
  tools: ToolRelatedTool[];
  className?: string;
};

/**
 * Inline list of related tool links. For "What happens next" handoff.
 */
export function ToolRelatedTools({
  title = "Related tools",
  tools,
  className = "",
}: ToolRelatedToolsProps) {
  if (!tools?.length) return null;
  return (
    <div className={className}>
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <ul className="mt-2 flex flex-wrap gap-3">
        {tools.map((t) => (
          <li key={t.href}>
            <Link
              href={t.href}
              className="font-medium text-brand-600 hover:text-brand-700 hover:underline"
            >
              {t.label}
            </Link>
            {t.description ? (
              <span className="ml-1 text-slate-500">— {t.description}</span>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
