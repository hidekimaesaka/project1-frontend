import { StrictMode } from "react";

import ReactDOM from "react-dom/client";

// setup app theme
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import DarkTheme from "./styles/theme";

import Routing from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />
      <Routing />
    </ThemeProvider>
  </StrictMode>
);
