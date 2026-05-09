import Link from "next/link";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  description: string;
  children: ReactNode;
  viewAllHref?: string;
  viewAllLabel?: string;
};

export function Section({
  id,
  title,
  description,
  children,
  viewAllHref,
  viewAllLabel = "View all",
}: SectionProps) {
  return (
    <section
      className="border-t border-zinc-200 py-14 dark:border-zinc-800"
      id={id}
    >
      <div className="grid gap-8 lg:grid-cols-[240px_1fr] lg:gap-12">
        <div>
          <h2 className="text-xl font-semibold text-zinc-950 dark:text-zinc-100">
            {title}
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-500">
            {description}
          </p>
        </div>
        <div>
          <div className="grid gap-4 sm:grid-cols-2">{children}</div>
          {viewAllHref && (
            <div className="mt-6">
              <Link
                className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-100"
                href={viewAllHref}
              >
                {viewAllLabel} →
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
