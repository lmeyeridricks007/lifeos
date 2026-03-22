"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = {
  id: string;
  name?: string;
  defaultValue?: string;
  placeholder?: string;
  className?: string;
};

/**
 * Header-style search uses a plain form; this bar adds an explicit submit for mobile clarity.
 */
export function SearchInputBar({
  id,
  name = "q",
  defaultValue,
  placeholder = "Search guides, tools, and services",
  className,
}: Props) {
  return (
    <div className={`flex min-w-0 flex-col gap-2 sm:flex-row sm:items-stretch ${className ?? ""}`}>
      <Input
        id={id}
        type="search"
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        autoComplete="off"
        className="min-w-0 flex-1"
        aria-label={placeholder}
      />
      <Button type="submit" variant="primary" className="w-full shrink-0 sm:w-auto sm:min-w-[6.5rem]">
        Search
      </Button>
    </div>
  );
}
