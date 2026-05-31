export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-zinc-200 py-10 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
      <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
        {/* Left */}
        <div className="flex flex-col gap-3">
          <p className="font-medium text-zinc-700 dark:text-zinc-300">
            Abhishek Sharma
          </p>
          <p className="max-w-xs leading-6">
            Architecture, modernization, and reliability notes from real systems
            work.
          </p>
          <p>Pune, India (UTC+5:30)</p>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-2">
          <a
            className="hover:text-zinc-700 dark:hover:text-zinc-300"
            href="mailto:hello@abhish3kk.in"
          >
            hello@abhish3kk.in
          </a>
          <a
            className="hover:text-zinc-700 dark:hover:text-zinc-300"
            href="https://github.com/abhish3kk"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="hover:text-zinc-700 dark:hover:text-zinc-300"
            href="https://www.linkedin.com/in/abhish3kk/"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
