import React, { useEffect } from "react";

import { Box, Typography, Grid } from "@mui/material";
import { Group, Person } from "@mui/icons-material";

import Footer from "./Footer";
import img1 from "../images/about_img1.jpg";
import img2 from "../images/card1.jpg";
import CommonBoxImg from "./CommonBoxImg";
import { COLORS } from "../ui/Theme/colors";
import ScrollToTopOnMount from "./ScrollToTopMount";

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
    paddingLeft: "1rem",
    marginLeft: "1rem",
    textAlign: "justify",
  },
  root_fcontainer: {
    margin: "60px auto",
    marginLeft: "100px",
    maxWidth: "100%",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
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
};

const HealthcareJobSeekers = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <CommonBoxImg img={img1} txt1="FIND YOUR JOB" />
      <Typography component="div" sx={styles.root}>
        {/* <Grid container>
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
        </Grid> */}
        <div style={styles.half_line}></div>
        <Typography component="div" sx={styles.img_container}>
          <Typography
            component="div"
            sx={styles.textContainer}
            className="text_mvcontainer"
          >
            <img
              src={img2}
              alt="Your image here"
              style={styles.img_s}
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
                }}
              >
                Prestigious Contract Opportunities in top health care centres
              </Typography>
              <Typography variant="body1" component="p" gutterBottom>
                Our dedicated team of professional recruiters and program
                managers will offer you the same level of care and dedication
                that you provide your patients.
              </Typography>
              <Typography variant="body1" component="p" gutterBottom>
                We work with skilled healthcare professionals to place them with
                exceptional health care teams at the forefront of modern
                medicine.
              </Typography>
            </Typography>
          </Typography>
        </Typography>
        <div style={styles.half_line}></div>
        <Typography component="div" sx={styles.root_fcontainer}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={2}>
              <Typography
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <Typography component="div" sx={styles.svg_i}>
                  <Group style={{ color: `${COLORS.white}` }} />
                </Typography>
                <Typography component="div">
                  <Typography
                    variant="h5"
                    style={{
                      color: "blue",
                      fontWeight: "500",
                      fontSize: "20px",
                    }}
                  >
                    Registered Nurse
                  </Typography>
                  <Typography
                    component="p"
                    style={{ textAlign: "justify", marginTop: "10px" }}
                  >
                    Registered Nurse provides care for patients utilizing the
                    nursing process of assessment, planning, intervention,
                    implementation, and evaluation.
                  </Typography>
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography
                component="div"
                sx={{ display: "flex", alignItems: "flex-start" }}
              >
                <Typography component="div" sx={styles.svg_i}>
                  <Person style={{ color: `${COLORS.white}` }} />
                </Typography>
                <Typography component="div">
                  <Typography
                    variant="h5"
                    style={{
                      color: "blue",
                      fontWeight: "500",
                      fontSize: "20px",
                    }}
                  >
                    Personal Support Worker
                  </Typography>
                  <Typography
                    component="p"
                    style={{ textAlign: "justify", marginTop: "10px" }}
                  >
                    Provide support for people who are ill, elderly or need help
                    with daily tasks. You make sure your clients are
                    comfortable, safe and enjoy emotional and physical
                    well-being.
                  </Typography>
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography
                component="div"
                sx={{ display: "flex", alignItems: "flex-start" }}
              >
                <Typography component="div" sx={styles.svg_i}>
                  <Person style={{ color: `${COLORS.white}` }} />
                </Typography>
                <Typography component="div">
                  <Typography
                    variant="h5"
                    style={{
                      color: "blue",
                      fontWeight: "500",
                      fontSize: "20px",
                    }}
                  >
                    House Keeper
                  </Typography>
                  <Typography
                    component="p"
                    style={{ textAlign: "justify", marginTop: "10px" }}
                  >
                    Perform custodial and housekeeping tasks. Maintain the
                    facility in a clean, safe, and sanitary manner. Perform all
                    tasks to assure that the facility reflects a high quality of
                    care and appearance.
                  </Typography>
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography
                component="div"
                sx={{ display: "flex", alignItems: "flex-start" }}
              >
                <Typography component="div" sx={styles.svg_i}>
                  <Group style={{ color: `${COLORS.white}` }} />
                </Typography>
                <Typography component="div">
                  <Typography
                    variant="h5"
                    style={{
                      color: "blue",
                      fontWeight: "500",
                      fontSize: "20px",
                    }}
                  >
                    Licensed Practical Nurses
                  </Typography>
                  <Typography
                    component="p"
                    style={{ textAlign: "justify", marginTop: "10px" }}
                  >
                    Travel nursing is a popular career path that LPNs may
                    consider going into once they have gained some experience
                    and are ready to travel.
                  </Typography>
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography
                component="div"
                sx={{ display: "flex", alignItems: "flex-start" }}
              >
                <Typography component="div" sx={styles.svg_i}>
                  <Group style={{ color: `${COLORS.white}` }} />
                </Typography>
                <Typography component="div">
                  <Typography
                    variant="h5"
                    style={{
                      color: "blue",
                      fontWeight: "500",
                      fontSize: "20px",
                    }}
                  >
                    Registered Health Care Aide
                  </Typography>
                  <Typography
                    component="p"
                    style={{ textAlign: "justify", marginTop: "10px" }}
                  >
                    Travel nurses are RNs from various clinical backgrounds who
                    work for independent staffing agencies.
                  </Typography>
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Typography>
      </Typography>
      <Footer />
    </>
  );
};

export default HealthcareJobSeekers;
