export type ThemeMode = "light" | "dark" | "system";
const KEY = "theme-mode";

export function getStoredTheme(): ThemeMode {
  const v = localStorage.getItem(KEY);
  return v === "light" || v === "dark" || v === "system" ? v : "system";
}

export function storeTheme(mode: ThemeMode) {
  localStorage.setItem(KEY, mode);
}

export function getSystemTheme(): "light" | "dark" {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function applyTheme(mode: ThemeMode) {
  const actual = mode === "system" ? getSystemTheme() : mode;

  // This is the key:
  document.documentElement.classList.toggle("dark", actual === "dark");

  // Optional (helps form controls match theme)
  document.documentElement.style.colorScheme = actual;
}
