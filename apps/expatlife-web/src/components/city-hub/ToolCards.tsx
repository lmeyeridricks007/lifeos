import type { CityToolCard } from "@/src/lib/city-hub/types";
import { CardLink } from "@/components/ui/card-link";
import { isRouteLive } from "@/src/lib/routes/routeStatus";

export function ToolCards({ tools }: { tools: CityToolCard[] }) {
  if (!tools?.length) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {tools.map((tool) => {
        const live = isRouteLive(tool.href);
        const soon = tool.status === "coming_soon" || !live;
        return (
          <CardLink
            key={tool.href}
            href={tool.href}
            title={tool.label}
            description={tool.description ?? ""}
            badge="Tool"
            status={soon ? "coming_soon" : undefined}
          />
        );
      })}
    </div>
  );
}
