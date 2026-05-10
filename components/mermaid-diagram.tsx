"use client";

import { useEffect, useRef } from "react";

type MermaidDiagramProps = {
  chart: string;
};

export function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let cancelled = false;

    import("mermaid").then(({ default: mermaid }) => {
      if (cancelled) return;
      mermaid.initialize({ startOnLoad: false });
      element.innerHTML = `<pre class="mermaid">${chart}</pre>`;
      mermaid.run({ nodes: element.querySelectorAll<HTMLElement>(".mermaid") });
    });

    return () => {
      cancelled = true;
    };
  }, [chart]);

  return <div ref={ref} />;
}
