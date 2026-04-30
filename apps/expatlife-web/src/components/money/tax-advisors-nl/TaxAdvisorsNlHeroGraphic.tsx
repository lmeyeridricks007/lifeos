import Image from "next/image";
import { cn } from "@/lib/cn";

export type TaxAdvisorsNlHeroImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type TaxAdvisorsNlHeroGraphicProps = {
  className?: string;
  image: TaxAdvisorsNlHeroImage;
};

/**
 * Photo-realistic hero for the tax-advisors guide — asset path lives in page model (`ogImage`).
 */
export function TaxAdvisorsNlHeroGraphic({ className, image }: TaxAdvisorsNlHeroGraphicProps) {
  return (
    <div className={cn("relative w-full max-w-[420px] justify-self-end md:max-w-none", className)}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 45vw, 420px"
        className="h-auto w-full rounded-2xl object-cover shadow-expatos-sm ring-1 ring-slate-900/[0.06]"
      />
    </div>
  );
}
