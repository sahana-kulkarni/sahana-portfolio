import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./ui/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="py-10">
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
            className="text-sm font-medium text-zinc-900 underline-offset-4 hover:underline
                       dark:text-zinc-100"
          >
            View GitHub →
          </a>
        </div>
      </Reveal>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {projects.map((p, idx) => (
          <Reveal key={p.title} delayMs={idx * 70}>
            <div className={p.featured ? "sm:col-span-2" : ""}>
              <ProjectCard p={p} idx={idx} total={projects.length} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
