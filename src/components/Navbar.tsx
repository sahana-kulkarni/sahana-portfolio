import { useEffect, useMemo, useState } from "react";
import ThemeToggle from "./ThemeToggle";

type NavItem = { label: string; href: string };

export default function Navbar() {
  const items: NavItem[] = useMemo(
    () => [
      { label: "Projects", href: "#projects" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  const [active, setActive] = useState("#projects");

  useEffect(() => {
    const ids = items.map((i) => i.href.replace("#", ""));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActive(`#${visible.target.id}`);
        }
      },
      { threshold: [0.3, 0.5], rootMargin: "-20% 0px -70% 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  const go = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(href.replace("#", ""));
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-zinc-200/70 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-zinc-950/50">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-2.5">
          {/* Brand */}
          <a
            href="#top"
            onClick={go("#top")}
            className="flex items-center gap-3"
          >
            <div className="relative h-8 w-8 rounded-2xl border border-zinc-200 bg-gradient-to-b from-zinc-50 to-white shadow-sm">
              <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-sky-500/80" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                Sahana Hari Kulkarni
              </div>
              <div className="text-xs text-zinc-600 dark:text-zinc-400">
                Frontend • React • TypeScript
              </div>
            </div>
          </a>

          {/* Nav */}
          <nav className="hidden gap-1 md:flex">
            {items.map((it) => {
              const isActive = active === it.href;
              return (
                <a
                  key={it.href}
                  href={it.href}
                  onClick={go(it.href)}
                  className={`relative rounded-xl px-3 py-2 text-sm transition
                    ${
                      isActive
                        ? "bg-zinc-100 text-zinc-900 dark:bg-white/10 dark:text-white"
                        : "text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-white/10"
                    }`}
                >
                  {it.label}
                </a>
              );
            })}
          </nav>

          {/* Actions */}
          <div
            className="hidden items-center gap-1 rounded-2xl border border-zinc-200 bg-white/70 p-1
                          dark:border-white/10 dark:bg-white/5 md:flex"
          >
            <ThemeToggle />

            <a
              href="https://github.com/sahana-kulkarni"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50
                         dark:text-zinc-200 dark:hover:bg-white/10"
            >
              GitHub
            </a>

            <a
              href="/resume.pdf"
              className="rounded-xl bg-zinc-900 px-3 py-2 text-sm font-medium text-white hover:bg-zinc-800
                         dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
