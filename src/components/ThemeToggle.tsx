import { useEffect, useState } from "react";
import {
  applyTheme,
  getStoredTheme,
  storeTheme,
  type ThemeMode,
} from "../lib/theme";

const opts: { label: string; value: ThemeMode }[] = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
  { label: "System", value: "system" },
];

export default function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>("system");

  useEffect(() => {
    try {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMode(getStoredTheme());
    } catch {
      //ignore
    }
  }, []);

  const set = (m: ThemeMode) => {
    setMode(m);
    try {
      storeTheme(m);
    } catch {
      // ignore
    }
    applyTheme(m);
  };

  return (
    <div
      className="inline-flex items-center rounded-xl border border-zinc-200 bg-white p-1 text-sm
                    dark:border-white/10 dark:bg-white/5"
    >
      {opts.map((o) => {
        const active = mode === o.value;
        return (
          <button
            key={o.value}
            onClick={() => set(o.value)}
            className={`rounded-lg px-2.5 py-1.5 transition ${
              active
                ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950"
                : "text-zinc-700 hover:bg-zinc-50 dark:hover:bg-white/10 dark:text-zinc-200/80 dark:hover:bg-white/10"
            }`}
            aria-pressed={active}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
