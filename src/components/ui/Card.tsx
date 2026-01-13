import React from "react";

type CardProps = React.PropsWithChildren<{
  className?: string;
  interactive?: boolean;
}>;

export default function Card({
  className = "",
  interactive = true,
  children,
}: CardProps) {
  return (
    <div
      className={[
        "group relative rounded-3xl border p-6 shadow-sm",
        "border-zinc-200 bg-white",
        "dark:border-white/10 dark:bg-zinc-900",
        interactive
          ? "transition duration-300 hover:-translate-y-1 hover:shadow-md"
          : "",
        className,
      ].join(" ")}
    >
      {/* Accent glow on hover (subtle) */}
      {interactive && (
        <div
          className={[
            "pointer-events-none absolute inset-0 -z-10 rounded-3xl",
            "opacity-0 blur-2xl transition duration-300 group-hover:opacity-100",
            "bg-sky-500/10 dark:bg-sky-400/10",
          ].join(" ")}
        />
      )}

      {children}
    </div>
  );
}
