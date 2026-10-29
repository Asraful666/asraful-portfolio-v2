"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    let dark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    try {
      const saved = localStorage.getItem("portfolio-theme");

      if (saved === "dark" || saved === "light") {
        dark = saved === "dark";
      }
    } catch {}

    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light"
    );

    setIsDark(dark);
  }, []);

  function toggleTheme() {
    const dark =
      document.documentElement.getAttribute("data-theme") !== "dark";

    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light"
    );

    setIsDark(dark);

    try {
      localStorage.setItem(
        "portfolio-theme",
        dark ? "dark" : "light"
      );
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? "☀ Light" : "☾ Dark"}
    </button>
  );
}