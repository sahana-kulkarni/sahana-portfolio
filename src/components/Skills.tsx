import Card from "./ui/Card";

const core = [
  "React",
  "TypeScript",
  "React Query",
  "Tailwind",
  "REST APIs",
  "Jest",
  "Git",
];

const groups: { title: string; items: string[] }[] = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "HTML", "CSS", "Tailwind"],
  },
  { title: "Backend", items: ["Express.js", "REST APIs", "Node.js"] },
  { title: "Testing", items: ["Jest"] },
  { title: "Tools", items: ["Git", "GitHub", "GitLab", "Vite"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
            Skills
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-200/80">
            What I use to build and ship frontend features.
          </p>
        </div>
      </div>

      {/* Core skills row (scannable) */}
      <div className="mt-5 flex flex-wrap gap-2">
        {core.map((it) => (
          <span
            key={it}
            className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700
                       dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-300"
          >
            {it}
          </span>
        ))}
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {groups.map((g) => (
          <Card key={g.title} className="p-6">
            <div className="mb-3 h-1 w-10 rounded-full bg-sky-500/60 dark:bg-sky-400/60" />
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {g.title}
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700 transition
                             hover:-translate-y-[1px] hover:bg-zinc-50
                             dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10"
                >
                  {it}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
