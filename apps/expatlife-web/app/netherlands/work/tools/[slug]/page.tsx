import {
  getPlaceholderStaticParams,
  placeholderToolRobots,
  renderPlaceholderPage,
} from "@/src/lib/tools/placeholderRouteFactory";

import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;
export const metadata = {
  title: "Work Tool (Coming Soon)",
  description: "Tool page for work and employment planning in the Netherlands.",
  robots: placeholderToolRobots,
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPlaceholderStaticParams("work-employment");
}

export default async function WorkToolPlaceholderPage({ params }: Props) {
  const { slug } = await params;
  return renderPlaceholderPage("work-employment", slug);
}
