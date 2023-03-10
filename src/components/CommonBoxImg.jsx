import React from "react";

import { Box, Typography } from "@mui/material";

const CommonBoxImg = ({ img, txt1, txt2 }) => {
  const styles = {
    img_container: {
      backgroundImage: `url(${img})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
      height: 400,
      "&::before": {
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        opacity: 0.5,
        width: "100%",
        height: "100%",
        background: "rgb(1 255 210 / 50%)",
        transition: "opacity 0.5s ease",
      },
    },
    box_content: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };
  return (
    <Box sx={styles.img_container}>
      <Box sx={styles.box_content}>
        <Box>
          <Typography
            variant="h3"
            color="white"
            sx={{ textAlign: "center", fontWeight: 700, padding: "10px" }}
          >
            {txt1}
          </Typography>
          <Typography
            variant="h5"
            color="white"
            sx={{ textAlign: "center", fontWeight: 500 }}
          >
            {txt2}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CommonBoxImg;
