"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "./ThemeProvider";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex items-center justify-center rounded-full border border-brand-accent/60 bg-brand-primary/20 px-3 py-2 text-sm font-semibold text-white shadow-md backdrop-blur-md transition-colors hover:bg-brand-accent/80 hover:text-slate-950 dark:border-brand-accent/80 dark:bg-brand-deep/60 dark:hover:bg-brand-accent"
    >
      <FontAwesomeIcon
        icon={isDark ? faSun : faMoon}
        className="text-[14px] sm:text-[16px]"
      />
      <span className="ml-2 hidden text-xs uppercase tracking-wide sm:inline">
        {isDark ? "Light" : "Dark"}
      </span>
    </button>
  );
};

export default ThemeToggleButton;

