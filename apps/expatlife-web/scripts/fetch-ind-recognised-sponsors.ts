/**
 * Fetches and parses the IND Public Register Regular Labour and Highly Skilled Migrants.
 * Writes metadata.json and sponsors.json to public/data/hsm-sponsors/ for the
 * Highly Skilled Migrant Sponsors category page.
 *
 * Usage:
 *   pnpm tsx scripts/fetch-ind-recognised-sponsors.ts
 *   pnpm tsx scripts/fetch-ind-recognised-sponsors.ts path/to/saved-page.html
 *
 * If no path is given, fetches from the official IND URL. The IND page may return
 * HTML or pre-rendered content; the parser supports markdown-style tables and HTML tables.
 */

import * as fs from "fs";
import * as path from "path";

const IND_REGISTER_URL =
  "https://ind.nl/en/public-register-recognised-sponsors/public-register-regular-labour-and-highly-skilled-migrants";
const REGISTER_TYPE = "Public Register Regular Labour and Highly Skilled Migrants";
const SOURCE_HREF = IND_REGISTER_URL;
const OUTPUT_DIR = path.join(process.cwd(), "public", "data", "hsm-sponsors");

type SponsorRecord = {
  slug: string;
  name: string;
  kvkNumber: string;
  source: "IND";
  registerType: string;
  sourceHref: string;
  isOfficial: boolean;
  industry?: string;
  typeOfWork?: string;
  location?: string;
  websiteUrl?: string;
};

function slugify(name: string, kvkNumber: string): string {
  const base = name
    .trim()
    .toLowerCase()
    .replace(/["""]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  const safe = base || "org";
  return `${safe}-${kvkNumber}`;
}

function parseLastUpdated(text: string): string {
  // "The overview was last updated on 5 March 2026." or "last updated on 5 March 2026"
  const match = text.match(/last\s+updated\s+on\s+([^.]+?)(?:\.|$)/i);
  if (match) return match[1].trim();
  const iso = text.match(/\d{4}-\d{2}-\d{2}/);
  if (iso) return iso[0];
  return new Date().toISOString().slice(0, 10);
}

function parseMarkdownTable(text: string): { name: string; kvkNumber: string }[] {
  const rows: { name: string; kvkNumber: string }[] = [];
  // Match: | Org name | 12345678 |
  const lineRe = /^\|\s*(.+?)\s*\|\s*(\d{6,})\s*\|/;
  const lines = text.split(/\r?\n/);
  let skipHeader = true;
  for (const line of lines) {
    const m = line.match(lineRe);
    if (!m) continue;
    const [, namePart, kvk] = m;
    if (skipHeader && (namePart.includes("Organisation") || namePart.includes("KvK"))) {
      skipHeader = false;
      continue;
    }
    const name = namePart.replace(/^\s+|\s+$/g, "").trim();
    if (!name || !kvk) continue;
    rows.push({ name, kvkNumber: kvk.trim() });
  }
  return rows;
}

function parseHtmlTable(text: string): { name: string; kvkNumber: string }[] {
  const rows: { name: string; kvkNumber: string }[] = [];
  // Match <tr>...</tr> with two <td>...</td> (name and KvK)
  const trRe = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
  const tdRe = /<td[^>]*>([\s\S]*?)<\/td>/gi;
  let match;
  let isHeader = true;
  while ((match = trRe.exec(text)) !== null) {
    const trContent = match[1];
    const tds = [...trContent.matchAll(tdRe)].map((m) => m[1].replace(/<[^>]+>/g, "").trim());
    if (tds.length < 2) continue;
    const [name, kvk] = tds;
    if (isHeader && (name.toLowerCase().includes("organisation") || name.toLowerCase().includes("kvk"))) {
      isHeader = false;
      continue;
    }
    if (!/^\d{6,}$/.test(kvk)) continue;
    rows.push({ name, kvkNumber: kvk });
  }
  return rows;
}

function parseSponsors(text: string): { name: string; kvkNumber: string }[] {
  if (text.includes("| Organisation |") || text.includes("| Organisation |")) {
    return parseMarkdownTable(text);
  }
  if (text.includes("<tr") && text.includes("<td")) {
    return parseHtmlTable(text);
  }
  return parseMarkdownTable(text);
}

async function main() {
  let text: string;
  const fileArg = process.argv[2];

  if (fileArg && fs.existsSync(fileArg)) {
    text = fs.readFileSync(fileArg, "utf-8");
    console.log("Read content from file:", fileArg);
  } else {
    console.log("Fetching", IND_REGISTER_URL, "...");
    const res = await fetch(IND_REGISTER_URL, {
      headers: { "User-Agent": "ExpatLife/1.0 (IND register ingestion)" },
    });
    if (!res.ok) throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
    text = await res.text();
  }

  const lastUpdated = parseLastUpdated(text);
  const rawRows = parseSponsors(text);

  const sponsors: SponsorRecord[] = rawRows.map((r) => ({
    slug: slugify(r.name, r.kvkNumber),
    name: r.name,
    kvkNumber: r.kvkNumber,
    source: "IND",
    registerType: "Labour / Highly Skilled Migrants",
    sourceHref: SOURCE_HREF,
    isOfficial: true,
    typeOfWork: "Regular labour / Highly skilled migrant",
    location: "Netherlands",
    industry: "Not in IND register",
  }));

  const metadata = {
    lastUpdated,
    totalRecords: sponsors.length,
    sourceHref: SOURCE_HREF,
    registerType: REGISTER_TYPE,
    source: "IND",
  };

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "metadata.json"),
    JSON.stringify(metadata, null, 2),
    "utf-8"
  );
  fs.writeFileSync(
    path.join(OUTPUT_DIR, "sponsors.json"),
    JSON.stringify(sponsors, null, 0),
    "utf-8"
  );

  console.log("Last updated:", lastUpdated);
  console.log("Sponsors parsed:", sponsors.length);
  console.log("Written to", OUTPUT_DIR);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
