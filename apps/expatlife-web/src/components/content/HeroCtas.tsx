"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

type Cta = { label: string; href: string };

export function HeroCtas({ primaryCta, secondaryCta }: { primaryCta: Cta; secondaryCta: Cta }) {
  const searchParams = useSearchParams();
  const qs = searchParams.toString();
  const primaryHref = qs ? `${primaryCta.href}?${qs}` : primaryCta.href;
  return (
    <>
      <Link href={primaryHref}>
        <Button>{primaryCta.label}</Button>
      </Link>
      <Link href={secondaryCta.href}>
        <Button variant="secondary">{secondaryCta.label}</Button>
      </Link>
    </>
  );
}
