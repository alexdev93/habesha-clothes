import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeContextProvider } from "./ThemeContext.jsx";
import { BrowserRouter } from "react-router-dom"; // Add this import

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeContextProvider>
  </StrictMode>
);
