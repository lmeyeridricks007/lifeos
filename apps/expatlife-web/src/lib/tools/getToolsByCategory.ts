import { loadToolRegistry, type ToolRecord } from "@/src/lib/tools/loadToolRegistry";

type ToolSort = "featured" | "alpha";

export function getToolsByCategory(categoryId: string, options?: { status?: ToolRecord["status"]; sort?: ToolSort }): ToolRecord[] {
  const { status, sort = "featured" } = options ?? {};
  const tools = loadToolRegistry().filter((tool) => tool.categoryId === categoryId && (!status || tool.status === status));

  if (sort === "alpha") {
    return tools.sort((a, b) => a.title.localeCompare(b.title));
  }

  // Keep live tools first, then placeholders, then stable alphabetical ordering.
  return tools.sort((a, b) => {
    if (a.status !== b.status) return a.status === "live" ? -1 : 1;
    return a.title.localeCompare(b.title);
  });
}
