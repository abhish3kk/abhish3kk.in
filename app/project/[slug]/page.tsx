import { getCaseStudySlugs } from "@/lib/case-studies";

type LegacyProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export default async function LegacyProjectPage({
  params,
}: LegacyProjectPageProps) {
  const { slug } = await params;
  const target = `/work/${slug}`;

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-10 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-100">
      <meta content={`0;url=${target}`} httpEquiv="refresh" />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(target)});`,
        }}
      />
      <p className="font-mono text-sm text-zinc-600 dark:text-zinc-400">
        Redirecting to <a href={target}>{target}</a>.
      </p>
    </main>
  );
}

export const dynamicParams = false;
