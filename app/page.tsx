import { ExternalLink } from "@/components/external-link";
import { FeatureCard } from "@/components/feature-card";
import { Section } from "@/components/section";
import { SiteHeader } from "@/components/site-header";
import { getCaseStudies } from "@/lib/case-studies";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

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
      "A practical bias for static generation, progressive enhancement, and fewer moving parts in delivery infrastructure.",
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
    <main className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="mx-auto flex w-full max-w-5xl flex-col px-6 py-8 sm:px-8 lg:px-10">
        <SiteHeader
          links={[
            { href: "#case-studies", label: "Case Studies" },
            { href: "#engineering-notes", label: "Engineering Notes" },
            { href: "#labs", label: "Labs" },
          ]}
        />

        <section className="grid gap-8 py-14 sm:py-18 lg:grid-cols-[1fr_280px] lg:gap-16 lg:py-24">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.24em] text-zinc-500">
              Architecture / Modernization / Reliability
            </p>
            <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-zinc-950 sm:text-4xl lg:text-5xl dark:text-zinc-50">
              Notes from working on systems that needed careful migration,
              better reliability, or cleaner long-term footing.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-700 sm:text-lg sm:leading-8 dark:text-zinc-300">
              I work on migrations, platform infrastructure, and delivery
              systems — mostly focused on keeping things reliable and
              maintainable over time.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 sm:gap-4">
              <ExternalLink
                href="https://github.com/abhish3kk"
                icon={<SiGithub />}
              >
                GitHub
              </ExternalLink>
              <ExternalLink
                href="https://www.linkedin.com/in/abhish3kk/"
                icon={<FaLinkedin />}
              >
                LinkedIn
              </ExternalLink>
            </div>
          </div>

          <aside className="border-t border-zinc-200 pt-6 text-sm leading-7 text-zinc-600 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6 dark:border-zinc-800 dark:text-zinc-400">
            <p className="font-mono text-zinc-500">Current focus</p>
            <p className="mt-3">
              Building a simple, stable home for case studies, architecture
              notes, and small technical experiments.
            </p>
          </aside>
        </section>

        <Section
          id="case-studies"
          title="Featured Case Studies"
          description="Writeups covering constraints, tradeoffs, and outcomes from real systems work."
          viewAllHref="/case-studies"
          viewAllLabel="Explore all case studies"
        >
          {caseStudies.map((caseStudy) => (
            <FeatureCard
              description={caseStudy.summary}
              eyebrow={`${caseStudy.status} / ${caseStudy.year}`}
              href={`/case-studies/${caseStudy.slug}`}
              key={caseStudy.slug}
              title={caseStudy.title}
            />
          ))}
        </Section>

        <Section
          id="engineering-notes"
          title="Engineering Notes"
          description="Short technical essays on platform decisions, maintainability, and operational habits."
          viewAllHref="/engineering-notes"
          viewAllLabel="View all notes"
        >
          {notes.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </Section>

        <Section
          id="labs"
          title="Labs"
          description="Small experiments and proofs for future case-study components and architecture documentation."
          viewAllHref="/labs"
          viewAllLabel="View all experiments"
        >
          {labs.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </Section>

        <footer className="mt-20 border-t border-zinc-200 py-8 text-sm text-zinc-500 dark:border-zinc-800">
          <p>Abhishek Sharma. Engineering notes from real systems work.</p>
        </footer>
      </div>
    </main>
  );
}
