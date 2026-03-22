"use client";

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
        className="flex h-full w-full items-center justify-center bg-slate-100 text-base font-semibold text-slate-500"
        aria-hidden
      >
        {fallbackInitials}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={64}
      height={64}
      className="h-full w-full object-contain p-2"
      onError={() => setFailed(true)}
    />
  );
}
