import type { Metadata } from "next";
import {
  generatePlaceholderToolPageMetadata,
  getPlaceholderStaticParams,
  renderPlaceholderPage,
} from "@/src/lib/tools/placeholderRouteFactory";

import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return generatePlaceholderToolPageMetadata("move-immigration", params);
}

export function generateStaticParams() {
  return getPlaceholderStaticParams("move-immigration");
}

export default async function MovingToolPlaceholderPage({ params }: Props) {
  const { slug } = await params;
  return renderPlaceholderPage("move-immigration", slug);
}
