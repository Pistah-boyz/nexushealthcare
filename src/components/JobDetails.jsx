import React, { useState } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Grid,
} from "@mui/material";
import {
  CheckCircleOutline as CheckCircleOutlineIcon,
  LocationOn as LocationOnIcon,
  AccessTime as AccessTimeIcon,
  FiberManualRecord,
} from "@mui/icons-material";
import StickyHeadTable from "./JobBoardTable";
import { useNavigate } from "react-router-dom";
const style = {
  JobDescription: {
    backgroundColor: "#fff",
    padding: "32px",
    borderRadius: "16px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
  },

  JobDetailstitle: {
    marginTop: "12px",
  },

  JobDetailsubtitle: {
    fontWeight: "bold",
    display: "list-item",
  },
};

const listItemIconStyle = {
  fontSize: "8px",
  marginRight: "16px",
};

const responsilityItems = [
  { text: "Develop new user-facing features" },
  { text: "Build reusable components and libraries for future use" },
  { text: "Ensure the technical feasibility of UI/UX designs" },
];

const RequirementItems = [
  {
    text: "Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model",
  },
  {
    text: "Thorough understanding of React.js and its core principles",
  },
  {
    text: "Experience with popular React.js workflows (such as Flux or Redux)",
  },
  {
    text: "Familiarity with newer specifications of EcmaScript",
  },
  {
    text: "Experience with data structure libraries (e.g., Immutable.js)",
  },
];

const JobDetails = () => {
  const [openJobBoard, setJobBoardOpen] = useState(false);

  const handleBackClick = () => {
    setJobBoardOpen(true);
  };

  const handleClose = () => {
    setJobBoardOpen(false);
  };

  const listResponsibilitesItems = responsilityItems.map((item, index) => (
    <ListItem key={index}>
      <FiberManualRecord sx={listItemIconStyle} />
      <ListItemText primary={item.text} />
    </ListItem>
  ));

  const listRequirementItems = RequirementItems.map((item, index) => (
    <ListItem key={index}>
      <FiberManualRecord sx={listItemIconStyle} />
      <ListItemText primary={item.text} />
    </ListItem>
  ));

  const navigate = useNavigate();
  return (
    <>
      {openJobBoard ? (
        <StickyHeadTable IsJobDetailsPage="true" handleClose={handleClose} />
      ) : (
        <Typography sx={style.JobDescription} component="div">
          {
            <Grid container sx={{ paddingBottom: "22px" }}>
              <Grid item xs={12} md={6}>
                <Typography variant="h3">Job title</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography component="div" align="right">
                  <Button
                    variant="contained"
                    sx={{ size: "8px" }}
                    onClick={() => handleBackClick()}
                  >
                    Back to Job Board
                  </Button>
                </Typography>
              </Grid>
            </Grid>
          }
          <>
            <Typography variant="h5">Job Description</Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlineIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Job Title"
                  secondary="ReactJS Developer"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Location"
                  secondary="San Francisco, CA"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AccessTimeIcon />
                </ListItemIcon>
                <ListItemText primary="Type" secondary="Full-Time" />
              </ListItem>
            </List>
            <Typography variant="h5" sx={style.JobDetailstitle}>
              Job Details
            </Typography>
            <Typography variant="h6" sx={style.JobDetailstitle}>
              Responsibilities:
            </Typography>
            <List>
              <ListItem sx={{ display: "list-item" }}>
                <List alignItems="flex-start" dense>
                  {listResponsibilitesItems}
                </List>
              </ListItem>
              <Typography variant="h6" sx={style.JobDetailstitle}>
                Requirements:
              </Typography>
              <ListItem>
                <List sx={style.JobDetailsubtitle} dense>
                  {listRequirementItems}
                </List>
              </ListItem>
            </List>
            <Grid container>
              <Grid xs={12} md={12}>
                <Typography component="div" align="center">
                  <Button
                    variant="contained"
                    sx={{ margin: "8px" }}
                    onClick={() => navigate("/career/applynow")}
                  >
                    Apply
                  </Button>
                </Typography>
              </Grid>
            </Grid>
          </>
        </Typography>
      )}
    </>
  );
};

export default JobDetails;
