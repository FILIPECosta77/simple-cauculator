import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#37474f",
      light: "#637077",
      dark: "#263137",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#0091ea",
      light: "#34a8ef",
      dark: "#0065a2",
      contrastText: "#ffffff",
    },
    error: {
      main: "#d42f2f",
      light: "#dc5858",
      dark: "#941f1f",
      contrastText: "#ffffff",
    },
    success: {
      main: "#2e7d32",
      light: "#599a5d",
      dark: "#205823",
      contrastText: "#ffffff",
    },
  },
});
