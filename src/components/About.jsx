import React, { useEffect } from "react";

import { Box, Typography, Grid } from "@mui/material";

import Footer from "./Footer";
import img1 from "../images/about_img1.jpg";
import CommonBoxImg from "./CommonBoxImg";
import { COLORS } from "../ui/Theme/colors";
import ScrollToTopOnMount from "./ScrollToTopMount";

const styles = {
  sectiondiv_1: {
    height: "100%",
    backgroundColor: "#fff",
    padding: "2rem",
    textAlign: "justify",
  },
  sectiondiv_2: {
    height: "100%",
    backgroundColor: "#4676b0",
    padding: "4rem",
    color: "#fff",
  },
  section_h5: {
    fontSize: "20px !important",
    fontWeight: "700 !important",
    padding: "0.5rem",
  },
  section_h6: {
    fontSize: "20px !important",
    fontWeight: "600 !important",
    padding: "0.5rem",
  },
  section_p: {
    padding: "0.5rem",
  },
  section_pcustom: {
    fontSize: "20px",
    padding: "1rem",
    fontWeight: "600",
    background: "#3b3b3b",
    color: "#fff",
    borderLeft: "5px solid #31c6ff",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
  },
};

const About = () => {
  return (
    <>
      <ScrollToTopOnMount />
      {/* <CommonBoxImg
        img={img1}
        txt1="ABOUT OUR ORGANIZATION"
        txt2="AN EXPERIENCED HEALTHCARE STAFFING AGENCY IN ATLANTA, GA"
      /> */}
      <Typography component="div" sx={styles.root}>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Typography component="div" sx={styles.sectiondiv_1}>
              {/* <Typography
                component="h2"
                variant="h5"
                sx={styles.section_h5}
                style={{ color: `${COLORS.peal}` }}
              >
                WHO WE ARE AND WHAT WE STAND FOR
              </Typography> */}
              <Typography
                component="h2"
                variant="h6"
                sx={styles.section_h6}
                style={{ color: `${COLORS.teal}` }}
              >
                Nexus Staffing services is a staffing agency developed in
                response to meet the staffing needs of the health care system
                across Canada. Nexus helps nurses and health care teams who
                travel to fill in temporary nursing and other health care
                positions on a short term or long term contract basis. While
                travel nursing traditionally refers specifically to the nursing
                profession, it can also be used as a blanket term to refer to
                nursing and allied healthcare professionals, physicians,
                advanced practice nurses, physician assistants, dentists, and
                other support staff including certified nursing assistants.
              </Typography>
              <Typography component="h3" variant="h6" sx={styles.section_p}>
                We believe and emphasize the statement “In staffing, the right
                person is recruited for the right jobs, therefore it leads to
                maximum productivity and higher performance. It helps in
                promoting the optimum utilization of human resources through
                various aspects. Job satisfaction and morale of the workers
                increases through the recruitment of the right person”. The
                staffing process involves locating, selecting, hiring, and
                maintaining a professional relationship with potential and
                current workers. Human resources staff members are usually in
                charge of creating and implementing a company’s staffing
                protocols to find quality candidates who will match its office
                culture and provide valuable work.
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Typography>
      <Footer />
    </>
  );
};

export default About;
