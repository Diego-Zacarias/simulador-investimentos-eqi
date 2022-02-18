import React from "react";
import { render } from "@testing-library/react";
import ThemeProvider from "../styles/ThemeProvider";

const TestProvider = ({ children }: any): JSX.Element => (
      <ThemeProvider>{children}</ThemeProvider>
  );

export * from "@testing-library/react";

const customRender = (ui: any, options?: any) =>
  render(ui, { wrapper: TestProvider, ...options });

export { customRender as render };
