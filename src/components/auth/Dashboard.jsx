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
import card2 from "../../images/card2.jpg";
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
    height: "100%",

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
  backgroundlineear: {
    background:
      "linear-gradient(180deg, rgb(0 0 0 / 80%) 0%, rgba(0,0,0,0) 100%)",
    width: "100%",
    height: "100%",
  },
};

const offers = [
  {
    title: "Cost-Effective Strаtеgіеѕ",
    subTitle:
      "Sаvе thоuѕаndѕ оf dоllаrѕ еvеrу уеаr bу еlіmіnаtіng rесruіtmеnt fееѕ frоm your budgеt by avoiding аdvеrtіsements for рlасеmеnt аnd rеvіеwіng rеѕumеѕ аnd іntеrvіеwіng саndіdаtеѕ.",
    img: card1,
  },
  {
    title: "Exceptional Wages",
    subTitle:
      "You’ll be pleased to learn that Travel Nurses employees are some of the highest-paid health professionals in Canada.",
    img: card2,
  },
  {
    title: "24/7 Clinical Support",
    subTitle:
      "We are sincere in our effort to make this an incredible experience for you and that’s why we provide 24/7 clinical support.",
    img: card3,
  },
  {
    title: "Thorough Sсrееnіng Prосеѕѕ",
    subTitle:
      "Our рrе-еmрlоуmеnt ѕсrееnіng process іnсludеѕ соmреtеnсу tеѕtѕ, ѕkіllѕ сhесklіѕtѕ, аnd a thоrоugh bасkgrоund сhесk. Thіѕ dеtаіlеd рrосеѕѕ hеlрѕ uѕ ѕеlесt only thе tор hеаlthсаrе рrоfеѕѕіоnаlѕ fоr рlасеmеnt.",
    img: card4,
  },
  {
    title: "Cultural Safety",
    subTitle:
      "Systemic racism and discrimination towards people continues to be a significant barrier to accessing healthcare in many communities across Canada",
    img: card5,
  },
  {
    title: "Bonus Incentives",
    subTitle:
      "Travel Nurses family there are further advantages in the form of monetary bonuses for referrals",
    img: card6,
  },
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
            <Box sx={{ padding: "32px", height: "100%" }}>
              <Typography
                variant="h5"
                component="div"
                sx={{ color: COLORS.primary }}
              >
                <span style={{ fontWeight: "bold" }}>
                  NEXUS STAFFING SERVICES
                </span>
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: "semibold",
                  color: COLORS.secondary,
                }}
              >
                A Reliable Network of Medical Experts
              </Typography>
              <Typography variant="body2">
                We believe and emphasis on the statement of “In staffing, the
                right person is recruited for the right jobs, therefore it leads
                to maximum productivity and higher performance.
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
                HEALTHCARE JOB SEEKERS
              </Typography>
              <Typography variant="body2">
                We are committed to attracting, involving, and keeping talent by
                fostering a culture that fosters achievement and professional
                development.
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
                HEALTHCARE FACILITIES
              </Typography>
              <Typography variant="body2">
                Our mission is to find the ideal applicant for every need, from
                hospital staffing to research laboratory employment.
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
              Nexus staffing services provides staffing services for medical
              facilities including hospitals and nursing homes that need to fill
              open positions in their establishments. We also have experienced
              health care recruiters with a background in hiring for hospitals
              and long-term care facilities. With each client, we use a
              collaborative approach and put special emphasis on developing
              staffing plans that bring the most value.
            </Typography>
          </Box>
        </SlideComponent>
        <SlideComponent direction="down">
          <Box sx={styles.padding}>
            <SlideComponent direction="down">
              <Typography variant="h6">
                Dedicated to providing strategic staffing services for Canadian
                healthcare facilities and patients, Nexus Staffing Services is a
                full-service healthcare staffing business. To deliver
                exceptional service and high-quality treatment, our team is on
                the clock. Our goal is to use our industry expertise to create
                top-notch customer service, satisfying outcomes for our staff,
                and to the larger healthcare community.
              </Typography>
            </SlideComponent>
          </Box>
        </SlideComponent>
        <Box sx={styles.padding}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            OUR MISSION
          </Typography>
          <Typography variant="h6">
            Our goal is to fill healthcare institutions with qualified and
            effective personnel who can provide effective help to their
            patients. By making sure that their healthcare team only consists of
            the most skilled employees, we also work to boost people&#39;s
            health.
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
          <Box
            sx={{
              padding: "16px",
            }}
          >
            <Typography variant="h3" sx={{ textAlign: "center" }}>
              Why Choose Us
            </Typography>
          </Box>
          <Box sx={{ padding: "16px" }}>
            <Grid container spacing={8}>
              {offers.map((val) => (
                <Grid key={val.title} item xs={12} sm={12} md={4}>
                  <Box className="flip-card">
                    <Box className="flip-card-inner">
                      <Box
                        className="flip-card-front"
                        sx={{
                          backgroundImage: `url('${val.img}')`,
                          color: "black",
                          opacity: "2",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <Typography
                          component="div"
                          sx={styles.backgroundlineear}
                        >
                          <Typography
                            variant="h5"
                            sx={{
                              color: "#fff",
                              padding: "20px",
                              fontSize: "18px",
                            }}
                          >
                            {val.title}
                          </Typography>
                        </Typography>
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
