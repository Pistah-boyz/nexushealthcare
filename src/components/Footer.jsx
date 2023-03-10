import React from "react";

import { Box, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

import img2 from "../images/action-bg.jpg";

const useStyles = makeStyles({
  imgtranscolor: {
    position: "relative",
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
  section_pcustom: {
    padding: "0.5rem",
    border: "1px solid #5555",
    borderRadius: "2px",
    padding: "15px",
    borderLeft: "7px solid #1e9814",
    backgroundColor: "#424b43",
    color: "#fff",
    fontWeight: "600",
    fontSize: "20px !important",
  },
  section2_h3: {
    textAlign: "left",
    fontWeight: 900,
    width: "57%",
    fontSize: "24px !important",
    marginBottom: "0.5rem !important",
    lineHeight: "1.4 !important",
  },
  section2_p: {
    textAlign: "left",
    fontWeight: "600 !important",
    width: "72%",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Box
      className={classes.imgtranscolor}
      sx={{
        backgroundImage: `url(${img2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        height: 730,
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          width: "100%",
          height: "100%",
          display: "flex",
          paddingBottom: "10rem",
          paddingLeft: "10rem",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <Box>
          <Typography
            variant="h3"
            color="white"
            className={classes.section2_h3}
          >
            PUT OUR EXTENSIVE NETWORK OF PARTNERS AND RESOURCES TO WORK FOR YOU!
          </Typography>
          <Typography
            component="p"
            color="white"
            className={classes.section2_p}
          >
            Whether you are interested in a temporary assignment, per diem work,
            or a permanent role, our team is dedicated to learning who you are
            on both a personal and professional level. Let Ellsworth Healthcare
            Staffing streamline the process for you.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
