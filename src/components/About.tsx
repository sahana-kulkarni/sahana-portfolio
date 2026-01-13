import Card from "./ui/Card";

export default function About() {
  return (
    <section id="about" className="py-10">
      <Card className="p-8">
        <div className="grid gap-8 sm:grid-cols-[1fr_2fr]">
          {/* Left column */}
          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
              About
            </h2>

            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300/80">
              Frontend Developer
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                Workflow-driven UI
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                Server-state & data consistency
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                Accessibility-first components
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                Performance-aware UI
              </div>
            </div>
          </div>

          {/* Right column */}
          <div>
            <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-200/80">
              I’m a frontend developer building workflow-driven applications for
              accounting systems. I focus on clean UI architecture, predictable
              server-state handling, and accessible interfaces that hold up in
              real production environments.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200/80">
              My recent work includes designing review workflows, optimizing
              large datasets for smooth UX, and building reusable component
              systems that scale as features grow.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200/80">
              I’m currently strengthening my full-stack skills (Node + AWS)
              while continuing to ship frontend-focused portfolio projects.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Workflow UI",
                "React Query",
                "Accessibility (a11y)",
                "Reusable components",
                "Frontend performance",
                "API integration",
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

            {/* Human note */}
            <p
              className="mt-6 border-l-2 border-sky-500/40 pl-4 text-sm italic
              text-zinc-600 dark:text-zinc-300/70"
            >
              I enjoy turning messy, real-world workflows into clean,
              predictable interfaces — especially when performance or edge cases
              are involved.
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
}
