import { createTheme, Theme } from "@mui/material";

export const theme: Theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#2A2A2A",
      paper: "#2A2A2A",
    },
    primary: {
      main: "#7762d2",
      dark: "#4437a0",
      light: "#aa90ff",
    },
  },
});
