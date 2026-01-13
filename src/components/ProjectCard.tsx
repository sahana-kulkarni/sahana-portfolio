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
    <Card className="p-0 overflow-hidden">
      {/* Preview strip (subtle visual weight) */}
      <div className="h-24 bg-gradient-to-br from-zinc-100 to-white dark:from-white/5 dark:to-white/10" />
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

      <div className="p-6">
        {/* Title + timeframe */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
              {p.title}
            </h3>

            {/* Signals (case-study proof) */}
            {p.signals?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
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

            <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200/80">
              {p.subtitle}
            </p>
          </div>

          <span className="shrink-0 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
            {p.timeframe}
          </span>
        </div>

        {/* Tech chips */}
        <div className="mt-4 flex flex-wrap gap-2">
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

        {/* Highlights (impact-style) */}
        <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-200/80">
          {p.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        {/* What I owned (recruiter signal) */}
        {p.owned ? (
          <div className="mt-5 border-l-2 border-sky-500/40 pl-4">
            <p className="text-sm font-medium text-zinc-900 dark:text-white">
              What I owned
            </p>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-200/80">
              {p.owned}
            </p>
          </div>
        ) : null}

        {/* Actions */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={p.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition
                       hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-sky-500/30
                       dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
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
    </Card>
  );
}
