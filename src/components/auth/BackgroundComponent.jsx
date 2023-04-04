import React from "react";
import { Box, Typography } from "@mui/material";

import { Container } from "../../ui";

import { COLORS } from "../../ui/Theme/colors";
import img2 from "../../images/action-bg1.jpg";

const styles = {
  backgroundSection: {
    position: "relative",
    overflow: "hidden",
    padding: "32rem 1rem 4rem",
    background: `url(${img2}) center center no-repeat`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    boxShadow: "0 2px 5px -2px #000",
  },
};

const BackgroundComponent = () => {
  return (
    <Box sx={styles.backgroundSection}>
      <Container
        maxWidth={"md"}
        disableGutters={false}
        sx={{ color: COLORS.white }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          STAFFING SERVICES FOR YOUR HEALTHCARE BUSINESS.
        </Typography>
        <Typography>
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
