import React, { useEffect, useState, useRef } from "react";
import {
  Button,
  Grid,
  Paper,
  Typography,
  TextField,
  IconButton,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import {
  CloudUpload,
  Assignment,
  VerifiedUser,
  Delete,
} from "@mui/icons-material";
import { useParams } from "react-router-dom";
import useGoogleForm from "../customhooks/useGoogleForm";
import CommonBoxImg from "./CommonBoxImg";
import img1 from "../images/about_img1.jpg";
import JobBoard from "./JobBoard";
import Footer from "./Footer";
import { COLORS } from "../ui/Theme/colors.js";
import ScrollToTopOnMount from "./ScrollToTopMount";
import { width } from "@mui/system";
import emailjs from "@emailjs/browser";

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
  file_label: {
    fontSize: "14px",
    color: "#555",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "200px",
  },
};
const Career = () => {
  const { pagename } = useParams();
  const [jobBoard, setJobBoard] = useState("");
  useEffect(() => {
    setJobBoard(pagename);
  }, [pagename]);
  const [formValues, setFormValues] = useState({
    resume: "",
    certificate: "",
    license: "",
    firstName: "",
    lastName: "",
    subject: "",
    province: "",
    email: "",
    phone: "",
    zipCode: "",
    jobTitle: "Ten",
  });
  const [errors, setErrors] = useState({});
  const inputRefResume = useRef(null);
  const inputRefCertificate = useRef(null);
  const inputRefLicense = useRef(null);
  const [agree, setAgree] = useState(false);
  const [successMsgShow, setSuccessMsgShow] = useState(false);

  const formRef = useRef(null);

  const sendEmail = () => {
    emailjs
      .sendForm(
        "default_service",
        "contactarjunps@gmail.com",
        formRef.current,
        "40RepYz0ch588cm-N"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          console.log(formRef);
        }
      );
  };

  const handleAgreeChange = (event) => {
    setAgree(event.target.checked);
    errors.agree = "";
    setErrors(errors);
  };

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
    if (event.target.name === "firstName") {
      errors.firstName = "";
    }
    if (event.target.name === "lastName") {
      errors.lastName = "";
    }
    if (event.target.name === "subject") {
      errors.subject = "";
    }
    if (event.target.name === "province") {
      errors.province = "";
    }
    if (event.target.name === "email") {
      errors.email = "";
    }
    if (event.target.name === "phone") {
      errors.phone = "";
    }
    if (event.target.name === "zipCode") {
      errors.zipCode = "";
    }
    setErrors(errors);
  };

  const handleFileUpload = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.files[0],
    });
    if (event.target.name === "resume") {
      errors.resume = "";
    }
    if (event.target.name === "certificate") {
      errors.certificate = "";
    }
    if (event.target.name === "license") {
      errors.license = "";
    }
    setErrors(errors);
  };
  const handleDeleteClick = (name) => {
    setFormValues({
      ...formValues,
      [name]: null,
    });
    if (name === "resume") {
      inputRefResume.current.value = "";
    }
    if (name === "certificate") {
      inputRefCertificate.current.value = "";
    }
    if (name === "license") {
      inputRefLicense.current.value = "";
    }
  };

  const [submitForm, submitting, success, error] = useGoogleForm();
  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = {};
    if (!formValues.resume) {
      errors.resume = "Please upload Resume";
    }
    if (!formValues.certificate) {
      errors.certificate = "Please upload Certificate";
    }
    if (!formValues.license) {
      errors.license = "Please upload License";
    }
    if (!formValues.firstName) {
      errors.firstName = "Please enter your first name";
    }
    if (!formValues.lastName) {
      errors.lastName = "Please enter your last name";
    }
    // if (!formValues.subject) {
    //   errors.subject = "Please enter your subject";
    // }
    if (!formValues.province) {
      errors.province = "Please enter your province";
    }
    if (!formValues.email) {
      errors.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Please enter a valid email";
    }
    if (!formValues.phone) {
      errors.phone = "Please enter your phone number";
    }
    //else if (!/^\d{10}$/.test(formValues.phone)) {
    //   errors.phone = "Please enter a 10-digit phone number";
    // }
    if (!formValues.zipCode) {
      errors.zipCode = "Please enter your zip code";
    }
    if (!agree) {
      errors.agree = "Please checked the agreed ";
    }
    if (!formValues.jobTitle) {
      errors.jobTitle = "Please select the option";
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      const form = new FormData();
      form.append("entry.512353282", formValues.jobTitle); // replace with actual field ID
      form.append("entry.1164540781", formValues.email); // replace with actual field ID
      form.append("entry.1167119534", formValues.firstName);
      form.append("entry.1708130448", formValues.phone); // replace with actual field ID
      form.append("entry.1921283200", formValues.lastName); // replace with actual field ID
      form.append("entry.2132778193", formValues.province); // replace with actual field ID
      form.append("entry.1364687315", formValues.subject);
      form.append("entry.1305872078", formValues.subject);
      form.append("entry.1057598733", formValues.resume); // replace with actual field ID
      form.append("entry.384979576", formValues.certificate);
      form.append("entry.149729992", formValues.license);
      //form.append("file", attachment);
      submitForm(
        form,
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd4gppWwK2wrNG7C2hpCLfn-wZAJ7vIMgn_brzmFCY3PndQQw/formResponse"
      );
      setSuccessMsgShow(true);
      setFormValues({
        resume: "",
        certificate: "",
        license: "",
        firstName: "",
        lastName: "",
        subject: "",
        province: "",
        email: "",
        phone: "",
        zipCode: "",
        jobTitle: "",
      });
      inputRefCertificate.current.value = "";
      inputRefLicense.current.value = "";
      inputRefResume.current.value = "";
      setAgree(false);
      // setTimeout(()=>{
      //   setSuccessMsgShow(false);
      // },3000)
    }
    sendEmail();
  };
  return (
    <>
      <ScrollToTopOnMount />
      {/* <CommonBoxImg
        img={img1}
        txt1="JOB BOARD"
        txt2="JOB BOARD REGISTERED NURSE CAREERS AND MORE ACROSS ATLANTA, GA"
      /> */}
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
              available at Nexus Staffing services.
            </Typography>
            <Typography component="p" sx={style.carrer_p}>
              Please include a copy of your resume as an attachment with your
              submission. If your skills meet our current requirements, a member
              of the team will reach out to you to discuss the next steps of
              your application.
            </Typography>
            {/* <Button sx={style.btn_1}>Apply Now</Button> */}
          </Typography>
        </Typography>
      </Typography>
      {jobBoard === "applynow" ? (
        <>
          <Typography component="div" sx={style.root}>
            {successMsgShow ? (
              <Typography
                component="div"
                sx={{ textAlign: "center", color: COLORS.success }}
              >
                Thank you, your application is successfully submitted
              </Typography>
            ) : null}
            <form ref={formRef} onSubmit={handleSubmit}>
              <Grid container justify="center" spacing={3} sx={style.formfield}>
                <Grid item xs={12} sm={4}>
                  <input
                    accept=".pdf,.doc,.docx"
                    id="resume-upload"
                    name="resume"
                    type="file"
                    onChange={handleFileUpload}
                    ref={inputRefResume}
                    style={{ display: "none" }}
                  />
                  <label htmlFor="resume-upload">
                    <Button
                      variant="contained"
                      startIcon={<CloudUpload />}
                      component="span"
                    >
                      Upload Resume
                    </Button>
                    {errors.resume ? (
                      <Typography
                        component="div"
                        sx={{
                          fontSize: "13px",
                          my: 1,
                          color: `${COLORS.danger}`,
                        }}
                      >
                        {errors.resume}
                      </Typography>
                    ) : null}
                  </label>
                  {formValues.resume && (
                    <Typography component="div" sx={{ display: "flex", my: 1 }}>
                      <Typography
                        component="div"
                        sx={style.file_label}
                        title={formValues.resume.name}
                      >
                        {formValues.resume.name}
                      </Typography>
                      <Typography component="div" sx={{ marginTop: "-5px" }}>
                        <IconButton
                          size="small"
                          onClick={() => handleDeleteClick("resume")}
                        >
                          <Delete sx={{ color: `${COLORS.dangerlight}` }} />
                        </IconButton>
                      </Typography>
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12} sm={4}>
                  <input
                    type="file"
                    name="certificate"
                    id="certificate-upload"
                    ref={inputRefCertificate}
                    onChange={handleFileUpload}
                    accept="application/pdf"
                    style={{ display: "none" }}
                  />
                  <label htmlFor="certificate-upload">
                    <Button
                      variant="contained"
                      startIcon={<Assignment />}
                      component="span"
                    >
                      Upload Certificate
                    </Button>
                    {errors.certificate ? (
                      <Typography
                        component="div"
                        sx={{
                          fontSize: "13px",
                          my: 1,
                          color: `${COLORS.danger}`,
                        }}
                      >
                        {errors.certificate}
                      </Typography>
                    ) : null}
                  </label>
                  {formValues.certificate && (
                    <Typography component="div" sx={{ display: "flex", my: 1 }}>
                      <Typography
                        component="div"
                        sx={style.file_label}
                        title={formValues.certificate.name}
                      >
                        {formValues.certificate.name}
                      </Typography>
                      <Typography component="div" sx={{ marginTop: "-5px" }}>
                        <IconButton
                          size="small"
                          onClick={() => handleDeleteClick("certificate")}
                        >
                          <Delete sx={{ color: `${COLORS.dangerlight}` }} />
                        </IconButton>
                      </Typography>
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12} sm={4}>
                  <input
                    type="file"
                    name="license"
                    id="license-upload"
                    onChange={handleFileUpload}
                    ref={inputRefLicense}
                    accept="application/pdf"
                    style={{ display: "none" }}
                  />
                  <label htmlFor="license-upload">
                    <Button
                      variant="contained"
                      startIcon={<VerifiedUser />}
                      component="span"
                    >
                      Upload License
                    </Button>
                    {errors.license ? (
                      <Typography
                        component="div"
                        sx={{
                          fontSize: "13px",
                          my: 1,
                          color: `${COLORS.danger}`,
                        }}
                      >
                        {errors.license}
                      </Typography>
                    ) : null}
                  </label>
                  {formValues.license && (
                    <Typography component="div" sx={{ display: "flex", my: 1 }}>
                      <Typography
                        component="div"
                        sx={style.file_label}
                        title={formValues.license.name}
                      >
                        {formValues.license.name}
                      </Typography>
                      <Typography component="div" sx={{ marginTop: "-5px" }}>
                        <IconButton
                          size="small"
                          onClick={() => handleDeleteClick("license")}
                        >
                          <Delete sx={{ color: `${COLORS.dangerlight}` }} />
                        </IconButton>
                      </Typography>
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12} md={3}>
                  <Paper className={style.paper}>
                    <TextField
                      fullWidth
                      name="firstName"
                      label="First Name"
                      value={formValues.firstName}
                      onChange={handleChange}
                      error={Boolean(errors.firstName)}
                      helperText={errors.firstName}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Paper className={style.paper}>
                    <TextField
                      fullWidth
                      name="lastName"
                      label="Last Name"
                      value={formValues.lastName}
                      onChange={handleChange}
                      error={Boolean(errors.lastName)}
                      helperText={errors.lastName}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Paper className={style.paper}>
                    <TextField
                      fullWidth
                      name="email"
                      label="Email"
                      value={formValues.email}
                      onChange={handleChange}
                      error={Boolean(errors.email)}
                      helperText={errors.email}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Paper className={style.paper}>
                    <TextField
                      fullWidth
                      name="phone"
                      label="Phone"
                      value={formValues.phone}
                      onChange={handleChange}
                      error={Boolean(errors.phone)}
                      helperText={errors.phone}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Paper className={style.paper}>
                    <TextField
                      fullWidth
                      name="province"
                      label="Province"
                      value={formValues.province}
                      onChange={handleChange}
                      error={Boolean(errors.province)}
                      helperText={errors.province}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Paper className={style.paper}>
                    <TextField
                      fullWidth
                      name="zipCode"
                      label="Zip Code"
                      value={formValues.zipCode}
                      onChange={handleChange}
                      error={Boolean(errors.zipCode)}
                      helperText={errors.zipCode}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Paper className={style.paper}>
                    <TextField
                      fullWidth
                      name="subject"
                      label="Subject"
                      value={formValues.subject}
                      onChange={handleChange}
                    />
                  </Paper>
                </Grid>
                {/* <Grid item xs={12} md={3}>
                  <Paper className={style.paper}>
                    <TextField
                      fullWidth
                      name="jobTitle"
                      label="Job Title"
                      value={formValues.jobTitle}
                      onChange={handleChange}
                      error={Boolean(errors.jobTitle)}
                      helperText={errors.jobTitle}
                    />
                  </Paper>
                </Grid> */}
                <Grid item xs={12} md={3}>
                  {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Apply For
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={formValues.jobTitle}
                      name="jobTitle"
                      label="Applied For"
                      onChange={handleChange}
                      helperText={errors.jobTitle}
                      error={Boolean(formValues.jobTitle)}
                    >
                      <MenuItem value={10}>Registered Nurses</MenuItem>
                      <MenuItem value={20}>Licensed Practical Nurses</MenuItem>
                      <MenuItem value={30}>
                        Health Care Aid/ Certified nursing assistant
                      </MenuItem>
                      <MenuItem value={40}>House Keeper</MenuItem>
                      <MenuItem value={50}>Personal Support Worker</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={12}>
                  <FormControlLabel
                    control={
                      <Checkbox checked={agree} onChange={handleAgreeChange} />
                    }
                    label="I agree that my submitted data is being collected and stored."
                  />
                  {errors.agree ? (
                    <Typography
                      component="div"
                      sx={{
                        fontSize: "13px",
                        color: `${COLORS.danger}`,
                      }}
                    >
                      {errors.agree}
                    </Typography>
                  ) : null}
                </Grid>
                <Grid item xs={12} md={12} sx={style.submitButton}>
                  <Button
                    type="submit"
                    P
                    variant="contained"
                    sx={{
                      borderRadius: "5px",
                      backgroundColor: `${COLORS.primary}`,
                      color: `${COLORS.white}`,
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
            </form>
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
