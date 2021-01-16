import React from "react";
import "./style.css";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";

function PhoneNumber() {
  return (
    <div className="phone">
      <PhoneInTalkIcon />
      <span>+43 4566 7788 2457</span>
    </div>
  );
}

export default PhoneNumber;
