/**
 * Subtle interaction timing for ExpatOS (no entrance animations, no heavy deps).
 * Use `motion-reduce:transition-none` / `motion-reduce:*` so prefers-reduced-motion users get instant state changes.
 */

/** Text / nav rows */
export const transitionColors =
  "transition-colors duration-150 ease-out motion-reduce:transition-none";

/** Cards, chips, segmented options, inputs (border + shadow) */
export const transitionSurface =
  "transition-[color,background-color,border-color,box-shadow] duration-150 ease-out motion-reduce:transition-none";

/** Primary CTAs / buttons using optional filter press feedback */
export const transitionInteractive =
  "transition-[color,background-color,border-color,box-shadow,filter] duration-150 ease-out motion-reduce:transition-none";

/** Chevrons, arrows */
export const transitionTransform =
  "transition-transform duration-200 ease-out motion-reduce:transition-none";

/** Very subtle press (primary / brand fills) */
export const activeBrightnessPress =
  "active:brightness-[0.96] motion-reduce:active:brightness-100";
