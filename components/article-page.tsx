import { MdxContent } from "@/components/mdx-content";
import { Prose } from "@/components/prose";
import type { CaseStudy, EngineeringNote } from "@/lib/content-schema";

type ArticlePageProps = {
  article: CaseStudy | EngineeringNote;
};

export function ArticlePage({ article }: ArticlePageProps) {
  return (
    <article className="py-10 sm:py-14">
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-500">
        <span>{article.status} </span>
        <span className="inline-block align-middle">·</span>
        <span>{article.year}</span>
        <span className="inline-block align-middle">·</span>
        <span>~{article.readingTime} min read</span>
      </div>
      <h1 className="mt-5 text-3xl font-semibold leading-tight text-zinc-950 sm:text-4xl lg:text-5xl dark:text-zinc-50">
        {article.title}
      </h1>
      <p className="mt-5 text-base leading-7 text-zinc-700 sm:text-lg sm:leading-8 dark:text-zinc-300">
        {article.summary}
      </p>

      <dl className="mt-10 grid gap-6 border-y border-zinc-200 py-6 text-sm sm:grid-cols-3 dark:border-zinc-800">
        <div>
          <dt className="font-mono uppercase tracking-[0.18em] text-zinc-500">
            Role
          </dt>
          <dd className="mt-2 text-zinc-700 dark:text-zinc-300">
            {article.role}
          </dd>
        </div>
        <div>
          <dt className="font-mono uppercase tracking-[0.18em] text-zinc-500">
            Stack
          </dt>
          <dd className="mt-2 text-zinc-700 dark:text-zinc-300">
            {article.stack.join(", ")}
          </dd>
        </div>
        <div>
          <dt className="font-mono uppercase tracking-[0.18em] text-zinc-500">
            Domains
          </dt>
          <dd className="mt-2 text-zinc-700 dark:text-zinc-300">
            {article.domains.join(", ")}
          </dd>
        </div>
      </dl>

      <div className="mt-12">
        <Prose>
          <MdxContent source={article.content} />
        </Prose>
      </div>
    </article>
  );
}
