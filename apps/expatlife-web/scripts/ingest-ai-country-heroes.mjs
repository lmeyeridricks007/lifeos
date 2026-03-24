/**
 * Resize AI-generated editorial hero sources into `{slug}-to-netherlands-hero.{png,webp}`.
 * Default source dir: Cursor project assets (where Generate Image saves).
 *
 * Usage (from apps/expatlife-web):
 *   node scripts/ingest-ai-country-heroes.mjs
 *   COUNTRY_AI_HERO_DIR=/path/to/sources node scripts/ingest-ai-country-heroes.mjs indonesia pakistan
 */
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WEB_ROOT = path.join(__dirname, "../public/images/countries");

/** Match existing country heroes (e.g. germany-to-netherlands-hero.png). */
const W = 1024;
const H = 682;

/** [slug, source filename] */
const INPUT_MAP = [
  ["indonesia", "indonesia-hero-source.png"],
  ["pakistan", "pakistan-hero-source.png"],
  ["kenya", "kenya-hero-source.png"],
  ["philippines", "philippines-hero-source.png"],
  ["nigeria", "nigeria-hero-source.png"],
  ["south-africa", "south-africa-hero-source.png"],
  ["united-states", "united-states-hero-source.png"],
  ["united-kingdom", "united-kingdom-hero-source.png"],
  ["india", "india-hero-source.png"],
];

const SOURCE_DIR =
  process.env.COUNTRY_AI_HERO_DIR ||
  path.join(
    process.env.HOME || "",
    ".cursor/projects/Users-LMeyeridricks-Documents-coding-expatos/assets",
  );

function resizedHero(inputPath) {
  return sharp(inputPath).resize(W, H, { fit: "cover", position: "attention" });
}

async function main() {
  const only = process.argv.slice(2).filter(Boolean);
  const rows =
    only.length > 0
      ? INPUT_MAP.filter(([slug]) => only.includes(slug))
      : INPUT_MAP;
  if (only.length > 0 && rows.length === 0) {
    console.error("No matching slugs in INPUT_MAP:", only.join(", "));
    process.exit(1);
  }
  for (const [slug, file] of rows) {
    const inputPath = path.join(SOURCE_DIR, file);
    const base = path.join(WEB_ROOT, `${slug}-to-netherlands-hero`);
    await resizedHero(inputPath)
      .png({ compressionLevel: 9, effort: 10 })
      .toFile(`${base}.png`);
    console.log("Wrote", `${base}.png`);
    await resizedHero(inputPath)
      .webp({ quality: 88, effort: 6 })
      .toFile(`${base}.webp`);
    console.log("Wrote", `${base}.webp`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
