import React, { useState } from "react";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export function NavbarDrawerList({
  navItems,
  dressesDropdown,
  closeDrawer,
  drawerBoxStyle,
}) {
  const [dressesOpen, setDressesOpen] = useState(false);

  return (
    <Box sx={drawerBoxStyle}>
      <List>
        {navItems.map((item) =>
          item.dropdown ? (
            <React.Fragment key={item.label}>
              <ListItem
                button
                onClick={() => setDressesOpen((open) => !open)}
                sx={{ pl: 1 }}
              >
                <Button
                  endIcon={<KeyboardArrowDownIcon fontSize="small" />}
                  sx={{
                    color: "black",
                    justifyContent: "flex-start",
                    width: "100%",
                  }}
                >
                  {item.label}
                </Button>
              </ListItem>
              <Collapse in={dressesOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {dressesDropdown.map((sub) => (
                    <ListItem
                      button
                      key={sub.label}
                      component={Link}
                      to={sub.path}
                      onClick={closeDrawer}
                      sx={{ pl: 4 }}
                    >
                      <ListItemText
                        primary={sub.label}
                        sx={{ color: "black" }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ) : (
            <ListItem
              button
              key={item.label}
              component={Link}
              to={item.path}
              onClick={closeDrawer}
              sx={{ pl: 2 }}
            >
              <ListItemText primary={item.label} sx={{ color: "black" }} />
            </ListItem>
          )
        )}
      </List>
    </Box>
  );
}
