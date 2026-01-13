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
        // ✅ h-full allows cards to stretch evenly inside grid
        "group relative h-full rounded-3xl border shadow-sm",
        "border-zinc-200 bg-white",
        "dark:border-white/10 dark:bg-zinc-900",
        interactive
          ? "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md"
          : "",
        className,
      ].join(" ")}
    >
      {/* ✅ Subtle glow – cleaner + more controlled */}
      {interactive && (
        <div
          className={[
            "pointer-events-none absolute inset-0 rounded-3xl",
            "opacity-0 transition-opacity duration-300 group-hover:opacity-100",
            "bg-gradient-to-br from-sky-500/10 via-transparent to-transparent",
            "dark:from-sky-400/10",
          ].join(" ")}
        />
      )}

      {/* ✅ Content wrapper (prevents padding conflicts) */}
      <div className="relative h-full">{children}</div>
    </div>
  );
}
