import { CaseStudyCard } from "@/components/case-study-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getCaseStudies } from "@/lib/case-studies";

export const metadata = {
  title: "Case Studies | Abhishek Sharma",
  description:
    "Architecture-focused engineering case studies by Abhishek Sharma.",
};

const innerNav = [
  { href: "/case-studies", label: "Case Studies", active: true },
  { href: "/engineering-notes", label: "Engineering Notes" },
  { href: "/labs", label: "Labs" },
];

export default function CaseStudiesPage() {
  const caseStudies = getCaseStudies();

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="mx-auto flex w-full max-w-5xl flex-col px-6 py-8 sm:px-8 lg:px-10">
        <SiteHeader links={innerNav} />

        <section className="py-12 sm:py-16">
          <p className="font-mono text-sm uppercase tracking-[0.24em] text-zinc-500">
            Case studies
          </p>
          <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-zinc-950 sm:text-4xl lg:text-5xl dark:text-zinc-50">
            Case studies written as architecture notes.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-700 sm:text-lg sm:leading-8 dark:text-zinc-300">
            Systems and migrations documented through constraints, tradeoffs,
            and outcomes.
          </p>
        </section>

        <section className="grid gap-4 border-t border-zinc-200 py-10 sm:grid-cols-2 dark:border-zinc-800">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard caseStudy={caseStudy} key={caseStudy.slug} />
          ))}
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
