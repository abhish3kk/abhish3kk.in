const WORDS_PER_MINUTE = 200;

export function calculateReadingTime(content: string): number {
  const stripped = content
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`[^`\n]+`/g, "")
    .replace(/^\s*[-*+]\s/gm, "")
    .replace(/#{1,6}\s/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_~|]/g, "")
    .replace(/\n/g, " ");

  const wordCount = stripped.trim().split(/\s+/).filter(Boolean).length;

  return Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
}
