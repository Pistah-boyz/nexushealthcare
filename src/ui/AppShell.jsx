import React from "react";

import { ThemeProvider } from "./ThemeProvider";
import { AppHeaderBar } from "./AppHeaderBar";

const AppShell = ({ children }) => {
  return (
    <ThemeProvider>
      <AppHeaderBar />
      {children}
    </ThemeProvider>
  );
};

export { AppShell };
