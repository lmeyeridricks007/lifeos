"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

const STORAGE_KEY = "expatlife-origin-country";

type OriginCountryContextValue = {
  originCountry: string | undefined;
  setOriginCountry: (slug: string | undefined) => void;
};

const OriginCountryContext = createContext<OriginCountryContextValue | null>(null);

export function OriginCountryProvider({
  children,
  initialOrigin,
}: {
  children: React.ReactNode;
  /** Initial value from URL ?from= or localStorage (set by server or client hydration). */
  initialOrigin?: string;
}) {
  const [origin, setOriginState] = useState<string | undefined>(initialOrigin);

  const setOriginCountry = useCallback((slug: string | undefined) => {
    setOriginState(slug);
    if (typeof window !== "undefined") {
      if (slug) {
        window.localStorage.setItem(STORAGE_KEY, slug);
      } else {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  const value = useMemo(
    () => ({ originCountry: origin, setOriginCountry }),
    [origin, setOriginCountry]
  );

  return (
    <OriginCountryContext.Provider value={value}>
      {children}
    </OriginCountryContext.Provider>
  );
}

export function useOriginCountry() {
  const ctx = useContext(OriginCountryContext);
  return ctx ?? { originCountry: undefined as string | undefined, setOriginCountry: () => {} };
}

/** Read origin from URL search params or localStorage (for initial server/client sync). */
export function getOriginFromSearchOrStorage(searchParams?: Record<string, string | string[] | undefined>): string | undefined {
  if (typeof window !== "undefined") {
    const fromUrl = typeof searchParams?.from === "string" ? searchParams.from : undefined;
    if (fromUrl) return fromUrl;
    return window.localStorage.getItem(STORAGE_KEY) ?? undefined;
  }
  const fromParam = searchParams?.from;
  return typeof fromParam === "string" ? fromParam : undefined;
}
