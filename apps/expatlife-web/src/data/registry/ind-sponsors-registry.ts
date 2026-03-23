import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import type { SponsorRecord } from "@/src/lib/service-category/types";
import type { IndSponsorRegistryRow } from "./unified-registry-types";

const SPONSORS_JSON = path.join(process.cwd(), "public", "data", "hsm-sponsors", "sponsors.json");

const HSM_PAGE = "app/netherlands/services/highly-skilled-migrant-sponsors/page.tsx";
const DATA_PUBLIC_PATH = "/data/hsm-sponsors/sponsors.json";

/**
 * IND recognised sponsor rows (same payload as `SponsorDirectory` fetch).
 * Returns an empty array when `public/data/hsm-sponsors/sponsors.json` is absent (e.g. not checked into git).
 */
export function buildIndSponsorRegistryRows(): IndSponsorRegistryRow[] {
  if (!existsSync(SPONSORS_JSON)) return [];
  let list: SponsorRecord[];
  try {
    const parsed = JSON.parse(readFileSync(SPONSORS_JSON, "utf8")) as unknown;
    list = Array.isArray(parsed) ? (parsed as SponsorRecord[]) : [];
  } catch {
    return [];
  }
  return list.map((s) => ({
    ...s,
    rowKind: "ind-sponsor",
    registryId: `ind-sponsor/${s.slug}`,
    category: "ind-sponsor",
    sourcePage: HSM_PAGE,
    surfaces: ["SponsorDirectory"],
    dataFile: DATA_PUBLIC_PATH,
  }));
}
