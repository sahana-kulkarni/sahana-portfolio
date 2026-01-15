import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./ui/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="py-10 scroll-mt-20">
      <Reveal>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
              Projects
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-zinc-700 dark:text-zinc-200/80">
              Selected work focused on real workflows, clean UI architecture,
              and predictable data handling.
            </p>
          </div>

          <a
            href="https://github.com/sahana-kulkarni"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
          >
            View GitHub →
          </a>
        </div>
      </Reveal>

      <div className="mt-6 grid items-stretch gap-5 sm:grid-cols-2">
        {projects.map((p, idx) => (
          <Reveal key={p.title} delayMs={idx * 70}>
            <div className={(p.featured ? "sm:col-span-2 " : "") + "h-full"}>
              <ProjectCard p={p} idx={idx} total={projects.length} />
            </div>
          </Reveal>
        ))}
      </div>

      {/* Skills Snapshot (quick scan + ATS) */}
      {/* <Reveal delayMs={120}>
        <div className="mt-8 rounded-3xl border border-zinc-200 bg-zinc-50 p-6 dark:border-white/10 dark:bg-white/5">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
            Skills snapshot
          </h3>

          <div className="mt-4 grid gap-3 text-sm text-zinc-700 dark:text-zinc-200/80 sm:grid-cols-2">
            <div>
              <span className="font-medium text-zinc-900 dark:text-white">
                Frontend:
              </span>{" "}
              React, TypeScript, Tailwind CSS
            </div>

            <div>
              <span className="font-medium text-zinc-900 dark:text-white">
                State:
              </span>{" "}
              React Query, REST APIs
            </div>

            <div>
              <span className="font-medium text-zinc-900 dark:text-white">
                Performance:
              </span>{" "}
              memoization, virtualization, debouncing
            </div>

            <div>
              <span className="font-medium text-zinc-900 dark:text-white">
                Testing:
              </span>{" "}
              Jest
            </div>

            <div>
              <span className="font-medium text-zinc-900 dark:text-white">
                Accessibility:
              </span>{" "}
              ARIA, keyboard navigation
            </div>
          </div>
        </div>
      </Reveal> */}
    </section>
  );
}
