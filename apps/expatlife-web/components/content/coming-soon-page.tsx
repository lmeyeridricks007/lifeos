import Link from "next/link";
import { PillarMainStack } from "@/components/page/pillar-template";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { InfoBox } from "@/components/ui/info-box";

type ComingSoonPageProps = {
  title: string;
  intro: string;
};

export function ComingSoonPage({ title, intro }: ComingSoonPageProps) {
  return (
    <Section eyebrow="Coming soon" title={title} subtitle={intro}>
      <PillarMainStack className="mt-0 space-y-0 pt-6 sm:space-y-0 sm:pt-7 md:space-y-0 md:pt-8">
        <InfoBox title="This section is in progress" variant="info">
          We are expanding this section next. Use the relocation guide and tools for immediate planning support.
        </InfoBox>
        <Container className="mt-5 flex flex-wrap gap-3 px-0">
          <Link href="/netherlands/moving-to-the-netherlands">
            <Button>Open relocation guide</Button>
          </Link>
          <Link href="/netherlands/moving/tools/moving-checklist">
            <Button variant="secondary">Open checklist</Button>
          </Link>
        </Container>
      </PillarMainStack>
    </Section>
  );
}
