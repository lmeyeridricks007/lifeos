"use client";

import { useEffect } from "react";
import { trackOutboundLink, type OutboundLinkType } from "@/lib/analytics/track";
import { utmContentFromPath, withPartnerReferralUtms } from "@/lib/analytics/referral-utm";

const LINK_TYPES = new Set<string>(["provider", "official_source", "external_resource"]);

function parseLinkType(raw: string | null): OutboundLinkType {
  if (raw && LINK_TYPES.has(raw)) return raw as OutboundLinkType;
  return "external_resource";
}

function truncateLinkText(text: string, max = 200): string {
  const t = text.trim().replace(/\s+/g, " ");
  return t.length <= max ? t : `${t.slice(0, max)}…`;
}

function resolveAnchor(target: EventTarget | null): HTMLAnchorElement | null {
  if (!(target instanceof Element)) return null;
  const el = target.closest("a[href]");
  return el instanceof HTMLAnchorElement ? el : null;
}

function isExternalHttpUrl(absoluteUrl: URL, currentOrigin: string): boolean {
  if (absoluteUrl.protocol !== "http:" && absoluteUrl.protocol !== "https:") return false;
  return absoluteUrl.origin !== currentOrigin;
}

function urlsHrefDiffer(a: string, b: string): boolean {
  try {
    return new URL(a).href !== new URL(b).href;
  } catch {
    return a !== b;
  }
}

function openExternalLikeLink(a: HTMLAnchorElement, finalUrl: string, e: MouseEvent): void {
  const newTab =
    e.type === "auxclick" ||
    a.target === "_blank" ||
    e.metaKey ||
    e.ctrlKey ||
    e.shiftKey;
  if (newTab) {
    window.open(finalUrl, "_blank", "noopener,noreferrer");
  } else {
    window.location.assign(finalUrl);
  }
}

/**
 * Capture-phase listener: fires `outbound_link_click` for any primary click on an
 * `http(s)` link that leaves the current origin. Enriched via `data-outbound-*` on the anchor.
 * Appends default referral UTMs when missing (`utm_source`, `utm_medium`, `utm_campaign`, optional `utm_content`).
 * Opt out: `data-analytics-skip-outbound="true"` (no event) or `data-analytics-skip-referral-utm="true"` (event only, no UTM merge).
 */
export function OutboundClickCapture() {
  useEffect(() => {
    const onPointerCapture = (e: MouseEvent) => {
      if (e.defaultPrevented) return;
      const isMiddle = e.type === "auxclick" && e.button === 1;
      const isLeft = e.type === "click" && e.button === 0;
      if (!isMiddle && !isLeft) return;

      const a = resolveAnchor(e.target);
      if (!a) return;
      if (a.getAttribute("data-analytics-skip-outbound") === "true") return;
      if (a.hasAttribute("download")) return;

      const hrefAttr = a.getAttribute("href");
      if (!hrefAttr || hrefAttr.startsWith("#") || hrefAttr.startsWith("javascript:")) return;
      if (hrefAttr.startsWith("mailto:") || hrefAttr.startsWith("tel:")) return;

      let dest: URL;
      try {
        dest = new URL(hrefAttr, window.location.href);
      } catch {
        return;
      }

      if (!isExternalHttpUrl(dest, window.location.origin)) return;

      const linkType = parseLinkType(a.getAttribute("data-outbound-link-type"));
      const partnerSlug = a.getAttribute("data-outbound-partner-slug")?.trim() || undefined;
      const explicitText = a.getAttribute("data-outbound-link-text")?.trim();
      const pageContextOverride = a.getAttribute("data-outbound-page-context")?.trim();
      const linkText = explicitText
        ? truncateLinkText(explicitText)
        : truncateLinkText(a.textContent ?? "");

      const skipReferralUtm = a.getAttribute("data-analytics-skip-referral-utm") === "true";
      const finalUrl = skipReferralUtm
        ? dest.href
        : withPartnerReferralUtms(dest.href, {
            partnerSlug,
            utmContent: utmContentFromPath(window.location.pathname),
          });

      trackOutboundLink({
        destination_url: finalUrl,
        link_text: linkText,
        page_context: pageContextOverride || `${window.location.pathname}${window.location.search}`,
        link_type: linkType,
        partner_slug: partnerSlug,
      });

      if (!skipReferralUtm && urlsHrefDiffer(dest.href, finalUrl)) {
        e.preventDefault();
        openExternalLikeLink(a, finalUrl, e);
      }
    };

    const opts = { capture: true };
    document.addEventListener("click", onPointerCapture, opts);
    document.addEventListener("auxclick", onPointerCapture, opts);
    return () => {
      document.removeEventListener("click", onPointerCapture, opts);
      document.removeEventListener("auxclick", onPointerCapture, opts);
    };
  }, []);

  return null;
}
