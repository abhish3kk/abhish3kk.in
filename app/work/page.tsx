import { CaseStudyCard } from "@/components/case-study-card";
import { getCaseStudies } from "@/lib/case-studies";

export const metadata = {
  title: "Work | Abhishek Sharma",
  description:
    "Architecture-focused engineering case studies by Abhishek Sharma.",
};

export default function WorkPage() {
  const caseStudies = getCaseStudies();

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto flex w-full max-w-5xl flex-col px-6 py-8 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between border-b border-zinc-800 pb-5 text-sm">
          <a className="font-mono text-zinc-300" href="/">
            abhish3kk.in
          </a>
          <nav aria-label="Primary navigation" className="flex gap-5">
            <a className="text-zinc-100" href="/work">
              Work
            </a>
          </nav>
        </header>

        <section className="py-16 sm:py-20">
          <p className="font-mono text-sm uppercase tracking-[0.24em] text-zinc-500">
            Case studies
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-zinc-50 sm:text-5xl">
            Work written as architecture notes.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Systems, migrations, and product surfaces documented through
            constraints, boundaries, tradeoffs, and outcomes.
          </p>
        </section>

        <section className="grid gap-4 border-t border-zinc-800 py-10 sm:grid-cols-2">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard caseStudy={caseStudy} key={caseStudy.slug} />
          ))}
        </section>
      </div>
    </main>
  );
}
