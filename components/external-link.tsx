import type { ReactNode } from "react";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
};

export function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a
      className="inline-flex items-center border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-900"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {children}
      <span aria-hidden="true" className="ml-2 text-zinc-500">
        -&gt;
      </span>
    </a>
  );
}
