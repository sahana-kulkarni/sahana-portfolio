import { useState } from "react";
import Card from "./ui/Card";

export default function Contact() {
  const email = "sahanaharikulkarni@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore
    }
  };

  return (
    <section id="contact" className="py-10">
      <Card className="p-8" interactive={false}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
              Contact
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-200/80">
              Open to frontend roles and collaborations. I respond quickly —
              feel free to reach out.
            </p>
          </div>

          {/* <div className="text-sm text-zinc-600 dark:text-zinc-300/80">
            Tempe, AZ • Remote/Hybrid
          </div> */}
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${email}`}
            className="
              rounded-2xl bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm
              transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-sky-500/40
              dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200
            "
          >
            Email me
          </a>

          <button
            onClick={copyEmail}
            className="
              rounded-2xl border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-900
              transition hover:bg-zinc-50
              dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10
            "
            type="button"
          >
            {copied ? "Copied ✓" : "Copy email"}
          </button>

          <a
            href="https://github.com/sahana-kulkarni"
            target="_blank"
            rel="noreferrer"
            className="
              rounded-2xl border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-900
              transition hover:bg-zinc-50
              dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10
            "
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sahana-kulkarni/"
            target="_blank"
            rel="noreferrer"
            className="
              rounded-2xl border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-900
              transition hover:bg-zinc-50
              dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10
            "
          >
            LinkedIn
          </a>

          <a
            href="/resume.pdf"
            className="
              rounded-2xl border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-900
              transition hover:bg-zinc-50
              dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10
            "
          >
            Resume (PDF)
          </a>
        </div>

        <div className="mt-6 border-t border-zinc-200 pt-4 text-xs text-zinc-500 dark:border-white/10 dark:text-zinc-300/70">
          Prefer email?{" "}
          <span className="font-medium text-zinc-700 dark:text-zinc-200">
            {email}
          </span>
        </div>
      </Card>
    </section>
  );
}
