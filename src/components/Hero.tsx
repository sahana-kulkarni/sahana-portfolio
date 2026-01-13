export default function Hero() {
  return (
    <section id="top" className="py-14">
      <div className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
        {/* Pills */}
        <div className="flex flex-wrap gap-2">
          {[
            "Frontend Engineer",
            "React • TypeScript • a11y",
            "Open to roles",
          ].map((t) => (
            <span
              key={t}
              className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-700
                           dark:border-white/10 dark:bg-white/5 dark:text-zinc-200"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Headline (value in 5 seconds) */}
        <h1 className="mt-6 max-w-[26ch] text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white">
          I build scalable, high-performance React &amp; TypeScript
          applications.
        </h1>

        {/* Value sentence */}
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-200/80">
          Focused on real-world workflows, performance optimization, and
          accessible UI systems.
        </p>

        {/* Currently working on (one line) */}
        <p className="mt-3 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300/70">
          Currently improving frontend performance patterns and interview-ready
          React system design.
        </p>

        {/* Availability banner */}
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
          Open to Frontend / Full-stack roles • USA • Remote / Hybrid
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-2xl bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white
                       transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            View Projects
          </a>

          <a
            href="https://github.com/sahana-kulkarni"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-900
                       transition hover:bg-zinc-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            GitHub
          </a>

          <a
            href="#contact"
            className="rounded-2xl border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-900
                       transition hover:bg-zinc-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
