import * as React from "react";
import { useNavigate } from "react-router-dom";
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
  Button,
  Grid,
  Slide,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedinIcon,
} from "@mui/icons-material";
import { Logo } from "../components/auth/Logo";

const styles = {
  headerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
  },
};

const navItems = ["Home", "About", "Career", "Contact"];

const drawerWidth = 240;

const AppHeaderBar = ({ window }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navigate = useNavigate();

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

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
              <Box sx={styles.headerBox}>404-806-8164</Box>
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
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "#fff" }}>
                  {item}
                </Button>
              ))}
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
