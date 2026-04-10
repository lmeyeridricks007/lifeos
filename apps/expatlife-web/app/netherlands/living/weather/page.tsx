import type { Metadata } from "next";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { WeatherView } from "@/src/components/living/weather/WeatherView";
import { LIVING_WEATHER_PATH } from "@/src/components/living/livingPillarContent";

export const revalidate = CONTENT_REVALIDATE;

const canonical = LIVING_WEATHER_PATH;
const META_TITLE = "Weather & Seasons in the Netherlands";
const META_DESCRIPTION =
  "A practical guide to what Dutch weather usually feels like through the year - and how wind, rain, darker months, and changing light affect what you wear, how you travel, and how daily life feels.";

export const metadata: Metadata = {
  ...buildSocialMetadata({
    title: META_TITLE,
    description: META_DESCRIPTION,
    path: canonical,
    ogType: "article",
  }),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  keywords: [
    "weather in netherlands expat",
    "dutch weather guide",
    "seasons in the netherlands",
    "how to dress in netherlands weather",
    "netherlands winter and rain expat",
    "daily life weather netherlands",
  ],
};

export default function NetherlandsLivingWeatherPage() {
  return <WeatherView />;
}
