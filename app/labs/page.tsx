import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "Labs | Abhishek Sharma",
  description:
    "Small experiments and proofs for future case-study components and architecture documentation.",
};

const innerNav = [
  { href: "/case-studies", label: "Case Studies" },
  { href: "/engineering-notes", label: "Engineering Notes" },
  { href: "/labs", label: "Labs", active: true },
];

export default function LabsPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="mx-auto flex w-full max-w-5xl flex-col px-6 py-8 sm:px-8 lg:px-10">
        <SiteHeader links={innerNav} />

        <section className="py-16 sm:py-20">
          <p className="font-mono text-sm uppercase tracking-[0.24em] text-zinc-500">
            Labs
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-zinc-950 sm:text-5xl dark:text-zinc-50">
            Experiments in progress.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
            Small proofs, rendering experiments, and architectural spikes that
            may become full case-study components or published notes.
          </p>
        </section>

        <section className="border-t border-zinc-200 py-14 dark:border-zinc-800">
          <p className="font-mono text-sm text-zinc-500">
            Experiments are being assembled. Check back soon.
          </p>
        </section>

        <footer className="mt-20 border-t border-zinc-200 py-8 text-sm text-zinc-500 dark:border-zinc-800">
          <p>
            Abhishek Sharma. Built as a static, MDX-ready engineering platform.
          </p>
        </footer>
      </div>
    </main>
  );
}
