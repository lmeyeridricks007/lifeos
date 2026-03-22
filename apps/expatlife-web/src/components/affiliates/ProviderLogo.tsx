import Image from "next/image";
import type { AffiliateProvider } from "@/src/lib/affiliates/types";

type Props = {
  provider: AffiliateProvider;
  size?: "sm" | "md";
  className?: string;
};

function getInitials(name: string): string {
  const parts = name.split(/[\s-]+/).filter(Boolean);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

export function ProviderLogo({ provider, size = "md", className = "" }: Props) {
  const width = size === "sm" ? 32 : 48;
  const height = size === "sm" ? 32 : 48;
  const initials = getInitials(provider.name);

  if (provider.logo?.src) {
    return (
      <div className={`relative shrink-0 overflow-hidden rounded-lg bg-white ${className}`} style={{ width, height }}>
        <Image
          src={provider.logo.src}
          alt={provider.logo.alt || ""}
          width={width}
          height={height}
          className="object-contain p-1"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-600 font-semibold ${className}`}
      style={{ width, height, fontSize: size === "sm" ? 10 : 12 }}
      aria-hidden
    >
      {initials}
    </div>
  );
}
