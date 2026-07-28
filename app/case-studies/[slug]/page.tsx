import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/article-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getCaseStudyBySlug, getCaseStudySlugs } from "@/lib/case-studies";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const innerNav = [
  { href: "/case-studies", label: "Case Studies", active: true },
  { href: "/engineering-notes", label: "Engineering Notes" },
  { href: "/labs", label: "Labs" },
];

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
      <div className="mx-auto flex w-full max-w-5xl flex-col px-6 py-8 sm:px-8 lg:px-10">
        <SiteHeader links={innerNav} />

        <ArticlePage article={caseStudy} />

        <SiteFooter />
      </div>
    </main>
  );
}

export const dynamicParams = false;
