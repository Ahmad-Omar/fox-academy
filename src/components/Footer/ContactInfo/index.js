import React from "react";
import "./style.css";
import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";

function ContactInfo() {
  return (
    <div className="questions">
      <h2 className="footer-heading">Have a Questions?</h2>
      <ul>
        <li>
          <LocationOnRoundedIcon />
          203 Fake St. Mountain View, San Francisco, California, USA
        </li>
        <li>
          <PhoneRoundedIcon />
          <a href="tel:+2 392 3929 210">+2 392 3929 210</a>
        </li>
        <li>
          <EmailRoundedIcon />
          <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>
        </li>
      </ul>
    </div>
  );
}

export default ContactInfo;
