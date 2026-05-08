import { notFound } from "next/navigation";
import { MdxContent } from "@/components/mdx-content";
import { Prose } from "@/components/prose";
import { getCaseStudyBySlug, getCaseStudySlugs } from "@/lib/case-studies";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {};
  }

  return {
    title: `${caseStudy.title} | Abhishek Sharma`,
    description: caseStudy.summary,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto flex w-full max-w-3xl flex-col px-6 py-8 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between border-b border-zinc-800 pb-5 text-sm">
          <a className="font-mono text-zinc-300" href="/">
            abhish3kk.in
          </a>
          <a
            className="text-zinc-400 transition hover:text-zinc-100"
            href="/work"
          >
            Work
          </a>
        </header>

        <article className="py-14">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
            {caseStudy.status} / {caseStudy.year}
          </div>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-zinc-50 sm:text-5xl">
            {caseStudy.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-300">
            {caseStudy.summary}
          </p>

          <dl className="mt-10 grid gap-6 border-y border-zinc-800 py-6 text-sm sm:grid-cols-3">
            <div>
              <dt className="font-mono uppercase tracking-[0.18em] text-zinc-500">
                Role
              </dt>
              <dd className="mt-2 text-zinc-300">{caseStudy.role}</dd>
            </div>
            <div>
              <dt className="font-mono uppercase tracking-[0.18em] text-zinc-500">
                Stack
              </dt>
              <dd className="mt-2 text-zinc-300">
                {caseStudy.stack.join(", ")}
              </dd>
            </div>
            <div>
              <dt className="font-mono uppercase tracking-[0.18em] text-zinc-500">
                Domains
              </dt>
              <dd className="mt-2 text-zinc-300">
                {caseStudy.domains.join(", ")}
              </dd>
            </div>
          </dl>

          <div className="mt-12">
            <Prose>
              <MdxContent source={caseStudy.content} />
            </Prose>
          </div>
        </article>
      </div>
    </main>
  );
}

export const dynamicParams = false;
