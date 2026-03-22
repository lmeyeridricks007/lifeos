import { readFile } from "node:fs/promises";
import path from "node:path";

export async function getContentVersion() {
  const filePath = path.resolve(process.cwd(), "../../packages/content/core/content_version.json");
  try {
    const raw = await readFile(filePath, "utf8");
    const parsed = JSON.parse(raw) as { version?: string };
    return parsed.version ?? "unknown";
  } catch {
    return "unknown";
  }
}
