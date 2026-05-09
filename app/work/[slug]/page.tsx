import { notFound } from "next/navigation";
import { MdxContent } from "@/components/mdx-content";
import { Prose } from "@/components/prose";
import { SiteHeader } from "@/components/site-header";
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
    <main className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="mx-auto flex w-full max-w-3xl flex-col px-6 py-8 sm:px-8 lg:px-10">
        <SiteHeader
          links={[
            { href: "/case-studies", label: "Case Studies", active: true },
            { href: "/engineering-notes", label: "Engineering Notes" },
            { href: "/labs", label: "Labs" },
          ]}
        />

        <article className="py-10 sm:py-14">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
            {caseStudy.status} / {caseStudy.year}
          </div>
          <h1 className="mt-5 text-3xl font-semibold leading-tight text-zinc-950 sm:text-4xl lg:text-5xl dark:text-zinc-50">
            {caseStudy.title}
          </h1>
          <p className="mt-5 text-base leading-7 text-zinc-700 sm:text-lg sm:leading-8 dark:text-zinc-300">
            {caseStudy.summary}
          </p>

          <dl className="mt-10 grid gap-6 border-y border-zinc-200 py-6 text-sm sm:grid-cols-3 dark:border-zinc-800">
            <div>
              <dt className="font-mono uppercase tracking-[0.18em] text-zinc-500">
                Role
              </dt>
              <dd className="mt-2 text-zinc-700 dark:text-zinc-300">
                {caseStudy.role}
              </dd>
            </div>
            <div>
              <dt className="font-mono uppercase tracking-[0.18em] text-zinc-500">
                Stack
              </dt>
              <dd className="mt-2 text-zinc-700 dark:text-zinc-300">
                {caseStudy.stack.join(", ")}
              </dd>
            </div>
            <div>
              <dt className="font-mono uppercase tracking-[0.18em] text-zinc-500">
                Domains
              </dt>
              <dd className="mt-2 text-zinc-700 dark:text-zinc-300">
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
