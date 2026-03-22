"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { DEFAULT_ORIGIN, ORIGINS, type Origin } from "@/config/origins";

const STORAGE_KEY = "expatlife-origin";

function getOriginFromUrlPath(pathname: string): string | null {
  const marker = "/moving-to-netherlands-from/";
  if (!pathname.includes(marker)) {
    return null;
  }

  const slug = pathname.split(marker)[1]?.split("/")[0];
  if (!slug) {
    return null;
  }

  return ORIGINS.some((origin) => origin.slug === slug) ? slug : null;
}

function resolveOrigin(slug: string | null): Origin {
  return ORIGINS.find((origin) => origin.slug === slug) ?? ORIGINS.find((origin) => origin.slug === DEFAULT_ORIGIN) ?? ORIGINS[0];
}

export function useOriginCountry() {
  const pathname = usePathname();
  const router = useRouter();
  const [originSlug, setOriginSlug] = useState<string>(DEFAULT_ORIGIN);

  useEffect(() => {
    const fromPath = getOriginFromUrlPath(pathname);
    if (typeof window !== "undefined") {
      const fromQuery = new URLSearchParams(window.location.search).get("from");
      const fromStorage = window.localStorage.getItem(STORAGE_KEY);
      const resolved = resolveOrigin(fromPath ?? fromQuery ?? fromStorage ?? DEFAULT_ORIGIN);
      setOriginSlug(resolved.slug);
      return;
    }
    setOriginSlug(resolveOrigin(fromPath ?? DEFAULT_ORIGIN).slug);
  }, [pathname]);

  const origin = useMemo(() => resolveOrigin(originSlug), [originSlug]);

  const setOrigin = (slug: string) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, slug);
      const url = new URL(window.location.href);
      url.searchParams.set("from", slug);
      setOriginSlug(resolveOrigin(slug).slug);
      router.replace(`${url.pathname}?${url.searchParams.toString()}`);
      return;
    }
    setOriginSlug(resolveOrigin(slug).slug);
    router.replace(`${pathname}?from=${slug}`);
  };

  return {
    origin,
    origins: ORIGINS,
    setOrigin,
  };
}
