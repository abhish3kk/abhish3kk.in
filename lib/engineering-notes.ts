import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import {
  type EngineeringNote,
  engineeringNoteFrontmatterSchema,
} from "@/lib/content-schema";
import { parseFrontmatter } from "@/lib/frontmatter";
import { calculateReadingTime } from "@/lib/reading-time";

const engineeringNotesDirectory = path.join(process.cwd(), "content", "notes");

function getEngineeringNoteFromFile(filename: string): EngineeringNote {
  const slug = filename.replace(/\.mdx$/, "");
  const source = readFileSync(
    path.join(engineeringNotesDirectory, filename),
    "utf8",
  );
  const { data, content } = parseFrontmatter(source);
  const frontmatter = engineeringNoteFrontmatterSchema.parse(data);

  return {
    slug,
    content,
    readingTime: calculateReadingTime(content),
    ...frontmatter,
  };
}

export function getEngineeringNoteSlugs() {
  return readdirSync(engineeringNotesDirectory)
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => filename.replace(/\.mdx$/, ""));
}

export function getEngineeringNotes() {
  return readdirSync(engineeringNotesDirectory)
    .filter((filename) => filename.endsWith(".mdx"))
    .map(getEngineeringNoteFromFile)
    .sort((first, second) => second.year - first.year);
}

export function getEngineeringNoteBySlug(slug: string) {
  return getEngineeringNotes().find((note) => note.slug === slug);
}
