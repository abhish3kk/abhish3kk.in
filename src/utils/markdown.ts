import MarkdownIt from "markdown-it";
import anchor from "markdown-it-anchor";

const md = new MarkdownIt({
  html: true,
}).use(anchor);

md.renderer.rules.fence = (tokens, idx) => {
  const token = tokens[idx];
  const code = token.content.trim();

  if (token.info === "mermaid") {
    return `<MermaidDiagram code="${encodeURIComponent(code)}" />`;
  }

  return `<pre><code>${md.utils.escapeHtml(code)}</code></pre>`;
};

export default md;
