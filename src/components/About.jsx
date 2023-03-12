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
    padding: "4rem",
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
      <CommonBoxImg
        img={img1}
        txt1="ABOUT OUR ORGANIZATION"
        txt2="AN EXPERIENCED HEALTHCARE STAFFING AGENCY IN ATLANTA, GA"
      />
      <Typography component="div" sx={styles.root}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography component="div" sx={styles.sectiondiv_1}>
              <Typography
                component="h2"
                variant="h5"
                sx={styles.section_h5}
                style={{ color: `${COLORS.peal}` }}
              >
                WHO WE ARE AND WHAT WE STAND FOR
              </Typography>
              <Typography
                component="h2"
                variant="h6"
                sx={styles.section_h6}
                style={{ color: `${COLORS.teal}` }}
              >
                Ellsworth Healthcare Staffing is a full-service healthcare
                staffing agency committed to providing strategic solutions for
                all medical staffing needs.
              </Typography>
              <Typography component="p" sx={styles.section_p}>
                Our team works around-the-clock to provide outstanding staffing
                solutions and quality service. It is our mission to leverage our
                direct experience and knowledge of the industry to provide
                excellent customer service and to deliver superior results for
                our clients – whether they be hospitals and medical facilities
                across the state of Georgia or local Atlanta residents in need
                of healthcare.
              </Typography>
              <Typography component="p" sx={styles.section_p}>
                Ellsworth Healthcare Staffing was founded in Tucker, Georgia
                with the mission of providing “Superior People and Superior
                Service.” At Ellsworth, our employees, partner facilities, and
                patients are our top priority. We offer swift scheduling and a
                quick turnaround time to match qualified healthcare
                professionals with assignments that match their interests, while
                also giving our clients the employees they need to deliver
                exceptional care to their own patients.
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography component="div" sx={styles.sectiondiv_2}>
              <Typography component="h2" variant="h5" sx={styles.section_h5}>
                COMMITTED TO SUPPORTING THE HEALTHCARE INDUSTRY
              </Typography>
              <Typography component="h2" variant="h5" sx={styles.section_h6}>
                Ellsworth Healthcare Staffing recruits everyone from
                highly-skilled nurses to all allied health professionals and any
                other clinical and administrative staff in the healthcare
                industry.
              </Typography>
              <Typography component="p" sx={styles.section_p}>
                Our team works quickly and skillfully to place the highest
                qualified candidates in medical facilities across the state of
                Georgia. In addition, we make certain that our caregivers are
                compassionate, dependable, and provide the highest level of care
                to our patients. We work tirelessly to ensure all employees are
                within regulation and Joint Commission standards while being
                up-to-date on all essential industry credentials and critical
                continuing education. We take pride in giving our employees and
                our clients an excellent healthcare experience when they need it
                most.
              </Typography>
              <Typography component="p" sx={styles.section_p}>
                Ellsworth Healthcare Staffing was founded in Tucker, Georgia
                with the mission of providing “Superior People and Superior
                Service.” At Ellsworth, our employees, partner facilities, and
                patients are our top priority. We offer swift scheduling and a
                quick turnaround time to match qualified healthcare
                professionals with assignments that match their interests, while
                also giving our clients the employees they need to deliver
                exceptional care to their own patients.
              </Typography>
              <Typography component="p" sx={styles.section_p}>
                We understand it’s more than just placing employees, but also
                about the quality of care for the patients, who are included in
                our promise of “Superior People and Superior Service.” Allow us
                to combine our in-depth knowledge of the industry with our
                proven resources, and essential healthcare skills to provide the
                finest healthcare staffing solutions for all of your
                organizational or personal needs.
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
