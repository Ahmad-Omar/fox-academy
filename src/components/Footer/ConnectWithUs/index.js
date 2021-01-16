import React from "react";
import "./style.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

function ConnectWithUs() {
  return (
    <div className="connect">
      <h2 className="footer-heading" style={{ marginBottom: "16px" }}>
        Connect With Us
      </h2>
      <div className="social-links">
        <ul>
          <li>
            <a href="/">
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a href="/">
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="/">
              <InstagramIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ConnectWithUs;
