import React from "react";
import { Container as MuiContainer } from "@mui/material";

const Container = ({ children, maxWidth }) => {
  return <MuiContainer maxWidth={maxWidth}>{children}</MuiContainer>;
};

export { Container };
