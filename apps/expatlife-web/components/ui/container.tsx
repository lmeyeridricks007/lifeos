import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = ComponentPropsWithoutRef<"div">;

/**
 * Responsive content container: full width with max-width, mobile-first padding.
 * Use once per page (or once per major column). Safe-area aware for mobile.
 */
export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full min-w-0 max-w-screen-2xl px-4 pb-safe sm:px-6 lg:px-8 xl:px-10",
        className
      )}
      {...props}
    />
  );
}
