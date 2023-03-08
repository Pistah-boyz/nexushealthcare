import * as React from "react";
import { Card as MuiCard, CardContent, CardHeader } from "@mui/material";

const Card = ({ children, title }) => {
  return (
    <MuiCard sx={{ position: "relative" }}>
      <CardHeader
        sx={{ textAlign: "center", color: "primary" }}
        title={title}
      />
      <CardContent sx={{ flex: "1 0 auto" }}>{children}</CardContent>
    </MuiCard>
  );
};

export { Card };
