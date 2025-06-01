import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import {
  appBarStyle,
  toolbarStyle,
  titleStyle,
  navBoxStyle,
  iconButtonStyle,
  searchIconStyle,
  drawerBoxStyle,
  getButtonStyle,
} from "../styles/Navbar.styles";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Dresses", path: "/Envision" },
    { label: "Couples", path: "/Buddy" },
    { label: "Men's", path: "/Tribes" },
    { label: "Contact Us", path: "/signup" },
    { label: "About Us", path: "/about" },
    { label: "FAQ", path: "/faq" },
    { label: "Community", path: "/Community" },
  ];
  const toggleDrawer = () => setOpen((prev) => !prev);
  const closeDrawer = () => setOpen(false);

  const drawerList = (
    <Box sx={drawerBoxStyle}>
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.label}
            component={Link}
            to={item.path}
            onClick={closeDrawer}
          >
            <ListItemText primary={item.label} sx={{ color: "black" }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={appBarStyle}>
        <Toolbar sx={toolbarStyle}>
          {/* Drawer toggler (menu or close icon) */}
          <IconButton
            color="inherit"
            edge="start"
            sx={iconButtonStyle}
            onClick={toggleDrawer}
          >
            {open ? (
              <CloseIcon sx={{ color: "black" }} />
            ) : (
              <MenuIcon sx={{ color: "black" }} />
            )}
          </IconButton>

          {/* Logo (center on mobile, left on desktop) */}
          <Typography variant="h6" sx={titleStyle}>
            Hebasha cloth
          </Typography>

          {/* Nav links (hidden on mobile, middle on desktop) */}
          <Box sx={navBoxStyle}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                color="inherit"
                component={Link}
                to={item.path}
                sx={getButtonStyle(location.pathname === item.path)}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Search icon (right on both, but only visible on mobile and desktop as needed) */}
          <IconButton sx={searchIconStyle} size="large">
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={open}
        onClose={closeDrawer}
        PaperProps={{
          sx: {
            width: "100vw",
            top: "6.75rem", // Start below the AppBar
            height: "calc(100vh - 6.75rem)", // Fill the rest of the screen
            left: 0,
            position: "relative",
            backgroundColor: "#D9D9D9",
            boxSizing: "border-box",
          },
        }}
        ModalProps={{
          keepMounted: true,
          BackdropProps: {
            sx: {
              backgroundColor: "transparent", // <--- This removes the dark overlay
            },
          },
        }}
      >
        <Box sx={drawerBoxStyle}>{drawerList}</Box>
      </Drawer>
    </>
  );
}
