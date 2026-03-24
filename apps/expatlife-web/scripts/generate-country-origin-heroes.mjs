/**
 * Previously generated abstract SVG-based heroes for origin-country guides.
 * Published heroes for Australia, Canada, France, Germany, and New Zealand are now
 * editorial photographs in public/images/countries (same visual language as US/UK/India).
 *
 * Do not reintroduce gradient placeholders for those slugs — it would regress the site.
 *
 * To add a new abstract-only hero (not recommended for production), append entries to
 * `heroes` below and run: node scripts/generate-country-origin-heroes.mjs
 *
 * For unique editorial photo heroes, add sources then run:
 *   `node scripts/ingest-country-hero-sources.mjs` (see that file for `INPUT_MAP` / env).
 *
 * For AI-generated editorial sources saved under Cursor assets, run:
 *   `node scripts/ingest-ai-country-heroes.mjs` (see `INPUT_MAP` / `COUNTRY_AI_HERO_DIR`).
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "../public/images/countries");
const W = 1920;
const H = 960;

/** @type {{ slug: string; filename: string; svg: string }[]} */
const heroes = [];

async function main() {
  if (heroes.length === 0) {
    console.log(
      "No abstract country heroes configured. Editorial PNG/WebP assets live in public/images/countries.",
    );
    return;
  }
  await mkdir(OUT_DIR, { recursive: true });
  for (const { filename, svg } of heroes) {
    const pngPath = path.join(OUT_DIR, filename);
    const webpPath = pngPath.replace(/\.png$/i, ".webp");
    const base = sharp(Buffer.from(svg)).resize(W, H, { fit: "fill" });
    await base.clone().png({ compressionLevel: 9, effort: 10 }).toFile(pngPath);
    console.log("Wrote", pngPath);
    await base.clone().webp({ quality: 88, effort: 6 }).toFile(webpPath);
    console.log("Wrote", webpPath);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
