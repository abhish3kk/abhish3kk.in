"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/components/theme-provider";

type MermaidDiagramProps = {
  chart: string;
};

export function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;
    let cancelled = false;

    import("mermaid").then(({ default: mermaid }) => {
      if (cancelled) return;
      mermaid.initialize({
        startOnLoad: false,
        theme: theme === "dark" ? "dark" : "neutral",
        flowchart: { useMaxWidth: false },
      });
      element.innerHTML = `<pre class="mermaid">${chart}</pre>`;
      mermaid
        .run({ nodes: element.querySelectorAll<HTMLElement>(".mermaid") })
        .then(() => {
          const svg = element.querySelector("svg");
          if (svg) {
            svg.removeAttribute("height");
            svg.style.height = "auto";
          }
        });
    });

    return () => {
      cancelled = true;
    };
  }, [chart, theme]);

  return (
    <div className="my-6 overflow-x-auto rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
      <div className="min-w-fit px-6 py-6">
        <div ref={containerRef} />
      </div>
    </div>
  );
}
