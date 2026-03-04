# 🎨 ArenoX Light/Dark Mode Implementation Guide

Switch between **Light mode** (white — default) and **Dark mode** across the entire project. Text colors automatically complement each mode.

---

## ✅ Step 1: globals.css — DONE

You've already added the CSS variables. Your `globals.css` now has:

- `:root` = **Light mode** (white backgrounds, dark text)
- `html[data-bg-theme="dark"]` = **Dark mode** (dark backgrounds, light text)
- `body` uses `var(--bg-body)` and `var(--text-primary)` with smooth transitions

**No more changes needed in this file.**

---

## Step 2: Complete Your ThemeContext

### File: `src/utils/types/context/ThemeContext.tsx`

Copy this full code into your file:

```tsx
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// @ theme-types : only light and dark
type BgTheme = "light" | "dark";

// @ context-shape : what the context provides
interface ThemeContextType {
  theme: BgTheme;
  toggleTheme: () => void;
  isDark: boolean;
}

// @ create-context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// @ provider-component : wraps your entire app
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<BgTheme>("light");

  // @ on-mount : load saved theme from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("arenox-theme") as BgTheme | null;
    if (saved === "dark") {
      setTheme("dark");
      document.documentElement.setAttribute("data-bg-theme", "dark");
    }
  }, []);

  // @ toggle : switch between light and dark
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

// @ hook : use this in any component to access theme
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
```

### What This Does

- Stores `"light"` or `"dark"` in React state + localStorage.
- `toggleTheme()` — one function call switches everything.
- `isDark` — a boolean shortcut for conditionals.
- Sets `data-bg-theme="dark"` on `<html>`, which triggers the CSS variable overrides you already added.

---

## Step 3: Wrap Your App with ThemeProvider

### File: `src/app/layout.tsx` — MODIFY

```tsx
import type { Metadata } from "next";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/utils/types/context/ThemeContext"; // ← ADD THIS

export const metadata: Metadata = {
  title: "ArenoX Learning Plartform",
  description: "This is an online African Learning Plartform",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {" "}
          {/* ← ADD THIS WRAPPER */}
          {children}
          <Toaster
            position="top-right"
            reverseOrder={true}
            gutter={5}
            toastOptions={{
              duration: 2000,
              removeDelay: 1000,
              style: {
                background: "#fff",
                paddingLeft: "2px",
                paddingRight: "2px",
                borderRadius: "5px",
                fontSize: "12px",
              },
              success: { style: { color: "#28a745" } },
              error: { style: { color: "#dc3545" } },
            }}
          />
        </ThemeProvider>{" "}
        {/* ← CLOSE WRAPPER */}
      </body>
    </html>
  );
}
```

**Only 2 lines changed:** Import `ThemeProvider` and wrap `{children}` + `<Toaster>` inside it.

---

## Step 4: Update Admin Dashboard Shell

### File: `src/app/[dashboard]/admin/adminShell.tsx` — MODIFY

Replace the hardcoded `bg-gray-200`:

```tsx
// BEFORE (line 41):
<div className="flex justify-between gap-50 bg-gray-200">

// AFTER:
<div className="flex justify-between gap-50" style={{ backgroundColor: "var(--bg-main)" }}>
```

That's it for this file — just remove `bg-gray-200` and add the `style` prop.

---

## Step 5: Update Dashboard Components

### The Pattern (same for every component):

Replace hardcoded `bg-white` with `var(--bg-card)` and add text color variables:

```tsx
// BEFORE:
<div className="bg-white border border-gray-100 p-6 rounded-2xl">
  <h2 className="text-gray-800">Title</h2>
  <p className="text-gray-500">Description</p>
</div>

// AFTER:
<div
  className="border p-6 rounded-2xl"
  style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border-color)" }}
>
  <h2 style={{ color: "var(--text-primary)" }}>Title</h2>
  <p style={{ color: "var(--text-secondary)" }}>Description</p>
</div>
```

### Files to Update with This Pattern:

| File                               | What to Change                                                                                                                       |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `admin_dashboard_sidebar.tsx`      | lines 51, 87 → `bg-white` → `var(--bg-card)`                                                                                         |
| `admin_dashboard_header.tsx`       | line 68 → `bg-white` → `var(--bg-card)`                                                                                              |
| `admin_dashboard_stats.tsx`        | All 5 stat cards → `bg-white` → `var(--bg-card)`, `text-gray-800` → `var(--text-primary)`, `text-gray-500` → `var(--text-secondary)` |
| `admin_setting_component/page.tsx` | line 69 → `bg-white` → `var(--bg-card)`, text headings → `var(--text-primary)`                                                       |
| `admin_message_component/page.tsx` | Chat container backgrounds                                                                                                           |

#### Example: Sidebar (`admin_dashboard_sidebar.tsx`)

```tsx
// BEFORE:
<div className="bg-white shadow-sm rounded-br-lg pl-4.5 pr-1 py-3 ...">

// AFTER:
<div className="shadow-sm rounded-br-lg pl-4.5 pr-1 py-3 ..."
     style={{ backgroundColor: "var(--bg-card)" }}>
```

```tsx
// BEFORE:
<nav className="bg-white shadow-md rounded-tr-lg rounded-br-xl flex-1 mt-5 p-4 space-y-2">

// AFTER:
<nav className="shadow-md rounded-tr-lg rounded-br-xl flex-1 mt-5 p-4 space-y-2"
     style={{ backgroundColor: "var(--bg-card)" }}>
```

#### Example: Header (`admin_dashboard_header.tsx`)

```tsx
// BEFORE:
<div className="bg-white shadow-md py-4.5 rounded-br-lg rounded-bl-lg mb-5 w-full">

// AFTER:
<div className="shadow-md py-4.5 rounded-br-lg rounded-bl-lg mb-5 w-full"
     style={{ backgroundColor: "var(--bg-card)" }}>
```

---

## Step 6: Update Marketing/Static Pages

Same pattern — replace `bg-gray-50` sections and `bg-white` cards:

```tsx
// BEFORE: Section backgrounds
<div className="bg-gray-50 py-16 px-6 lg:px-20">

// AFTER:
<div className="py-16 px-6 lg:px-20" style={{ backgroundColor: "var(--bg-section)" }}>
```

### ⚠️ Do NOT Change These (Leave As-Is):

- **Hero sections** with `bg-gray-900` (intentionally dark)
- **Footer** with `bg-[#111827]` (intentionally dark)
- **Newsletter/Testimonial** gradient sections
- **Sign-in / Sign-up** pages (already have their own dark styling)
- **Decorative gradient blurs** (clipPath elements)

---

## Step 7: Add the Dark Mode Toggle

### Option A: Toggle Button (use anywhere)

Add this to your **Settings page** or **dashboard header**:

```tsx
import { useTheme } from "@/utils/types/context/ThemeContext";

// Inside your component:
const { isDark, toggleTheme } = useTheme();

// In the JSX (e.g., inside the Preferences section of Settings):
<div
  className="flex items-center justify-between group cursor-pointer"
  onClick={toggleTheme}
>
  <div>
    <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
      Dark Mode
    </p>
    <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
      Switch to {isDark ? "light" : "dark"} theme
    </p>
  </div>
  <div
    className={`w-11 h-6 rounded-full relative transition-colors duration-300 ${
      isDark ? "bg-blue-600" : "bg-gray-200"
    }`}
  >
    <div
      className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300 ${
        isDark ? "right-1" : "left-1"
      }`}
    ></div>
  </div>
</div>;
```

### Option B: Quick Toggle in Dashboard Header

In `admin_dashboard_header.tsx`, add a moon/sun icon:

```tsx
import { useTheme } from "@/utils/types/context/ThemeContext";

// Inside the component function:
const { isDark, toggleTheme } = useTheme();

// Add near the notification icons (around line 77):
<i
  className={`bi ${isDark ? "bi-sun" : "bi-moon"} p-2 bg-sky-50 rounded-sm text-gray-500 cursor-pointer hover:bg-sky-100`}
  onClick={toggleTheme}
  title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
></i>;
```

---

## Summary — All Files to Touch

| #   | Action       | File                               | Change                                     |
| --- | ------------ | ---------------------------------- | ------------------------------------------ |
| 1   | ✅ DONE      | `globals.css`                      | CSS variables for light/dark               |
| 2   | **COMPLETE** | `ThemeContext.tsx`                 | Full context code (Step 2)                 |
| 3   | **MODIFY**   | `layout.tsx`                       | Wrap with `<ThemeProvider>`                |
| 4   | **MODIFY**   | `adminShell.tsx`                   | `bg-gray-200` → `var(--bg-main)`           |
| 5   | **MODIFY**   | `admin_dashboard_sidebar.tsx`      | `bg-white` → `var(--bg-card)`              |
| 6   | **MODIFY**   | `admin_dashboard_header.tsx`       | `bg-white` → `var(--bg-card)` + add toggle |
| 7   | **MODIFY**   | `admin_dashboard_stats.tsx`        | Cards `bg-white` + text colors             |
| 8   | **MODIFY**   | `admin_setting_component/page.tsx` | `bg-white` + add toggle switch             |
| 9   | **MODIFY**   | Marketing components               | `bg-gray-50`/`bg-white` sections           |

### Quick Find-and-Replace Cheat Sheet

| Find                               | Replace With                                           |
| ---------------------------------- | ------------------------------------------------------ |
| Remove `bg-gray-200` on shells     | Add `style={{ backgroundColor: "var(--bg-main)" }}`    |
| Remove `bg-white` on cards/panels  | Add `style={{ backgroundColor: "var(--bg-card)" }}`    |
| Remove `bg-gray-50` on sections    | Add `style={{ backgroundColor: "var(--bg-section)" }}` |
| Remove `text-gray-800` on headings | Add `style={{ color: "var(--text-primary)" }}`         |
| Remove `text-gray-500` on subtext  | Add `style={{ color: "var(--text-secondary)" }}`       |
| Remove `border-gray-100` on cards  | Add `style={{ borderColor: "var(--border-color)" }}`   |

> **Tip:** Start with the dashboard (Steps 4-8) first. Once that works, move to marketing pages (Step 9). You'll see results immediately after Step 3!
