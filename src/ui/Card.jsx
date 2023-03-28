import * as React from "react";
import {
  Card as MuiCard,
  CardContent,
  CardHeader,
  CardActions,
  Button,
} from "@mui/material";

const Card = ({
  children,
  title,
  actionButton,
  sx,
  sxContent,
  sxActions,
  cardClick,
}) => {
  return (
    <MuiCard sx={sx}>
      {title && (
        <CardHeader
          sx={{ textAlign: "center", color: "primary" }}
          title={title}
        />
      )}
      <CardContent sx={sxContent}>{children}</CardContent>
      <CardActions sx={{ alignItems: "flex-end", justifyContent: "center" }}>
        <Button
          size="small"
          variant="outlined"
          sx={sxActions}
          onClick={cardClick}
        >
          {actionButton}
        </Button>
      </CardActions>
    </MuiCard>
  );
};

export { Card };
