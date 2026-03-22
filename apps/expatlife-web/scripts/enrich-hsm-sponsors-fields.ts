/**
 * One-time script: adds typeOfWork, location, and industry to existing
 * public/data/hsm-sponsors/sponsors.json so table columns show values.
 * IND register only provides organisation name and KvK number; these are defaults.
 */
import * as fs from "fs";
import * as path from "path";

const SPONSORS_PATH = path.join(process.cwd(), "public", "data", "hsm-sponsors", "sponsors.json");

type SponsorRecord = {
  slug: string;
  name: string;
  kvkNumber: string;
  source: string;
  registerType: string;
  sourceHref?: string;
  isOfficial?: boolean;
  industry?: string;
  typeOfWork?: string;
  location?: string;
  websiteUrl?: string;
};

function main() {
  const raw = fs.readFileSync(SPONSORS_PATH, "utf-8");
  const sponsors = JSON.parse(raw) as SponsorRecord[];
  if (!Array.isArray(sponsors)) throw new Error("Expected sponsors array");

  const enriched = sponsors.map((s) => ({
    ...s,
    typeOfWork: s.typeOfWork ?? "Regular labour / Highly skilled migrant",
    location: s.location ?? "Netherlands",
    industry: s.industry ?? "Not in IND register",
  }));

  fs.writeFileSync(SPONSORS_PATH, JSON.stringify(enriched, null, 0), "utf-8");
  console.log("Enriched", enriched.length, "sponsor records with typeOfWork, location, industry.");
}

main();
