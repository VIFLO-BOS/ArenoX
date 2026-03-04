"use client";

import { type } from "os";
import React, { createContext, useContext, useState, useEffect } from "react";

// @ theme: define the available background themes
type BgTheme = "light" | "dark";

//  @ context-shape : what the context provides
interface ThemeContextType {
  theme: BgTheme;
  toggleTheme: () => void;
  isDark: boolean;
}

// @ creating context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// @ provider-component : wraps your entire app
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<BgTheme>("light");

  // load saved theme from localstorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("arenox-theme") as BgTheme | null;
    if (savedTheme == "dark") {
      setTheme("dark");
      document.documentElement.setAttribute("data-bg-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("arenox-theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.setAttribute("data-bg-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-bg-theme");
    }
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, isDark: theme === "dark" }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
