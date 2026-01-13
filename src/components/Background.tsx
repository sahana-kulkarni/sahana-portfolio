export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-950" />

      {/* Subtle top glow (keeps it premium, not patchy) */}
      <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(1200px_700px_at_50%_-250px,rgba(56,189,248,0.10),transparent_60%)]" />

      {/* Grid (more visible but still calm) */}
      <div
        className="
          absolute inset-0
          opacity-[0.28] dark:opacity-[0.16]
          [background-image:linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)]
          dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]
          [background-size:34px_34px]
        "
      />

      {/* Very subtle vignette so edges look intentional */}
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_50%,transparent_55%,rgba(0,0,0,0.06)_100%)] dark:bg-[radial-gradient(70%_60%_at_50%_50%,transparent_55%,rgba(0,0,0,0.35)_100%)]" />
    </div>
  );
}
