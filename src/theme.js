import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FD6001",
      dark: "#FD6001",
    },
    action: {
      hover: "transparent",
    },
  },
  shape: {
    borderRadius: "40px",
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});
