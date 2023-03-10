import React from "react";
import { Container as MuiContainer } from "@mui/material";

const Container = ({ children, maxWidth, disableGutters, sx }) => {
  return (
    <MuiContainer
      maxWidth={maxWidth}
      disableGutters={disableGutters}
      sx={{ ...sx, padding: 0, overflow: "hidden" }}
    >
      {children}
    </MuiContainer>
  );
};

export { Container };
