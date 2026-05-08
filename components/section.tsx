import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function Section({ id, title, description, children }: SectionProps) {
  return (
    <section className="border-t border-zinc-800 py-14" id={id}>
      <div className="grid gap-8 lg:grid-cols-[240px_1fr] lg:gap-12">
        <div>
          <h2 className="text-xl font-semibold text-zinc-100">{title}</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-500">{description}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">{children}</div>
      </div>
    </section>
  );
}
