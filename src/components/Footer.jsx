import React from "react";

import {
  Box,
  Typography,
  Grid,
  Card,
  FormControl,
  TextField,
  IconButton,
  Button,
} from "@mui/material";
import {
  Place as LocationIcon,
  Phone as PhoneIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedinIcon,
} from "@mui/icons-material";
import TextareaAutosize from "@mui/base/TextareaAutosize";

import { Container } from "../ui";
import { COLORS } from "../ui/Theme/colors";

import MyLogo from "../images/Nexus.png";
import { BackgroundComponent } from "./auth/BackgroundComponent";
import { SlideComponent } from "./SlideComponent";
import card1 from "../images/card1.jpg";
import card2 from "../images/card2.jpg";
import card3 from "../images/card3.jpg";
import card4 from "../images/card4.jpg";
import card5 from "../images/card5.jpg";
import card6 from "../images/card6.jpg";

const styles = {
  offerContainer: {
    padding: "24px",
    background: COLORS.primary,
    color: COLORS.white,
  },
  offer: {
    position: "relative",
    width: "100%",
    maxHeight: "250px",
    borderRadius: "10px",
    background: "none",

    "&:hover .overlay": {
      backgroundColor: "rgb(0 65 101 / 30%)",
    },

    "&:hover .subTitle": {
      display: "block",
    },

    "&:hover .content": {
      border: "none",
      backgroundColor: "none",
    },
  },

  media: {
    width: "100%",
  },
  card: {
    position: "relative",
  },
  overlay: {
    position: "absolute",
    bottom: "0",
    right: "0",
    margin: "10px",
    padding: "8px",
    color: COLORS.white,
    borderRadius: "10px",
    backgroundColor: "rgb(0 65 101 / 70%)",
  },
  boxOverlay: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    borderRadius: "10px",
  },
  address: {
    padding: "40px",
    background: "#4676b0",
    color: COLORS.white,
  },
  contact: {
    padding: "40px",
  },
  footerIcons: {
    color: COLORS.white,
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
};

const offers = [
  { title: "STAFFING", subTitle: "VIEW SERVICES", img: card1 },
  { title: "CANDIDATES", subTitle: "LEARN MORE", img: card2 },
  { title: "EMPLOYERS", subTitle: "LEARN MORE", img: card3 },
  { title: "JOB BOARD", subTitle: "VIEW OPEN POSITIONS", img: card4 },
];

const browserWindow = window;

const Footer = () => {
  return (
    <>
      <BackgroundComponent />
      <Box sx={styles.offerContainer}>
        <Container maxWidth={"lg"} disableGutters={false}>
          <Box>
            <Typography variant="h3">
              <span style={{ fontWeight: "bold" }}>OUR SERVICES</span>
            </Typography>
            <hr />
          </Box>
          <Box sx={{ padding: "16px" }}>
            <Typography variant="h6">
              The driving force behind the Nexus Staffing Solution initiative is
              our commitment and compassion to serve our customers. We are proud
              to serve, deliver care, and bridge the gap between healthcare
              providers and facilities.
            </Typography>
          </Box>
          <Box sx={{ padding: "16px" }}>
            <Grid container spacing={8}>
              {offers.map((val) => (
                <Grid key={val.title} item md={6}>
                  <SlideComponent direction="right">
                    <Card sx={styles.offer}>
                      <img src={val.img} style={styles.media} />
                      <Box className={"content"} style={styles.overlay}>
                        <Typography variant="h6">{val.title}</Typography>
                        <Typography
                          className={"subTitle"}
                          variant="h6"
                          sx={{ fontWeight: "bold", display: "none" }}
                        >
                          {val.subTitle}
                        </Typography>
                      </Box>
                      <Box
                        className={"overlay"}
                        style={styles.boxOverlay}
                      ></Box>
                    </Card>
                  </SlideComponent>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      <Grid container>
        <Grid item md={6} sx={styles.address}>
          <Box sx={{ padding: "16px" }}>
            <Typography
              variant="h5"
              component="div"
              sx={{ color: COLORS.WHITE }}
            >
              <span style={{ fontWeight: "bold" }}>
                NEXUS STAFFING SOLUTION
              </span>
            </Typography>
          </Box>
          <Box sx={{ padding: "16px" }}>
            <Typography variant="h6">
              Nexus Staffing Solution is a leader in providing workforce
              solutions and staffing services to the healthcare industry. Our
              mission is to connect clients with qualified medical professionals
              to ensure superior patient deliveries. A rewarding career path for
              healthcare professionals. Staffing expertise in healthcare
              facilities.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", padding: "16px" }}>
            <LocationIcon />
            <Typography variant="h5" sx={{ marginLeft: "8px" }}>
              160 Clairemont Ave, Suite 200 Decatur, GA 30030
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", padding: "16px" }}>
            <PhoneIcon />
            <Typography variant="h5" sx={{ marginLeft: "8px" }}>
              404-806-8164
            </Typography>
          </Box>
          <Box sx={{ display: "flex", padding: "16px" }}>
            <IconButton
              sx={styles.footerIcons}
              onClick={() => {
                browserWindow.open(
                  "https://www.facebook.com/100090927846452",
                  "_blank"
                );
              }}
            >
              <FacebookIcon />
            </IconButton>

            <IconButton
              sx={styles.footerIcons}
              onClick={() => {
                browserWindow.open(
                  "https://instagram.com/nexus_staffing?igshid=ZDdkNTZiNTM= ",
                  "_blank"
                );
              }}
            >
              <InstagramIcon />
            </IconButton>

            <IconButton
              sx={styles.footerIcons}
              onClick={() => {
                browserWindow.open(
                  "https://www.facebook.com/100090927846452",
                  "_blank"
                );
              }}
            >
              <LinkedinIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item md={6} sx={styles.contact}>
          <Box sx={{ padding: "16px" }}>
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              CONNECT WITH NEXUS STAFFING SOLUTION
            </Typography>
          </Box>
          <Box sx={{ padding: "16px" }}>
            <Typography variant="h6">
              We welcome healthcare facilities and healthcare professionals
              seeking employment opportunities into our trusted network. Contact
              us now for more information about us.
            </Typography>
          </Box>
          <Box sx={{ padding: "16px" }}>
            <FormControl sx={{ width: "100%" }}>
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                fullWidth
                sx={{ margin: "8px" }}
              />
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
                sx={{ margin: "8px" }}
              />
              <TextField
                id="phone"
                label="Phone"
                type="number"
                variant="outlined"
                fullWidth
                sx={{ margin: "8px" }}
              />

              <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="Message"
                style={{ width: "100%", minHeight: "70px", margin: "8px" }}
              />
              <Button
                variant="contained"
                sx={{ margin: "8px", borderRadius: "10px", width: "150px" }}
              >
                Send
              </Button>
            </FormControl>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ background: "#000", color: COLORS.white, padding: "72px" }}>
        <Container
          maxWidth={"md"}
          disableGutters={false}
          justifyContent="center"
          alignItems="center"
        >
          <SlideComponent direction={"up"}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img src={MyLogo} width="300px" height="180px" />
            </Box>
          </SlideComponent>
          <SlideComponent direction={"up"}>
            <Box
              sx={{ display: "flex", justifyContent: "center", padding: "8px" }}
            >
              {/* <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                SERVING LOCAL HEALTHCARE FACILITIES AND HOME PATIENTS
              </Typography> */}
            </Box>
          </SlideComponent>
          <SlideComponent direction={"up"}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "16px",
              }}
            >
              <IconButton
                sx={styles.footerIcons}
                onClick={() => {
                  browserWindow.open(
                    "https://www.facebook.com/100090927846452",
                    "_blank"
                  );
                }}
              >
                <FacebookIcon />
              </IconButton>

              <IconButton
                sx={styles.footerIcons}
                onClick={() => {
                  browserWindow.open(
                    "https://instagram.com/nexus_staffing?igshid=ZDdkNTZiNTM= ",
                    "_blank"
                  );
                }}
              >
                <InstagramIcon />
              </IconButton>

              <IconButton
                sx={styles.footerIcons}
                onClick={() => {
                  browserWindow.open(
                    "https://www.facebook.com/100090927846452",
                    "_blank"
                  );
                }}
              >
                <LinkedinIcon />
              </IconButton>
            </Box>
          </SlideComponent>
        </Container>
      </Box>
      <Box sx={{ background: "#000", color: COLORS.white }}>
        <Container maxWidth={"lg"} disableGutters={false}>
          <Typography>© 2023 Nexus Healthcare Staffing</Typography>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
