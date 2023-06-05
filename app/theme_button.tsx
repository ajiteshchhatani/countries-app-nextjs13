"use client";

import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./theme-provider";

export default function ThemeButton() {
  const [theme, setTheme] = useState<string>("light");

  const themeContextValue = useContext(ThemeContext);

  const handleThemeChange = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
    themeContextValue.changeTheme(theme);
  };

  return (
    <button className="flex items-center gap-2" onClick={handleThemeChange}>
      <img
        src="/moon-svgrepo-com.svg"
        alt="change theme icon"
        width={30}
        height={30}
      />
      Dark Mode
    </button>
  );
}
