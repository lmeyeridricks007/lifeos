"use client";

import Image from "next/image";
import { useState } from "react";

type LawyerLogoClientProps = {
  src: string;
  alt: string;
  fallbackInitials: string;
};

export function LawyerLogoClient({ src, alt, fallbackInitials }: LawyerLogoClientProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className="flex h-full w-full items-center justify-center bg-surface-muted text-base font-semibold text-foreground-muted"
        aria-hidden
      >
        {fallbackInitials}
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={64}
      height={64}
      className="h-full w-full object-contain p-2"
      unoptimized={!src.startsWith("/")}
      onError={() => setFailed(true)}
    />
  );
}
