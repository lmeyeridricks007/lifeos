/**
 * Generates consistent-sized placeholder WebP images for guide heroes and infographics.
 * Hero: 800×400 (matches GuidePageTemplate). Infographic: 800×450.
 * Run: npx tsx scripts/generate-placeholder-images.ts
 */

import sharp from "sharp";
import fs from "fs";
import path from "path";

const HERO_SIZE = { width: 800, height: 400 };
const INFO_SIZE = { width: 800, height: 450 };

async function createPlaceholder(
  width: number,
  height: number,
  outPath: string
): Promise<void> {
  // Create a visible gradient (light blue top -> light slate bottom) so placeholders are clearly shown
  const topColor = { r: 224, g: 242, b: 254 }; // sky-100
  const bottomColor = { r: 226, g: 232, b: 240 }; // slate-200
  const gradient = Buffer.alloc(width * height * 3);
  for (let y = 0; y < height; y++) {
    const t = y / height;
    const r = Math.round(topColor.r * (1 - t) + bottomColor.r * t);
    const g = Math.round(topColor.g * (1 - t) + bottomColor.g * t);
    const b = Math.round(topColor.b * (1 - t) + bottomColor.b * t);
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 3;
      gradient[i] = r;
      gradient[i + 1] = g;
      gradient[i + 2] = b;
    }
  }
  await sharp(gradient, {
    raw: { width, height, channels: 3 },
  })
    .webp({ quality: 85 })
    .toFile(outPath);
  console.log("Created:", outPath);
}

async function main() {
  const publicDir = path.join(process.cwd(), "public");
  const movingDir = path.join(publicDir, "images", "guides", "netherlands", "moving");
  const infographicsDir = path.join(publicDir, "images", "infographics");

  [movingDir, infographicsDir].forEach((dir) => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  });

  const heroImages = [
    "bsn-registration-hero.webp",
    "register-address-hero.webp",
    "digid-hero.webp",
    "moving-checklist-hero.webp",
    "documents-hero.webp",
    "moving-timeline-hero.webp",
    "first-30-days-hero.webp",
    "first-60-days-hero.webp",
    "first-90-days-hero.webp",
    "moving-with-partner.webp",
    "moving-with-kids.webp",
    "pets-netherlands.webp",
    "shipping-household-goods.webp",
  ];

  const infographicImages = [
    "documents-to-prepare.webp",
    "first-30-days-netherlands.webp",
    "first-90-days-checklist.webp",
    "moving-timeline.webp",
  ];

  for (const name of heroImages) {
    await createPlaceholder(
      HERO_SIZE.width,
      HERO_SIZE.height,
      path.join(movingDir, name)
    );
  }

  for (const name of infographicImages) {
    await createPlaceholder(
      INFO_SIZE.width,
      INFO_SIZE.height,
      path.join(infographicsDir, name)
    );
  }

  console.log("Done. Hero images: 800×400, Infographic images: 800×450.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
