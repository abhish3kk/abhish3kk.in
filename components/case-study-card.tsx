import Link from "next/link";
import type { CaseStudy } from "@/lib/content-schema";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
};

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <article className="border border-zinc-800 bg-zinc-950 p-5 transition hover:border-zinc-700">
      <div className="flex flex-wrap gap-2 font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
        <span>{caseStudy.status}</span>
        <span>/</span>
        <span>{caseStudy.year}</span>
      </div>
      <h3 className="mt-4 text-lg font-medium text-zinc-100">
        <Link href={`/work/${caseStudy.slug}`}>{caseStudy.title}</Link>
      </h3>
      <p className="mt-3 text-sm leading-6 text-zinc-400">
        {caseStudy.summary}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {caseStudy.domains.map((domain) => (
          <span
            className="border border-zinc-800 px-2 py-1 font-mono text-xs text-zinc-500"
            key={domain}
          >
            {domain}
          </span>
        ))}
      </div>
    </article>
  );
}
