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
  return generatePlaceholderToolPageMetadata("citizenship", params);
}

export function generateStaticParams() {
  return getPlaceholderStaticParams("citizenship");
}

export default async function CitizenshipToolPlaceholderPage({ params }: Props) {
  const { slug } = await params;
  return renderPlaceholderPage("citizenship", slug);
}
