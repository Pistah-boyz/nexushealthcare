import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  Paper,
  Typography,
  TextField,
  IconButton,
} from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import { useParams } from "react-router-dom";

import CommonBoxImg from "./CommonBoxImg";
import img1 from "../images/about_img1.jpg";
import JobBoard from "./JobBoard";
import Footer from "./Footer";
import { COLORS } from "../ui/Theme/colors.js";

const style = {
  c_container: {
    border: `1px solid ${COLORS.primary}`,
    padding: "3rem",
    background: `${COLORS.primary}`,
    borderRadius: "5px",
  },
  career_h3: {
    marginBottom: "0.5rem",
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#fff",
  },
  career_h4: {
    marginBottom: "0.5rem",
    color: "#bce452",
    fontSize: "1.2rem",
    fontWeight: "600",
  },
  carrer_p: {
    fontSize: "18px",
    fontWeight: "500",
    color: "#fff",
    marginBottom: "1rem",
  },
  btn_1: {
    border: "1px solid #fff",
    color: "#fff",
    padding: "1rem",
    borderRadius: "10px",
  },
  root: {
    flexGrow: 1,
    padding: "10px",
  },
  paper: {
    padding: "10px",
    textAlign: "center",
    color: "#555",
  },
  form: {
    marginTop: "10px",
  },
  submitButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
  },
  formfield: {
    margin: "auto",
    width: "80%",
  },
  jobbformfield: {
    margin: "auto",
    width: "60%",
  },
};
const Career = () => {
  const { pagename } = useParams();
  const [jobBoard, setJobBoard] = useState("");
  useEffect(() => {
    setJobBoard(pagename);
  }, [pagename]);
  return (
    <>
      <CommonBoxImg
        img={img1}
        txt1="JOB BOARD"
        txt2="JOB BOARD REGISTERED NURSE CAREERS AND MORE ACROSS ATLANTA, GA"
      />
      <Typography component="div" sx={{ padding: "1rem" }}>
        <Typography
          component="div"
          sx={{
            display: "flex",
            padding: "1.5rem",
            margin: "auto",
          }}
          className="container_flex"
        >
          <Typography component="div" sx={style.c_container}>
            <Typography component="h3" sx={style.career_h3}>
              CURRENT OPPORTUNITIES
            </Typography>
            <Typography component="h4" sx={style.career_h4}>
              We invite you to take a look at the current career opportunities
              available at Ellsworth Healthcare Staffing.
            </Typography>
            <Typography component="p" sx={style.carrer_p}>
              Please include a copy of your resume as an attachment with your
              submission. If your skills meet our current requirements, a member
              of the team will reach out to you to discuss the next steps of
              your application.
            </Typography>
            <Button sx={style.btn_1}>Apply Now</Button>
          </Typography>
        </Typography>
      </Typography>
      {jobBoard === "applynow" ? (
        <>
          <Typography component="div" sx={style.root}>
            <Grid container justify="center" spacing={3} sx={style.formfield}>
              <Grid item xs={12}>
                <IconButton color="primary" aria-label="Upload Resume">
                  <CloudUpload />
                </IconButton>
                <Typography component="span" sx={{ fontSize: "14px" }}>
                  Upload Resume
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Paper className={style.paper}>
                  <TextField fullWidth label="First Name" />
                </Paper>
              </Grid>
              <Grid item xs={12} md={3}>
                <Paper className={style.paper}>
                  <TextField fullWidth label="Last Name" />
                </Paper>
              </Grid>
              <Grid item xs={12} md={3}>
                <Paper className={style.paper}>
                  <TextField fullWidth label="City" />
                </Paper>
              </Grid>
              <Grid item xs={12} md={3}>
                <Paper className={style.paper}>
                  <TextField fullWidth label="State" />
                </Paper>
              </Grid>
              <Grid item xs={12} md={3}>
                <Paper className={style.paper}>
                  <TextField fullWidth label="Email" />
                </Paper>
              </Grid>
              <Grid item xs={12} md={3}>
                <Paper className={style.paper}>
                  <TextField fullWidth label="Phone" />
                </Paper>
              </Grid>
              <Grid item xs={12} md={3}>
                <Paper className={style.paper}>
                  <TextField fullWidth label="Zip Code" />
                </Paper>
              </Grid>
              <Grid item xs={12} md={3}>
                <Paper className={style.paper}>
                  <TextField fullWidth label="Job Title" />
                </Paper>
              </Grid>
              <Grid item xs={12} md={12} sx={style.submitButton}>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "5px",
                    backgroundColor: "#28A19A",
                    color: "#fff",
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      width: "150px",
                      height: "30px",
                      lineHeight: "30px",
                      textTransform: "none",
                    }}
                  >
                    Submit
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Typography>
        </>
      ) : (
        <JobBoard />
      )}
      <Typography component="div" sx={{ marginTop: "50px" }}>
        <Footer />
      </Typography>
    </>
  );
};

export default Career;
