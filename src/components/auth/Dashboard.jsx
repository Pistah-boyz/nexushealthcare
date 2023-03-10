import React, { useState } from "react";
import { Box, Grid, Typography, IconButton, Button } from "@mui/material";
import { Person as PersonIcon } from "@mui/icons-material";

import { HomeSlider } from "./Slider";
import { Card, Container } from "../../ui";
import { Logo } from "../auth/Logo";
import { COLORS } from "../../ui/Theme/colors";

const styles = {
  padding: {
    padding: "16px",
  },
  card: {
    padding: "32px",
    borderRadius: "10px",
    background: COLORS.primary,
    color: COLORS.white,
    transition: "all .3s ease",

    "&:hover": {
      transform: "translateY(-10px)",
      boxShadow: " 0 6px 10px rgb(0 0 0 / 40%)",
    },
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: "8px",
  },
  cardIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: COLORS.white,
  },
  actionButton: {
    color: COLORS.white,
    background: "none",
    borderColor: COLORS.white,
  },
  centerContainer: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },
};

const Dashboard = () => {
  return (
    <>
      <Box>
        <HomeSlider />
      </Box>
      <Box sx={styles.padding}>
        <Grid container spacing={8}>
          <Grid item md={4}>
            <Box sx={{ padding: "32px" }}>
              <Typography
                variant="h5"
                component="div"
                sx={{ color: COLORS.primary }}
              >
                NEXUS HEALTHCARE{" "}
                <span style={{ fontWeight: "bold" }}>STAFFING</span>
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                A Trusted Network of Healthcare Professionals
              </Typography>
              <Typography variant="body2">
                We serve healthcare professionals looking for work as well as
                local healthcare facilities and hospitals with critical staffing
                needs.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4}>
            <Card
              actionButton={"LearMore"}
              sx={styles.card}
              sxContent={styles.cardContent}
              sxActions={styles.actionButton}
            >
              <IconButton sx={styles.cardIcon}>
                <PersonIcon fontSize="large" />
              </IconButton>
              <Typography variant="h5" component="div">
                Candidates
              </Typography>
              <Typography variant="body2">
                Trust our team to take the stress and hassle out of the
                healthcare application process.
              </Typography>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card
              actionButton={"LearMore"}
              sx={styles.card}
              sxContent={styles.cardContent}
              sxActions={styles.actionButton}
            >
              <IconButton sx={styles.cardIcon}>
                <PersonIcon fontSize="large" />
              </IconButton>
              <Typography variant="h5" component="div">
                EMPLOYERS
              </Typography>
              <Typography variant="body2">
                We’re ready to find the right candidates for your immediate
                openings and staffing needs.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Container
        maxWidth={"md"}
        disableGutters={false}
        sx={styles.centerContainer}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Logo />
        </Box>
        <Box sx={styles.padding}>
          Ellsworth Healthcare Staffing is fully committed to understanding the
          needs of our clients and our employees to match the right candidate
          with today’s most essential healthcare positions. It’s our goal to
          provide superior healthcare professionals and remarkable care for
          patients.
        </Box>
        <Box sx={styles.padding}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            SERVING ATLANTA, GA AND BEYOND
          </Typography>
          Ellsworth Healthcare Staffing is a full-service healthcare staffing
          agency committed to providing strategic staffing solutions for
          Georgia-based healthcare facilities and patients. Our team works
          around-the-clock to provide outstanding service and quality care. It
          is our mission to leverage our industry experience to provide
          excellent customer service and to deliver rewarding results to our
          employees and the greater healthcare community.
        </Box>
        <Box sx={styles.padding}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            OUR ORGANIZATION’S MISSION
          </Typography>
          Our company was founded in Tucker, Georgia with the mission of
          providing “Superior People and Superior Service.” At Ellsworth
          Healthcare Staffing, our employees, our partner facilities, and the
          patients we ultimately serve are our top priority. We offer rapid
          scheduling turnaround time to place the best healthcare professionals
          with jobs and assignments that match their interests, while also
          giving our clients the essential employees they need and depend on.
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", padding: "16px" }}
        >
          <Button variant="contained" sx={{ margin: "8px" }}>
            More About Us
          </Button>

          <Button variant="contained" sx={{ margin: "8px" }}>
            Apply Now!
          </Button>
        </Box>
      </Container>
    </>
  );
};

export { Dashboard };
