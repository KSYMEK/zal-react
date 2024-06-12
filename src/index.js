import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const themeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#bb453a",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#581414",
      paper: "#ffffff",
    },
  },
  typography: {
    h3: {
      fontFamily: "Roboto",
      fontSize: "1.9rem",
      fontWeight: 600,
      lineHeight: 1.98,
    },
    button: {
      fontSize: "2.3rem",
    },
  },
};
const theme = createTheme(themeOptions);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
