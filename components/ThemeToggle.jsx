"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

const ThemeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <button onClick={toggle}>
      {mode === "light" ? <BiSolidMoon /> : <BiSolidSun />}
    </button>
  );
};

export default ThemeToggle;
