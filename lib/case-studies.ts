import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import {
  type CaseStudy,
  caseStudyFrontmatterSchema,
} from "@/lib/content-schema";
import { parseFrontmatter } from "@/lib/frontmatter";
import { calculateReadingTime } from "@/lib/reading-time";

const caseStudiesDirectory = path.join(
  process.cwd(),
  "content",
  "case-studies",
);

function getCaseStudyFromFile(filename: string): CaseStudy {
  const slug = filename.replace(/\.mdx$/, "");
  const source = readFileSync(
    path.join(caseStudiesDirectory, filename),
    "utf8",
  );
  const { data, content } = parseFrontmatter(source);
  const frontmatter = caseStudyFrontmatterSchema.parse(data);

  return {
    slug,
    content,
    readingTime: calculateReadingTime(content),
    ...frontmatter,
  };
}

export function getCaseStudySlugs() {
  return readdirSync(caseStudiesDirectory)
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => filename.replace(/\.mdx$/, ""));
}

export function getCaseStudies() {
  return readdirSync(caseStudiesDirectory)
    .filter((filename) => filename.endsWith(".mdx"))
    .map(getCaseStudyFromFile)
    .sort((first, second) => second.year - first.year);
}

export function getCaseStudyBySlug(slug: string) {
  return getCaseStudies().find((caseStudy) => caseStudy.slug === slug);
}
