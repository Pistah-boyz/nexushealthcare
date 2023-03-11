import React, { useState } from "react";
import { Button, Grid, Paper, Typography, TextField } from "@mui/material";
import JobBoardTable from "./JobBoardTable";

const style = {
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
  jobbformfield: {
    margin: "auto",
    width: "60%",
  },
};
const JobBoard = () => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [searchval, setSearchValue] = useState("");
  const onKeyWordChange = (e) => {
    const keyword = e.target.value;
    setKeyword(keyword);
  };
  const onLocationChange = (e) => {
    const location = e.target.value;
    setLocation(location);
  };

  const onSearch = () => {
    setSearchValue(keyword);
  };

  return (
    <>
      <Typography
        component="div"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        Don't see any current opportunities that meet your requirements?
        <a href="#">&nbsp;Submit your information for future opportunities.</a>
      </Typography>
      <Typography component="div" sx={style.root}>
        <Grid container justify="center" spacing={3} sx={style.jobbformfield}>
          <Grid item xs={12} md={4}>
            <Paper className={style.paper}>
              <TextField
                fullWidth
                label="Keyword"
                placeholder="Keyword"
                value={keyword}
                onChange={(e) => onKeyWordChange(e)}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={style.paper}>
              <TextField
                fullWidth
                label="Location"
                placeholder="Search"
                value={location}
                onChange={(e) => onLocationChange(e)}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button
              variant="contained"
              sx={{
                borderRadius: "5px",
                backgroundColor: "#28A19A",
                color: "#fff",
              }}
              onClick={() => onSearch()}
            >
              <Typography
                component="span"
                sx={{
                  width: "150px",
                  height: "40px",
                  lineHeight: "40px",
                  textTransform: "none",
                }}
              >
                Search
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Typography>
      <JobBoardTable searchkeyval={searchval} />
    </>
  );
};

export default JobBoard;