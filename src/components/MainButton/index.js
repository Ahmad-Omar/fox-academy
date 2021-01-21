import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "../../theme";
import ArrowRightAltOutlinedIcon from "@material-ui/icons/ArrowRightAltOutlined";

const useStyles = makeStyles({
  root: {
    padding: "15px 25px",
    textTransform: "none",
    fontSize: "16px",
    border: "1px solid var(--orange-color)",

    "&:hover": {
      backgroundColor: "transparent",
      color: "var(--orange-color)",
    },
    ".MuiButton-label": {
      fontWeight: "400",
    },
  },
  smallButton: {
    padding: "4px 12px",
    fontWeight: "400",
  },
  bigButton: {
    fontWeight: "400",
    height: "60px",
  },
  sendButton: {
    width: "40px",
    minWidth: "30px",
    height: "36px",
    alignSelf: "flex-end",
    borderRadius: "4px",
    padding: "0",
  },
});

function MainButton(props) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disableElevation
        style={{ width: props.width }}
        onClick={props.onClick}
        className={`${classes.root} ${
          props.size === "small"
            ? classes.smallButton
            : "" || props.size === "big"
            ? classes.bigButton
            : "" || props.isSignup
            ? classes.sendButton
            : ""
        }`}
      >
        {props.text}
        {props.icon === "icon" ? <ArrowRightAltOutlinedIcon /> : ""}
      </Button>
    </ThemeProvider>
  );
}

export default MainButton;
