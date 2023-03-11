import React, { useState, useRef } from "react";
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
  PhoneOutlined,
  EmailOutlined,
} from "@mui/icons-material";
import { Logo } from "../components/auth/Logo";

const styles = {
  headerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
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
    navlabel: "Career",
    to: "/career",
    submenu: [
      {
        id: 1,
        navlabel: "Apply Now",
        to: "/career/applynow",
      },
      {
        id: 2,
        navlabel: "Job Board",
        to: "/career/jobboard",
      },
    ],
  },
  {
    id: 4,
    navlabel: "Contact",
    to: "/contact",
    submenu: [],
  },
];

const drawerWidth = 240;

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
            <Slide
              direction="right"
              timeout={1000}
              in={true}
              mountOnEnter
              unmountOnExit
            >
              <Box sx={styles.headerBoxIcon} className="c_mview">
                <Box style={styles.c_icon} sx={{ mx: 1 }}>
                  <PhoneOutlined />
                  &nbsp;404-806-8164
                </Box>
                <Box style={styles.c_icon} sx={{ mx: 1 }}>
                  <EmailOutlined />
                  &nbsp;info@nexusstaffingsolution.ca
                </Box>
              </Box>
            </Slide>
          </Grid>
          <Grid item xs={4}>
            <Box sx={styles.headerBox}>
              <Logo />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Slide
              direction="left"
              timeout={1000}
              in={true}
              mountOnEnter
              unmountOnExit
            >
              <Box sx={{ display: "flex" }}>
                <IconButton>
                  <FacebookIcon />
                </IconButton>

                <IconButton>
                  <InstagramIcon />
                </IconButton>

                <IconButton>
                  <TwitterIcon />
                </IconButton>

                <IconButton>
                  <LinkedinIcon />
                </IconButton>
              </Box>
            </Slide>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav" sx={{ top: "15%" }} position="relative">
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
                  <>
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
                  </>
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
