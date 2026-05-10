import { Fragment } from "react";
import { MermaidDiagram } from "@/components/mermaid-diagram";

type MdxContentProps = {
  source: string;
};

type Block =
  | { type: "heading"; depth: 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "mermaid"; code: string };

export function MdxContent({ source }: MdxContentProps) {
  return (
    <>
      {parseBlocks(source).map((block, index) => (
        <Fragment key={index}>{renderBlock(block)}</Fragment>
      ))}
    </>
  );
}

function renderBlock(block: Block) {
  if (block.type === "heading") {
    if (block.depth === 2) {
      return <h2>{block.text}</h2>;
    }

    return <h3>{block.text}</h3>;
  }

  if (block.type === "list") {
    return (
      <ul>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  if (block.type === "mermaid") {
    return <MermaidDiagram chart={block.code} />;
  }

  return <p>{block.text}</p>;
}

function parseBlocks(source: string): Block[] {
  const blocks: Block[] = [];
  const lines = source.split("\n");
  let paragraph: string[] = [];
  let list: string[] = [];
  let mermaidLines: string[] | null = null;

  function flushParagraph() {
    if (paragraph.length > 0) {
      blocks.push({ type: "paragraph", text: paragraph.join(" ") });
      paragraph = [];
    }
  }

  function flushList() {
    if (list.length > 0) {
      blocks.push({ type: "list", items: list });
      list = [];
    }
  }

  for (const line of lines) {
    const trimmedLine = line.trim();

    if (mermaidLines !== null) {
      if (trimmedLine === "```") {
        blocks.push({ type: "mermaid", code: mermaidLines.join("\n") });
        mermaidLines = null;
      } else {
        mermaidLines.push(line);
      }
      continue;
    }

    if (trimmedLine === "```mermaid") {
      flushParagraph();
      flushList();
      mermaidLines = [];
      continue;
    }

    if (!trimmedLine || trimmedLine === "---") {
      flushParagraph();
      flushList();
      continue;
    }

    if (trimmedLine.startsWith("### ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "heading", depth: 3, text: trimmedLine.slice(4) });
      continue;
    }

    if (trimmedLine.startsWith("## ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "heading", depth: 2, text: trimmedLine.slice(3) });
      continue;
    }

    if (trimmedLine.startsWith("- ")) {
      flushParagraph();
      list.push(trimmedLine.slice(2));
      continue;
    }

    flushList();
    paragraph.push(trimmedLine);
  }

  flushParagraph();
  flushList();

  return blocks;
}
