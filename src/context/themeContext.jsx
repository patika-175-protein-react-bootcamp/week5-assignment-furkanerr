import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const handleModeChange = () => {
    if (theme === "light") {
      console.log("dark mode");
      setTheme("dark");
    } else {
      console.log("dark mode");
      setTheme("light");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, handleModeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};
const useTheme = () => useContext(ThemeContext);
export { useTheme, ThemeProvider };
