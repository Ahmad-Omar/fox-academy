import React from "react";
import zxcvbn from "zxcvbn";

function PasswordStrength(props) {
  const passwordScore = zxcvbn(props.password).score;
  // console.log(passwordScore);

  const passwordColor = {
    0: "none",
    1: "red",
    2: "#FFC107",
    3: "#FFC107",
    4: "green",
  };

  const passwordLabel = {
    0: "",
    1: "Too weak",
    2: "Could be stronger",
    3: "Could be stronger",
    4: "Strong",
  };

  const progressContainerStyle = {
      backgroundColor: "rgb(232 232 232)",
      width: "87%",
      height: "4px",
      borderRadius: "4px",
      margin: "6px auto 10px",
      position: "absolute",
      bottom: "5px",
      left: "0",
      right: "0",
    },
    progressBar = {
      backgroundColor: `${passwordColor[passwordScore]}`,
      width: `${(passwordScore * 100) / 4}%`,
      height: "4px",
      borderRadius: "4px",
      transition: "width 0.5s ease",
    };
  return (
    <div style={progressContainerStyle}>
      <div style={progressBar}></div>
      <p
        style={{
          color: passwordColor[passwordScore],
          textAlign: "right",
          fontSize: "12px",
        }}
      >
        {passwordLabel[passwordScore]}
      </p>
    </div>
  );
}

export default PasswordStrength;
