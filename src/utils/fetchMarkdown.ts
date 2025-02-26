import matter from "gray-matter";

export interface MarkdownMetadata {
  title: string;
  description: string;
  tags: string[];
  content: string;
}

export async function fetchMarkdown(
  filePath: string,
): Promise<MarkdownMetadata> {
  const response = await fetch(filePath);
  const text = await response.text();
  const { data, content } = matter(text);

  return {
    title: data.title || "Untitled",
    description: data.description || "",
    tags: data.tags || [],
    content,
  };
}
