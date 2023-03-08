import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

const AppHeaderBar = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1, mb: 8 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PisatForms
          </Typography>
          <Button color="inherit" onClick={() => navigate("/remote")}>
            Remote
          </Button>
          <Button color="inherit" onClick={() => navigate("/login")}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export { AppHeaderBar };
