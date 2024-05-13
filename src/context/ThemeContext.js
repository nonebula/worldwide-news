import { createContext } from "react";

export const ThemeContext = createContext();

const theme = {};
export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
