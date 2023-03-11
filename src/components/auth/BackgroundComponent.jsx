import React from "react";
import { Box, Typography } from "@mui/material";

import { Container } from "../../ui";

import { COLORS } from "../../ui/Theme/colors";
import img2 from "../../images/action-bg.jpg";

const styles = {
  backgroundSection: {
    position: "relative",
    overflow: "hidden",
    padding: " 32rem 0 4rem",
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
          PUT OUR EXTENSIVE NETWORK OF PARTNERS AND RESOURCES TO WORK FOR YOU!
        </Typography>
        <Typography>
          Whether you are interested in a temporary assignment, per diem work,
          or a permanent role, our team is dedicated to learning who you are on
          both a personal and professional level. Let Ellsworth Healthcare
          Staffing streamline the process for you.
        </Typography>
      </Container>
    </Box>
  );
};

export { BackgroundComponent };
