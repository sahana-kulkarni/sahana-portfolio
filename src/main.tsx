import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { applyTheme, getStoredTheme } from "./lib/theme";

try {
  applyTheme(getStoredTheme());
} catch {
  applyTheme("system");
}

// If user selected "system", update when OS theme changes
const mq = window.matchMedia("(prefers-color-scheme: dark)");
mq.addEventListener?.("change", () => {
  try {
    const mode = getStoredTheme();
    if (mode === "system") applyTheme("system");
  } catch {
    // ignore
  }
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
