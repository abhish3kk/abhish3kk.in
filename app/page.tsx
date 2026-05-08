import { ExternalLink } from "@/components/external-link";
import { FeatureCard } from "@/components/feature-card";
import { Section } from "@/components/section";
import { getCaseStudies } from "@/lib/case-studies";

const notes = [
  {
    eyebrow: "Field note",
    title: "Simple Systems Age Better",
    description:
      "How small interfaces, boring deployment paths, and explicit content models reduce maintenance pressure over time.",
  },
  {
    eyebrow: "Frontend platform",
    title: "Static First, Dynamic When Proven",
    description:
      "A practical bias for static generation, progressive enhancement, and fewer moving parts in portfolio infrastructure.",
  },
];

const labs = [
  {
    eyebrow: "Proof",
    title: "Architecture Diagram Rendering",
    description:
      "A lightweight path for embedding diagrams in long-form engineering case studies without turning the site into an app.",
  },
  {
    eyebrow: "Experiment",
    title: "MDX Content Contracts",
    description:
      "Typed frontmatter and portable components for publishing systems notes with predictable structure.",
  },
];

export default function Home() {
  const caseStudies = getCaseStudies().filter(
    (caseStudy) => caseStudy.featured,
  );

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto flex w-full max-w-5xl flex-col px-6 py-8 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between border-b border-zinc-800 pb-5 text-sm">
          <a className="font-mono text-zinc-300" href="/">
            abhish3kk.in
          </a>
          <nav aria-label="Primary navigation" className="flex gap-5">
            <a
              className="text-zinc-400 transition hover:text-zinc-100"
              href="#work"
            >
              Work
            </a>
            <a
              className="text-zinc-400 transition hover:text-zinc-100"
              href="#notes"
            >
              Notes
            </a>
            <a
              className="text-zinc-400 transition hover:text-zinc-100"
              href="#labs"
            >
              Labs
            </a>
          </nav>
        </header>

        <section className="grid gap-10 py-20 sm:py-24 lg:grid-cols-[1fr_280px] lg:gap-16">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.24em] text-zinc-500">
              Architecture / Modernization / Reliability
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-zinc-50 sm:text-5xl">
              Engineering portfolio for systems that need to be understood,
              modernized, and kept healthy.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              I work across frontend platforms, cloud delivery, and legacy
              modernization with a bias for clear boundaries, maintainable
              systems, and operationally quiet software.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ExternalLink href="https://github.com/abhish3kk">
                GitHub
              </ExternalLink>
              <ExternalLink href="https://www.linkedin.com/in/abhish3kk/">
                LinkedIn
              </ExternalLink>
            </div>
          </div>

          <aside className="border-l border-zinc-800 pl-6 text-sm leading-7 text-zinc-400">
            <p className="font-mono text-zinc-500">Current focus</p>
            <p className="mt-3">
              Building a quiet, durable home for engineering case studies,
              architecture notes, modernization reports, and small technical
              proofs.
            </p>
          </aside>
        </section>

        <Section
          id="work"
          title="Featured Case Studies"
          description="Architecture-focused writeups that explain constraints, tradeoffs, systems boundaries, and outcomes."
        >
          {caseStudies.map((caseStudy) => (
            <FeatureCard
              description={caseStudy.summary}
              eyebrow={`${caseStudy.status} / ${caseStudy.year}`}
              href={`/work/${caseStudy.slug}`}
              key={caseStudy.slug}
              title={caseStudy.title}
            />
          ))}
        </Section>

        <Section
          id="notes"
          title="Engineering Notes"
          description="Short technical essays on platform decisions, maintainability, and operational habits."
        >
          {notes.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </Section>

        <Section
          id="labs"
          title="Labs"
          description="Small experiments and proofs for future case-study components and architecture documentation."
        >
          {labs.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </Section>

        <footer className="mt-20 border-t border-zinc-800 py-8 text-sm text-zinc-500">
          <p>
            Abhishek Sharma. Built as a static, MDX-ready engineering platform.
          </p>
        </footer>
      </div>
    </main>
  );
}
