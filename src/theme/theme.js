import { createTheme } from "@mui/material/styles";

// Light Theme
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2", // Blue
    },
    secondary: {
      main: "#dc004e", // Pink
    },
    background: {
      default: "#fafafa", // Light gray background
      paper: "#ffffff", // Paper background for cards, dialogs
    },
    text: {
      primary: "#000000", // Black text for better contrast
      secondary: "#555555", // Lighter gray text
    },
    action: {
      active: "#1976d2", // Active icon color
      hover: "#e3f2fd", // Hover effect on icons, buttons, etc.
      selected: "#90caf9", // Selected state for items
      disabled: "#bdbdbd", // Disabled state color
    },
  },
});

// Dark Theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9", // Light blue
    },
    secondary: {
      main: "#f48fb1", // Light pink
    },
    background: {
      default: "#121212", // Dark background
      paper: "#1d1d1d", // Dark paper background for cards, dialogs
    },
    text: {
      primary: "#ffffff", // White text for better contrast in dark mode
      secondary: "#bbbbbb", // Light gray text
    },
    action: {
      active: "#90caf9", // Active icon color
      hover: "#0d47a1", // Hover effect on icons, buttons, etc.
      selected: "#64b5f6", // Selected state for items
      disabled: "#616161", // Disabled state color
    },
  },
});
