"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import SunIcon from "./icons/SunIcon";
import MoonIcon from "./icons/MoonIcon";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <></>;

  if (resolvedTheme === "light") {
    return (
      <button onClick={() => setTheme("dark")}>
        <SunIcon />
      </button>
    );
  }

  return (
    <button onClick={() => setTheme("light")}>
      <MoonIcon />
    </button>
  );
}
