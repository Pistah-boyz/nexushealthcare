import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Button,
  Slide,
} from "@mui/material";
import { Person as PersonIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import { HomeSlider } from "./Slider";
import Footer from "../Footer";
import { Card, Container } from "../../ui";
import { SlideComponent } from "../SlideComponent";
import { COLORS } from "../../ui/Theme/colors";
import img2 from "../../images/action-bg.jpg";
import MyLogo from "../../images/Nexus.png";
import card1 from "../../images/card1.jpg";
import card2 from "../../images/card2.png";
import card3 from "../../images/card3.jpg";
import card4 from "../../images/card4.jpg";
import card5 from "../../images/card5.jpg";
import card6 from "../../images/card6.jpg";

const styles = {
  padding: {
    padding: "16px",
  },
  section: {
    padding: "32px",
    background: "whitesmoke",
    borderBottom: "4px solid #e4e3e3",
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
  media: {
    width: "100%",
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

const offers = [
  { title: "STAFFING", subTitle: "VIEW SERVICES", img: card1 },
  { title: "CANDIDATES", subTitle: "LEARN MORE", img: card2 },
  { title: "EMPLOYERS", subTitle: "LEARN MORE", img: card3 },
  { title: "APPLY NOW!", subTitle: "LETS GET STARTED", img: card4 },
];

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box>
        <HomeSlider />
      </Box>

      <Box sx={styles.section}>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6} md={4}>
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
          <Grid item xs={12} sm={6} md={4}>
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
          <Grid item xs={12} sm={6} md={4}>
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
        <SlideComponent direction="down">
          <Box
            sx={{ display: "flex", justifyContent: "center", padding: "15px" }}
          >
            <img src={MyLogo} width="300px" height="180px" />
          </Box>
        </SlideComponent>
        <SlideComponent direction="down">
          <Box sx={styles.padding}>
            <Typography variant="h6" sx={{ color: "#88c036" }}>
              Ellsworth Healthcare Staffing is fully committed to understanding
              the needs of our clients and our employees to match the right
              candidate with today’s most essential healthcare positions. It’s
              our goal to provide superior healthcare professionals and
              remarkable care for patients.
            </Typography>
          </Box>
        </SlideComponent>
        <SlideComponent direction="down">
          <Box sx={styles.padding}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              SERVING ATLANTA, GA AND BEYOND
            </Typography>

            <SlideComponent direction="down">
              <Typography variant="h6">
                Ellsworth Healthcare Staffing is a full-service healthcare
                staffing agency committed to providing strategic staffing
                solutions for Georgia-based healthcare facilities and patients.
                Our team works around-the-clock to provide outstanding service
                and quality care. It is our mission to leverage our industry
                experience to provide excellent customer service and to deliver
                rewarding results to our employees and the greater healthcare
                community.
              </Typography>
            </SlideComponent>
          </Box>
        </SlideComponent>
        <Box sx={styles.padding}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            OUR ORGANIZATION’S MISSION
          </Typography>
          <Typography variant="h6">
            Our company was founded in Tucker, Georgia with the mission of
            providing “Superior People and Superior Service.” At Ellsworth
            Healthcare Staffing, our employees, our partner facilities, and the
            patients we ultimately serve are our top priority. We offer rapid
            scheduling turnaround time to place the best healthcare
            professionals with jobs and assignments that match their interests,
            while also giving our clients the essential employees they need and
            depend on.
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", padding: "16px" }}
        >
          <Button
            variant="contained"
            sx={{ margin: "8px" }}
            onClick={() => navigate("/about")}
          >
            More About Us
          </Button>

          <Button
            variant="contained"
            sx={{ margin: "8px" }}
            onClick={() => navigate("/career/applynow")}
          >
            Apply Now!
          </Button>
        </Box>
      </Container>

      <Box sx={styles.section}>
        <Container maxWidth={"lg"} disableGutters={false}>
          <Box sx={{ padding: "16px" }}>
            <Typography variant="h3">WHY CHOOSE</Typography>
          </Box>
          <Box sx={{ padding: "16px" }}>
            <Grid container spacing={8}>
              {offers.map((val) => (
                <Grid key={val.title} item xs={12} sm={12} md={6}>
                  <Box className="flip-card">
                    <Box className="flip-card-inner">
                      <Box
                        className="flip-card-front"
                        sx={{ backgroundImage: `url('${val.img}')` }}
                      >
                        <Typography variant="h5">{val.title}</Typography>
                      </Box>
                      <Box className="flip-card-back">{val.subTitle}</Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export { Dashboard };
