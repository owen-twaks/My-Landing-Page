"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme") as Theme | null;
    const sysDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const current = stored ?? (sysDark ? "dark" : "light");
    setTheme(current);
    document.documentElement.classList.toggle("light", current === "light");
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("light", next === "light");
  };

  // prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        className="rounded-full border border-white/10 p-2 text-white/40 transition-colors hover:border-white/40 hover:text-white"
        aria-label="Toggle theme"
        type="button"
      >
        <span className="h-4 w-4" />
      </button>
    );
  }

  return (
    <button
      onClick={toggle}
      className="rounded-full border border-white/10 p-2 text-white/40 transition-colors hover:border-white/40 hover:text-white"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      type="button"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
