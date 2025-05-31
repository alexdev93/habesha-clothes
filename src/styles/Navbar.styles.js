export const appBarStyle = {
  backgroundColor: "#D9D9D9",
  height: "6.75rem",
};

export const toolbarStyle = {
  height: "100%",
  paddingLeft: 0,
  paddingRight: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  marginTop: "-0.5rem",
  width: "100%",
  position: "relative",
};

export const titleStyle = {
  flexGrow: { xs: 1, md: 0 },
  color: "black",
  fontSize: "1rem",
  fontWeight: "bold",
  textAlign: { xs: "center", md: "left" },
  order: { xs: 2, md: 1 },
  left: { xs: 0, md: "auto" },
  position: { xs: "absolute", md: "static" },
  width: { xs: "100%", md: "auto" },
  pointerEvents: "none",
};

export const navBoxStyle = {
  flexGrow: 0, // Don't take all available space
  justifyContent: { xs: "center", md: "flex-end" }, // Right align on desktop
  display: { xs: "none", md: "flex" },
  order: 2,
  mr: { md: 2 }, // Add some right margin on desktop if needed
};

export const iconButtonStyle = {
  display: { xs: "flex", md: "none" },
  order: { xs: 1, md: 0 },
  zIndex: 2,
  ml: { xs: 1, md: 0 },
};

export const searchIconStyle = {
  color: "black",
  order: { xs: 3, md: 3 },
  display: "flex",
  position: { xs: "relative", md: "static" }, // static on desktop
  left: { xs: 0, md: "auto" },
  top: { xs: 0, md: "auto" },
  transform: { xs: "none", md: "none" },
  ml: { xs: "auto", md: "auto" }, // push to far right on desktop
};

export const drawerBoxStyle = {
  width: { xs: "100vw", md: 250 },
  height: { xs: "100%", md: "auto" },
  backgroundColor: "#D9D9D9", // Always match AppBar color
  overflowY: "auto",
  overflowX: "hidden",
};

export const getButtonStyle = (isActive) => ({
  color: "black",
  fontWeight: "normal",
  fontSize: { xs: "1rem", md: "0.85rem" }, // Smaller font on desktop
  borderBottom: isActive ? "2px solid black" : "none",
  margin: { xs: "0 8px", md: "0 10px" }, // Less space between items on desktop
  "&:hover": { backgroundColor: "#D9D9D9" },
  "@media (max-width:899px)": {
    color: "white",
    borderBottom: isActive ? "2px solid white" : "none",
  },
});
