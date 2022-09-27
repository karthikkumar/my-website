import { createContext, useContext } from "react";
import { useDarkMode } from "../common/hooks";
import { DarkModeByDefault } from "../common/constants";
import { getColors } from "../common/colors";

const ThemeContext = createContext({});
const useThemeContext = () => useContext(ThemeContext);

function ThemeProvider({ children }) {
  const [darkMode, toggleDarkMode] = useDarkMode(DarkModeByDefault);
  const colors = getColors(darkMode);
  const value = { darkMode, toggleDarkMode, colors };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export { ThemeProvider, useThemeContext };
