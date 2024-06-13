import React from 'react';
import ReactDOM from "react-dom/client";
import Theme from "./theme/Theme";
import { ThemeProvider } from "@mui/material";
import Router from "./routes/routes";
import "typeface-poppins";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);
