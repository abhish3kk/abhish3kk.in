import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

type SiteHeaderLink = {
  href: string;
  label: string;
  active?: boolean;
};

type SiteHeaderProps = {
  links: SiteHeaderLink[];
};

const navLinkClass = (active?: boolean) =>
  active
    ? "text-zinc-950 dark:text-zinc-100"
    : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100";

export function SiteHeader({ links }: SiteHeaderProps) {
  return (
    <header className="border-b border-zinc-200 pb-4 text-sm dark:border-zinc-800">
      {/* Top row: logo + toggle (visible on all screens) */}
      <div className="flex items-center justify-between">
        <Link className="font-mono text-zinc-700 dark:text-zinc-300" href="/">
          abhish3kk.in
        </Link>
        <div className="flex items-center gap-4">
          {/* Desktop nav — hidden on mobile */}
          <nav
            aria-label="Primary navigation"
            className="hidden sm:flex sm:gap-5"
          >
            {links.map((link) => (
              <Link
                className={navLinkClass(link.active)}
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
      {/* Mobile nav — second row, hidden on sm+ */}
      <nav
        aria-label="Primary navigation"
        className="mt-3 flex flex-wrap gap-x-5 gap-y-1 sm:hidden"
      >
        {links.map((link) => (
          <Link
            className={navLinkClass(link.active)}
            href={link.href}
            key={link.href}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
