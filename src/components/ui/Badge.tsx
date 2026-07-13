import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-ink-200 bg-white/80 px-3.5 py-1.5 text-xs font-medium text-ink-700 shadow-sm transition-colors",
        "dark:border-white/10 dark:bg-ink-900/80 dark:text-ink-100",
        className
      )}
    >
      {children}
    </span>
  );
}
