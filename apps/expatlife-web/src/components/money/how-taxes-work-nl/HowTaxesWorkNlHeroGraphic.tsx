import Image from "next/image";
import { cn } from "@/lib/cn";

export type HowTaxesWorkNlHeroImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type HowTaxesWorkNlHeroGraphicProps = {
  className?: string;
  image: HowTaxesWorkNlHeroImage;
};

/**
 * Photorealistic hero for the NL tax basics foundation page — raster under `public/images/heroes/`.
 */
export function HowTaxesWorkNlHeroGraphic({ className, image }: HowTaxesWorkNlHeroGraphicProps) {
  return (
    <figure
      className={cn(
        "relative isolate m-0 overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-100 shadow-card ring-1 ring-slate-900/[0.04]",
        "aspect-[3/2] max-h-[min(320px,52vh)] w-full sm:max-h-none sm:min-h-[200px] sm:max-h-[min(100%,280px)] md:max-h-none",
        className
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, min(420px, 38vw)"
        priority
        className="object-cover object-center"
      />
    </figure>
  );
}
