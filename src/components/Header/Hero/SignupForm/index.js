import React from "react";
import "./style.css";
import { makeStyles } from "@material-ui/core";
import MainButton from "../../../MainButton";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import TextField from "@material-ui/core/TextField";

const useStyle = makeStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#fff",
      marginBottom: "25px",
      borderRadius: "40px",
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgba(0, 0, 0, 0.23)",
      },
      "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderWidth: "1px",
        borderColor: "#0D1128",
      },
    },
    "& .MuiOutlinedInput-input": {
      padding: "14px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      padding: "0 28px",
      transition: "0.2s",
    },
    "& .MuiInputLabel-root": {
      transform: "translate(34px, -6px) scale(0.75)",
    },
  },
  sendButton: {
    "& .MuiIconButton-root": {
      backgroundColor: "#fd5f00",
      borderRadius: "4px",
      width: "40px",
      height: "40px",
    },
  },
});

function SignupForm() {
  const classes = useStyle();
  return (
    <div className="signup-form">
      <h2 className="signup-title">Register Now</h2>
      <form className={classes.root}>
        <TextField
          type="text"
          label="Username"
          placeholder="John Doe"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          type="email"
          label="Email Address"
          placeholder="johndoe@gmail.com"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          type="password"
          label="Password"
          placeholder="Password"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          type="password"
          label="Confirm Password"
          placeholder="Confirm Password"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />

        <MainButton text={<SendRoundedIcon />} isSignup />
      </form>
      <p className="have-account">
        Already have an account? <a href="/">Sign In</a>
      </p>
    </div>
  );
}

export default SignupForm;
