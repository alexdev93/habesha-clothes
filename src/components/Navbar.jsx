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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
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
import { DesktopDressesDropdown } from "./NavbarDropdowns";
import { NavbarDrawerList } from "./NavbarDrawer";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [desktopDressesAnchorEl, setDesktopDressesAnchorEl] = useState(null);
  const [mobileDressesAnchorEl, setMobileDressesAnchorEl] = useState(null);
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Dresses", path: "/Envision", dropdown: true },
    { label: "Couples", path: "/Buddy" },
    { label: "Men's", path: "/Tribes" },
    { label: "Contact Us", path: "/signup" },
    { label: "About Us", path: "/about" },
    { label: "FAQ", path: "/faq" },
    { label: "Community", path: "/Community" },
  ];

  const dressesDropdown = [
    { label: "Wedding Dresses", path: "/dresses/wedding" },
    { label: "Casual Dresses", path: "/dresses/casual" },
    { label: "Traditional Dresses", path: "/dresses/traditional" },
  ];

  // Drawer and dropdown handlers
  const toggleDrawer = () => setOpen((prev) => !prev);
  const closeDrawer = () => setOpen(false);
  const handleDesktopDressesOpen = (event) =>
    setDesktopDressesAnchorEl(event.currentTarget);
  const handleDesktopDressesClose = () => setDesktopDressesAnchorEl(null);
  const handleMobileDressesOpen = (event) =>
    setMobileDressesAnchorEl(event.currentTarget);
  const handleMobileDressesClose = () => setMobileDressesAnchorEl(null);

  return (
    <>
      <AppBar position="fixed" sx={appBarStyle}>
        <Toolbar sx={toolbarStyle}>
          {/* Drawer toggler */}
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

          {/* Logo */}
          <Typography variant="h6" sx={titleStyle}>
            Hebasha cloth
          </Typography>

          {/* Nav links (desktop) */}
          <Box sx={navBoxStyle}>
            {navItems.map((item) =>
              item.dropdown ? (
                <React.Fragment key={item.label}>
                  <Button
                    color="inherit"
                    sx={getButtonStyle(location.pathname === item.path)}
                    onClick={handleDesktopDressesOpen}
                    endIcon={<KeyboardArrowDownIcon fontSize="small" />}
                  >
                    {item.label}
                  </Button>
                  <DesktopDressesDropdown
                    anchorEl={desktopDressesAnchorEl}
                    open={Boolean(desktopDressesAnchorEl)}
                    onClose={handleDesktopDressesClose}
                    dressesDropdown={dressesDropdown}
                  />
                </React.Fragment>
              ) : (
                <Button
                  key={item.label}
                  color="inherit"
                  component={Link}
                  to={item.path}
                  sx={getButtonStyle(location.pathname === item.path)}
                >
                  {item.label}
                </Button>
              )
            )}
          </Box>

          {/* Search icon */}
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
            top: "6.75rem",
            height: "calc(100vh - 6.75rem)",
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
              backgroundColor: "transparent",
            },
          },
        }}
      >
        <NavbarDrawerList
          navItems={navItems}
          dressesDropdown={dressesDropdown}
          mobileDressesAnchorEl={mobileDressesAnchorEl}
          handleMobileDressesOpen={handleMobileDressesOpen}
          handleMobileDressesClose={handleMobileDressesClose}
          closeDrawer={closeDrawer}
          drawerBoxStyle={drawerBoxStyle}
        />
      </Drawer>
    </>
  );
}
