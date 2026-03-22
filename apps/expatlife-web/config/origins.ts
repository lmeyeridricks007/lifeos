import originCountries from "@/src/lib/datasets/countries.json";

export type Origin = {
  code: string;
  slug: string;
  label: string;
};

export const ORIGINS: Origin[] = originCountries as Origin[];

export const DEFAULT_ORIGIN = "south-africa";
