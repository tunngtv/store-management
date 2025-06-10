import "react/jsx-runtime";
import { createContext, useContext } from "react";
const initialState = {
  theme: "system",
  toggleTheme: () => null
};
const ThemeContext = createContext(initialState);
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === void 0) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
export {
  useTheme as u
};
