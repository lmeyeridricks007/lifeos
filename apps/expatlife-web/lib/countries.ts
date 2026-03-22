import { readFile } from "node:fs/promises";
import path from "node:path";

export type CountryEntity = {
  slug: string;
  label: string;
  summary: string;
  highlights: string[];
};

export async function getCountryEntities(): Promise<CountryEntity[]> {
  const filePath = path.resolve(process.cwd(), "../../packages/content/core/entities/countries.json");
  const raw = await readFile(filePath, "utf8");
  return JSON.parse(raw) as CountryEntity[];
}

export async function getCountryEntityBySlug(slug: string) {
  const countries = await getCountryEntities();
  return countries.find((country) => country.slug === slug) ?? null;
}
