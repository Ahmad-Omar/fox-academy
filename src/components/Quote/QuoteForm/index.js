import React from "react";
import "./style.css";
import { makeStyles, ThemeProvider } from "@material-ui/core";
import { theme } from "../../../theme";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import MainButton from "../../MainButton";

const useStyles = makeStyles({
  root: {
    "& .MuiInputLabel-formControl": {
      color: "#fff",
      "&::placeholder": {
        color: "#fff",
      },
    },
    "& .Mui-focused": {
      color: "rgb(255 255 255 / 50%)",
    },
    "& .MuiInput-underline": {
      "&:before": {
        borderColor: "rgb(255 255 255 / 18%)",
      },
      "&:after": {
        borderColor: "rgb(255 255 255 / 100%)",
      },
      "&:hover:not(.Mui-disabled):before": {
        borderColor: "rgb(255 255 255 / 50%)",
      },
    },
    "& .MuiInput-input": {
      color: "#fff",
    },
    "& .MuiSelect-select option": {
      color: "#000",
    },
    "& .MuiSelect-icon": {
      color: "rgb(255 255 255 / 80%)",
    },
  },
});

function QuoteForm() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <form
        noValidate
        autoComplete="off"
        className={`quote-form ${classes.root}`}
      >
        <TextField label="Fisrt Name" />
        <TextField label="Last Name" />
        <FormControl required>
          <InputLabel htmlFor="select-your-course">
            Select Your Course
          </InputLabel>
          <Select
            native
            name="select-course"
            inputProps={{
              id: "select-your-course",
            }}
          >
            <option aria-label="None" value="" />
            <option>Electrical Engineering</option>
            <option>Computer Engineering</option>
            <option>Industrial Engineering</option>
            <option>Civil Engineering</option>
          </Select>
          <FormHelperText></FormHelperText>
        </FormControl>
        <TextField label="Phone" />
        <TextField
          id="standard-textarea"
          label="Message"
          placeholder="Message"
          multiline
          rows={2}
        />
        <MainButton text="Request A Quote" size="big" />
      </form>
    </ThemeProvider>
  );
}

export default QuoteForm;
