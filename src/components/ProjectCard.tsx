import type { Project } from "../data/projects";
import Card from "./ui/Card";

export default function ProjectCard({
  p,
  idx,
  total,
}: {
  p: Project;
  idx: number;
  total: number;
}) {
  return (
    <Card className="relative h-full p-0">
      {/* ✅ Make the whole card a column so children don't overflow */}
      <div className="flex h-full flex-col">
        {/* Preview strip */}
        <div className="h-24 bg-gradient-to-br from-zinc-100 to-white dark:from-white/5 dark:to-white/10" />

        {/* Project index */}
        <div
          className="absolute right-4 top-4 rounded-full border border-white/30 bg-white/40 px-3 py-1 text-xs font-medium text-zinc-800 backdrop-blur
                     dark:border-white/10 dark:bg-zinc-950/30 dark:text-zinc-100"
        >
          <span className="text-sky-700 dark:text-sky-300">
            {String(idx + 1).padStart(2, "0")}
          </span>{" "}
          <span className="text-zinc-500 dark:text-zinc-400">/</span>{" "}
          {String(total).padStart(2, "0")}
        </div>

        {/* ✅ Content takes remaining space */}
        <div className="flex flex-1 flex-col p-7 sm:p-8">
          {/* Header */}
          <div className="grid gap-x-4 gap-y-3 md:grid-cols-[1fr_auto] md:items-start">
            <h3 className="text-[1.35rem] font-semibold text-zinc-900 dark:text-white">
              {p.title}
            </h3>

            <span className="w-fit shrink-0 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 md:justify-self-end">
              {p.timeframe}
            </span>

            {/* Signals */}
            {p.signals?.length ? (
              <div className="flex flex-wrap gap-2 md:col-span-2">
                {p.signals.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700
                               dark:bg-sky-400/10 dark:text-sky-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            ) : null}

            {/* Subtitle */}
            <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-200/80 md:col-span-2">
              {p.subtitle}
            </p>
          </div>

          {/* Tech chips */}
          <div className="mt-5 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700
                           dark:border-white/10 dark:bg-white/5 dark:text-zinc-200"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Key Outcomes */}
          {p.keyOutcomes?.length ? (
            <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-white/10 dark:bg-white/5">
              <p className="text-sm font-medium text-zinc-900 dark:text-white">
                Key outcomes
              </p>
              <ul className="mt-3 list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200/80">
                {p.keyOutcomes.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {/* Highlights */}
          <ul className="mt-6 list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300/70">
            {p.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>

          {/* What I owned */}
          {p.owned ? (
            <div className="mt-6 border-l-2 border-sky-500/30 pl-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                What I owned
              </p>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-200/80">
                {p.owned}
              </p>
            </div>
          ) : null}

          {/* ✅ Actions pinned to bottom INSIDE card */}
          <div className="mt-auto pt-7">
            <div className="flex flex-wrap gap-3">
              <a
                href={p.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition
                           hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-sky-500/30
                           dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M12 .5C5.73.5.75 5.64.75 12c0 5.1 3.29 9.42 7.86 10.95.58.11.79-.26.79-.57v-2.1c-3.2.7-3.87-1.4-3.87-1.4-.53-1.38-1.3-1.75-1.3-1.75-1.06-.75.08-.74.08-.74 1.17.08 1.78 1.23 1.78 1.23 1.04 1.82 2.74 1.3 3.41.99.1-.77.41-1.3.74-1.6-2.55-.3-5.24-1.3-5.24-5.78 0-1.28.45-2.32 1.18-3.14-.12-.3-.51-1.52.11-3.17 0 0 .97-.32 3.18 1.2.92-.26 1.91-.39 2.89-.4.98.01 1.97.14 2.89.4 2.21-1.52 3.18-1.2 3.18-1.2.62 1.65.23 2.87.11 3.17.73.82 1.18 1.86 1.18 3.14 0 4.49-2.7 5.48-5.27 5.77.42.37.79 1.1.79 2.22v3.29c0 .31.21.68.8.56C19.96 21.42 23.25 17.1 23.25 12 23.25 5.64 18.27.5 12 .5Z"
                  />
                </svg>
                Code
              </a>

              {p.liveUrl ? (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition
                             hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-sky-500/30
                             dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                  Live Demo
                </a>
              ) : (
                <span
                  className="rounded-2xl border border-dashed border-zinc-300 bg-white px-4 py-2 text-sm text-zinc-600
                             dark:border-white/15 dark:bg-white/5 dark:text-zinc-200/70"
                >
                  Demo coming soon
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
