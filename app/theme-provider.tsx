"use client";

import { createContext, useState } from "react";

interface ThemeContextType {
  theme: string;
  changeTheme: (value: string) => void;
}

const defaultThemeValue: ThemeContextType = {
  theme: "light",
  changeTheme: (value: string) => {},
};

export const ThemeContext = createContext<ThemeContextType>(defaultThemeValue);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") as string
  );

  const handleChangeTheme = (value: string) => {
    setTheme((value) => value);
    localStorage.setItem("theme", value);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        changeTheme: (theme: string) => handleChangeTheme(theme),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
