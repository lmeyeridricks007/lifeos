import Image from "next/image";
import { cn } from "@/lib/cn";
import { movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";

export function CitiesGuidePanoramaBanner({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-100 shadow-expatos-sm ring-1 ring-slate-900/[0.04]",
        className
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 z-[1] h-1", movingNlSignatureGradientClass)} aria-hidden />
      <div className="relative aspect-[2.4/1] w-full min-h-[140px] max-h-[min(42vh,320px)] sm:aspect-[21/9] sm:min-h-[160px] sm:max-h-[360px]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
          priority={priority}
        />
      </div>
    </figure>
  );
}
