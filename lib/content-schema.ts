import { z } from "zod";

export const caseStudyFrontmatterSchema = z.object({
  title: z.string().min(1),
  summary: z.string().min(1),
  status: z.string().min(1),
  year: z.number().int().min(2000),
  role: z.string().min(1),
  stack: z.array(z.string().min(1)).min(1),
  domains: z.array(z.string().min(1)).min(1),
  featured: z.boolean(),
});

export type CaseStudyFrontmatter = z.infer<typeof caseStudyFrontmatterSchema>;

export type CaseStudy = CaseStudyFrontmatter & {
  slug: string;
  content: string;
  readingTime: number;
};
