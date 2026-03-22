import type { LinkRegistry, RegistryLink } from "./types";

export function resolveLinkFromRegistry(
  registry: LinkRegistry,
  key: string
): RegistryLink | undefined {
  return registry[key];
}

export function resolveReadingOrder(
  registry: LinkRegistry,
  keys: string[]
): RegistryLink[] {
  const out: RegistryLink[] = [];
  for (const key of keys) {
    const link = registry[key];
    if (link) out.push(link);
  }
  return out;
}
