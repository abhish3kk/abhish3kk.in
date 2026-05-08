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

export function SiteHeader({ links }: SiteHeaderProps) {
  return (
    <header className="flex items-center justify-between gap-6 border-b border-zinc-200 pb-5 text-sm dark:border-zinc-800">
      <Link className="font-mono text-zinc-700 dark:text-zinc-300" href="/">
        abhish3kk.in
      </Link>
      <div className="flex items-center gap-5">
        <nav aria-label="Primary navigation" className="flex gap-5">
          {links.map((link) => (
            <Link
              className={
                link.active
                  ? "text-zinc-950 dark:text-zinc-100"
                  : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100"
              }
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
