import * as React from "react";
import {
  Card as MuiCard,
  CardContent,
  CardHeader,
  CardActions,
  Button,
} from "@mui/material";

const Card = ({ children, title, actionButton, sx, sxContent, sxActions }) => {
  return (
    <MuiCard sx={sx}>
      {title && (
        <CardHeader
          sx={{ textAlign: "center", color: "primary" }}
          title={title}
        />
      )}
      <CardContent sx={sxContent}>{children}</CardContent>
      <CardActions sx={{ alignItems: "center", justifyContent: "center" }}>
        <Button size="small" variant="outlined" sx={sxActions}>
          {actionButton}
        </Button>
      </CardActions>
    </MuiCard>
  );
};

export { Card };
