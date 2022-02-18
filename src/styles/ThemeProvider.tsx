import React from "react";
import { ThemeProvider as StyledProvider } from "styled-components";
import { DefaultTheme } from "styled-components";

const Theme: DefaultTheme = {
  colors: {
    primary: "#ED8E53",
    secondary: "#000000",
    typography: "#1F1F1F",
    disabled: "#969696",
    error: "#EF413C",
    success: "#469E2A",
    bgColor: "#EFEFEF",
  },
};

const ThemeProvider = ({ children }: any) => {
  return <StyledProvider theme={Theme}>{children}</StyledProvider>;
};

export default ThemeProvider;
