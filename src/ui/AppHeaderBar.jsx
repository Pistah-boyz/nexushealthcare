import React, { useState, useRef, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  CssBaseline,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Grid,
  Slide,
  Typography,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedinIcon,
  ArrowDropDown,
  PhoneOutlined as Phone,
  EmailOutlined as Email,
} from "@mui/icons-material";
import { Logo } from "../components/auth/Logo";
import { SlideComponent } from "../components/SlideComponent";
import { color } from "@mui/system";

const styles = {
  headerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    cursor: "pointer",
  },
  headerBoxIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.85rem",
    fontWeight: "500",
  },
  menu: {
    "& .MuiPaper-root": {
      width: "12%",
    },
  },
  c_icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const navItems = [
  {
    id: 1,
    navlabel: "Home",
    to: "/home",
    submenu: [],
  },
  {
    id: 2,
    navlabel: "About Us",
    to: "/about",
    submenu: [],
  },
  {
    id: 3,
    navlabel: "Healthcare Job Seekers",
    to: "/healthcarejobseekers",
    submenu: [],
  },
  {
    id: 4,
    navlabel: "Healthcare Facilities",
    to: "/healthcarefacilities",
    submenu: [],
  },
  {
    id: 5,
    navlabel: "Register Now",
    to: "/career/applynow",
    submenu: [],
  },
  {
    id: 6,
    navlabel: "Career",
    to: "/career",
    submenu: [
      {
        id: 1,
        navlabel: "Apply Now",
        to: "/career/applynow",
      },
      // {
      //   id: 2,
      //   navlabel: "Job Board",
      //   to: "/career/jobboard",
      // },
    ],
  },
  {
    id: 7,
    navlabel: "Contact",
    to: "/contact",
    submenu: [],
  },
];

const drawerWidth = 240;
const browserWindow = window;

const AppHeaderBar = ({ window }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map(({ id, navlabel, to }) => (
          <ListItem key={id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link to={to} className="navbar-link_mobile">
                {navlabel}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const onNav = (to) => {
    navigate(to);
    setAnchorEl(null);
  };

  const handlePhoneNumberClick = () => {
    browserWindow.open("tel:" + "404-806-8164", "_self");
  };

  const handleMailClick = () => {
    browserWindow.open("mailto:" + "info@nexusstaffingsolution.ca", "_self");
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          display: { xs: "none", sm: "none", md: "block", lg: "block" },
          padding: "8px",
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={12}
        >
          <Grid item xs={4}>
            <SlideComponent direction="right">
              <Box sx={styles.headerBoxIcon}>
                <Phone />
                <Box
                  sx={{ mx: 1, cursor: "pointer" }}
                  onClick={handlePhoneNumberClick}
                >
                  404-806-8164
                </Box>
                <Email />
                <Box
                  sx={{ mx: 1, cursor: "pointer" }}
                  onClick={handleMailClick}
                >
                  info@nexusstaffingsolution.ca
                </Box>
              </Box>
            </SlideComponent>
          </Grid>
          <Grid item xs={4}>
            <Box sx={styles.headerBox} onClick={() => navigate("/home")}>
              <Logo />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <SlideComponent direction="left">
              <Box sx={{ display: "flex", mx: 20 }}>
                <IconButton
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
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav" sx={{ top: "15%" }} position="sticky">
          <Toolbar
            sx={{
              justifyContent: {
                xs: "flex-end",
                sm: "flex-end",
                md: "center",
                lg: "center",
              },
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map(({ id, navlabel, to, submenu }) =>
                submenu.length === 0 ? (
                  <Link to={to} className="navbar-link" key={id}>
                    {navlabel}
                  </Link>
                ) : (
                  <Fragment key={id}>
                    <Button
                      endIcon={<ArrowDropDown />}
                      id="basic-button"
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      sx={{ color: "#fff" }}
                    >
                      {navlabel}
                    </Button>
                    {open && (
                      <Menu
                        sx={styles.menu}
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        {submenu.map(({ id, navlabel, to }) => (
                          <MenuItem key={id} onClick={() => onNav(to)}>
                            {navlabel}
                          </MenuItem>
                        ))}
                      </Menu>
                    )}
                  </Fragment>
                )
              )}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          display: { xs: "block", sm: "block", md: "none", lg: "none" },
        }}
      >
        <Box sx={styles.headerBox}>
          <Logo />
        </Box>
      </Box>
    </>
  );
};

export { AppHeaderBar };
