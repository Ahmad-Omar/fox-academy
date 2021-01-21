import React, { useState, useEffect } from "react";
import "./style.css";
import { makeStyles } from "@material-ui/core";
import MainButton from "../../../MainButton";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import TextField from "@material-ui/core/TextField";
import * as yup from "yup";
import PasswordStrength from "./PasswordStrength";

let schema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .required()
    .matches(
      "",
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Password does not match"),
});

const useStyle = makeStyles({
  root: {
    "& .MuiFormControl-root": { marginBottom: "25px", width: "100%" },
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#fff",
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
    "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
      borderColor: "#f44336 !important",
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
const initialError = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignupForm() {
  const classes = useStyle();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(initialError);
  const [isSubmit, setIsSubmit] = useState(false);

  const validateForm = async (data) => {
    try {
      await schema.validate(data, { abortEarly: false });

      setError(initialError);
      return data;
    } catch (err) {
      const getError = err.inner.reduce((acc, curr) => {
        acc[curr.path] = curr.message;
        return acc;
      }, {});
      setError(getError);
    }
  };
  const data = { username, email, password, confirmPassword };

  useEffect(() => {
    if (isSubmit) {
      validateForm(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username, email, password, confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    validateForm(data).then((data) => {
      // console.log(data);
    });
  };

  const settersObj = {
    username: setUsername,
    email: setEmail,
    password: setPassword,
    confirmPassword: setConfirmPassword,
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    settersObj[name](value);
  };

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
          value={username}
          name="username"
          onChange={handleChange}
          error={error.username ? true : false}
          helperText={error.username ? error.username : ""}
          // error
          // helperText="Incorrect entry."
        />
        <TextField
          type="email"
          label="Email Address"
          placeholder="johndoe@gmail.com"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={email}
          name="email"
          onChange={handleChange}
          error={error.email ? true : false}
          helperText={error.email ? error.email : ""}
          // error
          // helperText="Incorrect entry."
        />
        <div className="password">
          <TextField
            type="password"
            label="Password"
            placeholder="Password"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            value={password}
            name="password"
            onChange={handleChange}
            error={error.password ? true : false}
            helperText={error.password ? error.password : ""}
            // error
            // helperText="Incorrect entry."
          />
          <PasswordStrength password={password} />
        </div>
        <TextField
          type="password"
          label="Confirm Password"
          placeholder="Confirm Password"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
          error={error.confirmPassword ? true : false}
          helperText={error.confirmPassword ? error.confirmPassword : ""}
          // error
          // helperText="Incorrect entry."
        />

        <MainButton
          text={<SendRoundedIcon />}
          isSignup
          onClick={handleSubmit}
        />
      </form>
      <p className="have-account">
        Already have an account? <a href="/">Sign In</a>
      </p>
    </div>
  );
}

export default SignupForm;
