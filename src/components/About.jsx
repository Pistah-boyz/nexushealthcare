import React from "react";

import { Box, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

import img1 from "../images/about_img1.jpg";
import Footer from "./Footer";

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
    fontWeight: "500 !important",
    padding: "0.5rem",
  },
  section_p: {
    padding: "0.5rem",
  },
});

const About = () => {
  const classes = useStyles();
  return (
    <>
      <Box
        className={classes.imgtranscolor}
        sx={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          height: 400,
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            <Typography
              variant="h3"
              color="white"
              sx={{ textAlign: "center", fontWeight: 400, padding: "10px" }}
            >
              ABOUT OUR{" "}
              <Box component="span" sx={{ fontWeight: 700 }}>
                ORGANIZATION
              </Box>
            </Typography>
            <Typography
              variant="h5"
              color="white"
              sx={{ textAlign: "center", fontWeight: 700 }}
            >
              AN EXPERIENCED HEALTHCARE STAFFING AGENCY IN ATLANTA, GA
            </Typography>
          </Box>
        </Box>
      </Box>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography component="div" className={classes.sectiondiv_1}>
              <Typography
                component="h2"
                variant="h5"
                className={classes.section_h5}
              >
                WHO WE ARE AND WHAT WE STAND FOR
              </Typography>
              <Typography
                component="h2"
                variant="h6"
                className={classes.section_h6}
              >
                Ellsworth Healthcare Staffing is a full-service healthcare
                staffing agency committed to providing strategic solutions for
                all medical staffing needs.
              </Typography>
              <Typography component="p" className={classes.section_p}>
                Our team works around-the-clock to provide outstanding staffing
                solutions and quality service. It is our mission to leverage our
                direct experience and knowledge of the industry to provide
                excellent customer service and to deliver superior results for
                our clients – whether they be hospitals and medical facilities
                across the state of Georgia or local Atlanta residents in need
                of healthcare.
              </Typography>
              <Typography component="p" className={classes.section_p}>
                Ellsworth Healthcare Staffing was founded in Tucker, Georgia
                with the mission of providing “Superior People and Superior
                Service.” At Ellsworth, our employees, partner facilities, and
                patients are our top priority. We offer swift scheduling and a
                quick turnaround time to match qualified healthcare
                professionals with assignments that match their interests, while
                also giving our clients the employees they need to deliver
                exceptional care to their own patients.
              </Typography>
              <Typography component="p" className={classes.section_pcustom}>
                If you’re interested in partnering with Ellsworth Healthcare
                Staffing, give us a call today at 404-806-8164 or visit our
                Contact Page.
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography component="div" className={classes.sectiondiv_2}>
              <Typography
                component="h2"
                variant="h5"
                className={classes.section_h5}
              >
                COMMITTED TO SUPPORTING THE HEALTHCARE INDUSTRY
              </Typography>
              <Typography
                component="h2"
                variant="h5"
                className={classes.section_h6}
              >
                Ellsworth Healthcare Staffing recruits everyone from
                highly-skilled nurses to all allied health professionals and any
                other clinical and administrative staff in the healthcare
                industry.
              </Typography>
              <Typography component="p" className={classes.section_p}>
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
              <Typography component="p" className={classes.section_p}>
                Ellsworth Healthcare Staffing was founded in Tucker, Georgia
                with the mission of providing “Superior People and Superior
                Service.” At Ellsworth, our employees, partner facilities, and
                patients are our top priority. We offer swift scheduling and a
                quick turnaround time to match qualified healthcare
                professionals with assignments that match their interests, while
                also giving our clients the employees they need to deliver
                exceptional care to their own patients.
              </Typography>
              <Typography component="p" className={classes.section_p}>
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
      </div>
      <Footer />
    </>
  );
};

export default About;
