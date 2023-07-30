"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggle = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`${mode} transition-{all} duration-1000 ease-in`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
