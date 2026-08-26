import { readFile } from "node:fs/promises";
import path from "node:path";

import bundledContentVersion from "../../../packages/content/core/content_version.json";

const VERSION_CANDIDATES = [
  path.resolve(process.cwd(), "../../packages/content/core/content_version.json"),
  path.resolve(process.cwd(), "packages/content/core/content_version.json"),
  path.resolve(process.cwd(), "../packages/content/core/content_version.json"),
];

export async function getContentVersion() {
  const bundled = bundledContentVersion.version?.trim();
  if (bundled) return bundled;

  for (const filePath of VERSION_CANDIDATES) {
    try {
      const raw = await readFile(filePath, "utf8");
      const parsed = JSON.parse(raw) as { version?: string };
      if (parsed.version?.trim()) return parsed.version.trim();
    } catch {
      /* try next candidate */
    }
  }
  return "2026-08-26";
}
