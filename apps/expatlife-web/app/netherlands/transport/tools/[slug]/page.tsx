import {
  getPlaceholderStaticParams,
  placeholderToolRobots,
  renderPlaceholderPage,
} from "@/src/lib/tools/placeholderRouteFactory";

export const revalidate = 3600;
export const metadata = {
  title: "Transport Tool (Coming Soon)",
  description: "Tool page for transport planning in the Netherlands.",
  robots: placeholderToolRobots,
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPlaceholderStaticParams("transport");
}

export default async function TransportToolPlaceholderPage({ params }: Props) {
  const { slug } = await params;
  return renderPlaceholderPage("transport", slug);
}
