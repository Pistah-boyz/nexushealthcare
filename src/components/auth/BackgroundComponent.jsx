import React from "react";
import { Box, Typography } from "@mui/material";

import { Container } from "../../ui";

import { COLORS } from "../../ui/Theme/colors";
import img2 from "../../images/slide3.jpg";

const styles = {
  backgroundSection: {
    position: "relative",
    overflow: "hidden",
    padding: "32rem 1rem 4rem",
    background: `url(${img2}) center center no-repeat`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    boxShadow: "0 2px 5px -2px #000",
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0, 0, 0, 0.5)",
      PointerEvent: "none",
      // filter: brightness(0.8),
      // transition: "opacity 0.5s ease",
    },
  },
};

const BackgroundComponent = () => {
  return (
    <Box sx={styles.backgroundSection}>
      <Container
        maxWidth={"md"}
        disableGutters={false}
        sx={{
          color: COLORS.white,
          // position: "absolute",
          // zIndex: 2,
          // top: "70%",
          // left: "50%",
          //transform: "translate(-50%, -50%)",
          backdropFilter: "brightness(1)",
          // marginRight: { xs: "1rem" },
          // marginLeft: { xs: "1rem" },
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          STAFFING SERVICES FOR YOUR HEALTHCARE BUSINESS.
        </Typography>
        <Typography variant="h6">
          Whether you're interested in temporary work, per diem or full-time
          employment, our team is committed in getting to know you on a personal
          and professional level. The Nexus Staffing Services streamlines the
          process completely for you.
        </Typography>
      </Container>
    </Box>
  );
};

export { BackgroundComponent };
