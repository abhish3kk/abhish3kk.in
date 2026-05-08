import Link from "next/link";

type FeatureCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  href?: string;
};

export function FeatureCard({
  eyebrow,
  title,
  description,
  href,
}: FeatureCardProps) {
  const titleContent = href ? <Link href={href}>{title}</Link> : title;

  return (
    <article className="border border-zinc-200 bg-white p-5 hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
        {eyebrow}
      </p>
      <h3 className="mt-4 text-lg font-medium text-zinc-950 dark:text-zinc-100">
        {titleContent}
      </h3>
      <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </article>
  );
}
