export type FrontmatterValue = string | number | boolean | string[];

export function parseFrontmatter(source: string): {
  data: Record<string, FrontmatterValue>;
  content: string;
} {
  const match = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/.exec(source);

  if (!match) {
    throw new Error("Content is missing frontmatter.");
  }

  const [, frontmatter, content] = match;
  const data: Record<string, FrontmatterValue> = {};
  const lines = frontmatter.split("\n");

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];

    if (!line.trim()) {
      continue;
    }

    const field = /^([A-Za-z][A-Za-z0-9_-]*):\s*(.*)$/.exec(line);

    if (!field) {
      throw new Error(`Invalid frontmatter line: ${line}`);
    }

    const [, key, rawValue] = field;

    if (rawValue === "") {
      const items: string[] = [];

      while (lines[index + 1]?.startsWith("  - ")) {
        index += 1;
        items.push(unquote(lines[index].slice(4).trim()));
      }

      data[key] = items;
      continue;
    }

    data[key] = parseScalar(rawValue);
  }

  return { data, content: content.trim() };
}

function parseScalar(value: string): FrontmatterValue {
  const trimmedValue = value.trim();

  if (trimmedValue === "true") {
    return true;
  }

  if (trimmedValue === "false") {
    return false;
  }

  if (/^\d+$/.test(trimmedValue)) {
    return Number(trimmedValue);
  }

  if (trimmedValue.startsWith("[") && trimmedValue.endsWith("]")) {
    return trimmedValue
      .slice(1, -1)
      .split(",")
      .map((item) => unquote(item.trim()))
      .filter(Boolean);
  }

  return unquote(trimmedValue);
}

function unquote(value: string): string {
  return value.replace(/^["']|["']$/g, "");
}
