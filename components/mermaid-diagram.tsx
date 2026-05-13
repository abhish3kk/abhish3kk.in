"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/components/theme-provider";

type MermaidDiagramProps = {
  chart: string;
};

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 3;

export function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, scrollLeft: 0, scrollTop: 0 });

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
            svg.removeAttribute("width");
            svg.style.width = "100%";
            svg.style.height = "auto";
            svg.style.display = "block";
          }
        });
    });

    return () => {
      cancelled = true;
    };
  }, [chart, theme]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
      scrollLeft: scrollRef.current?.scrollLeft ?? 0,
      scrollTop: scrollRef.current?.scrollTop ?? 0,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    scrollRef.current.scrollLeft = dragStart.current.scrollLeft - (e.clientX - dragStart.current.x);
    scrollRef.current.scrollTop = dragStart.current.scrollTop - (e.clientY - dragStart.current.y);
  };

  const handleMouseUp = () => setIsDragging(false);

  const zoomIn = () => setZoom((z) => Math.min(z + 0.25, MAX_ZOOM));
  const zoomOut = () => setZoom((z) => Math.max(z - 0.25, MIN_ZOOM));
  const reset = () => setZoom(1);

  return (
    <div className="relative my-6 rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className={`overflow-auto p-6 select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
      >
        <div
          style={{
            width: `${zoom * 100}%`,
            transition: isDragging ? "none" : "width 0.15s ease",
          }}
        >
          <div ref={containerRef} />
        </div>
      </div>

      <div className="absolute bottom-3 right-3 flex overflow-hidden rounded border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
        <button
          onClick={zoomIn}
          title="Zoom in"
          className="px-2.5 py-1.5 text-sm leading-none text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-100"
        >
          +
        </button>
        <div className="border-l border-zinc-200 dark:border-zinc-700" />
        <button
          onClick={reset}
          title="Reset zoom"
          className="px-2.5 py-1.5 text-xs leading-none text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-100"
        >
          ⟲
        </button>
        <div className="border-l border-zinc-200 dark:border-zinc-700" />
        <button
          onClick={zoomOut}
          title="Zoom out"
          className="px-2.5 py-1.5 text-sm leading-none text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-100"
        >
          −
        </button>
      </div>
    </div>
  );
}
