import React, { useEffect } from "react";

import { Box, Typography, Grid } from "@mui/material";

import Footer from "./Footer";
import img1 from "../images/about_img1.jpg";
import CommonBoxImg from "./CommonBoxImg";
import { COLORS } from "../ui/Theme/colors";
import ScrollToTopOnMount from "./ScrollToTopMount";
import img2 from "../images/card4.jpg";

const styles = {
  sectiondiv_1: {
    height: "100%",
    backgroundColor: "#fff",
    padding: "4rem",
    textAlign: "justify",
  },
  sectiondiv_2: {
    height: "100%",
    backgroundColor: "#4676b0",
    padding: "4rem",
    color: "#fff",
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    padding: "2rem",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  textbContainer: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: { sm: "0px", md: "2rem", xs: "0px" },
    marginLeft: { sm: "2rem", md: "1rem", xs: "0px" },
    textAlign: "left",
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
  img_container: {
    width: "100%",
    display: "flex",
    margin: "10px 0",
  },
  img_s: {
    width: "450px",
    height: "350px",
    display: { sm: "block", md: "block", xs: "none" },
  },
  root_fcontainer: {
    margin: "20px auto",
    maxWidth: "960px",
  },
  imgContainer: {
    display: "flex",
    alignItems: "center",
  },
  img: {
    maxWidth: "100%",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  svg_i: {
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    marginRight: "1rem",
    border: `1px solid ${COLORS.primary}`,
    backgroundColor: `${COLORS.primary}`,
  },
  half_line: {
    borderTop: "1px solid #bbbbbb",
    width: "50%",
    margin: "0 auto",
  },
  img_container: {
    width: "100%",
    display: "flex",
    margin: "10px 0",
  },
};

const HealthcareFacilities = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <CommonBoxImg img={img1} txt1="FIND A TOP HEALTHCARE STAFF" />
      <Typography component="div" sx={styles.img_container}>
        <Typography
          component="div"
          sx={styles.textContainer}
          className="text_mvcontainer"
        >
          <Box
            component="img"
            src={img2}
            alt="Your image here"
            sx={styles.img_s}
            className="img_1"
          />

          <Typography component="div" sx={styles.textbContainer}>
            <Typography
              variant="h3"
              component="h3"
              gutterBottom
              sx={{
                fontSize: "2rem",
                fontWeight: "600",
                color: `${COLORS.primary}`,
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "15px",
              }}
            >
              Focus on your business, we are here to address your staffing needs
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              We use a screening procedure created by our licensing and
              credentialing specialists to ensure that every nurse satisfies our
              high quality requirements. Our top priority is to ensure that you
              are satisfied, thus we make every attempt to match our efforts
              with your procedures.
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              Whatever the reason, you require clinical staffing immediately. To
              meet your staffing needs, no matter what they may be, Nexus
              Staffing works around the clock to find you the best travel
              nurses, travel therapists, allied personnel, and other clinical
              professionals.
            </Typography>
          </Typography>
        </Typography>
      </Typography>
      {/* <Typography component="div" sx={styles.root}>
        <Grid container>
          <Grid>
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
                Nexus Staffing services is a full-service healthcare staffing
                agency committed to providing strategic solutions for all
                medical staffing needs.
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
                Nexus Staffing services was founded in Tucker, Georgia with the
                mission of providing “Superior People and Superior Service.” At
                Nexus, our employees, partner facilities, and patients are our
                top priority. We offer swift scheduling and a quick turnaround
                time to match qualified healthcare professionals with
                assignments that match their interests, while also giving our
                clients the employees they need to deliver exceptional care to
                their own patients.
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Typography> */}
      <Footer />
    </>
  );
};

export default HealthcareFacilities;
