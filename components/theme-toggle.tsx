"use client";

import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { mounted, theme, toggleTheme } = useTheme();
  const isDark = mounted && theme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      aria-pressed={isDark}
      className="inline-flex h-8 w-8 items-center justify-center border border-zinc-300 text-sm font-medium text-zinc-700 hover:border-zinc-500 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:text-zinc-50"
      onClick={toggleTheme}
      type="button"
    >
      <span aria-hidden="true" className="dark:hidden">
        L
      </span>
      <span aria-hidden="true" className="hidden dark:inline">
        D
      </span>
    </button>
  );
}
