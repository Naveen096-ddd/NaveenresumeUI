import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./navbar.css";
import Home from "./pages/Homepage/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skill";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Project";
const drawerWidth = 240;
const navItems = ["Home", "About", "Projects", "Skills", "Contact"];
const navLinks = {
  Home: "home",
  About: "about",
  Projects: "project",
  Skills: "skill",
  Contact: "contact"
};
function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Naveen Menda
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => handleScroll(navLinks[item])}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} className="navbarmain">
      <CssBaseline />
      <AppBar
          component="nav"
          sx={{
            backgroundColor: "#000",
            borderRadius:'10px',
            width: "100%",
            boxShadow: "0px 4px 30px 0px",
            height: { xs: "50px", sm: "60px", md: "90px" },
            fontSize: { xs: "18px", sm: "20px", md: "24px" },
            transition: "height 0.3s ease"
          }}
        >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            className="navbar"
            sx={{
              display: "block",
              padding: "10px",
              textAlign: { xs: "center", sm: "left" },
              flexGrow: 1,
              marginTop: { xs: 0, sm: "10px" }
            }}
          >
            <span className="navbarhead">Naveen Menda</span>
          </Typography>
          <Box
            sx={{ display: { xs: "none", sm: "block", marginTop: "10px" } }}
            className="navitems"
          >
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: "#fff" }}
                onClick={() => handleScroll(navLinks[item])}
              >
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
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func
};

export default DrawerAppBar;
