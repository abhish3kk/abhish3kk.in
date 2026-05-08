const target = "/work";

export default function LegacyProjectsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-10 text-zinc-100">
      <meta content={`0;url=${target}`} httpEquiv="refresh" />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(target)});`,
        }}
      />
      <p className="font-mono text-sm text-zinc-400">
        Redirecting to <a href={target}>/work</a>.
      </p>
    </main>
  );
}
