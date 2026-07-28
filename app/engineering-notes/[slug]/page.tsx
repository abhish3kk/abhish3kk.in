import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/article-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  getEngineeringNoteBySlug,
  getEngineeringNoteSlugs,
} from "@/lib/engineering-notes";

type EngineeringNotePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const innerNav = [
  { href: "/case-studies", label: "Case Studies" },
  { href: "/engineering-notes", label: "Engineering Notes", active: true },
  { href: "/labs", label: "Labs" },
];

export function generateStaticParams() {
  return getEngineeringNoteSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: EngineeringNotePageProps) {
  const { slug } = await params;
  const note = getEngineeringNoteBySlug(slug);

  if (!note) {
    return {};
  }

  return {
    title: `${note.title} | Abhishek Sharma`,
    description: note.summary,
  };
}

export default async function EngineeringNotePage({
  params,
}: EngineeringNotePageProps) {
  const { slug } = await params;
  const note = getEngineeringNoteBySlug(slug);

  if (!note) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="mx-auto flex w-full max-w-5xl flex-col px-6 py-8 sm:px-8 lg:px-10">
        <SiteHeader links={innerNav} />

        <ArticlePage article={note} />

        <SiteFooter />
      </div>
    </main>
  );
}

export const dynamicParams = false;
