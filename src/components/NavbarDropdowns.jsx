import React from "react";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export function DesktopDressesDropdown({
  anchorEl,
  open,
  onClose,
  dressesDropdown,
}) {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "left" }}
    >
      {dressesDropdown.map((sub) => (
        <MenuItem
          key={sub.label}
          component={Link}
          to={sub.path}
          onClick={onClose}
        >
          {sub.label}
        </MenuItem>
      ))}
    </Menu>
  );
}

export function MobileDressesDropdown({
  anchorEl,
  open,
  onClose,
  dressesDropdown,
  closeDrawer,
}) {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
    >
      {dressesDropdown.map((sub) => (
        <MenuItem
          key={sub.label}
          component={Link}
          to={sub.path}
          onClick={() => {
            onClose();
            closeDrawer();
          }}
        >
          {sub.label}
        </MenuItem>
      ))}
    </Menu>
  );
}
