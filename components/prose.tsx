import type { ReactNode } from "react";

type ProseProps = {
  children: ReactNode;
};

export function Prose({ children }: ProseProps) {
  return (
    <div className="prose prose-zinc max-w-none prose-headings:font-semibold prose-headings:tracking-normal prose-h2:mt-12 prose-h2:border-t prose-h2:border-zinc-200 prose-h2:pt-8 prose-p:leading-8 prose-p:text-zinc-700 prose-li:text-zinc-700 prose-li:leading-7 prose-strong:text-zinc-950 prose-pre:overflow-x-auto prose-pre:text-sm prose-code:text-sm prose-table:overflow-x-auto dark:prose-invert dark:prose-h2:border-zinc-800 dark:prose-p:text-zinc-300 dark:prose-li:text-zinc-300 dark:prose-strong:text-zinc-100">
      {children}
    </div>
  );
}
