import {
  getPlaceholderStaticParams,
  placeholderToolRobots,
  renderPlaceholderPage,
} from "@/src/lib/tools/placeholderRouteFactory";

import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;
export const metadata = {
  title: "Move & Immigration Tool (Coming Soon)",
  description: "Tool page for move and immigration planning in the Netherlands.",
  robots: placeholderToolRobots,
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPlaceholderStaticParams("move-immigration");
}

export default async function MovingToolPlaceholderPage({ params }: Props) {
  const { slug } = await params;
  return renderPlaceholderPage("move-immigration", slug);
}
