// Define ThemeContext, ThemeProvider
// Pass mode and  setMode to children
// Function handleTheme change
// useTheme hook
"use client";

import React, { createContext, useContext, useState } from "react";

interface ThemeContextType {
  mode: string;
//   setMode: (mode: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState("light");

  return (
    <ThemeContext.Provider value={{ mode }}>
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
